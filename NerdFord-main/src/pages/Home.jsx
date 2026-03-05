import { Link } from 'react-router-dom'
import { 
  GraduationCap, Users, BookOpen, Award, Globe, TrendingUp, 
  Star, ChevronRight, Building2, Microscope, Palette, Calculator
} from 'lucide-react'

const Home = () => {
  const stats = [
    { icon: Users, value: '25,000+', label: 'Students Enrolled' },
    { icon: BookOpen, value: '200+', label: 'Programs Offered' },
    { icon: Award, value: '98%', label: 'Graduate Success Rate' },
    { icon: Globe, value: '150+', label: 'Countries Represented' },
  ]

  const features = [
    {
      icon: Building2,
      title: 'World-Class Facilities',
      description: 'State-of-the-art laboratories, modern classrooms, and cutting-edge technology centers designed to enhance your learning experience.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from distinguished professors and industry leaders who are passionate about student success and academic excellence.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Join a diverse community of students from over 150 countries and build connections that last a lifetime.',
    },
    {
      icon: TrendingUp,
      title: 'Career Success',
      description: 'Our dedicated career services team helps you secure internships and jobs at top companies worldwide.',
    },
  ]

  const programs = [
    {
      icon: Microscope,
      title: 'Science & Technology',
      description: 'Cutting-edge programs in Computer Science, Engineering, Biotechnology, and more.',
      courses: ['Computer Science', 'Mechanical Engineering', 'Biotechnology', 'Data Science'],
    },
    {
      icon: Calculator,
      title: 'Business & Economics',
      description: 'Prepare for leadership roles with our comprehensive business programs.',
      courses: ['Business Administration', 'Finance', 'Marketing', 'Economics'],
    },
    {
      icon: Palette,
      title: 'Arts & Humanities',
      description: 'Explore creativity and critical thinking through our diverse arts programs.',
      courses: ['Fine Arts', 'Literature', 'Philosophy', 'History'],
    },
    {
      icon: BookOpen,
      title: 'Health Sciences',
      description: 'Train for rewarding careers in healthcare with hands-on clinical experience.',
      courses: ['Nursing', 'Medicine', 'Public Health', 'Psychology'],
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Graduate',
      image: 'img/profile-1.jpg',
      quote: 'Drakex transformed my life. The professors are incredibly supportive, and the hands-on projects prepared me perfectly for my career at a top tech company.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Business Administration Student',
      image: 'img/profile-2.jpg',
      quote: 'The global perspective I gained here is invaluable. I\'ve made friends from all over the world and learned so much from their diverse experiences.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Medical Student',
      image: 'img/profile-3.jpg',
      quote: 'The clinical training facilities are exceptional. I feel confident and well-prepared to begin my medical career thanks to the comprehensive education I received.',
      rating: 5,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('img/building-1.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Shape Your Future at <span className="text-primary-300">Drakex</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Join the world's leading university where innovation meets tradition. 
              Discover limitless opportunities for growth, learning, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registration"
                className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
              >
                Apply Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/academics"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all inline-flex items-center justify-center"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary-600">Drakex</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience education that goes beyond the classroom. We provide everything you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-primary-200"
              >
                <div className="p-3 bg-primary-100 rounded-lg w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-primary-600">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class programs designed to prepare you for success in your chosen field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                    <program.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Courses:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.courses.map((course, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <ChevronRight className="h-4 w-4 text-primary-600" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/academics"
                  className="mt-6 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student <span className="text-primary-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students about their transformative experiences at Drakex.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of students who are already shaping their future at Drakex University.
          </p>
          <Link
            to="/registration"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
          >
            Apply Today
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
