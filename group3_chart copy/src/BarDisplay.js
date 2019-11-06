
//create a class called BarDisplay with a constructor that contains variables
import * as d3 from 'd3';

export default class BarDisplay {
    constructor(barData){
        this.w = barWidth;
        this.h = barHeight;
        this.padding = padding;
        this.barHolder =barHolder;
        this.dataset= graphData;
        this.buildChart();
       }
       buildChart(){
        let svg = d3.select(this.barHolder)
        .attr("width", this.w)
        .attr("height", this.h);

        svg.selectAll("rect")
            .data(this.dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * (this.w / this.dataset.length))
            .attr("y", d => this.h - (d))
            .attr("width", this.w / this.dataset.length - this.padding)
            .attr("height", d => d)
            .attr("fill", d => `rgb(${d*10},0,0)`);

       }
}


//fetch data from data.json to import data to chart
fetchData()(

    fetch('data.json')
    .then(data => data.json())
    .then(data =>{

        this.myData = data;
        console.log(data);

        //inserting data into instance of barDisplay
    })
)

//build chart function
buildChart(){
    let svg = d3.select ("#chart")
}







let bar = new BarDisplay();