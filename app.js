
require('dotenv').config()
var request = require('request');

var apiKey = 'b93d9d2475ed072f999710c6949f6a65';
//const  apiKey = process.env.api;
var endpoint = 'https://api.meaningcloud.com/summarization-1.0';
var text = 'One month after the United States began what has become a \ntroubled rollout of a national COVID vaccination campaign, the effort is finally \ngathering real steam. Close to a million doses -- over 951,000, to be more exact -- \nmade their way into the arms of Americans in the past 24 hours, the U.S. Centers \nfor Disease Control and Prevention reported Wednesday. That s the largest number \nof shots given in one day since the rollout began and a big jump from the \nprevious day, when just under 340,000 doses were given, CBS News reported. \nThat number is likely to jump quickly after the federal government on Tuesday \ngave states the OK to vaccinate anyone over 65 and said it would release all \nthe doses of vaccine it has available for distribution. Meanwhile, a number \nof states have now opened mass vaccination sites in an effort to get larger \nnumbers of people inoculated, CBS News reported.';

var options = {
  url: endpoint,
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  form: {
    'key': apiKey,
    'txt': text,
    'sentences': '3'
  }
};

request(options, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log(body);
  }
});
