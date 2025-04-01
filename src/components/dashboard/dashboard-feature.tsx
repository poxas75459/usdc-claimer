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
    "4rtjvwcLtLNkoWLm4L1nftbZPby7F5uDGb7ZTRwstgvMjp69WxqhUbLqMrMEQKjgUvni4a63QVHA5mUyUHckNwtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3Q1ns9UbQWeXUPjcYhUQapRHYyMAkS6dXjykitPzFWQ7Ky39jUVZVyYst7qgXNqapW2pNFhJQz3RS5X4Hq6Sk9",
  "key1": "vuDeZ1SYT1BVLfDwiWyWrn16yzdyqEYL1Q7aEyQXrmyvMDQ47xub124RiHy9fueVN2ESrEKnp1RVA5TpKgdwbFD",
  "key2": "g9zH5RWV7zva95gmSKYvSVTLaRkDxAW2qZAitr4px9rAMcfK51Re4USCFubEB1FE4YJ49okLcRCtKkrVR2e4Q26",
  "key3": "JC2VZUFugG2qWvctzJeqNeJS5RBMMD6gZSDq3EriJyHTB2WvsGhyA8rc6EnkmffaU4GGfAZR4RSQhbsqvXQjEPn",
  "key4": "5adu1E5kaaJMsTWKxnwqPj9ynNVsQXeyGtiYfXnvbtsui2ymq443sBFrY1AjrLCo2NTNi5JjUopyJpRJocYF5RTQ",
  "key5": "4ygYMJeyjy4EbjtxhJhYA6gt3vabPJZXSdwzo4LoR2YoufJ5zakKqZ3T9pchVpjyuCytr6n16hE53swNP7LjwgUh",
  "key6": "4tFw5VVZsWKEukqnnDqJFXfocidTyXDrpimfpU8gaPt4cwVRFS4ZUdyHuiaaUuFZBe4V5eFjvCjTgBf3GW3YJeYr",
  "key7": "3sjjC5yrhhwg7XdVgLyexcgoHUijeBLwHN6RkqPgjzRbZhrVoEQz8nJSutPXX4EE8RrYvhSjr7GwRniu6tNZFzx3",
  "key8": "4VuuhikdHVi7hZmCQSaKyrJkoKsmeJBW6sEuqn6tWBsQv1p352DLEmSqmekuYHUx5wCn88qkmqsvLsG5Gk4ndaTU",
  "key9": "5oyMPXv6gNt1pTfFVZd8zdwxRbWkqbSD88LHNWMKKmaTs6yk33axfjCAQHeMAH6jND3f9pq5kWWAywJG8tpCgGhT",
  "key10": "2YUo3EBntKid56AzCqCH291V9vjX3DF89E6F16xbLj1YkS2TZ9j249jD49a8X8oN16e8ZDREwwj4mPAK7w6k9Xh3",
  "key11": "45T1iWy8Z8CByTng1iz6HgNLNRA6EjZvGXSP56s7jhmKkBGPEG25X64jqt38MYyCJ7Dup1jkK4ehbDoJDPh7GLw8",
  "key12": "3FeHqLxKb4niYMSVvdt1q7HQnMnqxZ6dfdLJtWa6pgf7ivz4vmEkbbJRLBWSE6J8SLnDn7AXc5MDnZS928kpUohN",
  "key13": "jxKh6rhJFyMCtbWvnAmGyNi1wjECMc7UtApKgunXuXXrnWPDPDtrap1ysEnZVXJtB5penzSwLMZ5y2iuG7eFg7Q",
  "key14": "PMXmm8fTbwfv9hbGHueQ5iFVkFYhUm4jJcfiMH6LtykJazJGPk6SfjztTSA3NGCX9AZ2hbikN1ARWzZkTZNVPis",
  "key15": "4zSEQdcv3LVcDqNHpyrK6kkGbsn5y2jp9iaxD7iCXoMVJgyRT699qg7ADJ7UDYPx33k7gsfephRRvePNRm27U17L",
  "key16": "PmVjUHrvPrGje5wZg6n3TMxbLr5gpQ4Abm8yAaEhuVbYHNUDzwKQYXVJDmkazgExzTLeLXuHfzA9VftMcJjs3cJ",
  "key17": "2i6RhvJ6exva8ZdELsVrKcgs2syJaT57SijPV52qwL3LX9AYKHsPUfH6xyG95KygRofN5Jpi8XZAjobJdcVeukXq",
  "key18": "4es1BJXB4dVTY8BMJt6YDacpBjE9guFZb5bYokb3C6Rtj1ZoYx8ggoBz9NhuDCYrAjh1BWwnRgwfpEZEsqSsEkdY",
  "key19": "2U8i3to26bj17fjgc76EjJSYezLmBuP7ioReyyPVig2sZcfncrnPA4CJLt6noPmqVAS9FsQVf21sRTHaiGwKjwaF",
  "key20": "4zXPKZTieUXc3Jt9ncQE8NFQ1UUabdN9kBt5QC1zeoW6LnHUkDbTTzbQs84NjuF1oBjAuXbMy7jMqUKgvE5XL53h",
  "key21": "2dSK58sESAy3RnjSjWgL4CL4UiFgboHdU3jgSXvZrRW5qVBwsrYTLZyYefiefKKJKhUgbVF9HPKGeQJFYjH1jT3f",
  "key22": "EQ3gsM5SUNjvXGrfodjqFKiRrfC6Sunkgy9azbKv8EnEn8gvrGmX1RW5pLeQgmfD2BepZ7VUxvfGhHu4k9LXDTm",
  "key23": "5sdiZAndN15kaNQHu6d1zcN4sfXr9qVKVcLT5yET7BB4TTpN4B3K6ftaTuVdNt4mKmjYHDMiWtN3DNz5Bk6NMMjg",
  "key24": "3LrprqVyMPdwVeb495qvCNgBcvZ3mLX6rncUrLUMoUega5k9dCPZ6x4XyUZPePHJ2uc5psVfB1K7pcVHBdqiZK7o",
  "key25": "35qfNR4T1tjrzL9GEqyeeKfevTBso8X3paahA4mP944rBRazbpbbLdzLbYWKUMCEVc6HXMrBTh5u6cELSjwbTbNb",
  "key26": "fPtyBQ3VQxwXjBMu38Lcg2FuUjrWuLT6iDkKLeV1XxhWriCt2NkXda1P1ZxKUJ7wvF9zWooWZdaYMd7r8Yax6sx",
  "key27": "4f6JVnVWUFmQt8uWHhxFGEyPx37gn6VKyWDK86Q5wrgHE44DanmrTMwkXWmq9KXqPW1mHsyJooHRx275fy7yns1V",
  "key28": "51wBfJKw1B1WU21ckxMCdFhkwX6kfsfzpugHMAUos3dgYa2oaB3zvx7iadnSXEcBRmBwCXKq9rRNfwTdo9ruscM5",
  "key29": "5iWFe64tU3rpKruxZe5sdEg4xaGa5CmGK8A5bwnMvz4Gg1VKDhWLuh5SJs7qgXXUhFQpPMtJDv8DNAecpTGqLw1r",
  "key30": "4eFfowaCy2HKmHNGBujJ4GaRwvyMKnLgNbvgc9PmDFbYQk9CntQEmYsuNWEfnL9no9TJnJdgZ45SfmXbReM4uYDh",
  "key31": "3uwUHk4j5hRMsovRAYJ1wYbgnmE37tBbe9BSZQpNG9DjAjDjaMPdvLyCcvx7fMRPMmwPKFsNyrYLQo8rbR1Gexp5",
  "key32": "5vzu3pscxhstosphayx6Upro6m3woa3fMWVP2Ly2ZyQ5T8tWUKMS1tJQzUU5RTh27MtAuVr9DdaEdv2kq7EWz9U8",
  "key33": "5e7RTSQjWajWx9wK2dQ8VW6MBzP4wi6a8M3P13eMu7tPTxL1vpN1zFFeBEGJmtNCbMkp1AyReE2oiSarPx8w227o",
  "key34": "3RLiAhp5ipQXH2Fx2bSymbY7Yf7TxLRR2BkT9ZRmf87ogbVpL2RipmxK8x5UstQVzPGcHfcq3fHpxqpiewePhnRk",
  "key35": "v1KpYoH29tPpj6Q1AJEMCDLm1arCJjqHK1igzghbq35ewSj8d9dSN9qKwwN6MXHK9SdCgV9DWuMLUns3vFdXpcM",
  "key36": "5xnu3wxUvDxPg3pbQ8kSUxsV4Xh5tr1U7qACrjcRFd9Q8HvmwrLKuWRHqUCNNaM7d8ErED799TdnBKzx8nAuAnSM",
  "key37": "5ahAcENWQCWSEtzGpgtjv7nKfCgRTPqRrzppSoVP5PqtcGqscTjuVhd89eGS9Dzxo4v8XjEZZ4n68cHZz5JTwd3m",
  "key38": "4g1kWzakn2DvUzrDPDk7QgUMNfdqq2Wct7vcMaUzceZhz9oJCphxdHcjMFijc4tRbHKsea8JYZJqjkA4cDCaEQbm",
  "key39": "5nbH3hfGS3A9DdCtgk8ktVmDyWNadkxh7gpwXFQgmMibkfpEEHvxHYAVfpuxzPrPa4QNezZkz2Paox2eUCQTWu8A",
  "key40": "2KrLRQRCmQR5YQUprgNQAQ1zDb189ukCsQChV36aW6eBb4MLh1Spt3YyXtybSVNEpjjPsxLL5n5Ks2PypFjQ4c2w",
  "key41": "3g4x1sLbK74D7FrWEYrhoZXB81SxLYPkXe3weLDHvN57rnNnfwqA4buDXosvPy6PX5cAaHdQKGp8WkvVh3sCmeZf"
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
