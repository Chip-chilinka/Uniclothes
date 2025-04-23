/** @format */

import {
  Categories,
  Container,
  Filters,
  SortPopup,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все товары" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters></Filters>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Товары"}
                items={[
                  {
                    id: 1,
                    name: "Куртка Мяу",
                    price: 3000,
                    description: "кайфовая куртка, всем курткам - куртка",
                    imageUrl:
                      "https://static.bershka.net/assets/public/525a/6da0/e1dc485cb9c0/d46382625d4c/02813152800-a4o/02813152800-a4o.jpg?ts=1737456874723&w=750",
                  },
                  {
                    id: 1,
                    name: "Куртка Мяу",
                    price: 30000,
                    description: "кайфовая куртка, всем курткам - куртка",
                    imageUrl:
                      "https://static.bershka.net/assets/public/525a/6da0/e1dc485cb9c0/d46382625d4c/02813152800-a4o/02813152800-a4o.jpg?ts=1737456874723&w=750",
                  },
                  {
                    id: 1,
                    name: "Куртка Мяу",
                    price: 30000,
                    description: "кайфовая куртка, всем курткам - куртка",
                    imageUrl:
                      "https://static.bershka.net/assets/public/525a/6da0/e1dc485cb9c0/d46382625d4c/02813152800-a4o/02813152800-a4o.jpg?ts=1737456874723&w=750",
                  },
                  {
                    id: 1,
                    name: "Куртка Мяу",
                    price: 30000,
                    description: "кайфовая куртка, всем курткам - куртка",
                    imageUrl:
                      "https://static.bershka.net/assets/public/525a/6da0/e1dc485cb9c0/d46382625d4c/02813152800-a4o/02813152800-a4o.jpg?ts=1737456874723&w=750",
                  },
                  {
                    id: 1,
                    name: "Куртка Мяу",
                    price: 30000,
                    description: "кайфовая куртка, всем курткам - куртка",
                    imageUrl:
                      "https://static.bershka.net/assets/public/525a/6da0/e1dc485cb9c0/d46382625d4c/02813152800-a4o/02813152800-a4o.jpg?ts=1737456874723&w=750",
                  },
                  {
                    id: 1,
                    name: "Куртка Мяу",
                    price: 30000,
                    description: "кайфовая куртка, всем курткам - куртка",
                    imageUrl:
                      "https://static.bershka.net/assets/public/525a/6da0/e1dc485cb9c0/d46382625d4c/02813152800-a4o/02813152800-a4o.jpg?ts=1737456874723&w=750",
                  },
                  {
                    id: 1,
                    name: "Куртка Мяу",
                    price: 30000,
                    description: "кайфовая куртка, всем курткам - куртка",
                    imageUrl:
                      "https://static.bershka.net/assets/public/525a/6da0/e1dc485cb9c0/d46382625d4c/02813152800-a4o/02813152800-a4o.jpg?ts=1737456874723&w=750",
                  },
                ]}
                categoryId={1}
              ></ProductsGroupList>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
