var TodoList = new Vue({
    el : "#todolistapp",
    data : {
        todo : {
            id : '',
            content : '',
            done : ''
        },
        todoList : []
    },
    methods: {
        chked : function(done){
            if(done){
                return { chked:true }
            } 
            else{
                return {chked:false}
            }
        },
        addTodo : function(e){
            if(this.todo.content.trim() !== ''){
                this.todoList.push({
                    id : new Date().getTime(),
                    todo : this.todo.content.trim(),
                    done : false
                });
                this.todo.content = "";
                localStorage.setItem('todoList', JSON.stringify(this.todoList));
                        }
        },
        removeTodo : function(id){
            var index = this.todoList.findIndex(function(item){
                return item.id === id;
            })
            this.todoList.splice(index, 1);
            localStorage.setItem('todoList', JSON.stringify(this.todoList));
        },
        doneToggle : function(id){
            var index = this.todoList.findIndex(function(item){
                return item.id === id;
            })
            this.todoList[index].done = !this.todoList[index].done;
            localStorage.setItem('todoList', JSON.stringify(this.todoList));
        }
    },
    created : function(){
            var todoList = localStorage.getItem('todoList');

            if(todoList){
                this.todoList = JSON.parse(todoList);
            }
        }
})