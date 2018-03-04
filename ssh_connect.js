var fs, node_ssh, ssh;


node_ssh = require('node-ssh');
ssh = new node_ssh();
fs = require('fs');

ssh.connect({
    host: 'credo4.fortyfour.com',
    username: 'www-data',
    password: 'c0mm3rce'
  }).then(function() {
      ssh.getFile('C:\\Users\\vladm\\Documents\\FrontProjects\\credo_logs\\logs\\credo_microservices.log', './html/var/log/credo_microservices.log').then(function(Contents) {
        console.log("The File's contents were successfully downloaded")
      }, function(error) {
        console.log("Something's wrong")
        console.log(error)
      })
  });

var array = fs.readFile('C:\\Users\\vladm\\Documents\\FrontProjects\\credo_logs\\logs\\credo_microservices.log', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    content = data;
    processFile();
  });

function processFile() {
  data = content.split('\n').slice(-2)
  console.log(data)
  }