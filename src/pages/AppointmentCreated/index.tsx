import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface RouteParams {
  date: number;
}

const AppontmentCreated: React.FC = () => {
  const { reset } = useNavigation();

  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    console.log(routeParams);
    const date = format(
      routeParams.date,
      "EEEE, 'dia' dd 'de' MMMM 'às' HH:mm'h'",
      {
        locale: ptBR,
      },
    );

    const captalizedDate = date.charAt(0).toUpperCase() + date.slice(1);

    return captalizedDate;
  }, []);

  return (
    <Container>
      <Icon name="check" size={80} color="#34d361" />

      <Title>Agendamento concluído</Title>
      <Description>{formattedDate}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppontmentCreated;
