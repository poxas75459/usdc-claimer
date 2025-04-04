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
    "2Hjz8wt1wbaBxbyY23cn8zGFi5tVGD7xmaKM3jMs36N1athGwpeCfk3sdHCauKtZ5o288zpGR5uBmfM9PTsBgbrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hocHLV58Dg4d6gKVD6E6nnxLAMmF1WtttpoTnkxPBy7puZh3GazPgns9Yj7HhMqRYKQq6k1p6DpeTheF85Tetrh",
  "key1": "3rxHft8SSMicAruUwiGuaCDFBJBgn7u2Rx1W9mqoVp6jdnadMJ3BF74nSRNSBGkw9m2xvJDvXeXAzhYFZct4Qq1Q",
  "key2": "3zg94bDa9ND4hPdDfJohv68DFi6NiAShUKFbkaEb1mrYNbZPKSxzfcqJQc6xqHwsPHJitjzKJR7BJ5s2tBpWzkkG",
  "key3": "umLyMqzr6zG47U2DeEidDN71TTvXdiQ2gbKi2dnQoBdcCKYh8z9sat14aKQKyi6jSi3xy1vk2Ec8ipa8Zsw9rCN",
  "key4": "3LE4bhLgrVPJMb8mFoWn7D567TBcsbtCGS59nBQCx1PjKeQEkBuRE3HpxZDZ3ooFsu591FQFtM8WVA4mDwDENJiv",
  "key5": "4wZ6gwr7nRhh8BCs5XtioHALwT9cuT3BdMvWiqcW9rFDFtqABGGWpu38fXAvp8UYf9YLKKQpePFLBo1qNuHy8oCw",
  "key6": "63oQ8zrEvJsRcKVHtFCGUxn3rwMK6u3JgLnr3AJ4fRkhYtzsBpxsBKtmYbyTDXvnNmtfA8Kpp8VayqGU8F4ju4LN",
  "key7": "oq86b4rSZoabBoUTe5XiCDgUoWBL8WdYJj2Ra2RqqoNBqZ7dLb1MnLBJGU3EdtsxVAkTKUFU7uTX2Qg4yVfqPgz",
  "key8": "4zmUBknrCHKPttAuAiCMoukinR3uhzMaFwc8mbwmmj17p8UhBeByzaz6z9eWV5vAyrHfWdHgq2UMzqibGimK7dDE",
  "key9": "4e94u8tFoQUM1pknpzpG4HyktqraJEdRJ2Y18RN5oEWKQdDtjjP9NNC8WPRMWoqZGXz3JVujatzmuZxPjGGv6Aib",
  "key10": "2yivR6Rde45YKXVHUD4FLqWLMfahuNppp2KfZgxBsW3a9zKwC9VuxB54bTgjLvqGc9qYoGSyV9HiyhDrLT5NrGUq",
  "key11": "3mYJZa8uPxev7K7y8kqx7EoDZHZ5uzTHuQ3eVzX4kTBWzrTpZHRTmNPKUQqZnpiqPEmRaJi3zystJzSaVpjmWrux",
  "key12": "E6F8q3F8CqKGxEfLqrdBYQ5sAS12WC4CV6ZZhG1aoLXxDVKqpYSP1B3EyszitSdiTku1GRkL1fmrh8kwCRGPEr5",
  "key13": "3Fjcw5G8iVjAKVJnT38h1A2sSYJABim2oHidootaQNKtdPyaduGfLxVmaUrRC2priBkGCvszYhga8VdTUHVcddac",
  "key14": "4vE8EruG6ragJdBEcLVf1nYJJzSQLHbVB7zpQCWEcgpvQTzJLqCqLyimo5M4ZK7bJSpYYWadDHcQ3YsS5B7k2btY",
  "key15": "3XfasDcA5hC7bWJVqPTXQSKMPDhe9vJ3DEUEVnCKzV2tzL9BRnGcQbkEgimAs6K7RUkKjLnwtcDsjMA5sLS6zD1S",
  "key16": "4pYRGbCJYRuHczt7Nid6tbJTxaKMYCNFBRwNtPqMApZrnB3nuAVzuwa8npedoCBZ8AvEuATr5a9rc7ZTpdo5gzqE",
  "key17": "3B56mzZAi9DDfzqTBsdoFUDwG4NXUDGN1nWVGMSWrrp8FSc4ERBEfNoUi951LZNmwuYYHhgKJvMrLY4YRduTu2ZP",
  "key18": "2vaA3G4cVDg46iK7Qkmo4f66KyXRDcmimmNLvFiBMQLhsoHvR3MTezexN8tdTWBSGot9WXoUxvLnxohNKgiQkyLK",
  "key19": "4YEsT6p2RnKywNssDfZvszfDkawG4HtLyMuw3sjphxUTcBZ4FgzLHvN5uiqzv9nwR6FwsdQJqjxRM2dWpCygkwFX",
  "key20": "d1U2bdw7gKPhwhJbLca3nbh13YuvE3S4xDw1fDg6gU34KZdPQtAoNLu5DheQv4ViNyjwTcDqMs5dLjrM1K13oFA",
  "key21": "2y2ULKcBWz8P5P52E9jmtifxzFBMjAi35t4EWgn9BAfDcVwiFCajw1YkLr6uoRCxyzciniRdR11cyfPT7irfenS6",
  "key22": "ZYwL1joHumvUeMnU3n4rKh4w6ubqyn5pW8WRDpRKvb6ASmVdzWrdFPPNC61o5zCG2GhuWRemQQ3LeF753XjrG5D",
  "key23": "2JvpMyEYmP7h1Z26H3xn4T5BwbrC9KaXE1TXVQzcpM6KTDkCEDUF8mqjSF6HUvih92y2yNn26ZF7J1Rb8KzQx65N",
  "key24": "5Uw4JcYuNdwGeRnnTvGANiZ41NmuJ72y1URMacE1VSkFhYDtTYFYKSythLEyAXXFjYbZpuRxPXJpcnmauqugwkdT",
  "key25": "2rDj9gzWwaJbFXrYDf2ZbjP2PpcJs99WDTvnvz6DoN3ENgFn2Gs496vx8BJ1vhhTHYZy8CDFBFKiKLL7o7bCSqnj",
  "key26": "28ViqVKYYa18ej4cy9wCCAJEuEDmwyw2HqFGsiSKSJPaZfbSY2mb9AP5EEmsdydbV5C8CG6yP1wqx1Rkr9PK81vr",
  "key27": "2qsxcYo1kVWM1GFFWNVyeEbNZRnBhBLRmnJpMr9yCdmUQdPLhfumimvJSK1AZeyqPK8YrtwSC7gRVazDX3easwUc",
  "key28": "3XCf8JssnsTMCjG1kynHvRMmkjsyD3LdjmKfQzpRcPiDXeNYB7yb2H73i2nDjqQFQLFkYiEmUZ5ALdyYv161t5iR",
  "key29": "5xWfqFQTLAkv7GkQtErcmUAiSnMvkLwWUzuXBcXfPUDjaDCzffyHyetvhb5hqsYd322uFVYrjn7Djhc8tXerCk6n",
  "key30": "5sd8CtFuUJ96UTc3QK3KxeW4SJ3Y9veFCcd1s7oL973iWFF74BZNmhu1ytW3Lgk4BrDaLQbM3AfvTfAsxAej65L6",
  "key31": "52mAn3Af17ZZJ19qeUWGivBAFyzC1eQyZQa56PTLSC11hKsqCrThfjJtxbqiochaQX29VsUheZkVFKdFA4S1o2uF",
  "key32": "4Q4Z2ojXZzMc6yXUWPgvjhsCGafBzLjFif1X9RA5EuqRCHrDv4LLPEK5nQQjNHfMfG1UkkbbZfqvXacEj8NmZroN",
  "key33": "3mC7kmyguBr1B8sryLdwY5ToUQgESUBbxKMdrvfyAV7BbaBtsj4hzafx9cLHfHL37XsnYjnYZagUByUXZZtLqRJr",
  "key34": "547jFB7qT4khnezWnNAMG9vbpLUaUXW6oamiw5VgcG1u7HZHxY871pyY1j1guwXgKT2oi5vWLbTmk9JQGvvha7Y4",
  "key35": "QJNZX4BKXejfK7WSNVU6cqPSnavW6UTXuuU29zaq8prdeDUBd7c3nXakBB4SiQZAQQcpWi4Ch23sPgz2XEjJ5mK",
  "key36": "3iitUdATwHr91YurTbj7fT5qwoCi9jLiwRKbycveZhMppbfehVWB8qHreTwj3arfZ518VvoMF8r5bzk7kiK3Vmzb"
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
