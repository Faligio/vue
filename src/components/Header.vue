<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <span class="navbar-brand">VIE-IE-ED</span>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Accueil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/import">Import</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/export">Export</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
