const orders = [
    {
        code : '000',
        status: 'ready',
    },
    {
        code: '001',
        status: 'to-delivery',
    },
    {
        code: '002',
        status: 'in-delivery',
    }
]

const dispatchEmail = require('./emailDispatcher');

exports.getOrder = (req, res) => {
    const code = req.body.code;
    const order = orders.filter(e => e.code === code)[0];
    let response = '';
    switch (order.status) {
        case 'ready':
            response = 'El producto se encuentra listo para retirar.'
            break;
        case 'in-delivery':
            response = 'El producto se encuentra en el proceso de envio.'
            break;
        case 'to-delivery':
            response = 'El producto se encuentra listo para ser enviado.'
            break;
        default:
            response = 'Su producto tiene un estado raro.'
            break;
    }

    res.status(200).send(response);

}


exports.sendEmail = (req, res) => {
    const params = {
        message : {
            to: [{email: req.body.email }],
            from_email: 'no-reply@insideone.com.ar',
            from_name: 'OneCommerce',
            subject: `Recibiste una nueva compra en OneCommerce`
        },
        template_name : 'onecommerce',
        template_content: req.body.template_content
    }

    dispatchEmail(params)
    .then((response) => res.status(200).send(response))
    .catch(error => res.status(500).send(error))
} 