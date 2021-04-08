import '../styles/wrapper.scss';

interface WrapperProps {
  children: React.ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="content">{children}</div>;
}
