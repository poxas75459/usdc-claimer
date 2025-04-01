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
    "35AbiwbYegEUi6SBwuQ7iNWdH82bRH2moirVNqUrMHycyZiY4gPBxnV3sMAdaShAgKdngLy43QLe76tyevkcurzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGz2pGvoRjHDszfCpWDbaKGT53uWsNdVLW3DhPgxPcvm2KnNrRRqiW58chFbmBikrGghLSo4F23AzAbYRXcdCP8",
  "key1": "3zq8E3WTZtiUP3XJrqvVZG83Hxg4nnCPmjyHR5SqvHWsk3MR9PHVc8g9D7USyWnYwvjhAC9HLTxg1nGykduiUJge",
  "key2": "2bibFDAKL42gRCkrtNb7DqkkTJM6iUosy9TQM3i7XZEBsjrY8Qi4Ba9apSPvj1JdcUFd5BdWtdtZubh9nft3SLK6",
  "key3": "2odA12A2YNGCgGH6yCNn7NTTKNqr7Fuw69NHCEjD1sLA9RneUj6RaqwgkLrjSrC6UNQiivnLnt2MMYr54tD8oosX",
  "key4": "4W8uk8io59NTChcqp8d9MZEb8Wm1qyw91UnSASSxk1pBo93WZq6EKHcWmyZ1nMNGRTxTJgYz8w9qvhDJ5p2hdtMH",
  "key5": "2W5htzd6shDXAAxZZCJA71NCDmmesyZLBZyAPvDQAaPg688osYbmneYwvfsnZdabPu493bLFfZugCKaPJGe7L6WC",
  "key6": "41xuUJBHz1rppAzX7g37JkKcq6TY8TGZr23roY56162f7fQMGKuB1ScHDQ8WqzKzB6H4yKR2ZYFRdLxC8c3uZxb",
  "key7": "yJPdxBCMDuXC4LNDALoVRvkTiBtLRqo1E7N2T11FxCFpv1qij38GXoMfNPGFJfPkT7JfaQrbAM225DhHg1FXxVA",
  "key8": "Rfepr6aNQ3qx6pPXdREmWpdcetKGdoC2PobPDWb1vWS2Hvzyec36WoPqJLn978pWjwASABsjKdxYrb72MhRjJ1U",
  "key9": "4ms3hK3xwtSTCGKQaxLE6it2pDxjquM5oQFpfHHFjGL8fn5QuqkL6fPLhrKDUKQM3BCcXGhgYzWLPQiVu46DnNnq",
  "key10": "4PKwjVo2bCezPC9VHS36WVHgJdWMV9W2iD37PkAAUDJ4iQhspZjUGfQnkpmDEtUSqpBfFFvj78PVCH4cwzJ8zwdj",
  "key11": "2RKqzc5NSvvUkvA2AEwjBpbBjGXt248Z7jAZHk1MCy5UNQmxCSYfmRgcD86G1UmXcGHxpKAypZr6B3TXC9czTaqC",
  "key12": "3pR9tG4e44axgzKP1LUQfogkcgu3TmgDyvGd97ZUyV9usqaHdvNy5diHd5FEZiVWsXKr4vsaaae6QJ5s7HKGCHMf",
  "key13": "3chhxc3eFvpAGpEX2rowFbPjs5vicTsEbedvTgFYgS3yKBsNxiDmDNM2huh2nySL2suZFALV83gFTmmQTi8qPbzV",
  "key14": "GnRS4kHe8wWkRnY6GfXqgFB26XP6eW3YDsNZXqyxhMsGoJMPfXTMbPxpxHnYmh3E3u5KZC5S7RrQiDfwtWcLk2v",
  "key15": "5JozVhEEBGrMxHyPyhjDH1UW8M2cSQb1JDiKsnMzZMoJQL5gCE2KSpog7oXeTw4BQDgvzRgvAeBkbLyTsBSoVQqx",
  "key16": "4fRDDor9ptBNM8M7nToDiv6ExxypUcLutQkXHmLJqLbyXY9C35LSUwErbqjHueNEs3HizT7mtr66YaEwtQU1mqny",
  "key17": "2mxPhnt9mfPHocHHUPyTWBtuG3ubqc2i3YBo2BhCirbd6jHFpEW3sceLrjdGpX4NunDydrf9G5nKwGNrvsKWNA2Z",
  "key18": "5S2JJM16rkKa87ujDX82BmUsvDQBoLfGTP6sLUo3CzMGazQu93rDFVYekanntpaTmvPAEdXghRaPv4f1Jyxj1Ppj",
  "key19": "5cr9xzqWKBFUH3HnRvCEPYXHsMYacyMpJSEJEJHow5KQJ8mMFwxRTcGaR47ATgPyYzQb4YSFauVCpxCaXuYVkC1o",
  "key20": "31JucHmqP3YejuS6u75g37enVYfSGQvcSgL6y9mLfpx2ECUBeeYwEjRTh9uwvKR1zX2fw6mPvi5embScYkKZwqdV",
  "key21": "5bEko5yCFMZnZBx54oPhPfzb4fAm15Z5iT377GbJTcMuXZJ88aj2c45RPEF7e1NQhm1wEt3Xq46gs5rGrBTnR6FR",
  "key22": "5Mv6Rih3ruXw8VcSnehRTtVzA7BaXEcN1b7pzJuiA9GTbsoeBLbaG8YTHbzZyQBphxPehhhLzTBck6aUCbtWh6fk",
  "key23": "Q1q6q9BA61778XuTGquuinzEk26sdvJPx1fmdi3x9jW88s27eWG5JxuiCpYJAAy2dgmnVM4DXGmtzMJZ9r8m2XN",
  "key24": "V7mYZC1jrrbx1rCvzgZwJX2aHozg2iJ6EjxR2BEcdzmdQHKj3eBz4X3zytPCcFH1pt57dTW31NJRhESXPQ4ezYq",
  "key25": "4QWRaVPDqV6Af5PjsYGM92DhEy8ttwy6sf7cUkNDqQcdLzC387Xn6MDQd1aTpLUJYmPWqGzpMCXsBGa54z9H6vvg",
  "key26": "3PbGvZbcNtkUS9xa25t6ZZ6MvBLz5C5KJ2ngTP7Mqsc69bUwmYSht8cxPZY7zwbMmSrg5SYtAZ9Sj4Eh3XjG1Xda",
  "key27": "4AnCQKkxjBPy4jXsps9Y8KuhpHDfa5Jg8bQiL8oAsDPh5pnEyNf48TtiesNbAcEMmHH7Ti7N34GYNVruR6DMFW9A",
  "key28": "298YMsP7NFNCF27XVvga1XdugoPeD1Vy3SB2hUCxCchKW7B6nhgTsNpTVbXwEYqhCFPucvVYDRuJhhDWMWR8wDQX",
  "key29": "31CNmQcGWTWPEtkG86hDbuZUoqu1r4thqdYgnLjfNCkujdUQaPr9bEHnBvcDwVyK4AsCMD9HhmYVFQBQ4Jc1hrPo",
  "key30": "59PZfYHBxFLmYWoZXCoUy89FQ5uNTqhcYky9mXTfXmgXE6ef8BhpSvDXWHmeXqKTZA4msZQH42YmvLnwMFnzL2hM",
  "key31": "2NdxHqeS76k1D2DgujaMJDwicBUDNoaLnY9CEyZyFiQuaCnBjmpqtccgopoCWzcDjWibbtgHVw84S2MBA2uB21AQ",
  "key32": "3rrU2b9w6VY5PuXcCqSQssKYuPz7K8XgPyJGWWYNQ7zsi7vzR1wCG447djfuB8Lfa3ouTF7W9kSX57J5SjMWC2bQ",
  "key33": "3YhQoNDRXFrKpNrJ2sLc9oydYjZc8FM8J2jRh3bdqWz7iLoG4ZdZhUEyutXqrMndwEHgT95uiffDpAFNyreRCLPM",
  "key34": "2WgTWUjaJg72v73k3gSSeTPmuTYSNL2wpT6h1kAA1v95Rb3TZkUELqyT1mGFxDsaNYNieWHevZDhmM9gJKuy7VEw",
  "key35": "5Gv2Wm81xL55DKtu8tv9CM99LK6DmeurLYgVbwkFj1eR7hhUCDJ1FP5Pv7iyWFaRrWniFhvBsghTdgtM9VLycAhW",
  "key36": "TTFzTVa3BNG7B8LNLAhHyJrr3f9saFCSqDBTi6H23UGCet2CsHuqG18RmS17wHRmLnWzvrLJJJ24Bayf4R1n9AU",
  "key37": "49ksMdQi1dYsawk326DPK4HRMF9y2MUm4Kr5RvE1bXRrF9Ms7TebdAa7hKCgbbrjBN6B2XeQeg3NhvBZShHuUosy",
  "key38": "51r9oojLnTWS3Wg6FTu2B3qCyFPYAK2DvtHuaJ1YmB4VuLHRbQuQDwpmRt1SXv734U4AAVoeF9F3EbnwcnqTLTb7"
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
