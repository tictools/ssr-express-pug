# LETSDOO
## A personal tool for personal tasks

### Abstract
This project is a POC.
Its general purpose is to show a simple implementation of SSR using Node.

### Stack
----
![node](./static/images/node-logo.png)

**Node:** execution environment for server layer based on Javascript. [ [ official site ] ](https://nodejs.org/en/)

----
![express](./static/images/express-logo.jpg)

**Express:** compromised web framework, written in JavaScript and hosted within the NodeJS runtime environment. It provides small, robust tooling for HTTP servers, making it a great solution for single page applications, websites, hybrids or public HTTP APIs. [ [ npm repository ] ](https://www.npmjs.com/package/express)

----
![pug](./static/images/pug-logo.png)

**Pug:** high performance template engine implemented with JavaScript for Node.js and browsers.

### Data persisitence
As far as no DB storage is implemented in this project, data is persisted usin `cookie-session`. This module stores the session data on the client within a cookie. [ [ npm repository ] ](https://www.npmjs.com/package/cookie-session)

### Setup
1. Go to local root workspace.
2. Run `yarn start:dev-server`
3. Open browser and access to `localhost:3000`

### Tests
Tests are out of scope of this project
