import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Purchase } from './Purchase';
import { Product } from './Product';

@Entity()
export class PurchaseProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, (product) => product.purchaseProducts)
  product: Relation<Product>;

  @ManyToOne(() => Purchase, (purchase) => purchase.purchaseProducts)
  purchase: Relation<Purchase>;
}
