/* eslint-disable tailwindcss/no-custom-classname */
import { FC } from 'react';
import IconPlus from '@/assets/icons/IconPlus.tsx';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user_nickname: any;
  id: string;
}

const UserPlusList: FC<Props> = ({ user_nickname, id }) => {
  return (
    <li key={id} className="border-b">
      <button className="ju btn block w-full justify-between border-none bg-transparent" onClick={onPlusClick}>
        {user_nickname}
        <IconPlus />
      </button>
    </li>
  );
};

const onPlusClick = () => {
  console.log('aa');
};

export default UserPlusList;
