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
    "55kNo1roHpxmHApr9qKYPf74rEcwzW29cgPPwdUjvHKPZRMPMFKKz2UgMf48K5qVnbnxZFf14KDeVwFc2fAb6Pmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCMd2pZbEAuqkEUEGjChTT1kszN2m5hMQjQd3RPvJM92gLNAwenDfutrSbsAfExpF2xF2GW71Nxtx7vbt5oTxaC",
  "key1": "5rRZQfc5kQ8UYPagRoUyjVEbu6objgfk9CAPQU1H1NobA8G2powHtkXNruA2YiLJ1S4xs2apUYgJhjVZHB7rGQiT",
  "key2": "2U6RpwjUNyKHyi3wPtkrwbbALVXtu8cwK7kUArycdeyfNGE2bBtWow3CBxugBqv1e8PQSsrWAvpzB8EXydCMq4DU",
  "key3": "2Hadjj4oLGNiZ5f93ajhFPEHdaJNmxRQjxvncd2uCteD49HB6MURxRPWYtqbCbaKZ7HrRdt6NuNQttAzyazJ2NvY",
  "key4": "2Z1mC7XVuvCSFDYVFhFZv68HxFzWDKMNuzVBkuT7AkFq7wQVrEKzWqay3Kdd6wyjiuSK6EfmZaTMe7KdkRoQuppC",
  "key5": "2AoPL3H6gj6dsRnZ1WA1vkk1GebjTUH3BhgBN2ix9qtGVGJ5wChDhpxmX5e5CrmG9Ts8ZE24zPvTMP6b2G3zkbDz",
  "key6": "2m6YJKrYL8YpCAEaMyTbrAtUCjM9SkXGnvNj1hian7FQBGAchGG8AcSTMcyzCBS7nExo1uUbhvetseNAVaogqbZ2",
  "key7": "3xv2B5cY8jmgFssjAHmPBvcRGbjEQpcEy3UzYukiMc5nZoeqa6Dyvw86xRz6qKMS8zYtGTe6fLpC3PSs3SGKg1YT",
  "key8": "4qxCBKVfTb6Fz1hKgkxRzJNKMhNbG21mVsYNn97oGNicmpuWhd5phs2icLQmYoTkXw2CUVxhHwXnJVFhiSuoiGfk",
  "key9": "5jxfNUJNWYjMjgk6tPDTLRDbjQX4DUu5TbjjjCG3U8QJjcxKV4QG8ZqnRNPzF1MDUsuFi2AUj8xo6doAohGcnGSY",
  "key10": "2uEyyzBhqMQfRWrEL3qgbyFLGbNTWSTdmp9jkc5TE1x1AoKsRprP3j8V6Aem3jgGrjsBidVLkDLF1N6sm6SLu2vR",
  "key11": "3QYaz6tGcbt5xEScjxshDaAAmYL1a3RLoEW6BxsbfqztHV8AwrfwaFvYVqNXYhZneMrvNHt47FT6Z5r86pzfvabJ",
  "key12": "24itKimcneveY78iAHgBbDWgjQsxXr9fv9DDhHCS6UaojRFwKbQAJivPGVdiA9Y6TKKMfsVrR2cTVcVHPYrwxYtZ",
  "key13": "45yhPdaC6MbusUzipMLByg4V71SwU7cWhupSvNyzJg74oUe7QeEFVD1mNfAfHJqDSiDtcF5yM4yiSeqcHhsDNJtF",
  "key14": "54fWY1imSsCBgc4YfNjBckAi8J25mYM6kqkyxuytuNdfBadrb6Q4ecq8nU4yugqEgASedeTzKwbYWYKjBRoNWbV5",
  "key15": "Y6tBvtL82XEpvWPzH4eLbZ3AvoVG7NABubXSqrdSzm8c1Kux3ojGqkxPa5SguaN6KWKfvRy68nmJWtS9BBWg5gH",
  "key16": "5AMyy9FBLjQFJ3ZWE4DhUM1YCVJVfBFu1jQ5d2oqNf2sQFdeqChTi2YY8x49wunjAgLmbnYYN7DXD5qCKzcFnMXA",
  "key17": "5YgPpgeWDmb2Q1JXBfHbcU3A5Bd7GUGDwUVX47wibEFgD1wujWHaUy17TL7c1DmDLNNuH2LbUegtXRUPCmJfuhim",
  "key18": "oMsMF7pDGaR7zJY37duG5tnjmAFeNQDGjr1M6itKWC4yWWmnYHFuGk6QyJR9Lg5WSGwoGTt9tkStzM3MdLeypNE",
  "key19": "62rmv2UKoGj2UZzKCCg5L2zjZrJ4AnaT7TmqwaeQceQA5zmPRbjhTaLXi2vbPingbRRMFfzNnwJdsGFPHGDrqsPf",
  "key20": "2G1B7fwjEAs7Tpbso6RXSsUWRSESRyWXUG5HwNESXG4Rv2n9YSrgTC8i7SorGP16EznvPTfr55z6gMwGDNcJ6Nd2",
  "key21": "EBD1xfkhiN5FxEkrjWq1LGEsSPUzwCVpvdu2EDeqvxVdYkepwfjPraBJpoG1g7EKJtSR1M7sf3dZsgQj3D8RQvT",
  "key22": "MD2mK84qLtvLMpvrFS7ucGi8MbM3yD3ib2MUYv2rDbMvWDVHH8oSk7YFVKh38mWS51vS2WdARAAfo2G8UWiVshU",
  "key23": "dutKXBrPD7jw7GYBcb32icA4B7mtUvjAYe9SqdEf7Y1Av2FNmhqHAcsYsaGLik6K1EGpvbuxpV4fkPcqKerrDNt",
  "key24": "4QPSJu6KtzhXtGdrwqL5j3cb29b5kuCF6NUYofMPYLVhXfruBeLn7jW9LrXur3k7TDTjELjBeZ9LcipJQ7Xx2gYf",
  "key25": "656JNTEW3qH91HyCzCm5oKivoFgkw9Grvk5rYpxektBHAp3WS1Kq5UB3eHuPU1EDEb93tfs42m23PaV7P6gX26pC",
  "key26": "4dJnYPWprrzSiPoWymjjd3zTFiTM3xxyKP335LiFZJa8EGfooYVPLaPDzdc846MdYoFMQAC6m2CjnjjEtciP1BNW",
  "key27": "2a1rEkkJ4PniDC173qUdNG8r3ahqWsMt2gbpDdqm2bvdGXuDFvUw66SdsbDsfqyH1DagmJaByqBubhCb8G2VMhZ7",
  "key28": "5N2VRA1Zr3sAb7L1T96w23NvN7B9KePVwQ3chqCyFDDc9EQT8kZ5AdTyAiDL98c85Q3DfHSh6Jo67ik4yEpuj7NC",
  "key29": "3TBsjH1JSZKG974Jf4F98oZKJJ3Wg7g2bwNgoevc3WazbrAqNXT35y3fxjL6NLtXU9zVPnaXHejsBr8BZGECXUKx",
  "key30": "4kJXWwUtsW9UyoS5vhhYXqLK2XZiPUvM8Xs5Z5dKeXZJu9yXRbkKauaEYbnPLF4SNtNXd4ft8msxXYAd5nd12uhf",
  "key31": "3YsXbSosJtdDov2txyvWpwgQrkEUeStEHeaiTrcpNpMyN3kBYu7yWTUr96UaoJaA3XYQzBY9Jzta16Hu1EeifRrC",
  "key32": "4ZByFbPxevwtRCXm3eYS9tcWRwFwXMGPo3hhW1ADLTYamtGh1hbjEGS8u6SYd236bfsg29HmssPgpXLRZ7nKctqd",
  "key33": "2JkvC2xD7FP1bHuYCEHqMHSXxggVB7eHWr2EuFHnmVLQjwoJqmmUc6FgrDg4vFMpvRaoKNmbAGScSHX56gFnTgyA",
  "key34": "5bfebmadmTMJsAGPZRekrbqUjewACU4egnp2djW6aZqU6HY1bosbpH2AWNqXmUmKE6J3m8xrNMy93Dmdqw1zPeTU",
  "key35": "kPwb1Ly9YKu9FUyQM3zkJdNMSLcopx6DNvAcmNHN6aK3rgCoPCYSDf5k4FzBPts6gKYzpGg88PFJ1sGvSSCKnXq",
  "key36": "4Q6uGw3f3ZpbRojgRgpqEAAiCK1HzSjjq34Q2aVXVfcEzgXPjj7fYGX8d5EYAmYwDZ63Txv2FGVcv8bFZNVfa1fc",
  "key37": "4NHqmuLP3yc5ixBpjtjkdensrKrsC6Wf54NqDFQ1SqbNkDsrajVSsFfQEaRjr7Uo6WAA8nRsyEJg6WxCAJcaU135",
  "key38": "2pdZbZ4S6AaR7Zgu7VXgCxbmBj8qvP9VnjLPfPV4W885hX2LG3txMzBKwWqVuGYTjQ4tZCS4Ej6AFdw6JGgYYqW4"
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
