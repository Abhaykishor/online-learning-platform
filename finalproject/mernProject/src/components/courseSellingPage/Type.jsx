import React from 'react'

const type = () => {
    function MyComponent() {
        // Create reference to store the DOM element containing the animation
        const el = React.useRef(null);
      
        React.useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['Buy It .', '&amp; Best of the Best.', 'happy costumer'],
            typeSpeed: 50,
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
      
        return (
          <div className="App">
            <span ref={el} />
          </div>
        );
      }
  return (
  
<div>
    <span className="el"></span>
</div>

   
  )
}

export default type
