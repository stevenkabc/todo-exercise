import React from 'react';
import { render } from 'react-dom';
import { Todo } from './Todo';
import  DATA from './data.json';

render(<Todo  items={DATA.items}/>, document.getElementById('app'));
