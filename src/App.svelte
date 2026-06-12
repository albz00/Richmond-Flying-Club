<script>
  import { onMount } from 'svelte'
  import { reveal } from './lib/reveal.js'
  import {
    clubLogo,
    siteImages,
    heroSlides,
    highlightPhotos,
    aboutPhotos,
    galleryPhotos,
    galleryEventPhotos,
    joinPhoto,
    fieldPhotos,
  } from './lib/images.js'

  let headerScrolled = $state(false)
  let heroImageIndex = $state(0)

  onMount(() => {
    const onScroll = () => { headerScrolled = window.scrollY > 60 }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let heroGalleryInterval

    if (!prefersReducedMotion && heroSlides.length > 1) {
      heroGalleryInterval = window.setInterval(() => {
        heroImageIndex = (heroImageIndex + 1) % heroSlides.length
      }, 5500)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (heroGalleryInterval) {
        window.clearInterval(heroGalleryInterval)
      }
    }
  })

  const logo = clubLogo.src
  const amaUrl = 'https://www.modelaircraft.org'
  const applicationUrl = 'https://www.richmondarearc.com/join-rarc.html'

  const navLinks = [
    { label: 'What We Fly', href: '#fly' },
    { label: 'About', href: '#about' },
    { label: 'Flying Field', href: '#field' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Join', href: '#join' },
    { label: 'Contact', href: '#contact' },
  ]

  const meetingNote =
    'Club meetings are held at the flying field on the second Sunday of each month, around 2 PM, weather permitting.'

  const highlights = [
    {
      title: 'What We Fly',
      text: 'Whatever your passion in radio control model aircraft, they\u2019re all welcome at our field. You\u2019ll see beautiful scale airplanes, turbine powered jets, nitro, gas, and electric helicopters, even drones and tiny micro aircraft. Come out to fly or just come out to watch.',
      linkLabel: 'See the RARC photo gallery',
      linkHref: '#gallery',
    },
    {
      title: 'Why You Should Join Us',
      text: 'RARC has one of the best RC model aircraft flying fields in Central Virginia. RARC is small so you\u2019ll have plenty of flying time when you\u2019re at the field. RARC is heli-friendly, and the airplane guys and heli guys get along really well. RARC members are regular guys, always willing to help.',
      linkLabel: 'Join RARC',
      linkHref: '#join',
    },
    {
      title: 'Our Flying Field',
      text: 'The RARC flying field is one of the best RC flying sites in Central Virginia. It\u2019s located near Shirley Plantation in Charles City County, just 30 minutes southeast of downtown Richmond, VA. Visitors and guest pilots are always welcome.',
      linkLabel: 'Maps and directions',
      linkHref: '#field',
    },
  ]

  const clubFacts = [
    {
      title: 'Founded in the mid-sixties',
      description:
        'Richmond Area Radio Control, Inc. has been flying for over half a century, with Amos Field in Oilville serving the club for more than 35 years before the move to Charles City.',
    },
    {
      title: 'AMA Charter Club #637',
      description:
        'RARC is chartered by the Academy of Model Aeronautics. All pilots fly under the AMA Safety Code.',
    },
    {
      title: 'Every kind of aircraft',
      description:
        'Members fly gasoline, glow, electric, and turbine powered fixed wing aircraft, as well as helicopters and drones.',
    },
    {
      title: 'Open membership',
      description:
        'Membership is open to anyone who flies or wants to learn to fly radio controlled model aircraft. You must be an AMA member to join RARC.',
    },
    {
      title: 'Learn from experienced pilots',
      description:
        'Newcomers are highly encouraged to join a club like RARC and learn from more experienced pilots, so you can take your model home in one piece.',
    },
  ]

  const directions = [
    'From Rt. 10, coming from Chester or Hopewell, turn onto Rt. 156 and cross the Benjamin Harrison Bridge.',
    'Look toward the left, the first dirt road on the left is the \u201CDirt Bike Boot Camp.\u201D Continue past it.',
    'There is a long white fence on the left. At the end of that fence, take the next dirt road, also on the left. It leads to our club and to Shirley Plantation.',
    'It\u2019s a very bouncy, dusty road, so drive slowly. Follow it until you see the RARC sign, then turn left.',
    'Keep to the right! Our flying field is on the left, and driving on it is frowned upon.',
    'If there is a chain across the road, no one is on the field. If it\u2019s open, continue to the covered picnic table area.',
  ]

  const galleryEvents = [
    {
      date: 'April 18, 2026',
      title: 'RARC Fly-In',
      text: 'A fantastic day, fantastic turnout! Thanks to everyone who was there for this great RARC event.',
    },
    {
      date: 'December 13, 2025',
      title: 'Christmas Party',
      text: 'The Christmas party at Luca\u2019s in Prince George turned out to be a super success. Thanks to Jess for coordinating the event and to everyone who provided the door prizes.',
    },
    {
      date: 'October 2025',
      title: 'Cloud Show',
      text: 'A great day with great cloud formations.',
    },
    {
      date: 'September 2025',
      title: 'Picture Perfect',
      text: 'Excellent photography courtesy of Bob Waldrop.',
    },
    {
      date: 'August 2025',
      title: 'A Wonderful Day',
      text: 'Simply a wonderful day to be flying!',
    },
    {
      date: 'Early June 2025',
      title: 'Fly-In',
      text: 'Rain was predicted, and gratefully, none developed!',
    },
    {
      date: 'June 1, 2024',
      title: 'Made to Order',
      text: 'Did someone order this day? It could not have been better!',
    },
    {
      date: 'April 27, 2024',
      title: 'Swap Meet & Fly-In',
      text: 'A complete success! Several newcomers attended, as did folks from other nearby flying clubs. Our thanks to everyone for making this a wonderful event.',
    },
    {
      date: 'March 31, 2024',
      title: 'Easter Sunday',
      text: 'A larger than expected turnout of pilots. 70\u00B0F with winds next to calm, perfect flying weather!',
    },
  ]

  const officers = [
    { role: 'President', name: 'Tony Goodman', phone: '804-304-1581' },
    { role: 'Vice President', name: 'Wirth Wills Jr. \u201CCookie\u201D', phone: '' },
    { role: 'Treasurer', name: 'Robert Klenke', phone: '804-901-2666' },
    { role: 'Field Marshall', name: 'Paul Shank', phone: '804-712-5949' },
    { role: 'Field Marshall', name: 'Craig Brown', phone: '804-895-8394' },
    { role: 'Safety Officer', name: 'Mike Williams', phone: '904-301-8958' },
    { role: 'Secretary', name: 'Jess Robertson', phone: '804-720-6468' },
    { role: 'Web Editor', name: 'Roy Ehmke', phone: '' },
  ]

  const phoneHref = (phone) => `tel:+1${phone.replaceAll('-', '')}`

  const aircraftInterests = [
    'Electric Airplanes',
    'Scale Airplanes',
    '3D Airplanes',
    'Giant Scale Airplanes',
    'Jet Airplanes (turbine)',
    'Electric Helicopters',
    'Nitro Helicopters',
    'Gas Helicopters',
    'Multi-rotors / Quads',
  ]

</script>

<div class="min-h-screen w-full max-w-full overflow-x-clip bg-white font-sans text-stone-900">

  <!-- ─── Header ─────────────────────────────────────────────────────────── -->
  <header
    class="fixed top-0 z-50 w-full transition-all duration-500
      {headerScrolled
        ? 'bg-white/95 shadow-sm backdrop-blur-md border-b border-stone-200'
        : ''}"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-6">
      <a href="#top" class="group flex min-w-0 items-center gap-2.5 transition-transform duration-300 hover:-translate-y-0.5 sm:gap-4">
        <img
          src={logo}
          alt="Richmond Area RC Flying Club logo"
          class="logo-mark h-10 w-auto shrink-0 transition-all duration-300 group-hover:scale-[1.03] sm:h-12 {headerScrolled ? '' : 'logo-mark--light'}"
        />
        <span
          class="min-w-0 text-sm font-extrabold leading-tight tracking-tight uppercase transition-colors sm:text-base md:text-lg
            {headerScrolled ? 'text-stone-900' : 'text-white'}"
        >
          Richmond Area
          <span class="{headerScrolled ? 'text-club-red-600' : 'text-club-red-400'}">RC Flying Club</span>
        </span>
      </a>

      <nav class="hidden items-center gap-8 lg:flex">
        {#each navLinks as link}
          <a
            href={link.href}
            class="nav-link text-base font-semibold transition-all duration-300 hover:-translate-y-0.5
              {headerScrolled
                ? 'text-stone-600 hover:text-navy-600'
                : 'text-white/85 hover:text-white'}"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <div class="flex shrink-0 items-center gap-2 sm:gap-2.5 md:gap-3">
        <a
          href={amaUrl}
          target="_blank"
          rel="noreferrer"
          class="btn-lift hidden h-12 items-center rounded-full px-5 text-sm font-semibold shadow-lg transition-all md:inline-flex
            {headerScrolled
              ? 'border border-stone-300/70 bg-white text-stone-800 hover:border-navy-500/70 hover:text-navy-600 hover:shadow-xl'
              : 'border border-white/22 bg-white/10 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/20 hover:shadow-xl'}"
        >
          AMA
        </a>
        <a
          href="#join"
          class="btn-lift inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold shadow-xl transition-all sm:h-12 sm:px-5
            {headerScrolled
              ? 'bg-club-red-700 text-white hover:bg-club-red-800 hover:shadow-2xl hover:-translate-y-0.5'
              : 'border border-white/22 bg-white/15 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/25 hover:shadow-2xl hover:-translate-y-0.5'}"
        >
          Join RARC
        </a>
      </div>
    </div>
  </header>

  <main id="top" class="overflow-x-clip">

    <!-- ─── Hero: action shot over the flying field ──────────────────────── -->
    <section class="relative flex min-h-[max(100svh,44rem)] items-end overflow-hidden lg:min-h-[max(100svh,48rem)]">
      {#each heroSlides as slide, i}
        <img
          src={slide.src}
          alt=""
          aria-hidden="true"
          class="absolute inset-0 h-full w-full object-cover object-[center_35%] transition-opacity duration-[1500ms] ease-in-out {i === heroImageIndex ? 'opacity-100' : 'opacity-0'}"
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchpriority={i === 0 ? 'high' : 'auto'}
        />
      {/each}
      <div class="absolute inset-0 bg-gradient-to-b from-[#060f1c]/90 via-[#0f2340]/60 to-[#060f1c]/95"></div>
      <div class="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#060f1c] via-[#152d4a]/75 to-transparent"></div>
      <div class="pointer-events-none absolute right-[12%] bottom-[26%] h-72 w-72 rounded-full bg-amber-200/25 blur-3xl"></div>
      <div class="pointer-events-none absolute left-[8%] top-[18%] h-24 w-80 rounded-full bg-white/8 blur-2xl"></div>
      <div class="pointer-events-none absolute right-[22%] top-[30%] h-16 w-64 rounded-full bg-white/6 blur-2xl"></div>

      <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24">
        <div class="grid items-end gap-10 xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-12">
          <div class="max-w-3xl min-w-0">
            <h1
              class="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Whatever you fly,<br />it&rsquo;s welcome here.
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              One of the best RC model aircraft flying fields in Central Virginia, near Shirley
              Plantation in Charles City County, just 30 minutes southeast of downtown Richmond.
            </p>
            <div class="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                class="rounded-full bg-gradient-to-r from-club-red-600 to-club-red-800 px-8 py-3.5 text-base font-semibold text-white shadow-2xl shadow-black/35 ring-1 ring-white/12 transition-all hover:-translate-y-1 hover:from-club-red-500 hover:to-club-red-700 hover:shadow-[0_24px_45px_-18px_rgba(0,0,0,0.6)]"
              >
                Join RARC
              </a>
              <a
                href="#field"
                class="rounded-full border border-white/24 bg-white/5 px-8 py-3.5 text-base font-semibold text-white shadow-xl backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/45 hover:bg-white/15 hover:shadow-2xl"
              >
                Visit the field
              </a>
            </div>
          </div>

          <div class="hidden xl:block xl:justify-self-end">
            <div class="rounded-2xl border border-white/15 bg-white/10 p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <p class="text-xs font-bold tracking-[0.2em] text-club-red-300 uppercase">Club Meetings</p>
              <p class="mt-3 text-lg font-bold leading-snug text-white">
                Second Sunday of each month
              </p>
              <p class="mt-2 text-sm leading-relaxed text-white/70">
                At the flying field, around 2 PM, weather permitting. Visitors and guest pilots
                are always welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── What We Fly / Why Join / Our Field ───────────────────────────── -->
    <section id="fly" class="relative scroll-mt-24 overflow-x-clip bg-gradient-to-b from-navy-950 to-[#060f1c]">
      <div class="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div use:reveal class="reveal flex flex-wrap items-center justify-between gap-6">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Come out to fly, or just come out to watch.
          </h2>
          <a
            href={amaUrl}
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
          >
            Academy of Model Aeronautics
          </a>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-3">
          {#each highlights as highlight, i}
            <article
              use:reveal={{ delay: i * 90 }}
              class="reveal flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/10 text-white shadow-2xl shadow-black/25 backdrop-blur"
            >
              <div class="relative aspect-[16/10] overflow-hidden">
                <img
                  src={highlightPhotos[i].src}
                  alt={highlightPhotos[i].alt}
                  class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div class="flex flex-1 flex-col p-7">
              <p class="text-lg font-bold tracking-tight">{highlight.title}</p>
              <p class="mt-4 flex-1 leading-relaxed text-white/85">{highlight.text}</p>
              <a
                href={highlight.linkHref}
                class="mt-6 text-sm font-semibold text-club-red-300 transition-colors hover:text-white"
              >
                {highlight.linkLabel} &rarr;
              </a>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </section>

    <!-- ─── About RARC ────────────────────────────────────────────────────── -->
    <section id="about" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div use:reveal class="reveal">
            <h2 class="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Flying out of Central Virginia since the mid-sixties.
            </h2>
            <p class="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">
              Richmond Area Radio Control, Inc. (RARC) has had more than a few flying fields since
              its inception, including one owned by the railroad near the state fairgrounds, and
              Amos Field in Oilville, which served the club for over 35 years. In 2003, land
              development sent us looking again, and we found our home near Shirley Plantation in
              Charles City. The club&rsquo;s goals are simple: have fun and promote the hobby and
              sport of model aviation in a safe manner.
            </p>
          </div>

          <div use:reveal={{ delay: 100 }} class="reveal grid grid-cols-2 gap-3">
            {#each aboutPhotos as photo, i}
              <div
                class="overflow-hidden rounded-2xl border border-stone-200 shadow-lg shadow-stone-300/25
                  {i === 0 ? 'col-span-2 aspect-[21/9]' : 'aspect-square'}"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            {/each}
          </div>
        </div>

        <div class="mt-14 overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-white to-navy-50/35 shadow-2xl shadow-stone-300/30">
          <div class="grid lg:grid-cols-[1fr_1.2fr]">
            <div use:reveal class="reveal relative bg-navy-950 p-8 text-white md:p-10">
              <p class="text-xs font-bold tracking-[0.2em] text-navy-400 uppercase">News Briefs</p>
              <p class="mt-3 text-base leading-relaxed text-navy-100/80">Currently none.</p>

              <p class="mt-10 text-xs font-bold tracking-[0.2em] text-navy-400 uppercase">Of Interest</p>
              <p class="mt-3 text-xl font-bold leading-snug">
                What to do with damaged or defective LiPo batteries?
              </p>
              <p class="mt-4 text-sm leading-relaxed text-navy-100/80">
                While it is true that throwing them into a bucket of salt water will discharge
                them, that is not the end of it. You still cannot throw them into general waste
                because they contain lithium, which is hazardous waste. If not disposed of
                properly, the chemicals in LiPo batteries can leach into the environment, causing
                harm to ecosystems and human health.
              </p>
              <p class="mt-4 text-sm leading-relaxed text-navy-100/80">
                <span class="font-bold text-white">The solution:</span> bring them to any
                Lowe&rsquo;s in your area. There are bins outside these businesses where you can
                dispose of them safely.
              </p>
            </div>

            <div class="p-8 md:p-10">
              <div class="divide-y divide-stone-200">
                {#each clubFacts as fact, i}
                  <div
                    use:reveal={{ delay: i * 70 }}
                    class="reveal group py-6 transition-all first:pt-0 last:pb-0 hover:translate-x-1"
                  >
                    <div class="flex items-start gap-4">
                      <span class="mt-0.5 shrink-0 text-club-red-600 transition-colors group-hover:text-club-red-800">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-7 w-7" aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M16.704 5.293a1 1 0 0 1 .003 1.414l-7.35 7.38a1 1 0 0 1-1.42-.003l-3.643-3.676a1 1 0 0 1 1.42-1.407l2.934 2.962 6.643-6.67a1 1 0 0 1 1.413 0Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <h3 class="text-2xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-club-red-700">
                          {fact.title}
                        </h3>
                        <p class="mt-3 max-w-xl text-base leading-relaxed text-stone-600">{fact.description}</p>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>

              <div use:reveal={{ delay: clubFacts.length * 70 }} class="reveal mt-8 rounded-2xl border border-navy-200 bg-navy-50/70 p-6">
                <p class="text-base leading-relaxed text-stone-700">
                  Have questions about the club? Feel free to contact an RARC officer. Be sure
                  to leave a message with a return call number.
                </p>
                <a
                  href="#contact"
                  class="mt-5 inline-block w-fit rounded-full bg-gradient-to-r from-club-red-600 to-club-red-800 px-6 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:from-club-red-500 hover:to-club-red-700 hover:shadow-2xl"
                >
                  Contact an officer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Flying Field: full-bleed dark section ─────────────────────────── -->
    <section
      id="field"
      class="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-[#060f1c] via-navy-950 to-[#0b1a30] py-32 md:py-48"
    >
      <img
        src={siteImages.fieldPanorama.src}
        alt=""
        class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#060f1c]/95 via-navy-950/90 to-[#0b1a30]/95"></div>
      <div class="pointer-events-none absolute right-[8%] top-[14%] h-40 w-40 rounded-full bg-club-red-500/15 blur-3xl"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-6">
        <div use:reveal class="reveal mb-12 grid gap-4 sm:grid-cols-3">
          {#each fieldPhotos as photo, i}
            <div
              class="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40
                {i === 0 ? 'sm:col-span-1' : ''}"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                class="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          {/each}
        </div>

        <div class="grid gap-14 md:grid-cols-2 md:gap-20">
          <div use:reveal class="reveal">
            <h2
              class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Come out and see us.
            </h2>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              We are just 30 minutes southeast of downtown Richmond, VA, near Shirley Plantation
              in Charles City County. Guest pilots and visitors are always welcome.
            </p>
            <p class="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
              All pilots must have their AMA registration card in their possession to fly and
              comply with the
              <a href={amaUrl} target="_blank" rel="noreferrer" class="font-semibold text-club-red-300 underline-offset-4 transition-colors hover:text-white hover:underline">AMA Safety Code</a>.
            </p>

            <p class="mt-8 text-sm text-navy-300/75">{meetingNote}</p>
          </div>

          <div use:reveal={{ delay: 150 }} class="reveal flex flex-col justify-center">
            <p class="mb-5 text-xs font-bold tracking-[0.2em] text-navy-400 uppercase">Directions to the field</p>
            <ol class="divide-y divide-white/10 border-y border-white/10 bg-white/5 px-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
              {#each directions as step, i}
                <li class="flex items-start gap-4 py-5">
                  <span class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-club-red-700/90 text-sm font-bold text-white">{i + 1}</span>
                  <span class="text-base leading-relaxed text-white/85">{step}</span>
                </li>
              {/each}
            </ol>
            <a
              href="https://maps.google.com/?q=Shirley+Plantation+Charles+City+VA"
              target="_blank"
              rel="noreferrer"
              class="mt-8 inline-block w-fit rounded-full bg-gradient-to-r from-white to-navy-100 px-7 py-3 text-base font-bold text-navy-950 shadow-2xl transition-all hover:-translate-y-1 hover:from-navy-50 hover:to-white hover:shadow-[0_24px_45px_-16px_rgba(0,0,0,0.6)]"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Gallery: from the flight line ─────────────────────────────────── -->
    <section id="gallery" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div use:reveal class="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              From the flight line.
            </h2>
          </div>
          <p class="max-w-sm text-base leading-relaxed text-stone-500">
            Fly-ins, swap meets, and great flying days at the RARC field. Many of the club&rsquo;s
            best photos are courtesy of Bob Waldrop.
          </p>
        </div>

        <div use:reveal class="reveal mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {#each galleryPhotos as photo, i}
            <div
              class="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-stone-200 shadow-lg shadow-stone-400/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-500/25"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                class="w-full object-cover transition-transform duration-700 hover:scale-105"
                loading={i < 4 ? 'eager' : 'lazy'}
              />
            </div>
          {/each}
        </div>

        <div class="mt-16">
          <p use:reveal class="reveal text-xs font-bold tracking-[0.2em] text-club-red-600 uppercase">
            Recent events
          </p>
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {#each galleryEvents as event, i}
              <article
                use:reveal={{ delay: i * 55 }}
                class="reveal flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-navy-50/40 shadow-lg shadow-stone-400/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-500/25"
              >
                <div class="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={galleryEventPhotos[i].src}
                    alt={galleryEventPhotos[i].alt}
                    class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div class="flex flex-1 flex-col p-7">
                  <p class="text-xs font-bold tracking-[0.18em] text-club-red-600 uppercase">{event.date}</p>
                  <h3 class="mt-3 text-2xl font-bold tracking-tight text-stone-900">{event.title}</h3>
                  <p class="mt-3 flex-1 text-base leading-relaxed text-stone-600">{event.text}</p>
                </div>
              </article>
            {/each}
          </div>
        </div>

        <div use:reveal class="reveal mt-12 rounded-3xl bg-navy-950 px-8 py-10 text-center shadow-2xl shadow-navy-950/40 md:px-14">
          <p class="text-2xl font-extrabold leading-snug tracking-tight text-white md:text-3xl">
            &ldquo;Model aircraft pilots don&rsquo;t crash; we just perform rapid, unplanned
            kit-rebuilding opportunities.&rdquo;
          </p>
        </div>
      </div>
    </section>

    <!-- ─── Join RARC ─────────────────────────────────────────────────────── -->
    <section id="join" class="scroll-mt-20 bg-stone-50 py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-16 lg:grid-cols-2 lg:items-start">

          <!-- Left: why join + how to apply -->
          <div use:reveal class="reveal lg:sticky lg:top-28 self-start">
            <div class="overflow-hidden rounded-2xl border border-stone-200 shadow-xl shadow-stone-300/30">
              <img
                src={joinPhoto.src}
                alt={joinPhoto.alt}
                class="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
            <h2 class="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Plenty of flying time. Regular guys, always willing to help.
            </h2>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
              Membership is open to anyone who flies or wants to learn to fly radio controlled
              model aircraft. RARC is small, so you&rsquo;ll have plenty of flying time when
              you&rsquo;re at the field, and we&rsquo;re heli-friendly, too.
            </p>

            <div class="mt-8 rounded-2xl border border-navy-200 bg-navy-50/80 p-6">
              <p class="text-xs font-bold tracking-[0.2em] text-club-red-700 uppercase">AMA membership required</p>
              <p class="mt-3 text-base leading-relaxed text-stone-700">
                You must be an active member of the Academy of Model Aeronautics in order to join
                RARC. If you&rsquo;re not already a member, visit the
                <a href={amaUrl} target="_blank" rel="noreferrer" class="font-semibold text-club-red-700 underline-offset-4 hover:underline">AMA membership page</a>.
              </p>
            </div>

            <div class="mt-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-lg shadow-stone-300/30">
              <p class="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">Mail your application</p>
              <p class="mt-3 text-base leading-relaxed text-stone-700">
                After downloading and completing the
                <a href={applicationUrl} target="_blank" rel="noreferrer" class="font-semibold text-club-red-700 underline-offset-4 hover:underline">membership application form</a>,
                please mail the completed form and your check to:
              </p>
              <p class="mt-4 text-base font-bold leading-relaxed text-stone-900">
                Bob Klenke<br />
                10339 Beech Ridge Circle<br />
                Glen Allen, VA 23059
              </p>
            </div>
          </div>

          <!-- Right: membership interest form -->
          <div use:reveal={{ delay: 130 }} class="reveal">
            <form class="rounded-2xl bg-navy-950 px-8 py-9 text-white shadow-2xl shadow-navy-950/60">
              <p class="text-sm font-medium text-navy-300">Want more information about membership?</p>
              <p class="mt-2 text-2xl font-extrabold tracking-tight">Tell us a little about yourself.</p>
              <p class="mt-3 text-sm leading-relaxed text-navy-200/65">
                Complete as much as you can and an RARC officer will follow up with you.
              </p>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-navy-200/80 uppercase">Contact details</legend>
                <div class="mt-4 grid gap-4 sm:grid-cols-2">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-navy-200/80 uppercase">First name</span>
                    <input
                      type="text"
                      required
                      class="w-full rounded-xl border border-navy-700 bg-navy-900/75 px-4 py-3 text-sm text-white placeholder:text-navy-300/60 focus:border-navy-400 focus:outline-none"
                    />
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-navy-200/80 uppercase">Last name</span>
                    <input
                      type="text"
                      required
                      class="w-full rounded-xl border border-navy-700 bg-navy-900/75 px-4 py-3 text-sm text-white placeholder:text-navy-300/60 focus:border-navy-400 focus:outline-none"
                    />
                  </label>
                </div>

                <div class="mt-4 grid gap-4 sm:grid-cols-2">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-navy-200/80 uppercase">Email</span>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      class="w-full rounded-xl border border-navy-700 bg-navy-900/75 px-4 py-3 text-sm text-white placeholder:text-navy-300/60 focus:border-navy-400 focus:outline-none"
                    />
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-navy-200/80 uppercase">Phone number</span>
                    <input
                      type="tel"
                      required
                      placeholder="(___) ___-____"
                      class="w-full rounded-xl border border-navy-700 bg-navy-900/75 px-4 py-3 text-sm text-white placeholder:text-navy-300/60 focus:border-navy-400 focus:outline-none"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-navy-200/80 uppercase">About you</legend>
                <label class="mt-4 block">
                  <span class="mb-2 block text-xs font-semibold tracking-wide text-navy-200/80 uppercase">How did you hear about RARC?</span>
                  <select
                    required
                    class="w-full rounded-xl border border-navy-700 bg-navy-900/75 px-4 py-3 text-sm text-white focus:border-navy-400 focus:outline-none"
                  >
                    <option value="" selected disabled>Select</option>
                    <option>Internet Search</option>
                    <option>Advertisement</option>
                    <option>Friend</option>
                    <option>Other</option>
                  </select>
                </label>
                <label class="mt-4 block">
                  <span class="mb-2 block text-xs font-semibold tracking-wide text-navy-200/80 uppercase">Do you hold an active Academy of Model Aeronautics membership card?</span>
                  <select
                    required
                    class="w-full rounded-xl border border-navy-700 bg-navy-900/75 px-4 py-3 text-sm text-white focus:border-navy-400 focus:outline-none"
                  >
                    <option value="" selected disabled>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </label>
                <label class="mt-4 block">
                  <span class="mb-2 block text-xs font-semibold tracking-wide text-navy-200/80 uppercase">What is your level of RC experience?</span>
                  <select
                    required
                    class="w-full rounded-xl border border-navy-700 bg-navy-900/75 px-4 py-3 text-sm text-white focus:border-navy-400 focus:outline-none"
                  >
                    <option value="" selected disabled>Select</option>
                    <option>Beginner - would like help learning to fly</option>
                    <option>Intermediate - can take off, land, and fly the basics</option>
                    <option>Expert - can fly different kinds of aircraft in all conditions</option>
                  </select>
                </label>
              </fieldset>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-navy-200/80 uppercase">What aircraft types are you interested in?</legend>
                <div class="mt-4 grid gap-3 sm:grid-cols-2">
                  {#each aircraftInterests as interest}
                    <label class="flex items-center gap-3 rounded-xl border border-navy-700 bg-navy-900/60 px-4 py-3 transition-colors hover:border-navy-500">
                      <input type="checkbox" class="h-4 w-4 accent-navy-400" />
                      <span class="text-sm text-navy-100/90">{interest}</span>
                    </label>
                  {/each}
                </div>
              </fieldset>

              <button
                type="button"
                class="mt-7 inline-block rounded-full bg-gradient-to-r from-club-red-500 to-club-red-700 px-7 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-club-red-400 hover:to-club-red-600 hover:shadow-2xl"
              >
                Send request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── Contact: club officers ────────────────────────────────────────── -->
    <section id="contact" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-16 lg:grid-cols-2 lg:items-start">

          <div use:reveal class="reveal lg:sticky lg:top-28 self-start">
            <div class="overflow-hidden rounded-2xl border border-stone-200 shadow-xl shadow-stone-300/30">
              <img
                src={siteImages.communityGroup.src}
                alt={siteImages.communityGroup.alt}
                class="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
            <h2 class="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Questions? Contact an RARC officer.
            </h2>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
              Whether you want to visit, join, or just learn more about the hobby, any of our
              officers will be glad to help. Be sure to leave a message with a return call number.
            </p>
            <div class="mt-8 inline-flex items-center gap-3 rounded-full border border-navy-200 bg-navy-50 px-4 py-2.5 shadow-sm">
              <img src={logo} alt="Richmond Area RC Flying Club logo" class="h-7 w-auto" />
              <div>
                <p class="text-sm font-extrabold tracking-tight text-stone-900">Richmond Area RC Flying Club</p>
                <p class="text-xs font-semibold text-club-red-700">Charles City County, VA &middot; AMA Charter #637</p>
              </div>
            </div>
            <div class="mt-8 rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <p class="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">Club meetings</p>
              <p class="mt-3 text-base leading-relaxed text-stone-700">{meetingNote}</p>
            </div>
            <div class="mt-5 rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <p class="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">Website</p>
              <p class="mt-3 text-base leading-relaxed text-stone-700">
                Website improvement suggestions, problems, omissions, or questions? Please reach
                out to our web editor, Roy Ehmke.
              </p>
            </div>
          </div>

          <div use:reveal={{ delay: 130 }} class="reveal">
            <p class="mb-5 text-xs font-bold tracking-[0.2em] text-club-red-600 uppercase">2025 Richmond Area Radio Control Officers</p>
            <div class="divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 shadow-lg shadow-stone-300/30">
              {#each officers as officer}
                <div class="grid grid-cols-[8.5rem_1fr] items-center gap-4 px-6 py-5">
                  <p class="text-xs font-bold tracking-[0.14em] text-stone-400 uppercase">{officer.role}</p>
                  <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <p class="text-lg font-bold tracking-tight text-stone-900">{officer.name}</p>
                    {#if officer.phone}
                      <a
                        href={phoneHref(officer.phone)}
                        class="text-base font-semibold text-club-red-700 transition-colors hover:text-club-red-900"
                      >
                        {officer.phone}
                      </a>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- ─── Footer ────────────────────────────────────────────────────────── -->
  <footer class="bg-navy-950 text-white">
    <div class="mx-auto max-w-7xl px-6 pt-18 pb-10">
      <div class="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/30">
        <img
          src={siteImages.fieldOverview.src}
          alt=""
          class="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-navy-950/75 backdrop-blur-sm"></div>
        <div class="relative p-8 md:p-10">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Come out to fly, or just come out to watch.
            </p>
            <p class="mt-3 max-w-2xl text-base leading-relaxed text-navy-100/75">
              Visitors and guest pilots are always welcome at the RARC flying field, just 30
              minutes southeast of downtown Richmond.
            </p>
          </div>
          <a
            href="#join"
            class="rounded-full bg-gradient-to-r from-club-red-500 to-club-red-700 px-7 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-club-red-400 hover:to-club-red-600 hover:shadow-2xl"
          >
            Join RARC
          </a>
        </div>
        </div>
      </div>

      <div class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            <img src={logo} alt="Richmond Area RC Flying Club logo" class="h-10 w-auto" />
            <span class="text-base font-extrabold tracking-tight uppercase">Richmond Area RC Flying Club</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-navy-200/60">
            Richmond Area Radio Control, Inc., AMA Charter #637. Having fun and promoting
            the hobby and sport of model aviation in a safe manner since the mid-sixties.
          </p>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-navy-400 uppercase">Explore</p>
          <ul class="space-y-2.5">
            {#each navLinks as link}
              <li><a href={link.href} class="text-sm text-navy-200/65 transition-colors hover:text-white">{link.label}</a></li>
            {/each}
          </ul>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-navy-400 uppercase">The Field</p>
          <ul class="space-y-2.5">
            <li class="text-sm text-navy-200/65">Near Shirley Plantation, Charles City County, VA</li>
            <li class="text-sm text-navy-200/65">30 minutes southeast of downtown Richmond</li>
            <li class="text-sm text-navy-200/65">Meetings: 2nd Sunday monthly, ~2 PM</li>
            <li class="text-sm text-navy-200/65">Dec 1 &ndash; Jan 1: flying on Sundays only</li>
          </ul>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-navy-400 uppercase">Contact</p>
          <div class="space-y-2.5">
            <a
              href={phoneHref('804-304-1581')}
              class="block text-sm font-semibold text-navy-200/80 transition-colors hover:text-white"
            >
              President: Tony Goodman &middot; 804-304-1581
            </a>
            <a
              href={phoneHref('804-901-2666')}
              class="block text-sm font-semibold text-navy-200/80 transition-colors hover:text-white"
            >
              Treasurer: Robert Klenke &middot; 804-901-2666
            </a>
            <a
              href={amaUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="block text-sm font-semibold text-navy-200/80 transition-colors hover:text-white"
            >
              Academy of Model Aeronautics
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-navy-300/45 sm:flex-row"
      >
        <p>&copy; {new Date().getFullYear()} Richmond Area Radio Control, Inc. All rights reserved.</p>
        <p>Have fun. Fly safe. Promote the hobby.</p>
      </div>
    </div>
  </footer>

</div>

<style>
  :global(.logo-mark--light) {
    filter: brightness(0) saturate(100%) invert(100%);
  }
</style>
