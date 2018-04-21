import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==   ';
  imageToShow: any;

  dataURItoBlob() {
    var binary = atob(this.b64Data);
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

  showImage(){
    this.createImageFromBlob(this.dataURItoBlob());
  return this.imageToShow;
  }
}
