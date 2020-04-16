# Econic Developer Tools

## Requirements

`< Node 13.8.0`

## Running

Exec the main file with `node main.js`

## Usage

By default the application exposes a REST interface in port `666`. 
You can change this port in the `main.js` file.

### Generating a asignature

Sending a `GET` request to `localhost:666/signature/<your private key>` will
return an Econic Signature valid for 30 seconds.
