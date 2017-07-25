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


//function graphInit(chartLocation, yData, xData) {
//
//    var myData = yData; 
//    var xLabels = xData; 
//
//    var margin = {
//        top: 30, 
//        right: 30, 
//        bottom: 40, 
//        left: 50
//    }
//
//    var height = 250 - margin.top - margin.bottom; 
//    var width = 250 - margin.right - margin.left; 
//    //var barWidth = 35; 
//    //var barOffset = 5; 
//
//    var yScale = d3.scale.linear()
//        .domain([0, d3.max(myData)])
//        .range([0, height]); 
//
//    //var xScale = d3.scale.ordinal()
//    //    .domain(d3.range(0, myData.length))
//    //    .rangeBands([0, width])
//
//    var xScale = d3.scale.ordinal()
//        .domain(d3.range(0, xLabels.length))
//        .rangeBands([0, width], .1)
//
//    d3.select(chartLocation).append('svg')
//        .attr('width', width + margin.right + margin.left)
//        .attr('height', height + margin.top + margin.bottom)
//        .append('g')
//        .attr('transform', 'translate('+margin.left+','+margin.top+')')
//        .style('background', 'f4f4f4')
//        .selectAll('rect')
//            .data(myData)
//            .enter().append('rect')
//                .style('fill', 'lightgreen')
//                .attr('width', xScale.rangeBand())
//                .attr('height', function(d){
//                    return yScale(d); 
//                })
//                .attr('x', function(d, i){
//                    return xScale(i);  
//                })
//                .attr('y', function(d){
//                    return height - yScale(d); 
//                })
//
//    var vScale = d3.scale.linear()
//        .domain([0, d3.max(myData)])
//        .range([height, 0]); 
//
//    //var hScale = d3.scale.ordinal()
//    //    .domain(d3.range(0, myData.length))
//    //    .rangeBands([0, width])
//    //
//    var hScale = d3.scale.ordinal()
//        .domain(d3.range(0, xLabels.length))
//        .rangeBands([0, width])
//
//    // V Axis
//    var vAxis = d3.svg.axis()
//        .scale(vScale)
//        .orient('left')
//        .ticks(5)
//        .tickPadding(5)
//
//    // V Guide
//    var vGuide = d3.select('svg')
//        .append('g')
//            vAxis(vGuide)
//            vGuide.attr('transform', 'translate('+margin.left+','+margin.top+')')
//            vGuide.selectAll('path')
//                .style('fill', 'none')
//                .style('stroke', '#000')
//            vGuide.selectAll('line')
//                .style('stroke', '#000')
//
//    // H Axis
//    //var hAxis = d3.svg.axis()
//    //    .scale(hScale)
//    //    .orient('bottom')
//    //    .tickValues(hScale.domain().filter(function(d, i){
//    //        return !(i % (myData.length/6)); 
//    //    })); 
//
//    var hAxis = d3.svg.axis()
//        .scale(hScale)
//        .orient('bottom')
//        .tickValues(hScale.domain().filter(function(d, i){
//            return !(i % (xLabels.length/6)); 
//        })); 
//
//    // h Guide
//    var hGuide = d3.select('svg')
//        .append('g')
//            hAxis(hGuide)
//            hGuide.attr('transform', 'translate('+margin.left+','+(height + margin.top)+')')
//            hGuide.selectAll('path')
//                .style('fill', 'none')
//                .style('stroke', '#000')
//            hGuide.selectAll('line')
//                .style('stroke', '#000')
//
//} 

/* ******************************* */
/* D3 JS Double Bar Chart */
/* ******************************* */

function graphInit(chartLocation, yData, xData1, xData2) {

 var myData = yData;  
 var xLabel1 = xData1;
 var xLabel2 = xData2; 

 var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 250 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;
    
 var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1)
    .domain(d3.range(0, xLabel1.length));
    
 var x1 = d3.scale.ordinal();  
    
 var y = d3.scale.linear()
    .domain([0, d3.max(myData)])
    .range([height, 0]);
    
    
 var color = d3.scale.ordinal()
    .range(["#ffcc99", "#ccff99"]);
    
    
 var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom")

    
 var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
//    .tickFormat(d3.format(".2s"));
    .ticks(5)
    .tickPadding(5);
    
    //console.log(margin.left);
 var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
//    var data = [
//        {letter: "A", frequency: 78,depth:400},
//        {letter: "B", frequency: 567,depth:250}, 
//        {letter:'C', frequency: 387, depth:300},
//        {letter:'D', frequency: 754, depth:568}
//    ];
    
    var data = [
        {letter: xLabel1[0], frequency: xLabel2[0],depth: myData[0]},
        {letter: xLabel1[1], frequency: xLabel2[1],depth: myData[1]}, 
        {letter: xLabel1[2], frequency: xLabel2[2], depth: myData[2]},
        {letter: xLabel1[3], frequency: xLabel2[3], depth: myData[3]}
    ];

    var groupNames=d3.keys(data[0]).filter(function(key){return key!="letter";})
    
    data.forEach(function(d){
        d.groups=groupNames.map(function(name){return {name:name,value:+d[name]};})
    });
    
    x0.domain(data.map(function(d){return d.letter;}));
    
    x1.domain(groupNames).rangeRoundBands([0, x0.rangeBand()]);
    
    y.domain([0,d3.max(data,function(d){
        return d3.max(d.groups,function(d){
            return d.value;
        });
    })]);
    
    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
//  .append("text")
//    .attr("transform", "rotate(-90)")
//    .attr("y", 6)
//    .attr("dy", ".71em")
//    .style("text-anchor", "end")
//    .text("Letter Fun");

    var state = svg.selectAll(".state")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function(d) { return "translate(" + x0(d.letter) + ",0)"; });
    
    state.selectAll("rect")
    .data(function(d) { return d.groups; })
    .enter().append("rect")
     .attr("width", x1.rangeBand())
     .attr("x", function(d) { return x1(d.name); })
     .attr("y", function(d) { return y(d.value); })
     .attr("height", function(d) { return height - y(d.value); })
     .style("fill", function(d) { return color(d.name); });
    
//X Axis Labeling 
    var xGuide = d3.select('svg')
        .append('g')
            xAxis(xGuide)
            xGuide.attr('transform', 'translate('+margin.left+','+(height + margin.top)+')')
            xGuide.selectAll('path')
                .style('fill', 'none')
                .style('stroke', '#000')
            xGuide.selectAll('line')
                .style('stroke', '#000')
                
    
}


/* ******************************* */
/* D3 JS Double Bar Chart 2 */
/* ******************************* */

//var svg = d3.select("svg"),
//  margin = {
//    top: 20,
//    right: 20,
//    bottom: 30,
//    left: 40
//  },
//  width = ("width") - margin.left - margin.right,
//  height = ("height") - margin.top - margin.bottom;
//
//var color = d3.scaleOrdinal(d3.schemeCategory10);
//
//var x = d3.scaleBand().rangeRound([0, width])
//  .padding(0.1),
//  y = d3.scaleLinear().rangeRound([height, 0]);
//
//var g = svg.append("g")
//  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//var data = [{
//  "Group": "Mars",
//  "count": 10,
//  "months": "June"
//}, {
//  "Group": "Jupiter",
//  "count": 50,
//  "months": "June"
//}, {
//  "Group": "Mars",
//  "count": 70,
//  "months": "July"
//}, {
//  "Group": "Jupiter",
//  "count": 60,
//  "months": "July"
//}];
//
//var ymaxdomain = d3.max(data, function(d) {
//  return d.count;
//});
//x.domain(data.map(function(d) {
//  return d.months
//}));
//y.domain([0, ymaxdomain]);
//
//var x1 = d3.scaleBand()
//  .rangeRound([0, x.bandwidth()])
//  .padding(0.05)
//  .domain(data.map(function(d) {
//    return d.Group;
//  }));
//
//color.domain(data.map(function(d) {
//  return d.Group;
//}));
//
//var groups = g.selectAll(null)
//  .data(data)
//  .enter()
//  .append("g")
//  .attr("transform", function(d) {
//    return "translate(" + x(d.months) + ",0)";
//  })
//
//var bars = groups.selectAll(null)
//  .data(function(d) {
//    return [d]
//  })
//  .enter()
//  .append("rect")
//  .attr("x", function(d, i) {
//    return x1(d.Group)
//  })
//  .attr("y", function(d) {
//    return y(d.count);
//  })
//  .attr("width", x1.bandwidth())
//  .attr("height", function(d) {
//    return height - y(d.count);
//  })
//  .attr("fill", function(d) {
//    return color(d.Group)
//  })
//
//g.append("g")
//  .attr("class", "axis")
//  .attr("transform", "translate(0," + height + ")")
//  .call(d3.axisBottom(x));
//
//g.append("g")
//  .attr("class", "axis")
//  .call(d3.axisLeft(y).ticks(null, "s"))
//  .append("text")
//  .attr("x", 2)
//  .attr("y", y(y.ticks().pop()) + 0.5)
//  .attr("dy", "0.32em")
//  .attr("fill", "#000")
//  .attr("font-weight", "bold")
//  .attr("text-anchor", "start")
//  .text("count");
        
/* *************************** */
/* Maps JS */
/* *************************** */

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


    

