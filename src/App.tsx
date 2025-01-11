/** @format */

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

import { home, informationCircle, people } from "ionicons/icons";
import Form from "./components/Form";
import List from "./components/PersonnelList";

import Home from "./pages/Home";

import About from "./pages/About";
import Exercise1 from "./exercises/Exercise1";
import Exercise2 from "./exercises/Exercise2";
import Exercise3 from "./exercises/Exercise3";
import Exercise4 from "./exercises/Exercise4";
import Exercise5 from "./exercises/Exercise5";
import Exercise6 from "./exercises/Exercise6";
import Exercise10 from "./exercises/Exercise10";
import CalendarSchedule from "./components/CalendarSchedule";
import EventCalendarForm from "./components/EventCalendarForm";
import Exercises from "./pages/Exercises";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route
            exact
            path='/home'>
            {" "}
            {/* consider it as exercise1 */}
            <Exercise1 />
          </Route>
          <Route
            exact
            path='/exercise1'>
            <Redirect to='/home' />
          </Route>
          <Route
            exact
            path='/exercise2'>
            <Exercise2 />
          </Route>
          <Route
            path='/form'
            component={Form}
            exact
          />
          <Route
            path='/about'
            component={About}
            exact
          />
          <Route
            path='/exercise2'
            component={Exercise2}
            exact
          />
          <Route
            path='/exercise3'
            component={Exercise3}
            exact
          />
          <Route
            path='/exercise4'
            component={Exercise4}
            exact
          />
          <Route
            path='/exercise5'
            component={Exercise5}
            exact
          />
          <Route
            path='/exercise6'
            component={Exercise6}
            exact
          />
          <Route
            path='/exercise10'
            component={Exercise10}
            exact
          />

          <Route
            path='/calendarSchedule'
            component={CalendarSchedule}
            exact
          />
          <Route
            path='/eventCalendarForm'
            component={EventCalendarForm}
            exact
          />

          <Route
            path='/exercises'
            component={Exercises}
            exact
          />

          <Route
            exact
            path='/'>
            <Redirect to='/exercises' />
          </Route>
        </IonRouterOutlet>{" "}
        {/*  */}
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
