describe("TodoModel", function(){ 
    var TodoModel = require('../../app/model/todoModel');
    var todo;

    beforeEach(function(){ 
        todo = new TodoModel({'description': 'hola'});
    })

    it("should create a todo", function(){
      expect(todo).toBeDefined();
    })
})