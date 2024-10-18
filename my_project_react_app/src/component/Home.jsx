// function Home(){
//     return(
//         <h2>Home page</h2>
//     )
// }


// export default Home


// import React,{useState,useEffect} from "react";
// import axios from 'axios'

// const Home=()=>{
//     const [product,setProduct]=useState([])
//     const [add,setAdd]=useState(false)
//     const [currentProduct,setCurrentProduct]=useState(null)
//     useEffect(()=>{
//         axios.get('https://')
//         .then(response=>setProduct(response.data,Products))
//         .catch(error => console.log(error))
//     },[])

//     const view_p=(products)=>{
//         setAdd(true);
//         setCurrentProduct(products);
//         // console.log(add,currentProduct);

//     }

//     return(
//         <div className="container mt-3">
//             {/* {() => editTask(task)} */}
//             <div className="row" id="a1">
//                 {product.map(pro=>(
//                     <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id} >
//                         <div className="card" onClick={()=>view_p(pro)}>
//                             <img className="card-img-top img-fluid" src={pro.image} alt="product image"/>
//                             <div className="card-body">
//                                 <h4 className="card-title">{pro.p_name}</h4>
//                                 <h6 className="card-text">${pro.price}</h6>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }





import img1 from '../assets/imgesprjt/img1.webp';
import img2 from '../assets/imgesprjt/paris.jpg';
import img3 from '../assets/imgesprjt/img3.jpg';
import Footer from './Footer';
import React, { useState, useEffect } from "react";
import axios from 'axios';

// function Home() {

const Home = () => {
  const [product, setProduct] = useState([])
  const [add, setAdd] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)
  useEffect(() => {
    axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
      .then(response => setProduct(response.data))
      .catch(error => console.log(error))
  }, []);

  const view_p = (products) => {
    setAdd(true);
    setCurrentProduct(products);
  };

  return (

    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} alt="Chicago" className="d-block" style={{ width: '100%' }} />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} alt="New York" className="d-block" style={{ width: '100%' }} />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>



      <div className="container mt-3">
        <div className="row" id="a1">
          {product.map(pro => (
            <div className="col-lg-3 col-md-3 c0l-sm-6" key={pro.id}>
              <div className="card" onClick={() => view_p(pro)}>
                <img childrenlassName="card-img-top img-fluid" src={pro.image} alt="product image" />
                <div className="card-body">
                  <h4 className="card-title">{pro.title}</h4>
                  <h6 className="card-text">&{pro.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        {add ?(
          <ViewProduct
          currentproduct={currentProduct}
          />
        ):console.log('view product  ')};
      </div>

      <Footer />
    </>
  );
};



const ViewProduct=(currentproducts)=>{
  const [product,setProduct]=useState(currentproducts)
  document.getElementById("a1").style.display="none"
  return(
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 d-flex justify-content-center">
          <img src={product.currentproduct.image} alt="" className="img-fluid col-lg-12 w-75"/>
        </div>
        <div className="desc col-lg-6">
          <h2>{product.currentproduct.p_name}</h2>
          <p>{product.currentproduct.description}</p>
          {/* console.log(product.currentProduct);*/}
          <p>&{product.currentproduct.price}</p>
          <div className="row">
            <button className="btn btn-warning col-lg-10">Add to cart</button>
            <button className="btn btn-success col-lg-10 mt-1">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


