import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: "#fef4ea",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2)
}));

const CardComponent = ({
  title,
  date,
  description,
  actions = ['Preview', 'edit', 'Delete'],
}) => {


  return (
    <Grid item>
      <StyledPaper>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Grid container direction="column" alignItems="flex-start" justifyContent="space-between" style={{height: '100%'}}>
              <Grid item>
                <Typography variant='h6' color="#605a54">
                  Spam Mail Project
                </Typography>
              </Grid>
              <Grid item>
                <PreviewOutlinedIcon style={{color:"#8e8883"}} />
                <NoteAltOutlinedIcon style={{margin: '0 20px', color: '#8e8883'}} />
                <DeleteOutlinedIcon style={{color:"#8e8883"}} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item alignContent="flex-end">
            <Typography variant='subtitle2' textAlign="end">
              Author Name: Vineeth Kumar 
            </Typography>
            <Typography variant='subtitle2' textAlign="end" style={{margin: '10px 0'}}>
              Created on: DD/MM/YY
            </Typography>
            <Typography variant='subtitle2' textAlign="end">
              Last Updated On: DD/MM/YY
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Grid>
  )
}

export default CardComponent




