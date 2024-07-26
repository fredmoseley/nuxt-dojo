<template>
    <div>
        <nav>
            <nuxt-link to="/">Nuxt Dojo</nuxt-link>
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
            <a href="/about">normal link to the about page</a>
        </nav>

        <!-- Output the page content -->
        <div>
            <slot />
        </div>
    </div>
</template>

<style>
    .router-link-exact-active {
        color: #12b488
    }
</style>
