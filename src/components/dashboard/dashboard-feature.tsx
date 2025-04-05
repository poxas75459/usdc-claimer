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
    "3THd8YCWZ5nwp7LHQUr7D91Qnz3Nzro7ef9aJc8iFaAGRQgeDQdR3497ni8yTapuxKnhwVgxSKLCBRPh5bBx6vqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTdV1vJHzyPsSxAfXzsHyYWp55z9rMcuxorV9vPXXMEKf7YG9zKi1ML1Z1QfcHRsLTa4bkqgCAU7FZU7Qp8NAiS",
  "key1": "24Upc7cAKATmWgPzMswBMAhSV3q3AUD9hcGUrGdn7Effs6nNNhyE9XpJuun1Pv411it4o6uPfpwatFV5B3ittbXJ",
  "key2": "4umVhpgabcasAhqZZVYqEeiQe7zFyi5sSpPs49zw4hUrLGbNFCKDzR1aG96oU6s4c6K6EPNoG9nfVLLWpQZ7QTeh",
  "key3": "3rB5wY7Uau3qPEN13GWuscheFiT9Lc3y4F5PukVMq86AtzGeoH7X56aMdMqk2z9DU5haU4hdzUA4VDx7KUcpkAJW",
  "key4": "5WyQ3rCFGo7kNc2Mjrgr9fUGHvxv5nnhYvEubkJBrYV9uXs65L7bXC6R9cVtLt7xJ9Gv7zBPshbxDhKhd2zLRDr5",
  "key5": "2RmjCMZpZAx31SMXYWgTKiouAkUi1avTxHKe26JbN6JrZzKWZkh59QojPF12bT3QbRDnRdDQaeXcznicZRG35J7S",
  "key6": "3mGLVyrkPzRsZ4wqWyPAU6i67tbXUNaPJSS4Wed5JL3oNv8JryVpYiD9gpuYVs5gBhsZPxkoz84Q4UJchFmqFvrb",
  "key7": "3eKRbcsbqVjFs8zos5QydxaDnudXNazTJtdcZvnBx3RhKu33S4gLX1WRju8EYaT2UGRayS4xrJrDAojYJVMZXy8g",
  "key8": "47Jx3Pv3BRrBrzp2t6wFTFB9B9h8cHEKSEi6iPjmL2YU8b3LfJ329rTAJ5haJ4rc7P9BxFGWowYXibhLdsJJRrmF",
  "key9": "5zinHeBUqXXZHuqjSUY51ssYioHRq2ZZZqWq2ATgjMyd7oKcW3Ryf9XhUNqKt8KHFiHXSkYZyBPjYbgHVNyLtpBR",
  "key10": "2SMSGwpXwbuB27ivoBFNWBds1YTqkb9g2vFeL9LdLfZ3EWBtTWVFqpJDDGih1iBkonWdXLLurZ1sYtsUU4V6qdJW",
  "key11": "59qsWsH5QyfKX3QMZQKZ3dk3QjV2ChgAXT245JB7DXxFg9VD2pCZXYjS49ahyQNX9cv3pG1ZEZpdekqBGb6QEAJV",
  "key12": "3RBsYXnbSQUSR46syD5fT3KKpEm8kw4jvaEk4wX3te3hV576ufwokTKtJ5MjfCyEqGsfSR6kWLGNeTVD4hTXbuUp",
  "key13": "4cESoENUy1SFyAuKmJovavBQXe4AFXNnSENzDYAW41AJm16zvaBj5SaxWdPRKHP1Ci1azpGVRosE8K1naSiRbKx9",
  "key14": "3gbvwSf7LvGgF5dje2dtjKHWNQUkzxCFmzat4ajri6mB5fFDuwcrecmMWcHbwzmUykMr7HN7a2jQ11H9xRMCzJdY",
  "key15": "i2qgYcG2uWXAMLXW92duL4uefKgRH1PS9odGhu7z9NUprXodiq8j92FAUMRhLgeSYcWPAPYX4na65WM6rnYRNxK",
  "key16": "3kFWu6g7NRpmBrgYegQvSmMKxAxeGLx5AXVjBHH2sPByN2Up8Zed11xYCi7agQJgZvrrpV15Bg1nzygoPssYPGet",
  "key17": "4W8tANewfrfsf94WrEnJ3RsXbMX2RXtobUqsbmNu1rLeRvZgvCMGFbQheVwKtiVm6RXcDisfqoaigpfMprCb1qZv",
  "key18": "3S9W1PMpQD9J4VXCdkU3fuSaVkh6fXfJ7EBaEvNvFJ7Mg5sPBpWRXJR7kzadsnnSk2cTBju7JHKZ3mdzJEEZeJK6",
  "key19": "28DzTAUThFRPunHMQB8J8uCpfJFT8MYexSr2hiohsLQZV7nfYUsM7t5VpG98tJNvc1kB4WdD9pbwQqV5TSd7b1DQ",
  "key20": "3v1AL1C1aRTjrGNVzaVe9y27NuVbpJXQH1NugzZFYokePYj3imPCEunJayQUdmkxzsKdygFSALwDuGnww6un5nAP",
  "key21": "CUDffJW2hpTs41kvj87Gvqq949eWakDuaethJ5bHHYVkDxqq8ZWwSUwPLfTnyFffZGHtZ2pGfuHVdMoiWbYjWKE",
  "key22": "KRMr7RX7o32DHz3kKA4o5iUm927iGTbHw4Wk3xmkCL8FxzTFj11LUy1cwXVE5yRNh6DqaNSrchgjjVYv4TGuCZU",
  "key23": "3ciQySthjpYzGrYaxB2FH2uZkrJU97BBiss8n3XCq7AsqMgzGJ56yMuv8NkBgA3zhu4mYFXyPiwEUcbBGxwszb8G",
  "key24": "3HxxrA8AUMDGHDBkfkS8NnYyHwmdnzv3gCyXosUgsHp6iQ16YLeLt8sXS7n9RSgphGh1VgEwUApeGdUykjzAF1EJ",
  "key25": "5MPwL1JcVqS8wC7GXeZkLm2KzRuo8j9ZYMGLTkt8HNrbsLfvGMZLEsk4SPekEBW1Gk2eZbHr9EmDNNeH7iF3aP6Q",
  "key26": "4pVTRkhjGqyBqWxgwpfabUeY3aX8dXV7UdzhrhzzpTKmdKt38WwDP7nPJdZjwLHobwPWLmH6VYVLTrfku1s6i8Tg",
  "key27": "5bCWwaq1vAe3WnDt8H5P4tMPzUKsnW5n9xYZSxss1A3sEXVJUESuGpQtKTePmtEoNWQ94abSxv1tanm2apxemUC6",
  "key28": "71guN6UaSFYbuG6oQ8sPigoVJYtFs5gJcXmFbnxzgME7EVo7V1ajUcFWLfSFyzaShKsKZshKQLvb6U7b4fLDeTD",
  "key29": "2HLij6QpewVXL8Pw1h4gFLn5jx38oS22fvsvnLauyEx3ZyMGF9c23y7yFgHYAyKjoc1wh5SCbGscNit2vPAmhCaT",
  "key30": "2RkYnzKRqEwpKFEfTLvxjWwB868DGrR9ZA6SHnRDxpmp9tkkCTDGZYnGXLcu8C35RUQJfrJXLvyvSCbw1Pkio5rP",
  "key31": "2H6K3iwx9RFbs2Gamwpq6mKzy6ZSuFGPCzRy7d61ETb3QhmdCRkK3nMszqrMyAJkVLPF36j43bu9REfEFMYVDFbv",
  "key32": "47hQVezyFZ96o7HWhu4jByjjVD8aeDR2RxjZdmVSopjFGN56ok6mvYuvuqLxmND5bnht41sw8uhKsQGJfj9dPsSQ",
  "key33": "4ZZcwXj4xkEw4SUd1qUQkCM61XZPvyRUp9GWN8UdwGKpB8WsrHo83nEFDx5oqBe46st2d8XxUK5ET5nvVot1owd7",
  "key34": "2zkVbfnNxTqr3ZPmkTS1q52XZSezJx3BmkbTA9ZkprKadTWxWFQi7rJ8pJsCmhmCw4B6WdEtwzgXDCfWnm6yVzpB",
  "key35": "3ccrsSwjTrhnm7tf2X8mNGkaD93rY1Tk78RaRyghPLQ6mqg31toEpKVFV3K8wEYMuWk7tQ32bQxYeiZsVnyMhrHc",
  "key36": "4DDGeajLDgWRfZj8xicgZ4o5Dt3ZU3kzH4DijSWfibMnn5W6acfuF2TBGjrxGYNCmV4dqF4n5YsoDfKVrR9sBx1L",
  "key37": "5DanZJS4zcBiCRQHX6Vaa1bpQ3NkD9aJYaiJRJVEDUKkhhKVWmJKVn5WJdgGpSSKuLAN4CLpFjsPjj89FNcDjQAD",
  "key38": "tX5rZtWxKXsCCrxr1UgZ48Jm2dkTz8mNKnNJBrnMUBeHqonpzWE7YU3JNCNChLp4yyJs3oa6rbnVBfa3oqCXrUU",
  "key39": "3riphG74BY1oonJHXMin41p39FxxTuFgL1rNvCpDVM38gwFG9nSPfYcW22NKiLGoGmvnKoJcm2LvAxd6xvpD3wnu",
  "key40": "3buwDdoPrCe3n21wi2LQMkHPUqXn2RHQyfJem7rsdV2gcbk1n5ZMXTx9JrxeArnXcZ2wvPCzeyPpfys5irYVrJMr",
  "key41": "4rpzMiZ4VFdojZXa1kQdXNefA9iumFAmkXK7mw5P1YjBs2o98kLmraPDVAJBcqQnEupZpBM5hMmtQepA5kLz3LHx"
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
