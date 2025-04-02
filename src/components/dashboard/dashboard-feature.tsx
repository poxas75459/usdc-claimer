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
    "3AnMbL3WrWdmNz7BcrUbU4H9JChn8JNmnErtaVVqAe6mSPcPPwyka4yiGjQeuxw3rR3QtMfRJDZnSwRoQBbYrqsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CMZWmti1QUfpPfMm3n7NS4JtkBBqV7pePFTeqm6oZtS8XhG4fVwMj9cGCzp5HcmwHxDLwc3m2tsUN8pRdA6UA1E",
  "key1": "5SvYrkNpmNHEeeViN7UsU7yPmDtgpNZfwDYgGr5J3HQfMt6aD7yGiTpuwnojTB9cjyt6UQPXibd6Y1AUwRHREfgT",
  "key2": "4qAKeuw5hM5YdAKTymsnVPyRWKmB5UpGzZ65qzhpo6XTi7VUFh6LkBEpA7VRgmChHHbWNCvCMxmH44ZTjs6pRyKZ",
  "key3": "fzvVhtNttwbuc5GyvPG7ZSYgAheFHSkipSiHRHaHi8Sey1rHPebAqPA4fdvP5funtTWCpEQBjxoyuRgxPKdNwBL",
  "key4": "5AYSdPijVvBeD8GVbnvMtqzKa3wQjNZPD31G4d8rAfqJhXDMJam1pYH6rf8B4ubgGxhXWtBh9C4BiCxtf8NsLYzp",
  "key5": "4acRQBNXBpbWKWfdHZsFfhRU5azjwXXLvaXefGBdAGyT5q5ByrxL8M1V34vntyJPYskBvJE882X5CZDMsyKQ4dkh",
  "key6": "5WtLVLYwc4kgN1BVpJQmMQTWMdYrYbCB44pYnyEJ1pgCyTci7KU1Jb28SzS51puv1WzVedkEA5NBGSZt7EAA8Jsp",
  "key7": "2niGkaxrJPLByk1t6NSAZkqQNqcdjiCa6NGRhFLEJEr4CuvsXEicjkVawPDtJMCrY67quxqBwYc4M1YiBeX5pMZJ",
  "key8": "2dzS9v2Mv3wBaPjngimg6muHA8ewpwoncPW5ma97oTFSHepuHDZJ9SJkxHQ1iJxAkWxntNR9vGnB2ar3UwYgNHTR",
  "key9": "3M4aEW5Uih9Nx4CPeRUwuJY9yXsfpRERULR2uZQcbDFRxFYDqV88CuKWGYaDPyeZMwga2QWWNx99TrDYHKWMbEYi",
  "key10": "3QgZJbjvfYVE5YGtnaY9C321RygceWpHQNVp8JzF4W3xP1EXVsFLC79HSUCUYmmTJxvge8xp5Fp8ePEyyJjegV6h",
  "key11": "67bRMchBbCuSNEsgu7igKHSRLyPSXnCuVA2xF1xruu4wtAbbqryc9dPgPecYaCw8YMafsiMsbTJUpRfxy4oAXsAB",
  "key12": "42p8QDQdRGCNY9t7EqKfQJbEQLxokigDQjc8SThDN1jNj6rWPLENJKLK33VBogn4HkW4tErEKfv4M23pER2DWu11",
  "key13": "JtNdnUiWoyVsnaEJT8Gp4er7BwTxp6xc5XQMzbJQucN7X5TkmjLcZpCPzoi28KZa4ED4K7E5rPtdnkcLKD3h1NA",
  "key14": "4g2kjjdqRumc9dfnd5nzf1uZCSFAT1ZJw4TuBFGvb6XLo5cqU6gvSyHVRzBF12Jyj6UgU8ZDDeQHV5K33s2YMAeG",
  "key15": "51zCvwM6ghzP5Rcvn1u7T5nRhRotvWEJj976dJY2FowgQte3q4GR8uHm8WxCULd9infjAC5pcHmkqYZfE2L4tFjr",
  "key16": "5zA15CXsUwvAsELFtmaAhpbbEiLrp7F7Kza8FF72mDdHxBWkKMbVRUDFZsbKG2wARHQ7g3eSxcpvpd4Attz9RWQT",
  "key17": "5PTaCLjrM7A1Z5jSs2Ac4GBnNnPbxEijNv4WkktULVahrduJCiZXG77jEX62Xw2eGT4M7uwGXYXGP4Mn2DRcYQYn",
  "key18": "3j1eBe3V5fwXUU73639iNgMs5PwVRCmgJXZsP1igPdEmWGxopVwB6B9ZMnB6Yrsn5zxMdjjasSCa9fqh75iikQED",
  "key19": "2g5am7kdJpeuxQ6cjrpsne8DFi7ykKcUyiRxuxXEPxxwWKVZziCaEocctDd8nEcPyoLcb1X6swMdMK4javYmk7PG",
  "key20": "26SsQHsNeYFStXS6LRa7TwM5fn2jxc1MLvMR9mkoeTsPSb1WLnZ4cN2XQbap3ii2QgHLDDT6AQD1RjfDV6AvUWvZ",
  "key21": "5fPxKHCzH83seg3PHVsAYJttWXAPewjExm3hRmY7SLAiTx31ySN9axyDJo6Vyi7wSGXczaZfwAwSwZkCJt6BCUuN",
  "key22": "5wj3WKVEZKk8EsjkYaCmRCVy8cZGV21B5YBpggVBMZF8bK2deUEENoeryNajVPvcmTziNMTqZBPdAbjhYxzif6wB",
  "key23": "vpnEikZNoa323NVFyHWbFPBr3Wzv9kN1UXrcho75r27fvySikAPnCo8GUQAQn5tHgUV89owQXnYFqF84C7ao3ef",
  "key24": "8ajDiHcsuKtz42mvs58Rwq7C9vCb5gBCTSftSkTAkbZtwm77hWULMNsKoNVKipZRStG489UBNfK67fajcoKQB7i"
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
