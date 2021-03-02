import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserAndPassword1614719549739 implements MigrationInterface {

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
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('User');
    }

}
