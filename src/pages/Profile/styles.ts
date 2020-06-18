import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 0 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 0 0 18px;
`;
export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 24px;
  margin-top: 16px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  width: 166px;
  height: 166px;
  margin-top: -12px;

  align-self: center;
`;

export const UserAvatar = styled.Image`
  width: 166px;
  height: 166px;
  border-radius: 83px;

  align-self: center;
`;
