import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ServicioService} from "../servicio.service";
import {saveAs} from 'file-saver'
import alertify from 'alertifyjs'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public servicio: ServicioService) { }

  ngOnInit() {
  }
  hola(){
    // console.log(this.Municipio);
    console.log(this.estadoEscogido)
    //buscar los municipios del estado

    const municipios = this.Municipio;

    // this.Municipio
    this.municipiosMostrar = municipios.filter(municipio => municipio.estado == this.estadoEscogido)
    console.log(this.municipiosMostrar)
  }

  Cobertura: any = [1,1,1];
  CoberturaSeleccionada: any;
  botonContinuar= true ;

  estadoEscogido: any;
  municipioEscogido: any = [];
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

    {estado: 4,municipio: 'Queretaro',riesgo:1},
    {estado: 4,municipio: 'Colón',riesgo:1},
    {estado: 4,municipio: 'Corregidora',riesgo:1},
    {estado: 4,municipio: 'El Marqués',riesgo:1},
    {estado: 4,municipio: 'Huimilpan',riesgo:1},

  ]
  premiumMensaje= false;
  
  //Datos de Primas --> Excel

        //   Los objetos son: 
                  // - Celular
                  // -Bicicleta
                  // -Equipo electronico
                  // -Electrodomestico
                  // -Joyas
                  // -Mobiliario


    // Factores de Riesgo por Estado
            
 
  FactorDeRiesgo: any = [
    [1.10050583563509 , 1.02408740844639 , 0.661230180752083], //Alto, Medio, Riesgo
    [1.25886001839301 , 0.569433839965301 , 0.42346284270968],
    [1.96166565711671 , 0.989388331052683 , 0.464365727489081],
    [1.08688838689124 , 0.942058789253324 , 0],
    [1.000 , 1.000  , 1.000]
  ]

  MargenDeContribucion = 47;
  GastosOperativos = 7;
  GastosAdquisicion = 35;
  MargenDeUtilidad = 5;
  FactorDeducible = 15;
  Inflacion = 4;
  Gastos = 15;

  PrimaFinal: any = 0;

  // Bases Tecnicas y Financieras
    // Primas de Riesgo [ESTADO][BICICLETA , CELULAR , ELECTRODOMESTICO, ELECTRONICO, JOYAS, MOBILIARIO , GASTOS MEDICOS , GENERAL]

  PrimasDeRiesgo= [[
    16.55 , 3.69 , 11.19 , 96.65 , 27.2 , 27.2 , 28.14 , 10.54 , 701.45
  ],[
    6.61 , 7.12 , 21.57 , 186.36 , 257.16 , 257.16 , 54.26 , 17.1 , 1350.87
  ],[
    11.09 , 11.95 , 36.19 , 312.62 , 38.24 , 38.24 , 91.02 , 28.68 , 1998.07
  ],[
    24.92 , 7.18 , 20.76 , 66.45 , 22.96 , 22.96 , 54.65 , 6.85 , 1235.53
  ],[
    5.25 , 5.65 , 17.12 , 106.51 , 18.09 , 18.09 , 43.05 , 3.04 , 995.75
  ]] 

  //Estas funciones son para habilitar o deshabilitar los select de los objetos

  selectObjetos: any = [false, false, false, false, false, false]

  //Valores que brindaran la palomita dentro del select
  valorObjetos: any = [false, false, false, false, false, false]

  objetosSeleccionados: any = []
  
  cobertura : any = 5;
  coberturaFiltro : any = 5;

  //Funciones

  municipio: any = 3000;

  escogerMunicipio(){
    this.municipio = this.municipioEscogido;
  }
  tipodeCovertura(i: any){
    this.objetosSeleccionados= []
    if(i == 0){
      //Covertura Limitada  
      this.Cobertura = [1,0,0]
      this.tipoDeCobertura = "Cobertura Limitada"
      this.descripcion = "Cubre el robo de tres artículos elegidos de la lista de objetos personales IMPORTAN-3, siempre que ocurran dentro de su domicilio. La suma asegurada es el valor real acumulado de los tres bienes y existe un deducible de $4,500.00 por evento a cargo del asegurado. "
      this.selectObjetos  = [false, false, false, false, false, false]
      this.valorObjetos = [false, false, false, false, false, false]
      this.cobertura = 0
      this.premiumMensaje = false
    }
    if(i==1){
      //Covertura Amplia
      this.Cobertura = [0,1,0]
      this.tipoDeCobertura = "Cobertura Amplia"
      this.descripcion = "Cubre el robo de tres artículos elegidos de la lista de objetos personales IMPORTAN-3, agregando la cobertura de gastos médicos en caso de que sea necesario incurrir en gastos en salud a consecuencia del asalto. La suma asegurada es el valor real acumulado de los tres objetos y al igual que la cobertura limitada, el deducible es de $4,500.00. La suma asegurada de gastos médicos es de $20,000.00 y no tiene deducible. "
      this.selectObjetos  = [false, false, false, false, false, false]
      this.valorObjetos = [false, false, false, false, false, false]
      this.cobertura = 1
      this.premiumMensaje = false

    }
    if(i==2){
      // Covertura Premium
      this.Cobertura = [0,0,1]
      this.tipoDeCobertura = "Cobertura Premium"
      this.descripcion = " La compañía conviene cubrir las pérdidas o daños materiales por el robo de cualquier objeto previamente señalado en la solicitud, sin necesidad de que estén dentro de la lista IMPORTAN-3. También están amparados los gastos médicos que pudiera ocasionar el siniestro. Para esta cobertura, existe una suma asegurada máxima de $100,000.00 y el deducible de robo permanece en $4,500.00"
      this.selectObjetos  = [true, true, true, true, true, true]
      this.valorObjetos = [true, true, true, true, true, true]
      this.objetosSeleccionados = [0,1,2,3,4,5]
      this.cobertura =2 
      this.premiumMensaje = true

    }
    this.CoberturaSeleccionada = i
    this.botonContinuar= false;

  } //Obtiene el tipo de Covertura y modifica el estilo en la siguiente funcion
  escogerCobertura(){
    this.coberturaFiltro = this.cobertura
  }
  
  botonCoverturaColor(i: any) {
    if(this.Cobertura[i]==0){
      const cambioColor = {
        "background-color": "white",
        "color": "black"
      }
      return cambioColor
    }
  }

  selectSeleccionado(i: any){
    const valorDelCheckBox = this.valorObjetos[i]

    if(valorDelCheckBox == false){
      this.agregarObjetos(i)
    }else{
      this.quitarObjetos(i)
    }
  
    console.log(this.objetosSeleccionados);
    
    
  }

  agregarObjetos(i: any){
    this.objetosSeleccionados.push(i)
    if(this.objetosSeleccionados.length == 3){
      for(let j=0; j<6; j++){
        for(let m=0; m<3 ; m++){
          if(j != this.objetosSeleccionados[m]){
            this.selectObjetos[j] = !this.selectObjetos[j]
          }
        }
      }
    }
  }
  quitarObjetos(i: any){
    this.selectObjetos = [false, false, false, false, false, false]
    
    const objetos = this.objetosSeleccionados.length;
    for(let m=0; m<objetos; m++){
      if(i == this.objetosSeleccionados[m]){
        this.objetosSeleccionados.splice(m,1);
      }
    }
  }

  finalizar(){
    const i = 125;
  
    if(this.municipio != 3000 && this.coberturaFiltro != 5 && this.objetosSeleccionados.length>2){
    //    Algoritmo para determinar la prima 
      const municipioRiesgo= this.municipio;
      switch (this.coberturaFiltro) {
        case 0:
          //     Cobertura Limitada
          this.PrimaFinal = this.funcionCoberturaLimitada();
          break;
        case 1:
          //     Cobertura Amplia
          this.PrimaFinal = this.funcionCoberturaAmplia();
          break;
        case 2:
          //     Cobertura Premium
          this.PrimaFinal = this.funcionCoberturaPremium();
          break;
          
        default:
          break;
      }
      this.PrimaFinal = this.PrimaFinal.toFixed(2)
      if(isNaN(this.PrimaFinal)){
        alertify.error('Valor NaN'); 
        // this.finalizar();
      }else{
        alertify.success('Descargando');
        this.servicio.obtenerPdf(this.PrimaFinal).subscribe(
          res => {
            saveAs(res, "importan-3")
          }, 
          err =>{

          }
        );
      }
      
    }else{
      alertify.error('Verificar los valores'); 
    }
    
  }

  funcionCoberturaLimitada(){
    let sumaPRM = 0;
    const municipioRiesgo = this.municipio;
    console.log(this.objetosSeleccionados);
    
    for(let i = 0 ; i<this.objetosSeleccionados.length; i++){
      const precio = this.PrimasDeRiesgo[this.estadoEscogido][this.objetosSeleccionados[i]]
      sumaPRM = sumaPRM + precio
    }
    const formula = sumaPRM * (1 + (this.Gastos/100)) * this.FactorDeRiesgo[this.estadoEscogido][municipioRiesgo] / (1 - (this.MargenDeContribucion/100))
    // const formula = sumaPRM * this.FactorDeRiesgo[this.estadoEscogido][municipioRiesgo]
    console.log(formula);
    return formula;
  }
  funcionCoberturaAmplia(){
    let sumaPRM = 0;
    const municipioRiesgo = this.municipio;
    console.log(this.objetosSeleccionados);
    
    for(let i = 0 ; i<this.objetosSeleccionados.length; i++){
      const precio = this.PrimasDeRiesgo[this.estadoEscogido][this.objetosSeleccionados[i]]
      sumaPRM = sumaPRM + precio
    }
    const formula = (sumaPRM + this.PrimasDeRiesgo[this.estadoEscogido][7])* (1 + (this.Gastos/100)) * this.FactorDeRiesgo[this.estadoEscogido][municipioRiesgo] / (1 - (this.MargenDeContribucion/100))
    // const formula = sumaPRM * this.FactorDeRiesgo[this.estadoEscogido][municipioRiesgo]
    console.log(formula);
    return formula;

  }
  funcionCoberturaPremium(){
    let sumaPRM = 0;
    const municipioRiesgo = this.municipio;
    console.log(this.objetosSeleccionados);
    
    // for(let i = 0 ; i<this.objetosSeleccionados.length; i++){
    //   const precio = this.PrimasDeRiesgo[this.estadoEscogido][this.objetosSeleccionados[i]]
    //   sumaPRM = sumaPRM + precio
    // }
    const formula = (this.PrimasDeRiesgo[this.estadoEscogido][8])* (1 + (this.Gastos/100)) * this.FactorDeRiesgo[this.estadoEscogido][municipioRiesgo] / (1 - (this.MargenDeContribucion/100))
    // const formula = sumaPRM * this.FactorDeRiesgo[this.estadoEscogido][municipioRiesgo]
    console.log(formula);
    return formula;

  }

 
 

 
  

 
  
  
}
