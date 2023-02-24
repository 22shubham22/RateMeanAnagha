import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Alert, Snackbar, styled} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import anagha from './asset/a.jpg'
import {purple} from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function ButtonAppBar() {
  const [openDialog, setOpenDialog ] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const  handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = (arg) => {
    setOpenDialog(false);
    if(arg === 'sub') {
      handleOpenSnackbar();
    }
  };
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <FlutterDashIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome to Rate Mean Anagha !
            </Typography>
            <Button color="inherit" onClick={handleOpenDialog}>Subscribe</Button>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To subscribe to all mean things that Anagha does , please enter your email address here. We
                  will send updates about how she torments Shubham.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>handleCloseDialog('cancel')}>Cancel</Button>
                <Button onClick={()=>handleCloseDialog('sub')}>Subscribe</Button>
              </DialogActions>
            </Dialog>
            <Snackbar open={openSnackbar} anchorOrigin={{ vertical:'bottom', horizontal:'center' }} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                You're subscribed to all the mean thing Anagha does.
              </Alert>
            </Snackbar>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function MultiActionAreaCard() {
  return (
      <Card sx={{ maxWidth: 345 }} className='card'>
        <CardActionArea>
          <CardMedia
              component="img"
              height="100%"
              image={anagha}
              alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/*<Button size="large" color="primary">*/}
          {/*  Click for Review !!!*/}
          {/*</Button>*/}
          <ColorButton variant="contained" classname='colorbtn'>Submit a Review</ColorButton>
        </CardActions>
      </Card>
  );
}


function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ButtonAppBar></ButtonAppBar>
        <MultiActionAreaCard></MultiActionAreaCard>
      </ThemeProvider>
  );
}

export default App;
