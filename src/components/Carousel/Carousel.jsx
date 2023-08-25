import React from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(500),
    width: rem (300),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: `0 ${theme.spacing.md}`, 
    position: 'relative', 
    background: 'url(https://res.cloudinary.com/duwenv0yr/image/upload/v1692955753/Background_Banner_f7uic0.jpg) center/cover no-repeat', // Establece el fondo deseado
    padding: theme.spacing.xl, 
  },

  cardContainer: {
    position: 'relative',
    zIndex: 1,
  },
}));

function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Show More
      </Button>
    </Paper>
  );
}

const data = [
    {
        image:
          'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949895/Venom.jpg',
        title: 'Venom',
        category: 'Poster',
      },
      {
        image:
          'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949939/Invencible.jpg',
        title: 'Invencible',
        category: 'Comic',
      },
      {
        image:
          'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949939/Invencible.jpg',
        title: 'Invencible',
        category: 'Comic',
      },
];

function NewCarousel() {
  const {classes}=useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.carouselContainer}>
    <div className={classes.cardContainer}>
    <Carousel
      slideSize={mobile ? '100%' : '33.33%'}
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xs"
      align="center"
      slidesToScroll={3}
    >
      {slides}
    </Carousel>
    </div>
    </div>
  );
}

export default NewCarousel;
