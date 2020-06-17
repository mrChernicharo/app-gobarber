import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
`;
export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 32px;
  color: #f4ede8;
  margin-top: 8px;
  text-align: center;
`;
export const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f4ede8;
  margin-top: 8px;
`;
export const OkButton = styled(RectButton)`
  background: #ff9000;
  color: #f4ede8;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 12px 24px;
  margin-top: 24px;
`;
export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #312e38;
`;
