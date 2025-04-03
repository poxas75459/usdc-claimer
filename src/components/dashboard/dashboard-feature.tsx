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
    "3pvVrd6bGTmXe2HdRyKD7kVVJxEKjQ32fdy7FtDC3SmcjUqnhymwYqT9oqtuSm2wsJHKVfEbwuAifJC9EenRWi3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9vqTjFVP8pdqeBiS1wquCSfQdAqj5CirKM8CTyycmirDeSrREBMkWVucYAaFre3MzPtom1KamL7Cfy7ddtf14YA",
  "key1": "NGQQa1e5A8QWPtHDvnBT5WogHc9iEmQZebh342TnHfbA816cwYR6m5CYjoWm58dyJhmyLEeQfHbk7CGMWsdZeEu",
  "key2": "2QanZg9q7MRqp1xbsrw68xa4rGPL3rpf3XS1ic2wPU89qKBv6vv3tg3ztTFyYuxBPujNM3s5ey1xASuUFYi6YMZW",
  "key3": "3b2AGoyo5Yfr2BCDS18HwDtuD678u4ueokCSi9EjgH1wky5Y5EBVkmNmpSAF5qAj6GScBUf5bDJWDZY9PuhH7B2v",
  "key4": "9CML7TQW7QCLFCmAQkAQJLskKMbpqkUZVr4pgrH6mvV8kdpqqF9AfCq157qCepv4DUvD8ha2BKnVr78aDAypuTY",
  "key5": "4FmERLCb6sDvkQ3PpC3jHmxDkDB696zkkcSM1yy4UNRa1uM1wuivcwMRZd6RZtThsDmD4knBP2fUx7xkDiXkWCpN",
  "key6": "4TpLPx3JNGxeHELxGqzA2sZrEKRPUWrSzKYY9VZneF68cudbFxhMzqYuQiK4kFBPZdqdAfUfeatMhuJyatYva7mr",
  "key7": "54pbFF6MHeQvWhkbdpWQpcuNqRdaMgNP8J8b9Cho4Y74bL2ZJT8x1Qb1sXGMbvCPSZu33jufCYrF7UBEM63MNxcq",
  "key8": "49QAZUULnV8M8MckKumnyFW2GKbUk5WBXmePoPLjbKSYRM6z5ua7yPxh7bchkvdQAicEBaEm1HqvMcBNx72MMdqT",
  "key9": "8VQdNztJM5a2jzpFy1KCcfo7LU1k8xZwbUYanz2TehgoZq6igqBpwWZmzFzwR4eK1g2tKhiQM8kUr48RDgrsjkp",
  "key10": "4Jx3AkW3c5HpqcBhgATE6vmo3SJsAVtknn6TYECEk1nXQgsJW47daYN1zHiUgnmwB7SXW7NoG3fREm9F8zbSqLjA",
  "key11": "5vqFLkCj6NtZ12cXonBzXA1jLnGExbYPDmzvMhZ45SvFxEAKGHE2tUdkxJafKUmiaHttWyAdjiNko1e239hJbftz",
  "key12": "Z93AiLPVCXApQ71rVTJYkYNWFntX5QCp3G54SYr8qWWJ4J7PzUhRbtrYegyYoTuGBwqZZJkdLwvQcqJx7cU8NfC",
  "key13": "vzQSnwfwJgQEWDQNQYQn13qCBC1i5GqWBTtgkt8f9V5aBTP9fCSuKy4xfHkGrmKSEH3nceWnTzScKTchHyfPKhW",
  "key14": "5hQDtaqo97MLmmFpvvet4KPD2CctbMjEztWYF1kaJg3mepqJBGYDFikwFHeqJQbtfMxPKoMCuDuFtSX1DoEEbKAf",
  "key15": "4hN2Wf1o9ixyt3UhQk7YsciLJus9rM8rKCeeBDwK9nXriFfy9wZppwCEMZGZHLWW2WbPkaNtJZv7imoSNUuuqBgG",
  "key16": "66GiVz3LA7PUAvwYTymAVdMX9GYjvJowpFdoXs9b9Uzmtv19sG7Qo52yioDZuNczTbckkwoaJ12Vrc8A8YP33Qqq",
  "key17": "4G3vTRKHzbtSvYEGvzgUQjWqdUpqszFm8FBYFP8QLNq4BHjy8MQ87ypgwmD1xbB7YpkhyfkiEBUk1NMfRdxzQrBq",
  "key18": "2ZBxeJGnZs47VbaAjKSkLWfFcoQeo7oQrfmYobJix81SLXFf9H6q4zqKx9B5Vs5sAr2EAfGVtsR79c4p9HWuUqmX",
  "key19": "2ztA7TsU5swcGkF89R5SpRDJBAawqdknVyKNFufS7cfN4XKFuzjgusWePnNB151ynWY8q8pgFjnSgR6G1M8L4GMX",
  "key20": "5PbZbBjhyp5MJLNXAwtE25KhQPq2uYWWZp4iU1myQeTjPLvrRmCDnmhnTHcHBb8JAbiF6dNV1CcNJPDiwBB4Q4dv",
  "key21": "5yFpbwNSomr8ynBjBXdPVgeCNmiHy9yFf3md7TA4MWNEMFa7iG1AaUFA1aKPtRaDLsBXaVAEjVQZygvUM2w3iSVs",
  "key22": "2YTtRTtrnnuPuhFw4driyFQJibKdD29C7zAyZNJ9DFacoLU8dCj3zovwAiCEKCRxHrr4FjPBfndgEn7rao5jzPuG",
  "key23": "3YtmaANTbmGGwwmBcdmsgTXh8odJjvF7nZTihphcSmtpz7ZHdunbv13TJF96yqPSPsxd7qrV87F2x6wTBWunn54N",
  "key24": "3uLjErFTBxPWJDkVHiiZrAZiSVERiuuwk7YqUQ6cYUCr3zb9ZngefQYaKcfmMGDNCaNFZSibmfsJajT4xiSojcfg",
  "key25": "4r6nE2jHAdRv4q3hmppG1KcW27CS3izZqAxSwcS2ir8ECp7HmP4WEtWrkzVSDtHFP6PtuSCrQAFpV1qwzmiRmFpS",
  "key26": "5kYBnCDjGjYtsGwfQCuZzUyaszXj6P5qDP6MEBz3kCoYRkWKNcf44MiJmZaYCdTSLghM6Xjp12UtG5f4ssdfLkaM",
  "key27": "m4k6ZPycZxaJ4j4dxVM6vx9boaFXR2FZVbFG74BMRtNL32o3yyywqBycGEMx7G4j1o3BLRt8fiRGPByexkZ5scs"
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
