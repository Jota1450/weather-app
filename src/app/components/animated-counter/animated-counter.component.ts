import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-counter',
  templateUrl: './animated-counter.component.html',
  styleUrls: ['./animated-counter.component.css'],
})
export class AnimatedCounterComponent implements OnChanges {
  @Input() valor: number = 0;
  @Input() duracion: number = 800;
  valorAnterior: number = 0;
  intervalo = 16.7; // intervalo de tiempo en milisegundos para obtener una animación suave (aprox. 60 fps)

  ngOnChanges(changes: SimpleChanges) {
    if (changes['valor']) {
      this.valorAnterior = changes['valor'].previousValue;
      this.actualizarValorGradualmente(changes['valor'].currentValue);
    }
  }

  actualizarValorGradualmente(nuevoValor: number) {
    const valorInicial = this.valorAnterior || 0;
    const pasos = Math.ceil(this.duracion / this.intervalo); // número de pasos necesarios para completar la animación
    const incremento = (nuevoValor - valorInicial) / pasos; // incremento en cada paso para llegar al nuevo valor
    let valorActual = valorInicial;

    const actualizarValor = () => {
      this.valor = parseFloat(valorActual.toFixed(2)); // redondear el valor actual para evitar decimales
      valorActual += incremento;

      if (
        (incremento > 0 && valorActual < nuevoValor) ||
        (incremento < 0 && valorActual > nuevoValor)
      ) {
        setTimeout(actualizarValor, this.intervalo);
      } else {
        this.valor = nuevoValor;
      }
    };

    actualizarValor();
  }
}
