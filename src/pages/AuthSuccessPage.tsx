import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AuthSuccessPage: React.FC = () => {
  console.log('AuthSuccessPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to the login page (root path) as defined in App.tsx
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="items-center text-center">
            <CheckCircle className="h-16 w-16 text-success mb-4" />
            <CardTitle className="text-2xl">Authentication Successful!</CardTitle>
            <CardDescription>
              Welcome! You have successfully logged in.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <p className="text-muted-foreground text-center px-4">
              This is your main application dashboard. From here, you can access all features.
            </p>
            <Button onClick={handleLogout} className="w-full max-w-xs">
              Log Out
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AuthSuccessPage;