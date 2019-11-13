//importing the BarDisplay and LineDisplay classes 
import BarDisplay from './BarDisplay';
import LineDisplay from './LineDisplay';


//creating a class called DisplayChart
class DisplayChart{
    //creating a constructor with different variables 
    constructor(){    
        this.w = 1500;
        this.h = 1500;
        this.padding = 2;
        let barHolder ="#displayChart";

    //calling the fetData function to fetch data from the json file
        this.fetchData();

    }

//fetching data from the json file
fetchData(){

     //fetch the data from the file 
    fetch('data.json')
    .then(data => data.json())
    .then(data => {

         //storing the data from the data.json file
        this.myData = data;
        console.log(data);

        //creating an instance of the barDisplay class and putting the data in the parameter
        let barGraph = new BarDisplay(this.myData);
        let lineGraph = new LineDisplay(this.myData);
        
    })
}

}

let chartDisplay = new DisplayChart();

$("table").hide();
$(".show").show();
$(".hide").hide();

$(".show").click(function(){
    console.log('yes bitch')
    $("table").show();
    $(".show").hide();
    $(".hide").show();
});

$(".hide").click(function(){
    console.log('yes bitch')
    $("table").hide();
    $(".hide").hide();
    $(".show").show();
    
});



