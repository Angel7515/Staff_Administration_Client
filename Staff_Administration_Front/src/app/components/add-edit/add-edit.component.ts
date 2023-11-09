import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {
  form: FormGroup;
  get_id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router, private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      possition: ['', Validators.required],
      type_em: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      supervisor_name: ['', Validators.required],
      salary: ['', Validators.required],
      birthday: ['', Validators.required],
      program: ['', Validators.required],
      computer: ['', Validators.required],
      phone: ['', Validators.required],
      office: ['', Validators.required],
      email: ['', Validators.required]
    })
    this.get_id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.get_id != 0) {
      this.operacion = 'Editar ';
      this.getUser(this.get_id);
    }
  }

  getUser(id: number) {
    this._userService.getUser(id).subscribe((data: User) => {
      this.form.setValue({
        first_name: data.first_name,
        last_name: data.last_name,
        possition: data.possition,
        type_em: data.type_em,
        start_date: data.start_date,
        end_date: data.end_date,
        supervisor_name: data.supervisor_name,
        salary: data.salary,
        birthday: data.birthday,
        program: data.program,
        computer: data.computer,
        phone: data.phone,
        office: data.office,
        email: data.email
      })
    })
  }

  addUser() {
    const user: User = {
      staff_num: this.form.value.staff_num,
      first_name: this.form.value.first_name,
      last_name: this.form.value.last_name,
      possition: this.form.value.possition,
      type_em: this.form.value.type_em,
      start_date: this.form.value.start_date,
      end_date: this.form.value.end_date,
      supervisor_name: this.form.value.supervisor_name,
      salary: this.form.value.salary,
      birthday: this.form.value.birthday,
      program: this.form.value.program,
      computer: this.form.value.computer,
      phone: this.form.value.phone,
      office: this.form.value.office,
      email: this.form.value.email
    }

    if (this.get_id != 0) {
      user.staff_num = this.get_id
      this._userService.updateUser(this.get_id, user).subscribe(() => {
        this.toastr.info(`El Usuario ${user.first_name} fue actualizado con exito! `, 'User Actualizado');
        this.router.navigate(['/']);
      })
    } else {
      this._userService.saveUser(user).subscribe(() => {
        this.toastr.success(`El Usuario ${user.first_name} fue registrado con exito! `, 'User Registrado');
        this.router.navigate(['/']);
      })
    }
  }
}
