"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NovoEmprestimoPage() {
  const [step, setStep] = useState(1)
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedBook, setSelectedBook] = useState(null)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSelectUser = (user) => {
    setSelectedUser(user)
  }

  const handleSelectBook = (book) => {
    setSelectedBook(book)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica para registrar o empréstimo
    alert("Empréstimo registrado com sucesso!")
  }

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
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href="/emprestimos">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h2 className="text-3xl font-bold">Novo Empréstimo</h2>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Registrar Empréstimo de Livro</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="step1" value={`step${step}`}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="step1" disabled={step !== 1}>
                  1. Selecionar Usuário
                </TabsTrigger>
                <TabsTrigger value="step2" disabled={step !== 2}>
                  2. Selecionar Livro
                </TabsTrigger>
                <TabsTrigger value="step3" disabled={step !== 3}>
                  3. Confirmar
                </TabsTrigger>
              </TabsList>

              <TabsContent value="step1" className="py-4">
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Buscar usuário por nome ou matrícula..." className="pl-8" />
                  </div>

                  <div className="space-y-2">
                    {usuarios.map((usuario) => (
                      <Card
                        key={usuario.id}
                        className={`cursor-pointer hover:border-primary ${
                          selectedUser?.id === usuario.id ? "border-primary border-2" : ""
                        }`}
                        onClick={() => handleSelectUser(usuario)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{usuario.nome}</h3>
                              <p className="text-sm text-muted-foreground">
                                {usuario.tipo} - {usuario.turma}
                              </p>
                              <p className="text-sm text-muted-foreground">Matrícula: {usuario.matricula}</p>
                            </div>
                            {selectedUser?.id === usuario.id && <div className="h-3 w-3 rounded-full bg-primary"></div>}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleNext} disabled={!selectedUser}>
                      Próximo
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="step2" className="py-4">
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Buscar livro por título, autor ou ISBN..." className="pl-8" />
                  </div>

                  <div className="space-y-2">
                    {livros
                      .filter((livro) => livro.status === "Disponível")
                      .map((livro) => (
                        <Card
                          key={livro.id}
                          className={`cursor-pointer hover:border-primary ${
                            selectedBook?.id === livro.id ? "border-primary border-2" : ""
                          }`}
                          onClick={() => handleSelectBook(livro)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{livro.titulo}</h3>
                                <p className="text-sm text-muted-foreground">Autor: {livro.autor}</p>
                                <p className="text-sm text-muted-foreground">ISBN: {livro.isbn}</p>
                              </div>
                              {selectedBook?.id === livro.id && <div className="h-3 w-3 rounded-full bg-primary"></div>}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Voltar
                    </Button>
                    <Button onClick={handleNext} disabled={!selectedBook}>
                      Próximo
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="step3" className="py-4">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <h3 className="font-semibold">Detalhes do Empréstimo</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Usuário</h4>
                          <Card>
                            <CardContent className="p-4">
                              <p className="font-medium">{selectedUser?.nome}</p>
                              <p className="text-sm text-muted-foreground">
                                {selectedUser?.tipo} - {selectedUser?.turma}
                              </p>
                              <p className="text-sm text-muted-foreground">Matrícula: {selectedUser?.matricula}</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Livro</h4>
                          <Card>
                            <CardContent className="p-4">
                              <p className="font-medium">{selectedBook?.titulo}</p>
                              <p className="text-sm text-muted-foreground">Autor: {selectedBook?.autor}</p>
                              <p className="text-sm text-muted-foreground">ISBN: {selectedBook?.isbn}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prazo">Prazo de Devolução</Label>
                      <Select defaultValue="14">
                        <SelectTrigger id="prazo">
                          <SelectValue placeholder="Selecione o prazo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7 dias</SelectItem>
                          <SelectItem value="14">14 dias</SelectItem>
                          <SelectItem value="21">21 dias</SelectItem>
                          <SelectItem value="30">30 dias</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="observacoes">Observações (opcional)</Label>
                      <Input id="observacoes" placeholder="Adicione observações sobre o empréstimo" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Voltar
                    </Button>
                    <Button onClick={handleSubmit}>Confirmar Empréstimo</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
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

// Reutilizando os dados de exemplo
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
    status: "Ativo",
  },
]

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

