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
    "4L9H6h7dE3uNbdoA22QA8hzWeJ6oadtRNJt9tXCpDaYGUjMRvDm7ESQVTdEF3YLqYd621pLSk4M4qVBq4N768GVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ygSLitCQk8kAF8irEH9bad7nykLmA8tRyLu2DogLmXv3ifrZmmhp3jS8nYbHj76Nqt3cpGCBb3mcjUW9Gkj7qJo",
  "key1": "5ymRzBxo5HXrPHtvshBarzvZeHAdHNgQSwXzwHiKyXDyfTsvDoVZnXp2E3bHdbe3NQTrmMdJf52GgK5RUnAgoAfD",
  "key2": "2ZLgGj6Emw1TZxG2dh1cQAdUShLcZUWLwS1pSQLZbTVPu9dJfPZmej6hRakqBPJpnH3s5W4wun8m9X8L4p4eT3o7",
  "key3": "3KZFGtiZSUeXvRiHPCuUbZea87JMFovYgCUTKXC1cw914p7bvSQR3rJQit7iy5FxV4dATfetefEP5dPz5bQAkSx5",
  "key4": "2DWTA1w2mEKVpyZ9mR7LcUeCi8m6KauUUdW73JbfpX9LFJNEVsg19LThMDVRwS2EuycCbPVYYRLpPc5cmu9kjHxa",
  "key5": "5EMJWC5eYZPr2WNZAA6E86mWv1QtHoeGz5bvYxMhQ2YGgTFeE297H82aKjKvFQzDL6QTAM1ix1GRjWNWobssSX4",
  "key6": "4hX7psbcxGZrYL88J95MWHtVBbHjxC5L5Bmb3M9fjJUr1447eQWfaG2GR8rvhxUePwwQyFqRtS661Hc82BQ5RYKL",
  "key7": "25XoHKpsg7UZkFcSaLof5DpVC738HkUvybA1dQSY9maFgGYb1RN8M6LrsXg6Mna8JrEjWgAmXCXhdcvHM1KhdNsL",
  "key8": "3SCnmNxSh8sQrKbXn539WLp3qS4yLHGpdwFVX7Peb7VWLQ1MSwTzKcCeecS8sVzC4JqsWPSC1R47guuLmVCTxkAG",
  "key9": "2H5SqfBF48acVVpA857mQuRSC9ZT5r8JRRuhgz4tMz8JEpag98xErkQxNQEYnA69BhLCuBPQ2k2jmgjUcM8JY9ov",
  "key10": "5WjT2U6cvUGaqkWwqPJSYXJWixYFs2sgBkMc8XLYhJGnHbrXtEUvjF6XL6Xt12aqma55CGCmEUBHhNCTYM38UW6D",
  "key11": "3QPqm1X4E942VSyDGk8Mcz31CG4PncTMtUzRYkmb3xHLHScbJqHEw7u3feXJycM6Ym6Hvi9955FAh8RPBU5Kbhry",
  "key12": "4whp3jM6siftWGEYpP5So7TiMmkAXHZ4U4DJKXCRoktMGmzSZLguQ8DnCjuH81a9iBAKpAGhrTxJh4Fz5H8PzKUM",
  "key13": "7S48vRu73fTcB5jW54zyM1k12tJivgsD3YRcqzcYhpcZLy4xdm9gXuWzNXdNJvbN1rKhmZvSqKuZJmxLCanMWtN",
  "key14": "3kTtFB3miuJZzwLd1Ai1EUMsB2ekBcJq9z2YUeDmDfj2DombNtsaoLYTyVCxogDTmB52TvhCbXyZGx5ujSHGUKy1",
  "key15": "4fdQSpwi7paXX2Kqj4dfiiZyD74uxiPgTHFZtBAeYNg4bJwSJbUEsb9pBnYxCSWtER9ojLqAkkfHQ4E9m1uKQ84K",
  "key16": "5RV5v3tXrbPse7fNqg244MS2X79LuNrUVYmzJbYu1aZbfQ6Z2dtfNKAohc9eyDUfPjiTiMFXq4G7fGtq4VG4Acgc",
  "key17": "NV2UiH4KwRgvt3se9n92NrYrcYLXV5DDBDsGtaBA2gHT8zxAT3PgZDK5Lfbwz869z3UPg2BwHSbVmqgcYjWSg6L",
  "key18": "FyqnHwBiqk32VF4xhAGAGcz9oEPgtSAkPzMFqTH6Uee2o6BsXX6tDnEopcnwcpjSNCsK7Ck4wUp9jdijZKTxwoW",
  "key19": "SvixwPa8pKmxiNasKTrwJbxr2E51Nh1kGfDUEeFr2dYYhNov5dFoeESS9LCALMWxuvvKmAEuKSYqbm8CQnXQeXt",
  "key20": "R3aAe6VLkdnBTiV4PZGBZ6qgpfwAdQjWZVrP7yV7JwhQsRGs1FA9rZFDdSLSxUvmACUXzYh53oHbQdyzF85CfHR",
  "key21": "4B4jzVyX58SBJW1zfbEsYsk64v4QifWeSLdnraychVEhEWbhcRxKd4inbGGSUxjN9RKb25NKyDfQxzSzDCups9qM",
  "key22": "2aEfXFqGh3ELw6WZX7d8766aPtAVsKBcEVZLAVvRm2XVaBZ2EjsDKuLR7SZooQSwviqXYMByoaSVzbd5xAbqfvWJ",
  "key23": "5kgTkwFhqGHjrQoL9aBNJZwdP8jsDDQsSpSUzpWEe4HUh2eG69nC22zeHhXm85pjgTQDSf9r7dLrz3RAdmQtrDG1",
  "key24": "45yVcgQvbNXLY7wZie5L6vF3SWYPdvM2nBrM5Ec8Z1JmFSfDkq4qLmCE7HkQK3eB1DypaGCZLRq15nMVKBFCFVZH",
  "key25": "2Fa29hVSeRJaqmyHWrqpLtXdLAuhcXk6oz13iNJxzdzhE1mSi2ktf733kDeR62q3JaEjzE53inWbkvHJ9F6b8adW",
  "key26": "qqwkQ3ab5Y56m4RjS72r15kB7Vf4XaHLPdof2SuT6931Na8wfLWUS1h3nYNatsS3gFnQVUuJTEnuaQ3X33a5M96",
  "key27": "3YDD7RqwvFBJM3z8kjUVNayGVJKakQbHnSuaJCR6wn7Xxtt3fqrkKyFqsRyt4A5SXkZS6s387cVAUBJ3Y6DV525c"
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
