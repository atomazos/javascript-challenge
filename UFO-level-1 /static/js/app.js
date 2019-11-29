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
populateTable(data)
// var enterADate = data
var enterDate = data
d3.select("#filter-btn").on("click", getData);

function getData(){

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

// console.log(inputValue);
// console.log(enterDate);
  if (inputValue ===""){
    populateTable(data)
  } else{
    var filteredData = enterDate.filter(enterDate=> enterDate.datetime === inputValue);
  
  populateTable(filteredData)
  }
  

console.log(filteredData);



};
      

