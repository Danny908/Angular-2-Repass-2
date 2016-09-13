"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var loops_1 = require('./loops');
var AppComponent = (function () {
    function AppComponent() {
        this.myClass = "clase1";
        this.myClass2 = "clase1";
        this.state = true;
        //default css styles
        this.styles = { fontStyle: "normal", color: "magenta", fontSize: "15px" };
        //Controladores de propiedades CSS
        this.fStyleState = true;
        this.colorState = true;
        this.fSizeState = true;
        //variables de ngIf
        this.estado = "Condicion TRUE [*ngIf]";
        this.ifState = true;
        //variable loop size
        this.size = [
            new loops_1.Loops(0),
            new loops_1.Loops(1),
            new loops_1.Loops(2),
            new loops_1.Loops(3),
            new loops_1.Loops(4),
        ];
        this.loop = '';
        //variable ngSwitch
        this.election = "";
    }
    //Cambiar clase forma estandar
    AppComponent.prototype.cambiarClase = function () {
        if (this.myClass == "clase1") {
            this.myClass = "clase2";
        }
        else {
            this.myClass = "clase1";
        }
    };
    //Cambiar clase con ngClass
    AppComponent.prototype.cambiarClase2 = function () {
        this.myClass2 = (!this.state) ? "clase1" : "clase2";
        this.state = !this.state;
    };
    //Cambiar estilos con ngStyle
    AppComponent.prototype.estilos = function (value) {
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
    };
    //Condiciones con *ngIf
    AppComponent.prototype.condicion = function () {
        this.ifState = !this.ifState;
        this.estado = (this.ifState) ? "Condicion TRUE [*ngIf]" : "Condicion FALSE [*ngIf]";
    };
    AppComponent.prototype.onKeyUp = function (event) {
        this.election = event.target.value;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.componentTemplate.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map