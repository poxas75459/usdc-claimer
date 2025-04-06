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
    "3SwdiKe1iRAp7YKw9NCakfQdvNfGroi6QCvtp1oVQhv3UVfmUYeT6FgF5nFkB2SQrAPvZsdxWB8XrHP7K9mp7SSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViQRim5LxUm2jW8sYvtdPLD2ASrPQmMKxGxmVmvMa5FK2wvHHhfraKxNQXeJdT5qzUvGvxqTWr2V7cwkewrzDe6",
  "key1": "3JnmSkZfGFHyRyDj7FBoUZYH5GcS92ZNYdT1b3KQRZawxDxFm2s8HEKFEJHma1ZKpZTyeKFX1Cg8SyaGWmtrC6Ro",
  "key2": "4BLV3V939YkacQSCcsGFQJJnE8oWddWWdrNRseoKwZt33UQHyRshXCCXkLnZcykioMDgCMwKAhQJ88atEPv7y5CS",
  "key3": "2ttEBoaaqKcu6ebjDaDwHrCoxUo39Vs3YJczuTp2fQRZHcwpfjkhMgpqWNUqezsfzkdR9UpEA6dk1fnJG7hPjTY8",
  "key4": "MM443JKvzymN1pBtXaRtE2eAFADTWfRTTWBv99xPjX8mKZJf6B5wnRQyMHkbC9AULfUYn2jVcPkZeFBSedXiFfi",
  "key5": "4mByXE4j7DKGTTxjPoKhKTiQwsnK37nUJL5qDNvJ2CAEPVW9TqhqCBtnWGV18CYisA2EsZ67dv6EmGjP6Zkkf8u1",
  "key6": "5pzFB3cVRwqmE62fr2WqKGoqt6yrAsFoZWkZ2xgjbTJ9Atw3TpCPmCJmi5HMU57eHcxtt9sRxw5CmmvWaFHG8NA4",
  "key7": "4aj46aefVDJ2LYym1uX3GYdenHeXAGZqguycXc38QAY9vcT2myQoYeiCe41fDG4tDzbZ64t36bgPRVReAd2TLbNo",
  "key8": "4Q7bEprcx9rKYDYq3HWnSxo3mZa5AphBE244MmEVHFQjGLZefoppJhT5SNVPbfsa4YWp7DdfYbzsCebT5gqPvx2Y",
  "key9": "czdbgBTKdC43NvgvcUDijN6uJpe1VYcWEXks8QtbKDazf4PyEP3ehXhwaJanc2HLdxkriyPokWxYUhw7S8qNfjw",
  "key10": "2Un7TwvfUefUNJr6XzDJWtPhZhZCcE2FNwZuDAnxgynyJiKUqcHUCELNnubzpAqAA1iMY3Lioj9P1h2rBt1rAAsU",
  "key11": "3tE8UvcDz7KgsZDxkWthutLua9WFHf5LsFPXGxVPa4Lkh48JZRS7qaWCBpYRtRa7vgRLwfEAA25rBoWZyJ745a8D",
  "key12": "3EPEw28gVfJyQQCEUG7aER2YvSFyTyNrnA1eenfWwiGV7GJe5aVebaiLXgBsX747gj1D7Wek6ej3EAyVRqdZ2ezZ",
  "key13": "b5d36YrJFjzX4QC7Ktyu2bNvyXWvUGVA6vCKTm1y95QLj6G6FxdeGGetayKi5o1ajMZF5nZpU3GR1cwedUTz7cr",
  "key14": "5tyXdAj175WRRMCpsc5gFnj9oKRWAD3tF4UNyd8b57639eKbX47yDCS6jULPq7xYcSt8Nfrj4XxzuUiLaMA7F7gu",
  "key15": "5tFnp6chJvALHVqQkkANcv8WMANi95hrYocXPcAoRrAksY1iCpGuAevqfej9Xrqudirru6oYu9ekEjs6tLisgPCU",
  "key16": "52bykpujNF2wWbuHESwT23MsNZc8UZ9kxTjzzyGy16hqUtadiSYhu4Zp3y95hWvhEVDJgnqNRRnDXNXs3Yop9J2x",
  "key17": "4xcvXkXCQpjH6j7ZZ36xQvRLffVdonRkpPhtqT5zxu5VJzFyGRMrWLUpEVY3eL7o8TScfwjdKGtp16N4cu4kVxWr",
  "key18": "2CLyt22t8bvo8LwCLNtJbkebJn1BYAjafxM5nB3ioUoSdQhMU6FXbrC4F7rr5Dg9bEwmrL1yMoxQcjv7oPcgxJEV",
  "key19": "yc82UmrTCKqnuqSW6cUCsMuS8W1SxVe6H5bn2MtK96JdMQbySBQ4ZuLaCYP53Mk8wccKQbwBcKsMPALXPikKT7j",
  "key20": "QD7UwD8LV1KfxB3TFDSgVmrXANBGXzwy5uAheyStggMGGMYC5rfmeMzquvgZifzHoASvFh5Gyw9NCqYyhjXxh5e",
  "key21": "3PnmLmrFJ73yScFCX6NpRaXXb5twPcZm2Nqu44tcDiHxCnWbFnGdobe6fsBsPR8f6wrLp81tZx9CchCjMy7YvAtV",
  "key22": "4bunCLHbCgA94fhQmbeTQRt4qBruAst2rfNYAMVZxQFcsNGRqJRqje5FTNipR2GFZcoUffAjJYKzoz3NU1m1Z2iR",
  "key23": "5csHeN1m1p4ndLjaVooRuJNcCvuJQEWnGQ24K3EMaLM8o28ouFW2Tcr6sryVLtWQAA9aXDn7x43Z3vKvNPEPPBS7",
  "key24": "AeXk5YQ6UFcUbVyA9yaXiKfTKXW1tRbgh3Gr87Kotf6rWGspb4feKd8DsYE9cUjRjV6z4D3tjTePzN8MS8wsgdv",
  "key25": "3kPrdQ56QPvys7xT9QoxGDXd22Ug724RCwVz34hCuFTEWLyBaVYuihuEXkYoT96xZkHeVCkPHBTULnmcLHrTPgSq"
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
