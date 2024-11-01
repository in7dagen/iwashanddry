<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'contact' // or 'price'
  };

  function handleSubmit() {
    // Implement form submission logic
    console.log('Form submitted:', formData);
  }
</script>

<div class="py-16 bg-white">
  <div class="container mx-auto px-4 max-w-2xl">
    <h2 class="text-3xl font-bold text-center mb-8">Contact</h2>
    
    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Naam</label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Telefoon</label>
        <input
          type="tel"
          id="phone"
          bind:value={formData.phone}
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Bericht</label>
        <textarea
          id="message"
          bind:value={formData.message}
          rows="4"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90"
      >
        Versturen
      </button>
    </form>
  </div>
</div>