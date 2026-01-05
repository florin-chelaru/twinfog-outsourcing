import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Stack,
  Typography
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { withBaseURL } from '../util/string'
import ByteBlitzLogo from '../Components/ByteBlitzLogo'
import { Image } from '@mui/icons-material'
import TwinfogLogo from '../Components/TwinfogLogo'
import HeroCard from '../Components/HeroCard'
import WhatWeDoCard from '../Components/WhartWeDoCard'
import WhoWeWorkWithCard from '../Components/WhoWeWorkWithCard'
import HowWeWorkCard from '../Components/HowWeWorkCard'

export interface HomeProps {}

export default function Home({}: HomeProps) {
  const companyDescription = (
    <>
      Twinfog excels at the rapid development journey, taking ideas from inception to MVP in record
      time. Our adept team harnesses state-of-the-art, future-ready technologies to build digital
      products with maximum impact at unprecedented speed. Swiftly validate your product idea by
      incorporating the right features, attracting early adopter customers and investors to propel
      your vision forward.
    </>
  )

  const corneliuTestimonial = (
    <>
      Committed to crafting high-quality products swiftly, I bring over 15 years of software
      development expertise. My journey includes successful roles as a Technical Lead in Vienna,
      Austria, Senior Software Engineer in Linz, Austria, and co-founder of the Twinfog US-based
      parent company, <b>Twinfog</b>, which debuted as a location-based social platform aimed at
      nurturing communities of expats worldwide (
      <Link href="https://youtu.be/oINy4qSrMiM" target="_blank">
        youtu.be/oINy4qSrMiM
      </Link>
      ).
      <br />
      <br />
      As a hands-on leader, I lead and actively work alongside the dynamic team of software
      engineers at <b>Twinfog</b>, where innovation meets efficient product development.
    </>
  )

  const florinTestimonial = (
    <>
      With 15+ years of experience, I&apos;ve contributed to major projects like{' '}
      <b>Google Cloud Platform (Alphabet)</b>, <b>Bing (Microsoft)</b>, and{' '}
      <b>Site Integrity (Meta)</b>.
      <br />
      <br />I hold a PhD from the <b>University of Maryland, College Park</b> and completed a
      postdoc at <b>MIT</b>, where I developed{' '}
      <Link href="https://github.com/epiviz/epiviz" target="_blank" rel="noopener">
        Epiviz
      </Link>
      , a visualization tool for large epigenetic data featured in{' '}
      <Link href="https://www.nature.com/articles/nmeth.3038" target="_blank" rel="noopener">
        Nature Methods
      </Link>{' '}
      and adopted by pharma giant <b>Genentech</b>.
      <br />
      <br />I lead a small team of skilled engineers, focusing on building reliable,
      production-ready systems and delivering high-impact products.
    </>
  )

  const missionStatement = (
    <>
      Empowering Visionaries, Twinfog is on a mission to transcend ideas into exceptional digital
      realities. Our mission is clear: to seamlessly translate your vision into unparalleled digital
      experiences. Whether you&#39;re embarking on a new venture or elevating an existing project,
      Twinfog offers comprehensive end-to-end solutions in digital design, development, and scaling.
      We transcend the role of mere consultants, positioning ourselves as dedicated partners
      navigating the ever-evolving landscape of digital products alongside you.
      <br />
      <br />
      <b>Twinfog:</b> Where innovation meets commitment, ensuring your digital journey reaches new
      heights.
    </>
  )

  return (
    <>
      <Container maxWidth="md" sx={{ pt: 3 }}>
        <Toolbar />
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <HeroCard />
          </Grid2>
          <Grid2 xs={12}>
            <WhatWeDoCard />
          </Grid2>
          <Grid2 xs={12}>
            <WhoWeWorkWithCard />
          </Grid2>
          <Grid2 xs={12}>
            <HowWeWorkCard />
          </Grid2>
          <Grid2 xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <br />
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
              Meet the founder
            </Typography>
          </Grid2>
          <Grid2 xs={12}>
            <Card>
              <Grid2 container>
                <Grid2
                  xs={4}
                  sm={4}
                  md={6}
                  // For getting the image to stretch to the available space.
                  // See https://stackoverflow.com/questions/14142378/how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                  <CardMedia
                    component="img"
                    image={withBaseURL('/static/img/florin-chelaru.jpg')}
                    alt="Florin Chelaru"
                    // For getting the image to stretch to the available space.
                    // See https://stackoverflow.com/questions/14142378/how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
                    sx={{
                      flexShrink: 0,
                      minWidth: '100%',
                      minHeight: '100%'
                    }}
                  />
                </Grid2>
                <Grid2 xs={8} sm={8} md={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignContent: 'center',
                      height: '100%'
                    }}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        noWrap
                        component="h1"
                        sx={{
                          display: { xs: 'flex', md: 'flex' },
                          flexGrow: 1,
                          fontWeight: 700,
                          color: 'inherit',
                          textDecoration: 'none'
                        }}>
                        Florin Chelaru
                      </Typography>
                      <Typography gutterBottom variant="subtitle2" component="div">
                        <Link
                          href="https://www.linkedin.com/in/florinchelaru/"
                          target="_blank"
                          rel="noopener">
                          Find me on LinkedIn
                        </Link>
                      </Typography>
                      <Typography
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        variant="body2"
                        color="text.secondary">
                        {florinTestimonial}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid2>
              </Grid2>
              <CardContent sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Typography variant="body2" color="text.secondary">
                  {florinTestimonial}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}
