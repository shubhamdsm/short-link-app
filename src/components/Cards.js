import React from 'react'

function Cards() {
    return (
        <section className='container' style={{backgroundColor:'#F0F1F6',paddingTop:'4rem',paddingBottom:'4rem'}}>
           <div className='d-flex flex-column justify-content-center align-items-center ' >
           <h3 style={{fontWeight:700}}>Advanced Statistics</h3>
            <p style={{color:'grey'}}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
           </div>
           <div className='d-flex justify-content-around'>
           <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Brand Recognizition</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Details Records</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Fully Customizable</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
                </div>
            </div>
           </div>
           
        </section>
    )
}

export default Cards
