$.ajax("csv/cars2.csv", {
            mimeType: 'text/plain; charset=x-user-defined',
            success: function (data) {
                var csv = d3.csv.parse(data);
                //console.table(csv);

                var width = 800;
                //var svg = d3.select("#chart").append("svg");
                //.attr("width", width);
                var svg = dimple.newSvg("#chart", 600, 400);
                var chart = new dimple.chart(svg, csv);
                chart.setBounds(60, 30, 600, 250)
                chart.addCategoryAxis("x", "Manufacturer");
                var y = chart.addMeasureAxis("y", "Horsepower");
                y.overrideMin = 0;
                y.overrideMax = 250;
                chart.addSeries("Manufacturer", dimple.plot.bubble);
                chart.addLegend(40, 10, 510, 80, "right");
                chart.draw();
				/*
                var i;
                for (i = 0; i < csv.length; ++i)
                {
                    if (csv[i].Horsepower < 250) {
                        //csv[i].Horsepower = 20;
                    }
                    console.log(csv[i].Horsepower)
                }

                var svg = dimple.newSvg("#pie", 600, 400);
                var myChart = new dimple.chart(svg, csv);
                myChart.setBounds(20, 20, 460, 360)
                myChart.addMeasureAxis("p", "Manufacturer");
                myChart.addSeries("MPG", dimple.plot.pie);
                myChart.addLegend(500, 20, 90, 300, "left");
                myChart.draw();

*/

            }
        });