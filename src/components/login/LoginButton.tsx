import { useRef, useState } from 'react';
import { useLoginState } from '../../stores/loginStore.ts';
import useSignIn from '../../react-queries/useSignIn.ts';
import { isValidEmail, isValidPassword, isValidPasswordComplex } from '../../utils/authUtils.ts';
import { isAuthError } from '@supabase/supabase-js';
import Dialog from '../Dialog.tsx';

//디자인 패턴 적용 - Strategy Pattern(전략패턴) : 알고리즘을 객체의 일부분으로 캡슐화하여 독립적으로 알고리즘을 변경가능
// Validation Strategy : 이메일과 비밀번호 검증을 위한 인터페이스를 정의합니다.

// 전략 구현
// 로그인에만, 기존의 비밀번호 유효성 검사에, 특정한 조건의 유효성 검사가 추가될 경우.
interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

const messages = {
  ISVAILD_ERROR: '이메일 또는 비밀번호 형식이 잘못되었습니다.',
  AUTH_ERROR: '이메일 또는 비밀번호가 정확하지 않습니다.',
};

const LoginButton = () => {
  const { email, password } = useLoginState();
  const { mutate } = useSignIn();
  const dialogRef = useRef<DialogElement | null>(null);
  const [dialogMessage, setDialogMessage] = useState('');

  const isvalidemail = new isValidEmail();
  const isvalidpassword = new isValidPassword();
  const isvalidpasswordcomplex = new isValidPasswordComplex();

  const onClick = () => {
    if (
      !isvalidemail.validate(email) ||
      !isvalidpassword.validate(password) ||
      !isvalidpasswordcomplex.validate(password)
    ) {
      setDialogMessage(messages.ISVAILD_ERROR);
      dialogRef.current?.openModal();
      return;
    }

    mutate(
      {
        email,
        password,
      },
      {
        onError: (error) => {
          if (isAuthError(error)) {
            //인증오류
            setDialogMessage(messages.AUTH_ERROR);
            dialogRef.current?.openModal();
          }
        },
        onSettled: (data) => {
          console.log(data);
        },
        onSuccess: (data) => {
          //로그인 성공시에는 팝업없이 캘린더 메인으로
          console.log(data);
        },
      },
    );
  };

  return (
    <>
      <button type={'button'} onClick={onClick} className="btn btn-outline btn-primary w-full">
        로그인
      </button>
      <Dialog ref={dialogRef} desc={dialogMessage}></Dialog>
    </>
  );
};

export default LoginButton;
