export function RegisterPage() {
  const $container = document.createElement('div');

  $container.classList.add("w-1/2", "mx-auto", "p-4", "bg-white", "rounded-md");

  $container.innerHTML = `
    <h1 class="text-2xl">Register</h1>
    <form class="mt-4">
      <div class="mb-4">
        <label for="name" class="block">Name</label>
        <input type="text" id="name" name="name" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Your name">
      </div>
      <div class="mb-4">
        <label for="email" class="block">Email</label>
        <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Your email">
      </div>
      <div class="mb-4">
        <label for="password" class="block">Password</label>
        <input type="password" id="password" name="password" class="w-full p-2 border border-gray-300 rounded-md" placeholder="Your password">
      </div>
      <button class="w-full bg-blue-500 text-white p-2 rounded-md">Register</button>
    </form>
  `;

  return $container
}