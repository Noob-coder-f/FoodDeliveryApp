import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
// import cardImg from '../assest/img2.jpeg'
// import foodImg from '../assest/foode.jpg'


export default function Card(props) {


    let foodData = props.foodItems;

    let dispatch = useDispatchCart()
    const data = useCart();


    const priceref = useRef();

    let options = props.options;
    let priceOpt = Object.keys(options);


    const [qty, setqty] = useState(1);
    const [size, setsize] = useState("")

    const handleaddToCart = async () => {

        let food = []
        for (const item of data) {
            if (item.id === foodData._id) {
                food = item
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: foodData._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {

                await dispatch({ type: "ADD", id: foodData._id, name: foodData.name, img: foodData.img, price: finalPrice, qty: qty, size: size })
                return
            }
        }

        await dispatch({ type: "ADD", id: foodData._id, name: foodData.name, img: foodData.img, price: finalPrice, qty: qty, size: size })
        return


        // await console.log(data);
    }

    const finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setsize(priceref.current.value)
    }, [])

    return (
        <div >
            <div className="card mt-3  rounded-5 shadow-sm" style={{ width: "18rem", maxHeight: "500px", overflow: "hidden", borderRadius: "22px",border:"none" }}>

                <img src={foodData.img} className="card-img-top" alt="..." style={{ height: "130px", objectFit: "cover" }} />

                {/* < div style={{height:"200px", overflow: "hidden",backgroundColor:"white" }} className="overflow-hidden rounded-top-5 p-1 ">
                <img src={cardImg}   className="card-img-top  rounded-top-5" alt="..." style={{ height:"200px",  objectFit: "cover"  }} />

                </div> */}

                {/* <div className="overflow-hidden  rounded-top-5" style={{ height: "200px" }}>
                    <img
                        src={foodImg}
                        className="w h-80"
                        alt="food"
                        style={{ objectFit: "cover",}}
                        width={290}
                        height={230}
                    />
                </div> */}



                <div className="card-body text-center bg-white text-dark">
                    <h5 className="card-title">{foodData.name}</h5>
                    <p className="card-text">This is Some  content.</p>
                    <div className='  w-100'>
                        <select className=' mx-1 h-100  bg-white text-black rounded' onChange={(e) => setqty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className='mx-1  h-100   bg-white text-black rounded' ref={priceref} onChange={(e) => setsize(e.target.value)}>
                            {priceOpt.map((op) => {
                                return (

                                    <option key={op} value={op}>{op}</option>
                                )
                            })
                            }
                        </select>

                        <div className='d-inline h-100 fs-5 mx-1' style={{ color: "#D2042D" }}>₹{finalPrice}/- </div>

                    </div>
                    {/* <hr></hr> */}
                    
                    <button className=' mt-2 rounded-3 px-4 py-2' style={{ backgroundColor: "rgba(210, 4, 45, 0.3)", color: "#D2042D" }} onClick={handleaddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
