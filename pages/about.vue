<script setup>
// get request
  // const { data } = await useFetch('/api/ninja?name=mario')

  // post request
  // const {data} = await useFetch('/api/ninja?name=Fred', { method: 'post',
  // body: {age: 30}
  // })


  // call that uses apiKey
  const {data} = await useFetch('/api/ninja')
</script>
<template>
    <div>
        <h2>About</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt facilis incidunt necessitatibus voluptatum quae vitae earum fugit, nam molestias maiores
            cupiditate rerum, labore iure sed eaque quidem at! Rem!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt facilis incidunt necessitatibus voluptatum quae vitae earum fugit, nam molestias maiores
            cupiditate rerum, labore iure sed eaque quidem at! Rem!
        </p>
        <p>Data: {{ data }}</p>
    </div>
</template>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>
