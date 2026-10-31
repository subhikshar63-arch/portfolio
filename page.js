
// import Image from "next/image"
// export default function page(){
//   return(
//     <div>
//     <Image
//     src="/favicon.ico"
//     alt="img"
//     height="50"
//     width="50"
//     />
//     <p></p>
//     <p>student</p>
//     <p>contact : 47877-86873</p>
//     </div>
    
//   )
// }
//props: (property) props are the arguements passed into 
//react components,props are passed to components via HTML 
//attributes .props stands for properties.

// function User({name , age, email}){
//   return(
//     <>d
//     <p> hello , iam {name}</p>
//     <p> my age: {age}</p>
//     <p> my email : {email}</p>
//     </>
//   )
// }
//rendering list: displaying multiple pieces of data from an array
//let arr= [23,24,25]
//map,reduce,filter
//export default function page(){
 // const arr=["apple","banana","orange"]

//  export default function page(){
//  const fruit =["apple","banana","orange"]
//  return(
//   <div>
//    {fruit.map((fruit) => (
//     <h3>{fruit}</h3>
//    ))}
//   </div>
//  )
//   }

  // export default function page() {
  //   const student=[
  //      {id: 1, name: "rahul", age: 20},
  //      {id: 2, name: "anita", age: 21},
  //      {id: 3, name: "kiran", age: 22},
  //   ];
  //   return(
  //     <div>
  //       {student.map((student) => (
  //         <div key={student.id}>
  //          <h3>{student.name}</h3>
  //          <p>age: {student.age}</p>
  //         </div>
  //       ))}
  //     </div>
  //   )
    
  // }

 
  // function Greeting ({isLoggedIn}) {
  //   let isLoggedIn v= false
  //   return
  //   <h1>{isLoggedIn ? "welcome back" : "please sign in"}
  //   </h1>;
  // }
  // HW:-
  //ternary operator
  //props :try basic questions
  //rendering links
  //map function injs and react compo
//   const conferenceData = {
//   name: "React Summit 2026",
//   maxCapacity: 5,
//   attendees: [
//     { id: 1, name: "Alice Johnson", role: "Speaker", isCheckedIn: true, isVIP: true },
//     { id: 2, name: "Bob Smith", role: "Attendee", isCheckedIn: false, isVIP: false },
//     { id: 3, name: "Charlie Davis", role: "Volunteer", isCheckedIn: true, isVIP: false },
//     { id: 4, name: "Diana Prince", role: "Speaker", isCheckedIn: false, isVIP: true },
//     { id: 5, name: "Evan Wright", role: "Attendee", isCheckedIn: true, isVIP: false },
//   ]
// };


// export default function Home() {
//   return (
//     <div className="app">
//       <h1>{conferenceData.name} Dashboard</h1>
//       {/* TODO: Add components and logic here */}
//     </div>
//   );
// }

//state management
// import State from "./state";

// export default function Home() {
//   return(
//     <>
//     <State />
//     </>
//   )
// }
// "use Client"
// import {useState} from "react"
// export default function  form(){
//   return(
//     <div>
//       <input type="text" placeholder="enter your name"/>
//       <br />
//       <input type="text" placeholder="enter your email"/>
//       <br />
//       <button>submit</button>
//     </div>
//   )
// }

// import State from './state'
// import Form from './form'
// import Navbar from './navbar'
// export default function Home(){
//     return(
//         <>
//         <Navbar/>
//         <p>welcome to home page</p>
//         </>
//     )
// }
// import "./style.css";

// export default function Page() {
//   return (
//     <div className="page">

//       <div className="photo">
//         <div className="circle"></div>
//       </div>

//       <div className="info">
//         <p className="hello">HELLO, I'M</p>

//         <h1>Subhiksha</h1>

//         <h2>Computer Science Student</h2>

//         <p className="description">
//           I am a Computer Science student interested in
//           web development and new technologies.
//         </p>

//         <button>Contact Me</button>
//       </div>

//     </div>
//   );
// }


// import ProductCard from "./productcard";

// export default function Home() {
//   return (
//     <div>
//       <ProductCard />
//     </div>
//   );
// }

// import Fetchdata from "./fetchdata";
// export default function  Home(){
//   return(
//     <>
//      <Fetchdata />
//     </>
//   );
// }


import "./style.css";

export default function Home() {
  return (
    <div className="container">
      <div className="circle">
        <div className="inner-circle"></div>
      </div>

      <div className="content">
        <p className="hello">HELLO, I'M</p>

        <h1>Subhiksha</h1>

        <h2>Computer Science Student</h2>

        <p className="description">
          I am a Computer Science student interested in web
          development and new technologies.
        </p>

        <button className="contact">Contact Me</button>
      </div>
    </div>
  );
}
