import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import LogViewer from '../LogViewer';
import { bp, color } from '../../variables';

const Task = ({ task }) => (
  <div className="content">
    <div className="details">
      <h3>{task.name}</h3>
      <div className="field-wrapper created">
        <div>
          <label>Created</label>
          <div className="field">
            {moment
              .utc(task.created)
              .local()
              .format('DD MMM YYYY, HH:mm:ss')}
          </div>
        </div>
      </div>
      <div className="field-wrapper command">
        <div>
          <label>Command</label>
          <div className="field">
            {task.command}
          </div>
        </div>
      </div>
      <div className="field-wrapper service">
        <div>
          <label>Service</label>
          <div className="field">
            {task.service}
          </div>
        </div>
      </div>
      <div className={`field-wrapper status ${task.status}`}>
        <div>
          <label>Status</label>
          <div className="field">
            {task.status.charAt(0).toUpperCase() +
              task.status.slice(1)}
          </div>
        </div>
      </div>
    </div>
    <LogViewer logs={task.logs} />
    <style jsx>{`
      .content {
        width: 100%;
      }
      .logs {
        padding: 0 calc(100vw / 16) 48px;
        width: 100%;
        .log-viewer {
          background-color: #222222;
          color: #d6d6d6;
          font-family: 'Monaco', monospace;
          font-size: 12px;
          font-weight: 400;
          height: 600px;
          margin: 0;
          overflow-x: scroll;
          padding: calc((100vw / 16) * 0.5) calc(100vw / 16);
          white-space: pre;
          will-change: initial;
        }
      }
      .details {
        padding: 104px calc(100vw / 16) 20px;
        width: 100%;
        @media ${bp.xs_smallUp} {
          display: flex;
          flex-wrap: wrap;
          min-width: 100%;
          padding-left: calc(((100vw / 16) * 1.5) + 28px);
          position: relative;
          width: 100%;
        }
        @media ${bp.tabletUp} {
          padding: 120px calc(100vw / 16) 20px calc(((100vw / 16) * 1.5) + 28px);
        }
        @media ${bp.extraWideUp} {
          padding: 48px calc(100vw / 16) 20px calc((100vw / 16) * 1.5);
        }
        h3 {
          width: 100%;
          @media ${bp.xs_smallUp} {
            left: calc(100vw / 16);
            position: absolute;
            top: 32px;
          }
          @media ${bp.tabletUp} {
            top: 48px;
          }
          @media ${bp.extraWideUp} {
            margin-left: calc(((-100vw / 16) / 1.25) + 28px);
            position: initial;
          }
        }
        .field-wrapper {
          &::before {
            left: calc(((-100vw / 16) * 1.5) - 28px);
          }
          @media ${bp.xs_smallUp} {
            min-width: 50%;
            position: relative;
            width: 50%;
          }
          @media ${bp.desktopUp} {
            min-width: 33.33%;
            min-width: calc(100% / 3);
            width: 33.33%;
            width: calc(100% / 3);
          }
          @media ${bp.extraWideUp} {
            min-width: 25%;
            width: 25%;
          }
          &.created {
            &::before {
              background-image: url('/static/images/created.svg');
              background-size: 17px 16px;
            }
          }
          &.command {
            &::before {
              background-image: url('/static/images/command.svg');
              background-size: 16px;
            }
          }
          &.service {
            &::before {
              background-image: url('/static/images/service.svg');
              background-size: 16px;
            }
          }
          &.status {
            &::before {
              background-size: 14px;
            }
            &.active {
              &::before {
                background-image: url('/static/images/in-progress.svg');
              }
            }
            &.failed {
              &::before {
                background-image: url('/static/images/failed.svg');
              }
            }
            &.succeeded {
              &::before {
                background-image: url('/static/images/successful.svg');
              }
            }
          }
          & > div {
            width: 100%;
          }
          .field {
            padding-right: calc((100vw / 16) * 1);
            @media ${bp.extraWideUp} {
              padding-right: calc((100vw / 16) * 0.5);
            }
          }
        }
      }
    `}</style>
  </div>
);

export default Task;