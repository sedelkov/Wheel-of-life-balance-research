import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { ChevronDown, AlertTriangle, Users, TrendingDown } from 'lucide-react'
import ReportModal from './ReportModal'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const HeroSection = () => {
  const { t } = useTranslation();
  const [wheelValues, setWheelValues] = useState({
    career: [6],
    finances: [4],
    health: [7],
    relationships: [5],
    personal_growth: [3],
    recreation: [4],
    physical_environment: [5],
    contribution: [6]
  })
  const [interacted, setInteracted] = useState(false);
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  const categories = [
    { key: 'career', color: '#1976D2' },
    { key: 'finances', color: '#388E3C' },
    { key: 'health', color: '#F57C00' },
    { key: 'relationships', color: '#E91E63' },
    { key: 'personal_growth', color: '#9C27B0' },
    { key: 'recreation', color: '#00BCD4' },
    { key: 'physical_environment', color: '#4CAF50' },
    { key: 'contribution', color: '#FF5722' }
  ]

  const updateValue = (category, value) => {
    setWheelValues(prev => ({
      ...prev,
      [category]: value
    }));
    if (!interacted) {
      setInteracted(true);
    }
  }

  const scrollToNext = () => {
    document.getElementById('what-is-wheel').scrollIntoView({ behavior: 'smooth' })
  }

  const openReportModal = () => setReportModalOpen(true);
  const closeReportModal = () => setReportModalOpen(false);

  const averageScore = Object.values(wheelValues).reduce((sum, val) => sum + val[0], 0) / 8
  const isUnbalanced = Math.max(...Object.values(wheelValues).map(v => v[0])) - 
                      Math.min(...Object.values(wheelValues).map(v => v[0])) > 4

  const isLowResource = quizResult && (quizResult.stress === 'high' || quizResult.finance === 'difficult' || quizResult.time === 'little');

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
        <div className="container mx-auto px-4 py-12">
          {isLowResource && (
            <Alert variant="destructive" className="mb-8 max-w-4xl mx-auto">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>{t('low_resource_warning_title')}</AlertTitle>
              <AlertDescription>
                {t('low_resource_warning_message')}
              </AlertDescription>
            </Alert>
          )}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm"
                >
                  <AlertTriangle size={16} />
                  <span>{t('critical_research')}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  {t('hero_title')}
                  <span className="text-blue-600 dark:text-blue-400 block">
                    {t('hero_subtitle')}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {t('hero_description')}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-3 gap-4"
              >
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="text-blue-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{t('studies')}</div>
                  </CardContent>
                </Card>

                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingDown className="text-red-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">↓60%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{t('effectiveness')}</div>
                  </CardContent>
                </Card>

                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center mb-2">
                      <AlertTriangle className="text-amber-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{t('risks')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{t('risks_identified')}</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={scrollToNext}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  {t('start_research')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('empirical-data').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3"
                >
                  {t('go_to_data')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive Wheel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{t('try_it_yourself')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('rate_satisfaction')}
                    </p>
                  </div>

                  {/* Wheel Visualization */}
                  <div className="relative w-80 h-80 mx-auto mb-6">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Grid circles */}
                      {[2, 4, 6, 8, 10].map(radius => (
                        <circle
                          key={radius}
                          cx="100"
                          cy="100"
                          r={radius * 8}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          className="text-gray-300 dark:text-gray-600"
                        />
                      ))}

                      {/* Wheel segments */}
                      {categories.map((category, index) => {
                        const angle = (index * 45) - 90
                        const value = wheelValues[category.key][0]
                        const radius = value * 8

                        const x1 = 100 + Math.cos(angle * Math.PI / 180) * radius
                        const y1 = 100 + Math.sin(angle * Math.PI / 180) * radius
                        const x2 = 100 + Math.cos((angle + 45) * Math.PI / 180) * radius
                        const y2 = 100 + Math.sin((angle + 45) * Math.PI / 180) * radius

                        return (
                          <g key={category.key}>
                            <path
                              d={`M 100 100 L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                              fill={category.color}
                              fillOpacity="0.6"
                              stroke={category.color}
                              strokeWidth="1"
                            />
                            <line
                              x1="100"
                              y1="100"
                              x2={100 + Math.cos(angle * Math.PI / 180) * 85}
                              y2={100 + Math.sin(angle * Math.PI / 180) * 85}
                              stroke="currentColor"
                              strokeWidth="0.5"
                              className="text-gray-400"
                            />
                          </g>
                        )
                      })}

                      {/* Center circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="8"
                        fill="currentColor"
                        className="text-gray-800 dark:text-gray-200"
                      />
                    </svg>
                  </div>

                  {/* Controls */}
                  <div className="space-y-4">
                    {categories.map((category) => (
                      <div key={category.key} className="flex items-center space-x-4">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">{t(category.key)}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {wheelValues[category.key][0]}
                            </span>
                          </div>
                          <Slider
                            value={wheelValues[category.key]}
                            onValueChange={(value) => updateValue(category.key, value)}
                            max={10}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Analysis */}
                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">
                        {t('average_score')}: {averageScore.toFixed(1)}
                      </div>
                      {isUnbalanced && (
                        <div className="flex items-center justify-center space-x-2 text-amber-600 dark:text-amber-400">
                          <AlertTriangle size={16} />
                          <span className="text-sm">{t('unbalanced_wheel')}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Generate Report Button */}
                  <div className="mt-6 text-center">
                    <Button
                      onClick={openReportModal}
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      disabled={!interacted}
                    >
                      {t('generate_report')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              variant="ghost"
              onClick={scrollToNext}
              className="animate-bounce"
            >
              <ChevronDown size={24} />
            </Button>
          </motion.div>
        </div>
      </section>
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={closeReportModal}
        wheelValues={wheelValues}
        categories={categories}
      />
    </>
  )
}

export default HeroSection

