import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Globe, TrendingUp, AlertTriangle, DollarSign, GraduationCap } from 'lucide-react'

const SocialContextSection = () => {
  const paradoxData = [
    {
      title: 'Парадокс доступности',
      description: 'Инструменты развития наиболее доступны тем, кто в них меньше всего нуждается',
      examples: [
        'Дорогие коучинговые программы для обеспеченных людей',
        'Бесплатные ресурсы требуют времени и цифровой грамотности',
        'Языковые барьеры в материалах по саморазвитию'
      ],
      icon: DollarSign,
      color: 'red'
    },
    {
      title: 'Парадокс вины',
      description: 'Методики самопомощи могут усиливать самообвинение у тех, кто не может ими воспользоваться',
      examples: [
        'Чувство неполноценности при неспособности "сбалансировать" жизнь',
        'Самообвинение в "лени" или "отсутствии мотивации"',
        'Игнорирование системных причин проблем'
      ],
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      title: 'Парадокс привилегий',
      description: 'Методики основаны на предположениях о наличии определенных привилегий',
      examples: [
        'Возможность выбирать работу по интересам',
        'Доступ к качественному образованию и здравоохранению',
        'Социальная поддержка и безопасная среда'
      ],
      icon: Users,
      color: 'blue'
    }
  ]

  const culturalFactors = [
    {
      culture: 'Индивидуалистические культуры',
      characteristics: [
        'Фокус на личных достижениях',
        'Ответственность за собственную судьбу',
        'Конкуренция и самостоятельность'
      ],
      wheelFit: 'Высокая',
      issues: 'Игнорирование системных факторов'
    },
    {
      culture: 'Коллективистские культуры',
      characteristics: [
        'Приоритет семьи и сообщества',
        'Взаимозависимость и поддержка',
        'Групповая гармония важнее личных целей'
      ],
      wheelFit: 'Низкая',
      issues: 'Конфликт с семейными обязательствами'
    },
    {
      culture: 'Культуры выживания',
      characteristics: [
        'Фокус на базовых потребностях',
        'Краткосрочное планирование',
        'Приоритет стабильности над ростом'
      ],
      wheelFit: 'Очень низкая',
      issues: 'Нереалистичные ожидания самоактуализации'
    }
  ]

  const socioeconomicImpact = [
    {
      level: 'Высший класс',
      resources: 'Неограниченные',
      timeAvailability: 'Высокая',
      stressLevel: 'Низкий',
      wheelEffectiveness: 85,
      notes: 'Методика работает как задумано'
    },
    {
      level: 'Средний класс',
      resources: 'Достаточные',
      timeAvailability: 'Средняя',
      stressLevel: 'Средний',
      wheelEffectiveness: 60,
      notes: 'Требует адаптации под ограничения'
    },
    {
      level: 'Рабочий класс',
      resources: 'Ограниченные',
      timeAvailability: 'Низкая',
      stressLevel: 'Высокий',
      wheelEffectiveness: 25,
      notes: 'Может усиливать фрустрацию'
    },
    {
      level: 'Бедность',
      resources: 'Критически низкие',
      timeAvailability: 'Очень низкая',
      stressLevel: 'Критический',
      wheelEffectiveness: -10,
      notes: 'Потенциально вредна'
    }
  ]

  const getEffectivenessColor = (value) => {
    if (value >= 70) return 'green'
    if (value >= 40) return 'yellow'
    if (value >= 0) return 'orange'
    return 'red'
  }

  return (
    <section id="social-context" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Globe size={16} className="mr-2" />
            Социальный контекст
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Парадокс коучинга и социальное неравенство
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Как социально-экономический статус, культурный контекст и системные факторы 
            влияют на восприятие и эффективность методик самопомощи
            <br />
            <span className="text-sm mt-2 block">
              Исследования: 
              <a href="https://diversity.com/post/socioeconomic-status-dei-income-inequality" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                Diversity.com (2025)
              </a>,
              <a href="https://philosophyofcoaching.org/v9i2/03.pdf" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                Cultural Humility in Coaching (2024)
              </a>,
              <a href="https://www.empower-world.com/blog/Why-Cultural-Awareness" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 dark:text-blue-400 underline ml-1">
                Empower World (2024)
              </a>
            </span>
          </p>
        </motion.div>

        {/* Парадоксы коучинга */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Парадоксы индустрии самопомощи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {paradoxData.map((paradox, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 bg-${paradox.color}-50 dark:bg-${paradox.color}-900/20 rounded-lg border border-${paradox.color}-200 dark:border-${paradox.color}-800`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <paradox.icon className={`text-${paradox.color}-600`} size={24} />
                      <h4 className={`font-semibold text-${paradox.color}-800 dark:text-${paradox.color}-200`}>
                        {paradox.title}
                      </h4>
                    </div>
                    <p className={`text-${paradox.color}-700 dark:text-${paradox.color}-300 mb-4`}>
                      {paradox.description}
                    </p>
                    <div className="space-y-2">
                      <h5 className={`text-sm font-medium text-${paradox.color}-800 dark:text-${paradox.color}-200`}>
                        Примеры:
                      </h5>
                      <ul className="space-y-1">
                        {paradox.examples.map((example, exIndex) => (
                          <li key={exIndex} className={`text-xs text-${paradox.color}-600 dark:text-${paradox.color}-400`}>
                            • {example}
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

        {/* Культурные факторы */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Культурная применимость методики</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {culturalFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <h4 className="font-semibold mb-2">{factor.culture}</h4>
                      <Badge 
                        className={`${
                          factor.wheelFit === 'Высокая' ? 'bg-green-100 text-green-800' :
                          factor.wheelFit === 'Низкая' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        Совместимость: {factor.wheelFit}
                      </Badge>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-2">Характеристики:</h5>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {factor.characteristics.map((char, charIndex) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-2">Основные проблемы:</h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{factor.issues}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        factor.wheelFit === 'Высокая' ? 'bg-green-100 text-green-600' :
                        factor.wheelFit === 'Низкая' ? 'bg-orange-100 text-orange-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        <span className="text-xs font-bold">{factor.wheelFit}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Социально-экономическое влияние */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Эффективность по социально-экономическим группам</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socioeconomicImpact.map((group, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-6 gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg border"
                  >
                    <div>
                      <h4 className="font-semibold text-sm">{group.level}</h4>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Ресурсы</div>
                      <div className="text-sm">{group.resources}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Время</div>
                      <div className="text-sm">{group.timeAvailability}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Стресс</div>
                      <div className="text-sm">{group.stressLevel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Эффективность</div>
                      <div className={`text-lg font-bold text-${getEffectivenessColor(group.wheelEffectiveness)}-600`}>
                        {group.wheelEffectiveness > 0 ? '+' : ''}{group.wheelEffectiveness}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{group.notes}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Системные факторы */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardHeader>
              <CardTitle>Системные факторы, игнорируемые методикой</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Экономические факторы:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start space-x-2">
                      <DollarSign size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Неравенство доходов и ограниченные возможности</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <DollarSign size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Отсутствие социальной защиты и поддержки</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <DollarSign size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Структурная безработица и нестабильность</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Социальные факторы:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start space-x-2">
                      <Users size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Дискриминация и системные барьеры</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Users size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Ограниченный доступ к образованию и здравоохранению</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Users size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Социальная изоляция и отсутствие поддержки</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Заключение секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="mx-auto mb-4 text-purple-500" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200">
                Необходимость контекстуального подхода
              </h3>
              <p className="text-lg text-purple-700 dark:text-purple-300 mb-6 max-w-3xl mx-auto">
                Социальный контекст критически важен для понимания эффективности методик самопомощи. 
                Игнорирование системных факторов и культурных различий может не только снизить 
                эффективность, но и причинить вред уязвимым группам.
              </p>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg max-w-2xl mx-auto">
                <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">
                  Ключевой вывод:
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Методики развития должны учитывать реальные жизненные обстоятельства людей, 
                  а не исходить из предположений о равных возможностях и ресурсах.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialContextSection

