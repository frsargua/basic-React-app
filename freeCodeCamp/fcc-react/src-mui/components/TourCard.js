import { Paper, Typography } from "@mui/material";
import { Grid, Box, Rating, createTheme, ThemeProvider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} square>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt="food"
            className="img"
          ></img>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              This is some text
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon sx={{ fontSize: "10px" }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                5 hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name="simple-controlled"
                value={2.6}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>
                (655 review)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3">
                rom C $147
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
