/// <reference types="jest" />
import 'jsdom-global/register';
// Polyfill requestAnimiationFrame
import 'raf/polyfill';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configure enzyme adapter
configure({ adapter: new Adapter() });