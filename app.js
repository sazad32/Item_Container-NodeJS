console.log("Hello");

const notes = require('./container.js')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');



//Command line help argument output
const argv = yargs.command('add','Add a new Item',{
    title: {describe:'Name of the Item',demand: true,alias: 't'},
    content: {describe: 'Content of the Item', demand:true, alias: 'c'} 
    }).command('view','Show the items in the holder').command('remove','Remove a selected item by entering the title',{
        title: {describe:'Name of the Item',demand: true,alias: 't'}    
    }).command('get','Get back the content of a sepcified item by entering the title',{
        title: {describe:'Name of the Item',demand: true,alias: 't'}    
    }).help().argv;

var command = process.argv[2];

console.log("Command: ", command);
console.log("Yargs",argv)

//Commands funtion from the container file
if(command == 'add'){
    notes.add(argv.title,argv.content);
}else if(command == 'view'){
    notes.view();
}else if(command == 'remove'){
    notes.remove(argv.title);
}else if(command == 'get'){
    notes.getNote(argv.title);
}

