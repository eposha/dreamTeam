import React, { useEffect, useRef, useCallback } from 'react';

const AutoClose = (props) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      props.handleClose(false);
    }
  }, []);

  const handleClickOutside = useCallback((event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      props.handleClose(false);
    }
  });
  return (
    <div style={props.styles} ref={wrapperRef}>
      {props.children}
    </div>
  );
};

export default AutoClose;
