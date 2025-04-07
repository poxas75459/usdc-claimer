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
    "JjQ9sJTppUFAG73AE5hahuni5TJNvhjnGe74xqSXrg4mYLq5kZi3MMYF2jKPvt9R6YcFciD7ryGHXsDyTQQeJgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CtdFE6DadgkK6i4mQgN4uPfTwJ5Fv6CtTx5DwpRsWvA3sMrYdPtudLLo4pWhuPCW5YCM6VDCpKPxGBNhYmAZr9h",
  "key1": "5buPwe7t4V6nK4WoLKQ8c6jmCNy6qErpPYUo1MbdvdyUmzM2ACR9HnsVY5P3dsFtpmyodeS6aFaVT1YxcRrhvXbi",
  "key2": "2JV1KgXvVZR31S2195DkL7YrBpUDhZA7kQJTvh2Hjx6FnkzGaQFkzKrNAxsvYPZhQ6UoAEtzyF4d8VGg9rR7hSRo",
  "key3": "2EyscWx6mMWbuTheGqFZD3qH5jnwp7kDbJmuzvv4jh1BfSmw1sNipXKCWNqcsRFK7nVBik17NVHWRjUA1LeWPAQG",
  "key4": "4YAAFn6tRMQ348S9PivqfqfQsZXVNpewSxLDRtDAUYsSh29Y5SvwiisSsEu1RYTg5exUHpWdwuA5qdK13ZzAnbZE",
  "key5": "ypJMsMJH63tbKxzcjEcHfeD3jv1ymggdvgNFDP7o6bNE3EYygCdo4u3XSaVMG8LTBge4pNqzUqsLAv9qh63vRow",
  "key6": "3VWTS9XAsC1YT5Fo9WTs9LUXzdZZXYenRzqcYKmcBHLbTHQCwYts8BdZMgwmVYdbN53sGvMJSsfP9ASERa875JDN",
  "key7": "3kzrMbL4Rqb4XuLaB5HLwwzFWAw6nARZHaE27LU9vDKYxPyovGu58pcR1q6KdHdbTUhQWERkd6mdAsiivbA2czKE",
  "key8": "47TcK69jtqVrawa38w3TXUVEUANcomGQW8cuRXvZrqUXo7obQYEnZ6zk7DqbGzgj3S1oKfyrp89DkXGSbu5xLJbH",
  "key9": "oRTuyZqLKn27JyRQ7oSYRJMABudCpejkjHWccmYN4kL8ATrX5qw8War74SLS9NwhnZ1KV9C4rJQrefeNxagaYkj",
  "key10": "2CrPcB7cvZb36XK6ZbdopDAA8N5SwG2zkiUrH5uyEpyQs9nHKU6mvpmVgch59nHVNv81s2aLVLvg91pp4hnbkvcR",
  "key11": "2JqosJyiwPuxhtRz1QpuSj2y25Cc9M4BqquzTEn6vkxms6Hg7Kvtj3eg929GEFYSmBqMDWEZpHZBt97brjqyfQd6",
  "key12": "2PemSmX2AaoWB8XFVHo1L3rHPh3fqu4WYRMZo9i57VRUE4DLY14p1JtZwKt7CKWriotaFonPzaLEpBquSQRATNFP",
  "key13": "iTLSs8VUxTp1KzbRK1FkF4h3W9LAfoWcnpFHVSB3AP3VxVknkAX1kfxv8iLbqaekRXb2G6XJ8EQJkx9hPUcMYDC",
  "key14": "2WcwuZDsUPrdhiJvr2DtFg8YHUh7t9ZAwhtDJp8BCvx1snb4r3oBVfEbENh6A62LNDwapdU1RhJNw34mjRS5BumV",
  "key15": "pZF2FNaxFqZFD9RYfoPwcEXCmzSCXeQeAD32bLng1CLnehegAQQZ9LMc2CJgM28bv9CqT7Z9erD83jb47BMZUjj",
  "key16": "3XP5qttPgH3YKDQD35yTgkrfaSfRN1ra37W2UScPpo5qzwdrotxa8YkY7c84i5TiftJJRbC5JqFUrAcQEawNjtHr",
  "key17": "5uoM2ZEuQtiXkjUKMdibqjmkHFDwyDCCZm7dMbknNbkb6JM73JAyDfv33UopkAAvahCw9jjycWLimWtVuwy4wZ6G",
  "key18": "2XwQ9cWxxtPE83VQ1BAwvtZL9Zk3HQR6hyCdvvuZnpLMx4gvpULMVND6UzA8JxqXMYtC5spkNdoqb1wUuSTQYRf7",
  "key19": "63fd2ZTpQSCjGbq7fajqLH7bTjhQMvCJDhvAw4pTgvqCzi37MDPJf8cJBmqv5DyQykU5i21ZXb1r6vrq4ZPppW6q",
  "key20": "wFWj2XGUexmGNKfbt5EnAJiDuzESYDPNsivLpTYsgyj4Tx9UUPc8PH6WYwerovSmq8GsmFHCuaRHS6jxcJKkgmt",
  "key21": "2kqkHcotHgygpS4wmwhXSTYrgpAht71RkfjDupEJPEbGKFHHqmxSy7Bz195Bdk5nGjwe3nMyJsqacLW6H77g9erk",
  "key22": "2BsPqMGkCB7B664picdKcWpNqomHVJLkUjuSeHzxSynGPmHzaLxYW9n8NoJN3a4XPFc5CRGMyCfB3MhjvG6i8EZK",
  "key23": "zdHTiaFhVfPu7WQxVEkQoxqFHpUUVzrM9N9wH6W4FxiJcrgMbzgXZdnGSNNhzits3tgXWHKz5Qh9v7KUFNBoHNU",
  "key24": "67gh9vCy2BMQZcQvZtgDaAzMUeN6HU1ASsMLZGCDPmN9tbRR7gay7PRjvsJ5iAJh7t4ByQmy2Hv9G1VqJTdutHYL",
  "key25": "5M8Y6pey3ez1bNC8ZoBdT5YUrZV8r7eB4M6q62F7CvKttDrDmt8YdcCA5fGDqKxxLqzPQq9G2HmztnTaACVDLvdM",
  "key26": "4MiJ82R5C3Lv2U1Zqg6FEmhBwgQRU3C5DLwtB2jozWgRgJJam5R2E8YugMYcmVx35R4HfHAeYsvKdmJqBuLT1FtW",
  "key27": "MKpJSKefMRKvEcyiX8k6hstM9xFXHcwCcMeq3J7DBZsAF8uStQjQho5K5cifMELMFCSdTbGk5hNYN8chjThuWm7",
  "key28": "RyfcbGQ2hPeBxufhcBzNsfkTDFg9sak5nq8RcDdRigCbW7vwTjc68H3CvgDiGEyprfR9Xyw4PH5KJBu8dZX5o8Y",
  "key29": "5nuTYdeaUqoykAtU1qp69Q74NSiHUZWv7x9qU66HWq6M47QDi2bVv6LBCtpotJXNyRUV3YzrgkMZsrTmQHcgBmhC",
  "key30": "4jNqR2XRBgKGi3kzPfUKYfi635jgrVa587GUiDEZjY41wUfurdR2UfFEij8HdK2V4fVi3uorkZVxWahvzW1V2r75",
  "key31": "49UDpqc1NzXnMrn3D9AtJiEW1UVdjVPshT9P9K82kw9UeKx8gWeMWNQFnfpvkUR27FuCv4uDB2iFfR1PG3JQnH3Y",
  "key32": "3dcgHNfY2qLf49KL4Xo7PFRwbATNBvkxVuVfpt319otHbB1srgJxFigcctWmvznWMtUam6teTzADjXxueVx8mhqP",
  "key33": "4wXL5m4kwpqpLeLbsrYRFsDrnTj661xDbNr3zJjYNAciuxbudaoAZ4hMN9XapzK7EzdJRJFGwdTrdm4K1GpKhcbt",
  "key34": "55hjiMVAK9SCETRbE4CREbrUv7Msnkf3kmF7EQpRtrDPdx5SUfXFvVVDjUQREx8B1qHHAGWwTBXAuAS5UfvTWtjR",
  "key35": "3AcfMmbnL9Cuuh5v1RCbmK9YTbykvnNepNoye4uEo8g6PBWyVerUDdf2y5Xc41Tr3S8Sk77AJfoDM884FGBRjRK8",
  "key36": "5RPsVEgkeMy8kbA5JrhTXk39yAqhXgPstSKTx8xQ3GGwaaSgeFmHqdLA6iYfMfEg8ce1Svwc416Ahvbtthgd1ZpF",
  "key37": "55hLAr7MBfCcNtcovMqdwkHVPwYE9bugg1rNrTECT7atb4WgiShafLSJADeFZGtz15t4UTfM245ytij6eV1tmkTr",
  "key38": "3afc8pU4ZuyrSikBcy5VgJ3ecj8CvJxwq9DGxziyFjML8Gy6FBGer5osddNpuEjfLgTarHnzjhrVr1NY71TQrLrG",
  "key39": "22eaKka6w1MZBuNvduiRypvR7SNbd2vPT2ZoJqVoiHHiyw9VPeYksg7Lo2QyS7eCrJjAECPBpjKGLhRB6s6tmYMh",
  "key40": "5htnMN5rMTQMYQXBRtPSdHE9uTHNhMJGowiLefekLfMNwzB6wwBcTL7mey4EzFWUVNrNteZxDqCEAUYFTz2oFTiC",
  "key41": "54EWSWrNwfZrbCsYSBm8eadtMkrHvZA8YGLWnuEoQUoJ6yLm5qb8nUTsbA66BV54UTw26M2K9fqN8aruBUU6Aqqj"
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
