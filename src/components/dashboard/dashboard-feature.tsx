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
    "4EWbB3f3QxhqW9oX7kWkeGrTN1LB7Mt812RwKvViAhwQZF3cJpGfbX4VmYwgfFj42p2C7Czp55RF5ftA95q8XPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjhM4tkdSYFfHkeprHoncEovBxEEV2gpjBzgu8kPvixirJH5Dyo29zTYqypRCVKLSFSJVYbFN4qFdPHBNdvt8qN",
  "key1": "23V5n3SHso7vvEcAhW9hJWY5tHVph7XCW3sdvrgbnMLTGbcBHX4X7ZQPdL4NxYssp1Mf7mTcXgsbkm2zjXHHwqfk",
  "key2": "58CREBmtPy1rsQJGUS1DC2eCHvfAA1CEYhb5skiiXcqtYAjppcnEL7pHtFUDVteg4Zz4EjHriduAmdY65TRpHTC6",
  "key3": "3WKBxSSkf5djKqXfFuFzEWcnqNFovyz54UBAsW7PDas4dND3PPtCN7heADrAashJWDzvKWn6GEY8Cx3WN6YUMxb2",
  "key4": "NqM1cvgv2VYCQX4EfZpxdcsj5jg87rL55JvtyRkZdwNqbQiyvDULkMsXcPEA8HF1VYocWiAB6YKtFhatvbZszKE",
  "key5": "z6UxAcCnAuh3ZKmzFNKena587nEdYMEFYF3HHWE7x2sEZ2GGpYZdrZfSiuhjnt94SZU7rCXSRcYZGxmNFSTZmKR",
  "key6": "4TKTB3ULRB1cTUCTPn2sQzdYewSnUaqo6UByaZspMumUcRzNyAxpFhEZuMnXfjFQhh6Xzc7XrNjvoWiCQVSTSxPi",
  "key7": "24w3jVnXRQWt8dYxFwGLamNBEN4d8P4jwHCfCSpWawrrhVjNV79bWEKcyBqr9B3Y4Y1DGR6SMiEed1gAZEtUMMKi",
  "key8": "5a6WdmzS8JbYrwdDWE5ZsTJQsVzxoY4k3pZ2N7V2TYZvSY9obhHgMFXnKNmSRM4mM1htV4ZJr1LDjn5a8ncbUwp",
  "key9": "3NxxEyj9wXgWrgRTJUvGtGaZHAHVAMu9E5WwhyKRNjkBvUfkmAZbNQ5Fnpg4wmB9KmodTb1j28iNfpb9HiueaKi",
  "key10": "53To3XE9rdws3ASiEYQe7w2dFH1XmcLRN3Nz7Zd8TJ9JEUB81bXeEgjb8GFe2KtUJcMKDu2NgAznQ3iDTai3oWwR",
  "key11": "2KbHtgr1E3vBAU7KcB9uKq5TjcrmjBzM7AvNpY4HH6vPvmHjTW5SQTWaJpaeMZzMRS8wBM4hpX3FjW5FFaTXaRcD",
  "key12": "5yD2xf4C9FTn7nZehmvrhVVD1xRZknLE9rFSd6fSS2Rfepir6ZzdtfoKtShP7EJCtiG7mBFsDMez5PCP5uSoLhT5",
  "key13": "59q8RoZwgCPuAh99Ds4pbryc8gPCHoFemeZnoLFpYnPTBNRja9Bj9Ho2XV8CqRgPPQapiPosNaLFoXX49T7sP7Y1",
  "key14": "4anaUF7ZV7HFu24p6GFhJqmdqbBM7wfubAy4yAUqnrYwQffZxtRrdVprmtS7CtgQBr4qthBJMdUE62uu9qFkCxhS",
  "key15": "5goRA7v4wNkZpqNmLPs95fJ6pBhJsTNDWfMY1UMw71aLoe82oC8WeTyeUFFDLsHyzXFiyWt6HL3JQXyF9RwP6ojs",
  "key16": "3tzucZMri8uLoSJTZCrmbx7HJajos3j6RnJDRFCjJSgspEP5PwqHaXwD2Yo9J4SJGhFQun64unZVpRSTmXH65fEa",
  "key17": "5hErxzA4HJL8Zuu4XdLhsDcSYMBHkMDdji8FtSdaowUjTqJUqLyNg8Q1cn4ZHTWwqV7uHycLVLeFfxpFhf4kovrD",
  "key18": "AmSWbAjEcXoaVkpgcHSaJLEg1iszCE4MxYz7828ah7kpMNYkGno1fNaq2VCYTVekKhgdNkYe1gYr1m3CCRPbizi",
  "key19": "3ZVyQvrLJLHdw3trWtZRSoS3TLHkQmusoU2jz5ytDmd23FX9HMYrBBbu7cTwZDKBDhgwp62nphnwFfp1XGRy83za",
  "key20": "2ECrUW1f3gNGhqisLFGxeorsk5how3iDtnyd3b6b9rghYfaer2VXM6xf9G3thkGRPhhviVCpfLNEvXd6SCvmuWq2",
  "key21": "4ZRAqKfPkJuj6xHmZqoM1BNbKao24rgyjpKkcYmcZyEkxV4kmN38hgBLcwwaGxC4CYLZ66xqZ7GHtKcbaqJcU81E",
  "key22": "3EsBdwd1QQUrJpYwBxCYBhQgxYpMZuFPzXRzUvs41QobinsGGkqN7hq5ze5rmbfrZGxZK7VEHVnL1Go4FVyfSMy3",
  "key23": "5x866SvKAdnaB18aeGTJE1LFxXwF1cfipXsG3CnyGVoZzaaYtiX7jBwp5ZdmHHLQX7pYiTcRJbfz39zu1xiQhvBH",
  "key24": "29QqmWGN3WXi4vKAxYE22eifuBeAqo8oV9VPFSP1u2BuJtDrDs99qEFXkZVihwHUwKCQiKnWgxXgNibx9vYxopRh",
  "key25": "2NYDjGssNFLJcHD2nnsgUdZ7454CkWAoDTrDTR63xna4P1FmMRTeXSjZHprHSaeZKcutkXEsrGZd81dGTFsheimD",
  "key26": "5GNnp8QrAmc4s7doAfi8TC5qL4wYeaFpzJp6RBwioeKtdpemaPf7ANvt8jKqaC7s63k8asN7HsnauYrotLQ6QXub",
  "key27": "4JFhMMRSuRi6gXn4bpKVCdHRgWZKFy5HX3rcJ8HJpDXpfMjZWqmBHoVJhdeJAAeoKngZPnjDTrNe83V71pwbEYM",
  "key28": "fn6b4aevi1fjADUR9zEMx7chwmKS7FNaazfxPCboqCmETuPD1JtXCsVLxvHaq6RrMKdb7dFVebMR8Eixn9AnM9n",
  "key29": "2PegfwoheycqJe3ULyGpAXoJWDkY6N5MKgcCBgdXA2GUdgw3X1NQrc7DgqpJ9Z4ZWLtFLMsvYjZnEYagBKhNcD8q",
  "key30": "4cCULRprFqJE5WuHMfyBuPpNVFYQtu4woo3TcK7B7L2yTtZWYTiPpp5HiF8cf4sU3qTv4VyTyACDGurBi2b8zecD",
  "key31": "55Q9KeFHESdcCm1yEz6SsmrRxa1RJ1RjmCtuNBrjEGsLPYWewer36wLGJ3Uu4G1JYWjzn8gksiX9hKnqTg2SZ4oB",
  "key32": "26Qu2rHHXVjHWwYcutJoWKXMx93BfzTwogm8pymXZt3Kq3M83N8ThUce8r5gxWJ22FbP57P3w8iQcPr3ERRsDeKE",
  "key33": "DP3MLw7RGDAvNYvCgSHVkdViPFonrsoVLMHD4mC8Y1t1RUpjYBN6CbDgsv85tq4L9Zg9mxUeQRPpPcqdzvPMF9g",
  "key34": "3CMxcTBTuKLHLmqWsrgbpPoRu2PY5szbmj7i6m34DfTh9htDXsKY36A6LQsx42Vvcy2aquwTdzAUh6VcGwfPZV7o"
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
