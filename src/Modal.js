import React from 'react'
import ReactDom from 'react-dom'


const MODEL_STYLE={
    position:'fixed',
    top:'4%',
    left:'22%',
    backgroundColor:'rgb(34, 34, 34)',
    Transform:'translate(-50%, -50%)',
    zIndex:1000,
    height:'90%',
    width:905
}
const OVERLAY_STYLES={
    position:'fixed',
 top:0,
 left:0,
 right:0,
 bottom:0,
 backgroundColor:'rgba(0 0, 0, .7)',
 zIndex:1000,

}

export default function Modal({children, onClose}) {
  return ReactDom.createPortal(
    <>
    <div style={OVERLAY_STYLES} />
    <div style={MODEL_STYLE}>
        <button className='btn bg-danger text-center fs-5' style={{marginLeft:"96%",marginTop:"-35px"}} onClick={onClose}> x </button>
        {children}
    </div>
      
    </>,
    document.getElementById('cart-root')
  )
}
