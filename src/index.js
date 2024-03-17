import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className= "my_style"> 
      <h2>{props.name}</h2>
      <img
        src={props.image}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
{/* 
      <h2>{props.name2}</h2>
      <img
        src={props.image2}
        alt="tree_img"
      />
      <p>{props.tel2}</p>
      <p>{props.email2}</p> */}
    
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
        name = "Beyounce"    
        image = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel = "+123 456 789"
        email = "b@beyonce.com" 
    />

    <Card 
        name = "Tree"    
        image = "https://st2.depositphotos.com/3745557/7435/i/450/depositphotos_74355965-stock-photo-beautiful-oak-at-the-sunset.jpg"
        tel = "+987 654 321"
        email = "c@suguru.com" 
        />
  </div>,
  document.getElementById("root")
);
