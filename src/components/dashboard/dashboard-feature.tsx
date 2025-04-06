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
    "57sCEMvGo19EuEDX8jjLESTvU77FXvNjTZjcPCgGg9raZpFoJaWn16NfUji9vrG16wojzpkoyEbRAKchRKgNC7uS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3miFwnJPr4vHqzsvSgc7FygbVTuNJkx1NKrcNSbFiYgu1NZz9RqMPLaEjztobUvzFVEQcUVdoGECN8DyukSabFfs",
  "key1": "pgBTzp1eawLxEx5avhQ3hbGxC7eNCjz5xUB7A62XyvyrSnWX3FVXrLA1CKsXAVHNmXmvUjrRE9eMYwwW7jvQpt5",
  "key2": "2t1jSwEVtXvWigZMzLYFBHPjQvh4xGmuXkfBBQJiN5hNZJhwQSzLKGUbqSxG6Xw6U7dJ2dsswvNyysnbmkpcbqYS",
  "key3": "5dLDcc3sWSQbLeZrdimMiiSgE56vCLUY5bD2X1fWLwRMEAarMvYg3ngHCM22ixb6QWT7qk2ZU8nPCjnEkEBhtE13",
  "key4": "2J6Qny44uE8cPFTDhEb822pDSWNgCrYnMpwx1DwRjPeStasRMZoHCcXM2fSQxeYrwwMYE99JAeDBzE58U2JETFFs",
  "key5": "456duVVNtNKcx7N8RnMFm4Ps1smjQi3QF1KEChMtAdQJ7sRQjwYZr1qpVmHVkXaizZJxiPpqRJfq83o3J4hP7tPh",
  "key6": "43zi33fQfxFz9r5gHg4Qzuvz2R418DP4XG9CYP5UMUsUq5bQHgEvvL79yD6XdcJ2ojGuhhN9wMPEXuoxxbaPEcLC",
  "key7": "GmB2MPhuvUXGXSLMatMwGXpxFsoHD6RNWRYcMv7fhrHsyFwSLxzgBHprgyKgyWrvsoGEFJ7rUN7FMXhdZa6ttCU",
  "key8": "4gJRnAVd4koMEWuZ7mDYoTC851ne6xMDb8tG2ApqfeX1g29SdCD45Vppr2NfPf89J5YY4WnyRiB3jcxSinGDVB6s",
  "key9": "5cs671Lu43FtF5SfkqtPsRUxA2fzeUGPQfs6cdP5ucbinxVdZ3VZTPr91npvESzRoJEfiDuM38nT3jsm6K3Eg2eR",
  "key10": "3xCAPtyRrXzyZwqJz5NW6v7BsBwF1vyJKuyaAyyonkqCq8WoTEJuwbcFLtpniapQCqSq6ZSzWzTXD3Zo31UfgeV6",
  "key11": "5yZCavR7aLaoGwpiwDrTxccwkWx3X4k98EU42EmrUJmftZoajzabqF1mTewa2zaeQad7qW6woamVAADvoMXi9ucp",
  "key12": "456YkkrSnJVKErrtyBGXjoko7jf4z7k1W5JLsAzvzeHEYF6cKWyT5t8ZiFJEf1fdog8bDuW4o5hEUiLZh1MKZr1S",
  "key13": "4bszw8A6vwfKEoRs17py1b9EZjqJN8tTjpuqGMtDr1NqDHBrVnsM7eogDPYyHLChzCxBz3BJ2jFUedYakt5vJdZE",
  "key14": "2DRJv92fMaRrdidVarGA218xSUXeSYyNZuNBoaeqeCaPR1oWNFzGkLqLNLChav1xueCp6kuKtZqzuLE5gWgunXQu",
  "key15": "4GduKmCw6eQ7XZz3eRtXJixouR8x2ba9kULPqKUqx3S5MKxtcJ7fyWgWkvpEGpipmAyX3RXMsGNfZxnjQupiRVyd",
  "key16": "64RpJ1CVeB9VsE5Lx4X97kVjb5hB8uAuQ8Ye4qFBRMf8Ldkiu1nZU1CEqjiWWm91syqpJzyxfkACMRLeici6WmiG",
  "key17": "4YXzSXzgkL2guiDRLTk5o1RLbNZZ6p8bdsfQ8b5Pr9GJQVFuWGinqntqKR3tSviTt6QAcUUqoxh9CezYfsBWYvD4",
  "key18": "2h6qPBar3TgxyGpc9gAaf2WD3WUxbXKcqUYSfDjFx6ybdBTHtkyPTr4nrt4zBd2C4iiVyrD3Xs68GHLKZsfusSVE",
  "key19": "4XsA1Eb3QPtuhKrKSGj5hMQ2PCJNMF1dbkSLSRrvxJZa1YXckh3UamEkpVgajC7nNcQgyeMt1NRcEDEtT35FqrDq",
  "key20": "5EpPMwjFYBkEjhY6HcAnbs6absjPYRi9mawwhirWqW3NWDTasdUV6WYvWoa7aA9xAtHBQXq3jWaddRvjtxJFNmet",
  "key21": "5cisGiciQakGkcn2XYkeN8GMHDYsCxks5ZaidzF5odNFRzkCCzaYmLPiCtkYyn7U7Yud4T6aXLkHddWbFUL4c5fK",
  "key22": "FQKvRJVwB8Mno3bZ4p8PofWhB15c7r6mhZnCcz9WP5DFzyzjZCF7McUh467jUZwybbuJV4wQv5fXY8RgHtbfGfQ",
  "key23": "5RKQdJuMw9R8NDm7U9GU4vAMQFf8E24SERZZCJdsC8qRfNasXh8yJjCgTGN4M7Mu4Y3WiLPFoxahs8X8rdKbU94c",
  "key24": "44muTYBxK7KzNNo9e85twBHhgn5bHCJf1AccmXm73C1vgLgVrhbuQZVRoLUc5rhjTVnQ3A2AfWvUEQcqUWkd23q3",
  "key25": "q3vCJMZnpS6Sk65LSbnrCGCJVk9rFbocbRijdkcoLWFWxDGEt4mFkswoBvc1NLWqrMXcVrsojL5ToUZnDB6CpRj",
  "key26": "ea3QseAbeZJLN6quYrXEvEjBV59vZFj23mP4LaR1LgAxhCHPmgxDjpQH1xQNkh1JgNooL4Y8AeXXDPgdF8z6xQy",
  "key27": "1CQNzzTjmqo49oYfzVo4uvgvvtKFATS4uQbMJygp1rQhnokfsLXNx5doM47dLQaJGpFEEFfD9i3a9yiXKEFXFsA",
  "key28": "59wrmRTEEjT8K9SxpRCMFrK4ktmgogsy6xZ7ZQYPscSjtsrZxz8WQn8pkiFgYSZPuhG6E2k4ENkN2vL8NcTDK2sE",
  "key29": "9xXwZe89zXaHMXv5DT3R7mp92uyk5o5d6VP6py6uXY82LDfpLP1Qsz7m4d78Qi4pgdJspe94FWjqMT3jp9E6crY"
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
