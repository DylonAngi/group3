import * as d3 from 'd3';

//displaying line graph = temperature  
export default class LineDisplay{
    //creating a constructor 
    constructor(lineData){
        this.w = 1500;
        this.h = 1500;
        this.padding = 2;
        this.dataset = lineData.myData;
        console.log(lineData);

        //creating an array to push our temp data into 
        this.lineTemp = [];

        for(let i = 0;i<this.dataset.length; i++){
            this.lineTemp.push(this.dataset[i].lineTemp);
        }

        //calculating the height of our line so that it is porportionate to its scale 
        this.lineChart = d3.line()
        .x(d => Math.abs((250 + ((d.year - 1970) * 25.6))))
        .y(function(d){
            if(Math.sign(d.temp) == -1 ){ console.log(d.temp);return 401 + (Math.abs(d.temp * 50)) }
            else { console.log("neg"+d.temp); return 401 - (Math.abs(d.temp * 50))};
        })

        console.log(this.lineChart);


        //calling the build chart function that we are going to write below
        this.buildChart();
    }

    //creating a buildChart function
    buildChart(){
    let svg = d3.select("#displayChart")
    .append("svg")
    .attr("width", this.w)
    .attr("height", this.h);
/*
 //x axis contains years :1970-2010
let xScale = d3.scaleLinear()
.domain([1970,2010])
.range([0,1000]);
*/

//Min max value for line graph: TEMPERATURE on right y-axis
let yScale1 = d3.scaleLinear()
.domain([-2, 2])
.range([400,0]);

//Axis for TEMPERATURE
let y_axis2 = d3.axisRight()
.scale(yScale1);

//appending the group and inserting the dataset
svg.append("g").selectAll(".line")
.data(this.dataset)

let g = svg.append("g")
.attr("transform", "translate(" + 100 + "," + 100 + ")");


//right axes attributes TEMPERATURE
    g.append("g")
    .attr("transform", "translate(1175, 100)") //19
    .call(y_axis2).attr("color", "#1D2430").attr("font-size", "15")
    .append("text")
    .attr("fill", "#1D2430")
    .text("Temperature").attr("font-weight", "bold")
    //height of temperature label
    .attr("dx", "12.1em")
    //placement of temperature label
    .attr("dy", "-5.1em")
    .attr("font-family","raleway")
    .attr("transform", "rotate(90)");




    //creating the line chart and giving the path a stroke
    let line= svg.append("path")
    .attr("d", this.lineChart(this.dataset))
    .attr("stroke","#FE4E2B")
    .attr("stroke-width", 2)
    .attr("fill", "none")   

    //Legend for precipitation
    //TEMPERATURE-LINEGRAPH-CORAL
    svg.append("circle").attr("cx",300).attr("cy",160).attr("r", 6).style("fill", "#FE4E2B")
    svg.append("text").attr("x", 320).attr("y", 160).text("Temperature").style("font-size", "15px").attr("alignment-baseline","middle") .attr("font-family", "raleway")
    .style("fill", "#FE4E2B") 

    }
    

}
