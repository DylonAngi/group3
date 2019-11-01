import * as d3 from "d3";
import { domainToASCII } from "url";



export default class BarDisplay {
    constructor(barData, stats, barHolder, barWidth, barHeight,padding) {
        this.w = 1400;
        this.h = 1400;
        this.data = stats["temp"]
        this.padding = padding;
        this.barHolder = barHolder;
        //this.dataset = [50, 10, 14, 20, 25];
        this.stats = barData.myData;
        this.buildChart();
    }

    buildChart() {
        let svg = d3.select(this.barData)
            .attr("width", this.w)
            .attr("height", this.h);


            svg.selectAll("rect")
            .data(this.stats["temp"])
            .enter()
            .append("rect")
            .attr("x", (d,i) => i * (this.w / this.stats.length))
            .attr("y", d => this.h - (d))
            .attr("width", this.w / this.stats.length - this.padding)
            .attr("height", d => d)
            .attr("fill", d => `rgb(${d*10},0,0)`);



            //tryingggg to create a bottom axis
            // delete this comment b4 handing in : the website i refrenced https://www.youtube.com/watch?v=znBBk_M95QY 
    
        let yScale = d3.scaleLinear()
        .domain([0,d3.max(stats, function(d,i) {return d.Qty })])
        .range([buildChart.width])
        
        let xScale = d3.scaleBand()
        .domain(scaleChart.map(function(d){return d.year}))
        .range([0,buildChart.width])
        .padding(.2);

        

        let xAxis = svg.append("g")
        .classed("xAxis",true)
        attr(
            'transform','translate ('+padding.left+','+(buildChart.height + padding.top)+')'
        )
            .call(d3.axisBottom(xScale));
    }
}








            
    
    
