import "./Hobbies.css";
import Header from "../../Components/Header";
import { useState } from "react";
import React from "react";

function Hobbies(){

    const storeItems = [{"id": 1, "name": "Shoe", "price": 79 }
    , {"id": 2, "name": "Jacket", "price": 200}, {"id": 3, "name": "Lakers Socks", "price": 44},
     {"id": 4, "name": "Gucci Pant", "price": 80}, {"id": 5, "name": "Sunglass", "price": 111 }]
const [kart, setKart] = useState([]);

// useEffect(() => {
// }, [kart] );

function addToKart(e){
    const itemToAdd = e.target.id;
     setKart([...kart, itemToAdd]);
     textInput.current.value = "";
     console.log(kart);
};
let textInput = React.createRef();

// function handleCheck(e) {
//     alert(e.target.id);
//     console.log(e.target.id);
// }

    return(
        <div>
        <Header/>

            <h1>Hobbies Page</h1>
            <div>
                <h1>MY SHOPPING BASKET</h1>
                <ul>
                    {kart.map((item, index) => { console.log(item); 
                        return(<li key={index}>{item}</li>) })};
                </ul>
            </div>
            <h1>STORE ITEMS</h1>
            <input ref={textInput}></input>
            <button>Add</button>
            <ul >
                    {storeItems.map((item, index)=>{ return(
                    <li  key={index} >
                        <div>
                            <p id={item.name} onClick={addToKart} >{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    </li>)})};
            </ul>
        </div>
    );
}

export default Hobbies;