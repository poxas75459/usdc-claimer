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
    "2wAaVSYHGf5WdqbCnoknEMJN3utW4V5LQ5KcjDa6nEq4tqTmmjiur91QvFk6Ypd5aLwthzTz8v9xaxGYN6Waxp7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cgbkgfokDfUNjDjLEptLr7UjxVUs1zhW8SWiaYL8MgCEFRUQdM4rXAkvPvGGST3ixeGz3C8z5V6STEwAEMgbDJ9",
  "key1": "2HdydMab9roPEVZJAA5D91wDkPBPmpHjzTwzuLJWzGGuFo6esJuy1BQ3bFtUwNLnwgXmhvfLuqjHsrZb5XrBThsX",
  "key2": "31bgu3tu45WZrfCMHFHHEPM2Mhu81S4ikUkLtqpMjmqiE26ndR7ggwexKAUXVkS7BoaZ56EuZemqHK8VtsD4pzq1",
  "key3": "YyzEHzhtZhe6ST4vZyCVhTJkgSMeApcYUeBHsc9vEevTStP6a64JQ2m7CJaibb1EXMr2wMa6vVozbBfbHkTNpGx",
  "key4": "uU2foAFXcUWsX6UyHmU1ym13NiwXyMoZWXM7H5tmV7SEZRQF778hpW2ct6AEn7h7daZ6pfCYpqZPqNMNzYMLcgD",
  "key5": "ZsKwMBZi9rAq3PQctqkopqJYLtGxJAyRJYFvzTvRSSTHUz4C88Sps6bdXd79Hu2p3VLmXoNJgfD8xaNVi2yqSdq",
  "key6": "5MJ29WhL8kY6W2qCAUFYw5GHvDxS6BfT4vUTPtF4R46Y96jg9QpP1KxStXgsoMRtpPWVRxiwSWu4pcoiBPS7KPRX",
  "key7": "3MdEqMf7uRJMXdpjzhPJufUMWC9pp4JWMHFgiPLAMDbgDiViEcBeJHLyKErXPP63wLQKmMzDSrcTvmHWdLeo2T3c",
  "key8": "5WendfCEjyrY1u3MYV2BzTov4WJhqxgDDbwRGiMBJDkkPApbpv1HSLnZL7zDTLtx5BrgaXXJJpPBWVtp4QfgVxsS",
  "key9": "25tzzoKivHgjKXTmFWW3MXEeYGQVYHJ5x5CQUbqb1tQUkoAwbrZMGMSkZv8zz3bgxJkH3ZXBX4ShSGcExwvkGbdw",
  "key10": "4eW3VfkCBFSUYzrobi7H56ZWir5WDPDg8mfBLTKMC7tydCU3VZJSRSBUQ8TMKsZ3MqCmMNuxB61wZoAt1TshJdQr",
  "key11": "3ZiTxkuZhjN2wVMz9cfVfSxE2qcjSuqkzzSaPptfgbfce5huCMNkzgFpzE2nfTsdBUeRuYVqPzJQ216Mh3UbkeM8",
  "key12": "5LWByuTRJbwTEbgKa8iBESBv6eQhMUUtHdNP3m7JfWRzNSbcFS66ekfqKLuftKYBE6PTFJz4FoDBbzyFSdwmyqK7",
  "key13": "3twBaw72JbscpheQ3QEHx6YoNru1AaZBc7TytzscUEB3YCxcdN3VDZphoVj7VbrtGqPQRNokzHGZC2RmY2JuxbNs",
  "key14": "2JU1PfqT9Hs6Bhn9X5ahp5wSAk255EcHPLps97fSQvsUPh29mVZPWdydYn2dc15LtMLM5H11qpKJbXeQfzcMicQz",
  "key15": "LfrHDihk5r53sJrvauzvRHx2fWeDpE7t1ALAQaPkYs4SgmLWHmVTnfvXhY3szXiu3CWHWAkDwjQwC41otfb6xah",
  "key16": "4J948YWDq7HeRGtK7JfwUrtE1bPCVm7B9SwwWdeEVBTM6YBtGHpQfA1yKPCEEBT1iPKtq4rYPhSPWJ6WMJi5jjCH",
  "key17": "4rrCJtN5vemTyQQdKXE1GDP1b3qzMy87VDBi25BEy7UMMy4PhuDBq4S6LbxW76F832ua5DKoiduhM58BFXWhTcPJ",
  "key18": "3xiwUmXG2sf46W1CHBGahkNZTkGgDj4DSCK8cSKUnGuGJkeqhYnMYUtvjQbh9wZejVqNhueBtgipVanpXtEkQasE",
  "key19": "2egQRd2GN3yG9mqsk8jJBmn3pp3nS6wKqWhy3U6XB4WZR7BF7XDRziAv4MBZ6SYj35S3RwcVzcepdHYTrA9oo5bg",
  "key20": "4qMKN1DMh65Sc2NdDjfPGFsWF264Chxk93BLkV15rZVsbkD1hY1EjWq6fqs3iUAEm8ApfAtCioNqAvGFwyTF54Ti",
  "key21": "zNiXZbFYGYJCLhcbCyaGLTkdyBWaLTGZ1AbAhKpTPD4U6L7Tk8fJV6Ruy7p1fbCS7QS1wsm2FhRhQ1E2ozXSVzG",
  "key22": "2QxPNpT535vN7PVGknMtUDR2N3sHQUk5YvGnr5YhoEEQ34gq9ef2jCGzZLrFN9Yz8uof3SWogvjKWGowD9s9iCus",
  "key23": "5CPVqtYuTSUNDzdkGFszu1xEBRizDwmHLkgmaSu3yQw5gvVHzLQHvDats4F8yvUqUwNjyGrhSDjcTzyCiBUHm7KK",
  "key24": "4GXG4xFgY4kY27R2msUWsrk73ws95Lyw39iHMaJQzaR8iBsoHkL5LkA1yhe6tsNHd9jd7EmcB1f6mw2xdKVx7zFG",
  "key25": "4twKQUmqR49oNt5kV4ihWoZEjUKvkehfKsomU5dm5yuCq5RPk8JMveotn13sxALgqBM5mHtZLgukicgnBRvboCVv",
  "key26": "Mcfxp5tM3cz8Xn4tEDBSBNrTve1RMtr2QQ5KC3yASAqB5vtpB5ozcWRaWpLVohwUc1m4aHAZxc6JVcsCD9MoMZw",
  "key27": "34ikYB6yKetJFnvvhYGWssTfg25dkQ2K9bCKR3Sbof2Z4azYjSHzLLuJVJotosSq1BW4jqTEgiiuUcsuwbrPM2j7",
  "key28": "4dRsgxQCMrEsip9oyBErRx5xAsu75dBR6dc4rwQsWd6Tut5cvmNdCr8Zy14d7AmRSAyxnnCB9XsyVcFkRGqrSoxA",
  "key29": "4eckd8f9iEnQPZYWEZ8LhgRYeauLStUpXHBLyJ4MYaGenrEB1JzZv8F2PnXEUgnNk6Y9hTCQcQDcJBKEEcyMj3F3",
  "key30": "iDqAor7ckoL1QU3rGibzT3AMeDdiNePbK41BaM4AbkhS6wczu3mXay6FCJSUUEgA7nTqiBEqM5BRZPAijDdxLQs",
  "key31": "yQUVJ5oCJqmcMy9YhCnQwuekyjyNgCVb79ZUpZHanvFSccKgAMLDXAPa9as3yAW8qkoYxfoVL2WKP9986z6uMvh"
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
