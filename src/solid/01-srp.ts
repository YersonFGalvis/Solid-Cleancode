(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService{

        //Esta clase Tiene la logica de consultas y demas operacion a la bd

        private httpAdAdapter: Object = {};  //Axios-ApiKey etc

        getProduct(id: number){
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' }); //peticion a DB
        }

        saveProduct(product: Product){
        // Realiza una petición para salvar en base de datos 
        console.log('Guardando en base de datos', product );
        }
    }

    class Mailer{

        private masterEmail: string = 'Yersongalvis03@gmail.com';

        senEmails(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        //a esta clase no le interesa como se guarda o como se carga un producto solo le interesa hacerlo
        
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
           this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.senEmails(['ejemplo@google.com'],'to-clients')
        }
  
    
    }

    class CartBloc{

        private itemInCart: Object[] = [];

        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    

    const productService = new ProductService();
    const mailer = new Mailer();
    
    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();