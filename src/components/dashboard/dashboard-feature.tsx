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
    "4TNbhGiZ7rU3hkTtnVhx7WVSjWqaKR5LMMyHex5QoPnfEpjH6SaySXmQJLVmX49GE2hirTtimYHDEYKFTxzWVErS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwtQEcGVrY1htiPcuNYY4GuqrNbek9LqpYn5KLX61kmWvs9zhbQCJPCdyZ1jVzfbf6ABerZYxMUrt2FxmX8hAfB",
  "key1": "2g4FWtkjpuN2aLutu7pTqFfS8Lj9Qj7AYhuxn5bHia5cU6A2rR7fZHvS44XzhTJBxf95maqAtdni9xdbujATjpui",
  "key2": "4YFrazQg4k1VxZCGsykmPx6E6pj4rGFuq44fuFotTpdqSFa7VxWrvujVhxpcnAA9DPkPXfkBH8WJ1ZAuZ1hz6XqW",
  "key3": "4Mt2HpBg9h7Jto97R668JWGUQGcvDG79Gh3NReXL4pNZfGgxrMXtfh5Mtr7EHZs5cXTsC2M7HAHZ3Zx3wAPfPjAe",
  "key4": "5peTY84421DRzvDzoHuMeQug8VMNWuARFxUH6GfBwVzZfcR4WC9wg7hANEDSzrQypkgLKvFbNzPhmVjTFjpyyp24",
  "key5": "64cDiVEbhqpejf3RFfuWgjqNwK4drd5YkfgMhub2zRYdkZ6wX5AGZUQeZL2tRjaiu7piqcsWGf6TDtXDj8jgHkng",
  "key6": "5Mjxewjjn6x1GE23q1e9nnq76eH8WqmMkDUDJhaky3xvpzcDTNsiQWQScBZb3umHMvCnfvm9w4VRXa8Pf68saMjA",
  "key7": "4YuE1V6kWfbocBioJQ5gd51hYWNDacNN9dPbasE7JwcirLfMgYmWXVwx6D8W9ftPyhmvPkoYiBaDQrFU36YdB7zE",
  "key8": "AVjxSr1cutkbnVNL1rYmqDpF9fYoXv7RsV2gi5cY7Wz6wGFeNPSQ9m3XjFsZsXumTWi53aAoLKhf9AgDvf9TTwC",
  "key9": "3byVbtsLKmj1AjkR8uYjbc4qFuPzYz8mjNHEjhjAo8PkYEXXVckuR6LUoQPgm2vxvayUDiyfF519YMBcY7NecZb",
  "key10": "4GiBK98MxaxaHqd6E5acimW9zEhwCY9YnBgNJkXYeWKHhi6xL78jFebvqvRxK2naCMgNugoVaBqWC9fo81CkmbPh",
  "key11": "5n9Mt3JFAUUjiiSusebmDivJ6m2ey4prmsLtWP8PyDQCi1iicD34vkmQXUJ9DSQTG4AdEnyTzVthmL4v1QQWm38F",
  "key12": "4FfoCSrFbA7W944fK5CvZa13FkKJRXf639j153iJQsEF28NrmGo1v6F2Gn43oNqLaCvv3dSTg7x4jd6u2BDCjNfj",
  "key13": "5fugxeAk7enG4AWkpDYUURDobGVDxfjChJRcT4Lx84GnZ6xUzDWtAY9PZKHnH27NQY9bpRZKET1XaMCzBJ2Ht2mJ",
  "key14": "2uZiq3tngtner2fTF73jQBmXkx5ULcd2ifPyXxDZQE5hfPFgdzMRJMhHfamNzcN3puYpt6JiNuxbExUPZRk2zRiY",
  "key15": "584eWfGYucwnR55VTdWFRHUXmdtYzD4PbxZyDrB3WMR7S8YAaQm4HSAsy1GqFmPpk6qPHPwU7ukprpMrmeWxdAYX",
  "key16": "31TzTP7Q5rWGGctSSQXp9uMmdkQaXApbkMW9xtNxz5M38a1hxvbhWfP1ibRD21n4o7TC8yHoWTD5fqsyCCwRDKEg",
  "key17": "3J8VuFQ6EkGDrrQzCcY3Q79tUm3dWq4CY8tyASD4L9PSezh9CrRmqomY1EudDxApDrzmm3GC9LonxbmgBK4H5nT5",
  "key18": "5M5uSuNTcYpr29kheg5jcU3AZFNmGJsATydX7kbLb3DAkcVFoe4mxFF6S7QzA2m7Xt4ya6y84J6MrraeRtQRcBXV",
  "key19": "4yoE9hCAAZgYvh9bHtNruBvbXZLfXydCtfJhiPcD6gkY8tuZsVegJztP5eqLZufbgwvKUpNP6ubDgdJQQ491BeKe",
  "key20": "4jVBsSP2rR73xUCRVxW75q1xbKy6NqyJexHaPKzbiexTKuqa48cswTt1VarzRfCi6s4HVJBA5bzX8VHB7WBfKP2n",
  "key21": "57raZaKEh1uqBqUBfuGnMmR7iorAPsMTCygaS8YKkXEQ9eumswCvaZwP3yi7Jwpe5MN33qALzuXFrdQbzu1BCYcT",
  "key22": "3XRGdx1GuNkezkt74tgdGC3QRwEadKY84jzxRBQmYrfhRrYw8QWASyyE6qgksqTCFEvz2YKkzWRbzuAwfrggcUKf",
  "key23": "5SK8B7AJ8RtDtvwPKLC3vrRzKiCG8cf8Hdztf2mjSVWnuk76nQp22ZUHXhLooj6HXEbnEtkTZGdzn8YzF3Ps8H2s",
  "key24": "XFx9nbyPnwdmaYqLTS16EmNp3s9VwuUVE5bcMbrsnkGGxFQCBbLuJB3vjFpE9XdAbyu5TEScS5uE7LMRWiuu5xR",
  "key25": "2NR8bqDHvXdX3Ht2F8QEHjx2y5paKJsDoTW3PpwQLiqTQbmvy47ZzAD7cCjNWUpoL88mTefoNdioBpA8pKc3SjzJ",
  "key26": "5pu1mNPNg1Rp7GLC5RV4cEkGo2jZY1Auw4QDL5EZZYpdgr6K7L9kUSegA98fecv4gKtXGqrXdZrY3QRczKkAzfMc",
  "key27": "62wvg1vLbV92x8g6qHyR4zZ4jjbDFQKsADHfNKiav71JHaGnbJwR4kamJ9hNd8RkXyjxoiHKX46Nw7WBugnHAYsc",
  "key28": "2JhREUvvAn7jghwsEPuhaMTDn4eZZXXLj9mU6qPrWwUWDTfCRZxDT9arZ25ZJ1zoxsm2QQBQC9jtaqujTHnKCazK",
  "key29": "2ZqEsPd89KhSTPRNioHitL9SBjCqPFh3tyqAtRXmvFrE88DWbnD1MfNsXd8Wb9t6gKQCjs7aC794t4YY3Qqf3dPP",
  "key30": "45xWBnN5Cv5PG63zjv2Y7Fc5vRfCF12mxhmX8uvS2S5yp5vHDoHr5nXyXRFcrMKb5jMC537S9eTjtg7XNWnXe5CY",
  "key31": "4aNds8NdQek2wCU86JV2aaQE1PsLMbSzsCZ4B1MAYkEvdnqkR3roCRhfHMETgrWwegY3WsJY3LQVhmKErCcbK4Za"
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
