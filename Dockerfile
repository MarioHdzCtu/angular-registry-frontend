# ----------------------------------------------------------------------
# Stage 1: Build the Angular App
# ----------------------------------------------------------------------
FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source code and run the production build
COPY . .

# Build the app using the production configuration
RUN npm run build -- --configuration=production

# ----------------------------------------------------------------------
# Stage 2: Serve with Nginx and dynamically inject config
# ----------------------------------------------------------------------
FROM nginx:stable-alpine as final

# Determine the correct path: check your angular.json or your 'dist' folder
# Example: /app/dist/your-project-name/browser
# Replace '<your-project-name>' with the actual name of your project folder in 'dist'.
COPY --from=builder /app/dist/angular-registry-frontend/browser /usr/share/nginx/html

# Copy the Nginx configuration TEMPLATE
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template

# Expose the standard HTTP port
EXPOSE 80

# The crucial CMD: Substitute environment variables in the config file at runtime,
# then start Nginx. We list all required variables for substitution.
CMD ["/bin/sh", "-c", "envsubst '$REGISTRY_URL $CATALOG_CONTEXT $TAGS_CONTEXT $MANIFESTS_CONTEXT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
