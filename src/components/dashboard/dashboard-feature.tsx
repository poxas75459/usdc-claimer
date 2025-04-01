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
    "4c5YyRk2u5ycxz4fuF8iNoCncbWcqnqYjJ6w7ZZwtokDnTGCgxXpfYzw4R137tiQbJSyzv4TzbyYh5ucATG2PsGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dg9Tfg8mewVPp47N4eAdBcQSpF2F1oJ7jWJ7HQWzmnMNAP5887SV8TMrshPXNnYUHL1FAzgsbgjfKb2D1BkA7PU",
  "key1": "UGJUCTZkfdASHeE9BJDCurZVy5K8RgTQDoRYA5UTqYxxTLiW93fEqcMachdJZ3BoYqJqCg5souAEEgEH5AWDb7o",
  "key2": "nFA41UszoehT7GgPbZCvNc2fjWYGioka7hvPVZN3WzrcPWmdJfEYuZr5bwmWNfTy4zGVdueynJCTEZCB815zWiS",
  "key3": "4DTH1a4fSag3fKBh2mhXZ5GKEKaB1EXkLVjSCbhHs8u1Kqxz69LEL7TbWeJFqxEH3UNLUDd31ZRRtBY16EAXd6ZA",
  "key4": "2dHsnE4qFqQdYUZiJtvRh6JkjHG21zkH5Ro1GXFn8MvduNXkYvP5CS2EaSDbKiCyaHFZS3vf8uMpj9tgyxpFgBLE",
  "key5": "5Eweqspw8zHhCzxcfsp3BrThFxKcS4SV5LJDx2EoXs5kvxW6KBV1Qis5d5ZSFDc7hVwrzMRUoxh7BXCZyfKsezhY",
  "key6": "4LNhMkwyXzknG24LGJThuPn7bFhGUefpn2jjudSB7sxGzuAkFb2XP9Re1pb145aV15nEJFT78Uj7hQobRkE17o3w",
  "key7": "4gvseN2CUtg4e7k6tm5hdv12HGy8bSc9DUQakRSDmCbJMvXz1W4znkdcJHZSwUhB9uxtdrWo7KgedqA91Uz5EEPt",
  "key8": "2X5QePtBmA2MD8TGaTwLoXxAjLwAnTHRbhyU4SCrti7tDGJnFgNEYqFTdcxSYSiBJxwgYBm52b6ycj53jN5WGV5K",
  "key9": "3tw4m2ZqoXYj5PaRAFyj65XG9VBHNn7xbmEk9MmnPU2gdZSiLDbbAtUryDVviuh9uQwRLQZ966m3VBiR7FD4SBcF",
  "key10": "aucKsAGd5em8QNftY62wP2Uhr5KLSr2FQbf2NaFpdr6yPAydoAB1JgP64Jr9v4Tcd46vAna1U2BgJFsjqNwXoE4",
  "key11": "XLYvPHvsahhPkLSffofvYbyPT4kiH6HWY3WMfsKYY1yhMWa7FkFNEer2SkedAY4C2pEWQZU6DP86tPfjjm7qCnL",
  "key12": "4EAdRBoxbTuBxhfEyri2hTPS5FJQhwYjmjvnkrLfaVXp5kFN9UT5P49Md1pe3tg3x4J6wqwLiVuuV26VetLx1KqX",
  "key13": "2v82RyUXbBth8CsCEbagpout3J6GqwyZKnAXpsk6tgURNqjcdr85z8VWahooRsbFEUD8z5yheKvEW8WQMDp5Aun8",
  "key14": "3ZKLBHihYZSHve8XUQj7izx67u4RMZouq7uZmgi238yGYbPsZSie5xZ1u775YF1aESC7ZLFx2jBUZzSmZECbeVrh",
  "key15": "1kKXezYpkZrREW8DtNzXHVrkbNBR6vFR8xxj1Fy9f8yqq6RDM6axj2S3xaLYx8bcYjUkQzdBvAHWLY5sWVvxCVV",
  "key16": "HnnFuTPVqtyo3qGxtWHGvoa95K3NjyVDWPhHb2KV4ynFSYp59bXpHG1VeiQr2g2RG6osqHGqQBZ8vjjcNJCgi9R",
  "key17": "4reiqrSdqCCCAT1TnKFT1ABZdBtcgNTf6XXKBqZtFGYCi3JThQYCDrsEeuQZq2zREKW28ZA1Ty2eLr6jo2Cjomx5",
  "key18": "MJ1ugxamzzZLfu2dzVS9n1xCuvEnBCXSBFk5tD7iCtA7tK6rU5N1dmHGNiA8zQvdkNSNoKcDuLxxpY9B3wbwygo",
  "key19": "2heWsjtMBAUWM8jbvDfXcfhkqzMtKERuu8gUZTpLuxczhqWUBR7ais53STqs8GTsnaRdnWohrsisESB7DHAyW63M",
  "key20": "5ctVCjGTUSLKp1FnTvjPyALZgBxvHpPLNLwAJDd4RQHVANAdPmw3gyeEYqWBXznzNeYSHViYPpf9RuidCVrdUtyg",
  "key21": "oFDpNMfCToSvNpnykA6yuPjR9Ez4iZYdUairQXGQc7traN4s3stb25ETSDbuiRSJgyG7baV5xxqNqrNPLTHNfco",
  "key22": "hzTVGBWbhGijGNU2uPpDxabGvPppQkxFJrtXFkq3VeQF18K9JnLNtASjJcu7xz9yn3iopUoZtBve9PuiGv5Aux2",
  "key23": "611ayAy6h15knmUex5evVK97HD8HWJQVu9HdbFHgGRK6q4gEATCDSUdTUb4aFAi38CHn33Q4EmKRZ9RUDHV4HbgT",
  "key24": "5HtLs8kEPNNuEYCrZk2q6azFyZaSkqyjTSm6ZRCNpj3oLQMZR4riUTCUpzEJcHihyziwLdhvnCC4rfrRCsY4CWcL",
  "key25": "51mnq7AKCdURaDPkH2JwMMWxuAFPKvQgWKGVnRrhEmEcZFhn6uqNSK6ENYyD8tuYyHLywtshjhvdeREZN88TUTFc",
  "key26": "4WRkzVTgaYnh8UUFDUFAhi17Fe4VnSZ37MQ4J8qroHESBnfGYAQYXdoDJXLV844WjL8vTsc7NAJeE8YnCzEEnkTz",
  "key27": "4MNchE1XHH8iJH1pA95bZh1Krhrh5EXXbqNx8c2WwbXmoRC31xtKXqAkcyBbGFvJuYGAL4U1j46RPhSQ1zux4Ahi",
  "key28": "2vhDrBATLVPbcuBD8MTaCGuGoF6xs6gvtDZq5CQUoWsUmWtdPnNmTQT1ME5SqaxyZn3g8p2CE32R5Fnx8LgSQi7D",
  "key29": "52uvxPtF6N4YY5LA2qn9jerP7ztQjncaFnfJyc1MgE6tLJa5e9SVjLW47cVJqUk3czMh4sgdKa9pcKdH2FiXhSwY",
  "key30": "EuVCFW1tDeDPApFgWVk9ZXTNeYPu4pRdtFStTQD5Zppf1iHYjmgFbuyT2H3waeoRD82EYUz2yxP3Pde35B6Qw3A",
  "key31": "4HRKkdQ6RsCgJeRzSVSkLTh4mtFDUk7ma2NpZJZk3jb6Cm5GgF9n3E6vLDYSB4JhRqLvD6qtdr9AjheYWdVn2AEX",
  "key32": "3sLnFqTBEPynoc95awwt72Pu5gXbVW9g1nTFahsMvrByCUrXuNR5VLZDCBstyjUxZrUU1fckKucyZdu77shS8wg4",
  "key33": "3nSjzPbG3135zYxYjtv6ePh3o44kka1jnoos7euD21YNYfAJf56u2pH2cLfCqjtHr4H8Y4cAXJ2tN4tda21kzvLo"
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
