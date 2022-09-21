import styled from 'styled-components'
import { PrimaryButton } from 'components/Buttons'

export const StyledContainer = styled.div`
  margin-top: 2%;
  margin-left: 30%;
  margin-right: 30%;
  padding-bottom: 100px;
`;

export const StyledTitle = styled.div`
  margin-bottom: 10px;
  color: #88c564;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

export const StyledP = styled.p`
  color: #96abb6;
  text-align: center;
`;

export const StyledButton = styled(PrimaryButton)`
  background-color: #0eb1cf;
  color: #fafdfd;
  border: none;
  text-align: center;
  display: inline-block;
  font-weight: 600;
  border-radius: 16px;
  width: auto;
  height: 2em;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
  margin-bottom: 20px;
`;

export const StyledWarningP = styled.p`
    font-style: italic;
    color: #E74C3C;
`;

export const StyledSubmitDiv = styled.div`
    text-align: center;
    margin-top: 30px;
`;

