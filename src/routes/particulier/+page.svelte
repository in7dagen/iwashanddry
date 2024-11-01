<script>
  import ServiceDetails from '$lib/components/ServiceDetails.svelte';
</script>

<svelte:head>
  <title>Particuliere Services - I Wash and Dry</title>
  <meta name="description" content="Professionele wasservice, stomerijservice en strijkservice voor particulieren. Inclusief gordijn- en tapijtreiniging." />
</svelte:head>

<div class="container mx-auto px-4 py-12">
  <h1 class="text-4xl font-bold mb-8">Particuliere Services</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-semibold mb-4">Onze Diensten</h2>
      <ul class="space-y-4">
        <li class="flex items-start">
          <span class="text-orange-600 mr-2">✓</span>
          <div>
            <strong>Was- en stomerijservice</strong>
            <p class="text-gray-600">Professionele reiniging van al uw kleding en textiel</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-orange-600 mr-2">✓</span>
          <div>
            <strong>Strijkservice</strong>
            <p class="text-gray-600">Perfect gestreken kleding, snel en efficiënt</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-orange-600 mr-2">✓</span>
          <div>
            <strong>Gordijnservice</strong>
            <p class="text-gray-600">Reiniging en verzorging van alle soorten gordijnen</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="text-orange-600 mr-2">✓</span>
          <div>
            <strong>Tapijt service</strong>
            <p class="text-gray-600">Grondige reiniging van tapijten en vloerkleden</p>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-6 rounded-lg">
      <h2 class="text-2xl font-semibold mb-4">Waarom I Wash and Dry?</h2>
      <ul class="space-y-4">
        <li class="flex items-center">
          <span class="text-orange-600 mr-2">•</span>
          Ophaal- en brengservice aan huis
        </li>
        <li class="flex items-center">
          <span class="text-orange-600 mr-2">•</span>
          Snelle service mogelijk
        </li>
        <li class="flex items-center">
          <span class="text-orange-600 mr-2">•</span>
          Milieuvriendelijke reinigingsmethoden
        </li>
        <li class="flex items-center">
          <span class="text-orange-600 mr-2">•</span>
          Persoonlijke aandacht voor uw textiel
        </li>
      </ul>
      
      <div class="mt-8">
        <a href="/contact" class="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700">
          Vraag een prijsopgave aan
        </a>
      </div>
    </div>
  </div>
</div>