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
    "4rvVZ5eLCxUXecLPtwKqzCji6ueHmEJMgtY9BcbQGc8WxKwMo482gXkU8QCYTXEAVL9Ru1W39b8LiAsK29StdyWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NM5U6ohLQvwkBRPJXgvzUbvEyUdFRfYRrtbMYERPshpf5ePsHMyik3JRTce522DtcEF5chDMGcAwpNVUcDyhDV1",
  "key1": "54p5jEwDDyKhZVtiHu2sJXL79mq7fLV5nzWtswVYexK4SrLTmTcCvGE1tVBxqNZ8T8fUyy1tx4W3DVD5LnrRzU5o",
  "key2": "5rwi9i9kXCTQWVifyeVB4jLEZ9Ba1mBckiUkm8U4wAzZxN2CNhyFgCd43oGRiTmg7fz43boARezARqSCYn5NnUeH",
  "key3": "5Kr6MQbzmdpB75DmcvWQPUtkzCJSbLD7oHGnx1N25Emxx7sBCJqDkorWjSnPMvGvr4MSAtjCGkg8YZroCfXHZ4kS",
  "key4": "3QJz3PoHvLX1e5vUtN5rx45KomxFY3jzgobKPddt8ms8SvWiXpV7yuEjkTLaVoTmQTDXwsv9X94HwWtnRJtmPbLP",
  "key5": "4FVG8vFa4BoCz8ohXux5JNsqdMQZz1qqYVgbwFgdvbcERkzMqRt8prSWrQSxvT8SXMFsHT1oGzwYTK3c9cKDzeeQ",
  "key6": "3nT2Hf4LFSEYFUaAw2TwGRn7P2MFXoHcBTBfYhqmCKYKQfXNLhdRsSs1U5149b5VdjiTgPvZASwFPwCBLz8nQ2QR",
  "key7": "4M6zZyHmyx8t79MgbXqHuKaNAWwYe7uU4Lzs9axeVThEJTphYgsjqHB2Q9q7AjA3fLy3w4eoY5MVU7uPPYLzMUtf",
  "key8": "TEVvoGBwcvVdTSGDz8VBWkwDPJKDKiW3m8JZ9w8HBUxR5WskbpoFbWJmbcW158mxNZnjdgfeqN6p9beTcPZcmXv",
  "key9": "5zB4qrndC9N4w1pium3wckq3tAkz4EQi7114rqRn8x8FBvg5tTBuPzcuMim6EihH9bvRjRK2D4e7uMMLEfj8C5w",
  "key10": "49Dzs98SoA3jf2biCjHQh6pEnTQKeQLMpZ3UujnCKwEfG7gVJAgu94dQj4L5qUj94npX4HsbqR5o2iLhC5kVys1E",
  "key11": "uUvJkLnqEerGXeeffdFsGBvuQGmrpbgLdW7BExgj1MqwamcH5ToKjfwezKiyfJnSx1JaS6bWbUPGo5DVEQoQf2X",
  "key12": "tnPJEaeszuMEkQbQGvx6W3ByjZYwquGD2abajfAVBjMwuvRLExtBx6qUTeg3e3Nh8gaVgDsvTecksBCVtCNkbyX",
  "key13": "2iBXbRGX6HYDJaRMqyMJM3oJgrzyREne3qzJpN1MX1dUiphbdvnhKvNduuUtPtEc8d8kmXc5mo4XZbzSDP9By1KC",
  "key14": "37cn3yfPAyNdzyfdnyUzTZVhL7bVSYDGEEShWNWx5cVNJBS3ECMHpZzuTsZJB82VwmAU7j5RDLgjgf5xKN6DWwSG",
  "key15": "5D5HVKWRZHFa93Tc9zWZ4qb2MbXXd25cSXgwf81Bar3Vw4oNvNwKRL8u4saFbhTRerhG33i78Wr6xmxHmoZbS39q",
  "key16": "63Sd5syPdwLMKfSGQe4yr2RT2CF6kZNZhqtyRuRgswvmj5uAHvNqoz8ZaTm9Z677yLsKH7mAsUyMNsj8V9cYNjB8",
  "key17": "5xm5W3N3MGhoQGyutVN4UMqfxVDAH3t7SAFxHcWed5gtQKVnw13zngvvP1jSmNCtt3nMyTBri6ebrzLKnwGxZbtA",
  "key18": "5qZqD5mScZJ1GKge9ujmYC2zGwN5y649fkprbsXdxmVGKNHkSFt4mYPYkvJZpuvvhHKCW7k3BZ6EwxHAGKVMNCzt",
  "key19": "oLPAFG4k7bonnC74Q78q5HyEoMgyEXBVfjSk84EyfxHVGmbrYUfMwVzobk9XFBY59nZcrDvbz6t6hqX7QPjjBL6",
  "key20": "5a8L7EVqUYHxBkAaTrd7xbMTmWUh1kNUZ588j9PNCgwzV3R2N61xQrNexq3PrK7NCmWsHdrSuFY4m3vj7BYxwJX3",
  "key21": "mCbVxzBvgEktcPKmtdYDCHbxnnATwRXcDz5eBLF5GkJ7XJ6pVuiP5ZxyqDc3taEWou3TwGmhtfzUrbBwpdJYDjL",
  "key22": "58iCDJv3k7XN54bG3iiVzSoaJFSXB4c2w4mypj24sYp8pPwDgSqfkEGzvKL7Wrf3soMNfaXgP3VQ2uuaRL5wUaf6",
  "key23": "5VE17MvC66VfZdZAJPQu3ygFLdKE9dxcLjAMPFHXf7m4SdSqjdVdXtpEzoMpdkLdvMw99hizVj121ANLiPiaJP3N",
  "key24": "3dWQvPKav3magUXGtQxXk62FBqgdxJ2EyaEpNrHgqP8Uf51DYMEeqAjPF2StDG1fgCBUWkKhazfE1M72osr4XAzk",
  "key25": "4hCzD2abAwaqm2c6nusV3zbZuYgH9D6kpqk74FwxktxDWZbDSwruWjyEQE7E5CWRdpTpU3XFvyzPg69guS7mMUay",
  "key26": "5HMtt7PZqhbfR33ESEYha9Gw87v96YtdeD2dJk63WZxdWM3VzXh8rR7bFXccJoLgMzWFpvmwDQaKtFdp75zrSKBb",
  "key27": "3zCjB3aWXmSN1SmYqQz2jzzjJ5mw5PCDQamJQGhVwFHXjmh2o363xAeX3qGFFcDhZ2d5AdHjZbvEeq18kbq6i93z",
  "key28": "4rxFsUHq1jxkjWMtcUBY9FENvdQ3pgQCKpcrECQY1wbwmZA8f1osRXwkC57cFCcUoeEaEXp7WpgtPzZHLbEKEmHJ",
  "key29": "23VJZSo5hDe7SrcToTS69GM7knT4wsfWqHyjNfuA9F7jwMREquzcGGsjJKuA2oM1zAZAwKN8tXQeA6ZaTgqoRpGu",
  "key30": "5QoZhQtWqaihTjyGdJjnNradkT96xSuM8BQy6pfHWnDb4TVyZpTjZzPgPJpEJi7oHhA2EcHDhaAksFicTkLhGdNo",
  "key31": "2bpiGyjVDbFSsK9a9CaRTDRBHriRbozeDYWLgFa1ky95TBAtKVqpvvu4cHHBBpL5w4Ni1ADMMumyZragDdGJZCmF",
  "key32": "52SSmvMxQtgNZcbUu2GrvvHDwQhzZasVPGeWSW3goQxJMz3yzUtXh5sfCnJkfjMgWTGVZsGyjG66jtdYgXrZJvoj",
  "key33": "2A8hWwpYTM1MuvHS8DWMyKj4TZEpnTn74kRvnxLkX3p2CB6gHn4ea38yn3sDUKiPcTsYessRdWjaJYLosnNcviVr",
  "key34": "AUXQnEpr38u7J7T2jPH6nEH13o1FC9uLG2TKKeSNFkX88Tr8RokbuXZZHZqh4rHcUtAKYzkfrjb77YJDsfRUR76",
  "key35": "4ctrRFoHBUxHn8ys6W1RKBpRNNBMyezK2HLBoNRzKCC82M75aKMZ8rq1H1MZLzMznJuTRCtTk9v83tzedeZdcWCT",
  "key36": "2rEB6M18GPp5sWc1sg3UpQ7ZbLZzKoecSskdASEBaxRp3J3Src9EPMfEzJVpizPdyKUG7faLPPWoAXmrtgmE4mvh",
  "key37": "YYwQpyJyZ1iRBrPTjVRZoeMejhoBn4aW6CLnNe4puWsRmsKiBFYb66d7oMzVA5zBR1wDpVi3rdRQU2i9PfriqBK",
  "key38": "28bfk6XcdqNs9yz8w5t1T6ntm5taKFo42gcqEgLoPVwhFkVihuFo69WcjTEnfECU7zFBDyKh5MdK5kZPHfsA4E4J",
  "key39": "K4GAufHzgCzTRUoz3i57e8XeWH8cAr5C5q4MC97pnzTTsDgBiK5AuoPd2oakEJMb2cgVsHmYDVzKwDE11dhaUwS",
  "key40": "2aiJEUogUBusxdL3QVo4aoQuaMJcVMKMCQD7sEFpuD7nCRhbyk96mYPPsNC2bNVEUp5Hzt5JLEbzb7Yn1ELzNWjR",
  "key41": "3gbNfjWDKWbAvYPxGiFbfnqYwXdRKAdpxBfPs3A13gmYQpu8zurhD1vSiwD3w7DU5Tx3wGLL796KkpVW5zqb9zkF",
  "key42": "63EndeTQrHZw3UV83ERovgNn7AtmThrQF9kfqDYPZyBM8gHzF1BqHHwdRzf8q76wPf3ah1DQ1QwBcbHrKAYeLgUK",
  "key43": "3xFVh6UzFhTys9L7kGkGR6NtWMoK3RoVtKFvR1SZmRVBDHRzr7zMzPHq1ADzxRR86NLWxfNhBdiKD8bXgNLqAfdY",
  "key44": "5PWLHGHYPzCiDBVpQKXEUT5f799xrxRSK1H4XPyx6dXh7EpdGdYaYLfLHJSkMUHSLYtLcXYha8wNddZbKX5UbnqX",
  "key45": "3gfjyRpsKC4BKhy5ZQKhp4TXpxmMskYPMckcns9UkWhShMyAu8GYApysBtkNmtZj4BvkDA5V5m9KYn9dvwfaZ3Xy",
  "key46": "Y3dCkLesw8sLuH1y3VPagwMNtJFfa7EkyVHqU72ciXVJT1tgA2DojqyoPLkP1JrDvBD11gAc79XHfN9BYKZcHar",
  "key47": "FjBpyU6KiLnznYWBmRAiYfYG41EkHLfs5rdD1as63uASZc1DSAN55ZKE6kaRn6zMsh6UdUfNhuMiyXZsY5wLgdG",
  "key48": "23rqXr3ufBRuGsEFbuTqpBz6AhwCxoPf1t7cYnxJjaDEskwg8vZy9LMmzLc91jRs32fFkn96dTZZ2sXvd1ipGT3N",
  "key49": "5EqF43RP9juqDDqqTwYXMoBxkBCpogHXUpVG8vNp8VPLuCojsr6TM1poeLFe1quL79ibzrJFmb6t7XPgzj9Mcey3"
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
