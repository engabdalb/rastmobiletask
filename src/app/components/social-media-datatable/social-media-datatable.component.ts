import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { DummyService } from 'src/app/services/dummy.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { SocialMedia } from 'src/app/models/social-media-model/social-media-model';


@Component({
  selector: 'app-social-media-datatable',
  templateUrl: './social-media-datatable.component.html',
  styleUrls: ['./social-media-datatable.component.scss']
})

export class SocialMediaDatatableComponent implements OnInit {

  modalOpen: boolean = false;
  socialMediaList: SocialMedia[] = [];
  dtOptions: DataTables.Settings = {};
  data: SocialMedia[] = [];
  filteredData: SocialMedia[] = [];
  form: any = {
    searchText: null,
  };
  closeResult = '';

  newSocialMedia: SocialMedia = {
    id: 0,
    socialMediaLink: '',
    socialMediaName: '',
    description: ''
  };

  socialForm = new FormGroup({
    socialMediaLink: new FormControl(),
    socialMediaName: new FormControl(),
    description: new FormControl(),
  });

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;

  constructor(private modalService: NgbModal, private http: HttpClient, private dummyService: DummyService) { }

  /*open Modal function */
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  /* Reason of dismiss modal */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /*filter Items when write in searchbar */
  filterItems(): void {
    if (this.form.searchText) {
      this.filteredData = this.data.filter(item =>
        item.socialMediaLink.toLowerCase().includes(this.form.searchText.toLowerCase()) ||
        item.socialMediaName.toLowerCase().includes(this.form.searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(this.form.searchText.toLowerCase())
      );
    } else {
      this.filteredData = this.data;
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      lengthMenu: [10, 25, 50],
      searching: false,
      info: false,
      processing: true,
      dom: 'frtlip',
      language: {
        "lengthMenu": "Show: _MENU_",
        "paginate": {
          "first": "First2",
          "last": "Last2",
          "next": "<i class='icon_button fa fa-chevron-right'></i>",
          "previous": "<i class='icon_button fa fa-chevron-left'></i>",
        }
      }
    };

    this.checkDb();

  }

  /*check local storage if data exist or empty  */
  checkDb() {

    let storageList = localStorage.getItem("socialMediaList");
    if (!storageList) {
      /* Dummy data is used here from services */
      localStorage.setItem('socialMediaList', JSON.stringify(this.dummyService.getItems()));
      this.data = this.dummyService.getItems();
      this.filteredData = this.dummyService.getItems();
    } else {
      if (storageList != '' && storageList != null && typeof storageList != "undefined") {
        this.data = JSON.parse(storageList!);
      }
      this.filteredData = this.data;
    }
  }
/* submit formData to localstorage */
  submitForm(formData: SocialMedia) {
    let value = localStorage.getItem("socialMediaList");
    /* check localstorage if data exist assign it to data variable */
    if (value != '' && value != null && typeof value != "undefined") {
      this.data = JSON.parse(value!);
    }

    /* push submitted formData to data variable*/
    formData.id = this.generateUniqueId();
    this.data.push(formData);
    localStorage.setItem('socialMediaList', JSON.stringify(this.data));
    this.modalService.dismissAll();
    this.resetForm();
    this.checkDb();
  }

  resetForm() {
    this.newSocialMedia = {
      id: 0,
      socialMediaLink: '',
      socialMediaName: '',
      description: ''
    };
  }

  generateUniqueId(): number {
    return new Date().getTime();
  }

}

export { SocialMedia };
