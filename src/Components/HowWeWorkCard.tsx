import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

export default function HowWeWorkCard() {
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
        <Box>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            How we work
          </Typography>
          <Grid2 container spacing={{ xs: 0, sm: 4 }}>
            <Grid2 xs={12} sm={6}>
              <List disablePadding sx={{ pl: 2 }}>
                <ListItem disableGutters>
                  <ListItemText primary="We take ownership of systems end-to-end: architecture, implementation, and operations" />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText primary="Work in close collaboration with your team and product stakeholders" />
                </ListItem>
              </List>
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <List disablePadding sx={{ pl: 2 }}>
                <ListItem disableGutters>
                  <ListItemText primary="Provide guidance on scalable, maintainable, and reliable solutions" />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText primary="Flexible engagement: short-term MVPs or longer-term system development" />
                </ListItem>
              </List>
            </Grid2>
          </Grid2>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            We adapt to your team’s workflow and priorities, bringing senior-level engineering
            judgment to every decision.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
