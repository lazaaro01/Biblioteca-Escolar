import Link from "next/link"
import { BookOpen, Plus, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UsuariosPage() {
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
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Cadastro de Usuários</h2>
          <Button asChild>
            <Link href="/usuarios/novo">
              <Plus className="mr-2 h-4 w-4" /> Adicionar Usuário
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar por nome, matrícula ou turma..." className="pl-8" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" /> Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  Todos
                </Button>
                <Button variant="outline" size="sm">
                  Alunos
                </Button>
                <Button variant="outline" size="sm">
                  Professores
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Matrícula/ID</TableHead>
                <TableHead>Turma/Departamento</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell className="font-medium">{usuario.nome}</TableCell>
                  <TableCell>{usuario.tipo}</TableCell>
                  <TableCell>{usuario.matricula}</TableCell>
                  <TableCell>{usuario.turma}</TableCell>
                  <TableCell>
                    <Badge
                      variant={usuario.status === "Ativo" ? "success" : "destructive"}
                      className={usuario.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    >
                      {usuario.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/usuarios/${usuario.id}`}>Detalhes</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/usuarios/${usuario.id}/editar`}>Editar</Link>
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
const usuarios = [
  {
    id: "1",
    nome: "Maria Silva",
    tipo: "Aluno",
    matricula: "A12345",
    turma: "8º Ano",
    status: "Ativo",
  },
  {
    id: "2",
    nome: "João Pereira",
    tipo: "Aluno",
    matricula: "A12346",
    turma: "6º Ano",
    status: "Ativo",
  },
  {
    id: "3",
    nome: "Ana Souza",
    tipo: "Aluno",
    matricula: "A12347",
    turma: "9º Ano",
    status: "Ativo",
  },
  {
    id: "4",
    nome: "Pedro Santos",
    tipo: "Professor",
    matricula: "P5432",
    turma: "Português",
    status: "Ativo",
  },
  {
    id: "5",
    nome: "Carla Oliveira",
    tipo: "Aluno",
    matricula: "A12348",
    turma: "7º Ano",
    status: "Inativo",
  },
]

