import React from 'react';
import { Paper, Typography } from '@mui/material';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <Paper elevation={3} style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h6">
        Try saying:
      </Typography>
      <Typography variant="subtitle1">
        Add {isIncome ? 'Income ' : 'Expense '}
        for {isIncome ? '$100 ' : '$50 '}
        in Category {isIncome ? 'Salary ' : 'Travel '}
        for {isIncome ? 'Monday ' : 'Thursday '}
      </Typography>
    </Paper>
  );
};

export default InfoCard;
