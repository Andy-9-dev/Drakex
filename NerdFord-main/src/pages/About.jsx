import { 
  Award, Users, Globe, TrendingUp, Target, Eye, Heart,
  BookOpen, Lightbulb, Shield
} from 'lucide-react'

const About = () => {
  const milestones = [
    { year: '1850', event: 'University Founded', description: 'Established as a small liberal arts college' },
    { year: '1920', event: 'Research Institute', description: 'Became a leading research institution' },
    { year: '1975', event: 'Global Expansion', description: 'Opened international campuses' },
    { year: '2000', event: 'Digital Innovation', description: 'Launched online learning programs' },
    { year: '2020', event: 'Sustainability Leader', description: 'Achieved carbon-neutral campus' },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We foster creativity and encourage groundbreaking research that pushes the boundaries of knowledge.',
    },
    {
      icon: Users,
      title: 'Diversity',
      description: 'We celebrate differences and create an inclusive environment where all voices are heard and valued.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our academic and administrative endeavors.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We build strong connections and support networks that last beyond graduation.',
    },
    {
      icon: Globe,
      title: 'Global Citizenship',
      description: 'We prepare students to be responsible leaders in an interconnected world.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for the highest quality in teaching, research, and student experience.',
    },
  ]

  const leadership = [
    {
      name: 'Dr. Elizabeth Morrison',
      role: 'President',
      image: 'img/profile-1.jpg',
      bio: 'Leading Drakex with 20+ years of experience in higher education administration.',
    },
    {
      name: 'Dr. James Chen',
      role: 'Provost & VP of Academic Affairs',
      image: 'img/profile-2.jpg',
      bio: 'Overseeing academic programs and faculty development across all schools.',
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'VP of Student Affairs',
      image: 'img/profile-3.jpg',
      bio: 'Dedicated to enhancing student life and ensuring student success.',
    },
  ]

  const achievements = [
    { icon: Award, stat: '#15', label: 'Global University Ranking' },
    { icon: Users, stat: '98%', label: 'Student Satisfaction' },
    { icon: BookOpen, stat: '500+', label: 'Research Publications/Year' },
    { icon: Globe, stat: '150+', label: 'Partner Universities' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('img/building-1.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Drakex</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              For over 170 years, Drakex University has been at the forefront of education, 
              research, and innovation, shaping leaders who make a difference in the world.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-10 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary-600 rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide transformative education that empowers students to become innovative thinkers, 
                ethical leaders, and engaged global citizens. We are committed to advancing knowledge through 
                groundbreaking research and fostering a diverse, inclusive community where every individual 
                can thrive and contribute to society.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the world's leading university, recognized for academic excellence, pioneering research, 
                and positive global impact. We envision a future where Drakex graduates are at the forefront 
                of solving the world's most pressing challenges, driving innovation, and creating a more just, 
                sustainable, and prosperous world for all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">History</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of excellence spanning over 170 years of educational innovation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Drakex University.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="p-3 bg-primary-100 rounded-lg w-fit mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <achievement.icon className="h-12 w-12" />
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.stat}</div>
                <div className="text-primary-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders guiding Drakex into the future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Legacy of Excellence
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Become part of a community that's shaping the future of education and making a global impact.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
