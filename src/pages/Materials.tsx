import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Materials = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const minerals = [
    {
      name: "Аквамарин",
      category: "Берилл",
      color: "Голубой",
      hardness: "7.5-8",
      description: "Драгоценный камень цвета морской воды, разновидность берилла",
      image: "https://cdn.poehali.dev/projects/04cb5ed1-0cc9-468c-8402-175bfc9df9cb/files/3f9e6cde-7b56-48bb-bd7f-42454c104b78.jpg"
    },
    {
      name: "Аметист",
      category: "Кварц",
      color: "Фиолетовый",
      hardness: "7",
      description: "Фиолетовая разновидность кварца, популярный полудрагоценный камень",
      image: "https://cdn.poehali.dev/projects/04cb5ed1-0cc9-468c-8402-175bfc9df9cb/files/5cdad4cd-447f-45a9-94eb-f52a80980e72.jpg"
    },
    {
      name: "Изумруд",
      category: "Берилл",
      color: "Зелёный",
      hardness: "7.5-8",
      description: "Зелёная разновидность берилла, один из самых дорогих драгоценных камней",
      image: "https://cdn.poehali.dev/projects/04cb5ed1-0cc9-468c-8402-175bfc9df9cb/files/5cdad4cd-447f-45a9-94eb-f52a80980e72.jpg"
    },
    {
      name: "Рубин",
      category: "Корунд",
      color: "Красный",
      hardness: "9",
      description: "Красная разновидность корунда, символ страсти и королевской власти",
      image: "https://cdn.poehali.dev/projects/04cb5ed1-0cc9-468c-8402-175bfc9df9cb/files/5cdad4cd-447f-45a9-94eb-f52a80980e72.jpg"
    },
    {
      name: "Сапфир",
      category: "Корунд",
      color: "Синий",
      hardness: "9",
      description: "Синяя разновидность корунда, второй по твёрдости после алмаза",
      image: "https://cdn.poehali.dev/projects/04cb5ed1-0cc9-468c-8402-175bfc9df9cb/files/5cdad4cd-447f-45a9-94eb-f52a80980e72.jpg"
    },
    {
      name: "Топаз",
      category: "Силикат",
      color: "Голубой, жёлтый",
      hardness: "8",
      description: "Прозрачный минерал с характерным блеском, бывает различных оттенков",
      image: "https://cdn.poehali.dev/projects/04cb5ed1-0cc9-468c-8402-175bfc9df9cb/files/5cdad4cd-447f-45a9-94eb-f52a80980e72.jpg"
    }
  ];

  const filteredMinerals = minerals.filter(mineral =>
    mineral.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mineral.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mineral.color.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ["Все", "Берилл", "Кварц", "Корунд", "Силикат"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const displayedMinerals = activeCategory === "Все" 
    ? filteredMinerals 
    : filteredMinerals.filter(m => m.category === activeCategory);

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
            <Link to="/materials" className="text-primary font-medium">
              Материалы
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-12 bg-gradient-to-br from-accent/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Каталог минералов</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Исследуйте удивительный мир драгоценных камней и минералов
            </p>
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по названию, категории или цвету..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Найдено материалов: <span className="font-semibold text-foreground">{displayedMinerals.length}</span>
            </p>
            <div className="flex gap-2 items-center">
              <Icon name="Filter" size={18} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Категория: {activeCategory}</span>
            </div>
          </div>

          {displayedMinerals.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Icon name="Search" className="mx-auto mb-4 text-muted-foreground" size={48} />
                <p className="text-xl text-muted-foreground">Материалы не найдены</p>
                <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedMinerals.map((mineral, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={mineral.image}
                      alt={mineral.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary/90 backdrop-blur-sm">{mineral.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Gem" className="text-primary" size={20} />
                      {mineral.name}
                    </CardTitle>
                    <CardDescription>{mineral.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Palette" size={16} className="text-muted-foreground" />
                        <span className="text-muted-foreground">Цвет:</span>
                        <span className="font-medium">{mineral.color}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Shield" size={16} className="text-muted-foreground" />
                        <span className="text-muted-foreground">Твёрдость:</span>
                        <span className="font-medium">{mineral.hardness}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="BookOpen" className="mr-2" size={16} />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <Icon name="Lightbulb" className="mx-auto mb-4 text-primary" size={48} />
                <CardTitle className="text-3xl">Интересуетесь минералогией?</CardTitle>
                <CardDescription className="text-lg mt-2">
                  Присоединяйтесь к нашему сообществу для получения дополнительных материалов
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Подписаться на новости
                </Button>
              </CardContent>
            </Card>
          </div>
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

export default Materials;
