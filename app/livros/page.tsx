import Link from "next/link"
import { BookOpen, Plus, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function LivrosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8" />
              <h1 className="text-2xl font-bold">BiblioEscola</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/livros" className="font-medium hover:underline">
                Livros
              </Link>
              <Link href="/usuarios" className="font-medium hover:underline">
                Usuários
              </Link>
              <Link href="/emprestimos" className="font-medium hover:underline">
                Empréstimos
              </Link>
              <Link href="/relatorios" className="font-medium hover:underline">
                Relatórios
              </Link>
            </nav>
            <Button asChild variant="secondary">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Catálogo de Livros</h2>
          <Button asChild>
            <Link href="/livros/novo">
              <Plus className="mr-2 h-4 w-4" /> Adicionar Livro
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar por título, autor ou ISBN..." className="pl-8" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" /> Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  Todos
                </Button>
                <Button variant="outline" size="sm">
                  Disponíveis
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {livros.map((livro) => (
                <TableRow key={livro.id}>
                  <TableCell className="font-medium">{livro.titulo}</TableCell>
                  <TableCell>{livro.autor}</TableCell>
                  <TableCell>{livro.categoria}</TableCell>
                  <TableCell>{livro.isbn}</TableCell>
                  <TableCell>
                    <Badge
                      variant={livro.status === "Disponível" ? "default" : "destructive"}
                      className={
                        livro.status === "Disponível" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }
                    >
                      {livro.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/livros/${livro.id}`}>Detalhes</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/livros/${livro.id}/editar`}>Editar</Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
          <Button variant="outline" size="sm">
            Anterior
          </Button>
          <Button variant="outline" size="sm">
            Próximo
          </Button>
        </div>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold">BiblioEscola</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sistema de Gerenciamento de Biblioteca Escolar
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Dados de exemplo
const livros = [
  {
    id: "1",
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    categoria: "Literatura Brasileira",
    isbn: "9788535910663",
    status: "Disponível",
  },
  {
    id: "2",
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    categoria: "Literatura Estrangeira",
    isbn: "9788574064963",
    status: "Emprestado",
  },
  {
    id: "3",
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    categoria: "Fantasia",
    isbn: "9788532511010",
    status: "Disponível",
  },
  {
    id: "4",
    titulo: "1984",
    autor: "George Orwell",
    categoria: "Ficção Científica",
    isbn: "9788535914849",
    status: "Disponível",
  },
  {
    id: "5",
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    categoria: "Literatura Brasileira",
    isbn: "9788535911121",
    status: "Emprestado",
  },
]

