import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer">
          <span className="text-gray-500">
            Raylac Audit
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
          </ul>
        </nav>
      </header>
  );
};

export default Header;