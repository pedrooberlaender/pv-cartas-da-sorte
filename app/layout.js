import './globals.css';

export const metadata = {
  title: 'Cartas da Sorte',
  description: 'Estratégias exclusivas para aumentar sua sorte nas cartas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
