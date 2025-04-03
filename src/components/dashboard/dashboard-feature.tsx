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
    "3fc3xTgGrEMmhM4VEwumz57YzWN1TvFB6p45h1tErZVzTg9RnaWkBaBAWguZbJgu2cC9G6a466SxYbMhjJka4dEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YTrtL4muNvUPSKYyA3P4e7ycMkz9CGdmGcfAvuFRgg1kR3T7kXefbb9kwAycxkVyzZXNs84jXyUYRWEDB4mXsEj",
  "key1": "4U2osbNvh7wLrxwdFebMLz4cNjoXkw7Eu38skEGAk78ir55bDNyDckSzx1f7sXw7ELyo23BRT7fQoxDTrfMWTxwe",
  "key2": "aMHaVYefHdvTyt7qgme9ykwzsCaHL6Y4GxPjLKLsUM3fVnDAd1G6KLFjzAvZDwyKA1J8Kc6sLcVJSmKHntzynnY",
  "key3": "3itesmvw5UHT9ocLfQh43Zrai3oZs1PPvAsBsXrxyUdRNe1y11fT5J3Uqursio9KCi73Yv16CM4LFxFGANLzNoZq",
  "key4": "5B4BX446bdugvQuiUmbFGsACqDbwqmKgBwoATLjqetEoAsM36YH1KpTAGuZzWNRtm4Zf4uf75wUFKjM2ycT3M1De",
  "key5": "4WLbtgBBEZX19zAXBfAd67foBU3Sv5kcKzTsMaAG1dYuosJkQzTUVXigxtcAgByRB3wqh5WcCaghhNYD84MceLeL",
  "key6": "5gvJZ369SmQpQ2AkGnAdyUKYPLSuGjsiw3gXD38FkoejyxmQtrvq6H5P42rFBECRkw9nQ2dP9B5fVXQWehA4FVYY",
  "key7": "5nrfKxc5dYj3pqzEYnJ99EPpJE2A9dwWTHtjagxBaxHHVbWrfcaSrMZ3DnJmYKdUYSAvf2fvdKgDp4TWiaLkw68d",
  "key8": "LSPQB1SRVxH3ec41y99LRnFw9CcK9gWPsDAPYqnzKno8j31bHi2bsEeM2nsSgrEUMxENLJRNDKAWJaW6HyL1wN2",
  "key9": "4JqfzqmYiVzv6fhnjMwksnexF8VDd7mxsokA4D45v9mEUzxuy1YS6EiJdJXjb9ohRyMksNJBXfRZwa3hnhy1aywE",
  "key10": "oE6dm2jDrMnFbg1DeoZsAdbm2fbztioj5rq6C1FFwZUatfKGqbXb2oSQtnTJY2UqAuiqHtSKHmsmWBF9Mt5JwbE",
  "key11": "35ZUS4sPcSS4aTw9xndi182EChHcGRZempJLam7zoKFNuzAGr6WGhdez3tcmbDRDnXGCELzs3HWffD9khcH1mW7d",
  "key12": "TVbcKHWPDUgesYc5CZ7R92uLbwfxjyn8yccdcYWpJCb6PSMdaJNe6JhuUCgwGcqMfZEzaVRrX95G4oTXBQ87jFW",
  "key13": "3aW3vs1fwiF8AW5yrLV5VqiVYCoW4h8S3TDQudrJmuUfHCCyRFNPktgSx9D95t5hNqxKAHgmRHkBjVaaPuRn8C7R",
  "key14": "4iDa3iCuSW2eyqg11MWZdNhXX52oPhmkphJ6QxndyNLQ5XiaAyyx5GiNSHd88QDTEKzQ6DVhhT5vmrzUNN5NvkiG",
  "key15": "3YnY8bieasvD6n2scXcD2ci1rsXqJyowFdhNcwrvPBWAop5irNEV2dz59yXgViAGASEmJ5n92uVsDNerZhszpP3q",
  "key16": "3TPdUeUv8MN29FE9tg8bGuwVRSyo2roQGNqc5RwBVaF8xKYoQajmAa3YPCYcW5cUvWZKEnGns2kmm1QWG8Q7kukD",
  "key17": "4Vhx5HAHZYeDhXK5fHLFsJPQxe4YK9NVLnKAfVsE7ZAuaWiihNzvnqLVEseKwc8CwoJq8h64xLcHkzroYDj5BZbd",
  "key18": "tmt9fNTVydQppE8Ffox4VXGkFFQZjCLiYBtvwQRui3keHcEwq97LzCTvWZDDFTdQmMGX5KPghtLZCLGAG9mjpuj",
  "key19": "8zd1a7cqMhFaB5J2g97ddjM1QtWkUpMfRLmrRtc6GwEdNBDaf2zyDSSdq9CQJdfQb36R4ZVnKqgWQrg4n29Vx2w",
  "key20": "25t39rZTNtG19uXUMnHQtxVZf8bp4KWRvXNEZMNN3a39KmqFphtizmSZjCxea3Udj1ARSHSwhgcxiRrmZKadYC4o",
  "key21": "3dAdy2peGHG9N9k59iJsjnMx6J5KpLCKDi7A85cXSnRrUR5ExyHRj2bYnVKuVMxxadJCbRTn4xZM3RnS8HJehwg9",
  "key22": "61kWZ47c9GpZBPbwL2iKCgjsBU3Y3fKwHF3ss7yCHvBUUp5gJx85NLTcZS6TRNkDqqgtPLZ3D6KeARZQUbiaoiry",
  "key23": "4984q615FzonPYmKoYzTxPbWcAhSSA1DF9W395j23xTwCvfXXCqvhJEnJ22nvLqbqRAVeZD8f44dDUiqfE25aGh",
  "key24": "2JfJ6rAQPti9hc3SWmHAzDVm1M6sP9eTuK3CsMAB1hDV9jtva1cQyE4ECh5RQgAqojbSZbKC59KpGffxbnA43qeV",
  "key25": "5ik5h3rjj1gxuSBayWWr2roQpRuEtQwaAHJTZHQYDd3ZT1wFz4A7DZ49tXHEju5KcnF5ZAXWHx9zSYaejQ37LALE",
  "key26": "5QhHHUUPC4myC1xLWTE3DuZkP4WN5aYhgz9bPU2nCCsFoz81qfGu3y2b3vpJNmnVKFw1itHQ7raHnvSt2pYdP8Nw",
  "key27": "3gdwgM1i9SG6n2rB2Ziv5kGgJqDHAht39CHXGiyQmQvGD1sndqjRmqhaasJAFgX2NH1ZNqsC3QtQSp5Jo3DPvWfw",
  "key28": "JK5PUXzhk4273gMWqEkpPmZ5mkzcRAeHCFgBiKCxzms3UEAGhL6wJ3Va65cLwUJ3eBukhRBhi9WzJCqDANvV9Vf",
  "key29": "MBAsqUYS9F5kd7YRm39Sa2P8ZkaGK99rUQaVPaQHWoPhJuq789s1uURWjJGVrh1udojDZpL67RfpNEMJN1pwPGu",
  "key30": "3Tk6LdtMdYub4x7bHkZFrweLBfgS6SNPN1MgB82gph8WmxbqdCBopMBy9MLhny6uKJWacBRqYqBdwrLAbZtPEyRn",
  "key31": "2aPbG1U2zPP5XGAZNvso9av6AAyj17seEpxtuuC7Va6TU7WVc1qG9PKSVjzx7t2FnQAEgMFo2Z1EGRVw3YkAD41x",
  "key32": "5xfRV1aTthQYiswLsBXYVfon55wYs8ETna62ZJGBS6jSqrs7qGe6g1Fsi1PDxRpEtYt4snVGVB2CxpvTfcDZHkKa",
  "key33": "29PyYL42sCTb3mReAEbxgT2hURQU3mxzEUTgkb6zK2noZXBk1gxFJz1eB9C2hsrdr6oc2Ss3Npq83WWrg2m9z3S6",
  "key34": "bzFVmvgtvDpPYBKY98cpiL893BqTx61Rey7NtpgZgiNhM4mFdFTudycQ6RxRF8m5xpEKMwHNynhsPoa4ZwXQX7f",
  "key35": "3AigopqQog8BZyAdFxyUqHr2uoctZBW4jnhCKrcSuJR7nbdK8ZNa5aySeXKLcktgjhC6yxbrxDtHhpbyMR4Ym2a7",
  "key36": "3N4QCn9tFNFhqknaZtG5hHf4GSt3keoaAXcko3GgR2sqZQL77efTiycyBjcw5zkpLcE2KLFreSyQrWqMFbuCQoKi",
  "key37": "44qsiPV2yksEWKcPS1iSqha3yaVgqtCdqhR9RR37ZMyWUVuLsaXSy7zZA7wdB8rAvrdEmuVmWjt6g9i1y6oxq8vq",
  "key38": "4GruBYo6VyRkRoCYaDojwJCKjFyCbMxUX9Z3piqQLYEgF2xFAEiVYQ5Ye8QQMPAXMFqRswxSAuQwLQeuvVBc2ry4",
  "key39": "2Tyxy7fjqn9MjCNYLs8GqoJMPF86KapotFAuv1avDVqeWcWq3zmTra2QevpngTjboeLCjRodAHiwFFcUanwE8acU",
  "key40": "38kk4jPv8KLdBLnmzH8ZuKdBBrxUjiSR42LyVDXw9mCuMB2fmzTp7KQweLuJLiYMSF79J7iFdDcSBAksdJT6HR7a",
  "key41": "tyZbcUk85U2KT6F4jK16dv1n1vfF1JcGfA5Pmpy53RJr8ShLtySeHU5pZyhHxkiZch2EgoEC8gHFqPptw89Zz4R",
  "key42": "3gQRpmzx7Z8mKmRqCLmL7gxNpMUn6FS6KpNHxyE5T1KhT6HHWHYhmZVii8ytLovGsgr4wbwxpRmKpyDk95HqjK5d",
  "key43": "2xD8BWXy1fFThgyyRdGtcxcwAK7jg7ncSXoXi79uFX3mB9v9hw5nrBuGtdqRXswsaYrq7SgUvX4Yz8sYhZAUG7v9",
  "key44": "25ms3xgsfkhBANipW2N5fvetBkivSpQfHUXJ8A82kMYKgdJy5M9ukDmcDNceKi1ZJRHB6UGmRUabpAoDTYX3CgXF",
  "key45": "xJY13BtopapvMetS8bY1vApqezhNLRVuzzxhUv72GcMh3fJbY8b8boxy9i3vvA7saeJZrsxe6wktA5miWbukqrs",
  "key46": "3zMPyZcT6jb65ny77mHRLbdrJ4xirRDujd1UgzmAVYcD6w5STLtpCUcmTGpcgXjPLLczpJ5eNQo3sNmBdL5EY3wg",
  "key47": "3k3tAmG9U1z241HWXtzZ2qUed1PLNgSMvjhtNwdiRpNaJQ9wCy1FD43zc5pAQyqXmqKKdTkjR7fw7J6DdzA9PJ45"
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
