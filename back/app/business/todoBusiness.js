var TodoModel = require('../model/todoModel');

class TodoBusiness { 
    constructor(){
    }
    //create
    create(todo) {
        return new TodoModel(todo);
    }
    //delete
    delete(todo){
        
    }
    //update
    update(todo){

    }
    //get
    get(todo){
        
    }

}


module.exports = TodoBusiness;