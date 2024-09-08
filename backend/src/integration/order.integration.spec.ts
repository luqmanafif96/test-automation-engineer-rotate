import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { OrdersModule } from '../orders/orders.module';
import { CreateOrderDto } from '../orders/dto/create-order.dto';
// import { OrdersController } from '../orders/orders.controller';
// import { OrdersModule } from '../src/orders/orders.module'; // Ensure correct path to OrdersModule
// import { CreateOrderDto } from '../src/orders/dto/create-order.dto'; // Ensure correct path to DTO
// todo : need to fixing some code
describe('OrdersController (Integration)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [OrdersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('POST /orders (Create Order)', async () => {
    const orderDto: CreateOrderDto = {
      // id: 0,
      product_name: 'Apple',
      quantity: 3,
      product_id: 0,
      price: 2,
      created_at: '',
      updated_at: '',
    };
    const response = await request(app.getHttpServer())
      .post('/orders')
      .send(orderDto)
      .expect(201);

    expect(response.body).toEqual({
      // id: expect.any(Number),
      product_id: expect.any(Number),
      product_name: expect.any(String),
      quantity: expect.any(Number),
      price: expect.any(Number), // Adjust to match actual response
      created_at: expect.any(String),
      updated_at: expect.any(String),
    });
  });

  it('GET /orders (Get All Orders)', async () => {
    const response = await request(app.getHttpServer())
      .get('/orders')
      .expect(200);

    expect(response.body[0]).toEqual({
      id: expect.any(Number),
      product_id: expect.any(Number),
      product_name: expect.any(String),
      quantity: expect.any(Number),
      price: expect.any(Number), // Adjust to match actual response
      total: expect.any(Number),
      created_at: expect.any(String),
      updated_at: expect.any(String),
    });
  });

  it('DELETE /orders/:id (Delete Order)', async () => {
    const product_id = 1; // Replace with valid ID
    const response = await request(app.getHttpServer())
      .delete(`/orders/${product_id}`)
      .expect(200);

    expect(response.body).toEqual([]);
  });

  afterAll(async () => {
    await app.close();
  });
});
