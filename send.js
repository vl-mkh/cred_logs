var credo_logs = [ [ '[2018-03-13 15:25:43]',
{ method: 'get',
  url: 'https://qa-api.credomobile.com/mobileaccount/v1/enrollments/new?agentUserName=andemail@gmail.com',
  raw_response: '{"Result":{"accountNumber":4104855}}\n',
  json_response: [Object],
  status: 201,
  headers: [Object],
  request_params: [] } ],
[ '[2018-03-13 15:25:51]',
{ method: 'post',
  url: 'https://qa-api.credomobile.com/user/v1/users',
  raw_response: '{"Result":{"token":"AA2cJu3eFtyAO1w4NXb/Ni8oLFCtw4q079nrKCVeWfEwkIdFPdtRPk/8DMjjU9P1ew==","expires":"2018-03-13T15:45:50.7940742Z","issued":"2018-03-13T15:25:50.7940742Z","failResponse":null,"userStatus":"Pending","accountNumber":4104855}}',
  json_response: [Object],
  status: 200,
  headers: [Object],
  request_params: [Object] } ],
[ '[2018-03-13 16:33:14]',
{ method: 'get',
  url: 'https://qa-api.credomobile.com/coverage/v1/coveragecheck/?zipcode=90001&carrierid=1',
  raw_response: '{"Result":{"isCovered":true}}',
  json_response: [Object],
  status: 200,
  headers: [Object],
  request_params: [] } ],
[ '[2018-03-13 17:14:40]',
{ method: 'get',
  url: 'https://qa-api.credomobile.com/coverage/v1/coveragecheck/?zipcode=32008&carrierid=1',
  raw_response: '{"Result":{"isCovered":true}}',
  json_response: [Object],
  status: 200,
  headers: [Object],
  request_params: [] } ] ];

function AddContainers(credo_logs) {
    if (credo_logs.length > 0) {
        for (i=0; i<credo_logs.length - 1; i++) {
            $('.container:last').clone().appendTo($('div.full-container:last'));
        };
    };
};

function PutData(credo_logs) {
        var log_containers = $(".container");
      
        for (i=0; i<log_containers.length; i++) { 
            $(log_containers[i]).find("span.log-time").text(credo_logs[i][0]);
            $(log_containers[i]).find("span.log-text").text(credo_logs[i][1]);
            console.log();
        }
};

AddContainers(credo_logs);
PutData(credo_logs);

/*$(document).ready(function(){
    AddContainers(credo_logs);
    PutData(credo_logs);    
}
)

*/