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
    "55WWFUi4jWVq9Sygz4vjYau6BC4twA4ytAoSLw3HaV1uWuVexNQyoj5u7fVLUzHGZ7SMPfPmq1pxE4BhLAhzRCZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qh76JEEio1mpNz2kG1RBxwUffXfSZzuYPo7aLkxSzSNQPunX8C4ht89esY6q3YVSX7Q3CrNqLZCa1F9CiQXnsd",
  "key1": "2TiKZUDNdU7nGugUAfnyT8FnGZdAW2VS5xGe1SbwPxPaie2gKJjCizRgVFCvuHfWrumTR1fKzJb5uCpWrSSQz4gU",
  "key2": "44858KjMFZLMbm89zXfSUXof1D7bFVZRNaA3ciJvsgTnSiTEoekHgftzZ7kDGnujVoA9sBzQMCTMfVAvMgTKEsky",
  "key3": "3415E2ZFtvQK9U1dXAPnAHGB2CHbC3hF5ak9Vm5hk9hSQUnE1LqnutcnPAJu98qrXjMVFyDhjTRkYeThbgpK6qBw",
  "key4": "3zjATzJqGRZgvXJ4Q3XqnYua5DiE8AeRjRjjWLAnnv5rHaDCc8Cw2NujGsXAP2UzLrJPxgGdEq3aSSu7s9K6aqPn",
  "key5": "3L1wFgQugSWZwz1Ptm6HB7uoqGFaWK1EvWJJSezEtzykHrx4rfCDw7VWYz4YCBrMMxgKUMuQfAWXyxogFHKrHiH9",
  "key6": "3M9hnVuQbyYjAg2mWtYPLW1H81HHFi2hPt4vRAzxa7Mrk74pnYvqpTNKdsiriMXweYPknrg7nVxpHA1Mx3XRKFNd",
  "key7": "nD3Baot3LX3DKGgHDodPHoJacfzTKouH4BGVHiNvTP8nbJG3ngmfdMTYFE7nUoFs9ozmaoVTuFnRx8Sa6dgTefH",
  "key8": "22TyUkhBxuQLW81WZbDicqYBKqYS3MhhMViHam4Rd1vx37Fv1qHfffEaHa2soMR9A28GcsCPXrspqHTCeUHkXq8Y",
  "key9": "2main2cB8mTJfEXzRsGn6vhgHW7cXxe7vwwLyLNmqqh8BHDZ3wED9auZ6MHoApYpMmZMh1FTTe33aDUMkfD1Lspa",
  "key10": "5Hwotd1e6iXK9BK3WS98DQX6L2oKYXaiABh5YaPBV8FoKchjV5PKbyBrNxWVWVgjzFKnxiuLVpr8vRxMRY9C1K5d",
  "key11": "5m2cPM8bY2eh5PvN7fkgSVHRQAcQL63m5FG8oVZJjqJv8VPWSr5TSqwmTncHWs52YGXbJvg1CokGrRszJa8mZ7hy",
  "key12": "4ZyWsCC2hhMspcWHmnmCwfxkFRwbWYLdrYyYpBnBwPi2oQffK5Tm91nHi2bK6JVk2VtYQ2mGeDkxLcBvgR918ifx",
  "key13": "5E8DZzye9CFkLimfX9k2cVybxbqH79tnbN9bn2yzRDffLYX5ZKF5mA5HsTLw9TM91K4Gq7svQUcccLhnfBC2k8AK",
  "key14": "6yLKfzJHqNhVczuBhCUjox5hyWWtJttpNHBHUJD8RBWk5yggA89qKo8epFE2diRFDNg9yqR1AzRVJc58bL2t8Hj",
  "key15": "4wejQ3BFN8pWmjjGXTP8sxTRV1UXmHsiyQYybQ19ec1vxVpccKRYkPt4HAnoKKvLBNjbm2AoAgt4eofqZPmSHXkk",
  "key16": "5Ga36Cr2TwnErzmwAk8drfgu3VxDeR9JmzVcSqLDbWB1JUkaijo8vDowqiKN87hDwMZqRwEH4QrWpPFYY7nAP42k",
  "key17": "3oqg1bt5CLoPwMswuzmVPuNe6AUdZwRaf8gfPof6Bm9Gsi4CQGGEqq2FTca8hef4qqWEeETGhM1sBf37QrKtJhDe",
  "key18": "3iXxydfsYuaH6QyhvcUejA7jC2W9NRBgHFcCtCC1FWRfvcsWURSEUFWi1uDz2uXN2zcSbRuYQGTCAJbSaKGRvdRv",
  "key19": "4vNoW75Kwqq2f5DiM8xvNADCAF2v4X9q7evX257EdVseQKXw2rVhCRvZXSieBkarS6KUBt73Z2FsCDwEJgne2bCm",
  "key20": "4KDxqNTUGR1WcP3rWt2tCtSsziQDv9Bf7DP5LjBziPcsVZEyn2MP8xKfTjzt7gmpuXmwpc9NDSAXBJREXy7FugVn",
  "key21": "4k9Sy23P7Bz3oHPz9a9spC3NbNYuBtK5epPcRzSx8Y71p4oJRKTfNYwc5mT8dFV54UuBgbCvUCzKUA68s5Bxa6JE",
  "key22": "3Zw6TqzYFQKvM4ML5kXVB7i6vmuR9ewhW8dFexRaMxjZLigTcHqtvCDkPQyrt82zgv3pF4gQ9tsahbFUk5irkfNK",
  "key23": "Km7GDmBYqFErXDWCav13shmF7AUdf4un6LVbJffbXX1WnMGmTgofFf19PqawNqXetT5xpVJAuZQqBjrkZjAFZDV",
  "key24": "5pCTGrEb6bUWwJ8hLLNG48hDVe8Teh1dFCbjY6qqFmQPEVukA9nzuRxehouonbEhCmKXPxAJ5EdPXoMxU9RYVrWM",
  "key25": "5UKeWV22NY94vy9dJRrB57YtRgsGAwZYFFxxbWvMjtY2fPissJ1sWNnHHWNhvJBZAjr7Ea3tb3GL4WbuYHHCWAMf",
  "key26": "71tZPy4ijnEqY3gm8NLkiFdm47Wo6n7Xnh8LrGxcjxqnndW42HgJsFufPaF19agqF1gBSrxR3T3cSUg9p8UdUQK",
  "key27": "4YagVzh7nZAmcD3eAcEmieZc3cBmpes9QXrXbXh97Hse5yBGSL5PtcMwFdW1i2LgKxtfbcXbGdGrEoWwzK7vLzYa",
  "key28": "5vtgACNRSYyGaXS7WcyctqrBj89XLLPbA47YC5sTwAv9VYFeCM16aRo8rojkkRWfPvZ6TtUQBFXvaPKxTsy543ro",
  "key29": "5wJ6GPGbRtfFSqHEKxGtWnv8RiPdpkmWUX3NksLQp9dh2uurzUZKZvPhpmDJwH3yZv9i453r6dks6SMGom3L6u1X",
  "key30": "3ihbKqQ4Ts24BeyJcjR9sZQXcD3pqDVf2o6CWnU1tojSRCJRmxxrbpUnwHf1cZep2DEoca9PK91fWG4tmqTZjoQX"
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
