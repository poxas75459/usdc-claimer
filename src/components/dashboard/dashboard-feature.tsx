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
    "2cqT7KgGpTgAhYKHnoxxndsZJdWo1wZ8B3hQGWfKXRZhnmryh6MyPWM3uc8vM113TPxnUt1dmDFN1s9bMARenugH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVLo6fHMcWbb5a4KeEBcANuCmPpsXWPy4dUPSmn3avcm81cDShM6pFsHq1KqVF3awRZumcJhzwK9pA1kiRd7FmE",
  "key1": "2DbzFqQYrxRazrew4vmS8wp5Wd1buwQ1tQg7PfRdeHjYBKsEGCdBy4j5uHoeVWGtuW35W4XhDQNAC5ni3hUTjvER",
  "key2": "67EeqXrrtjzKjQj176SDn5QkBzYGVH7wZizyFkGk1pLS8LGBFmvBzQjdGi5QsHLeCiiRj6ppP7XsD8mit9vyeZZ4",
  "key3": "5VXE6Sn54nCkhG1B6AGL86ZKr3wun4nhcFjMuS3JhrGHxiyDQoroiNqBViDbXp5Gx23WNTHUQRXXkGDtVt5rjH73",
  "key4": "5p4mva78beSMt2J38R6HJP6WdBDr33Kn7JiMPmcVLXG5hTS3kkG9jS1Wvix9KCA35sQZB8EJokkhqKHXcQoH5sVB",
  "key5": "5SN6wAPu3V8dBHMpkqPhq6C5JSuA2Jq6ixXh8wBichKFJ2EhPCKshUsZ8TUJxZLcPiuowbiSEoZm27Ycq49kTp4t",
  "key6": "4d8bJamH8s3n8GsHuj3qba1Dbfn9bsvMVhd2RFyLgiqMuEBFv6zKYPeKLXLyFU5yUo3ApLAa5p41njDpkkq2Nsoq",
  "key7": "2NyGn8pD2XG9CmpaWgvfkmaAo8eqLinUYpzttnckhoYELvY7o57xjzpdUhJLCMngsgxMncbkgzL5Q26orboHXGP2",
  "key8": "fEJQ3wYR9Gz96AwzJpAij2fGRuUuB8BjTRNBj6ajqBWAFqUmJ5B6LyWuXMNpsviFfe7Ga3gMA9TB1gL6ai2FALf",
  "key9": "3QPWiTSBcRsBAJJ7euf88g7uCRUc8XEwrnqtXjZ3vBwegTdJbWDMSgvbNYp8de9nmPPwwXch5KQ3bT1BZRr17oT1",
  "key10": "HzxYWpyTNksYZWRBM5yL9arPtbfXWasRLvixgmBvSSYfWrrmVyFD2W9GPtWwdu3pLi9U4aSf1BX7mSBdgyW1kEc",
  "key11": "5QWSSVw1qCBSwqrVQpSvF6okynV8EBmVj8awkgiDyvaUdTfETu22KRivobWUEbtDnsEBSKaaxQLiF3dgwPz1PpqC",
  "key12": "3xZWE2qJkTGMMQCjH2cdPShysMG8QtKp1Mdb2XZk1dkjhsbAUrnwBEZihWq1YTxR7cHFDeJCZgnVABGgkJ2mQz7t",
  "key13": "3XskGQz5NBCccTLs3ZVTS5hGLU8SWad5A6NsmMFKJjMoF3eVNBa6dMiMhRr8R2Bnnz36NeTdwL1fV4zeEYn3pLaH",
  "key14": "2CxRHauKf4gYu76Pppjim84JuCbXhKeJC76XtC2Lj7zCu7djrbn3wiNWPXJwbuFPp3Y24nDDXnkzyKfNY5QfSHtf",
  "key15": "31ssE9vbFte3yuPLxnrxkFXzG24HcT7S6qfNv8zHMbnAkegYEGA1UrNnQ5eA6NVJPp47r2tKu2VCfuM26hXuw7kY",
  "key16": "2MXhSegV2uNGRnUuV48WfeAfswk9bXgVJrfKXxUbdMa7r8VEoCjDiJSFAyCLjV4boogW6DUkE8nCyfXHd3sq1xf5",
  "key17": "zhnN1fmXiCJazZGQdN2nQdZkwFEFfVgbFo9Nwuo3crwbsLGvDMDTJjLRbRkLSSTJ6wPzb9TFRNLambodoVQY9oC",
  "key18": "5P17xBsQmHSHpqFoFJ9owJ6Yr361nBmJvdgEhhY2xjExzZcnJ3TTjGQdRxXC4DyvKMjuFqthSKSUTbTEosVhwrgC",
  "key19": "5jWxnuJn9hvFhEjhVrhrtze8b62BrqyKKZAL1kJfjSVqAkaZNCvWe7UxW8WhsRXcMerajyabVyqP6fDT4Xk1XjnG",
  "key20": "e5r2hG2Loi5Lc5UVUCmTnYCVptFm1rqhhkdQNkAkXhaFxSdC6RMuoHqHH8NyPPFX7dKzE28Q4JNeNDioWUajDpQ",
  "key21": "3y1TQv8LjWddRFu3znGQ1CFvePJK434f2Vqgod9x8adzXWHXvYAvBzpkn34LnZ8QfXscVZDrzrpfXfaEBD8kXqXj",
  "key22": "5wnaXQm2Zi9YxMNSNk6fUXMmQTeiatZCDfUGNGWWx1NNZPcEVMd8YdvyPL6o2MfYy31J48HUqDFPyzVLNsVBMzbJ",
  "key23": "4nAvwXp3KKJtJaHQJ6J2ZJUmsqNc1ohnKeRf67aUPpdnkQXpBvA4wK4fB94p4SbEuE6GwQsE6Rv7ECLYJwRXfkvK",
  "key24": "xMQjWJxfJJKAjsFSDiQVi4HWSccgCRzJZeYxNTacCikz1bqiWJj6Z4DAtbKCjUVJ4wNRGTdeSoi4Qhty3VMJPHB",
  "key25": "64XYAk6GsCPehovnucU4xMy8AXhGpnWJVjnT19zvVYB1dAZjUMUmQgMa3kJYN42Aa5YMazZ3fEazBdtiiVCq1CJZ",
  "key26": "5fPNkLzokRw7exZkNpYWDnEZUm2JU63znT5p7ghXBnw5GaNDSAahd474QNiWKPiuGnkh7pprwFcDJirMdA8VSdHK",
  "key27": "2JRTx5T2S932sQgfiaRoe5vo91afmBsY6mS5J5ouH8ZuDdmqVNvWaJGqj9BMR3FA1ovuvn8M8tXuwxeTzeMps7mh",
  "key28": "4xvQCEzdvM4Rg63ThauKzxnLizH8TbjiVB93aaDx4PkpUhsdu3QCrbCzjemgrtnBqJ8YgW4k8zQYv4ppEHeJuffr"
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
