const fs = require('fs');


var getFileContent = () =>{
    notes = [];
    try{
      var JSONString = fs.readFileSync('holder.json');
      notes = JSON.parse(JSONString);
      return notes;
    }catch(e){
      return notes;
    }
}

var duplicate = (title) => {    
    notes = getFileContent();
    notes.forEach(function(value){
        if(value.title === title){
            console.log('here')
            return true;  
        }
        else{
            return false;
        }
    });
}

var add = (title, content) =>{
    var newElement = {
        title,
        content
    };
    
    notes = getFileContent();
    exists = duplicate(title);
    if(exists === 1){
        notes.push(newElement);
        console.log("Adding File");
        fs.writeFileSync("holder.json",JSON.stringify(notes))        
    }else{
        console.log(`Already exists.`)
    }
    
    
}

var view = () => {
    console.log(getFileContent());    
}

var getNote = (title) =>{
    console.log("Getting..")
    notes = getFileContent();

    notes.forEach(function(value){
        if(value.title === title){
            console.log(`The content is ${value.content}`);  
        }
    });
    
}

var remove = (title) =>{
    newArray = []
    notes = getFileContent();
    notes.forEach(function(value){
        if(value.title !== title){
            newArray.push(value);  
        }
    });
    fs.writeFileSync("holder.json",JSON.stringify(newArray))    
}

module.exports={
    add,
    view,
    getNote,
    remove
    
};