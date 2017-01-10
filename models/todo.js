const uuidGenerator = require('uuid/v4')
var fs = require("fs");

let todos = []
var idVal=1
// CREATE - params should be an object with keys for name, description and completed
function create (params) {
  var uuid = uuidGenerator()
  if(params.hasOwnProperty('name')){
    if(params.name.length>5){
      var newTodo = {
        id_num: idVal,
        name: params.name,
        description: params.description || 'Just some default value',
        completed: params.completed || false,
        _id: uuid
      }
      todos.push(newTodo)
      idVal++
    }
  }
  fs.writeFile( "saved.json", JSON.stringify(todos), "utf8", yourCallback );
  return todos
}
// create({name: 'wsdgs', description:'fgsr'})
//console.log(todos);

//READ (list & show)
function list () {
  return todos
}

function show (id) {
  for(var key in todos){
    if(todos[key].id_num===id){
      return todos[key]
    }
  }
  return null
}

// UPDATE - params should be an object with KVPs for the fields to update
function update (id, updatedParams) {
  if(updatedParams.name!='' && updatedParams.name.length>5){
  for(var key in todos){
    if(todos[key].id_num===id){
      todos[key].name = updatedParams.name
      todos[key].description= updatedParams.description
      todos[key].completed= updatedParams.completed
      return true
    }
  }
}
  return false
}

// DESTROY (destroy & destroyAll)
function destroy (id) {
  for(var key in todos){
    if(todos[key].id_num===id){
      todos.splice(key,1)
      return true
    }
  }
  return false
}
function destroyAll () {
  todos=[]
  return true
}



module.exports = {
  create: create,
  list: list,
  show: show,
  update: update,
  destroy: destroy,
  destroyAll: destroyAll
}
