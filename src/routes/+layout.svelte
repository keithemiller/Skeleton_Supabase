<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
  import { page } from "$app/stores";
  import { invalidate } from "$app/navigation";

  // This will reload the client side when the session expires
  // Returns the client-side supabase object
	export let data;
	$: ({session, supabase} = data);
	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth")
			}
		})
		return () => subscription.unsubscribe()
	})
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton Supabase App</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if session}
				<a href="/account">Account</a>
				<form action="/logout" method="POST">
            <button type="submit" class="btn">Sign out</button>
        </form>
				{:else}
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/login"
				>
					Login
				</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
