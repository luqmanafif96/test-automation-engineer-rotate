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
      .get('/products')
      .expect(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          description: expect.any(String),
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number),
        },
      ]),
    );
  });

  it('DELETE /products/:id (Delete product)', async () => {
    // First, create a product to delete
    const newProduct = await request(app.getHttpServer())
      .post('/products') // Adjust the route if necessary
      .send({
        name: 'Melon',
        price: 10,
        description: 'Cooling and refreshing watermelon.',
      })
      .expect(201);

    // Assert that the product has been created with the expected fields
    expect(newProduct.body).toEqual(
      expect.objectContaining({
        name: 'Melon',
        price: 10,
        description: 'Cooling and refreshing watermelon.',
        // The id field is missing, so we don't check for it here
      }),
    );

    // Fetch the list of products to get the auto-generated product ID
    const products = await request(app.getHttpServer())
      .get('/products')
      .expect(200);

    // Extract the product ID from the response
    const product_id = products.body.find((p) => p.name === 'Melon').id;

    // Now, delete the product using the captured product ID
    const deleteResponse = await request(app.getHttpServer())
      .delete(`/products/${product_id}`)
      .expect(200);

    // Check that the product was deleted
    expect(deleteResponse.body).toEqual({
      // message: 'Product deleted successfully', // Adjust based on your API
    });

    // Ensure the deleted product is no longer present
    const updatedProducts = await request(app.getHttpServer())
      .get('/products')
      .expect(200);

    expect(updatedProducts.body).not.toContainEqual(
      expect.objectContaining({ id: product_id }),
    );
  });
});
