
import { Container, Grid } from "@mui/material"
import styled, { keyframes } from 'styled-components'

import Rocket from "../../../../assets/animates/rocket.json"

import Lottie from "react-lottie"

import { Chrono } from "react-chrono";

export const NextLevel = () => {

    const TexHeading = styled.h2`
        font-size: 50px;
        font-weight: 300;
        color: #ccc;
        text-transform: uppercase;
        font-family: Future;
        display: flex;
        align-items: center;
    `

    const SubtitleHeading = styled.h2`
    font-size: 15px;
    font-weight: 300;
    color: #A4A4A4;
    margin-top: 30px;
    /* font-family: Future; */
    `

    return (
        <Container id="NEXT LEVEL" sx={{
            marginTop: 20,
            overflow: 'hidden'
        }}>
            <Grid container>
                <Grid xs={12} sm={12} md={6}>
                    <TexHeading>
                        <div>
                        NEXT LEVEL
                        <div style={{ width: 200, height: 1 }} className="divider-gradient"></div>
                        </div>
                    </TexHeading>

                    <div>
                        <Chrono
                            hideControls
                            theme={{
                                primary: '#02af81',
                                secondary: '#fff',
                                cardBgColor: '#0A0A0A',
                                cardForeColor: '#fff',
                                titleColor: '#fff',
                                textColor: "#02af81",
                                titleColorActive: "#02af81",

                            }}
                            items={items}
                            mode="VERTICAL_ALTERNATING" />
                    </div>
                </Grid>
                <Grid xs={12} sm={12} md={6}
                >
                    <SubtitleHeading>
                    Specialize through an efficient method, with the best programming languages 
                    ​​of the moment that will make you stand out as a professional. 
                    and make you stand out so you can reach the <strong style={{ color: '#02af81' }}>next level</strong>.
                    </SubtitleHeading>
                    <Grid className="mobile_hidden"
                    height="100%" container justify="center" alignItems="center">
                        <Lottie options={{
                            animationData: Rocket
                        }}
                            style={{
                                width: 600,
                                height: 600,
                                marginTop: 15
                            }}

                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{ width: '100%' }} container mt={15} flexDirection="row" justifyContent="space-between">
                {
                    itemsExperience.map((e) => (
                        <Grid  flexDirection="column">
                            <TexHeading>{e.title} <span style={{ fontSize: '30px', color: '#02af81' }}>+</span></TexHeading>
                            <SubtitleHeading style={{ marginTop: -45 }}>{e.subtitle}</SubtitleHeading>
                        </Grid>
                    ))
                }

            </Grid>
        </Container>
    )
}


const itemsExperience = [
    { title: 10, subtitle: "Years runnig" },
    { title: 300, subtitle: "Clints" },
    { title: 1000, subtitle: "students" },
    { title: 80, subtitle: "succesfull Projects" },
    { title: 20, subtitle: "Creative Team" },
]



const items = [{
    title: "React",
    cardTitle: "React JS",
    cardSubtitle: "Uma biblioteca JavaScript para criar interfaces de usuário.",
    cardDetailedText: `React faz com que a criação de UIs interativas seja uma tarefa fácil. 
    Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma 
    eficiente apenas os componentes necessários na medida em que os dados mudam.`,
},
{
    title: "Python ",
    cardTitle: "Python",
    cardSubtitle: "These are some of the reasons people who use Python would rather not use anything else.",
    cardDetailedText: `Python is powerful... and fast;
    plays well with others;
    runs everywhere;
    is friendly & easy to learn;
    is Open.`,
},
{
    title: "Node",
    cardTitle: "Node.js®",
    cardSubtitle: "React Native Learn once, write anywhere.",
    cardDetailedText: `As an asynchronous event-driven JavaScript runtime, 
    Node.js is designed to build scalable network applications. In the following 
    "hello world" example, many connections can be handled concurrently. Upon each connection, 
    the callback is fired, but if there is no work to be done, Node.js will sleep.`,
}
]