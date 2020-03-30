import {SPHttpClient } from '@microsoft/sp-http';
export interface IReactUiProps {
  description: string;
  spHttpClient:SPHttpClient;
  currentSiteUrl:string;
}
