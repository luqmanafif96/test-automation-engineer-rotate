import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ProductsModule } from '../products/products.module';
// todo : need to fixing some code
describe('ProductController(Integration)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProductsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /products (Get All Product)', async () => {
    const response = await request(app.getHttpServer())
      .get('/orders')
      .expect(200);

    expect(response.body).toEqual(expect.arrayContaining([{}]));
  });

  it('DELETE /product/:id (Delete product)', async () => {
    const product_id = 1; // Replace with valid ID
    const response = await request(app.getHttpServer())
      .delete(`/products/${product_id}`)
      .expect(200);

    expect(response.body).toEqual({ deleted: true });
  });

  afterAll(async () => {
    await app.close();
  });
});
