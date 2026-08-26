'use client';

import { useEffect, useState } from 'react';

interface TestComponentProps {
  age: number;
  isActive: boolean;
  userName: string;
}

const testData = {
  active: true,
  age: 25,
  description: 'Teste do ESLint',
  title: 'Portfolio',
};

export function TestComponent({ age, isActive, userName }: TestComponentProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  const message = `${userName} possui ${age} anos`;

  return (
    <div className="flex items-center bg-black p-4 text-white">{message}</div>
  );
}
