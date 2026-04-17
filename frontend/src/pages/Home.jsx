import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  Calendar,
  Camera,
  Car,
  ChevronRight,
  DollarSign,
  Facebook,
  Heart,
  Home as HomeIcon,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Music,
  Palette,
  Phone,
  Search,
  Sparkles,
  Star,
  Twitter,
  Utensils,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const Home = () => {
  const theme = useTheme()
  const [searchData, setSearchData] = useState({
    city: '',
    budget: '',
    serviceType: '',
  })
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollY } = useScroll()
  const heroY = useSpring(useTransform(scrollY, [0, 500], [0, -90]), {
    stiffness: 90,
    damping: 24,
  })
  const heroScale = useSpring(useTransform(scrollY, [0, 500], [1, 1.06]), {
    stiffness: 80,
    damping: 20,
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredServices = [
    {
      id: 1,
      title: 'Photographie de mariage premium',
      category: 'Photographe',
      price: '3000 - 8000 EUR',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Des images editoriales et lumineuses pour raconter votre journee avec elegance.',
      tag: 'Edition luxe',
    },
    {
      id: 2,
      title: 'Salle de reception luxueuse',
      category: 'Lieu',
      price: '5000 - 15000 EUR',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1469371670267-49b346df2727?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Un cadre raffine pour recevoir vos invites dans une ambiance chic et contemporaine.',
      tag: 'Lieu iconique',
    },
    {
      id: 3,
      title: 'Service traiteur gourmet',
      category: 'Traiteur',
      price: '2000 - 6000 EUR',
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1556659794-9c3d3f8b6580?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Une experience gastronomique soignee avec une mise en scene digne d un grand evenement.',
      tag: 'Saveurs signature',
    },
    {
      id: 4,
      title: 'Decoration florale elegante',
      category: 'Decoration',
      price: '1500 - 4000 EUR',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1519227351222-6cc36b5c69ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Des compositions romantiques et un stylisme floral precis pour un rendu haut de gamme.',
      tag: 'Fleurs couture',
    },
    {
      id: 5,
      title: 'Groupe musical live',
      category: 'Musique',
      price: '2500 - 7000 EUR',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Une ambiance vivante, elegante et parfaitement calibree pour sublimer chaque moment.',
      tag: 'Ambiance live',
    },
    {
      id: 6,
      title: 'Transport de luxe',
      category: 'Transport',
      price: '1000 - 3000 EUR',
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Des arrivees memorables avec un service premium, ponctuel et sans stress.',
      tag: 'Arrivee royale',
    },
  ]

  const serviceTypes = [
    { value: 'photographer', label: 'Photographe', icon: Camera },
    { value: 'venue', label: 'Salle', icon: HomeIcon },
    { value: 'catering', label: 'Traiteur', icon: Utensils },
    { value: 'music', label: 'Musique', icon: Music },
    { value: 'decoration', label: 'Decoration', icon: Palette },
    { value: 'transport', label: 'Transport', icon: Car },
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Rechercher',
      description: 'Explorez des prestataires verifies avec une presentation claire, premium et inspiree.',
      icon: Search,
    },
    {
      step: 2,
      title: 'Comparer',
      description: 'Affinez vos choix par style, budget et qualite de service en quelques instants.',
      icon: Calendar,
    },
    {
      step: 3,
      title: 'Reserver',
      description: 'Construisez votre journee ideale avec fluidite et une vraie sensation d accompagnement.',
      icon: Heart,
    },
  ]

  const footerLinks = {
    services: ['Photographes', 'Salles', 'Traiteurs', 'Musiciens'],
    company: ['Qui sommes-nous', 'Temoignages', 'Contact', 'Blog'],
  }

  const heroHighlights = ['Prestataires verifies', 'Design premium', 'Experience moderne']
  const heroStats = [
    { value: '1.2k+', label: 'Prestataires de confiance' },
    { value: '4.9/5', label: 'Satisfaction moyenne' },
    { value: '48h', label: 'Premiers retours' },
  ]

  const handleInputChange = (e) => {
    setSearchData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search data:', searchData)
  }

  const sectionTitle = (eyebrow, title, description) => (
    <Stack spacing={2.5} sx={{ mb: 8, maxWidth: 760 }}>
      <Typography variant="overline" sx={{ color: theme.palette.secondary.dark, letterSpacing: '0.38em', fontWeight: 700 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '2.3rem', md: '3.3rem' }, color: '#5a3240' }}>
        {title}
      </Typography>
      <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.02rem' }}>
        {description}
      </Typography>
    </Stack>
  )

  return (
    <Box sx={{ overflowX: 'hidden', color: 'text.primary' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: alpha('#fffaf8', 0.7),
          backdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${alpha('#ffffff', 0.7)}`,
          color: 'text.primary',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 84, justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: alpha(theme.palette.primary.main, 0.12),
                  color: 'primary.main',
                  border: `1px solid ${alpha('#fff', 0.75)}`,
                }}
              >
                <Heart size={18} />
              </Avatar>
              <Box>
                <Typography variant="h5" sx={{ color: 'primary.main' }}>
                  3arraslii
                </Typography>
                <Typography variant="caption" sx={{ letterSpacing: '0.35em', color: 'text.secondary' }}>
                  WEDDING MARKETPLACE
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {['Home', 'Prestataires', 'Services', 'Login'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'text.secondary',
                    transition: 'all 0.3s ease',
                    '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                  }}
                >
                  {item}
                </Link>
              ))}
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  py: 1.4,
                  borderRadius: 999,
                  background: 'linear-gradient(135deg, #7c334a 0%, #c57b96 45%, #d7b066 100%)',
                  boxShadow: '0 18px 40px rgba(124, 51, 74, 0.22)',
                }}
              >
                Sign Up
              </Button>
            </Stack>

            <IconButton
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                border: `1px solid ${alpha(theme.palette.common.white, 0.65)}`,
                bgcolor: alpha('#ffffff', 0.65),
              }}
            >
              <Menu size={20} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 14, md: 16 },
          pb: 10,
        }}
      >
        <Box
          component={motion.div}
          style={{ y: heroY, scale: heroScale }}
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1519227351222-6cc36b5c69ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(110deg, rgba(36, 14, 22, 0.82) 0%, rgba(95, 52, 69, 0.55) 32%, rgba(255, 248, 241, 0.18) 68%, rgba(255, 248, 241, 0.88) 100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 16% 18%, rgba(255, 220, 148, 0.24), transparent 20%), radial-gradient(circle at 82% 24%, rgba(244, 143, 177, 0.24), transparent 20%), radial-gradient(circle at 50% 82%, rgba(255,255,255,0.18), transparent 26%)',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' },
              gap: { xs: 6, md: 10 },
              alignItems: 'end',
            }}
          >
            <Box component={motion.div} initial="hidden" animate={isLoaded ? 'visible' : 'hidden'}>
              <motion.div variants={fadeUp} custom={0.1}>
                <Chip
                  icon={<Sparkles size={14} />}
                  label="Une experience mariage moderne, luxueuse et fluide"
                  sx={{
                    mb: 3,
                    px: 1,
                    py: 2.8,
                    borderRadius: 999,
                    bgcolor: alpha('#ffffff', 0.12),
                    color: '#fff',
                    border: `1px solid ${alpha('#fff', 0.16)}`,
                    backdropFilter: 'blur(14px)',
                  }}
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={0.2}>
                <Typography
                  variant="h1"
                  sx={{
                    maxWidth: 760,
                    fontSize: { xs: '3rem', sm: '4.2rem', lg: '5.5rem' },
                    lineHeight: 0.95,
                    color: '#fff',
                    textShadow: '0 20px 45px rgba(0,0,0,0.25)',
                  }}
                >
                  Organisez votre mariage avec une allure editoriale et premium
                </Typography>
              </motion.div>

              <motion.div variants={fadeUp} custom={0.3}>
                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 700,
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    color: alpha('#fff', 0.84),
                    lineHeight: 1.95,
                  }}
                >
                  Trouvez les meilleurs prestataires, comparez les options avec elegance et construisez une experience
                  qui donne une vraie sensation de qualite des l ouverture.
                </Typography>
              </motion.div>

              <motion.div variants={fadeUp} custom={0.4}>
                <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" sx={{ mt: 4 }}>
                  {heroHighlights.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        bgcolor: alpha('#fff', 0.12),
                        color: '#fff',
                        border: `1px solid ${alpha('#fff', 0.16)}`,
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  ))}
                </Stack>
              </motion.div>

              <motion.div variants={fadeUp} custom={0.5}>
                <Box
                  sx={{
                    mt: 5,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
                    gap: 2,
                    maxWidth: 760,
                  }}
                >
                  {heroStats.map((stat) => (
                    <Paper
                      key={stat.label}
                      elevation={0}
                      sx={{
                        p: 2.75,
                        borderRadius: 4,
                        bgcolor: alpha('#fff', 0.12),
                        color: '#fff',
                        border: `1px solid ${alpha('#fff', 0.12)}`,
                        backdropFilter: 'blur(14px)',
                      }}
                    >
                      <Typography sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, fontWeight: 700 }}>
                        {stat.value}
                      </Typography>
                      <Typography sx={{ mt: 0.8, color: alpha('#fff', 0.72), lineHeight: 1.7 }}>
                        {stat.label}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -24,
                    borderRadius: 8,
                    background:
                      'radial-gradient(circle at top, rgba(255, 215, 0, 0.22), transparent 42%), radial-gradient(circle at bottom, rgba(244, 143, 177, 0.28), transparent 52%)',
                    filter: 'blur(20px)',
                  }}
                />
                <Paper
                  component="form"
                  onSubmit={handleSearch}
                  elevation={0}
                  sx={{
                    position: 'relative',
                    p: { xs: 3, md: 4 },
                    borderRadius: 8,
                    border: `1px solid ${alpha('#fff', 0.48)}`,
                    backgroundColor: alpha('#fffdfb', 0.58),
                    backdropFilter: 'blur(24px)',
                    boxShadow: '0 32px 80px rgba(73, 35, 47, 0.24)',
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} sx={{ mb: 4 }}>
                    <Box>
                      <Typography variant="overline" sx={{ letterSpacing: '0.34em', color: 'secondary.dark', fontWeight: 700 }}>
                        Recherche inspiree
                      </Typography>
                      <Typography variant="h3" sx={{ mt: 1, color: '#6b3d4c', fontSize: { xs: '2rem', md: '2.3rem' } }}>
                        Composez votre selection ideale
                      </Typography>
                    </Box>
                    <Chip
                      label="Selection soignee"
                      sx={{
                        display: { xs: 'none', sm: 'inline-flex' },
                        bgcolor: alpha('#fff', 0.72),
                        color: 'text.secondary',
                        border: `1px solid ${alpha('#dfc4ab', 0.7)}`,
                      }}
                    />
                  </Stack>

                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
                    <TextField
                      name="city"
                      value={searchData.city}
                      onChange={handleInputChange}
                      label="Ville"
                      placeholder="Paris, Lyon, Nice..."
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MapPin size={18} />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    />
                    <TextField
                      name="budget"
                      value={searchData.budget}
                      onChange={handleInputChange}
                      label="Budget"
                      placeholder="4000 EUR - 12000 EUR"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DollarSign size={18} />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    />
                    <TextField
                      select
                      name="serviceType"
                      value={searchData.serviceType}
                      onChange={handleInputChange}
                      label="Service"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search size={18} />
                          </InputAdornment>
                        ),
                      }}
                      sx={fieldSx}
                    >
                      <MenuItem value="">Type de service</MenuItem>
                      {serviceTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                          {type.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    sx={{ mt: 3 }}
                  >
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                      {serviceTypes.slice(0, 4).map((type) => {
                        const Icon = type.icon
                        return (
                          <Chip
                            key={type.value}
                            icon={<Icon size={14} />}
                            label={type.label}
                            sx={{
                              bgcolor: alpha('#fff', 0.72),
                              border: `1px solid ${alpha('#fff', 0.9)}`,
                              color: 'text.secondary',
                            }}
                          />
                        )
                      })}
                    </Stack>

                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<ChevronRight size={18} />}
                      startIcon={<Search size={18} />}
                      sx={{
                        px: 4,
                        py: 1.6,
                        borderRadius: 999,
                        background: 'linear-gradient(135deg, #7c334a 0%, #c57b96 45%, #d7b066 100%)',
                        boxShadow: '0 24px 45px rgba(124, 51, 74, 0.28)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 28px 55px rgba(124, 51, 74, 0.34)',
                        },
                      }}
                    >
                      Rechercher
                    </Button>
                  </Stack>
                </Paper>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      <AnimatedSection>
        <Container maxWidth="xl" sx={{ py: { xs: 10, md: 14 } }}>
          {sectionTitle(
            'PRESTATAIRES A LA UNE',
            'Une selection pensee pour un mariage chic, moderne et memorable',
            'Les cartes ont ete redesignées en Material UI avec une lecture plus premium, plus de profondeur et des interactions plus professionnelles.'
          )}

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }, gap: 3.5 }}>
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -10 }}
              >
                <Card sx={luxuryCardSx}>
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component={motion.img}
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.55 }}
                      image={service.image}
                      alt={service.title}
                      sx={{ height: 320 }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(38,12,19,0.06) 0%, rgba(38,12,19,0.62) 100%)',
                      }}
                    />
                    <Chip
                      label={service.tag}
                      sx={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        color: '#fff',
                        bgcolor: alpha('#fff', 0.14),
                        border: `1px solid ${alpha('#fff', 0.24)}`,
                        backdropFilter: 'blur(12px)',
                      }}
                    />
                    <Chip
                      label={service.price}
                      sx={{
                        position: 'absolute',
                        right: 20,
                        bottom: 20,
                        color: '#fff',
                        bgcolor: alpha('#fff', 0.12),
                        border: `1px solid ${alpha('#fff', 0.24)}`,
                        backdropFilter: 'blur(12px)',
                      }}
                    />
                    <Box sx={{ position: 'absolute', left: 20, bottom: 20, right: 130 }}>
                      <Typography variant="overline" sx={{ color: alpha('#fff', 0.72), letterSpacing: '0.24em' }}>
                        {service.category}
                      </Typography>
                      <Typography variant="h5" sx={{ color: '#fff', mt: 0.6 }}>
                        {service.title}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3.25 }}>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                      {service.description}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 3 }}>
                      <Chip
                        icon={<Star size={14} fill="currentColor" />}
                        label={`${service.rating} Excellent`}
                        sx={{
                          bgcolor: '#fff5ee',
                          color: '#7a5a46',
                          '.MuiChip-icon': { color: '#d6ab5a' },
                        }}
                      />
                      <Button endIcon={<ChevronRight size={16} />} sx={{ color: 'primary.main', fontWeight: 700 }}>
                        Voir plus
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Box sx={{ background: 'linear-gradient(180deg, #fff7f3 0%, #fff3ea 100%)' }}>
          <Container maxWidth="xl" sx={{ py: { xs: 10, md: 14 } }}>
            <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 8 }}>
              <Typography variant="overline" sx={{ color: 'secondary.dark', letterSpacing: '0.38em', fontWeight: 700 }}>
                COMMENT CA MARCHE
              </Typography>
              <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: '2.3rem', md: '3.2rem' }, color: '#5a3240' }}>
                Trois etapes pour une organisation plus sereine
              </Typography>
              <Typography sx={{ mt: 3, color: 'text.secondary', lineHeight: 1.9 }}>
                Une narration plus visuelle, des cartes MUI plus structurees et des interactions douces pour un rendu plus professionnel.
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3.5 }}>
              {howItWorks.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    viewport={{ once: true, margin: '-80px' }}
                    whileHover={{ y: -8 }}
                  >
                    <Paper elevation={0} sx={stepCardSx}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Avatar
                          sx={{
                            width: 64,
                            height: 64,
                            bgcolor: 'primary.main',
                            boxShadow: '0 18px 35px rgba(124, 51, 74, 0.24)',
                          }}
                        >
                          <StepIcon size={26} />
                        </Avatar>
                        <Chip label={`0${step.step}`} sx={{ bgcolor: '#fff3f5', color: 'primary.main', fontWeight: 700 }} />
                      </Stack>
                      <Typography variant="h5" sx={{ mt: 4, color: '#5a3240' }}>
                        {step.title}
                      </Typography>
                      <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.9 }}>
                        {step.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                )
              })}
            </Box>
          </Container>
        </Box>
      </AnimatedSection>

      <AnimatedSection>
        <Box
          sx={{
            position: 'relative',
            py: { xs: 10, md: 14 },
            background: 'linear-gradient(135deg, #6f3f4f 0%, #a25474 38%, #e0bc6f 100%)',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 24%), radial-gradient(circle at 80% 78%, rgba(255,255,255,0.14), transparent 22%)',
            }}
          />
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <Paper
              elevation={0}
              sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 5, md: 7 },
                textAlign: 'center',
                borderRadius: 8,
                bgcolor: alpha('#fff', 0.1),
                border: `1px solid ${alpha('#fff', 0.18)}`,
                backdropFilter: 'blur(16px)',
                boxShadow: '0 34px 90px rgba(63, 23, 35, 0.24)',
              }}
            >
              <Typography variant="overline" sx={{ color: alpha('#fff', 0.74), letterSpacing: '0.38em', fontWeight: 700 }}>
                VOTRE PROCHAIN CHAPITRE
              </Typography>
              <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: '2.4rem', md: '4rem' }, color: '#fff' }}>
                Donnez a votre projet une experience vraiment premium
              </Typography>
              <Typography sx={{ mt: 3, color: alpha('#fff', 0.84), lineHeight: 1.9, fontSize: '1.05rem' }}>
                Une landing page plus moderne, plus luxueuse et plus professionnelle pour inspirer confiance immediatement.
              </Typography>
              <Button
                variant="contained"
                startIcon={<Sparkles size={18} />}
                endIcon={<ChevronRight size={18} />}
                sx={{
                  mt: 4,
                  px: 4,
                  py: 1.6,
                  borderRadius: 999,
                  bgcolor: '#fff',
                  color: 'primary.main',
                  boxShadow: '0 20px 50px rgba(41, 16, 24, 0.2)',
                  '&:hover': {
                    bgcolor: '#fff',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Commencer maintenant
              </Button>
            </Paper>
          </Container>
        </Box>
      </AnimatedSection>

      <Box component="footer" sx={{ backgroundColor: '#20171b', color: '#fff', py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.25fr 1fr 1fr 1fr' }, gap: 5 }}>
            <Box>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar sx={{ bgcolor: alpha('#fff', 0.08), border: `1px solid ${alpha('#fff', 0.08)}` }}>
                  <Heart size={18} />
                </Avatar>
                <Typography variant="h4" sx={{ color: '#fff' }}>
                  3arraslii
                </Typography>
              </Stack>
              <Typography sx={{ mt: 3, maxWidth: 320, color: alpha('#fff', 0.6), lineHeight: 1.9 }}>
                Votre partenaire de confiance pour imaginer un mariage elegant, moderne et soigne dans les moindres details.
              </Typography>
            </Box>

            <FooterColumn title="Services" items={footerLinks.services} />
            <FooterColumn title="A propos" items={footerLinks.company} />

            <Box>
              <Typography variant="overline" sx={{ color: '#e6c27b', letterSpacing: '0.32em', fontWeight: 700 }}>
                CONTACT
              </Typography>
              <Stack spacing={2.5} sx={{ mt: 3, color: alpha('#fff', 0.68) }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar sx={footerAvatarSx}>
                    <Phone size={16} />
                  </Avatar>
                  <Typography>+33 1 23 45 67 89</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar sx={footerAvatarSx}>
                    <Mail size={16} />
                  </Avatar>
                  <Typography>contact@3arraslii.fr</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Twitter, label: 'Twitter' },
                  ].map((social) => {
                    const Icon = social.icon
                    return (
                      <IconButton
                        key={social.label}
                        aria-label={social.label}
                        sx={{
                          width: 48,
                          height: 48,
                          color: alpha('#fff', 0.72),
                          bgcolor: alpha('#fff', 0.06),
                          border: `1px solid ${alpha('#fff', 0.08)}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: alpha('#fff', 0.12),
                            color: '#fff',
                            transform: 'translateY(-3px)',
                          },
                        }}
                      >
                        <Icon size={18} />
                      </IconButton>
                    )
                  })}
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box sx={{ mt: 8, pt: 4, borderTop: `1px solid ${alpha('#fff', 0.08)}`, textAlign: 'center' }}>
            <Typography sx={{ color: alpha('#fff', 0.46) }}>
              &copy; 2024 3arraslii. Tous droits reserves.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

const FooterColumn = ({ title, items }) => (
  <Box>
    <Typography variant="overline" sx={{ color: '#e6c27b', letterSpacing: '0.32em', fontWeight: 700 }}>
      {title}
    </Typography>
    <Stack spacing={2} sx={{ mt: 3 }}>
      {items.map((item) => (
        <Link
          key={item}
          href="#"
          underline="none"
          sx={{
            color: alpha('#fff', 0.62),
            transition: 'all 0.3s ease',
            '&:hover': { color: '#fff', transform: 'translateX(4px)' },
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <ChevronRight size={16} />
            <span>{item}</span>
          </Stack>
        </Link>
      ))}
    </Stack>
  </Box>
)

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 4,
    backgroundColor: alpha('#ffffff', 0.72),
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.86), 0 14px 30px rgba(164, 115, 134, 0.08)',
    transition: 'all 0.3s ease',
    '& fieldset': {
      borderColor: alpha('#ffffff', 0.9),
    },
    '&:hover fieldset': {
      borderColor: alpha('#c57b96', 0.6),
    },
    '&.Mui-focused': {
      backgroundColor: '#fff',
      boxShadow: '0 0 0 4px rgba(197, 123, 150, 0.14), 0 22px 45px rgba(164, 115, 134, 0.14)',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#8d4259',
  },
}

const luxuryCardSx = {
  borderRadius: 7,
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.8)',
  backgroundColor: alpha('#fffefc', 0.88),
  boxShadow: '0 24px 70px rgba(119, 72, 89, 0.12)',
  transition: 'box-shadow 0.4s ease, transform 0.4s ease',
  '&:hover': {
    boxShadow: '0 28px 90px rgba(119, 72, 89, 0.18)',
  },
}

const stepCardSx = {
  p: 4,
  height: '100%',
  borderRadius: 7,
  border: '1px solid rgba(255,255,255,0.82)',
  backgroundColor: alpha('#fffefc', 0.88),
  boxShadow: '0 24px 60px rgba(146, 104, 117, 0.12)',
}

const footerAvatarSx = {
  width: 42,
  height: 42,
  bgcolor: alpha('#fff', 0.08),
  color: '#f5d2db',
  border: `1px solid ${alpha('#fff', 0.08)}`,
}

export default Home
