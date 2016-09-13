import { Component } from '@angular/core';
import { Loops } from './loops';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.componentTemplate.html'
})
export class AppComponent { 

	myClass: string = "clase1";

	myClass2: string = "clase1";
	state: boolean = true;

	//default css styles
	styles = {fontStyle: "normal", color: "magenta", fontSize: "15px"};
	//Controladores de propiedades CSS
	fStyleState: boolean = true;
	colorState: boolean = true;
	fSizeState: boolean = true;
	
	//variables de ngIf
	estado: string = "Condicion TRUE [*ngIf]";
	ifState: Boolean = true;

	//variable loop size
	size = [
		new Loops (0),
		new Loops (1),
		new Loops (2),
		new Loops (3),
		new Loops (4),
	];
	loop = '';

	//variable ngSwitch
	election: string = "";

	//Cambiar clase forma estandar
	cambiarClase() {

		if(this.myClass == "clase1"){
			this.myClass = "clase2";
		} else {
			this.myClass = "clase1";
		}
	}

	//Cambiar clase con ngClass
	cambiarClase2() {
		this.myClass2 = (!this.state) ? "clase1" : "clase2";
		this.state = !this.state;
	}

	//Cambiar estilos con ngStyle
	estilos(value: number) {
		switch (value) {
			case 0:
				//tipografia
				this.styles.fontStyle = (this.fStyleState) ? "italic" : "normal";
				this.fStyleState = !this.fStyleState;
				break;
			case 1:
				//color del texto
				this.styles.color = (this.colorState) ? "orange" : "magenta";
				this.colorState = !this.colorState;
				break;
			case 2:
				//tamaño de fuente
				this.styles.fontSize = (this.fSizeState) ? "35px" : "15px";
				this.fSizeState = !this.fSizeState;
				break;
			default:
				// code...
				break;
		}	
	}

	//Condiciones con *ngIf
	condicion() {
		this.ifState = !this.ifState;
		this.estado = (this.ifState) ? "Condicion TRUE [*ngIf]" : "Condicion FALSE [*ngIf]";
	}

	onKeyUp(event: any){
		this.election = event.target.value;
	}
}


}
