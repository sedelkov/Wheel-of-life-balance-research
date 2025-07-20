import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Target, Users, TrendingUp, Clock, DollarSign, Heart } from 'lucide-react'

const WhatIsWheelSection = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: 'Оценка текущего состояния',
      description: 'Пользователь оценивает свою удовлетворенность в 8-10 жизненных сферах по шкале от 1 до 10',
      icon: Target
    },
    {
      title: 'Визуализация "колеса"',
      description: 'Оценки отображаются в виде колеса, где неровности показывают дисбаланс',
      icon: TrendingUp
    },
    {
      title: 'Анализ дисбаланса',
      description: 'Выявляются области с низкими оценками, требующие внимания',
      icon: Users
    },
    {
      title: 'Постановка целей',
      description: 'Определяются цели для улучшения проблемных областей',
      icon: Target
    }
  ]

  const categories = [
    { name: 'Карьера', description: 'Профессиональное развитие и удовлетворенность работой', icon: TrendingUp },
    { name: 'Финансы', description: 'Финансовая стабильность и управление деньгами', icon: DollarSign },
    { name: 'Здоровье', description: 'Физическое и психическое здоровье', icon: Heart },
    { name: 'Отношения', description: 'Семейные и дружеские отношения', icon: Users },
    { name: 'Личностный рост', description: 'Саморазвитие и обучение', icon: Target },
    { name: 'Отдых и развлечения', description: 'Досуг и хобби', icon: Clock },
    { name: 'Физическая среда', description: 'Дом и окружающая обстановка', icon: Heart },
    { name: 'Вклад в общество', description: 'Помощь другим и социальная активность', icon: Users }
  ]

  const popularityStats = [
    { metric: '10+ млн', description: 'Пользователей по всему миру' },
    { metric: '1960-е', description: 'Год создания методики' },
    { metric: '85%', description: 'Коучей используют эту методику' },
    { metric: '200+', description: 'Книг и курсов по теме' }
  ]

  return (
    <section id="what-is-wheel" className="py-20 bg-white dark:bg-gray-900">
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
            Основы методики
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Что такое «Колесо баланса жизни»?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Популярная коучинговая методика, созданная в 1960-х годах Полом Мейером, 
            используется миллионами людей для оценки и улучшения жизненного баланса
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="categories">Категории</TabsTrigger>
            <TabsTrigger value="popularity">Популярность</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Основная идея</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Методика основана на метафоре колеса: если одна из спиц короче других, 
                    колесо будет неровным и поездка станет некомфортной. Аналогично, 
                    если одна из жизненных сфер развита слабо, это влияет на общее качество жизни.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                      Ключевые принципы:
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Жизнь состоит из взаимосвязанных сфер</li>
                      <li>• Баланс между сферами важен для благополучия</li>
                      <li>• Визуализация помогает выявить проблемы</li>
                      <li>• Фокус на улучшении слабых областей</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Предполагаемые преимущества</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Target className="mx-auto mb-2 text-green-600" size={24} />
                      <div className="text-sm font-medium">Ясность целей</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <TrendingUp className="mx-auto mb-2 text-blue-600" size={24} />
                      <div className="text-sm font-medium">Мотивация</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <Users className="mx-auto mb-2 text-purple-600" size={24} />
                      <div className="text-sm font-medium">Самосознание</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <Heart className="mx-auto mb-2 text-orange-600" size={24} />
                      <div className="text-sm font-medium">Баланс</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Сторонники методики утверждают, что она помогает людям получить 
                    целостное представление о своей жизни и сфокусироваться на важных областях.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="process" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Пошаговый процесс</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-start space-x-4 p-4 rounded-lg cursor-pointer transition-all ${
                          activeStep === index 
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' 
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <div className={`p-2 rounded-full ${
                          activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
                        }`}>
                          <step.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">
                            Шаг {index + 1}: {step.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                        <div className="text-2xl font-bold text-gray-300 dark:text-gray-600">
                          {index + 1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <category.icon className="mx-auto mb-3 text-blue-600" size={32} />
                      <h4 className="font-semibold mb-2">{category.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="popularity" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-6 mb-8"
            >
              {popularityStats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.metric}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Широкое применение</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Коучинг и консультирование</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Лайф-коучинг</li>
                        <li>• Карьерное консультирование</li>
                        <li>• Психологическая поддержка</li>
                        <li>• Корпоративные тренинги</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Образование</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Университетские курсы</li>
                        <li>• Программы MBA</li>
                        <li>• Тренинги личностного роста</li>
                        <li>• Онлайн-курсы</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Самопомощь</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Мобильные приложения</li>
                        <li>• Книги по саморазвитию</li>
                        <li>• Онлайн-инструменты</li>
                        <li>• Групповые программы</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Но работает ли эта методика для всех?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
                Несмотря на широкую популярность, растущее число исследований ставит под сомнение 
                универсальную применимость методики «Колесо баланса жизни», особенно для людей 
                с ограниченными ресурсами.
              </p>
              <Button 
                onClick={() => document.getElementById('problem').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Узнать о проблемах методики
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIsWheelSection

