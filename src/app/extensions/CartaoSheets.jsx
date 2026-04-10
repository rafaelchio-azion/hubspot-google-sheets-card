import React from 'react';
import { Button, Text, Tile, Flex, hubspot } from '@hubspot/ui-extensions';

// Componente que define o cartão de Google Sheets
hubspot.extend(({ actions }) => (
  <Tile>
    <Flex direction="column" gap="medium">
      <Text>Clique no botão abaixo para abrir a planilha editável do Google Sheets.</Text>
      <Button 
        variant="primary" 
        onClick={() => actions.openIframeModal({
          uri: "https://docs.google.com/spreadsheets/d/SEU_ID_AQUI/edit",
          title: 'Planilha de Dados Operacional',
          width: 1200,
          height: 800
        })}
      >
        Abrir Planilha
      </Button>
    </Flex>
  </Tile>
));
