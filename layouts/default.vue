<script setup>
const user=useSupabaseUser();
const supabase=useSupabaseClient();

const signOut = async ()=>{
    const {error}=await supabase.auth.signOut();
    if(error){
        console.log(error);
    }else{
        navigateTo("/login");
    }
}
</script>
<template>
    <div>
        <header class="shawdow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold">Nuxt Dojo</nuxt-link>
                <ul class="flex gap-4">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/products" class="btn">Products</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/products/abc">client-error</nuxt-link>
                    </li>
                    <li>
                       <button v-if="user" @click="signOut" class="button">Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- Output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style>
.router-link-exact-active {
    color: #12b488;
}
</style>
