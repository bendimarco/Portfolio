import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className, onMouseEnter, onMouseLeave }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await src;
        setImageSrc(imageModule.default);
        setLoading(false);
      } catch (error) {
        console.error('Error loading image:', error);
        setLoading(false);
      }
    };

    loadImage();
  }, [src]);

  if (loading) {
    return (
      <div className={`${className} animate-pulse bg-gray-200`} 
           style={{ minHeight: '100px' }} />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      loading="lazy"
    />
  );
};

export default LazyImage;