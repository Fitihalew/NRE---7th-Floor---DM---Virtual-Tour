var APP_DATA = {
  "scenes": [
    {
      "id": "0-digital-marketing-dept",
      "name": "Digital Marketing Dept.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2561997289947504,
          "pitch": -0.037472913465013136,
          "rotation": 12.566370614359176,
          "target": "1-common-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-common-area",
      "name": "Common Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 3.021137558802801,
        "pitch": -0.036852991784668276,
        "fov": 1.3093356391317525
      },
      "linkHotspots": [
        {
          "yaw": 3.021137558802801,
          "pitch": -0.036852991784668276,
          "rotation": 0,
          "target": "0-digital-marketing-dept"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BF-DM",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
