import Article from "./Article"

function ArticleList() {
    return (
        <>
            <Article title="Как научиться React?" text="React — это библиотека для создания интерфейсов..." />
            <Article title="Зачем нужен JSX?" text="JSX позволяет писать HTML внутри JavaScript..." />
            <Article title="Компоненты в React" text="Компоненты позволяют переиспользовать код..." />
            <Article title="React и состояние" text="Состояние (state) позволяет компонентам хранить данные..."/>
        </>
    )
}

export default ArticleList
