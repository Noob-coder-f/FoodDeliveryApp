// import React, { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Card from '../components/Card'

// export default function Home() {

//     const [search, setSearch] = useState('');
//     const [fooditem, setFooditem] = useState([]);
//     const [foodcat, setFoodcat] = useState([]);

//     const loadData = async () => {
//         fetch("http://localhost:5000/api/fooditem", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then((result) => {
//             result.json().then((resp) => {
//                 console.log(resp[0], resp[1]);

//                 setFooditem(resp[0]);
//                 setFoodcat(resp[1]);

//             })
//         })


//     }

//     useEffect(() => {
//         loadData()


//     }, []);



//     return (
//         <div>

//             <div> <Navbar /></div>
//             <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
//                 <div className="carousel-inner" id='carousel'>

//                     <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>

//                         <div className="d-flex justify-content-center" >
//                             <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
//                             {/* <button className="btn btn-outline-success text-white bg-success " type="submit">Search</button> */}
//                         </div>
//                     </div>

//                     <div className="carousel-item active">
//                         <img src="https://jontotheworld.com/wp-content/uploads/2015/03/larsian-cebu.jpg" className="d-block w-100" alt="..."  />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://www.ytravelblog.com/wp-content/uploads/2013/03/Thai-street-food-1-of-11.jpg" className="d-block w-100" alt="..."  />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://tse4.mm.bing.net/th?id=OIP.bq0Us_DbewJ9nIviuSI4SAHaEo&pid=Api&P=0&h=180" className="d-block w-100" alt="..."  />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//             </div>


//             <div className='container'>
//                 {
//                     foodcat !== [] ? foodcat.map((data) => {

//                         return (
//                             <div className="row mb-3">

//                                 <div key={data._id} className='fs-3 m-3' >
//                                     {data.CategoryName}
//                                 </div>
//                                 <hr />
//                                 {
//                                     fooditem !== [] ? fooditem.filter((item) => (item.CategoryName === data.CategoryName) &&

//                                         (item.name.toLowerCase().includes(search.toLowerCase()))

//                                     ).map((filterItem) => {

//                                         return (
//                                             <div className='col-12 col-md-6 col-lg-3'>
//                                                 <Card 
//                                                  foodItems={filterItem} 
//                                                  options={filterItem.options[0]} />
//                                             </div>
//                                         )

//                                     }) : <div>No Such Data Found</div>
//                                 }
//                             </div>
//                         )


//                     }) : ""
//                 }
//                 {/* <Card /> */}


//             </div>

//             <div> <Footer /></div>

//         </div>
//     )
// }


import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import carouselImg from '../assest/carousel.jpeg';

export default function Home() {
  const [search, setSearch] = useState('');
  const [fooditem, setFooditem] = useState([]);
  const [foodcat, setFoodcat] = useState([]);

  const loadData = async () => {
    console.log("API Base URL:", process.env.REACT_APP_API_URL);

    try {
      // ❌ OLD HARDCODED LOCALHOST URL (Only works locally)
      // const response = await fetch("http://localhost:5000/api/fooditem", {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });

      // ✅ NEW CODE: Uses environment variable (works on Vercel + local)
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/fooditem`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (Array.isArray(data) && data.length >= 2) {
        setFooditem(data[0] || []);
        setFoodcat(data[1] || []);
      } else {
        console.warn("Invalid data format from API", data);
        setFooditem([]);
        setFoodcat([]);
      }
    } catch (error) {
      console.error("Error loading data:", error);
      setFooditem([]);
      setFoodcat([]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='text-black' style={{ backgroundColor: "#D9D9D9" }}>
      <Navbar />

      {/* Carousel */}
      <div>
        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" id='carousel'>
            <div
              className="carousel-caption"
              style={{ top: "10%", transform: "translateY(0%)", zIndex: "10" }}
            >
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2 bg-white text-dark w-50 rounded-pill px-4 py-2"
                  type="search"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="carousel-item active">
              <img src={carouselImg} height={500} className="d-block w-100" alt="carousel-1" />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" className="d-block w-100" alt="carousel-2" />
            </div>
            <div className="carousel-item">
              <img src="https://t3.ftcdn.net/jpg/10/16/17/94/360_F_1016179460_CI6Aq4b7QMgdVNdsUJYRlmlrEh8FQUJ9.jpg" className="d-block w-100" alt="carousel-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Category and Cards */}
      <div className='container'>
        {Array.isArray(foodcat) && foodcat.length > 0 ? (
          foodcat.map((data) => (
            <div className="row" key={data._id}>
              <div className='fs-3 m-3'>{data.CategoryName}</div>
              <hr className='bg-black' />

              {Array.isArray(fooditem) &&
              fooditem.filter((item) =>
                item.CategoryName === data.CategoryName &&
                (item.name?.toLowerCase() || '').includes(search.toLowerCase())
              ).length > 0 ? (
                fooditem
                  .filter((item) =>
                    item.CategoryName === data.CategoryName &&
                    (item.name?.toLowerCase() || '').includes(search.toLowerCase())
                  )
                  .map((filterItem) => (
                    <div className='col-12 col-md-6 col-lg-3' key={filterItem._id}>
                      <Card
                        foodItems={filterItem}
                        options={filterItem.options?.[0] || {}}
                      />
                    </div>
                  ))
              ) : (
                <div className='text-center text-danger'>No Such Data Found</div>
              )}
            </div>
          ))
        ) : (
          <div className='text-center mt-5 text-secondary'>Loading Categories...</div>
        )}
      </div>

      <Footer />
    </div>
  );
}

