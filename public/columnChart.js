var ColumnChart = function(countries){
    var container = document.querySelector("#column-chart");

    var seriesFill = function(countries){
        var countriesArray = []
        
        for (var country of countries){
            if (country.area > 5000000){
            var countryDetails = {name: country.name, data: [country.population, country.area]}
             countriesArray.push(countryDetails); 
        }
    }
        return countriesArray
    }


    var chart = new Highcharts.Chart({
        chart: {
            type: "column",
            renderTo: container
        },
        title: {
            text: "Our Favourite Programming Languages"
        },
        series: 
            seriesFill(countries)
        ,
        xAxis: {
            categories: ['Population', 'Area']
        }
    });
}

