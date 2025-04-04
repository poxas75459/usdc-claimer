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
    "3FQBANpJJe4uXNCzpAhcxLtqb6XY23kr2At2PkKQJmdfGG8fxF2gpqLGkhVsibmaHZQNhhwoFnP7DwEjvkjobgqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3934Rcnsv6sK5MsYRMXFo7vHyHabKh3wqU2S9aZhU6acLnxMAez2peSuZcDN3BUSJaUTb3vcfYsVnueUGzRtFtoM",
  "key1": "2u3uvMs9r3tyiKqvvwW9W5978EDtYVesqpAuT6UyMpTzQWdqRFV7Cx939j6gHPHFmCkg94dW2KkderwFoYnXAfUj",
  "key2": "4UG5ipPWCMFGigppjyGEi9Ar8wSh7XNt5tpDLokFVCJG15BJKrXhiFyNMptgxCyHS26CDfEGuq69Ftojx8i7zAZJ",
  "key3": "4r14eLbMzSDXqBbYCSiMPh8rPHgd6FsMoefCccn9dZUvikBKDFq8wzD3E3Ac69aLhyHZoGbbz3Maiw9Bk4mm7y8e",
  "key4": "ksZsTSjC7ahF2Hgt3MqXknoXZg2XwoKD6eGi4MVGsKXTp3qLfTa2zyLshzp9NB363CLHeSj3uVt2ygxWgHrpWwe",
  "key5": "3AD3Jvy6Tie3emPkrLBxE6MSQw6SzfHjiCoZhTt1Q62kf6hPB3v8UCNMMopNZ7ZQNVZkv69HH9VvXRcWGnRe1U3J",
  "key6": "3xayJqiC3GYEtbxeKMJRvaoQMQqGstHC1dHVA3JBGDXRCxdkBNSUsyDQ9ituiDkuC8kQNi8mAGWKdCPnfehULtY1",
  "key7": "7vSYcyhEW35ANuV1ssiYDS6UnAF9QCoX1QLncwqvJxNb66csJEBSJP5VPd4nd6r98wmmxqiu4nSsQS3xvBVW28t",
  "key8": "4Cri3rUbEcTiVWxkNghEq3iHYV8uXKMVFeBrsSPBNaChBDuzxbS36LwPE2tZ3F3UkP5xVopgsxo33USW7whKdPEj",
  "key9": "35KbdgB8iHKpFg2avRgwaUf9sTPnbmjqP6z3RjTKvKoRwXjSsGxE7KSjR6NyCjLPwfadVW9EiKUHTLcXyuTxFLoj",
  "key10": "mnCLzr2uSfvMC8rGhMEDxd9QrjP7wkTXwvqo9rCtb9tGCBhs2dCZxC7bPVps3mJK7eSsNfF85BKMdxXmjEdqE4Z",
  "key11": "4y7rr4fthb1Qwzf23gQWstCGomVu6VZ9NwyoT1zKFmCB2jqdedq1unCyxyJZn47Dx6A4sxvrw2wWX6wbVXZ41r61",
  "key12": "5iUYc6upyYStzs4HYa9JreoiuBWtitcvUrSFN9wBLQFNNZPeas82Dd3wkpVzZB7dzj48nMmByhpQfeoTQ7a12VnX",
  "key13": "2BhxKYPoAN8CzSQwmp5huD26ThSG8i9GyuCYcFcwgRtYhBAVjZjrdM431SqBzuF5Px7r3XeQPhzWEMpUi9zwbsX8",
  "key14": "5tsRpnLssBc3Jxn4VRFSKzYx9mPfMiZejL5cs15wQyNEtZ5d62fNhSbzpfpfkxgvG1vHAJ5Yvq4erb7sywB9Xg9e",
  "key15": "3Gh5FkkNs3DujbwpdVvyvHwD2NY1QfmC3Wdv6FW3saoREvhDN19u3D9U3vzy9EMARkt8dEUqYAJir8GwgKdrjSoT",
  "key16": "3iXJTpisF7SjQsVRVW7VXgEKAskMkC5DVuATUSUgKJ4vXszfwLngritgNHht9Ae8QNcJaKUYV9Tg8grBWQ1wCtAa",
  "key17": "5aKpgcJpoLT17HfhbDj87yjAGeiLvcYuPT5YJBjgUzFs7zcrZEaXggTHsfSpo4wdEQQc8FA8n5WQPiWTXE9h4YbJ",
  "key18": "2wZrdWwNxjk5h2kdqmrF8SE9hY1LF97A3ouhbACzCW7PbB4syzij68NEuYDg2uSSiyDY7XAuY3KVRUve8Bbz9nfo",
  "key19": "2EEoeoeY4JLmDtktbSzGuLL3D72jLgjC5U8itMe8tqgpnMHYxJoDkYJCwtEKvk5EeGHjFzpzyxMpn2H6YpWxrMZn",
  "key20": "2sj6Bqiu5pb4V8Cxcrw1Vkkh7gDmgpbVzxc6ZMQ6Rgsi4kToasNqWBsC59HXjjFSpJ8whHr1kcLojSTKRgH1rEUZ",
  "key21": "32jQN8MGFkVWm66cAK1KT72vGiv2rNxaaMdupXo7eYFv34oaCE9thCPgqmG3FYpqrmj2PvMx3P5Aqi9JwUfXf42y",
  "key22": "XwrYrgp9aKRWugwmNQN6X8GxbykBRYSSgavoP8DfCEvRnoSKBUjNqqN7rEMw9gsVRmj3gpyb6tUWBX6AvSK3m15",
  "key23": "4GjKqoiAzDgXsU9HQLe4CKWeLH1KnhYTtnqoHCVi4eFUX6bZpY1fZ6iupaqTrzeQX2AXL7U14CxcGjFFHt1NcxAU",
  "key24": "3Ztmt8EgwjQEWHCN5kZZx2A8Z9owLYKH1an9UqWUy86DnZMxityMUVt65cLz1bDTyiRMou98VYFF5dn5CFbyMRrL",
  "key25": "3ZnBuv4GwAwKd4wKXRkYLK5LWgfwNcFfMn8xgzjDn3B8qPAyH5pSGrC1YqaSULmKWQx8XHkByVGbZqUfGpJSohzk",
  "key26": "5K4MfUyfgyDN5VpD4crrCKNJadSw1rRUMndnRSK4nHjPi1T7TivDV5vrHySc8Rb62Q8DqVoEZRWLXkzivuXva5ao",
  "key27": "57b6V7urAqHegV5pYMUKoBcqGmxaf6882LSYr8FsezzYD3bwrRAd3rKoSK2hCspJThyAc6UWtiXp5tqmutdUioRR",
  "key28": "H68pN4hUmnUhXxEQKdZhDdej1mdYMCuyok5BFyjvLRtaxMMfWSdo8fa2tVUSszxyGx6YuSuaXrKuLB5AcmxyPSq",
  "key29": "5DZ9RYvzjtbGcPESaQfbrdD9vk5Ku7QMjWmDxjuk1Gc9STWBtaoNNdqhuQez7bYyhoyQizDjWT1pi9BaAHszJQzC",
  "key30": "43KQbb7YihLqaGzCxkRYcP67LNRTG9TNRD9Mp3S1CA7sur4omqCSgxBsB9G5pyERUqVBBuZf4iDUh4vd12xYwczB",
  "key31": "4MvynXWMpCC4EnYRwbPqSYiXCnzSkdaYWpTHHNLDRMfE6xJzD4QrS1hmc8BhRfRbACtd89SnH9JQLHoGitUbw1YD",
  "key32": "5jxAc7VhCFgMdJmxFvbw5Rk3B2C77Jmpk7vna2AppywN2jd2XjDvCtxbruBKK9zcLEUY9VHqFTsCT3dp9uvcYMcr",
  "key33": "hFhfTpbyNfhMa9cPYaV22xstainL5cuZx6E74n1ApX3SJwyX3PHUyoF5Hvwn7XCBdVN7Xx7rZ2GE5ysBQ1iPurw",
  "key34": "3n3yV9ckHr6K2aVbMHj8RCG3fjSV6cj4aNJxAdmmBbPWtoAcuxoM5HnrfBd6mZFPkvk4wEhH2ET9hKLjn8zaEQK8",
  "key35": "4GHTjVsfPthVKYxUrod4qqD5gGyXLfo1n4wJczmqoZWNW4gF6MiBE99nvm2HgfxLDMidoLCQJ6kKfAtQzPaxPUVp",
  "key36": "3Y6d4uP1K5NFhHCdf9TYWvVz2U9dVeemwtnDgjo94jpVPcnbYk2TuVh7N6NWf39nLAFvmze99ou9UNresH37nHrK",
  "key37": "49w4WUPJoKUQcEY4qvGrHQA7VYaHHUkqx26jrMkfA27sYBPM8T142yCa5YVXx2Shp9NYETbfnBR894wtYFFtywwt"
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
