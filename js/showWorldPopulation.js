$(document).ready(function () {
    var data = [];
    var labels = [];


    //var data = [10, 20, 30, 40, 50];
    //var labels = ["Singapore", "Malaysia", "Thailand", "Vietnam", "Myanmar"];

    $.ajax({
        url: "http://localhost/C273/C273_L09CloudNine/getStatistics.php",
        cache: false,
        dataType: "JSON",
        success: function (response) {
            for (i = 0; i < response.length; i++) {
                labels.push(response[i].country);
                data.push(response[i].population);
            }
            var barChart = new Chart($("#barChart"), {
                type: 'horizontalBar',
                data: {
                    datasets: [{
                            data: data,
                            backgroundColor: "lightblue",
                            label: 'Population'
                        }],
                    labels: labels
                },
                options: {
                    responsive: true
                }
            });
        },
        error: function (obj, textStatus, errorThrown) {
            console.log("Error " + textStatus + ": " + errorThrown);
        }
    });

});
