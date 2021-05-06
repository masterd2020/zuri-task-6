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

|Method|url|Body|Parameters|Response|Status Code|
|-|-|-|-|-|-|
|GET|https://toheeb-zuri-task-6.herokuapp.com/data|null|null|{message: "success", data:[ {name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}]}|200(ok) / 400(bad request)|
|POST|https://toheeb-zuri-task-6.herokuapp.com/data|{name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}|null|{message: "success", data: {name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|201(created) / 400(bad request)|
|PATCH|https://toheeb-zuri-task-6.herokuapp.com/data/id|{name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|id|{message: "success", data: {name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|200(ok) / 400(bad request)|
|DELETE|https://toheeb-zuri-task-6.herokuapp.com/data/id|null|id|{message: "success", data: {name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|200(ok) / 400(bad request)|