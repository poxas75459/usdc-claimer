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
    "2naJ1CWvJ3i4YUoMFSoFTT7azx9d8t7SjbuNjdZPeFMW8yT64pkSXdj4DTXYgRiWo8JwDi18Lodq2vyqQmHYhA38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JP8PEZ7wko9gJ9mQe6X57AiNWRJLvSYNX2eZCJV4NTeQaScMNhv99P8Qze89ZdVDjd94yQJ8zouNMuELLEwEwL2",
  "key1": "4KYbuvMHub99EV2RywfzEQQnXdY3oqBiumwADSQVU6kgpi49iFh5rmY669u4qzyohrp1qKykNbMZyLoHqDVFfVW5",
  "key2": "4GGmsErjHW19AUxsRvyhUASSCmfZLy7geJxuL5EeUEpHLjc7koMndx8yYr3vLb3CxFbVktX2ge9hmnWhL5Q4NN3w",
  "key3": "28mFexsZ5rr1wpQ5NBBncRtXd51jA35F4AtYEjVw71UQhev6zDucxutV9hnQn87ZQFXeTBQbhqjnXSjatRdSsJcM",
  "key4": "xmMHyGL6GU9SMcdaDAupusyeb1RZwNouv8K9BaJAEFipavcUcts4pTBGDtmc37Ci6zRrX18MuEzV1HZDvnzsn37",
  "key5": "4JQTCxKeZYypWpo83jdtqVGMVkFwEGye6qwUat3NMYg6cr3nMkvzPfT35WssEU6ZR7SMLeKJ69Ntyo1E6YGk3aWy",
  "key6": "2sdRyjfSu5Jzep2MMGTxZKq9W1eku8eiVA9yV1ToNWbtVFWwMjo8mR8NA5KUFWsG1uiHjpFtWsAnb25EF8e8bi8H",
  "key7": "4Q7VRdH2nN64YyG8SV2UwwmTTomUEusdPdu3PYUGWJgFhcJztZ1pBBhznKw1o11g4Pw5FUGiSvPgCE2NfhjL6SQx",
  "key8": "3m3FfLdriDskE8cobFtJjD54oDq7avqPZ9e1jKaEvqtXpLv2dLUAw4ivBRx6BJkVD3nB3gJH95fY9AkXtyF6ksYT",
  "key9": "5fTgPn64jPqbjdThe5wZdMjBHaN7hSCTEVZENuCvspXq5rDxRf1oLcLGgKhezMScG1S9XeujATgARsC1Aq833FNy",
  "key10": "3UzpLJi5mvrPAnWddZBoGUXArEN46pQvV5ahXQ8evfLcaiHqvKWNW3uooq8DvEKttUNdxAuyArFxKPvBwWY4UGx4",
  "key11": "5GX3kdmiMPonKHq4RT6SmqzsNff4HPkLEojdTS5zq6QMsyS4Ptq4G8mwMs4bQXxvL9gqdHJwn12z4s8dps9NCwMv",
  "key12": "37gVgrA8JQyRHozL7JFfax2ucU7a4iN4W9nd7wACHhVnkyfgGwUc4TLX2FLdf1HhCpU8rGwLTgEi9R9AoU1c5jaP",
  "key13": "54GBX8tam6aMyHMjqoJXNYq5VtPU1ZBbB9MGd8SGZthKzPNEdg2TfAeK1YPcTseSzfFsU55zRtXQK9NX4ZG8hy3E",
  "key14": "2jbdoDRCgB7Y7JQkcYPg21vPgzQU1cQPz23E9rEV6uDcGEgoJhJPYpfa1ZBUfa7J56fZjRa2aHmY9apCrPY7L2rr",
  "key15": "4jXCH1QUH5b5x4PYyExvJxrSfN3fGwjn6LmvNNy1BBBYq7KfRUiHSA3dc7QfQg1n6T3xhRYh5dnLqFeC2SyLYhks",
  "key16": "3JBz6pGhZv1jALVABTq4KQaj1dV3Q9A4MovzL7813C8pPG4md35AA1KuCtPxh23ciHhdnq2648zzwTJj6ZTd1whz",
  "key17": "4D31gL3VrxyFBbQUjfv7kTyqdHh58Ecmu4WRgwnSL9ZTCFpEKvnZ9WLgpsUPgu3ZpvNzc6SKxFfuxJmRiWqg4JDw",
  "key18": "2fF6ZTga7VzUm8ACnRNkrYceL74ua8jPht3jHhxZDzdgVptKCrttkYM9DsHExtj3yUjz43rDjRPa7WanLaW7E3eg",
  "key19": "5cWFqX7RsypuHmdqgPT1j5X1fUSXaj8x8XUMUSnsuDPicULvGDas9QMRCc7Q4A23yn7x76vMUwbLabFtuHN5gf7G",
  "key20": "2YpWs1n2X3P87NGDU6KjSYRK3jP2LjT4pSSe8r3aF18mzL2QCJTHTA9mKumLBgWsVCD77bXfGJoNi3HxpLvrWiB2",
  "key21": "58XWveXzrybMu39Q3Y97tWn8vywFDeMxE5pLydeTRRWFQ2CXQm43MtnvFQpxnBwaGHpRhdBKUcDL5FcdnJ2kqYm6",
  "key22": "5Y7MQZg7mBFZyhXB45CSmoDYtz4kfnHDYAHhoJHJLkVHvpAEXsoBZoLVyCk1F2XGCev2Wm6r7PdXBTLZqGrQ1uMx",
  "key23": "3L9EHRqhWkSuV93Fm46Gn5BzpGUFuhx7bga5r5kn68rk6vziZRtYJ4t5mozRhAQr6ft73zpEYGwfuu45BSeLyquU",
  "key24": "5WbduGLcEdyqzMAdBGFLWLYBnizbmHAZkCzyeK8JriSy615TKRZTcorHJCJ9t2CFZdPjxoS269KLw1guUVnJzM68",
  "key25": "8MXRYw16SVzKEL9YsoKL69rq3grNrbVF5B82tCyRJFAq64gY2336XWQqcJWWf3QEmvzRYxa8JdQtXTBMrwMv48e",
  "key26": "3PgoDfeK9wjjXmV6tMSswdyquUZGcBdhT2JZKTcQTjuJPznvi5qkSY8JV8NroNUmVfhHt3FiDwEa36gxXrdwwA3n"
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
