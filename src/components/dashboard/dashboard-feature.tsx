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
    "5YHyjS4UtNVSPin7WRc7tnM3wCpjUre8AEFxS3EzCT9RqJWDhmUqD1soR9FH8HC9mjSJGf2eRuf8CPNtW5iHghQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DSQe7WeCEWGSjswak2AgTvasgMQGL6VLpzoMCoWoxyYkBwKsJGgUUH81qcAyDKe9WSLTPDGrLZy4GwU44c4Artv",
  "key1": "2CQy3MzMMiKtECpUor4ykWRQXWxYboVYZCEhqTdV8d47DkCJBSft1rH3veNGpJor46oQL4gfHHbeLoZSV6JKGTmT",
  "key2": "3cKYicVFvZNYLPMwdEcRPZk5w5EkER3hdRCDvMZ9m15bCE4MHSNPxqyWo8rzPDx2Urjq3BaHJb3t5j5W3uqAWfYv",
  "key3": "5fje5nwrU8eogkHxjrTUfpNckRLtDvzYKh8cH3KZWM5i73Xt5MYjeaUa6LNmK3p27vMGtW1iUcPPGviwaQ7b5PSc",
  "key4": "Xdbqm6qwCWFQydsHMPc1ugwXx8Uvxuyb2cwJd8k1wGLg8fH7iaGzsGdFXwe8jhBdpoNVsfFP38DKUdREe2iTG4Q",
  "key5": "2jhg1DUoo1TRnHBYcWo2nM73jUy1zosCzkQUdg6tWuaX6jb6sBhG9wj8wPjp36uTKwziksK7ejf3heAbTUJU5ZQr",
  "key6": "3wA3Xn98e3cfSv6CBVn9V2CcKpfYWPLdEr59fD1oU4soizy9CrNvv2zJiDxsJCewLNy1uKzBc2UJJPX2WG8GZA2M",
  "key7": "5fmgaxLGQPc58SAu68AjKdD19C597ch6huWMK32Lg7KEy5vkpjbJ6Yp1c6JWYEhDF7UWhKUHbi57ttfzsgPCNBJ9",
  "key8": "23cSocBoAndd926UAukrcTgMJcNmbMANrFiu8r66Tkp7RuYCHyBgFXR4RABVNFBg7TEi8nP4Re4kpY9NpX1B7T9m",
  "key9": "3Q59KkSwnoQUMBtviTpB2xp68tegkVFhEbPatJwQ3f4bFm8seLA49H6apNHCZHc4y4rDGKXtZqNFw7Fyv7aF9BNv",
  "key10": "4fWkqCMRj8V1tBDgDmEiQAvThx5tQnmDu5mXdusL4HT7qhWrWSGFJvKigkUhHxKSyfJpAvxKdKajhM65d7gq8y36",
  "key11": "5FveHxaaYQp7N2mya4qysmGPRqk2YMi44uwbL92N7h2d5kvrMoWE8UQSYrpJRLyrUUaDN6D2He7YMvR1XgLA7TnB",
  "key12": "2Wchy9GQhUBjTrqNQK8BVGUJcgVwwvz1T2d6QHg9pzBRSQrQhypSBBSD9cwCLLnh7qLY2HnLocsQybn7CyVRFX1x",
  "key13": "4dmkgKaymabwY4Lb15jwXjrZ262aqrLWTW19QccrTYmG73nQHQBBzniM5QARq8jo45Xi8Pr7MwZT4MMKF3c3xa38",
  "key14": "5ukv8Bm7iPaTs3LJ4FN7cJTPVwA7YakGJZjzD4ogBKbVdv5z9U9iYanJ2kee38JqNAwdKk3UnMpB16eA8aiAvSfZ",
  "key15": "3da5NsHBukpAcekrh7x7WFBLSNcvgWMU7oDD3sU8XrtkYWCB3BAZkfvTGGuoZLVvuXRc7opQTeSLb4TtyGwBbJJk",
  "key16": "3AYpvShmhd6ULEZhuzCEdkaJsHVhzAQfkJtR2CCV9VJ8vwjpXzVHnRfnZky4HAxHCEfYV7K8FKNitrJBzYyNT31h",
  "key17": "4kMebV2ZcScRknqFS7zTMU195GHSRazk3UnmGGdev6M4tRRvcTq3Be6hj6a8zjLnGPq8Q9C9AbzxfG5aQDou6bqd",
  "key18": "5Ybfoj6HMcAmGZPEtqDPKeJzD5rehjZe1AER6NxFC3M1Xb1ZRiEmEX5nfKkPb9u96dRyw3uedrGnA6TLxceztcsd",
  "key19": "2wTL6xrKR5ZLhj2tCDpSL1gFEe6UdWThDhWqHVzVf9vbyPrpBGhaDEops8MesbnMwVf5tfqF7jtG8aQQwG7zsLUG",
  "key20": "5Pa9yKJ4pkRdnvSAgNywm1qJgdMF9vo19GYzpRXCB3rS8Bx1pzQw3Z9y3NEneukXhg4bCnSoQpS7odPxqy3HUgXf",
  "key21": "3Wt7XPStvaspBnG7VeByY9rLvYndRYyCkN1AJCc2mr4RkNmbeCuNJUTVt2zdYW1R7n4amTf4upjqPshC8Qz3nTr3",
  "key22": "5HUCTcZ2cBuxf7Wg2cow2ikYL7V9ebjTP4ycrjH6AieUh9bzU5YSswzPjSdvrZL73HEJmbSYQ57BzVAwnAgivbYx",
  "key23": "3rPHwPrnuoCVZ1CCSmFBFFRYfd3ZgWmZxDdMxKzuQXa8xq92bmDeKRX9Fura8t7k7DomUvu84dusMWowiz4d9Ft4",
  "key24": "4JpJnujuMeMpHoiG4TFURYNVmP4TmNnLgQ49EgPtMjjXvCaJoGc4WiA4WTJ7q6iSfTLGWr5WHVqtryFkugafCVR6",
  "key25": "4YTLLFYAh4o7LeKjoP94nPr4iLovWPjtHumGB343G6RFtUSGLRDnAbfPzWjsdqbfvDDbkQGFaR8X6X7XpRKawnKb",
  "key26": "5PG3bYbdxkCswgxZbnfPj7NFYdXbCQgquF5xK1mXGBypvzdDC9LpG6DJkfCKorc1FJc2QkxTLLjLRRnPFTkxNhNw",
  "key27": "77fK6pV7j16LgqHNjMJvJqiW6BznVFjaL2CkcDfqBxXESJhLAdiFJpsa2dnEQ5XvgRehAeNhP8BUCYLrCJuXpdy",
  "key28": "4ywNJZyksFFBjfNRumg722cmW3gJwgmRCJxbfujMQU6tzAgKPQFQg7CWUHBjt6V4ZoQDvxMBjKieGicCZVsuX69E",
  "key29": "jzJi4VK7Da3C4tB2X1Tb52Q2BdMSEKx4Q9gVrty4SX9mMbyQnftmqtSTnHAiyVPB4942kQsN69SGoYWTsSzjcWr",
  "key30": "56RhkP1eQkcK5XFxNEbVHqq8eUPARVs421g5xek7gXQquYyrvkrRRmUTGi6tLLwvohmGxXUbWChoVsGwNg1aiWq8",
  "key31": "3iLvWFjLdhsEWUpt5LMx96Abycmmmp1D2moEZWDVokN5394WQ3NXZ6LfwGstMRhveqftz7xNEyzRHqKz2ZdtVvrq",
  "key32": "3x7XaqUSg1mdmJR7Pb21YETkqFCqpnwWPtsccLmRxozecZAbAhSTApCPvJNQu6ZyhVTqb59tVUK3uwGCCQSTLs3W",
  "key33": "2wpz5nWZDnBtwXUKKmXADgHfhzcpW3WZPuUNXhhrWZfkSWghmxh11FWJdEpjB14gXrXnCQdxTFBzdRLk8GfW4LYn",
  "key34": "2cF1FrPhfP2jBcxTwkXtKAz5Dx4Y2SjGcaaSQoA4KHqHhzrVkjscR78PEaHYNxd87EUG6r8c2GsKp16Gz8DmiyXL",
  "key35": "3RPMMG9BjrZqLBtxVhj6WEM3RgTnGJ9iKwxpbENR48AcmPdceYbhbnudQk3tkcKSnyNpXebdt5ikv2khTiULzX7G",
  "key36": "CMbzpBhiMtiboXxbvyXy8HDnBxnpW9svy1GG7qUYXcSq2yTtqp2SftCdmo6ytPyhy3bM5wmVbmxkRjhzmNskAtZ",
  "key37": "5e1uzv4aNNC8yxFTYqQwxNNwngQHWbMhRHRdJo6EG4mqwu15Mb5NhaRhTJgcEMEGSqMrJoffNY9jkG6wuYm47ka4",
  "key38": "5k63UGwUqkB8CZTBrUxSJLG9xWni8yGpB2vdBRHAzFapmyeYczauCuZxLjKMWA6y31ix6wPAUgv5do5wbWcQ3CVH",
  "key39": "wnhbbK8Zc2Bh4tzSA9ZKD8fNnUokH2KtWBUToCvrj3MqenW92bMW3v2Fv7uvtsU6DEDyJFzVs47ciAR9JYcTdhD",
  "key40": "2Nwt4ZYdx7jo5t4xbGzwiXDDPsPt9x3vVoEosNCd3pYUrA4ZXt5ZTyvydYtk7tZQbKfvK1FX3ZKLFQR6z76GFZbP",
  "key41": "5SefZ72zRTt26ygz8BJwvzxRNSL31MTBQhRkAQ7cYUPBhofag1UwiqKtM5hUhCZcLJHsK8aTqtS5zdkX4X6g9uoq",
  "key42": "2iUB3HssGeNVzsEvJE1yrjdRK9xtWVGY697duNYBCXHhLYqvPgFUgNGshhuXKBTymqKMsLxNb9r7PbmLbTuv4Zw9",
  "key43": "CGLKvmPuqixsoSk1t3r3KEXyj6VMfkywBPByLB3vbP9PhgMEutmUGVwKdCtKtLbQhj9YJUiBqsyHcgmbTtbmzRX",
  "key44": "2nLwHPqiQcLiGQFGH69CsqjZy1qkHgGag7ukcMLroRnVfrJHhWSvDYGpHVwctAWirgFMH2aeBmjFi4DhqUNGPzWq"
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
