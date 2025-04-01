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
    "3XZo7dUCL7mdqkFgr5cyokCSrjNAqATFQnAZ4zSFrFUxhY23Eh6ELsudQjKvfxi46eSbC4SiQh5v217fBHPZjwWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLQAy1Ge4uNU4YWLnD8mX4YqCBvd6y13qrK6HuFmG5MkVZrPwdnXEXbDCoaNFBdeWoMPhWikCuKgWTQWbq8edbs",
  "key1": "4buhi28z89ZQDt7TEpYfkon32T8Ntj2zhhoWfhddFbJbD9v7Wv4EerA3WRVzEnNhNqpy6JyPxdM5dkVNDW5HSLGg",
  "key2": "2M87Re5X3GmX38qd62iJvjbT51njcMoAQaE6NxvQXb5HLpVdTYe8iZ4e2aZoAXVzDPLPejUyUicm9CYEkToCWFA6",
  "key3": "A1mW35KhhQ1bKDFGpXT5kdqqFTQP1TZr8aSLPQqDcHWve6P5GkXwxFpRrkjB4CoD3LoUyGpHcKeLHBuf6XwgQ1h",
  "key4": "2qdKPPAx5XftWh7oBo3DvWXksg8K3BXXkxShv9JF5Wrzz5UYSdwcpaXQU6m1hit8zFYLJiA3dN74mXpdGZT41nQn",
  "key5": "58iRmYxxpJiV4Utnkeu5Gvr9TjW2eUfr2u6BUTG37nYRb1CZed4Q79mCkfJvgr3B3k3rVHZfmhD5BwhZrCFqZL1c",
  "key6": "46JdGyPkrXGWg7x1SHcQ1uTK7u4JTU9uF95Wnjxw5J5WjZi1ZDNekGZ68GpskVy4x6v9BaNqYUDuLZRKYExm9kM7",
  "key7": "RoP5RVVeKWWiC9FVSRAvRMHQSKpw2H4P9cbhGTqE6cxPogG8bSRXG2vqj22vh2r1hMsH1KyLsNMhTB3VsCw7WmQ",
  "key8": "5bPjmLiY5GFdJUgMP6job4TS9zoM4DAe17bjRaNRdbRWb9AKXwkXtnUPotH94Sd4xqVtXmLFhVj9u1sMCZZVteMA",
  "key9": "44AyZWFKokhquDmzVooikMhtgTtJ7iyJQgtZvvg5hwkTtVkQDGLHreKRqiZ8NNx3VG4MzvHZC8K2dtJLg8u9NUY7",
  "key10": "4VXq43pDo5Tz72AmbsQzX6zaZPPhcFYYTQHQcYUHVqsuBeFqwdVodhHYcEKSTFJ2LaQ4dcGq35cD5zLFmvpZQ62p",
  "key11": "5zEMdXWVchez8TwGrKcgZRUp9yoRK3ifig85p5GbiEahYjiuvyKwPnzHzLfxfZM3AYZ6iFmbBfLVJLwmz6Jzaofy",
  "key12": "5mJ6Uyeb7HXAmfPXaSfwWjDAjw21rL5kUH6vyiXFRbmQpZggpRsAoH1Xc9sNHS8zQnJ589RLpefXJmrwKQ1869fh",
  "key13": "a6wMCgzJq9SCmiD2PsNp39j8CPcoSmGLhZJt3ZoueCvkLN2QZuJUhGMwvh2MNJEqf2RWQspRDaxf1WvkvSZUeAH",
  "key14": "4HA17uvMgEFNTEW7fdr1FweKuXzHUWXeA479kWrT9rNoNDxAHc4EAHA1eKVrP7ACHGzn9AQp9GzziBDQWHbsZBZ",
  "key15": "2SzQ5uDD2XVxRhhNFjvYWZhbi9hS5xqTQaauqijF4kgojUU3g5dPxJsjCpJEHkXPLiLyuxMzvvN9ofSRdvR6PKWj",
  "key16": "2UoYS9KP6g4HaiBiKdWqPfJWwxzfMDTgDnm2KJNU26Wfah15jTwXNEDCXHvfd8ccMUFVxX4HuaxYCcTHz3KovFEL",
  "key17": "2NpgzBjxTwy7dgrJ23CmBEMGohxZiC5ucobpjyRfhe577eEprHBboNhgzyqykVgc47Y7M3xvpw5ip3tzCLyDdyee",
  "key18": "4Dbf7rESvGNuY1kwLqfTGjPkr6y6Evo1XgUHu1aCiE7ZGrZV5fZxMNuxVMLJX4mq9UnWdaHrekyDLM7iK74owmVP",
  "key19": "K6SXTsbNsNT2fe6cHNBhxYE2sGny3y8BZMjS5BzAJNfxXByQMcDecU5SPSx7Dz1kRQvtazLaZNnCkDgTySdsiSC",
  "key20": "5EmUuuszQUyuQR3ZSRmwJNE68Car8WfBqDMDVS3ro5MZNHhRUsKoC6xsNz4ETDSFhprPdRdpVQKbSLxdSiQ7D5t1",
  "key21": "4K6KEJsEx2MX7yust4vc3TzkrFQBxz4uEeXknqncsmYG58HtW3w11qgUucb3rdWDQrVoTphkNfW4BjHMFowuMohM",
  "key22": "rR3H7FAEBRfRZXaq4ZDDdBVjntKK8S2YHowcHnzuA4tEe7w9jNeGuSJZUsvwfXBM9uAnWSLFAsABEMmk5SDyuSF",
  "key23": "3xB8kzTBdf8MfpKZJG6TZckMr4gi4iLV3Ag5UEFj87ZBiP7bBofTAnEsBq3r7VTF8aM6MUumz4DVetX1Q6nXTUMB",
  "key24": "X5rk3LThtmkTfLecdcHUVtbwUMkq1NDKNKwAJpzLngkiuCa1BR4bCpTxmJVY1vTBzgC377szyJNyojKFgt9PJMD",
  "key25": "2q3YJaTbX9jnAS3oLG6wU6G3nxLmuxSxE43eRN52kbdoUmrddtw9B8ngKA88pCJA89C1QDwQhCrNk826q7EH3CM2",
  "key26": "5qt36JzFeLdtsrT4ctXeFPzSnn9wkPzyTsfCcjXhDhoNJsokLPEJwJqVhCLTxtSyx5BwoVvun2fVWgtsGuN6c6Uw",
  "key27": "3TnFrt57XqFgbgbm4gNjHJgsW3pa9YQmNHMSRtLxwfHkDvQxLcx9qdHFpkNo33wrR2uLdr84PFWDpCrkWGvb5ncW",
  "key28": "3A6kJLJjWt9SRcWyYKYddpHJUYurqrw3whoGbUqziU5B6qGo66z3xsbTvBenvKFmdC2KJPFJ4LpMQyo5GNizKzkz",
  "key29": "5M13KqVFVYW3ZUe7xFfKJ3tqKLTMtUHjYrG9CGR39RLCUZ4gHDNpJQyScHsnyveZmUwm72aQGuBQ7iugKT4AXSpP",
  "key30": "3sNFurbBL8r73ybDyictLdskaZEkHi4NyKsPv51Amgw4drhm37q87JfAq1FFEfL3Dd6xA3sxmJdDM5nd1BDtdAa5",
  "key31": "5x5suUXcra3Hn96X3KXDun6TymFfcYDLFjrHXVV77pzdaM6cw4S1mf7sCtYo3yF4tVsV1DVsuWUug9fkUVSVcPTf",
  "key32": "2E7KBNAFFRVLWs4tKtdEzP5jHMfA7hhe2MBsvMGWYX3ZGvsqGJTT8AaU6RxH3hT3agfdtr6dxTS94qpksnEdoMfB",
  "key33": "5YgXPEuvmduf4E2fF7HJyt43sk8mLHzYYWBGHrQrq3Fr24aZKHHeUWoyyn3NUjpmNevrMZbQzoicBtYswA8ZWSUp",
  "key34": "4Kmp5FEAftuoiscKEFRSYgReVmVohv6bhZujR1v4YqS6xx7nScFLgLw5Wpz5zKizRdfC6jWn6NCpenUdpwKRPjkM",
  "key35": "4v1Ef9Kmh4cTeRN3ozSrmZ16aHmYJZNf2Pj1iF5fk9pyPst6gcLX4zEK2ud7ZNyrWeZU3qYkTggKnmb61QDkvC6C",
  "key36": "uCCxzxB5PYNJrwa8zpeF7UwFcd6dhRbA6McViKeWcn7jgdtEjHyj7gNoaHzLx9BaN6X9N2jdukQp2AUiPfdfByd",
  "key37": "49zjumJHorwM9ckgrMJz17zzwyBn9zECbcCRzvTta1UW1vLed3vRhPLYh61pt4CC26L2YyZDo6BKSrPycUx7j7eD",
  "key38": "3QFE6ccceebuZdZ11FaBZiX4oXJ7bLvJaxnjnNpnA1FG3QC5adh1kYLFxhqXe9YpPLUcvDJsZhkqkCaXexvRLEZ9",
  "key39": "4oKh4orF78Jojbd3rbmVZ6JnC6dYpmZyQZvRH7HtnJwQjvV15iunSyrpHvpaS6HxzGCVVFRAxQV1XtCYHHuZfEVR",
  "key40": "5Ya76CeTTaKYFD8gYx8kj6WrzXD5pkFCYUifAdt2cxKkTj6aDYKKWEY1MqaWQdeWyepDwZ4NS111bZ57cBjudGaR",
  "key41": "52g7sCTEPxdur1tJk44UKgJTZ47S9oZQozsM2J3URir4srpuebMh6Yhnw1k9Ptbuw3AANTEm9bX9VXfDcMwjBD6h",
  "key42": "5u4fCJzVjhoUjQzBKy878gGQFCsv8GuQRcDFooBsCc1DKCcDdjp1CkGNKG6gdqbPGuR7NnuDjgTq7Lo5W46xjMCa",
  "key43": "SJupkZk5U6VsSJ2dNKA4fpJU9KSzKCYfEptAVBeAuLeKuZPAR5dzcDR2t4sp7cbVqxwFpZpg9ifkKH6wePSeUr1"
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
