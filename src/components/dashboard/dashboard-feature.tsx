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
    "5657sG1UX8TscSqpagx7xygHeqGrGkTapD4Lp3ZWLQPNNmpVcqG4Lto3ru5b7ib9G4VADAqEabeUBZ1oCezexd4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DXse7pJECyAVMhj27Jooj48W6PKdTRvXYvyGcgqCfVas81dzwHRL1bA6EuQk3wP5vSh8c8sPL4vE5pdNQoXrBTM",
  "key1": "2RC9Tjbg24VDVCxQJ5YjoP4S4h7UC4od1BePbZYcwfJCZcgAewCwmZi9S1t2pCikfg59g6vk2xLmmEect82RcS6o",
  "key2": "66yAKkDMYrtYigg387ezsKrdKMRgw3tbwid4QQ367ERb52ibcAY9pCUeRJqGYeFB9M4aSk2Yy9uBoTUPmttCx2jy",
  "key3": "5dkCUzUQBdA3eZCDp37fSqsdEx9TwjrfEytWN7XMLticRDt39wXYWvBFXhkRQzAeuQbiDhC2C1Z5e42eyiikKiSM",
  "key4": "UeQVEbqCDiU21QALmaApVHVGR2hfVrKKKpA4vNS6qL1yBrVhSQUh1v7wKjfhiFvbicYavAXnZmYHa1tvZu7NoaM",
  "key5": "2sSRKvzaG8Lm6hZD9THC8MEfJ2yNzELrMtdMz1vYKw65rBgEk2KZyMhXubEPxjJCQZEMoMX9LJdK7KiZ7g5ZGC7F",
  "key6": "3UFczwR7BbphNoUZAtyQFHMgsu889ZZ1qYRLfiTAwTVUTFfWnYPPQUS8G51kst5fC4mkrngirPPrJRoL4sHcbFDL",
  "key7": "2tf4XvgxEj4fVGqaSceHbSzvywuUmwsAgbJdPm9QB5ZWw9m7NMaQdBceptZyA1hvYYcP4yNx7TF1z2AAkMdveJJ9",
  "key8": "3i5AU6KYYZCLbRwn29E983uC2iN1kAMZs17HWvS4CgPU6VXE9VBh1QUdS78tR1WDyouNSwzWjeskJPFP89yZSYhb",
  "key9": "2E2NxP2K2UeGdJ1PekBAfgC3qN1qxcwYKaEyJjuXgn81WRdCPd6cP6fSsMjZA6vQXmRp3nw8k75v3WDRbSDUFKjs",
  "key10": "3DYNbz6PKJPuMhjyvoehKjNo4c2TNLYeChfkDhcLfgySBPQA4srLH6ATCj8n4DVbUnuXC1isxCgHSFZutdoPXPrY",
  "key11": "5juuETe7TWtFThWN4RGk6xftYeWbx8zBsBMnKzu36bLTjjwhU82XXhjBWMP4EqUh1FwDKfaearUCE5vR2fKCub8K",
  "key12": "2RhD3v6kypGSf1qmNXYGMSioDBSfw6ToHufZk9pg9rZRgTrAvVbcvBeGaFjnF9S3BcE4xm7qmeJ3J2gC19xnDQeB",
  "key13": "332xVyZ4Vp2TLBvyhN6oncxqQNsWtwYnQJ9TYe4H3QnddbYLFqjyBtfinqCqjE1JsBcnKauBfr9NndCRTb5sC3LP",
  "key14": "62a4HSudgNg1vpxmPDQVJJKY87oVLx379YDdbS7egYrPEJvd5omMyo5mA9Z5NveHVK2if6XXMdAungG8cNdTcsyQ",
  "key15": "36QeHpBgirMPMxwcuKJ5ehiDZmxyXuZSJP2ngtcSDsEY1aR5Tm4b4QfmMXu7QL8RXtNks6hQ6SE4DdUWDxgPd4EK",
  "key16": "67ezq5ufdoKHnbKBPK6yMREiK8m2nFJYUUThPtj4Lt3aqfNMgGeTHuPyD5TR6V9cT8waCaeRdVSUreyDxNqTzqwS",
  "key17": "5oQt7D7f7ztupHADJVNB5C1a5q3ijAgVTQCkgA8TAnfPufvTwUdYr3kYpmMpD4CwT84f8yhfSrpBLpugfYikPQ7",
  "key18": "3amwtPXnCmNA5qk4fYGcjxCuNwiKWJS4JsdUCDsx8w7cmharkNHrjxGXuY1jZtTPd3Gewinem9N4Q1HpPRxdfywh",
  "key19": "2eSxskxzeooj3FWFi8386VDfbJdHudoMGjF9nbF3wv4beNznGgorK9AoLZE575Nw6GwTjAsF7GRNp2rTCcUQBfoU",
  "key20": "4rugTXcndYBQsXZcPBshf2bDwPjJXyrnj98pxZZmZdvrdaxuwRnbN4U1nxUFBeEEkmQcBMu2YLGEqERwkAzdVTG8",
  "key21": "2jyPeZCLUEjD4ZoX9ufdckRmst2Qz1qYb5s7RBPeyKgvEQeLFznuXY8xDYiz62Qem7aNeaUjvJ8RaNu3GodwbZW9",
  "key22": "5G5wf2TSUQkmQh3C6oJSLgaGVTdGYmGEskujRFjVwDyE8Gped6T8Akq9u1y1viURh1Mm229Xrji1kDYP512nfBns",
  "key23": "4Dw3oqMkWdNrYeFSzrGoid6EiKJYfJ7Waap5sigTHzzhezxnotZjJgFBMThZyPVmB4KNSPPfLBxsGX2JnHg5ciEw",
  "key24": "5v7W6QbAb4pUFprVzqitUoRF742fEsCHgq4mTr4bTgQAMKR2UhwtxzUirymk4izdwoucKXN4AYEt3Yx736izGhcv",
  "key25": "2g8hwF76VWWJ4AWMUnfNHot4sBAiEG37wXQsWu4yfzQfwNtBTbVoZrJRBqtipWjqf7WMivNoX5x6cQsBib47LAc5",
  "key26": "3RQUmaCib9jUwhxs3ftMaqZ6P1UMRoZzHBPP4dunCy8uac4zkC7YGtTNLF4Lk39PMPJxRbZqHACTW2ovrjdnSnbo"
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
