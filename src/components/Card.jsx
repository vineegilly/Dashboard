import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

 const CardComponent = ({
  title,
  date,
  description,
  actions = ['Preview', 'edit', 'Delete'],
}) => {


  return (
   <>
   <Grid item>
          <Paper style={{ height: "20vh", background: "#FFF4EB" }} />
        </Grid>
   </>
  )
}

export default CardComponent




