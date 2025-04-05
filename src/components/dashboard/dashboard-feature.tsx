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
    "8B5BnzKjkn9YVwR65d3tqc6vcT2cCmBnHHp6qFz2xPmNUcgKL8x3XmGLbmn3Tn6obce5owDComVnV19a5jmXeNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwWpyXMkE2KAc9zprByQLm2asWsVFnhkNaNon4wu7NYUECeEohR88n39q9NiiQBW9UZA7ipLH4oYaF8AoT3P28i",
  "key1": "3CT19xAbRjwCg69XbWSHnHivMPjjZiZaqmKZNjePfnn8FdVtkQghKMRANtn6LADUgudzDcjaHSasnv18QtXRxZDK",
  "key2": "5KitBSLcgfxbDrL2ZomksspD2HB4jZgoQPZCjpAg71qUh5dwvFUvjQcC5VRTWQRTRnp5d8Rqy8NnwZQN9zP2EDt",
  "key3": "4quynSp3XBiUeTHam8phCWwq6eRUpATXEZp4bh3Zk5c6dSJ9P7FcRtYzdkSPzKTthRnN158xz6MkXQ3R711YGyww",
  "key4": "4Rx4bZ7MDFuiMC2s7cLFtJiyEC41AQovpf5ZJr7wkPfQQJw1NxNL5xB3ZkRgw59yqsJ2UUADMNvoRDcgBmH8V8zU",
  "key5": "5RiRzYp3NJZj8GktT51r91bkJgnyJc2NzMBy2WqBZBZiN1JwDE1qWYhUxnHFzgdBtXmaykjZ5zH8s9XaxAgFrmCx",
  "key6": "4ryj66LuC9gRYCkbetLH6VMrEhQpVT6QVyRQ6RmqRQzuwxMowVB3SVYKg6xMcKwsFCLHoi9vRe2WUzZWrWWBWPy2",
  "key7": "4wzEA9GYNAZ4kAJ8DvjPJZXSiKgyfxMeQrMLEtRhw14aDfmC2tSUYQBc2Rdy18z2qLf6GyoYxJga1fApnyBrLaa7",
  "key8": "2jNrsGG1LmzPfWJzm6ML4oXmtR8bh8bGD6tBZL79pe25xgPhWfCTXb2znvdjFtjsAm5bWKkoGPH44iFN5RbzWE6q",
  "key9": "h7XY1ZpyzqbyYEXUYpNgkW3JUujqwDR7kKuM9nH5iZs2MCHt2WQc1epygsSuDQ3K5BFBimMX4TAhcY5Qfh23aqE",
  "key10": "5dpoSE6aiRJXDx9FLrCj1sArb11iZrqDSFJafAcMKPmQPFst8zQwpvUiQNLDs4B1ES4GQyufvDNqqHdB6ZacZCcx",
  "key11": "5sTN9GJaEWZLKL1997erR72zW5SDmw2WqwCPUwhAKA4fmtsF6tGE1iHzYREKz8TxhvXYx25q7ieZTTsY1WeHiHpK",
  "key12": "5avbBwkpUjZ69fKhhyy2EsV2mjwJVqDL3zDE9at7fYa45YGrkvSdyBuG3hN4xvMrdfsS3gVbwTuzETrBRbhNzqGJ",
  "key13": "3BYeMPx9bUkifvwsK2p25ddJwQ3VWyqxAV869pynFh3bhjmDpjTmUkRGB8G3eEReELWS972mccmpESJZc5kAJcNS",
  "key14": "32HD8YscTNKFYoeuuc4rtWQ2oiy1wroLpysREnfR2WRvvZL4i4MCPT3A7JW29XwMBLuuWaxAviNEXnPCxp7bit8b",
  "key15": "2NQTzhVXkXCCryZ6n5YwMsrW3Q7xxaDP8miWgAHf9L4G6E5AcMLXWhqpAYsHgTvqMhtgoqfxYg18LAyzC3g676UW",
  "key16": "3LYcuKp4fs7ds19juxx2aiNcWphdd1ttM4eH4unttG6hFzcvM51kB9tEH5qfSBMzutuCSk1EmkPyfotvzaZUj2ZQ",
  "key17": "3udq9tLMehfexvNjKmETeYsECTQ3jXqab8WRcZnfbq6ur58cokCAqu9r18BTG6pn75ng4MuCQoeCNLeCX31RhZXn",
  "key18": "3AaNm7pnFGYzVeZ7rp8NsLEvBv4erBq785PHRJAFGEtYrMLuLUQH7ctEokGjCQXzuNFTaSjGC8jsCrBSRNGTzwqK",
  "key19": "5kzCvzGweQ6dxWYNhpXnh1Ph5gAh4JLMQyJeCKN7t5XomiS4JhTjKdVtfTsdE1BquLWmWNjs1VwFCE3bWa6TLCLy",
  "key20": "52zhUdsMJujmmsHFAvQG9XXtSZPg4DHF7rKgmMx5HxH7Pb9Qrn77sB3oj3pJgpJtDNhPB53WonnGfg9RfVnHuTZ7",
  "key21": "3cm29qisn9X6d6Z2XRSgcUKgN29urMvhe2gz3xRZiot2ihMBuu3vpUGyZvQ6sB2QJh4mmmfw9ut4A6ULbQerAHaC",
  "key22": "2HAAYsXt8k22ahGwt3LUNt5cGciQwZrh5Gc64sWugy8hRpu13J8grYwR76WGmnBHYb39zvHXouATKd9yV86a3aoc",
  "key23": "3b7C5f2m7yVyhAVqgMHHAgJxJqGLP73fWCt2uYR18MCrK8AUk9GbLSXRs4izqMWJqSaUE5Amo5mKLc9zz3qbUMEo",
  "key24": "c9Yrrh1U5te7iY11ytQu3Uxztwy3rHcWTAUaSBnEW7X2qApas1NZwn7xjikDiQtbnQtbsHSUosyCzJapy8sVnba",
  "key25": "2i37EMpDBLLxUFQZPeAZZ4MqvSzsdGCyo7mwoK7dEchF8nRyUp6eMBekVw2pBYNhu8AMt9Fnhhw8NmaTRjQf436z",
  "key26": "35ngL3bHEBFYXAoRrudCBLZQYFsyUsE3YXFkr643yHAPmVwdFNk75xsf3h42W1RQ9ZajxB21JWWpjMUX6BbodYz1",
  "key27": "Kw278nvjHTEuAhuYoagZsudMd8XeZLRGyTNszi3NNu6nMKyqswxG5WJwuJdv5A3RKJTw4LnRbZbHYXSUcNph17b",
  "key28": "21YXNwEth2SugbckR32YWyLitXTxZbA1Ta3pe3ckdVnt63E4a5kwS5MLXUuRT1bGzaGVkBv4eLkx96ktmwEP3RxE",
  "key29": "621Vok4NFu5r96rxom3pSnvV7PVau4M1hV9arcvVE7Yc9ggKMrLVHACe8d9YEhgsAnfJuwRGM3ah9v9WVi3hMDRc",
  "key30": "28KPWorVwMBhctdpV6zyruQhEhWDhVTqJ9s1tema4bKWeQN7umQRxkwreKcTYuFsizh4iwrLBAJF7KwUX8XsGfh8",
  "key31": "uqBWnh8dkoMXuxPZ9nxDQECFPeacEZM6T1FcUbrX9YkxQKxvRaGHaTLfKpqtAwoXWs38xTbhaWLrqZmAG8zQcAx",
  "key32": "M55H5DGmi4p2cF5REZyqr7bGVpXj2wx458fqaqPm6K5jTSuXKNgYkFoPjZNyhe6muu2D4tHvASZyuR5iUqhUFUM",
  "key33": "4kA74y2mfomNwmJD2tSevX67BkqgXEViJJTVjeRSCWTb39qvSveFcRk6AWwxTTPrAv6DEXL3t9FzqoAQS3g1yXh8",
  "key34": "iaNfqjqJCArTn9QKHtZ9YcnXPSGYpHZW6eWVvL7WuZVryMf2a5uCkZmXnvKHqsoBNmjSC7jGtoE7KqWM83PDSwE",
  "key35": "4bkXojSgKshiqpYgMSgNiNy2pWriW9BmMWUtuW4r6fhkJ6ru3SoAfib663q3NBYD4bQSktf72rGpqKzNrN2QXT1F",
  "key36": "3BybEf7EfqcHHRYt6kbWYembyYdM9ARN2y7jRRavbFZTwTVurxpiYEDecahd7oeRfvJGDMH2612BtbyMGpfBvbdY",
  "key37": "3ABVPrCCDD14xqMyjmcjMknfjJvse5U8WSnMAQ28DyfQego4LTrWFvBMASzMwBhi1kFcL5emwzF6qQgdSgaABveo",
  "key38": "4CMLc3PBT7TLGoiDz33fG9ajwNVH8RqDf3JJsUg2FyNLiqnK5uNokhRAd8bwjihDsxGbETPaFAb1bX4R9AStdf9P",
  "key39": "5ywgTofnDpReGcTxdn42JSVVwriZfQ7S2mXyyEf7XbkjQ25fqJaESP3gaL3QtGGRAS6yNdTzAqvD4Hk1b9fHd6MV",
  "key40": "xVkY6jEEUztEfHP41t4zbwG7GRwpxPLfuQidnEa3tjk9ixTmJZN62t19PVgK9VfSRpoXVGTZv6CQdDCXzY4rkyX",
  "key41": "2md7Mr5j1Copk5keu87ys6LsrDWiCjYRhoCG5sdtMWZae7WGBGxz1sGJ3dNec184Ayzk86w8V6BjJAY1j5eVmgxa",
  "key42": "3KtpLz6aSRiFgjv4YYCX3kDqVUV78vWWZMEpmqsKgYUBDo3Kv7x6yArUHdiH9Sw6yH27PZzxJMnzSfTgJpqDWYVg"
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
