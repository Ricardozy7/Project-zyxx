import { useState } from 'react'
import styled from 'styled-components'
var scrollToElement = require('scroll-to-element')

const NavItem = ({
    sections,
    scroll
}) => {

    const [isSelect, setIsSelect] = useState("home")

    const navigate = (id) => {
        if (scroll) {
            const el = document.getElementById(id)
            scrollToElement(el, {
                offset: 0,
                ease: 'in-out-expo',
                duration: 2000
            })
        } else {
            window.location.href = `./#${id}`;
        }
    }

        const NavItem = styled.button`
            background: none;
            border: none;
            color: #fff;
            text-transform: capitalize;
            font-weight: 500;
            margin: 10px 5px;
            transition: .5s;
            cursor: pointer;
            font-size: 17px;
            font-weight: 600;
            &:hover {
                color: #02af81;
            }
            &:focus {
                outline: none;
            }
            @media (min-width: 501px) and (max-width: 1023px) {
                font-size: 11px;
                margin: 2px;
            }
        `
        return sections.map((value, index) => {
            return (
                <NavItem 
                style={{ borderBottom: `solid 1px ${isSelect === value ? "#02af81" : "transparent"}`  }}
                key={index} 
                onClick={() =>{
                     navigate(value)
                     setIsSelect(value)
                    }
                }>
                    {value}
                </NavItem>
            )
        })
}

export default NavItem;