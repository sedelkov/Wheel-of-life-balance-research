import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { ChevronDown, AlertTriangle, Users, TrendingDown } from 'lucide-react'

const HeroSection = () => {
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

  const categories = [
    { key: 'career', label: 'Карьера', color: '#1976D2' },
    { key: 'finances', label: 'Финансы', color: '#388E3C' },
    { key: 'health', label: 'Здоровье', color: '#F57C00' },
    { key: 'relationships', label: 'Отношения', color: '#E91E63' },
    { key: 'personal_growth', label: 'Рост', color: '#9C27B0' },
    { key: 'recreation', label: 'Отдых', color: '#00BCD4' },
    { key: 'physical_environment', label: 'Среда', color: '#4CAF50' },
    { key: 'contribution', label: 'Вклад', color: '#FF5722' }
  ]

  const updateValue = (category, value) => {
    setWheelValues(prev => ({
      ...prev,
      [category]: value
    }))
  }

  const scrollToNext = () => {
    document.getElementById('what-is-wheel').scrollIntoView({ behavior: 'smooth' })
  }

  const averageScore = Object.values(wheelValues).reduce((sum, val) => sum + val[0], 0) / 8
  const isUnbalanced = Math.max(...Object.values(wheelValues).map(v => v[0])) - 
                      Math.min(...Object.values(wheelValues).map(v => v[0])) > 4

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-12">
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
                <span>Критическое исследование</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Колесо баланса жизни:
                <span className="text-blue-600 dark:text-blue-400 block">
                  Работает ли оно для всех?
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Интерактивное исследование валидности популярной коучинговой методики 
                для людей с ограниченными ресурсами
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
                  <div className="text-sm text-gray-600 dark:text-gray-400">Исследований</div>
                </CardContent>
              </Card>

              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingDown className="text-red-600" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">↓60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Эффективность</div>
                </CardContent>
              </Card>

              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-2">
                    <AlertTriangle className="text-amber-600" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Риски</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Выявлены</div>
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
                Начать исследование
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('empirical-data').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3"
              >
                Перейти к данным
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
                  <h3 className="text-2xl font-bold mb-2">Попробуйте сами</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Оцените свою удовлетворенность по каждой сфере от 1 до 10
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
                          <span className="text-sm font-medium">{category.label}</span>
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
                      Средний балл: {averageScore.toFixed(1)}
                    </div>
                    {isUnbalanced && (
                      <div className="flex items-center justify-center space-x-2 text-amber-600 dark:text-amber-400">
                        <AlertTriangle size={16} />
                        <span className="text-sm">Колесо сильно неровное</span>
                      </div>
                    )}
                  </div>
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
  )
}

export default HeroSection

