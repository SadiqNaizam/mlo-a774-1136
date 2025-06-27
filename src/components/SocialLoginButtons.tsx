import React from 'react';
import { Button } from '@/components/ui/button';

// SVG Icon for GitHub
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// SVG Icon for Google
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.24 10.28c.14-.4.28-.8.42-1.2h-3.16v2.4h1.98c-.08.66-.34 1.28-.76 1.72v1.5h1.94c1.14-1.06 1.8-2.58 1.8-4.42z" />
    <path d="M20.28 12c0-.8-.08-1.58-.2-2.34h-7.58v4.48h4.42c-.18.88-.64 1.64-1.28 2.22v1.5h1.94c1.52-1.4 2.4-3.48 2.4-5.86z" />
    <path d="M9.5 20c2.28 0 4.2-0.76 5.6-2.06l-1.94-1.5c-.76.52-1.74.82-2.8.82-2.14 0-3.96-1.44-4.6-3.4H3.06v1.52C4.64 18.24 6.9 20 9.5 20z" />
    <path d="M3.06 13.1v-2.2c-.12-.4-.18-.82-.18-1.24s.06-.84.18-1.24V6.9H1.12C.48 8.16 0 9.54 0 11.2c0 1.66.48 3.04 1.12 4.32L3.06 13.1z" />
  </svg>
);


const SocialLoginButtons = () => {
  console.log('SocialLoginButtons loaded');

  const handleSocialLogin = (provider: 'google' | 'github') => {
    // This is a placeholder for the actual social login logic.
    // In a real app, you would call your authentication service here.
    console.log(`Attempting to log in with ${provider}`);
    // Example: window.location.href = `/auth/${provider}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <Button variant="outline" type="button" onClick={() => handleSocialLogin('github')}>
        <GithubIcon className="mr-2 h-4 w-4" />
        GitHub
      </Button>
      <Button variant="outline" type="button" onClick={() => handleSocialLogin('google')}>
        <GoogleIcon className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
};

export default SocialLoginButtons;