import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
// import Camera from "./components/Camera";
import "./App.css";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const cameras = [
//     { name: "Camera 1", url: "192.168.100.248" },
//     { name: "Camera 2", url: "Recording 2" },
//   ];

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               !isLoggedIn ? (
//                 <Login onLogin={handleLogin} />
//               ) : (
//                 <Home cameras={cameras} />
//               )
//             }
//           />
//           <Route path="/camera/:id" element={<Camera cameras={cameras} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerId, setCustomerId] = useState("");

  const handleLogin = (customerId) => {
    setIsLoggedIn(true);
    setCustomerId(customerId);
  };

  return(<HomePage />);

  // return (
  //   <Router>
  //     <div className="app">
  //       <Routes>
  //         <Route
  //           path="/"
  //           element={!isLoggedIn ? <Login onLogin={handleLogin} /> : null}
  //         />
  //         {/* <Route path="/" element={!isLoggedIn ? (<Login onLogin={handleLogin} />) : (<Home cameras={cameras} />)}/> */}
  //         {/* <Route path="/camera/:id" element={<Camera cameras={cameras} />} /> */}

  //         <Route path="/signup" element={<Signup />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}

export default App;
