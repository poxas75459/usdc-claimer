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
    "YsYTQX77afzuYRHbsdray2Yi5CiKT9UG8Tig1NrbYe2jDToJxjyNbeantDT1z1A382QwjbeXBc1BopA7sZVkQxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RiFueLs2pqr12hJDE2ii2i3zQdDYYHp5zjGPc3Hq4tXNkzFPcWgtHRKJQUvCLVXP4zuSkgzGWCAHG1r9Dv5F8nx",
  "key1": "3VWh6FKJGCkwTet3EnHWyksaoxHtazH2y3feK4u5mt3tCem9cW3dqrPfG6ZZP4mHCyrPW3DFeopTPJG6XfuYB3mB",
  "key2": "5wBubGRbGYCpa4eQZKEUoPG2SC5S1ffvYjjgHpyEeUdyF6QQT13ZCi8s3hfhK48tRnGjXa97YkLrDRr4op1raaJJ",
  "key3": "5Dqt2vTyX3w5Huocr1LXQvUGacxDyLkJ6aXACT1QG87iNtKvbx8g1arfMYFi35kMvbEYwYgVhTYgezVQyZEgJFqh",
  "key4": "57LV5JUvPz9SkEEuuTdiZmGeKFRbrFNicBbPCFY7gHLL4gJeUP1mKHK3P22FsbL4CNddFnEpGBXaMiz6qB8AXd4w",
  "key5": "5Q4oJMTJFYstGTYFkZRkTwbhk3csETrYWftzew9XjKNyC73DLngAeFSGtGnfnnVqQcg53iK54YLyFQyvkJ7ig28X",
  "key6": "4pxMfzn4irZS9HM29hnvcmzXYuTXxWtB8MTtZwNfxMJSjxF7KCxhMY1qfoXHy9jqb7rHWMnpw1s3L6wZCi9G5ngY",
  "key7": "5u83qemF6LFPKRSG2t4Dcu3XJ1rHvD3pEX7ADPHCMnresi3Eg1eYU1wvqQkbBZXaZYq5dycMpe1Q3JnCLT8Eohjz",
  "key8": "5VXHybiT27ibiStjaWRU6mPKhsbVU7gKmyuSK8Jy8Kmb8Xf36cRRMJTuoEbSxiLQekokhHwe5o5SfMucemLkw3H9",
  "key9": "UiHS4rTE99qSvwjqEaCNZXxPWLNnhTPNUPUP3yS4vrvJ19FP1ye8DZRqzVMoA2dW4v7S8SmvioZwVXsGcngEarV",
  "key10": "Z337nQBueWMYQF4abpXhLPU6R8P4u9ccEjXzxPc5nAK7v2nPDpYC7DZUPSShocc4WhLm8d7QAowpz9zYuGTz2R1",
  "key11": "2aiuph5b8putg2dBmnRB1N18T92Z8fdLXWohLbKcspfzaQSQQcbRm862EhA1ekfXt92XZKhaHHSyfBDKZJqCUi6",
  "key12": "3pCPXjLC4BpNSpTYTQ6okgqXEDbNBq3NAsXQGq53KS4jRG1GZtw6tYGibfVx1Gwf9weApooqwb6hhJgJym9ZvTXZ",
  "key13": "3p4TBN7v9q34Zb8EMgsjhiJgagyNN7zfbescdiN4jkyyNCAtiuwo9F1PFLkh3syUiCftRoSwbn6G8HQCLTPc2VrT",
  "key14": "4wiTnTRnSqH2LV264BPtTZiEhqumshfs8oZ44h3MHMCeGLEjxRXFGc1Xt77PmeDmKd1LTbKarWAtDxs9fEgetRsP",
  "key15": "5reyTLJrny1Z5kpvFD3esDkyPR75Dnw47Z8fZsfWzUvoK6YRTc68acH5SaMkb3giapKMq98Poy1ruMx89vgW8f4k",
  "key16": "547is2Eemyup6TTxAymcp1H1yST8HD4dF5iBbSR2sxuQrfX1d2yfge2ABfrE7dmCuC8xZgC4icNuFvyidF7SogzY",
  "key17": "5NvZuhhzWvL8A9sC6v45E5R9nbmQNdNNF4yDDJr4kRYuqWKLYCfVJZL63sYLJqPTALnywUTnvtEfJnnj158auphD",
  "key18": "5HRF9GL6nZuFq9jY2Bh8NTWR7jFr1wQhAw4vxw9DVTdEWhQZ5T2qAxRKbcYtnPjKB7mwgAse3Ya6De81B96k7HVm",
  "key19": "5GaiYZw2zMbEfV94oDUphKMxERMqTE7fppvYo77WDZbni6BieyC5QnUFNi5bWxSpVLJFKiBpGFHENC3pBAkeKTAu",
  "key20": "5mWSYSzuyHzDrdBjY71eeogPxnL2kLH4KegAtHGyFwPmRSiWuia2T1Hh96z11s8feGKG1L9Ajxu6vLwNqH1tiyke",
  "key21": "4hnRPJ4ZyuocNZrX8xjgsHpGLTHtFPLgbKeB6hsfEaEeRKijK19ZnLzUR5i9NRS8SnAYEK6h3uo7iEBRN6uzadU2",
  "key22": "2ujspqxT14ZHbHgw4kQ25AUuCeJtAezWZKHq1TMk1PLoV8rFBnn7dTVbkHWeFeSgZhYKqPtKfx5zcxHTMJxppybe",
  "key23": "q1XYvVmx5QXqoS8WmFcC8pvo8AoapxS9WottEa6P9xyX9cZFrhtCgyybjQGSP6XU4HkpmVDmpm19cn9tjUucGuz",
  "key24": "2mRVFhfphbkuvMKFkKFTYj22rJESgicPg4K1iAgfdBLkcHYhtCgwCdrStJutjVR78DrSEX1ab1wDfwheUfmz6C2J",
  "key25": "4VTteKcmbA5nfx7JbjmeG6Wb9RG57nvD1orUYksTHiLFc5aRHJZMWcgtPxSeC78R5BxhGYE6t9ytrQz6EHmH2pqY",
  "key26": "4tB5NeGhSWVNe2piozbyk9HAQgu8qaXuSDA8VLZ2rFAm97qZU3sjdJz4chqQHJidQVuAXGxeL1pXuw7BP4aGBBrc",
  "key27": "66dzMx1wJa9yeE1RJLBWxmYceP3WVyaJvXywMuPGsQ9WDhjiVgynV8cZVhcvuiPsjNnfP8khBLrGKTSdxdouvqXy",
  "key28": "CBXBdjR9fRVpnKFaUyDQqFEpSswQ3rrwZURZmSkoSkXgBTfNNS3KzB3YizbKEy6xpWHttUkZMWBDGRhcHzvGyK7",
  "key29": "2sXuiZyJXBwnka4YQGfAx271aUDhRcpqPDRU8PthQMhnpHRZztu3gowKdmLybSd8u8sh2GQjdpCJQ6CG4iJsB63P",
  "key30": "4iCTLKfm7dME8mrruwEstLXRaWiWFKxAzgjt1P3FC7taz1EwmKTqpLijcXgK9qMAFfQLFJ7dQUzGWvk5Da166UWG",
  "key31": "58znmYr7d6nXBGAP6WhF2fN1JpCr8Ji3vA5iGiGZLbyRwkHkhVQH1aC9wNSGnk91EtNLQQSs3a7ctJ1acbAwLGKU",
  "key32": "4JnbLraHtxQvuZicKCUX1VEpYLkv3HDYcWDnKtuT8smATEky8kcAzj4vNz9EgdLDd5FWE9kMagrUKQhZBSUTVnme",
  "key33": "3XxR8kNYdBDJeqPqcCk3pDudqdAPDf4JVsqNi5gWpYXgGvBxbDjkBbic8Fg78GsRcR16qh9duqwujNY5rAyDEG2L",
  "key34": "3nozFfESjpNNB13A3PiDJHQXzAq4u84jQZNZPZEduYLFQ8SZcvSRm5P6QwdrY8qQpf38NLs4Wn6Z6wqDG91owago",
  "key35": "L8LR3KFJSMtgW7SRGuJchLaNQQAcmzSxwVmQdHHE3g5Lxm7heJURF8y8YEYY87BZnxWGJsEbavhwXjVki1G5iax",
  "key36": "3XTN7oU2qskxNUFSvTZCDTgxASMD8nD2ayBefturw59sdLJWe2LTfVSRM553TmaPFcHGuMsyyTNx31vdqqz3Pwm2",
  "key37": "65oyQQMyxhpXR2UqogX9nvXVqmxXGUEbbfbwD3pzJuxRPaPRGA7ts4W46cKRmCEh8vwVGNrfNMn9QqZ4hqu3VGKZ",
  "key38": "cA5c7JTPLMX9fXFSymHEYmh95DvSpPJuvEUDVFtMHVpnF5a4uwkJ13UUPGahXU3mqV3dmKeLex6ugrY4kfTZrUT",
  "key39": "5aSdyaBU6FJRtjJeth1vnxh7GJbvZNkQunH9kdbAdn3a4VLEXnjLExDZ5id35ux5e8MtcvSfo9ZpdJACLEauY6jT",
  "key40": "RXhES7qereQnwbchmizqDH9mrH8iTvgNv4yTRfR7Y8A1pCiyJdAqCbwhxWiG9riMm6iHBqUgdAUw7iLpJZPfKx9",
  "key41": "urdjVHb8aaUZQWWCxxmPSjRXDdY7S3ghddNZrhD3sTNZzXxYQaGduY6WTf4ayGCb9LofgrwDXpx7xdoC9BLHdju",
  "key42": "5kL2u8aMArNu2G9RDUJbWUBM92MZDePFW6hLzWvgq5UFn7Rr8uJGh1zH3sTSa9kzcaM1kRwK1vw1Ny7anz6ePfR1"
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
