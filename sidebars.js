/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Введение',
      items: ['intro/intro'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/openapi',],
    },
    {
      type: 'category',
      label: 'База данных',
      items: ['database/database'],
    },
    {
      type: 'category',
      label: 'Функциональные требования',
      items: ['functional-requirements/functional_requirements'],
    },
    {
      type: 'category',
      label: 'Нефункциональные требования',
      items: ['non-functional-requirements/non-functional_requirements'],
    },
        {
      type: 'category',
      label: 'Сбор требований',
      items: ['collecting-requirements/coll_req'],
    },
        {
      type: 'category',
      label: 'Технологии хранения данных',
      items: ['data-storage-technologies/dst'],
    },
        {
      type: 'category',
      label: 'Платформизация курсового проекта',
      items: ['platformization-of-the-course-project/potcp'],
    },
  ],
};

export default sidebars;