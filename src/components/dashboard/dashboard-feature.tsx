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
    "22YBq9jT8NNJ3HuS463DXMjCbuu2eVrbiCQh2ezvxoQrSojn3bDmPC2L4GxzbtKjTxmu4WiQaopJ5CujVHMYwxUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKRbqnSxjv39DTZ8LcE9L3qzzb5YtJrEzHTyBVh5pgZThrru3HErksBzgtW8nqdPR7VePbFoGTfzHAYCf5sDPfN",
  "key1": "aCi2dnXjBiYByKmvbLkowsH26eWcoG182zDDWofWQ9nkJ9q6M1FmLtyP1XSQ9QWek9ouTTuKKiZQbtJx5AsFHQH",
  "key2": "3JwQP1wmxbKBtdsUvZ9gC7WMqW3b8GXvbE96WjmemCAZ3YVQpXk7Ho75AHcsaqdDejNDRfAVrS6YgGMa3FVMqdSJ",
  "key3": "3KKWvXBJw8yTec9iVCPchLEsssfLB4oT4Dc7C7CwTiDeLWz9StPf3XQMdyC6nVBc7bHSFt3aPJH5qqFvL7m7oqLw",
  "key4": "TZQjUCZXwX6EpvXoLjcmCbH9S5D6o3FztGjmk48KN8HS2oiDdE777nPX7gxFVEKAHJZVEqWEfqYCBQmxuRY5jfC",
  "key5": "2YSLujwrRoKJ7fLukqRLnxDvWmqgNGQgrpxB749YpanLBGKEgruoVE3rw3TdvGoLTEhSA7oMCP2ZT9CyBio9kDee",
  "key6": "5Qijd6Nq3YeRLSPShWhcpKXwStN7VTqCvE8bpTiYTZ2xi7oUvL33N3Utoy1cUWLd6aAwT8hqjT2TbtV2h5KiCVeZ",
  "key7": "1SkT3hhBALRoPjV9HSRxt6ArUoT2LNoULr9CzgvyfSV61s6Pk1T7s6ykmf9RPsAWFzUXU171vpFUYuVSmsDbQC7",
  "key8": "2cnAhEC8Vtgy7Pso9uX9tfCUrtf53neBTZCJwbsrHysHK3kNS3V7RHbfY1d8ktx5uoofbTaQYGAqjNmw62pxZQ6U",
  "key9": "4SzRHfTeQt5MiM7fThYxeJZgPZMLSeA2xNZMQSEevRAJyxGmJmWk9Tu7osfwdqL484bhBXY2CDXAvk1Dycp8jZsC",
  "key10": "5FBdHwjK3XGSb8PxvyScYPnsBPBGQiWHWHj29bs7n96VxuVr2Euu6Q5qLQht5anGbKn7EmWckzvRtuLuopsacPrf",
  "key11": "33VRZFeEExPiX2mE8K1Bkgfkj5dqLYt6yP8Aks8vGJexzPFy2wuDKdT4ciCzTJAUQjbKVTZKMYjRyCZRQTL6Gdo8",
  "key12": "pqEywMvMubchoNKDFSZhZZzNJrXRVUWP4tnMp3UVShnd29Y8UhkQD9x5BGfck7Eu86gUvvPuSAg3N7FzVJNN7ji",
  "key13": "5EUjcYx3XEn2a3jyMsAkDV3Ya2oq94oVjATe4U9i9yY8h1CpFeLgXtL28a3vB14djUmLAzQH5PYGAG6kXsZkEMGA",
  "key14": "2Kk7dMn8dsdks4t97G6mGhMTUjBcbT9pyQ2nYWYFEfpo93ncKWLXDHfLkq6gKSWPyuipKJRQiAmqRsL6JkK1ek38",
  "key15": "33WM8K26jG68EPjUuWafDXVs6dfq5rN4GvdTyp7Z9d9cZMzmKSt3yWkKwdhEbME7ZWD5uVJcjdaHaqT7LibHvg6T",
  "key16": "2qDk8nSEDxTR8y5VZyiL7z8SQv2XkC3a4URoq1VQwGX6RSkHXea5DDWRrgXnymLLbX8b3qUe2pdsMRb1mahRUCbc",
  "key17": "5YSti77YosCFBxoPB64uBiEtNAh5jpZ4KpK1DmUSaQ2ChSQahBsRCwo1bfAXKsdTdLRciVXiNLMKcJh2NrjTWHNf",
  "key18": "3qRKufguGP8mRhr9JXKX4S5wnow8Yvatv6iq24yUWMhzC5r6K1QPVZL95FbX9JVzqQBcbrAyJFRuXLvwKnVzwy2u",
  "key19": "2UXfTdheb2ra1bW5y7xx7YpHnRFV1NvWXcTEafasxz3aLmkso4Ao2UgfosNYxtoyGnbZJ3RZ2UMmWHX8CLsg8xV5",
  "key20": "52DcbRbfzy3TWU9JmHMVmCaKQwzMQgeFekskkCdXRQfowaXDYSJvUgPkPmjzG4rMf8Z7V72Pd8MLBTyJAYQkaJt2",
  "key21": "3L3G2Bfb9LZ8WFggjX7eAkKj3ahmb1Dq5oGC9JGwyB2XbTAo9piyfGzmS78BfYz5nQpsBjCtu8ZwVJKvtNUA4x6B",
  "key22": "UJuWjXAanZEcWPnGcdH8mk9MLPceeena8GZoW9HocvvLMpSm2gnwWTBbmeHoxuQHnQ1YjeJskr8TK7LRQVNBGxp",
  "key23": "HH86ZQg939GvhLZzYA4H2AWw3DTmMvBNu7fio44k867yncFM9zqsjTwHTWEh1nNVVxG8QkMgUEfB6QbUzGC9yif",
  "key24": "39rFmB7o5CAWzwBo3roUMF7pU6RHuJ7t2yjsy99TTT6unykCaABizHAY2fK4EJaVwPpzcKeTAo1vFCksMoqURPpq",
  "key25": "4DML6R5ktnhj9ZV8zJsVnwXKjaqkKYb5wMBypDmQ79fQUaX9nn3EBiHSYjXuJXu3zxvB35FW3hVz29XM67XJJ3Vv",
  "key26": "3R89TzCiAGnAcRxTvwsdE6xZJxijhiE9UBwcR1iZP9KuY47MASgUNq4jXGKx9p2GDjUNEGW1Md8JsPDMEoZujH8m",
  "key27": "4b7CQP9YY2Dkr41j4DPAEtw6aU5QoWymXVws3DWTBtYJbJSwr7uxL9yb2JjSZ3NgtHYBivgnJKFU6CJ94hnKDQ6k",
  "key28": "2sM3bpJGjam4PexqNfx9zBLXmwqqygiAsBu6HgKVtbQyoT1LnsMhEkAoG3SEURR2HedFkPwNCbA9zeDRgQLixdtA",
  "key29": "2xmXRjaFkxz3E3rYqvXoXwitzTf2A6Q8zTvHXggFx1ZWmvEUhJ7kbpdK2UAaBQf84dKPRJy8HD5nBaxUyyNcgvXb",
  "key30": "Q6tmaTRnd7TbpAEHSA7bqRJLJVXeatXpSVoA4dMYyogAazExgpkpLPL49G6Dg4ZjjQMbh4FyWGaY3MtMQjWNAdu",
  "key31": "5p8CXQYcHPZDcBW4sGGKonbdBYfnksUGBAxi953Gdq4DG8RpUEbDhzP3E6jf8WBiTt2TT7nE4umGKPQe6nMKjkmW",
  "key32": "4kW61BrFSuyAH9Z6ENWpqok4Y1tYgUWBggTsGDDtoCgNY8ZddWY4MXQRRexcs7PVMcAypQsDHayqTF1YU1934Neq",
  "key33": "2ubCVD5hnD7AUxMjXMDJxxRUpEyc4ZzoprNi8MKmmDZ7B8Yoigtwqv4dDgZCVfJQ66c8FiGr4jVq1BTJLi2AEznc",
  "key34": "5wPE2z97XNLznbRLPSZR2w5BLAUzzVtfPKc7nYhAzzupzHshwzF7Y6x4e9uF3VcwDNJ8KmMaky1Nbcnq55zLzeCj",
  "key35": "4fY3iYGBm6nT2XNgHbK1JNa3cqkdHwmUWgmtbE3LnGQB89CM3qPTQgsEb18qrmjCNyqjUHak1G7bNEuxK1UBZMBX",
  "key36": "4RUCmWMyV54NqhmALrbWZkYcCKeWnV5z9SwyBaspEsR8wYtWKCAtvRNDQkfCVmbM7nzrN99DLR3ATiR7zCo2wPP9",
  "key37": "2GbwmpedqNGDCeXHLqVveuc2mN1UrVL4dkKcxnudw2EH13hM4crh4TFfZgbuubPSVdBfYBjmYCQ6pvjew2BVwApQ",
  "key38": "jPMW2WhzK5raGiUPT98ZByXjgpSS57Q5Gc2vPFgYTpHnfsFntgBFFxYmVvVE2UJXXZAnYH3EVTe5ryhZ4ttevrz"
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
