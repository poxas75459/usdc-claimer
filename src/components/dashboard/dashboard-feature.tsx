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
    "443utSrsbMY5tJ1kCo4qv97XeTonSWW7XXRZHvmrJW78jbF1K1UbtyunYRyrhDFV3idRj77tphM9CSR9ycWwZ7hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YTgXLqjhVbmSfoXhPFNGGWsg9LcRN6Tx7SQ2SWrU2gFpbLRnJRFPQjSg2yewVv98wnMB96kC7s3j9UJM58fLe8q",
  "key1": "35VnJK2yFhhefCrMnrAS7fktUnw3HkemSrPE3ZfWMFkJAzpck4a1TEmnqado1WMXUe6h1hxBETgQNsSUAt6Qwhmp",
  "key2": "3Zuz9oiKwhqg3Ehocmc1LpxGetGELu1TqRfwaPz4diGPEFuV6hY6AP1ShSj7zxPFqkLxwXeLDaQpszPtZKHSsLzU",
  "key3": "3qK9Buftws6asEAU9oNPVVvteWfGFgYaPGGTJ4PoBBx9a7aDgH2tpoHNrYz7QPAX8zxVctSiXHqZghrG6SKP8vbK",
  "key4": "2fFRUEqB5iJUtakYvbVG2KGpRFnjGKgwcYGJdUSDeCCnWkxph1m3txkerJRxJXGJxdDGGzjfHmwW49obndXR9MeZ",
  "key5": "hktsR8UwEoFexYh8CWfSN3bdLx5AngfV8fdz8HEMt28mNqD8Ba32vkrAU777iBr2z7rPhKZqGKhqyXuhGbi5E1k",
  "key6": "5YWr41sDpLqNMmZzVduuUxsA9g2x2y9L742EHLAJqcPMFxYtFnXa3GzHacm3TJzyUGbuY6rKu2vKLRHB7PeFNBLc",
  "key7": "3P4aDdD8m3Vy7dPs573BigVvh1YYwPzVuedikd3L26tksDhRwacr2Up2UVc9MukqWycMD71eSBx8RpQBP7JBJDvm",
  "key8": "X7sNKg57oMyERAJdxL4SQSbK9SxDvZrXBGQX4xr5WmaiMVDc2SJzFxwnVrC6TJ5zHCm1tcnvJW3dwArFpXL8gQj",
  "key9": "3PAwCwDscCVKhBJkgiUmsWvtEyXP3Z66A8sCmwgDZKVJqMx8FzmAAxRJajMX4aoyGSg6kSo1EC1eCvXKooXNpDH6",
  "key10": "5VseGNAmvbWhPL2wUb9MdSMPzp3kwMek39V3E9o2cPWhqBQd1VuTQbqmXF1M26pp1bZajJ3YZwVijv7Yab1XawBc",
  "key11": "3v7erFvLGS5qLFbfidFvfQtaS5BcxzAQDtiTSdi311qwJvwUWibQAFTVKexfuoDHHFHxvk4yzsR1uq89cGvdfAxk",
  "key12": "3GQd9RZobo8gbSnFH6zQTqJ3BWdkgDeKJGA6eT69T5Uxh4p1fPhiRAzLyDcWxvBdTeDoTYc5zto1hu4gxzwcf1L4",
  "key13": "53K4dwWJ8uo2FJkvCXjjsraqZcEawJ4zVn5dYPQKDmVFBZFkEaDX2WihiBVci7cV4tpGC1bKWgdqeMHcdkAgu5ML",
  "key14": "5AyEfWG2b36sU8d53YjioSSs2pQ6F3Y3mUFuqmqfSSNf4gGZRvw1rSJFV3iG2e5gEVwnuAyuvzpjbaXk32uCKVs",
  "key15": "36UopqEM5yZ1nBqqqjUETzpxbp1Vm6efPtSkMe9itzAEXbR9fVURyBFwkKzhbtfCJe78c1mcbr7Dr8rArdqjyB4g",
  "key16": "2f9sujPCbeg8HaPWugLkx3HN53tPVWLAqBhCE3Jfp22MrbCunFt5P98GVjtxHJoXm91pmVAv7Yv9BeNdtRokWqaA",
  "key17": "4KHLbGnB7a2BzWbR5LCXyDHtB4p6ckTBkAXRpFoDfc64vZ1p1puaEMoboJ7T7yQw3Mw2refR7vLXLxGVuAnEb2Dq",
  "key18": "wAHefmMzY22XeX5B9wNpdU4v36doaip5vFgVxBrdgifh76HEyroi968gyrc2Gj6x9XkuzWL51DoR37tbZc6FhjU",
  "key19": "5ictVobRFkAcwnVKwka9jjAdUHJ6FJF8Qxu32Fkx7yq662rEf6zoAZPj41BywpMrxxLHqB5JuVDZP1D8ZMJZ5Ff3",
  "key20": "3hZw5aE348v1LYZgewNurq7Pafiku2L7X7vuyubbvkM7qnyYfyrkLwXG6qFZNFXQEJLbbz4A4KejkXU2LayhRhwk",
  "key21": "yXEzzEEwE5cNpyWgCqj12vbhBBFZFxgzZnGGkZXayc1R957yqA7HxdQr2W36r9yhiwzvydVBykTvVfJEif1xNcY",
  "key22": "63iztWs7oh4Mz37zBaDtaUam4MYLxSF5DxoAG6JshyEiHa7QaNV2CtENLS92DpV6uaBrgU2XaeqC4z3kq5Cq9BHJ",
  "key23": "3GWvYipx6e9UsBXv3q2K4rQw4GbbeHHo1qgYuDAw2dSkbHZywjqepcoq46z7Mok1cUW9RdZi5oEv6oYcFjTUthGQ",
  "key24": "4P4FrLYpDTjy68QNFGyv57k5PGmQojW4RN5HFH4iHLnhr6DE77aLiTB8LkxExaKbv2vU2Nrsymkzapa8McmF6qCT",
  "key25": "28LgjRP3hiNTP1nAp6mSWCnL46aWWtCAzv1AyN7obpRPXvmiRdiVHGFaxjg5QAUbR1xPZhzQtN158pKm2WHXoKD4",
  "key26": "4retdajWJkirVo8w2nMJfkfoBvqsJR6QDbho3E9bLGc5Y7MRU8bgGyVRCkWfXP5q4Papf2v63Ln7dBH7WPgCGh6",
  "key27": "2itPZ9hFKwZoDVxvjAE1rekm5P3FzSU2joJaLg1QYn5iKZjQUX2V6PGEBqAe4KbBZgK9JNzpTQn5xKqyKNGNwftW",
  "key28": "5QnBbcArX5m7da7nrwNszZMEkZThvZSCHz8F5Vj4hgquUgzNQAUa9287pCNj2HmYwsoGeU99DQ91AkKfBkGezGRN",
  "key29": "Ptbh5UoUApDBjsqefCcBrDTBNdcBCYRL3gttZwseBv4qNUb34ZL7T1jWi3hUwiWN1d2Q1JHQhwzj23ZxdJhZ5Dk",
  "key30": "4LJDh2md6NfHiuZHwZ1UGMFCefqfMiSFsYNDnqMfrEVa18auuaKobyybyYvXDts99oDbkV7kbuABYJGfwNoCJ9XU",
  "key31": "muqmVG7ETbaNZQzh7rdwQ6Jj7afwLEkaBA36CPTB6EvhiT5Z6BkAwbWLSnZQdA6yeZ3bkwFwFaKN7kqnhMGfFPD",
  "key32": "4e9vLHD541USy231ESh2HTSjG1hJohSkZpDUDKyxrD8GkdtksLpyCGjgyfGfZw4kXycXrtSF8saU9vDvHnrV2rQr",
  "key33": "GEgiH6JCYif7uaAYSunaCUvd72bmNd9hnnWn8rB1JXENno6Di6CL7ujc95YAiVVcbDLud6Sx2ZkCGcGgsXoFqPL",
  "key34": "4AsB3xQamSG3P6uJ4NV9oUA2BdXjLgdHwghTTf9EkkF3mLwkdSWrNjWo4QhLZnKm1fZeCFNcJaMKJqEvvBS38RPo",
  "key35": "9wtZ1aRT9F7gb3M9Nn2jJ6qdkLU1bxVVsbHwujixfSHV1yUpJ2vSY557a4pEXk3L9AiVVWXAY1XpEQtj2Ca3b3N",
  "key36": "4bxjgQLByJkbkXYYeaYmtwiCEJZK6jcozYKwJcTanxeye9F5UrdeowWy2VthrCRBY2tXEgBhC43UBvKNQDhspCLS",
  "key37": "3i92qm52XKcHPqnyeAQ6iguLQZBnmt4kaapyGP9pzdLKeXNWpCVJQrVDZKCYeGtn7xzjggmrUPx1xUVD53fc9G21",
  "key38": "4LM2EnhweefE3k2GsMB4SzVQ2xxu4rfWhQX7nGu31RgyFyNJdEpyaBkKWuSR57xqFtRVt3ZKX61AEA2jH9M2eEEE",
  "key39": "24sd1UBHhCRtQwTvj2U4rXHwpVsmwh4ekCUV5gp2k4U4yxS3tnWTCeMozsCJPoffqTX8H8QVXJ3aC277Aq7z4KTW",
  "key40": "3fnU5FSoC8AQTRrwk87hVGPaYZwe9rX3efFT5RsQyVno9XHSsJqFrrq3eQKP18zaQeuZrHjL6DtE2qRo3c8dB6hZ",
  "key41": "3ZYrnJyr1wJK4BkjpqzMtD4VH2YSxGUqDSkEq9UxrEgx5Qh4rmud9Li97ECkpvRJ9eN7dqWEJQSteAjYN4GXo3W4",
  "key42": "4awPZbV8B7qekMLSU4SjRiw5djtkmmXJbVox6WKomLKUC4qM1Z1p9dY7mE9cxb4vq31YYRk6wjiRQEdP4vP3u1mH",
  "key43": "uVLuvuM9UuiuX7CRapCaMhvexTaa5EpDLeGkHbPj7XuiZaVRieEmztMHygGe1GoVKUFvkcHnEBiQmZsFkRTyc29"
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
