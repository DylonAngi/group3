
import * as d3 from 'd3';

//displaying the bar graph for PRECIPITATION
export default class BarDisplay{
    //creating a constructor 
    constructor(barData){

        this.dataset = barData.myData;
        console.log(barData);

        //array for data 
        this.barPrecip = [];

        for(let i = 0;i<this.dataset.length; i++){
            this.barPrecip.push(this.dataset[i].precip);
        }



        //calling build chart function 
        this.buildChart();
    }

    //creating a buildChart function
    buildChart(){
    let svg = d3.select("#displayChart")
    .append("svg")
    .attr("width", this.w)
    .attr("height", this.h);

    //x axis contains years :1970-2010
    let xScale = d3.scaleLinear()
    .domain([1970,2010])
    .range([0,1000]);
    
    //Min max value for bar graph: PRECIPITATION on left y-axis
    let yScale = d3.scaleLinear()
    .domain([67, -52])
    .range([-200,550]);
    
    
    //Min max value for line graph: TEMPERATURE on right y-axis
    let yScale1 = d3.scaleLinear()
    .domain([-2, 2])
    .range([400,0]);
    
    // Define the axes
    let x_axis = d3.axisTop()
        .scale(xScale)
        .tickFormat(d3.format("d"))
        .tickPadding(350)
    
    //left y-axis for PRECIPITATION
    let y_axis = d3.axisLeft()
        .scale(yScale);
    
    //appending group and inserting the dataset
    svg.append("g").selectAll(".bar")
    .data(this.dataset)

    let g = svg.append("g")
    .attr("transform", "translate(" +100 + "," + 100 + ")");

//X-AXIS
    //appending the axes
    g.append("g")
    .attr("transform", "translate(150, -80)")//19
    //whole x-axis display
    .call(x_axis).attr("color", "#000000").attr("font-size", "15")
    .attr("dx", "-5.1em")
    .append("text")
    //"precipitation" on left y-axis
    .attr("font-family","raleway")



//Y-AXIS
    //appending the axes 
    g.append("g")
    .attr("transform", "translate(150, 100)")//19
    //whole left y-axis display
    .call(y_axis).attr("color", "#000000").attr("font-size", "15")
    .append("text")
    //"precipitation" on left y-axis
    .attr("fill", "#000000")
    .text("Precipitation").attr("font-weight", "bold")
    .attr("dx", "-12.1em")
    .attr("dy", "-5.1em")
    .attr("transform", "rotate(-90)")
    .attr("font-family","raleway")


    //creating the bar graph 
    g.selectAll(".bar")
    .data(this.dataset)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", (d,i) => 150 + (i*25))
    .attr("y",function(d,i)
    {
        if(Math.sign(d.precip) == -1 ){ console.log(d.precip);return 301 }
        else { console.log("neg"+d.precip); return 300 - (d.precip*5)};
    })
    //styling for bars
    .attr("width",d => 20)
    .attr("height", d => 5 * Math.abs(d.precip))
    .style("fill", "#62ACFF")
    .style("stroke", "#ffffff")


    //calling the x_axis and giving it the label of "Year" 
    g.append("g")
    .attr("transform", "translate("+165+ ", " + 300 +")")
    .call(x_axis).attr("color", "#1D2430").attr("font-size", "15")
    .append("text").attr("font-size", "16")
    .attr("fill", "#1D2430")
    .text("Year").attr("font-weight", "bold")
    .attr("dx", "31.28em")
    .attr("dy", "-20em")
    .attr("font-family","raleway")
    


   //legand representing different charts

   //TEMPERATURE-BARGRAPH-BLUE
    svg.append("circle").attr("cx",300).attr("cy",130).attr("r", 6).style("fill", "#62ACFF")
    svg.append("text").attr("x", 320).attr("y", 130).text("Precipitation").style("font-size", "15px").attr("font-family", "raleway").attr("alignment-baseline","middle")
    .style("fill", "#62ACFF")

   
    }
    

}
