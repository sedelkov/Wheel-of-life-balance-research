import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const QuizModal = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState({});

  if (!isOpen) {
    return null;
  }

  const questions = [
    {
      key: 'stress',
      question: 'quiz_stress_question',
      options: [
        { key: 'low', label: 'quiz_stress_option_low' },
        { key: 'medium', label: 'quiz_stress_option_medium' },
        { key: 'high', label: 'quiz_stress_option_high' },
      ],
    },
    {
      key: 'finance',
      question: 'quiz_finance_question',
      options: [
        { key: 'stable', label: 'quiz_finance_option_stable' },
        { key: 'unstable', label: 'quiz_finance_option_unstable' },
        { key: 'difficult', label: 'quiz_finance_option_difficult' },
      ],
    },
    {
      key: 'time',
      question: 'quiz_time_question',
      options: [
        { key: 'lot', label: 'quiz_time_option_lot' },
        { key: 'some', label: 'quiz_time_option_some' },
        { key: 'little', label: 'quiz_time_option_little' },
      ],
    },
  ];

  const handleAnswerChange = (questionKey, value) => {
    setAnswers(prev => ({ ...prev, [questionKey]: value }));
  };

  const handleSubmit = () => {
    onSubmit(answers);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <Card className="w-full max-w-lg bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle>{t('quiz_title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {questions.map(q => (
              <div key={q.key}>
                <p className="font-semibold mb-2">{t(q.question)}</p>
                <RadioGroup onValueChange={(value) => handleAnswerChange(q.key, value)}>
                  {q.options.map(opt => (
                    <div key={opt.key} className="flex items-center space-x-2">
                      <RadioGroupItem value={opt.key} id={`${q.key}-${opt.key}`} />
                      <Label htmlFor={`${q.key}-${opt.key}`}>{t(opt.label)}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={handleSubmit} disabled={Object.keys(answers).length < questions.length}>
              {t('submit_quiz')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizModal;
