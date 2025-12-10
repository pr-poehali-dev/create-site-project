import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gem" className="text-primary" size={28} />
            <span className="text-xl font-bold">Минералогия</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/materials" className="text-foreground hover:text-primary transition-colors">
              Материалы
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Аквамарин
                <span className="block text-primary mt-2">Камень морской воды</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Драгоценный камень голубовато-зелёного цвета, разновидность берилла. 
                Название происходит от латинского "aqua marina" — морская вода.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="shadow-lg">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Изучить подробнее
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/materials" className="flex items-center">
                    <Icon name="Library" className="mr-2" size={20} />
                    Все материалы
                  </Link>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/04cb5ed1-0cc9-468c-8402-175bfc9df9cb/files/3f9e6cde-7b56-48bb-bd7f-42454c104b78.jpg" 
                alt="Аквамарин" 
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Sparkles" className="text-primary mb-4" size={40} />
                <CardTitle>Физические свойства</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Твёрдость: 7.5-8 по шкале Мооса</li>
                  <li>• Цвет: от бледно-голубого до сине-зелёного</li>
                  <li>• Блеск: стеклянный</li>
                  <li>• Прозрачность: прозрачный</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="MapPin" className="text-primary mb-4" size={40} />
                <CardTitle>Месторождения</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Бразилия (основной поставщик)</li>
                  <li>• Мадагаскар</li>
                  <li>• Пакистан</li>
                  <li>• Россия (Урал, Забайкалье)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Star" className="text-primary mb-4" size={40} />
                <CardTitle>Применение</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ювелирные украшения</li>
                  <li>• Коллекционирование</li>
                  <li>• Декоративное искусство</li>
                  <li>• Минералогические музеи</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Интересные факты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Удивительная информация о камне
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Аквамарин считается камнем моряков и путешественников. В древности верили, 
                  что он защищает от морских опасностей и дарует удачу в плавании.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Крупнейший ограненный аквамарин весит 2594 карата и хранится в 
                  Смитсоновском институте в Вашингтоне.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Цвет аквамарина обусловлен примесями железа в кристаллической решётке берилла.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы узнать больше?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Изучите полный каталог минералов и драгоценных камней в разделе материалов
          </p>
          <Button size="lg" asChild>
            <Link to="/materials">
              <Icon name="ArrowRight" className="mr-2" size={20} />
              Перейти к материалам
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Образовательный портал по минералогии</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
