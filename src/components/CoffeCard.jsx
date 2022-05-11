import React from 'react';
import {Card, CardContent, Typography } from '@mui/material';

function CoffeCard({item}) {
  return (
    <Card key={item.id} sx={{ minWidth: 275, marginBottom: 2}}>
      <CardContent>
        <Typography variant="h6" component="div">
        name: {item.blend_name}
        </Typography>
        <Typography variant="h6" component="div">
        origin: {item.origin}
        </Typography>
        <Typography variant="h6" component="div">
        notes: {item.notes}
        </Typography>        
      </CardContent>            
    </Card>
  );
};

export default CoffeCard;