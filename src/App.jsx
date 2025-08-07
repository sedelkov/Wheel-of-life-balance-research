import React, { useState, useEffect } from 'react'
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
import QuizModal from './components/QuizModal'
import './App.css'

function App() {
  const [isQuizModalOpen, setQuizModalOpen] = useState(true);
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (answers) => {
    setQuizResult(answers);
    setQuizModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <HeroSection quizResult={quizResult} />
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
        <QuizModal
          isOpen={isQuizModalOpen}
          onClose={() => setQuizModalOpen(false)}
          onSubmit={handleQuizSubmit}
        />
      </div>
    </Router>
  )
}

export default App

