/* ****************************** */
/* Gauge Component */
/* ****************************** */


function gaugeInit(mapTarget, mapGauge) {
    var opts = {
      angle: -0.2, // The span of the gauge arc
      lineWidth: 0.05, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
        length: 0.3, // // Relative to gauge radius
        strokeWidth: 0.025, // The thickness
        color: '#000000' // Fill color
      },
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#6FADCF',   // Colors
      colorStop: '#8FC0DA',    // just experiment with them
      strokeColor: '#E0E0E0',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticZones: [        //Colored Gauge Regions 
       {strokeStyle: "#D3D3D3", min: 0, max: 1200}, // Gray
       {strokeStyle: "#ffff00", min: 1200, max: 1800}, // Yellow
       {strokeStyle: "#ff9900", min: 1800, max: 2400}, // Orange
       {strokeStyle: "#ff0000", min: 2400, max: 3000}, // Red
      ],
      staticLabels: {       //Gauge Labels 
      font: "10px sans-serif",  // Specifies font
      labels: [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000],  // Print labels at these values
      color: "#000000",  // Optional: Label text color
      fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
    };

    var target = document.getElementById(mapTarget); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 3000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(mapGauge); // set actual value
}

/* ******************************* */
/* D3 JS */
/* ******************************* */

var myData = [100, 125, 320, 440, 500]; 

var margin = {
    top: 30, 
    right: 30, 
    bottom: 40, 
    left: 50
}

var height = 500 - margin.top - margin.bottom; 
var width = 500 - margin.right - margin.left; 
//var barWidth = 35; 
//var barOffset = 5; 

var yScale = d3.scale.linear()
    .domain([0, d3.max(myData)])
    .range([0, height]); 

var xScale = d3.scale.ordinal()
    .domain(d3.range(0, myData.length))
    .rangeBands([0, width])

d3.select('#chart').append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate('+margin.left+','+margin.top+')')
    .style('background', 'f4f4f4')
    .selectAll('rect')
        .data(myData)
        .enter().append('rect')
            .style('fill', 'lightgreen')
            .attr('width', xScale.rangeBand())
            .attr('height', function(d){
                return yScale(d); 
            })
            .attr('x', function(d, i){
                return xScale(i);  
            })
            .attr('y', function(d){
                return height - yScale(d); 
            })

var vScale = d3.scale.linear()
    .domain([0, d3.max(myData)])
    .range([height, 0]); 

var hScale = d3.scale.ordinal()
    .domain(d3.range(0, myData.length))
    .rangeBands([0, width])

// V Axis
var vAxis = d3.svg.axis()
    .scale(vScale)
    .orient('left')
    .ticks(5)
    .tickPadding(5)

// V Guide
var vGuide = d3.select('svg')
    .append('g')
        vAxis(vGuide)
        vGuide.attr('transform', 'translate('+margin.left+','+margin.top+')')
        vGuide.selectAll('path')
            .style('fill', 'none')
            .style('stroke', '#000')
        vGuide.selectAll('line')
            .style('stroke', '#000')

// H Axis
var hAxis = d3.svg.axis()
    .scale(hScale)
    .orient('bottom')
    .tickValues(hScale.domain().filter(function(d, i){
        return !(i % (myData.length/6)); 
    })); 

// h Guide
var hGuide = d3.select('svg')
    .append('g')
        hAxis(hGuide)
        hGuide.attr('transform', 'translate('+margin.left+','+(height + margin.top)+')')
        hGuide.selectAll('path')
            .style('fill', 'none')
            .style('stroke', '#000')
        hGuide.selectAll('line')
            .style('stroke', '#000')
        
/* *************************** */
/* Maps JS */
/* *************************** */
        
//function initMap() {
//    //first function (initialize map) 
//    //var uluru = {lat: -25.363, lng: 131.044};
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 4,
//          center: uluru
//        });
//    
//    // second function (move map)
//        var marker = new google.maps.Marker({
//          position: uluru,
//          map: map
//        });
//      }

function initMap(mapLocation, lat, lng) {
    
    var uluru = {lat: lat, lng: lng};
        var map = new google.maps.Map(document.getElementById(mapLocation), {
        zoom: 4,
        center: uluru
        });
    
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
        });
}
    

