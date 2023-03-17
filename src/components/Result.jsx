import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect} from "react";

import { DataContex } from "../Contex/DataProvider";




const Result = () => {
    const [src, setSrc]= useState('');
    const {html, css, js} = useContext(DataContex);
    const Container = styled(Box)`
    height: 36vh;
    `;


    
    useEffect(() => {
        const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    
    `;
        const timeout = setTimeout(() => {
            setSrc(srcCode)
        }, 1000);
        return () => clearTimeout(timeout);
    }, [html, css, js]);
    return (
        <Container>
            <iframe 
                srcDoc={src}
                title='Output'
                sandbox= 'allow-scripts'
                frameBorder={0}
                width="100%"
                height= "100%"
            />
        </Container>
    )
}

export default Result;