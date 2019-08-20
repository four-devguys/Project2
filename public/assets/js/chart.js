var ctx = document.getElementById('myChart').getContext('2d');


var myBarChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
});