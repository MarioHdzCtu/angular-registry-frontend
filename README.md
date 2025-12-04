
# Docker Registry Frontend

Angular App to graphically access the images in a private docker registry.



## Appendix

This project was created with the intention of accessing the images stored in a custom private docker registry instance that is using the registry:2 image. As of today it lists the images and access the manifests for information like digest, architecture and OS of each of them.


## Authors

- [@MarioHdzCtu](https://github.com/MarioHdzCtu)

##Deployment

**Local deployment**


Create a src/proxy.conf.json with the following content to act as nginx reverse proxy.

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

`ng serve --proxy-config ./src/proxy.conf.json -c [development | staging | production]`


**Docker deployment**

Build image with normal command 

`
docker build -t <tag-your-image>
`

Run command with environment variable for docker registry and binding port for nginx.

`
docker run -d -p 80:80 -e REGISTRY_URL="<your-registry-IP-and-port>" --name <your-container-name>
`

