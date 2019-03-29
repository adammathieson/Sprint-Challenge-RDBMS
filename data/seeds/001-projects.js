exports.seed = function(knex, Promise) {
  return knex('projects').insert([
        {
          project_name: 'Build bird house',
          project_description:
            'Build functional shelter for local birds',
        },
        {
          project_name: 'Fix the rood',
          project_description:
            'Make necessary repairs to leaky roof',
        },
      ]);
};