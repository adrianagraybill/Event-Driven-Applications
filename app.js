'use strict';

const fs = require('fs');
const events = require('./events.js');
require('./logger.js');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { 
      events.emit('error', err)
    }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { 
        events.emit('error', err)
       }
      events.emit('success', `${file} Is Now Saved.`)
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
