import { Link } from 'react-router-dom'
import { 
  BookOpen, GraduationCap, Award, Users, ChevronRight, 
  Microscope, Calculator, Palette, Heart, Globe, Code, 
  Building, Briefcase, FlaskConical, Brain
} from 'lucide-react'

const Academics = () => {
  const programs = [
    {
      level: 'Undergraduate Programs',
      description: 'Build a strong foundation for your career with our comprehensive undergraduate degrees.',
      icon: BookOpen,
      color: 'blue',
      departments: [
        {
          name: 'School of Engineering & Technology',
          icon: Code,
          programs: [
            { name: 'Computer Science', duration: '4 years', type: 'B.S.' },
            { name: 'Electrical Engineering', duration: '4 years', type: 'B.S.' },
            { name: 'Mechanical Engineering', duration: '4 years', type: 'B.S.' },
            { name: 'Civil Engineering', duration: '4 years', type: 'B.S.' },
            { name: 'Software Engineering', duration: '4 years', type: 'B.S.' },
          ],
        },
        {
          name: 'School of Business & Economics',
          icon: Briefcase,
          programs: [
            { name: 'Business Administration', duration: '4 years', type: 'B.B.A.' },
            { name: 'Finance', duration: '4 years', type: 'B.S.' },
            { name: 'Marketing', duration: '4 years', type: 'B.S.' },
            { name: 'Economics', duration: '4 years', type: 'B.A.' },
            { name: 'Accounting', duration: '4 years', type: 'B.S.' },
          ],
        },
        {
          name: 'School of Arts & Humanities',
          icon: Palette,
          programs: [
            { name: 'Fine Arts', duration: '4 years', type: 'B.F.A.' },
            { name: 'English Literature', duration: '4 years', type: 'B.A.' },
            { name: 'History', duration: '4 years', type: 'B.A.' },
            { name: 'Philosophy', duration: '4 years', type: 'B.A.' },
            { name: 'Music', duration: '4 years', type: 'B.M.' },
          ],
        },
        {
          name: 'School of Natural Sciences',
          icon: FlaskConical,
          programs: [
            { name: 'Biology', duration: '4 years', type: 'B.S.' },
            { name: 'Chemistry', duration: '4 years', type: 'B.S.' },
            { name: 'Physics', duration: '4 years', type: 'B.S.' },
            { name: 'Mathematics', duration: '4 years', type: 'B.S.' },
            { name: 'Environmental Science', duration: '4 years', type: 'B.S.' },
          ],
        },
      ],
    },
    {
      level: 'Graduate Programs',
      description: 'Advance your expertise and career prospects with our specialized graduate programs.',
      icon: GraduationCap,
      color: 'purple',
      departments: [
        {
          name: 'Graduate School of Engineering',
          icon: Microscope,
          programs: [
            { name: 'Computer Science', duration: '2 years', type: 'M.S.' },
            { name: 'Data Science', duration: '2 years', type: 'M.S.' },
            { name: 'Artificial Intelligence', duration: '2 years', type: 'M.S.' },
            { name: 'Robotics', duration: '2 years', type: 'M.S.' },
          ],
        },
        {
          name: 'Graduate School of Business',
          icon: Building,
          programs: [
            { name: 'Business Administration', duration: '2 years', type: 'M.B.A.' },
            { name: 'Executive MBA', duration: '18 months', type: 'E.M.B.A.' },
            { name: 'Finance', duration: '2 years', type: 'M.S.' },
            { name: 'Management', duration: '2 years', type: 'M.S.' },
          ],
        },
        {
          name: 'School of Health Sciences',
          icon: Heart,
          programs: [
            { name: 'Nursing', duration: '2 years', type: 'M.S.N.' },
            { name: 'Public Health', duration: '2 years', type: 'M.P.H.' },
            { name: 'Health Administration', duration: '2 years', type: 'M.H.A.' },
            { name: 'Clinical Psychology', duration: '2 years', type: 'M.S.' },
          ],
        },
      ],
    },
    {
      level: 'Doctoral Programs',
      description: 'Pursue cutting-edge research and become a leader in your field with our doctoral programs.',
      icon: Award,
      color: 'green',
      departments: [
        {
          name: 'Doctoral Programs',
          icon: Brain,
          programs: [
            { name: 'Computer Science', duration: '4-6 years', type: 'Ph.D.' },
            { name: 'Engineering', duration: '4-6 years', type: 'Ph.D.' },
            { name: 'Business Administration', duration: '4-5 years', type: 'Ph.D.' },
            { name: 'Psychology', duration: '5-7 years', type: 'Ph.D.' },
            { name: 'Education', duration: '3-5 years', type: 'Ed.D.' },
            { name: 'Medicine', duration: '4 years', type: 'M.D.' },
          ],
        },
      ],
    },
  ]

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from world-renowned professors and industry leaders who are dedicated to your success.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Study abroad opportunities and international partnerships in over 50 countries.',
    },
    {
      icon: Award,
      title: 'Accredited Programs',
      description: 'All programs are fully accredited by recognized national and international bodies.',
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Comprehensive career services including internships, job placement, and networking.',
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover world-class programs designed to challenge, inspire, and prepare you for a successful career. 
              With over 200 programs across multiple disciplines, Drakex offers unparalleled academic opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((programLevel, levelIndex) => (
            <div key={levelIndex} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${getColorClasses(programLevel.color)}`}>
                    <programLevel.icon className="h-10 w-10" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{programLevel.level}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{programLevel.description}</p>
              </div>

              <div className="space-y-8">
                {programLevel.departments.map((department, deptIndex) => (
                  <div
                    key={deptIndex}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  >
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <department.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{department.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {department.programs.map((program, progIndex) => (
                          <div
                            key={progIndex}
                            className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors border border-gray-200 hover:border-primary-200"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-gray-900">{program.name}</h4>
                              <span className="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                                {program.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">Duration: {program.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Academic Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore our programs and find the perfect fit for your goals and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Apply Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academics
