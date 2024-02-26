import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material'; 

const ProductHighlights = () => {
  const products = [
    {
      id: 1,
      title: 'Marketing Tips',
      description: 'Stay informed with the latest Marketing Tips.',
      buttonText: 'Explore Marketing Tips',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Business Growth',
      description: 'Boost your Business Growth with expert advice.',
      buttonText: 'Unlock Business Growth',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Start Learning Now',
      description: 'Expand your knowledge with our comprehensive guides.',
      buttonText: 'Start Learning Now',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="product-highlights">
      {products.map((product) => (
        <Card key={product.id} className="product-card">
          <CardContent>
            <Typography variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Button variant="contained" color="primary">
              {product.buttonText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductHighlights;