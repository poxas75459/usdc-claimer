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
    "bMijBeyr7KEjthG5GxEN8aXBKMbBnwddoBUrPYLaGgvUiSFuwRrqGPg3Uc3y1Dib3a3cJR2AtRUTLxgPYhECWZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5thHYEsNwf5TtBBT7D5ERQW7K9WXtKuyb2jJERLvavx9Yc4pkmx1658eL7DkTSPMTC1pwTZJx3BpEHNfAwZzWgoz",
  "key1": "ES3bLwJRtqTDreK6XcfrX71sEzsVR4dy21y23tMY39ojmiV3p3jpRwwe9XMJvM87ckgrhBytfgRPd1CDaA3yZ75",
  "key2": "3Tm6wpzcyXQ7i54XG9reoHRv3bKJj6jvG7xmMT9q6ps6Jr8ik6xiqhJo7reU5N2LKFoNHjeYeFPUWy6N9gHQSCw4",
  "key3": "3ksMfg3NAKY85tCok9XnuiomLR4QgFCvg3ZpzFBXayJwaygLW74kAniWjap3txjMNpQxENfzBRawBjUm6GySDULU",
  "key4": "3ReWoahCiRyAzh5npSYGGxV4bAbo69oCFPaSNbz2PDvaNM3SY1PQEzqyMYMk5sLQN6Thoo5yyWxwWs1jDPTm7qHd",
  "key5": "47Ah7fUx7XEMbHMJxg8qg5gqraVs3fDcQ1rF3fJeseSXbYoG3Dcx5JGNWFihTWkF6AbukVv8BvQUCpdvnBkVz7gc",
  "key6": "27wRMG2nk9g5x2SXYLN2wyNhtEodK1QBfoNRntp52P4rFd5yPB7vHmni19Fqo6cpm756FK9XLD8LW9mpYr8oZvKF",
  "key7": "5pavpudNChfF7Zej7uMkPJukc477QBexES51fJWP7Bqh4dij5xCuPQBeUwmD7AzFbuUxWbN6bfXZF5shuXE7peUQ",
  "key8": "bA28A6orNy8P6hGF1NeFYWEQBMCN8ecQdfd9XyjYR5Kvj88og8Cc926PrDJopmxCLVCD76n19PB2E2vQaAidGmt",
  "key9": "51r31msmVQ1Pq89p3fdYEZL9oqjycdLNyb3r7aUEawv2pp9icQJ156TNVUwnU5kuf5PXoskhkeGQFP6nhMwqxwS4",
  "key10": "42ZdJujbEXMzPwnyh1BkYyHuTgAXJPaewS96vZZmsbDgejCXfk4fsBM8doDF1yEZTEX97EaG1Ztvz4DdtmXTcGST",
  "key11": "3GxwMVMCw6wGzkr68uHi495oGhhtjGV5GgziNp7p1DuacuFN81YqfiMQe67JqERTo5hKPSSfvVGGZ5Q3fgnhzT9i",
  "key12": "3miS4HHVfYpqDvbdBysk5EJMQisBqMgSin8emJw41dGph53cwu3hp5unusCHC52YQNgPYBDvfvBzSEdghaTPztFp",
  "key13": "5qSnTDN8Sq4XLHxSh9aCxNkpFvPsf6MtQjiFHTN6SvU5awV52aBoQxbJg7DR58mnEz9mNfve4qvFwVevwfQecmoT",
  "key14": "m5AU1jxwYfSwc8sq3eDHk3m8dntGhYfXXaZMmZkU836bcrnbtSYCrfrvjvZFCkfdgMgZJinQaWVcTo7yoFytziv",
  "key15": "sy5aUMYTV7tbrYFgF8jcrpkKcagQJm3gTyUqQsp8hCyoZnX7xVirTYd8tuKLhSmWD5rBXmcsKVJb4cTBiWKJvvi",
  "key16": "2XcLxDpvAq37V4A4tEwwS8aGEZ1jCY7gwFsdakrqGWfKRi6m4v7XiEUaxe9UBFbBJbJaTYe4MbcDSrvrThPbd2uX",
  "key17": "3YQqG6utpQbULr9Cko2UxjwtzqSZUZAriMmjnc6zdcSBK6ffwac8Fj8o8ujfXFDzWyzHymHu2UChGBbH3LFMyKZj",
  "key18": "3k3bGfAoVKo4RgdFaCDukx1bvPcxhgnYTMZt3JAdxiHxDwRyLk8FZ7BkuBezj11YgXdHPMQziS8kovWGANnXFoU8",
  "key19": "5DitiXGAj5i4wZDaqAjdTALYBfyazucz2ADk48LRm51WNbHndZa3MmFwVeBFmp29ajGZnbizh3EaPsvCf8ALbMQC",
  "key20": "4Gwxwc9KpJ4PZ2jkmXdGFHrJVQTHduQZ5dDtAd4uxMTDraYo4FV9iZpxr8tR8QPYuhVYn92vKUeoHMKmuBDxpPJG",
  "key21": "yhCvALxF4kpRjA5H2emxLQkmVoCvtrNvyvcUb8394tvtTJZ7u1aNsz6UU7RSWaBsimTQHGY6DVADgKxJmUgZtnn",
  "key22": "43nvWRzbshnQPQbAH64U2nzZKsdB48GirPRnbdnzJDPLCHAjmNZLiHCh5yyQJ89mwBs8UgoUwfmu3PZrKR4PfU2G",
  "key23": "3FZ4LoWHXrGxXZBB7chDaLRjUh3UWTY9ntdMzZinEHTMKRpij7o6wJUVgYSjHhdHXCo8yLkALuLHLdH9gPi4BzdK",
  "key24": "5p2D4yTHZUu5a8gMQY3Yph8z62xZQ3GGBVzzkjvx2Wc4xfwn2SwJnyT6XfcKa5hRXbZga48FB9wg8pRwS2Amh19a",
  "key25": "45FduN4siCzkkWncBS9emdeWQKUqYcWz28LpUx3gV7UxLEcgVwNRnKBLzNw5qcY5iyuXp4qpycB6egsWEnhcSgBy",
  "key26": "4h4UGmqw4fiKMEd1Dj1nbAfLjksch64StcEwgibxHLtfLJKr4QtsUsqagaFSRGQxxpAEC69pAgEf29yn6Pust4Df",
  "key27": "zuiWn9BK7yKgmgWGy7kFMq3fwLVUX8cPogV4tdyoGwnqRwKjLaqnHH8C1RTxZJLdpo6QMzE5VfiJbfeejwtjjyr",
  "key28": "3YyFs7Sys1rs7u8MGB6YjBLPRmWskFqGgfK67mAtXbWAQ3guvwkvRtci6XTQTsDsUeoXh2LvJ1W87zjP6dvmWuib",
  "key29": "5TpkWo8CMudoKcuYWpCGXbXbwpySHBgXtLdK8zfGcNButwpvVmmP4JPU3pqtPt4gfbhR6FyHJFWc1Xwvd2TgrSaK",
  "key30": "4FGuueFrvRzX44CX1gCHYpyGrpedTx9TfUrYfjPusSG7dpvWykHXFquxkjLwuY6rhiAWzNiskEqjpM1CAc9d4kSy",
  "key31": "4h1da6SHjg2CtirJ66xfTjtaShQwoRUHTf69fPTAt59KibrhGMtjTRQBhdhPohRCj8GfgC6sze9931fC94wgYFHZ",
  "key32": "3ghkY5tMHPd3cnwZnVNyv9SpFBi6jxamYwBCYxji2XfBBUqdReBRx7NsD5iMfT9y7xYnSnggbccJMZYrjG9bHsss",
  "key33": "2yP4DjtCtUzV4eSPznRfM6fmD98dfjEKYcjiEvyBex9RaAtf1R53khKNvwt6JvNNB72xYkH4MFEsTebwZVDh7P9a",
  "key34": "739eJ9XhqHg3Tbi4RJGLNSKt1tBL2KzHpr2hsSeEFW6v9AQzBetSkkSTsb3ZXGJfa3tUJweukgyip8BWNNtZDHK"
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
