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
    "GToMcCmPHuEXmUw4JU2RWN9HBmKJ4RAFRmeCzCB4WYEqaKaYh14P6JFykaoBeGvxaDDAbsF3zygNM6B2d9jv4WC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385isTcau1d3zxaFCB6C9PP3fYpnmBZHw5WZB6pkXpmfMcT2E6RqP8mqmp2c3kB4qTt7v4Py4RbFcbXqrwcCPijQ",
  "key1": "8MUGMMqSsKfmwSWd4xzpEugD3sAUReS6EBibzJcDFUStoB8P7QLEHX7nXRyV53FMTZtHEJs6Adp5SJ2iDzDfK6C",
  "key2": "5AYj8LVDjYSds1aoCmT73Pab8q1s7J8K1fnuSDKuS9uWGauxXXPWcTujzBVqj3FZHxrDKtVFYNr1nM5gW8h8yM1n",
  "key3": "UpZGG8nNsBuuccDRzrS1aEmrLs2hixgrtgdK9xZTuK43ytQ9NvWSjKza58ovg8rPWozfvvwmiF2bwtrQcGLmNvj",
  "key4": "4o57G7BrGxcPBhiceon4cwhnPzQbYSR7s69cXLkkABTMLogtPjPXy5FE6sn8Bbx7z4meuKxR1Rwt6rYJB5o8AV7d",
  "key5": "3MP7bG1LvEKX2EKjF3nJpD5JR2Mvfz8WonmAtPobBjpAvK4CYeQP3oUkjBx3vrVqYJkxXqLGKKntJr8AzAd6SbT5",
  "key6": "pbS3m6JE3HCDN4EY4kCix8qdxAdoHExMT9n6TLykgxhj3sQsJNFUE93nPpXC1wt1JC3TggMAHnwGSJEw3RT8z1T",
  "key7": "2A7VcyjMhXDcyatcGmjm9noK11uybeQgFnGSBWFq6AqPAR9Xu1WfNZnZJjQWFft3gSCDg4kGCNpHwqqzQMqjdVHH",
  "key8": "3tFnn2Xt8WvETo191bCHdXAQpa2cK5Vab9GfRbcqTichDeKAFJtYUfgesdDTSNF2YUmzDHCCCaC55sQka2fpE11Q",
  "key9": "3jvoC6v5mphxHTbPzsCQMvu2ndWb7t5QAxHsYmHQpnefvNap6L6z3bVYFvXEsguXozHMYhcgyKizthMHK6zbpMvV",
  "key10": "3j2mbrfsefzNNJGK9YLhJK2yQ61SahGBq5vMHWyKoS4wQGWXRiRZaFzedcxi4FBJAM865JXV2yK7uHQSaN2X2APm",
  "key11": "62wkhv87gASod4Mud1wuKjEkb3ScV2ir9osZBj9Z5egSMB66X94dyigtmk7WRVz6FRYTtVmXfF5BUp4i1rca9sPP",
  "key12": "sggNCLB5cS7E1umfZqRPpbR1G1qC8WtnmCLWJKQtVVuzvGkwC8NgTxiiNTXqgTkFGBbM8wHF83pfTdh7uRRTqSA",
  "key13": "5QhaMoKU7SBiFGtQuAPD5GUk7EsBLvjanHEuMax37CgbG9t4MakbH7JT4nx6iWycZkjzKaesR9d8JE6Q41i5c6Nv",
  "key14": "4pcyiYLcGvfgarac7rM59mRjLRXhy9KVrw8zZWBwriBe8Nxfwhbumknjdar1nZqZNkJaSdsZiiaURR5vN8Cc5TL3",
  "key15": "2yKAYQtvcYiN6dYZfw97Gx3dLMNdURgqAm4JNX6XBuRrhSRzJLPGe4LSkr8i8KN7vihSynTaoTjV8UDJRc7kh5fL",
  "key16": "5nXb4dZY8BDBukvxCXPJ7XGDXmnqV8HBg3DXxwypmXTffgTn9GMgxSEmEYCh7e66apQDWQnvjPFvuMaqp9B2L5R9",
  "key17": "kr2aYmmJWqet6vFHUcaeYBUUHWk7E6tJ3cEWn9DqVFep5fMjTiWSX13eiJFpV1DZRAjhtkxRcrVjX2jPvcGkZQa",
  "key18": "HQb2g6o7827P7aYRBXFugmq2mt81Y8cbkjNeC1GSzqpNrBh7pSzYUeT8ACnDSqMN3BiCodEAitepuUrhCydRTfy",
  "key19": "5e7qrpKpNLhf8XTKCkKS3oUd5FXQCXHJQ4cLsDovz9sDc2VZZE42EMRPo9X9RLdj5wEkFRXbR6dYAJMz5BEdCNSZ",
  "key20": "4rkWXTgKpvK1bxMiuzk7948YkUL3cozkYRbQJh6VSqu6m9jqAUu4nSi4xmbw2mi74yiQDd16NYBPXjGGQAyX4bXy",
  "key21": "2rsLRqWtu8EWGwi1hZFFGLad4GZcygA6Cp3pFxGpg3bE75hC6uvhnZv3WBpdxLaFNXSyeMxd6pb6jHk2uj7qYazY",
  "key22": "2SC5q3zMEb41GWdC7wy3ft28pRy3B74947PygRpgLr7kGFUnG4Z1eoekPqpDvsEn4LRK6D3YrF5d8UsxjMH3n4Nw",
  "key23": "3ptHuWxkRYsheURPPuZLuf4qKZ1r4aZTFRS8r96stEjsi2N2QNsqQwrx45pHzqxoN286TBSGF2jds4XrGGqANQGs",
  "key24": "8FLKtfVFCFkzS99hFYvnNnABEKFmCgFXJChKRWNhf4vfe6jhJyd6FRWQJyxwYQWfhZRgMB16tUticrmdnteG8x4",
  "key25": "4jE8M9zRdJmDYhob7A77mXbQU8enpe3FwMYxhvcRmwYKx5YnBLs78qBY3iQjLYJhxpWEe3xoVEEpRGS6cphfNivN",
  "key26": "3rbWT6E6SY97yunbbBsRoSQcYAFVAgBhnEpdCZChSpCwZohuVf6DpmNbF2iqTkG5bK4Q5RXiCtj5mGLgQhBJV8wk",
  "key27": "4Bg6tsoax2GuoPerQ34uBzeogjXBEpRSpDASbqrhSwTfCzYEtiHmssqLjnKmgMcgjcGzDWdkgjnBHRB3Y52EhDHb",
  "key28": "2WUSW6A7NKhmjzY8aFKf9CKpjmXZtzVwa4J48GHURXdFAVbvzf2Ecd5ez3xZCMzKWXVXrhXDae5NtuSRsfx52Wt7",
  "key29": "2ccmsFxbXiAa2xPmSVRrunniWFhBWkbiPT9vwjEfodVrXg9gdmwHEh299g8QPVQ7kLL7BfyewDafEnmJcFCDsWnm",
  "key30": "3jVnVnQzi9r4sRBv5QEw6iwZkJyUQPErWRZLG92VpPgydynQ82ENmYpTYyDJPWhVsB4KcFozkdgtaFKRV3n77PmM",
  "key31": "4HdFnkjXny7KPvtdCjfrnGRzD3rS8x36ZrQtosRRPQJJJSseCN4yCMZzTZQ3XynRJwGyiZBwKu2BE6PL4YtkrHbW",
  "key32": "tbPrf5sApiG1mohDgyVsePAhnGNZyraDBUb5dZfCNYFBT7EmYfhTB2BuU72Wf3AUbHcgbz4ZHW19zgWfoG2c6st",
  "key33": "3xJkgJwZ8vAdR6sySqJgKmh3qZguF2Yt1UWqntCcc6nbisSginw9acqCqqeG2mhpD1UU7v2nmdouZqb51jfkTqje",
  "key34": "4jZQh2wvdyWjrRCqDEwkfx4x5wVav6iLdMZ5ScBKc2REvWPLTzUarcaYrnScjDZBPjyGGHe2R3fEFwrNNa3sb3P2",
  "key35": "4g11EmJD77bnwfSYDpZy2yZC7DTE2CDfHtzm8GcztMaAjWJMvPUtuvsryDemBbUMjxsP98mtZN4YEddhGQ9JtAPk",
  "key36": "5fUGyB3efUbo2YeAt3Fks83dXSA2JZ2SEYSWxt675L5nuy1qnDga8pPU4n5WVnnTHuuHvNwTgiBRSvftWe9p4BCQ",
  "key37": "34SUgYw5Ng7TELa9ink8DenvXpZhRyu187kQc1eUdZDVMLxHdUbmHxej1cK6ToBqh1EJ1cFDD6vAErdsS6TACwYe",
  "key38": "5aAJ3d2YPCdYX4urKZLzoHAJmPDpmHL5CFsZDf9mfywwdiqQP8myQ3w833QS5g1D6zcvaXi9G2u75c6B1VPdWLvp",
  "key39": "4saTU77Aqcezq6eE8iJ4Q1xDSgTsoDpRFMPGXhZRY3RvJ3eoBGWipFiwREu69z1C7voms19JFjioveLJMb6M8Z7v",
  "key40": "4RkKffXLj16DASyuybYpCYZP7YaevRKVXVzk6WfqmG1kv7H2nPN283Ya3RWYJqZ9r8vFZc7odE7UUdGVBwsqFGUK"
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
