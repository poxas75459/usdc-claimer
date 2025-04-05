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
    "3n8cP9Fx9Pqzd4CwVXnVxFnrnBTgzd1Fu9d8tuueu6wvSH2jWSt6Yy9o2nHZsXmTvCCRpzTg8bkTvqBzGT5F2sHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YhdF7764LTC2bBJBDVikoH4voTT7jty65KqjJyF8ggY5zaX6wG9v3ovxTetk4Yn2Sd3pYizBBtd5qzHcfjWBFCW",
  "key1": "4cikF6EJ2GDgew5Bvt7qHGNjoRDMuickCzFi9banC7peHnYScePihopZBBdDrRyLnGnqfJ7EPf5ph7rFqD9XvWa1",
  "key2": "3aESdr9zPU5pVxdPiK2271q3a7tuuDKEyR9HNqLqNxSHtxQpKEZAEZkeGpUZitfWuXr3YzpvShwY3iF5xGMQmzs3",
  "key3": "2Ug1beYQoitXqPnjB9asz2VpbH4eG4SzNjhYg2FC22XYUGih5JmHadpAkQrK5AHCqcy9HDSrEwFMxXUYyDKsdvtN",
  "key4": "fEqx3uLE7dMpQKPmgcWaoWunfPqV3kccXq33YoCXico6PMob2tEJxCRUg1DDEqhTnUhTkvEdSDhSxqfw5FyfMZA",
  "key5": "2xhpghFyNekFAoHstS3iYEUT3Luh9d1C17vbY78WnLKvdS9mFS57kE8zyF6EdRs5Z7U7gupZvEJDAK46aTWk47Br",
  "key6": "4pFPPFfGBeFT8zztong4ogU3JQS6JF2KnDnrWB46Uea8pwqTaKAWmedwLxu4E94hzzyBK8rjbR53dtQbDNrtnvHw",
  "key7": "2Wh8Yj8SgoQygbMRRGKDGDaXtRyAmJzg9CbwoJGwrEE2Cb7cy546Jk61EdiJqGzsC9AhZeiMb9SHNptRuDXAHdJb",
  "key8": "3YgJZ5GWCWgXua6SS5PtvN1MgeRNLp7DDME1jVkVmAppy6SFqNvw2BDDjz427GCxLWnrUy45JTu5DQBa6A8RL3Ct",
  "key9": "3j51pHv9XxXELvFvR9y4c36ySRWaTaxBKAe6ug4AKbedkmPXp8AWyJwuy2zWdQdrE74hx4XDVYY9xgxLUGkPF5uF",
  "key10": "48fZEreNZ8CMvg2ELc5n57ns4EztmViK2gnKzxboWvpirnFj6Fm2eD1RAKarmEtptD66Fj13AbSFo5tZJVusoZhx",
  "key11": "5WUReRc3uaarkB9LB2Y23NazEppVnrNSmg3nYNDpmF8uCSL8PWa8roxGDFpFknrGFoCrcstv5pDzubLBiJPHRCc",
  "key12": "66xq1Xhicfxyb2oiFrR548rWssWkYhYfqPQw42wGeezsTjrh4ocUjNyT3FjESiKqgSPfHWX8Y1zqTJ7jU71M29K8",
  "key13": "4vAGyq54iCwinJV2B9Z6nfDXnBAEDHsdUSuz8sQoKsujHAaSTijLaFvneWjL7k1jhC7DvwUoqhKJcfAn72x2dXm9",
  "key14": "39sbFMYo4PXVEnFTXM7uu8hNKP1A2m8UEyGWgYfaVn6Lcgw22UtRgscNb56WSn7vVjyXLhTTzesQkRs5TF5wg7WY",
  "key15": "43ugfeKP5psGSneqNJX3x3EXjEkPsu2Mw3VdcR3y5TzVZ2hEYwEXuAQtfvQAMPvsQLv4GSStHdVY2AU3fV4hH6P1",
  "key16": "22Pfk9QS9QyjNh18cUBbFape2gfUsEXAofeHb6jsjqfbkMbauWz4wRtYtKku7gzRGrQvCphFjzxm17qe7aGsPA68",
  "key17": "3LRbzm6D9iS7rYvLZ5QM9Kk2EcbBXHFJPzvE7NK7XCCf4pY7LchaK2YkajvmmQoCgkYtsYTyHqZdvj182wY54R5h",
  "key18": "3PrurqDVes3m5DitVYDuzB6xLmJGbYTd7p9P9et3kWPREanQCV7H4QfygFJqNpYgsa8mLxzSiZGa1XVv51sescaj",
  "key19": "3AWo5NCSVKXnr8jTJgBWempQyNeoonoBKd4rtT1MiLUd2DRTtqJHdm1uzdkjRaVhzjGUU8syMsFyJgmY5SsXVqnT",
  "key20": "4118FwNs65BJ1byxuJQ4Kb6S2nNdHdaBw9vJGjSfVhgHAdKeV8hAtkiaRPitFogZDyCHptn6WqHwgd9dXGKNX5iR",
  "key21": "3t3eFWm4pVaxmdLsMtZLvQWPeZwkmzrquH5vr3qXc9LEkyPN145LbcuHXJBcQ8S4B9iA7h2vFDfDqqzkGrERsbQN",
  "key22": "MTZFZBDmKMNzmgsgYAtdcmkgG9cbEcN6WmqMZkF5qdhkVaR9zB32q5BwHxDNmageh59cb4RRtaoLG1gwQJqNcFd",
  "key23": "hPuLXJ3qvwGCTF8wWzRXne56djuC9KxeBGeJGzCdLjfjYd2uAKyma5kgTBPwnrMZW4atpWahyjwDNSnGbpuubmP",
  "key24": "65os6hNd1rAHRyEhmYndMkWD1csT7TxUkxSSBGjcjmQ1q88KLJcXU2jJyk5YZMg3vhE45eWfvXP9WeH8SDi2uYaw",
  "key25": "61LTDyqFgQRf4ZQYqiDcHrggTGNBzpLsrXcVfRHyXTn7YAxx99wzbJGF5HQ5jajupbA2xDHXnFm4eF8kXgPVVp4",
  "key26": "4uGokRD5vYs2UbUdo6P2cVW1hB248JudFaDhUbPbER8aq6aTKVNtGGLtRp5Pnh9dTfZ9Cr4d4XS2iipckSGZ4XnN",
  "key27": "3eCGbuUngx3D63GgxpaqfG9PKzN1F6zydE73h7wCH7mjQw8QkH9iYjQM5tQFxDzvBxC1kuMkZ6zrGpKYjqXSQoN9",
  "key28": "55EckAmEbTTWuhAZZKLZq3ihzVzk8HsfVVWgbHifgmvdsYzvbLMTMDrD1VkCvu5arZ5kwXskWznyYTb7Lkr552w6",
  "key29": "qtGjbGEZPLtVWuY75FMxBhRMZpVsi9GaUrUGBv8RzY5oymP7zQcVWpGMDawTkTE9Fwt7PGh73N3txkY7EGuGap8",
  "key30": "4qxhsmGNmw5we94uUNvxt4f5tucwXn3dmG1KMf9ytXYc8awrj7NwsLVa9ucj3avqE5U34fdG7FHo8vymDHT8mwTa",
  "key31": "5HQqVgRRQmZ4omj9imc5dUawrxCoPTTD9k42Wby4hLHCJXBwP8otbU9u351bvgpehGrAezkUKg7r3DDXMoWzjoXo",
  "key32": "2hiSrWMyBqrhFvuQ3cNt2yUsG4EhhK4LXekWEqoFDYhyRvJsoNofaGfpXCEeTuY4yNbZNDhdCHp9X2sETUHFv7hG",
  "key33": "374CwsLCwSXNE7Me7qGLbvzEWgLywwmK9ZXYYMtnV5WraCU7d82EzwBS4z4zhMd2kJkbA6EUUAwkyZRRhRxScepB",
  "key34": "38QgEVP64tCzpZDH5j6c83qB6Hu5A1vnyMYoUFkbuDNMoJVFDoiDCHLFi6x4Trqrqd4XvUgsnf6kWHumFR2E64KS",
  "key35": "5AyKgRsR7rhsGL7oTGzqDpJAwWKvu36gtPDBLH2ENABG7GqxAfCEv2ESJ5XLAeGDT27vtjCaMtLExRRTm76fTX9s",
  "key36": "gNsGwJcTp5FStjA7p6hGr9P7mXtMqJn3PTDGQZmTvtZHuWrKnv6Ca1ztRvBBGx6Dxx3DA3cZEptJny1YGoatG65",
  "key37": "3LSEYd4Kc5nZDg9WLyXgVPN5p2nvH4jfMxzYxBugPGhazQmyidpZrxpBC33FAPnDudHC1bCX4ZNmPNN5VZ7KhjfY",
  "key38": "5E9kM69FGgEEX8ArwkxRX2RN1BgNH8cGP3KnacNiJfzGxg7REsoknPAHiiK9o7X8X58YKsAr68c5J6khp7hv39K2",
  "key39": "2gb1pqHnPwQiBx59t1aU5GVJgMW2eAHu1Rstn1ztbgk6WGDDworBWqDdNE5XgqUMA9M39Qo84qKvF5hMEXi3Ff3X"
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
