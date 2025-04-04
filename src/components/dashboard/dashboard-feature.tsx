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
    "TW9eRBUTW6h9MVfhNms83FdiDhr69ucrz99f8ZUWJSVwKZ1firRJscbPFJyeLGoKWR9qAJVXKN39Txg4zdMVLTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aEDPsVSvYSXQiqQ3P1Y74EKBHKQwgZAQB6DKcqCMPgGpmcmbJukBMeHwnA4iQ1vDbvdqV5DfZiAZEMuM38DMH15",
  "key1": "3RGczR5FGiuaaZHXQZv6QP7ddT2NgyEb1E7AJuCFXokQWGwRRi6VvFUNGZaEe6ds6X4hJ8f3uuDsYRZPMKhjx42g",
  "key2": "2utTBsqYrHBNk11RRk1PkJSL7nNieqGXxAvmJBNNiXkcjG32z85ifFcf4QqnzdSfMpcgDV4BQ6RSCt3XPUXzTYJ3",
  "key3": "24ddy2KEBcvZCcg2yyA3TH6cwkEs3nxT2qdEeR2W4aZaHuWmuBmK3YTMfS2yu7oiUR5t9uBipYJZMJkB4wL6xjam",
  "key4": "42na1Z8cCCxMFKq1zfwttzDZBNyvE6W8eyKEKZGL8sYYbHEdXz5qKpPwM9ga4LQqGw6dir7HRXTPsUCSZ3hcbaaP",
  "key5": "2ou3PeKr7L1rAK3UZKs5cV4Cemofm1KbiEuMSw9yCDuVTyufCx2aZmuST1Yz8WwXTRcEw26qDwjZpGXABYPjmxtU",
  "key6": "nzyZqNqoxgLC8vRR8j4UxZHRGXVFaoabFddixjeyAA4D3gaj5iVSbHd5XSAPKwXirACFbXFheiyLaMXWfjYHweH",
  "key7": "4bYTEMBxb5esbgQ75rNAyTKDYSvULfvbHCJPBiFWeXUemQMXfNLJgCCY5iMr69GCkbfiwzs6P64CUdhXqwL8UxcE",
  "key8": "67QCYVvQ7KSszVxywJF6W8YmHeohffv53HBxSaMM6g9Rf3pb2xZ5JMi2aRbfUnw6gXAQ4CQW6a9TQBTMLXxpmzMM",
  "key9": "2JNzVjiGQUNxHfn6AfZWjCzBZdJy3YXthhGqeGYpTpcGrKiT886mKKN3NjsgF3E1XotdrgrVZ1ezbwtypjq1ai7A",
  "key10": "25ALEW2DtMUaQEW6upxHiJVTELei6xewHXkMDmUBVGEhh8g3g85YmPz2auQEyRQoQymwLuvi9HztBH3LEdkubEcW",
  "key11": "2ixbzGz73er6sXTX3GtcpsXB9kVfkjx325UtWpKBjRVRK9sqqKFcoJVzW45sWjDWhqA8pBkJfxHhDgW8wqVHXXkw",
  "key12": "5cPEYLWEazqoKyu7sbGWomHpR9UYH5zFFD3qJXxbzS9X4VuCreZkwGGw8TZHMQdqQ7WsjJduVADdjkopqJfipegj",
  "key13": "3y3j6BEdwToehjZ9DsJhLd5PZSmt9GTcPiLbcDDTfXCE3PaKAqw5jS9PrY1KBeDoKkTH4FA1mZSot1W4cN5kdLDP",
  "key14": "3NK5Zzcr9c4MADPuhVbcJ9g89zVk41WqixedM9JfNUCMjbpWczWe7WdttKjtc3pkMoT7fhqvkGBeRQtBcHnuq2hD",
  "key15": "3rXGWJ1PanYLGwkSiXDypqFNSUGePpgyanAc2bgCPRWtsCUm1SjmZ2C4EWmPqMPVxy147eao9J3Kj1Qob65UtM7g",
  "key16": "5Uh4SkVPFsrALjFEYTPCxxHSz17L8bXNLqtRV5cpmgiG3HRaKsvFJR3g29vWHBXMjumZPYw6TvY6DBtmzM3efpdw",
  "key17": "39H7C1XEYyPQADsog4RVToE7NwYYrTXA6SR4nCTAzxr8aeML6aVvBRLtTxbFjUdziQYKiE66xt6CLopDjj9Psv46",
  "key18": "1Jfy7nMMSYhEExyapMoC8X7HbTc174pXrzwJEk15Vq3eP6WAM5vSosF9hsrRrZyYwMbte2hrT6AoDHdisj4QF8H",
  "key19": "TuJg6qYKvJ6K89QSYjnz5ucAh2hyCiT6yCZWX8C3NZVYbvawwsZCV5NrPdWLrux8ATDo3A98s7wXqyZEfyjRGj6",
  "key20": "JgK6j2T48tcpdk3nXLq7MRHkQHsA88b1bxZALe6BQxLt5CutJ4us3WHotaSEaKwcMWoWPz9k2dvfVjA4ptUpaDz",
  "key21": "5HveKrzgs1debxCFRoaD77LGoMXYdqbs551hzFE7C7mx9madGLo1xYDabGAwYY8mzSghRy2dJAReGe82AzssjeZv",
  "key22": "zRt5RBY1BFjsHACk3FkVv7ja7Le8KaTdtYg4HcSmwVKr153NFRX4gfqXV1pJcTPnmhutJ61X91EC7Afhqhq2m2R",
  "key23": "sNCrXf4ckB9S8ghkccTbrCRzeGmLweRcRbHJoTjbFob2fM5V9yrB3Dz78m3tne7bFdVEFpBpcjN3mBVCeuWkmkA",
  "key24": "5uPrAmPHbMCeLzs4Qpz14it1g2yb7gUXrZu2iRtAFCruc63F8zQTf2HxgWBNoaLTjXHu98MWCcXrqCUvvKwng5Ei",
  "key25": "ohsLtGQcKWBMXbnCrqNWZzvTpXbDSSM2FEkNuLJXtozAnbQFkoW1QfT9xWtNYH4WwNGpUqVZNsVS1dgx1w6JtMa",
  "key26": "3AWSVw95dDKfqRiVj2PRRaqxQbtboykT7RNQ37M1xo1TG7R3awXywWmHcxeJuaRjFmHnkDL1URTwKNwXruWVcXAP",
  "key27": "3MoDTC6BKGzUZABv7AyE16oPKtSTXdgvihLRaSPQMmBd4XijvKknHQCWXn7z566EQjFKg7ZDSkQSUPtQQZSMuAZf",
  "key28": "5Zxiggn3ymQzYjS8ePCvrvqEFnf49X75S45Fqko2QZnzZfE5K9XLKrnqSP6kithmuq68ULD6MDQWzksKZCcbL5bg"
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
