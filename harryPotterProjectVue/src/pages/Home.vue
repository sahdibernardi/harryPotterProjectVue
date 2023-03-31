<script>
const  { getGryffindor } = require('../helpers')
 export default {
            methods: {
                handleClick (event) {
                    const hogHouse = (event.target.innerHTML);
                    console.log(hogHouse);
                    switch (hogHouse) {
                        case 'Gryffindor':
                            getGryffindor();
                            break;
                        case 'Slytherin':
                            getSlytherin();
                            break;
                        case 'Ravenclaw':
                            getRavenclaw();
                            break;
                        case 'Hufflepuff':
                            getHufflepuff();
                            break;
                    };
                },
            }
}
</script>

<template>
    <div>
        <button @click="handleClick">Gryffindor</button>
        <button @click="handleClick">Slytherin</button>
        <button @click="handleClick">Ravenclaw</button>
        <button @click="handleClick">Hufflepuff</button>
    </div>
</template>

<style>
   

</style>