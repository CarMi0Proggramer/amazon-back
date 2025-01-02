import { NumericColumnTransformer } from 'src/common/utils/numeric-column-transformer';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { PurchaseProduct } from './PurchaseProduct';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    transformer: new NumericColumnTransformer(),
  })
  total: number;

  @OneToMany(
    () => PurchaseProduct,
    (purchaseProduct) => purchaseProduct.purchase,
  )
  purchaseProducts: Relation<PurchaseProduct[]>;
}
