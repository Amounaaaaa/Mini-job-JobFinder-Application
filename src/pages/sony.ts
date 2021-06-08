import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../service/clients.service';
import {Fournisseur} from '../model/fournisseur';
import {VendeurService} from '../service/vendeur.service';
import {Client} from '../model/client';
import {ImageService} from '../service/image.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
    selector: 'app-inscrit',
    templateUrl: './inscrit.component.html',
    styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {
    client = new Client();
    fournisseur = new Fournisseur();
    submitted =false;
    submittedd =false;
    filesToUpload: Array<File>;
    photo;
    registerForm: FormGroup;
    registerForm2: FormGroup;
    clt= false;
    fourn= false;


    constructor(private srvcclient: ClientsService, private srvcfour: VendeurService,
                private imgsrc: ImageService,private formBuilder: FormBuilder,private router:Router) {
        this.photo =''
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            phone: ['', Validators.required] ,

            adresse:  ['', Validators.required],
            fax:  ['', Validators.required]

        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });

        this.registerForm2 = this.formBuilder.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            phone: ['', Validators.required] ,
            raisonsocial:  ['', Validators.required],
            matriculefiscale:  ['', Validators.required],
            fax:  ['', Validators.required]

        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
    }
    getrole(role,e){
        if(role=="fournisseur"){
            this.fourn = true;
            this.clt =false;

        }
        if(role=="client"){
            this.fourn=false;
            this.clt=true;
        }
    }
    get f() { return this.registerForm.controls; }
    get f1() { return this.registerForm2.controls; }
    inscritclient() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        const data = {
            nom : this.registerForm.value["nom"],
            prenom:this.registerForm.value["prenom"],
            username: this.registerForm.value["username"],
            email: this.registerForm.value["email"],
            password: this.registerForm.value["password"],
            confirmPassword: this.registerForm.value["confirmPassword"],
            phone: this.registerForm.value["phone"],

            adresse: this.registerForm.value["adresse"],
            fax: this.registerForm.value["fax"],
            photo: this.filesToUpload[0].name
        }

        this.srvcclient.inscrit(data).subscribe(res => {
            console.log(res);
            this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
                console.log(rest);
                // if (event.type === HttpEventType.UploadProgress) {
                //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
                // } else if (event instanceof HttpResponse) {
                //   console.log('File is completely uploaded!');
                // }
            });
            Swal.fire('ajout', 'Client ajouté avec succès ', 'success')
            this.client = new Client();
            this.photo = "choisir une image"
            this.registerForm.reset();
            this.clt =false;
            this.router.navigate([''])
        },error2 =>
            Swal.fire('Succeé', 'Les données a été ajouter', 'success'));
    }
    inscritfourn() {
        this.submittedd = true;

        if (this.registerForm2.invalid) {
            return;
        }
        const data = {
            nom : this.registerForm2.value["nom"],
            prenom:this.registerForm2.value["prenom"],
            username: this.registerForm2.value["username"],
            email: this.registerForm2.value["email"],
            password: this.registerForm2.value["password"],
            confirmPassword: this.registerForm2.value["confirmPassword"],
            phone: this.registerForm2.value["phone"],
            raisonsocial: this.registerForm2.value["raisonsocial"],
            matriculefiscale: this.registerForm2.value["matriculefiscale"],
            fax: this.registerForm2.value["fax"],
            photo: this.filesToUpload[0].name
        }

        this.srvcfour.inscritt(data).subscribe(res => {
            console.log(res);
            this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
                console.log(rest);
                // if (event.type === HttpEventType.UploadProgress) {
                //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
                // } else if (event instanceof HttpResponse) {
                //   console.log('File is completely uploaded!');
                // }
            });
            Swal.fire('ajout', 'Fournisseur ajouté avec succès ', 'success')
            this.photo = ''
            this.registerForm2.reset();
            this.fourn =false;
            this.router.navigate([''])
        },error2 =>
            Swal.fire('ajout', 'Fournisseur ajouté avec succès', 'success'));
    }
    MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        }}
    recuperFile(file) {
        this.filesToUpload = <Array<File>>file.target.files;

        this.photo = file.target.files[0]['name'];
    }
}
