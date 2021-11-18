class TodoModel { 
    description;
    name;
    constructor(data = {}){
        this.description = data.description || '';
        this.name = data.name || '';
    }
}

module.exports = TodoModel;