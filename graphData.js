window.onload = function () {
	
	
	var createChart = function create_chart(element, dataID, chartTitle ,startYval) {
	
		var dps = []; // dataPoints
	
		var chart = new CanvasJS.Chart(element,{
			backgroundColor: "black",
			title :{
				text: chartTitle,
				fontColor: "white"
			},	
			axisX :{
				labelFontColor: "white",
			},
			axisY :{
				labelFontColor: "white",
			},
			data: [{
				type: "line",
				color: "green",
				fontColor: "white",
				dataPoints: dps 
			}]
		});
	
		var xVal = 0;
		var yVal = startYval;	
		var updateInterval = 1000;
		var dataLength = 100; // number of dataPoints visible at any point
	
		var updateChart = function (count) {
			count = count || 1;
			// count is number of times loop runs to generate random dataPoints.
			
			for (var j = 0; j < count; j++) {	
				
				yVal = yVal +  Math.round(1.5 + Math.random() *(-1.5-1.5));
				
				$(function() {
					$(dataID).text(yVal);
				});
				dps.push({
					x: xVal,
					y: yVal
				});
				xVal++;
			};
			if (dps.length > dataLength)
			{
				dps.shift();				
			}
			
			chart.render();		
	
		};
	
		// generates first set of dataPoints
		updateChart(dataLength); 
	
		// update chart after specified time. 
		setInterval(function(){updateChart()}, updateInterval);
	}
	
	createChart("HRchartContainer", "#heartRate", "Heart Rate: Real-Time", 100);
	createChart("BGchartContainer", "#bloodGlucose", "Blood Glucose: Real-Time", 125);
}