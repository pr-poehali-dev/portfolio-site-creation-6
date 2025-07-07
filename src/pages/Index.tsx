import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Брендинг для стартапа",
      description: "Создание логотипа и фирменного стиля",
      category: "Брендинг",
      image: "/img/f018396c-8a30-410e-bb66-7b4b75c54816.jpg",
    },
    {
      id: 2,
      title: "Дизайн упаковки",
      description: "Разработка дизайна для премиум продукта",
      category: "Упаковка",
      image: "/img/76ec2d0a-240c-41aa-a82b-910d625014d6.jpg",
    },
    {
      id: 3,
      title: "Визуальная идентичность",
      description: "Полная разработка бренда и гайдлайнов",
      category: "Айдентика",
      image: "/img/f018396c-8a30-410e-bb66-7b4b75c54816.jpg",
    },
    {
      id: 4,
      title: "Плакатный дизайн",
      description: "Серия постеров для культурного мероприятия",
      category: "Полиграфия",
      image: "/img/a2b5c2ee-0c9e-4053-8bd8-0bdc4c5a6115.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-medium mb-6 text-black tracking-tight">
              Анна Дизайн
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Графический дизайнер с фокусом на брендинг и визуальную
              идентичность. Создаю смыслы через простые формы.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg"
              >
                Посмотреть работы
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg"
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-gray-400" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium mb-4 text-black">
              Избранные работы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Коллекция проектов, которые отражают мой подход к дизайну
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-medium mb-2 text-black">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center text-black group-hover:text-gray-600 transition-colors">
                      <span className="text-sm font-medium">Подробнее</span>
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-medium mb-6 text-black">О себе</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Привет! Я Анна, графический дизайнер с 5-летним опытом работы.
                Специализируюсь на создании брендинга, упаковки и визуальной
                идентичности.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Верю в силу простых решений и чистых форм. Каждый проект для
                меня — это возможность рассказать уникальную историю через
                дизайн.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3 text-black">Навыки</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>Adobe Creative Suite</li>
                    <li>Figma & Sketch</li>
                    <li>Типографика</li>
                    <li>Цветовая теория</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3 text-black">Услуги</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>Брендинг</li>
                    <li>Дизайн упаковки</li>
                    <li>Полиграфия</li>
                    <li>Веб-дизайн</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop"
                  alt="Анна Дизайн"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-medium mb-6">
            Давайте создадим что-то вместе
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Готова обсудить ваш проект и воплотить идеи в жизнь
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              anna@example.com
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Instagram" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Dribbble" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Behance" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
