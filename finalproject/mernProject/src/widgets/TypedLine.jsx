import React from 'react'
import Typed from 'typed.js';

const TypedLine = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['JavaScript And React.', 'Data Stucture and Algorithm.','Core Concept Of Programming.','Easy to digest Documentetion.'],
        typeSpeed: 50,
      });
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
    return (
      <div >
        <span ref={el} className='typedline'/>
      </div>
    );
}

export default TypedLine