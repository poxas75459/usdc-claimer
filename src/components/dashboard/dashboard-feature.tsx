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
    "2LrpUVik5tvdRGF7Y1Kx3qg4UzNc5utDdDQsJsQgoRzwgs2ggufy8nogZmHhYUC8shY6eNX4rjRAWMP3ohnBJLMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9SVA4JFkTy1uwAz5JqhbAA6Qgt792B8zRg9H4PLbH2yHiNKnUXWE6iEzaayJU5VGH2mj3STgHrpz3gY8Xt2D2S",
  "key1": "4U4TYn8jBQRNrifpckhSrsTeVfvcoSG8Gf2gAumpx5Dz9nkK4MfuZWEFoDiJHLaRsrWZfkyhdnJqtUCMTSwUx38b",
  "key2": "2S8iDqSY4PYhht5yETqYcz2ciLrHHnFMBgyH1yvBqkLKfWwBv1HMyN2n7pgiUz74HeXQdFtwyMx4UUhWm4kBvtDY",
  "key3": "z92r3yvgxh4HUC8prJXgQu8BmmYBtt7Jy4AmPZMRkEWHBzo2UVNsbgS5RjFUqt3S7w4j4y2xaeRRAm8M6icHdkj",
  "key4": "4isw5kqNGzkjhgjX8z3sdzMauBt44aaJhZ2jVt1VxCiimu3rRhWBCdD4zrL5vEsMtDGWouyveqiHmk11kqDrBXUj",
  "key5": "4a7gsaBJP1JWqaFKFgbjodyniXtggUhWwB6Dg3wpBTHBMmumyTBuAz3Z2ehxYz1kEayzCrGSsrsFYuoEjFD7646u",
  "key6": "4zopxGc7T65mbzCe97rCgDprYZ3mjJ29jxEmm8qFVAHEqyHVi9o6pkrdqjNCpCxpjcBhyD7GyNDsU8CaCacXnisp",
  "key7": "2wPhUQ9KcwkH2KnBJ5gQEx3gWyBYm7ZQ1AcaEaJ5KsLLYPo3XWJrcvC8SunfKkQtgLck4CaRHyQLqR5zTFkiZQoV",
  "key8": "3uwTjMpHwm741Mozb1Ji3ZqbGDgaEfvNvvmHebVm7YCntNtsdpW4pmhGTKACMdWPgjUmUedDkyAxsmSjvhrWYU7T",
  "key9": "4jRBGQziZjuM57RYzMSNbsxLXxBcf1hZ6vgwe7Up96X93mFmNzunVeahFBkhHpQW5inDbZutrAUfXi3DEkeErUBT",
  "key10": "2DexwCpDuqBAoKdevAKAiU7E36U6Fx7m75LddsybRqM8k7EbghWM3YotYQDWRERRgd2Vg3oKDfRqBC31y2dZxPPk",
  "key11": "4zsQU8APFYt1w6j7vyRvuaz8XBxb2iYaFCwrFyJumEzAd4KER9oYkHjmfp4w8VfCcNKD7dd9Rq2xMAeADcTJdKaQ",
  "key12": "2x4c8a89LkdAjEfpFrfWB84avoSH57uPyQV6hCZ56uSCdWfHWiPRrYBTtA91VAeoaadjSj8GbUYm9JvxCwZdu3or",
  "key13": "3ScFFtDUb5uytxMxJSwNHAhHD1MBeme2VW4Xkacso9bYgTfRGecbNt4GTPpfTeipMB19oGYCmhDTYdQrhmdLykAD",
  "key14": "27exwg3tYudfgKzfu9Db1p9oeLtQ69jmEJyfrum14CNxcUizii9pH2N28sdNDyzCVSzxxA3JTQTv9QGU7M4zncJN",
  "key15": "4y8TjnBdmQ3ekkopbQk3qYufCNxcadH7GiZE9tXcvS8jr7hECqfGrndYxqRQpSqJS5XXsW7SbemyeiSJQEw4tfZk",
  "key16": "3XTi2eA8nfAjKcGdwojzPMKny9RHYwbrtYTxZUZdeiG6UxJpc9sjvi5mUZK9hJyR15u28s5P6yuzPUiXZ36SKFwP",
  "key17": "4esQhpVzUxhQhNa2JKUc4CY8jJNQrGK9F2aHm3zQ2Bxyyfy92GTNPRTsUKzhBgDbjU6LSvnLtvsLpXy9Q2QezH2H",
  "key18": "2WQKk4jiUaXNyr4gwGvVY1dhmopRuLheNkcge2d9y9YUzAE9BTEBxTkgFrEv6T5R5DH93gPkD6WZVhFuXYg3Nyi",
  "key19": "57smU1ofHuZHbLmtRtAkTMDPBJpsdiGWH5rAW2avQc2D5y5bD9CQZK8E6menHTD4bC7VdepFaGDdU9VmHDHo9GZN",
  "key20": "bpj31Bv5uoTnoUVAp4Dhr3GvK3ePJxmhGh2hWpykeqNL8XyAwNUxoPfNELsBd7PzMENFGZUKh5HTQF6gSHHBjmJ",
  "key21": "4k7DyewYpNRQa3NnmyBRqwHr9dDdXtEwozRTP9LFazogcJC2ZgZw6QXQazAxFhqKPN4TvkUFRnTwBuGtuUXePZwC",
  "key22": "3EtbyfP9cGg9jGxrNkjRrFVLMxumsvJBssmRCbnNMiVcvLE2hByVCEykhABdUwYsoHHkZB3HbtWLNGfEX1kFR8Ye",
  "key23": "3B6Yv2kzEQJ8mjHK1rS8KgzXo2YxAX6zNoDS7nMn6eKtQD1hGhg1WG8zFyVCFa6fVEWKL2uL6yB7emiDAUVSFqN1",
  "key24": "3JfkDzpMzUHuigStegK1tQbfmp8cRqS5vgUJZrvH5bqNY1Db8cGwuPx5epaMwaGyn8tAzKYH1seqkRGsDMeBd5JM",
  "key25": "3AYRdtyNCA1kGxT9tAXC8vbRu6kv9zxnBLdHwDRBTm1QT1tuBubnnL36raW4754bJvPdtK6fZiVgRnmzrVk4nkbu",
  "key26": "4xwFQBqaimGgDqi95qBZnuGjGbzZLtdRKRS7Qf9v7XwC1u2vykVvNia2egg9okFBmxeeKHpo2WJan7QpRC5ai8dt",
  "key27": "55TLy4hSz2t4GgPyQznwEFcfrk8JnU1rGygBMLp7UoZtWW31831D1T7Z8RtrGTpp36SRJB6Vc64nvR7bbkMjQ19h",
  "key28": "2r7AKT8wnF34ABQ997iUKA9kqV3q2szjnuyz5LEtkfnRWMmVoMzF8wXkkUysYy11T9FTakit4AABAuMVN7NQbxU",
  "key29": "2ncvZ4Fj6RnHZtwFkGK9SMvFstEZjv55LgXfPmaVwuREpv1zvWh53Ed1eCGbPh5XU38PxCmsRRfTnftXmWrGbGFQ",
  "key30": "38CMR58bdWUusigMsqb8ntCiZQ9Cd6vqzqhJh1T3N9SYPAJq5Pjko8kg8siDgbad2YSeb6zf2pRVUdMMdbaPtTT2"
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
