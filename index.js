
var svg = d3.select("body").append("svg")
  .attr('width', 2400)
  .attr('height', 1000)


function update(data, color) {
  var rects = svg.selectAll("rect")
    .data(data)

  rects.transition()
    .duration(1000)
    .attr('height', function(d) {return d * 10 + "px"})
    .style('fill', color)

  rects.enter().append("rect")
    .attr('width', 10)
    .attr('fill', color)
    .attr('height', function(d) { return d * 10 + "px"})
    .text(function(d) { return d })
    .attr('x', function(d,i) {
      return i * 10
    })
    .attr('y', 10)

  rects.exit().remove()
}

update(getRandomData(300,100))
cycle1()

function cycle1() {
  var timeout = setTimeout(function() {
    update(getRandomData(300,80), getRandomColor())    
    cycle2()
  }, 1200)
}

function cycle2() {
  var timeout = setTimeout(function() {
    update(getRandomData(300,80), getRandomColor())    
    cycle1()
  }, 1200)
}

function getRandomData(size, max) {
  var array = []

  for(var x = 0; x < size ; x++) {
    array[x] = Number(Math.random() * max)
  }

  return array
}

function getRandomColor() {
  var r = Number(Math.random() * 255) 
  var g = Number(Math.random() * 255)
  var b = Number(Math.random() * 255)

  return "rgb(" + r + ',' + g + ',' + b + ')'
}
