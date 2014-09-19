var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var trace1 = {
  x: [1, 2, 3], 
  y: [4, 5, 6], 
  type: "scatter"
};
var trace2 = {
  x: [20, 30, 40], 
  y: [50, 60, 70], 
  xaxis: "x2", 
  yaxis: "y2", 
  type: "scatter"
};
var trace3 = {
  x: [300, 400, 500], 
  y: [600, 700, 800], 
  xaxis: "x3", 
  yaxis: "y3", 
  type: "scatter"
};
var trace4 = {
  x: [4000, 5000, 6000], 
  y: [7000, 8000, 9000], 
  xaxis: "x4", 
  yaxis: "y4", 
  type: "scatter"
};
var data = [trace1, trace2, trace3, trace4];
var layout = {
  xaxis: {domain: [0, 0.45]}, 
  yaxis: {domain: [0, 0.45]}, 
  xaxis4: {
    domain: [0.55, 1], 
    anchor: "y4"
  }, 
  xaxis3: {
    domain: [0, 0.45], 
    anchor: "y3"
  }, 
  xaxis2: {domain: [0.55, 1]}, 
  yaxis2: {
    domain: [0, 0.45], 
    anchor: "x2"
  }, 
  yaxis3: {domain: [0.55, 1]}, 
  yaxis4: {
    domain: [0.55, 1], 
    anchor: "x4"
  }
};
var graph_options = {layout: layout, filename: "multiple-subplots", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});