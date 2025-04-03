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
    "55LcAmbZNmLdQGkntBeEGEqWLuwSwG53w3dLM8YymK61MndL6DVBPBwoNAA6RdWder8bNvDCTb3FpiwKCAUzA8r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fDaJ65dq3yf1ZAtLRMufpuMdskJZxmEDaeMpam4Lqh9fEcwgPiAH1C27LejZNjVXPiMv5uRaBtCNwxVS5vP8jta",
  "key1": "3LvJe4VkvJZKcUr3kFb5LXSozm1djDuzCYHnbtz1STwLFgJ8YxSjkm8rPG1Vcsf6r9MdZfQiwtvGiFomXqcUEfhz",
  "key2": "3UgG9UBhEANQG9ZzE1tnr8DQ2wSSJpb5Hp1xxdyxiCwkyWZ8hBGhx7iFcF83SyPRQenpSeqX1tmidKqdNdP265ZU",
  "key3": "2rD3fW9Ssxe1yuio79rxn7uG9T8rAJUr2xBy8PbDaDa8PVzaRnjqdG6tZq85pbU7UrjVuymEcd9QCkRfKxtA321M",
  "key4": "3WtwdCUSNpqrijd747yDJsd8ND8E8Se7iArix7LhYcxFCiTffuG3vPs84RaeqfDEbigGGKsDYKpakBJGi36MSDYp",
  "key5": "62XDAsvbqQA6121yqbe2XurVqtBJKXaWSt7N71XwdRm62VkxoA7BnP1AEQbUth9RGyFZXGeCUvNrfed9LdRFmLuC",
  "key6": "5oya5iT6aVmioYwPS7tt5jfxZBq1bNbNoX2yQcpvi9r3FwKxZXNBZnwtVSi8q6jLeje6YEPzWPauzc6sHVVmUQF8",
  "key7": "4MvMpMyQoQTCCd6JbimX54hXCywFpD4rrN8ioCA3zfszNgYXu34L8VJZ1xXMCdrDtjZtpjpvSfc6MRvrRoyCEopV",
  "key8": "FC1TeqVL2ZDfe7HoHH2YYMGvbPPrsYjdLVzFkAE5RTqFrXaEqWZyqiioF5RQnsie3KYnVWafeCC8Fd1zk5q48Sj",
  "key9": "2F5gBjBq6eaa6GVLUhiwxBYvidaoqo4kv8TSNKuk8jrZ6aX43sudApqrdivnhEYwW1Lc3v3pTzJ5R4TgoK1wEq4n",
  "key10": "3grM3FR4W4S1oHdPUR6oLtF3yEZ78q7oEoNnXaDnkbhkFfuBXgTVosGgjLMnGB4qUVJQSG82ut2jS8LKStLUen2F",
  "key11": "PvqKkLnHXehNUpoJbhP9WrXQ2woooRRQVk6GdmwX1JnKBH2Aim6K526DvWZws5GQGHNWtVQ4mFvckywSgoTMF7L",
  "key12": "5j7rzVHkuDNN6b1ZFvhqYZSw3Pfvx54ufq3fg1wF9ccyYXFojZTfY5ezSbL5dzS6p6jyT5WLNe57pZkvRaJMydU3",
  "key13": "3gZoF61dapaP319THMNcvzs7GCrLFXaxWThp42DkM1NeC9dG8AmkgrALHopQgVeGy6M3HnJRXNvuGtdh3RX4JTyq",
  "key14": "34GVSAKkkwZi7mPXvzATBprSt2GW5X7WYkyAWUqLKnpJ8XTaeY1JcPJFmVxPCoog88Jrig9EHUkpycAPk6rYA2it",
  "key15": "5gem2ivRMvg5vPScxFvY9FrWqux7qwCV1UMY7CVdAKabrnkMmGcNYB9R2eN4Z1VDtLDa4tBhoJoQ9QYytjY7mwCL",
  "key16": "cnaoGVQd3qGa343L9haCddLYe6zS2AEqoniFJDGJbYyWcE8obeLUDzRutbrHonoDimRdfoH2i5ghg47b4Lzp8kG",
  "key17": "3Zh97MsWGJRSwM5eyTqG1G24e6eDC1b67a7piUiJFUcHhXAnbXy2UTAi1W2n4Mw8v749coqLvR7NcHQmrqnnACRQ",
  "key18": "2YMvqSMCqLQMkbgYMustCYGyJQ7ivMa1nB8XJi4hY4tGr91V1gS4Pr4aTryKGKStJ7wZLtr3mTSY9bjQ9TVCaupz",
  "key19": "2sktX1J3DahycoyiwyNW1T7yqsKCTgApCBpdxnzdg4rE65vkLm6U9oN36kfkBxH6bzT9odUXxUJoM2wu5k3qHJz6",
  "key20": "2rCNTv4Pbjhgk8Bmyy5UVZzSxo2nwhjCbHv5oe3KLXBLqBYYtoK133AQDT4D2A7J9BUDMeHg2ugPu1mAxvdXixcw",
  "key21": "23snNFejVh9kWU5di4sACFyZRijY2nieDrBnuaGDuj7kRAUUNApP5MS67rXBWowrBbMzGZt9DAg41stchJU2sf2i",
  "key22": "3x2cQUgQD3kVJqrNEvXxH9KVtE1HivpyqfPHGBVHyZZ6p84hJv1yJRqXLiV43Y6qcC72ozP1ht11VfrmPqqeakqL",
  "key23": "4tPR6wD4HAXL87R1ksfVjm7T97SeuuKS1sPQAf28ERaWq7pYLsXBaa9sQqb1YeocCjeVbTmZFzAE5oUhp7ufVFgW",
  "key24": "2iAXkLWjSDGvH24Do4pG4Gjh44pdFBoJbnXmM2aotwaTc7fd74AKEdyN5dYFDfzohdwW953LrFSDQAJgdF6SqEYR",
  "key25": "4YC3n4ZtWmRfgXpY9FdPY7th9us6KDUKm6FSmQPFA5jpiacnNwGkyKTygHsrJjK4Vinzapu7Uju4Wn7Nn6k4DGxq"
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
