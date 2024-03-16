import React from 'react';
import shoe from './Assests/shoe.png'
function Card(){
  let [hoverStatus , setHoverStatus] = React.useState(false);
  let [clickStatus , setClickStatus] = React.useState(false);
  let [toShow , setToShow] = React.useState(window.innerWidth <= 1100 ? true : false);
  window.addEventListener('resize' , ()=>{
    if(window.innerWidth <= 1100){
      setToShow(true)
    }
    else{
      setToShow(false)
    }
  })
  function mouseOver(){
    setHoverStatus(true);
  }
  function mouseOut(){
    setHoverStatus(false);
  }
  function viewDetails(e){
    document.querySelector('.productImage').classList.add('hide');
  }
  function viewProduct(){
    document.querySelector('.productImage').classList.remove('hide');
  }
  return(
    <div className={hoverStatus ? "parent parentActive" : "parent"} onMouseOver={()=>{if(!toShow){mouseOver()}}} onMouseOut={()=>{if(!toShow){mouseOut()}}}>
        <div className={hoverStatus ? "productImage productImageActive" : 'productImage'} >
          <img src={shoe} alt="show" className={hoverStatus ? 'imgactive' : 'imginActive'}/>
          {toShow && <button onClick={viewDetails}>View Details</button>}
          </div>
          <div className={hoverStatus ? "productDescription productDescriptionActive" : "productDescription"}>

              <div className="productTitle">
                    <h1>NIKE AIR MAX</h1>
                    <p>Men{"'"}s Shoe</p>              
              </div>

              <div className="productDetails">
                  <b style={{fontSize:"1.7rem"}}>PRODUCT DETAILS</b>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>


              <div className="sizes">
                  <b>SIZE</b>
                  <div className='sizesParent'>
                    <div className="size">36</div>
                    <div className="size">38</div>
                    <div className="size">40</div>
                    <div className="size">42</div>
                    <div className="size">44</div>
                  </div>
              </div>
              
              <div className="prices">
              
              <h1><span className='dollarSymbol'>$</span>199.99</h1>
              <button>BUY NOW</button>
              </div>
              {toShow && <button onClick={viewProduct} className='viewProductsButton'>View Product</button>}
          
        </div>
    </div>
  )
}


export default Card;