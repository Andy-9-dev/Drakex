import { 
  Users, Music, Dumbbell, Palette, Coffee, BookOpen, 
  Trophy, Heart, Globe, Camera, Theater, Gamepad2,
  Utensils, Home, Wifi, Bus, Shield, Stethoscope
} from 'lucide-react'

const CampusLife = () => {
  const activities = [
    {
      category: 'Sports & Recreation',
      icon: Dumbbell,
      color: 'bg-red-100 text-red-600',
      description: 'Stay active and healthy with our world-class athletic facilities and programs.',
      items: [
        { name: 'Olympic-Size Swimming Pool', icon: Trophy, description: 'Professional training facility with heated pools' },
        { name: 'Fitness Center', icon: Dumbbell, description: '24/7 access to state-of-the-art equipment' },
        { name: 'Basketball Courts', icon: Trophy, description: 'Indoor and outdoor courts available' },
        { name: 'Tennis Complex', icon: Trophy, description: '12 professional-grade courts' },
        { name: 'Soccer Fields', icon: Trophy, description: 'FIFA-standard artificial turf fields' },
        { name: 'Yoga & Wellness Studio', icon: Heart, description: 'Daily classes and meditation sessions' },
      ],
    },
    {
      category: 'Arts & Culture',
      icon: Palette,
      color: 'bg-purple-100 text-purple-600',
      description: 'Express your creativity through diverse artistic and cultural programs.',
      items: [
        { name: 'Performing Arts Theater', icon: Theater, description: '800-seat venue for concerts and plays' },
        { name: 'Art Gallery', icon: Palette, description: 'Student exhibitions and professional showcases' },
        { name: 'Music Studios', icon: Music, description: 'Recording studios and practice rooms' },
        { name: 'Photography Lab', icon: Camera, description: 'Digital and darkroom facilities' },
        { name: 'Dance Studio', icon: Music, description: 'Professional sprung floors and mirrors' },
        { name: 'Ceramics Workshop', icon: Palette, description: 'Kilns and pottery wheels available' },
      ],
    },
    {
      category: 'Student Organizations',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      description: 'Join over 200 student clubs and organizations to pursue your passions.',
      items: [
        { name: 'Student Government', icon: Users, description: 'Lead and represent the student body' },
        { name: 'Cultural Clubs', icon: Globe, description: '50+ organizations celebrating diversity' },
        { name: 'Academic Societies', icon: BookOpen, description: 'Honor societies and study groups' },
        { name: 'Gaming Club', icon: Gamepad2, description: 'Esports tournaments and casual gaming' },
        { name: 'Volunteer Programs', icon: Heart, description: 'Community service opportunities' },
        { name: 'Entrepreneurship Club', icon: Trophy, description: 'Startup incubator and mentorship' },
      ],
    },
    {
      category: 'Social Spaces',
      icon: Coffee,
      color: 'bg-amber-100 text-amber-600',
      description: 'Relax and connect with friends in our comfortable social environments.',
      items: [
        { name: 'Student Union', icon: Coffee, description: 'Central hub with lounges and meeting rooms' },
        { name: 'Campus Cafés', icon: Coffee, description: '5 locations serving specialty coffee and snacks' },
        { name: 'Outdoor Amphitheater', icon: Music, description: 'Open-air venue for events and concerts' },
        { name: 'Game Room', icon: Gamepad2, description: 'Pool tables, arcade games, and board games' },
        { name: 'Meditation Garden', icon: Heart, description: 'Peaceful outdoor space for reflection' },
        { name: 'Study Lounges', icon: BookOpen, description: 'Comfortable spaces throughout campus' },
      ],
    },
  ]

  const facilities = [
    {
      name: 'Dining Services',
      icon: Utensils,
      description: 'Multiple dining halls offering diverse cuisines, including vegetarian, vegan, and international options. Meal plans available.',
      features: ['5 Dining Halls', 'Food Court', 'Grab & Go Stations', 'Late Night Dining'],
    },
    {
      name: 'Housing',
      icon: Home,
      description: 'Modern residence halls with single and shared rooms, all equipped with high-speed internet and study areas.',
      features: ['15 Residence Halls', 'Apartment-Style Living', 'Living-Learning Communities', '24/7 Security'],
    },
    {
      name: 'Technology',
      icon: Wifi,
      description: 'Campus-wide high-speed WiFi, computer labs, and technology support services available to all students.',
      features: ['Free WiFi', '10 Computer Labs', 'Tech Support', 'Software Access'],
    },
    {
      name: 'Transportation',
      icon: Bus,
      description: 'Free shuttle service connecting campus to downtown, shopping centers, and transportation hubs.',
      features: ['Campus Shuttles', 'Bike Share Program', 'Parking Permits', 'Public Transit Pass'],
    },
    {
      name: 'Safety & Security',
      icon: Shield,
      description: '24/7 campus security, emergency call boxes, escort services, and comprehensive safety programs.',
      features: ['24/7 Security', 'Emergency Alerts', 'Safe Walk Program', 'Security Cameras'],
    },
    {
      name: 'Health Services',
      icon: Stethoscope,
      description: 'On-campus health center providing medical care, counseling services, and wellness programs.',
      features: ['Medical Clinic', 'Counseling Center', 'Pharmacy', 'Wellness Programs'],
    },
  ]

  const events = [
    {
      name: 'Welcome Week',
      description: 'Start your year with exciting activities, meet new friends, and explore campus.',
      image: 'img/students playing.jpg',
    },
    {
      name: 'Cultural Festival',
      description: 'Celebrate diversity with food, music, and performances from around the world.',
      image: 'img/students eating.jpg',
    },
    {
      name: 'Spring Concert',
      description: 'Annual outdoor concert featuring popular artists and student performers.',
      image: 'img/building-2.jpg',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('img/students playing.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Campus Life at Drakex</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Experience a vibrant community where learning extends beyond the classroom. 
              Discover endless opportunities for growth, fun, and lifelong friendships.
            </p>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get <span className="text-primary-600">Involved</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With hundreds of activities and organizations, there's something for everyone at Drakex.
            </p>
          </div>

          <div className="space-y-16">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className={`${activity.color} p-8`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white rounded-lg">
                      <activity.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{activity.category}</h3>
                      <p className="text-gray-700 mt-1">{activity.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activity.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-all border border-gray-200 hover:border-primary-300 hover:shadow-md"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-white rounded-lg flex-shrink-0">
                            <item.icon className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Campus <span className="text-primary-600">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a comfortable and successful university experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <facility.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{facility.name}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
                <div className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Annual <span className="text-primary-600">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exciting campus-wide events that bring our community together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.name}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Campus Life Firsthand
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Schedule a campus tour and see why Drakex students love their university experience.
          </p>
          <button className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl">
            Schedule a Tour
          </button>
        </div>
      </div>
    </div>
  )
}

export default CampusLife
