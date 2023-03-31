export default {
    install(Vue) {
        Vue.mixin ({
    data: () => ({
        fetchGryffindor: '',
        fetchSlytherin: '',
        fetchRavenclaw: '',
        fetchHufflepuff: '',
    }),
    methods: {
        getGryffindor () {
            fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
                .then( response => response.json())
                .then(data => console.log(data))
        },
//         getGryffindor: getSlytherin() {
//             fetch('https://hp-api.onrender.com/api/characters/house/slytherin')
//                 .then( response => response.json())
//                 .then(data => console.log(data))
//         },
//         getRavenclaw() {
//             fetch('https://hp-api.onrender.com/api/characters/house/ravenclaw')
//                 .then( response => response.json())
//                 .then(data => console.log(data))
//         },
//         getHufflepuff() {
//             fetch('https://hp-api.onrender.com/api/characters/house/hufflepuff')
//             .then( response => response.json())
//                 .then(data => console.log(data))
//         },
            }
        })
    }
}