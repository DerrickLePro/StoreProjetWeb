import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../services/admin/categorie.service";
import {Image} from "../../model/Image";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(public categoryService:CategorieService) { }
  allCategory:any =null;
  image:Image = new Image();
  ngOnInit() {
    if(this.allCategory == null){
      this.categoryService.getAllCategory()
        .subscribe(data=>{
          this.allCategory = data;
        }, error2 => {
          console.log("not null");
        });
    }


  }


  handleFileSelect(evt){
    const fil = evt.target.files.item(0);
    if (fil.type.match('image.*')){
      var files = evt.target.files;
      var file = files[0];
      this.image.nomPhoto = file.name;
      if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
      }
    }else {
      alert('invalid format!');
    }

  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.image.imageToShow= btoa(binaryString);
    console.log(btoa(binaryString));
  }


  onSaveCategory(datForm){
    console.log(this.image);

    console.log("ok Categoory !!")
    this.categoryService.saveCategorie(datForm, this.image)
      .subscribe(data=>{
        console.log("Insert OK")
      }, error2 => {
        console.log(error2);
      })
  }

  getImage(id:number){
    console.log(this.categoryService.getPhotoCat(id));
    /* return this.dataURItoBlob(this.categoryService.getPhotoCat(id));*/
    return this.categoryService.getPhotoCat(id);
  }

}
