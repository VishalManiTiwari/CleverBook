import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import KeyProblems from './components/KeyProblems';
import KeyMetrics from './components/KeyMetrics';
import Reviews from './components/Reviews';
import ProblemTarget from './components/ProblemTarget';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className="mx-[1rem]">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <KeyProblems />
              <KeyMetrics />
              <Reviews />
              <ProblemTarget />
              <CTA />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/key-problems" element={<KeyProblems />} />
          <Route path="/key-metrics" element={<KeyMetrics />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/problem-target" element={<ProblemTarget />} />
          <Route path="/cta" element={<CTA />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
