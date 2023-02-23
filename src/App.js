import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const App = () => (
  <UnderConstruction
    background={{
      image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#ff0000',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: 'https://image.ibb.co/b7guP5/Rubbby_without_text.png',
      alt: 'alt text'
    }}
    title={{
      text: 'The Next Byte',
      textColor: '#ff0000'
    }}
    description={{
      text: 'Our website is under construction. We\'ll be here soon, subscribe to be notified',
      style: {
        maxWidth: '440px',
      }
    }}
    subscribe={{
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      onSubmit: (value) => {
        console.log('user typed email :', value);
      }
    }}
    // links={[
    //   {
    //     url: 'https://www.facebook.com/',
    //     image: 'https://icons8.com/icon/uLWV5A9vXIPu/facebook',
    //   },
    //   {
    //     url: 'https://www.twitter.com/',
    //     image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
    //   },
    //   {
    //     url: 'https://www.linkedin.com/',
    //     image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
    //   },
    //   {
    //     url: 'mailto:someone@example.com',
    //     image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
    //   },
    // ]}
  />
);

export default App;
