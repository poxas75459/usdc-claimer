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
    "J8ga9jHderT4i8dLnMWQhsh4mbux5k5Lqd2wvTrcdWPPV4MFEsJ4vYSBLCL6C2T58XeKpyiNA26EdhH5NpPSu8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pqqBzc6ecX2Gy6YikwUzVX9HTcxgKyJYzxPiYcf1viFTK14hVQdZyxww67rkdT7XfBfFiNQ5ptVGjbuHtNadvvM",
  "key1": "3BU4D3cu9G96Hec9jAHmMamSojUcUdZWtKsAzK5ZejQAeJQrqfoEXwxaEk9ZNpcT1FYoMhJWpiChUiFQui4wBrwj",
  "key2": "4ysZ6deNeEUEeKQUTuBSZrkVfrhQzorTiNkRDL9L5PoJe9bxXL41fMTyAWW8NmxmFDH6wv26tJ8Ctz18fZWZp3o6",
  "key3": "uqQmrCobZ4vmUwFg9MRdFQtGy72uKh7KVhpiCZ3DwisDpjqHV61xkbncJBpMX624Sm96Hjt4k4A854pjySmNuMt",
  "key4": "sEF9MEobrwPgmY1Y95Cw5YupjyQ8jKM4DXmzn3f1sEQSLhXqz2CLwQcw5YTyjbcQ3iFYBi9BhU8whU3M8AKWvER",
  "key5": "4ta9KRUGD8tbEG9XdqL6iav6Zw355gmTv67p4UEqjZJqeMQcFy4duda1E7E34wNdLdJo5nNqQJ8hiuuWhhWpeDf6",
  "key6": "5BkQDUBNa9wuyqDUx1AJXdVTWrXKZzLTVqoKiRcZv4ZPBZU3skUnWsLk2EXwgQU2eQHgq6VZ5K7nWPce68ACSCAC",
  "key7": "vTBwDhgmzK5dczgZZ6dz3VvPFbkSfv3RYcu1hpa49gSFuoDin95xS5Rh8zn26mQ7oQqNdnWFjHhbN1KqX77g2cP",
  "key8": "nTgpNheGSwuVQWYx1uWBoEpMoiExswjLuBbhmgQufzcho5i5phuky43pewDzJQgCWZtUxT69ZHUxXpAYS3oo6jN",
  "key9": "6wkJdS8qYKtmHHAJwuzowZb5yETBqJDcs2QBbQS2fC7DeCrkdGxFqyMJTrNQKy16S8YQY5ZgRJmWJVsVRfieWMM",
  "key10": "3izvPQAgHi9ARv2NzEfrTMogqyo7KwJ37RHQuZiMyzNUzms4R35AWhFfk9mBKdCkc9kYPiHGaS3bboE1cy8DA24b",
  "key11": "5drkbos82dUuPojxtcBZtzHaWaC9taNcrnaT6s1UutFbZ1BrgTsr15qTssUNmKzdU3YD5o5moC2EjLxAd1NTgAnF",
  "key12": "Lu4H7x1ZBkm3k4MTw3EgXqJmQwog9z6kgnQr3rNBRV6WsuACw3DrZKnmRZit5Gpr6bWH8kSY7Q84cER82SgmDei",
  "key13": "2d7UPQwEuynmA6fNtXwwpnmjeK1nCiSCKQshjHuG4RCXQDVANL37E3aD7R5VoKtp5ZYtRPLbc674HkBhpucgzQQT",
  "key14": "4RssMBqgJG5Gwi1BCrk4TuqdHP4c9w5TenwKPb8wvUTyhHSj5DZVZPVyQGJDw87r4HGB2akZjUNi4vjsJDnVoDb",
  "key15": "3srZ3X9v8pJQDgEPMuQ9eQPh3GWzkQhba6wDKFF37omhWTCh2MWdGo5z5Yx5Z2g8Vq811s34Ravdo3HPmHqF2zUC",
  "key16": "2MwjewbVwyVhYcZn2giuqH3vrjV6JhN7NvYhY7Qz1Vs9L1SrsrYd6LN3qY6PDsHwohrzGwFAub5zen853rpJJMjr",
  "key17": "2ejFbFDaTfFhWeugpL9vb7GZ54j5B9fhqB9fTKDVomSW5DKu4QSrUaQYruherRmQGUQAxq6BeVqPtpQ5e2u9zuub",
  "key18": "gHZDTvXKAp8H3GUVwdYGJNmG1GrYaHfqhS6mJ8ayC26sf9GviwSk684jPf99kMMZkFC8i2WoovJ1nLdExKVQDCf",
  "key19": "3Jkw2izzcVCuAa3XvqCe2TuXwCpXLDA93FB5SgxkJ5YoVVNJ2Sr2M9HGL4k3b6A6QMtwd3kMuxXChwSur7NmSj4N",
  "key20": "5LSwbXMJsg8fJXaBS9ieZeosRMzgQitGR1Ha68j7hWAAyhxFgFunJ6YzhTJ56AQpAbk2g8rsUcEnchqscBH9gafm",
  "key21": "VbCCKHgCMmdLVCroBn4MKpChSESf8Ro4fTEgsNJsJ5cCtHcXEpB6Tz6xbS9Qu2td9mFTRvjACMcbTwqYWvumywX",
  "key22": "64DDbgj2QfBw7vMarb2UN3pahUNj6BgU8oKfPxJ2vngyNhtdrq3FzDVyTRm8SH81whdzjQmx2sqh15PbaKFnNgw5",
  "key23": "3Jckydni5y2wUsP43GBJvwRLMR6xgVNnE9BzMnTEfgFdptTGfeSEnXu3v8w3aFDJsgv27bYTVUyFDjGbBpxww1m3",
  "key24": "3iGwXuWy9dk9vpghJqxWAUTjMrjPdSR8GPdGvDH1JJohFvs5tUQ8KMtLKoAd5MteGunxEeCAqFjxW3EEdT9koFB4",
  "key25": "4wpyaKt8qPqmsHD9yc2LJ3dNpt5L9hCmHx5pZdJWZ3CxZUf56d9WjfooRvSGWgCkvqfPXWErP4mSUs3dsoK6YxpH",
  "key26": "aAPPuGR1aCkRDsc2YBkXFh11oZjxKrordcrkUoYuLnBDtYctv9xYAe4jF8BvDWZp5z94wKvMUwsFi7h3SzkKSEh",
  "key27": "4bFSL3Vi4X9v6oEDW6c4K4LhuaRJba4yBUQyQ4UoYhzWsD2eEDmyTYGwexhCv1G8JXqnnyZVBW8ZEgRRbCF8oGRD",
  "key28": "2YCi6HAUgbnHe11nhHgDMgw49qxwpbrJZFDJsrzMrzv8uiYDsA9oEQJHg1QbwSqVtUYc6z28ZLLUQV6Cx4URtYGH",
  "key29": "2MDPG3NtqFiYKtpSF7Uqj4AekU5dsZEnoEWNNcx5WBTcb7pvzkAevuvp3egsKqaTLdJkqEpdLN1qPVVp4BB8jEtG"
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
