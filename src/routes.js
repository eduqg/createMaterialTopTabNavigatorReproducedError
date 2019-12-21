import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Classroom from './pages/Classroom';
import Student from './pages/Student';

const styleTab = {
  activeTintColor: 'blue',
  labelStyle: {
    fontSize: 20,
  },
  showIcon: false,
  inactiveTintColor: '#DDD',
  style: { elevation: 0 },
  tabStyle: {
    height: 80,
    backgroundColor: '#fff',
  },
  scrollEnabled: true,
  swipeEnabled: true,
  upperCaseLabel: false,
};

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      App: createMaterialTopTabNavigator({
        Dashboard: {
          screen: Dashboard,
          navigationOptions: {
            tabBarVisible: true,
            tabBarLabel: 'Dashboard',
            tabBarOptions: styleTab,
          },
        },
        Classroom: {
          screen: Classroom,
          navigationOptions: {
            tabBarVisible: true,
            tabBarLabel: 'Classroom',
            tabBarOptions: styleTab,
          },
        },
        Student: {
          screen: Student,
          navigationOptions: {
            tabBarVisible: true,
            tabBarLabel: 'Student',
            tabBarOptions: styleTab,
          },
        },
      }),
    },
    {
      initialRouteName: 'SignIn',
    },
  ),
);

export default Routes;
