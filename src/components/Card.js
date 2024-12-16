import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
import { type } from '@testing-library/user-event/dist/type';


export default function Card(props) {


    let foodData=props.foodItems;

let dispatch=useDispatchCart()
const data= useCart();


const priceref= useRef();

    let options=props.options;
    let priceOpt= Object.keys(options);


    const [qty,setqty]=useState(1);
    const [size,setsize]=useState("")

    const handleaddToCart=async()=>{

        let food=[]
    for(const item of data){
        if(item.id ===foodData._id){
            food=item
        break;
    }
}
    if(food !==[]){
        if(food.size ===size){
            await dispatch({type:"UPDATE",id:foodData._id,price:finalPrice , qty:qty})
            return
        }
        else if(food.size !==size){

            await dispatch({type:"ADD",id:foodData._id,name:foodData.name,img:foodData.img, price:finalPrice  ,qty:qty,size:size})
            return
    }
}

await dispatch({type:"ADD",id:foodData._id,name:foodData.name,img:foodData.img, price:finalPrice  ,qty:qty,size:size})
return


        // await console.log(data);
    }

    const finalPrice=qty*parseInt(options[size]);
    useEffect(()=>{
        setsize(priceref.current.value)
    },[])

  return (
    <div>
    <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <img src={foodData.img} className="card-img-top" alt="..." style={{height:"130px" , objectFit:"fill"}} />
        <div className="card-body">
            <h5 className="card-title">{foodData.name}</h5>
            <p className="card-text">This is Some  content.</p>
            <div className='container m-2 w-100'>
                <select className='m-2 h-100  bg-success rounded' onChange={(e)=>setqty(e.target.value)}>
                    {
                        Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })
                    }
                </select>
                <select className='m-2 h-100  bg-success rounded' ref={priceref} onChange={(e)=>setsize(e.target.value)}>
                    {priceOpt.map((op)=>{
                        return(
                            
                            <option key={op} value={op}>{op}</option>
                        )
                    })
                    }
                </select>

                    <div className='d-inline h-100 fs-5'>₹{finalPrice}/- </div>

            </div>
            <hr></hr>
            <button className='btn btn-success jsutify-center ms-2 ' onClick={handleaddToCart}>Add TO Cart</button>
        </div>
    </div>
</div>
  )
}
