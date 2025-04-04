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
    "5htivZsXGk4PNDXSuyzq9q3b8sdoAa7WuxVCHgt8uXpLD5Bbby2t3R1ehrnA7iXuMcoRvikvjxtZ4EGKgpR3sroB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35b5FfyrZHEGqfjgL5NKpisWKz7nwo5R3T8gtqeEPPpipY2v3qUPk35fiu5iUuKSm7MzBCNm3LuvirisYTLB4PLC",
  "key1": "wfs62YJeZ87uKr5tE4TWDbxc8KGDpeTM4nyobVFVfoySJT6nDC8sAPVrHsNYmqKeUetiBcsU11qVdL3png1K9gq",
  "key2": "3SkJU2sDDCHQ4y46Z5nj4Wg6QTsPhf4zfNr6GaqdyWdVBzuBVU5rpc6Ymo2ZHiFUcqLiHZcSbfq8R3Sp79ZShWWE",
  "key3": "4SZh8miJFXacQwNahZyeZtXwziXCbDPmtUCFsN2jZbDL3PQAnqKgNzQsyLoao26n9xFAfVumzQPx1m2wCUgQ5g4Q",
  "key4": "4HSioMvSbBVoNkoJyXsmuZc3iVJtAF5foSWFm4MvvvQ6oaK1d9uvGjf3a3qz6e9RRE3KCDMvqEQ1qaHum8WWbzjC",
  "key5": "ksKafJd4cuABBtmo7Spgc8c7QdPsQpa8HXGKrgcsJthR3qFcJHgyV1H8cufsJrD4W4zbXYhb8cmy6PZm3ZThpUc",
  "key6": "5XNRvxGUHjqvvc48U1h8eqvaFmX7ok7XCPogJAa1UtHH2kKZtsLFnyT31MXAdYVnLXqMbsTBeTySapHWQcSPv6vg",
  "key7": "jARhPeoZmHAN4B17x2Jwkhw8SzVbrK2x51qeCvyJArknG2ZNwTiQ67bhXncmupvg84FgkZw1fCa5iuAenuKvK85",
  "key8": "4f8ktLwwbDsCDXyzYqCS9roYipUPAocvMcc5TSw56brdRVSA1rrN5Ar7mJGoo4oPZpQHdPSHLc6NFZuYNRmDQVLq",
  "key9": "3dnikpW9o2dVNzFN3nBoJLN2HKszZ6KPMQYh7ePBihVNhu8stCRPFuoMw2UP4LSUcq6YUPkXAG8XCk6oduf8Fay1",
  "key10": "616cjnxSXz7PfqQFMEU29cv3J4vhn7bh5LJQUDEC4sgxctbDsBydRX1aQkHcZuh9J1rc3M5F9K22xFz5iYGECe56",
  "key11": "616tAQDyvtixL5JP8EziTBXtXBEtWxtdZ9SgT7nc8PEakZb2mWDtFMZxeCrpVaCUE8JJR4tRLuKGpJRHiPpWLv5k",
  "key12": "2MGAfXjwP7n85Vr5TAF9A9JJGN1XwJrwCpA42sCwhmWQJWwWJpmg4xB45f6FLxFSRe8Yd5YDnJuRfJR1FiUrxAKc",
  "key13": "4UZsB3b2Fjr3L2z8udapsHNASJffKK5MDaK3hvzsMERLhYce91GPVQBHVXQbjiSxYpyX3EVR7BTDjJuyGsWg2PWW",
  "key14": "359NtvaXQz3zk5FQ8aCqkSKrLXJWqBfbB5DEgdZep64H45JaK7oEBcAYzdLZqgdw6WN8XFGyyUGzNUF6Rds5jGjs",
  "key15": "2ArKzDyunZdkjLYdNLysm69herHmuCnNYpb7YrJfmZwJBwWi6kbbewr1uy27VBx3VrZKN7rgFhYHeeXpGWssuwQT",
  "key16": "3mYbKUThGXgSGm8G4t6auE9rjZmz8bneZshmbTq4szcPFGBP6nK7Q9iHtkAzGbS29zUHcj9CTkJCe9Rb8VjEdM9m",
  "key17": "4LGCawCbyDoTyAFY2u3cJ94kUak6ynaUL22AkjDdG8qevjoARTxMxdAH9Cm82jNjqnz8Skj6uQ3ygCdh989HmvCo",
  "key18": "3yUSpMFrNKBcLGq1nYjSBaYtBEcLN7ym7K63fpbQytx789JhqNa3X5dKKZbQbqUTP5p9bqEoDZHevQG6FHwdpdgx",
  "key19": "4tfN8h5nHSknUMzejc6ye8MdnRL7TAenKLk7jm2tyaLueYbA6beyM3hoBe3Jgidsp6nSB855LmXeh9vrQDVjkPWw",
  "key20": "3TcMnX1qoTfur292irYdQcmV141W7V2qMNi4rVGSqwwNNicTK4gMuWUJYBbXitGPMtEinokHXhghAvefxRDNNUC7",
  "key21": "3PJzpaivEzc33Ht7x2ZkCZwUL11tGjaymXABgKeTB7aVd2EhdmiHbS4n9qE16CJg1maP5aVUomgaftEAuYndVvWW",
  "key22": "3YB5CuCgS37rwHMYKTXA5ZPpx31ocFYYFXfvf5pr137vJXdaW2iiaayCog1sqgdmzJcjtwvrxiJUaJg3gZtENzGv",
  "key23": "5oGjTFnrXxYc18A9yLphjaQTM7gYdBkboWyunsWse6HRnYJB1avoxG4kdbYvpWr8TFqQXe71g3U77jy5vsTUUc51",
  "key24": "2ubeBUm8BEXW1AcHWJNr42XrTJv2FJWCcFSRPG3FtqEbxmnmZGxuU5oawcUA38S1dtxCExQg8c5WX5gsZiF2ePxd",
  "key25": "3BYFv1KNxvkV1PXV1Frb9CQqF6qW5xtZn4YdZT8xjwayYrAGe1RViMedvM8NYwgXxuvevaW73wYGDCYxqQStBZjQ",
  "key26": "3gCT59ZSTbN6X95vX2xddin66expoDFpJkVoVQETUwJF8Kn6agK1pMWMsgKVxxnJwCc2g5CtXwDyQAq8HHXmH2sT",
  "key27": "2CbzPfusH9AH7DXTViQ8pJcVqr68d6tDvTHEPTP2vMe1wffeymWNpGrxDuVaZSJqc7NMwjkhWRBsiM8EVSRd9Wrm",
  "key28": "51H52A4p6j7FMBRKB9FsfeVE3G9kdkPsHxRjWLGSjzPsFeEzR8GJWygEmTUT9ZtwsEn3H1JzfK6Ma4ZuGZQLoEfZ",
  "key29": "4Umu3rTxJ5n7CMjpKgKF1bu8u9as65eDNudb1LKu7koUXbJo4J3H6DrFcgHNdQkVFtsc7adBZPmieENLnA1fY5rs",
  "key30": "59kZo1eBfEBnthkekHx7nNTAj3Ba7jRcSD7sbYpfpKjj28hMBYPGejBpJQvcc8eWa7XhoXmyK6t6wWt2e69a99aG",
  "key31": "3gtjW7dv1ijDgXrk3kk8nKD1sv8bEnAJv9y21yhPNyitcT5ybvmXXiENrFpE8Nbx1uAUHNHizj4Li1VqhXGtWHRF"
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
