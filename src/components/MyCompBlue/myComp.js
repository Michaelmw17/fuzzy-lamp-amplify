
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const MyImageBlue = ({ image }) => (
  <LazyLoadImage
    effect="blur"
    alt="Neca"
    src={process.env.PUBLIC_URL + '/neca-nat-logo-text.png'} max-age="31536000"
    style={{
               display: "absolute",
                background: '#FFF',
                marginRight: "auto",
                marginTop: "15px",
                height: "100%",
                width: "100%",
                maxWidth: "80%",
                maxHeight: "90%",
                left: '350px',
            }}/>
);
export default MyImageBlue;
// import React, { Suspense } from "react";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// const MyComp = () => {
//     return<Suspense fallback={
//                         <Loader
//         type="Puff"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs
//       />
//                             }>
//         <img src={process.env.PUBLIC_URL + '/neca-nat-logo-text.png'}
//             alt="Logo" style={{
//                display: "absolute",
//                 background: '#FFF',
//                 marginRight: "auto",
//                 marginTop: "15px",
//                 height: "100%",
//                 width: "100%",
//                 maxWidth: "40%",
//                 maxHeight: "100%",
//                 left: '350px',
//             }}
//             loading="lazy"
//             max-age="31536000"
//         />
//     </Suspense>;
// };


// export default MyComp;