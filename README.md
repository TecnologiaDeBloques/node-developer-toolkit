# Econic Developer Tools

Simple node utilities to speed up local development with Econic services.

## Requirements

`< Node 13.8.0`

## Setup

Install npm libs:
```
npm install
```

Run the web server:
```
node main.js
```

## Usage

### Generating a asignature

Sending a `GET` request to `localhost:8081/signature/<your private key>` will
return an Econic Signature valid for 30 seconds.

## Config

By default the application exposes a REST interface in port `8081`. 
You can change this port in the `main.js` file.


