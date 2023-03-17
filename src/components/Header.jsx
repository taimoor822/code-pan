

import { AppBar, Toolbar, styled } from '@mui/material';
import img1 from '../resource/logo_transparent.png'

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`;


const Header = () => {
    return (
        <div>
            <Container position='static'>
                <Toolbar>
                    <img src={img1} alt="logo" style={{ width: 40 }}/>

                </Toolbar>
            </Container>
        </div>
    );
}

export default Header;