<script>
  import { superForm } from "sveltekit-superforms/client";

  export let data;
  const { form, errors, enhance } = superForm(data);
</script>

<section class="px-6 pt-16">
  <div class="flex items-center font-semibold">
    <h1>Envelope Icon Here</h1>
    <span class="ml-4">Email Address</span>
  </div>
  <p class="mt-3 max-w-none text-sm">Change the email associated with your account</p>
  <!-- Email Address Form -->
  <form method="POST" action="?/updateEmail" use:enhance class="mt-8">
    <label for="email" class="space-y-2">
      <span>Email</span>
      <input type="email" name="email" class="input" bind:value={$form.email} />
      {#if $errors.email}
        <span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
      {/if}
    </label>
    <button type="submit" class="btn variant-filled mt-4">Update Email</button>
  </form>
</section>
