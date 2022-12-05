//create a server
// http, url, path, os

const http = require('http');

const server = http.createServer((req, res) => {
    const endpoint = req.rurl;

    //landing page 
    if (endpoint === '/') {
        res.end('we are in the Book of Life page');
    } else if (endpoint == '/about') {
      //about page for Book of Life
      res.end('Book Of Life abot page');
    } else if (endpoint === '/give') {
      //give the Book of Life page
      res.end('Give a Book here');
    } else {
      //404 page 
      res.end('Oops!... Page not found');
    }
});


const port = 4455;
const hostname = '127.0.0.1';

// listen to server, Pot number, Create an endpoint
server.listenerCount(port, hostname, () => {
  console.log('Server is up and running');
});

