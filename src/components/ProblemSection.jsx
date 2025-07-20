import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { AlertTriangle, Users, DollarSign, Clock, Zap, Home, GraduationCap } from 'lucide-react'

const ProblemSection = () => {
  const [selectedGroup, setSelectedGroup] = useState('low-income')
  const [resourceLevel, setResourceLevel] = useState([3])

  const groups = {
    'low-income': {
      name: 'Люди с низким доходом',
      icon: DollarSign,
      color: 'red',
      challenges: [
        'Ограниченный доступ к ресурсам для изменений',
        'Фокус на выживании, а не на самоактуализации',
        'Отсутствие времени для саморефлексии',
        'Системные барьеры вне личного контроля'
      ],
      stats: {
        timeAvailable: '2-3 часа в неделю',
        financialFlexibility: '5-10% дохода',
        stressLevel: 'Очень высокий',
        controlLevel: 'Низкий'
      }
    },
    'working-parents': {
      name: 'Работающие родители',
      icon: Users,
      color: 'orange',
      challenges: [
        'Крайне ограниченное время',
        'Множественные обязательства',
        'Усталость и эмоциональное истощение',
        'Приоритет потребностей семьи над личными'
      ],
      stats: {
        timeAvailable: '1-2 часа в неделю',
        financialFlexibility: '10-15% дохода',
        stressLevel: 'Высокий',
        controlLevel: 'Средний'
      }
    },
    'students': {
      name: 'Студенты с ограниченными ресурсами',
      icon: GraduationCap,
      color: 'blue',
      challenges: [
        'Финансовая нестабильность',
        'Академическое давление',
        'Неопределенность будущего',
        'Ограниченный жизненный опыт'
      ],
      stats: {
        timeAvailable: '3-5 часов в неделю',
        financialFlexibility: '0-5% дохода',
        stressLevel: 'Высокий',
        controlLevel: 'Очень низкий'
      }
    },
    'elderly': {
      name: 'Пожилые люди с ограниченными ресурсами',
      icon: Home,
      color: 'purple',
      challenges: [
        'Проблемы со здоровьем',
        'Ограниченная мобильность',
        'Фиксированный доход',
        'Социальная изоляция'
      ],
      stats: {
        timeAvailable: '5-10 часов в неделю',
        financialFlexibility: '0-5% дохода',
        stressLevel: 'Средний',
        controlLevel: 'Низкий'
      }
    }
  }

  const assumptions = [
    {
      assumption: 'Все жизненные сферы одинаково важны',
      reality: 'Для людей с ограниченными ресурсами базовые потребности (еда, жилье, безопасность) критически важнее самоактуализации',
      impact: 'Высокий'
    },
    {
      assumption: 'Люди могут контролировать все аспекты своей жизни',
      reality: 'Многие факторы (экономика, дискриминация, системные барьеры) находятся вне личного контроля',
      impact: 'Очень высокий'
    },
    {
      assumption: 'У людей есть время и энергия для работы над всеми сферами',
      reality: 'Ограниченные ресурсы требуют приоритизации и фокуса на критически важных областях',
      impact: 'Высокий'
    },
    {
      assumption: 'Визуализация дисбаланса мотивирует к действию',
      reality: 'Для людей с ограниченными возможностями это может усиливать чувство беспомощности и вины',
      impact: 'Средний'
    }
  ]

  const getResourceImpact = (level) => {
    if (level <= 3) return {
      label: 'Критически ограниченные',
      description: 'Фокус на выживании, методика может причинить вред',
      color: 'red'
    }
    if (level <= 5) return {
      label: 'Ограниченные',
      description: 'Требуется существенная адаптация методики',
      color: 'orange'
    }
    if (level <= 7) return {
      label: 'Средние',
      description: 'Методика может работать с модификациями',
      color: 'yellow'
    }
    return {
      label: 'Достаточные',
      description: 'Традиционная методика может быть эффективной',
      color: 'green'
    }
  }

  const currentGroup = groups[selectedGroup]
  const resourceImpact = getResourceImpact(resourceLevel[0])

  return (
    <section id="problem" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <AlertTriangle size={16} className="mr-2" />
            Проблема исследования
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Скрытые предположения методики
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Методика «Колесо баланса жизни» основывается на предположениях, 
            которые могут не соответствовать реальности людей с ограниченными ресурсами
          </p>
        </motion.div>

        {/* Интерактивный анализ групп */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Выберите группу для анализа</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(groups).map(([key, group]) => (
                  <Button
                    key={key}
                    variant={selectedGroup === key ? "default" : "outline"}
                    className="w-full justify-start h-auto p-4"
                    onClick={() => setSelectedGroup(key)}
                  >
                    <group.icon className="mr-3" size={20} />
                    <div className="text-left">
                      <div className="font-medium">{group.name}</div>
                    </div>
                  </Button>
                ))}
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
                <CardTitle className="flex items-center space-x-2">
                  <currentGroup.icon className={`text-${currentGroup.color}-500`} />
                  <span>{currentGroup.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Основные вызовы:</h4>
                  <ul className="space-y-2">
                    {currentGroup.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <AlertTriangle size={16} className={`text-${currentGroup.color}-500 mt-0.5 flex-shrink-0`} />
                        <span className="text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Доступное время</div>
                    <div className="font-semibold">{currentGroup.stats.timeAvailable}</div>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Финансовая гибкость</div>
                    <div className="font-semibold">{currentGroup.stats.financialFlexibility}</div>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Уровень стресса</div>
                    <div className="font-semibold">{currentGroup.stats.stressLevel}</div>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Контроль над жизнью</div>
                    <div className="font-semibold">{currentGroup.stats.controlLevel}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Анализ ресурсов */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Влияние уровня ресурсов на применимость методики</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Уровень доступных ресурсов</label>
                  <Badge className={`bg-${resourceImpact.color}-100 text-${resourceImpact.color}-800`}>
                    {resourceImpact.label}
                  </Badge>
                </div>
                <Slider
                  value={resourceLevel}
                  onValueChange={setResourceLevel}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Критически низкий</span>
                  <span>Очень высокий</span>
                </div>
              </div>

              <div className={`p-4 bg-${resourceImpact.color}-50 dark:bg-${resourceImpact.color}-900/20 rounded-lg border border-${resourceImpact.color}-200 dark:border-${resourceImpact.color}-800`}>
                <h4 className={`font-semibold mb-2 text-${resourceImpact.color}-800 dark:text-${resourceImpact.color}-200`}>
                  Рекомендация для уровня {resourceLevel[0]}/10:
                </h4>
                <p className={`text-${resourceImpact.color}-700 dark:text-${resourceImpact.color}-300`}>
                  {resourceImpact.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Анализ предположений */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Проблематичные предположения методики</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {assumptions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-red-500 pl-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-red-800 dark:text-red-200">
                        Предположение: {item.assumption}
                      </h4>
                      <Badge variant={item.impact === 'Очень высокий' ? 'destructive' : 
                                    item.impact === 'Высокий' ? 'default' : 'secondary'}>
                        {item.impact} риск
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong>Реальность:</strong> {item.reality}
                    </p>
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
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
            <CardContent className="p-8">
              <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-200">
                Необходимость критического анализа
              </h3>
              <p className="text-lg text-red-700 dark:text-red-300 mb-6 max-w-3xl mx-auto">
                Эти проблематичные предположения делают традиционную методику «Колесо баланса жизни» 
                не только неэффективной, но потенциально вредной для людей с ограниченными ресурсами. 
                Давайте рассмотрим эмпирические данные.
              </p>
              <Button 
                onClick={() => document.getElementById('empirical-data').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-red-600 hover:bg-red-700"
              >
                Изучить исследования
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection

