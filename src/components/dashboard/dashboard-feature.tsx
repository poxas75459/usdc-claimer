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
    "62hC3sStYyt4Ra7y1ftwCDTT21rcYNL8St15wq7RTVwpehShfgdZZXebudxFnLPf9rrM8oBcbuqocwtJG2NKNh3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2kpmBTf2pG842qRHCu4rnsPC3PdgiTQZcksetM77h7goJCEBaqJGFfcqGgM93jWa97aeWHdyYVDzBiDfomxZ3z",
  "key1": "4JPJTG56YX9kDJpdvun881KxdGSnjcH8V7RBVrGZarMvP7fQaFxuV1qk5g2oRE56qxsfWR8LanJWTPqE7X87ivhn",
  "key2": "egY4dfky5DwqQRByp19ck5oQpJikZyNKgqPyX67XVVvhzGnrm7pJtUBPjqmqD14d7ja9G4KP7AsAXH82XeoSHoY",
  "key3": "2oQpMoPKc5TubfjALuXbrzNrFM7FQ6oNTnH3rakMGWcFwpyYEkfZgms13tFeP5xECoAMxkGHGCXpc3Nmj3tGwFgL",
  "key4": "3iNnSxMYnYbr8kBuuWEbNMFgqkqdLc5c3mSXHhQ14kADXy1m74NHQ3JnPzfguAB8ED8TeMqov2q1bMVGoperhANC",
  "key5": "34f42BuvyRBu5jNYL4YuwKwhMQqdecK43m8WibASUXMvSeFHN3nPeks6LAYigJosMTJBV9RkYsGCXQagA1c8yFrT",
  "key6": "4mWURtFJkrj5BkcxTzXx6zy1L5zmQ9Sxtbqy5ztGqfeuPLiw3EPGeKJxjDMbP5YTvcHwJB8DtmRHVVFnHiV46ZFT",
  "key7": "3cwX1RKBBb3WyjPQk3afvUgGvGN7Ma9nSbmTLW51uagffoyBM9bCrofJ72mek3ruFzAL9pJi7YMdDEjRXBp9zyNo",
  "key8": "2qGLXX9Cc8LzpBvgWVSkbV9WY3xUbZLB6rFPbBk7a8krAGb5kLVbtWDYEFvY2Fmse8J8boMWecxSviSLyYwmBXRP",
  "key9": "4RSLiUNmvk993DU54MEnm8mMb1mifEBnJq5FDY6cg4JxsJZtbkt3XUWsja2UzkzsiYC32QKvy7xFwbDzBaS6x8tV",
  "key10": "REa9vob48DKRd1BmicSUXgoMYpgLuRhYLLBv45CE2TCZaEFZzt6VCtvmm2ZLbEU73ZyGXerCx34UYFfeyaW7Btq",
  "key11": "3PE6DrzKuXBm84fEFg4WCGrgxmgomLPU6pHNRHNBRBusfw869jE41SHD7U9Z7tjkusmPmvaQvRD37gUGoKvQjdt1",
  "key12": "2iZDbmMUAT9f93gmT5Z63vozvrQxZELEvGZYvyqSjYo6M3fxzBayccpnhHZXu83XZPfXtxhAihsPaFmUKDvvvJh5",
  "key13": "24SUX9nHJeFCQnP7iFiTvgsXj5pYxgk3YoMVjQceqi2Z2oNKJ4yzMUxWcb8ugqymF7sfAJNSRXg3Srcs786ffy2L",
  "key14": "JioBtXoz4rn2CEgEvca4BzShZ46W3CeYrfT9Wih58PqQpsxWWTYK8EvtDmoVwqfXJg3GvTVNDpSQxxFaUVBhqUN",
  "key15": "5J5r1dtzRATMXVwKVYh8FRDKrzLJmLMDbznw3LBNRip3jojTZg2YsArncg4zkz76ymqKHoSoHCxLK2ZUygdPEWvY",
  "key16": "3Rk2HKPMoHyfKtcNJMGXGA9ayQqUKW1TmCxa3tPbkH8Xg2EZAaUMM1A969R3aErDwZz42byjorMF4qyJTb5B3V5c",
  "key17": "5S9cHhEMEpwpM3facPVgeqBpmYL8RqscZCUL6uka78BuLwfm6rBaYRbYXMdDavdHzCWGCHrC9KKTuR8PQAG2WGje",
  "key18": "4s4raH3CRDRHpGG62T1ZeHVAJ9qvoxjx7VDeGK5b3h55dz8U13FFoV4iLfsTRNbBNAnjooDXjCaJRMFLJoKPNKtF",
  "key19": "5BWzEZhcoJBdejYQgyGcQiCLvnSbAZdLm6zPzTKS9ytCjfk5qn1ASgpJJt5q5TTXoqnYo43RnEuSr4aw6vg1CLvD",
  "key20": "44gzFiMNPW29Mxvv8dHxBfjqDkmjVAZQeeZ7nsW4TAqxmqDyKfpFeyCjERjjQsi9nYcaaU94rHL9sRVGskHCQQaU",
  "key21": "3cj8rZH5i2oekdY4ZwtSnTyNa4qRrk9eEWE9Fn5FMMV7NQjD4a9Utcs91GrLQ2f5ctyFSuQJ98h9aqiLEuDpkrwM",
  "key22": "4vEaexF61PFJRSZh6eb8XCLYGF7wJs7Fbixfq4vdrYNu8nZ3dtnnGpzWqoSjmPBay3ZvJcfiA299QfPXiy4T3pW1",
  "key23": "2tqSVPD7AxgngbGfq8EPFWnhGyZSR6ZkV9WffqB7chLKqLXqGc6J3XXo7RRWmHguaCvrjzc8t5tdGgc9MHSet4CQ",
  "key24": "38YoqLP71k4xpA67Uukwe3zNpmLZFQVzeiYXEMrS18qdKZFR6yw3zhJzqVPUEt6rhLGmrmvhHkmp7oRmA6VqwWEx",
  "key25": "4dSxcLbfB9Nv2RsBxKGE4Y1tq2qzTyKocmgkgMdYnaXDsKdF7nkXs8P7Y8NDdCXhhxdcZiRm3TT1uCLSBuBnwiaG"
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
