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
    "5sC7dZuqLWLPK4PU7qh5sxQP4tXUhBRbFGWT8i4kJL6LytK6pZwrcEH62NEimhWtnxt3TVc7VrivebCvtwKPkzNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdSjbujPwgo3cxbW7Fmj5hxUzKfpMxj4swVo7sAbED46B5S2HK1uTFBHkwdQ7Ks8X4PHNhcNpGN4P8F2wfvhwoy",
  "key1": "2eYEN7UhRrPVRTwXr5eF5tgXKr9KWkM1daL3CJatgy3i2hbwy9uRkAjCyYuSbkFhrzTXrQ9fNksr3DW7E8Qkz414",
  "key2": "5emSnTf7ZcmFKviRyhxbpFGgi4R3X9xu8cVq3jvgratVvoj3noXsaVxnwKHLeycdDAc8jMhRiiTPnrURLjMqU7sx",
  "key3": "4P5GZnvW9DtMNRiRDH5z7TSffWSaK1GXQ4NvqeUvfdw3TrSnUf9bT9uPQEvbUuVmss9EUSj6GchRV11jw1CXepFc",
  "key4": "2yk6ZE3rmn8LtxTYa5oHNVgW38tjKe3o4jRxBRBWoEPZ1aFUqnUCorpZ7Dc1s4C2aZ4PFsjYGrQM3XkuzPH8rEvf",
  "key5": "5N9v11wpBfKuVLPBuaqN6WL3nfT6AF9u4CWm6x84xUhC5YqYuQ69eNw1WTNRP83hjxkdCyUq8jUw8pZ26SxxtRvA",
  "key6": "2ZDugPBCVzsCzX63k67b2kRY7iGH9o5UtoHyHQnsE9MuzVgx3umBC5oqdJZPP649ppxS7vF5k8tbubZLMpckFxQb",
  "key7": "365iB27fpHfn2VFLQPxCkpTLbby2nGPrMb7BirNPjvRme6oqYEuRyZhGgpJ7rYzJKRd1q4Kj9d758yCa5zHBG7Gd",
  "key8": "5xcdyFscfsYC6R6dzFHtovs7vw1hM6mL6PqoGGGtaEHtxWMGiKRSFt49RibjAkm8eFXoavoGY5oMH1Q5ABHMauDN",
  "key9": "65oinA5vBm3LPzFuA8UKQA5XxMx9z7BK6B2kMP5ZWP3FbRJL8vJB13FbvVRfjnwegVMcmFCmyUjvtUfK6hr1AXhX",
  "key10": "2b9LcBTzCmRhUY9zFnH3w84HNmqHf6rjhn4WNh9FeQ7avsdwc2ZuDXd3W1mtUN1UUXRBc62s3wsuhua3AvfiNWXB",
  "key11": "5jBjiP86ALdXnr78k7ZTyLs6ZaAymUQU5auTZ45s8uegbG2QKzCC5zHrB5jD8vDbKuRcscQXR2C3LzFtAwad1Bxm",
  "key12": "5RTYCEnVEQJkqo2QzgmZsNuqfZPanNk2uCjL1QqwDKht9RtSsvhUpfqGwsMc3B613SadDGDhf962fFVCszaDEChZ",
  "key13": "3cxMePP2VNttfn1atE9hEsuFwKKP9GFz7vfEcFH7s852pWtyfhjzxQfRRiZTf3QA3oZaQvBZkcpMQK61fNwXGhBk",
  "key14": "3d3tvdCihoEQzTfni7mpQUpT85BFKC45bPQfCddKtZ9DvasaZQM74urHy9UcfZTNRVvseUmMwVfoh2ZgYufQ2yuo",
  "key15": "5XCM9yx3YgSwFTAQT1he6dPbvqy9sSdXNrG1m8vcDga6vQTxBDxycZSUPWYNZJBVywNKNJd8jBdq6UpxtCQeucuk",
  "key16": "43qirbrESCQcubyPAj8opCMd7tyjFLyPshHEjnTCjW3oU5UJ2d23XkzQZfZiGgeiEvsEVnTfN6eiX544GKZYM3Tb",
  "key17": "3xQUVX2a31JTD2XM5Cp6wwJtbBZtVMgLMDMvEi72KtK7kZssgvUW9fPQnSqefjSZhawzCY5eyNCajNpPu3YMu6oU",
  "key18": "hAM48DhP6uhknDA6AefEPuxBEoveZjEd98sBncu8Sit1B4cTqqJKdwzKiYaNxsLPhj4RDFnXr6EHJrUFx6pkE6z",
  "key19": "4TZpUQAJn473zJJCB5Jitm2685Xco4QUiAMMv2r6vxGoGQYYtLtoPjMBLpJ6VU9owLF7PNuahEoBifRwk3LBv6gq",
  "key20": "BN35UUhStBkaPjM84Du47uPC5QSE8E6na94fY8A9NHAfB5krvPYGp5ZdhC8zZTCcM74kbJB9uCiNEHhkZT9Kjqw",
  "key21": "mA3qd8rZGGUHMZSy16cGeCZSpJAt7Ckgwo8PjtGY9w4cFZYxo1rju2yNBi5w5hrqFXTxMGiz75FKGnnQSLALynB",
  "key22": "5SNqyx4rPVUgy4dQvq9rGaTAd62pLB6hbaDgj2ZQXSpPZNdMFK9JdJMdAGPSKnQ69EigDnKwwQZpBH1P3etbCe18",
  "key23": "5ccmZPWh8bNUPUWJEMWsAyj9JqsAyHwhXZVygLZuP7aHsu4oBZ7nGh2E3JLe6vpfWuoFiHc6GC8CKNxTM8Ww91rW",
  "key24": "2t7LyfVSciXTsyf2As8xsnJDW1aYQKy6H49wVCxUQZaZpA6Gk3RaEg6kQwCgoRXQ5vUBJFZH9ktPqqk4B4wKLt5u",
  "key25": "2o5SAzkq8nPEMine9HuTJaExjHDmFT5ZKEjXkhf7gEv1qkqfjtTGEmYfNaFCGGeqHDai6UWfLhZFDap812BQjD9b",
  "key26": "5gkiuCmVXgxiEQs6kL49JpEw9847ABPBpYjorgUTZF3SXCBo4HFNZMmG7WVWqoxSJ7MQMfqeE1sobudqwB3BqBqf",
  "key27": "41sW7Dw6xB3tBoe1k1HkXA66RSbvcEDJfKGkaLdNfAPzyXgc2bSQuRZe1arpJCzrMb1wubLuo6hTdcaC1DZA4p82",
  "key28": "24xuf8Es2kswysVA2EhmrfzWhBbzGrYgSmnSD4nGFJ5uEHxU8YvVXLPmP92qJTvGvfe1MwbqG2tKBNawATGsk5Qx",
  "key29": "4qK7GVMbrkGQAScXweZXm2fm2mRaxeqYdrY5u4QfzvBRX1hRjD91SH6KfRZVFzSJeRvdfKs31ThhZPwjziUCmtuq",
  "key30": "4h7hBaarymt5dxm7vv4AWGHTEk9aXkD4XVwRjt1o5S9WCaqJHEHsTGGE2N5vevhnpgLPgNVYrLPWjkRi8vqcYdGE",
  "key31": "2G7hityuZSMeDVaQYgKtN5WCbd5c5pu1kcqqfqDvswGVC7AMi4SLadDReskQD8SR2gECooqiwvqJmZgTUmraugPx",
  "key32": "4BytXKMGFJx5GUmZi2f5kMenDhrRepjgJKoaccb3P6SdVa9mvvbGhWvVgETrGiVwZB8H8MLSqtqQGVnYJWLd6CYz",
  "key33": "4qkF1SxBE9ZFrRjdu7ZiKdELZQUpCpJQ5pCtbWPMQXMYPdiwkZVDGUHwwdSyAG3xQ7dUyRQHTuqyWeiXRRd1mzcM",
  "key34": "d3Xbk9WBUwk7kDPY278Xf9bR3PXcuXYpUW1jaReFdJkLPHNcjrNq59kHBXwJsX87ib2d6zZv39DL6kde3SDAVSx"
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
