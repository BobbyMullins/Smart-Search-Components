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