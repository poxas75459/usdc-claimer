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
    "2bCLHYWFQqFLZJEhexZ9X4eXwQSEaxSMQEKAewFrQ7Ezr2u925uBduGz6xP1nWoXM7GinptnCwe6NbzwVek7TSHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cjTu8KviFwHVsL4S3FsmYoXojc8mm4SR2XEAiACabi9TceHLDiNiDNwkT1MjQtHwNotmc5ZPpAhfNE1oZsu14YZ",
  "key1": "2G91yAmPqpm2y8n8ct3rTgDSfAat1xnKHz2Ur6gqew3ypuxcQBATDmCbczFCNrCYh6iLcXc8bXbCbNYhQfhyQ1fW",
  "key2": "3iFpYtu1GhT49PMHTSHiDL7aYEtYN2WPWC5VcnkPXFwx45fhVB817RXTuwKg8B2BvCUVWRvD1yPQADpPy6RM35Q8",
  "key3": "2wizrf3wvMtWhFmwpH2ZK5q4JSZDfVUcNQ184vZeM3Rpa8UUn3mHYKwaGFNhE1wQYRsSaDxXbPesYLcqvEGTqxVk",
  "key4": "5ckLwFRumCgqWhA1RzgP7Kt9mTmoaPikNgKufAsHd8Ga4hWp2H8YYw37TRa64ywTsqjjHzFdY9EQjHoMnP3vPGH2",
  "key5": "5aweE4Qf44ZhJGy4NGZVyhecjX84CGHwFQPpgrW5V7x4KuLmM293Jjb7WxwtJcQCUjZJsteTXAK9STtJ2JhnoGUp",
  "key6": "w4UbF28dDaaRnDVEovCG34YM2aNxCwhxC6Kd1rxE7FY7rucnWSoy65xGtDwExPfK77GJQzW7VWm1uWPcR6UHmmC",
  "key7": "42RZkQV9EuEPzHcyiTUPy97Qfosa1w2Pnm9orotANvTxh5RnaMeReZVyt9rXRa4urRXVuuXEsBvXeQ1pi7npdRkz",
  "key8": "36xAWCk6p883vk9vUiFBPbsBucaDQz3DMbHhxeWu2DkZhkBD3WmdGvQfwsAYHNwiFHiKF2CjHmYBLRe7UYBubSSR",
  "key9": "3LC8PJ8Ax1GDm7KTJcu17jLHnuBLQNQLvhTBEC1ycBLsaqaUe2Hm9TXxKVmToDhWRQFRqAhPsqBwoyXgKhXx6sJJ",
  "key10": "QAcD9TLY2yzLs1QpAa4TfGEuBy1sCUkVqJTsE8QGTem1NhHgZ7k8LNY2kqtYJuX9Q2jcLJ6Cu3gdskgiaPzPvWG",
  "key11": "5D3cJnzW3ACQ8wCwJU6WFS4tD8zFaouWuZ7trtW8bf7HMnYEZVYYecui2umgim9aRHMjwaNknWkNySbJ2vnzaMd7",
  "key12": "3ftA1i5m4PE6J8MQTtAipXm193CwNAat4Jo4zYhhMkDnH35Rd5YhQzeZbyAao2zbM2xZPfAopS2kuhsR1hsJhjAi",
  "key13": "28N9va4EVuQqX6nC7VDopHBimzA5yiKJco4wzSJMZ2YUNetSHTYoBk2m2KUKhRPuC6euYHC6SdoT3wazubAJS52U",
  "key14": "4A4P4a91NHJ4QJqtGmpiWTy4MyiM3wonkEW4BbgUwMex6H783wTBDz9wngQXL5k3WpQn3jBAReEkR5V3jKsQqgVr",
  "key15": "3WRm2zUpg2nMFep9R5AQtPErtnc3GME9GBg9sn2KfAt1pdvi6Y5AXUy9aPFmNz3EEECrtHZZe2SWyigYfA4RSpS2",
  "key16": "3kauviQcCY9Ys53QQtfyM9KLtqYgSF78vqauoZLYc7uQi6s2bWYaj5F8rFNTavN1fkrd83TFkB6xb1XfDLycWHJ",
  "key17": "47XkqBNQD5bN9rGW8tgwrYcJBtbM7qo8Ysvdwh2iJz4vj1rjsT8vLXrQdodrKUYTZBdkTuEDP291ew4Cd5vFrx8u",
  "key18": "25FoRJURJXz17MLpKSAadG8EiG5Pz6V6uTzbwWBVCJEiQ2jRry1J8eYyUX4PKGkApPnyn7LPyjXTwYdNPFjUSGEU",
  "key19": "AttRFB1ghsU6RhSFJysFJe83977Fnz7ekUNYKqkmpk8c89ZxTmLKFuRqWCYE7pLMsgd7Uc6LYvU6D4J5s2aNhgp",
  "key20": "27VsEoFWcpPQiuq2wBhUGLD4Jtt9TzqzkdeoRStZ7UQnnLJCSS6ULQmYy5ctPsoFbYhwyFtziYK3vnrGQJvMx1Ju",
  "key21": "3PB4n8Dg14CP37BjPyFkjUz2h95HqwiXHLWk7gtKekKMFhPcRkpxMfR3UHq3mdZ9ehUp7Wr4XSvxsSZAAgfwhLqu",
  "key22": "4fHkvXKZpMi58jS2RtmDsbXPEgo8TuS2njxoqkpXNUmkCAK6GS7Zp1XVX1yiRSi4xDCpVjkxmsrYf7JgNAfY46Ad",
  "key23": "4rtVUJ8Cvrx8tAxURsr3LSqBV6iPdDk2Tf31oHsdEaFQLeNUXLWdxUDhyjUHfGUchUSzDgDVc6DZ9KxgyLUhMp7t",
  "key24": "n15DSZosmmDnUQeuhGEh9emC56hupm5eqMJ7GAe4m5MNTNZLomUjmaRYBSrEikszfiQffjwhTMHkwddzQc7Qjzy",
  "key25": "5T7i7TAyHFtcvQe3dwvoPFvvLdB9GBU26D8ugjzYr81u3RfX8DvGnsqEF39v3kvQtfcL3N9cbdmCewwHXyAsfwVK",
  "key26": "2ictxCPY6eDW9BxhiTZdRDqpDVACYhXFaVfuNbJ5cZqYUH1jXgFVQK7d5GrLum4uHeA3E6D2yfRxWKtE3FtQomXs",
  "key27": "4m4DkjfzaEmPCwsGVaXEEBjFupdjSapdupofJCHQsBmL2kLPf5o9XoZYv1w7DT34JL8RVXZA4GLkx3ZyRzCcd8v9"
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
