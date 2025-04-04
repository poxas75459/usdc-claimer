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
    "43oS3WFPVs4VKax38PhWUAUn8GWYmK8nfjaop8xw3czQ8GQsCXyk6zeQgUdDjhBvtYjXKDvjnziG1Qjyyi1XHXh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pdvmsZF6qnVkfLjH3G7ZbR7ibsDXnUUr4vXGuUXTa3CQ3MLSFoNqCCnoa8oo4HPBuJWnUf2yczL4mF4goed4KNJ",
  "key1": "wmRhsSGxYyEEU3NwQ5UTFmFWTA5v579NWNKVP5VRMrunP17U92FhuBfYVUrZJHab7nBF3fGxsedunHkL2b5PJK5",
  "key2": "54Xynm19hVysHBU6XtXBgUf1LoVdozNUBgwNcxjuNqKEjhJCGBLLQbv2VsBJhjkBbDkULwBPmSk6Mp7YYBCpKqzU",
  "key3": "5BaW4m1vNF2tjfeWY7v1dE9dr2oUNiA9a2768RVU7MoWsU1HyHhFs5omxfKTUK9ZB6WKRTeQf9TMmnxsPwNSGvYN",
  "key4": "swUhfnrDmiRmXYYPoge3xf7SsnTWywTwgXvRjcvjpisK21o8QgdGDJrJNY5nDhFBqUiYrxSixsjLSBVRJxmQaRN",
  "key5": "249pACbBrQbGmBrbPXrzZZKcqSN5EvSCkUXkCKyscdUfwNvdewD5dxUC3doZyxRoYRgsSzH3tPAWYureJ38tSvGC",
  "key6": "5bkWGsAefhuXfXLSpDf6agHRtE8MpHsKeRxKfnLYWS6Bk7foquXq8JSekJPUxWzLS29K3wbAemxPB6JzmRiuhyWX",
  "key7": "3Q81WYpxJeoY5XKMtoWaSdZGzFGQHVz8VBhvYASBDLAoUhxSKp8j9yxGinigzvmBnLAAjjHrYmuipefAt2pR6KiA",
  "key8": "4Rk3CRz4V7DtD6yyU7QRf7brpV92XWUYheZke2eNVwF1AzdRh2o2knxUXmH3VjSzCmmcAh7TrvA19rvUBQfoP6aR",
  "key9": "NBZYMZfMevaSn7GqkypjpT7Eu6wQCpc3nzNaqqoNx1ezrVcP2W1bobnxBq7tjFTm3Tq1HgPxqSfea55X2hfg3Q9",
  "key10": "fgMWkxS95mnXj3ZV7FQFTSFpuLFx8s1ogqWAaeC9M23H9SgMYTpy5CXCjckU1rrEQjPArPpr16PyXtFSTZLYRAP",
  "key11": "3wGt1TBtnqbhQetdgZuZuz5uqQaN457vpJEVYPomNzBCzxQQiJ29wSMrV9cvT2KgvYrHdY8mtA1ePestTWKmvgik",
  "key12": "qpfcM8GDF2ik868T4mHh47YhEksRZKRN71oZT71D4g2dJkjdZnMEFmiZb4UU3rFVczvAMEHUv7TGEUZzNwodfjx",
  "key13": "5dJ7ybkVm3n4UjwD9sMrHmM4g9gCehEGKp5oKi7RRyCydbwCUTcmiX2YWQPSijZxjHj6pnE3iHP3oRENPfY7Z3z7",
  "key14": "z7GDPgCaqdEsxYypanNz8CBZ76qdraFYefKCJtX9rzbsp1wanScxV5TH59aFsCn9iUHWFbUVDV4uN4FtuBz4bSW",
  "key15": "3AjL98vjvjD1PRuBcf72ZkyDaaDrCKeU4y4sVTaF3iAXWUhFzN1v1GsdeZqE89sWQ993HUugdFj34pWrc28CMxbT",
  "key16": "45f2msUjzGMjQX2oymiM5ccwTRJPBmjs1XGuqnr4Uqv1kwDiYmZFdx5AQenWgBkdYXcJ1KmwCpRczynY9qr2P8BG",
  "key17": "5Hu2xpaNhz2idjYVo5ZkFRDoNd4NbpVkFEVKrjLXJ9fPMLRoyDTFpKu2MGTXasSjdwe9XZwWiyePzou8QkpGtXBm",
  "key18": "4z8JQSnt1dRDcFd6QHhEqKoo6hzr1k5X237cf3PLtWarRc7W1fzi7tqDGaycgcqNSUjfe5qYz7AgdrkQ5pPtC4qg",
  "key19": "2tC1Wrs3zT345vSqQK4mp6GASKXkhvfcjTXoj78Gk5wf1fRsqA2uJpyqxG8poSDtbUq4Tr4nFGspYJy98dJUDicf",
  "key20": "29V8SYr8k1zYCSdhQ8idmYGnq59viTGe7RywzB3F3RWnriqGbjLJr2raSgs34iPqzGaDpCrW75H7R2Z7ACDMu2m4",
  "key21": "32ZDAC16SJTgL8BZtDxMkZJxpZdgwArZnjg49eDvHubGcFLUFHsryy9G26XpoTSFnxNDpkdib3EtBVAfq3MSNeC7",
  "key22": "3u7cHQCZnh9d79DSyZTB1kw5g9F52wAFRXc9BjHXhGUBEEcPVdX9b6eGnuxR4JiGhLhFZMdA5pzwD9hf8GAWFUKN",
  "key23": "4qvznWbZBfVWVqXG8VUrTmdBgg1aPvWysrsCQA3LUzpupfMmQxtQQjxnNEr2qXNaiyTQwGTAhowNRt1CLKJKfQyr",
  "key24": "3R7BPwEMdNY2uVRZmrE9Www7cKQ1DUVpyDyzXTgV83NCMNCAPpXBz63GxjgjW9Ft8kwA8z53D6iA8nztPUMKBNXF",
  "key25": "2jR9MqiaHqhEWknoitTNRVwSBogHBGXqAvc4VbhUrJqZT1UhRNrL3FQkpuXxQnkL4PY9iCEF1asfGNSwUDhoZuhB",
  "key26": "618G7EGK8558U1hp9vsqaQvQ7SYLY2y7imdNX7pukXPVNkKAUv2fm7mCiNJmnBH72hn6DsLjimJgwpe3WGEPTQjt",
  "key27": "4Zg8TZoXXBfJRoRHT3H4ro9yDy1hij6efQyo1rvknNfuep6fHQ4jchexEXTWJocj4Syp6y6r4dMERySyL74AV17i",
  "key28": "5Z87BHDJsKUwZy27FixNX9do5wTyLhKCSPQP4bExuKGD6DpTqpjJi7bWsuQVkfv9sG66WRVG7HEmB1Cs3FVza3E7",
  "key29": "47fwUGnCSQzjb3BTwezdYrnHMeddosM5KuJZoHkCrTfbR7j5onRF89KiNw8RhEeM3dTRQ2FNiis92UxQBz2xtj72",
  "key30": "647Qu15HgZaD53sB6RkX57DWrWjGFaiKPSh1Np4odg9Hqsgy5Gf17dQa6BSkhBMgea657eejmjfX5xirRdsSRc71",
  "key31": "22XYS6BKdzVfzCWvFNX2TFZEHtLU436snmpB4uVmmjdZKuprjrfCEwcqrhcRJG9qkh29NSDww9bDWDHuGBj1TsUU",
  "key32": "3NzkUVjrpLEzq4BDgWC5cGNNM8F82Y6ZkyKmNHSrXzsXVGdcVSwaYWQS9bQ6QKnENnr4ULXXDeWbbEvAjtS8JkTw",
  "key33": "ecv4xStbCAes3RpKcqHjjazpj7V3hosAjD8F7BcZGqqgtneJKxemfCXcik5te6yWViReC1yg3eqRTFjvB6eFSxb",
  "key34": "3zgZtR4eLe5iBHWdSpqUc8F5scdbi6Nu8D7AqgCEGg2nGTCLzRQrq5z7xzzMZaLfGgXSd6yD7MNjhK6eYGo12Hfr",
  "key35": "4X3sCiYP9kVvoCmMqfCFsN9KiD45DW2mgF4PPETknKzTC4qSQDPM1BJE3R2swmHR1hEwvTUb3F1u3QSzQXCwRJ5h",
  "key36": "47o5665R8z6sdVYroPxwpjnpARrSpYBkUX2sLbYF3LGznae7gBPotKVmaVJh5fCDgZZxhMnPCgSQ38hwRyG2iELt",
  "key37": "5ykgQJKzZhthiPUprcsnSQEadFHfmFQ2qidRBrLoUuyCyrCUdqePD956JZhU2ZoSrWxCJjNdWsHK7ho97eXu8wf",
  "key38": "3YvCEmHJ86aeos2jrygKmETaoxdaZbq15oviFwjn1vf8oCBk9gbxhB2fdx1G1fk19iTicKtmNAqAMCHPEcMaAq7B",
  "key39": "3tsgmB9nqv1FoVxM5n1ELi76pwUETDkvuuuiBQtNYXg8nVmz2sAMpoXfDGT31BhXRmqPCEKLLZGuMZw2xB73y7UR",
  "key40": "3Z9AwtR5XQHdXW1atdC9S8zt17GcW2A9jBmh4e7qkTyPK447aR6RXCemoTsm64QMU9dNwRWNfA8Wusq9NhBbTooz",
  "key41": "58U9d86qEdFsAuaKwQV4P1SK9mWFZUUjns8XgdY7y17xMEax5eVBPMRnJcY49a86hDocwmW5tU7vPBpyUiUTLmYz"
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
