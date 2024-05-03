import { FC } from 'react';

interface ListItem {
  id: number | string; // id의 타입은 숫자나 문자열로 가정
  title?: string; // title은 선택적으로 존재할 수 있음
  content?: string; // content도 선택적
  child?: ListItem[]; // 재귀적 구조를 가질 수 있는 child 배열
}

interface SectionItem {
  id: number | string;
  headline: string;
  explain?: string;
  lists?: ListItem[]; // SectionItem 내에서 lists는 ListItem 배열을 포함할 수 있음
}

interface ListProps {
  lists: ListItem[];
}

interface SectionProps {
  info: SectionItem[];
}

const PolicySections: FC<SectionProps> = ({ info }) => {
  return (
    <>
      {info.map(({ id, headline, explain, lists }) => (
        <div key={id}>
          <div className="my-2 font-semibold">{headline}</div>
          {explain && <div className="my-2">{explain}</div>}
          {lists && <PolicyList lists={lists} />}
        </div>
      ))}
    </>
  );
};

const PolicyList: FC<ListProps> = ({ lists }) => {
  return (
    <ul className="mx-2">
      {lists.map(({ id, title, content, child = [] }) => (
        <li key={id}>
          {title && <p>{title}</p>}
          {content && <p className="mx-4">{content}</p>}
          {child.length > 0 && <PolicyList lists={child} />}
        </li>
      ))}
    </ul>
  );
};

export default PolicySections;
