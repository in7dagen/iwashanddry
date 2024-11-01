<script>
  let isMenuOpen = false;
  
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/particulier', label: 'Particulier' },
    { href: '/zakelijk', label: 'Zakelijk' },
    { href: '/contact', label: 'Contact' },
  ];
</script>

<header class="bg-white shadow-md fixed w-full top-0 z-50">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-blue-600 flex items-center gap-2">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
        I Wash and Dry
      </a>
      
      <button class="md:hidden" on:click={() => isMenuOpen = !isMenuOpen}>
        <span class="sr-only">Menu</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul class="hidden md:flex space-x-8">
        {#each menuItems as item}
          <li>
            <a href={item.href} class="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              {item.label}
            </a>
          </li>
        {/each}
        <li>
          <a href="/contact" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Prijsaanvraag
          </a>
        </li>
      </ul>
    </div>

    {#if isMenuOpen}
      <div class="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4">
        <ul class="space-y-3">
          {#each menuItems as item}
            <li>
              <a href={item.href} class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            </li>
          {/each}
          <li>
            <a href="/contact" class="block text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Prijsaanvraag
            </a>
          </li>
        </ul>
      </div>
    {/if}
  </nav>
</header>

<div class="h-20"></div> <!-- Spacer for fixed header -->