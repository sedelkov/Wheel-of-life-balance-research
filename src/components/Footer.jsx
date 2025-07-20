import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, BookOpen, Users, Mail, Github, ExternalLink } from 'lucide-react'

const Footer = () => {
  const resources = [
    {
      title: 'Научные статьи',
      items: [
        { name: 'Schaffler et al. (2018) - Self-management interventions', url: 'https://pubmed.ncbi.nlm.nih.gov/29427178/' },
        { name: 'Nießen et al. (2023) - Aspiration-attainment gaps', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0287064' },
        { name: 'Coupe et al. (2018) - Lifestyle interventions', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6076398/' }
      ]
    },
    {
      title: 'Исследование',
      items: [
        { name: 'GitHub репозиторий', url: 'https://github.com/sedelkov/Wheel-of-life-balance-research' },
        { name: 'Полный отчет исследования', url: 'https://github.com/sedelkov/Wheel-of-life-balance-research/blob/main/comprehensive_report.md' },
        { name: 'Методология анализа', url: 'https://github.com/sedelkov/Wheel-of-life-balance-research#methodology' }
      ]
    },
    {
      title: 'Альтернативные подходы',
      items: [
        { name: 'Strength-Based Practice', url: 'https://www.strengthsbasedpractice.net/' },
        { name: 'Trauma-Informed Coaching', url: 'https://traumainformedcoaching.com/' },
        { name: 'Systemic Coaching Methods', url: 'https://systemiccoaching.org/' }
      ]
    }
  ]

  const acknowledgments = [
    'Исследователям, изучающим эффективность методик развития',
    'Практикам, готовым пересматривать свои подходы',
    'Людям, поделившимся своим опытом для этого исследования',
    'Сообществу, поддерживающему инклюзивные практики'
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Основная информация */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <Heart className="text-red-400" size={24} />
              <span>О проекте</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Это исследование создано для повышения осведомленности о важности 
              инклюзивных подходов в индустрии личностного развития и коучинга.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-gray-600 hover:bg-gray-800"
                onClick={() => window.open('https://github.com/sedelkov/Wheel-of-life-balance-research', '_blank')}
              >
                <Github size={16} className="mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-gray-600 hover:bg-gray-800"
                onClick={() => window.open('https://github.com/sedelkov/Wheel-of-life-balance-research/issues', '_blank')}
              >
                <Mail size={16} className="mr-2" />
                Контакт
              </Button>
            </div>
          </div>

          {/* Ресурсы */}
          {resources.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 flex items-center space-x-2">
                <BookOpen size={18} className="text-blue-400" />
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.url}
                      className="text-gray-300 hover:text-white text-sm flex items-center space-x-1 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Благодарности */}
        <div className="mb-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4 flex items-center space-x-2 text-white">
                <Users className="text-green-400" size={20} />
                <span>Благодарности</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {acknowledgments.map((ack, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Heart size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{ack}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Методология */}
        <div className="mb-12">
          <h4 className="font-semibold mb-4 text-center">Методология исследования</h4>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Проанализированных исследований</div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-green-400 mb-2">15</div>
              <div className="text-sm text-gray-300">Стран в выборке</div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-purple-400 mb-2">8,500+</div>
              <div className="text-sm text-gray-300">Участников исследований</div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-orange-400 mb-2">2018-2024</div>
              <div className="text-sm text-gray-300">Период анализа</div>
            </div>
          </div>
        </div>

        {/* Дисклеймер */}
        <div className="mb-8">
          <Card className="bg-amber-900/20 border-amber-700">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-amber-200">Важное уведомление</h4>
              <div className="text-amber-100 text-sm space-y-2">
                <p>
                  Это исследование предназначено для образовательных целей и не заменяет 
                  профессиональную психологическую или медицинскую помощь.
                </p>
                <p>
                  Если вы испытываете серьезные психологические трудности, обратитесь 
                  к квалифицированному специалисту.
                </p>
                <p>
                  Все данные представлены на основе доступных научных исследований 
                  на момент создания этого материала.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Критический анализ методики "Колесо баланса жизни". 
              Создано для образовательных целей.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#hero" className="hover:text-white transition-colors">
                Наверх
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Поделиться
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Обратная связь
              </a>
            </div>
          </div>
        </div>

        {/* Финальное сообщение */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm italic">
            "Истинная помощь начинается с понимания реальных обстоятельств людей"
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

