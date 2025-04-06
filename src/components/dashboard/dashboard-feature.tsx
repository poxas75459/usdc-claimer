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
    "4Wm7mosprUF84BbeJ8P1xncJiXPiL7Eb7CsEiAJwTXPzLHjLQdn3ZbTrNYmt5ZSFTGN6Hm2vkdBzjhwKbutscVH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U5wL5kj1K2DY3bsZXP27HESz8qrGseMDjSybBYHmwR2bHpKL12ehUDmJ3YD7GqBHeQhFWRNkqhkPBbysKsdwTuM",
  "key1": "2QRFQZ2YGizpd1TdDL52ayFZYnZHKWWU7yh5HhvWL1WwVG7NyNRggK5m1dN9ngXPVvAyqfXWQA29B9oaWKzAbYTz",
  "key2": "4ZjUEX6r9LRLRCuzCeu1ziugVweLQYB2gGp2iYteCyM2MQJiRprgrJwrrw3havJPsV47DipcV6QAA5urLCK59C5h",
  "key3": "2zt3Uc5shLQ81C4VJSSJfs4yA9bJyhcN41XeiTuvoPuUSp4r9rD3Ft689hkX1iBX9a1jYqtvojb7y6ahYex52CqC",
  "key4": "3hkrstgf3nnipWuXBZHxZXoFAJoZCkdufgUogecS6GRCEgE3UE2ifqoT4xcc2XxXnKjQNSoiML7JRNbK35peD3NK",
  "key5": "5i5Gc5NwP5WBEcGB4Nv7AMiigvP3k9HtUNfg4VrQ8JNq1DYFTVsuD1Vn6PPJ7eVL33su4FXmLeVmmh3jGYEzFDmX",
  "key6": "43y8hYDHf6zwmu6uhmio476gBUxV4xD63cTVWRFNzCyYFpCPTfem8rF5XRQSsdqAEqAX71yohpc4DYz7iwzyvwNK",
  "key7": "caCr1e49b7VWLU4Y3SUWtBCpRKTBkZ3VZfdUL9VFzSYGqM1MQR3aRxzJLXHwvp3wmbhJ5yLhuQ4yhbQXHB7Aawn",
  "key8": "PZU24exHQsSAtvVvHntbZq9dPEauHp4wt4dhVAwqSzxB6mq8F38aGratxhiFBkSGoGcfTsEyKpVPqTVHByJ2aia",
  "key9": "62pkP6zm6FXRm6QkXdsMAciaESkUU9M242zMsgYgGEy4wvZmed98UVTk6HVXQeM6oP3HY5gsv4cTKkaPGhm8aXFu",
  "key10": "4ov7r11n8qwTskDmkYH8pRCrNoPmTvbWQn9MCEq7tubngWUyjimTFSo7sqVSPQ7DZtkycogFDzKotdGSw34sscYu",
  "key11": "2U9urbc6Tj14X7K5EWgJpPYxoDJKVk1DEqDBqVjeEPS2BLPGjUsJArV6kcTFjycrwwCH4QytnZz2bTqmy5DCqe73",
  "key12": "4Lgvp1nhm4JRjBbTrj55REZVXQoo7cvwjivUQGT7f17yi8cKb7aXG1e5J5LwCDaaFqMmdATYU6Xb4ucQwMMpBjwm",
  "key13": "3bo58s2gkVECvTaRUmL2tRSdp1UuvaZcsAnHLueGk7tLZE1BLMLHtvs7isXoxfXSHfkGPoVMu652rjEYr4v6y2UP",
  "key14": "59DGKYMX85MFauGeDvuJpa5txWug5k8XgH9QwSwc14XYVwMTzBKACi5TvHU1V4zxws3b63PrFDUeLDy4ZsCBsZ43",
  "key15": "4zcjHswPRMJSy2FeEu9QvigZbazqwBhZYMwRiWCu6D8S9pfaaYnbyKcQR2uR58eGMH1v4s5zn1AwUfGsMEVGkQfF",
  "key16": "5H1Wf1z5JrtavwLiDQ5Rq85ftqGWFGYo2GU6BAE9iZi3VG1DuEzDGgrzuo4fgs68EN9U639QoNpUeemJRbktcEUG",
  "key17": "3FWTpJcZMVR6kTbTS3Lm8B9uf2QPkg7dctj52pHaxCajHj3NUmP9MH7dBtPurGg2t12Gms9UYHDcgkLMBrDQ3xMu",
  "key18": "6HxhVxuxVxaKxhus9HKPQMdrq4s2HYFMRM9B99cwtKbALszQWPTtdRo7dJAbiauz2EtNDgEFviFRjF5ytj7etXL",
  "key19": "5CSEPrBZHZR9QCYH94NTHcHcSBA18YSk7MMxRs6joci9QjdstuWDfsmZyM9c8uv5TAfZvZFmUGDMZ4AeKS6NyfWi",
  "key20": "2Tmgei8s4F6wC9pfRF6gWjFf9P755xcPggeBFxn7RmF1ohqDvX4ernVbeqx7ZCayAyRh4yS3KLdqmyq47pUNV3DW",
  "key21": "sHouzhmL34K7GpMRV27K1mxT9sE3ScxmTHUE4hZphJGWuSLnMs3iXosPFqkbje9SRc17qF8xJxAVtkpWspAAVHq",
  "key22": "2NqEKz2x2nwabLx2x93EpYvTZhH6zjGHJ8FkL8ZTML7kbnfJnxeKniQJNKmDCeh1bFfq3wzGd9kpriNhKKGbwhQw",
  "key23": "23HegYynsRSWCjk5jd93An8UxB32xw9zrab9g3HrVgLT1s6NsGZ5tMbEiuEycQFBqGD2HSBFTaiTNCzy45BMwbzy",
  "key24": "48S85NBXFD29fRHNX6a1hFMVugnLAm74twtsRxwCktwxVQwJPvctpk57zoaKHDMQzmiHyGFemRVE5wjNveFLZk1g",
  "key25": "2zZ7TmfK1kTkWu9FkEHeNqYpQ3cugwhqyXWpGoUbH1RgVbfu64EdGkVaEbnPk4QX732xZgEK7caLKvpVTMiWubYm",
  "key26": "y4HJbKUAoDhF4k7jcCYFqcsJTovNsB6Nj4xu2Wwv4aVJS9SJU2QvakxeacV1v8W5ZadacFaw1FR2v1JyfAqcpxY",
  "key27": "49peeS9M9HhjAzvzgZqrYUqjZ1qjZpYi1Y46EBWuNM8h1MsaLJ48XsXBzZR4icka2VAGmzgLCaSibuqaMACTfWbn",
  "key28": "5t4QyKuocXvRGqMFdvyLkx5zpEt6RcGRCwJqYsA2iWxjUQstgUDsKadKNMRgUNwGS6QN5L6VKP2a75E6uCDmd1ft",
  "key29": "3ZuSoQ5QWp5NLa2CnKXr9Marm6Rk5LtJeE4fdkdqj4AW59yyFsssebbizWyJebj9eSkQ48kPbT2BZEP8JztFPnhZ",
  "key30": "65NP5hNiVpZ8iG9USgrHmqRVSth2EUXAWBN1m6v4Y9E7SHGLe6NvvCCM2EhdDUkgfB5Yv1MXoDN9LazWuh93azXp",
  "key31": "4vvBYt4stn47hZYisgAkaUzHQN9RhYT7SBYHwNZoowY9r6hjCKTEyMmHDbdTcXhmZ6VswgKDfYkHXGBfVHAPXXSF",
  "key32": "DBknkApQKWC26My5U3JcZxjLfTsCEGpZCZJL49fDZQPT1rTFgbnRzE3SfgyU2yqTtaBbWvyLok9a2FGgF92GokH",
  "key33": "5SDp5kZeEQwqF74DEcCUMZBYPbE7qhBCh12FQbnDyUi3qCJrR47TDgbJWTXvTSU8F5NVAvN6Ha8YRq6gRQAX2tQb",
  "key34": "4Z2gnhiG4T7oWPYmt7M57ExEqYrKC8Ah5dSchXwjfRC2gnAs6VixhXye6VoJTaJnRB7giA6Jp3anA2czgQEkdWo1",
  "key35": "XMZiCF7CVAV3fWCijsjEXEJ96GTQQH6yHFn591L2eMRkRkV2CgSmP883YJkeRzGod8fKyzTx1UERByPmHanLECh"
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
