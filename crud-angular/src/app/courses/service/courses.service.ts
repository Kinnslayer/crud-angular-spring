import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API =  '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe( // Antes de receber a informação, conseguir fazer a manipulação desses arquivos
      first(), // Fazer a requisição uma vez e fechar conexão
      delay(5000),
      tap(courses => console.log(courses)) // Verificar se está em funcionamento
    )
  }

}
