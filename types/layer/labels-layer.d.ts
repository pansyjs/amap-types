/// <reference types="./layer" />
/// <reference types="../common/event" />
/// <reference types="../overlay/label-marker" />

declare namespace AMap {
  namespace LabelsLayer {
    interface EventMap<I = LabelsLayer> {
      click: Event<'click', LabelsLayerEvent<I>>;
      mouseover: Event<'mouseover', LabelsLayerEvent<I>>;
      mouseout: Event<'mouseout', LabelsLayerEvent<I>>;
      mousemove: Event<'mousemove', LabelsLayerEvent<I>>;
      mousedown: Event<'mousedown', LabelsLayerEvent<I>>;
      mouseup: Event<'mouseup', LabelsLayerEvent<I>>;
      touchstart: Event<'touchstart', LabelsLayerEvent<I>>;
      touchend: Event<'touchend', LabelsLayerEvent<I>>;
    }

    interface EventData {
      data: {
        id: number;
        name: string;
        position: [number, number] | [string, string];
        zooms: [number, number];
        rank?: number;
        txt?: string;
      };
      opts: {
        opacity: number;
        zIndex: number;
        icon: LabelMarker.IconOptions;
        text: LabelMarker.TextOptions;
      };
    }

    interface LabelsLayerEvent<I> {
        data: EventData;
        target: I;
        pixel: Pixel;
        lnglat: LngLat;
    }

    interface Options extends Layer.Options {
      /**
       * 图层是否可见
       */
      visible?: boolean;
      /**
       * 图层的层级
       */
      zIndex?: number;
      /**
       * 图层的透明度
       */
      opacity?: number;
      /**
       * 是否开启碰撞检测
       * @default true
       * @version v1.4.15
       */
      collision?: boolean;
      /**
       * 是否开启标注淡入动画
       * @default true
       * @version v1.4.15
       */
      animation?: boolean;
      zooms?: [number, number];
    }
  }

  class LabelsLayer extends Layer {
    /**
     * 标注图层
     * @param options 选项
     */
    constructor(options?: LabelsLayer.Options);
    /**
     * 获取该图层是否支持碰撞检测
     * @version v1.4.15
     */
    getCollision(): boolean;
    /**
     * 设置该图层是否支持碰撞检测
     * @param collision
     * @version v1.4.15
     */
    setCollision(collision: boolean): void;
    /**
     * 获取该图层标注是否开启淡入动画
     * @version v1.4.15
     */
    getAnimation(): boolean;
    /**
     * 设置该图层标注是否开启淡入动画
     * @param collision
     * @version v1.4.15
     */
    setAnimation(animation: boolean): void;
    /**
     * 图层中添加LabelMarker
     * @param labelMarker 标注对象
     */
    add(labelMarker: LabelMarker | LabelMarker[]): void;
    /**
     * 图层中移除LabelMarker
     * @param labelMarker 标注对象
     */
    remove(labelMarker: LabelMarker): void;
    /**
     * 清空图层
     */
    clear(): void;
    /**
     * 注册事件
     * @param eventName 事件名称
     * @param handler 事件回调函数
     * @param context 事件回调中的上下文
     * @param once 触发一次
     * @param unshift 更改事件顺序
     */
    on<C = this>(
        eventName: string,
        handler: (this: C, event: any) => void,
        context?: C,
        once?: boolean,
        unshift?: boolean
    ): any; // should be void
    /**
     * 移除事件绑定
     * @param eventName 事件名称
     * @param handler 事件功能函数
     * @param context 事件上下文
     */
    off<C = this>(
        eventName: string,
        handler: ((this: C, event: any) => void) | 'mv',
        context?: C
    ): any; // should be void
  }
}
