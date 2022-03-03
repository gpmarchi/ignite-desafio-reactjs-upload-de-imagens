import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const viewImage = (url: string) => {
    if (url) {
      setSelectedImage(url);
      onOpen();
    }
  };

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {cards?.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => viewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImage}
      />
    </>
  );
}
