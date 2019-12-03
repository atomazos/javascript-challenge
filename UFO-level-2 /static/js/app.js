// from data.js
var tbody = d3.select("tbody");
// console.log(data);
// Step 1: Loop Through `data` and console.log each ufo report object
// data.forEach(function(ufoReport) {
// console.log(ufoReport)
// });
//Step 2:  Use d3 to append one table row `tr` for each ufo report object
// data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
// });
// // Step 3:  Use `Object.entries` to console.log each ufo report value
// data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(function([key, value]) {
//         console.log(key, value);
//           });
// });
// // Step 4: Use d3 to append 1 cell per ufo report value (date,time,city,state,country,shape,duration,Minutes,comments)
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
//   Object.entries(ufoReport).forEach(function([key, value]) {
//       console.log(key, value);
//       var cell = row.append("td");
//     });
// });
// Step 5: Use d3 to update each cell's text with ufo report values (date,time,city,state,country,shape,duration,Minutes,comments)
function populateTable(arr){
  tbody.html("")
  arr.forEach(function(ufoReport) {
  // console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
      // console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
// Step 6. Use d3 to filter data
populateTable(data)
// UFO LEVEL -2 FROM LINE 61 DOWN
// the arr is the array in data.js file (i.e., data in data.js file), the field is the seven labels
//(i.e, datetime, city, etc) and value are the values of the labels (e.g, 1/1/2010, benton, etc.)
// helper function
function filterTable(arr,field,value){
  return arr.filter(item=>item[field] === value);
}
function updateTable(){
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#userInput");
  var filterField = d3.select("#selDataset");
  // Get the value properties of the input element
  var filterFieldValue = filterField.property("value");
  //there are two inputs available on our webpage for the user to filter through
  var inputValue = inputElement.property("value");
    if (inputValue != ""){
      var filteredData = filterTable(data,filterFieldValue,inputValue);
      populateTable(filteredData);
  }
    else{
    populateTable(data);
  }
};

