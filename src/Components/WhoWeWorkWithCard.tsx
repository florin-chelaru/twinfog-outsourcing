import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

export default function WhoWeWorkWithCard() {
  return (
    <Card elevation={0}>
      <CardContent
        sx={{
          px: { xs: 3, sm: 6, md: 8 },
          py: 6,
          '&:last-child': {
            py: 6
          }
        }}>
        <Box sx={{ maxWidth: 700 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Who we work with
          </Typography>

          <Grid2 container spacing={{ xs: 0, sm: 4 }}>
            <Grid2 xs={12} sm={6}>
              <List disablePadding sx={{ pl: 2 }}>
                <ListItem disableGutters>
                  <ListItemText primary="Early-stage or growth-stage startups with a product to ship" />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText primary="Teams who value senior engineers taking ownership" />
                </ListItem>
              </List>
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <List disablePadding sx={{ pl: 2 }}>
                <ListItem disableGutters>
                  <ListItemText primary="Founders who want reliable, production-ready systems" />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText primary="Startups that prioritize engineering quality and long-term maintainability" />
                </ListItem>
              </List>
            </Grid2>
          </Grid2>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            We love partnering with founders who take engineering seriously and want long-term
            impact.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
