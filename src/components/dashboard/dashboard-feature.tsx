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
    "xSegLNkZCDumeoEYquzuavzjj2qZDAMuuWsNxPSsdTVhGXcyj5VFiPu38d2DuCURnuZ6axxCB2LuuBgGTeXQpYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWaDQaXKaeW2TDSJmSaQ3cse8NL6k6S5Uy7hR3Te8apY8TbdFkgJsf6WzCPgD8F7TDN3AhMkH3xYcaahGjek5zT",
  "key1": "3ohGe1buPfF9ukKHRYKjDFHM7S2KyB49Tm3uSzYUuncafR2ewk75eGubPUP1yEkuCskqEq7BqNhgXddqfeoXfYUP",
  "key2": "nQsrxkd561RZBbAK4NpckffZ1rLnybHtHTCZWrtNc2jU99Lvkt5jyKVRtD1nXSXMjSHKoCPFpns9sJKvkCJWhaP",
  "key3": "4WqWTnXXk4K5DeqqrfFwuf5utXtg5KFokdaJEsJ2rSHyLG8ViQcQECuvfTcAGSCee4vghAEN1hH7Mfch67gEY3L7",
  "key4": "r7t9iXGBDYLWMbF6M32bPjYhc2jN5f5PA2ASe2ajx5si4TdFLES7dB6YZ3k3xratsM8ZL3J3eNYiGukzkdzw2ii",
  "key5": "fxFVfisdnyzTnzi9oEWKt7d2pDQQTikrwSMxgeaqv7bEe8KraMnmebvPc5EbdmqMxzWwVusL6TzFR1eTao8BzAS",
  "key6": "2GxfSzABsArx9QHKCdguDHNNeKeDGe2QUe4zdG9VYRpWHpRimo9rYMsjabYoeS8c9CeYuGvjVPjQjKQudnWubUUb",
  "key7": "4S4v5GUwEshVdeRqceqKW6obd4XNfozc3KN21C5Q7yCcFxkWbqjr7Y9Gr7qVkZiURdgGtnSBSxtA4yBXdbEkqLYX",
  "key8": "5cStdFnH3j8pbk1igDMPeXbzT81KaMn5GV6MbovbPxS3XK18ZWmT9JQm3zT1FnQX9d1911mu8zfVpS5d77wjUaJo",
  "key9": "2peRxeu5pFDg3AskTWGauWvg3tfhaLKVoEhxtcswa9ZpWZLScsEnPa2kDrEFsda1S8LeHZqTPfhNcVGW9HzPdK69",
  "key10": "2aTML6GEXUqdrb4okJHWa8pfD8UJwSScYzybqR88iH2Tv8frnT7UCuM8aUbeafq8pPpV8aDNKfprYnh7KiYaRBPd",
  "key11": "2WSy63hja1EGtQGrWvohPMPSQyaf7vz7miC1Rdymv5XufP2ZrDrwz2Y2jvoy9CeRSyfTNscoRNnT8XfcNWkaStJS",
  "key12": "124CyHMj31qkfKTdurjGZ4XKwofoHxs2UhQtuAtofzBTZV84U64K8rpQF9VoL2DrNMvgX6EEXGbKa9k8yuMQVvfs",
  "key13": "5C3S2fr8w7QApCCkidFEaef22HggUcyHhnebagmLVx8aFLB17TGqUa1pACsC66chEqfHNeu5NryLw1VE7jt3666D",
  "key14": "55jmWyHMc1yfTCpUzSATxAnEUQakThzDP47FPKbnWbHKduZcGc93CCKDpdXcvec5SmsNAzkKuZiXwUBsiCXXUefa",
  "key15": "4pGuLZkRTnvpT2Pn1QUyqzUKbDsUd8bKQmxcQKmTamwmgdvfHZvDBEieXVB2t7TRQi9J7ciY8U6GEyMoxkUbVGS1",
  "key16": "3o6v5cRaSpSEb5SHu9Vhm68pQfiDJmAfZDmiwLTLZEqCTjJmeXDU4aAZX7Hk3Yf3XaHCUQBbtpVwUkJZDmKCa2kh",
  "key17": "2K6wQpr9etCMK5o3sjeyokzsLbLBsCw7SG66zveW6HJsXvFfucdqfZQK11bSf6DvNg3xsJri14ba6sU9ZfRkmwET",
  "key18": "2rUsLzuc3FsEUMKbRacN2Wq8QLnj28nMYqrtFjRvW5cFmJgvB8VXaU2xctYF8dPwa8RP9kFaKupdjv17EazuVmDt",
  "key19": "k4MYUPATJdNLzzRTDjJka1RnbgwzijynRW5wRT4Y4NcS7ooC1TJ7XYF6L69tHs1KyQWxN82BxXfA2Nok1Br4U1o",
  "key20": "34qBkzP62FN3nASzLsHAG3unWZMuqaHJzhLe41Q8FRM6TwwbEW5hkHVhMMb4xX6QEvpainXdB1msQH353Emg9yqY",
  "key21": "4CLiw2b1yofrYrRuo55bShVzuDwmTXqVd5xKLLzVF4zV2NkgR8Hv3KHWHnERnmbXzug4LwTs82GfcsGpUaxwKhui",
  "key22": "4CyMTktM3VofDuDohw2bEhjtrLTpjn5KiWwG2zAVc4UGaa2NARfnAhdu1EuMz6V6v9BPPV6McMMZfrhsYNEBtk46",
  "key23": "2ySeCKEgSR6DT65sX8rBaE4f6XCnAQ1veaMQPXDirrjVodKMsNz9p4ketEzwzzpQKgLorCiYM6Ged2yDHmiGEak9",
  "key24": "QiC969v4881q25gEXEJGXRkU3bXj9L457ixCqxEG7eDcZymJPdAjhMDixaBD7j5UYf1hb7HSphv4sFXmEStGtdP",
  "key25": "2SUmrr72fXXCDkPfkYof2nn1zB7JWxuiUPyTk2C45W6knSvHrtRKNQN2DmPFiSbwRzmgv8rmHFS3z6ucrEe9RtsE",
  "key26": "2eFCG8NDMrcaiUmj7f4LC1FoUE6qT5oTVKvNXFkJRAnF4BnhR6C3TpjbctXA7D2qKucbAJNhx5yh6ZzugFFQcYfH",
  "key27": "TUvtDGk5BR5iYrRpasxodBV7P65uNTQhF3TBqDBX4npXoofgv7kXVuwZyn4ijrhfQfbcn9XdYupcZjEULtkkmsN",
  "key28": "4KdNkC37msuWzr7CZEjtK57ZA96fbnXH6BYpojo863Gg2L9V5KZHn5soThCxJFYXnQMsBig6UxYTshznEYMsQd47",
  "key29": "2mXsBxZvFMExqmGPCTTcVa277kjMdSWW8VmkJBmyg2cDMsAVA2qPZ7aZiaktxomC7uWvBWpw3voqwd1EwbVkZPEv",
  "key30": "Sv747BzMjJtcWVvnppgtG3xgGDMmgNvApLh4cJDE8Uj7Ng4pX194ePPy22RBpkRdf2URQLnjkkbQwevn4ZNieb6",
  "key31": "5fdxrKbbJoFBeeaK7MkqPgqs3mREqeB2SNq5CUUXBszEfQ5wFQ2GTM8JNUsswQkiBAUsGBFtTkqec7j5KdfcJSPc",
  "key32": "3WTbpxM5E4ZL7WJGknMdpTcTNGH7arpqZGWDEmiqcZmKd6dwQCbczU4WdS4BJoYqp48NxUVZHn1gQ2FbCRjjndWA",
  "key33": "2G9a7hVKv3iXQqW6jDPNgigJzQkrJ26YE4tvpYwyEgiNwSgBiTCny3ETfoA4RU6wHH44Sd5DWad7R9quztXumAm6",
  "key34": "3t17Eao2XmWBhnir8pR8AziW7aTajUAZHc79UeHViSUy5FJxFrD65CL9yziqVw63eggRnVt7ovySxGALfLA4tsem",
  "key35": "2Zo8KqS6bWLjt1b79LoqwRc8JaVWFkwiAQM9NieZ7TYEcMfzm5W1YPM9hHycanRfrPGbSGHxSCmNgbNMPVfzSqZR",
  "key36": "4fztpiGkeL8mdv9VLNXWnwAeEdo1crqz1N9TwBTAVhrpQETJXd7RB5eWkcGLVB1bzZrtoAzNuq1Rvo2KJqEnpHCb",
  "key37": "61A7vKcNJ8awxGJw6T6Roqx9BWuMd3MYCjJAxqzveemMHaYUrKuBH1ueSgS6nJkdRYNUxHPqrg3ArQ5XCdpwLUAv",
  "key38": "5HfMKtjoS1yu4MncytUua1J2ird3FjEjCGnjsjXoj7279iL8kbHjzQMR7zJWWVm29q8gypb8GA99JgeKGN1Az2zw",
  "key39": "bEsdELrPokQtYdsd5kvyKYrb7fxPToWn4d3vCxYHSPDFBiN5kCFYfpHLqwnaMWdqKFP8j9vDyN5e17VajsFM5Us",
  "key40": "yPTqzRCUKG3U19dx5t4zYdZfPxwbMceRSgbHtDu2v84h2YqphCszYck75xLW9Y2nRDgYnuJaZw6Wu2uW8aZ4Jcu",
  "key41": "C7HjhcmJRXr7Dsx8bshFBRMCvJVQM2mg8c8nUk8fxpgCaUh7yH6WaSJh41HNG7w2VtEZx4KGvtbG1EhEMh8j1ZW"
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
