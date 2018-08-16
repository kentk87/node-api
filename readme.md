---
layout: post
title:  "Docker Swarm Command"
date:   2018-08-13 17:40:00 +0800
category: DKOS/Docker
author: "Kent Kwong"
---
The below are the new commands introduced by Docker Swarm.

### Useful Docker Swarm Commands
Create Docker Swarm
> docker swarm init

Diaplay the Joining Token for another Docker Engine to join the Swarm
> docker swarm join-token worker (Join as worker)  
> docker swarm join-token manager (Join as Manager)

List all Nodes in Docker Swarm
> docker node ls

Remove a Node from Swarm
> docker node rm <node name / node id>

Leave a Swarm from a Node
> docker swarm leave (-f)

Prmote a Node from Worker to Manager
> docker node promote <node name / node id>

Demote a Node from Manager to Worker
> docker node demote <node name / node id>

Add a Label to a Node
> docker node update --label-add haproxy=true i3dkdev

Remove a Label from a Node
> docker node update --label-rm haproxy=true i3dkdev

Create Docker Config
> docker config create myhttpdConf httpd.conf

List Docker Config
> docker config ls

List the Docker Config Detail
> docker config inspect myhttpdConf

Remove Docker Config
> docker config rm myhttpdConf

Create a Service, Use the Config and Running in One Node
> docker service create --name myWeb --replicas 1 --config myhttpdConf i3dkdev.hkbn.com.hk:5001/myHttpd:2.4

Remove a Service
> docker service rm myWeb

Scaling a Service
> docker service scale myWeb=3

Create a Service, Use the Config and Running in All Node
> docker service create --name myWeb --mode global --config myhttpdConf i3dkdev.hkbn.com.hk:5001/myHttpd:2.4


List all Service
> docker service ls

Display the Service Logs
> docker service logs myWeb

Update the Image of a Service
> docker service update --image i3dkdev.hkbn.com.hk:5001/myHttpd:2.5 myWeb 

Create Overlay Network
> docker network create --driver overlay --internal --subnet=131.1.1.0/16 --attachable proxy_net

List Docker Secret
> docker secret ls

Create Docker Secret
> echo <secret> | docker secret create my_secret -   <br> 
> docker secret create my_secret ./secret.json  

Remove Docker Secret
> docker secret rm my_secret

Using Docker Secret
> docker service  create --name redis --secret my_secret_data redis:alpine  
