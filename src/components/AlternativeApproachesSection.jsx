import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Lightbulb, Heart, Shield, Users, Target, CheckCircle, Star } from 'lucide-react'

const AlternativeApproachesSection = () => {
  const [selectedApproach, setSelectedApproach] = useState('strength-based')

  const approaches = {
    'strength-based': {
      name: 'Подход, основанный на сильных сторонах',
      icon: Star,
      color: 'green',
      description: 'Фокус на существующих ресурсах и способностях вместо дефицитов',
      principles: [
        'Выявление и развитие существующих талантов',
        'Использование прошлых успехов как основы для роста',
        'Построение на том, что уже работает',
        'Признание уникальных способностей каждого человека'
      ],
      benefits: [
        'Повышение самооценки и уверенности',
        'Снижение чувства неполноценности',
        'Более реалистичные и достижимые цели',
        'Устойчивая мотивация к развитию'
      ],
      implementation: [
        'Инвентаризация существующих навыков и достижений',
        'Анализ ситуаций, где человек был успешен',
        'Определение паттернов успеха',
        'Применение сильных сторон к новым вызовам'
      ]
    },
    'trauma-informed': {
      name: 'Травма-информированный подход',
      icon: Shield,
      color: 'blue',
      description: 'Учет влияния травматического опыта на способность к изменениям',
      principles: [
        'Безопасность как приоритет',
        'Признание влияния травмы на поведение',
        'Избежание ре-травматизации',
        'Постепенное восстановление контроля'
      ],
      benefits: [
        'Снижение риска ре-травматизации',
        'Более безопасная среда для роста',
        'Учет реальных ограничений',
        'Поддержка процесса исцеления'
      ],
      implementation: [
        'Создание безопасного пространства',
        'Постепенное увеличение сложности задач',
        'Развитие навыков саморегуляции',
        'Работа с профессиональными специалистами'
      ]
    },
    'systemic': {
      name: 'Системный коучинг',
      icon: Users,
      color: 'purple',
      description: 'Работа с системными факторами и социальным контекстом',
      principles: [
        'Признание влияния системных факторов',
        'Работа с окружением, а не только с индивидом',
        'Адвокация и системные изменения',
        'Коллективные решения проблем'
      ],
      benefits: [
        'Устранение системных барьеров',
        'Более устойчивые изменения',
        'Поддержка сообщества',
        'Реалистичный подход к ограничениям'
      ],
      implementation: [
        'Анализ системных барьеров',
        'Работа с семьей и сообществом',
        'Адвокация и лоббирование изменений',
        'Создание поддерживающих сетей'
      ]
    },
    'resource-aware': {
      name: 'Ресурсо-ориентированный подход',
      icon: Target,
      color: 'orange',
      description: 'Адаптация целей под реальные возможности и ресурсы',
      principles: [
        'Реалистичная оценка доступных ресурсов',
        'Приоритизация критически важных областей',
        'Поэтапное достижение целей',
        'Гибкость и адаптивность планов'
      ],
      benefits: [
        'Достижимые и реалистичные цели',
        'Снижение фрустрации от неудач',
        'Эффективное использование ограниченных ресурсов',
        'Устойчивый прогресс'
      ],
      implementation: [
        'Аудит доступных ресурсов',
        'Определение приоритетных областей',
        'Создание поэтапного плана',
        'Регулярная корректировка целей'
      ]
    }
  }

  const comparisonData = [
    {
      aspect: 'Фокус',
      traditional: 'Дефициты и проблемы',
      alternative: 'Сильные стороны и ресурсы'
    },
    {
      aspect: 'Цели',
      traditional: 'Идеальный баланс во всех сферах',
      alternative: 'Реалистичные приоритеты'
    },
    {
      aspect: 'Подход к ограничениям',
      traditional: 'Игнорирование или преодоление',
      alternative: 'Признание и адаптация'
    },
    {
      aspect: 'Временная перспектива',
      traditional: 'Быстрые изменения',
      alternative: 'Постепенный устойчивый рост'
    },
    {
      aspect: 'Ответственность',
      traditional: 'Индивидуальная',
      alternative: 'Совместная с системой'
    }
  ]

  const practicalTools = [
    {
      name: 'Карта ресурсов',
      description: 'Визуализация доступных ресурсов и поддержки',
      steps: [
        'Определите все виды ресурсов (время, деньги, люди, навыки)',
        'Оцените доступность каждого ресурса',
        'Найдите способы оптимизации использования',
        'Определите недостающие ресурсы и способы их получения'
      ]
    },
    {
      name: 'Анализ сильных сторон',
      description: 'Систематическое выявление и развитие способностей',
      steps: [
        'Вспомните 3-5 ситуаций, где вы были успешны',
        'Определите общие паттерны и навыки',
        'Найдите способы применения этих навыков к текущим вызовам',
        'Создайте план развития сильных сторон'
      ]
    },
    {
      name: 'Приоритетная матрица',
      description: 'Определение наиболее важных областей для изменений',
      steps: [
        'Оцените важность каждой сферы жизни (1-10)',
        'Оцените возможность влияния на каждую сферу (1-10)',
        'Умножьте важность на возможность влияния',
        'Сфокусируйтесь на областях с наивысшими баллами'
      ]
    }
  ]

  const currentApproach = approaches[selectedApproach]

  return (
    <section id="alternatives" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Lightbulb size={16} className="mr-2" />
            Альтернативные подходы
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Эффективные альтернативы для уязвимых групп
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Исследования показывают, что адаптированные подходы значительно более эффективны 
            для людей с ограниченными ресурсами
          </p>
        </motion.div>

        <Tabs defaultValue="approaches" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="approaches">Подходы</TabsTrigger>
            <TabsTrigger value="comparison">Сравнение</TabsTrigger>
            <TabsTrigger value="tools">Практические инструменты</TabsTrigger>
          </TabsList>

          <TabsContent value="approaches" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Выбор подхода */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите подход для изучения</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(approaches).map(([key, approach]) => (
                      <Button
                        key={key}
                        variant={selectedApproach === key ? "default" : "outline"}
                        className="w-full justify-start h-auto p-4"
                        onClick={() => setSelectedApproach(key)}
                      >
                        <approach.icon className={`mr-3 text-${approach.color}-500`} size={20} />
                        <div className="text-left">
                          <div className="font-medium">{approach.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{approach.description}</div>
                        </div>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Детали подхода */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                key={selectedApproach}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <currentApproach.icon className={`text-${currentApproach.color}-500`} />
                      <span>{currentApproach.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      {currentApproach.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Основные принципы:</h4>
                      <ul className="space-y-2">
                        {currentApproach.principles.map((principle, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle size={16} className={`text-${currentApproach.color}-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-sm">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Преимущества:</h4>
                      <ul className="space-y-2">
                        {currentApproach.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Star size={16} className={`text-${currentApproach.color}-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Практическое применение:</h4>
                      <ul className="space-y-2">
                        {currentApproach.implementation.map((step, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Target size={16} className={`text-${currentApproach.color}-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Сравнение традиционного и альтернативных подходов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4">Аспект</th>
                          <th className="text-left p-4">Традиционное колесо</th>
                          <th className="text-left p-4">Альтернативные подходы</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <td className="p-4 font-medium">{row.aspect}</td>
                            <td className="p-4 text-red-600 dark:text-red-400">{row.traditional}</td>
                            <td className="p-4 text-green-600 dark:text-green-400">{row.alternative}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                    <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">
                      Доказанная эффективность
                    </h3>
                    <p className="text-lg text-green-700 dark:text-green-300 mb-6 max-w-3xl mx-auto">
                      Исследования показывают, что альтернативные подходы повышают эффективность 
                      на 40-60% для людей с ограниченными ресурсами по сравнению с традиционными методиками.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                      <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <div className="text-2xl font-bold text-green-800 dark:text-green-200">+52%</div>
                        <div className="text-sm text-green-600 dark:text-green-400">Повышение мотивации</div>
                      </div>
                      <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">-38%</div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">Снижение фрустрации</div>
                      </div>
                      <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">+65%</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">Достижение целей</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-1 gap-6"
            >
              {practicalTools.map((tool, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="text-blue-500" />
                      <span>{tool.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Пошаговое руководство:</h4>
                      <ol className="space-y-2">
                        {tool.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3">
                            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardContent className="p-8">
              <Heart className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-2xl font-bold mb-4">
                Время для изменений в практике
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
                Альтернативные подходы не только более эффективны, но и более этичны. 
                Они признают реальные ограничения людей и работают с ними, а не против них.
              </p>
              <Button 
                onClick={() => document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Изучить рекомендации
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AlternativeApproachesSection

