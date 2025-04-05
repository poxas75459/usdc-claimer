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
    "66jgAquXpJXUJufHZ6vzr26ZcRMnE7A2JwHQrSvTs3EMNrY3i5ZQBiLfT3wuX1dXLjFZibaBF4ofPUaBkqwjh69P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgRCHwdwPNBNRYXjqoUxq8YWinYokmf2ZHX9bFRNXxBpaizAgu1c4PT9XbtdCQUJ3By9QMG3JKZ3ugRNHsfS1Zj",
  "key1": "rAkFsb8o4kNZPDvdMmHyRHDt2rxR9puSJRpiytpwe3PEcwR6DueDWEjTbCZjyAMhiAi35VKh2U84YGX2ejpm8FT",
  "key2": "2fFnUs9EcsWTL2A3tzby3gCs8cDKY8mtRKEo4L6LYB8NqDV6qdLFFXnfnw5vE5Mvg6VhH4RFbJZmPerYHioNPc6J",
  "key3": "2ymMid9khbbqnxzW1uipMZgRBVfCh25DzqSBvk3eZysWUHnnVPbb5E2Megpopn1xvNs1mzN4kMuTDDD8evi2xwYc",
  "key4": "2mhF2gr4et5yYxTqheBtRptnv7NfXn8bXhsQVNh6cBRznppy3vKkkZkjqtq5naTtqqU6gaRW239XR9HuPC7FKsrN",
  "key5": "n4B8e7bJC6h9qbmNEcwoEMBJRY4aKysSiX7YSSt54saV7PWjJecxuSiRCwp3sXHs38CBUHwybs27dG7LUVWCqin",
  "key6": "4LbyfuZBiPYG37ANtHSBn9j1SFrDeSunoFzEkbdAL55pXWBPebgPcuShv7Yd1Dw4EXQnHAPtr48PrnEfudbvatn5",
  "key7": "3kGedXZduJuxUMQmMssVmyVNok2bKAcwKKaDvMEpxAxQv12KHRDSazBehSvxRDQQEnK1ew77E9Dm9xxbT9FUqU8D",
  "key8": "47vUE5pLTcenGmU9HGa3pSZ8PXBC6ZwrtoGxpR17LBP2X4ffwVDU6H6PdTqwr1HugPP9cwgYmy1ccCCktqHct3nm",
  "key9": "4WTCZy2cHEVkUwiUpVAY89gfvmtByNBqSsYy85HqCbT4TNxFXXrm4Py6Zw8Wh8n2DjEdXnCMccooa3foTX48FEWu",
  "key10": "5rtQvUjxYAzNXnx7ahGKReqAeTMVdGLshUqxXs5o7uYyLZyb1ipD1ReE221NW9G5dqo7jCUjGdefdR8KqgESrMkM",
  "key11": "5ASPCbxdqCumr8AQB86QjJtEDoX6fTbiCGvkmTKjxmHATiP635hcxK2xxPQH3brqs3GuVJTFRn16AaPUvCDAR4To",
  "key12": "vyCL7BRaE2Vjd4EHYqXfA5uYckwYvzJ1zsJ6vzv4A1PUgpz4yhAvWZU8SQDCW6xRNNEpRfgmk63E8onat3an3qE",
  "key13": "59LhisBSnbrCdPthgJusR9yT9LNJ2H3whAyc2Xak3qefqsbj6jwNko6YwZFQbQo61pzWGN1ReV87cEj6HcE9uxX2",
  "key14": "34Xoz67bDrD3RpuiTvUUnRHJHcq67dvmGVmqY77tRtfV8UJw9auBdusPq1BiNBKPKvMa6Zrn6F76KT5coSHPPEM3",
  "key15": "P6ACcWXUpgBHnU4pWyWw66qn4pAZxE7oKZDpD5wmvWcpFcanbK4mumo1Xyq4bujRQd8byucE9RXdn7Q3Bg8EK1f",
  "key16": "2x9mHJfsghDX8GKLFJLVzVgNrvVK7cMeKv9KRT4169hZGmZG3nQuDUcQ29K8RR2daE8zKDcj3BrWh6HvzhfcRRkA",
  "key17": "5bq91ap7wn1EkmthGDNBF1p9w4663nS4L75uD1U1aqaMaTJdYadi9UUrbyop2E12LQVCcTefUAadJ6HdbsPDxtgC",
  "key18": "4RF6iWo5xZvuVaRV8LgA17kjnoNB4QFKB875mHMp8Bd3ruocPUWZFKnUeQPN6rXnKxoZEkpKFA399RDyrdqMtoYr",
  "key19": "2KuurTcwUquzD3upcztoUnHAYE6GCpSbTD3tnTqfbBRMV4bJp8mDTEspXi2gTFWfb2wFYJEzS9STRusdr9KBs34V",
  "key20": "25Wxf71fFCfQRYovZFdCo22wgbGETg4hYqBv3Y7mXPjfNvnxYnaRGgUNafuBgKsLtFPuvUHU12BsJvXejqVoqosm",
  "key21": "2CTecdUptNUBWewszUFfTawHo9ag3N9arKVfQrRQPs58Etwn9S6LKLTQHqYkX4Qqg6ywVbqPhC2JL9SRWUhWMJX7",
  "key22": "2EvDwzuZgxFVgsZDVkKrWmBzrR4tb9FHhSEnpb4P5oLJ4xqyLPAGXtXLHzXBMxky5457YSMdR5qQHrzCJJZFHU4Z",
  "key23": "4Nc5rSeKoVkvEDvYsy3YtyJcvtfNJ4QhgBieGqf7C8FFGYo15Pm1hxJ6uBPe6esUYUcqwZ1Kywr8uQH68wikSKa7",
  "key24": "5sTRUq9pDTFQxs1CEv4YGuzcPEYY7cqQ38AeTZQa4jUzJwyMFJ22dPVp6iL16RzBmV1tZeZgA3VAK51XYPMWY5ra",
  "key25": "2eCCYEEaE25uLAmSLs89LM7wUJu55FUTnZaw1hAZDtqJ28RgRpnxovmA2aHdBFKG2nZziZFgXB31xQvTywbtYYBz",
  "key26": "4Z7g4DL9RDUCG72RWEjyDqcUKk3oEsNd9bwtubCuabsbGBj5S78mSe28UuS67htBRLLbysjUpcVWAPUiSCrfnFuZ",
  "key27": "23vPts46g6UbodoxJRxK1eaTdS6sqq9Zqx9GBHBSjiUGjqt6x9v1EG7j4HyaCdvbY7BHCeKnx74tFxKPz6izBn3N",
  "key28": "4vqV4n5dG4Fow1m8w3zBkR6BnFHTb9886J9Dwj5idD6Dfh4DkPv2darDqJhFcUHm11ZmadpYMYTYmxA7xE3yMLLD",
  "key29": "2sPHhUHUh92LThRS4KAzmV4indQp5E2ZMKFtoz4QWTGidLCKcXNvscNuduh9qC9k7YTDUmcGR68AUAyuBbmyxd5s",
  "key30": "3oH4KGJMqKC6gPtYbcGBBZhv9F2rWk2rLpFTnioUaV98ny3CHDjdUhHZwKBzJ1AVU7HusZ4AUTvbyg7YMKzvFxfU",
  "key31": "ydEdfxL7hZ3EyjajcTXf9QktB9YGu8LQhhHTnN55npaxzYKTWSvXkxdoU5KLbtZokPZZBWKaUBDft7zDw7zjR1a",
  "key32": "4W2S7xRjppGfeJm4KAzuX1tYdLBupXdeQZJXRdDUAMXdLtf2fPnwEYNh7eS1Qm1fBxgA4RwCmkKNxDkeMXkXWkBk",
  "key33": "3zKjb7gTPVeuZadFXTeV271CM1BPzwQHTja9Rqr6d2h3fyKZSo7whawPueKnem8P1fbLuQEi95SAXLoFt12jiRGt",
  "key34": "2hZUD8oSWvNeRme1FCG9PVAaLNhLn3n2genYZRkSqzrD1h1jyzU9iXdCYbN9uWXM8t5g2nF4eefqcKwfsiD8YXXt",
  "key35": "2WgWQ6UDy5MhRVXiPmLaaUv3Uv5mN1L7ij1B3gMy1AEz1Ay1NSWcz4cxxmnCk9EmE7TBYRJXH5iypkw8ss9iWtqm",
  "key36": "5MtbX4deJHZuPctSg28PR8CmhvTFjovz59BQApCvk4oMEGRTqvk6XkaAx6X6qQVViacYntdJXby9mgNTM1rcomro",
  "key37": "MhiWnNvyFS9y5zzjzZRxPwDVdTS53fos59NuiUmPrp4byzR4FtprQmh2z7GMma6CszkNRdhCsZEkWBhoyyaNuew",
  "key38": "123defktsPpD4WqXD7hZDQ2qat317y1yrVHHzFVcShrjTddPERRp2k3gdsqdLpCa2vKn95a2VtH4cEpT8ZRZgUQ5",
  "key39": "5wDChFC5Sun5Qyi1yPCDcY8Ej7WQ39k265VZ1kUfe5vPFE1VHzrcpE236RmutZJrTi7W3EnDg71KfGU4d4tGeUVV",
  "key40": "YvCwHGsHsfarVJQKy9idZ9WidTYVtp79fGX57TzVR1HRnjKPjbyqjv8MZwwcHDJyAoTc3ZApL483Yfy67C6rncC",
  "key41": "5CGa1zbMGHXj2DyESL3uPt2QSeSuyDibVdF7p81xVGpKT644JAv1wGCTTtU4iamyCDH4jZng83bZ7yzutKum299x",
  "key42": "5gHk9rFFKbnxCMN93GiEF9DzP5NEi6P4ADg1BpeFQ87XgX3twGcDYuimCQQZdTmqs4uynpGn9ajRkm95zUdt8MMV",
  "key43": "3DT3CUCMHvF4oqvZj88fQKPfZJHnJAeuWxqeJ3A6KHJj6RAzzsYSDUW245GW4R7Qzxfa8c1RUHS2iPxPMGyMk8Vx"
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
