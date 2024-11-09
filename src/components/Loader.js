import React, { useEffect, useRef } from "react";

const Loader = ({ color }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (loaderRef.current) {
      loaderRef.current.style.borderTop = `5px solid ${color}`;
    }
  }, []);

  return <div className="Loader" ref={loaderRef}></div>;
};

export default Loader;
