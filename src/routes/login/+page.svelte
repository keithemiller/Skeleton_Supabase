<script>
  import { superForm } from 'sveltekit-superforms/client'

  export let data;

  const { form, errors, enhance } = superForm(data.form);
</script>

<div class="py-20">
  <div class="flex w-full flex-col items-center">
    <!-- Login Page Header -->
    <div class="max-w-2xl text-center">
      <h1 class="text-4xl font-semibold">Login to your account</h1>
    </div>
    <div class="card mt-6 w-1/2" padding="xl" size="md">
      <!-- Login Form -->
      <form method="POST" class="flex flex-col space-y-6" use:enhance>
        <label class="space-y-2" for="email">
          <span>Email</span>
          <input type="email" name="email" class="input" bind:value={$form.email}/>
          {#if $errors.email}
            <span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
          {/if}
        </label>
        <label class="space-y-2" for="password">
          <span>Password</span>
          <input type="password" name="password" class="input" bind:value={$form.password}/>
           {#if $errors.password}
            <span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
          {/if}
        </label>
        <button type="submit" class="btn variant-filled w-full">Login</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Don't have an account? <a href="/register" class="text-blue-700 hover:underline dark:text-blue-500"
            >Sign up</a>
        </div>
      </form>
    </div>
  </div>
</div>
