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
    "4EVWDrLyyTCXTRALs9N4hXPpUPXfvNowvxLsRf6SkAJbZhz6WtjDET5z2BSNhCi8ntutncSB4MhdMQHFmheynvFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Hrj6wMqjTPxpQa1BmW54jGL3s8zAXFXPznZy2uuuc5VoUFaPHnpgKWXkDN7Yiy4bemQfpWur4fyrax2LeL2VWg",
  "key1": "4XvY1A2FTauorC9k1Ayd1K64FMTEJyrhMFd3bTaqREvEZD7NX55j9TAsErWeNvVSwKBBzwb2gDr69PtkcLWC4agG",
  "key2": "MShhMjmhYRC1Ff2FCJU7Xq8YtnqMXW81NpQEvj4zFZCfRNiiUSUsZ7ZnmrE5uiG1JEo16wdQoSNHuVWVqp7XQvG",
  "key3": "3GihQNaCuXJCMsX71mWrkhWJJ4VnaNSNPwEHe3aMeYZiPXDJB1a2gEHD5mKqCQzPqXyDgeqyxzy9ErhQ53WVMUt4",
  "key4": "4tfEw7vohD1MYVAmQXErwBiu8XBiD2FH5YqPQ1bKn8kNQpkLtaVHBWcEa3cfLAEkLVU2XYpWbemgFmukY3zwUHcJ",
  "key5": "5DgmnSM6YrdJ4os5NsT3EkyaJZSu6TKZhdtzFXP6zzCp8Ap4qRnqzwUpZTbdswB5tr5hobHSoZozFkDqJ7rPRBGc",
  "key6": "2zqP69XJMhDcnzDFcHUzdo827uT8zr7FkyvSM3E6q4ViWoLn1RMABhRfRoRKNMuWa26cGpwCxNT1fEdComo4M2Nf",
  "key7": "4V6S9DDKkue8crDCSM9mK84Z4YWRD7ydhQNHKC9Hw9FPZUqp9vYvs2VBuEezQWQfnEhYF278iar55hV7eS1BSZJ5",
  "key8": "5fqFs3FVoNXiAJCCe6fgs8Q2QbuK1SoNMAdkdFV3MUgbkh2QvDwdHTHwhoMkwX6jihrPoEuk1krmaHhafbGewihw",
  "key9": "25fLhWpinM5Grtj4DkQRKMcBCwJ7j2mP7Ws8VFmJq1iseab2yesrNnFkVD6DYBAjTaPo2XeUcFYTyiwAdepPn33R",
  "key10": "2GoQ5TG78y3fMp6SognN712fYdeBy5Tk7hJMmRjh2nv9wdY64iFWu8nbVSgjYw6jcmPSpnjPH4QYeM58waJ8XtSe",
  "key11": "528DWzxHsdLgHruR98gi8dzHPauHXyNBg59fMcLrGDqLoQKAi73WKxZ6Q457CFMeYAgDwau7wrPKm2NXnkTFGBGu",
  "key12": "orSZvqnF6bw2vXha7vSkdzPj3L8NzGP6ym91mcN9yHbkuXE5JKpXENK6PmhA71jNVg1Fj9Ks7Fy3KuieeU3jPqJ",
  "key13": "3jghEK9mFHpXsmiXGNZbXQgZ2GmjUCbKiEMSsmcABwwndBQcnaBvGhg8f3ujov6c4bZd7ngUsCnczWchMNZVs9UF",
  "key14": "57ufHd8eUrpXLjdMDhpM134hpgABeKXVubpXHXGjKnTx4BRn3zYs7JkW59QKBtZEAmnD6x9WVdRYaiUBjnDM518e",
  "key15": "51RHmYWqJ5waamHTqrC8HJhtqvWtNoGD4wePuXyDHYoBKiWcWHMhvy7Cm59NXcMHtCUoGktJwbvJegdbUUM775Wi",
  "key16": "z1mgAP9AaBb9FUAYJYXhvW6sjHjVf49ieHpHMFNk3ta999DxK7XsBj3hnu5o1eD2XgYwQguTEeQzVqb2NWAcaRH",
  "key17": "3KcB9jPoKFneySXYUjZzH822o6JKaJCNM5885QXJ3TFHYDP5dkusYSeMi9W7BxpqHx1jJMDa9GkMhwc7ZPjzjXQS",
  "key18": "2M9mEagDjjEE4iT5i2hMxioe8FtCWwjd771WHJN4vfdd1BTjLYeq219ufo9jt6CXNYz3LsYMAaYdfgZ1PR6BuhtA",
  "key19": "63Di2mXZiv2ioRnY2sUXrjx7PLkEEBjP3P494DtHYWa9FSeg9MqTN6PHeWzb4NZN83Ls3EFvG2T6aKFF8zCFRMvt",
  "key20": "5UWygqrsG2KGLRKwzo9axRYS7aPtTQAzhEw9vqXPpmTqoteybdNgpJ9YAJM9rX2TT2t9y3V2Dsf7hMZu6CAC27St",
  "key21": "2HYzQ16TwApuDSr9Nhch68aFbyrdaUVA4J7LwhwbJyFxvXvUf27z7nV5RDhNV5TV2KngHZUx7xzvJkQtkj7cVAuN",
  "key22": "PCWZ8d8uX31BfaNATgTy8TuC5C88C8ih36dtDLPgaYX8g1RQxNa8qX8o79o6E5qmVp7U1QTdwQLdbNoqfXFjw83",
  "key23": "4PFk3q73hpHZnnugvxRpohjVcUhB5n7GGasU3Y42yyyjjA16ZCuXMqmJYxaxcFe37MTiXbVcJJ5Gf5W979ktHgRE",
  "key24": "4A7sSuNaNad7A2gJrgyjSVqSHznAyWmhDyXVuSsU2jrTGDY8Zu2bgJUeXYBxNdiikB41fvDA2jWvLvKMpEFVDiU7",
  "key25": "4koXFA3NzQz92iwLuCFGh5JNH5APNQUVGGCWJ5567ajqqiUvroS6taeUC5XyNuAcPgSxEqTEG4u5dTPZptScK6Gw",
  "key26": "UWv2WKU5DhCGaAnnNGuWDz5yt5Q1xaYWaS8kheCz98Ns6T2tP5J2rY5qtgFqBosweJv2nnziV1FF2FtDQFhV3zE",
  "key27": "3X9mNjZPq1pujGzrDwE8PQyqRCFpEjfcXouaBmg3N5eExUxZsiNQa43S7g6h43XdKgaQnFv4D7maoWykQnYAaZB",
  "key28": "ZV4u88Wce7GxcANDC1yeyGvw77KMiX8WuQV1NVMH96NPDe9KgJtRVCkzQjxvHtxgHArnRHr24iYBPtUVipsoibv",
  "key29": "5GcB9mDGrCW8NxMzGBeW591gDXHFhZhQUb9PExDFQYfweSGU2HzYhLNWihZNyGKSA18Wb1m1kC6B77qXpgPXT3bg",
  "key30": "2dMynrxf8nbhjtuWngPFNragmHF6j2gnWRhjAbyN8L4euQhMoBBwWn6otWMzDyyLwBqEDGsqmT9wttthTiP6VB7K",
  "key31": "5WnLkgJiAdux3pDz4cpc4qqFSJxpLgv8YdecNSmK3W52swrpYu2gCxENpkDcNAZ6rezGsBgfqjioHLskEnAfREL6",
  "key32": "4vcsn2H5hbvRgQ6S1xVhePMYRPeWjSqk1WkvM33eyncfazFsbyAsutxb8UE1pnQ95avtQ5nrGQtAJTncBf3r9sPq",
  "key33": "5Wtv3Ztx9UUaiAXoyKx4nrGhKdzM62ag1ZitFPNt73P8nWwgWSbgjHGfBDgCc4SQQhQV992RuJpGMsUfHMqzhJij",
  "key34": "4DvRdkYQYxLZjSKTzquFcWsDro4JYrn8aRZmm8GcgpW5pp1S77DMVJsEyNjALp1uSBRXrmFWk2HjKVdbSiGLxNWt",
  "key35": "2YrqzAc4YRZ2mfr7QQLpRLk75sxKnRC8iha2tsvLbDTEDYpx3SmxguGnVu8K4i9yEHhZXAE2zkES6VFMwLckZvsL",
  "key36": "5C9VixLJANtGUFo8tXqHz3VkiR64NxpvshZUiHK4hfvgwwyAVRYFNfKZJy8ny64sKeDxwr1PAotNnAAUDh4oAHGM"
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
