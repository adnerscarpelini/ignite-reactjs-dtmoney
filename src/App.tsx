import styled from 'styled-components';

const Title = styled.h1`
  color: #8557e6;
  font-size: 64px;
`

export function App() {
  return (
    <div className="App">
      <Title className="title">Hello World</Title>
    </div>
  );
}
