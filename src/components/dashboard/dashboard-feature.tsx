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
    "5btBTaqQaXEmFPcvNStfZo4yFmbz4c53qpcGWShbMHi18hMo3hjDofiE89ikKjtv1widdJ7ijyJANVXHfM9mmMYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JsbMSua2FgzoV8VzqSZ842YNWep3vYGvKvpjj8LRswHCxMeBMqsEbPbrf7EJ7AVtWqHHY2zbxfGnDojjQs2pEE",
  "key1": "3XUb5YaEFGUaAUk9sLnRUFBt1rSM9XYjC3wz5wkm1AfM9xwFDuqB4BQSVFvxt7iqHsNNdpuBwegbtyxnyM7RW995",
  "key2": "5N2eyzgyFeGFWvtd2y3YuKfB55v1Nygu2H5ZY6q4f29XoEpuLXnCT9aZ5fptKSKUVm4WS1RqQXYUHzJNibLgqzLM",
  "key3": "2RM8qJMBbcGerkqpwVjGEhBxvt2QZbKsnv34Tk18sQ6SUGPmcYpGNfQM6dCWRViEauaxRxqmuuQuBj6u4zWN99Lg",
  "key4": "2xkV4Y8TPRaSrraz9MKtWefZ2CFQkRVZ9qfLop2hFMTD99hNFP2PA3EEjeTpheMhk7QMxUbTdvLG8KpeywpWgGJd",
  "key5": "2NKiH2mzF1PDojdj8r2wzoDcTTBnkmkC9ySsUr8jmjPRt4ChyPFoBn34r5VXtqdDt4FUhqT1UwjK1H2YqUamzyfa",
  "key6": "2JfDTdZpkQaKnwG4oxeFnX1TqgZzBsG98BkAXPWpkri5WdFQ6yMs29ei2MWnzZCDnWpEKBH9aTKusheVQMv6ud22",
  "key7": "5jh6QdDqJG5cGaBXM5t2Yo878VmWhZDYkaK22Rz1fWcSWuC6twMqbY48AfGahjgFKAm7smRX8R61F2c6ofoVRSn9",
  "key8": "4KxyTKdnJ237c6HCQuvUYoDEL79Rb7rnr3dLiZdHiXuShHi9bZPUfaxbcFjB9kHLozLqbQeNwghMq7bApqcnSK7w",
  "key9": "2buoWBQ6y8bhShxF2VFv9JKQvgCSYV8NL7T9oWLDyqMukk2heHuQTckpkcJNYrKBEeD5Zib4xtnUibnWtm11XUyE",
  "key10": "2nqxqgDMhmKQdZ23FKzZEvMihFDJrquEF67WDK1igqDECWED5Uqr8NLb2VDcSYQyBvVEHb9d9X9UBHVcfjcungS9",
  "key11": "5BCssqn2PnfW1NRsmqnkNjNhrjWum7V9xUBb2wefEfB19jN2oDXTxQEKVLU3GDymPSKpsEpmaVSkWUp9QuRHdKwV",
  "key12": "nUSAtgRW3kPHqmwosUD68d4vhJk3aPHPpubNTojCAZEix9j1qz9um8e2znBxs6RAkH73ifDjsHNngTVMNwiVudC",
  "key13": "2vB7m9iC2sZkXRaJEZxxb8n8oY8o2bvnDPtGkCXqKY7AoGStJrFWaKtKiqWydeAYVZn8fraCYWSrLM2zgYyi8xTy",
  "key14": "5t7NiESCR1SbXicNKDSYJuwRh8RJ35GnXCLLSLjNcLVu4feWPNBjEdMmdQi6SEXfTfkj68ZaA8Kts68wQbSKgRvq",
  "key15": "5hg5cMYWfpnA1shQyXCiQhXZtbMoXSpRvE7eUSpqH8eT8BXfbTKAmqAph4vAmGzPb71dspCarqM1VYcB1uyEiqz1",
  "key16": "3uopxT2vHSvGdJ6LBCXRHbQNR49xgxfcjvAijSTxp12AM3SUTfajx3YxPZHfEiJKB2v1tDF72UbDhqsMZ6YXW6b4",
  "key17": "eeD6DvjhpeocusKRYoDAPntzdKzWauJyk5AYheU1nbG73sHitTuHVw1NUwRCttUXmd38ZbrVsfkafbw6sEJHuyV",
  "key18": "2xZj8nvrBKksWzu9QLZCCdwNYgjgzwASDjQ4oAwftMg8ogwcwWMtzHNjaMhGquaxZFnXzHSRwwpEbPVATHt5kEz4",
  "key19": "4tYKV5vv9iHwh56TuHfWn9fhGHEdivu1FCJQSvmc43H4XXQZ7keWofLK3v6qpuZcCNRBWH8Vcm9AFu7FKz1ZQgnJ",
  "key20": "Rw81DyafgUc3J3qpEPZH8od85tyoj58PZHwDiPDZsB7jpJ2EpaQXPRZDLkcitixAKQA3ZpbqgKimF7wQLXp7WfQ",
  "key21": "47KLDAxJRVsE5V6eeUMiLWB8hxqzwfNKitZ6mL6RUjD4a1q3AyYBiu8xRjkPhCM6BH38ED69dypYaSNAuTKYJJVs",
  "key22": "wKf8ySiTdFHkJCi1nAeKyrhVfDzg8FqUtBGHKDed9ArgxAXpy7hXiR2Es7AKYPCTAH6khZWjXGJGQaKQ9ghHTDc",
  "key23": "39AxGxAeqgJniVVw7wPrto3TxwYRejhPNhuWmwj1qQF94kWaA6WDdLTUdQbUGsf7JL4HHkiC2PP68fYafC9yTf5r",
  "key24": "3LrYFUVyY8mm5zJVCf2yrxeZVsABqmUZzFHpfAwotL8ad6MsEGZoWGZTE3g8Ga9Jxp5AhBMNbccmhrkmRoLTFitf",
  "key25": "2pX9SkpveY7DpFNArYDhuahjfAVeoGiG4nvL5iVC3ywSu7NpDctpRX9J1W3RMKs6KqK4VM5wov66wZKwXGy1eakh",
  "key26": "3styFcLbRxroGVjNCuGPzDNXgL5aGTvLxJ434MPg1bXcHQMQ3VxowULQU21bG3qgzBMrv21wnUiEjkQ96LmkpeCf",
  "key27": "32c1MDrnsmw2vYvcEVf9wArb61czW3d4vEjNp6c9nkZhELjwio2qkPAJ7fENZURC6Uph6QxsCeuvwg2hwdUUdaV",
  "key28": "2Leomzx8J9RN1U74uTZ1hHKsfFQRb1L9KDCSBqgPJ1w39G3StzoSjS9kYXHpEZzFxuug3G151Af4NS5k5Lw78q8W",
  "key29": "3K7KfF6gQfxyv2EX2DoBtq8jdP2JozMx8gqh3wAdYrCpJSMvwiYbm4c5FKszrMF8mrGNF1sUMcfaBJUSXg2p8svS",
  "key30": "5zHdV3rpthpbDgjQV3mdPMhSeHGfuMmxWFsQcLxy1zkLrjVXKSeuJMohRT647NUBBZpwmbGnnvUfA61oH9gte2jm",
  "key31": "3iy7XajwPzXwaDyBuy4VUCe5oJ5qe1mkPxNHpEFwUTsjwv9XWX8FoYEZN1S9qY3V5bkrFa7NnS3itmWPmMBvPuNJ",
  "key32": "2g3GjBJ1mPCXuaquUPvm6cHsadThrLaiLsoTSeKVNAbUs25LbdoXuaNezrhTSHUrrkSixdgLNB7xPhr5YWiQBpBg",
  "key33": "4CqFirVnASkAAbwK8HzF4AmJuNWZwVyqfJuXCkC4ts3ffkyYxwau2x3UFSfBBiuVKGCMgeMYhUZ5tpN4i86hjWN9",
  "key34": "4YXNqcdK55c4QbWvprvPLMrAMGxuwAZPYaLyFqEyEj2e2hggWBUwBsxfMQwLqDQLf5TxotPgVwPC9sqSjC1546g4"
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
