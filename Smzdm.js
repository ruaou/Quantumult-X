const url = $request.url;

if (!$response.body) {
  $done({});
}

let obj = JSON.parse($response.body);

function deletePropertyIfExist(obj, property) {
  if (obj && obj.data && obj.data[property]) {
    delete obj.data[property];
  }
}

function filterAndFixPos(arr, type) {
  if (arr) {
    obj.data[arr] = arr.filter((item) => item.type === type);
    fixPos(obj.data[arr]);
  }
}

deletePropertyIfExist(obj, "big_banner");
deletePropertyIfExist(obj.data, "widget");
deletePropertyIfExist(obj.data, "operation_float_screen");
deletePropertyIfExist(obj.data, "ad_black_list");
deletePropertyIfExist(obj.data, "banner_v2");
deletePropertyIfExist(obj.data, "hongbao");
deletePropertyIfExist(obj.data, "operation_float_7_0");

filterAndFixPos(obj.data.functions, "message");
filterAndFixPos(obj.data.services, "articel_manage");
filterAndFixPos(obj.data.services, "199794");
filterAndFixPos(obj.data.services, "199796");
filterAndFixPos(obj.data.component, "circular_banner");
filterAndFixPos(obj.data.component, "fixed_banner");
filterAndFixPos(obj.data.component, "filter");
filterAndFixPos(obj.data.component, "list");

deletePropertyIfExist(obj.data, "rows");

if (obj?.data?.rows?.length > 0) {
  obj.data.rows = obj.data.rows.filter(
    (i) => !(i?.hasOwnProperty("ad_banner_id") || ["ad_campaign_id_", "ad_campaign_name", "abs_position"]?.includes(i?.ad))
  );
}

deletePropertyIfExist(obj.data, "data");

$done({ body: JSON.stringify(obj) });

// 修正位置
function fixPos(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].pos = i + 1;
  }
}
