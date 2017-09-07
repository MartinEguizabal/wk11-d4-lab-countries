window.addEventListener('load', function(){
    var url = "https://restcountries.eu/rest/v2/all"
    var button = document.querySelector("#trigger");

    button.addEventListener("click", function(){
        makeRequest(url, requestComplete);
    })

    var makeRequest = function(url, requestComplete){
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener("load", requestComplete);
        request.send();
    }

    var requestComplete = function(){
        if(this.status != 200) return;
        var jsonString = this.responseText;
        var countries = JSON.parse(jsonString);
        new ColumnChart(countries);        
    }
    
    new PieChart();
})