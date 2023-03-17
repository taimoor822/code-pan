import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import '../App.css';
import { useState} from 'react'

const Container = styled(Box)`
flex-grow: 1;
flex-basic: 0;
display: flex;
flex-direction: column;
padding: 0 8px 8px;
`


const Heading = styled(Box)`
background-color: #1d1e22;
padding: 9px 12px;
display: flex
`;

const Header = styled(Box)`
display:flex;
justify-content: space-between;
background-color: #060606;
color: #aaaebc;
font-weight: 700;
`

const Editor = ({ heading, icon, color, value, onChange }) =>{
    const [open, setOpen] = useState(true);


    const handleChange = (editor, data, value) => {
        onChange(value)
    }
    return (
        <Container style={open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box
                    component="span"
                    style={{
                        backgroundColor: color,
                        height: 20,
                        width: 20,
                        display: 'flex',
                        placeContent: 'center',
                        marginRight: 5,
                        paddingBottom: 2,
                        borderRadius: 5,
                        color: "#000", 
                    }}
                    >{icon}</Box>
                    { heading }
                </Heading>
                <CloseFullscreenIcon
                    fontSize="small"
                    style={{ alignSelf: "center"}} 
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <ControlledEditor 
                className='controlled-editor'
                value= {value}
                onBeforeChange= {handleChange}
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                  }}
            />
        </Container>
        
    );
}

export default Editor;