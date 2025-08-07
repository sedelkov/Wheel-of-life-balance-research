import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Menu, X, ChevronUp } from 'lucide-react'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const sections = [
    { id: 'hero', label: t('nav_main') },
    { id: 'what-is-wheel', label: t('nav_what_is_wheel') },
    { id: 'problem', label: t('nav_problem') },
    { id: 'empirical-data', label: t('nav_data') },
    { id: 'gap-framing', label: t('nav_gap_framing') },
    { id: 'learned-helplessness', label: t('nav_helplessness') },
    { id: 'social-context', label: t('nav_social_context') },
    { id: 'alternatives', label: t('nav_alternatives') },
    { id: 'recommendations', label: t('nav_recommendations') },
    { id: 'conclusion', label: t('nav_conclusion') }
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 max-w-full">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center space-x-4 flex-shrink-0">
              <h1 className="text-lg sm:text-xl font-bold text-primary truncate">
                {t('header_title')}
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
              {sections.slice(0, 5).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {section.label}
                </button>
              ))}
              <div className="relative group">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                  {t('nav_more')}
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {sections.slice(5).map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
              <Button onClick={() => changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')} variant="outline" size="sm">
                {i18n.language === 'ru' ? 'EN' : 'RU'}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <Button onClick={() => changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')} variant="outline" size="sm" className="mr-2">
                {i18n.language === 'ru' ? 'EN' : 'RU'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden flex-shrink-0 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <Progress value={scrollProgress} className="h-1" />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t">
            <nav className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 rounded-full w-12 h-12 shadow-lg"
          size="sm"
        >
          <ChevronUp size={20} />
        </Button>
      )}
    </>
  )
}

export default Header

