import { Box, Grid } from "@mui/material"
import styled, { keyframes } from 'styled-components'


export function Footer() {

    const TexFooter = styled.h2`
        margin-left: 5%;
        font-size: 15px;
        font-weight: 300;
        color: #ccc;
        flex-direction: row;
    `

    return (
       <Grid 
       borderTop={"solid 1px #fff"}
       mt={10}
       alignItems="center"
       minHeight={100}
       container flexDirection="row" justifyContent={"space-between"}>
            <Grid xs={4}></Grid>
            <Grid xs={4}>
                <TexFooter>© {new Date().getFullYear()} Ricardo Dias - Todos os direitos reservados.</TexFooter>
            </Grid>
            <Grid xs={4}></Grid>
       </Grid>
    );
}