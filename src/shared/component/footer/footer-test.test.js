import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './Footer';
import '@testing-library/jest-dom/extend-expect'; // Импортируем extend-expect для использования дополнительных методов, таких как toBeInTheDocument

test('Footer renders correctly', () => {
  const { getByText, getByAltText } = render(
    <Router>
      <Footer />
    </Router>
  );

  // Check if logo text is rendered
  expect(getByText('NailEnvy')).toBeInTheDocument();

  // Check if navigation links are rendered
  expect(getByText('Цены')).toBeInTheDocument();
  expect(getByText('О нас')).toBeInTheDocument();
  expect(getByText('Отзывы')).toBeInTheDocument();
  expect(getByText('Портфолио')).toBeInTheDocument();

  // Check if address and phone number are rendered
  expect(getByText('+7(111)222-33-44')).toBeInTheDocument();
  expect(getByText('Набережная реки Мойки, дом 45-67, парадная 6')).toBeInTheDocument();

  // Check if "Записаться" button is rendered
  expect(getByText('Записаться')).toBeInTheDocument();

  // Check if social media icons are rendered
  expect(getByAltText('Иконка инстаграма')).toBeInTheDocument();
  expect(getByAltText('Иконка ютуба')).toBeInTheDocument();
  expect(getByAltText('Иконка ватсап')).toBeInTheDocument();
});

