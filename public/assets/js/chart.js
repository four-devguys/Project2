$(document).ready(function(){


      $.get("/api/users", function(data) {
        // console.log(data[0].id)
        // console.log(data[0].umoji[0].user_emojis.user_id)

        // console.log(data[0].umoji.length)

        // for(var i = 0; i <= (data[0].umoji).length; i++){
        //   if(data[0].id == data[0].umoji[0].user_emojis.user_id){
        //     console.log(data[0].umoji[i].polarity)
        //   }
        // }

        console.log(data[0].umoji[0].polarity)
        console.log(data[0].umoji[1].polarity)
        console.log(data[0].umoji[2].polarity)
        var emotionChart = myChart.data.datasets[0];
        emotionChart.data[0] = parseInt(data[0].umoji[0].polarity) + parseInt(data[0].umoji[1].polarity)+ parseInt(data[0].umoji[2].polarity)
        emotionChart.data[1] = data[0].umoji[1].polarity
        emotionChart.data[2] = data[0].umoji[2].polarity
        emotionChart.data[3] = 1
        emotionChart.data[4] = 4
        emotionChart.data[5] = 3
        emotionChart.data[6] = 2
        myChart.update();
      });


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Levels of daily emotions',
            data: [0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 164, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



});