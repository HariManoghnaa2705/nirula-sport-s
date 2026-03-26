/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Games from './pages/Games';
import Achievements from './pages/Achievements';
import SportGallery from './pages/SportGallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery/:sportId" element={<SportGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
