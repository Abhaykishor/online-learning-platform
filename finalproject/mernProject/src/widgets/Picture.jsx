import React from 'react'

const Picture = ([{src},{cls}]) => {
  return (
   <img src={src} className={cls} alt="" />
  )
}

export default Picture