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
    "4rqzqZFHF9Uc6RKfQKWpyV8wSrvqJCJvDde54Lrf2sztxWnWpLxBqNYmahT1f3Se49xn6AHpEDfEyFaMzMhpn9Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aTXptyxupTuq9NtmvqSWQgEk8uCfuEFkPkKcZXoLffzw7WY9MJMxbc551a455wqXLunsJF8hDrB5hSNJ9mxZGYq",
  "key1": "hooYHABoEqZwjuWJgu1VaYL9Vdc6mh3CQFYT3f8ApgDFoCtPTBeyfPMYsbu7SSJGrK7zmkZoycYRvPGfGc5fgQe",
  "key2": "3PMBXRT4tZuq5bquUmHgTq3cEznSYJVAHNbCF5MKQZpVY2uMtdeo2EvCJUg3LKoK9mszYRciCtL8Vai7S696sCot",
  "key3": "2Hd9ZfbSLy25ktggigTBPWUr9AQ7NxJBUVeFimpauPkw3pdfJGHJRZgBrKJts9aKTiM5Cv9ZT9b3tUpfCKAZEjCz",
  "key4": "4zEvYQUxRgvhBP6uXFMDXPvJGhQ36WTaU5NYovZCNsPVvraxYb9EFhDoYfCJiExruBVB7EWpgRhmREDfJyTf8ojE",
  "key5": "3wNJE4VByhdqEzuU4Np2y2W66XAxohLDmUnPDav6uSjhdBbBuxyRntzUWYRksMkU5Pj9XrTFUi3M3MRxJwvWNzVD",
  "key6": "2pFpoFjRuLKUGAKxiMbboqdLTCwcNTSwdiZq4yzNSFotfKtWxH9nKzKm6cC9XdiAYde8kM3ZMifaWQqHEdbxz6NF",
  "key7": "2893CzLsdmNgSQbgisE5F1gVYtdZzvQzxFS5X1WPvtkZ8NmZHgTu5syo3bpDTB8QDULaNz2vFDG13BRKgK81CXnz",
  "key8": "m8H87Tgg9TDSMb99vfx34omn2ooXS6kFSDKnbMXLtDJXF8SKEeDHHuiqiLpTLXdnGiNfh6QTzxd8Y3PnYuSEKbW",
  "key9": "357oHRCR9Z87EwV4Y9uYyH5CrnLxHgh8WZ9Bik7CqYspqBkreCce5GKUrVbruY9rXaTJQCoYDGfhGzP2jWQj5jgv",
  "key10": "4gX4Hs57SbZcabrhYMU9euyDumour1VUcV3kZvefM7d1kNbCwMuZCGNuzcnSgPYVkn9WMMwDygjStyv2yR5wgPm8",
  "key11": "5kRDpwJvpoNNp8WCL4SuzfCLwoQNYVb5Jeiuo5JcuBPSrTvSkcpj4CEkPMpoqbUQxG2UfWpoJGuC1EaeZtci95rs",
  "key12": "Kfnnk4CFTvEN98Vb9CzVZMUixqdaJzwdZ4JXmm78GyhYKaQShLh3oLBMXsfy1uU1WiXAcVCkVPdvRGK1kHcGZ8W",
  "key13": "2YR5gMGxGR82iYPAz4xiyAEK1fXUMMSC7EBCCHVTHyqfiNup71QzQads3FaTp9dXFRzq8hfneA3vGWUxmgrMGv1N",
  "key14": "5kSf7auiQ5cxeVwykXGo6LrhPmC1t5oSu7esRkNHLfUu8GA2onCe7CsD5EemhCnRWxthxAxrLLhBudszdBPhaavK",
  "key15": "2vEFWmB3emQsK8pFiFXFVscNzb6UnigLkKaLg3WSrFpYc35YfQuksXsHe34M6nQQNW61EVjkcQPfY2XCvyg99qdP",
  "key16": "58M5h12BEY9tXH1G92nRzh8g6Xvu2RHGqmGbycQa18vCuovGz7dUvR58sVZkmtK5mEFRudfomwB2wWJt97DxgPgr",
  "key17": "36LdSmngYyJvhhjjq4ufmqwD4uCoUVXY1tkqGmj9DR2Y8bLoeDBF8fA9mVYCxd1ib12ETgJ69fTmyTF1hQf9qaFo",
  "key18": "3VJSAzjMdg11pimBSMaDgoeRShuHdeaGYcTrbQi5PRtWaKgsPc5Z2u67CK6XSjP1YaNec5eXxNDDNaiuCeadmnqh",
  "key19": "5VEozDuKj2JP9TmRSmgbPGAFtdiTKVsZTrUWfDBtzknEW1fRseCLUhJmDLh7VyivmPcYxL51Vk2JxKn5YZe1W4JE",
  "key20": "39NxCjMo7jqCsbu44REkJ5xkFKiugz2fDLVxMMTLm2qvd7Px2jNj734B7e6qgpNWXpbM1ww5uoieRRXWxhfFP5No",
  "key21": "3Vi5GFFpwwUGp5pWy6Eb1u3r19TqSaombAtpMqPis9BCYdwULkP9feUePJLfEPNbVHBNcSp4RtTU2EkFfKr3QuD2",
  "key22": "mKxoAXZxWtA7QZUHMFFNN9PMpGmq8pHaDCnUgdyufSY7k5GYM14beC333jduPamWD9SVhzLgtSmJyFJFUWuM3px",
  "key23": "rQi9rjiKT3XgAPjEM566CPb6UtzyMGFYAtMZfXA5d94ToVmp4xXAR2sHv34qnGEahbUh4rhCaK8oAPNSXwoVvzX",
  "key24": "Wa9dz8V6heFwEDwtQbHbdLmxREUK5U54bknJMVU9cyAhYwUCCjmaRZ4wHHiwUUJQPfGysEpMLkV5w3gwHtgym4M",
  "key25": "62ZCJUZmjPgCFV9rxjQT7exAZ49QJJ2PkJU7DbKTYTdUhLhPKAKnpSnEvRjWzJTfLerr5yAdiW58CJLGVW4aQ1zq",
  "key26": "2tSuigogAjjQ6JPsKhADVJApSCErTY4mVg7q8cThdNpcnzND4y5eyCeYh8vJSX1ox6Hz2CeS1yS7RHihDLuPnjHj",
  "key27": "2Lj1mRc8cd4Sd8hETHLyQ2DskZqH96NGuuz6YdzxzGVr9irPeA182bq7BH5xzdw2ve9KyNv9rhBa62j3FbhHAPUP",
  "key28": "4YPdxpESWxLtMqf1jsAKxEdpFEPzJ3mFyDP6JFNboY1DxxVqvrYhE6LQfvFpZpSTbUbTCGbZmtetemaaxVV7PWpU",
  "key29": "55rVq5FweDZhr8Hecoy3cjCMApwuWgszzhjW3PzySeBmssZv9uxaemAi9RVDPZ38HRKNNuqneBgxYffiqykLHZ3c",
  "key30": "smktCvF2yDwYM2rxMtwEJJf7ezZf9o791anyoebwi54sBCPv4UxSC6jRm3FFUW9eigKTTzQF7wmhibS9sUFZxZR",
  "key31": "4DgxjEQYPP2tQoNKypZGszxdCZzUrmQZtWorjgSmK4FE78zx9XnV8MKJf8qPjApQitb3YUwxj3Dywr17a9AEyVxW",
  "key32": "5PK6wh9KKKorURh3ozWkRWFRGQDZABHcXKMf94ngsFTtMZ1T8WPkdwixHH3V8sRWjCF8HE6eo5P4RY8pSyZio7SH",
  "key33": "4qujzbF3j5saPhg7BEPYvHgzx7QM2ciiXjWfmhWZBvCedjUMKuHqUveG4ebgXHSfuFr63ocSLHatniBFxvqXLDr9",
  "key34": "2uRSZnaf7wCkhTX9p2SWf875o73kR5WoqXcGgRWgNqe7AGjeqrA1ZY9qXps2p8BAJQPqKkatDnWv9KUUmghw1RFf"
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
