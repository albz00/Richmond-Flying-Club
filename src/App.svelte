<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { reveal } from './lib/reveal.js'

  let headerScrolled = $state(false)
  let factIndex = $state(0)
  let heroImageIndex = $state(0)

  onMount(() => {
    const onScroll = () => { headerScrolled = window.scrollY > 60 }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let heroGalleryInterval
    if (!prefersReducedMotion && heroBackgrounds.length > 1) {
      heroGalleryInterval = window.setInterval(() => {
        heroImageIndex = (heroImageIndex + 1) % heroBackgrounds.length
      }, 5500)
    }

    const factsInterval = window.setInterval(() => {
      factIndex = (factIndex + 1) % fieldFacts.length
    }, 4500)

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (heroGalleryInterval) {
        window.clearInterval(heroGalleryInterval)
      }
      window.clearInterval(factsInterval)
    }
  })

  const clubName = 'Richmond Area RC Flying Club'
  const phone = '804-304-1581'
  const phoneHref = 'tel:+18043041581'
  const amaUrl = 'https://www.modelaircraft.org/'
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Shirley+Plantation+Charles+City+VA'

  const heroBackgrounds = [
    `radial-gradient(ellipse at 78% 18%, rgba(255, 214, 140, 0.22), transparent 52%),
     linear-gradient(165deg, #16222e 0%, #23415a 38%, #20402a 76%, #131f0f 100%)`,
    `radial-gradient(ellipse at 22% 22%, rgba(190, 225, 255, 0.16), transparent 55%),
     linear-gradient(160deg, #0e1a26 0%, #2a4d6b 44%, #2e4326 80%, #131f0f 100%)`,
    `radial-gradient(ellipse at 60% 12%, rgba(255, 180, 120, 0.2), transparent 48%),
     linear-gradient(150deg, #1a2733 0%, #355068 42%, #38532d 78%, #131f0f 100%)`,
  ]

  const aircraft = [
    {
      title: 'Scale Airplanes',
      description:
        'Beautiful scale aircraft of every size, from park flyers to giant scale, powered by gasoline, glow, and electric.',
    },
    {
      title: 'Turbine Jets',
      description:
        'Turbine-powered jets are right at home on our field, flown alongside everything else without a fuss.',
    },
    {
      title: 'Helicopters',
      description:
        'Nitro, gas, and electric helis. RARC is heli-friendly, and the airplane guys and heli guys get along really well.',
    },
    {
      title: 'Drones & Multirotors',
      description:
        'Multirotors and quads are welcome too, flown safely alongside fixed wing and rotary aircraft.',
    },
    {
      title: 'Micro Aircraft',
      description:
        'Even tiny micro aircraft have a place at the field. If it flies by radio control, bring it out.',
    },
  ]

  const fieldFacts = [
    {
      caption: 'Just 30 minutes southeast of downtown Richmond, near Shirley Plantation in Charles City County.',
      background: 'linear-gradient(160deg, #1a2733 0%, #2a4d6b 48%, #2e4326 100%)',
    },
    {
      caption: 'A small club means plenty of flying time whenever you are at the field.',
      background: 'linear-gradient(165deg, #16222e 0%, #23415a 42%, #20402a 100%)',
    },
    {
      caption: 'Heli-friendly flying. The airplane guys and the heli guys get along really well.',
      background: 'linear-gradient(150deg, #0e1a26 0%, #355068 46%, #38532d 100%)',
    },
    {
      caption: 'Visitors and guest pilots are always welcome. Just bring your AMA card.',
      background: 'linear-gradient(155deg, #131f0f 0%, #2e4326 45%, #2a4d6b 100%)',
    },
  ]

  const nextFact = () => {
    factIndex = (factIndex + 1) % fieldFacts.length
  }

  const prevFact = () => {
    factIndex = (factIndex - 1 + fieldFacts.length) % fieldFacts.length
  }

  const navLinks = [
    { label: 'What We Fly', href: '#fly' },
    { label: 'Flying Field', href: '#field' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const whyJoin = [
    {
      title: 'One of the best fields in Central Virginia',
      text: 'RARC has one of the best RC model aircraft flying fields in Central Virginia, located near historic Shirley Plantation in Charles City County.',
    },
    {
      title: 'Plenty of flying time',
      text: 'RARC is small, so you will have plenty of flying time when you are at the field. No long waits for a slot on the flight line.',
    },
    {
      title: 'Regular guys, always willing to help',
      text: 'RARC members are regular guys, always willing to help. Heli pilots, airplane pilots, jet pilots, and drone flyers all get along really well.',
    },
  ]

  const galleryEvents = [
    {
      date: 'April 18, 2026',
      title: 'RARC Fly-In',
      text: 'A fantastic day and a fantastic turnout! Thanks to everyone who was there for this great RARC event.',
    },
    {
      date: 'December 13, 2025',
      title: 'Christmas Party',
      text: 'The Christmas party at Luca\u2019s in Prince George, Virginia turned out to be a super success. Thanks to Jess for coordinating the event, the planes given away in the drawing, and the door prizes.',
    },
    {
      date: 'October 2025',
      title: 'Cloud Formations',
      text: 'A great day of flying with great cloud formations over the field.',
    },
    {
      date: 'September 2025',
      title: 'Field Photography',
      text: 'Excellent photography from the field, courtesy of Bob Waldrop.',
    },
    {
      date: 'August 2025',
      title: 'Perfect Flying Weather',
      text: 'Simply a wonderful day to be flying. Mild weather and a great group on the flight line.',
    },
    {
      date: 'April 27, 2024',
      title: 'Swap-Meet & Fly-In',
      text: 'A complete success! Several newcomers attended, as did folks from other nearby flying clubs. Our thanks to everyone for making this a wonderful event.',
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

  const grassBladeCount = 72
  const planeLeadSeconds = 2.1
  const planeVisibleSweepSeconds = 13.2
  const grassBlades = Array.from({ length: grassBladeCount }, (_, i) => {
    const ratio = i / (grassBladeCount - 1)
    const wave = Math.sin(i * 1.41)
    const sway = Math.cos(i * 0.92)
    const pass = planeLeadSeconds + (ratio * planeVisibleSweepSeconds)

    return {
      left: ratio * 100,
      height: 24 + (wave + 1) * 14 + (sway + 1) * 6,
      width: 1.3 + ((i % 5) * 0.27),
      rotate: -8 + sway * 10,
      opacity: 0.46 + ((i % 6) * 0.055),
      root: -10 + ((i * 17) % 13),
      pass,
      jump: 3.6 + ((i % 4) * 0.85) + ((wave + 1) * 0.7),
    }
  })
</script>

{#snippet planeLogo(cls)}
  <svg viewBox="0 0 24 24" fill="currentColor" class={cls} aria-hidden="true">
    <path d="M21.48 13.7 14 11.2V6.5c0-1.1-.9-3.5-2-3.5s-2 2.4-2 3.5v4.7l-7.48 2.5c-.31.1-.52.39-.52.71v1.84c0 .5.48.86.96.72L10 15.5v3.6l-1.8 1.35c-.13.1-.2.25-.2.4v.96c0 .33.31.57.63.48L12 21.5l3.37.79c.32.09.63-.15.63-.48v-.96c0-.15-.07-.3-.2-.4L14 19.1v-3.6l7.04 1.47c.48.14.96-.22.96-.72v-1.84c0-.32-.21-.61-.52-.71Z" />
  </svg>
{/snippet}

<div class="min-h-screen w-full max-w-full overflow-x-clip bg-white font-sans text-stone-900">

  <!-- ─── Header ─────────────────────────────────────────────────────────── -->
  <header
    class="fixed top-0 z-50 w-full transition-all duration-500
      {headerScrolled
        ? 'bg-white/95 shadow-sm backdrop-blur-md border-b border-stone-200'
        : ''}"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <a href="#top" class="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5">
        {@render planeLogo(`h-10 w-10 shrink-0 transition-all duration-300 group-hover:scale-[1.06] ${headerScrolled ? 'text-moss-700' : 'text-white'}`)}
        <span
          class="text-base font-extrabold tracking-tight uppercase transition-colors md:text-lg
            {headerScrolled ? 'text-stone-900' : 'text-white'}"
        >
          Richmond Area
          <span class="{headerScrolled ? 'text-moss-600' : 'text-moss-300'}">RC Flying Club</span>
        </span>
      </a>

      <nav class="hidden items-center gap-10 md:flex">
        {#each navLinks as link}
          <a
            href={link.href}
            class="nav-link text-base font-semibold transition-all duration-300 hover:-translate-y-0.5
              {headerScrolled
                ? 'text-stone-600 hover:text-moss-700'
                : 'text-white/85 hover:text-white'}"
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <div class="flex items-center gap-2.5 md:gap-3">
        <a
          href={amaUrl}
          target="_blank"
          rel="noreferrer"
          class="btn-lift hidden h-12 items-center rounded-full px-5 text-sm font-semibold shadow-lg transition-all md:inline-flex
            {headerScrolled
              ? 'border border-stone-300/70 bg-white text-stone-800 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl'
              : 'border border-white/22 bg-white/10 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/20 hover:shadow-xl'}"
        >
          AMA
        </a>
        <a
          href="#join"
          class="btn-lift inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold shadow-xl transition-all
            {headerScrolled
              ? 'bg-moss-700 text-white hover:bg-moss-800 hover:shadow-2xl hover:-translate-y-0.5'
              : 'border border-white/22 bg-white/15 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/25 hover:shadow-2xl hover:-translate-y-0.5'}"
        >
          Join RARC
        </a>
      </div>
    </div>
  </header>

  <main id="top" class="overflow-x-clip">

    <!-- ─── Hero: full-bleed background ──────────────────────────────────── -->
    <section class="relative flex min-h-screen items-end overflow-hidden">
      {#each heroBackgrounds as background, i}
        <div
          class="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out {i === heroImageIndex ? 'opacity-100' : 'opacity-0'}"
          style="background-image: {background}"
        ></div>
      {/each}
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/25"></div>
      <div class="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/45 via-black/20 to-transparent"></div>

      <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 md:pb-32">
        <div class="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
          <div class="max-w-3xl">
            <h1
              class="mt-6 text-6xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              Whatever you fly,<br />it&rsquo;s welcome here.
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              One of the best RC model aircraft flying fields in Central Virginia, just 30 minutes
              southeast of downtown Richmond. Come out to fly, or just come out to watch.
            </p>
            <div class="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                class="rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-8 py-3.5 text-base font-semibold text-white shadow-2xl shadow-black/35 ring-1 ring-white/12 transition-all hover:-translate-y-1 hover:from-moss-400 hover:to-moss-600 hover:shadow-[0_24px_45px_-18px_rgba(0,0,0,0.6)]"
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

          <div class="hidden lg:block lg:justify-self-end">
            <div class="w-full max-w-[380px] rounded-2xl border border-white/15 bg-white/10 p-7 text-white shadow-2xl shadow-black/30 backdrop-blur">
              <p class="text-xs font-bold tracking-[0.2em] text-moss-300 uppercase">Club Meetings</p>
              <p class="mt-3 text-xl font-bold leading-snug">
                Second Sunday of each month, around 2 pm.
              </p>
              <p class="mt-3 text-sm leading-relaxed text-white/70">
                Held at the flying field, weather permitting. Visitors and guest pilots are always
                welcome.
              </p>
              <p class="mt-4 text-sm font-semibold text-moss-200">
                Near Shirley Plantation &middot; Charles City County, VA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Why Join: dark band with grass + flyover ─────────────────────── -->
    <section id="why" class="relative scroll-mt-24 overflow-x-clip bg-gradient-to-b from-moss-950 to-[#0f190c]">
      <div class="flyover-grass pointer-events-none absolute inset-x-0 top-0" aria-hidden="true">
        <div class="flyover-grass-base"></div>
        <div class="flyover-grass-layer flyover-grass-back">
          {#each grassBlades as blade, i}
            <span
              class="flyover-blade flyover-blade-back"
              style={`--blade-left: ${blade.left}%; --blade-root: ${blade.root - 4}px; --blade-height: ${blade.height * 0.84}px; --blade-width: ${blade.width}px; --blade-rotate: ${blade.rotate * 0.7}deg; --blade-opacity: ${blade.opacity * 0.72}; --blade-pass: ${blade.pass + 0.22}s; --blade-jump: ${blade.jump * 0.66}px; --blade-delay-offset: ${(i % 3) * 0.04}s;`}
            ></span>
          {/each}
        </div>
        <div class="flyover-plane-clip">
          <div class="flyover-plane-run">
            <div class="flyover-plane-bob">
              <svg viewBox="0 0 260 120" class="flyover-plane" aria-hidden="true">
                <path d="M20 36 L8 10 Q6 5 13 7 L46 32 Z" fill="#38532d" />
                <path d="M16 40 L0 36 L10 47 Z" fill="#2e4326" />
                <path d="M18 42 Q60 24 150 28 L218 32 Q236 34 236 42 Q236 50 216 52 L60 58 Q30 56 18 42 Z" fill="#e8eee4" />
                <path d="M122 28 Q134 14 152 17 L158 29 Z" fill="#9fc2d8" />
                <path d="M96 30 L178 22 Q188 22 186 30 L100 38 Z" fill="#466937" />
                <rect x="234" y="12" width="5" height="60" rx="2.5" fill="rgba(35,45,35,0.5)" />
                <circle cx="236" cy="42" r="5" fill="#1f2937" />
                <path d="M88 56 L86 74 M150 56 L152 74" stroke="#1f2937" stroke-width="4" stroke-linecap="round" />
                <circle cx="86" cy="80" r="8" fill="#1f2937" />
                <circle cx="152" cy="80" r="8" fill="#1f2937" />
                <circle cx="86" cy="80" r="3" fill="#9ca3af" />
                <circle cx="152" cy="80" r="3" fill="#9ca3af" />
              </svg>
            </div>
          </div>
        </div>
        <div class="flyover-grass-layer flyover-grass-front">
          {#each grassBlades as blade, i}
            <span
              class="flyover-blade flyover-blade-front"
              style={`--blade-left: ${blade.left + (i % 2 === 0 ? -0.35 : 0.35)}%; --blade-root: ${blade.root}px; --blade-height: ${blade.height}px; --blade-width: ${blade.width + 0.4}px; --blade-rotate: ${blade.rotate}deg; --blade-opacity: ${blade.opacity}; --blade-pass: ${blade.pass}s; --blade-jump: ${blade.jump}px; --blade-delay-offset: ${(i % 4) * 0.035}s;`}
            ></span>
          {/each}
        </div>
      </div>

      <div class="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div use:reveal class="reveal flex flex-wrap items-center justify-between gap-6">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why you should join us.
          </h2>
          <a
            href={amaUrl}
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
          >
            {@render planeLogo('h-5 w-5 text-moss-300')}
            AMA Charter #637
          </a>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-3">
          {#each whyJoin as reason, i}
            <article
              use:reveal={{ delay: i * 90 }}
              class="reveal flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-7 text-white shadow-2xl shadow-black/25 backdrop-blur"
            >
              <p class="text-lg font-bold tracking-tight">{reason.title}</p>
              <p class="mt-4 flex-1 leading-relaxed text-white/85">{reason.text}</p>
              <a
                href="#join"
                class="mt-6 text-sm font-semibold text-moss-200 transition-colors hover:text-white"
              >
                Interested? Join RARC
              </a>
            </article>
          {/each}
        </div>
      </div>
    </section>

    <!-- ─── What We Fly ───────────────────────────────────────────────────── -->
    <section id="fly" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div use:reveal class="reveal">
          <h2 class="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Whatever your passion in RC, it&rsquo;s welcome at our field.
          </h2>
          <p class="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">
            You&rsquo;ll see beautiful scale airplanes, turbine powered jets, nitro, gas, and
            electric helicopters&mdash;even drones and tiny micro aircraft. Come out to fly or just
            come out to watch.
          </p>
        </div>

        <div class="mt-14 overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-white to-moss-50/35 shadow-2xl shadow-stone-300/30">
          <div class="grid lg:grid-cols-[1fr_1.2fr]">
            <div use:reveal class="reveal relative min-h-[320px] lg:min-h-full">
              {#key factIndex}
                <div
                  class="absolute inset-0"
                  style="background-image: {fieldFacts[factIndex].background}"
                  in:fade={{ duration: 350 }}
                  out:fade={{ duration: 350 }}
                ></div>
              {/key}
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"></div>
              <div class="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p class="max-w-sm text-2xl font-bold leading-tight text-white md:text-3xl">
                  {fieldFacts[factIndex].caption}
                </p>
                <div class="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    class="rounded-full border border-white/22 bg-black/35 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-black/50"
                    onclick={prevFact}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    class="rounded-full border border-white/22 bg-black/35 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-black/50"
                    onclick={nextFact}
                  >
                    Next
                  </button>
                  <div class="ml-1 flex items-center gap-2">
                    {#each fieldFacts as _, i}
                      <button
                        type="button"
                        aria-label={`View club fact ${i + 1}`}
                        class="h-2.5 w-8 rounded-full transition-all {i === factIndex ? 'bg-white' : 'bg-white/35 hover:bg-white/60'}"
                        onclick={() => (factIndex = i)}
                      ></button>
                    {/each}
                  </div>
                </div>
              </div>
            </div>

            <div class="p-8 md:p-10">
              <div class="divide-y divide-stone-200">
                {#each aircraft as type, i}
                  <div
                    use:reveal={{ delay: i * 70 }}
                    class="reveal group py-6 transition-all first:pt-0 last:pb-0 hover:translate-x-1"
                  >
                    <div class="flex items-start gap-4">
                      <span class="mt-0.5 shrink-0 text-moss-600 transition-colors group-hover:text-moss-800">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="h-7 w-7" aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M16.704 5.293a1 1 0 0 1 .003 1.414l-7.35 7.38a1 1 0 0 1-1.42-.003l-3.643-3.676a1 1 0 0 1 1.42-1.407l2.934 2.962 6.643-6.67a1 1 0 0 1 1.413 0Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <h3 class="text-2xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-moss-700">
                          {type.title}
                        </h3>
                        <p class="mt-3 max-w-xl text-base leading-relaxed text-stone-600">{type.description}</p>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>

              <div use:reveal={{ delay: aircraft.length * 70 }} class="reveal mt-8 rounded-2xl border border-moss-200 bg-moss-50/70 p-6">
                <p class="text-base leading-relaxed text-stone-700">
                  Want to see it all in action? Come out to the field&mdash;visitors and guest
                  pilots are always welcome.
                </p>
                <a
                  href="#field"
                  class="mt-5 inline-block w-fit rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-6 py-2.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
                >
                  Find the field
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Flying Field: full-bleed band ─────────────────────────────────── -->
    <section
      id="field"
      class="relative scroll-mt-20 py-32 md:py-48"
      style="background-image: radial-gradient(ellipse at 70% 20%, rgba(255, 214, 140, 0.12), transparent 50%), linear-gradient(160deg, #131f0f 0%, #20402a 45%, #23415a 100%)"
    >
      <div class="absolute inset-0 bg-stone-950/40"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-6">
        <div class="grid gap-14 md:grid-cols-2 md:gap-20">
          <div use:reveal class="reveal">
            <h2
              class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Our flying field.
            </h2>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              The RARC flying field is one of the best RC flying sites in Central Virginia,
              located near Shirley Plantation in Charles City County, just 30 minutes southeast of
              downtown Richmond, VA.
            </p>
            <p class="mt-5 max-w-lg text-base leading-relaxed text-white/60">
              From Rt. 10 coming from Hopewell, turn left onto Rt. 156 and cross the Benjamin
              Harrison Bridge. The first dirt road on the left is the &ldquo;Dirt Bike Boot
              Camp&rdquo;. Take the next dirt road on the left, past the long white fence, until you
              see our RARC sign. Turn left there and keep to the right&mdash;the flying field is on
              the left, and driving on it is frowned upon! The road is bouncy and dusty, so drive
              slowly. If there is a chain across the road, no one is on the field.
            </p>
          </div>

          <div use:reveal={{ delay: 150 }} class="reveal flex flex-col justify-center">
            <ul class="divide-y divide-white/10 border-y border-white/10 bg-white/5 px-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <li class="py-6 text-xl font-semibold text-white">Visitors and guest pilots always welcome</li>
              <li class="py-6 text-xl font-semibold text-white">AMA card required to fly, per the AMA Safety Code</li>
              <li class="py-6 text-xl font-semibold text-white">Club meetings: second Sunday, ~2 pm, at the field</li>
            </ul>
            <p class="mt-6 text-sm text-moss-300/75">
              Seasonal restriction: from December 1st until January 1st, flying is limited to
              Sundays only, since the area is used for bird hunting.
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              class="mt-8 inline-block w-fit rounded-full bg-gradient-to-r from-white to-moss-100 px-7 py-3 text-base font-bold text-moss-950 shadow-2xl transition-all hover:-translate-y-1 hover:from-moss-50 hover:to-white hover:shadow-[0_24px_45px_-16px_rgba(0,0,0,0.6)]"
            >
              Maps &amp; directions
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Gallery ────────────────────────────────────────────────────────── -->
    <section id="gallery" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div use:reveal class="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              From the RARC photo gallery.
            </h2>
          </div>
          <p class="max-w-sm text-base leading-relaxed text-stone-500">
            Fly-ins, swap meets, club parties, and a whole lot of great flying days at the field.
          </p>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each galleryEvents as event, i}
            <article
              use:reveal={{ delay: i * 55 }}
              class="reveal flex h-full flex-col rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-moss-50/45 p-7 shadow-lg shadow-stone-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-500/35
                {i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-1' : ''}"
            >
              <p class="text-xs font-bold tracking-[0.18em] text-moss-600 uppercase">{event.date}</p>
              <h3 class="mt-3 text-2xl font-bold tracking-tight text-stone-900">{event.title}</h3>
              <p class="mt-3 flex-1 text-base leading-relaxed text-stone-600">{event.text}</p>
            </article>
          {/each}
        </div>

        <p use:reveal class="reveal mt-10 text-center text-base font-semibold text-stone-500 italic">
          &ldquo;Model aircraft pilots don&rsquo;t crash&mdash;we just perform rapid, unplanned
          kit-rebuilding opportunities.&rdquo;
        </p>
      </div>
    </section>

    <!-- ─── About: full split ─────────────────────────────────────────────── -->
    <section id="about" class="scroll-mt-20 overflow-hidden">
      <div class="grid lg:grid-cols-2">
        <!-- Accent half -->
        <div
          class="relative flex min-h-[420px] items-center justify-center p-10 lg:min-h-0"
          style="background-image: radial-gradient(ellipse at 30% 25%, rgba(190, 225, 255, 0.14), transparent 55%), linear-gradient(155deg, #16222e 0%, #2a4d6b 48%, #2e4326 100%)"
        >
          <div class="max-w-md text-center">
            {@render planeLogo('mx-auto h-16 w-16 text-moss-300')}
            <p class="mt-6 text-3xl font-extrabold leading-snug tracking-tight text-white">
              Flying in the Richmond area since the mid-sixties.
            </p>
            <p class="mt-4 text-sm font-bold tracking-[0.2em] text-moss-300 uppercase">
              AMA Charter #637
            </p>
          </div>
        </div>

        <!-- Text half -->
        <div class="bg-stone-50 px-8 py-16 md:px-14 md:py-24 lg:py-32">
          <div use:reveal class="reveal">
            <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              About the RARC.
            </h2>
          </div>

          <div use:reveal={{ delay: 120 }} class="reveal mt-8 space-y-5 leading-relaxed text-stone-600">
            <p>
              Richmond Area Radio Control, Inc. (RARC) was founded in the mid sixties. The club has
              had more than a few flying fields since its inception, including one owned by the
              railroad near the state fairgrounds. For most of its existence the club flew from
              Amos Field in Oilville, Virginia, named after the land owners, which served the club
              well for over 35 years. In 2003, due to land development, the club found property near
              Shirley Plantation in Charles City&mdash;and that is our flying field today.
            </p>
            <p>
              The club&rsquo;s goals are simple: have fun and promote the hobby and sport of model
              aviation in a safe manner. Our members fly all types of aircraft, including gasoline,
              glow, electric, and turbine powered fixed wing, as well as helicopters and drones.
            </p>
            <p>
              Membership is open to anyone who flies or wants to learn to fly radio controlled
              model aircraft. For newcomers, it is highly recommended that you join a club like RARC
              and learn from more experienced pilots&mdash;so you can take your model home in one
              piece. Most people who try to learn on their own crash and give up on what could have
              been an enjoyable lifelong hobby.
            </p>
            <p class="font-bold text-stone-900">Have fun. Fly safe. Promote the hobby.</p>
          </div>

          <div use:reveal={{ delay: 180 }} class="reveal mt-8 rounded-2xl border border-moss-200 bg-moss-50/70 p-6">
            <p class="text-xs font-bold tracking-[0.18em] text-moss-700 uppercase">Of interest: LiPo disposal</p>
            <p class="mt-3 text-sm leading-relaxed text-stone-600">
              Damaged or defective LiPo batteries can&rsquo;t go in general waste&mdash;they contain
              lithium, which is hazardous. Discharging them in salt water isn&rsquo;t the end of it
              either. Bring them to any Lowe&rsquo;s in your area; there are bins outside where you
              can dispose of them safely.
            </p>
          </div>

          <div use:reveal={{ delay: 240 }} class="reveal mt-10 flex flex-wrap gap-4">
            <a
              href="#join"
              class="rounded-full bg-gradient-to-r from-moss-500 to-moss-700 px-7 py-3 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-400 hover:to-moss-600 hover:shadow-2xl"
            >
              Join RARC
            </a>
            <a
              href={amaUrl}
              target="_blank"
              rel="noreferrer"
              class="rounded-full border border-stone-300/65 bg-white px-7 py-3 text-base font-semibold text-stone-700 shadow-lg transition-all hover:-translate-y-1 hover:border-moss-500/70 hover:text-moss-700 hover:shadow-xl"
            >
              Visit the AMA
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Contact & Join ────────────────────────────────────────────────── -->
    <section id="contact" class="scroll-mt-20 bg-white py-28 md:py-36">
      <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-16 lg:grid-cols-2 lg:items-start">

          <!-- Left: headline + officers -->
          <div use:reveal class="reveal lg:sticky lg:top-28 self-start">
            <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Contact a club officer.
            </h2>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
              Questions about the club, the field, or learning to fly? Reach out to any RARC
              officer. Be sure to leave a message with a return call number!
            </p>
            <div class="mt-8 inline-flex items-center gap-3 rounded-full border border-moss-200 bg-moss-50 px-4 py-2.5 shadow-sm">
              {@render planeLogo('h-7 w-7 text-moss-700')}
              <div>
                <p class="text-sm font-extrabold tracking-tight text-stone-900">Richmond Area RC Flying Club</p>
                <p class="text-xs font-semibold text-moss-700">Charles City County, VA</p>
              </div>
            </div>

            <div class="mt-8 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 shadow-lg shadow-stone-300/30">
              {#each officers as officer}
                <div class="grid grid-cols-[8.5rem_1fr] items-center gap-4 px-6 py-4">
                  <p class="text-xs font-bold tracking-[0.14em] text-stone-400 uppercase">{officer.role}</p>
                  <div class="flex flex-wrap items-baseline gap-x-3">
                    <p class="text-base font-bold tracking-tight">{officer.name}</p>
                    {#if officer.phone}
                      <a
                        href={`tel:+1${officer.phone.replaceAll('-', '')}`}
                        class="text-sm font-semibold text-stone-500 transition-colors hover:text-moss-700"
                      >
                        {officer.phone}
                      </a>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>

            <div class="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
              <p class="text-xs font-bold tracking-[0.18em] text-stone-400 uppercase">Mail membership applications to</p>
              <p class="mt-3 text-base font-bold leading-relaxed text-stone-900">
                Bob Klenke<br />
                10339 Beech Ridge Circle<br />
                Glen Allen, VA 23059
              </p>
              <p class="mt-3 text-sm leading-relaxed text-stone-600">
                Mail your completed membership application form along with your check.
              </p>
            </div>
          </div>

          <!-- Right: membership interest form -->
          <div id="join" use:reveal={{ delay: 130 }} class="reveal flex flex-col gap-5 scroll-mt-28">
            <form class="rounded-2xl bg-moss-950 px-8 py-9 text-white shadow-2xl shadow-moss-950/60">
              <p class="text-sm font-medium text-moss-300">Join RARC</p>
              <p class="mt-2 text-2xl font-extrabold tracking-tight">Want more information about membership?</p>
              <p class="mt-3 text-sm leading-relaxed text-moss-200/65">
                You must be an active member of the
                <a href={amaUrl} target="_blank" rel="noreferrer" class="font-semibold text-moss-200 underline decoration-moss-400/60 underline-offset-2 transition-colors hover:text-white">Academy of Model Aeronautics</a>
                in order to join RARC. If you&rsquo;re not already a member, the AMA membership page
                is the place to start.
              </p>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Contact details</legend>
                <div class="mt-4 grid gap-4 sm:grid-cols-2">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">First name</span>
                    <input
                      type="text"
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Last name</span>
                    <input
                      type="text"
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                </div>

                <div class="mt-4 grid gap-4 sm:grid-cols-2">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Email</span>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Phone</span>
                    <input
                      type="tel"
                      required
                      placeholder="(___) ___-____"
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">About you</legend>
                <div class="mt-4 space-y-4">
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">How did you hear about RARC?</span>
                    <select
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
                    >
                      <option value="" selected disabled>Select</option>
                      <option>Internet Search</option>
                      <option>Advertisement</option>
                      <option>Friend</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">Do you hold an active AMA membership card?</span>
                    <select
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
                    >
                      <option value="" selected disabled>Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </label>
                  <label class="block">
                    <span class="mb-2 block text-xs font-semibold tracking-wide text-moss-200/80 uppercase">What is your level of RC experience?</span>
                    <select
                      required
                      class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white focus:border-moss-400 focus:outline-none"
                    >
                      <option value="" selected disabled>Select</option>
                      <option>Beginner — Would like help learning to fly</option>
                      <option>Intermediate — Can take off, land, and fly the basics</option>
                      <option>Expert — Can fly different kinds of aircraft in all conditions</option>
                    </select>
                  </label>
                </div>
              </fieldset>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Aircraft interests</legend>
                <p class="mt-2 text-xs text-moss-200/70">What aircraft types are you interested in? Select all that apply.</p>
                <div class="mt-4 grid gap-3 sm:grid-cols-2">
                  {#each aircraftInterests as interest}
                    <label class="flex items-center gap-3 rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white transition-colors hover:border-moss-500">
                      <input type="checkbox" class="h-4 w-4 accent-moss-400" />
                      <span>{interest}</span>
                    </label>
                  {/each}
                </div>
              </fieldset>

              <fieldset class="mt-7">
                <legend class="text-xs font-bold tracking-[0.18em] text-moss-200/80 uppercase">Anything else?</legend>
                <label class="mt-3 block">
                  <textarea
                    rows="4"
                    placeholder="Questions about the club, the field, or learning to fly."
                    class="w-full rounded-xl border border-moss-700 bg-moss-900/75 px-4 py-3 text-sm text-white placeholder:text-moss-300/60 focus:border-moss-400 focus:outline-none"
                  ></textarea>
                </label>
              </fieldset>

              <button
                type="button"
                class="mt-7 inline-block rounded-full bg-gradient-to-r from-moss-400 to-moss-600 px-7 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-300 hover:to-moss-500 hover:shadow-2xl"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- ─── Footer ────────────────────────────────────────────────────────── -->
  <footer class="bg-moss-950 text-white">
    <div class="mx-auto max-w-7xl px-6 pt-18 pb-10">
      <div class="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Come out to fly. Or just come out to watch.
            </p>
            <p class="mt-3 max-w-2xl text-base leading-relaxed text-moss-100/75">
              Club meetings are held at the flying field on the second Sunday of each month, around
              2 pm, weather permitting. Visitors and guest pilots are always welcome.
            </p>
          </div>
          <a
            href="#join"
            class="rounded-full bg-gradient-to-r from-moss-400 to-moss-600 px-7 py-3 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:from-moss-300 hover:to-moss-500 hover:shadow-2xl"
          >
            Join RARC
          </a>
        </div>
      </div>

      <div class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            {@render planeLogo('h-9 w-9 text-moss-300')}
            <span class="text-base font-extrabold tracking-tight uppercase">Richmond Area RC Flying Club</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-moss-200/60">
            Richmond Area Radio Control, Inc. AMA Charter #637. Have fun and promote the
            hobby/sport of model aviation in a safe manner.
          </p>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-moss-400 uppercase">What We Fly</p>
          <ul class="space-y-2.5">
            {#each aircraft as type}
              <li class="text-sm text-moss-200/65">{type.title}</li>
            {/each}
          </ul>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-moss-400 uppercase">Club</p>
          <ul class="space-y-2.5">
            <li><a href="#fly" class="text-sm text-moss-200/65 transition-colors hover:text-white">What We Fly</a></li>
            <li><a href="#field" class="text-sm text-moss-200/65 transition-colors hover:text-white">Flying Field</a></li>
            <li><a href="#gallery" class="text-sm text-moss-200/65 transition-colors hover:text-white">Gallery</a></li>
            <li><a href="#about" class="text-sm text-moss-200/65 transition-colors hover:text-white">About RARC</a></li>
            <li><a href="#join" class="text-sm text-moss-200/65 transition-colors hover:text-white">Join RARC</a></li>
          </ul>
        </div>

        <div>
          <p class="mb-4 text-xs font-bold tracking-[0.2em] text-moss-400 uppercase">Contact</p>
          <div class="space-y-2.5">
            <a
              href={phoneHref}
              class="block text-sm font-semibold text-moss-200/80 transition-colors hover:text-white"
            >
              Tony Goodman, President &middot; {phone}
            </a>
            <a
              href={amaUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="block text-sm font-semibold text-moss-200/80 transition-colors hover:text-white"
            >
              Academy of Model Aeronautics
            </a>
            <p class="text-sm text-moss-200/55">Near Shirley Plantation</p>
            <p class="text-sm text-moss-200/55">Charles City County, Virginia</p>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-moss-300/45 sm:flex-row"
      >
        <p>&copy; {new Date().getFullYear()} Richmond Area Radio Control, Inc. All rights reserved.</p>
        <p>Have fun. Fly safe.</p>
      </div>
    </div>
  </footer>

</div>

<style>
  .flyover-grass {
    top: -86px;
    z-index: 20;
    height: 98px;
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    overflow-y: visible;
  }

  .flyover-plane-clip {
    position: absolute;
    inset-inline: 0;
    bottom: -10px;
    height: 180px;
    z-index: 2;
    overflow-x: clip;
    overflow-y: visible;
    container-type: inline-size;
    pointer-events: none;
  }

  .flyover-grass-base {
    position: absolute;
    inset-inline: 0;
    bottom: -16px;
    height: 44px;
    background: linear-gradient(
      to top,
      rgba(11, 21, 10, 0.86) 0%,
      rgba(13, 28, 12, 0.64) 45%,
      rgba(22, 45, 18, 0) 100%
    );
    filter: blur(0.7px);
    z-index: 0;
  }

  .flyover-grass-layer {
    position: absolute;
    inset-inline: 0;
    bottom: -2px;
    height: 92px;
  }

  .flyover-grass-back {
    filter: saturate(0.95);
    z-index: 1;
  }

  .flyover-grass-front {
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.22));
    z-index: 3;
  }

  .flyover-plane-run {
    position: absolute;
    left: 0;
    bottom: 26px;
    z-index: 2;
    animation: flyover-plane-drive 18s linear infinite;
  }

  .flyover-plane-bob {
    animation: flyover-plane-glide 18s ease-in-out infinite;
    will-change: transform;
  }

  .flyover-plane {
    width: clamp(150px, 19vw, 230px);
    height: auto;
    filter: drop-shadow(0 12px 12px rgba(0, 0, 0, 0.35));
    animation: flyover-plane-bob 1.5s ease-in-out infinite;
  }

  .flyover-blade {
    position: absolute;
    left: var(--blade-left);
    bottom: var(--blade-root);
    height: var(--blade-height);
    width: var(--blade-width);
    opacity: var(--blade-opacity);
    border-radius: 999px 999px 0 0;
    transform-origin: bottom center;
    transform: translateX(-50%) rotate(var(--blade-rotate));
    will-change: height, bottom;
  }

  .flyover-blade-back {
    background: linear-gradient(
      to top,
      rgba(20, 45, 19, 0.96) 0%,
      rgba(45, 88, 38, 0.58) 68%,
      rgba(92, 148, 76, 0) 100%
    );
    animation: flyover-grass-wash-back 18s linear infinite;
    animation-delay: calc(var(--blade-pass) - 18s + var(--blade-delay-offset));
  }

  .flyover-blade-front {
    background: linear-gradient(
      to top,
      rgba(22, 56, 22, 0.98) 0%,
      rgba(56, 117, 47, 0.62) 66%,
      rgba(118, 188, 96, 0) 100%
    );
    animation: flyover-grass-wash-front 18s linear infinite;
    animation-delay: calc(var(--blade-pass) - 18s + var(--blade-delay-offset));
  }

  @keyframes flyover-plane-drive {
    0% {
      transform: translateX(-120%);
    }

    100% {
      transform: translateX(calc(100cqw + 140%));
    }
  }

  @keyframes flyover-plane-bob {
    0%,
    100% {
      transform: translateY(0) rotate(-0.25deg);
    }

    50% {
      transform: translateY(-1.5px) rotate(0.35deg);
    }
  }

  @keyframes flyover-plane-glide {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }

    18% {
      transform: translateY(-7px) rotate(-1deg);
    }

    36% {
      transform: translateY(2px) rotate(0.8deg);
    }

    55% {
      transform: translateY(-9px) rotate(-1.2deg);
    }

    72% {
      transform: translateY(1px) rotate(0.6deg);
    }

    88% {
      transform: translateY(-5px) rotate(-0.8deg);
    }
  }

  @keyframes flyover-grass-wash-front {
    0% {
      height: calc(var(--blade-height) + var(--blade-jump));
      bottom: calc(var(--blade-root) - 2px);
    }

    4% {
      height: calc(var(--blade-height) + (var(--blade-jump) * 0.45));
      bottom: calc(var(--blade-root) - 0.5px);
    }

    9%,
    100% {
      height: var(--blade-height);
      bottom: var(--blade-root);
    }
  }

  @keyframes flyover-grass-wash-back {
    0% {
      height: calc(var(--blade-height) + var(--blade-jump));
      bottom: calc(var(--blade-root) - 1.5px);
    }

    6% {
      height: calc(var(--blade-height) + (var(--blade-jump) * 0.35));
      bottom: calc(var(--blade-root) - 0.3px);
    }

    10%,
    100% {
      height: var(--blade-height);
      bottom: var(--blade-root);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .flyover-plane-run,
    .flyover-plane-bob,
    .flyover-plane,
    .flyover-blade-back,
    .flyover-blade-front {
      animation: none;
    }
  }
</style>
