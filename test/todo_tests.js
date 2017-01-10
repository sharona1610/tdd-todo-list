const assert = require('assert')
const todos = require('../models/todo.js')

// Example Test - we expect that when we run destroyAll, it should return true to let us know it was successful
// assert.strictEqual( todos.destroyAll() , true, 'DestroyAll should return true, to indicate success')
// // We also expect the list should now be empty
// assert.strictEqual( todos.list().length , 0, 'List should be empty after deleting all TODOs')
// assert.strictEqual( todos.list().length , 0, 'List should be empty after deleting all TODOs')
assert.strictEqual( todos.create({name:'task number 1', description:'blah' , completed: true}).length, 1, 'New todo not added')
assert.strictEqual( todos.create({name:'task number 2', description:'blah' , completed: true})[0].hasOwnProperty('_id'), true, 'UUID not added')
assert.strictEqual( todos.create({name:'task number 3'}).length, 3, 'New todo not created with just name and default values for other')
assert.strictEqual( todos.create({description:'blah'}).length, 3, 'New todo created even with name not given')
assert.strictEqual( todos.create({name: '1234', description:'blah'}).length, 3, 'New todo created even with name not meeting required length')

assert.strictEqual(todos.list().length, 3, 'Function does not list')

assert.strictEqual(todos.show(2).id_num, 2, 'Function does not return the correct task')
assert.strictEqual(todos.show(6), null, 'Function does not return null')

assert(todos.update(2,{name: 'task number changed', description: 'blah', completed: false}),'Updation not successful')
assert(!todos.update(2,{name: 'task', description: 'blah', completed: false}),'Updation not successful')
assert(!todos.update(2,{name: '', description: 'blah', completed: false}),'Updation not successful')

assert(todos.destroy(2),'The task has not been deleted')
assert(!todos.destroy(7),'The task id does not exist, but the function deleted some id')

assert(todos.destroyAll(),'The todos list has not been emptied')
