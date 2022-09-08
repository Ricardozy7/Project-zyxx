import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Button } from "@mui/material"

import NavItems from "./navItem"

const NavBar = () => {

    const [sections, setSections] = useState({
        collapse: false,
        sticky: false,
        items: ['HOME', 'NEXT LEVEL', 'PROJETO',]
    })

    useEffect(() => {
        new Promise((resolve, reject) => {
            resolve(window.addEventListener('scroll', handleScroll, { passive: true }))
        })
            .then(() => {
                window.removeEventListener('scroll', handleScroll)

            })
    }, [])



    const handleScroll = event => {
        if (window.pageYOffset >= 50) {
            setSections({ ...sections, sticky: true })
        } else {
            setSections({ ...sections, sticky: false })
        }
    }




    const NavbarWrapper = styled.div`
            z-index: 1;
            width: 100%;
            padding: 20px 0;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &.sticky {
                position: fixed;
                background-color: rgba(0,0,0,.8);
                padding: 0 0;
                @media (max-width: 500px) {
                    padding: 20px 0;
                }
            }
        `

    const NavbarContainer = styled.div`
            display: flex;
            position: relative;
            @media (max-width: 500px) {
                display: block;
                padding: 0;
            }
            
        `

    const Nav = styled.nav`
            flex: 0 0 80%;
            margin-right: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                justify-content: center;
                background-color: rgba(0,0,0,.8);
                margin-top: 20px;
                &.hidden_mobile {
                    display: none;
                }
            }
        `

    const Logo = styled.h4`
        font-family: 20px;
        color: #02af81;
        margin-left: 20px;
    `

    return (
        <>
            <NavbarWrapper className={`header${sections.sticky === true ? ' sticky' : ''}`}>
                <Logo>
                    TESTE
                </Logo>
                <NavbarContainer>
                    <Nav className={`navbar navbar-expand-sm expand`}>
                        <NavItems
                            sections={sections.items}
                            scroll={true}
                        />
                    </Nav>
                </NavbarContainer>
                <Button variant='contained' sx={{
                    backgroundColor:'#02af81',
                    color: "#fff",
                    height: 40,
                    marginRight: '20px',
                    ":hover":{
                        backgroundColor:'#02af81',
                    }
                }}>
                    LOGIN
                </Button>
            </NavbarWrapper>
        </>
    )
}

export default NavBar