import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuTab = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content:space-between;
  /* width: 100%; */
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 38.5px 15px;

  font-weight: bold;
  font-size: 15px;
  text-align: center;

  outline: 0;
  cursor: pointer;

  border-bottom: 1px solid var(--outline);
  

  &:hover {
    background: var(--twitter-dark-hover);
    color: var(--twitter);
  }

  &.active {
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;