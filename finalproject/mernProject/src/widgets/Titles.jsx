import React from 'react'

const Titles = (props) => {
  return (
    <div>
        <h1 className={`title {props.cls}`}>
            {props.txt}
        </h1>
    </div>
  );
}

export default Titles