export default {
    // propiedad nombre del padre
    props: ['nombre'], 

    data: function()
    {
        return {
            items: [
                {nombre: 'item 1', cantidad:0},
                {nombre: 'item 2', cantidad:0},
                {nombre: 'item 3', cantidad:0}
              ]
        }          
    }
}