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
    "33D1A2TUk5M5zAWzX9s2xFTJwuXNX1tH7eHie6RxJf8LxbHC9v7c6BwgLbEWh9abLaYXJimckNxdnCunawkY9vZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjsjZ51GVPqBobGd81RmqaZYVyFbiE6hj8syWhyWo1ZmTbKk7RqnP2cdfvdH7Qhv15DWw5vkS6xRUmYzi7cwjhb",
  "key1": "2kPo4chPohp2L5QMrRtMxCS3zQbYQK8GwzdRW3MsvGnF4qmPQfTN8ZUAdoa7hZRxTPMvbyokEYUxTzm39yZpsxBB",
  "key2": "e8ymnm8rvbYAWV3a8PH39X7KLReYqhHuvLxBxSpz1JRq6wrpPRBHbpmwEobnyJ3uhr1FN9JYL2aEfSWVmSCG4zd",
  "key3": "5VYcqDXTQ2FhD8ozMyr6wcMp3ruWgdeLqnvN8KinFDcfgHPSCNSf5vnsmSNayrBQjAtKjpWoF1tsrnaqqPCveSxA",
  "key4": "47UyTmwvQm8jAfZ6mcEwa51rpw5xv1EPsaxpE9uNEscEVo5qvdvggEJExomJZPWXC9cJ7cb92CW9JincRf5f4E3R",
  "key5": "5KBmUdVmKC6nf362euh5X6dzDrUgH2xwxFGdXjqMRBZfqTzVqejqzyrNGPseKRZpVp8GrVncQpzMwMVsBQb2526v",
  "key6": "4Ho3cotBGcfzGjd6b9WST1GRRyr2686DduEb47pn54EsTpXbwsXRC9Hy8bunrXsnCrPMKSxfQupBNiF2x9mG5RK5",
  "key7": "mJXvKh8AP4A3RV8i5gBnthcKRH9qRoWznVNGrDTvE1Lof7X3HvG2cXbsaZoN2hZko7SvDqLGmnQ7CU3PEjq9vVi",
  "key8": "54R97yU2CCMyB56y2s7B7jdUVhrudYh2fRpi8EzbXRc8gvyTVyHm3uEErXvGybw5d5hRgMtMtmFeFqWUTPePunPg",
  "key9": "2QL8cCe8TvC7mMbFMBEYg9LSVnZHKX1yg9UBE3M758GFuVNAKMH9v3ySdxb6F3Cye5G7wV9Zfs8xx2EChiLct5oi",
  "key10": "4uT7wr6iHGRLYcwkxpipHSifK6Fuuyf4AUSNBmyohiSYVFHBKg3ChnctoMHurywYvmywX2aQgfyM6SrEWDGMnMkR",
  "key11": "3NRwfCGuYLsWNZ5GxoCumWnDYiNjgRT9gqzqq98pSUoR8tgznV3esjSGP14L2rt7i8zGKBz5LmHjxurwtULqgeZX",
  "key12": "RLQPV8dWEwRYB6UkD5aGzsL7HRRcTvRvXSmDZDwGKUQwRWfXnVaEi9YA6epuQEfBdR97Q4XKr5oXh2Uw9JAsttH",
  "key13": "3jD8hGhY7nT279vVzNsX3W7iP6Btks8P6sa2KUPikiyPyEnLRbMKi4Koz76cCzZxHJyASn2vxYXaz24kMtqzwxNV",
  "key14": "3fKTqbABfi55KBziuzgddepC3jh6sWBEiXpYAupHk34WHx3EEMs8wSShhLhyi737V6FnHs5VbqZeHCqtUgH91NJV",
  "key15": "2Z6FKJgXaEuFpUu3reidKLRes6HWUq8wRxuiLACKTzp14SU7GdzhoJv3AB4DkdaWWzfNYGPtcuFq6Qx2PtrSpGkf",
  "key16": "3dh4iiMAYVWkJYak2PB9M4aG19k2AnX8NKL4efuYxUc8iBig19nsZV9NcbPHUis8tJAtuqaCHTGQJfmXDzm5YdzX",
  "key17": "4aBPs82T6m6iGSgzDeahEGJVmQftsr2svHZb5sQH91fcS5PrA4Zmyfq52YqLn26o18vTbGUv4Tn56GinKttKDR2H",
  "key18": "4bsgqnaZCixh9i3vQ1m8Ax69uTttbo2FKcKJqFzLZoduHe3Vac1DweQaNfa4fvCqRhfWrjC5XufFi9ooHtcbwKMx",
  "key19": "rGVbFbXwb3BWoC6uwTG3oizKRtN27iNWzc49LKu1d5Jfo5CmuWfxhr9x7v3LUDuA9efmsrzRmAggmyRZUfaAgJs",
  "key20": "SZ61FiK3rQWWnvhMv8BBLBSx7ky37Gn6cGD2q4dHrFxHZ5DPodPAyWsheSYhzFxbkocksiaKtsM5vq3puQgszEz",
  "key21": "5hai7k7bYsjTkeU5936WcXsEnmW4TtRojtXHzb1xoMaiGN7ShfS9LgkgPbRFwRbfVZDZu1DqFoFSTmqqNzAoa3cu",
  "key22": "55WftqpGaZasxcGwjr8m3BaZs7Ed8SAPo5Wu3zK8qx3LpwNtsCUz2uJ2j19dtDe3tY1UXMztPNm1qqkBjYpDi7Fg",
  "key23": "DPfMoszvEUqAECe1MLhhvLkxFMCgRBF5AoVJHXn4qYHgkCeZpYUrCLHcL7F6eqW63AdYXpjoT8b6c92KQPpfiQW",
  "key24": "36cVALH1QfoVf3MATmw6E6fSwx9kyVBhwMsAVZqcpDo2fhZkmo96Zbvq7JwNNZiuty8dqFLe1NpGMRBsjgkCfwS4",
  "key25": "3b2C9za11pHrFuh7a7t6G2XRF58BQZrcfXwvtB6eqRthiPSPKwKQS5DoBMG3xkJjvrbZjD6uv6ahvhFLHH94fyTd"
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
