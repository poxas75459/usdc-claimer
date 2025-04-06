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
    "4LKpHXjDvQCgLcEqnStRamwRpk7MPTZs2kMq8FngJnNV69XSndBjghsq7SiJA9pVGbCHcaLn6vfdpDD9Q46gBJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gk82ku8oxnQnNX1egs3hAyrCfSATWEaEDqKh4W2iSz8NEsxtEzwYRrrQzCQJYAhvxY9drG4wfDQC6ir3vtCNMo2",
  "key1": "41XrNanv4hiTBsX9NN8HdX2UsGbrUPcb5nQM65qDe4HD4DNXaii31rjqTV53BouBeRPbDCZt5YNTVDXY9sTKJbj5",
  "key2": "4uvnzo6KTGU9Zcx4dS8Y39d5MuqhAEjEV1ASVK62ftizt3ey5JkfaKutjeciXysfwHzvQewxPa7A3DpogDFGXeMa",
  "key3": "wdxa1rzkeWWHJBuaHUceVH8oZqqTNPFMCNod5eevNSeL7R6i7EV1zePBpzfTFcsWPsv2uJcDxWPKGC3PNoe9sfW",
  "key4": "2jmpcGw5do58nNQmUx22uH7xaDu4eGUNBRkzV6X4cJub5YXgFJMJNJScLEdeDQ8V7eH1UTcLU5r3Xw4Um7jWhLWE",
  "key5": "2xeGzjEeuna7RLw7EHtdJKWxUvPgr2K8aof9mDGHFADdDBbyyjQDC9JvAswEhW611TS2EDy7S67prdjqgrKa1gqR",
  "key6": "R9ZQtRd66tLC6gdQqdad4tdAh4a5k4J3Fn1zdPmHNLRvfunWr4EfkqZA2WByGS1mxtT2xkjDsgvJ19y4F3WJ7uP",
  "key7": "4ziU7oXxtXJpvNWARvGYUCQqYVUZciU9kXTN6nv8KLfmt1g13Qu4pmd9ayWeWA7BR4fPWcKXVbdaQ3zYqNw3YLD5",
  "key8": "2RzDgZPSPB7kryW8TdgPSttbXwnBAeYcNu5A8GthyFUnAEFfRtMPRsdmrqm9usY8ucN4rAnV4J2dZiSYWdUiEW1y",
  "key9": "34SY9j82VKBTpaZecTSGuWef7KoSmd9MQhPpV8xGMAtFgBjgtFmnXFNff1suJrP8yDAdM5dZGuiA9itZyqLhXqD",
  "key10": "4PMuvUvkh5hf44qHWXitzRDatbF396Qi254RWCuFSruoMjKsD3GtseNzx6NcvkAAK1KQXmCJQxAznmetpQ5tXJA9",
  "key11": "pDb9RRdH9d9hf9cxNiTrDGZQvhrqEJwF4LW32L1ANUb9bhucozpoKx9cm5bFj5SfjGrpfmrvAZtwc7iatXr61yG",
  "key12": "5qELCwMM3gc3rYkcjVDbF2q2QqkF7DJCLrD5uBA1f8t9aqkxCJRjrx8gWr39ASNY7sJb4ZQt1CaqqnJUaMvoLgJ7",
  "key13": "2MoUvGXcKjUVqeUsD2eRtbSf1FLzMZHmBztnY7y1a6qwYKS2uo6DVHrgnSLdJwysbGtWoin8Pa6AHTjNcQPhHpQd",
  "key14": "39fPm4S2RTLn6V4LAVjhHp3WwuAGnwVPwE6oSgtkC7gcn9nGASHxLXHZmdjRk7dLJ8oqfpEWNCpNaTuM1HA2ivM8",
  "key15": "3qzp6vvMXiGt7T9opf5DrXSUT2dMdjJEnF4SapCAvRGCu2CG5FqvZhHU2dXZDoyPkduSwrvnJDNoKUKHhHgwmaGR",
  "key16": "2fAcm1GP6Vwf992ugiwQxjgy68Z6A6c5scyWadJKkvst5Um76QrFVHchDQkrzRUoNhnxDjcugfGVfnMgcfw9hxpA",
  "key17": "41fghHa2cgUKLjrH8NcEMZXFKYoz2sS6sGHKmYburCLZFvan5EN9QK9Hv6y6LmSCjkgMi6kronAtpiFY8NcGagBD",
  "key18": "2rbBShM92qDGkVgEudP2CcxAsosbGKPpC8xzkUC4SvEtYVpR73epcoFyDNB3jcfjk8W6B7G2NeWcKmDy8BsYft4R",
  "key19": "2PSYJFtjzxJ6c8w4YAi8T497xQSGXbKrafx2WtyEiv78dXfyczM3e2rQwzHpqers7NhmXF4uono772jCKojQNU8",
  "key20": "4WnGDRwgVecgpWmLNKCRjRVzXWAWBYXneijiUmbCqfJF4dzooH8YcYWt1Kzi2mC5mzuRgj21Z5K1ptARwXcw7yao",
  "key21": "DEeqj5ZnFczsAW2t8MmAP16ttWcZC73W4Ssd9T9e7dSKS9zhnU9SHjKGqXrpQHGEu8wkwcjJ93XLptSoYUXQ6CF",
  "key22": "2ZLth8HAL9gTLg3wAaFKbjEvvkKJjyWx8G3ePAo1GZGyz1Aa1F7t2U4DoYTkpwPnuiTbk8sanvZ6c8k7oyMgVLjg",
  "key23": "2thc648qFtRLYGRe4qHgCee9Zfj7bVikJqSjPgrND74DspNryyZB2pRNbJGYydHdaiuySv9hchv1EBnii2e4tbbK",
  "key24": "4mxuYq8m9yMiaNQiKttSXpwLaLsuafvnb2PYEbM5VRYSWjVrHtpQ6SLxNw8exLRBCboJvqYx4e2LWM1sqtNMoj8J",
  "key25": "3e5UNHc3KHL85jTutwq8312Ys5jBAnse2XAZ4JUwowBbvrxRS4e1kXZ5e81o1vGmqBepM45hzDaUgsyXJbAKaYvF",
  "key26": "oq6bUwr6i5Nw6fQrVQHWP6BJevptpfuBd9ETjkPgjoX7JqGaVCKaejZQCPbYRQtMD7VqzUUydurAhgf4qeYzy5s",
  "key27": "2egbcWTChKkpVfXeBmoM8BNsHejRYMTuwUprGKc398WRvYbKgjE1PdkW8tgDa4dbHncHudyUBVoaCnNDG6W1dMuo",
  "key28": "4vijMqHEBvyPRFRmDBoRYFpyZVeNjJBJnikKiBJ3zFEKPBeLBTtmsQ2DEWTzW4pFnMGkgQq7ubug47FgN6JTeSBX",
  "key29": "32ApN54z93muAnQrErNyFs5LosySHsoaF5tJS6wQNeNMwcPyZ8HjaBRBds95RcowywVuM9BsXV4yB44M9hbNbMCa",
  "key30": "4Gk5wqxHgdyzf3jgFbNDNbVoMquAbGpz4m1mjE12E6RrVphGP7Bh6GdsQM2nisYFeuoM74oLrnMz7V8Ly6Qji3D3",
  "key31": "3AAsJvLtPMYhMDAW2ogN57daen5S9Sc2ovkbunKVJuLWnrG6JWEK4GEceB3bmdAhvdakYAMkBVpFJNkhU2CKMsCn",
  "key32": "5bD6YDrhfXjCQJACewCZwjA27f23PeDTTLvdq8jziYLd6rKWTxzL6GBTrdMaLWB9DgbvPBu6hiqzjZA6kYcb2AJF",
  "key33": "2YMhoS4M9k2L83Efifa5feuZBee8JptWramZpxXpRt6gz57M67ZyNvEr3eJvwfJMQaWEPeLFQ6oF6awGvqKDfXnM",
  "key34": "2NUZGaaA3BVrRQZGkTiUEK2osLbj3XLBZqtZcUPLrNf99H63pirzvP4QFYrKixRhNVaKvjgcyU4XtHWWohzqzrcT",
  "key35": "23R5eceMSFx766AjYme32ALBT9uWW95r1aQgnTgxG6ujbVzUL9puzZ84Zafuhxp9WyKfwBfwQF6mnqMkYj4JSHG2",
  "key36": "5yxcrVPk8C9HXUg4ew5yrB3E8RzWFYBXfGxeEcAeS89bWQH5g5aZBduuVdVJ3hiAu89Udt3CxYKNzcdDgp8aDiYi"
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
