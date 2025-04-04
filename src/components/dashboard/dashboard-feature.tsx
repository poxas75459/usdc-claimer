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
    "3QmWtyVpYXox4Ks6tqsikySWzGtCY8eTmDFV4hPXdaVGBcvqTxFsaGtS2T6vEfdgDk4Db2Yf9aB3nahUY1bwoEXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mtv7UcqMLE5SjPxGFbkR8tqXAUaDgy8chsLPb4bmY9zNXs9n1hkiLz2jcTpfeRuFBB3erVSWVNM96owsfFfKDo",
  "key1": "KMmURegkK2MraW4qriXk522SifiLcgUTprAe7wpiptZMP823cZbiPtF4UTTNj9pcAYqbu2AqwVhqjKoVBWRC1J9",
  "key2": "53seSkC5Jj8NeVSyCs3FYbPeRipZARJHsbq9zetGH4dchPgQcS55SnK7Lk4Aene6J6CezEKkYwArhKkeWPFCF2Gj",
  "key3": "NG6U89Z6kXa7LXoXvMEmaxkumg9zjpSk9NDXcV3x9nRDjEo1UTAsgBiX1fjnkSFdyYRZfna3HcKuzv1oCxUnNBF",
  "key4": "Qv8mCdUNQw4SYzd9V8i2YYjK6oo8TyDyygWB6v1PGDdMcv4AtPamfMzQmecT964FUvYkbcdkb2dTpHxexw1rbWH",
  "key5": "4iU8pXPpKHUoc3YtohrpX1J6hms5ZNTwHBNNRcrLzFnnHpYNxe5Mg2f8BMWFtKQJ8BudThRnYuMB3ci3nKKxqxUH",
  "key6": "3PowCMW56EmL8dN82GYxE9C8RS5hD1rVSKGVEBhjSNQRdjM7Ei5vPNcZbAW51U572Uk9kaDuRrnJuAiJkomk19Yd",
  "key7": "3Tywjhs74G5LpPsQaYpGBWK6cuaBSm1gMfqjica4SkmVRZyeK6pV4GW7ksyuV2wDHjY8nvTmHot9PHFLCjzNQ9oa",
  "key8": "4916ZbrTvTyFmdGjU6LSyAF1Bm8GXkCgXc9Rh82ngByCB4ENYb4HFRPMX1EZV47SoyvXyc28WdJtFVwPcoshkVhZ",
  "key9": "5Ey7rYfnpBVqfTHsMXygdPZBqRo64ceAmNiGnNMohkkps7SyDaLa1BSksvUW9PSmyYTDvJH5UYKAZEur94RPNb21",
  "key10": "5hYz54LhtLJRiTANECtqkAFpwYDxK9rQbHh8823kRpVsWt2cadmmUqzcbUVgJQaL4UBCqr7X7TL13ptyQ5wu43s2",
  "key11": "jCPNhP5o4uhag1dcTpiniQ5FCkUZFQn99wpBiVJ1uq4Ptx7dcCTYNLPPBFAw18Tq3sH37K36a15NkeA6sanyLHy",
  "key12": "DkmV4e25tVjocLnSPfUSPSNsRiZ6uYh1b6M7Czj7iYPtnZCLnUQuKL7DoiWjrgsd8PThBd9TYyNSGCjYr3dMCRN",
  "key13": "3G962siyJAb45TMwHLwAsrxtzVydibDdYZEeHifD9MJS5EfzqDjKV8xVe8qVL7VFiVWBVgaxrd3bhQM92nftrJ7k",
  "key14": "4D4wsHjmntyzYomuZKhkQp29A3Yh7MwwJCUsCSek8DnZFR7cd6ggrYvDNWsAKoxTZobjB4gb2y8fBozhBeP7YUeC",
  "key15": "4FVZiy5kpRDhbWbXhHhePTx4jHbaZXirq4mpZkE1upTQpNrqwPw4k8JS36NuXvyc71iWALpcmnArHRCo1MqnZFPv",
  "key16": "P93RWUH2frqQsRcLALXoqF1Ld9kbFf82UQAce4d1QZPCaCxF3Wh5NYrRgjT5aCXyYLmuQYXQGwBWm5sbFcn6bN1",
  "key17": "4ft3ca5aKiwi7CUHgAZ8wix5HCmdQ8n1R7AWjqNQkgWRjrqmSVmbRYW3jSpKdHSmUEwWNFC4nXhipB78itEg1NWx",
  "key18": "3PN53gT4xZqP1gZtm1YEjznMMupp6KMExfv5m9QXzQYGpLrtNk1jnS3DTUAYmCvwA2QuZkzaysA1QWbrDXFvKrRm",
  "key19": "2doWJrwC4PeUWZeWdVgGZiwnLqjpdNckWzjM41E9fWMWd8n6j1vDNC8sXHbk1G9aJ4Hyf18QhgcJusYuXRhQvhPJ",
  "key20": "5ZRkmuGyggqG68xieUGn145th4tyGcATbSnji7LZT1dwCHMCboxMuqb5Be8dsT2LCYGzPoPtcs77iqfDAXXQ9M77",
  "key21": "4bX43mmgFuCYvGGKca64ud8w6B98HzKcoeLCX2Xpgmbv3CakPrFHwiYwziDJJwcVNfCnBDYav9wbGJcD365a7yvm",
  "key22": "3Ky2KczuVkHHHaL4iWxEDCRUwukddovzUKQLazrm2rbMkLP3rPKGfNMqvyKckDJ8e2LTWq8seSoTtsHJNpAnc4TB",
  "key23": "5cF7DDMCpECg1x44MpSe5eAy6ByZPrxbUNWEj5FbXv1Q7rnvKwZacyMkXfb8MguWzWhNHkJDfBrjypwuXzTbVkNj",
  "key24": "46jJ72SWh5hdjn4DCxXGWiyPPybpETksCcr45JBCyydfvt9jZbNH3MNFcw2m6VHi6iHyaojHLCRNxXDF5gK7xkPH",
  "key25": "3gWtnEeVYS79HkWUfJ3xSFFPKfL5NqeGUKAD9z3LSkAmvJZzdqsJ1eD1Jrh93tDm73ZRg5nAgeCpT2CLhs34pWKi",
  "key26": "5aNPUqAdYKbnX9CbB3xxKg9wiajsdzHTa5sK2WZw2HcdYPfRVE9LyCDSvbgNGtcFwpYk2Efe4VdC4qJ82zMkggtd",
  "key27": "SgWUvE8nLt9e8yns8hSEyxRGP3qLbpdJQJ6uWrEVFT8ZqAD5XUWFCtYd482T7vMEJXofReV7fzZPmpRaHZowDP8",
  "key28": "qm5Ej6JGdwF8xDkfoYktaCqmcStQGoNnS11hSQszjPrwCFQb1zRRH55BNYHSA6Fyg7CuzGo5kDkxKjRHMzRh9zU",
  "key29": "51WegErKEAsodCG75Sv3gZ6RCwE7DwY1qMsQSfX6rvoTEbwRrHZPgnnA1b2rCHfRsmAJkrxL5hSci2c5gCtzG6Xd",
  "key30": "CpAdbDZWjZtnupCGhbQmeNZqwavT7oZLCR479XGmzrY1wiyje9Lxb4u33ELxt51SXH3YxmJuWJvNVi85sgk2zyH",
  "key31": "5pYjtfj6YeAJpYzsvceGUPpw6RmXUgVEi8yn29ktUs4NZydfoCF2QQxBLCwt7Go9V8vLzfKyYCjJFeZCSQUzCUi5",
  "key32": "3Vk7Qc798XRYBS4MsUFaGe9if5yWujs5sAV5Vq7ypKsoqHALtDPF99NRuY6WRN9WpeuM5qeYd4gCWEAic2FcZbuc",
  "key33": "5tX2gFxH3Rg1Cdn7NYv2sQtvMrF7D5Gori3KsBjcCu4z6MHxkgbs2AbtnRhXcGBQXbYA1BG1Qyz1VkCpz8yK75eU",
  "key34": "5q3VgP6ZqcfWMaWPLe8ovZyP3RPqykchAqLvNRuvgBEsHpaucvz2c4RK1RVrwGq9U6DGsWzGpGEGzNb2QDMBZGf5",
  "key35": "5BvtpRqNFhya2vqJZxJMvuKYMYxzr3PuT2sRn5cctDG2eWg6J3mrW9MbPXm3MKr7mNmUn3Ykr7qMJqeN3c8TLCrY",
  "key36": "4CZ7tLTvK279WW8SAmEDgZFaXxy5uA3fU5NsMN5CZWFEzC9RaXgBdcU6tBoJ99HdVBEWsfEvaojuk1qesE49gWF1",
  "key37": "8A7h1ydDUvJTGzKhXqBSDq9gxMrEzB6BTv8mNnydFVjouynvCeDfVYKJuU2KPhqCjSerRewLdCc5n4e1eoTdyt2",
  "key38": "376LErk61XLSYDeBxCjRPBvgFbp2D1fCfqXqV5t2kiqpB2joGc5PPpm8yF9ivTMQsryRWAho2k1N3hthXLZga1si",
  "key39": "5s1rVmwyaSqSAfrNaznhkpNhJXdBD9JdgjWC9iu5mZFn6q8PJebfsD41XA1A7vXo8avUeSMqZ5JqYi7CkU2inFWo",
  "key40": "5C657GFwTZ3L5BZNfArejopRKXRV8oy6YrgxPA2DGZSfDYA2Kxp46mgJ3s3cKqWHzoMpcwtBmcHBmXuyQP7JZYoy",
  "key41": "4eMds37GwswAicVT4Uq2VdHzyhQ6LpUK7Jv9oWQ1c4qmGezCrTn1RKKJS4BJJSrrLMQvJVfCNqH2rHvmV1wFos92",
  "key42": "3yKZe4cW4uSUGr8yCQt2mXbhV2BbMUcnV8kyBLnbtYoP9Wn7BQDvMEHACURZsSZSgvoAccyG7zNXZXuLCLehFcQv",
  "key43": "3p12inNK88hGLcUVB5o7xfJMavRV9bbMffxKYkJ8FyMavaxQ85oNHGfiKriFLhP3yuNa9H38qmPN1p8vLJgKbSm3",
  "key44": "4QHLWZrJmQEXmeMHrTn8e9VhMF2notL1c3V9e5uM9TFSsx6psVqrKMhzBu8gD374fY1Y4P4BV77kGXm3c19S7NbF",
  "key45": "bCrkEZ57cEhBTf72ceJ9M3JBmvVtSYWvUnAqHeXvLt4G8YnFpr8bdXvv4vtw5cb7rWQTm6WNEtxUQziSXEhPi5J",
  "key46": "QFpYzm7Ms1NGWgWASvSh3i8KoFNwU2MP4Vohok7sAE88KcxYYNinQKxkdB56znu1wqvUjRhzQaoAanDoNiHY3DT",
  "key47": "4U2qiXqNuZPZuHFQM8Wt8BZzNj2r9znd5YNkFCP4akWbTDGbAvw46BiKzdPDQYB4pdCBvNYmgCTxZoDg7KZxxwhu"
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
