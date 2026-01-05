import { ListItem, ListItemIcon } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useContext } from 'react'
import { Link as DomLink, useLocation } from 'react-router-dom'
import { GlobalLocalizedData, LocaleContext, LocaleHandler } from '../store/LocaleProvider'
import LocaleInfo from '../util/LocaleInfo'
import ByteBlitzLogo from './ByteBlitzLogo'
import TwinfogLogo from './TwinfogLogo'

const drawerWidth = 240

export interface NavItemInfo {
  key: string
  label: (strings: GlobalLocalizedData) => string
  icon: React.ReactNode
  path: string
}

export interface DrawerAppBarProps {
  navItems: NavItemInfo[]
}

export default function DrawerAppBar({ navItems }: DrawerAppBarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const localeManager = useContext<LocaleHandler>(LocaleContext)
  const strings = localeManager.globalStringList

  const location = useLocation()
  const pageTitle =
    navItems
      .find(
        // (item) => item.path === location.pathname || (item.path === '/' && location.pathname === '')
        (item) => item.path === location.pathname && item.path !== '/'
      )
      ?.label(strings) ?? '' //strings.websiteTitle

  const onLocaleChange = (l: LocaleInfo) => localeManager.changeLocale(l.locale)

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ByteBlitzLogo sx={{ display: { xs: 'flex', md: 'none', width: 36, height: 36 } }} />
          </ListItemIcon>
        </ListItem>
        {navItems.map((item) => (
          <ListItemButton key={`listitem-${item.key}`} component={DomLink} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label(strings)} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <ByteBlitzLogo sx={{ display: { xs: 'none', md: 'flex', width: 48, height: 48 } }} />
          <TwinfogLogo sx={{ display: { xs: 'none', md: 'flex', width: 200, height: 48 } }} />
          <ByteBlitzLogo sx={{ display: { xs: 'flex', md: 'none', width: 36, height: 36 } }} />
          <TwinfogLogo sx={{ display: { xs: 'flex', md: 'none', width: 160, height: 30 } }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
            {pageTitle}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={`button-${item.key}`}
                sx={{ color: '#fff' }}
                component={DomLink}
                to={item.path}>
                {item.label(strings)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
