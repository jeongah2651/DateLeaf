//초기 코드에서는 isValidEmail과 isValidPassword 함수를 직접 정의하고, 이 함수들을 다른 파일에서 임포트하여 사용하고 있습니다.
//이 접근 방식은 함수가 전역적으로 사용되며, 검증 로직 변경 시 모든 참조 지점에서 수정이 필요할 수 있습니다.

// export const isValidEmail = (email: string): boolean => {
//   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   return regex.test(email);
// };

// export const isValidPassword = (password: string) => {
//   return password.length >= 6;
// };



// 전략 패턴 적용 후 (isValidEmail, isValidPassword 클래스 구현)
//1. 전략 인터페이스 구현 : 위 인터페이스는 validate라는 메소드를 포함하고 있으며, 이 메소드는 문자열을 입력받아 boolean 값으로 유효성을 반환합니다.
export interface ValidationStrategy {
  validate(input: string): boolean;
}


//2. 구체적인 전략 클래스 만들기 : 각 클래스는 ValidationStrategy 인터페이스를 구현하며, 이메일과 비밀번호에 대한 구체적인 검증 로직을 제공합니다.
// 이 클래스들은 각각 이메일과 비밀번호 검증 로직을 캡슐화하며, validate 메소드를 통해 입력된 데이터의 유효성을 검사합니다.
// 이 방식은 검증 로직을 변경하거나 다른 유형의 검증 로직으로 쉽게 교체할 수 있게 해줍니다. 예를 들어, 비밀번호 정책이 변경되어 검증 로직을 업데이트해야 하는 경우, isValidPassword 클래스만 수정하면 됩니다.
export class isValidEmail implements ValidationStrategy {
  validate(email: string): boolean {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  }
}

export class isValidPassword implements ValidationStrategy {
  validate(password: string): boolean {
    return password.length >= 6;
  }
}

// 비밀번호가 특정 조건 (예: 최소 한 개의 숫자, 하나의 대문자 및 특수 문자 포함)을 충족하는지 확인하는 전략.
export class isValidPasswordComplex implements ValidationStrategy {
  validate(password: string): boolean {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  }
}
