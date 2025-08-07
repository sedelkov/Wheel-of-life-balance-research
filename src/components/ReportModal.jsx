import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Download, Share2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const ReportModal = ({ isOpen, onClose, wheelValues, categories }) => {
  const { t } = useTranslation();
  const reportContentRef = useRef(null);

  if (!isOpen) {
    return null;
  }

  const averageScore = Object.values(wheelValues).reduce((sum, val) => sum + val[0], 0) / 8;

  const downloadPdf = () => {
    const element = reportContentRef.current;
    const opt = {
      margin:       1,
      filename:     'my-wheel-of-life-report.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  const shareReport = () => {
    if (navigator.share) {
      navigator.share({
        title: t('personalized_report_title'),
        text: t('personalized_report_description'),
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <Card className="w-full max-w-2xl bg-white dark:bg-gray-800 relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <X size={20} />
        </Button>
        <div ref={reportContentRef}>
          <CardHeader>
            <CardTitle>{t('personalized_report_title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t('personalized_report_description')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">{t('your_wheel')}</h4>
                <div className="relative w-full h-auto" style={{paddingBottom: '100%'}}>
                  <svg viewBox="0 0 200 200" className="absolute top-0 left-0 w-full h-full">
                    {[2, 4, 6, 8, 10].map(radius => (
                      <circle key={radius} cx="100" cy="100" r={radius * 8} fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-600" />
                    ))}
                    {categories.map((category, index) => {
                      const angle = (index * 45) - 90;
                      const value = wheelValues[category.key][0];
                      const radius = value * 8;
                      const x1 = 100 + Math.cos(angle * Math.PI / 180) * radius;
                      const y1 = 100 + Math.sin(angle * Math.PI / 180) * radius;
                      const x2 = 100 + Math.cos((angle + 45) * Math.PI / 180) * radius;
                      const y2 = 100 + Math.sin((angle + 45) * Math.PI / 180) * radius;
                      return (
                        <g key={category.key}>
                          <path d={`M 100 100 L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`} fill={category.color} fillOpacity="0.6" stroke={category.color} strokeWidth="1" />
                          <line x1="100" y1="100" x2={100 + Math.cos(angle * Math.PI / 180) * 85} y2={100 + Math.sin(angle * Math.PI / 180) * 85} stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
                        </g>
                      )
                    })}
                    <circle cx="100" cy="100" r="8" fill="currentColor" className="text-gray-800 dark:text-gray-200" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">{t('your_scores')}</h4>
                <ul>
                  {categories.map(category => (
                    <li key={category.key} className="flex justify-between items-center mb-1">
                      <span>{t(category.key)}</span>
                      <span className="font-bold">{wheelValues[category.key][0]}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between font-bold">
                    <span>{t('average_score')}</span>
                    <span>{averageScore.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
        <div className="p-6 pt-0 flex justify-end space-x-4">
          <Button onClick={downloadPdf}><Download className="mr-2 h-4 w-4" />{t('download_pdf')}</Button>
          <Button onClick={shareReport} variant="outline"><Share2 className="mr-2 h-4 w-4" />{t('share')}</Button>
        </div>
      </Card>
    </div>
  );
};

export default ReportModal;
