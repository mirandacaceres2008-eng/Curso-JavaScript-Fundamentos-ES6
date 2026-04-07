const estudiantes = [ 
  { nombre: "Ana", nota: 4.5 }, 
  { nombre: "Luis", nota: 2.8 }, 
  { nombre: "Marta", nota: 3.7 }, 
  { nombre: "Carlos", nota: 2.5 } 
];
const estudiantesAprobados = estudiantes.filter( estudiante => estudiante.nota >= 3.0);
console.log(estudiantesAprobados);