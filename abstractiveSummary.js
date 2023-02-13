let SummarizerManager = require("node-summarizer").SummarizerManager;
let text_to_summarize = `Image Targets represent images that Vuforia Engine can detect and track. The Engine detects and tracks the image by comparing extracted natural features from the camera image against a known target resource database. Once the Image Target is detected, Vuforia Engine will track the image and augment the content seamlessly using best-in-market image tracking technology.
Default Observer Event
Vuforia Engine observes the real world through configured and activated Observers. An Observer creates Observations, that represent information about a target. Observations are collected in the State.

`;
let number_of_sentences = 3;
let Summarizer = new SummarizerManager(text_to_summarize,number_of_sentences);

let summary = Summarizer.getSummaryByFrequency().summary;


// let summary = Summarizer.getSummaryByRank().then((summary_object)=>{
//   return summary_object.summary
// })

// summary.then(values => {
//   console.log(summary)
//     });
  console.log(summary)