window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: false,
        title: {
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 37.5, label: "Burned Tokens"},
                {y: 62.5, label: "Launch Supply"},
            ]
        }]
    });
    chart.render();
    }