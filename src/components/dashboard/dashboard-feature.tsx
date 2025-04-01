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
    "46MeNgQpkVF8AHR8KyYRPrxHzZVYfdcMBVPsV3aaNooJ4oF82E3aMvMrud1Amobg158tjfMTUvn6uNSphRRnaFrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMhuaurWxbmRCdG9ou9MdvPrwdDoAX2t6ga8ueHNRzwqPSbg1xnJHfDHriWf1BpUCcyQdAYSf7J9smFeFJcsbYX",
  "key1": "2hfNSWvs1yVcAsfWjgc2JLkaRvHeRDfHeN8xRWaJmom3LCHthqQDyazAVXj4Q2k6avGZFTx5xw5S4bP2diE8axxA",
  "key2": "2sLcq5VKvo4ZKbFoA5UjsbphFTdckmFvR5vEViWSvFPvGVvFNKhrz8A8MpB5Fx5G9gXmdMVURdan8e6497WADupz",
  "key3": "3nwB2mtCcuGrWzGToUgpVWVSzSSbECKERsUWgtXPbXTwEi7gCcMBqdvbPzjPnefi2hLsMLzng7vfMpwTKQy3HyKZ",
  "key4": "SMxScSipc1LR8TeCumySFpnm835b2x18KdFr86RUjQhXvrc6fhEBaWycBqw94FjocMTr6fYK1oe53YUgjvrgkhN",
  "key5": "5JTX96puTsf5MBHkMCVwQ6jUcKeQL56qJ8AfHv9MbgVvLBspxWJr4gMiHK3RAbSoHC3Wo8rKZZzsqJPQkN8Lde6i",
  "key6": "3WEXE43nodpeKx33NHbFtm93vCbHLx7ZfqG84waX9Ck2xh5VnTFpjxrM6saUmbaGnzJMn5pSEE6F4M7Ti4wvubFV",
  "key7": "4gDarUwqxSQuhw1umCNBaCLgKG3i7J3uxtScDD2LS9EPHy5vLe6JU4B9s8svnhLTXrgoUNcNgq9LZNUiGDhRjZE1",
  "key8": "42FCKm7VvhzbyvhBMQs476Sv9zvrg3J2prwXe24i3XeG7FnSaLunqwfeUhLNxuFDzcapuAsJHWWGY8mD6keUnTtu",
  "key9": "PiRP3e9y3AhD6YbAZpgdwjoMLi6hL4Wyd7YZbRaiDwPXqVXBVZ6gcH9Hf7hcKaA4FAKAiktYdM8Xppe4S4Jq1aC",
  "key10": "4WwyP3P6ghn5tfEYP2FoxkZWpXQ5sE866mwvqSFuitVjvpFVFK1ebRrQ8NkidkWridq6qqwipxqx25bo4J7garqc",
  "key11": "4oRg5fvSPV23VECNQFNmrqQCoZ9mRDjFpZk1DTa9iFeF44hwYCBSigxub3ghpPsrZAakUg9gjqvQf6hM1Yvm7vjq",
  "key12": "2VyS4DydwYLTi9cJemhMp55y76qr2zYcTbuJ33gQUUkGdBcexbz5KQ1Z4XScTft9tdCrEj8upgneDX73tGkfK8Kj",
  "key13": "2TGvc2yZxvSYs7frpv6pCBt4zDzHtJUx4cC9fyraTQLF4EbjgyX3YthNUx8t9artVxrNUNX8iGcx5WRfuvpFUcEX",
  "key14": "25GLeFy8U7obcyci3c3ZbDFrFnn13kPbdH1SBMKwtDngSsbGV1BsXgNhwuBvavT6wdhGFo4i89g7KW7HjSmNq2tW",
  "key15": "47HmngoKwyrR72WALedzQ1DWgqptvr3V9sqFKF4EuJabXwv6bfXEVzHCULT8JfpzVaXBxiU2KFkEZZPkhvHxz5aS",
  "key16": "3MWsKNTQAAiwJb9fu32Cn26Pqi9QtFZEXvsuoAhrmcnhE91SxvrCC7R5q7aQjfU6ZmXmdXkUM7NLYRyrji596B2b",
  "key17": "3gmQnYSmHPqpa3cpvew6fC9xePP2ShTPY8eUSkun5CbQGZc1ccqGDgrCbyqAjHuvjrLkdKtr7gHnKx13nLkq1ArZ",
  "key18": "Q7jyZCL51LNr9CCYXjXyjcNXwfe8RcmaMXQJh9SuzHXMCje6EqQYyJkA7zYatx9Z6ZfJ3Z86xCAkeJZpsw5c9jz",
  "key19": "4gcbXvmsLDSDEnCSGoQ561rN9KGH7o2N9PfXDyuvwNbBQP9zRz2gBqr3rdEcgew3hpCVFdmcf3g7ZBoXMvW11a9W",
  "key20": "2i9o59mhkP6bVf3T1vBnuK8n9oNbhPxsMy2jkjdyeEAZthVqDo3gLbEYgsGo94QmPKh5B8DziBGVdmvvy3VZKyAv",
  "key21": "4ex9KfdjLGzdP6Sv28JWZqdf17FjzRxiRLhZwMtTKE6E7PkDf1eJCKPAEcFzsK4uaAGWRzCubM6kZg74wXhFMZg",
  "key22": "3skLL7kWQd96D1iXgf3KM714WQRRmhr2qcyq2D5FfXoLo4iwVpQrNAphn8PUpkSD3doDuW9A8sWfbdPKHMG75Qpk",
  "key23": "3uizrJFYWa4HsBYZmuz3YG4VrMYbcKcQh31t4wvR7K8DWuB2quiz7BXF5iKcqpi2UgTCUSEgmPJJv1BK9592sAvb",
  "key24": "5jKxpDQbhCzS2wNsqhLKARLjnkKx3CXCHBtxevjhKgJJmkibTDNUfswxoxWev3YrJDPgRJEotTQFav9Ywt96oXgU",
  "key25": "4azQBfDPC8myhhoxFGF9r3LTkf6XXitSn1hf2ayKe29gwukuUGHGL7uqQAkQ2YXHdCCfzjUvBv8t1ku8DTqu3JZ5",
  "key26": "UKCQHC7STqwZdJNwY4tutYTGhNYKNLSw1W9UCWEEvjm9ET6qmb7Nn2ZtAtRqKQ79fVDt8EdKTswWDG69PWsek2e",
  "key27": "2Dux9naTNQxFUo1jyxiaQx4LJTndiaqju1TLpC5obCu2ztcS3V6G4bw3VyhjR35ktTD28JnYqqcA1ueFTRbHqcrG",
  "key28": "4VopKguyU6CqvJpQMfKwZ9GspqwUGFDN6xMPeoQE1YECJRoDfTT3k4EkAgm4kdke8s9Ud9LHxGrFU3Q2tWsFpWZ5"
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
