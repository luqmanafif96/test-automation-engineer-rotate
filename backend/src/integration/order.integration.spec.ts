import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { OrdersModule } from '../orders/orders.module';
import { CreateOrderDto } from '../orders/dto/create-order.dto';
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
      product_name: 'Apple',
      quantity: 3,
      product_id: 0,
      price: 0,
      created_at: '',
      updated_at: '',
    };
    const response = await request(app.getHttpServer())
      .post('/orders')
      .send(orderDto)
      .expect(201);

    expect(response.body).toEqual({
      id: expect.any(Number),
      product: 'Apple',
      quantity: 3,
      totalPrice: 15, // Assuming price is 5 per item
    });
  });

  it('GET /orders (Get All Orders)', async () => {
    const response = await request(app.getHttpServer())
      .get('/orders')
      .expect(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          product: 'Apple',
          quantity: 3,
          totalPrice: 15,
        },
      ]),
    );
  });

  it('DELETE /orders/:id (Delete Order)', async () => {
    const orderId = 1; // Replace with valid ID
    const response = await request(app.getHttpServer())
      .delete(`/orders/${orderId}`)
      .expect(200);

    expect(response.body).toEqual({ deleted: true });
  });

  afterAll(async () => {
    await app.close();
  });
});
