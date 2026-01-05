import { Card, CardContent, Typography, Button, Stack, Box } from '@mui/material'
import HeroVisual from './HeroVisual'

export default function HeroCard() {
  return (
    <Card
      elevation={0}
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
      <CardContent
        sx={{
          width: '100%',
          px: { xs: 3, sm: 6, md: 8 }
        }}>
        <Box position="relative" overflow="hidden">
          <Box
            position="absolute"
            right={-40}
            top="50%"
            width={400}
            height={200}
            sx={{ transform: 'translateY(-50%)' }}>
            <HeroVisual />
          </Box>
          <Box
            sx={{
              maxWidth: 700
            }}>
            <Typography variant="h3" fontWeight={600} gutterBottom>
              Senior software engineers for US startups
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
              We help early and growth-stage teams design, build, and scale production systems —
              without hiring full-time.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button variant="contained" size="large">
                Let’s talk
              </Button>

              <Button variant="text" size="large">
                Book a 30-min intro call
              </Button>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
