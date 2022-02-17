// CLASSES
class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        // Hacemos una copia del arrat citas y le pasamos la cita actual
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id )
    }
    // Itera en cada una de las citas, verifica que la cita actualizada y la cita actual tengan el mismo ID
    // en caso de que esa condicion se cumpla se reescribe todo el obj con la cita actualizada
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita )
    }
}

export default Citas;