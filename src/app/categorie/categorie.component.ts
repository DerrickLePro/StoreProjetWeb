import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../services/admin/categorie.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(public categoryService:CategorieService) { }
  selectedFiles: FileList
  currentFileUpload: File
  allCategory:any;
  ngOnInit() {
    this.categoryService.getAllCategory()
      .subscribe(data=>{
        this.allCategory = data;
      }, error2 => {
     console.log(error2);
      });

  }

  selectFile(event) {
    const file = event.target.files.item(0)

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  imageToShow: any;

  dataURItoBlob(b64Data) {
    var binary = atob(b64Data);
    var array = new  Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      array[i] = binary.charCodeAt(i);
    }
    var bytearray = new  Uint8Array(array);
    var blob = new Blob([bytearray], {type: 'image/jpg'
    });

    return blob;
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  onSaveCategory(datForm){
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log("ok Categoory !!")
    console.log(this.currentFileUpload);
    this.categoryService.saveCategorie(datForm, this.currentFileUpload)
      .subscribe(data=>{
        console.log("Insert OK")
      }, error2 => {
        console.log(error2);
      })
  }

  getImage(id:number){
    console.log(this.categoryService.getPhotoCat(id));
    return this.categoryService.getPhotoCat(id);
  }

}
