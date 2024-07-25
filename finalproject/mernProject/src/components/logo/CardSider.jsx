// import React from 'react'

const CardSider = () => {
  return (
    <div className="card">
    <div className="card-body ">
      {/* <h5 className="card-title">Fixed Bar</h5> */}
      <img src="data:image/jpeg;base64,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" alt="" />
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      <p className="text-7xl text-blue-500">Hustle</p>
      <p className="text-7xl text-blue-500">Develop</p>
      <p className="text-7xl text-blue-500">Coder</p>
      <p className="text-7xl text-blue-500">Grow</p>
      <p className="text-7xl text-blue-500">Debug</p>
      <p className="text-7xl text-blue-500">Master</p>

    </div>
  </div>
  )
}

export default CardSider