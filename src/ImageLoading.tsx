import styled, {keyframes} from 'styled-components';

const AnimatedLoading = styled.div`
  height: 200px;
  width: 150px;
  background-color: #f6f7f8;
  background-size: 800px 150px;
  background: linear-gradient(to right, #eee 8%, #bbb 18%, #eee 33%);
`;

const ImageLoading = () => <div><AnimatedLoading/></div>;

export default ImageLoading;