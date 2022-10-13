import React from 'react';
import {
    Typography,
    Container,
    Button,
    Avatar,
    TextField,
    Checkbox,
    Grid,
    Box,
    CssBaseline} from '@mui/material';
import Link from 'next/link';    
//@mui/material 

type CopyProps = {
    site: string;
}
function Copyright(props: CopyProps){
    return(
        <Typography>
            {'Copyright ©️'}
            <Link color="inherit" href={`https://www.${props.site}.com.br`}>
            {props.site}
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default function ExtractPage() {
  return (
    <div>E</div>
  )
}
