import styled from "styled-components";

const ArticleWrapper = styled.article`
  background: white;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #007bff;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
`;

function Article({ title, text }) {
  return (
    <ArticleWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </ArticleWrapper>
  );
}

export default Article;
