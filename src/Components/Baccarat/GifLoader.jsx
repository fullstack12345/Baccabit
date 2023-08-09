import React, { useEffect } from 'react'
import gifFrames from 'gif-frames';

export const GifLoader = (props) => {
  const { onEnded } = props
  const gifUrl = '/vedios/bbs_anim.gif';

  useEffect(() => {
    const fetchAndCountFrames = async () => {
      try {
        const framesData = await gifFrames({ url: gifUrl, frames: 'all' });
        setTimeout(() => {
          onEnded()
        }, framesData.length * 30);
        console.log(framesData.length)
      } catch (error) {
        console.error('Error counting frames:', error);
      }
    };

    fetchAndCountFrames();
  }, []);

  return (
    <div>
      <img id="gif" src={gifUrl} />
    </div>
  );
};
