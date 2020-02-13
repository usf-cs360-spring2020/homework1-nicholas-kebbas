// this file includes code for the letter count

// array of all airlines we care about
let horizontal2 = "Asia, Europe, Canada, Mexico, Middle East, South America, Central America".split(", ");
let airlines = "Air Canada", "Alaska Airlines", "British Airways", "Cathay Pacific", "Lufthansa German Airlines", "Northwest Airlines", "United Airlines", "United Airlines - Pre 07/01/2013".split(", ")
// Transpose the data into layers


// Set x, y and colors
var x = d3.scale.ordinal()
  .domain(dataset[0].map(function(d) { return d.x; }))
  .rangeRoundBands([10, width-10], 0.02);

var y = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
  .range([height, 0]);

var colors = ["b33040", "#d25c4d", "#f2b447", "#d9d574"];

/* loop through data set. If horizontalSet contains data[1], add to that space in map */
/* if we go through our data line by line, this will be index 1 */

/* passenger count will be index 11 */

/*
 * want to count the number of passengers per airline.
 Keep a map that maps airline to passenger, add number of passengers. Need to loop through the array we created above.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

 /* Return a map */
let countPassengersPerAirline = function(input) {
  let horizontalSet = new Set()



  for (let i = 0; i < horizontal2.length; i++) {
    horizontalSet.add(horizontal2[i]);
  }

  let airlineToPassengersMap = new Map();

  /* add to map */
  for (let i = 0; i < horizontal2.length; i++) {
    airlineToPassengersMap.set(horizontal2[i], 0);
  }

  /*
   * you can loop through strings as if they are arrays
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   */
  for (let i = 0; i < input.length; i++) {
    let airline = input[i][3];
    let passengersString = input[i][11];
    let country = input[i][6];

    // convert before inserting
    let passengers = parseInt(passengersString, 10);

    // check if in set
    if (horizontalSet.has(country)) {
      //console.log(passengers)
      let currentPassengers = airlineToPassengersMap.get(country);
      currentPassengers += passengers;
      airlineToPassengersMap.set(country, currentPassengers);
    }
  }
  return airlineToPassengersMap;
};
