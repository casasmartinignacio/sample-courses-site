import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const BigTitle = styled.span`
  ${({ theme }) => css`
    font-size: 35px;
    font-weight: 700;
    color: ${theme.brandColors.blue};
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    all: revert;
    font-size: 25px;
    font-weight: 600;
    color: ${theme.brandColors.green};
    text-decoration: none;
  `}
`;