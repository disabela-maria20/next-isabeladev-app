import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Sidebar from './index';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    onClick,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  );

  MockLink.displayName = 'MockLink';

  return MockLink;
});

describe('Sidebar', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/');
  });

  it('deve renderizar o botão para abrir o menu', () => {
    render(<Sidebar />);

    expect(
      screen.getByRole('button', {
        name: /abrir menu/i,
      }),
    ).toBeInTheDocument();
  });

  it('deve abrir o menu ao clicar no botão', async () => {
    const user = userEvent.setup();

    render(<Sidebar />);

    await user.click(
      screen.getByRole('button', {
        name: /abrir menu/i,
      }),
    );

    expect(
      screen.getByRole('button', {
        name: /fechar menu/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('sidebar')).toHaveClass('translate-x-0');
  });

  it('deve fechar o menu ao clicar no botão de fechar', async () => {
    const user = userEvent.setup();

    render(<Sidebar />);

    await user.click(
      screen.getByRole('button', {
        name: /abrir menu/i,
      }),
    );

    await user.click(
      screen.getByRole('button', {
        name: /fechar menu/i,
      }),
    );

    expect(screen.getByTestId('sidebar')).toHaveClass('-translate-x-full');
  });

  it('deve fechar o menu ao clicar no overlay', async () => {
    const user = userEvent.setup();

    render(<Sidebar />);

    await user.click(
      screen.getByRole('button', {
        name: /abrir menu/i,
      }),
    );

    await user.click(screen.getByTestId('menu-overlay'));

    expect(screen.getByTestId('sidebar')).toHaveClass('-translate-x-full');
  });

  it('deve fechar o menu ao clicar em um link', async () => {
    const user = userEvent.setup();

    render(<Sidebar />);

    await user.click(
      screen.getByRole('button', {
        name: /abrir menu/i,
      }),
    );

    await user.click(
      screen.getByRole('link', {
        name: /about/i,
      }),
    );

    expect(screen.getByTestId('sidebar')).toHaveClass('-translate-x-full');
  });

  it('deve renderizar todos os links de navegação', () => {
    render(<Sidebar />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /works/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /process/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('deve marcar a página atual como ativa', () => {
    mockUsePathname.mockReturnValue('/works');

    render(<Sidebar />);

    expect(
      screen.getByRole('link', {
        name: /works/i,
      }),
    ).toHaveClass('translate-x-2');
  });
});
