import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertTriangle, Heart, Users, Target, BookOpen, Share2 } from 'lucide-react'

const ConclusionSection = () => {
  const keyFindings = [
    {
      finding: 'Методика неэффективна для людей с ограниченными ресурсами',
      evidence: 'Эффективность снижается на 75% для людей с низким СЭС',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      finding: 'Gap framing может причинять психологический вред',
      evidence: 'Усиливает фрустрацию и способствует выученной беспомощности',
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      finding: 'Социальный контекст критически важен',
      evidence: 'Культурные и экономические факторы определяют применимость',
      icon: Users,
      color: 'blue'
    },
    {
      finding: 'Альтернативные подходы значительно эффективнее',
      evidence: 'Повышение эффективности на 40-60% для уязвимых групп',
      icon: CheckCircle,
      color: 'green'
    }
  ]

  const implications = [
    {
      area: 'Для практиков',
      description: 'Необходимо пересмотреть использование традиционных методик и внедрить адаптированные подходы',
      actions: [
        'Прекратить использование "колеса баланса" для уязвимых групп',
        'Изучить strength-based и травма-информированные подходы',
        'Развивать культурную компетентность'
      ]
    },
    {
      area: 'Для образования',
      description: 'Программы подготовки должны включать критический анализ популярных методик',
      actions: [
        'Включить модули о социальном контексте в учебные планы',
        'Обучать этическим принципам работы с уязвимыми группами',
        'Представлять альтернативные подходы'
      ]
    },
    {
      area: 'Для исследований',
      description: 'Необходимы дополнительные исследования эффективности адаптированных методик',
      actions: [
        'Изучать долгосрочные эффекты различных подходов',
        'Исследовать культурную адаптацию методик',
        'Разрабатывать инструменты оценки безопасности'
      ]
    }
  ]

  const futureDirections = [
    'Разработка культурно-адаптированных методик развития',
    'Создание инструментов оценки ресурсов и ограничений клиентов',
    'Исследование долгосрочных эффектов различных подходов к развитию',
    'Разработка этических стандартов для индустрии самопомощи',
    'Создание инклюзивных программ поддержки для организаций'
  ]

  const callToAction = [
    {
      audience: 'Коучи и консультанты',
      action: 'Пересмотрите свою практику и внедрите более этичные подходы',
      icon: Heart
    },
    {
      audience: 'Преподаватели',
      action: 'Включите критический анализ в свои программы обучения',
      icon: BookOpen
    },
    {
      audience: 'Исследователи',
      action: 'Изучайте эффективность адаптированных методик',
      icon: Target
    },
    {
      audience: 'Все заинтересованные',
      action: 'Распространяйте информацию о важности инклюзивного подхода',
      icon: Share2
    }
  ]

  return (
    <section id="conclusion" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <CheckCircle size={16} className="mr-2" />
            Заключение
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Время для перемен в индустрии развития
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Наше исследование убедительно показывает необходимость кардинальных изменений 
            в подходах к личностному развитию и коучингу
          </p>
        </motion.div>

        {/* Ключевые выводы */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Ключевые выводы исследования</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {keyFindings.map((finding, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 bg-${finding.color}-50 dark:bg-${finding.color}-900/20 rounded-lg border border-${finding.color}-200 dark:border-${finding.color}-800`}
                  >
                    <div className="flex items-start space-x-3">
                      <finding.icon className={`text-${finding.color}-600 mt-1 flex-shrink-0`} size={20} />
                      <div>
                        <h4 className={`font-semibold mb-2 text-${finding.color}-800 dark:text-${finding.color}-200`}>
                          {finding.finding}
                        </h4>
                        <p className={`text-sm text-${finding.color}-700 dark:text-${finding.color}-300`}>
                          {finding.evidence}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Последствия для практики */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Последствия для различных областей</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {implications.map((implication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-500 pl-6"
                  >
                    <h4 className="text-lg font-semibold mb-2">{implication.area}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{implication.description}</p>
                    <div>
                      <h5 className="font-medium mb-2">Необходимые действия:</h5>
                      <ul className="space-y-1">
                        {implication.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start space-x-2">
                            <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Направления будущих исследований */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardHeader>
              <CardTitle>Направления будущих исследований</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-3">
                {futureDirections.map((direction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg"
                  >
                    <Target className="text-purple-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">{direction}</span>
                  </motion.div>
                ))}
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
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Что вы можете сделать прямо сейчас</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {callToAction.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <item.icon className="mx-auto mb-3 text-blue-600" size={32} />
                    <h4 className="font-semibold mb-2">{item.audience}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.action}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Финальное сообщение */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-12">
              <Heart className="mx-auto mb-6 text-green-500" size={64} />
              <h3 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-200">
                Вместе мы можем создать более справедливую индустрию развития
              </h3>
              <p className="text-lg text-green-700 dark:text-green-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Каждый человек заслуживает поддержки, которая учитывает его реальные обстоятельства 
                и возможности. Пришло время отказаться от универсальных решений и создать 
                по-настоящему инклюзивные подходы к личностному развитию.
              </p>
              
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg max-w-3xl mx-auto mb-8">
                <h4 className="font-semibold mb-4 text-green-800 dark:text-green-200">
                  Помните: эффективная помощь начинается с понимания
                </h4>
                <div className="text-sm text-green-700 dark:text-green-300 space-y-2">
                  <div>• Понимания реальных ограничений людей</div>
                  <div>• Признания системных барьеров</div>
                  <div>• Уважения к культурным различиям</div>
                  <div>• Фокуса на сильных сторонах, а не дефицитах</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Начать сначала
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://github.com/sedelkov/Wheel-of-life-balance-research', '_blank')}
                >
                  Поделиться исследованием
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ConclusionSection

