
//
document.addEventListener('DOMContentLoaded', () => {
  var render = (selector, size, data) => {
    var margin = size.margin;
    var width = size.width - margin.left - margin.right;
    var height = size.height - margin.top - margin.bottom;
      
    var x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.temp))
      .range([0, width]);
    
    var y = d3.scaleBand()
      .domain(data.map(d => d.year))
      .rangeRound([0, height])
      .padding(0.2);
      
    var xAxis = d3.axisBottom(x);
    
    var yAxis = d3.axisLeft(y)
      .tickSize(0);
    
    var svg = d3.select(selector)
      .attr('width', size.width)
      .attr('height', size.height);
      
    var chart = svg.append('g')
      .attr('transform', `translate(${ margin.left }, ${ margin.top })`);
    
    var bar = chart.selectAll('.bar')
      .data(data)
      .enter().append('rect')
        .attr('class', d => `bar ${ d.temp < 0 ? 'negative': 'positive' }`)
        .attr('x', d => x(Math.min(0, d.temp)))
        .attr('y', d => y(d.year))
        .attr('width', d => Math.abs(x(d.temp) - x(0)))
        .attr('height', y.bandwidth());

    chart.append('g')
      .attr('transform', `translate(0, ${ height })`)
      .attr('class', 'axis x')
      .call(xAxis);
      
    chart.append('g')
      .attr('class', 'axis y')
      .attr('transform', `translate(${ x(0) }, 0)`)
      .call(yAxis);
  };
  
  fetch('./dist/data.json')
    .then(data => data.json())
    .then(data => {
      var settings = {
        width: 500,
        height: 300,
        margin: {
          top: 20,
          right: 20,
          bottom: 30,
          left: 40
        }
      };
      
      render('#chart', settings, data);
    });
});