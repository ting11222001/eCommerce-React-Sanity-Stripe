import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Plants of many variations</p>
      </div>

      <div className="products-container">
        {['Product1', 'Product2'].map((product) => product)}
      </div>

      Footer
    </>
  )
}

export default Home