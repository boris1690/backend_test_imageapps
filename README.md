## Project setup
```
npm install
```

### Run
```
node server.js
```

### Database

1.- Create database empty databse in Mysql <br />2.- Copy credentials in path app/config/db.config.js

```
module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "root",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

```
