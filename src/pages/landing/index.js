import NavBar from "../../components/navbar";
import { Header, NextLevel, Projetcs } from "./contents"
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
            <Projetcs />
        </Box>
    )
}

export default Landing;