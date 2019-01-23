'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController.js');
  var cicdStatus = require('../controller/appController.js');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
   
   app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

      // cicd update db routes
   app.route('/status')
   .get(cicdStatus.update_status)
    .put(cicdStatus.get_status);
   
   app.route('/status/:stageId')
    .get(cicdStatus.update_status);

   app.route('/getList')
    .get(cicdStatus.get_list);
    };
  
 
