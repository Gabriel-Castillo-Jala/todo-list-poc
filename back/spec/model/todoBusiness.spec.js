describe("TodoBusiness", function(){ 
    var TodoModel = require('../../app/model/todoModel');
    var TodoBusiness = require('../../app/business/todoBusiness');
    var todo;

    beforeEach(function(){ 
        todo = new TodoModel({'description': 'finish everything by tomorrow', 'name': 'Challenge'});
        todoBusiness = new TodoBusiness();
    })

    it("should create a todo", function(){
        let result = todoBusiness.create(todo);
        expect(result).toEqual(result);
    })
})