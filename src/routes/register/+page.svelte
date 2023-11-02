<script>
  import { superForm } from "sveltekit-superforms/client";

  export let data;
  const { form, errors, enhance } = superForm(data.form, {
    resetForm: true,
  });
  console.log("Errors:", errors);
</script>

<div class="py-20">
  <div class="flex w-full flex-col items-center">
    <div class="max-w-2xl text-center">
      <h1 class="text-4xl font-semibold">Register for an account</h1>
    </div>
    <div class="card mt-6 p-4">
      <form method="POST" class="flex flex-col space-y-6" use:enhance>
        <label class="label" for="full_name">
          <span>Name</span>
          <input type="text" class="input" name="full_name" bind:value={$form.full_name} />
          {#if $errors.full_name}
            <span class="block text-red-600 dark:text-red-500">{$errors.full_name}</span>
          {/if}
        </label>
        <label class="label" for="email">
          <span>Email</span>
          <input class="input" type="email" name="email" bind:value={$form.email} />
          {#if $errors.email}
            <span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
          {/if}
        </label>
        <label class="label" for="password">
          <span>Password</span>
          <input class="input" type="password" name="password" bind:value={$form.password} />
          {#if $errors.password}
            <span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
          {/if}
        </label>
        <label class="label" for="passwordConfirm">
          <span>Confirm Password</span>
          <input class="input" type="password" name="passwordConfirm" bind:value={$form.passwordConfirm} />
          {#if $errors.passwordConfirm}
            <span class="block text-red-600 dark:text-red-500">{$errors.passwordConfirm}</span>
          {/if}
        </label>
        <button type="submit" class="btn variant-filled w-full">Register</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account? <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">Sign in</a>
        </div>
      </form>
    </div>
  </div>
</div>