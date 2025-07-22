import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SubjectSectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  subjectCount: number;
  totalChapters: number;
  estimatedTime: string;
  onClick: () => void;
}

const SubjectSectionCard = ({
  title,
  description,
  icon: IconComponent,
  subjectCount,
  totalChapters,
  estimatedTime,
  onClick
}: SubjectSectionCardProps) => {
  return (
    <Card 
      className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-4 rounded-lg bg-blue-500 group-hover:bg-blue-400 transition-colors">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-white text-2xl">
                {title}
              </CardTitle>
            </div>
          </div>
        </div>
        <CardDescription className="text-blue-200 mt-2 text-lg">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-300">
          <div className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>{subjectCount} subjects</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{totalChapters} chapters</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{estimatedTime}</span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Explore {title}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubjectSectionCard;