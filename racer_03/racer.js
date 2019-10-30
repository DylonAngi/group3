class Racer{
    constructor(){
        this.racingCars;
        this.weather;
        this.weatherEffects;
        this.trackLength;
        this.winner;
        console.log("Welcome to the 3200 Racing Champioionship!     ARE YOU READYY!?");
        this.fetchData();
    }

    weatherEffect(){
        console.log("inside weatherEffects");
        this.weather = this.weatherEffects[Math.floor(Math.random()*this.weatherEffects.length)];
        //math.floor rounds the value down
        console.log(this.weather.weatherCondition)
    }

    checkWorkingCars(){
        return this.racingCars.filter(racingCar => racingCar.workingStatus == true); 

    }
    
    checkForBreakDowns(){
        let workingCars= this.checkWorkingCars();
        workingCars.forEach(workingCar =>{
            if(workingCar.breakDownC >Math.random()){
                console.log(`oh no ${workingCar.driverName} has broken down!`);
                workingCar.workingStatus = false;
            }
        });
    }
    stopCarRace(){
        clearInterval(this.raceInterval)

    }
    declareWinner(car){
        car.raceWinner = true;
        console.log(`AND THE WINNER IS  ${car.name} by ${car.driverName}`);
        this.stopCarRace();
    }

    trackPosition(){
    this.raceInterval = setInterval(()=>{
        this.checkForBreakDowns();
        let racingCars = this.checkWorkingCars();
        console.log(racingCars);
        if(racingCars.length ==1){
            console.log(`the only car stiilll functional!! ${racingCars[0].name} by ${racingCars[0].driverName}`);
            this.declareWinner(racingCars[0]);
        }
    },250)
    }
    beginCarRace(){
        console.log("3....2....1....GO!!!");
    this.trackPosition();
    }


    fetchData(){
        fetch('data/raceData.json')
            .then(data => data.json())
            .then(data => {
                this.weatherEffects = data.weather;
                this.trackLength=
                data.trackLength;
                this.racingCars=
                data.racingCars;
                console.log(this.weather);
                console.log(this.trackLength);
                console.log(this.racingCars);
                this.weatherEffect();
                this.beginCarRace();
            })
        }
    }
        let myTrack = new Racer();
