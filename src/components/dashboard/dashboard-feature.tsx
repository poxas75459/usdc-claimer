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
    "3cRuXpme1a68qydj6e6uu4dmsfzXKML98jzgA77ZzkH4B6u3HaoshokNHFC3pqGo7nzrHeCpt3pwP18xoJkvkzg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VAZrtCRRynwcXBUVEKn176iV67FPmrEz2JPB9LSRSs3juEwkPqREJcP1JsuEez3diPXbvyrY92cnfMfDSK6RhVF",
  "key1": "5giMFrxEbKg8buNStxxGMfQwwLLAs96n3MuroxCNQkgvf3n2zPPpZL4RssFYSKdMmbGeWWY6p9jUf2ZSWpVmcoBf",
  "key2": "26aMeh1Nfb7K9f6TPLDPooY4QSNyBSFkDdAYeicfSFkNqSrvLjRGG1nGaH4J21uqYPTecVsVzRogamiM4EXxo8Fn",
  "key3": "3wEXWqNkov64WAzN4L81gmxH73eS3FWgibcY8JwVXxLCV3KEKh6gSPABQ6w2AVvTNttq9g1HyFZiLRzm6FZfWVwX",
  "key4": "3NAJ9r7DcoAETtqcmpocia82X4mFfYPv7pVP4EryA3MhxrM7wjoK1Wvkh3jFEsMB3n7xHH7ftgiiqzXQBJCWkptm",
  "key5": "2o687gqmqzv8pLaTa2dDm1WfL73NTa1VJ48h5dpEAwXxbvCDKab3QUWVKNWaWn5wtTQ1RUNAGb7eoGgsRo5WQ92Q",
  "key6": "4zv5BLJW4YRQCX888Lsm1te2Dnnpgq1ibBokjkwnvPRzUtrsQURcvEjj8cL6b2C2tPU59b21A6Cj5i9fU7YKeprC",
  "key7": "wfgSAs2bAWfHB7ui8CZfkhLpDHAWe1RKbEceGywwV8kmXpvNZcLQqjpH8RkJnHYRrcrk3VE8ehNaCKSy646P8qZ",
  "key8": "k3zrFqnQPVE2yJg6EsTwPEEiWKFQaoLrSevoYP3cZTc8cJVUrvytZZUCcBAmC1sYEb9UsMgfXjhhM96x9pYKE6C",
  "key9": "3sDLraNN8U5LGrgWvre2KoE4gyYJEtwiDQjBpG7vY658FJYmUSdwo2rWST3v56LhzucC9WHp2gG7AbTtsAGJ5vgS",
  "key10": "2KU8MaioEMRawzNpJuaBuEwryAnW1fR2NdZZg5msCcqqzA3FNxNzjkiPfFuu7wMEzYz8NPThz9rFyqnRCSUhE5q3",
  "key11": "r1k5wM5B3HuZAGNb5Fgsue2oU94ni78G6uvkpbWAwAdcuDnZEnBCrN7iBunUrHGmHZpLwNdGRYWiYdzbStocQ9z",
  "key12": "5aW4XeBeNuXRDv2PqQgkj3a2CKBMwpj643EC8A7oBs83A4WoupAFEpbopBifd7ZKvg5yze8mMp1wismRa9NCaT2J",
  "key13": "sh38Rnr97qPbNLp7vvvG5c1vLFr7DnZv3ADxkj5cYqpY3992wcXTvcsxV1ab1kwyhtHYMvWk7afCrhz5xgtkkpd",
  "key14": "5fKDRb3AuEmWaJKnwaQsWbtLAjJXjETukhPmbgKENdgD9kHSe9z2bYTSdM4o27vfHWskK9ABN8xUF75kSTAUQTny",
  "key15": "5FsN7tTeqK9ZXr7oXLnr8XTneCAcm9nWwHXENCyJEtu41L7p8Hki31NTcZoE8GLyshJfcsdm4jrvwuFfbTseWtqe",
  "key16": "5rAiobFFQjo5Mv3P8BVM8RGGkNNXFJ5gyatxypsRJTJ1tfyk2Ro3R9VkSno2UV9iaqakjJBEFSXRKay1DSS5gDja",
  "key17": "58nJEKcKTWnqs7hUD4XqiCHnfZ1AbfpYX7cx11KGuTnsDZdd9a9hfaxwhHYc8UKtpRs7urwxX7b8SCVMikF8Ta2R",
  "key18": "5fQQ1ft6oy3qTA1T5unuPRDRD6h4ZCNya4ecygYE2inJ12f9vi52DqN4Ryv2Ub4eQJu55DgQT3tiquyyBZ2dDjH4",
  "key19": "2GSbwTdhiskPvfFTmZuykMY2NF1bU4dbH1ZQzEx7srWSaG4BrsZA5HLQpATcFMGbPxADoBQ21t3BSmo6wSkPP7Ro",
  "key20": "2v1xK6jP7CUHPDymVFvmvapRJAzTtARva2c8Yq9kafiRXzVz1YTy9DPa1GZNPPU14TtkNNfuER6y2WPMFcEK5VEe",
  "key21": "38dwyTN2aDst7skjVDwFigrtZR4tPQWzCxt2w2JQneazzoSkmMtkpsTezwNpkXKEaPFuWCMMgjHCeaUo2SZwwcU3",
  "key22": "41azuc1tW1AGMdebYDDTtwWgPN6Y6eCMuoeux3om2rfUGZ7DtMDxtYc2f7ccPvTRu39QKBM9g8FzYMWnsKUkj9hQ",
  "key23": "3iV6pYSucQ5FWTzvJDeMJvQFCrYaNHyDNZFHXEhsiYxEFkLZM7PFBe1DmnpCZN8shnMQNK3N81xh8xpXHxAFsHri",
  "key24": "3bpH5ppp8YyZss4ivmKC4cnpUggAWvtPHKSbqNUwe33DpRsD7rNLhUaK3S6GBsp1BEC9kTBteP346gEfJ8PTMHKw",
  "key25": "232Y1YaZfBC1oQK4tg2U4FqedVzWJs2iDKVsR88kcfV5JtzzMGEHqMaKFBVUuyrV4iHYP9P3g7wk76MvKDjFgV8q",
  "key26": "2qN9i3pb5c3pzg7JqceqMvCZnHWmR68HxUjgbf4daWb3uCg5u7rxcbDsncHi6cj7CxN7wVCHUkbdVtNqvDLjD6w6",
  "key27": "bCSiGABi9k4xjXYkA7nGJw99DysF1iBUS29KpcnoVQdJ7cRQgnNpc9JkSXoJyskRTzL4jEHgnJ2YJoADp9froUN",
  "key28": "2D5qdR7urFuGRcpdQETLQQJ8ni6WTLW1uCyf68qJR5jU4sXtokCeRcZaPZQCvog1gqvuqniT8LDgKguYszgrimWK",
  "key29": "4TqGAwQHTRHxRYAoN6FqFea1cEUrxqch2Z1KxsyyAZsWvzM7rCUwWDtFdQawe4KKZd3TZ7A6HDFiiNgBi5Gkz5Hi",
  "key30": "5EtVNd2VGxExQvK8deycMaTdicXVgwE5Dqu4zCFEcmCBHbVVUPRsTGYsKnads6PuSNWhhr1KUhBNu9FwTjXfpQ8e",
  "key31": "2WinHQ3xxGcacr2AZjVqsELvdcxnjPqafryDEi7P19LBZsgRS4WXqieVab73wjCK9DhVUwL47pMxWbJGPaSGJY2A",
  "key32": "5c2eayA5twQsMNjMRM4mq1pmNdKC4SrTq1Z3eRSSQwS16Be7tnyBdcnGNxpMwnh4NoBHp73Sp6Ss3d6EuC314rkb",
  "key33": "4sFkkBfL7oZ9CNcTzSfvci84kBtsuE5SorXTcdDbvZgSSNkHrn1h3T6wGzV6DmhdppTZg6sUWLL8azV7R5nmTtZd",
  "key34": "BGqHZ1jKc8mNX1DQZ6S4D28C1M7p4CRNjdJwK1r14M4CZMRUtsbqTD73h7SmSLGrSvUd3D9ykFY9ycB1TemEUqP",
  "key35": "3TeauhbcSPTSUobwvbCHFQhx8N3tmfhLAPRAMucbXVrUfQabcSf89TnY2WP52i6NfdbgXLqfDCjrFhicQkcfikJG"
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
