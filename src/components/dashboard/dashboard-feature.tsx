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
    "2nVv3kYPYt5k8qM6ThKSnzRiFhYbRpmQ9CqoCV2iRDAfFSm2rRHFsX9XipRbVzABENJDYsEMmYomvBrpXAd2wYxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mcuJ9h1mywWJzN6Q9w753pF13D4tftj33UhbBxL6eKkBqDbqARNqEoaABV9ZdQkzcPfEks3FMpayrXoqMdGPFK4",
  "key1": "2hbSR8p2HBgrB16DnQGNGHPj8WcqKqMDqePnEt43aXWQVhMP1qjfEKduLHBCxzPVbiTfj21NRYvzinceRkR12aEA",
  "key2": "5La3HbSDXJtWMsUuDovfZYndwSVt2vFWQAFNP8h6UTKwTjbyfhFe4ev1fXUByYZ8S76HCgmfLMSUhRwvBauojyyG",
  "key3": "2JNBrJXPuqEZaMcutaZBxGy1ANszscC9ZeLgKcfboqt2bpQ3Q11vKjv6WLq5m6YgNrStofuQTa3hjmpMWh5SeVUr",
  "key4": "3bisggMUf1Nrumzx9GuohzbLrpCJ5RssmLJp8UNNnUh3uMoNbZRP98RAntqLnWHhe7aUjRBEQnEqoda5sMQC87xy",
  "key5": "wNeSirkbJtHsWCTDxFAcjEphqEJPKgTziPrJsP6zaafsvS3VTeDUHNiRw2H7ssCd699Et5KDCF3meEDEfPKHfZm",
  "key6": "4fTWzPa2utbwdwGVZWYbos6D6TMDSmm41T3eajcGPubg98YF14AwYamL6kQrX5vSqF7v3yrUoBriQEGMb7MfEXeg",
  "key7": "51Vtes9HjM7VirSzg6AnuNY4E2fJa2kAzfbXqFgst3TikodqNvMhYuH4AtqMbYfY9wCjDM1KxT9Fcutf1a4QPGYe",
  "key8": "5wpYYYioLV6MRrWjD4J2oqnpLvTyXRp6PBqX7V3EyE2QmGSUMcvMWjwYJt3HizFn1NbZvcpLW74TNUczRjyVmkFL",
  "key9": "2nGyzDi8h3mp8mb2Ht1iTPtsvhS8kJtrMU9RuKkh7y6hPQJwp9kQAd7rn2hU2qye8v6rCBPA71qaxRSJEWDFuwPC",
  "key10": "5eANDXi4mELVrvi8m98Q6uAtyPePTBFEGLHZruqVx6T7HcEMHcH7eGk23k4MQrXM7AUVXzg5A9VPUnVYJoizoc5V",
  "key11": "EVRKKUvJRyYsZmHQu2ijUDK9t6dhfHynYvRRv4Km7UB8LLhfc8uihbjXv7zaGkcXbdvripA2FzkFS3Grnd7bwjb",
  "key12": "6396h88LNt37768oRnyy5VePfSCHSo7g2rL7pPk7g8xPrf11t9pEznTTyEZrpp9qk3SapENie7tdK7DXzUyrFta9",
  "key13": "WrqyopnvWp4334gKs2Rf3HNx9pfGcJc5NBvU4CYg59E6oYfMHTPgV4y6oWDwu4TX5Uj9jdVv4c1yNmr1ySw99Wi",
  "key14": "2pRDpmFmEDMVvsxWuaxtvKCCM9VsGCsb54rT6jo1eup1e2kSxFqBnd1Ac7QqbvjE1FPC7dAr8gbS2vvGqa1FfVB",
  "key15": "5LyEjekNP3gZRDeioEv7m1vjmBhRhgCAk6p4JatcedicKrQSbcVMdSgXxzwLNXmds8fsrEgkZiv8vsqg3Vkasr2x",
  "key16": "3x5LZMRvGnjxcYCnaJkD7ktmgtXV6NKuoRtroXWDZQQKabyRiVveWqcuaLwLg9snCURYDgktJcAg2taxXMyL6bGq",
  "key17": "2EfhzEQVkz6jfE1GeGySErXWS55AWqpqqa3QXPfafG84Y1Jb353DaFjsKfCUhFNmHh9RfLHALMh3413USy75dCVA",
  "key18": "FNKUWfPnniQV8sJTLtrXgsbPsZCxJR8e4wRTzyQroxfZeRTWij14AoKUkoK7ysKvDi4CbXwPYdaCw3Q74sziqyr",
  "key19": "EzrYncEv6KeXt94hSkuX8w6owVHV3m1kU6FzSc3RNa4a7nNqzy2G2Y9b2UNLsKCPMkgqsEsmYiBi6615LXHdCtt",
  "key20": "3VKnqFtM47p8Ueq7ViUQSFgE2jZqUHXxm9JfESpaSQf7HbLmZfkrRh3bGtorMAhAjg9tbZbH7DrFZHMZ9Bg1NnwL",
  "key21": "5SzkArx2pqmFT1qKUCCzJTwv2snY1xB8ZyrF9LWgWeB9htzfyTjkJPmJuJr718cKZEMLD9sumvajt9JHiqkUyx9G",
  "key22": "LcL2wCZCoWx3Uz3QFPmFL2NrJrVyLKjpK7TgHHhSYLKiMv1jRxdkbBBmKjr5todJHDnQkvijrhL4WttHExHpy4m",
  "key23": "5kaCv1CqAqatkpsXS1A396FbmTVxXmkD5ZzonPnkWdwMUZc4FQtc2vdeVRidQezhDGLwDfWqgZ7iD7W6rTBhUg5u",
  "key24": "26aLkeH4xid53eUt1VCw4H9CGdn98wZTHjKoVWUQR1MU76qu5fQ32nWmh2LPUCtKvG3njmX1WwbYAhqfySKLrpyc",
  "key25": "22wM9bFa5AyAJGGSq2rE5o1Eo8eaaaCNLrwwNBpc9p8gGgCnEbV4RspXxK6KiXBFLRcRYLAxAqp3ex7mwXB2B6Ae"
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
