import "./App.css";
import TopAppBar from "./Components/TopAppBar";
import Grid from "@material-ui/core/Grid";
import HeroImg from "./Components/HeroImg";

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <TopAppBar />{" "}
        </Grid>
        <Grid item xs={12}>
          <HeroImg />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
