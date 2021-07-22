import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors';
import Attendance2 from './pages/Attendance2';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: grey,
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/attendance">
          <Attendance2 />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
