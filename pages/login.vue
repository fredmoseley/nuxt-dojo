<script setup >
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

watchEffect(() => {
  if (user.value) {
    navigateTo('/products')
  }
})

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`;

const sigInWithAuth = async () => {
    console.log("sigInWithAuth");
    const { error } = await auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo }
    });
    if (error) {
        console.log(error);
    }
}

const signOut = async () => {
    const { error } = await auth.signOut()
    if (error) {
        console.log(error);
    }
}
</script>

  <template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold">
      Sign in to your account
    </h2>
    <LoginCard>
      <UButton
        class="mt-3"
        icon="i-mdi-google"
        block
        label="Google"
        @click="sigInWithAuth"
      />
    </LoginCard>
  </div>
</template>

<style scoped></style>
