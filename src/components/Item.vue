 <template>

    <div>
        <ul>
            <li v-for="item of items" :key="item.nombre">
                {{item.nombre}}
                <button @click="item.cantidad = item.cantidad + 1">{{item.cantidad}}</button>
            </li>
        </ul>
        <!-- propiedad nombre del padre -->
        <h3>{{nombre}}</h3>
        
    </div>
 
</template>

<script type="text/javascript" src="./../Scripts/Item/item.js"></script>