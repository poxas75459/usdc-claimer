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
    "4zTViP3qyzpJP5stQLP79jimgAyx5zyuFhBTg4YJeJXLSNu2iUgWjNHkGvDw4S1uhh3nbiQ8wCG6smXrvnNbwtLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vHhAPZ1nfHkuVEMGSgjRXDmfnSm3feTpv58qCDHdJwFDjCxzXuZFnYhkJ8xdf1ofY1fXWjUzYybSCpFq5B94RaU",
  "key1": "2pjBLVEq8PczRdS42ejReTE6ZvKTL4VDnqG8YU3GNbE4QeCmPcYWxQPGuPHK9NQqsPbtFFCRYEcAK5A5pkfoSHbx",
  "key2": "2q3JgEhLpJEc1LoB7HeJLSWNnwSNqtfHgZ5mz1FaTPoHvHGeJbsazfXwHX84cdTKNhtHxgnagmAEcnQ6MNoUsDmS",
  "key3": "pxMvMdXjDv595M54NzufgCBkvrdbi7YWktRMv1g9ZH4AiMGQwWJvVE9e6EVCWimHafMaJcpcFio8VWSDrFXyikR",
  "key4": "AJeQ4cm8mHFjTMWtZQnxa5FHT5TXtEUsuwec6F5u5Mx1sFX8ahzZ7m1s5drCPpbEjKjLRS1R4pNQ6EucgzKUhaA",
  "key5": "3MPBgGYMxqoGN73V3iSwsMeUr3mPbQTLCDmKDvym9PvHz3spnGRVtHEbFGQUZxW1HQzksX3fjLKQhRBUfu7BEcNU",
  "key6": "JQ65aHvdfT2rP1eTdVfUK4Ad33G2mKvvKmr9EsE2Jeu4yoqptW3vr6mc2A9rKKkZ9yVK5QbNPiMARiju9GDJGB4",
  "key7": "2uNXFqiF362iAh18R3fF9mtVPUE6Tvnhyjj2UowWTj5taDY1jnhkJaH8t4LJDx3awpfQpMDELmPkJHtb8VE4M3v4",
  "key8": "4JqS5qs8mJpErbCDhXzETEHNPodNqGMk9Jsu5p16dqyp3p62uNGHDSWJzftLgq6nfFkynuKmoD7duB8mqLaMUV9S",
  "key9": "3zTcumw2MKy4JsLvwpL5otaP7bhpwUwbH2SbmT6tt9BDBb2Ld9wyE2W8PYiyW21Cmmm2jKDNCA64Cq6e1zyutYnX",
  "key10": "23RdkCCFuz35tJLYFXfDkHT1gLFPeen4PpKQMFD2f5x53vL1u5VQ1kDk5FUG5zWhDYB9jTi2WAy3h3QFFCN7D2W3",
  "key11": "5QWLE7iEqrbAs1ZPvVSqcJFXHxUo9YgKe5BtseQdoUEAmKwdQ3L7JtMXzBoFitu2gXdvvNC2XGRVKqsQGnrLftex",
  "key12": "64SKNLHUAMNVqgVic17yfohCRfRRRUUkxzRtZE2ntxgBcRvvPQ8ihJZzUi4DBMXDgSTZPurk7cNWVMVwxK8RAFBh",
  "key13": "3rgbGE6i4rXX91HTb9tj9BsbjQnhsHNE8dcEgsaRtjEbwvdMr6tMhaSKtLVqToNYHHMJSoByRNQpLbwdsHVmt6Y",
  "key14": "fX88rym8wTFCsRP95eXHfMXz4U7WF3y2GtTiPvqMvgiiRou3CpYUvfoDPWo5rnQneg5QsL7DG9smDLKDFfQASHY",
  "key15": "4CcLkifXMJPK3yjyrf4ns84Lz5oe5GeXXTViSHcdPK8Hp4xLfdGjGyAhMvhNdNbeywzjdnbwSiFYDEw8Aoh2my1Y",
  "key16": "3rYdBmT4UfYEJATA18uwhECzHGbA7kMqZMuKUyvkwXer4Cy2m3HSnfeGQNG1DRqi9yYh47gBzikawmAuTDb9iLVS",
  "key17": "3528XE8aSGcDZ7W9bAnkvQK9X8PrkemuEApBMyj475Qn7mQj4zxfPVLd2HpVKbd8tA6wX1xyHNBBhr7g1ch3MyKY",
  "key18": "62h3DJv5p612rNMKNJCWqBp9FAxEAZeygpc6p8dmBooMPJgUvEs6Cmqg7Q6EETvFvN6hjqyN6PqbKxjQR5kCk8RM",
  "key19": "2m4VieY6FdUyAfyb7LG321ooRQmRqR2nFLC5RmUqYHmCdLbCqSY8u2pTBzicD1pErbUtR2sq3wY3hkxpyJuA4ZPj",
  "key20": "2b9dkrWGFMkeVraBjpMbyS648ttW7gBQDJXcHnzJeqCXQjrAVYzNt8c8CdrDpzSbMWafdzKCbPc2x14X1VZMQRqM",
  "key21": "5kH8ryricRTdMzzwoN9oSEfWXuSEeKSTfyyJvFwjTZ4uGLY69dsdmjaPSPeX6FvYnR2Z1FccbuZHGe5RMaFFSAyr",
  "key22": "2uMbEhicMzQuG4De2mrTeuZoNPw8bL6HYKxfZgfKZGtp2mtVNwnKyKBfjhozDGLDCDbWjQH91Q8TGrh9dPBZk6V9",
  "key23": "3LyQjTatqmGEi6vp3ygtKLriVvG5osnVHuGqRexrzNRjsjWVfgKYtuXmWAdq1X5cMX8HtjcpQZCG7qYH4yD3eYTH",
  "key24": "5fW44eArofqu4KXA9KpK6EsWgAPf3PDuxKgVtwCPvfqYaUdDN3iSmWi6dpsMXcdr5JBAsjn4xeAoDyGzDsoUdB6H",
  "key25": "4yaEtAiLfNYWEAaUJmYpfWCmEfkyCn2oQH8qUCTEFEZ7PEEenHMjwKp3Smtn9vLuvU5NJLkdwucrzYtU9HEEjrTu",
  "key26": "FA7S7JbWKuWkWdkf7PD7ZwEEaX9mDttHANqeU7HKxjDoqqvDwdp9knzdaKAyZ8pBgSLToeKUnUR7H1TjVSbuoCc",
  "key27": "3ekVhVRQnaKs7CdeqLsQv2bbqKyC39domhGjLx2JTkU7zQtXBnE6p56c54uc4sW4DAuD33CFvWUtrmcrKXoM57zh",
  "key28": "2grdZgZG4K1RuZxi6bukjc7cP2bqNnUkGPYPK8QVnWVC8J1izv6QyoDu52Wu1sDD3dhfMBut823QHQTcTuLSuZDs",
  "key29": "3E5Lg59yiBN3rjL5GQpszXUZDaAbP8FUfWMvVkpRYc1y7CbdeGNaqkAb9efzSDC2wMR138vR1PgY6D6dAXwfBXen",
  "key30": "5XxVW4JNSRd8WV9XCLeyVRw58UsFXaxqJqdGQPAozZmUBBdLa4DK4bMnK6CtFFKDKW1V9BzLRJ2dg7zKosWMRbBy",
  "key31": "JJYsgvPemsFd2zjWnhnfWDApU3a7XW2gisvP53k4PonRWSiViw5Qbp1fdqh64M8kE4cqyKzWd3t4YczCMm3BRXU",
  "key32": "5CpiH42a7K4QcGFjMwQuufy2MrQfYyCJ5eNJbcePpSkvtczGqXUpDWNk2BBGo6prtpNJomy6WcFLpJTSCTsGQFnb",
  "key33": "52AoYoiy9Zt7oxMzaR7Ye6qjbbDuZGBo4VeneH3ksNpkHw15szLYTMMMYt594RcE6nkScudrkEepVuPSom5161dd",
  "key34": "1whJfHise7Rahu7EPjWAU4Gnzip6KQuryXWzmPET4Pv5UXKPLjXTpijCUBoL2iVv7vGeJpZk33Ng14awxV5yYCS",
  "key35": "33kGEwwt1woaUNgh12AW4nHWTwAXpNYqwbb6Fxp49ZQkq6DBqEEWJbYgQpQtJpegRdsasaHN2U2CwfeiemSBJ96r",
  "key36": "F9NVKGxZkj7siFY3pHJPsMGteHZJmDN58wtqyRumkXmLwDTMkPMkBEaLYiRXYh8QgeNxauDboRqXQgdUscA39zT",
  "key37": "Md3gjWKDxFGjjKKur7QwMhVAfbLyQ9Sp4cLBByiKTSiZvereum5V4SKPh2poax5122nwKCDHQyNoaKsWnL3iW7b",
  "key38": "3kub5TAJD9ybxNnhzx167b1fhBgnrZcF7FRUAj2stBLxhPP7RMQizmD7Aa1Ds8ZYkwXrpscJSvpXqF5Cqj3pmghi",
  "key39": "5i9xVzjD5tfTvXC8anxFoeGJNMDBxVPgv5JRZzcjb6vbMhPB8e6UTmMR7zaiiQhUUk37dUviMjJQ4GMLUKKBuRTn"
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
