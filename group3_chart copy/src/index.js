import BarDisplay from './BarDisplay';
//import LineDisplay from './LineDisplay';
//import ScatterDisplay from './ScatterDisplay';
//bar graph for percip data

class Graph{
    //class called graph contains constructor with variables

    constructor(){
        let barWidth = 400;
        let barHeight = 300;
        let barPadding = 2;
        let barHolder = "#chart";

        //calling fetch data to import data
        this.fetchData();

    }
    
    
    fetchData(){
    //fetching from json file
    fetch('data.json')
    .then(data => data.json())
    .then(data =>{
    
    //storing data
        this.graphData = data;
        console.log(data);

    
        let barGraph  = new BarDisplay(this.graphData);
    })
}
}
let barGraph = new Graph();