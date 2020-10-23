/// <reference types="../common" />
/// <reference types="./overlay" />

declare namespace AMap {
  namespace GroundImage {
    interface EventMap<I = GroundImage> {
      click: MapsEvent<'click', I>;
      dblclick: MapsEvent<'dblclick', I>;
    }

    interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
      /**
       * 图层是否可点击，若为可点击则GroundImage支持鼠标点击事件
       * @default false
       */
      clickable?: boolean;
      /**
       * 图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明
       */
      opacity?: number;
    }

  }

  class GroundImage<ExtraData = any> extends Overlay<ExtraData> {
    /**
     * 获取图片透明度值
     */
    getOpacity: () => number;
    /**
     * 设置图片透明度
     */
    setOpacity: (opacity: number) => void;
    /**
     * 获取GroundImage的覆盖地理范围
     */
    getBounds(): Bounds;
    /**
     * 获取图片url
     */
    getImageUrl(): string;

  }
}
