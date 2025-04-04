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
    "3ZCXV7KUDYiHPYjixjSQbK2iMPFGmCKtF61yJpWUnecLjo4uVym5gmDKdpZvezkuigxXq9bt2WEyDm4AN2cNKrUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fsr8CXo5zJkcVtD7wYkkPUTzwKhsknLymKFEmGLjpf5TGRtumwiSF54DfTp2nEUqyjXnsEtBai3CkF6S461uRER",
  "key1": "idacYYDrVSbAmibDXK6HzhemSH2mZpsb4rxAV7WFpPuLmghy7MKMJGa7fRsVdRMc5ihQh7KkPbM5k1APEfmFb6v",
  "key2": "Bz2pnqh3nBaiDSGXa4LnPeCd7hscaRPEfsqhj2dHtgAgEvLHBntjXyrPt33WBFXPfmLaN4vLE5NdzCSWZBHCYp7",
  "key3": "CEHuSh8CuBzEPR2oiwiTNLQpRLP82ZZHLwAHzGvUwGPwZoUCKXg8UgaF5msS4SuCCTzEXWDTPfgKaHtktQdWh8k",
  "key4": "22aitzhuTiDcYb7VWtmnYEApdDJrc5DLpDatyVAE2KSAozqkmCXGjramF4mHAtPVinekcocfqvVkK5CvKVdr8Scx",
  "key5": "DD1Q8pbqM37bp9AjPkCE8vYR6XhVnqavMbvTwkVqLCMux4cvN2KNxm7P7j3knfaaE4NsXvwesd5e6MqjGjpeEsZ",
  "key6": "65TSELtra2U4GBFVViRgkDh9v618AFmzNETU12QDLm2a65ask6Y3hs3xhhZgkC5xLraEXgPgorpoDXYf4LjBKjQB",
  "key7": "4KP4pKcJPmZsaABVdJ3qEL7cjbcDENsTqV9ibzH7ykMaMLDuWWddqrsnp2uJGYfMQJQfmNxAqFeT1btwAvPjepH7",
  "key8": "55R1MiECKbSYWvUmKSwxgZ44um9P2fJcetRhXgF39wDserW7jCjt63gKpBz8Batdy3bSKNqL2JeEb83QToudh6yP",
  "key9": "2p3C84ahLgfYYWPLDDgo22wtqE94FLArmqnnV6od6JQ89hT1KDLywx41fCJDcgQ57FcazYNYEC8TLKgh5xqs9WQc",
  "key10": "xG35a3XcipVmMpwiftrWieRTBkiQ47dtmUxXU1HyNf9fDAZyoFh8DMUECkQS5zg1FQiKcBssu3LCsaqtsPkfrcj",
  "key11": "G1Z58ssqxSBvEP8SunV676FpbFAQ3R1fYj46m5iYnie92Q8uupvYChQgjV3CAxay6sG9YRRLfCDnGRXddp1Hcdt",
  "key12": "5RdYYXNi3s8pew4whFPw6Kyax49goBeuYAyn6wpMaMWNq1gkCYdVcqKtvLtjfHaFAGKs4Rv9KkDqCuSWvTq9e5Zi",
  "key13": "yf2TFi3FmnEcrvJ3Z66kDS5hxR8GTHkDgUHqPaCaXzrrVjf9fAvzxuMm7grkbJSgwG8BrQmAKWRAbHbAPNBePcK",
  "key14": "W9NVB7dzPeiZzAAosvFyej19ekJDanKR4MM15NjGUeDhhXBgjmKZbwq6PcbzNpHs6d4sq162BrfU38Q4J2q4KyY",
  "key15": "MMVQq2hWRLA5H1cwDXVp13uSgPUFBhBYuGCQ6jCwLE4cuopWVjm63imM7XdPFX7xdWPPDeixQdRbESHu1KxSxpi",
  "key16": "5QCScK9YkP9LCr5XBF49ZkcWDjTY62M4GcmqD4bVtKqM46hv1zQSGGB7kwYaZzgiP74Cp1EXZWaA1WDxfNRdL6u5",
  "key17": "3TrSpTBAexcCWenkRS4AkqN52LTxoe9eyapsJHrh9SCYvazfY1FMe8R4PQ2AFqMYeEcsCv3vBQQh8GpSnAC7Uham",
  "key18": "4jJVMJfHfF3aKvE6Y4WF3xLm6QaD1UAL3Lc3BU5GXJFK4HUJSmJWQ1p9xRga2QMwc5QjqcmheW5CeyNLNRhzggVf",
  "key19": "2TXANh5bcJc94YseeMfVUtNRZnzh118rWqY1cSiFSwMgV4FL4G5k7PipeomGVPetDFnzCdXkDb7TJRr9UPTsJKe4",
  "key20": "2uTBtXcmSCB6aJceDSRvYz9gLy2yVJFPf9ypcwEiNFY8R7VsePM5bsxMczS12oasafcG7ev2fBxFeWXtxz9tURKi",
  "key21": "2m6xZWfCfBf6LevEuMocbaxrM9QQ4EKtTHXyo7ZtTuPYgGn9JxU75LE8uMdqUMP6Lx3AFf2EwXBWSAux4iB2gBS",
  "key22": "2dRUq1zPS2suQds2Qp8cD9SHRK214KtTbdJez51raEgRvUpuaVk2xy7hLBNc8mcvFDpjue7nqryLp8GpLZeriepK",
  "key23": "5AcixTznGiuhfDRb4ump6cgzJF8gA6F1RwjYhD94nVF8KXEcfWGgWnDwGL8eLXYcos5qhY13V4kXf8TA4C18DB6z",
  "key24": "2szTykNEu4fbvdprumAAyQQZak21XpFBzQ2T2FU1fyD4MdnQZqGJkcoCMRrSaYaku9tgB5pKdDBeWUzRH7qAsRnk",
  "key25": "274uNHu9Az57kmsfJi9UDGKU2iLAfHUEPa7rzPfCqjwkkDRKt7YXBYbkheLqENxuTH3nLNJofR2bBFA6FPmctE2t",
  "key26": "2aMvWTzQwbfvyFFyuE7vqwF2diVbvW4nTDUfWEXZ8djJP2roZfhFazKdfPuRinmh8zaE36HJvva2YFzCfZAQKAmk",
  "key27": "is66ea8bqYaf3br7ZZiVQemJxUPwcZ4gXPpkcAYKQy4iYSB5WAY86MCmpVyAQsUoH4SUEioDjivkFNFDyo3BdLu",
  "key28": "32xcsujY9BYAZ75H4brkKsRPTSczvUmBMMokhPJtnkAsH6d8ybDnjTAHtnjn4pyhHuiDCW4QPtKD3fivS7Wq9zV9",
  "key29": "53Du3SGF2SNFh9XaKNzEb6D5STYPqNgwgfJcQQsKVGAWiz2XT3tJsm9WgKtdU4KX4iYfwSBkVGtb6wpKB4kKmn6S",
  "key30": "viG7QMC4EhStCYXmLCX2UbJb5vkbmWfYnijFNka9WjaG4rh3YvHMY2dz9LA6h2DSWQGqaT4swSvdqmo4AXwDTMj",
  "key31": "2iPc6jBL4CoBHAuZSzG2E5itbYGVneMV4R3MQkFcFu7NK7g5ZUMgCPLx9Co1ttARiXBLDxD4zhytV7d2K1FeC9Cy",
  "key32": "5j3gNAnLnN1N1ryPvBBaSsTuHkuySDoqK4dPWMDQiEDpVKuns7FPKgaRCxm26TKWKSMAAagXHiHJMTTWg7wxqnuW",
  "key33": "3AC6g7UkFUkurZMZ4Lc2B7ULVrNXy9R7urv5E3bj91ZjkFKr3eumjVzzU1hpMPQWVY9HBnzk8cqyfJjtYCWJDvL",
  "key34": "5EjCr9VYoCbVzVmbh3zMDFDr21W8K23NPoC7T189sWRE4Tzis1KmSiAvZ5mvjE7DVbo54wgTDYCZ4pdGHRXUcSWJ"
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
