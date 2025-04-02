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
    "ewN42NVvbnLh46B9KVXP2zVfzCWw1nz6bkU9ZEsmuQ8YVbDT3mnHT2nrCrLBZcCnAKi5YmERg2dsGENjFHmSKML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6sEzZSHRRtkyFEGu8KoR5EBcX1boc3ji5GWhwHB8rtMW2VSRcbtqnVsDZtRJiym8jKusKe8SvhXWcmUEfye5zbG",
  "key1": "35fT4mbAAJqRV14zsMgND6fD97B4fXvwePNCgejThgb7AY2NVckdXe3aXvgvG9s4Cy3zFYqEYD8HEHjhCzFnj4V3",
  "key2": "5zGB4j85Ukb15ZiEsVXsfaDBCsaU7ftDQAc8ifnTM4GF2M3aLw7LhTypKPgWYSGtRsXHAnFcjCJ4d7L5yUYya8ZY",
  "key3": "4CspGWz5S75FFhF2imQXpiyCubPPD6kSJ2Ex5fFcjHsdWCg3Y1joA5pgu5URvm9ECFTZ6foyJpNucVNZeZMJzbZE",
  "key4": "2FQW1xjkiA1SBRdz6fGdBdjkcqhH5z2zvL1HfXxesmpkwfjTtopNaGNPLPkLp7HmLbPLPHxHvNXBWp4j7LmaWq9K",
  "key5": "3hRNSV7UbeqJqBsDJ2YTGaRh2UGrcqVokSpGAGGHzr6mVwnqpytPdgfa5Yds4xenwE8wyV4FU7pKa3ErCywrXvas",
  "key6": "4tBVJf1DsxmH1CiF7atKjcE6nbCNoJxJhbrmyrFmUTu4qLj9K8xZwTQiEduBYNHn6ciybEHqT3EzWk95dTuxWa5C",
  "key7": "3JEdR21j9gyTc5CJVDJE9gHFZu43LpPjG7BQ4doYW9nQQjwprNF8ea5kxU68kvbkKS6VwoD9YiSJ7AGFwXovPGf",
  "key8": "KBTNkyRjqNzHygYRv4Nwr5n9j3NorcvpEzaQ6V5a4mQEgRHCCwSH26JRzJDUY6pM24vmWimhaLWV9J1zFPdVZ3P",
  "key9": "K9UA8BWcStsdfyokeFBNGYrRkbwK5JFnD1yie1xcMs3i6pUsrtYWq5HysQguXGQHqPhTwhqTz5QiXBA2aVre1mt",
  "key10": "3NJWzujgyUSv3w8L4j37dBBSzmBFgAVKi49vJyGgrr7weBodwfWkH3sTvUJLmz7gCFBwE7H7RwSn12c3Z6gGfSJX",
  "key11": "5NMHfb8aaCZFjYgJj3T1aDnboKMzM18HRd4TP3DpyZL6QgRSQbL4Zt65hCwonynjG2ATAzzDz32SUSLXeqNV1Gue",
  "key12": "53hayLm9BebGEYQgq6g27RUeub9a54sHXhit5SW1JbRcqDfUzSst4dmDoHwtGDBfBPV9wi6ati7cL7ehrVADLhuH",
  "key13": "64SQQK5SpCKQ9orFgYEzxpars4qFN9MSEkkftqgqHtY7Qc4wa4FcoEhtx7oD5MEbG6twvPAoccNWRXZSsg9Cor69",
  "key14": "2ooBpF7Hk8LH4e5R4uHS1RfFvGDw8TfgQ6no7ig6dG2UL6W4TX4pxG6fihR82DtCJoGPfHUcR6GK7nVHtqRAUZ8X",
  "key15": "5aZYU4NesQbE8Eq1KNxvjYY7mjs7NPk55iQP75zvgnGfh4S7s5DhLHgSzHH7ParN7h9t9e3yTFfrcJR9YTZyxD8c",
  "key16": "2orKkpjKDjf3XoyJpUieNBba2L4qhiBwLpxJBb8yhpeRUakNAPh7bk6umCwk33hHBhVRHfvTVctEAH8BqdTFYbou",
  "key17": "82CpbUc6XKUr1aYR3Cs5v8cGWR4fT5JzgQZsHzz9k98HY7Jrczyx732SxAnJMb3qDVyjTTpaKZ9tfK3TuuyYkL6",
  "key18": "5wyCyEtVJGjFeSSMVELLwkasjSAuhhrgPH4ybhNwhZjHZvaJ2x9757J1762dau4sS9cfXfqqEYLDVrtQKYYbf1HX",
  "key19": "vrAahuubpgCPhnJHXsf9sr1JKm5kw1ZAbGYqk1hnGMPVh3QjEmYz3z9YGUVpdaaZhqdxZtXcEP8BHTHA9c4wFQD",
  "key20": "39AF61WeQTTXDwfiWW2MzR5k1dGbwuYwFHBdJBBFBrwk1rZ3PV5x7a1hUNPqxdkBaXT5DAZQsiyvz3oiJMuDn8ST",
  "key21": "4qzsMTs4A5epLRUa9ZhehC5DeqQtN5S8GGG6zZ9ArrSh7zVKHpeXZVDf4xquKVjMmUKCGWT37jJRrrYijRtiAmkE",
  "key22": "3ARe3pEqLC5qG9MuSGi55uUwNApx7H4fFag5mbNWciLqeMF1Jn9GBtir5bAotemChr9AYD6XdG7RxeHjSmtMiWjq",
  "key23": "4GTCPPB7DGNfjZhJ6XKTDqxGsQ16c9PckqMURT13sPFx7YHBeoCiibBAGVGsi56LjjpJnp1ZtsKnkMK5rKD7AkNn",
  "key24": "4v6XeAnrR4UavX5BubsepvzUdHU7ziisuxmYFTELRSQYkqopPgNkpA1y91NYTLUi8B9KDxotKz7wqvVrPWxM5tqR",
  "key25": "9t5a5AGmaks6SVWxvsvp4ts1HLarSNGHVvsyMLvGFV8LB8Zm6qspiGQGVTUyzozJwWfwtmjb23drFKT375bG6eU",
  "key26": "Tq7KggHdqv2vo5JBdfLtFbWKhWBe5ATBVaXN4cPqLWyjoJrqbwUNV73UzJYKumf1kYToRFabSnH5tjV3e7jPxpN",
  "key27": "5oPTvPRsUyTyJsyz3a2aQw3nk4QBeSFx4Qx1QRTmRp77nifHpM9d6udBm3uphAo8FhCxkAjSsnoxVX2zPjHnBPvq",
  "key28": "ERH9KiJUPipVRBcs8eKiz3SazM5txSKHao24FaTjQyfN3j1jUngEUi3vVtEv9qiMawru1BfxRDiho7uU75PUe4Y",
  "key29": "5ohTxiGSZ9i5RevK4T9UELTGgs3fRfM7QQkZdv6WpoerUhpKeQu67nUnEByAaSYjvWLyNd2pEDfFs5V6UjtHMKKn",
  "key30": "uJ6aYoFGHecbVRsVWeMxjBsZvhGLRXN9Mc3UmV4E43rDtMaNjQk1WNEHTVkgScWUgaRLWYLy599tLLeQD5VVRAi",
  "key31": "3H9PB1j6BB3hRVsujaBhD5BmwZ2GJyimDEzPbU5wFgcKXpPSV21X3WtFq1dM2pjaMpDwHWpSgAKnMCWZN4QsRxjc",
  "key32": "3sEZWhCeCRogLpbbKkqzga8uV8uV9BdYWAaixij88XWmkCQRJFQWxN74NLwGssFsVE33gjkeyAEjy1MUd2WcCBmw",
  "key33": "4Gvgt6XkKRkqW4nDT2PLbWRXy62yh5dRsMU7VxBojZKECqEfZAvT5xJc76ycTT6KYsfDEWDsDbyL7JhBYm4cg6P4",
  "key34": "2Q2dCSdE4SFVtBMQJNnum5VbAgACKcyaNQTJYsAjf25kLjf89mNtEuY2Pbg7iG5QHP8f4C9LQKkxzDheV6KUU6Qp",
  "key35": "4cRxzfp5wR24uXYMm6J3EbnbWrarnaV6sCVEr3ne9cgz2236dMt6x9LwD5n6HeWvN7t1jYh6e7Yuwa9BU1htizCd",
  "key36": "4dYznxvhZcxGkT6mhD5VjvtYYQrYirCZca3jmg3w4Qfo9EbQhkbgG8uKAwdDYxwbJoWmACeSEcVyAnkKUbqNpYY7",
  "key37": "4Gukyp4aK85YNXgZmSviap5dcqtrWrMuq7DDYDoLyJssPaVpUPFeMXmEUfWPc9Mb7eiEsKwqy6LnrXWPLFBCC1Ko",
  "key38": "43EYmaiRjMSXRyVnZXiALsH5GbgN1x83xgaLBPXvuUtfqhPM5aWM4XwFS4yKW4Gg6t5VkEFxQRYYbm5nTYdoA3ot",
  "key39": "4CNdRi5g1ZTQXQ5C9engp8NLFrMJtYwmJhh45C246Lf3da4cQd5cZEgTFncx94v1B9Z1yPSStdAKvuywf5qoovTd"
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
