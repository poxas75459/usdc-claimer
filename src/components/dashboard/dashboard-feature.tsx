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
    "4EpBWtvvYQyMgKsa71ujetUontZZZmuojfVGKijf5DZDdSmYPcLP7XxNb4WciLfVeziYPbeuAHZNC63uA6NrKkQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEGBxEMLcHbfABKHL6AMcKVpNEiaFK6sadrtuHRss41rSBRjA7TudP2KQCAWpn1bQQ3QhRWyvBxzoTDCZWVQCcF",
  "key1": "4P7VUBfAU8haC4VYBZ44ZUD8D3aN9QSLiCBvaq9rA9NdahYwR58iLBSFY99JNpxn3H2PwBSEWmDxyZUTUu1emKnp",
  "key2": "2JtPhG9M6Gagu8y7t2R3ReNGfPeYNzrS1ubv5pJXp7pWb6HfknjoAuL8a8PqBovEGrwbmKT5HT9tM4kzkZBb7vFn",
  "key3": "iq2nEp5ZGg7pjE349zhrmjLPBeutHLFtTT1Cjh2w9cGGi16JfPrMWWYWjp1xZfqwNQBhBMGKofUbA9LM4beCU19",
  "key4": "927QyMxEQjpKikvjDxAwKuzzEUxJhnzk49SqBZm3NVRDFqRVTkSmGo9PwTkuA9uNe5ZmvxjMR1TtoBgWGwexYTY",
  "key5": "3v6wkoCxcFPCEsjx9jXDijXFFcqwoVoiuWvzhkhLZ3J92V4hSDd4fEoz7GrXcWZBBj5jDNXjDFJDLLfVyUwBrJKy",
  "key6": "5ax836mDxEN45b77jsMKU9p5g95q8AGnwtecTzD6bH18a7sQ9HAEQZUWDAzevpx8wbZHMinFZs6VUwc6MSyQYtMT",
  "key7": "3o8DPA2W17GR5ivXxmAGP6FceefWUaQQEmySo3bpo8oRhysmwgFnTf5VPXgaxhCkVTZJ4BCrQUJafeWqhTEYG958",
  "key8": "nZLHu7J4Q1bMp3SmeVqD161x36W6fUSifGE69DuLvqGCKA6c7QwYFJhQigFskJrYgtQkTZAfixhqDvgSkppGmXQ",
  "key9": "3JZP71z7ZXwgiMzutoE7NGcPKDX9P8wFfCbNaGDTP82BvTC7VxcRQGgxHFYxZHzLk2PcAySw3KniqywA5ah1eKfp",
  "key10": "2ZE38sfT6h9a9ZddWja9KuAgMALtJLrzdU6HPpy9GdS3jMpmca9tq6enPAZpmGeGYKSoJx5RmyQkLC9z8VZRYqaj",
  "key11": "Pr9fgyVstRjDAw3HeeVvaJ1p6E4kzix6uMSgu7fRkwwSaN8E81gAigPp83MqzpzHgtvF58quZsZdjHx7uUuAmi4",
  "key12": "UShnjhc2gXLU3Y9AWEsyaXYNnhV5A2KxeqotVFD5h1NgRwzW5HK8xk7bzLsKTBvbz1sswAMWBFCJT12s8W7L8Ta",
  "key13": "5ntDHGTT73eccFuTZrmk2nVgYTbshfQ5mJuc9jHAVjxxUrkUb4HxxvMajxDnnnCJi8gJgembqvsULJMVxqi3V7rV",
  "key14": "MSbkaPj1PQV4jJiZZJmSPmKiYsXm3wPdyJYmEpqw5NBXZ4batHs7Bwd5UkGv3HPkCMp6GKaLhUcuTvtg7uDmu1X",
  "key15": "2XDTry1HXQRsw1rxPmN1UNE1vtLaosdzBkzFCUVeQytcS9T1ikK5sPjoYXGRXbHnFcFqM4onxbvTHejJ1BCTnCzG",
  "key16": "fbVSxN355eZwqTpEaeBuvi9LvDqHeycfoXc24MyzJ3VcCRNnbhrbgpGJLGDBP67yd6xgaY4b7HEJvk9oM9Bk9wd",
  "key17": "3w8XXbzBiwTRLjywmHBEw32LEhpCQPyfvNrXTfRHDfW5EavYLzdioJU3FcVGv6xssAEYcMJLMdxeLGvhFVr8wbm4",
  "key18": "587yR8L24QWtnbF619Y227AsM4tjkzf426qH9Jf4widDGmwCyPWV3VLS4WgpphmZJTKFD4uBZ8t8dzjQcYptZABP",
  "key19": "2PUL153tDBgLWRgvk6pTXCWks8MsZTRLGDpL3DUpG5uxqsGeAWV1uYm9DdL2RzZvKJxqhH4dZG8QnNxrEx6emwDR",
  "key20": "DuV1kU6A3Nh9GiU4nTNJg5Qu5CuizyNTywT8r41Y4G9FQKXyn1zZhUR3U3Hq6LvoJMES42mybPKJpmGsskX7pbL",
  "key21": "2UaqswaTv1oMjrZYy7NUmT4ibk3Dz391Loj6Nb7EHHaTeR7T2wVJhpR6DZZ98YiYE1QnAexRAFgcR48LEGG5jcij",
  "key22": "645Lud5PD3hYXavnoFY2QFAJRSsqwUjJij2HMKbKC9jkhAnVNLnnNU5F5amNYeDe5Vtt4nJZP8mcqW6oKYpm2cjJ",
  "key23": "3o8RnmZevQk1XSQGvQW9nGbi8tnWMkFi1Gxau58tHS623hsvjFvmBKGeVdtCczpAJYkebFrG2fU3BS5uqZniQuPC",
  "key24": "64m3m64sqwgJLLGUGFuVCSr2q9ZVnpS9nyfCugaVzWGuBTLsm3yG1EkJhkGs6iDrJXsgBBUEJPsoxUGsLyAdWbV6",
  "key25": "3LfUPZJTfcshtRpBH3Qo5rzHLMjsurMC4xufNn6BnTLbbjZpjK3JAMTimJ5DiseeYYYyuwZgbHikwbSDzN6jK3AM",
  "key26": "5pNJhoKKtS8ZtpnSiYrB8QqKUJr6xu6RnXSqbFqLZz9Dg1J4FqSSrWbvM39KaQecVC3LuxnLZ5Re9errcAGzxGR4",
  "key27": "2RbWoy2txzJYa7ynQjUR2brsxwAG4aamJKcmDRFMB7cUpViMy9fthoB6vqSQodKNj5V17YLBm2iPrNZa11eV1gH9",
  "key28": "77MHL5dXcDWN74d2jfimVpFLrZLoxXLgEQ3RkAzLWU9Lyg7ey4erKoLm7JHYRDy4JphAoABBmxxGd7Fc2BxEtKa",
  "key29": "2v4kbEmxKC4UkTnC7Pv7m9ACHXpjBiUjGbEDjMDoJ5855XNJE46RLH8Lnr4MWrTtQdre6D6aRY4pMtc9KzCv6s2d",
  "key30": "rx9xxPDBLwSPyDjtXRYGrJnYVmqkJjSoC5qRPUgVQ3ny8k9mdFgXqWdzD7E2BsVvu35YLQbBSUsmCxkZEfuhboS",
  "key31": "2eaaq98TQ387Ft5P5GvED24FFZ2FqE6CQWVQLFSBS2DY77hgxq9KZrzjdeypVZhpfpN4hPnGsN5BBj8UVy8RYrPE",
  "key32": "37Nhu4mA3XSa6PViBynmSxvTncsDGUaHwC4h9keza2kHtwkcDV4vKkdoVXg2Roz4NAjKeNZzRJfPmbFDLXrFqvPz",
  "key33": "5YeEQSy9hZj5xC6fHDoJEN9dipnQPRD8VpqLVv5deAgiQJwN6a2NL32KxwaCmrNiMTgRp3Pkcg8igzbFH1FXutom",
  "key34": "424pUDMa1rNWArXCJj6cM2nK34nDE97xyyrq2LJYm2ZEFG6MdcSoA57smzPoKQXaWBmTcpTygt4Bd8tJU14vAwkG",
  "key35": "3ELE7tkMDr4WTLdHv1oWKY6QvX2DjNJ4fCkswJvcQCk8UbRC6X7JsLdWsTNBYEFv22KumsNWADXeGjkPyAeyGNPB",
  "key36": "5MpNQ3pLTneKi8VpdszXspsuZ6sKwJMrpKVG6vTf1w4wunG5Q4Nk3Tjbu7mxfJ7YTMDgK2eEcc6g62uA152poEoU",
  "key37": "43tRTjp3oXwNAmcv2SLWsKMgWhqvMHrPQxEmmTmX25ZBLF4q12xajcRY7Zoxjb328onCTL86hiHpZsRpo8sKubqj",
  "key38": "23MsFqP5ZiVccr57mcFGyWjRVwuyneQMLVNCoRan5G3KXxcAuGoz4f9iV1cs4TdxDhn76vmdayjaP9JmyF7xLGJv",
  "key39": "5cVNYH9jrCNHuY9u7rviduetHrxh7RqF3MeiqBPg1cTsuwk7ZPcKmr93iZrLV4ahLJqJB6ntSMSxTyFCUWqdH6Hb",
  "key40": "2ZJzEkHGvvrLeHehkP1sdUE8LG4eYre6K3JRzSga1Z86mvGXf4z41uv7ogPogoqBAPHArn3CQedkNEFH1W6AUqPE",
  "key41": "62BaroM1wB5yjGBpVfsEbej767ACYJeVaYXkw4iACKeYf8yxmdXGkHsVkrntbfgsXn47QyAwWKVHSnJckq2pkSSA",
  "key42": "E9NkfGwBP54k1E6HkH8w89aobSDJ8NXV8PaDHMMG6FYD7mjb4idi3juL7yuzFsWF75HcrKH59GVYr8KC5oQ2uvq",
  "key43": "5NGmdMGEeDHDP4QtQLDWJDoRGexYQSuMuYoDgziPqEvQZaT41ELTzXNrtMzgLxCbv7fbbtDPpnLzXqRB5SHi9Aoj",
  "key44": "4JsCnbedDijv4tE533fodHE9AYcPno28gpVtt4timL75HAwrz9fH848CE1TxmdEX5JpshGSA89CDvDM7CJrR3Dac"
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
