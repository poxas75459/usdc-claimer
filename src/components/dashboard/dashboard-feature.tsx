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
    "z9pdLsghCYx3VaUx5Cgp8Wtodoqf14bTtiZcZ46Z1erSViHgtew3HJ9ZaoqvYr5H7iETtZ5YCz3ASaskALgZLhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QroBVnLLBWeG7GMhQGFXxCdnK2j1cR7LHtHVa9R2k19PaFHte6gAzagALEbGQ64TAJM6Z3Eg8SXrhvBaVamrgzb",
  "key1": "3upEny8RTGQRVWsQdeEXkVAqNhwSNzqdeGi6dG4yv418rY9ELDGRkUXq9b3rCnpDdMFRfFqbeVZJNArPWtGFNMkh",
  "key2": "5gGqjjsgnpUGnoXfwSXRVh84amBXWuLDctGJxEBD4PwCeWno69Kgi26kFe4ohPmFb9CKaZ8jcrDH79dutH4jZinP",
  "key3": "4pnpA6ooQDgSivDb9rPuxqH3mSTgYYiEQha8hZCs4jzCAeK75xMsTeDAz9J464boKBZ75WWLhC9wR2wx77qdKQG9",
  "key4": "3AxMnCeo3pE1BKmXz6DmpiTX3GkrxKNehS33Apc6RYAEs4eYkg6QNqqs1hDon4oDEV77ubCx54QdbuV8QnrmGmAo",
  "key5": "5ACKwDrVD4zkHfdxMtCV1tD4SUV6YAL3enzHkk3X5JzfdzRR6aj1D8T2Fi84Wib6ZKUkyTJPeeUnEmbDD56fktju",
  "key6": "49LQ7ojuRtDyFKa8faV6hzfBbgPxrc9LBSXBJX8XiiuWU395AygefUK5Z6JV1Jj3rKo4eL5CgTUVZjE4JXsRAPKr",
  "key7": "4NzD3FRgEDkVGQgBGkzmqtq5xxguXYJdpqHgmvHxbL9bUgZGaUY93UjCabJK7rCRgxWiS8TfWNx1mp41Z4FCowsD",
  "key8": "5mHhzeBbw5f8DUguD9Y641ZpXiC1fXvZZpU2H6C3TcRFdVMGdaevmjxUXVZqSD63UF76ATmUfKJvhdNaHn2r8FEq",
  "key9": "4mk4AaTsVXrLwdyH6FEZPyMfXF848jzgUZTWdEhzxRUnbUgghkXW5pTnEJnEwPwGVVQ94qTaZSaUHNTrDvH2LLAW",
  "key10": "2jqcNYRc6vxNUpaEqVo8cGbG3eP8GYzuk4ces1ybrb3QvfPsiYnUhwBn2CYLZeCiKTpJxubQuYBSsGVpWCtnjb4",
  "key11": "Wj3mFq6X7ByKSG14Q2pyoxFCRXnx1ZUybyCoYpoWLZvvVCTQ9MhDcYtQhppZ2mJSCkuGWQ9F7wSAqeJXH9Lr4pr",
  "key12": "3t6Aehkwy9f7kY339wSjFMYU4htj325j1vjvrfvgyaA46qiKGQJA13gPBjYqmexf8yJgcwE95c5FDejs7ixZ4cjC",
  "key13": "39AsfuagakzQ2MbcbCPkFvmLgEgXR2dd7fjUPEswwr6mYe5ACc7aV9DvgdiXqa2i8G7kVH2vVbjm3rhRQkUERhpj",
  "key14": "2HuJFydSez9JwWeQ8g9cKY8L6Y3UfZ4so2NnKVTbJeU6MHyGW9XZmRrShJbaYq4eyR7kRcsi3cBCbqnxbVLgXjup",
  "key15": "4TaGWrvtS1cAtp9ZVB7gXuUACHEMEv1xxyaRCdZFw3hXPkiVwP31HSe4BwLpTE6aGecA3SX8CdbRhST3ha7bPaKg",
  "key16": "39Fnu1Jc91tgSaFS5BuEKNTpVKPWkgaEQcv2MSXHzYwc1ugb473FzjWH7eF9n9QAadwALhwXWJvQBKuGZYQPgwGS",
  "key17": "4jUN6ob1E3BCScA87SSt7TF27PtwdJi7yPQ5krNo6wJAa9SJrWgZ5HvXY8jRv3KAiEAxJwsjQeSfAssD9oSNqSxN",
  "key18": "4ReUzjKdAmcejDDJU9YrNQkz5XBjNnPU9vFmMiccAYKnSKPWoFFqpndyaHdbFbky3VaazzbUzfBMaDxpUoYEVyou",
  "key19": "3tx25k78M33DjxPRP6UvmKY24EbEktQsUiDXLLVmsAioB7pyY7mt1VZKNU5nMPQJ41cLvayCRVfqiPDyYAwL7Bmj",
  "key20": "47Wym4spraihGTUhBSHvSnxxzecWkkf8meCTZe2NSVHd58dQaSDT77u4fBxaTTapzP6TfTSidLUQR2dVCrPEEAPh",
  "key21": "2zgjxJr3cJx7obp5CZT1cJjiKB9pyzj1bW8K4AwGvTqywKVMAAy4G7ZSvWKhKPW893vm5GjSrbNLFXXfFArPeeud",
  "key22": "4zqRwFa95oEDwLeJxgNaX4BwwqUmH7HDK4zncHdMNGANzfG88ydL78BqbtBAtK2fFYTUaw48HDAfAsyWp5Qpsq6T",
  "key23": "25FHujnzXnkcowWQ1gYCAAbWvg1EUGM8ShSwvrpXs4PQ6pGUGJk7mVWVCwP9s3ckVgtXvdsnv7GwUaMvtVPE33qx",
  "key24": "3haUEfJYd3Fjsvi2oa6UVoLpQNgtRXKTgDcUhPfFC84hVAAiUvu2J2gGxnWzRQJWcTWjyMmHxcSCPUXAj3uQvNUS",
  "key25": "5GJJcQrP7d9PQmRwfvNpzqnaauA5dQ9ktpY2Da3aNmrknhuiJ7uyKYq5yaweK73PdkC2J5nz9bbiGXVqMzgdwxLc",
  "key26": "27QVFUZDmvUBRhNj1P88dxcRfWmJqDuTdKxFnLaquxaqeAyoVEtsXyFxcHJFtK4E3PvRLgujzPmgN26LdiALktn4",
  "key27": "aH8yQ2D5nyAtUSqYQNqpZFP84PbAxeoF6U5tUhSkiPuXBGbm9Aj1hpU14HfZ93xfLjQLFQAR7fijCNRoT3rpz86",
  "key28": "4TrcDyL7BKGCCW4RPA5dzQNfkHHxbDYt7MrCReoe1rDQWZhRnXDj2wTwdjwx5GVbqiE8VC1Z5WHJX1eD6WDEPiMX",
  "key29": "VGcrDigDJSsYzzJCerQMqctZg36Ken9PS1bufGC35YuUoZCjaZKyp1oHKmVgT7KGYzr8AGvbjsQBYH8HKJSqhkQ",
  "key30": "2KaAeA7vX4Le2SmJ9LWa7riePCZXrvik3xNMMMigZbn65uXSf7KRK9p7XwJN73vZ1dKJArR6dYtCuqHRdnpfzFcX",
  "key31": "2Mf5mXFevR8LoMsAVT9K1N4DJ2wGQG6r53MXMDYRJhkj4pBsmsqHf6xMpwEbSWyzj4kgNaLjB5Tx3ti6mDKamVrB",
  "key32": "4wUZTe8Jd3AQLasTDeXDd2hVFEQovAb8YpY8JiGkZaUtdyY7RjoaLoAmfr8UfcQb6ByWUuPQQK5QYT2bzA1jHVcg",
  "key33": "2s4UoAXQ58f3BZJ6aYn1vEyTTovtsa6rudPC8TnG819zjSe5jQ1bdP4gmJSzxLqfjDC56NTyYt3Hz7sXvcFkrcNJ",
  "key34": "5AEJAwQGvKGVQx1ct89eCVHDUBJCRrwTv21W8PDguKH5jMUWb1yphjmqc5XAi4RVtvau66yGbr5bgN7TGxjWCybs",
  "key35": "2XETouGFQYMSE29oZReAP5UrvpHzLNErDEwb4UZ9Xmf3W1rUE972KY7qqJh8zYKw6jeGcGVnJ3uv8SEqRU7hHUfS",
  "key36": "6WrPPWgxpyHAPqMF8XLMnj91jBJP9ajVt1GsDZaqaWpmiokRpxpyXhaVJog7t5hBx3qePwrDTwzLr2MN6WXR8LH",
  "key37": "4nPP94hPytX85aZkDAw4VSxJM3Wh7szwb6ummXwYnux4V3fQ76sLJXuRAuXrvmmDufTDrkXKjC3vH6D77z1gp28G",
  "key38": "1juEuSknKYnxLz1bBPxpGkiBYYGnnwBtuwa99jLUPjnY5GjzPVDN5TPWvNPGjEJj7vdjs4uoUt4dPQ8ftunQuJd",
  "key39": "219GcB98xEsVBD7tVAL6AnjrAXUkhCrD5G4Hf6tZmUh6pN37AD9yDQXiw4skBQHHvEXvoKPiuoTvghgnowtiydYW",
  "key40": "4ofbJhx4VKuZhQhrNb26MT6dq8GRcsayRc9N9SGgtvY9SGxfRq28B1Vh3tuFLxUmwMfXrMxY9EAMcvKvkiKgW9LC",
  "key41": "5JC9ByM5m2PYCBBR7zC32g3BoPE8PBJPMgr8chFG3epBUbQ2NdHtnSzXfhwbi2hbP77n66tfCG4GmoaN8DsPphB6",
  "key42": "2BpRRqN4ibrdn1HpTuVktKbQhVLorb6RzhsA8tuvJDUHfKZatb2wbQk6dwp7Rz6116A5ucQ7yDBFSgySfBVaUKTf",
  "key43": "2uKfw3upPMgh93LpLADwfABSUd5C5XUKdf6F37B4oSnVfjbaeCZfzAwDqy9cyHZFM5GXvFAvVtQ962GgZ4WydeD9",
  "key44": "3ZbHviZrVW2kvWLhcDEsvSsmaekvAG5fWUmqXowEBRpaigADk4HqQhkEZVqYXeeGygs1HD8fUWgjY4d7jqHYtcp5",
  "key45": "3zVT8DFyH2sCmuf2qh5QYm5Ee5fvEyZgLoCm4TVimSCGEJd2DVnPYdk5X5tRdmG2adtxLBuA6DUwGAKdeycNDoVY"
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
