import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { Grid, Typography } from "@material-ui/core";

import { Outlet } from "react-router-dom";

import Launch from "./Launch";

import "./App.css";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Launch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path="feed" element={<LaunchFeed />} />
          <Route path="in-stock" element={<LaunchInStock />} />
          <Route path="/upcoming" element={<LaunchIncoming />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function LaunchIndex() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={5}
      >
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <Grid item xs={6} sm={4} key={slug}>
            <Link to={`/launch/${slug}`}>
              <img src={img} alt={name} />
              <Typography variant="h6" component="h6" align="center">
                {name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </div>
  );
}

function LaunchFeed() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={5}
      >
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <Grid className="parent" item xs={6} sm={4} key={slug}>
            <Link to={`/launch/${slug}`}>
              <img src={img} alt={name} />
              <Typography variant="h6" component="h6" align="center">
                {name}
              </Typography>
              <div className="ribbon">Feed</div>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </div>
  );
}

function LaunchInStock() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={5}
      >
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <Grid className="parent" item xs={6} sm={4} key={slug}>
            <Link to={`/launch/${slug}`}>
              <img src={img} alt={name} />
              <Typography variant="h6" component="h6" align="center">
                {name}
              </Typography>
            </Link>
            <div className="ribbon">In Stock</div>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </div>
  );
}
function LaunchIncoming() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={5}
      >
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <Grid className="parent" item xs={6} sm={4} key={slug}>
            <Link to={`/launch/${slug}`}>
              <img src={img} alt={name} />
              <Typography variant="h6" component="h6" align="center">
                {name}
              </Typography>
            </Link>
            <div className="ribbon">Upcoming</div>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </div>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-3-valor-blue-2": {
    name: "VALOUR BLUE 2",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london-2": {
    name: "JORDAN MARS 2",
    img:
      "https://secure-images.nike.com/is/image/DotCom/DC9204_100_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue-2": {
    name: "RACER BLUE 2",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8012_011_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-3-valor-blue-3": {
    name: "VALOUR BLUE 3",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CD3476_400_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};
