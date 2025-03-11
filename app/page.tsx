import Link from "next/link"
import { BookOpen, Users, BookMarked, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
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
            <Button asChild>
              <Link href="/login">Entrar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sistema de Gerenciamento de Biblioteca Escolar</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Gerencie o acervo, usuários e empréstimos da biblioteca escolar de forma simples e eficiente.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/livros">Gerenciar Livros</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/emprestimos/novo">Novo Empréstimo</Link>
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Livros</CardTitle>
              <BookMarked className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.248</div>
              <p className="text-xs text-muted-foreground">+12 adicionados este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Usuários Cadastrados</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">+8 novos este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Empréstimos Ativos</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">56</div>
              <p className="text-xs text-muted-foreground">+23 esta semana</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Empréstimos Atrasados</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">7</div>
              <p className="text-xs text-muted-foreground">-2 desde a semana passada</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">Funcionalidades Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Livros</CardTitle>
                <CardDescription>Gerencie todo o acervo da biblioteca</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Cadastre novos livros com detalhes completos</li>
                  <li>Categorize por gênero, autor e série</li>
                  <li>Controle o estado de conservação</li>
                  <li>Gerencie múltiplos exemplares</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Usuários</CardTitle>
                <CardDescription>Gerencie alunos, professores e funcionários</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Cadastre diferentes tipos de usuários</li>
                  <li>Defina limites de empréstimo por perfil</li>
                  <li>Acompanhe o histórico de cada usuário</li>
                  <li>Notificações automáticas</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sistema de Empréstimos</CardTitle>
                <CardDescription>Controle completo de empréstimos e devoluções</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Registre empréstimos com poucos cliques</li>
                  <li>Controle prazos de devolução</li>
                  <li>Gerencie renovações e reservas</li>
                  <li>Relatórios detalhados de atividade</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
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

