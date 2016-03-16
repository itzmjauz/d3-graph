var data1 = [1,2,3,4,5,6,7,8,9]
var data2 = [53,42,33,21,31,94,8,37,6]

d3.select(".chart")
  .selectAll("div")
    .data(data1)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });

