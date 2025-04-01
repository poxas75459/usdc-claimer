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
    "3xRf8BhvX7T6WncMJpeC26avjdpgfqM3od3jb4JhrHEbUJLH7ZgMEtMJ3WpqWe7CmqrxaoMMWV5bew22r8w8qecn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ME5VijCCy4VqJnJnb3dXhbmREPpBeXV1Kq4FAWgHeu3ZM2y6DHkFXgrnmDqNJvUawz62iFQwGAY6EAkcpZqVNkY",
  "key1": "2YqxWQDPg2p74acdE8q2Fw8NFo55udadd7JFByZ7amGkivpZSUp4xZYyYnjVfFDmTjMBSxQLhoakoukYeL6r2z1G",
  "key2": "4xzabnpJ5YceGXdBEEJ56ZrtzjQaajzaBD6nQXUPnCTxNPCrva5pXK1MK1pf3hNpAeXTwKi6bC2fbU1RuF2zmLYL",
  "key3": "UA1TC2rR3JpVN2x75fqkqSg2gYmBB5A2TTwHePGna6yfvM6kQE4RdqgH622EjbbtFApF7JKiDnbqgS8tvbMA2D7",
  "key4": "4pGEcvKckmteA82kSzxoc4FKxQzHEaPf6M2zeZX4vN7fh4vM56RNizLW5NgUJSMBJTQzzbkyKZkVhWkr4UyJ8Jfu",
  "key5": "2CRF6kYuFPoV5wS5yU6ztXxpwjQhVfQyZqy6DEJnTMXVyvLMbQH3J9i9Z9amcokvJuSWiyz3GAFD5whnypaGJuWP",
  "key6": "3PyLsUukd9G4pwXnF4bV8tV11e1m5sGyhgBeL268zabSniJmGAi2meKgXtyEdP6ccb99kFMSSx9CFc3S85JvFzHW",
  "key7": "2KtrJR22NW8hh6vQk5CHhGMK2aLRLRL62wQRttH4TmNi6z7cPkte21QJdYJ4v3ePMN5LXUAorGfQhkD9KQG8rFZx",
  "key8": "CzeWc5ERezFk5iFYjgMHtWLsnJWf8n5BWNK8VzAC6SwNXoyEomRbvckMYDg3kr6i4AFvYS1H6s7R5wnc9A15gv5",
  "key9": "4dbAykJGhiAmyR1p5q9kmAYbMxNHLJztc4ViWCX8FAESsmTc31VYFYCMo3WsBrm2rUrT7EtY5P4ZihdpYHKv7zsm",
  "key10": "66oTFaU5uCbsS4WPvqZFJwsE6zMxo9oR8X6pX9FyFASLDMUCXnpFXv3DDjA8xGX1GEBkHsZ4hWFsTKQJxWPawUxS",
  "key11": "W5G8mXawEM1Kwyjv62NPfFWKMkkL28CCWzeg5LeauYHnifJVCKcaYhrRBfqJq1dbtfQx51AUaQCShsjyHfbVK55",
  "key12": "g42op4t5g6gJ429tgXhXmbGrvSnR9vbuRKe62boMPJcUPU6uKCicWL5mqXqiFm64BmaZ5yzdded6roLkrNDdkCq",
  "key13": "3A7KzVxf2Lvd52jKiRVA93HJHWNjJCBmq3nuRPEuY565TrGbrmJqeb9veVQwQxevG5apfTaNyqgZ97RFk6b64naU",
  "key14": "2JVMdjo6yU2hxspHxfLuEZjfRVWUQgjv8xpWUZBCVdxisXPUGnmiMKtPoxVoQjrTDs6XycD8FoQFxXp4Q72ykatB",
  "key15": "2heg5qsGf8gEyz8uxmGK5Ky5VLXTsRcwAJXu81mXGxgk4umw1rnzwsvx8L3a7gibJWy127MePYdUbAS2Qvr6uC4R",
  "key16": "57eu5VHxBZ5HRWTmFCAzkLddaez8UHAQsD1HVQVz4VvWHNZtRTCdSAfvsAdZMxtoozLDWWcTT4WjJ3YQy8bqHw7X",
  "key17": "35rqFKGdd1cXzWR2bjg3iE9yrMDKCxzfH7UYDKw922FHnvPKV8f4mhQr5CCp5q9dfZoqEs9kmZY9p85mTsrGr796",
  "key18": "3nNJtdCauGdM4mioTiWmsVJZMx74EWZRhkLgpeSP1U16VxpyhVUMHVN1fhKHchbMD1U5yKDxXTNYr5HJBfGA5tPS",
  "key19": "UVkAG1GLyXR1Va8gjvKA6KMqUFEKJj8CuMgE3wb5xq1HT2xG5ut7GGgEFi9pfotS1Rx5eUTSinzwTvrLzSwKymg",
  "key20": "HXZdBAcktgxjQWepQFCoGr3baoHupBnx1zqHF8bysbFtRQAvqTCgEZsHKm6q6UcdUpFo6SuzKp5KPNLDKgzq2bi",
  "key21": "1nwTTthEopJ4VWh3vAuQLYVQU5p2oJ7t6pHqRmPErHARg8cW6GKeNMmx4R4qM5uWm1AHN9hQ5EmbmxqoS1e4pSz",
  "key22": "3PKoKCaPnsEoeyXYchspbvGMeaVR3CZsX9rg12EZNddbu84UddVaKNpGvJ1cU9XAz25HAfJdD2U5KYyJubGos5Yf",
  "key23": "5cn3NwYBiZhw2eF3hs5vAomKH9xVXHWroCcUXbNnMj2CAuXxDsCbpvoPh2Lan3S5wZtyxUb6Gt1ES3xVsYhGQfD6",
  "key24": "45NDqswZSzumjyKTjxKQPuowWgx4xRauSWMvS4rvXqmoW8JRM4koUAYrMqEX63SPwqqQNNTSgAf22mBSP2md9w4",
  "key25": "4vKFHF6YkJtvgQ9HXTcVS2V47eMm1y2QX9VbndoHkdnEsGW9FmET9KwKvvUvSN1xWL6oi6As3WsQrFwghrF5Y3iS",
  "key26": "3qyG8chWYd8QqfbtEdiPnmPGbkq85iqhTcTtMjGUoBzkYv69B8c8oXo32WPjVBeRwa92w1pnMiUNU3xq6jSXBLhm",
  "key27": "3c3ici7oF2Kyt9y3C2aDG5R9F915Uro3rNfQhhXZ8W5wBk6fiqs29BZrRhepuQbUBF4KoK3gDC1eoVThvVpkAkXt",
  "key28": "2uDqM8bafjqiLBucaHNWRG3SC7hDXttKq1ctdehtfzu4Q33SFxWu3poMRwPTHTG35eThgghXMiheddPioppdiUEx",
  "key29": "47DehDq2aVZFGXuodwxjmSd7RJNTbVLbjrUaZveFmd8osENxyPM24SZeCtZ2i2AoABjKpazxNjCb9Y6CTt1m8tkG",
  "key30": "Y34763GZCSbbLF7LCSGn3imU5kuYWzqJYEp6jNzNsxvZhFWujZHJK7qkBwzEQkE4xVrG4aqgTXxV1SYifruHQVV",
  "key31": "63YWuYJ5w9bBKxntsTx3ewbng3pTgKBWQVk5eqvbW6EZLKog7oVibEAHv8vbTcq3UPdE56YMwzxyehx4aGf9dUTu",
  "key32": "QYq7HtQfC9WHr6twG5KfnS1oBS4gpofLGuP9T8LGoePi2A4z2LsgBTQTmMAybVUzo32LrtGG2SFiWpkfqbm72MV",
  "key33": "LGXSeeg1JBfi5m4TbLjvPPE3qGbZx5QNr6U3mq98oa7m4oC4MhQt3KUkUYg7mY8dNKAKr7DUeMdqsgfwYtWpPm4",
  "key34": "4soUi5Hq71us7sdRfeuUT46TkvSXoNge3ppMiC3hmyEQ27KwsVSnL3r3TtRAH7ncDsUwZk9vtGTa4BcFAVWqDgHE",
  "key35": "3Jwzo4X9UGPhhuQ62yaSnEAh617yyyJcZQE4jVUMtP24kLrH8oMWJpWqdEq8VJCJLU2wZvtkVPWwPaTPnjvZ4H3X",
  "key36": "54oByWhfX7vauBeMaA2dYfo7LusiFZRbx6Ta9YLUvREa5fujjibN6Sp5yTMtFSZc1S2fCpK9UFD6YF5iB8jAitCr",
  "key37": "3ZJk5ZDiR5DG324bBxk1543JmV8U6y4DjHGzbdosr312RiZrk3Je7LrbMnnf6SU2sGXMtzYg4zQZT1CpeNmsLg8P",
  "key38": "6WnwQnDm4JdjESGde6uAG32A4zUcReX8F9pJzdUXLWy2GTerNr9Mgrk8rzoNPYukKT6scAYpLAJYPSE8kZvMhJu",
  "key39": "2c9NYNRKb2qZpqNaoKFmS4VNuFo2kNkc3AzgGi6soEjP6qSA644XHZueQ37hXc7Q5RfhC9iCGU8jGSu23rHiEfng",
  "key40": "5QSxoHjx2ngJ8J4fEZiGD3EddzaSynmnMiRfvXfWxqqonVUjW4jcLkLnphrs2574dhMDP5W9t7BpyHpQyogkoQQC",
  "key41": "kwx3S3J4BR8KFgjq6nCyeaKKTFf8Js52VyDZQP5SzKUNFXsELmRCRdyTDXqyj1EpzkcR8THidKMjNvi5pQbu6us",
  "key42": "2yeEdWTBQtW5cvhzEXdXBM5tmgvrhCmHH68B6NmVhs8hNVV1mZiaWMcNQEDxZsaFwneGcXpjxSxJSUwWTmL9Lv4J",
  "key43": "4RaupNCiYcACBtipXJykh1EFUuQ6BwK1Bvk2HiTyuney4egzugjMvCN2jUNDSB8PxF8437wMopwbt5CzwEhXhZn",
  "key44": "3UW2ks1dxyDB4UAPJ1b6yL5PAu8tuMtarcEhHBqf925CsmGAPR5Wei5h9J78h2YAn9uvef5MHRnH4Ui9w2qw1cCR",
  "key45": "je6y7oJj7a54J4e1aPE5aWk9DF7hGft52eYSffgE31LVXkAZkgCMJAW4SkjKnK9QzTV5foRUv9sQcSuQX58btsK",
  "key46": "3P6FJ9itW9GBRL2eSrnzJDjsLdPuxmvmN4o3T4rDgnxL2Kvyj3P9bfCJX5xe4gxQcBjCyaL1tSB4pqd1ddN59uVS",
  "key47": "5LwgiWQTJYA53i4VjpLXQ8Us7cGjfwPYKHsfyp6VQvzJoSRjBHmcXQg2GznRLPs5X83M2eq9JDsLuMcLwZcif8mP"
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
