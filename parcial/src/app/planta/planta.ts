export class Planta {

  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  altura_maxima: number;
  tipo: string;
  clima: string;
  sustrato_siembra: string;

  constructor(
      id: number,
      nombre_comun: string,
      nombre_cientifico: string,
      altura_maxima: number,
      tipo: string,
      clima: string,
      sustrato_siembra: string
  ) {
      this.id = id;
      this.nombre_comun = nombre_comun;
      this.nombre_cientifico= nombre_cientifico;
      this.altura_maxima= altura_maxima;
      this.tipo = tipo;
      this.clima = clima;
      this.sustrato_siembra = sustrato_siembra;
  }
}
