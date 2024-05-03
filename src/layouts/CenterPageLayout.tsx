import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CenterPageLayout: FC<Props> = ({ children }) => {
  return (
    <main className={'flex h-screen w-screen items-center justify-center'}>
      <div className={'flex size-full max-w-md flex-col items-center justify-around overflow-hidden p-8'}>
        {children}
      </div>
    </main>
  );
};

export default CenterPageLayout;
