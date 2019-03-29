
exports.seed = function(knex, Promise) {
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'Get materials',
          notes:
            'wood, nails, paint, etc.',
        },
        {
          project_id: 1,
          description: 'Create plan',
          notes: 'Should be able to accommodate a variety of bird species.',
        },
        {
          project_id: 1,
          description: 'Build it',
          notes: 'measure twice, cut once!',
        },
      ]);
};