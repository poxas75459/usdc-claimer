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
    "5e1RXSBsV73qyDQsdWvddkewcSmcmQYHFf7n2jEPE2WiGBbBTwTJS6CjqJNx8VVpEWYatrgj2XyWnBgEQ32wAXBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dstp2x8YN4X8WpvJLsjhxgVAXkzTwBpPwk4Utnfxc3uTajLAPVjAZdz8txXYqA2bwtXtSCyZzWQLZezUdyhJBhX",
  "key1": "4iVnFvhCp9Xwo5aJcETUqpdp2j6eCeeqcvGGGkGuvXERUaKZWfSRjU5UcNtH9PHquHvGCHSE5QoLP9TmkVvhjEwZ",
  "key2": "5BbEpxQNiKWjXtCJfQyTGqWY79uAGSUc55qyMcwmUfimLQmv8JJ4tHK619JqdsxEg3nu9dYuRdeLJXovSGC9pVzK",
  "key3": "3y2htZddV4XsGNwsnR8Ut7uws8xcSgc72orZgjq2JEBspiLDfD4cK7fveqp39wBe93b8qDE3ToxpgYjoBTd6GAth",
  "key4": "5Z1mzY6xVx3cRDctoNksYMnGS6whFmwwvSqjNxJx8t1SHSSXree9CcyefHVQC4VBLZr8JHPBg31Pozktg4PuM3uw",
  "key5": "4Bzn437gSmgqHudC53RmapnmmhoW9brRhHu5wiinEyHquMUoTy3w9dnENyYiTcW8bdrhBYHsVPph9pmvv95pZWMU",
  "key6": "f2G2FuXzwmAGDdeLNVAAvx7NuGuGyhfUHes86vW8J2Qmq8qHmJZE2oXodjKJxbZ7PJDsRiBDSE1QBk7zwxd3NMY",
  "key7": "2LWto9HsAZERConPofE7EciKkUPh44U49V8EqGSqETtwSBzJhLQEQzfHXnUJiruJAy9rgbGCZhgUWzN72JkFet41",
  "key8": "4vUiGbMJE4nfBcZNYRREZFoM6zMEgEkmsoG9NFZ7bX7CA8CX117npT9YWDQmG8qiZuVXfLQ6qar4ZDRoJC1bc4XT",
  "key9": "q89xPSS1CmPs2b6fEc3VpSsPEj4EYsUFAtLxDpH4c82NYDqDxTz51PvZD9dbGWm4rWDoUUgWEDuQ39jzm2SYcWj",
  "key10": "2fAA8SE4LQDdFteFaJnXDmyCfKkBp4ANw9Bh8PDn2ztHjSVydZem86hWDjQnWnLY4tJfBZKtbRqYvukwZ4qWtJKK",
  "key11": "4Ut7UZtEBUQnEEFFGdh8r7B1o6KCjH5ve86xDGBkqFMbcJ6spKwCq8CswWFjBGePEaMGTyZPeJcZtd2tvxjz1h5Z",
  "key12": "4ECtEujDneXibk33MhKCphhFzNCoYhdZ8rQyp3z5jwCHjqWS8xMq31sNZrwALGXo5A9Uif2hxb1RE151qwsYNptC",
  "key13": "5DQvwEz8HyWuoJpGnWVGG9KcYcX5Firtc2GdVVdVEXRf7FnJUHHpAaPf4a8EiCDUwFDxNKdAwsauEJ6PBCkpG2Ep",
  "key14": "iDDGv6qXP4c6TT9Y58oCxi7iUxRhfH9S63Swj6gHXe559v4ij4FATgRvVP55n6HLk9KNzxK2iLBRTLUM6qfiVpQ",
  "key15": "2WXdihp1Bq3z1Hu3L8F7Wb3DNyRFKNnnKqeZn65hmF9uyqz8imeYnayqyToxcVenMeBXRfcnqCTgsEXzG54BDQBe",
  "key16": "4Z3e8hvA5HRFCD4Q7YP5KCMcEnDHiWbLyTstgLZR5ZnVLbaMRWi21DyYfxEtZqKtzDcSiSahZqT9k4iCqANqJvkx",
  "key17": "2oEHVLFhsAHK3SoVy6rYDNpdtyXW6BbqRTJVyTdQ49mgEytLuAvGtxkAXJBerVpWvxKyrEWjvdvnFFs2dADpv6AC",
  "key18": "5V13sQYUYvxU1viKZyuB88Rc5KjPMXYj383gMQ47W4Mdo7WSjcLS79njsT2BwfWi9VT5Ta5E3bVdxJfAz8pCCBV2",
  "key19": "2xuce18TZ9uQAuwkf4qrBFt5tQS2gKFnC3eu1e7MzV6A26WKna95hpZ6YLRmncxndZxNXL1YygWS1Ai4swUda7vi",
  "key20": "4QfaKxGpU3auSEJ3SRfeQrqe9cn36RFzKYgBQoGaeabauqdsC2VA4B78jnjLYfbG5S9Q9BTL1Lk8ufB4zewJVdRB",
  "key21": "5BDBcNMK2Gp6oC5Enren6aqd9nVwK5Y96b6WHM2Bn47afsJGgTr9cghsywyaMveGR3Pmjn74msEfhe8oPgKEuarP",
  "key22": "5YnzMNqdLYkua4dvQ87GrAmg9hqVViXqt7zqZ7H2hea67LAZSX1DfXxF1AWf2TvSHEM8wS9RCoQQZyoNQsYyGABG",
  "key23": "2NdzeKtYh6zG3BLiipT793d4AyNYxNeBoRGNaaMjAJhsZXjYV672sis7wfVLJNesMyKxywKE2TYvmYaPkGkaBw6g",
  "key24": "Aocxp7mosoKHTZxez6nXhyDo5rk2HrtNBL8hN9czis1c1KqJYVjz22fg7minaZ3BiduJ3Z85zNPuh1dUPWL78J8",
  "key25": "5hRA5ZtjqSFiSaL5CDu1k9EvFwScD4zGg29tFpYFdvsXnC1iGnh7At4FUq1NtCfBRV98SQ8Z7WnUioBizyqfeQFj",
  "key26": "2UWByQz8qeVrky3Ytn8sgdBVaEXjzpW22iLCLuvuP3SrK1bPpXYyngcGAGRb7Dvv8o1gt3r3xc1w8aBD9M9aZ8cR",
  "key27": "4LQzi1Jf5JB4BD6C5TBx5hgnUuemjcnAC1KLU1ksw9utVoAZod8doVM8hjYSyANt7NHhbmo8JZNiZ95WpgvFNuMo",
  "key28": "66jJsURa86GyE4pzpAcv833vnLKd8oiUHj9YFrzh8bv2qAcHzTWHcTZwgp4SEthr8gLmEEbqm6yhaSSNR6UThfE7",
  "key29": "4JmKHvshetPVctTFaYQfTRXbhNekj8Lzf3SUUBnMKqNZJwe3RhCqeoSQxZZvAJiebhFrmojhzBW7kV1aWezP4DGj",
  "key30": "3jJ35wCK6jrbem3JGyNWD6BYe19YMwaZQejbCPZvmgdXd86bqvXzzmAgTevL1PJ4R7aEp51NZ367FiRQZEuPSLgN",
  "key31": "3Gepp1PzTYuDT3u1a19hWdBYvfmCUM5pH86yfjdnamjTZuZfBZp1XkurWNXPbkER5f2bXJBKHu2JYD1eMLp9gJHt",
  "key32": "4FLBCfMbCHrT6a3v7qFBw3KKqvwnTjMAHqnd2bvDcYu3zYXYZpCUG3SQQVLP6omncNnPmLrwNMGUt6TR1cfcea2G",
  "key33": "4deGjT2ARix96KfH3p1d5sm9H1hcNJ4yedtDEjKk9cZcCZyaiUkvZe4ZfwRDdXju45M9kinhWM1q5aXezL6YZkjj",
  "key34": "31ihgBk6Ycr8nAeVvYqDMEPwk6othuPdk6mYfo98g7P8c8tq8mwjYNw4bRdzqaC33Q1CmRCMx78prKECYuT9EezF",
  "key35": "5ZU1UhFZSv9bfmFcqj6YHqSEyWftuxTybfTyZq8rWB2xWmh3VJ5u36XG5KiHWNRisZh27n3TnxuF3Rx44UFDRraX",
  "key36": "Z3oqucU7jEPBmfFxRvqv316BMX82ZaTdtuoHxaZCVN1EsCzLFssZyCwZ8798t858g1XBTA1eAPrhmQoZF2a7JJB",
  "key37": "5QfGTNPSMVgmmojVcYYYLmP6KWTBNhwM7B46PjraEWZuhE31EMBJ7EYercSh1GXL3S7ydj3nGNmBffawHKUAQ9iE",
  "key38": "3tUfAuPNqTmQeY4qaKgiuXxWLeLDLf4DHrPUAWDFewzHmEGyquNfGZKmXLWnxKEKJTukxZcVUWy4JLboLdCfF4EL",
  "key39": "3m5G2nqXf7jRQRj4AFTTJDWoCZ6cDi3k4aQqyhKge8cBTJZ9asAiP8LZz8qrexgkCwJsSo7SQcsRPtL5j8h16V9N",
  "key40": "5ECEoAPKSFbMDSyPEy54sszvVts4zhxs4vsa6Dm9EqGf7aykj2mGpn9EsHz8yyrbi8SbrPUcU8vU7Zq4EiALxC6v",
  "key41": "33fYiQ4dkS5Yh3fBh47u9CtsLbzgG8Qf37TAUZC1dQnCPu4y38FjdTrhnn3UDTr2V1tWYfrUBdz7tvdEewpj3XyS",
  "key42": "5KK212yc9S6ANksW4uKvD9ygSNUGmm27qNNRZxrFjYUPGh4SStFuwKyhAT5rc8mvZQtbLG6aWD3nQLtE152rBbyk",
  "key43": "3hqM3ypdR9fSuehX1HvoVw6FxCwT2VMsq9rk21tz9chALdUx49nHzdVPrqK8ojeHTknPE2F7Pzz2e4zAvFqGyao3",
  "key44": "2LzUMRVFwka2von3R9pxnLFSRbz21cww5n2P8rwdqNaCZrgsvinuLifgaY4fXKKjEiobTsgepPqf3BMR92XJGeHQ",
  "key45": "43Mb8hMYPCAU4AYAhdyeg4p9VmpmWzxrMxD7dMLk27iJsUMvu5d2N5oNuYnhkT91QUqhhXnYV6xCkBAJzaHZjztq",
  "key46": "5stoiS3yKoQXxbqcDBdUd4TTdQPdsF8xB8pK7SghARya9LV4h3giA1L629zRXFUvzB9NSJUUwNhXTnPv8dWonEcX",
  "key47": "5P27tzkaxR25PzCqMynuvUbGHmJgPc1rgY1vuvysv21gHHNCQHx2hrMxmaLT8qhMHXcoNub1WwNdjXewWNxZFZNU",
  "key48": "57ob4ocz2NbLf3A6uqCpTT6CFxzxpNz7JU2UuPrcgNXDaWBDSAJqjgzRi7mDJPu4p2yPHAGZtp1co8RqM23auPNk",
  "key49": "4xu3FcTHRL8qPBMor29pg2zziaQ4JnPss6Po6RJPb4nAYFn89YF9sJT9D6qpMNSyC2VwLjLb3AwLT4mBoREhMSXo"
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
