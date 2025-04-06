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
    "3yLnSqWwLjD4kfe64FiPh2CgcpFANN4MPQW2nxt5FiUdncmTXn1GkAN3mGSYZk9jmj7g7MnXYeG3LCZyTexPhDAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BY7J1AsZd2xTCuTMVWv2AgH8Xe1Uz4zPGn3QdHi5stQU4ZsRQca9YzU49MUoNKWrbsdHp566oivw5MCGjw3pssY",
  "key1": "2Am7JZF47kwc2DZXiUAQrxxy9xoJiHp6CfAmjpLD66uZ8Y5GfGmJFsDd9iTepV8PJRNyqPZb54Cw3V6F8jn7SBJ7",
  "key2": "3KoVLaynXUWXUmuiffvz3oyCYEL96KvQLBfzKvJVN14TSeMYe7ar8VCfevhsDVUsdbaMb3j97FMePd7mHHqbbYc7",
  "key3": "CyKtCGRNVM6gdpM6aZCeNTqURPrgzJR7pq3vLzPgo4DiV2zRhRpmwD1xo6epPxDgDpSnR8pXysqvjjExxXTUwcm",
  "key4": "3Cgpwnjf27q7Er2SFtwLqiNknnEhDZdSSXp7sz3KpBcmXEbx7xLMu5m6ySqSyP9rr1hCzhXeNG7xrQLAXLFqkgKp",
  "key5": "2ppWSNHaU8RhEBpMbrDH9jfxT7xT4UiAjhsZ9QUXdAeR5HfagstGFgRK5NNPQmtAqGsAyTZxKzWMrTmACi5qNWBu",
  "key6": "65q1tvU4PKWCCJJoUEMTqEeaZmPozo3hnYXMHqn7QrMqNXsVu8q6hHk7F699gpXGifx3BQMoioJQcX3z2UibsTx9",
  "key7": "4TWPpgyp6yMzJ7D8dVBaBrsbciqLpU9ASFcmTswe9ogw7ChE6NrPbpK1KKP6fMGuzkBusEGcirxtJKLSr58m3Sfu",
  "key8": "FN8PbuPiEbF7Gc5WRmKUWwJrJjULM5KH2S6Y6Vp5WUBwCLTVjg9VdVvdXxTKDt5CV5qPw7D4ETjwgHnX8q2TFWE",
  "key9": "5DnizE5rxTvtrVZh1QzGPK8WvviHYAbaum8B5k6nDM5mRruLfLXnnuvMXtv1uXvcCH9M98fBZ93gjKXPSECU6JcL",
  "key10": "2thWKAD7QQ4MPbrmfz9c9tP5NtR7Ujzw4MLvewKY2awQgr23QbKcHYKwcQUW21aFHCmKgYVBDGKcPTZc7nXvDsMx",
  "key11": "4kZBjwPNSHXsixcgKjx6mXmpvJFwGbTC5x11uyYSNtTyXT51EcWg8p2SKyeyuXZSUtNkvEMWm8Z9K86HDzd2PiRn",
  "key12": "324tWxMfXUnAH5tPY74F7yKUhuhvv8WWDm1S7FNrGXquwHEHyBYsZGJcKE61QuxnfiCVJm9x6KPxApcNz3cdho81",
  "key13": "5zL8SZ42EDywxyAkp3GCPrZwbEJDcKCNMDYNCRTfZZdvru89sbyCcsEg6BJrDsTxpDVeTvyA2NnTKAiqj1oiXJjH",
  "key14": "2g3aEpAminiELoAYPprcRTidpXb3vWvW72vqF1SNNn8FkaGUuEszJquNEzpAsp9LGFd3gSzwFWAm3iPhEFBVZxwc",
  "key15": "3TnFou4J8TZP6dgFpxpcAbZRjmizjitPGETo98AP4Tni9P2kQgd7JNjScY4hkUTDvG3irk4J2Wgi2y7aMDsM8Qky",
  "key16": "5cfgd2UwzzYgQEfT6faBoj87aVxnkLCvsT7DfC9yX5ZcNMtbFzmsBMpssVskjVapWde8hfY88MPbR8HCF2wL6YR2",
  "key17": "5nzwZjq4oj5wTD9FLQSw2Y9AJDhnDTVKd8bUuGuQ1TZYnF5bdyUjDxf8vwV6sUshbpuQCyV9Fk8557UVuspTAAbj",
  "key18": "2LpYW9Kbsk1Ctdoj5bKQGqLEWCBebcaAp19wfCAxmj1YeiaU3NJPUKoRHiSBDNsAm3ZbTK3GJ2pJeecahq4jrA2e",
  "key19": "2TGRtUKF5mJmKqNbxAPGU1SsemvPebNtdb12oDhJNSJYSafjpUMSwxTbuZVPJWU3iijuwynBqyDhNi5bgodC3UcL",
  "key20": "3j4DXGtcj1A6CSbeXZSuLrdSpLYdQWCar8bU8qRD4rBb9yjXQmkAjSfbzuQy9Wqm9FixaQJzeT56SDDJe4QKQTYS",
  "key21": "412jCSV7HUTPqLjYvvz9nhSbjuCQQbr6DKUspBkvHzM4z9yTtuTDF67rhABdnP171BtbJeC2rAjVTszhUoFQ97L",
  "key22": "2tvizsMFCyBiKJDDZoge26Rvb9jMG7zFXBNj6kfX8s48nZUkrA5ZPmemwA5SWPWticw1KtoovB3nMY9yBi3R7yKc",
  "key23": "3Bj7RrK5z8kjbaFREmfULCJzfAjF4FR8jcWfgBc8Xa7gKuGp6Eajm7QpovxSRM1qGTfN2nMhDd6BGSMrKsdE5u9T",
  "key24": "1jP8joJ3G7E6ztpbgFMmJ4fwM8rMVPSSnXQbRb1u4yuisjWgT23MfHAmEMmUNE5gYgrpKaqS78UAduXdL8VwgVG",
  "key25": "5ApF7fRKkcrXCR7AY7NxrfoTgvTkzaDh9tqV8rbqXyedQaSywUKZBU1CXr9uTQjjzfGrycZYyM97rNhxwmbK8wRC",
  "key26": "PHTFs9yQxwbtFzoeaX1QA5ZVnayDC6P46JXQUnRxYAE9AazQMEJM4p9ceiXwNH86rj48xXmKGWAW7i3NKwiWzqW",
  "key27": "62yamPNfVXoBu4f4ZKFMG6kP2EmR3H6SevpS2jyUYogjKFH8HTs6knkwHrctgP2yvG8xuZFggGPGGD3x3d24rYWA",
  "key28": "5uc7KXx1iHBJmvUGqEKJ4m2QPwSZyazQT691G8EaNBUHccDZyMSnVFYXUFMDqbjQBaWcxaKo5tWxbKnDcY8hYUkb",
  "key29": "2vaE4qJfX57CjXJUfDtnReWiqNJdgDf9B6yaNE8tssJLubMe6atxsYUJQ9C7AEGe34gxNJhq9hma5RSr9CJggc1d",
  "key30": "4dGNh5dSYh2Boiu3njdQVkjEQAMWbaWJqdE2uRgtqiB4zf8CTVVEfi8TNg6wvxwcvtzpcQMrtgeqivBxtTSQxGbE",
  "key31": "4FwszdBa7mry9bfACVyAhGC4svNqiF63hNtaBEZZxybUbsZCopoh689Zs2aFHFRa3Fm3eVepsj1stFRHY4sqvZLJ"
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
