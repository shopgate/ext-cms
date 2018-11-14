# Shopgate Connect - CMS Extension

[![GitHub license](http://dmlc.github.io/img/apache2.svg)](LICENSE)

This extension contains all config to show cms menu in navigation drawer, etc

## Configuration

Set the following values in your Shopgate Connect Admin:
* `navMenu` - (object) Configuration of which items to show in the navigation drawer.
  * `terms` - (true/false) Whether or not to show the "Terms" entry.
  * `imprint` - (true/false) Whether or not to show the "Imprint" entry.
  * `payment` - (true/false) Whether or not to show the "Payment" entry.
  * `privacy` - (true/false) Whether or not to show the "Privacy" entry.
  * `shipping` - (true/false) Whether or not to show the "Shipping" entry.
  * `return-policy` - (true/false) Whether or not to show the "Return Policy" entry.

### Example

```json
{
    "navMenu": {
        "terms": true,
        "imprint": true,
        "payment": true,
        "privacy": true,
        "shipping": true,
        "return-policy": false,
    }
}
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) file for more information.

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for more information.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

This extension is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
