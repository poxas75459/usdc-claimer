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
    "5U37M9yXXcrBRbWrGUw5b3pwvXe1ELEGMbeXPCwU5U6ostsDFRTQ9cjZxjqCEBMrYmh8FQH2aKdEGrjPLqVcSdxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZxhcSfxLY5Zv466g7PBy16EQoNxok7vnZL5peRtP1CCLWSEbk3zvEsPQyMBAVUByo4GEpMCjc7UAy6kT7fTroya",
  "key1": "c4GGc5pFrq586xp6dxNCUDjLgs9gaEevKB92g98LfDwsLYN6Gng8E2VjofTywAwf22MUMCqR9qHdCW7fQVY2SJ1",
  "key2": "551FnZyBP1jvTTJqcMHJ2PE8CmFxfmG3zM5N8cGhq8eX9ciqwdsnN5KMZ1kBxcxs2df75ZhBbwZQMQNS5tMQg9UB",
  "key3": "4SbUJHpGmNGnqMcM1dFz1bKSDv7c855LmuCnBUcnaL8HukmW5WY9iyGeEdcjqMBhwpdTdNTKbG7M4qC78zSyy4Qw",
  "key4": "2EjE37WpZS12D58KTavwateSFsF1KjeuMTEz749kBMwsrWL8qi86HaRdHHxu46MgzFj2xxJpZAJNgUfFtE7xUHsM",
  "key5": "2tXw6k9Bk369vHYEtRxrisR4nnBn2D4BkYzQGSpjj7HRQXVi4bpWCNgPTJRKUcFjiSBceWwwKQhSwJP4p3DfRWS",
  "key6": "2vSe44N6BhwecxaA8x9yESwEFNo2XLVMqiwvamqPh7ucg65CqaVj5WQKpwxxcZZTWdRtqfgfYkjNCMNhFHzBRziz",
  "key7": "3sXeb5G5kCRNxXN4hFbzKKq4vua31M8pE21jaQRe5BMTFomwLfg9i5q2FcFeAdmE91ZCw5XeMjTybm7hj9MVTgMh",
  "key8": "4Wo6KMeBYhqPFP4bTc6rkkr1nhfJeAspgDNBcRRfoJj1BTEd2ijYpJrqDDSKMvtVa4aTEr1zqYcvQynWtUVZzFe4",
  "key9": "2zY4KfgdvaZyJwnSgRBhSCesg9THw4E1hYUd7Dx6hMvmvYcFNBKFv96gTcgT8mAhFRzvz1FB8ALb49nMRnJ5QuY",
  "key10": "2vphAcbCyBT8A63pB3YRDRQfbVnkU5kDadpMq9HE1T6iQJhwn7XHaM1P46Yu5aRSBmoGYUpK4rYXUmLWXbgmqjgg",
  "key11": "3XXgKPDSQiKc7NJ6rjQdAVSfk39SeUS9fHFe3YXyum6CmbNcu7T661LoNRg5MFSbLDwfGmYekTCih92eyHgsk8jv",
  "key12": "4Cs6sBrxDEN1DjmPyNNWxTPsAAhMUd9LMaHJfcswHrUH6DDF4Dfo1S2McK2Xj9d4BuRRiWQB6cMPhPrstisA7rHt",
  "key13": "4H1MW5PwNgmnmoauXq6TTPNBHZ2puFgdzzPaQFqjzBuso2frZfZ9Kyjje9nx98suEzc4otTsBmY6CHZ3Kh5t5mzK",
  "key14": "58EyAv6CJM7bzS2GS17UpYciAJwgaadUbZ2wddNEHEHKPkjs7BSCHVeFcedCouW2tXax18ACtqoUbyqQK2AcrLhf",
  "key15": "3B84q5RWDbvyGebsLAydfxEerZkBZFf9nW8X4SWfW3tpG92DKLKcCgek342BY5MCyBvvoJo5nYUH5X9rEas5LHEc",
  "key16": "5nJmg2Ptez79yYjfgD1FHhLip3gb8bk8rhAdkaDC54kn9sJTKf8WxQb2oKZW3ETa3ZyohZhfVbnot9DdDSAywwas",
  "key17": "4W5zkCCH7wvB3JaCTCagHZCq4CcvdbVLrLXPs8FxH4RJvHiALZgdwoN84t7wnkMUL8eD1s5TeGGwGAJtWCD6E6sb",
  "key18": "5VadF9yBZcTPxRKxsFE4saFi6BqN9TMgAF8FNnisMfmQjFN34pf6AMFriGwi4cJho3zdtaDFtjBBRefEiM3fEN6f",
  "key19": "G2baFUcffxUKH5VRmpqsV1fyDzBsi4qRiNCAentis99rncgoQeSphxsymGRMnYDdYLjYYf8ckgV1rGB31wTR9Y1",
  "key20": "NagEKyRtSvMgQFp1NGae2X12ftdrQcfrvSTHeccBWKwwwEQYy2zKBmWXiepGG449pe96hgJvtMjmzF5Tzh5BFzc",
  "key21": "2fvfaAjpewQ3SQ6WvEJ2EjqoG5jWiNFx6t1rqknMYKkYigcomdZwfijBoMhdn3QDMjNUPNKLGpmPWtJorc7EPKA1",
  "key22": "28DDXH6fbgqjKiXaKBUDFqhFZ9iFmAoSCGgGFhqd1oCZA3PUVQZJZwJZLCJGtXRQ6FceThLCgQHQVkoRsWSLyqg4",
  "key23": "3RZdS5dsjA2ZzFU9xQ7HGXRnyQfVSyR7RCKUgXPY397XwGXyFQALHfW3fhDruE7c64FW6dDbSGnEmCrdDqidhbmw",
  "key24": "2emQCz16Q79hBThWyJr6ZsAJNMyCGKyjLVh9SU4srcXRYMoKBQkuGqu5YhdNr4fM1RaemCUvKvFH9Bwsw8vqU9Db",
  "key25": "5pCLV27auFv8bu3LGTY2J6WvJEBESBLwnwsUdpYjgzkWVNYiDcifjEWQDnBijTSv2uVeLrgdyokG7c98Avme3FsZ",
  "key26": "RmeGSBW2hqoMwMp15RwkoEiThgu3TnjWF4rsT5iM89XxjSksPHWKFXHcw6eGF6EqD3QEWSswDhRFBS58aJYp7LA",
  "key27": "9y1JMwbeMX81t3y4eoLq7zke2D4nAQSaGYmbCy5D8h1sG1Wwt8jS8wy4o9regfyiSiRXnu3cKYGJcv34LhLPQNY",
  "key28": "2vmvq1CSxAnYCucruiBHumMde1tp8ScmgBG8Gk84EaGakc4bHXjXKXaaFja1QEAn1ojqsKdFNNKy6gZ91qopHPAj",
  "key29": "2haapgR622uuxKdsGVnEHn3qd5bc1LwyjKrDG4kMA3MAvN7mqGsFmZng7ZBrAfTFvRxXDULuvnDSzRVp8PNLcCNW",
  "key30": "4QcfG8VqMVAFbSZPf2Xss4EEQFmo72XYpz3pGNiXr2ceaRuDQT6KpaofcoAESWZXRDPuY48e7Bd6qSaT16tHqY1u",
  "key31": "VapXrBxjsJg4bLq8eBjcK6UpDmnXv6GV8cWx375fPHfJbsGmtbZuu6uby28HjQf2nqpsrT6rPdVzmRuLQMD3utz",
  "key32": "ZsbzM3VaN9eETkgnMW8fLb7YS5zE9n7F6EbY25zxTPSQiaJ4DrLimUAS1aCot2vmpeXRqT3HDgjNt1qXFfQSRsn"
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
