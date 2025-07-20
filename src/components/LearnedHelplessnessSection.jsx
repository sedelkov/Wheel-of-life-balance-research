import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Brain, AlertCircle, TrendingDown, RefreshCw, CheckCircle, XCircle } from 'lucide-react'

const LearnedHelplessnessSection = () => {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [testAnswers, setTestAnswers] = useState({})

  const scenarios = [
    {
      title: 'Финансовая сфера',
      situation: 'Человек с низким доходом пытается улучшить финансовое положение',
      attempts: [
        { action: 'Ищет дополнительную работу', result: 'Отказы из-за отсутствия опыта', success: false },
        { action: 'Пытается сократить расходы', result: 'Уже тратит только на необходимое', success: false },
        { action: 'Обращается за финансовой помощью', result: 'Длинные очереди, бюрократия', success: false }
      ],
      outcome: 'Развивается убеждение: "Я не могу изменить свое финансовое положение"',
      generalization: 'Это убеждение распространяется на другие сферы жизни'
    },
    {
      title: 'Здоровье',
      situation: 'Работающий родитель пытается улучшить физическое здоровье',
      attempts: [
        { action: 'Записывается в спортзал', result: 'Нет времени из-за работы и детей', success: false },
        { action: 'Пытается готовить здоровую еду', result: 'Дорого и требует много времени', success: false },
        { action: 'Ищет бесплатные варианты', result: 'Неудобное расписание или далеко от дома', success: false }
      ],
      outcome: 'Развивается убеждение: "У меня нет возможности быть здоровым"',
      generalization: 'Снижается мотивация к изменениям в других областях'
    },
    {
      title: 'Карьера',
      situation: 'Студент из малообеспеченной семьи пытается построить карьеру',
      attempts: [
        { action: 'Ищет стажировки', result: 'Большинство неоплачиваемые, нужно работать', success: false },
        { action: 'Пытается получить дополнительное образование', result: 'Нет денег на курсы', success: false },
        { action: 'Ищет ментора', result: 'Нет связей в профессиональной среде', success: false }
      ],
      outcome: 'Развивается убеждение: "Успешная карьера не для таких как я"',
      generalization: 'Снижаются ожидания и амбиции во всех сферах'
    }
  ]

  const testQuestions = [
    {
      id: 1,
      question: 'Когда у меня что-то не получается, я обычно думаю:',
      options: [
        { text: 'Это временная неудача, я найду другой способ', score: 0 },
        { text: 'Возможно, мне нужно больше стараться', score: 1 },
        { text: 'У меня никогда ничего не получается', score: 2 }
      ]
    },
    {
      id: 2,
      question: 'Если я сталкиваюсь с препятствием:',
      options: [
        { text: 'Ищу альтернативные пути решения', score: 0 },
        { text: 'Пытаюсь еще раз тем же способом', score: 1 },
        { text: 'Сдаюсь, потому что все равно не получится', score: 2 }
      ]
    },
    {
      id: 3,
      question: 'Когда я вижу успех других людей:',
      options: [
        { text: 'Вдохновляюсь и учусь у них', score: 0 },
        { text: 'Думаю, что им просто повезло', score: 1 },
        { text: 'Считаю, что у меня никогда такого не будет', score: 2 }
      ]
    }
  ]

  const getTestResult = () => {
    const totalScore = Object.values(testAnswers).reduce((sum, score) => sum + score, 0)
    if (totalScore <= 2) return { level: 'Низкий', color: 'green', description: 'У вас здоровое отношение к неудачам' }
    if (totalScore <= 4) return { level: 'Средний', color: 'yellow', description: 'Есть признаки выученной беспомощности' }
    return { level: 'Высокий', color: 'red', description: 'Выраженные признаки выученной беспомощности' }
  }

  const mechanisms = [
    {
      title: 'Генерализация неудач',
      description: 'Неудача в одной области распространяется на другие сферы жизни',
      example: 'Не получилось найти работу → "Я вообще ни на что не способен"',
      icon: TrendingDown,
      color: 'red'
    },
    {
      title: 'Атрибуция к личным качествам',
      description: 'Неудачи объясняются внутренними, стабильными факторами',
      example: 'Отказ в кредите → "Я неудачник" (вместо "Банк ужесточил требования")',
      icon: Brain,
      color: 'orange'
    },
    {
      title: 'Снижение мотивации',
      description: 'Ожидание неудачи приводит к отказу от попыток',
      example: 'Зачем пытаться улучшить отношения, если все равно не получится',
      icon: AlertCircle,
      color: 'amber'
    }
  ]

  const currentScen = scenarios[currentScenario]

  return (
    <section id="learned-helplessness" className="py-20 bg-white dark:bg-gray-900">
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
            Психологические механизмы
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Выученная беспомощность и Gap Framing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Как постоянная визуализация недостижимых целей может приводить к 
            развитию выученной беспомощности у людей с ограниченными ресурсами
            <br />
            <span className="text-sm mt-2 block">
              Исследования: 
              <a href="https://www.tandfonline.com/doi/full/10.1080/02699931.2022.2141002" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                Scherer (2022)
              </a>,
              <a href="https://www.resiliencelab.us/thought-lab/what-is-learned-helplessness" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                Resilience Lab (2024)
              </a>,
              <a href="https://www.coachhub.com/blog/breaking-free-from-learned-helplessness-coaching-strategies-for-empowerment" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                CoachHub (2025)
              </a>
            </span>
          </p>
        </motion.div>

        {/* Интерактивные сценарии */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Сценарии развития беспомощности</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  {scenarios.map((_, index) => (
                    <Button
                      key={index}
                      variant={currentScenario === index ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentScenario(index)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">{currentScen.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{currentScen.situation}</p>

                  <div className="space-y-3">
                    <h5 className="font-medium">Попытки изменений:</h5>
                    {currentScen.attempts.map((attempt, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <XCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                        <div>
                          <div className="font-medium text-sm">{attempt.action}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{attempt.result}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">Результат:</h5>
                    <p className="text-sm text-red-700 dark:text-red-300 mb-2">{currentScen.outcome}</p>
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium">{currentScen.generalization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Тест на выученную беспомощность</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {testQuestions.map((question, index) => (
                  <div key={question.id} className="space-y-3">
                    <h5 className="font-medium">{question.question}</h5>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          variant={testAnswers[question.id] === option.score ? "default" : "outline"}
                          size="sm"
                          className="w-full justify-start h-auto p-3 text-left"
                          onClick={() => setTestAnswers(prev => ({ ...prev, [question.id]: option.score }))}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}

                {Object.keys(testAnswers).length === testQuestions.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    {(() => {
                      const result = getTestResult()
                      return (
                        <div>
                          <h5 className="font-medium mb-2">Ваш результат:</h5>
                          <Badge className={`bg-${result.color}-100 text-${result.color}-800 mb-2`}>
                            {result.level} уровень
                          </Badge>
                          <p className="text-sm">{result.description}</p>
                        </div>
                      )
                    })()}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Механизмы развития */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Механизмы развития выученной беспомощности</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {mechanisms.map((mechanism, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`p-4 bg-${mechanism.color}-50 dark:bg-${mechanism.color}-900/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <mechanism.icon className={`text-${mechanism.color}-600`} size={24} />
                    </div>
                    <h4 className="font-semibold mb-2">{mechanism.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{mechanism.description}</p>
                    <div className={`p-3 bg-${mechanism.color}-50 dark:bg-${mechanism.color}-900/20 rounded-lg`}>
                      <p className={`text-xs text-${mechanism.color}-700 dark:text-${mechanism.color}-300`}>
                        <strong>Пример:</strong> {mechanism.example}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Связь с методикой Колесо баланса */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardHeader>
              <CardTitle className="text-center">
                Как «Колесо баланса жизни» способствует выученной беспомощности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Проблематичные аспекты методики:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <div className="font-medium">Множественные gap'ы</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Одновременная визуализация проблем в 8-10 сферах жизни
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <div className="font-medium">Игнорирование ограничений</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Не учитывает реальные возможности для изменений
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <div className="font-medium">Фокус на дефицитах</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Подчеркивает то, чего не хватает, а не сильные стороны
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Последствия для уязвимых групп:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <div className="font-medium text-red-800 dark:text-red-200">Усиление фрустрации</div>
                      <div className="text-sm text-red-700 dark:text-red-300">
                        Постоянное напоминание о недостижимых целях
                      </div>
                    </div>
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <div className="font-medium text-orange-800 dark:text-orange-200">Снижение самооценки</div>
                      <div className="text-sm text-orange-700 dark:text-orange-300">
                        Самообвинение в неспособности достичь "баланса"
                      </div>
                    </div>
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <div className="font-medium text-purple-800 dark:text-purple-200">Отказ от попыток</div>
                      <div className="text-sm text-purple-700 dark:text-purple-300">
                        Развитие убеждения "у меня все равно не получится"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
            <CardContent className="p-8">
              <div className="text-center">
                <AlertCircle className="mx-auto mb-4 text-red-500" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-200">
                  Критическое предупреждение
                </h3>
                <p className="text-lg text-red-700 dark:text-red-300 mb-6 max-w-3xl mx-auto">
                  Для людей с ограниченными ресурсами методика «Колесо баланса жизни» может 
                  не только быть неэффективной, но и активно способствовать развитию выученной 
                  беспомощности через создание множественных gap framing эффектов.
                </p>
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg max-w-2xl mx-auto">
                  <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">
                    Особенно опасно для:
                  </h4>
                  <div className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <div>• Людей, уже находящихся в состоянии стресса</div>
                    <div>• Тех, кто сталкивается с системными барьерами</div>
                    <div>• Людей с историей неудач и травм</div>
                    <div>• Представителей маргинализированных групп</div>
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

export default LearnedHelplessnessSection

