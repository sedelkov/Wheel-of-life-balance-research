import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { Brain, TrendingDown, AlertTriangle, Zap, RotateCcw } from 'lucide-react'

const GapFramingSection = () => {
  const [expectations, setExpectations] = useState([8])
  const [reality, setReality] = useState([4])
  const [resources, setResources] = useState([5])
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isSimulating, setIsSimulating] = useState(false)

  // Расчет фрустрации и других эффектов
  const gap = expectations[0] - reality[0]
  const frustration = Math.max(0, gap * (11 - resources[0]) / 10)
  const learnedHelplessness = Math.max(0, (frustration - 3) * 0.3)
  const wellbeing = Math.max(0, 10 - frustration - learnedHelplessness)

  // Данные для графика развития эффектов во времени
  const [timeSeriesData, setTimeSeriesData] = useState([])

  useEffect(() => {
    if (isSimulating && timeElapsed < 12) {
      const timer = setTimeout(() => {
        const newFrustration = Math.min(10, frustration + Math.random() * 0.5)
        const newHelplessness = Math.min(10, learnedHelplessness + (timeElapsed > 6 ? Math.random() * 0.3 : 0))
        const newWellbeing = Math.max(0, 10 - newFrustration - newHelplessness)

        setTimeSeriesData(prev => [...prev, {
          month: timeElapsed + 1,
          frustration: newFrustration,
          helplessness: newHelplessness,
          wellbeing: newWellbeing,
          gap: gap
        }])

        setTimeElapsed(prev => prev + 1)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isSimulating, timeElapsed, frustration, learnedHelplessness, gap])

  const startSimulation = () => {
    setIsSimulating(true)
    setTimeElapsed(0)
    setTimeSeriesData([{
      month: 0,
      frustration: frustration,
      helplessness: learnedHelplessness,
      wellbeing: wellbeing,
      gap: gap
    }])
  }

  const resetSimulation = () => {
    setIsSimulating(false)
    setTimeElapsed(0)
    setTimeSeriesData([])
  }

  const getGapColor = (gap) => {
    if (gap <= 2) return '#4CAF50'
    if (gap <= 4) return '#FFC107'
    if (gap <= 6) return '#FF9800'
    return '#F44336'
  }

  const getResourcesLabel = (value) => {
    if (value <= 3) return 'Очень ограниченные'
    if (value <= 5) return 'Ограниченные'
    if (value <= 7) return 'Средние'
    return 'Достаточные'
  }

  // Примеры сценариев
  const scenarios = [
    {
      name: 'Студент с ограниченными ресурсами',
      expectations: 9,
      reality: 3,
      resources: 2,
      description: 'Высокие ожидания, низкая реальность, минимальные ресурсы'
    },
    {
      name: 'Работающий родитель',
      expectations: 7,
      reality: 5,
      resources: 4,
      description: 'Умеренные ожидания, средняя реальность, ограниченные ресурсы'
    },
    {
      name: 'Человек с достаточными ресурсами',
      expectations: 8,
      reality: 6,
      resources: 8,
      description: 'Высокие ожидания, хорошая реальность, достаточные ресурсы'
    }
  ]

  const applyScenario = (scenario) => {
    setExpectations([scenario.expectations])
    setReality([scenario.reality])
    setResources([scenario.resources])
    resetSimulation()
  }

  return (
    <section id="gap-framing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Brain size={16} className="mr-2" />
            Когнитивные эффекты
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Gap Framing: Когда разрыв становится проблемой
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Интерактивная демонстрация того, как разрыв между ожиданиями и реальностью 
            влияет на психологическое благополучие в зависимости от доступных ресурсов
            <br />
            <span className="text-sm mt-2 block">
              Исследования: 
              <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0287064" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                Nießen et al. (2023)
              </a>,
              <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1531759/full" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                Goal adjustment processes (2025)
              </a>,
              <a href="https://www.numberanalytics.com/blog/understanding-self-discrepancy-theory" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                Self-Discrepancy Theory (2024)
              </a>
            </span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Интерактивный симулятор */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="text-blue-500" />
                  <span>Интерактивный симулятор</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Контролы */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium">Ожидания</label>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{expectations[0]}/10</span>
                    </div>
                    <Slider
                      value={expectations}
                      onValueChange={setExpectations}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium">Реальность</label>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{reality[0]}/10</span>
                    </div>
                    <Slider
                      value={reality}
                      onValueChange={setReality}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium">Доступные ресурсы</label>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {getResourcesLabel(resources[0])}
                      </span>
                    </div>
                    <Slider
                      value={resources}
                      onValueChange={setResources}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Быстрые сценарии */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Быстрые сценарии:</h4>
                  <div className="grid gap-2">
                    {scenarios.map((scenario, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => applyScenario(scenario)}
                        className="text-left justify-start h-auto p-3"
                      >
                        <div>
                          <div className="font-medium">{scenario.name}</div>
                          <div className="text-xs text-gray-500">{scenario.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Результаты */}
                <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Разрыв (Gap):</span>
                    <Badge style={{ backgroundColor: getGapColor(gap), color: 'white' }}>
                      {gap.toFixed(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Фрустрация:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(frustration / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm w-8">{frustration.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Выученная беспомощность:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(learnedHelplessness / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm w-8">{learnedHelplessness.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Благополучие:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(wellbeing / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm w-8">{wellbeing.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                {/* Кнопки симуляции */}
                <div className="flex space-x-2">
                  <Button 
                    onClick={startSimulation}
                    disabled={isSimulating}
                    className="flex-1"
                  >
                    {isSimulating ? 'Симуляция...' : 'Запустить симуляцию'}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={resetSimulation}
                    size="sm"
                  >
                    <RotateCcw size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Визуализация эффектов */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Развитие эффектов во времени</CardTitle>
              </CardHeader>
              <CardContent>
                {timeSeriesData.length > 0 ? (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={timeSeriesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" label={{ value: 'Месяцы', position: 'insideBottom', offset: -5 }} />
                        <YAxis domain={[0, 10]} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="frustration" 
                          stroke="#F44336" 
                          strokeWidth={2}
                          name="Фрустрация"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="helplessness" 
                          stroke="#9C27B0" 
                          strokeWidth={2}
                          name="Беспомощность"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="wellbeing" 
                          stroke="#4CAF50" 
                          strokeWidth={2}
                          name="Благополучие"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="h-80 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <div className="text-center">
                      <TrendingDown size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Запустите симуляцию, чтобы увидеть развитие эффектов</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Теоретическое объяснение */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Формула фрустрации</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4">
                <div className="text-2xl font-mono font-bold text-blue-800 dark:text-blue-200">
                  F = E - R
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                  Фрустрация = Ожидания - Реальность
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Чем больше разрыв между ожиданиями и реальностью, тем сильнее фрустрация. 
                Ограниченные ресурсы усиливают этот эффект.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Роль ресурсов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Достаточные ресурсы: буферный эффект</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Средние ресурсы: умеренное влияние</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Ограниченные ресурсы: усиление эффектов</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Доступные ресурсы (время, деньги, энергия, поддержка) модерируют влияние 
                разрыва на психологическое благополучие.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Кумулятивный эффект</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="text-sm">Месяц 1-3: Начальная фрустрация</div>
                <div className="text-sm">Месяц 4-6: Накопление стресса</div>
                <div className="text-sm">Месяц 7+: Выученная беспомощность</div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Постоянное воздействие gap framing может приводить к развитию 
                выученной беспомощности и снижению общего благополучия.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Предупреждение */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-amber-50 to-red-50 dark:from-amber-900/20 dark:to-red-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-amber-800 dark:text-amber-200">
                    Критическое предупреждение для практиков
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 mb-4">
                    Методика «Колесо баланса жизни» создает мощный gap framing эффект, 
                    который может быть особенно вредным для людей с ограниченными ресурсами. 
                    Визуализация "неровного колеса" усиливает фокус на недостатках и может 
                    приводить к развитию выученной беспомощности.
                  </p>
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Рекомендации:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Избегайте использования традиционного колеса для уязвимых групп</li>
                      <li>• Фокусируйтесь на сильных сторонах, а не на дефицитах</li>
                      <li>• Учитывайте реальные ограничения клиентов</li>
                      <li>• Используйте адаптированные методики</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default GapFramingSection

