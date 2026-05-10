import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">Адаптивный помощник чата поддержки</h1>
        <p className="hero__subtitle">
          Интеллектуальная система реального времени для повышения качества обслуживания и снижения операционных затрат
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Открыть документацию
          </Link>
           <Link
            className="button button--primary button--lg"
            style={{ marginLeft: '1rem' }}
            to="https://github.com/DaniilSilkin/Documentation">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

// Карточки с ключевыми возможностями (5 блоков)
const features = [
  {
    title: 'Анализ тональности',
    description: (
      <>
        Автоматическое определение эмоциональной окраски сообщений клиента: позитив, негатив, нейтраль, гнев. 
        Расчёт уровня срочности для приоритизации обращений.
      </>
    ),
  },
  {
    title: 'AI-рекомендации',
    description: (
      <>
        Генерация персонализированных рекомендаций для оператора на основе истории диалогов, 
        тональности и корпоративного устава. Сокращение времени ответа на 30-40%.
      </>
    ),
  },
  {
    title: 'Контроль устава',
    description: (
      <>
        Автоматическая проверка соответствия ответов корпоративным регламентам. 
        Загрузка и индексация документов для мгновенного поиска правил.
      </>
    ),
  },
  {
    title: 'Панель оператора',
    description: (
      <>
        Интуитивно понятный трёхколоночный интерфейс: список чатов, окно диалога и 
        панель с AI-подсказками. Полный контроль качества обслуживания в реальном времени.
      </>
    ),
  },
  {
    title: 'Администрирование',
    description: (
      <>
        Управление пользователями (операторы/админы), загрузка устава организации, 
        просмотр аналитики и управление шаблонами ответов.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    // Используем col--4 (4 колонки из 12) → 3 блока в ряд
    // Для 5 блоков: 3 + 2 (второй ряд)
    <div className="col col--4">
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Адаптивный помощник для службы поддержки"
      description="Дипломный проект: система интеллектуальных рекомендаций для операторов чата поддержки">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {/* Первые 3 блока */}
              {features.slice(0, 3).map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
            <div className="row" style={{ marginTop: '2rem' }}>
              {/* Оставшиеся 2 блока — центрируем */}
              <div className="col col--2"></div> {/* Отступ слева для центрирования */}
              {features.slice(3, 5).map((props, idx) => (
                <Feature key={idx + 3} {...props} />
              ))}
              <div className="col col--2"></div> {/* Отступ справа для центрирования */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 