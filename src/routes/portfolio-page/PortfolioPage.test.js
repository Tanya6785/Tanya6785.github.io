import React from 'react';
import { render, screen } from '@testing-library/react';
import { PortfolioPage } from './PortfolioPage';
import '@testing-library/jest-dom/extend-expect'; // Для расширенных матчеров Jest

describe('PortfolioPage', () => {
  it('renders portfolio page with correct elements', () => {
    render(<PortfolioPage />);

    // Проверяем, что заголовок "Портфолио" присутствует на странице
    expect(screen.getByText('Портфолио')).toBeInTheDocument();

    // Проверяем, что контейнер .portfolioInner присутствует
    expect(screen.getByTestId('portfolio-inner')).toBeInTheDocument();

    // Проверяем, что все слайды изображений присутствуют на странице
    const images = screen.getAllByRole('img', { name: '' });
    expect(images).toHaveLength(6); // Проверяем, что рендерится 6 изображений
  });
});
