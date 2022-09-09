import { Container, Grid } from "@mui/material"
import styled, { keyframes } from 'styled-components'


export function Projetcs() {


    const TexTitle = styled.h2`
    margin: 0 25px;
    font-size: 50px;
    font-weight: 300;
    color: #ccc;
    text-transform: uppercase;
    font-family: Future;
    display: flex;
    align-items: center;
    margin-top: -5px;
`

    const CardImg = styled.div`
        margin: 25px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1px;
        transition: all 1s;
        border: solid 1px;
        overflow: hidden;
        border-radius: 5px;
        & img {
            transition: all 1s;
        }
        :hover{
            border: solid 1px #02af81;
            
        & img{
            transform: scale(1.2);
        }
        }

    `


    return (
        <Container id="PROJETO" sx={{
            marginTop: 20,
            overflow: 'hidden',

        }}>
            <TexTitle>
                <div>
                    PROJECTS
                    <div style={{ width: 200, height: 1 }} className="divider-gradient"></div>
                </div>
            </TexTitle>
            <Grid container xs={12} flexWrap="wrap">
                <Grid xs={12} sm={12} md={6}>
                    <CardImg>
                        <img src={ImgLink} style={{ width: "100%", height: 700 }} />
                    </CardImg>
                    <TexTitle style={{ fontSize: "20px" }}>PROJECT X</TexTitle>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                    <CardImg>
                        <img src={linkImg} style={{ width: "100%", height: 310 }} />
                        
                    </CardImg>
                    <TexTitle style={{ fontSize: "20px" }}>PROJECT XX</TexTitle>

                    <CardImg>
                        <img src={img2link} style={{ width: "100%", height: 315 }} />
                    </CardImg>
                    <TexTitle style={{ fontSize: "20px" }}>PROJECT XXX</TexTitle>

                </Grid>
            </Grid>
        </Container>
    )
}



const linkImg = "https://i.pinimg.com/originals/b4/99/8b/b4998bf4a20f9e3603784a886944e335.png"




const img2link= "https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/464541/image-1607124568813-595524e7a4bce3db3a6484b2c6e8b23e.png"


const ImgLink = "https://cdn.dribbble.com/users/5424421/screenshots/17211660/media/62065dc1d31a99c250d9615f81e52789.jpg?compress=1&resize=1200x900&vertical=top"