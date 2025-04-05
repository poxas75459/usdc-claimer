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
    "38gjmnwpucsHezXRmcDtrVDwBPYY6do25oL6dwCKqVbHAMDr4ScxwFAkvAA6vzj46Ecz4WsKntX1wqqMK3r4ecyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VHLyebDVjYmk54hLF8WkjkRZCe7i3pbnG2uZxiAhRcoaZv9DnHxL9iSdiAtufFzwarygoPQCzQ1wVAQoDoThWXX",
  "key1": "577mQKADGGaVf32dAJVDB4waWr52gSiin9WiybQGsgd3JLQWDPUzK4ay1nqU2chEsT6q9nm5qtKAkBFFzuZraQ6v",
  "key2": "3e2PE7DYJpn3oENJUhbCZZ9MhjZCi3UrMEV1UzHFetEAYmZj1qUVPHTpG5U1tYHsN2KU43jqZM9TFirrd2LDtSH7",
  "key3": "4K5WhLP1m5u6R368ALhGRUyuRMGDMetm6gmXK2XYotSFVLCNHksEnZvTnv8P2eYhvXREN1QDxw5VwZt5NSuwZU33",
  "key4": "25wbxVk6DTVp9RDibfsTzhqYVMV6dAHv591SQe4tPUKJHMKK5SqNCTJ47rXkZAJGvVBGacLLjebtzvJkHGUpP6nG",
  "key5": "4fVv3XaYF9pR1mGUGjFicomDL7UcRt8N1pvb2C881s1VMr5Kd92bnkvJsqJbUK3NmEuidV6ycQaVtL4tC6UfaYTc",
  "key6": "4YDmMCoKMmwbhtoB7FXyntzjtwGdFubJ5hcwWPHdeJ1nprgQHGqvgA7dcejziojNF4RMkfiKqUpECXKsAaGeWWyM",
  "key7": "3pGuEkVWz6KZeNFnxCMAZ9Ns1EW3x5ce1MCGvcdmeELv3RCw4jmXvXm28kYJBqhyNh4VAmyJBqSuGrpppsFF6fsa",
  "key8": "XZWq3vDLYrTaaLe8jBhHtDEwQXYFVfD31dJYvVpU7B6fRe7MkkoLZJ5WbTAFnbhE3KuVMaydzmianRuSF82vDKp",
  "key9": "2EdweSvX523KD8g6NEFfahzQEarP58FSXJaTYC42mXQJ538TGejQW52bMN4jithCy3mh5dPXdAMETpSyHZVDrY3q",
  "key10": "3k1A7wUJ8tQi6wKbjATPF92j3FPU8ectnkxoDHc45VJs7svitkYx1rBTrHNj237wAii4vxFwGXunPDzUxrLa79hc",
  "key11": "VGQg9d41VBhjuWtmp7c4QBMfkALYiue7aQ4f7yCVmZ6SAr33AseCZ44d6RHxGKph4zqpxiwnJGwmfJ1jJMYZV77",
  "key12": "YXqwQQZTHEbqbLRjJZHEaybkJMyD1RXB5Tv6mb3CzFzj2dhaQDeyBBtjsYJ75R6YQhJYxZVzLiyxUUNCF91wm8g",
  "key13": "2ZGLkf5VDu95Kueo3m27BMNcSdiyYW9Z7opYicQUhmEkw3RPaReF9eFk14bvhoen14UafPyuVKXhDvjsXegJ5JZb",
  "key14": "5QUPQq5DWP18qGZEsRa6y2XseiTNWMvgsjwjCMiRr4VuN9H19TizkFiHq9YuqyoQ143WxLg5wMXaLPSNZwFkZwN1",
  "key15": "5eEsFCkLYAAif7q8ZRxp6xNb3mxBh5Qtin6KHJaocDFesVnr3cUrZGcKCNwdskPZWFhMybqBP5FPMPrFiix56GLo",
  "key16": "5oBXUjCEwFBNWh5ABy4SbVtak9qYzWpr5FVwfyng21o9epGwMkSM8UFPN92bXv4nZTb7pWk5qicAcCRmTY97LDnE",
  "key17": "4UCBBDWJ1JcbJmYLThzUTthwMevmqo6Rm74fbjFndjSLkXag4s8UcSxrbuL9fz7tS2uvHoJ4Kg3zdJ3LLuNdabhs",
  "key18": "vnrqzb2JModeoLh9dajXH1NGCXzV6CSfd3i8gG2hEx9ENHPkDxgTtV3Xv5pFEe8aXS5HNrqmaksCjJQgrK2cQZ4",
  "key19": "5DRKjZa3KfRsftVT3ZuRtuMQuK5c6gzsncYgxDnsPgHjmZYHeUApAuz3k1cBaPyAnxdGhCuVA9dD8rmC6AKN243b",
  "key20": "2nbtCCbkhJBSvKrH6xpkKE5JYw5ZZgE1wLjszpTm7m4U4fSonCULAvVwheJzq26aYqViaMypuDFfzbtsSTcBkB4e",
  "key21": "WSkA9zLbjLVtxJhHw6HSAhPNbXuLPpvD1iSz13yNsvwJgg6xvdGnGG1TwEK3kZGCa51PpPNRa3upnMv94c279iw",
  "key22": "2etzkmhWv9ZUrrfs7yntsFN4vvQDwiGvKTXPReU1iyrzJTt9agURWGwQKt1EgsUb2yG1SkADmx1EJr889EbnaziL",
  "key23": "54iHKaFd3yg8gFKKq5WmuJ6PS6wPEdzvkSwXuc3vST432DiY7XEPeCQqJayY9qE3qLQL2CRZ6nL8iLHrpvvZa7fx",
  "key24": "3ZokXjXEvdn8MdaBK2dPhogMercq7Xx6N2u2ZzpvTCnFCQehUmUMvNjhirhs44D878qkmFnNDKoctD1GZHmPGWkg",
  "key25": "47st22LQaCy8PQgZMjSNeTjCw8aAoKrCKPnAZb4xMALLwf3huXtS22SPc9p2xs22JgtCoHNPLdYGx2LmXZGSQ3U",
  "key26": "52miLxJ4bcfZFvoWGpCdaJ6v3TjXbw59XU47E9sP7WFwoxvSssKv39QpPAquMwmhuLYGQvLe4SaepMwQrn5o7ozm",
  "key27": "3sLkBRjxAXKQYeMn9sVTMF86DongKpywhEyGEsZUpsGYiMjVct46HT797mvvxc39MSyYhH5Rv81ic4gFoqufGhyZ",
  "key28": "1fBVY5FF6o3XvCDAGmxZAPihPWLTjpXDgJmAcTvDMi3fLiiBjbdhfBiZtQcNozZUuHNBepBLyUWsvd8c7NwVYUv",
  "key29": "2VqkiYjmwRGvHcCAeErTJzSThqjd47RmdRMZSZ3H6DKcRcLR2ikyEbpNmfHCiuCahC3nNCvZpWEi9iBEkvBAm9p6",
  "key30": "2mrrH9TeTwyhPg5UpE1CddGeGfBaq1b4E6URraft4q3q8gtXAxBhypVbrtQp8BQNQhEe1vwskzXmCHq9Zu96r71b",
  "key31": "9isXCT9Xv7ryLWMBA5amhbEHfnzuKoDurqS68gERFgiRQEQ8EpkmA643kR6fex864dgdTeBjTpHBqNTtowWqMCJ",
  "key32": "N9qRGL83TEpKTqfeUPwh2yhnaDVX4U9nqUwWUQhyHBFjwhvF2AUAcgiPZdke3vvMYnczot97Xs8nopdoQrgvEnF",
  "key33": "5t44MARUa65LWGAoZeC8XndUoELcnbVgSNrsrmQf3TpbPeji2eWr9hi6BpYo3okYMh32v9bwNSpcxTur2hHv3zdc",
  "key34": "4jHkYMDAYdgYQ3hKPvxfFCNxkPK65A6SswhfBZ7s7iDhhQ5heLSffcyBtLLkxEx22ytZumWehiVMsvRgX1MKnNYW",
  "key35": "2mYMQN5ovExRAXyuPFbhmpAB1MNL882dVWizGd6QyLgBhF2xVLu5mACED9B7F9WsUXnD18ZpYSGU8dUNWbML6ZJS",
  "key36": "5zqDfV35nfGCZLFrFBXmiA4CayyeUtGHKaRdgziDvSSUwdf6L9hgYS6FY2r5jhMgyt1MowU4Z4yEJLMPTaQtV9on",
  "key37": "nz9dd25CALgC4gDND1qNMZVhVGUQuBMidtCKYG2uEzjnXsk7TC2ampEkb9c4x3EPxNZy2KbBeG1hbAVMscPQm66",
  "key38": "2za4Q5wQsE4RqZZGNYviLzsEntt93WUz6ErkHPamy1mFKvpNVyvFj1BpB1BMRsLPDkqKLoLJJWg3XvoZer42DyBb",
  "key39": "3oEUyJQWoTWQGED7udCkxpHo7TuFdFtFevG5X17YoQCjo3SKJxB6mgU2JELUdtqZoRGHjVtjPcBctHgMqpdjx8un",
  "key40": "5J5Jo1JsME9NmeeaW5smg8HKhxjDgduNRcaMGX4oXCTjhmtSkRyQR77c4QHyy8LfKEhe5pKcd1SwkWZrpTrRXhqG",
  "key41": "f6CcTuNJbBcJXoqiBkY52Lcyxk1wGaGWdLW1eqHNWRfA31v5Ro3HfAhrFgMdPNQxuqcFkVQGincKCYjdJmdaZhR",
  "key42": "24HXiUhZYq7MsGV2vuWxoPeQ3crJJtxh8XhPMyTfvqN3dYVjTEX8oaSzCq3Tt8ecWpXTsYALGwyYZw6YHYRdsL3t"
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
