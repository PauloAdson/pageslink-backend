import type { Schema, Struct } from '@strapi/strapi';

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'menu';
    icon: 'filter';
  };
  attributes: {
    background_menu: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    logo: Schema.Attribute.Media<'images'>;
    logo_link: Schema.Attribute.Text & Schema.Attribute.Required;
    logo_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    menu_links: Schema.Attribute.Component<'menu.menu-links', true> &
      Schema.Attribute.Required;
  };
}

export interface MenuMenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_links';
  info: {
    description: '';
    displayName: 'menu_link';
  };
  attributes: {
    link_text: Schema.Attribute.String & Schema.Attribute.Required;
    open_in_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'image-grid';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SectionSectionContent extends Struct.ComponentSchema {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSectionGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_section_grids';
  info: {
    description: '';
    displayName: 'section_grid';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    text_grid: Schema.Attribute.Component<'section.text-grid', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSectionGridGallery extends Struct.ComponentSchema {
  collectionName: 'components_section_section_grid_galleries';
  info: {
    description: '';
    displayName: 'section_grid_gallery';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    gallery: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSectionMetadata extends Struct.ComponentSchema {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'database';
  };
  attributes: {
    background: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 3;
      }>;
    section_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 3;
      }>;
  };
}

export interface SectionSectionTwoColumns extends Struct.ComponentSchema {
  collectionName: 'components_section_section_two_columns';
  info: {
    description: '';
    displayName: 'section_two_columns';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 3;
      }>;
  };
}

export interface SectionTextGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.menu': MenuMenu;
      'menu.menu-links': MenuMenuLinks;
      'section.image-grid': SectionImageGrid;
      'section.section-content': SectionSectionContent;
      'section.section-grid': SectionSectionGrid;
      'section.section-grid-gallery': SectionSectionGridGallery;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.text-grid': SectionTextGrid;
    }
  }
}
