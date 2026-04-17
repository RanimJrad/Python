import React, { useEffect, useState } from 'react'
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

const Home = () => {
  const [searchData, setSearchData] = useState({
    city: '',
    budget: '',
    serviceType: '',
  })
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollY } = useScroll()
  const heroYRaw = useTransform(scrollY, [0, 500], [0, -120])
  const heroScaleRaw = useTransform(scrollY, [0, 500], [1, 1.08])
  const heroOpacityRaw = useTransform(scrollY, [0, 320], [1, 0.45])
  const heroY = useSpring(heroYRaw, { stiffness: 90, damping: 22, mass: 0.6 })
  const heroScale = useSpring(heroScaleRaw, { stiffness: 80, damping: 18, mass: 0.8 })
  const heroOpacity = useSpring(heroOpacityRaw, { stiffness: 100, damping: 24 })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredServices = [
    {
      id: 1,
      title: 'Photographie de mariage premium',
      category: 'photographer',
      price: '3000-8000 EUR',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Des images lumineuses et editoriales pour raconter votre journee avec elegance.',
      tag: 'Edition luxe',
    },
    {
      id: 2,
      title: 'Salle de reception luxueuse',
      category: 'venue',
      price: '5000-15000 EUR',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1469371670267-49b346df2727?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Un cadre raffine pour accueillir vos invites dans une ambiance inoubliable.',
      tag: 'Lieu iconique',
    },
    {
      id: 3,
      title: 'Service traiteur gourmet',
      category: 'catering',
      price: '2000-6000 EUR',
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1556659794-9c3d3f8b6580?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Une experience gastronomique sur mesure pour une reception a votre image.',
      tag: 'Saveurs signature',
    },
    {
      id: 4,
      title: 'Decoration florale elegante',
      category: 'decoration',
      price: '1500-4000 EUR',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1519227351222-6cc36b5c69ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Des compositions romantiques et une direction artistique pleine de douceur.',
      tag: 'Fleurs couture',
    },
    {
      id: 5,
      title: 'Groupe musical live',
      category: 'music',
      price: '2500-7000 EUR',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Une ambiance vibrante avec une programmation musicale chic et sensible.',
      tag: 'Ambiance live',
    },
    {
      id: 6,
      title: 'Transport de luxe',
      category: 'transport',
      price: '1000-3000 EUR',
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Des arrives spectaculaires avec un service haut de gamme et sans stress.',
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
      description: 'Explorez une selection de prestataires verifies et filtres selon vos envies.',
      icon: Search,
    },
    {
      step: 2,
      title: 'Comparer',
      description: 'Affinez votre choix avec les prix, les avis et une presentation claire.',
      icon: Calendar,
    },
    {
      step: 3,
      title: 'Reserver',
      description: 'Composez votre journee ideale avec serenite et une experience fluide.',
      icon: Heart,
    },
  ]

  const footerLinks = {
    services: ['Photographes', 'Salles', 'Traiteurs', 'Musiciens'],
    company: ['Qui sommes-nous', 'Temoignages', 'Contact', 'Blog'],
  }

  const heroHighlights = [
    'Prestataires verifies',
    'Experience premium',
    'Recherche rapide et elegante',
  ]

  const heroStats = [
    { value: '1.2k+', label: 'Prestataires de confiance' },
    { value: '4.9/5', label: 'Note moyenne des couples' },
    { value: '48h', label: 'Pour recevoir vos premiers retours' },
  ]

  const handleInputChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search data:', searchData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(244,143,177,0.18),_transparent_30%),linear-gradient(180deg,_#fffaf7_0%,_#fff7f1_45%,_#fffdfb_100%)] text-slate-800">
      <motion.nav
        className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/55 backdrop-blur-2xl"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white to-wedding-cream shadow-[0_10px_30px_rgba(157,92,112,0.16)] ring-1 ring-white/70">
              <Heart className="h-5 w-5 text-wedding-rose" />
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-[#8d4259] via-wedding-rose to-[#d7a62f] bg-clip-text font-elegant text-3xl font-bold text-transparent">
                3arraslii
              </h1>
              <p className="text-xs uppercase tracking-[0.35em] text-[#9b7a82]">Wedding marketplace</p>
            </div>
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            {['Home', 'Prestataires', 'Services', 'Login'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="group relative text-sm font-medium uppercase tracking-[0.24em] text-[#6d5960] transition-colors duration-300 hover:text-[#8d4259]"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-wedding-rose to-wedding-gold transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.button
              className="rounded-full border border-[#ffffffc7] bg-gradient-to-r from-[#8d4259] via-wedding-rose to-[#f2c768] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(157,92,112,0.28)] transition-all duration-300"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </motion.button>
          </div>

          <motion.button
            className="rounded-full border border-white/60 bg-white/70 p-3 text-[#6d5960] shadow-lg md:hidden"
            whileTap={{ scale: 0.94 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img
            src="https://images.unsplash.com/photo-1519227351222-6cc36b5c69ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Wedding background"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(42,16,23,0.7)_0%,rgba(91,43,58,0.42)_30%,rgba(255,248,225,0.18)_65%,rgba(255,248,225,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(248,187,208,0.22),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.18),transparent_30%)]" />

        <motion.div
          className="absolute left-[8%] top-28 hidden h-64 w-64 rounded-full bg-white/18 blur-3xl lg:block"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] hidden h-72 w-72 rounded-full bg-[#fff1cf]/30 blur-3xl lg:block"
          animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div
            className="max-w-3xl"
            style={{ opacity: heroOpacity }}
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm text-white/90 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-wedding-gold" />
              Une experience mariage moderne, fluide et haut de gamme
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl font-elegant text-5xl font-bold leading-[0.98] text-white drop-shadow-[0_16px_40px_rgba(0,0,0,0.25)] sm:text-6xl lg:text-7xl"
            >
              Organisez votre mariage avec une allure
              <span className="block bg-gradient-to-r from-[#fff2cf] via-[#f8d989] to-white bg-clip-text text-transparent">
                editoriale et premium
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl"
            >
              Trouvez les meilleurs prestataires, filtrez vos envies et composez une celebration elegante
              avec une interface pensee pour inspirer confiance des les premieres secondes.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm text-white/90 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-white/14 bg-white/12 px-5 py-5 backdrop-blur-lg shadow-[0_18px_40px_rgba(34,16,23,0.14)]"
                >
                  <p className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative self-end lg:pb-10"
          >
            <motion.div
              className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.22),transparent_45%),radial-gradient(circle_at_bottom,rgba(244,143,177,0.28),transparent_55%)] blur-2xl"
              animate={{ opacity: [0.65, 1, 0.75] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.form
              onSubmit={handleSearch}
              className="relative overflow-hidden rounded-[32px] border border-white/45 bg-white/58 p-6 shadow-[0_30px_80px_rgba(73,35,47,0.22)] backdrop-blur-2xl sm:p-8"
              whileHover={{ y: -4, boxShadow: '0 34px 90px rgba(73,35,47,0.28)' }}
              transition={{ duration: 0.35 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a98a63]">
                    Recherche inspiree
                  </p>
                  <h2 className="mt-2 font-elegant text-3xl font-semibold text-[#6f3f4f]">
                    Composez votre selection ideale
                  </h2>
                </div>
                <div className="hidden rounded-full border border-[#f0d9c3] bg-white/70 px-4 py-2 text-sm font-medium text-[#7b5e66] sm:flex">
                  Selection soignee
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <label className="group relative">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-[#9d7e86]">
                      Ville
                    </span>
                    <MapPin className="pointer-events-none absolute left-4 top-[3.35rem] h-5 w-5 text-[#b48795] transition-colors duration-300 group-focus-within:text-[#8d4259]" />
                    <input
                      type="text"
                      name="city"
                      value={searchData.city}
                      onChange={handleInputChange}
                      placeholder="Paris, Lyon, Nice..."
                      className="w-full rounded-[24px] border border-white/65 bg-white/70 px-12 py-4 text-[15px] text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_30px_rgba(164,115,134,0.08)] outline-none transition-all duration-300 placeholder:text-[#b59aa2] focus:border-white focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,143,177,0.16),0_22px_45px_rgba(164,115,134,0.16)]"
                    />
                  </label>

                  <label className="group relative">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-[#9d7e86]">
                      Budget
                    </span>
                    <DollarSign className="pointer-events-none absolute left-4 top-[3.35rem] h-5 w-5 text-[#b48795] transition-colors duration-300 group-focus-within:text-[#8d4259]" />
                    <input
                      type="text"
                      name="budget"
                      value={searchData.budget}
                      onChange={handleInputChange}
                      placeholder="4000 EUR - 12000 EUR"
                      className="w-full rounded-[24px] border border-white/65 bg-white/70 px-12 py-4 text-[15px] text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_30px_rgba(164,115,134,0.08)] outline-none transition-all duration-300 placeholder:text-[#b59aa2] focus:border-white focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,143,177,0.16),0_22px_45px_rgba(164,115,134,0.16)]"
                    />
                  </label>

                  <label className="group relative">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-[#9d7e86]">
                      Service
                    </span>
                    <Search className="pointer-events-none absolute left-4 top-[3.35rem] h-5 w-5 text-[#b48795] transition-colors duration-300 group-focus-within:text-[#8d4259]" />
                    <select
                      name="serviceType"
                      value={searchData.serviceType}
                      onChange={handleInputChange}
                      className="w-full cursor-pointer appearance-none rounded-[24px] border border-white/65 bg-white/70 px-12 py-4 text-[15px] text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_30px_rgba(164,115,134,0.08)] outline-none transition-all duration-300 focus:border-white focus:bg-white focus:shadow-[0_0_0_4px_rgba(244,143,177,0.16),0_22px_45px_rgba(164,115,134,0.16)]"
                    >
                      <option value="">Type de service</option>
                      {serviceTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-2">
                    {serviceTypes.slice(0, 4).map((type) => {
                      const Icon = type.icon
                      return (
                        <span
                          key={type.value}
                          className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/60 px-3 py-2 text-xs font-medium text-[#7a5f67] shadow-[0_8px_20px_rgba(157,92,112,0.08)]"
                        >
                          <Icon className="h-3.5 w-3.5 text-wedding-rose" />
                          {type.label}
                        </span>
                      )
                    })}
                  </div>

                  <motion.button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#8d4259_0%,#f48fb1_45%,#f1c65e_100%)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_22px_45px_rgba(157,92,112,0.34)] transition-all duration-300"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
                    Rechercher
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,143,177,0.12),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#b58e56]">
                Prestataires a la une
              </p>
              <h2 className="font-elegant text-4xl font-semibold text-[#5e3846] sm:text-5xl">
                Une selection pensee pour un mariage
                <span className="bg-gradient-to-r from-[#8d4259] to-[#d4a73f] bg-clip-text text-transparent">
                  {' '}
                  chic, moderne et memorablement doux
                </span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#7f6b72]">
              Chaque carte a ete retravaillee pour offrir plus de profondeur, de fluidite et une lecture plus haut de gamme.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {featuredServices.map((service) => (
              <motion.article
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/88 shadow-[0_24px_70px_rgba(119,72,89,0.12)] transition-all duration-500 hover:shadow-[0_28px_90px_rgba(119,72,89,0.18)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.02)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,12,19,0.05)_0%,rgba(38,12,19,0.58)_100%)]" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {service.tag}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-white/70">{service.category}</p>
                      <h3 className="mt-2 max-w-[16rem] text-2xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <div className="rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-lg">
                      {service.price}
                    </div>
                  </div>
                </div>

                <div className="relative p-7">
                  <p className="text-sm leading-7 text-[#7d6770]">{service.description}</p>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-3 rounded-full bg-[#fff6f2] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                      <div className="flex items-center gap-1 text-[#d7a62f]">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-semibold text-[#6f5560]">{service.rating}</span>
                      </div>
                      <span className="h-1 w-1 rounded-full bg-[#d7a62f]" />
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#9f7f66]">Excellent</span>
                    </div>

                    <motion.button
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#8d4259] transition-colors duration-300 hover:text-[#c9992d]"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Voir plus
                      <ChevronRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff7f2_0%,#fff4ea_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(244,143,177,0.15),transparent_28%),radial-gradient(circle_at_right,rgba(255,215,0,0.1),transparent_22%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#b58e56]">Comment ca marche</p>
            <h2 className="font-elegant text-4xl font-semibold text-[#5e3846] sm:text-5xl">
              Trois etapes pour une organisation plus fluide et beaucoup plus sereine
            </h2>
            <p className="mt-5 text-base leading-7 text-[#7f6b72]">
              Une narration plus visuelle, des animations plus douces et une hierarchie plus claire pour guider naturellement l utilisateur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.map((step, index) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 42 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: '-80px' }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/85 p-8 shadow-[0_24px_60px_rgba(146,104,117,0.12)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,143,177,0.12),transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[linear-gradient(145deg,#8d4259_0%,#f48fb1_90%)] shadow-[0_18px_30px_rgba(157,92,112,0.3)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
                        <StepIcon className="h-7 w-7 text-white" />
                      </div>
                      <div className="inline-flex h-12 min-w-12 items-center justify-center rounded-full border border-[#f4d8dd] bg-[#fff6f7] px-4 text-sm font-semibold text-[#8d4259] shadow-inner">
                        0{step.step}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-[#5e3846] transition-colors duration-300 group-hover:text-[#8d4259]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#7f6b72]">{step.description}</p>

                    <div className="mt-8 h-px w-full bg-gradient-to-r from-wedding-rose/35 via-wedding-gold/35 to-transparent" />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#b58e56]">
                      Experience guidee
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#6f3f4f_0%,#a25474_35%,#f0c861_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.16),transparent_22%)]" />

        <motion.div
          className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-white/12 blur-3xl"
          animate={{ y: [0, -26, 0], x: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#fff2cc]/20 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true, margin: '-100px' }}
            className="rounded-[36px] border border-white/20 bg-white/10 px-6 py-12 backdrop-blur-md shadow-[0_34px_90px_rgba(63,23,35,0.25)] sm:px-12"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-white/75">Votre prochain chapitre</p>
            <h2 className="font-elegant text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Donnez a votre projet de mariage une experience qui
              <span className="block text-[#fff0c4]">se ressent comme premium des l ouverture</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Rejoignez une selection de couples qui veulent une plateforme plus elegante, plus fluide et plus inspirante pour construire leur grand jour.
            </p>

            <motion.button
              className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-white/50 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#8d4259] shadow-[0_22px_45px_rgba(49,18,27,0.2)] transition-all duration-300"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Commencer maintenant
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>

      <footer className="relative overflow-hidden bg-[#20171b] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,143,177,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.09),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                  <Heart className="h-5 w-5 text-wedding-pink" />
                </div>
                <h3 className="bg-gradient-to-r from-white via-[#ffdba4] to-wedding-pink bg-clip-text font-elegant text-3xl font-bold text-transparent">
                  3arraslii
                </h3>
              </div>
              <p className="mt-6 max-w-xs leading-7 text-white/62">
                Votre partenaire de confiance pour imaginer un mariage elegant, fluide et soigne dans les moindres details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#f2c768]">Services</h4>
              <ul className="mt-6 space-y-4 text-white/62">
                {footerLinks.services.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                    >
                      <ChevronRight className="h-4 w-4 text-wedding-pink transition-transform duration-300 group-hover:translate-x-1" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#f2c768]">A propos</h4>
              <ul className="mt-6 space-y-4 text-white/62">
                {footerLinks.company.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                    >
                      <ChevronRight className="h-4 w-4 text-wedding-pink transition-transform duration-300 group-hover:translate-x-1" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#f2c768]">Contact</h4>
              <div className="mt-6 space-y-4 text-white/68">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                    <Phone className="h-4 w-4 text-wedding-pink" />
                  </div>
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                    <Mail className="h-4 w-4 text-wedding-pink" />
                  </div>
                  <span>contact@3arraslii.fr</span>
                </div>
                <div className="flex gap-3 pt-4">
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Twitter, label: 'Twitter' },
                  ].map((social) => {
                    const SocialIcon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/72 transition-all duration-300 hover:border-white/30 hover:bg-white/14 hover:text-white"
                        whileHover={{ y: -3, scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <SocialIcon className="h-5 w-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/48"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 3arraslii. Tous droits reserves.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default Home
