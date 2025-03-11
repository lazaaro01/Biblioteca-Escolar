import Link from "next/link"
import { BookOpen, Plus, Search, Filter, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function EmprestimosPage() {
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
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Gerenciamento de Empréstimos</h2>
          <Button asChild>
            <Link href="/emprestimos/novo">
              <Plus className="mr-2 h-4 w-4" /> Novo Empréstimo
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar por usuário ou livro..." className="pl-8" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" /> Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  Todos
                </Button>
                <Button variant="outline" size="sm">
                  Ativos
                </Button>
                <Button variant="outline" size="sm">
                  Atrasados
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Livro</TableHead>
                <TableHead>Data de Empréstimo</TableHead>
                <TableHead>Data de Devolução</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emprestimos.map((emprestimo) => (
                <TableRow key={emprestimo.id}>
                  <TableCell className="font-medium">{emprestimo.usuario}</TableCell>
                  <TableCell>{emprestimo.livro}</TableCell>
                  <TableCell>{emprestimo.dataEmprestimo}</TableCell>
                  <TableCell>{emprestimo.dataDevolucao}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        emprestimo.status === "Em dia"
                          ? "success"
                          : emprestimo.status === "Atrasado"
                            ? "destructive"
                            : "default"
                      }
                      className={
                        emprestimo.status === "Em dia"
                          ? "bg-green-100 text-green-800"
                          : emprestimo.status === "Atrasado"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                      }
                    >
                      {emprestimo.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Devolver
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Clock className="mr-2 h-4 w-4" /> Renovar
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
const emprestimos = [
  {
    id: "1",
    usuario: "Maria Silva (8º Ano)",
    livro: "Dom Casmurro",
    dataEmprestimo: "15/03/2023",
    dataDevolucao: "29/03/2023",
    status: "Em dia",
  },
  {
    id: "2",
    usuario: "João Pereira (6º Ano)",
    livro: "O Pequeno Príncipe",
    dataEmprestimo: "10/03/2023",
    dataDevolucao: "24/03/2023",
    status: "Em dia",
  },
  {
    id: "3",
    usuario: "Ana Souza (9º Ano)",
    livro: "Harry Potter e a Pedra Filosofal",
    dataEmprestimo: "05/03/2023",
    dataDevolucao: "19/03/2023",
    status: "Atrasado",
  },
  {
    id: "4",
    usuario: "Pedro Santos (Professor)",
    livro: "1984",
    dataEmprestimo: "12/03/2023",
    dataDevolucao: "26/03/2023",
    status: "Em dia",
  },
  {
    id: "5",
    usuario: "Carla Oliveira (7º Ano)",
    livro: "Memórias Póstumas de Brás Cubas",
    dataEmprestimo: "08/03/2023",
    dataDevolucao: "22/03/2023",
    status: "Atrasado",
  },
]

