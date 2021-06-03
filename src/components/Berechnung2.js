import React, { useEffect, useState, useRef} from 'react';


function Berechnung2 () {

    const[startTime, setStarttime] = useState();
    const[endTime, setEndtime] = useState();
    const[dauer, setDauer] = useState();
    const cost = 0.01;
    const[time ,setTime] = useState(() =>new Date().toLocaleTimeString() );
    const[startTime2, setStarttime2] = useState(new Date());
    const[endTime2, setEndtime2] = useState(new Date());
    var preis = dauer*cost;
    

    useEffect(()=>{
        setInterval(()=>{
             setTime(new Date().toLocaleTimeString())

         },1000)
     })


    function startTripTime(){
        setStarttime(time)
        setStarttime2(new Date())
        console.log(startTime2)
    }
    function calculatePreis(){
    
        console.log(dauer);
        console.log(preis);  
    }

    function endTripTime(){
        setEndtime(time)
        setEndtime2(new Date())   
        calculatePreis(); 
        setDauer((Math.abs(endTime2-startTime2)/(1000)).toFixed(1))
        
    }


    
    return (
        <div className="formbody">

            <button onClick={startTripTime}>Start</button>
            <button onClick={endTripTime}>End</button>
            
           
            <div>
                <h1>Preis:{preis}€ </h1> 
            </div>
            <div>
                Current time{time}
                <br />
                Start time{startTime}
                <br />
                End time{endTime}
                <br />
                trip Time {dauer}
            </div>       
                   
                                      
                </div>
            )
        }



export default Berechnung2;