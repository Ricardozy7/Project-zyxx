import { Container, Grid } from "@mui/material"
import styled, { keyframes } from 'styled-components'


export function Projetcs() {


    const TexTitle = styled.h2`
    font-size: 50px;
    font-weight: 300;
    color: #ccc;
    text-transform: uppercase;
    font-family: Future;
    display: flex;
    align-items: center;
    margin-top: -5px;
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
            <Grid container xs={12}>
                <Grid xs={6}>
                    <img src={ImgLink} style={{ width: "100%" }} />
                    <TexTitle>HLR.05</TexTitle>
                </Grid>
                <Grid xs={6}>
                    {/* <img src={ImgLink} style={{ width: 300 }}/> */}
                </Grid>
            </Grid>
        </Container>
    )
}










const ImgLink = "https://cdn.dribbble.com/users/5424421/screenshots/17211660/media/62065dc1d31a99c250d9615f81e52789.jpg?compress=1&resize=1200x900&vertical=top"