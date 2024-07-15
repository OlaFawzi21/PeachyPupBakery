import { Component } from '@angular/core';
import { UserData } from 'src/app/interfaces/user-data';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component( {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
} )
export class ContactComponent {

  resMsg: any;

  constructor( private contactService: ContactService ) { }

  submitData( data: UserData ) {
    this.contactService.postUserData( data ).subscribe( res => {
      this.resMsg = res;
      if ( this.resMsg.message === 'Email sent successfully' ) {
        this.showAlert();
      }

    }, error => {
      console.log( error );

    } );
  }


  showAlert() {
    Swal.fire( {
      position: "center",
      icon: "success",
      title: "Email sent successfully",
      showConfirmButton: false,
      timer: 2000
    } );
  }

}
