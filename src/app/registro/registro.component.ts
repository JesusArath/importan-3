import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hola(i){
    // console.log(this.Municipio);
    console.log(this.estadoEscogido)
    //buscar los municipios del estado

    const municipios = this.Municipio;

    // this.Municipio
    this.municipiosMostrar = municipios.filter(municipio => municipio.estado == this.estadoEscogido)
    console.log(this.municipiosMostrar)
    alert("hola")
  }

  Cobertura: any = [1,1,1];
  CoberturaSeleccionada: any;
  
  tipodeCovertura(i){
    if(i == 0){
      //Covertura Limitada  
      this.Cobertura = [1,0,0]
      this.tipoDeCobertura = "Cobertura Limitada"
      this.descripcion = "Se cubre el robo de cualquiera de los tres objetos a elegir que se encuentren dentro de la lista";
    }
    if(i==1){
      //Covertura Amplia
      this.Cobertura = [0,1,0]
      this.tipoDeCobertura = "Cobertura Amplia"
      this.descripcion = "Cubre robo de cualquiera de los tres objetos elegidos además de gastos médicos derivados del asalto";
    }
    if(i==2){
      // Covertura Premium
      this.Cobertura = [0,0,1]
      this.tipoDeCobertura = "Cobertura Premium"
      this.descripcion = "Cubre robo de objetos personales sin restricciones, bajo las mismas condiciones que la cobertura amplia, incluyendo la cobertura de gastos médicos derivados del asalto.";
    }
    this.CoberturaSeleccionada = i
  } //Obtiene el tipo de Covertura y modifica el estilo en la siguiente funcion
  
  botonCoverturaColor(i) {
    if(this.Cobertura[i]==0){
      const cambioColor = {
        "background-color": "white",
        "color": "black"
      }
      return cambioColor
    }
  }

  estadoEscogido: any;
  municipiosMostrar: any = [];
  descripcion: any;
  tipoDeCobertura: any = "";

  
  Riesgo=['Alto', 'Medio', 'Bajo']
  Estado=['CDMX','Guadalajara ', 'Monterrey', 'Puebla', 'Queretaro'];
  Municipio: any =[
    // ciudad de mexico
    {estado: 0,municipio: 'Acolman',riesgo:1},
    {estado: 0,municipio: 'Alvaro Obregon',riesgo:0},
    {estado: 0,municipio: 'Amecameca',riesgo:1},
    {estado: 0,municipio: 'Apaxco',riesgo:2},
    {estado: 0,municipio: 'Atenco',riesgo:1},
    {estado: 0,municipio: 'Atizapan de Zaragoza',riesgo:1},
    {estado: 0,municipio: 'Atlautla',riesgo:1},
    {estado: 0,municipio: 'Axapusco',riesgo:2},
    {estado: 0,municipio: 'Ayapango',riesgo:1},
    {estado: 0,municipio: 'Azcapotzalco',riesgo:1},
    {estado: 0,municipio: 'Benito Juarez',riesgo:1},
    {estado: 0,municipio: 'Chalco',riesgo:0},
    {estado: 0,municipio: 'Chiautla',riesgo:1},
    {estado: 0,municipio: 'Chicoloapan',riesgo:2},
    {estado: 0,municipio: 'Chiconcuac',riesgo:1},
    {estado: 0,municipio: 'Chimalhuacan',riesgo:0},
    {estado: 0,municipio: 'Coacalco de Berriozabal',riesgo:2},
    {estado: 0,municipio: 'Cocotitlán',riesgo:0},
    {estado: 0,municipio: 'Coyoacan',riesgo:0},
    {estado: 0,municipio: 'Coyotepec',riesgo:1},
    {estado: 0,municipio: 'Cuajimalpa de Morelos',riesgo:1},
    {estado: 0,municipio: 'Cuauhtemoc',riesgo:0},
    {estado: 0,municipio: 'Cuautitlán',riesgo:2},
    {estado: 0,municipio: 'Cuautitlán Izcalli',riesgo:2},
    {estado: 0,municipio: 'Ecatepec de Morelos',riesgo:0},
    {estado: 0,municipio: 'Ecatzingo',riesgo:1},
    {estado: 0,municipio: 'Gustavo A. Madero',riesgo:0},
    {estado: 0,municipio: 'Huehuetoca',riesgo:2},
    {estado: 0,municipio: 'Hueypoxtla',riesgo:2},
    {estado: 0,municipio: 'Huixquilucan',riesgo:0},
    {estado: 0,municipio: 'Isidro Fabela',riesgo:2},
    {estado: 0,municipio: 'Ixtapaluca',riesgo:1},
    {estado: 0,municipio: 'Iztacalco',riesgo:0},
    {estado: 0,municipio: 'Iztapalapa',riesgo:0},
    {estado: 0,municipio: 'Jaltenco',riesgo:1},
    {estado: 0,municipio: 'Jilotzingo',riesgo:1},
    {estado: 0,municipio: 'Juchitepec',riesgo:1},
    {estado: 0,municipio: 'La Magdalena Contreras',riesgo:2},
    {estado: 0,municipio: 'La Paz',riesgo:2},
    {estado: 0,municipio: 'Melchor Ocampo',riesgo:1},
    {estado: 0,municipio: 'Miguel Hidalgo',riesgo:1},
    {estado: 0,municipio: 'Milpa Alta',riesgo:1},
    {estado: 0,municipio: 'Naucalpan de Juárez',riesgo:0},
    {estado: 0,municipio: 'Nextlalpan',riesgo:0},
    {estado: 0,municipio: 'Nezahualcoyotl',riesgo:1},
    {estado: 0,municipio: 'Nicolás Romero',riesgo:2},
    {estado: 0,municipio: 'Ozumba',riesgo:1},
    {estado: 0,municipio: 'Papalotla',riesgo:1},
    {estado: 0,municipio: 'San Martín de las Pirámides',riesgo:2},
    {estado: 0,municipio: 'Tecamac',riesgo:2},
    {estado: 0,municipio: 'Temamatla',riesgo:0},
    {estado: 0,municipio: 'Temascalapa',riesgo:1},
    {estado: 0,municipio: 'Tenango del Aire',riesgo:2},
    {estado: 0,municipio: 'Teoloyucan',riesgo:1},
    {estado: 0,municipio: 'Tepetlaoxtoc',riesgo:1},
    {estado: 0,municipio: 'Tepetlixpa',riesgo:1},
    {estado: 0,municipio: 'Tepotzotlán',riesgo:0},
    {estado: 0,municipio: 'Tequixquiac',riesgo:1},
    {estado: 0,municipio: 'Texcoco',riesgo:1},
    {estado: 0,municipio: 'Tezoyuca',riesgo:1},
    {estado: 0,municipio: 'Tlahuac',riesgo:0},
    {estado: 0,municipio: 'Tlalmanalco',riesgo:2},
    {estado: 0,municipio: 'Tlalnepantla de Baz',riesgo:0},
    {estado: 0,municipio: 'Tlalpan',riesgo:0},
    {estado: 0,municipio: 'Tonanitla',riesgo:0},
    {estado: 0,municipio: 'Tultepec',riesgo:2},
    {estado: 0,municipio: 'Tultitlán',riesgo:0},
    {estado: 0,municipio: 'Valle de Chalco Solidaridad',riesgo:1},
    {estado: 0,municipio: 'Venustiano Carranza',riesgo:0},
    {estado: 0,municipio: 'Villa del Carbón',riesgo:2},
    {estado: 0,municipio: 'Xochimilco',riesgo:0},
    {estado: 0,municipio: 'Zumpango',riesgo:2},


    // guadalajara
    {estado: 1,municipio: 'El Salto',riesgo:2},

    {estado: 1,municipio: 'Guadalajara',riesgo:0},
    {estado: 1,municipio: 'Ixtlahuacán de los Membrillos',riesgo:2},
    {estado: 1,municipio: 'Juanacatlán',riesgo:2},
    {estado: 1,municipio: 'San Pedro Tlaquepaque',riesgo:1},
    {estado: 1,municipio: 'Tlajomulco de Zuñiga',riesgo:2},
    {estado: 1,municipio: 'Tonala',riesgo:2},
    {estado: 1,municipio: 'Zapopan',riesgo:0},

    //Monterrey

    {estado: 2,municipio: 'General Escobedo',riesgo:0},
    {estado: 2,municipio: 'Guadalupe',riesgo:0},
    {estado: 2,municipio: 'Monterrey',riesgo:0},
    {estado: 2,municipio: 'Santa Catarina',riesgo:0},
    {estado: 2,municipio: 'Santiago',riesgo:0},
    {estado: 2,municipio: 'Garcia',riesgo:2},
    {estado: 2,municipio: 'Juarez',riesgo:2},
    {estado: 2,municipio: 'Cadereyta Jimenez',riesgo:2},
    {estado: 2,municipio: 'Apodaca',riesgo:1},
    {estado: 2,municipio: 'San Nicolas de los Garza',riesgo:1},
    {estado: 2,municipio: 'San Pedro Garza Garcia',riesgo:1},
    {estado: 2,municipio: 'Salinas Victoria',riesgo:1},

    //Puebla

    {estado: 3,municipio: 'Puebla',riesgo:0},
    {estado: 3,municipio: 'Acuamanala de Miguel Hidalgo',riesgo:1},
    {estado: 3,municipio: 'Amozoc',riesgo:1},
    {estado: 3,municipio: 'Chiautzingo',riesgo:2},
    {estado: 3,municipio: 'Coronango',riesgo:2},
    {estado: 3,municipio: 'Cuautlancingo',riesgo:1},
    {estado: 3,municipio: 'Domingo Arenas',riesgo:2},
    {estado: 3,municipio: 'Huejotzingo',riesgo:1},
    {estado: 3,municipio: 'Ixtacuixtla de Mariano Matamoros',riesgo:1},
    {estado: 3,municipio: 'Juan C. Bonilla',riesgo:2},
    {estado: 3,municipio: 'Mazatecochco de José María Morelos',riesgo:1},
    {estado: 3,municipio: 'Nativitas',riesgo:1},
    {estado: 3,municipio: 'Ocoyucan',riesgo:2},
    {estado: 3,municipio: 'Papalotla de Xicohténcatl',riesgo:2},
    {estado: 3,municipio: 'San Andrés Cholula',riesgo:1},
    {estado: 3,municipio: 'San Felipe Teotlalcingo',riesgo:2},
    {estado: 3,municipio: 'San Gregorio Atzompa',riesgo:2},
    {estado: 3,municipio: 'San Jerónimo Zacualpan',riesgo:2},
    {estado: 3,municipio: 'San Juan Huactzinco',riesgo:2},
    {estado: 3,municipio: 'San Lorenzo Axocomanitla',riesgo:2},
    {estado: 3,municipio: 'San Martín Texmelucan',riesgo:0},
    {estado: 3,municipio: 'San Miguel Xoxtla',riesgo:2},
    {estado: 3,municipio: 'San Pablo del Monte',riesgo:2},
    {estado: 3,municipio: 'San Pedro Cholula',riesgo:1},
    {estado: 3,municipio: 'San Salvador el Verde',riesgo:2},
    {estado: 3,municipio: 'Santa Ana Nopalucan',riesgo:2},
    {estado: 3,municipio: 'Santa Apolonia Teacalco',riesgo:2},
    {estado: 3,municipio: 'Santa Catarina Ayometla',riesgo:2},
    {estado: 3,municipio: 'Santa Cruz Quilehtla',riesgo:2},
    {estado: 3,municipio: 'Tenancingo',riesgo:1},
    {estado: 3,municipio: 'Teolocholco',riesgo:1},
    {estado: 3,municipio: 'Tepatlaxco de Hidalgo',riesgo:0},
    {estado: 3,municipio: 'Tepetitla de Lardizábal',riesgo:1},
    {estado: 3,municipio: 'Tepeyanco',riesgo:2},
    {estado: 3,municipio: 'Tetlatlahuca',riesgo:2},
    {estado: 3,municipio: 'Tlaltenango',riesgo:2},
    {estado: 3,municipio: 'Xicohtzinco',riesgo:1},
    {estado: 3,municipio: 'Zacatelco',riesgo:2},

    //Queretaro

    {estado: 4,municipio: 'Queretaro',riesgo:0},
    {estado: 4,municipio: 'Colón',riesgo:1},
    {estado: 4,municipio: 'Corregidora',riesgo:1},
    {estado: 4,municipio: 'El Marqués',riesgo:0},
    {estado: 4,municipio: 'Huimilpan',riesgo:1},

  ]
  
 
  
  
}
