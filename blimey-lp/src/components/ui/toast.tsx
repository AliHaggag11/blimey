import { Toaster } from 'sonner';

export function Toast() {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        },
      }}
    />
  );
}

export const toast = {
  success: (message: string) => {
    import('sonner').then(({ toast }) => toast.success(message));
  },
  error: (message: string) => {
    import('sonner').then(({ toast }) => toast.error(message));
  }
}; 