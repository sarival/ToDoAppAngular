import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Metadados
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mode: String = 'list';
  public todos: Todo[] = []; //lista de any (qualquer coisa)
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      msg: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.carregaTarefasSalvas();
    // this.todos.push(new Todo("Ir ao mercado", false, 1))
    // this.todos.push(new Todo("Estudar Angular", false, 2))
    // this.todos.push(new Todo("Passear com o cachorro", true, 3))
  }

  removeTarefa(todo: Todo){
    const index = this.todos.indexOf(todo); //pega o indice do array

    if(index !== -1){
      this.todos.splice(index, 1); //remove o item
    }
    
    this.salvar()
  }

  finalizarTarefa(todo: Todo){ //recebe como referencia - não precisa percorrer o array
    todo.done = true;
    this.salvar()
  }

  refazerTarefa(todo: Todo){
    todo.done = false;
    this.salvar()
  }

  add(){
    const msg = this.form.controls['msg'].value;
    const id = this.todos.length + 1;
    const done = false;
    this.todos.push(new Todo(msg, done, id));

    this.salvar()
    this.limpaCampo();

  }

  limpaCampo(){
    this.form.reset();
  }

  salvar(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.changeMode('list')
  }

  carregaTarefasSalvas(){
    const data = localStorage.getItem('todos');
    if(data){
      this.todos = JSON.parse(data);
    }else{
      this.todos = [];
    }
  }

  changeMode(mode: String){
    this.mode = mode;
  }
}
