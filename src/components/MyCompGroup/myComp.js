import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const MyComp = () => {
    return<Suspense fallback={
                        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
                            }>
        <img src={process.env.PUBLIC_URL + '/IMG_1050.jpg'}
            alt="Team" style={{
                  display: "absolute",
                background: '#FFF',
                marginRight: "auto",
                height: "100%",
                width: "100%",
                maxWidth: "%",
                maxHeight: "80%",
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'drop-shadow(2.5px 2.5px 5px #000)',
                borderRadius: '5%',
            }}
            loading="lazy"
            max-age="31536000"
        />
    </Suspense>;
};


export default MyComp;