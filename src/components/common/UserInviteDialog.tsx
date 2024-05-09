import InputForm from './InputForm.tsx';
import { searchUser } from '../../apis/authApis.ts';
import { FC, useState } from 'react';
import IconSearch from '@/assets/icons/IconSearch.tsx';
import UserInviteList from './UserInviteList.tsx';

const UserInvite: FC = () => {
  const [email, setEamil] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [list, setList] = useState<any[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEamil(event.target.value);
  };

  const onSearchClick = () => {
    searchUser(email).then((value) => {
      setList(value.map(({ user_nickname, id }) => <UserInviteList user_nickname={user_nickname} id={id} />));
      return list;
    });
  };

  return (
    <div>
      <div className="flex items-end">
        <InputForm title={'닉네임으로 검색하기'} placeholder={'닉네임을 입력하세요'} hint={''} onChange={onChange} />
        <button className="btn btn-outline btn-primary" onClick={onSearchClick}>
          <IconSearch />
        </button>
      </div>
      <ul id="searchList" role="list" className="divide-y divide-gray-100">
        {list}
      </ul>
    </div>
  );
};

export default UserInvite;
