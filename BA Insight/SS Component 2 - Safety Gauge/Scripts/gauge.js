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


var target = document.getElementById('safetyGauge'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 3000; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(97); // set actual value
