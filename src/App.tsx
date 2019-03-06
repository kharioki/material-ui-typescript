import * as React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';

import Login from './components/Login';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue,
    type: 'light'
  },
  spacing: {
    unit: 10
  }
});
class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Login />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
