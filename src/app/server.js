// server.js
// All JavaScript in here will be loaded server-side
// Export the views globally so ReactJS.Net can use them
var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require('react-dom/server');

var Components = require('expose-loader?Components!./views');