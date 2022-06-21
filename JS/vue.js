Vue.component('todo-component', {
    template: `
    <div>
        <h3>What are some of your favorites?</h3>
        <div v-for="item in items" :class="{'has-success': item.completed}">
            <div>
                <input type="text" v-model="item.title"> <span class="remove" v-on:click="removeItem(item)">x</span>
            </div>
        </div>
        <div>
            <div>
                <input type="text" v-model="newItem">
                    <button :class="{newItem}" @click="addItem()">add!</button>            
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            items: [
                {
                    id: 'item-1',
                    title: 'The Office (hopefully)',
                    completed: false
                }, {
                    id: 'item-2',
                    title: 'Whatever you like',
                    completed: false
                }
            ],
            newItem: ''
        };
    },
    methods: {
        addItem: function () {
            if (this.newItem) {
                var item = {
                    id: Math.random(0, 10000),
                    title: this.newItem,
                    completed: false
                };

                this.items.push(item);
                this.newItem = '';
            }
        },
        removeItem: function (item) {
            let x = -1;
            for (let i = 0; i < this.items.length; i++) 
            { 
                if (this.items[i] == item)
                {
                    x = i;
                }
            console.log("test", this.items[i]);
            }
            if (x != -1)
            {
                this.items.splice(x, 1);
            }
          },
    },
});

var app = new Vue({
    el: '#vue-app'
});