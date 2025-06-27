import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} SmartLogin UI. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Contact
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;