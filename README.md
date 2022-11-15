### Yong's Mock-Up Digital Twins Project


Commands that always used:

To delete all **containers** including its volumes use:

```docker
docker rm -vf $(docker ps -aq)
```

To delete all the **images**,

```
docker rmi -f $(docker images -aq)
```

To build the project to become a image:

```
docker build -t <DOCKER_USERNAME>/<IMAGE_NAME>:<TAG> .
```
e.g., `docker build -t hyc0812/yong_dt:1.1 .`

To push an image to Docker Hub:

```
docker login
docker push <DOCKER_USERNAME>/<IMAGE_NAME>:<TAG>
```
e.g., `docker push hyc0812/yong_dt:1.1`


#### memo: image versions:


hyc0812/yong_dt:1.1 `"host": "host.docker.internal"`

hyc0812/yong_dt:1.1 `"host": "10.128.0.4"`
 
 
### GCP Compute Engine

External IP: 34.28.249.145 

Use this to luanch request.


