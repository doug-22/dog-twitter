import styled from "styled-components"

import { Search } from "../../Styles/Icons"
import Button from "../Button"


export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }

`;
export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);

  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);

  max-height: 57px;
`;
export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--search);
  
  &::placeholder{
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction:column;
  padding: 57px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 14px;
`;
export const Item = styled.div`
  padding: 10px 16px;
  
  & + div {
    border-top: 1px solid var(--outline);

    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 17px;
  }
`;
export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;

export const FollowSuggestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const Avatar = styled.div`
  /* width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px; */

  > img {
    width: 49px;
    height: 49px;
    background: var(--gray);
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;

export const News = styled.div`
  display: flex;
  flex-direction:column;

  font-size: 14px;

  > span {
    color: var(--gray);
  }

  > strong {
    margin: 10px 0 10px;
  }
`;

export const FollowTopics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonMostrar = styled.div`
  display: flex;
  padding-top: 5px;

  > span {
    font-size: 14px;
    color: var(--twitter);
  }
`;