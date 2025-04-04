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
    "4shdXJ92QMuQwrcveQgsZGmDieoW16rogVeWstEH28b8oz4DNchNsqH2rcG5BsEMQdVvXq8GxXUaWirpdrEVN2Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vfagwD1xH3EufTpzF3Zs7JvayTYrien7vFEMvG5HhCW5y5TUjGSqpoiBMZByWHXsNyGeFPMHaysFnVxuZsefBeB",
  "key1": "2R6sBH61iAP4ekjkQPyoeNq7ucdWu6wWVKywpu2uajP4xYdKFqkajiBc5KU1GYfGxvXgLwnvLcV5hp9giAEeDafL",
  "key2": "3vqzmzzTRu1jUeeEftbxatADuHbNDBZF1SFV9VCWQCokqDoQeJxdNZ5G6M8yQdHsUTwou1iUi4hxBPP1ymPsdLYz",
  "key3": "5gTF72uDndXzDUqXwhTHa346N63m73yMAcVa1LCowoHKo9hVrHGq1fRWGf1UEDAUMW2upAv4PsZQiJCjxXN9LNwi",
  "key4": "2NJdsc2wH2fDPoytsCUDY8ArTiniAs4ExnYTXGWmNrVyNCLhiEsFMUYpDCvMSgP4PAde4EFHdSB5NX55hVEsZTCT",
  "key5": "GsYAyCJMeXjJvL7PBqqVZL9fvnfxAFmipjFuMFwPtP2To1JFEWKoD8bxtyLNc7SreVBNuUPPHHksCmxhdJF2Uth",
  "key6": "3ytu4VWVBj5juZPSUKEzTuqFgbZL36WnG3yjLoRsruLqyEN81K8HHuoYV2SHGud1TxT5rESs5mWgYkfqiWZSaAgt",
  "key7": "3WCu982foxJerYg9amkVs4DtwRK88pvTGETPkeyWowiGauvWhsqQHpFLbrny1htqoQ1qkttM5CCpNrsLV77Bfm5L",
  "key8": "3N7r9YN35X79THo2w6dFHzK2xiDzd4M8Eofb7bnzHAwqEQPrjBNwRJfuSs9USLP7AnjA2NYvZtBDbuyWUTdZWPc6",
  "key9": "4nX75tT8EQBQydAJXFX5SLyTCK3SvKtbAK2vaFZeHC7nchJQ7e2JnC3tqrvxW6jA1deFKXFDskARiairuHNCc5pk",
  "key10": "2heZvFMriH3P3CztzfHigpYuHshArp2R5vPGqe75iCFjHig1uGFLwzaTg1ynVVRoBPGRjc4kALxZF5d32CfLE4ny",
  "key11": "3ow6wJUnARC9GJtTxex65XhdYkAoojBWVNbYRZ8aeU2EicLWD7yWyvajZz3pDsn53Qcz9kTyTDdndhWSMaqezU3T",
  "key12": "3NSvHLeQPtdUKfHcKbw3GjE5uZzNTPf6KzBtSsjcg5YC5rF2az5uJEZYKpYE9XtZuiuTnEAFK7gL9AySPaizHuD7",
  "key13": "zdvKQpYqsaWGyR6TwFqWEwAs6Zrw1f6GAsqX5DD2bhoRHATmVGpfk1kTStxpGiUoiLuDtzDwkVQ4CAXYBZhJBsx",
  "key14": "Dd34zDyUyhuE1fWhSqt232LJVXjXcLVUWSvkSP3vybdBNqQPP7r4ooDUUACPWdfHD8VkNsVtG8NynrshfsuzfAc",
  "key15": "5rH4jog5EuUxtjSmBi5YthdAsiQv4Y338iq1QLSE9h6VZdJV5MJbTTjGCmYct837HToxXAiiLCa1eViVT3fKmqQW",
  "key16": "4eRzEdE3fxzkHYSMyizwpksa5ooeK3Ve9ZU8VC66zVsJLLE7BqyUazU5FvetitpTkhmppNKiJYzCmCb81gV19fCv",
  "key17": "jM7Ym4x7jnjjHauYXjoaCtGXhWzDg1e7PnqccRYo3gqSxV8aGZxjmAwThwXDNaGaC9kBJtCLhvavNP4eHx6vSHK",
  "key18": "63LDPTbMKGnTDF7voLB8XuMiZW4qkU6bTdm9duFz63zQg5EkBwk7nDnjdtsZAx9qpAebNrGdH61TH7yMtDDSXp3R",
  "key19": "5duVvdEccWDrXPivUPzZ6rijrEakTz9Yw9MV618EqhjAcJ3F5i2NFypiysTighceN5hiFEHHL8WAjRFpmDX49dyC",
  "key20": "36e2az1jeBGz3enYYWijPZ92fmDLkasqqx4fznZHxEaFXG73o4xdgKpsE2epML1gNC6FdxzL2STgz6tMSWYbmr8",
  "key21": "4J6kvrUdatujAMmcXmMXZCuGno8hzeAuKsymACLa9vvNXb9avpwY9Ba58nyf7yazVmxd9HuPSFFhssgDMFGyYJL",
  "key22": "667A2P8BqpwZFhxGuSkRiMYpWb8Hvgaoud4ciZP53fcpQCXGtYw4TSYHA91Ajxc5Q9ajwUrghsyEJpnz6nZVVcQo",
  "key23": "5gdz8ptx3g3bk32HimgkkD68Qf4Rx5skiFJveFZf56mGw3C1RiakSB4krazkuDFavpbRUMYBeAmYzcbKK7ykpTdn",
  "key24": "miJFbtfG3eopmtxr8AZe9MWNWJkotk7yG6r3kRuUQro2JiHVaJN3qdE8JqHUC9n2t9qsG2h4GVhNo4cFACQunUR",
  "key25": "2kD465xXY2vnHjZUC1MG2ARejASBsz8pLQyLESoWZDp8UkXnmij1D3QZpZsYx6QmUQcWvqdGBbxkt7cSUgB9fkts",
  "key26": "rsmVDJxcy4rffGXkwDcseurUJPYTHssauFZ52RaeVGtw6wkBPK2d8oq9N9ganh1J4SbPshC1tLMMHmNzjoXAhjY",
  "key27": "2gUXYvgEsqiy1vbTLEjfBVJmtiTJu7h39BR3RhwjWCNERGA38NQ7dMdiAmP6aF7VVJprAo4QJfQm6qa9Ny4DHEQ3",
  "key28": "3Q4oMzro91PNDg3s8xJzGDDCLvUdMYEQjoV5AFkVWVA6GJ1sjqGgNsinWXLLSQB89Jkza6iNmoV6Y7fCxqdWae1f",
  "key29": "4Cj5Ht1smJ5Rn6dU1DfpSik2xvHZW8GxJP8r5w1ALAWDNP5ALtwLem5unYr4y3fegfgwZDoiqcxWJ9bTmkFaPAdT"
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
