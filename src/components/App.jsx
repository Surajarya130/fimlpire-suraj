import React from "react";
import { CssBaseline } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import useStyle from "./styles";
import { Actors, MovieInformation, Profile, NavBar, Movies } from "./index.js";

const App = () => {
  const classes = useStyle();
  console.log(classes);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movies/:id">
            <MovieInformation />
          </Route>

          <Route exact path="/actors/:id">
            <Actors />
          </Route>

          <Route exact path="/">
            <Movies />
          </Route>

          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
