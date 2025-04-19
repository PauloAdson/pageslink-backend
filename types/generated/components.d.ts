import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'footer';
    icon: 'arrowDown';
  };
  attributes: {
    footer_links: Schema.Attribute.Component<'footer.footer-links', true>;
    footer_logo: Schema.Attribute.Component<'footer.footer-logo', false>;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    description: '';
    displayName: 'footer_links';
    icon: 'link';
  };
  attributes: {
    link_footer: Schema.Attribute.String;
  };
}

export interface FooterFooterLogo extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_logos';
  info: {
    description: '';
    displayName: 'footer_logo';
  };
  attributes: {
    logo_footer: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    text_logo: Schema.Attribute.String;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'menu';
    icon: 'filter';
  };
  attributes: {
    background_menu: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    color_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#0A1128'>;
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

export interface SectionButton extends Struct.ComponentSchema {
  collectionName: 'components_section_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    color_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#37d145'>;
    color_button_hover: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#1f9228'>;
    color_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    color_text_hover: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#e4e1e1'>;
    link_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    open_in_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    text_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Insira o texto do bot\u00E3o'>;
    uppercase: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
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
    description: '';
    displayName: 'section_content';
  };
  attributes: {
    button: Schema.Attribute.Component<'section.button', false>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Insira o seu conte\u00FAdo aqui.'>;
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
    button: Schema.Attribute.Component<'section.button', false>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Descri\u00E7\u00E3o da se\u00E7\u00E3o grid.'>;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    text_grid: Schema.Attribute.Component<'section.text-grid', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'T\u00EDtulo da Se\u00E7\u00E3o Grid'>;
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
    button: Schema.Attribute.Component<'section.button', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Descri\u00E7\u00E3o da se\u00E7\u00E3o galeria.'>;
    gallery: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'T\u00EDtulo da Se\u00E7\u00E3o Galeria'>;
  };
}

export interface SectionSectionMetadata extends Struct.ComponentSchema {
  collectionName: 'components_section_section_metadata';
  info: {
    description: '';
    displayName: 'section_metadata';
    icon: 'database';
  };
  attributes: {
    color_background: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    color_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#0A1128'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    section_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
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
    button: Schema.Attribute.Component<'section.button', false>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Descri\u00E7\u00E3o da se\u00E7\u00E3o two columns'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'T\u00EDtulo da Se\u00E7\u00E3o Two Columns'>;
  };
}

export interface SectionTextGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_text_grids';
  info: {
    description: '';
    displayName: 'text-grid';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Descri\u00E7\u00E3o do conte\u00FAdo'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'T\u00EDtulo do conte\u00FAdo'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer': FooterFooter;
      'footer.footer-links': FooterFooterLinks;
      'footer.footer-logo': FooterFooterLogo;
      'menu.menu': MenuMenu;
      'menu.menu-links': MenuMenuLinks;
      'section.button': SectionButton;
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
