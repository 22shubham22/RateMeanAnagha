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
import {
  Alert,
  Divider,
  FormControl,
  FormControlLabel, FormLabel, Radio,
  RadioGroup,
  Rating,
  Slider,
  Snackbar,
  styled
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import anagha from './asset/a.jpg';
import Anagha from './asset/anagha.jpg';
import {purple} from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid';

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
        <Divider />
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

const labels: { [index: string]: string } = {
  1: 'Nellie to Andy Mean',
  2: 'Robert California to Jim Mean',
  3: 'Jan to Miachel Mean',
  4: 'Dr House',
  5: 'The classical ANAGHA Mean',
};
function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function MultiActionAreaCard() {

  const [openDialog, setOpenDialog ] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [slap, setSlap] = React.useState('Yes');
  const [moron, setMoron] = React.useState('Yes');

  const handleChange = (event) => {
    setSlap(event.target.value);
  };

  const handleChangeMoron = (event) => {
    setMoron(event.target.value);
  };

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
          <ColorButton variant="contained" className='colorbtn' onClick={handleOpenDialog}>Submit a Review</ColorButton>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Give an Honest Review</DialogTitle>
            <Divider />
            <DialogContent>
              <DialogContentText>
                1. On a scale of 1 to 10 how mean do you think Anagha is ::
              </DialogContentText>
              <Box className='rating'
                  sx={{
                    width: 500,
                    display: 'flex',
                    alignItems: 'center',
                  }}
              >
                <Rating
                    name="simple-controlled"
                    getLabelText={getLabelText}
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    size="large"
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
              <FormControl className='rating'>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  3. Is Anagha a Moron ?
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={moron}
                    onChange={handleChangeMoron}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Yes" />
                  <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Duhhhhhhh...!!!"
                  />
                </RadioGroup>
              </FormControl>
              <Box sx={{ width: 300 }}>
                <div className='rating'>2. How annoying do you this she is ?</div>
                <Slider
                    defaultValue={3}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                />
              </Box>
              <FormControl className='rating'>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  3. Given an option to slap , Would you take it ?
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={slap}
                    onChange={handleChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Yes" />
                  <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Oh Fuck Yes, Definetly"
                  />
                </RadioGroup>
              </FormControl>
              <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                <div className='rating'>4. Any story supporting your review :</div>
                <TextField
                    id="outlined-multiline-static"
                    label="Go Bonkers"
                    multiline
                    rows={4}
                    defaultValue="Comments...."
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=>handleCloseDialog('cancel')} variant="outlined" color="error">Cancel</Button>
              <Button onClick={()=>handleCloseDialog('sub')} variant="contained" color="success">Review</Button>
            </DialogActions>
          </Dialog>
          <Snackbar open={openSnackbar} anchorOrigin={{ vertical:'bottom', horizontal:'center' }} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              Your review of Anagha is submitted and only truly mean ones written with pure hatred will be accepted.
            </Alert>
          </Snackbar>
        </CardActions>
      </Card>
  );
}

function card(a,b) {
  return (<React.Fragment>
    <CardActionArea className="reviewCard">
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        {/*<Typography variant="h5" component="div">*/}
        {/*  benevolent*/}
        {/*</Typography>*/}
        <Rating name="read-only" value="1" readOnly />
        <br/>
        <Typography variant="body2">
          well meaning and kindly.sadvffffffffffffffffffffffffffffffffffffffffffffffffff
          awegwerhgywertgqerfg srfgwertgeqrf tghwrtg wergetg rgertg egerg
        </Typography>
      </CardContent>
    </CardActionArea>
  </React.Fragment>);
}

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ButtonAppBar></ButtonAppBar>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box sx={{ flexGrow: 1 }}>
              <MultiActionAreaCard></MultiActionAreaCard>
            </Box>
          </Grid>
          <Grid item xs={9} className="reviews">
            <Typography variant="h5" gutterBottom>
              Reviews >
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card("a","b")}</Card>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
