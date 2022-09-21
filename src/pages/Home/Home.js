import React from "react";
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const sectionItems = [
    {
      id: 1,
      sentence:
        'Solving world problems through various web applications using efficient programs and tools',
    },
    {
      id: 2,
      sentence:
        'Through team work, we collaborate and deliver quality projects of high standards',
    },
    {
      id: 3,
      sentence: 'Flexible payment plan is applicable to all our services',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
      <Grid container>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
          >
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
