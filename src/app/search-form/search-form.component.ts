import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/Http';
 
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  // private url = "http://jsonplaceholder.typicode.com/posts";
  private url = "https://api.rescuegroups.org/http/v2.json";
  private apikey = "";
  private zipcode = "";
  private radius = 0;
  posts: any[];

  constructor(private http: Http) {
    // http.get(this.url).subscribe(response => {
    //   this.posts = response.json();
    // });
  }

  submit (form) {
    this.zipcode = form.value.zipcode;
    this.radius = form.value.radius;

    switch (form.value.searchType) {
      case "animal":
        console.log("You did an animal search.");
        this.doAnimalSearch();
        break;

      case "facility":
        console.log("You did a facility search.");
        break;
    
      default:
        break;
    }
  }

  doAnimalSearch() {
    let search = {
        apikey: this.apikey,
        objectType: "animals",
        objectAction: "publicSearch",
        search: {
          calcFoundRows : "Yes",
          resultStart : 0,
          resultLimit : 200,
          resultSort : "animalID",
          fields : ["animalID", "animalOrgID", "animalName", "animalSpecies", "animalBreed", "animalThumbnailUrl", "animalPictures"],
          filters : [
            {
              fieldName : "animalLocationDistance",
              operation : "radius",
              criteria : this.radius
            },
            {
              fieldName : "animalLocation",
              operation : "equals",
              criteria : this.zipcode
            }
          ]
        }
      };
    
    this.http.post(this.url, JSON.stringify(search)).subscribe(response => {
      this.posts = Object.values(response.json().data);
      console.log(this.posts);
    });
  }

  ngOnInit() {
  }
}
