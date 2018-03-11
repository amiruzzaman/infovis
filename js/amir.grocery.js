/*****************amir.grocery**************/
$.ajax("csv/grocerystoresurvey.csv", {
            mimeType: 'text/plain; charset=x-user-defined',
            success: function (data) {
                var csv = d3.csv.parse(data);
                //console.table(csv);

                var width = 800;
                var svg = dimple.newSvg("#chartContainer", 600, 400);
                var chart = new dimple.chart(svg, csv);
                chart.setBounds(60, 30, 600, 250)
				chart.addMeasureAxis("x", "Income");
                chart.addCategoryAxis("y", ["Occupation", "Gender"]);
                chart.addMeasureAxis("z", "FamilySize");
                
                chart.addSeries("Gender", dimple.plot.bubble);
                chart.addLegend(40, 10, 510, 80, "right");
                chart.draw();
            }
        });