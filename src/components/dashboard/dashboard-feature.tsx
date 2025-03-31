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
    "2pwpmAZ9qsXwX3nCe1Uom6EabeeguKFde5QunxymvU4kQ6g4nDSLKB4hwrSCv7Gc1mxen9CnTgjHqrzDNg5T5qke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J3s6dpdWgNv32j8j2D1ZG4nkQtvMEh4C4o2YUJMwGTY3GsvbjVz2M3zaGyLS53CVfnFkM6wbLKXjPJkFYcJ2KmC",
  "key1": "4g5Jq6m8vJis5uWJZhL5iFH3kNktuMAA6xHtkYmk9oQoYz3tFSjibAZcbjDsX5XugpC6Svo7yxUFkJFg2iiLdHuA",
  "key2": "4nrf154GqookVTzZnXC3uNqem6SStTN7fs9Zsqu41wSXB6EXdgAufpUAZir8tXqYcFhjbPQiALnVuYF2cKGnrV7s",
  "key3": "Ftsq4vXHZSzBdDoW5nqQme54xcBccHYdBsCFnp3gjAq6wFmPhFTj1vY8WyRSmbgcPiHup3FHkEvQ6vNAtYpqY65",
  "key4": "3VqEStbDEgrbsQVuvD32c3gBcCNdnmfHWwkHS5VXDCrVzrpdVT6R7aniqq4bngtbQmo3WdARfGWApiov3XEComH6",
  "key5": "5GenZ3Jphk3o2bdSjVoLx3L4MS9amG4iSKarwKDspDhbz7E7EUftbSWtshNAoqdpoD8BirHySb9GJ4cFuo9X3Kpt",
  "key6": "5aUhMFjxyrSWYa4vCKBh6i14myXK9J12ntLUjgDN5rMpDiUYbfQtqrYnaGeKAgqWxe1HJPUDiVyaN6E6TTmkYNtE",
  "key7": "5s3KLVa4T77XAtc5dvHqLxBXYCHZF8E17e2cXhXmMHk5yncRhGeRStPcB7CMgYhXAWufjPfUBP5MEM87EWqaWqB",
  "key8": "35bodNuCKSgwHkucoBF3WHYvr6vW9amKtRD6cxnNm1VTdFjv7cWNGAkdFCiem895soo6393d47uzQWHQ47zhMoWV",
  "key9": "DEEyYCoikF6n9vCvQ9BHUbuuCFk387RN6edrDLR8RoJPfPeTt8cFmJXpbDdonwnPvcaj9aFLj9vpbNJAPRu6oRZ",
  "key10": "31jn4TRXFt34qX4nHrKFcLBLYFRaxDTyymgAJFG2qUgHuHakrdCyCefiGZ7CCfJymAyf4AuGWqBmqNyhyJu2mMMg",
  "key11": "3Wj15uaE7oGaE1eEgP7r23ZQMrX8LPg4pZxZtMZP6v2LvwsFgrk45L1QUWFjKFuRPPqMUSB6D7AR91nw2VLyhDbq",
  "key12": "5x6duTyFQNGS8k3Zyxpy1QK5Z4g5gv6qTg4Cz8d5mtMZE4ShZzGsWStMLAMLzXX6L4bu6Hsa3Ybq8ci5wCEXSwhT",
  "key13": "3eyvVGtTUwupHHtFaZTmRD8U8EDCVQ8tyj8CYZnYVMMzXfkfESnPvPDUbT8ok7x6vt3Dqk7ZLBsGBWtXBiNZ9tKx",
  "key14": "4pcoNtYZaFHco9M4WfxG7PS8nQZiANQL9ZEXgZ9yNT435teCGEAukWDsPGPTgof2yNrv7VwGVvDDd4oBrz4VRYGn",
  "key15": "5UHB9wrCVQaWutZoBombVLcmK8XkNSfGVJjbwTWM2PmC14TxGTxvR3dCq5wu3tkVkGXWu3kZeBStBqKcVPuC8Wza",
  "key16": "2vYFjRcFkaS61rTwBnByfQNTLGaFPPxDph5SLsu5bCe7hfJ692YYPur8qiZVX8J5o9ueg8t9tseBma8jgZfwx1D3",
  "key17": "3Zy5Cbr5sZn1mniYGD2os2gtMi8NEMK4GfnbvVSNa8ZTpKkoZJbDYw4BfqNzPLnPs9EUY5TGCay5QtTfbQkfNz6N",
  "key18": "3bJLvSsbZPaJaikvM3FsrSXorRAZU2gdhw9PB3Dd6msfWXryTZkHWtkmz1Qcf6WcS3RcTKB1P852n2nL2PrcK1uN",
  "key19": "4Jztr9UasJj9qyJnrRAszGcsQ7SN3RLYHZ3JZXDLPvWNHpc137n1w3rD1fQmfdvSW2FW8S6RNKspi3p8t5QAja6y",
  "key20": "2fQRzkjjex3vBCrxGMDP8Xxc97Vq9uBjHFvD3zeqRZcjqEJgjRJeyySnMpauShqSgZXruDseKQhno1rth7quYGhj",
  "key21": "45cy7xBdcJAtsS2uPVWEyV3KbFVZPgsmPQwJFMqQYHn2o788uNow5PZ82kF4vZNpdtoGHiGe8uJ1yYkavWmd1uCe",
  "key22": "2Dj7cDnvroRjRgnbGivWS9MQA7VtfnVjS1K4PxgcKq286rKTHjzybnABfr4DKesMkf34aBSMT9eQiKTyidNNiVk5",
  "key23": "3zvRP62bBNHxGZHPrWk7DWN47FRXxU1ybntf6RSWxFucG9rkJhj5ew3BABnLdBhoqHzQNCzXFd76Y9RaCPBxUV8S",
  "key24": "4p98HLZzg5sZf6LSFXeWtTH9BcrnLhY4xoiVDUzkxNUY2gH5izMxLmSgYgVbgfFCkuLJbyKPm9FrEB1H6rHkM5Jq"
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
