import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, Terminal } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;
type FormState = 'idle' | 'loading' | 'success' | 'error';

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');

  const [formState, setFormState] = useState<FormState>('idle');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Password reset requested for:', data.email);
    setFormState('loading');

    // Simulate API call
    setTimeout(() => {
      // Simulate a successful response
      setFormState('success');
      toast.success("Password reset link sent!", {
        description: `If an account exists for ${data.email}, you will receive an email.`,
      });
      form.reset();
    }, 1500);
  };

  return (
    <AuthFormWrapper
      title="Forgot Password?"
      footer={
        <p>
          Remembered your password?{' '}
          <Link to="/" className="font-semibold text-blue-600 hover:underline">
            Back to Login
          </Link>
        </p>
      }
    >
      <div className="space-y-4">
        {formState !== 'success' && (
          <p className="text-sm text-gray-600">
            No problem. Enter your email address below and we will send you a link to reset your password.
          </p>
        )}

        {formState === 'success' && (
          <Alert variant="default" className="bg-green-50 border-green-200">
             <Mail className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Check your inbox!</AlertTitle>
            <AlertDescription className="text-green-700">
              A password reset link has been sent to the email address you provided.
            </AlertDescription>
          </Alert>
        )}

        {formState === 'error' && (
           <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Submission Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
        )}

        {formState !== 'success' && (
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...form.register('email')}
                disabled={formState === 'loading'}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={formState === 'loading'}>
              {formState === 'loading' ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
        )}

      </div>
    </AuthFormWrapper>
  );
};

export default ForgotPasswordPage;