import { isValidEmail, isValidPassword } from '../authUtils';

describe('이메일 검증 유틸리티 함수 테스트', () => {
  const emailValidator = new isValidEmail(); // 인스턴스 생성

  it('이메일이 유효할 경우 true 를 반환한다.', () => {
    expect(emailValidator.validate('test@test.com')).toBe(true);
    expect(emailValidator.validate('rlghks3004@gmail.com')).toBe(true);
  });

  it('이메일이 유요하지 않을 경우 false 를 반환한다.', () => {
    expect(emailValidator.validate('test.com')).toBe(false);
    expect(emailValidator.validate('test@test')).toBe(false);
  });
});

describe('비밀번호 검증 유틸리티 함수 테스트', () => {
  const passwordValidator = new isValidPassword(); // 인스턴스 생성

  it('비밀번호가 6자리 이상이 아닐 경우 false 를 반환한다.', () => {
    expect(passwordValidator.validate('some')).toBe(false);
  });
});
