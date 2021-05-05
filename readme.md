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

`https://toheeb-zuri-task-6.herokuapp.com/data` is the base URL

|Method|Body|Response|Parameters|
|-|-|-|-|
|GET|null|{message: "success", data:[ {name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}]}|null|
|POST|{message: "success", data: {name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|{message: "success", data: {name: "Toheeb", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|null|
|PATCH|{name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|{message: "success", data: {name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|null|
|DELETE|null|{message: "success", data: {name: "Fasasi", email: "tohebayomide11@gmail.com", country: "Nigeria"}}|null|