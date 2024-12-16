import React from 'react'
import { useDispatchCart, useCart } from '../components/ContextReducer'
export default function Cart() {
    const data = useCart();
    const dispatch = useDispatchCart();
    if (data == 0) {

        return <div className='m-5 text-center w-100 fs-5 text-white'>Cart Is Empty</div>
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)

    const handleCheakOut = async () => {

        let userEmail = localStorage.getItem("userEmail");
        console.log("user emal",userEmail)
        let response = await fetch("http://localhost:5000/api/orderdata", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                order_data:data,
                email:userEmail,
                order_date:new Date().toDateString()

            })
        });
        console.log("Order response",response)
        if(response.status===200){
            dispatch({type:"DROP"})
        }
    }
    return (
        <div>
            <div className='container m-auto mt-5 table-responsive-sm table-responsive-md '>
                <table className='table table-responsive'>
                    <thead className='text-success fs-4 '>

                        <tr >
                            <th scope='col' >#</th>
                            <th scope='col' >Name</th>
                            <th scope='col' >Quantity</th>
                            <th scope='col' >Option</th>
                            <th scope='col' >Amount</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            data.map((food, index) => {

                                return (

                                    <tr className='text-white fs-4 m-2' key={food._id}>

                                        <th >{index + 1}</th>
                                        <td>{food.name}</td>
                                        <td>{food.qty}</td>
                                        <td>{food.size}</td>
                                        <td>{food.price}</td>
                                        <td><button type='button' className='btn p-0'><img src="" alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}></img>dlt</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div><h1 className='fs-2 text-success'>Total Price:{totalPrice}/-</h1>

                </div>
                <div>
                    <button className='btn mt-5 bg-success' onClick={()=>handleCheakOut()}>Cheak Out</button>
                </div>

            </div>

        </div>
    )
}
