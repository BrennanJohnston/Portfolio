import { useState, useEffect } from 'react';

function CustomPage(props) {

  useEffect(()=>{
    window.scrollTo(0, 0);

    return () => {
      
    }
  }, []);

  return (
    <div className="custom-page">
      {props.children}
    </div>
  );
}

export default CustomPage;