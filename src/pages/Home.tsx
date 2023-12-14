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

export interface HomeProps {}

export default function Home({}: HomeProps) {
  const companyDescription = (
    <>
      ByteBlitz excels at the rapid development journey, taking ideas from inception to MVP in
      record time. Our adept team harnesses state-of-the-art, future-ready technologies to build
      digital products with maximum impact at unprecedented speed. Swiftly validate your product
      idea by incorporating the right features, attracting early adopter customers and investors to
      propel your vision forward.
    </>
  )

  const corneliuTestimonial = (
    <>
      Committed to crafting high-quality products swiftly, I bring over 15 years of software
      development expertise. My journey includes successful roles as a Technical Lead in Vienna,
      Austria, Senior Software Engineer in Linz, Austria, and co-founder of the ByteBlitz US-based
      parent company, <b>Twinfog</b>, which debuted as a location-based social platform aimed at
      nurturing communities of expats worldwide (
      <Link href="https://youtu.be/oINy4qSrMiM" target="_blank">
        youtu.be/oINy4qSrMiM
      </Link>
      ).
      <br />
      <br />
      As a hands-on leader, I lead and actively work alongside the dynamic team of software
      engineers at <b>ByteBlitz</b>, where innovation meets efficient product development.
    </>
  )

  const florinTestimonial = (
    <>
      With over 15 years of experience as a Software Engineer and Tech Lead, I&#39;ve contributed to
      major projects like Google Cloud Platform at tech giant <b>Alphabet</b>, Bing at{' '}
      <b>Microsoft</b>, and Site Integrity (spam detection) at <b>Meta</b>.
      <br />
      <br />
      Holding a PhD from the University of Maryland, College Park, and having completed a postdoc at
      MIT, I developed{' '}
      <Link href="https://github.com/epiviz/epiviz" target="_blank">
        Epiviz
      </Link>
      , a visualization tool for large epigenetic data, featured in the{' '}
      <Link href="https://www.nature.com/articles/nmeth.3038" target="_blank">
        {' '}
        Nature Methods magazine
      </Link>{' '}
      and adopted by pharma giant <b>Genentech</b>.
      <br />
      <br />I am a co-founder and CTO of the <b>ByteBlitz</b> parent company, <b>Twinfog Inc.</b>,
      where I actively work alongside our team of skilled developers, fostering innovation and
      driving efficient product development.
    </>
  )

  const missionStatement = (
    <>
      Empowering Visionaries, ByteBlitz is on a mission to transcend ideas into exceptional digital
      realities. Our mission is clear: to seamlessly translate your vision into unparalleled digital
      experiences. Whether you&#39;re embarking on a new venture or elevating an existing project,
      ByteBlitz offers comprehensive end-to-end solutions in digital design, development, and
      scaling. We transcend the role of mere consultants, positioning ourselves as dedicated
      partners navigating the ever-evolving landscape of digital products alongside you.
      <br />
      <br />
      <b>ByteBlitz:</b> Where innovation meets commitment, ensuring your digital journey reaches new
      heights.
    </>
  )

  return (
    <>
      <Container maxWidth="md" sx={{ pt: 3 }}>
        <Toolbar />
        <Grid2 container spacing={2}>
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
                  }}
                  // order={{ xs: 2, sm: 1 }}
                >
                  <CardMedia
                    component="img"
                    image={withBaseURL('/static/img/woman-cloud-lightning-1.jpeg')}
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
                      <Stack
                        direction="row"
                        sx={{
                          alignItems: 'center'
                        }}>
                        <ByteBlitzLogo
                          sx={{ display: { xs: 'flex', md: 'flex', width: 48, height: 48 } }}
                        />
                        <Stack direction="column">
                          <Typography
                            // gutterBottom
                            variant="h5"
                            noWrap
                            component="h1"
                            sx={{
                              mr: 2,
                              ml: 2,
                              display: { xs: 'flex', md: 'flex' },
                              flexGrow: 1,
                              fontWeight: 700,
                              color: 'inherit',
                              textDecoration: 'none'
                            }}>
                            ByteBlitz
                          </Typography>
                          <Typography
                            lineHeight="1"
                            variant="subtitle2"
                            noWrap
                            sx={{
                              mr: 2,
                              ml: 2.5,
                              display: { xs: 'flex', md: 'flex' },
                              flexGrow: 1,
                              fontWeight: 700,
                              color: 'inherit',
                              textDecoration: 'none'
                            }}>
                            by
                            <TwinfogLogo sx={{ width: 72, height: 18, ml: 0.5 }} />
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography gutterBottom variant="subtitle2" component="div">
                        Transforming concepts into viable products at lightning speed.
                      </Typography>
                      <br />
                      <Typography
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        variant="body2"
                        color="text.secondary">
                        {companyDescription}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {/* <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        // navigate('/lessons')
                        // scrollToTop()
                      }}>
                      More
                    </Button> */}
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => {
                          // navigate('/contact')
                          // scrollToTop()
                        }}>
                        {/* {strings.contactMe} */}
                        Contact us
                      </Button>
                    </CardActions>
                  </Box>
                </Grid2>
              </Grid2>
              <CardContent sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Typography variant="body2" color="text.secondary">
                  {companyDescription}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: { xs: 'block', sm: 'none' } }}>
                {/* <Button
                size="small"
                color="primary"
                onClick={() => {
                  // navigate('/lessons')
                  // scrollToTop()
                }}>
                More
              </Button> */}
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    // navigate('/contact')
                    // scrollToTop()
                  }}>
                  {/* {strings.contactMe} */}
                  Contact us
                </Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 xs={12}>
            <Card>
              <Grid2 container>
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
                        Our mission
                      </Typography>
                      <Typography
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        variant="body2"
                        color="text.secondary">
                        {missionStatement}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid2>
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
                    image={withBaseURL('/static/img/mission-statement-2.jpeg')}
                    alt="Mission statement illustration"
                    // For getting the image to stretch to the available space.
                    // See https://stackoverflow.com/questions/14142378/how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
                    sx={{
                      flexShrink: 0,
                      minWidth: '100%',
                      minHeight: '100%'
                    }}
                  />
                </Grid2>
              </Grid2>
              <CardContent sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Typography variant="body2" color="text.secondary">
                  {missionStatement}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <br />
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
              Meet our founders
            </Typography>
          </Grid2>
          <Grid2 xs={12}>
            <Card>
              <Grid2 container>
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
                        Corneliu Serediuc
                      </Typography>
                      <Typography gutterBottom variant="subtitle2" component="div">
                        Senior Engineer & CEO
                      </Typography>
                      <Typography
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        variant="body2"
                        color="text.secondary">
                        {corneliuTestimonial}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid2>
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
                    image={withBaseURL('/static/img/corneliu-serediuc.jpeg')}
                    alt="Corneliu Serediuc"
                    // For getting the image to stretch to the available space.
                    // See https://stackoverflow.com/questions/14142378/how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
                    sx={{
                      flexShrink: 0,
                      minWidth: '100%',
                      minHeight: '100%'
                    }}
                  />
                </Grid2>
              </Grid2>
              <CardContent sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Typography variant="body2" color="text.secondary">
                  {corneliuTestimonial}
                </Typography>
              </CardContent>
            </Card>
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
                        Senior Engineer & CTO
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
