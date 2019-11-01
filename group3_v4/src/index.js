import BarDisplay from './BarDisplay';
//import LineDisplay from './LineDisplay';
let stats, myBars;

function fetchData(){
    console.log("fetcheth thy data-eth");
    fetch('data.json')
    .then(data => data.json())
    .then(data => {
        stats = data.stats
        console.log(stats)
        console.log("wooork")
        
        buildBar();
    })
}
fetchData();


let barWidth = 400;
let barHeight = 300;
let barPadding = 2;
let barHolder = "#barSpace";


function buildBar(){
    myBars = new BarDisplay(stats, barHolder, barWidth, barHeight, barPadding);
    
}





let lineHeight = 350;
let lineWidth = 400;
let monthlySales = [
    {"month": 10,"sales": 100},
    {"month": 20,"sales": 130},
    {"month": 30,"sales": 250},
    {"month": 40,"sales": 300},
    {"month": 50,"sales": 265},
    {"month": 60,"sales": 225},
    {"month": 70,"sales": 180},
    {"month": 80,"sales": 120},
    {"month": 90,"sales": 145},
    {"month": 100,"sales": 230}
];
let lineHolder = "#lineSpace";
let scatterHolder = "#scatterSpace";
//let myLines = new LineDisplay(lineHeight, lineWidth, lineHolder, monthlySales);
//let myScatter = new ScatterDisplay(lineHeight, lineWidth, scatterHolder, monthlySales);



