import React, {userState} from 'react';
function MyComponent(){

     const [name, setName] = useState("Guest");
     const [age, setAge] = userState(0);
     const [isEmployed, setIsEmployed] = userState(false);

     const upateName = () => {
          setName =("Spongebob");
     }

     const incrementAge = () => {
          setAge(age + 1);
     }

     const toggleEmployedStatus = () => {
          setIsEmployed(!isEmployed);
     }

     return( <div>
               <p>Name: {name}</p>
               <button onClick={upateName}>Set Name</button>

               <p>Age: {age}</p>
               <button onClick={incrementAge}>Incerement</button>

               <p>Is employed: {isemployed ? "Yes" : "No"}</p>
               <button onClick={toggleEmployedStatus}>Incerement Age</button>
     </div>
     )

}

export default MyComponent
