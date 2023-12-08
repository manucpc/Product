import React from "react";
import'./App.css';

let i = 0;
const Calculate = (cart) => {
    var user = window.prompt("Enter your name")
    var add = window.prompt("Enter your address ")
    const data = cart.map((cart) => cart.price);
        if (data === 0) {
            window.alert("Empty cart")
        }
        else{
        data.forEach((data)=>{ i = i+ data})
        window.alert(`Your name ${user}\nThe order delivers near ${add}\nThe amount to pay is ${i}`)
    }
}

export default Calculate;