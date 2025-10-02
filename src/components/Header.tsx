import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-3 cursor-pointer">
        <span className="text-gray-500">Raylac Audit</span>
      </div>
      <nav>
        <ul className="flex space-x-6 text-gray-500">
          <li>
            <Link
              href="https://raylac.notion.site/Blog-2808a1e8bd7480d5b0d8fe1d61a5ee55"
              target="_blank"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
