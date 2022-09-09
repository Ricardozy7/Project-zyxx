import { useEffect, useRef } from "react"
import NavBar from "../../components/navbar";
import { Header, NextLevel, Projetcs, Animations, Footer } from "./contents"
import { Box } from "@mui/material"
import "../../assets/scss/projectzy.scss";

import useWindowSize from "../../hooks/useWindowSize";


const Landing = () => {

    // const size = useWindowSize();

    // const app = useRef();
    // const scrollContainer = useRef();

    // const data = {
    //     ease: 0.05,
    //     current: 0,
    //     previous: 0,
    //     rounded: 0
    // };

    // useEffect(() => {
    //     requestAnimationFrame(() => skewScrolling());
    // }, []);

    // useEffect(() => {
    //     setBodyHeight();
    // }, [size.height]);
    // const setBodyHeight = () => {
    //     document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
    // };

    // const skewScrolling = () => {
    //     data.current = window.scrollY;
    //     data.previous += (data.current - data.previous) * data.ease;

    //     data.rounded = Math.round(data.previous * 100) / 100;

    //     const difference = data.current - data.rounded;
    //     const acceleration = difference / size.width;
    //     const velocity = +acceleration;
    //     const skew = velocity * 10.5;

    //     scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //     requestAnimationFrame(() => skewScrolling());
    // };


    return (
        <div
            style={{ overflow: 'hidden' }}
            // ref={app}
            >
            <Box 
            className="scroll"
            // ref={scrollContainer} 
            sx={{
                backgroundColor: "#000",
                overflow: "hidden"
            }}>
                {/* <div className="cursor-animate"/> */}
                <NavBar />
                <Header />
                <NextLevel />
                <Projetcs />
                <Footer />
                {/* <Animations /> */}
            </Box>
        </div>
    )
}

export default Landing;