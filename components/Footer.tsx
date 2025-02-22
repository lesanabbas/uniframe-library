import Image from 'next/image';
import chakraLogo from '../public/logo.svg'; // Assuming Chakra logo is in the public folder

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Left Section (Project Info) */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center space-x-2">
              <Image src={chakraLogo} alt="Chakra Logo" width={40} height={40} />
              <span className="text-xl font-bold">Chakra</span>
            </div>
            <p className="text-sm mt-2">Project by Chakra Systems © 2025</p>
            <p className="text-sm">Deployed on <span className="font-semibold">Vercel</span></p>
            <p className="text-sm">Maintained by <span className="font-semibold">Sage and contributors</span></p>
          </div>

          {/* Middle Section (Documentation and Projects) */}
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 text-center lg:text-left">
            {/* Documentation Links */}
            <div className="space-y-2">
              <h3 className="font-semibold">Documentation</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Components</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Theming</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Styling</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Get Started</a></li>
              </ul>
            </div>

            {/* Projects Links */}
            <div className="space-y-2">
              <h3 className="font-semibold">Projects</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Chakra UI Pro</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">FigPilot</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Zag.js</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Ark UI</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section (Community Links) */}
          <div className="space-y-2">
            <h3 className="font-semibold">Community</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Team</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Discord</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-teal-500">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
