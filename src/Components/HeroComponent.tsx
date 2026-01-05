import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Button, Stack, Typography } from '@mui/material'
import HeroVisual from './HeroVisual'

export default function HeroComponent() {
  return (
    <Box
      position="relative"
      px={{ xs: 3, md: 8 }}
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            lineHeight: 1.1,
            fontWeight: 700
          }}>
          Senior software engineers for US startups.
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: 'text.secondary',
            fontSize: '1.125rem'
          }}>
          We help early and growth-stage teams design, build, and scale production systems — without
          hiring full-time.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/florinchelaru/"
            target="_blank"
            rel="noopener noreferrer">
            Let’s talk
          </Button>
          <Button
            variant="text"
            size="large"
            startIcon={<CalendarMonthIcon />}
            href="https://calendly.com/florin-chelaru/30min"
            target="_blank"
            rel="noopener noreferrer">
            Book a 30-min intro call
          </Button>
        </Stack>
      </Box>
      <Box
        position="absolute"
        right={{ xs: -80, sm: 20, md: 20 }}
        top="50%"
        width={400}
        height={200}
        sx={{ transform: 'translateY(-50%)' }}>
        <HeroVisual />
      </Box>
    </Box>
  )
}
