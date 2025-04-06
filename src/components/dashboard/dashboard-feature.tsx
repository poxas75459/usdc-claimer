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
    "3tXGQKZQoYTpNwR5A1PTnGE1D4euZdwZpsihzD6236FrXdJqDUnd56f7ZsgkXxbNd75Djj3xK4KCrFEuXvkYhqKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfRT3nUkbg77jPsTKZz8Z1JC7ZzRiMaJ2yn8xaetQjnmUqNx7h2xgmzPTtbLsop366jEjcqLLPmMVWnbkHz9S1P",
  "key1": "4pYiH7m63mXxiFoXeD6FqzDbgaKuw7VJJ6v71GYSqN6ikrLEJBpVQcmXTphUGuxid4ssoqNNhjvjVq5BBW81oNM7",
  "key2": "3YWgTtx7n8jAZRrtHi1hzNacdXktK7P65yK9As2fcLafJfm2NyWvh3XRkPLg78sBwEu4j8v18g6LAUFBrSpPwBYK",
  "key3": "56jVr4LTougRkHJrt465Uyfg2P1Rz4CFUo3mXEvxH5d9dC3qyP65CmZ5NoqVehSQEmPUNUUNwLTFGZwKYsgozsmr",
  "key4": "cvk77ewtU1SnCiqcP7L6jE9iPJ88bV6g83SKUTMLe3gSP7typBYqg5qfYVNk2uYZNTXW3auNCpwKQtaYd4cz5sy",
  "key5": "5Y6wAJBTMKRY4bTtSN2YzfHqZCJxME1cR2J8niVNhhBvdEqgYtxWMfNZt7q9WpqGRh96GsKy1VvowtSWuQefbs9H",
  "key6": "5TqzbWaDuoGBJqLN1LUrJyZvFLi6Vf245mGrzBhHCgbFFXyTDCor9u9TfFjTyKrHEeNHXQ4QGeHponYKJUoUWttu",
  "key7": "3Bs7CBuWAfsGGZ79PwtweX8mvVxtiMJG7PkNF2VtWQmBkeJ5ZWhewPPbE85MbnTuVByd8xRstyPsHavw4roR8Tge",
  "key8": "36kpPEDVwerLjJnQttnbrDe4cVWAAuEKJQbgnTS61HPTLaybXjSwAiYTP92gHS5SfkaCgxatDVJupTdbYGB1awPG",
  "key9": "4nsodGo9gPxXCV7NcdxuSzgzK2oMStDjaCqB1GRv29VsnzgGftFb36NXKvqfgHA1Fqyz2sTQ1oYTdrWj2MpFizf4",
  "key10": "5AjR2SJmCzX1gSTMfB6WmbZUPYAQwr9xufekh9FJDYqrdmvymuaD67LiPgjynegeKnxTYyn2x9q8VE5sZCSYn4nC",
  "key11": "4W6JDAt87qd3mJxwkEJBoUigJtrRnzd13kVsevTVP3Z5FvniHy3NSwg5MJJkFKJNGKgekCYPRhnQJbbqDKcum8Rx",
  "key12": "2SrKKjAAu5rdZdWcAZZ1ZYib1Du8yqRehfwDWZbCNY1Y3g6Ne8iWDwDgim5HSCeRzrmw99okVXwvQuFMAG3u5sAJ",
  "key13": "22hN54LguhK7eEyKgzXJ57a2uHUNQPuozzs8KibTrimDpT19oqN7EZYXTXitKJmrXQTEyQRxenHcdGUY71TAcQto",
  "key14": "Emg8bPChDBoDpu9vLaHCNWkrYnemGrcrkg5Bc3nq4fa6VypSkmrsU8T96g2KGMvfpmDN2v3ELZk2SF52FtCDbYv",
  "key15": "5WfiYreg7JTHGxATmusHjbHjRLhexoMuegtQbKCUpJPGQY9ygdJfrppULDjUQzNHAabcb85XmhBpu9RTZqwuPWxG",
  "key16": "29jbAbcRLh6WEyDGh4ipenPeL859TfKFAk2vYLfkv7zFPrezMrpNX7kytALacyRfdKwUKRjgCc8jLVRGxgTrpJK3",
  "key17": "3Hdac1NyEPj8bMy1uVd8GgRYAT6GTUncRL61DEwU67bDfchVzpNvnvD3gZgyuoGb8M8WZxYAJK5Btu8zA6erhNoa",
  "key18": "3FuywUyNanYpz4ESin92BURjvjQ4nnXEEtSgrTEsuwgGKbTDenN8eAtEEPtxHJ21J6oaThygdFwmfhgydbzneMfm",
  "key19": "4Wfm4ffywF4iXY7C7xhpP5rTjGkt74tNLtWWJs2E5iq9uY3QUWhfq8H7grytGGrW9uw7umF44AGixi1BSJPjNqsw",
  "key20": "ToYdFfRAwPyBSSvRrG5d6so4cejyF3NFSh5TyzXmANoxgABZ7NbUSHsQZk4bTZ9yPkiWXPzz7hrtFKdggngWGfg",
  "key21": "4XVjR5JrV91Sg8f5RaYFGYMBEp8bAR4rLVbomEsEyMxsp23KxEe7CcgP9H93vU8wDpiPTA6ey3BWZYCFS5LCTE8W",
  "key22": "2pR9fF5EWwvqqdcSkriUeiyAJKGPoHhyyncZ9p2AEkXaxuxETCbSVZgUFRtNkWkpL37BA3nQFG3fVEZqETa9yy7",
  "key23": "4k38iTPj7ggx8qAy5FjusWininmDMHKuGRUUuFq3xk35cUJmy9pbSu6wjroGr4rqUAzu9XxKvMb9LMrvbNFcYyJv",
  "key24": "2rTtiQQG6RrqQF5RLW8wRev5sSMRov8F3kZJJUidqKwFs4ePxGg4btQ2Rd9eh8mm8vT8MDoktUF5YM8RJCoFTmAD",
  "key25": "9EkWsHZWev9k8zJPE4RnSDoMUFdtVdoifrKFJLk2Lg7qQL8acbochgdsrv9HMLcknRG9ZTbNrJH5npwaqTeFQeN",
  "key26": "3u5DqerbhCwVq9hJyW3JXtgUKG3AGMoruA3joHpyJkAzyz74eopdbufeTygqHUKcfhWxEhDv1dDh9rBUJJXV14C5",
  "key27": "5rgtQfvuPfSN2F6KbxDEVLW9r9iF7U87XkXca7cygdkPSzxnpkFGgGF8GA7eVRHrA7Wy4UrtaqDHPemSZ2FQ2o3A",
  "key28": "2jnBmr6TvEKWB1uByMMULamztjv5ScgspcKHyyhQn6a8U2YLLfLMcdDnXFi4vNHyXTr8uq4sLqwo7NijC9nxPAQo",
  "key29": "5eWXLe4JsBAwY51Z4rirtCRnG5xhJ7xV7j8vCk7qbHHach6TRtadwBEKYxDx92UVnRTJnWCYJPh1X6VtfWZfomB2",
  "key30": "heQ9PxSNkN4wrYgma3b2iJQKUgW4Upiao15EXZZT1NUMRX7GA8u1DQwfwCFA1qffuENPQXukj4828HHa26dWdy9",
  "key31": "JTyRqR5n3RPyL8sBUbuaAHp4R5etXRJ9Gj1Rp6o1zTD3SKRUHvKX97QKBqoToZTqzkdp1Dq1knZHMLLUZQuFCMc",
  "key32": "5e2jQhr3uEeRuu113nMvB87DGreuF6ggaAdTvpJz3i4142MT2HAdbNFTZVdTCm7xmbzmpmmhQ8mKFuHn6QnQBCs3",
  "key33": "2NupEwUWGHFyg5QoPhQQamaUvpowdNhm9WovZvo1f9H9oWvzpvZaPeYYbbHjuWFhtmZQV4MHqVR9swAhSjoX8C2Z",
  "key34": "CEjQgb3LUKn1K7Em4WZJSP5NM7q78yZEHCpDWu2TM5Sax2S2uuPY3j6qvREifDsFDUzNCFfHHMrGpFu6ShY2C3w",
  "key35": "3vEUGVqsMR7CcUW9wLD8XaB5WEQNFa8o4K5YadzfeXgVtwB9eTKC6dfLgoZMhqgNHSzw19q2uUbr8cj9NWFViYT8",
  "key36": "2z3yUrt5SPKeuDm5VijYErqAK3AEAYDkNCuaWcfM9YJ4EVYJwtkYtsyBkbUMmkCYXNCJzQhCxYatXMFsYxD2ShrZ",
  "key37": "4381dFsNCe2mpXUa9191vh2tW7ooF4n8ZUjc4bXjmi8Eh3cKSCHZWFS9R8qWfxb2Qc3n5AiA8zJfAC24gaq178wv",
  "key38": "4cdvfGWx9cjALaYVRtKFLjMasFN1G1TV6s3xB5Tv39S6qpdnEforMyE46VP67SiRuEDP4CBxotdBf8L9rr4ofz5L"
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
