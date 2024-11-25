const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="text-center text-gray-500">
        <p>© 2024 Chris Bright. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
