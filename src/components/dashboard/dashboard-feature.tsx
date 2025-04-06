/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5yxQ5JnFDNMMnnad9h1et5hxUYXcqpWPFcJds22nSnce8ZExRVjCd8nZwV7tqTmrKALFgbBTUj7rasK9fTbVmJyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ywHcoNx5Gp3cqjY4uuzKGCwuwPXAq7WgAADfAzotMhZYKEqQhGNc9UqJ7KF6nBVNyqVoTFuk6mQKrGzRMnJgjTb",
  "key1": "4FdPGev322Z8r3Z6J2Vfrw7jxrQPSsUGCo9nqRZVumAP7tYHxf6mLFA8YDpmgJd9UqMWcZ8BD4DYaQA3SfFse6yT",
  "key2": "5GGT7zcaeDDoMdridSi3kwkoWMZeXnLn5kQk8c31AoCU1NS1FYiyNUjyi8S224TzguUyBqxqJnYE5HCkAmTiwsMq",
  "key3": "2gAjAVsenkgFaBLEpacErLWgPLyvw8xmWPVztgFV5Qc1sqQeY5FaaJtQ877XTgVNT1GqXWP7wgndevwuwCc8SgqK",
  "key4": "2DK8xqovDFwG8XKytVUWJbEU1CwMb6xtiCZFtoLqcYko2y2vC1d5bP9Yxgj8XtUUGsjfAuoKq3XdFd6FA3D99kug",
  "key5": "2VYpGVgvRULm3j4nXubBHMdKqxjTog8Dm8jPcCEYZmbw2m57KrDwe5jyPC37ep7usuLaoFon1t8cmNHxciTja9Me",
  "key6": "5PGzyUtWPmz2iaii1Yb3Tht79Au16aTLh7SWN5jQbdcVQJFArmJw9eUSKFTBbWWVtcGf7V2mapMWRjYb6KKwYmkt",
  "key7": "4Zn4yUTYXXpYB3sxVq5PdZNdyA1Fb7jpBbxN8KZPFterARvHCTXgPAptR5TXXfuX2NVCyvzcKLe5oJ4h8FHuZsYE",
  "key8": "5a4GjPttMsuiFwpBYz4Gio2jK6kzjDv6zCScyphoEtt1YYcRg963W5n3qXJ3BqjX7M1V7tptbH4RpHPQqXW5FZGu",
  "key9": "3mZ9YrEvr9ogyutceNdjzJmFMjwYYwEHbxE4mnzts3ttDeBHVqKWMakGULz9ijZqaMuXmYqnyfDQYfRSLXA79d4z",
  "key10": "2TufA5N1j3Gi5ER8e9pE2VeEWbhusoQZ7s3BDfjZV7LEUi1Jbcm2cU4eysmmf8HMaPnuiPGZEoqn1i8FxohVBhQ2",
  "key11": "47cYCFq6k26JHrGYL6VpJBZxb7XcPBZErHLgwKbwhBEyoNiE5nPBLaG91o1fZbu41hsAvb7iJ3okpMv9mdVtiDqv",
  "key12": "4AtLUVaQDvcRejmdbSz6pezEnuCrbBc1FjBwSaVfCUSChG1PmGCQsFEL8fmERyMkh113syANZPKXeDkAC8GNpXSw",
  "key13": "vgBJSzkiTcVJcEHGnpxgKB64omFh3BVPtJNzooUVQ1R8ZP7yhE1hwCfpjBHMfnR6DEP4nsuASGENm9XLokCmrgt",
  "key14": "2gkq1Dia71j15ERgKvgboPf85i4yr1DDHV1nGxPUQg4hPeNWUBtaveuRkiCjhXF7nSYhR9ZjQFcR2pDEzMe2a5KK",
  "key15": "3gRy1GQYc7SpZgZJ1quKqZD6NULbXdWetNLwNhDWbDj13nAG6BNsUSBSCWsrZb69ozWcajqGDqvthPKvgjN4YgWy",
  "key16": "2xgWprYdjdLxcAZyazg8cbvsTGS6aYZb6ctqhqzASLTpTcPpNjyWz16VyvA8MJb5wuGwLVu31wV9BxAq5CwFmuFq",
  "key17": "4eRS3fKPQiYhfMMX9VKvPBSdZvx7neGxq7Ttw2RKc9bPsSH4Rn8aEGGWmqtudeHX6wWXwU8eUJqPMsddFeDuDGz8",
  "key18": "5mYrcBKU9HTTo33wNw8jaTSSRxM8nZLasSfb58NmMqDzaJnv12rsDRCmrCMVuJGTD6UX5KSM92YyVZttifT9sQmZ",
  "key19": "5czcS2HWmEwhwZMTNqJVNHEuJRqNqacV6eE4VXDN9HEiZdpEFwBiampwashZcDGRp1vASfypDB3T5ZVMQu7mAbVa",
  "key20": "28EtjwtsEpfTLmMpXS78C66pgxxHpndXuqtH78nm1SaiWjevAuJVs2jJHJS4Cx1PnuV2eSnbuBrELqHkjaUztH9S",
  "key21": "EgJzc91YUaqvBm3uuoN1CMeQ3VqHag3kP7DYgZTeDU8AeSwyhHyDFF9eDSiHDCTBLm1KUf2PtAxzNwnhbXaRiPB",
  "key22": "47Lq1Be4xDWJZcT2haB8Pb1CgHLBo6VLTqYjzsGCJ1fmk8mVMrtiP6bcZq6AzVHwLzc3UkDRJ4YadFRBXv9SWaJs",
  "key23": "5abN4Gxd9Fc5TRtqypwaeUQbAQfwty9aXDGgfy28D5P7WcdspVTRs6Ai6n98ew1HsJ75bCtvyogLga8M5fjay97s",
  "key24": "4afdXjR8kZKx5pUmMidCzjek1cMhx9f6boQqfq73Fzy1a29U9ijrJjw2GnVT3mUQXjhEbb3iWWjmYgV1iXphuyxZ",
  "key25": "2tFAuUxXq5vp4p6db8T4eFeUBodAbdfshUHj6AqzHbecCKhREr92qWvW5n3oKC8Wzx6oVEJTDXZrRkKidjutqVpi",
  "key26": "5bDrrCsQ2DsACMPFkpkmaB3ybFCPXGAWmbcqx49sftcXKBiV6iKvNBEPdpgPZUUZm4virXm33pe1RrsaYQ1M2XKD",
  "key27": "33r4jYtEb9ARnKcxQ5Gdy7bsBdFPDQbvKogJGdAJ19cq37w87DnpK6G7HLvKRWo4UDhdEwvbmtcbwgqR5Uw3WNEz",
  "key28": "4Poyjypc6QgryVk1Cpc4GYwUxP29RdCuQvZttdaoMQavu9nPBaSufSQxtp91mVTsTnnUi67z7GSNT4xu6CZ6aoC5",
  "key29": "3LECshqG84ahhggY7Yv4zkbeXTtaxSAttYStg2NAW5qjH9PRdUDPXNtS8djdn5ian2Rm2JSxYdHfYHftrpP2rJnE",
  "key30": "4YuxRpnhVJjX2VLEKpc8A4dkTTEaNdYtFYiPBq7h2FCcxQDGrdVBLnehaZUCoABkGPRqWbAJGb3UJPDNSh4oTdkb",
  "key31": "5jnain81ptk2yvm3gyWvfG1AXC7wwAtS5gk7uYamkbjsYKYVPryDjeDTaDqxWbrsX5ESPpRQ91NFv6z1WXBRJ6Hw",
  "key32": "WDNgAdfAGG8pcSGdgTc4nUV8opHBPk6GpToUf24VuKzTfNdwPdLpvHMCKbYbwUWAz4oeR46RTD8ZS4fUPJsn35P",
  "key33": "3F79nkQJHhQ1KCMmeeP1ntZPMzKKjSS8atXJ3J5a9FqsX7XAjcJGVBQWs6V7AZvb8sKHYN6zfc6as5qUizJyBHRg",
  "key34": "2oHBfH4p96yLUAGRW3nrRutcACtMLadku6jAwMgayx5u1eKkfgrcrxWkUXzCT678hj6VK9Z1DWo2a7B8jAtEbemL",
  "key35": "5rzHDmbLyue9F67iDSije4ZTcPTk8AUaEoP5X9DWcAWv78TVxXJHsm6avaJEeVFtPEfKY3zFZUxTVdXpK6mTjD1U",
  "key36": "34a7JwcWaBrNDAQJaYgjs35ryzz5GZvStNUAd9n6WP4qoPgnXinRiddY5MTBRMmdNGveBcSKmP9rVjJBijxw988k",
  "key37": "3erGgFSS37guVTbkmk1rkwLpxx6auASeL7a7hPzmy37JQ6gbdzpm35TJ7F2sDr2zKutSj9sVqcZ9XKVYfCF9yAQC",
  "key38": "3eiEAfJV2tFW2FLaWYGLi7GNNHTxWRFmjA3smTt8Yws4G5GXKHriYwUFscsLhZCvVsDbroy6eYqLJtot7gPLWDJq",
  "key39": "ApDXLhgP7CbuVvsxaQwRuJHrcwLj9HUZLamt459RCNBmwiYGVMeix65K7mWw1jp1tZDLk1o4fUpxrspxjSDteEc",
  "key40": "n8w6xJsPv7mXsGg77aQ6vRgVyht7a22EzQea35KVkjS94w9h8Eku6cb2T7bAdxkj1JkcoZc9oqfyPeBjzzYTnS7",
  "key41": "59Ct7AaD1Ev6Ao8QHydh3hVYQrgaVaCPfFq6TvLxyT1UdcoBKFzCpjGdTd7Q1HvDamVjsrAaLnMrC2VtF2dW6uip",
  "key42": "3Zk41N8gUL2No4QRX2dxc4LKdcz6ecYifGNKEQMBfZ4ehVBF5UyMB4RuKrhk7J2Q1XKcVFLwPCa26MAAQzEZokia",
  "key43": "3RN8bmkNN3ymgEBTMb9VYsyUoVZb6bXpTMVYLKvVeWvZikLSrjWQUHLvVpUNEv7grngy6KLUpoeWkmvHwN3z3rAz",
  "key44": "2BrJN2ry2dNTzH4E3REbSRUgetPCE7xLgzqWSanWoBg31aoa5XtAN7A9Sa5K7vHGi95zY9kyhvQVztD1xcJXtxV6",
  "key45": "3cFh3ZYm8SNfEMhvbELPKfUJyGLLnyAS9SuyDforrftE28AhqEmaAVAqne3HDMdKyqip9hQSsBQqrXAP7iFxvvdh",
  "key46": "2jSe5cMNa8ojQvcRo2YiHKRvsXyzWHwE5XxpAe7LpWTcdRN4wZvCwYvqGzuNbzQb9t5jYqbJ37vsoey4XKF5YgHY",
  "key47": "4QpPmsTTXiMngv4JE57JKmLv22LpS6cXXapQ9jpwXYR7FuJETHjtB5V4UNdo9nSrJG2Yd3q5cdb9cWhiDM4WkiDP",
  "key48": "3KK9eWrBkomuZoDsWAaQWQjoQEv58pQAGUEqk3qgqjsPonUg2Nu37XnDhxusbHn35thLtFwVhj5wotSGH9BeTWQQ",
  "key49": "2LXKUPDAgVcRwwZBwuurGASor93jtgEDPdx2aToyFmAbsqNze339VvSFGSeA6B3PU9tBaFSYFZGNJ5C72e6p2GfM"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
