import MenuIcon from '@mui/icons-material/Menu'
import { ListItem, ListItemIcon } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
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
          <ListItemText>
            <Typography
              variant="h5"
              noWrap
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none'
              }}>
              ByteBlitz
            </Typography>
          </ListItemText>
        </ListItem>
        {navItems.map((item) => (
          <ListItemButton key={`listitem-${item.key}`} component={DomLink} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label(strings)} />
          </ListItemButton>
        ))}
        {/* <LanguageListItem languages={SUPPORTED_LOCALES} onChange={onLocaleChange} /> */}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <ByteBlitzLogo sx={{ display: { xs: 'none', md: 'flex', width: 48, height: 48 } }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none'
            }}>
            ByteBlitz
          </Typography>
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
            {/* <LanguagePopover languages={SUPPORTED_LOCALES} onChange={onLocaleChange} /> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
