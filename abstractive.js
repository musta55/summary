// Edit this One AI API call using our studio at https://studio.oneai.com/?pipeline=KDo21B&share=true
require('dotenv').config()
// npm install oneai
const {OneAI} = require("oneai");
// ES6: import OneAI from "oneai";

const oneai = new OneAI(process.env.absApiKey, {
    multilingual: true
});
const text = "One month after the United States began what has become a \ntroubled rollout of a national COVID vaccination campaign, the effort is finally \ngathering real steam. Close to a million doses -- over 951,000, to be more exact -- \nmade their way into the arms of Americans in the past 24 hours, the U.S. Centers \nfor Disease Control and Prevention reported Wednesday. That s the largest number \nof shots given in one day since the rollout began and a big jump from the \nprevious day, when just under 340,000 doses were given, CBS News reported. \nThat number is likely to jump quickly after the federal government on Tuesday \ngave states the OK to vaccinate anyone over 65 and said it would release all \nthe doses of vaccine it has available for distribution. Meanwhile, a number \nof states have now opened mass vaccination sites in an effort to get larger \nnumbers of people inoculated, CBS News reported.";

const pipeline = new oneai.Pipeline(
    oneai.skills.summarize(),
);

pipeline
    .run(text)
    .then((output) => console.log(output))
    .catch((error) => console.error(error));
