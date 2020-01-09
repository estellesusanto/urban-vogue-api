gsutil cp gs://etsy-monthly-snapshots/orderitems/EtsySoldOrderItems2019-12.csv - | tr -d '\000' | gsutil cp - gs://etsy-monthly-snapshots/orderitems/EtsySoldOrderItems2019-12.csv
