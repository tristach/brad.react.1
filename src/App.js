import { useState} from 'react';
import OurHeader from "./OurHeader";
import Footer from "./Footer";
import PetArray from "./PetArray";
import TimeArea from './TimeArea';

const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Pawsalot", species: "dog", age: "6", id: 789789789 }
]



function App() {
  const [theTime, setTheTime] =  useState(new Date().toLocaleString()); 
  return (
  <div>
   
    < OurHeader />
    < LikeArea />
    <ul>
      {pets.map(pet => <PetArray name={pet.name} species={pet.species} age={pet.age} key={pet.id}/>)}
    </ul>
    < Footer />
      {/* <Milliseconds  /> */}
      <TimeArea theTime={theTime}/>
  </div>
  )

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0)

  function increaseLikeHandler() {
    setLikeCount(function(prev) {
      return prev + 1;
    })  
  }


  function decreaseLikeHandler() {
    setLikeCount(prev => {
      if (prev > 0) {
        return prev - 1
      }
      return 0
    })
  }

  
  return (
    <>
    <button onClick={increaseLikeHandler}>Incrase likes</button>
    <button oonClick={decreaseLikeHandler}>Decrease likes</button>
    <h2>This page has been liked {likeCount} times.</h2>
    
    </>
  )
}






 function TimeArea() {
  useState(new Date().toLocaleString())

  setTimeout(function() {
    setTheTime(new Date().toLocaleString())
  }, 1000)

  return <p>The current time is {theTime}</p>
 } 
 

}


// const [number, setNumber] = useState(0) //Setup state


//  {/* <div>Number={number}</div> // J
//     <button onClick={add}>Add</button>

//  {/* <Hi num={number}/> */} JSX

// // function Hi(props) {
// //   const {num} = props;
// //   return  <div>Now it's {num} time.</div>
// // }




// // function add() {
// //   //   setNumber(number + 1)
// //   // }
  










export default App;
