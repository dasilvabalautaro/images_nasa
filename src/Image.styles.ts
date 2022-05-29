import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  margin: 16px;
`;

export const Image = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
  position: relative;

  &.show {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.35s ease-in;
  }

  &.hide {
    opacity: 0;
    visibility: hidden;
  }
`;

export const FallbackContainer = styled.div`
  padding: 16px;
  border: 1px dashed black;
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ErrorLabel = styled.label`
  position: absolute;
  top: 8px;
  color: red;
  font-weight: bold;
  width: 100%;
`;

export const Label = styled.label`
  color: white;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const Overlay = styled.div`
  opacity: 0.2;
  background: black;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;

