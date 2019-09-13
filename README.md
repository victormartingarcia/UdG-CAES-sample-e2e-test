# UdG-CAES-sample-e2e-test

A demonstration end-to-end test for `https://www.google.com` website, using [cypress javascript end to end testing framework](https://www.cypress.io), where we check whether UdG website ranks first on google for both `UdG` and `Universitat de Girona` keywords



## Usage

Make sure you have the required dependencies installed on your system:

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

Open cypress runner, where we can run our e2e test [udg_google_keywords.spec.js](cypress/integration/udg_google_keywords.spec.js)

```
npm run cypress:open
```
