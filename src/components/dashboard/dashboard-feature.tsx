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
    "28yL3gyezPvzpWjLXX8NUQ1Aemk1bWyHP4dpad5pEjSGKcHUD7Qu4zzu52Bo3Gt5xs4HdETjwUXLtHuayxMqtYu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJGbAzCV2XBmyJ9d2W44aeg2HrNQDUeWN55rH8EyWiwAszxwM3F4trFY5W3evqp6nhyX4Hm2GfJ4N4tYRJSgQBH",
  "key1": "4cV6n7HSd13v1N6R2M7HtbwuYSHFGRz65f1TgPy5RLqimyFv7pHTR8iMB3yyqSvGKiWkQx11UD8mu2UMkrA1spUi",
  "key2": "23p9jeonkkBBXmietsVYWvmsM7ARLETFFrSr5gUHRsDrY5ZzwyCUZ4QDALfah1mri16AuVvjfYSKHyheyPk2obKd",
  "key3": "2jW7ufrogaWeSs4SpuGjWCLFj1nVnSm7FZRweGhxN7GbfqSRLKJbogaGUommGH3fFY969fQxLDZ4UYbwNKYqtVh4",
  "key4": "4zhWNdz7AYB1F6exFpAejoq4fPum2wnkr2LwBUbzeTo7LkJPNehde48HrHjoJ97ato5tNaFDK6JmiCZCsXagNBu6",
  "key5": "5FL7YJ1YJ4Yxj6CzFJZfivgNt58Ykc75Wsbeji5MQ2QRm8F6VqkhGWvbmoSBdoBYYPSk2i8MrQoPJhyS8ab3yYe5",
  "key6": "3ZXqkJbsgiV643Hfm46poQjqnMFh3ZMZ4Y7yqxwVPwzrZHVfwmPFLekJ9skgWoRYYykJAetYgS7qZCNEaaq2YY6D",
  "key7": "3v1uXuSiesbXfa6GWqddKZRhWJJXDjYdzg1243wafoBXw3DtxennPAWKgWjnjhtc4qpdLKCLWn3pG4xnwQPuprG5",
  "key8": "5mX8mcQuMhLR1tWbijjwWxeizXY9NkwMubRpdCaKMNSrnTdrfBUAXFJSYQhPCsvH8TqPLXJc5Kt4kRkm9dFupwk4",
  "key9": "27SMBrGBRudCnmcdyomV5q7qXnksqVf4JY1TuHwKdEWDGfjDrJHStjXByrKTa7TXgV8vyKDC45Aarbvr1HYTNWgx",
  "key10": "groQKKdLD7JjbxyW9tSdiQGTW2NrYv96gWc8swxcp58zx19M1uaMjPsaxzX5xX7EcJmxbRfjMFaCAAZzuU5kyNm",
  "key11": "3VXY3icxMTcgCq4NyX6wxsmEU9GWNzjwrrCDf84ovUitS4LRJptD57wzDrPGLHht1aqiq2j4RXsrXbYHpRjZBYMV",
  "key12": "4t4TtiV3FRkBdpjFyBv1hofUKM6DdMdzNTvuF39cnYpeLFJopqKQHvqg1q3ZKX4rvnGXewqKAz5B94sWY9GdAQ6W",
  "key13": "3e3xXTsBNPd4SA4XG45yQQmRdBHw8Q9GoiD2uiksG1gGjxHCynojNm5bVPV81cEZTxhLAPeKRV2aHJ3MevnDGitV",
  "key14": "2PuvTTA37sehS5TKYbkN8zniBe75QgQnbRAu47jD1fvr2deZajsBt4nHegzkuB4bdfzgVW7GNituUFcR95KRx27N",
  "key15": "4Z6i3fTwnyW3PVzTRUn48tewdoFHDAC2jNJUWEgUunTuN6jQbddcNKThw5cccXownYTFyQY5EQvqoyeCq6QGzdgy",
  "key16": "4FWzzu9WkvdXuWUchG1imrx5FrrR83FkK23oNxuwAXyRAgKYzx6LAAZhCBd2auay3cqz3NeyRTHtVP5h3wdT7rtb",
  "key17": "3h9phWAnaFoC2UJLtg1Gc3ZrvaH479Lvku85qJo9N6qGe2XFxw15psetFJhJcgd4KV37QJ4Mg19i9j6FYbEhCWqg",
  "key18": "56GG1ZPn1TYeKrK9yYnv9Trff4oAXnP3o3YLBZYK9UrV5Skm443qpQAt6PQcwKnmtT7VS8Cz1JXRHgCFbCErCn97",
  "key19": "fzus29mCnNt8yr5aT9yCTyuJJewMqcB18LGecsbbFqM1QNrpxtDVKdSmmJfjN3LhFra79GrKfBY1oWGhHGuPPZP",
  "key20": "4B25pu8vPaqe2HsghgnwVAPTRWznoecrLU59iWrrfnNASARyxModJzM4g4Y6NtAU1EmQRoYPgYjbyfh6APb37zHL",
  "key21": "3DTB5vQryEXidHV9EgXKUL83Bf6VEVdGjD3oRXAPgdjxbgJDLJvfbpJB2R4X23MVAnkXkani8iSLMM9XeFH4tLat",
  "key22": "328J4auwGGmwvv4c6Zm34hP9FLh1tCVhps7QUvsfTojAjTxaLcWeBEx52QKZgWRduuTgt9qwgf6EhpiRPD2eYmS3",
  "key23": "WVJFb9THoBzPSXtayQi3NpaJfSbXjJ4tBHW57acQbqbT9VHPq8QatYumpRPBaeN2wdHa8r7XxAthKMLVwbmriMy",
  "key24": "3RWBJ1GGLdaYfi3PD7ymGWS6EEjNFdxWL3K1PoJ9bJo67Ugy7yyK9aAbfuYe2xQEtmHE5oVYxQFg2WiARzCdSZuv",
  "key25": "5PSBB8QEpr4tGNhUQB1W85oX3eXTmRzejDe2GZDBJpfeJ7KMMy74JXZCAbpFbJGqbn7iX5UsGfFiZbZQkcw3sweA",
  "key26": "5sBatBZCmuTfE1uzx9fnzpr3rqrddbTspaa4apCq1YoPukb84NWWXQD7nUdE1WsMEtgeF3ou7bUEuXhFx8EHr1MU",
  "key27": "4z43kZHWES8dxY7tnkX2sCatHYfT9kf4bszzYoCouDUfLkaveBL7vuhDpoAQGuTGpNQcCa8Yh9ruM61dPreJnyXP",
  "key28": "ztRVGKnsRaxUyWpFBZKMEPf38M1XrkdhetYdafvTHkCyx1jMTXKkh4pzcJF7MKbaZQ49ADj8roNbcRA8i1o9pN9",
  "key29": "5MfxZkMPibbdvbMnvZW1975NDJUd6hECoByTbjdHLfjzfFRtFBk1juNunf4xKTQGfVWgdPk8QhqtqhsscwXSb6kc",
  "key30": "66fgMEAGWcwB1DDEjrXjX7q5nirRcU1P1PRbtsuuFKkq1KXRw9w52uzpvFAceZABRo5TTeYqhqsxduh57djvaMFi",
  "key31": "5NEtqDh7xTJ3YoA9smfEZu8Ztzz2RzpGiN5XpqXrEFxu7183ztFNVoNW3riur1YdinC9h5z1HyhSaorW12y2pHJ3"
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
