import { Box } from '@mui/material';
import Article from './Article';

function ArticleList() {
  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: 3 }}>
      <Box
        sx={{
            display: 'flex',
            flexDirection:"column",
            justifyContent: 'center',
            alignItems:"center",
            p: 1,
            m: 1,
            bgcolor: '',
            borderRadius: 1,
            width:"100%"
          }}
      >
        <Article
          title="Как научиться React?"
          text="React — это библиотека для создания интерфейсов..."
          sx={{ flex: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}
        />
        <Article
          title="Зачем нужен JSX?"
          text="JSX позволяет писать HTML внутри JavaScript..."
          sx={{ flex: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}
        />
        <Article
          title="Компоненты в React"
          text="Компоненты позволяют переиспользовать код..."
          sx={{ flex: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}
        />
        <Article
          title="React и состояние"
          text="Состояние (state) позволяет компонентам хранить данные..."
          sx={{ flex: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}
        />
      </Box>
    </Box>
  );
}

export default ArticleList;
