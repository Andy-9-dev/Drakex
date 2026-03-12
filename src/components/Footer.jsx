import { Link } from 'react-router-dom'
import { GraduationCap, Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">Drakex</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering minds, shaping futures. Drakex University is committed to excellence in education, 
              research, and community service.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/academics" className="hover:text-primary-400 transition-colors">Academics</Link></li>
              <li><Link to="/campus-life" className="hover:text-primary-400 transition-colors">Campus Life</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/registration" className="hover:text-primary-400 transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/academics" className="hover:text-primary-400 transition-colors">Undergraduate</Link></li>
              <li><Link to="/academics" className="hover:text-primary-400 transition-colors">Graduate</Link></li>
              <li><Link to="/academics" className="hover:text-primary-400 transition-colors">Doctoral</Link></li>
              <li><Link to="/academics" className="hover:text-primary-400 transition-colors">Online Programs</Link></li>
              <li><Link to="/academics" className="hover:text-primary-400 transition-colors">Continuing Education</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>123 University Avenue, Education City, EC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span>info@drakex.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Drakex University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
