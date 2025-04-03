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
    "4qQa8KzCVBmmTcCkHpXhRVh4JjKeXHq22HXEXJB9ku2N2jRXZsaMjpg7nm4LzdnySj9ecQwvSSqTsTVbGTpnSTRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggQRVTaQPc8vTjMjyfHaiF98UHBxDvLvByYSMMDZ4HQ1nvVVZKcR59box5A8YS5og6RTpYXhSSpDQfmPMoUbqnH",
  "key1": "4PfdpuxCpvHB2uhWDJDmqfKJCR9n6AGhXhqcqHwr7BGp3FbuB1z3nUqyKy8qU7ZUQ1RHiv3TQzVR6aPZd5ovVZyn",
  "key2": "3A28gH4wT2tZ4bVLtFEmDJ1coKSVZmLGs8C6ZpLam6KxMbb7x4btnMZe3pSqdL7TH9WC1FYBBVT5sCtKENyQ5EiC",
  "key3": "2xogwThs6iydrUxqSKDdKFuuMvKwCKDjtFqQjxurdByz2WsbkCtxi1jjhRKSaWmYSZUzL2bT7Crrnv8iyX47hfj2",
  "key4": "49HDrkLkLPhKvmQ9CQgNWiEpAHEL2gK7gRCsz2FZ22iDTizLeuVTJ7uJ2ZxFvdUoWmjHWgJRnoXotN3aTiGGJoqn",
  "key5": "2mbFtEXQyzR8c6SNfr1kpSjCf4j9Dt1gR7k5zNHqyD3jEXEEpbZbaDmuCDMdygCkDvnTwiW6debDRevkVToQVQX1",
  "key6": "4fxkcnNJCKLZ5o3Vwfau3MDDzx4zW9PXkJfjAKEiAuDPSc2o5F5GVW2qC9QPVH3wPpNbyhrRwER2XdBSCCc4yr86",
  "key7": "3gv8kpMu3r6jxxGCvUm58WRc6AoQNtc8gsyyr4qMhYZSYHk2L5CcJwh1NskUoRkDFLk8ob3Y9aYXLPhzKsNZ8Qed",
  "key8": "42uAfVco7bmPaCGAJmXTp58wdn9HSNhwVwgdAL4j6L65PhGku8UuB4rSM1v7FCfhPJWieCVk8a3RHvLMGbyuJN8S",
  "key9": "hrJpjhmABYCtPFeLaNUBwcZxzCfUeyPawtYf1nS15av6KEPJTHL18Pi7cnbGquqZEDkutA5P1dziKCN7mmqKz79",
  "key10": "4DtQvtx7JjDExYTnFB421HCo4hgxbz3A8Hm73UzDSwVmdzGBrgBYvPvncNBppCD148rNnX6oo8LGUe1mTGCDjTWs",
  "key11": "5sQ6KtEX3oRWa6YE5cpu1ZjnpNCP9g88eHLPNS9dC8eEZpJE3km3DBYBAvSJf2MDieAcCfEUnygJXzvH63iDL4Ms",
  "key12": "2HwzC2JUdTRCfPehhHjs8jsrvqcrB7eb6hrR6VC3saJjPY6LEtxLZktTHSJc9YLhxgZHtsfkQ8ZSkjGy3bU5VdCe",
  "key13": "66nssbSF7bnENdSmLqxtywHpKBET8g9nqEAFJ6paauh5qRDbyWGeTibubcGvxEnvn9zN8oP5MeqEsZJQmC1ykxck",
  "key14": "2diGa2UbyBZPvUjyr34UyUTWwU8hJ5tavtGkKC6LAeKH6mTCxveHvLzFa8SqrgDCqnUT6HSuBDtmEhqRwEADHjr4",
  "key15": "2BWdwgjqnWkvMBPUh4ysE74UiXhJfu6vMrvWxW9vHTMiFWhWvmgwFtT72fPLszSCT1yLGgD5ypFh4YxMnKBfaUay",
  "key16": "48GaXRa2tLPEgYV49Xm7u3QzcqNid7PHoh3Q5awASaSVm4cddiVeBXarXfLMULwctgfonU2HVbeQ5SivZ49q2gAH",
  "key17": "3vBj6rLfT4bMZjEA5ysJEXYWRpXKXwNjWijw4957JjLAJthf3ycjcW8j3LfY9dNyAMKoF1r1rXbp8dz5za83y3ZB",
  "key18": "3VmugicihagtA44d8zZ62fqwjVB3Yyih41jAnyQ7gW768f89UA8UVR8i8eJuQynQ6h2nCbAJVtKWveD7KBrXPpDi",
  "key19": "ghwDomwU2eZn7UvdEhDfGizzDbXnkCPu1oBPcUzRbv54ikoSrR8azfexT1KSi6bBNQSYntZCGQcA9khWcovJF85",
  "key20": "2WVChxMfxxYmMfdiAYpFbTyroTkRvowZRHCq9RhBTmjcNMBsoTAy1pfEiL3Ac6tNY3vwRtUJQnWmi7jidxXE3q5U",
  "key21": "34ScWcbT6mk38QD5Atcmg7k3wZiYqZk1ogH9BcvGoBpRWim1uDRC4xF7vPUVd83u1JeNGxsjD4MQXd9SXCzcT8ZS",
  "key22": "4NhGVck842mG3don25FthEWmM9ebkzy9dMJyJixnNrvXPqt5nyrbUcitCwVkKkTJiggu1JchftSPBr5oJDEjndpA",
  "key23": "w8d9bvZt1oK8rntBUC8GFDE33mLmq1RqvVh4amEiLiTDEebCicUUxdngqhLQbdrQA2HCU8nyi9CPxc3uWP8rLFP",
  "key24": "A4ihJZgwxE6LHn3frGi1wS472ougpowKfnLfvyKGFxTdei2ChmbyHx1fCv9xkJvipRNGKCQtorxwjSNYfgJApRa",
  "key25": "2KNAccgMcriiL5GTtHrgY6TR9uLv8SZtqeqAD2CcMxivorh47axzay3ezUwfeykepgdbjMgAUNAXhtKhNtb4sbnV",
  "key26": "2c8sdTSCZztqmNf1pGe5hfmb7UEgm4eohgZbip4eDmsHWJJj8HxKWB9THfKYpZ396owCM9hVdFmccMvdYMskC7b4",
  "key27": "3Aa2qEJj2BQAACF9rTWpRKmLGveNGaEGiw888QbdrnSznNPnoCmzJbemm1MUAQVVCZwd4nmujtEC56Cc6Kwdj6Ji",
  "key28": "2PP2LUhcBwBPM3B5nBfeyhVXS7kAuFfX3dmHA4tWrv5Z98rkXpM3KuDJiwEMSX2girY18fz1om96Fa8uNUfg2bio",
  "key29": "4C5t8L4kVGdmnnekmow46PoUTLEjEcGxQLCEK9NrbQeoVEnMBntDyUvQKLxS1M3UZzwiSHmYdop3wfxHEwvhAUVf",
  "key30": "3H3tw6HHLjgFEs8rcQFsVsYxw37CDECBNec3yAv3S6FqMiUojbrLxa39jN83JtsfbHBkPaz13J3Ti29TnUZhE3Q2",
  "key31": "3cnjRbhW76nt7wLEXw42gmUVQ5e9ixMffT4YEi3meiemN2BceDgDg9VTbvKdrP6s2rqvZtyH83kX32BbdhP8c4q8",
  "key32": "5jnJWtY7UzrPgRyunskdx35Aqdxz54swJu53qsUAqUQ7KztjBhbMEgaRdF5KXrbUPikgdJK22LxwBrRvt441zmdv"
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
