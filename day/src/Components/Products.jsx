import React from 'react'
import p1 from "../assets/p1.avif";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.avif";

function Products() {
  return (
    <div>
      <section className="products">
        <h2>our Products</h2>
        <div className='product-grid'>
            {[p1,p2,p3,p4].map((img,i)=>(
                <div className='card' key={i}>
                    <img src={img} />
                    <h3>product {i+1}</h3>
                    <p className="price">Rs.{400 + i * 500}</p>
                    <button>Add to cart</button>
                    </div>
            ))}
        </div>
      </section>
    
    </div>
  )
}

export default Products
