import React, { useState, useRef} from 'react';


function Berechnung () {

    const[dauer, setDauer] = useState('')
    const preis = 10;

    const dauerInput = useRef()

     const handleClick = e =>{ 
        e.preventDefault()
    }
    
    function handleChange(){
        setDauer(dauerInput.current.value)
       
    }
 
            return (
                <div className="formbody">
                    <div> 
                        <h1>Dauer eingeben</h1> 
                    </div> 
                    <br></br>
                    <form onSubmit={handleClick}>
                    <label>Berechnung des Fahrpreises</label>
                    <br></br>
                    <input type='text'onChange={handleChange} ref={dauerInput}></input>
                    <br />
                    
                    </form>
                    <div> 
                        <h1>Preis: {dauer*preis}</h1> 
                    </div> 
                   
                                      
                </div>
            )
        }



export default Berechnung;