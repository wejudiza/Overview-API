<!-- # Products-API
back-end for Products for Project-Atelier -->
## Api instance
1. 54.215.67.39 (private --> 172.31.30.137)
2. 13.52.184.234  --> 172.31.14.167
3. 54.183.27.152 --> 172.31.10.157

## Postgres instance
54.193.18.226

## nginx instance
54.219.185.189

## Install dependencies
npm install

## Start server
npm start

## To run test:
npm test

## AWS
bash login.sh
docker exec -it postgres-0 bash
psql -U postgres

## Take docker image
1. docker build -t justinedavid/api-products:v1 .
2. docker push justinedavid/api-products:v1
3. log into ec2 instance
4. docker pull justinedavid/api-products:v1
5. docker run --name api-0 -e POSTGRES_PASSWORD=password -d -p 54.215.67.39:8080:8080 justinedavid/api-products:v1
docker run --name api-1 -e POSTGRES_PASSWORD=password -d -p 172.31.10.157:8080:8080 justinedavid/api-products:v1

## Node setup on ec2 instance
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
2. . ~/.nvm/nvm.sh
3. nvm install node
4. node -e "console.log('Running Node.js ' + process.version)"

## Install docker on ec2 instance
1. curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
2. sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
3. sudo apt-get update
4. sudo apt-get install -y docker-ce
5. sudo usermod -aG docker ${USER}
6. log out and log back in

## Docker image (inside ec2)
1. docker pull [repository]
2. docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres

## Enter docker image postgres (inside ec2)
1. docker exec -it postgres-0 bash
2. psql -U postgres

## Connect to postgres inside docker container from local machine
1. psql -h 54.193.18.226 -p 5432 -U postgres

## Run pgadmin
1. docker run --rm -p 5050:5050 thajeztah/pgadmin4
2. access through  http://localhost:5050

## Copy table from database to another database
pg_dump -U postgres -h localhost -t styles_results atelier-products | psql docker_postgres_products -U postgres -h 54.193.18.226

## nginx
1. sudo apt update
2. sudo apt install nginx
3. sudo ufw app list
4. sudo ufw allow 'Nginx HTTP'
5. sudo ufw allow 'OpenSSH'
6. sudo ufw enable
<!-- 7. sudo ufw default deny
8. sudo iptables -L -->
9. sudo ufw status <!--(check status)-->
10. systemctl status nginx <!--(check status)-->
11. http://54.219.185.189 <!--(in browser)-->
12. COMMANDS:
    sudo systemctl stop nginx <!--(to stop your web server)-->
    sudo systemctl start nginx <!--(to start the web server when it is stopped)-->
    sudo systemctl restart nginx <!--(To stop and then start the service again)-->
    sudo systemctl reload nginx <!--(If you are simply making configuration changes, Nginx can often reload without dropping connections)-->
    sudo systemctl disable nginx <!--(Nginx is configured to start automatically when the server boots. If this is not what you want, you can disable this behavior by typing)-->
    sudo systemctl enable nginx <!--(To re-enable the service to start up at boot)-->
13. cd /etc/nginx/
14. sudo vim nginx.conf <!--(configure nginx)-->
      sudo touch /etc/nginx/sites-available/[vhost]
      sudo ln -s /etc/nginx/sites-available/[vhost] /etc/nginx/sites-enabled

      sudo ln -s /etc/nginx/sites-available/54.183.27.152 /etc/nginx/sites-enabled/54.183.27.152
      sudo ln -s /etc/nginx/sites-available/13.52.184.234 /etc/nginx/sites-enabled/13.52.184.234
15. sudo tail -30 /var/log/nginx/error.log <!--(error log)-->
16. sudo nginx -t <!--(test config file)-->

server 54.215.67.39:8081;

## Check docker container requests
docker logs -f <container_ID>