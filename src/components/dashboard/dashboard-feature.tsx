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
    "4ZmuWNSDiFY3CrySre7nek98RSHBsL96qbag3TJpm7S6YzUj36JV26eXxYAHrjXrKsu3x6yMwVyJD9Gp374iRGjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imHmBn5Rw6LXgktgJwLFYz61wCSv8VT5vzJWtMnEWZWjyaGW5Jfctmq5CMRCx5SCXthEcmzJHXKHk4prgCZC592",
  "key1": "2Az16x1ETNoB6NzR5FM4zS7mGicpmhS9C1AMGbxq2A8ZPH3Vm4AqGMTAFcQ1ycKGYF6iVJ6Ns1zVSyX7679JXXFj",
  "key2": "1mMQ8qfND7mzvZHNEbKXahgY2RX77DNdBzbGGZ4FpJp4HUDMN8mKD4PrKYtCrXC9rLoPZRdvyzSgrtBMuQpcZCQ",
  "key3": "2uDtkoFsVmqqMQeruWBYKQU5KfYWZ6VjJDLfp4qvzWERo3LoAvsyf4Urf55kNJMHyU8Z8qX6sDr9ss6LGERSqFDR",
  "key4": "5UjoNh2zkGDL1M5P68tDjND7HvEZ9pixK3oNgEbhaWrNsmaYN1f4nZgvWHyKCQ1MRnmiWLKEeqkog11jac1Bt8qx",
  "key5": "2aiN1uX6rgp9xKJJr24FpEXYpmrVtmFMqgRGojQYCfGGA3RPY3V9kQFrZzywT62ysZdEVAhB7UrcXMDkEi6V2VKn",
  "key6": "BdZH68B87mndBqifkKkToxJKwSijofWwxz9FoqhVfYH6eTe8dSukC7X7agREsEe8phomptmBsrgM89erQdLkcmP",
  "key7": "4KQbwRg6btdFJ4NRDvFXQJzJCWkALp2a1hzF46PiycXpzRg5Ny94UD1kz56UoRw1UpgDTGhAjwCcSAfyWcx23vS2",
  "key8": "3ycQYaqpbKtvfsEifw8eSFqTLdPGg5BSGqQjCpN4KvYTurSY4fRQb6C7DYot6FYADLAq5YbV3nbEVe8BMa36X79c",
  "key9": "5eVAC9z6dqvtspQQFVWTBWZgcB657H3Wy4NR1W9virqRFosp48kjwEJFQ79QcSJCY8hApE3yoak1aBdtKJ3USjxY",
  "key10": "28nt22vft6s7zeENYZpiZExi9fuB8oSYcduTRzFYdt79gpH7rfjiMKSZXUh21V33E7tcSdK5DWo3SRM1T7HZ5WSk",
  "key11": "UpqH1g7SWa6oUYeBSRtT3KQjirZBumMe6HmF1Sh4Y2KjHazs8zKoBzbXZ6rEbzbXmeiayvLYQ3cz3Btfqwxvp5F",
  "key12": "3TtaWfc5BjeSh7xEacEGyqT69e2s7N9TYsPH9HUWBtWQXBjZqVUXACN3xQkD8epWxKzuLk4aAysxxd4MtoCZQFxR",
  "key13": "mzKwaYqbtYBoDYKBkqmmSGHphZ6wRXchKRvpgu3co8FY2NZGZeDyQrkfWJYYH4djmLiE6jy9UFdCRbWxxdjMeEJ",
  "key14": "4An92zPLDyumy1fT7zvutw94eGxbopRn2T4S7RfhAXdDgBqYPDVZqG6jtA5eixhxugGtRvqQ2zVTQocM2RyTS2nd",
  "key15": "3Z3Dfgm1iKnzri78PsHmZ9CLgwbZzwzgGgjY1ws21jGzkSCD4cnaateNCWUuShb8bcJHnp2NgnqsCWqde9feveP8",
  "key16": "NKjs1fSYiPgwY1p1UQCXwn2QYopvazLCBaqvJM1pRVX6HW3bNtAqKuMZCFXGcbdoXs29xxnixe9GZhSvDKSRpqu",
  "key17": "44yVJYacvCzGWJ25KNJyYJ3TuWeEjz9EfjTF6hyf2YYnnYKunEtz7nyhJu49Qhze9CkhWvS2vqxVNirmHxQrn3Ys",
  "key18": "486V1SvJQM8sdEXRoMiRXj1iW6bxBNJkgP2dpeakj9yvi6ZMt8fbrmFhDGgHrFdHqrhYrzBTB2NTQqBpdie62ByX",
  "key19": "4fbDPRkxwaXfMAYVm2RT3iixDkajtnhcbGToNDzovxBMK9bptHFiVzDetWgKWRM2McEBKS1bNpXbmh9oaa8WTC2r",
  "key20": "36Wn21A1ALqqYQamatdRCnnqYeRR9Bw1WVqjcFcHRzaESEqbhPAs7UZCCqMFmbPJeh66sEs7a4MAgPCYn6hasKon",
  "key21": "3j7yi5JAwipkMEeiaEgM3RWv13sbMFGGzDAuq3ub9NACyHf6RTSnDWuzvNAGs5iysiY4SauKthRTv2QQVyBk9Zrx",
  "key22": "4viG9SGL4hDXgApU7LM1gARqBfmjXjgkLnhSakwK8RQ4La2SYnBoPtreBTSQNrYwAYV3vJSa7ounKPYkWG24MXHd",
  "key23": "2HZCHewdrqm8XqpGdHDcQzMz4ad5vmLYrJx1gcrXFRUXSvCQ7XE1ydy2w6GEgWs7B7D6412FD2vSVGnBfuR5j6ri",
  "key24": "B1y8cD7ZHZwPeQk1xH4pzTRmVdPkyfinW53tmnoN3NfLtcAXorie8b91AgLPtv56feeGKii7x3oYGW6M6GAUr9P",
  "key25": "2FXCQai5TFWGudA2LeC7GKeHMQxX8FN2K9rxbPnZfw96WXi1P9GwcxkeKP7cAP5QJdXYgo5HJKewhfFQPXyhFwqP",
  "key26": "5SxiEiR1G1AGQcp9dQn3aCKqyF8N2X3sozYXUmtmgUUWUrvtXpGH1WtXwoWRs9uMd8DfExu7iiWvngDxadiVk7ok",
  "key27": "3zad9zR595KkiAWGZzMJyYzQgQ267mGivSGZBoXP6sa1gePdgz7NmQkwFHSq6ESyxJc767FJZGSJBcdgTK6Aoafu"
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
