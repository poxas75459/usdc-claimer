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
    "2nGHDU4z54aMA5TEVQcPfW21VNgbLsvVXK8sVLuEq3VC5yYCbNzXX88WNDb411LTSw2w4r5ri4yUcU32mxv5P5ZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8A7cr6hkvgMA9QeE5jmmizPnhh1wJc1eQBrg4c5B7fNBGPLYupikUhedPDktbVzcjNVcb5sFPxtyD2rNyzH57h",
  "key1": "DkAjRC9QRQUs9yA3ABG2cq2UwSu58cwVrrngs19TF1qBUcVxtkaqtV6PpNaEjMqWeRFb3NCqjnoayqjHsauC3YY",
  "key2": "wURcYUHjyxyAHRCoo4o7zD7JnxBuPvxwbfsiKaehAHv65TiqN4iSv2meDTqRAJhhB2x4PoujGBbu7SmQ6B2JdZt",
  "key3": "3tBxcyUvspFB9rdqEsRJ4u1kRbLD2HcjsDEqpC5HzroRjwKM13ezhUwKwgsczoEA428k6c4xfQ3q7ABgvqrvDimr",
  "key4": "zMVtAEUeAM1ssjjYNUoUGNZkM7qSzzWGEWNbLd8YaJyPkqz1zBSC5Sgd6UUMobYj5vGj5k324BRPYnho8uzzxux",
  "key5": "4XP5gJn775eN28ftwUQhdp6ZKc87ZxhG67ucZfua9GHiBHfDvPHcgQAmSc2FdJDGK3Ljb8Tno8om7Nro1W1sZYcV",
  "key6": "objLa1CWuL9yUjdrGGLSo5XU81KP5rdJxCJubtPWSz1DF4xJ6B44cZqk9ngkaRH5X9ZzR9sjtKYDtNh2F3kuS1S",
  "key7": "3JCebnboaAx8WZyTm2ZW7RmhLuQebePenYaNCZ88NVugD1sF451WjfTBERdpoxg9hyX7GiuAfbZsB375jMTWi2TK",
  "key8": "3WdGAKuYobdAaDyuR1imdpnwrVeKMFsS8hwpGGEqSNCaxnKasRdc75eWhL2Ke6BnnKoJa6HgKsGZuZ4FYkVrwf8o",
  "key9": "3n5Qof82oF65kzAoFbjyFE5adYwzY5mcECNsuMUpoEBjTQPHsNyog9CvHxMeVyHUaiKBZadmMzBBAYCZpQQCJ36n",
  "key10": "3z14wtgQHwRJyfF8fXEpwnRhUbQA2DNCXKkXEG2jyXmMpBBqMXNneL4USshUaVNf5dAF7Evhe22PwsoVSo6kYqHN",
  "key11": "4eTMmqe6Xod2fQAoq8H1nQKxMufXWnPaV3nP888v2gyGNHyivzFRBQDZy6yfXFyTcERFpnENaLXMeZhV5pbrBUWy",
  "key12": "3MSsFYv1DFKR9NX2qJ2U7KhCVi6pii5FBk24v22V93PhoVnhdTGieKVCsGbiBRTKzxvSmu34Q46YYmzfck7vMxDJ",
  "key13": "2sHmeW72nZuBVJLMUkSyFXUWzUtcZ5F92NTttzz3CFjaGAPYawpKb4oMxTMaGk8jHh82t4A7PKVAHFYkoBcudwUK",
  "key14": "5mVhiBexHmmxfCEh3TbEHSNzToqHtFbEWSdHT9N2uimZ7n7k9tu9o4FqPxm8X8on1j5nsni8SRak27mk1P2muhBt",
  "key15": "2wzEyVqDEyoFPrEB4YTR9BeXEucd4edLzhCfkdbcGrdsgRM7jTMRQxk6q3mHmJHixtXimUbmq1fwMZL2AYiyZjBn",
  "key16": "4R8R7PWUXg1ivEvwBvvKYXNFimveXsYeva9Ux6VDBCJ4RBHvae4wFRD9tAZs64kDyiWVjVwPUiPutzA5hniRXTTq",
  "key17": "3uLJYi7JzGUVE6RMiRfNDf1si4Twhpp3brgtteEJafjprz4EmBRvy521RQc12EU2hZk9WexLJyXry3bqGvLgF23o",
  "key18": "5kM85jiBsSJ1kqH5sckUcG8Muj4AJaYqD4296yYS17TjTM7yzYSp5UTr8NYfyKVD32ZrYpR3VLdpc6L5YpCYus5J",
  "key19": "4se4hYyXeu2MDzPYJfgGJ7PJyN94C1aXBVCDmJ79411AagWa6dXphd8uNAqPDU8EHhJUJXUmXBhrHjB5vb1KMEef",
  "key20": "5uScmiM4mPuqU34qmYdnZ3fZB3QtL1XnJc6LzThG8XHDFjBowe5hytNYt6YTWP9PxPRATN2AEHHoPUYb3VUystdR",
  "key21": "4bhFVYncd1qf2G3ze8wAnoVVdw11uSthus1z2K3hGQvkjt4KCNDavsxXdnFii2ySBbPYawke33faCQFbecCryEy2",
  "key22": "4yoZV971LBJUxELYJ3Vycuubtypb6kV6uWY7shhVTB6XT1fPs35iqcB9psfQChp69JPGftnXGF6YXPLDc9nQ7fsN",
  "key23": "3RTseeA6sxTs9hkpgLtMaY5yyriUwDhEXiuaF2Hx45rVPGcDzfHLztnPnrGmTdrxsQnXB9agLS4qvhtsyxvm7WWu",
  "key24": "5RPFGDTJGHVVuGuEy7ECrH6uYZTYCjLv5NU43zNb9yYvzgnLfeUgwbJNYxfPEcDEJW8syujuZUKxqeEpm27qf7Fq",
  "key25": "3wZ9zZU5fMEeRnsEUe4U58n3ud4f713NjrCRq8mmUrHPywDGNJqM6ueZmcazWyCvbV1zXpYNbGxas2hEFD6PNDJV",
  "key26": "2tgkHjMfPKH63ypqsw9XudaWY6pAXLtDXBGuyjYrbAEunv1tQqiHX2wQi9m9U9xDDummoT8JJqbDTvw5mVjGRWze",
  "key27": "4wABEuDfj4W9KZjJxyqFWzuESNJboLkodT7SB35vnJLxNo8x5TnjR7DULG781Tm8CQw7NvsUH3ek7hAC2JocYJh5",
  "key28": "4xYaBBj3e5hD1Srume9gibcBWLYfJ8W4CRKmCqisXw3enpfHQQghiHPy1pV8bW3VRE6wmxxZgqUqREngkRbffVRv",
  "key29": "3y4oUuJMazPhdAnqXa41Hq5X8vSMYRwfN5PPPK5UztUqfqmWVRKpc3TS4dKGUMHHXLSHsrvFq5ZzPwSTo7SWteeV",
  "key30": "2XM1keuNbG7fMmMuRSM5HaAvPTxyekseE5ZN1u8CPGacpUK3Dm8C7dPeSJ1tm8iZCpHJyVDBhUN7tskyqFo2roH9",
  "key31": "2evCejjJ4bfLyaN4cBMbQryQHz8mdvxPMKRGxnHkKWGGwGGrqrT36riRVVavsJML43YQvKwhcngGjPjsNE3cKBMz"
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
