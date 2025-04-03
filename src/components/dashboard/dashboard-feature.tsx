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
    "2Cizqh12AwzRWcQRa7jjeptdDDqpZE6LqHAvLY5ky82v896iT6NnvskrT5QHJScBKi4zx1PBSRLTF9DYvPzpHnJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcDX218he9VutgNDgw4rGiWdoREMWeZKUBE9nYusUysQW5FSegiRPWeRKui3SeezE6kDtJzj1rwfSVCuCR3J7jM",
  "key1": "61hyJvhsHVN7J7N31gvh6NYi1hk2Hf8EsXjAHMBW4yjk5JfdVz4diSRs9zFPYmYmfxAXGAiLPVCqwqXRWn3qaAKP",
  "key2": "5nneEKCtrmWaB2Sa2vge6vB5patmAswvaehB3N9SENRAJqrH9oihCcLY2ZFNK4chWXMfcRzWuwLsknhhfb7bEZkj",
  "key3": "45yeffc2yPkYK4amLW2LrU8pWMjMiYzv715KsNpSz5rVJLx9aqS9XYQa2FN8BmiH3qVkMSniBYFbTgjMzmGLA6Gr",
  "key4": "458Zhr1naqyqXykPSdx8ai1h6sxvbuPuVQ4uVzz1Csh7kjmKVqbwMq8zt8hYuay7DdY46h7nnwXWQUmWoCU1geuz",
  "key5": "3yk1XARWYFfu1EnTZD6iQY5oU7eZTQEMiVNbNyb2YQmyeBVgiDYhcASKzBB8Gk5y5CHWoBamDewnbfQP4STGyMEF",
  "key6": "4tBux3F38tEtQSkvbD93JR9DpMRjaWiEwwSntXkvQBps4x2tcVvPtZM5RbHsFtWoNgR68NmoPT8QBvrzV8DbM1HQ",
  "key7": "3VTaVw4p39z4xbeoczyPgw97W5h78Bz7skJmPaDXG8doevDKoXKP3jbyFbEZZJd7cubAwTBEBnkUWXoRSqLpzyHz",
  "key8": "3aqXFHmFTc5kuYt7Dggwdferb5Hcx4haGArmT7hGi2p7Nk5ee9KeYKPTndzoTfsz4va5GfLxKJyVwY2CXWpGPgyH",
  "key9": "4uqA7ZEdjJXKVX6DfScCaDHZgyYVj6CnHz17drvjhRaPoncAiPLhRyskhTpQMHPcha3jJj7oURFMEnAtknctJpTZ",
  "key10": "4jbG5nTpZCFUEUqRavUoUu9WcrYXda3SaihbdaAdp2Wq8nWQnpfaaW61sFvPcr1LzY6sGbS56g3Cj99aFaz1xN4a",
  "key11": "yAK1UmRbyqeT8Gfwtz24scfsok3uufy3oZFvHnNGyivQFsRWTRMoZ1KUMEYPxddcKcMSnXb9ZdiVxdsswcfLg9u",
  "key12": "3oQm6fdTT9kYMBbbwDkwz1z5Np5SU28CYd14yzGunoKkRP9XjK1k3YBWDxHEcVDvQaZGGfGH9w6fBJbGWh1czqsY",
  "key13": "26KShaUHNTHE7jwPkG8gxWLCwh4h1YwncFAN58n3g3t6Dq6Pq8K85zXpcmbX7btX3fUNZSi9JYzspSgYiEKQ7gSn",
  "key14": "v3GNg8pCttNCUh1PWwKgp1L9S2T1HEraH1i5odczWHS35d1DWtoco1sMYL4xtvFAREPXCHL96jYkHBcthPoVRvT",
  "key15": "tJ6YmYTwwi5PKf3cu9tFU2BBZgLuheDtsH82i9sTusjeVQhTCYcb2dYCTXyPDc7jHmmhCroiB2C2MnMUibDnBrA",
  "key16": "2sBapHEdBTzMfP4j32FZsdeab9pGw7tDNTsZ1nwVefdmQatpJAYuTiWircT9bxdu5coh5s2y2xiPJ6gV9V9VthhV",
  "key17": "2zJUmbQxR6zvJJom3ovLxBL3TAHgG7Pt9NFRHPULjuzo34eA8gkSKXPdehFBtWQLWJKAvy9V2FdF5nL2vVyMq76b",
  "key18": "3eW6DXpgNkHeVxZBgBkraheeaC5s7e87Do4rZYCA93Q3ECpqjRjSgSAL8Gmfnv7wNTwC33Pcn4ZYJMwudqqixNQv",
  "key19": "4fbdVwt3TPLmjv4LtPvcVoZNYStLfXFw1qmEDMvPzrGLNwcdNYM7w2uzyGcx2QFFqtQ249LBcH6pJHApjMYyJPDz",
  "key20": "2Uf9LHpkxAkMTZQffQfk1Y5Z82tsxsYKKmqybwHGnamt6VGyp3aU9QFNboP9jSaJFakNqgc9dnWJMAfpP4c6PX86",
  "key21": "2fDv46nP37JXqRzYxbnVtDYKG4VDvHikwXTkoF2sEVsWyrQeXykkqRJUuP7DN3BGU7zVXKD7A1jR6dtjQBvi6wWU",
  "key22": "62ZEo6Ldd1GtAQVcNrUGUXS6btnb3tAXKTYfjqjZa4WSucLr4YfcWRU1iQ5TAez9nrrcEd5YAtBNyk2jZXc7uc5b",
  "key23": "3EoN82EZG6iS26nvgo6Z5JutsURDM1XrwBtYRouD5vrfs8WgvumwzVgn7DC7ytCs4XXmHz42D21J5ZUZns1d158z",
  "key24": "2cHrRX9pDDjhWxTEEZYQQ5WZc8gRKCmoqSaKXVDxhrBGpjmUeJ8XgerM4x9CyKk5mAradBmWUPYhpo85TpuGn6p1",
  "key25": "3FwR6oduUC8XCLgmUjbZTFT7H3DC4G8Ra9GBJkVjzCp7w6KdJPRkJga5YoFBCLSb5xsEodv4jpkSoQ15eecpVN4o",
  "key26": "b7MLDo1H6TBvsVerpGwwKZGNV4errMyXD19Qy2zF8NE6vuGQmdxdpUvwd5mMXNSZCDPHAarDVeAqDKbYtXxg7Lz",
  "key27": "2AUXVMnLhjSjNu6R5wqBoRu7mtovMNBFKS2k6j6dVZafVdNmjpJkMHqFsGMJ9THN3BMZYADjAATUibeWHdzWumW1",
  "key28": "3RE7TXV8inQsV6H4WVHhuwLheBtpUnSGUWGRxXKWY1ksqRGQNNJgiGRYuTaSMbqYTR1PMDM3Bmkbtxo1yc31U1ZY",
  "key29": "imDHWdZqQCE5QncX4eAj4bdC6BPthXbe1DLXR5RKZvbRCmX7392XfqAYaB4hg5hy6fwczTSJfUDjkznJi1hRwap",
  "key30": "34xN1GZA7oyE8QCWEArak4Ay77sgHXPVmzDRfEt3dxERPXyQgCm5znV8VWQ19vwdjsY1ohj6MojwxvEHWhXomGdr",
  "key31": "uzYoLjHTj6726T5LGD87PfZ4DdoUXNnADnZR4LqUwce8zBXszeLa4QguSiDejxnt4TeGPhtEqtYMrbwnEc4mtRK",
  "key32": "4vXYKgSV5mPBqUPggCJpYu6FN86qhb7SVAyDNq3vWJQVJPkjbR8dJtDxjc8wAyVBBTq79QsZ443bsrY6os1yUj9B",
  "key33": "3VQe7PDLXkfgcv9dUgJ94fPgZRPdD7h7x9CkLeyHNYd4KURH6UfhnGF9d4Lv9LsA7vDE3tcHjRtsrKsrkzQrS81z",
  "key34": "45JbqfEx2EyRhk4D4kJ53ZLWUzdRngYwA8Re327nvnEJXm3hCPAXtYzdFu9rGKhYVkASbS51HzjyamvdttVK5U1J",
  "key35": "5CrSWp1RcP5aSgg85wQVnTp52GowNgiSnQxnSVVa18kYG4k8uRHa17ixB9uf2S1ssDU7ZhcA1SUjxTsVVxsHFtde",
  "key36": "5fLCuqufjstsJKKmdrhuvhzM1TvFtWahBxj8UXWfashzchiwRo1qKHKEJBScUZepVaghJpFNGGwPcVEBJ7oozM8g",
  "key37": "tL66GfNP9ebLstfnQdqPyGQcPQ7ZLJo8FHXmTpq5whyXz8X85ZZ9uh7YpPDjgffUEu5F3DYHYgqb2pFDH8YG8i3"
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
