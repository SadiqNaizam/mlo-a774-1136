import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthFormWrapperProps {
  title: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({ title, children, footer, className }) => {
  console.log('AuthFormWrapper loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className={cn("w-full max-w-md shadow-lg", className)}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter>
          <div className="w-full text-center text-sm text-gray-600">
            {footer}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthFormWrapper;