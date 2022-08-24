import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: "#e1dbff",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2)
}));

const BackWhiteBox = styled('div')(({ theme }) => ({
  background: 'white',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2)
}));

const SearchCard = () => {
  return (
    <Grid item>
      <StyledPaper>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <BackWhiteBox>
              <SearchOutlinedIcon />
            </BackWhiteBox>
          </Grid>
          <Grid item xs={10}>
            <BackWhiteBox>
              <TextField placeholder="Spam Mail Project" fullWidth variant='standard' InputProps={{disableUnderline: true}} />
            </BackWhiteBox>
          </Grid>
        </Grid>
      </StyledPaper>
    </Grid>
  )
}

export default SearchCard