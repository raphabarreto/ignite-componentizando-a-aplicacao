import '../styles/wrapper.scss';
import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="content">{children}</div>;
}
