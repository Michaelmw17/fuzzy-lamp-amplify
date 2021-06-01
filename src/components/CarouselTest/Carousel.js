
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import './stylesCarousel.css'
export default function Example(props)
{
    const items = [
        {
            name: "- Mary (Mosman).",
            description: "'Joe and Dominic have been our electricians for over 12 years, delivering high quality service including major electrical renovations and outdoor lighting. Joe and Dominic are a pleasure to have working in our home and we highly recommend their services.'"
        },
        {
            name: "- Callum .",
            description: "'Fast, professional and reliable. Highly recommend'"
        },
        {
            name: " - Bryant (Lane Cove North).",
            description: "'Polite, professional, honest and timely. Very competitive rates. A breath of fresh air and would highly recommend them.'"
        }
    ]

    return (
        <Carousel autoPlay={false} navButtonsAlwaysVisible={true} navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
            backgroundColor: 'transparent',
        }
    }} 
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

const Item= (props) =>
{
    return (
        <Paper id="Paper">
        <div className="containerCar">
            <div className="review">
            <h1 id="review-h1">
            Our Reviews</h1>
            <div className="Icon">
            <FormatQuoteIcon style={{ color:"#FFF", fontSize: 105, textAlign: 'right'   }} />
            </div>
            {props.item.description}
            <p id="review-p">{props.item.name}</p>
            
            </div>
        </div>
            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}
// import React, { Component } from "react";
// import Slider from "react-slick";
// // import Container from '../../common/Container'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './stylesCarousel.css'
// export default class CarouselServices extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       centerPadding: " 0px",
//       slidesToShow: 1,
//       speed: 500,
//       paddingLeft: '40px',
//       infinite: true,
//       adaptiveHeight: true,
//       responsive: [
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 1
// 			}
// 		},
// 		{
// 			breakpoint: 1008,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 		},
// 		{
// 			breakpoint: 800,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 			// settings: "unslick"
// 		}

// 	]
//     };
//     return (<>
    
//       {/* <h1>Reviews</h1> */}
      
//       <div className="containerCar">
//       <h1 id="review-h1">Our Reviews</h1>
//         <Slider {...settings}>
         
//           <div>
//              <div className="review"> "Joe and Dominic have been our electricians for over 12 years, delivering high quality service including major electrical renovations and outdoor lighting. Joe and Dominic are a pleasure to have working in our home and we highly recommend their services."
//                </div><p id="Name"><em>  - Mary (Mosman).</em></p>
               
//           </div>
//            <div>
//             <div className="review"> "Fast, professional and reliable. Highly recommend" 
//               </div> <p  id="Name"><em> - Callum  .</em></p>
//           </div>
//            <div >
//             <div className="review">"Polite, professional, honest and timely. Very competitive rates. A breath of fresh air and would highly recommend them." 
//               </div><p  id="Name"><em> - Bryant (Lane Cove North)</em></p>
            
//           </div>
          
//         </Slider>
//       </div>
//       </>
//     );
//   }
// }