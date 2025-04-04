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
    "58C8Qigax2uHyzq4cf8HW59cbkeZCKUUpR6zPx1U9ntrjjFuJPeAeDe1iA8zCrfTkUdiyeAhYpZrZfpWALxKqW9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aeEGHPf7MEsk9C78nZnbPXvoc5q1CbCx31zGqQVdDZrEAviCb23oLfpJzm27LLPkhTSU6J4veu51qfcneUCdNgy",
  "key1": "4Ssw71ycH2sm5ZAWXN4ubx8yt2VqeiVBB6KcDi8iE4qAKk6nJZZNsDeRv9FPhz2Rp9HXqEa7kYxCzcjrBD6Y3zxa",
  "key2": "5kHSLs8YXEEcR6ex852HDnpsN95qfk5dWmP7yTcPDxAMx4gz2gAj2NP8gitRFMk79CTrrBn7mdY4KSrbZSxmRKzb",
  "key3": "27xKgfNAhxx6PRL4D6n7egqXhC8WFPkBCpA1yYftbzz56fyXehi8eN77TeAQBpgn9eGZWknKdZh9pZDzexF7dp7e",
  "key4": "3WUe3TdtV7Wc5QXrkJqcETBTjw3LJ1PrbpvUs3zyToPry8zUXXmjmhhhBPDpxLWdNQCbbCBCByQv9pv2s7xQELWm",
  "key5": "3zaBmTkRk9q1JyWLnfdHCHAniKAADwgNvqe6arXfS7p56QHEaNS5zSKTcwe3VrzWijhMcLxcV1jf7yyrgDj56ZBt",
  "key6": "5j9fXgm4ebWvUrVtnpSFuzy993RBdzNyLP3dhWrC7GBoh5eJpQEU43kFf549sKDjfbRioP6umbwADXiDZuNjhbEj",
  "key7": "25Ynuk5TSxYHxZgiYjzE5Zgr4Lye9AVzNUrxbuHhWuzo45FMsuNR4EMTJmEsasUoTHyCZvdEaUdRKtt3fgTfTZ4q",
  "key8": "2SXF9mihMSBftjU2juon7k8xmXqx2ZAnxTrogqpBzEoR7fe9givywVxD4fHLCW4EYykB3cpTyNwV5JH1oVuiJxek",
  "key9": "3xPwvbSbJoPoyixKEuAJXrMovH34W7GLgde2NcNDauWsSA8QoMeKHGUM68jycV1qwMv8SkYHKekbKam3o9KnNKeX",
  "key10": "3cbYbyqWf88b2RewxbJYnxTE8Ph3ScTZe9tiHBiHoDCVgYrVco3K5M7ieZArHxhj8stqQpnqYubhXob3kFpiGtHa",
  "key11": "5bCfN4SZ5qzsqi23dnovXNqatNNuBZxa5qmSbk4rX5XUjVc7qQvmzLndTiAKSpKC7UnsQ8iF61wH2hj7DUPUFxk5",
  "key12": "5srcswQzgK24kzkNv7PJuPVTirKK4oQbfGGu7QzSrKrJ7VwZzi2PkSRNJNZpNnc5miMmKVvURYEkB2w7B3gQ5AuJ",
  "key13": "4wY8U5PJ6y2uz1e5SpCuEmZwr99bSyEckeTT8tTcessavUu7j5TficaNK67wvS2PsC6c2ZGPREjRzukgEpQ1x9pb",
  "key14": "DeA4tHJRW6RioyWUymbzXzCy56ic1vu43YzxwHbxra4mL2ffsuf5pbuaF9fm1ZXGwxv419eQtw5z8XbQhQSFRFd",
  "key15": "3h3dGjgjyBz9zDVTK8m36GgBFUbmFXhqqC3RUfpMb93EoPrqSdXEn15gUHTBVLdtvwVJfxsdPZrqQQhsHHCmM5Tz",
  "key16": "4tBb8mFR8Bqvta3KU8eJm38gSmH71yPPRRrdnJBMRwFfrgFobTH4TNs7qXfEcSLhoM4hB7W9TQ3vPcNAT7bT9dFH",
  "key17": "3Z3Q5W9xB698hdTbbR45i1qLcqDy3eS3zF5faG7Q93wYhb2MvwFR4RXn37TcgCAc8yoChTAEchLPTM13Zw2WLTsb",
  "key18": "vGj8zpj1MByH7Ku8WQN8y3n8iaopxZ3qt6NBLaNJoL9K8EADS3PDthgSWXLJ4K6vnBJgQ3P7BR5dKeB4oGo5EHA",
  "key19": "3qCbo7Hx3gGnHdGVPgYQhhL958NhuNYjHDfmyUNixVrCVceVPF6VR27eUCdnjxz4n49xm8JjqmHt82ggjRabTEP1",
  "key20": "21hHrjWCbrNsfJrFoi9wZUWFb3v9dgFh4XuKgGAGbYwJysCeaTVVWqq1CUiPKDB155Ydr4tXU8iUrQevTGhkDRSv",
  "key21": "52iqYkpbNP4LUJuUuKu9WUZNQK4xxR9RjLLixAizQEZi3nvCnEJoQyD4eDshDpqEScvSRwGP66QaTdb4DNUJZkTB",
  "key22": "3T5Zoq7c7DUHhWb7841GPY5MQsdSKJrqrrDLABmB9o6q2gAQYahtvVapBEFQczBiG31W48meoJDWtHb2u48sfaL5",
  "key23": "541FkM4yVvSzW5SC7gUcwSCcifDFxQ9inh7Aa4uX8rpuXQvFmH6sxWAMXjRw9jFLYFeLV17xyrirFiEhhCLg8dhW",
  "key24": "CviE5e4tR43hjBuSTjjsUXgms1qLt1HM9iomjAU5hkePwLhX15xaNXybKyo3EQe7BvUqR95rWm2U64QfBW3k6A6",
  "key25": "4x8PTF8uHFXaxfBKq8oVPpmtxAgAEAKetvTHyzcdJDj39VrTpg4vTc5xYK9ujtGBc1u4JCqBjks4w9TVVVSk4Pef",
  "key26": "3Bd4iV5HNJkxUeLFBDRU3KCVKinaZFdqFV7WvZsRxbGN5HuJUebieQrxHZUAgQ7oABqAhcrrG1PDyKc48EVB1Lhg",
  "key27": "2qQmkaNUqUDrusehjcFVQomDkngBgy2UuYkTB6mPUcTzqXbT6C4meXB1FGqJxWRa7H6FQUxikMya2PW9q5ad8Fq1",
  "key28": "VdoVBK95KEMSpMdtTcPmEXM3PRKSsHTFDyuzEQSs4jF5khVh7c7T9jk8RSo57qssTQftUbrC3Hh21uKXmuRr6bV",
  "key29": "5WtcN12Ka3LFHatn8fdrs9v7fi4m8a64SmuBzfQCdmjV17dSaFHawzFt34FDzBgSBW2wFzN4FGNSuP66yA45hY2m",
  "key30": "469usZVVjKYyWupKZy927wnKjaFZ94csrVF79XuWi7LF15tg5y36drUut7LnRCFH4bZntekiYwnu3UVPwEGWzbSf",
  "key31": "5sVXzUHfvc2jCzZT87sWnpZLLWZbbmeKL7W87F9HPSovwa2jqVXS9LtTSaovQdUL2tPMDyEeg5B32X3EoTMWoaJJ",
  "key32": "3AekyJ7s37hEycvpbuDDRkXbJNVtW53WEFVMt2ExVMUjR2NXgQdoBiXC5rJWCtqZZiAGXgf7U4CJMNrrDFfdzWvy",
  "key33": "3J5DUsCsBJkgpMkHFGRVpB5iRZDWR89Ph57nh3W6DCdkrHRVG5Gq7wAS3dCevDPfPWWH956d1LH7CAY5KDstBZFh",
  "key34": "3VxLFJAdMx66HZBLTzQKMJ63xdxx1eYihdgGQSs79oN6bwKBbtYNNgXkQdTpoJjFV6qEhh62apjFXHQ9BGw9wBvr",
  "key35": "65DGKsiTzrqU4b2MGRRnUCME7ZpTW1Nso4FGGBEfHa89AiAhD8YZegxr1HYoDvFCm8fYe3E5pN15rxKWfJNkhTRm",
  "key36": "47xgRWqymArKvAgz6y2PmrwU6DknQPPnagVPcJt6Bj6vrfqtGXxzGDufEph5V5VfhQfHYBdzYGLqGp3EdmHDRtuS",
  "key37": "2QHyiBEzeEfApjwxrhSReLNdGaKQHZrKgmmoP1Zk6nHKZRny41Yxp8PMMRsMwGjYMCgBqbE1fURCCc7GSiz676KG",
  "key38": "2ii2cvLXq5hGbaJvuoYUiWR5FnTUtZiU4W8AVEGJHXspRjqZvwcPiX5BwYCcJJc5BR8oSHHbxFra6dCGM9qVpnTv",
  "key39": "224zQKCP5j2f16Z7vDywBwYiUmsp46u4XusDqbXvdq4fc5TEz6tcasSgvjMJp5YXDxqeqRCuVRu5kGMsHLuYx8Me",
  "key40": "2EiPa988cZCi9wCMFz7caSqa9dkXH5NZzrPLZXRk94tKKLMczz8qpzpZRieUywb3r2D1xBDKCyX3iijTM9ZnEuCM",
  "key41": "61zHHJBCGWWeg1oJJEQPwCv3y4Y4KWfYmgMtv4VpETvzKTbsbJyjzZA8p7HZv7SpLw1hfNUE4erjLeRtDVnMimEb",
  "key42": "RTtHDvtdUYfX93quxBL44mT9NVXdgnXKviMHAYr6h3BGfpgwa1fBpRb2bGBTfPsTch4nFeBuneTumh5v7V83GPd"
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
