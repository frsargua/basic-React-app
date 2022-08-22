import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3} square>
        Hello
      </Paper>
    </Grid>
  );
};

export default TourCard;
