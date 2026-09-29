// Edita aquí tu información: todas las páginas leen de este archivo.

export const perfil = {
  nombre: "Ethan",
  rol: "Estudiante de desarrollo Full Stack",
  bio: "Me gusta construir aplicaciones web con React y TypeScript. Este portafolio reúne mis proyectos del ramo FS2 y otros trabajos personales.",
  email: "tu-correo@ejemplo.com",
  github: "https://github.com/ethan1213",
  linkedin: "",
};

export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  repo?: string;
  demo?: string;
}

export const proyectos: Proyecto[] = [
  {
    titulo: "Portafolio personal",
    descripcion: "Este sitio: SPA con rutas, componentes con CSS Modules y deploy automático a GitHub Pages.",
    tecnologias: ["React", "TypeScript", "Vite", "wouter"],
    repo: "https://github.com/ethan1213/fs2-portafolio-githubactions-tests",
    demo: "https://ethan1213.github.io/fs2-portafolio-githubactions-tests/",
  },
  {
    titulo: "Proyecto 2",
    descripcion: "Describe brevemente qué hace y qué problema resuelve.",
    tecnologias: ["Java", "Spring Boot"],
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Describe brevemente qué hace y qué problema resuelve.",
    tecnologias: ["SQL", "Oracle"],
  },
];

export const habilidades: { area: string; items: string[] }[] = [
  { area: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] },
  { area: "Backend", items: ["Node.js", "Java", "SQL"] },
  { area: "Herramientas", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

export const formacion: { titulo: string; lugar: string; periodo: string }[] = [
  { titulo: "Carrera / programa", lugar: "Institución", periodo: "2025 – actualidad" },
];
