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
    "4G5TQrjFXMXQ2viLC58W456boodgPNWLzbApeiowaF38wMfumxyWqs7XW4wD5mai7Uq6xKnGaXDzGHPaWyKs2vbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jp29jEaXuscCmR3TBEsquyAU6ZJ2kK9SiGUqC5hJaiv4Gbi3YTCPeFfEUCecVFVeZVTHyu11vMPnE6naiufn37n",
  "key1": "2NuMdVbwErz4ixS9yfNzJ85iiDaVx5EiRXAx5bMNygqbMd1upp4aTrpUmkKtTeoqquwJcv7P353Cm5NH5VD3Fsag",
  "key2": "2VqWGdZ47VC4sK5GhGsKSYWzqZCx7UiLjLF6LyNVZjYTkY3EKXf7SwMKnyhAdqyoAiax3dTmxi9MB6anJFpUAYL8",
  "key3": "3cu8pkKe5p281PabL6avF7La8NaJtZteK5Fxs9NRgKMGkTsUiFcnMxbrvuEga2YXYyPnG4aoj6KnK4zQ4MVBHc8B",
  "key4": "2PcsvAM5UtE1hUM81S9ZnsmdV2JoQHYJM6EchatSSAKtAnzejaRkeUEWcaaHGFC67NkUY2Ya4xBL8NN12FdwZD21",
  "key5": "36GYXerpPn3XRRsyNFXTGHgZmXtH63wm6XXU3qSPEHoBJhEMftsg2CqUR8dLooAmgM2dBy6oweCT5q8QdLtsDv8A",
  "key6": "4f7yrwDif29KD8FvKPwA4ocxXng4wSBrY5Trj69wTpbybLVqhspK2xue6JmK5vq1EhJaWFRQWgNkd5dG8CgdtJxk",
  "key7": "37Qe8BeTPaRnx3uPByKSAm3LM59FfvNngKDj2B56Tg8LcSYNcSX6JktvYoTjR6nS51BhW5yd2oFXc9tRYkE7Ti8p",
  "key8": "5iGLzJehe2zy8ura4AAiSNByDFHKHon1ixgpuRGQFhEfmfgNCBamUSzZYZRbQUxq2z4XmbzzZN9eeyqnkLHQfNYz",
  "key9": "WVAMULQ8xSqMhvsP5DHLoZvbt54Z56pXUeYzPmBLsjMwWpXWxmg1iNtMpBd4cFnM5m2duYGpR2v6cJSD7j9AcKQ",
  "key10": "2wAGYNPuKk9KVrzxdZG2m5ERrERKPSvkQk4CJUCKTdGDi8CYnHWT9kjq4aq8mwAwRoTbwJgygwQ1YrpqEQcXbyxM",
  "key11": "5NV6QsUecPdUjQYuycj2a426y18MJ22TuCmYyxSZy2MdrKEtBxXwLGVZZvd2iNBCsjfTmnF25tt3AtLjnz2HHXPh",
  "key12": "3ahefShBqDD7PqE6zXAwnVnd1isbXpy1EGBPdm2MffUYYX69PW9Un7ZUhEFqpBC4K5umZrgFMJ5PBo5GFTJHZZ1J",
  "key13": "4u9n61LuprXfVkCMytxVk7b2hGzKNFTYzAsMfaQgno1fNnAJH9FW8H7dmtY8XSzK1YvUAFS6NBX2jkuYCsEd7t2F",
  "key14": "5qbWq3naGPxjmmWsvHa5dgCHyKgSFzNBiUMw6TFCo6yHZi1wx5jhKoJccvEuVm11X7NfS6RsAk1ARve692bpwySx",
  "key15": "4eAPZoAX7bnQ6NkkL9FVjFM58fxCYBrqjvYCb4ttTBhH6vb5C5YSjVHqVVLVFxUXXVKFfSsj3mZLPArBwz5j9mZd",
  "key16": "65e8aoGhoEtu3jbFjSnJnudQd4n6jtYA15KTXSpzgDNnH6k79ZGdx2dfYgCbiDn2TseRz3RGq2y5qZXEdrhAMYFu",
  "key17": "gUjQN2rYfT9EXuQ4BZpiwJebDm2Xt5q6atc8ZGDACNmK8QALGmwVdH9VnbqvZN8HUNhUUidZD5R13vWA7NFz9bp",
  "key18": "66KB3gbvhUsm2SV94DphDJCwkGqR4DSGCN6YA9LWdf9rHfthXcZq8nqmRdKwwo91cNqB5JrSAJpfMMP5Ta6uCQPh",
  "key19": "2fjvwTpQ912zFyd5fXoh26JoYpignfrcNJAdGdCwdf4CZh2BzhSh16oXanu9ZAPJtanapxzzYZVh7jjMi6tNHaA1",
  "key20": "2hwWFzuKrEEP6Qo13fRjFug8kUMkCAyBe8dvcGP9cZ121MhhmorW4aEYFd6ovftkkN7Twosji8FB1hEHGnDaFnB9",
  "key21": "4odM4kUWRB6JH5wEpzGaTiosJ1nqPG2S6hynQQGRc3aB5TNgdqkSQUqD57jf5VSm29UbzNUJeDUtosVKQgPsy6uJ",
  "key22": "2495C3RDVCT6QLzb4WsQeb3afX44oz3VtWLutBeFK5DkMTh2zjnwCWUogZymxw9W7U9tavCrQiPbFenR5kz9c4KD",
  "key23": "4snLKzU219wum2t4fkArc4vhQ1ebjsJjWFxyBGyLY6XtUNFyohr3eEKuuiy1wG9GzCJfFCK3YB6yhmHYyEgJ8S3k",
  "key24": "3h8iyXXq2FjCCkTUYJhtBCsba83kSAgukHTKzFtwBZFepb9C3DgXaygLujncz5AfNp3WsrzmqS5XhKgdtWjK7QPb",
  "key25": "53F1p53pjpFwA5s356LLgsb7LPmiLGKJe4xuepDovshSJCaUt9572Rr2mv6FKuLHa55duBnrckH6pFvMGcs41vp4",
  "key26": "3iwpgWo58mpWohCbcWW7ynkierVGVa9DPLXwDrfgDyPKpomGYraT7n9N2ogqqjvB3Rnmphr7McNPCrAJXwxcsypH",
  "key27": "wu5dzDVdpMD1oXEHs65NTfrzn5fYJNSi2kLMPjqwJAYJHfTjhdms2JyjjSMeLFo7vyzjzZK5d8yZRD4ACYQqGkF",
  "key28": "28MbBbiUcqSqiZ8VJiZ9RmfHDG5D1NZCxxnM8RmjwrgpvekrQGyMx5GaQK2PJrjCxUsifb44mvksjVRUtDfb3Qmx",
  "key29": "WnXhHiEr1c3FSdzfw8ub744wbksDJAW7k6gdSDRi8oPXC2CcU3fibStXyZJiawzabk8GM6qxLnbuCmWw9eTQLj7",
  "key30": "2NK8i35dqhsk7y8zKyz4pRPQJuX5x9YQeyK1kSaUkL1KnFwEViXSwyn6PrmvqbASFbYemsMApTiUDdLGhjtjD4Nf",
  "key31": "4ENVsQru1zkCFxpU7jzmiFGEaQ5ELmedmPv4PMNGu8GHzUgAKNmpSS7GkLy29D7KMEuWSGsQSFWeMskxTY9j1BeJ",
  "key32": "4ffARtqw8VCEkamaUukCdPLWpen2BJB7qU4aWCJfLnQWaXBmuAyDCEntLQNSVZvf1KvQP8AN4ygp29B8ELYyUBkq",
  "key33": "2zHMe34hcGNRqVM2ScbiinbcoGtYew7DTJcXUjaABSaBnUZXpYseeXFUUEcEhEyX7yR74bqmrwK751wfLRW4t4Xi",
  "key34": "3v32gGCrku59gftv7f1Y2mY1V5Dn2VY38ywkn6rYRxoNViaYcHSDZu6jskcSbWrLPUHtMpGAcvgiqetX9z8bnMah",
  "key35": "47U5fdkGMBWQ6ModbKaduUQVBrctvw33MJd7aUtPVz2wwf7UWQR2pLd9x8LFkA5ZmXSdENfCCiuF7MSgDhXqUUME",
  "key36": "kx1iw4aCEvBgHL8yxeSdG4weg86k1LDPyPFJ6fQcm765fWAesyn2FfzCtA6aGHEYyXdw58P8FATpTmf8tQN1wrb",
  "key37": "5JinHMbXFsQrWBt1zXCZig1oeMt1Wri5iqgzVLz38QW6gkh49aYUAdH5aUKMv4DHJVofW9JxX44xChhfyoJEkWtH",
  "key38": "tZWpcMdhAkJxTtjsZmLnDuqShdUVYRZmgAPtTSea8ySNiSCf4fkNnFBtaNoeSMRZsADkuRZ5YECyDy3pS7FSoXy",
  "key39": "4t7zSEXwgB8Lhtr4GkNUFnpUDY3vEzeR54JQ2ja2kzK6RjD9oKq1P4bhSvpnb8j6Zy62tHPsQML188i3SpHKA6cJ",
  "key40": "5ofFGVCnP4gu8btGGtopkRDoGCffNDJYvroiLLJiAGSyv6jLLBpPzdWZTH1bQwmtERaBiqbxB7PWFZbqC9fVfYiL",
  "key41": "5TD7mFJwGhhT8etwZq63LM1LoRgAqUp2fc4ssvE9WNHW8EAqmAN2QmxsMSECtQwfr9zQi7AEisvyPm2pV8kMYdGX",
  "key42": "3xLZTLYLRDrKZu4inJgbeqVKQUt1Vse9Mw31tgTmG25n23U6LoEzK8c43i3bkZw1mvNnax22qKwURSqnatyXxwc1",
  "key43": "4r4DTRsh3sXgu3UQWhJbD1UtsMfqaJ9oKQfMS6mhsC6K7qxhGJJrgWCoVSX8XN322x8FUsX79Ef6wSXHd6FJtkmP"
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
