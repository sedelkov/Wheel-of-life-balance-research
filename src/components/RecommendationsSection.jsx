import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Users, GraduationCap, Building, AlertTriangle, BookOpen, Target } from 'lucide-react'

const RecommendationsSection = () => {
  const [selectedAudience, setSelectedAudience] = useState('coaches')

  const audiences = {
    coaches: {
      name: 'Коучи и консультанты',
      icon: Users,
      color: 'blue',
      recommendations: [
        {
          title: 'Проведите оценку ресурсов клиента',
          description: 'Перед применением любой методики оцените доступные клиенту ресурсы (время, деньги, энергия, поддержка)',
          priority: 'Критически важно',
          implementation: [
            'Создайте чек-лист для оценки ресурсов',
            'Обсудите реальные ограничения с клиентом',
            'Адаптируйте подход под доступные ресурсы'
          ]
        },
        {
          title: 'Избегайте gap framing для уязвимых групп',
          description: 'Не используйте методики, которые подчеркивают разрыв между желаемым и текущим состоянием',
          priority: 'Высокий',
          implementation: [
            'Замените "колесо баланса" на strength-based подходы',
            'Фокусируйтесь на достижениях, а не на недостатках',
            'Используйте позитивное переформулирование целей'
          ]
        },
        {
          title: 'Получите дополнительное образование',
          description: 'Изучите травма-информированные и культурно-чувствительные подходы',
          priority: 'Средний',
          implementation: [
            'Пройдите курсы по травма-информированной практике',
            'Изучите влияние социально-экономических факторов',
            'Развивайте культурную компетентность'
          ]
        }
      ]
    },
    educators: {
      name: 'Преподаватели и тренеры',
      icon: GraduationCap,
      color: 'green',
      recommendations: [
        {
          title: 'Включите критический анализ в программы',
          description: 'Обучайте студентов критически оценивать популярные методики развития',
          priority: 'Критически важно',
          implementation: [
            'Добавьте модули о социальном контексте в курсы',
            'Обсуждайте ограничения популярных методик',
            'Учите анализировать эмпирические данные'
          ]
        },
        {
          title: 'Представляйте альтернативные подходы',
          description: 'Знакомьте студентов с адаптированными методиками для разных групп',
          priority: 'Высокий',
          implementation: [
            'Включите strength-based подходы в программу',
            'Изучайте травма-информированные практики',
            'Обсуждайте системные факторы'
          ]
        },
        {
          title: 'Развивайте этическое мышление',
          description: 'Подчеркивайте этическую ответственность при работе с уязвимыми группами',
          priority: 'Высокий',
          implementation: [
            'Обсуждайте принцип "не навреди"',
            'Анализируйте случаи неэтичного применения методик',
            'Развивайте навыки этической рефлексии'
          ]
        }
      ]
    },
    organizations: {
      name: 'Организации и HR',
      icon: Building,
      color: 'purple',
      recommendations: [
        {
          title: 'Пересмотрите корпоративные программы развития',
          description: 'Оцените, подходят ли используемые методики для всех сотрудников',
          priority: 'Критически важно',
          implementation: [
            'Проведите аудит существующих программ',
            'Соберите обратную связь от разных групп сотрудников',
            'Адаптируйте программы под разные потребности'
          ]
        },
        {
          title: 'Создайте инклюзивные программы поддержки',
          description: 'Разработайте программы, учитывающие разные жизненные обстоятельства',
          priority: 'Высокий',
          implementation: [
            'Предложите гибкие форматы участия',
            'Обеспечьте поддержку для участников с ограниченными ресурсами',
            'Используйте strength-based подходы'
          ]
        },
        {
          title: 'Обучите внутренних тренеров',
          description: 'Подготовьте команду к работе с разнообразными группами сотрудников',
          priority: 'Средний',
          implementation: [
            'Организуйте тренинги по культурной чувствительности',
            'Обучите альтернативным методикам развития',
            'Создайте руководства по инклюзивной практике'
          ]
        }
      ]
    }
  }

  const ethicalGuidelines = [
    {
      principle: 'Принцип "не навреди"',
      description: 'Всегда оценивайте потенциальный вред от применения методики',
      examples: [
        'Может ли методика усилить чувство неполноценности?',
        'Учитывает ли подход реальные ограничения клиента?',
        'Не создает ли методика нереалистичные ожидания?'
      ]
    },
    {
      principle: 'Культурная чувствительность',
      description: 'Адаптируйте подходы под культурный контекст клиентов',
      examples: [
        'Учитывайте коллективистские vs индивидуалистические ценности',
        'Признавайте различия в понимании успеха и благополучия',
        'Адаптируйте язык и примеры под культурный контекст'
      ]
    },
    {
      principle: 'Социальная справедливость',
      description: 'Признавайте и работайте с системными неравенствами',
      examples: [
        'Не обвиняйте людей в проблемах, вызванных системными факторами',
        'Поддерживайте адвокацию и системные изменения',
        'Предоставляйте равный доступ к качественной поддержке'
      ]
    }
  ]

  const implementationSteps = [
    {
      phase: 'Немедленные действия (0-1 месяц)',
      actions: [
        'Прекратите использование традиционного "колеса баланса" для уязвимых групп',
        'Проведите аудит текущих программ и методик',
        'Начните изучение альтернативных подходов'
      ]
    },
    {
      phase: 'Краткосрочные изменения (1-6 месяцев)',
      actions: [
        'Пройдите обучение по травма-информированным подходам',
        'Внедрите strength-based методики',
        'Разработайте инструменты оценки ресурсов клиентов'
      ]
    },
    {
      phase: 'Долгосрочные изменения (6+ месяцев)',
      actions: [
        'Создайте комплексные инклюзивные программы',
        'Обучите команду новым подходам',
        'Установите системы мониторинга эффективности и безопасности'
      ]
    }
  ]

  const currentAudience = audiences[selectedAudience]

  return (
    <section id="recommendations" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Target size={16} className="mr-2" />
            Практические рекомендации
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Как изменить практику уже сегодня
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Конкретные шаги для коучей, преподавателей и организаций по внедрению 
            более этичных и эффективных подходов к развитию
          </p>
        </motion.div>

        <Tabs defaultValue="by-audience" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="by-audience">По аудиториям</TabsTrigger>
            <TabsTrigger value="ethics">Этические принципы</TabsTrigger>
            <TabsTrigger value="implementation">План внедрения</TabsTrigger>
          </TabsList>

          <TabsContent value="by-audience" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Выбор аудитории */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите вашу роль</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(audiences).map(([key, audience]) => (
                      <Button
                        key={key}
                        variant={selectedAudience === key ? "default" : "outline"}
                        className="w-full justify-start h-auto p-4"
                        onClick={() => setSelectedAudience(key)}
                      >
                        <audience.icon className={`mr-3 text-${audience.color}-500`} size={20} />
                        <span>{audience.name}</span>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Рекомендации для выбранной аудитории */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                key={selectedAudience}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <currentAudience.icon className={`text-${currentAudience.color}-500`} />
                      <span>Рекомендации для {currentAudience.name.toLowerCase()}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {currentAudience.recommendations.map((rec, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{rec.title}</h4>
                          <Badge variant={rec.priority === 'Критически важно' ? 'destructive' : 
                                        rec.priority === 'Высокий' ? 'default' : 'secondary'}>
                            {rec.priority}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">{rec.description}</p>
                        <div>
                          <h5 className="text-sm font-medium mb-2">Как внедрить:</h5>
                          <ul className="space-y-1">
                            {rec.implementation.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start space-x-2">
                                <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="ethics" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-1 gap-6"
            >
              {ethicalGuidelines.map((guideline, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="text-amber-500" />
                      <span>{guideline.principle}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{guideline.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Вопросы для рефлексии:</h4>
                      <ul className="space-y-2">
                        {guideline.examples.map((example, exIndex) => (
                          <li key={exIndex} className="flex items-start space-x-2">
                            <div className="bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              ?
                            </div>
                            <span className="text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {implementationSteps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-red-500' : index === 1 ? 'bg-orange-500' : 'bg-green-500'
                      }`}>
                        {index + 1}
                      </div>
                      <span>{step.phase}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {step.actions.map((action, actionIndex) => (
                        <motion.li
                          key={actionIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: actionIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm">{action}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Ресурсы для дальнейшего изучения */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardHeader>
              <CardTitle className="text-center">Ресурсы для дальнейшего изучения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <BookOpen className="mx-auto mb-3 text-blue-500" size={32} />
                  <h4 className="font-semibold mb-2">Литература</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Trauma-Informed Coaching</li>
                    <li>• Strength-Based Practice</li>
                    <li>• Cultural Competency in Coaching</li>
                    <li>• Social Justice in Psychology</li>
                  </ul>
                </div>
                <div className="text-center">
                  <GraduationCap className="mx-auto mb-3 text-green-500" size={32} />
                  <h4 className="font-semibold mb-2">Обучение</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Сертификация по травма-информированной практике</li>
                    <li>• Курсы по культурной компетентности</li>
                    <li>• Тренинги по инклюзивному коучингу</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-3 text-purple-500" size={32} />
                  <h4 className="font-semibold mb-2">Сообщества</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Ассоциации этичного коучинга</li>
                    <li>• Группы по социальной справедливости</li>
                    <li>• Профессиональные сети</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">
                Начните изменения уже сегодня
              </h3>
              <p className="text-lg text-green-700 dark:text-green-300 mb-6 max-w-3xl mx-auto">
                Каждый шаг к более этичной и инклюзивной практике имеет значение. 
                Начните с малого, но начните сегодня.
              </p>
              <Button 
                onClick={() => document.getElementById('conclusion').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                Перейти к заключению
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default RecommendationsSection

