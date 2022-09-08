import NavBar from "../../components/navbar";
import { Header, NextLevel } from "./contents"
import { Box } from "@mui/material"
import "../../assets/scss/projectzy.scss";


const Landing = () => {
    return(
        <Box sx={{
            backgroundColor: "#000",
            overflowX: "hidden"
         }}>
            <NavBar />
            <Header />
            <NextLevel />
        </Box>
    )
}

export default Landing;