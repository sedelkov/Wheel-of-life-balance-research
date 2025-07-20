import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhatIsWheelSection from './components/WhatIsWheelSection'
import ProblemSection from './components/ProblemSection'
import EmpiricalDataSection from './components/EmpiricalDataSection'
import GapFramingSection from './components/GapFramingSection'
import LearnedHelplessnessSection from './components/LearnedHelplessnessSection'
import SocialContextSection from './components/SocialContextSection'
import AlternativeApproachesSection from './components/AlternativeApproachesSection'
import RecommendationsSection from './components/RecommendationsSection'
import ConclusionSection from './components/ConclusionSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <HeroSection />
          <WhatIsWheelSection />
          <ProblemSection />
          <EmpiricalDataSection />
          <GapFramingSection />
          <LearnedHelplessnessSection />
          <SocialContextSection />
          <AlternativeApproachesSection />
          <RecommendationsSection />
          <ConclusionSection />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

