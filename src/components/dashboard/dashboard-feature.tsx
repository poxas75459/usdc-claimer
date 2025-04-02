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
    "3gUWzeYxTKSm32vueS8bfa8q1zFphRVQUWH335nFAhQj5rwgVwSWBkFmtHW2LiE3881SG4L1zdNqPgMQHNu3WtpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysXd27HZBT1Vu6jZHjZCsjDsR62edG8gF7dFUHCePBYWa18xHMJuXzoxMHjesVfdEL2LUUVgMLskZJSX3qz5kuq",
  "key1": "2BxV25M7CZHtzEjhQ2fgTwX4vTBgjARUPSHkz6sQKujJpXkJ48gzxzvtLHwcCmfMU69sgDX5HsqR1bQcjnnCwmCU",
  "key2": "53B96cJwW4bNdP7WvGT5A5Hkbn13oZ1e1j5XkG6b3kzpDKhyj7dUW267yFZ1wkSRM38qhWusdUFSLHKduYifDLS8",
  "key3": "3Akxq88Dk5W2JcXKVXAedJuMTRKWBVDDErhoAcZxRKYS1LnS6ALxCRmGdg7odd1ibTtzsLscddki1RWh6jiTUKBV",
  "key4": "4mVM5tC4DQhaVzsfQmmuAqRh2n4cwcxH1j7u1PdjaYP5PzZPCptc8MDQ9jUR6t1dEYhXbutUH1n5wJc6U6yMEHx6",
  "key5": "KAKP3S2ybzCzFroiNkJCsNsEEU7hvrkJZQ1qrbX1DvxjUZCdB6oc4avhhU2sGJWCrZsioqE8t8zfEFJ8NYpvSYT",
  "key6": "5RnHg4ePf6y6HNqCLVv3yiRDMBzF5GHexPH6yrELjgo3QqHa4mHC2VYyicpB16EYyejpqCg9D71iR9pnwwxpvJYJ",
  "key7": "3qwkTMQWCSGP1SnMJgyyAGVqY1R9Y7DWD4zPcc8jXxfVzRykutU9oq1BFqHbQ3wxQytbR5eEQYm5MD4RbqmxFVYx",
  "key8": "2bbXbEJXJ5LRttn4ie2oF77UyTEPFXUyhZnX31dhteLu9oJ438wa9k3FWjhYBop8AiDQMQD9JdXHfqSFqqGrGiRv",
  "key9": "c5UouLEscRGpwYXtDbRfp6x1TvPEte22JtR7PUwcsG3Fvp8g7ZcoLvW5kBYBTBHtAiRPUNN4UDCdkvMZe39qY2z",
  "key10": "2KjrbFa7rno8rXQVZFhi7QQnNcz28ojxFMbGP48eZgnw6gQ2aa7LnBxhjRBmWKx2WrQtFo2ZJgUV3piAHwcUHfV8",
  "key11": "4YcKyowGQrSZL2zCcKjcmBBqGcr4MEjyf7LPQ3YaMFi5gfvNmpmVVK2SbQ5YjS3afoidLzaqCCh13YvYe3yMZn7t",
  "key12": "3CQsd6d7ej6JASnaxiNoginDqaG3j2iswHjjvaVwJy3T8Mwh1P5NAgAF6Q8Yh8tdzaTgzb547XZkeoj3UdcdGG6V",
  "key13": "2L38oMrQvp6nCLtNAmpfqKgdUd88fzfLkW3ws8CcJmCL7TYd3bBYpsYkActjmaBrQGQLe24sTaD6gv7uYxsomvdE",
  "key14": "5TgGtCqALL6sUmiwyeW5WaFLqy2gMmXgVyrwSpGnzJkmZtk38Uq9R3CmYTDy3fffFyv3o9BfpciRgJNQK9kQT3Na",
  "key15": "7G8CVMcBaGrKRkKEw9UfTceQ9YGD8gv514gh6HxcLwc7uC8xRq22egV435buftpX2dPkMjXF1557gU7oq5oYaZY",
  "key16": "5QitdPJ35zoQHJitjZMZ8uzamdFNGxo898qwyFD6oP1e4CKbZDe3JQSomHkjqKn4gRyvSyJPAeQkN9cMCbb73TnT",
  "key17": "aTAoErSGvn4FrA6F16Bu5DqTZnhG7TxLBVXqoQH5VUsuswGqq4131vDxUSgdYhqE9SKP1GcWrLKXEQq87MKq4kP",
  "key18": "43UyE7C4mrcxgWGkBbrqTyKXKdxbRiXeftduyx3JqhxaCJPTsq94h5kCVikWyZnY6fRaoV7yX6M6YMhhFtE2ygF7",
  "key19": "iYu6behKbhq7vumMssWUEaRUJxRS1M6NLjmEERc1A2538rCYCq7oc9MduvzVqAZjXLy4e4wo9SHmmBbifJgEiD3",
  "key20": "5VTVXTWrxUsS3zzoshDyfqYfw4HpP9h7VfYSX8Y6bHceHnsW5VZLwrw36AvPKDDmYFVVwrV5xmQxwBdKfWJBYJH6",
  "key21": "28pxFKn43utZHnxLvKQa8xh3Ku4bTXXnSFxAK341ZXARm7HKyRizaRHAMpBynAKTUoQvRJKR2ToQg2faesycAyQW",
  "key22": "HPEvNHtd5vSUaFLvdFsaQVYMTFiaZonKU8JKsxPN8xu83Snumoe4SA5i6FQjMLguFddB2DvAQU6TzDsDwn31Wxt",
  "key23": "4H7uba53QGuUnMwBwCotkcFBTA13VEE7HQPHCE3oXUxn2aPt9LvBFonT27zKc9ByJ6AeYF7R3y4fN6Xs4sytYyyS",
  "key24": "5oCaGYdvJgvyPwbtT4GuRtRxBotUiVuErYxcQAy9ZJEuJovt3nugtauWhxN8iWEhqrAq3c2Zn8TL7pT6GzoBP5zj",
  "key25": "2Qe9b7E5wjxpHXh4Gy1cwHcR931c3mLwLHWMu44sq26V2zfJUzSS8mgHtNU8YbfKvYmhD4Yh1o7DmFXYZ2qheXtf",
  "key26": "3diKAwnSxxkUKXZiquVpew4r3QzEkDzNAwVWZSjhxakNrrf6poPZQaDRUHsQKMGBwqYPJcQYosLqGvAaY9MVwzDQ"
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
