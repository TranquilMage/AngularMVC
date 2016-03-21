using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularAndMVC.Models;

namespace AngularAndMVC.Controllers.API
{
    [RoutePrefix("api")]
    public class DataApiController : ApiController
    {
        [HttpGet]
        [Route("customers")]
        public HttpResponseMessage GetCustomers(HttpRequestMessage request)
        {
            var customers = DataFactory.GetCustomers();

            return request.CreateResponse<CustomerModel[]>(HttpStatusCode.OK, customers.ToArray());
        }

        [HttpGet]
        [Route("customer/{customerId}")]
        public HttpResponseMessage GetCustomer(HttpRequestMessage request, int customerId)
        {
            var customers = DataFactory.GetCustomers();
            var customer = customers.FirstOrDefault(item => item.CustomerId == customerId);

            return request.CreateResponse<CustomerModel>(HttpStatusCode.OK, customer);
        }

        [HttpGet]
        [Route("products")]
        public HttpResponseMessage GetProducts(HttpRequestMessage request)
        {
            var products = DataFactory.GetProducts();

            return request.CreateResponse<ProductModel[]>(HttpStatusCode.OK, products.ToArray());
        }

        [HttpGet]
        [Route("product/{productId}")]
        public HttpResponseMessage GetProduct(HttpRequestMessage request, int productId)
        {
            var products = DataFactory.GetProducts();
            var product = products.FirstOrDefault(item => item.ProductId == productId);

            return request.CreateResponse<ProductModel>(HttpStatusCode.OK, product);
        }

        [HttpGet]
        [Route("orders")]
        public HttpResponseMessage GetOrders(HttpRequestMessage request)
        {
            var orders = DataFactory.GetOrders();

            return request.CreateResponse<OrderModel[]>(HttpStatusCode.OK, orders.ToArray());
        }

        [HttpGet]
        [Route("order/{orderId}")]
        public HttpResponseMessage GetOrder(HttpRequestMessage request, int orderId)
        {
            var orders = DataFactory.GetOrders();
            var order = orders.FirstOrDefault(item => item.OrderId == orderId);

            return request.CreateResponse<OrderModel>(HttpStatusCode.OK, order);
        }

        [HttpGet]
        [Route("order/detail/{orderId}/{orderDetailId}")]
        public HttpResponseMessage GetOrderDetail(HttpRequestMessage request, int orderId, int orderDetailId)
        {
            var orders = DataFactory.GetOrders();
            var order = orders.FirstOrDefault(item => item.OrderId == orderId);
            var orderDetail = order.OrderDetails.FirstOrDefault(item => item.OrderDetailId == orderDetailId);

            return request.CreateResponse<OrderDetailModel>(HttpStatusCode.OK, orderDetail);
        }
    }
}
