<script setup lang="ts">
const callCount = ref(0);

const username = ref('admin');
const password = ref('');
const body = computed(() => ({
    username: username.value,
    password: password.value
}));

const didItWork = ref(false);
// BAD using useFetch in a handler
/*async function onSubmit() {
console.log('body',body.value)
  const {data, error} = await useFetch('http://localhost:3030/api/login', {
    method: 'POST',
    body,
    onResponse() {
        callCount.value++
    }
  })
  if (!error.value) {
    didItWork.value = true
  }
}
  */
//  USE $fetch
async function onSubmit() {
    console.log('body', body.value);
    try {
        const { data, error } = await $fetch('http://localhost:3030/api/login', {
            method: 'POST',
            body: JSON.stringify(body.value), // Convert the body to JSON string
            headers: {
                'Content-Type': 'application/json'
            }, // Set t
            onResponse() {
                callCount.value++;
            }
        });
        didItWork.value = true;
    } catch (e) {
        console.error(e);
    }
}
// useFetch should only be used at the top level
const { data, error, execute } = await useFetch('http://localhost:3030/api/login', {
    method: 'POST',
    body,
    immediate: false,   //don't call until execute is called
    watch: false,       //do not watch refs
    onResponse() {
        callCount.value++;
    }
});

async function onSubmitUseFetch() {
    await execute();
    if (!error.value) {
        didItWork.value = true;
    }
}
</script>
<template>
    <h1>Login</h1>
    <form @submit.prevent="onSubmitUseFetch">
        <label for="username">Username:</label>
        <input data-1p-ignore id="username" type="text" placeholder="username" v-model="username" />
        <label data-1p-ignore for="password">Password:</label>
        <input id="password" type="password" v-model="password" />
        <button type="submit">Login</button>
    </form>
    <p>Amount of calls: {{ callCount }}</p>
    <br />
    <br />
    <p>Did it work? {{ didItWork }}</p>
</template>

<style scoped></style>
