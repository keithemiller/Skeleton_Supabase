<script>
  import { superForm } from "sveltekit-superforms/client";

  export let data;
  const { form, errors, enhance } = superForm(data);
</script>

<section class="px-6 pt-16">
  <div class="flex items-center font-semibold">
    <h1>Lock Icon Here</h1>
    <span class="ml-4">Password</span>
  </div>
  <p class="mt-3 max-w-none text-sm">Change the password associated with your account</p>
  <!-- Change Password Form -->
  <form method="POST" action="?/updatePassword" use:enhance class="mt-8 flex flex-col space-y-4">
    <label for="password" class="space-y-2">
      <span>New Password</span>
      <input type="password" name="password" class="input" bind:value={$form.password} />
      {#if $errors.password}
        <span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
      {/if}
    </label>
    <label for="passwordConfirm" class="space-y-2">
      <span>Confirm New Password</span>
      <input type="password" name="passwordConfirm" class="input" bind:value={$form.passwordConfirm} />
      {#if $errors.passwordConfirm}
        <span class="block text-red-600 dark:text-red-500">{$errors.passwordConfirm}</span>
      {/if}
    </label>
    <button type="submit" class="btn variant-filled mt-4 self-start">Change Password</button>
  </form>
</section>
