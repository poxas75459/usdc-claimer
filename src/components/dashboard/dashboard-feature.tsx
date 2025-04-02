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
    "5TvR4aJrJSTYJcnYbg9mDx9RXiuXW4NozVjuJ3oNjryCMsdYLGti2npULX8tTr2ZAQo7UPjnGhfdnw3Sgwm7zBbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUuGFVpAfTzzsczKoVsahQmhy6shChz9grQwK8SNRgcccd5s63KQqq7kuv9q4pxH4Gzy1qFELsxmZXWScLrXWcz",
  "key1": "3b3yvoNZ25kLVUfSfvRNWuqd1YEevACE5EWpy4KsBJbTbfFBUo1PBD4FuptAcJ4KEb7JYwpQHrxRueSEkMwo3Vsx",
  "key2": "4fHeY3KQXbUhhCHHkoSqukUu7KtDB498A2MbdMsZNZCca57XCsovGKHaBP3kci3vAVUj4jTx83eUwktjG8iHoSrn",
  "key3": "48PQuuLgfmPS3rApjJszjM7EN11TZ9HfxvB6c4qmWn22eBJwHYB8dUSicfrDvpDFSYGPsiwztHGVGUz8iyiGGdqz",
  "key4": "cHFkkEY7QVZrdyLhnt1xj8ybw9aQeZZQGNdNVyyJt5tT9tmVZHov4pZCwZqABc4owLQNdyvx7vAyyBpgJvANitA",
  "key5": "3Q1zEy9jLm6csPbDc3wT8wHCrQPsVC459mD3JiBpFY8DsxJKsgmUfJwJ751XFyFMTdDN43NdUYkzn7kjjsWmqXLy",
  "key6": "BrKuKdANYmBDNNDaV7W3Wgih41hjk9bp59uiXCmdr4KS1a6tsZbp7Y4C28jpbWCDRDHWRzBxUdKDPCnyzvqYPMQ",
  "key7": "5J1Uy1eTrtUfVPYUtZrcg7YUXV2XtQheLinVVfmHgVQWHz5oE4UincAFRrbJCN5NavCAZYKK7ZW385XSfTUaHqdW",
  "key8": "32cWEZtPbyFxuhB2EFVUZWyYAEJktTW9MrqtWxac9kr6chcRxsg5SMKMHjrQWYU8ksnk3r12UWBxdybZKgykdJNe",
  "key9": "365CfrcYat6RphouVBEHhA3fzzVrVzS7ZpbYaMovPjGFGdD3qRSHi5SA711gFZJU21gaci1wfZW6QGMnSgBWP78t",
  "key10": "5dBp8qgCGr5StSM8Ka8qMQUuoXuh946vTUF8w5pnkarWNTr8nDVv2BKzrJiB7KiUJrevk43QRzSGaC6Vqz5yrgnP",
  "key11": "2AtUN7ddV23XrEQyFefUtpDof5PGsE5EzVcX2q2ajjZzMTxvLio62ytjFbERo3i3GRNXvggti66keK46R7hoq29q",
  "key12": "4BDgyT5Sbv9776mUMdk7RCHB2jvsWzeCXhi5j6qcawzpL4nUgBnKxz7oLCKJxHEQZfDBu1cvFdVKkYky6QQDLQUy",
  "key13": "YUoJu88V9Q3RgVwHMfUaHYKVscTFBApMiAF4qokssJJzDAbviUj5dfX6VL25649zHgtpq4HMgWF3DDFB5s4K4Z6",
  "key14": "33xqeSoX3PaeyGaJkeqTzskhT2tq4GFS9uXYwAivcRWr7VbCp3uhjBCckP7jxdspMKnTpD7ZvBqUx578mhtWW2aZ",
  "key15": "5MP4WfAfBJwbEWAJA53YvZA3Jr4Xoa4r1REjVgMQbMzfQhtkHmCqdE5D6zQXGNg6mRbfZ4EfZYd7JU73QPYwadDZ",
  "key16": "5L2PVzoeQ4Q5ajCS2dZdtUf5XwjwAVRC4QwAz3vZktEcrACdaCCACxeR831LQBZfvHhTtp5fF5o9Q4Uy1PzKnUcr",
  "key17": "4bXKSPzTAEdVAvqS2PGCm6P3oeLc8cUtmWoSwM7cNg8sB74u6Ys2FEZowKMi6BdmBW4XZyasBNbCWKZ4VzCGxE8X",
  "key18": "2YvF2NwCC3NmmoC87WFkjdpcaCTCx4MG7xSGZLNApKa9aCKReru8eBfHmuGW6mh2xpdvEdR6Y3dwGQNY3yEALHV2",
  "key19": "3gkpejgvafxC5n1KZYn2H4jHSkkSSfnz4EgGRZacy3gVgorKP67ts9TzWwxd47Ejn2CBpxNdohq2QUNSLR6da1Mw",
  "key20": "2fHxvySam8KedvyS7V8WW1DdScGRZmvGMyf4v4QPU3gtEaQsvVpshCzgpmoRYVUxL8ERbitpumvAAsM924ES3Qb6",
  "key21": "3mPK3z1S3qWn5u7VEM239eSxzAtAuxnVWyXSeL6YepiUrT6ESxWD423bWoakA5UEXmhdYM1XX3WChhBkMNQBSmmu",
  "key22": "bBpTri5UffQdZwPogsTTFmyHmLU6JmzbW6J6Mwwafj969kHC5FGBMgyh6WfvjuTngTWyTKnAqsxeLXnGHXhJKKJ",
  "key23": "2Qi8cAGPn7pbJjuv7XQZcyuE39zen6Jvy9Gufje2wbjFKLV3qB87SJViXXqwyNopMThNF9PBQcuQgAzNmZkMv6fS",
  "key24": "2swwtC4MfmCLyUKLfWbxyvTKx5aoSus5WsiFVtUhm5GnucNE8tPTvYS8AnN7bzc1WPAuRyZDTYHnHCX5bxTXwEF3",
  "key25": "3TKU93jsjx2NmNoSE3WvzWHbH735SwDbExmKd5ZmD3UGXz5AejZ6i2VmTtvPQTWnqD8YqszgM1oubDEcCB1pANPH",
  "key26": "2Z3PU9YYwMT8MAdeU5rwfYRYg8wfthK5fQAC4zA8DQ4Myza2iqQa4crvhupQ7woLb3JT83MuvjDxJLtz3dDWrkXG",
  "key27": "3KaUeiXFWUq1T8WwHRqyLYztjH2uNAxyJQad42WT9XYncXiBK4x2vsaDiYFMEth32GE4iw9wyYCBXiHZZiGFo9Wu",
  "key28": "2CifS8oTJ2GSYmxB76Pp2ABVdvezATPhjeau9ZijQnSYRsouhh9EQPQWZJVesybiwBdKMifxYBqzEjkcz1LrRLFU",
  "key29": "vMjtWojDLEZQiidwhTrsutTeNqCqSCRVRWQFPU1pX1xEPyFH28nBEqEqzmUeMdYhkbXkdepGpMATN7pteZpf8Zn",
  "key30": "27YA7MBdHMXxf1MobuetWXzo8wc7z5goDNz8vS5TH4VCyPUExmx3w6zDUDTsRooSLM9bC9EoSpzdSTjgZPmoNhsq",
  "key31": "48VqE1q9xYvzTiVGhYZdFpDr1SNJWzibuBcEkGiqL4cHseT1cPsTyvCtQw2kaNB3NaaqsYurwH4GwgnTg9E3V5pb",
  "key32": "3TtfSmzKPx4fsjEsdT5b5L2tTRayBEjUMTTzk9s2AdBw9LfdLGAtthV1d3NBJ4i7wTaMbQvxDSUk1WZibErv9Re6",
  "key33": "2p8jCzLLkdnavU6rxnjqjTeW7t2gvzPGDFfyquMfLgXGC43zEGBh5RPtCX5PcjeLCCmXNF9Ec9Xp4CjvZBewNSRT",
  "key34": "5hc1SoZREAefZZczfFVGG5UFDJg9XbBCaCZe64nfe9SK1S7RkGhfDriQjzbnEcf7C4JeiqHVeLLMBwq5KML6UXAk",
  "key35": "2LDW3KLNVRFcVrTpvtkuGVxYSTNvNb9RPC47YJZnyELQm4VZ2NMrvDc4QuBDTPaYcTYR3tmZSPSUgHRCJo8UB26C",
  "key36": "5wN9HsPa1Ye1XtPGkR7m5sBCLbAMpJfxTKrUwPr6eJWzMzba6X6a3Ugktt2DW8GWRXy51D2uyGCtxm72hZv3hCtG",
  "key37": "2FzoHWqVMJsA1NzAq37QkyVx3xSVvY7NUeFdXB7Wb8PqgEGtf5Tbz8dfUc7FHJqfEDN1pUc2Fghrs8yigC8E1MjA",
  "key38": "3RET36NWczpy6VyPPvNHe6sasHev6pFJ84M9Y1D6Z2ZXySQ3Kq69ujCG5bibgv1b6aPAd8zFNNpAvP9gCDJ8kbta",
  "key39": "3VuTyBThU3PTaBeZgixgT9JEGeQ4p6FqeuzDvbxJSoPTV9LbBXm9JHjFsqLe1oLGPtUpqaLCYzNEq9QR9eHqMuD8",
  "key40": "39pPwSqpehc6va6BRe17LiWxy1YNstdeFa5hVzx5DpZHADSqmWXcbipxxW51ja6EiU7N1uPCwmDYNNBr8dScZC6k",
  "key41": "mmHU7vbgiVmtVbTkCpidmWqbsqQgtSRaz8h3EAmHymcN5CXyciukBPRGocPLY1wur2nXa6Y7qeytTj3wJsFft1i",
  "key42": "2B1qPu4xqaxYj8r1jke46cmrrdzDhWxpeRcDwKktHu6hYZXz6hxxeJK5iEaDwV1ktryZBLVYNWjCN2YeLg6v5QKj"
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
