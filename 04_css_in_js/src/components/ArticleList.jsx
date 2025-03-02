import Article from "./Article";
import styled from "styled-components";

const ArticleListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function ArticleList() {
  return (
    <ArticleListWrapper>
      <Article title="Как научиться React?" text="React — это библиотека для создания интерфейсов..." />
      <Article title="Зачем нужен JSX?" text="JSX позволяет писать HTML внутри JavaScript..." />
      <Article title="Компоненты в React" text="Компоненты позволяют переиспользовать код..." />
      <Article title="React и состояние" text="Состояние (state) позволяет компонентам хранить данные..." />
    </ArticleListWrapper>
  );
}

export default ArticleList;
