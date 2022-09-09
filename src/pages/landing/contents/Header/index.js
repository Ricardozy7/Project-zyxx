import { Box } from "@mui/material"

import HeaderContentVideo from "../../../../assets/videos/headerVideo.mp4"

import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from "react"

import styles from './styles.module.scss';

export function Header() {

    const [resize, setResize] = useState({
        width: '100vw',
        height: '100vh'
    })


    const Section = styled.section`
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(95vh - 20px);
    width: 100vw;
    overflow-x: hidden;
`


    const VideoContainer = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        video {
            position: absolute;
        }
    `

    const HeadingBox = styled.div`
        @font-face {
            font-family: futureforcesrtitle;
            src: url(../../../../assets/fonts/futureforcesrtitle.ttf);
        }
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        padding: 0px 50px;
        font-family: futureforcesrtitle;
        flex-direction: column;
        margin-top: -50px;
        background: rgba(255, 255, 255, 0);
        border-radius: 16px;
        /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(2px); */
    `


    const TexHeading = styled.h2`
        margin-left: 5%;
        font-size: 120px;
        /* background-color: #02af81; */
        font-weight: 300;
        color: #ccc;
        text-transform: uppercase;
    `

    const TextConteiner = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    `

    const Footer = styled.div`
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: start;
    `
    const TexFooterConteiner = styled.div`
        display: flex;
        flex-direction: row;
        margin-top: -30px;
    `
    const TexFooter = styled.h2`
        margin-left: 5%;
        font-size: 20px;
        font-weight: 300;
        color: #ccc;
        text-transform: uppercase;
        flex-direction: row;
    `

    useEffect(() => {
        setResize({ height: window.innerHeight, width: window.innerWidth })
    }, [])

    const ContainerBoxText = styled.div`
        display: flex;
        flex-direction: row;
    `

    return (
        <Section>
            <VideoContainer>
                <video autoPlay="autoplay" loop="loop" muted style={{ height: `${resize.width >= 1024 && resize.width < 1200 ? "100%" : "auto"}` }}>
                    <source src={HeaderContentVideo} type="video/mp4" />
                </video>
                <HeadingBox>
                    <TextConteiner>
                        <ContainerBoxText>
                            <TexHeading>
                                PROJECT
                                <div style={{ width: "50%", height: 2 }} className="divider-gradient"></div>
                            </TexHeading>
                            <TexHeading className={styles.subtitle}>ZYXX</TexHeading>
                        </ContainerBoxText>
                    </TextConteiner>
                    <Footer>
                        <TexFooterConteiner>
                            <TexFooter>
                                All
                            </TexFooter>
                            <TexFooter style={{ color: "#02af81" }}>
                                projects
                            </TexFooter>
                        </TexFooterConteiner>
                        <TexFooterConteiner style={{ marginLeft: "25px" }}>
                            <TexFooter>
                                100%
                            </TexFooter>
                            <TexFooter style={{ color: "#02af81" }}>
                                Code
                            </TexFooter>
                        </TexFooterConteiner>
                        <TexFooterConteiner style={{ marginLeft: "50px" }}>
                            <TexFooter>
                                next
                            </TexFooter>
                            <TexFooter style={{ color: "#02af81" }}>
                                level
                            </TexFooter>
                        </TexFooterConteiner>
                    </Footer>
                </HeadingBox>
            </VideoContainer>
        </Section>
    )
}
