# Zuri Task 6

## Zuri CRUD Database operations
This is a simple express server, for building CRUD Database operations.

# Routes Documentation

## Setup both Development and Production
### Development
Clone this repository and run `npm install` to install all the packages

Start the server by running `npm run dev`

### Production
This application is deployed to heroku on this url `https://toheeb-zuri-task-6.herokuapp.com`. Below is the Route Documentation

Base url: `https://toheeb-zuri-task-6.herokuapp.com/data`

|Method|Body|Response|Parameters|Status Code|
|-|-|-|-|-|
|GET|null|{message: "success", data:[ {name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}]}|null|200(ok) / 400(bad request)|
|POST|{message: "success", data: {name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|{message: "success", data: {name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|null|201(created) / 400(bad request)|
|PATCH|{name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|{message: "success", data: {name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|id|200(ok) / 400(bad request)|
|DELETE|null|{message: "success", data: {name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|id|200(ok) / 400(bad request)|