import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

export default function WhatWeDoCard() {
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
            What we do
          </Typography>
          <Grid2 container spacing={{ xs: 0, sm: 4 }}>
            <Grid2 xs={12} sm={6}>
              <List disablePadding sx={{ pl: 2 }}>
                <ListItem disableGutters>
                  <ListItemText primary="Design and build production backend systems" />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText primary="Take early products from MVP to reliable, scalable platforms" />
                </ListItem>
              </List>
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <List disablePadding sx={{ pl: 2 }}>
                <ListItem disableGutters>
                  <ListItemText primary="Work on distributed systems, cloud infrastructure, and data flows" />
                </ListItem>

                <ListItem disableGutters>
                  <ListItemText primary="Own systems end-to-end: architecture, implementation, and operations" />
                </ListItem>
              </List>
            </Grid2>
          </Grid2>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Comfortable working across the stack, including modern frontend codebases.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
