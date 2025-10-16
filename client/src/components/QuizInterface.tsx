import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: "What is the process by which plants make their food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
    correctAnswer: 1,
  },
  {
    id: "2",
    question: "What does CPU stand for in computing?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Core Processing Unit",
    ],
    correctAnswer: 0,
  },
];

export function QuizInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = sampleQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto p-6 text-center">
        <Trophy className="h-24 w-24 text-primary mb-6" />
        <h2 className="text-4xl font-heading font-bold mb-4">Quiz Complete!</h2>
        <p className="text-2xl mb-2">
          Your Score: <span className="text-primary font-bold">{score}</span> / {sampleQuestions.length}
        </p>
        <p className="text-muted-foreground mb-8">
          {score === sampleQuestions.length
            ? "Perfect! You're a STEM star!"
            : "Great effort! Keep learning and improving!"}
        </p>
        <Button onClick={handleRestart} size="lg" data-testid="button-restart-quiz">
          <RotateCcw className="h-5 w-5 mr-2" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">
            Question {currentQuestion + 1} of {sampleQuestions.length}
          </Badge>
          <span className="text-sm text-muted-foreground">Score: {score}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8 mb-6">
        <h3 className="text-2xl md:text-3xl font-heading font-medium mb-6">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showCorrect = showResult && isCorrect;
            const showIncorrect = showResult && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all flex items-center justify-between hover-elevate ${
                  showCorrect
                    ? "bg-chart-4/10 border-chart-4"
                    : showIncorrect
                    ? "bg-destructive/10 border-destructive"
                    : isSelected
                    ? "bg-primary/10 border-primary"
                    : "border-border"
                }`}
                data-testid={`button-answer-${index}`}
              >
                <span>{option}</span>
                {showCorrect && <CheckCircle2 className="h-5 w-5 text-chart-4" />}
                {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
              </button>
            );
          })}
        </div>
      </Card>

      <div className="flex justify-end gap-3">
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            size="lg"
            data-testid="button-submit-answer"
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNext} size="lg" data-testid="button-next-question">
            {currentQuestion < sampleQuestions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        )}
      </div>
    </div>
  );
}
