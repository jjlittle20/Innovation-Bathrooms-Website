import "./App.css";
import TopAppBar from "./Components/TopAppBar";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <TopAppBar />{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
