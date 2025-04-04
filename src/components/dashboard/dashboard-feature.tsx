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
    "4v4ESihHzgTszRYsmTrkdJY1pMDe4jQ3ZyiivFK8tVEPbr6wNoQwCCXp8N4Cxew1MHA48S6CujFUL6Dgkkdm9ynS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uiYqxJRpyPeirf8XPCjF9XHcDa6M95xMiG4CgFTZ2mPjMbaS7bt1B8nfoqVgN1WKre1eJ9gb936adfQzeqPztY",
  "key1": "2qofGAmYyc6yd4z9b8mcrDFS2KdbeSsUUSi4okDokEU7MywLjT6ixXh8fE8snioYgcTWjny4qpkci1vFXourqSY4",
  "key2": "58McVuqkvYsnyu3jFGy9qzNGE9hjc9k7UxoCKYh57vjMymAyTqLAizLLHVvYqUbMkEvEgspcqAgQnmuceXie8br6",
  "key3": "3nZYsGDw52kj9g3uyqAUZ8Qgp5t6sEZd6TMnos5RWgoS6vAJAQwhvzHSwHpgRLUUup3QbLyBaaMCUPthPNLPQhK",
  "key4": "wXbtmCjWDSLFc3Wh2ZJ1hyY52ydGKbCR9Ve4CstryJBumUeowP29sToCK8eCn8TAgH7jzfcVhJdpypzZAJN1frw",
  "key5": "4CVRqPRnbVGFNJrvVdv9eGmkFMEh7CydiTXZ9tr7LHTJaMdU8PThnPEfBRwfsaXkQreyAEmJG3wfTHdHj2gM7Jbm",
  "key6": "36tyDXjx6pcLVbaWCcNwKMFq8GKejc3nfcAwahBKJbi6PDGxrUM5qTPBXg75t7QzdQs1osQhtc4pr8YY6aoSL6tL",
  "key7": "2UtHSvDCp1LAFojqYnnBjhdSD8pDZ29Yrp7K9jpZuQqFDcewZ4rxPg3HN32LVUKemsKzJmurAH1fGaowCqPAY2Gn",
  "key8": "5sScSaTc5PF1n728YEhQ3jz2ixgaU49WFz2fExBdH48FhJYMUxX2AQBWo43yryGq296HXCUpDbA5bzULvsPxWFTP",
  "key9": "2MdqUyGkfNLueq8BKwTZadHdLEzwTKcMiq9kcok4QDye4LQ9NEwBYP3SiraKuY2YcL8BYz9reFLuqDYzMAa55nnj",
  "key10": "4pmjLu3bmxKyoAqCBfB795rLD6p6QyYyPMrKYt2NiiZprnQ3PkQYocbAcAP3tQ1AtiDssooTic2fReJBxadvkJKy",
  "key11": "ENwW3PyQMnTNBaZ68RhCG5NANM4M4QYtGvGeSun3147Mv8THg2wgiHQzRvh4eyN6aWL4xNZ4deEfzxun5SSoX77",
  "key12": "5v23PLgNdFgVN3XsJwAv3HqjhVKeV1eQqKztPqXdoASEPAmbQcbSjSFDQH7vLJKqvLSsyZzWDMgervSWjaGy33qj",
  "key13": "5mDmrFwsCjfDxqmKP5uNLauu5Yajhn3PwQvXMtHB9TQrir6JUGYU4o6ZntwURfUisnhwvjzCfbs639vwMvZ5N5GJ",
  "key14": "4ngmW4rKXtthtjmjLKBMjJm4fvKvBYnoD753sZoTPDUTfWSCKxVmPWw5jL7QifUkScoW3X69ehZqGurHmVoX4QUb",
  "key15": "4gJkeEuJv36RAAkMcDfAJZsCsZCJwfmdJ8Mw3BQQvP8QzrkBAQA8srjis4dMwCide4pJYmfBHJsGvNn3KYuwuwAZ",
  "key16": "2oMc7p62cm4Q3kM8wHBtRy33fTjbo7hfH1wTiMV7gaVb2up8y3JJhJRQ79ReNs2k8gMv5KQyabc1cAKnxWtTK6zf",
  "key17": "5tV6U6qcovywVRg9HAnZj1rQTQHZn4FH3rCo3A9jifHgnX4pf8WK2SMNxBVkdipe67ao3mNEa3KwATc3ftvA8BGE",
  "key18": "41nKLao58G58X2M3k3GTpCpBy2yfBvFAmD3bcqu6cJgYhNKwiiCQpC8oLQXSSbZYizBoMsJyezd25yvmSshBoYuH",
  "key19": "PPXX1n8VQbf7KHjqDnLKCHF2vRT7tV39CdHXCKjAP5KNAiA2bFG2Ddu6s7c3d2UGr8uWFh7qBwDk5QvXM7HGBzp",
  "key20": "3yykEMmUkprwgtWGtVfhhWaKPbGmrSE1a5sMwaNmMnXqPtT4Tf7gA2oqUopbbC6MFRwbZSjPgXBEt4huXE7TywjH",
  "key21": "4bS2JRcByP6k1BciseCyNZCDhpd5MCtsHwuBqK72Np5CBvejNncD74nFWJQy7XeLKNh7Xfju5tq7mecQNNgmdxmc",
  "key22": "9tWiWbUjZbhd9KXUe9eHRZvnw43BCJNTfKjMLjrJCrtMuf3SVKxXvVyk48LADAnshK1MqiB3bwnYgciSFUYUWSF",
  "key23": "4uw3prP24NA66w7LwhMiDnkyrRwmgutiyKmWwUADXWaKZ276ff2mZTfovdAFhyFN589S4zfF8J1J6jmAk8Rts9rW",
  "key24": "5c5E1MnaWRAnEZmabAk7Xf5zs6np1D4kQQmMWXVHLGrgiA2ygTthmMijkUjZFn9YGUTp9w2mRh8wA8fMN3oBELSk",
  "key25": "3TQgpLhD7ECF6G2DhaCu6zmMAC3ADeKRtMwwoQmLT9tjqV3ycpm8q6UonXfuD8RnsTpru5jAqSrCGN25SntDjRNS",
  "key26": "n2noPMPVPoPWumsTvQicvPZRjThagtVHemgLV5LqVaGVaWUCcsF852zRJkybU2fhBafmhbgeEkGNRAXFwbHrbP8",
  "key27": "2Nj7LqCVmgcZBBXMLuda2WVXGaMrT8zGA8FsnMLtCsgc6LQVYavSQwHvwLKN9YTUW3JGNKD3pdGE242Bj2ttZStS",
  "key28": "31KrYdZFsN2heUhtoxXvCaQhs14dng9Wbtvm5UApPWaaZHdLCAnpwbSzeJmRWR3AAtxFhM6HhpFSLhX1VeEeo5h9",
  "key29": "4jnjqDAQ5tLE4Dgdj5JnfBAqZWSm2AiH8FT52PvggHmXfsReScXrDCnRKfqvvmtbbEjHxo6zNQFHfZTWvaHU5Kue",
  "key30": "5NAuVeWKQCEZKfAtku62qqr479vyUU1p2pdEsZRe2AP439Jjs1dawanTJftAXzzmekkKCDhswA5m4AwEt9hqUQ3L",
  "key31": "58e28dmueqjM5wQsqgMHNy7CsQXj9NfEdPGuwtXWXMq3W9oKkhwBzru5SqQ2YuLay6hNhvJJcuQVHkEWug6btCyG",
  "key32": "2iHscyHXL1Ci11M2sux74TQ8REkvobMvFcTSs8pSZYBDZvj5jc4z78CMWT1JoqqUaQtaTcD6V9f9CQpARQSZELHa",
  "key33": "5WBaUuDgxKYLY3X2t1xCn3C3rbQGU5V5pQngKDa8HoYqmSRPZuVft9FN2aN8GU3id6MGEEzgjLbTXPy5rYdZqmg6",
  "key34": "27DG5jeDi2cZYgvSEZQYN6DfBPghjyKwjwoYEicyJpHXAdhw6hSWSE5r6SxP6oVpb6H5YvhdoQ2TCB8EmmZ5KV5r",
  "key35": "2sqXqYNvszUTGZqa21B1fj7oar1Fd4f7m2YDZpx9mHUjyWUwkUnJbYewiWjZYT6eYYUsLVWv5xkhWgSm6H6mUi8g",
  "key36": "5ui7rkPMwYfJxPkjEcfGgVXYypSAnxeVjq9k5D8YkDST9Nbgs3Sg2vdspjyUX5UaX6AeMyDQWtKDLHtmyNSrWZSC",
  "key37": "3USSxCxUBSRnK9kUTdFxs8t6by79bfaLridr6iUeKRM2g2jZC4pshHPXBoVW3pbkmQDHYru5CDAJ64MN43BBScBn",
  "key38": "5f8zATK7sSMgAwpuTpyWpK9xeLoWUJE6tfDYSJ3JXccSDRK6edPf5UaU9vAecMRsxhQqp7oYZWAnxGSfKqCtBJ9y",
  "key39": "5GC8C5bjNWzMaWxWnhovcjLsdCyAuB7EgvPtY4S3XEpziV8rRg4GTht1PQcR6Gr5HgmrRLZGWxmTHjvAiJCg2SRe",
  "key40": "4SUFExqAsGkY7vHXuTg13VQys698nY2tCjBe4PcpPRx3dNm6Bh7ydBD3LysrCfsfyi9PGcoBAcV3drGhySoYjEnf",
  "key41": "2kBgJvwW6gqW3Setoq94vBh8wAiGdipFVnhYKoBuckRmKtuTnv4Rh8H5ZtYfStz29o94GrfK9egCDYuwjkJSRiQR",
  "key42": "2uK6AHU8qY5JLpbze4iZUVq5yxoCyvKxg3kfeQNgtPRdrChupxxssx5i84Bfkko7aN4hdigQKeR5rRcTcgrXGHVe",
  "key43": "44zHZTVqxfD1TmRmNJ85mUtcwXENqRq2zcB95gVDKmDHU5QdBJ6Nm9Z8aYVRWaVGqM1qTRs1jWuS3viWwzZvGExM"
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
