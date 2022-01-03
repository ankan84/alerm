import React, { useState } from 'react'
import Contain from './Contain'


function Struture() {
    const [inputData, setInputData] = useState();
    const [item, setItem] = useState([]);
    return (
        <>
            <div className='container my-3 input bg-primary '>
                <div className="mb-3">

                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Notepad" onChange={(e) => {
                        setInputData(e.target.value);
                    }} />
                    <i className="fas fa-plus-circle my-2 " style={{
                        color: "white",
                        fontSize: "20px"
                    }}
                        onClick={() => {
                            setItem([...item, inputData]);
                        }}></i>

                </div>
            </div>
            <div className="container my-4" >
                {
                    item.map((ele, index) => {
                        return (<>
                            <div className="contain" key={index}>
                                <p className='btn-primary'>{ele} <span id='right' onClick={() => {
                                     const data=item.filter((e,i)=>{
                                        return i!==index;
                                     })
                                     setItem(data);
                                }}><i class="fas fa-minus-circle"></i></span></p>

                            </div>
                        </>)
                    })
                }

            </div>
        </>
    )
}

export default Struture
