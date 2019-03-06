import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { styles } from './styles/LoginStyles';

interface Props {
  classes: any;
}

const Login = withStyles(styles)(({ classes }: Props) => (
  <div className={classes.root}>
    <Paper className={classes.details}>
      <div className={classes.contentLeft}>
        <Typography variant="h4" color="inherit">
          Welcome to
        </Typography>
        <Typography variant="h3" color="inherit">
          ---------
        </Typography>
        <Typography variant="h6" color="inherit">
          Dashboard
        </Typography>
      </div>
      <div className={classes.contentRight}>
        <Typography variant="h6" color="inherit">
          Login to Dashboard
        </Typography>

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          fullWidth
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Password"
          className={classes.textField}
          type="password"
          name="password"
          margin="normal"
          fullWidth
          variant="outlined"
        />

        <Button variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
        <Button color="secondary">Forgot Password?</Button>
      </div>
    </Paper>
  </div>
));

export default Login;
