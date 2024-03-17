import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 2 }}
      >
        <Grid sx={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Company
          </Typography>
          <div>
            <Button gutterBottom>About</Button>
          </div>
          <div>
            <Button gutterBottom>Blog</Button>
          </div>
          <div>
            <Button gutterBottom>Press</Button>
          </div>
          <div>
            <Button gutterBottom>Jobs</Button>
          </div>
          <div>
            <Button gutterBottom>Partners</Button>
          </div>
        </Grid>
        <Grid sx={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Solutions
          </Typography>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid sx={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Documentation
          </Typography>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid sx={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Legal
          </Typography>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button sx={{ textTransform: "none" }} gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
