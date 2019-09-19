# UdG-CAES-sample-e2e-test

A demonstration end-to-end using [cypress javascript end to end testing framework](https://www.cypress.io)

## Usage

Make sure you have the required dependencies installed on your system:

* [Docker](https://docs.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [Git](https://git-scm.com)
* [Nodejs](https://nodejs.org)

Clone this repository

```
git clone git@github.com:victormartingarcia/UdG-CAES-sample-e2e-test.git
```

Go to base repo folder and install required javascript packages

```
cd UdG-CAES-sample-e2e-test
npm install
```

Run the docker containers

```
docker-compose up
```

That should have set up a toy website with 3 sections:

* [http://127.0.0.1:5000](http://127.0.0.1:5000) - Homepage with a fancy welcome text
* [http://127.0.0.1:5000/insert_fake_user](http://127.0.0.1:5000/insert_fake_user) - Inserts a user with a fake email into the database
* [http://127.0.0.1:5000/list_fake_users](http://127.0.0.1:5000/list_fake_users) - Print all users on the database


Open cypress runner, where we can run our e2e test [toy_website.spec.js](cypress/integration/toy_website.spec.js)

```
npm run cypress:open
```
