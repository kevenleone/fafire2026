interface Documento {
  exportar(): string;
}

class DocumentoPdf implements Documento {
  exportar() {
    return "%PDF-1.7 ...";
  }
}

class DocumentoHtml implements Documento {
  exportar() {
    return "<!doctype html> ...";
  }
}

// A fábrica decide QUAL objeto criar — quem chama não usa `new`
function criarDocumento(tipo: "pdf" | "html"): Documento {
  if (tipo === "pdf") return new DocumentoPdf();
  if (tipo === "html") return new DocumentoHtml();
  throw new Error(`Tipo desconhecido: ${tipo}`);
}

console.log(criarDocumento("txt").exportar());
