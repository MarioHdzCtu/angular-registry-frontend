
# Docker Registry Frontend

Angular App to graphically access the images in a private docker registry.



## Appendix

This project was created with the intention of accessing the images stored in a custom private docker registry instance that is using the registry:2 image. As of today it lists the images and access the manifests for information like digest, architecture and OS of each of them.


## Authors

- [@MarioHdzCtu](https://github.com/MarioHdzCtu)

##Deployment

**Local deployment**

Before deploying locally you need to update the src/environments/environment.ts file with the following structure:

`
export const environment = {
    server_url: The server IP in which the Angular App is running, if using local can be used with localhost. [http](http://XXXX.XXXX.XXXX.XXXX:XXXX)
};
`

Then create a src/proxy.conf.json with the following content.

`
{
    "/v2/_catalog": {
      "target": docker registry IP address with port. [http](http://XXXX.XXXX.XXXX.XXXX:XXXX),
      "secure": false,
      "changeOrigin": true
    },
    "/v2/*/tags/list":{
      "target": docker registry IP address with port. [http](http://XXXX.XXXX.XXXX.XXXX:XXXX),
      "secure": false,
      "changeOrigin": true
    },
    "/v2/*/manifests/*":{
      "target": docker registry IP address with port. [http](http://XXXX.XXXX.XXXX.XXXX:XXXX),
      "secure": false,
      "changeOrigin": true
    }
  }
`

To run the application can be done with the Angular CLI command 

`ng serve --proxy-config ./src/proxy.conf.json`


**Docker deployment**

Before deploying with docker you need to update the src/environments/environment.ts file with the following structure either manually or via CI tools:

`
export const environment = {
    server_url: The server IP in which the Angular App is running, if using local can be used with localhost. [http](http://XXXX.XXXX.XXXX.XXXX:XXXX) - if using nginx port will be the nginx's listening port not the angular app port (eg. 80)
};
`

Build image with normal command 

`
docker build -t <tag-your-image>
`

Run command with environment variable for docker registry and binding port for nginx.

`
docker run -d -p 80:80 -e REGISTRY_URL="<your-registry-IP-and-port>" --name <your-container-name>
`

