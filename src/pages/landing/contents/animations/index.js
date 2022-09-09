import { Container, Grid } from "@mui/material"
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import AnimateTeste from "../../../../assets/animates/pigeons_button.riv"
import styled, { keyframes } from 'styled-components'
import "./styles.module.scss"

export function Animations() {

    const STATE_MACHINE_NAME = "State Machine 1";
    const TOGGLE_NAME = "Like";

    const { rive, RiveComponent } = useRive({
        src: AnimateTeste,
        stateMachines: [STATE_MACHINE_NAME],
        autoplay: true
    }
    );

    const onClickInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        TOGGLE_NAME
    );

    const BoxContainer = styled.div`
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(https://images.pling.com/img/00/00/52/38/08/1310821/52fefb122acf5a105301eef0cfbf8ff7499f.jpg);
      `

    return (
        <Container id="NEXT LEVEL" sx={{
            marginTop: 20,
            marginBottom: 20,
            overflow: 'hidden',
            position: 'relative',
        }}>
                <RiveComponent
                className="btn-animation"
                    onClick={() => {
                        onClickInput.value = !onClickInput.value;
                    }}
                />
        </Container>
    );
}