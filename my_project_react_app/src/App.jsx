// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App







// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Layout from '../component/Layout'
// import Home from '../component/Home'
// import About from '../component/About'
// import Product from '../component/Product'
// import img1 from '../assets/imgesprjt/img1.webp'

//  function App(){
//   return(
//     <>
//     <div style={appStyle}></div>
//     <header>
//         <h1>Welcome to My Website</h1>
//         <img src="" alt="My Image" style={imageStyle} />
//       </header>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="product" element={<Product/>}/>
        
      
//       </Route>
//     </Routes>
//     <a href="" target="_blank">
//       <img src={img1} className="Img react" alt="React img" />
//     </a>
//     </BrowserRouter>
//     </>
//   )
//  }

//  export default App




import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Product from './Component/Product';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Product" element={<Product/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
