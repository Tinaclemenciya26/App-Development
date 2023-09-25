import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useNavigate } from 'react-router-dom';

export default function Deposits() {

  const Nav = useNavigate();
  const Refresh = () => {
    Nav('/dash')
    console.log("refres")
  }

  return (
    <React.Fragment>
      <Title>Total Spam Count</Title>
      <Typography component="p" variant="h4">
        512
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        from 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" onClick={Refresh}>
          Refresh
        </Link>
      </div>
    </React.Fragment>
  );
}