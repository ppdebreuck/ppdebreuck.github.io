<script>
	let { currentPath = '' } = $props();
	
	let mobileMenuOpen = $state(false);
	
	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header class="border-bottom border-top mt-3">
	<nav class="navbar navbar-expand-md">
		<a class="navbar-brand ps-2" href="/">Pierre-Paul De Breuck</a>
		<button 
			class="navbar-toggler navbar-dark" 
			type="button" 
			onclick={toggleMenu}
			aria-label="main menu button"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse pt-3 {mobileMenuOpen ? 'show' : ''}" id="main-navigation">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item">
					<a class="nav-link" href="/research">Research</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/publications">Publications</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/presentations">Presentations</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/teaching">Teaching</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/contact">Contact</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="https://matra.pierrepauldb.com">Matra App</a>
				</li>
			</ul>
		</div>
	</nav>
</header>
