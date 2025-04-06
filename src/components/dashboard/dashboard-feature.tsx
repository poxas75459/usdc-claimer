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
    "5YwAsYN6JVkVWTtAxVA4TgwRBEyLFWJohEEW3tzCuJrhtfP55tEaD49cntjfiF53cM3Db1KLS8qCmwJFa98yHxtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42i6YiWsKUMusF7Hiu5WJ6fJrSwaV1b7YEUQoa46uATpLTwpLUAdDrdgF3tn6e9g3vZC8fSN4fPtnYw2cVMDz8af",
  "key1": "4WQrT4Qu7Edh4YXhCr1M5gkgmb8kiUqoiPMmoR89UcMR57pBmSFvrRQYKeUPYwPzsMURT2w1R5uEx23qyUi7mRHJ",
  "key2": "5SsUfSnMZrXER2NMApPoAZJ5JNTZob2aXd5juqSt1ZzaCzjjjZN29zDn56AkzC7oLEKaN7qgdbiFswD4UJ674TSx",
  "key3": "qqWiUFhqg9Dx48poS6nT2phB3vBnceP7gFqNYrhimhoLz3ArsHvhGW4rBhx2ri7PqqEKBg3oc6wNFmLHhTdDU7x",
  "key4": "pnuTCYcLZqR8XhobG5JZiZjAZTzexR9RLwXJq3T2GzTr6cEoP7gsBtALnGyRbBqxqTK8oTwnQWRD4bky3jXtp2Z",
  "key5": "3sRr3aguy5HpyFmcTGSjmuc1yNfeUaRp9yQSbog9CYAa7bx1GDa8mHTDiPiWrbpPoUphiWHVafhsjmmvT4nwPdex",
  "key6": "5j1C7dbUZvJeZjYGKpaUqqzQsc6J3UmxqbgDKtAVKS7diqF89SU4EZKqV8kv91KL4FTKhmVgsJgVRf53FgnpEKX5",
  "key7": "5ju7H7AMHUAvthabVTSoybK6xk6UELGb2KRZ8E6ekof8c6rQbwWrWuhGWvRXQEYK8vLEFtwQ5XadpJxuGQFM53TL",
  "key8": "52FgA1hUWL5eUGN4yvRyjMaCduXr9m3dXPWdtztXuPtwE5Zo3MQZmYJHrwLtzqizrqYwHnXNcdyxwd9NY5eVuGK1",
  "key9": "3YPjnLkTdT8KeWbwinBpxpAP7MZGeasywhu9rZeknm9UBARuJ6Emjq6TSF3LthK9F4FUXDzBM7CBr3iQ6FhprXkr",
  "key10": "KPiRUfKp2tyVt5tozgC3k3os5C5gWPuK9hkozWB7bYtYtHfukJQ4nDYrnBBXb67MiCY4hZpF5KdACfEM9Vc7YeB",
  "key11": "3q6aU2eRERzKj4iuat2z4VHb9XVtLBwZMVegaXEee1m47cerBvgpUMQixWpPKddSCicw8skfm58dCMDZH8ahZPwX",
  "key12": "3J8YSmweuPB3gCkcdsiheeHED2wioPYv4kkRfzTJhGLxWpFUqN2xfcp5L6GhiuxpEXW6MddHxa4GPoBoabK2JSUU",
  "key13": "5wYkuryunsP5DjJZpTMAjHswEnJHpTDQG7cM8CGM6D6GzDZDTXUKJ8aCrxAoEV2NtKo6nS5C2dbnp68ayFxWMUCA",
  "key14": "4SuRUbm7DAJVw5W8GjsNzKaBAPkiqANEBZVmnKt2TG5KFNLLH7N3tma9fLTLwb35xcsQ3isexFTB3uDbR8FXoTwB",
  "key15": "4eNZrfyqgVn1rXxiABuggKJLfnvYPsmCrmHPAgC1KhmYHWUghM8xggAmaCRbQGQxi4jCgCxh9oe5MtVhkyX7U5aQ",
  "key16": "5ef2tZwwQ7DTEJJfELih73SgsHDmvH1TwDSw7bBRmy9VeYDWyUhbyo7djouACyqWp8KgxiyT2wC5sm2njnyDQcrt",
  "key17": "4z7GsLtM4JAUhDuEZnhE9A6q4NCtCXcZ5D3PGanJypfFK51GMpXp4cSLfQtnLmnf3x6mRyiCf2DuRzn1uP2uX7cr",
  "key18": "2RP7q8DQG8q1BEqhh5V4Q5EE1WhiehHdBeKetk99wuQgTnZs5QPrLSnp9k1H9DV1k4JicZPzJEH4JxNwFGq99QB",
  "key19": "4R8gP2QcbMQPvSZTEKxxKFMB5HBhk5ms69GuMDTzwNoQxW2f6qP3ZXDVYRChKLLV1LkvxJXqKQiCwotj6hHkXkHM",
  "key20": "2UigmQTASoggeMV1Lf6yK5NMFqKoSnaChhHzsU9yiteLc8VSFqVR5E5gFEjTKNuPimhDwFcCY6AHzPqvEZSGALTD",
  "key21": "2hJQzpyEGz4aMpzP3QWgFEyaSLGe77aYB8n7q1xCXmN72F92P2TepNwjtr1GiXCJPHvL8AfaiLqJQsA2hKCfZJQT",
  "key22": "HjXVkAQSdRvb8qC2XDN6aggy1fvTq7aruWADLLXJ7BUjU29MYeyPSUvFukxGnCgBCCuH1gqw1YUkYBMknGkfWa9",
  "key23": "4bjZsSv5ZSbPdB2dF15HwEtrwdxKw14xm98VodtRpAw1pXUPDvYufg4LPceSERH5SLMa9Xnq9pNnCJuHsRWLzsog",
  "key24": "59c7Drnc68rzH9tSqzNgWYAmu35qKGsFKVhwnRfpv29nLLipwosuDvdhrvauSATGGeVKagGGScpvGSR9Jw8SC5VS",
  "key25": "2WFh4wQMoJ4d9seZEMhmR8kbu48kPHZQNVPAYffuPgq1VcuesYzevewaj9gYxadekUsuYUVKjWXQQvN7uTBngw28",
  "key26": "5dRxFhZZ8o1ajFMT4QwP9AbJHCpwMR8QKkxjcVgNz3qSRVTDPZpBMr8GZ9JtrX29evQYz3kem2txFd5f5wjRgRuu",
  "key27": "25zaMHZwjU9TPDsomFoPDLSKqmqGfU6X7sL4XtBjNkw1n7ZJZQAMyEJiq4jx3pxTcfzMej4SaPdsKxjRg2feqXNJ",
  "key28": "2DvPoU5i5QaoVknxj6h3WKFnca2rFTrYDb5psqcF1azVYNNrJiXBsP891RZUc1DomJGCVgVjQNe4HSyUcX18LJuL",
  "key29": "5dWEcscMBp6uu7Y9Pdu4nLuqjViMtuT3PufDfNvSEVRDxj2qjAN6sCqvSe9czJErC5ByhGLwj14tvNvPE6Ln6MPd",
  "key30": "4YsqYBfQJXg6nk5uyeTrCBeDDLe25AKoAihVovzqTvnY3QsAQGPdNKHi3L3GXoBot8x1jP6tPp3di7CtH68udbmR",
  "key31": "4jswvhozLkz49ooDksrqdSefuoUdeRTHiakUN3ziRLxTpJPKncMb7ce9xzPnk5WYWx8UZ9S8HuxBRzM2c4RBjuTM",
  "key32": "2h7kbQXGJje1iE8mKUrrnwLY4ZCtaL2eNXMpkzRyLisg7NzrnzUwi6c8eHEGUtufNgq3Bg97VqJLWgfDG4aQAwaK",
  "key33": "2oUu6YKLCFxRKMq2Zd5vhjaBLkqr9ZEwYJ6u3cQxhfUeDCiLxn3SjdSB7W2StajipMWUJfeQc8eg7WfhWBRRy5DF",
  "key34": "4p9ogv4KGVtSqRQQTkxHejJtTpxR4kZ2rB2V6w5XLZfbUDiw3Xq1U1H2RBdHQBFbQ5DVmwUx89kxzF64nrZar3cp",
  "key35": "2GWirJQR8r921dZk3zEc77Yt86cZohqxDun9WxJYaKpGWRM1dLkRgLjEFkFRo3PUD5LHeMrCV1goojYjD2cqzN4P",
  "key36": "2Y7rdukJbhhBaiCBkM2x69NT8UfEQDxLn8qDX51onLhgsqkzUExewnu4bRLLGk3MtujanmDRjsqdQeBwGsRUwswH",
  "key37": "5g6pJFKLWm11a1FNrmZCoz2TfBjzjPrRwXTATmU5yaRj2Jy9nDdzbUXAD6QVpFb5x5t755CKEGbJfNAP1msAA5uU",
  "key38": "5SjwcCcVBpmQCJtizYLMjkZ8uGX68KHJiWLcU7Y6Jzan9157wERpj7LhdxqwbyytpaHgDhdx294m1d6j27vregYE",
  "key39": "3x1gmkL4qbHa4sTtwnrgj7bECR9Q2v4VH4hTE5Vfpv32khifgfPLLbB1P931YV3S7w6mtRPuThNtRcPfG7PoaYC9",
  "key40": "gh5nXazyCmFhMvRwMtuwTTEtqQTbyaiKGqG7q5xHWsRvdKW9b26bVS5YiZB2R2PzqTtgKB9wzQQe5T24FgaS7tj",
  "key41": "3Z5uPhUjt5rQinJc8QZWZqYiY61UiJdQXELWvb9KKcUQbnEQ2KDMJ1KxBxdkBLUdREwG1NfYmAbErR1ByxU9HE4o",
  "key42": "2ocrL7QvccpXF2M2UzzKg4hecggBWzHf2WyRNPzdxtiGYNUPLBJk5WpgXy1tLbzhZjvPLq7XBQ1RUiy821ysE264"
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
