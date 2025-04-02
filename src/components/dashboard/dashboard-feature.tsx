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
    "58vXXuaHwNwNgESFYevBcrxw4mLiJsf5opqH4S99nEkxuhsb28xMyDQ7c7rH28uDRGgqqm4hxdSLJ55Frowsma7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jRDTVvnM4DtQ9VMmYepkiqzoPcrEgJBURXtSD69LVARgJiGcjmsqn7mb3dFPuN4VREdo2LA61h6QorwPPuEtKNZ",
  "key1": "4p1kzzfzubBovYd4mCutcNwRiU5F9qeLyL3CmGdvCsxoERxTWmzpcDDPTHuvY4WCEFtEzW7QrCTaUQrbqpSGGpKT",
  "key2": "kj9w6rMMir5EzF3PV7enrWDBnWkfhYFmASFMmCDAEVkVg8iZxaoHseTB5Gek7kx9HVggG7rn4xbsBNBBCek7LCV",
  "key3": "4YT6QQ89p7eFy8fJCZaKJdQ2RHz4ZzdJ1j5QTZieQG23HLjCTs969A3vktpAfekg1jPL2e5PHph5LVogyFk2vLgJ",
  "key4": "eNaZNMAvLpxpMVctPLAqjuet17HJ2xtWL2DhGK4wpBxvVtSBBcCCAaqeR2G2ZVQZNitSMSwW2bgxLakZavomfXa",
  "key5": "4XTf4RhQxCnUF3JkjZpNZb2yrugUXXEZP4Ad5zS4KzDbYnyfDZBCdBeQCnMEDWhxLsgWAciYbN9HPSw8ndyK7KGs",
  "key6": "5kg2aUmWecwbnbDHvyoGJyUaWF8oGjrbz2ftu8FMouNXqRjHxmMg9UrAfasGACdi5DNooCb2xnB7uySD8D21iN2A",
  "key7": "3x7hY3KKExSN4KPWHDoRbM7qc3ePbauhSja9j7j3vKkHiseMsGR7BbXDEhWN8GF6Aj1JENBQpXNbv9bBHsfcMnom",
  "key8": "41vQnm2zNcH7Z7ee19Vj2RG9aMAHHNtX4WBbL4ypV4WdYwRE83jUMbL8qFo1Bt4ygHmBGvbU3QVBRAbWquZcBMGx",
  "key9": "32MzuRMcU29h7EfDrsDQ56UuqqSuwmGsaiPNLz2kGCKTWQFt14vqn8thujymqjSY5MYzN7ybk3RaYHz2uwYKdZKD",
  "key10": "4GasKJWqWR3AXr9pZTddJUo3yAA5zzhesF1mWn22kBKscfudUWfRPZ3Wa9tWWyBWb2k34WTk1MJoQBEz5jiUGodu",
  "key11": "DzYYaSNiCVL8cXCZwjTeZnQtn9ADt5W8aQrYnDt9FtLL3bAsLe85tvA55aaErqRbRekrATU2rvzyQaBFRqXTE61",
  "key12": "5zctJjkGftS55F9HQP5m3vUuxNhg2cpxJBqDxck7Uf6ZGbaFtJfLjRAFXGeRVgnSWb57YrBFdygFJNvVXqeFx3V7",
  "key13": "5diKYDEvq7pzgo6SNr3XdVT1mTLB1rkY6qhHAvuawoSeJPtbdopuAcZRCD2xrScRr37wd6o6ZWdpX9evnebSqiED",
  "key14": "61MRmdugtVSXCn4LCgWJz3m2X9xwrfL7Upw4XaPhSs5yTjGEH3nMuumvKmiHWwMs19iWnf34TcoY12WHp425HYQZ",
  "key15": "4G6sKERa9gmtB5jK49yHbRDJs6R4pCoUS6k3RY5S7Vqmf9zWuwSJYD3v6pKGew8VUB9CNw53Q7JKK27eQqdp4W9G",
  "key16": "5MQ1vPFqwdMPNd7G3zwNkiDbWJQeq1N1t2n5XSF4X98BkYBQuCzQoz8G1PpkF1jYBa332JJX5nGrLe16wZfUaCF4",
  "key17": "4tMTeWDgJ8hPNT8B5C7373xEMzAdHTTdtAN8hCS8KGirwod7u7nXajMLTiAP93GSGYys6yrN7JpoTRTvWznZxdWC",
  "key18": "5F5WmumwiQBe5ftBVdNveh7HJ31FCnRiZuUJFTTHPc2krZvTwrQZPEroxjcnVmTgWc8uxEiKEyEcarGFGan22xRs",
  "key19": "5A3da9UnvpFzj3y9bTuX1tD2RiAY3m5Riuqj1RBzXK1ZGBZ2xfFNL6nywFHoquJ9QHHevmYRkc7gCu17PHfNmwXi",
  "key20": "3xXfXpC3oEsH9vqBp286NTXmBB4hk9kbckEDQN9rFmM3wRSmLzDfFJehU1YXepsXd23MonkFZbVip6nxzhJTHguT",
  "key21": "2As3NxKWqMLrPJvMb1wPxaKf459eKEXeM9rgosGPdnNwSc6hjA18PXj3NUPjvb2oWBURoPZKtstxp9wZqs7zMoaT",
  "key22": "4sqGTVfKmvrJd2Snpc3yQPSKcv3pRUbZU4becq2zAN56xX1JcwpanhYZBEmzWoC6YeTtqEZg9P3VkPTSkjSFi5Lo",
  "key23": "23areX4TecHRVaS2RhHteR5K3zNMFTvdkWsKNrpDBQxqUi88Jf2CGfysLtvVUrXY2RHBxJdfbwufQeahuRfcFwP1",
  "key24": "4okBg4GWzuWvVpPDKKehVHWSYyU7VJo1T1WCSSEa983K41EZdw8Kr6poJWGUY86aW9toLHSYw4iamcGqJJXBdFhH",
  "key25": "2bbAmf3wJdhYuD8Ns4sH5dxT7ypiZPYGpJsN5zpMTX9vj53rx5urr8ZkXHfCo6fWEYTkiT11VcvFazG4SNXGeprv",
  "key26": "2zYK41PMZr8bDrANq2VUxiZtTcdEKHdcmyon2r77SYi5wKr6xh3kqfe7B8uqa9VpqKeimyS6a6tYRAzjsUkW5PrZ",
  "key27": "rKZb5g7txRnwWq5TcDN2rV9Nfrn5DKwd7wfNwoVo2nCcmGeqyK82csm16zA3wAqbhDVwfRLG5T1pYu5vg6ACe2q",
  "key28": "4SG1JSNYoSQUbqWyTphUMMfRTChcpwnnugcqtkLs46GjGmgNBpMwqyBJemmVpR6fomQc8gxwszF6xNGzQgHqArnR",
  "key29": "Gba1xQbBxEjsMyi95EN22ASgSVCmovnQwxY5Dq9mFASqDzouJXLEChVuy46j7rvBgfj7jPZiQmQuG7MbPpqFLMy",
  "key30": "2nawHx1NnTqdWeUgPTfR8WKYSFFDm96Rh1tNsE2UyQDWUenGvoi25Nt4upcJoLqexaM1fe6PFZ3xcTNrsfur2aXZ",
  "key31": "2FeUE9nKQDpyTVBEyPdTPN1Apfmu6qKdkW7u2ZJW9bDy98CDUgVVTEwAnXJ2j3jvLZK98A1VwBtTwddW5yYk7XZV",
  "key32": "WniPFGrqEqEEnTXjLgs6SCzw1LxdKW1JJLdBP5aMkRZEApdb5mFp5DhieSsv2jdVS2cuFiQTDLwtGWCR7KJErtW",
  "key33": "56yXtAEyXkZ7JJHAeWsZGuUz58edpsf7BqB7cKTkcm5nusZez61JYopmB5r32LCFLcVEW9NtpwvRx3xva635yV5H",
  "key34": "5GuAdErzY8Jtbb9qepEuYYeGEb2FxoFeghm4EcfgDb3h79TXwdgFzjnGeFVBjyEbMBga95ZQq3gPoV9h8w71qBwn",
  "key35": "2XRohcE7c2T3pJCKABGZVbQb2PNgdDJCjuvNbLa1vw9gNCHSizxDkDWovpuzuKgadnmiWUQZ6qSHJ6J5RugnLdMr",
  "key36": "557yNqUwC2er7GdSUYs8FDfm3i9TacW2XwZbBXnmgovkvzNJsgMSLenvEA2kMWAaWsofbM1QEtzbrzML3oB4pEA2",
  "key37": "U8XgG38JmqtsLfYu4njV2eh5rZ8HPmVR9bTH8DTNMsUJ2djZJ7LiD9qrZyv4EH4dg2juj1epfh5g2ZxGizNZAiJ",
  "key38": "2hZpYx2rytPNJmcXm8hubugx3yuYztMQydTixRaA8FkNpXWRLpeQCsusTp9BtSDRzdrudVS9Lt4jrcKWk44xo4ta",
  "key39": "4uC5Bk9oNj293yaLmcuEdg2n898Xr3v8CLgLcC9cYEBWdhsNNpsaJHhGFFn1GK1VU3AQHbB86oEdqxhb2LZEMQc1"
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
