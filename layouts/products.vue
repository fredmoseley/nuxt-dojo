<template>
    <div>
        <nav>
            <nuxt-link to="/products">Nuxt Dojo Merch</nuxt-link>
           
        </nav>

        <!-- Output the page content -->
        <div>
            <slot />
        </div>
        
        <footer>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/products">Products</nuxt-link>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style>
    .router-link-exact-active {
        color: #12b488
    }
</style>
