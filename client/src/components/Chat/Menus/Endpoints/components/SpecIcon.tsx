import React, { memo } from 'react';
import type { TModelSpec, TEndpointsConfig } from 'librechat-data-provider';
import type { IconMapProps } from '~/common';
import { getModelSpecIconURL, getIconKey, getEndpointField } from '~/utils';
import { URLIcon } from '~/components/Endpoints/URLIcon';
import { icons } from '~/hooks/Endpoint/Icons';

interface SpecIconProps {
  currentSpec: TModelSpec;
  endpointsConfig: TEndpointsConfig;
}

type IconType = (props: IconMapProps) => React.JSX.Element;

const SpecIcon: React.FC<SpecIconProps> = ({ currentSpec, endpointsConfig }) => {
  const rawIconURL = getModelSpecIconURL(currentSpec) ?? '';
  const { endpoint } = currentSpec.preset;
  const endpointIconURL = getEndpointField(endpointsConfig, endpoint, 'iconURL');
  const iconKey = getIconKey({ endpoint, endpointsConfig, endpointIconURL });
  let Icon: IconType;

  const normalizedIconURL = (() => {
    if (!rawIconURL) {
      return '';
    }

    if (rawIconURL.startsWith('http')) {
      return rawIconURL;
    }

    if (rawIconURL.startsWith('/')) {
      return rawIconURL;
    }

    if (rawIconURL.includes('/') || rawIconURL.includes('.')) {
      return `/${rawIconURL.replace(/^\/+/, '')}`;
    }

    return rawIconURL;
  })();

  const isLocalAsset =
    normalizedIconURL.startsWith('/assets/') ||
    normalizedIconURL.startsWith('/static/') ||
    normalizedIconURL.startsWith('/images/');

  if (normalizedIconURL && (normalizedIconURL.startsWith('http') || isLocalAsset)) {
    return (
      <URLIcon
        iconURL={normalizedIconURL}
        altName={currentSpec.name}
        containerStyle={{ width: 20, height: 20 }}
        className="icon-md shrink-0 overflow-hidden rounded-full"
        endpoint={endpoint || undefined}
      />
    );
  } else if (!rawIconURL.includes('http')) {
    Icon = (icons[rawIconURL] ?? icons[iconKey] ?? icons.unknown) as IconType;
  } else {
    Icon = (icons[endpoint ?? ''] ?? icons[iconKey] ?? icons.unknown) as IconType;
  }

  return (
    <Icon
      size={20}
      endpoint={endpoint}
      context="menu-item"
      iconURL={endpointIconURL}
      className="icon-md shrink-0 text-text-primary"
    />
  );
};

export default memo(SpecIcon);
