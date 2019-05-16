/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginForm from './src/components/LoginForm';

AppRegistry.registerComponent(appName, () => LoginForm);
