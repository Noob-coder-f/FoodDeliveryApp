// // import React, { useEffect, useState } from 'react'
// // import Navbar from '../components/Navbar'
// // import Footer from '../components/Footer'

// // export default function MyOrder() {

// //     const [orderdata, setOrderdata] = useState("");


// //     const fetchMyOrder=async()=>{
// //         console.log("My order ke andrh",localStorage.getItem("userEmail"));

// //         const response = await fetch('http://localhost:5000/api/myorderdata', {
// //             method: 'POST',
// //             headers: {
// //               "Content-Type": "application/json"
// //             },
// //             body:JSON.stringify({email:localStorage.getItem("userEmail")})
// //         }).then( async(res)=>{
// //             let response= await res.json()
// //             await setOrderdata(response)
// //         })

// //     }

// //     useEffect(()=>{
// //         fetchMyOrder()
// //     },[])

// //     return (
// //         <>
// //             <div>
// //                 <Navbar />
// //             </div>

// //             <div className='container'>
// //                 <div className='row'>
// //                     {
// //                         orderdata !== {} ? Array(orderdata).map((data) => {

// //                             return (
// //                                 data.orderdata ? data.orderdata.order_data.slice(0).reverse().map((item) => {
// //                                     return (
// //                                         item.map((arrayData) => {
// //                                             return (
// //                                                 <div>
// //                                                     {
// //                                                         arrayData.order_date ? <div className='m-auto mt-5'>
// //                                                             {date = arrayData.order_date}
// //                                                             <hr />
// //                                                         </div> :
// //                                                             <div className='col-12 col-md-6 col-lg-3'>
// //                                                                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
// //                                                                     {/* <img src={foodData.img} className="card-img-top" alt="..." style={{height:"130px" , objectFit:"fill"}} /> */}

// //                                                                     <div className="card-body">
// //                                                                         <h5 className="card-title">{arrayData.name}</h5>
// //                                                                         <div className='container w-100 p-0 ' style={{ height: '38px' }}>
// //                                                                             <span className='m-1'>{arrayData.qty}</span>
// //                                                                             <span className='m-1'>{arrayData.size}</span>
// //                                                                             <span className='m-1'>{data}</span>
// //                                                                             <div className='d-inline ms-2 h-100 w-20 fs-5'>{arrayData.price}</div>
// //                                                                         </div>

// //                                                                     </div>

// //                                                                 </div>

// //                                                             </div>
// //                                                     }
// //                                                 </div>
// //                                             )
// //                                         })

// //                                     )


// //                                 }) : ""

// //                             )

// //                         }) : <div className='m-auto fs-6 text-center'>Yoy havn't order anything</div>

// //                     }


// //                 </div>
// //             </div>




// //             <div>
// //                 <Footer />
// //             </div>
// //         </>
// //     )
// // }








// //chatgpt


// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function MyOrder() {
//     const [orderdata, setOrderdata] = useState(null);

//     const fetchMyOrder = async () => {
//         console.log("Fetching order for:", localStorage.getItem("userEmail"));

//         try {
//             const res = await fetch('http://localhost:5000/api/myorderdata', {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ email: localStorage.getItem("userEmail") })
//             });

//             if (!res.ok) throw new Error('Network response was not ok');

//             const data = await res.json();
//             console.log('Fetched order data:', data);
//             setOrderdata(data.orderdata); // Accessing the actual order data
//         } catch (error) {
//             console.error('Error fetching order data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchMyOrder();
//     }, []);

//     if (!orderdata) {
//         return <div>Loading...</div>;
//     }

//     console.log('Order data:  matlab kuch h', orderdata.order_data);

//     return (
//         <>
//             <Navbar />
//             <div className='container'>
//                 <div className='row'>
//                     {orderdata && orderdata.order_data && orderdata.order_data.length >0 ? (
//                         orderdata.order_data.map((item, index) => {
//                             if (Array.isArray(item)) {

//                                 console.log("orderdata ke ander order_data me item",item)

//                                 return item.map((orderItem, orderItemIndex) => {


//                                     <div key={orderItemIndex} className='col-12 col-md-6 col-lg-3'>
//                                         { console.log("item me orderItem",orderItem.name)}





//                                         <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                                             <img src={orderItem.img} className="card-img-top" alt={orderItem.name} style={{ height: "130px", objectFit: "fill" }} />
//                                             <div className="card-body">

//                                                 <h5 className="card-title">{orderItem.name}</h5>
//                                                 <div className='container w-100 p-0 ' style={{ height: '38px' }}>
//                                                     <span className='m-1'>{orderItem.qty}</span>
//                                                     <span className='m-1'>{orderItem.size}</span>
//                                                     {/* <span className='m-1'>{orderItem.date}</span> */}
//                                                     <div className='d-inline ms-2 h-100 w-20 fs-5'>{orderItem.price} INR</div>
//                                                 </div>
//                                             </div>
//                                         </div>




//                                     </div>
//                             });


//                             } else if (item.order_date) {
//                                 return (
//                                     <div key={index} className='m-auto mt-5'>
//                                         <h4>Order Date: {item.order_date}</h4>
//                                         <hr />
//                                     </div>
//                                 );
//                             } else {
//                                 return null;
//                             }
//                         })
//                     ) : (
//                         <div className='m-auto fs-6 text-center'>You haven't ordered anything</div>
//                     )}
// +               </div>
//             </div>
//             <Footer />
//         </>
//     );
// }




import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyOrder() {
    const [orderdata, setOrderdata] = useState(null);

    const fetchMyOrder = async () => {
        console.log("Fetching order for:", localStorage.getItem("userEmail"));

        try {
            const res = await fetch('http://localhost:5000/api/myorderdata', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: localStorage.getItem("userEmail") })
            });

            if (!res.ok) throw new Error('Network response was not ok');

            const data = await res.json();
            console.log('Fetched order data:', data);
            setOrderdata(data.orderdata); // Accessing the actual order data
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    if (!orderdata) {
        return <div>Loading...</div>;
    }
    console.log('is time Order_data pr h (6)', orderdata.order_data);

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderdata && orderdata.order_data && orderdata.order_data.length > 0 ? (
                        orderdata.order_data.map((item, index) => {
                            console.log(` order_data ke andr h :order_data me item ${index}`, item)
                            if (Array.isArray(item)) {
                                return item.map((orderItem, orderItemIndex) => {
                                    //  item.map((orderItem, orderItemIndex) => {

                                    console.log(` item kke andr hai :item me orderItem${orderItemIndex}`, orderItem)
                                    

                                    if (Array.isArray(orderItem)) {
                                        orderItem.map((fitem, indexfitem) => {
                                            // console.log(` orderitem ke andr h :orderitem me fitem ${indexfitem}`, fitem)
                                                
                                                return( <div key={indexfitem} className='col-12 col-md-6 col-lg-3'>

                                                {console.log(` orderitem ke andr h :orderitem me fitem ${indexfitem}`, fitem.name)}
                                                <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                                                    <img src={fitem.img} className="card-img-top" alt={fitem.name} style={{ height: "130px", objectFit: "fill" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{fitem.name}</h5>
                                                        <div className='container w-100 p-0 ' style={{ height: '38px' }}>
                                                            <span className='m-1'>{fitem.qty}</span>
                                                            <span className='m-1'>{fitem.size}</span>
                                                            <div className='d-inline ms-2 h-100 w-20 fs-5'>{fitem.price} INR</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                )

                                                })
                                    }
                                    else {
                                        return <div key={orderItemIndex} className='col-12 col-md-6 col-lg-3'>

                                            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                                                <img src={orderItem.img} className="card-img-top" alt={orderItem.name} style={{ height: "130px", objectFit: "fill" }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{orderItem.name}</h5>
                                                    <div className='container w-100 p-0 ' style={{ height: '38px' }}>
                                                        <span className='m-1'>{orderItem.qty}</span>
                                                        <span className='m-1'>{orderItem.size}</span>
                                                        <div className='d-inline ms-2 h-100 w-20 fs-5'>{orderItem.price} INR</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                // })




                                    

                                        {/* <div key={orderItemIndex} className='col-12 col-md-6 col-lg-3'>

                                        


                                        

                                        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                                            <img src={orderItem.img} className="card-img-top" alt={orderItem.name} style={{ height: "130px", objectFit: "fill" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{orderItem.name}</h5>
                                                <div className='container w-100 p-0 ' style={{ height: '38px' }}>
                                                    <span className='m-1'>{orderItem.qty}</span>
                                                    <span className='m-1'>{orderItem.size}</span>
                                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>{orderItem.price} INR</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    
                                });
                            } else if (item.order_date) {
                                return (
                                    <div key={index} className='m-auto mt-5'>
                                        <h4>Order Date: {item.order_date}</h4>
                                        <hr />
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })
                    ) : (
                        <div className='m-auto fs-6 text-center'>You haven't ordered anything</div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
