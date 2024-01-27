import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Start from './Start';
import NewSession from './newSession';
import HomePage from './HomePage';

export const RoutesComponent = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Start/>} />
            <Route path="/newSession" element={<NewSession/>} /> 
            <Route path="/home" element={<HomePage/>} />
        </Routes>
      </Router>
    );
};