var PieChart = function(){
    var container = document.querySelector('#pie-chart');

    var chart = new Highcharts.Chart({
        chart: {
            type: 'pie',
            renderTo: container
        },
        title: {
            text: "Pokemon Types I've Caught"
        },
        credits: {
            enabled: false
        },
        // labels: {
        //     items: [{

        //     }]
        // }
        series: [
            {
                name: "Type",
                data: [
                    {
                        name: "Grass",
                        y: 74,
                        color: "#00ba2f",
                        sliced: true
                        
                    },
                    {
                        name: "Water",
                        y: 25,
                        color: "#73b7ff" , 
                        sliced: true
                    },
                    {
                        name: "Fire",
                        y: 100,
                        color: "#ffac33",
                        sliced: true
                        
                    },

                ]
            }
        ]
    });
}