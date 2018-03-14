var fs, node_ssh, ssh, json_parse;
var log_path_remote = './html/var/log/credo_microservices.log';
var log_path_local = 'C:\\Users\\vladm\\Documents\\FrontProjects\\credo_logs\\logs\\credo_microservices.log'

node_ssh = require('node-ssh');
ssh = new node_ssh();
fs = require('fs');
jsonsafeparse = require('json-safe-parse');

var re_log = /(\{"method".*\})/gi;
var re_time = /^\[([\W\d]+)\]/gi;

ssh.connect({
    host: 'credo4.fortyfour.com',
    username: 'www-data',
    password: 'c0mm3rce'
    })
    .then(function() {
        ssh.getFile(log_path_local, log_path_remote)
          .then(function() {
                  console.log("The File's contents were successfully downloaded");
                }, 
                function(error) {
                  console.log("Something's wrong")
                  console.log(error)
                })
              }
        );

var credo_logs = fs.readFileSync(log_path_local, 'utf8').split('\n').slice(-5);

function parse_logs(array) {
  var parsed_logs = [];
  for (i = 0; i < array.length; i++) {
      if (array[i] == undefined || array[i].length == 0) {
          continue;
      }
      /*log = array[i].match(re_log);*/
      log = jsonsafeparse(array[i].match(re_log), 'replace');
      time = array[i].match(re_time);
      log_time = [time[0], log];
      parsed_logs.push(log_time);     
  }
  return parsed_logs;
}

console.log(parse_logs(credo_logs));