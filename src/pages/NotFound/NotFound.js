import React from 'react';
import { useTranslation } from 'react-i18next';
import { BigTitle, StyledLink } from './NotFound.styled';
import Grid from '@mui/material/Grid';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} columns={16}>
      <Grid item>
        <BigTitle> { t('page_not_found') } </BigTitle>
      </Grid>
      <Grid item>
        <StyledLink
          to='/home'
          rel="noreferrer"
        >
          { t('return_home') }
        </StyledLink>
      </Grid>
    </Grid>
  )
}

export default NotFound;
