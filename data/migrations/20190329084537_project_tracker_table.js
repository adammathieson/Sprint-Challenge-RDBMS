
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

            tbl
                .string('project_name', 128)
                .notNullable()
            tbl
                .text('project_description')
                .notNullable()
            tbl
                .boolean('completed')
                .defaultTo(false)
        })
        .createTable('actions', tbl => {
            tbl.increments();

            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects');
            tbl
                .string('description', 128)
                .notNullable();
            tbl.
                text('notes')
                .notNullable();
            tbl
                .boolean('completed')
                .defaultTo(false);
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('actions')
};