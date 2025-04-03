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
    "2FtQAHbR5jAwiD9ux4kEK6gYihc2U5ZdfXGWDjHf6nF3Bhrt2WJU3yQ2oBmNg6q25BCB5DCAdpVTF1TV2oMaAc3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C1Dp1Lt4mJtucT9piRzo7m4jhYFkiRDemroi2pPoKRtfyddFGb9LGdSZmkVG5ZCnQ25yMcFB48WGWWUiHTQgtjJ",
  "key1": "46DTKkUyBnZiMRHjZuZgzPY4PwM1i21xJUwW9eUYMkPNXQZJa7zL5GHaPEhKKwbtNW4RMWdoN3x12BKNrDzHmru4",
  "key2": "5z5k2DVEhgHo3bRzGF9prACaL2C2Wvydxrm61YsnhBrovpLBdhYxrFAtJwy3s9RdKFxVGZJKSXpUQSUigyd7xNyz",
  "key3": "4V5fTQNwRRxwTKjvNDbC86vYScQDuHDsd2MW7mqgGSsS92kMY5G7hK62eP2v2kRCj1K6Co4CxhPZnfhnWuHup7VL",
  "key4": "55jedYm1CaST72pdr7Z9pRoRqYbuRbTuQG6cZXjhJ16dJqKG6YciocLnnJAFEmHpz5iMJjWzRrevV7ziba7UT458",
  "key5": "5NLo3JaV5Bh3ATrFHUCEx2hmxnT6qC9KN1DhDMMsQnPY1NrDz4n12FfPqHeAY6PTmjDiSdAMeVAYBTYQdFFhyuWV",
  "key6": "KcjzE55YrBzThdf6En1qiLS3Mh6WPxv9pCoDcpJsux3kUMYem4G9neunc1amnpuL7iaKWC4Qig5ucixgB6vpnhk",
  "key7": "5Drowt9KiQm5kiyq1yR76FwFGUsejaukhZtWxsr7hmWUrLb41ysc9xyeRHbN1eGt6YhuL7PKPAm7XNjJXrtM438a",
  "key8": "54d4s8E5je5gVRJvUgg9TafZQhpQzhwgFWCWJiYbEgyLE8FgLNeo7cECTMELzWTBUrUT4RWeSeGsdnqoVRnvVFpg",
  "key9": "55btGB15uujcTzVCq9rEmFJxhxYeRLvnqRMrpQmD69RV1fMGPF9iBDRkufyvZKSv5unVv2D7fXmpnh7znMhMgzaq",
  "key10": "5LGD37fXDrboiz87BouB27q51dndW6wYKzTrx4fViEi1KpbbH2pEgD4HFen4zmFCeYxovYehKcNdoATWnG5LUvTK",
  "key11": "2akT9TyWsgbgAHta7qgTRfiyb42SZAvPjZk2T8oauFzzsGjd4HkGMYPqEjqKchd6sMUknXoUf4YCPQQDoUzV91T8",
  "key12": "tyHECw48YF79n1rBuX8c7Y2bUB3SerPdaoQBqY1qenUBSRB29cNkpE5eN9CK8mz53zJPBWpjPR1EkrC63Q6eiSu",
  "key13": "ktPJ1ezNf4WgY5gHXubyZKVBNN9kN4yJ1S11Zya8gsxcxBKfLHtErivjkMWRxbEFKF9JH2JW6c6E1vMgcThUhbc",
  "key14": "yH95vDfSkB1zwvVc9pzJDJpWbG6wvkdQ6BunBmdYJ7bdLbb7WLkrBjTd2H6cesi3U5bbDbPSV7Ydnt7JrFBuaAA",
  "key15": "2GnzWme2ZayJt9PTB9KoXRn6UAHiDBLhoZu5ArLPKQeCbu6JHLtfJffoe2sKDMnNkkW2SapghK1MKmytQLHosMx8",
  "key16": "5e91WMbNN6HMZHZ598VqikTKYK9Vb6EVjaenRD1VubYK3Uj8B9gdNjWyRcYS9UvU8q331vrXU79mxTVmZfV2itQz",
  "key17": "5KzLGtHfw6vK3FgtkphCtRPyL5di8SVAXV9coXruVhByTzjx4yLKDGWVfasrr8G9wJGFBCbs5Eomb47SCGHYGfgc",
  "key18": "3CZJDVmdnUstYZz5MFneCNCeNfjCGr1rqHJL5xMCbmonUqvBb7gxNaVzQqi7AkqB7J4bRR1Gzp3kcbZPx1sHrGJ3",
  "key19": "zsRrLYCFF56w1PmGttwTW1Bre4GpobRw3Zo9ffYbPA54NAVhk8oH5Cuh4jepJwDzbdhQrYiHAVKXoFa7sPoumqD",
  "key20": "4wbw9oTRnYGNNrSFzWtmCNZztSva74PW2tiW12aeDf9dG4tSscEoc3vJFDusux5wB96AUw1Vbqc4PwhEjF6kLh2h",
  "key21": "4L6j4WwhUdH3kyqhf2LcP3RzGEPs1DkS11qGUrJwn2usHiGUnxpuz17xUoS5NeynUZJwtNcwFNVDH29FhZbd39xB",
  "key22": "4XfRhjkCKzQRbvFKuXMZGG4vp1AyY34bMshM879CTUobHcySFtKuJLvgXcUxX5tZHLSwJYet5hCbSDFyjoibmPJf",
  "key23": "56R2tkbb6mHNtsQMMnFXNQMCgqKvWyQ7ofs18CCADceuBYfKB6XwPeku8t3XD1rtKDSBR3bJP8SgwnYrUXLfaUsF",
  "key24": "5epesAcVtXQC7XqfLafvrcNrYiMGnXXemPEyG6onq1oGsi1b7pwnUaEWSBA9j2DDWoGhJMopZbhkNR5McY6Krsof",
  "key25": "5iBtf6GdDuGc3cM5dBRtRWSBef4mBpsa962egWARY9KcYE9iy9qGrr3zuuhBB2pyqXhWGfrCguto8xLuJfjikXKm",
  "key26": "4PwJDf7WqFG8GZq4xACQtqU1wZbcyxnuesriAsfhnXmG8hmxgp5EvUKfwFhQ8N95nydhQeKgp6PC1vPYQoUPJaqi",
  "key27": "3EWFu4YhZbaD1F6Vx8Z2de9xSh3MUd1ENhD73szMfspnSsoqwgUbaiEmn1xJQ4aXNgHA7Cto7yNT6z33jPp59n7Z",
  "key28": "5LyRb3jqNn39TnfxM46SwDeSkVeUET5V9Sa8tAgze4nMzPcVT3meHiRfNLM65WbAbjuEpTUVwx3taBw8TfwY4rCe"
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
