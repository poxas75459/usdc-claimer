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
    "5Hg7zb6s8hb9ngjt3VR1smi2Sspv3j5fAF7haa6wgkAUvkBpxVST1ExHhyDP3uBzQZnHa3oB1F5eTZd4uovMjyaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q5XZ7xbtguepzwPtTXzuHKWJmL8gBRx8zkEN3JnHcYU2Es7QbcWikLx8GQaaUiGVteomfH34aakRwTQGf8BbjP2",
  "key1": "4kswXgAyX7SnHtgQKPhbewKhzUMXHbfQ21eUVneZ5tCwz7MD5JbNJHX6RA7GmCM29NaDGXxg5f45TckibW4WgER",
  "key2": "CT1oZiM2bsPjWRCnsminqP6gRCjhphxuiquYcuUbtTYqTYimkVCsYJ1jCbJwnQWESYGAN65RQTGNFDtuG9facL6",
  "key3": "2szUkyKNNBnqdZHo2w2P5iWQC1QY1oTo1oVFG9nXZHyT3jL1jDmuoDbECenXgtAjubADvefeaZgd2vqx7QiryVVr",
  "key4": "5udT852ykxuyYnQWRezRp96wMGKqSERidUVS5Mv5UnvFm2M24Mb78k5JuEAuZQKqE3wBbVZEQqywtkZSbz9Rejxs",
  "key5": "5qJof9ak7YdP4S8kp2GXx3YCD94qx5K8XKpsZDt5hUvgAVrt5GckA7uN1jtn9ckywWb586L9Vo15HSGfdJgQonnW",
  "key6": "5CWA6bxbrVHf71AzhiA9FYw3RpjGFDYnLkHn79QhHzFbHvy63RTYZzQ4YiWddS6BR53SK9RxLL2UvjBtqugSNMYo",
  "key7": "euPpoZBuriyfXgma72SGGDHsBSvqXkabnbEBZyZvLUfq7yJbcPPgc5v3SWKc8JJSgemaurdbYtWpXy2SCVFpeV7",
  "key8": "NUhZ3bw9R1Tyw9gHUwVcnDbjZfKye8dD7zr2e8JrHaDwWrHkASbMUsBQdzcPtWHAMDpvRhpWukSzEbToa6GMEHf",
  "key9": "THXJN8rnDzWFuwEWG9nyAQupsNkHCdz2V1eGTJddWwgUUTczhEL921HNuwG8rWLCrQ85xoyPrpuGaS9TTj4KBKX",
  "key10": "JsrnzMh8ZMxDP3h2B9ZCTfd9THxxHgtVNkHhJ18kLeJ2wFvbxd3UYMWmd8w4es116tz73VFeUn8jVrHPoHHrTMb",
  "key11": "5hNb9MKvn8DGL3BWQjHEnMqKTf1BBX1g3gfQ9ifEY31cPS2tQUDaQZK3piW8qGBeEXWAn7HkW1m8qmQw9DWRKJPL",
  "key12": "5DTxXUFaTzbPHwkS1FUCVgqA2pVK3x5zdxf2LexNJM4tq3AnZbSE2cQUZ7NLoH4NL5wRCe37sHASGJDDebnzoSgZ",
  "key13": "3Anyq1HNuczQK3MxqNWZBMUFrC16eweFXN2HmoJyhtZhAaJ6AgC9P1JjyYMJhJdJMaDEjfwGf44Qgtk7oMCFohYf",
  "key14": "wXJtFZ1BbWPDhmNCvVccbnZEFVxQRUw4DMxeMU6vMcfG8GuW19KmN1nwvnvVkeqHa4HS2B762nfnrvbv2sfpSkk",
  "key15": "NxQEQxpYV5jHXiUoh7BWaZbux97YwpJDQSYBEt5EC2M15g9fv38sbGnoqUqGRGKuPyKKumCpmG2vyCWg9E5c8wu",
  "key16": "5drcmqiA4ei5qmPwALQrFLTHxtdkkCuSEqbAT7iDbZXSHZ5vfZYay2DKSnhMV7qxu66CzNJinnCCNpaFGZWubtTh",
  "key17": "4ktL2JsPutbp7cWd4JiknTYNiiN4zfqbABSJCg4t4irbsrBQMsHTF1TCbrnGPpkdmyhUK4RDPWtqazK8vF9whWAS",
  "key18": "Tk3JgCtQfG3ffoewkF5hWfvTeShJG8L7ztw8R3MjTfLWQP1L9KPtsdLCbaumNSBi6rksuepb7YFDDAELk53f45n",
  "key19": "kBp5Shv7xAAGdGJveWiWHQkg5cS3zcnuowrTatGvG9jQ7hWKeBBhwzfTa9kDY2w4PstnQ21YKvt6DjZqf9EFJb2",
  "key20": "fqJFsBYmot7A5pWZ7csKXQRtsc5oPgHCdZMtzYVUEZ9BsevYngkpWAwQstt4wQVVPkh4AsGixxyNRcACaJqB7A7",
  "key21": "4fRnLRHtz2bZWjSyfZxdZmB1pcz5Mq5WqhzY3sYsECzxqH8vD1MjwSXoLvAioX3XvtojRXwUqhMvQy75QvbM5fqJ",
  "key22": "4LYCHzJtoMa6oKSwA2FaXAmeEUjeAmq3g6gPSGLZ2eQXvNNoLQWPWWxDVrkU89dCsvpbK8WudHW65m6kca2NLjft",
  "key23": "63Q5sDqkfzzNgQBy2xFAQYeAtZj3EK1yyh5e1QetJEFWXtgQM97Nr3s1PR3NjHCCZqAG9Q3QiHEyXBa3gsLD7aS8",
  "key24": "2qgKrx241kPtVPZtQqpAYK5C3vvDt76LWx3S2wyhFbrUb6Wt1mhP45UE8NCppMmnjTRZyge7B7hXWubC5JUFi2HL",
  "key25": "2xcfNBpjFUrEMZUPYyt1JWnLEbi7Vfht24wCUz8njGBpMAowgg8vEGJu53VDoL3R5ySvZEcmzPemKguKUPbxpP8E",
  "key26": "2ifdVVgBRf4Nq5M1r9Nrr54dhyQoCJiSk6f8ALhD3iBQNUuCATbn8SRHTx1vApjrpjYcMafgN2jw2ibjrQodA7DL",
  "key27": "JzTdqdyucJSJ38TcqvoY46cjDpDdpJnfdVstS88Mbbjh8Ud4De6wUTgKdeEbGRTmjmLARhvaZ9zY62S16HeAnoU",
  "key28": "4m5xwYmtngPFE72PJgWnNnDjSQiyU1GGKBGvVfLMQe6TjW1acdQ97va7n7SF9VKWz9WbtUSpaHnpk31Z36GkCgZt",
  "key29": "5bDgnJTn1TqM6fmrSTeo37KaHsj6PLpkbx2UYwzmQrFuQCX271uFdoBZuT5dJFopZKM7pAAg9FEquEFnMJBYDvyA",
  "key30": "DZtkSf6f3MwxZ1mkvv8aGZzM98mbBv4er4nynvgwDccGBVxbLPK4jSyWSF2y3j7P4YMtv9qfaRQJ7hm2PHyHwmM",
  "key31": "2hdwQfPy2UMocRLDdDkcCxYmZ9LbseTCmnr8AxmhxzycuquGseJtB1UGMhDk86a3zPaVteQ93afuN4x5HM5U6yGn",
  "key32": "UMHaFa7PBMpLdWN92JeE7Ag5ptgswCa4nbTQQbKURRWsvzkB7NNv1QqBPEKmw9xfBPBtXTnWRhzKfG1n1cu97wo",
  "key33": "2UErA8hvgfrADm77HvforRXAFpxpUVJUzAQ1jmv28H3AeWWprdQ6PeuzfQZEgmyi2tSv8vGMUvyUm9reELpZ8Dqg",
  "key34": "43p1mrhzcg9o9ZLLySzJgL3ZovNDs2eMKmL4bMc6qJo23GKFEUyGCKBLyRGNZyRscNSzLDrDvTYsGofU44PCf9ts",
  "key35": "33YEwt2i1TqgBFy5acjSStZCGaMCA1bXLxd8qazN8xPgiUmN1kUBkhXdRrRMomDQ1bN74niWWFxRx7mnkRhBmLzR",
  "key36": "4xE6j7TRr4XTFSRkDAUdj3zF8U2LhS99ftuvrdeBUmbyyJLheMLw4wsWce8rq3HnbzT5KdETX8HkJNxBdPenRGf",
  "key37": "3W5WDrZVvCgbp85zcVMV2KjQufwWzXdpM17HCzmUYk5S5265mEhV2khWpo5ziDCo3zj2NWgNsZERP9HbVEwECB2d",
  "key38": "3v7ovJ69tdLdmCK1YQmMewBsUUSF2VZ9oZYduKJawAVKDxkgczpJmmWUdyVE4qakstiTgJn1ZoDTDrEvhwV8GQFd",
  "key39": "4NGZM5EfVzDxJQtYTkMzv4NQrpvRgfFS3uVwhZfCkqfLvPTmRXywwjfmGENHvhcyL178kpP3TFhAh6RSsmTSqVad"
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
