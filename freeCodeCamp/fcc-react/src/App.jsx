import "./App.css";
import TourCard from "./components/TourCard.js";
import { Grid, Container } from "@mui/material";
import SearchAppBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container
        sx={{
          marginY: 5,
        }}
      >
        <Grid container spacing={4}>
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
