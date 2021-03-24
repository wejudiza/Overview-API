<!-- # Products-API
back-end for Products for Project-Atelier -->

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