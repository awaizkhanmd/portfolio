
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"
import {

  CircularProgressbarWithChildren, buildStyles

} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";





export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"
                showDots={true}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                customTransition="all .5"
                transitionDuration={500}
                itemClass="carousel-item-padding-40-px"
                dotListClass="custom-dot-list-style"
              >


                {/* JAva SCript skill bar */}

                <div className="item">
                  <CircularProgressbarWithChildren value={75} styles={buildStyles({

                    pathColor: "#ffd600",
                    trailColor: "white",

                  })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img
                      style={{ width: 90, height: 90, marginTop: 0 }}
                      src="https://img.icons8.com/color/96/null/javascript--v1.png"
                      alt="JS"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>

                    </div>
                  </CircularProgressbarWithChildren>
                </div>

                {/* React  */}


                <div className="item">
                  <CircularProgressbarWithChildren value={75} styles={buildStyles({

                    pathColor: "#80deea",
                    trailColor: "white",

                  })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img
                      style={{ width: 80, height: 80, marginTop: 0 }}
                      src="https://img.icons8.com/color/96/null/react-native.png"
                      alt="JS"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>

                    </div>

                  </CircularProgressbarWithChildren>
                </div>


                {/* HTML */}




                <div className="item">
                  <CircularProgressbarWithChildren value={60} styles={buildStyles({

                    pathColor: "rgb(33,163,102)",
                    trailColor: "white",

                  })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img
                      style={{ width: 90, height: 90, marginTop: 0 }}
                      src="https://img.icons8.com/fluency/144/null/node-js.png"
                      alt="CSS-3"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>

                    </div>
                  </CircularProgressbarWithChildren>
                </div>

                {/* MONGO --DB */}
                <div className="item">
                  <CircularProgressbarWithChildren value={70} styles={buildStyles({

                    pathColor: "#ea785a",
                    trailColor: "white",

                  })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img
                      style={{ width: 70, height: 70, marginTop: 0 }}
                      src="https://img.icons8.com/external-those-icons-flat-those-icons/48/null/external-HTML5-programming-and-development-those-icons-flat-those-icons.png"
                      alt="HTML"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>

                    </div>
                  </CircularProgressbarWithChildren>
                </div>

                {/* mongo db   */}
                <div className="item">
                  <CircularProgressbarWithChildren value={60} styles={buildStyles({

                    pathColor: "#4caf50",
                    trailColor: "white",

                  })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img
                      style={{ width: 90, height: 90, marginTop: 0 }}
                      src="https://img.icons8.com/color/144/null/mongodb.png"
                      alt="Mongo-db"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>

                    </div>
                  </CircularProgressbarWithChildren>
                </div>

                <div className="item">
                  <CircularProgressbarWithChildren value={60} styles={buildStyles({

                    pathColor: "black",
                    trailColor: "white",

                  })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img
                      style={{ width: 90, height: 90, marginTop: 0 }}
                      src="https://img.icons8.com/ios/150/null/express-js.png"
                      alt="Mongo-db"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>

                    </div>
                  </CircularProgressbarWithChildren>
                </div>

                {/* python  */}
                <div className="item">
                  <CircularProgressbarWithChildren value={65} styles={buildStyles({

                    pathColor: "#ffc107",
                    trailColor: "white",

                  })}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img
                      style={{ width: 90, height: 90, marginTop: 0 }}
                      src="https://img.icons8.com/color/144/null/python--v1.png"
                      alt=".PY"
                    />
                    <div style={{ fontSize: 12, marginTop: -5 }}>

                    </div>
                  </CircularProgressbarWithChildren>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
     <div>
     <img className="background-image-left" src={colorSharp} alt="Image" />
     </div>
    </section>
  )
}