import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614791175729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "User",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "user_name",
              type: "varchar"
            },
            {
              name: "first_name",
              type: "varchar"
            },
            {
              name: "last_name",
              type: "varchar"
            },
            {
              name: "password",
              type: "varchar"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("User");
    }

}
