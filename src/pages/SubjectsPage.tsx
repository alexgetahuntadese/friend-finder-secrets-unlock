import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Atom, Users, BookOpen } from 'lucide-react';
import SubjectSectionCard from '@/components/SubjectSectionCard';

const SubjectsPage = () => {
  const navigate = useNavigate();
  const { grade } = useParams();

  const sections = [
    {
      title: 'Natural Sciences',
      description: 'Explore mathematics, physics, chemistry, biology, and agriculture',
      icon: Atom,
      subjectCount: 5,
      totalChapters: 43,
      estimatedTime: '198 hours',
      route: `/grade/${grade}/natural-science`
    },
    {
      title: 'Social Sciences',
      description: 'Study society, culture, history, and human behavior',
      icon: Users,
      subjectCount: 5,
      totalChapters: 38,
      estimatedTime: '142 hours',
      route: `/grade/${grade}/social-science`
    },
    {
      title: 'Common Courses',
      description: 'Essential subjects including languages, arts, and life skills',
      icon: BookOpen,
      subjectCount: 6,
      totalChapters: 38,
      estimatedTime: '163 hours',
      route: `/grade/${grade}/common-courses`
    }
  ];

  const handleSectionSelect = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mr-4"
            onClick={() => navigate('/grades')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Grades
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Grade {grade} Subject Areas
          </h1>
          <p className="text-xl text-blue-200">
            Choose a subject area to explore specific subjects and chapters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section) => (
            <SubjectSectionCard
              key={section.title}
              title={section.title}
              description={section.description}
              icon={section.icon}
              subjectCount={section.subjectCount}
              totalChapters={section.totalChapters}
              estimatedTime={section.estimatedTime}
              onClick={() => handleSectionSelect(section.route)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;