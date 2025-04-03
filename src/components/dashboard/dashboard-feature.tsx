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
    "45Jda2iwfXHXGhHkTzDcRK6KiUM1F28j14DNQU8HZf741XeRqa9jS84zMoHK85qdEBNuEWuYmN8KPMXLoLo6zyNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rvbV1D31feTmgM2CANnSeLnPFEdtJxNSCEr2qVmG45UKTq2gQwFfBwTfUKsnGj4D5cHC2sjzKi5xrpXyHTb416n",
  "key1": "54nRHojyLdwVuNSrYR2vqketxRqG5p8eaF6iwdDTiQAQ2vRh4uJZux6dFGhK1wwCuVpL47Gdg2dxLQmxg3MaEa3M",
  "key2": "4gGTU25yGGKgLhjuAeSjtNhhzB38dZHRSYCq9YYR7ang8ZrUUzor7wrkdqB1vMX1TWLZMAUknUrxtdc758aGG5nJ",
  "key3": "5e4eKf6tVwwgpXJCyLfU6qJSmWJYKstf7zf4y29Zr7f84AofuPrzguRGukGkZPJx1kJtELKNr4mV5Kk14yXT4tmE",
  "key4": "5bu9VmFpE1zjrC8FRmveRyDJV8zYHRwJFZwvrNDSKpMxRm5sHj1yTWdpej1e6RgZapQbuT4wsyDN8qUSgWbt9BEn",
  "key5": "3iM4u5J6HVprx64VSzxsp5DAGoQPuRQzFiJPvZaw19mJqqnSLXEUSqA3Zd3CQk5tGRWWgaQnv65xDRwQVZmhwNhy",
  "key6": "2gqMUpiANVBpVLbaRYpXvsUmu6h3aHNsJfwnH4DEou31i72iw8GUQWgLXtojHxrfNcv5vqkFoyEDGuPRCuk9KXLY",
  "key7": "4DCLANtFTUhvxYk8LjpKV2vQt3PXLuUVackkjQvBENGHtmdFme1XhauCy8NRVuC9dF8iVc58TYVpnhHM82kWdAYj",
  "key8": "4H22ZdCDJ2wcgFW1rdt9jfZrxudQh49CjAmpzUogcnPxE34x9dcbHzsX2Vw73Us7FpNJzwf7V8P5jv3Gv7hUCT3f",
  "key9": "5bU1URQGtQg3Zd8MAYYBEaTWRkgZZNXhueayDJFq3UaKRgF2M6aAVGxd9uWhu43Pzo9BQkEURz18gDZNh7PnZpKx",
  "key10": "7icR1XJR4N8jhjFLxEDbjWEj7PjhycqjW65vZCUK97F8uYm79yKyDsqHHmVRoBQS4aoX8ANpjCcnjjiAYNAb7rj",
  "key11": "5Y7axRBkhZUynVmo3kB7eNSVjy76oAQADjqoSXWTFSYLmEc1V2jVnrFFFzG5m1ge2wbJWUNW47r4ETBzS2hm1StS",
  "key12": "2aNeGpcxsieMwFvgDiALPCGDTzcH1AC2XCW74vjDEktswagiFqr7zAfgtdHeqSegY1K6hwU1Sm45hLa9B1DXc1aL",
  "key13": "2LvQof5GkaagYBGdbmZnPeCLqjaQmcwm18MLFetYdps8rbEWwfkqsdXvuS8ka4wmyHGY377i9og1RHbpT4YVrCds",
  "key14": "3zvxW86cEd8CP7SjZWfCevNytCGhgunJTz6geLjeAJUhL9LNXMbcQULtM7qGdMS5eV97LHFQcj9jvzU268DfCLhG",
  "key15": "2QBuqiJkY1FtzfF6uG2Bi12eTpEqbwkVURTM2xpWAtrSQp8FVWX4HxF36MA2GeiyTJgw48o9frbavNZUqocmv9fA",
  "key16": "3grDVrcRdDaGuDgJfWxjKs14f3jCKTNm49aUqxf5h1fREDGUh8Q255EfhmNGxSzMaVJSex46PmLXzdjL7qbsCtjy",
  "key17": "4Adc1tDD8jVkmHzjK8d5HEJD12sMyd9cfnCRDGY8A3fDF6WvoXtjoXcrUQpsngYCGHD44g7HJhv4UpWUvG4VvhWC",
  "key18": "4eiTY4JGens4zsjSHgdgWmdB5rzBZdYonL44oH7m4LxRTC3n5fjDUw49o1eyurxwbJfEAoSk1RfuWR9wPcHAvJmi",
  "key19": "VADHdfmLQTZsdCFddRxg78voXZm37o295DDxeovjfAKH2HtqD7g7SasjBpcLUc7c7W5h4Kx8HA9q76h8maN7LC6",
  "key20": "5CL9DN41QFntmxGpC1qoRYQds1FRm97DqTi5rZDihnrN3787xVSfn6NsS3qcFS9sxuDUrWrCdH7qmxJTZsrMVFgR",
  "key21": "4dXfbQEoPuuWWQoVoFWARmdD1X7waFdWKj2ErmZzjeSuSmd41i2jGsUgaBHsxJtHgZzGQPTGEbTnaNRqdz4LjJPh",
  "key22": "2kqkGXh9fRx6Kk4RLUuSxwAYVuN1S4CQqEp5jAtUBAB2bLjkFcFwYcHxgTu2NjCtpfK1tbZZF9NC1TifakZewcTG",
  "key23": "4GofHK8DcdTZbrXqiZqBRCte8nw3UfmdvaZPDNjWkVadoeYUcjXymRTVFm3jcgaSz83woT2NvSXM4aBUQGopqPcG",
  "key24": "5in1t7oQXFa8kRh9QvhugzMpyNVnjt3bU7woABkgDcrEWbRHjFHi8QWK7J5Up4H6KX2aPRACxWfkXiReyKve12jM",
  "key25": "67XkRHFjwBRwUv7GHG2niMM27boW95ZfmXSBH4aEyjQa63m1gAE7C52cCdzZa7Mh26tcYnVwKxdeeepUKJdfGosf",
  "key26": "4m6RXpMGPSFFWiCi2sxSjyUjXtgRaavEZLDTus6HxRWsA5zCybLtjnXvPgGkQh4u28uTcXCSVqNY4pWJmx5yNFri",
  "key27": "3zeis8ju59NHmK7dUvpenHinEmbncRDrb4qhcw4MMWigBHV93EzwHXx3gY5U56RCEnwukHX87juaVf4xfunLKXvn",
  "key28": "fBfztsEMFaqov38qZ24NoFjUFjCrNSYgqbnMngnHpKZkSBDEko5qGqxBAsA1BPuT3C8HqKmbgtntPyeghaucthM",
  "key29": "5r7oe7rkhA3kG5m46G8EU4gRuEnxSeyE3M3ue5keEdpB6jGZ6y61RLzRwGr2eqeLCUdHL2FadPgVNamdtV8PsVPt",
  "key30": "5qDuTVPfzEVo7VVPgq2M9Tp6fjCiEAkfNLsPtyE2EWCE8KuG7pfNfXk6TvADLoaXFhVo4nk1t7beRxwS2yJXdqUi",
  "key31": "4Gq5PcGJqGwJKm64VBEZ5QMX8KqT8z23tTYxpwTYU9EgiQHaespKQTFKm6Zn6Wbv1LKZQMzD8ZycNPTD3pmpyoBo",
  "key32": "4iMzs4quKF7YQq9WUhVuuSVJdiXpjNRWcutKRGVnX5epg3SkwzLXEtfmsydcTGxnm1T2r3HMPiLstBkGocrxye4F",
  "key33": "5V8wn8n1bsmYTZ49862TDwR7CQdNqAEFzqaP3Xv7rRkdiXNLhrfGgEdMKqKohEoH8NvtzTEeHPp5Q2xzUUAmKzZ1",
  "key34": "tCaQs9CEha1HUqJwiHqm1AtQxanaHxR9zgHgU9PNH5YRuvSfVXh9d7TNpQgkPgnv7RTXo1y65GuKkaCNLJ4KvEj",
  "key35": "4WJjXoKLFnkcULmimoYzKmq8Vbbsm2xYj3DZem3piNKceBpH7evDkoFoJwdqKrzixs7GjHLLfZvpu88mvG6vQ5Ho"
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
