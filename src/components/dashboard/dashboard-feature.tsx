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
    "5xhjK1zdgRfVzNZQN3bvCE3TzC9j1zYMrH9augs1i2o7AgfNiumTzYDBgvs1opaf6gQVQ6XpUZPM4E8hbnXjEi9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tVtTHNmTdPZ4kFjfjABtgDiXCTt3eJKaQ9vUvptrhkVGd6FATm6DK9rSgnvCd7bEB35pgMVjiLCczM95mAHTeKt",
  "key1": "2sKFsBuXob9CCjFxs3Gu2ehgbTBSRFdcd5LewXzCovEhonQ4HGyQjc4wvnreoA4tE9TiBDqCjakDsaqeSdgVaSEn",
  "key2": "5JhpWd6itm9xQ7YXHAHUuqrJraqdSSjnkBQ5FD5TVTtjXgnJYnq78tmmNyF75GAGuao3hzyMKZiXoBw99U5gsKDw",
  "key3": "WqvfpZQfTpRe6Z2oTQooDdbQ4t6b3RRMSUtqxHdcPnBeSx2sqkNachCdKi6L1BMTEhFVSbAHY7jgTR3vsaygEJv",
  "key4": "49Eokn4BX7HbpJm8Enx8GaA5kGNqgAzHeMrqYQHUmXLSHqCvDUjN1Pgxd7wexKjvA8AM9hbkxEWWKGwBNqx1iuY5",
  "key5": "34dH6UrcFZLmKdVTpwgUL9zqSHk2QK1a7qsamzcPNt99TLLzpqtJrizfGnPhr9tzBDPtSknDjVPoVcRUHkEM1jLk",
  "key6": "3gNJEEHRWfs8QM8VsexRKNHrUWfMvf1PEaLVv64SfexsYd9PD5A5ZgwHozsw2YeFCPCuRSF64zQqJpJT45gQEK1N",
  "key7": "yssJPDgUsTeZNJBtoQ8QVDSk9mpfq4Ts5CeecnghDsKPm5XLYbsEr2JYXco2MkRReajKbCcA4561guLv4qZ1sC1",
  "key8": "38EMRDyuFyi4RXZ6tNChz6WWhg6K2fd49d4csAfakXW6NeoUdnPgR63sMEpoG3Uaj7aoDPr5yAXvgNV9bD98j7DD",
  "key9": "393vFp7RFFzaYkdHS2w7DGZDMhtdxAfR2fKxfUUKsGWdUcsJg1RBGoLnXqs7BRXw1byZTWYHKzrbhx1nx5ho1TuK",
  "key10": "3K73UERQEVDKsNHpznQNY1kUWKHzMDJo8Wru7SU23VtcQ8UgwYsxNuA2f235jaSBsLvNRJieoCazRsoRcKDZ6qUH",
  "key11": "4hTaJi2poww5CynThsbLEzEdsE4mhdFkQryckop1mzwFEmZAKSQf383DH5TgpRGBJ5v6MKPQ49gpNHnus4sVeFPY",
  "key12": "4btwNEtixURQF3TnfQHUfneRbvf3NwGGBPXyxJXKEZHHbMUrsQSct7cTNRnd8cBcQMvKCWbmDWGkQGxCBTqK9JZy",
  "key13": "61K1HnaRzzfJbwwzzWVJGHcsNw8rB8XrxGq3YahMkzr6mRspvq1kNk6kN1S9kwKTVuzFbveNCVSQh37KsMBmTWmm",
  "key14": "FAcrD4ySTdXccpfJq5HPZH6fpDbhUa63htXqow6U85Qdt1tuia3c1Q7uE1M9gE22q8ecSdqLWSa7mWXmnJ4FzKX",
  "key15": "pqgfEVhrzBqzJNtQdo7jsFyGebBzsJdPwgHQqpgCNiyuNnXgDBp58dBxaUUbXtDdY8VSpKQwoDURZVuzZwzo9jq",
  "key16": "5F6VmFdNTLqJv5PLCEKeK2uDsXdhZ1xiNjBLd3gXfKiAuV44mw7G8LPAkMEryUEXguJf8CvhkjWLAqmQnG5uzfMV",
  "key17": "541hk7aEdKqVuBkcYSN6vNCQJJMSgwaGb1ifXjUTjR4njvcBVJCLog9As5rvKYyJmbSvPwwmoag1SQn3KUa6TLk4",
  "key18": "2ymx4MhicTtfRWVCx1aS1g83ZraW73fYo5AMNDjjMdKd1xf7T21KweDXgp2tGU5zsnYnhHVqQ7iYvtn2CnNyWxKm",
  "key19": "2BkUodThtRsVxoJqAepWy3h63n8m83KZM6VcbG89KRcQ36MGkjrxdVptG1rGr7QexkAB7YuimGrDerQViDNi2Fp6",
  "key20": "4Hjg4pH7eV5vvXLBCzg4Rzm9R2t197q2Gx5pomofJhZ6bsBsvRsygwTUqZyeyBaVf1gHR9km5Rd7Q7um6bq52wKB",
  "key21": "677b1XXqz9ygkjgiP3bv4Wn1e232tp9NeCFSvPRow5svkVjc1hEaCFG9iGdUJNHXxJub2U7c88z8hMGvNarBi9sZ",
  "key22": "5JyycWv6L935uL76r674A4rQgvmVsGiCh9hSMJCZsXcjzvnPZ8xGiQ99zRbRyEsEg7R1hEJRcJg1E8LswzTES3GD",
  "key23": "55VXeYxx1BqSDKkRotLhwFHNjdD3pBDpjPhLdH8frn8HSRzDzCHufBoh97c6DNtQoiX7wmrG84p3GJc7uYcMvtQb",
  "key24": "9TmxQKk3GyNhu5bNwpgpysS7VvbiqzVfEd6BLgPfMd45VuNuAerzWSyDms4KZkAsLQPPXnJfj3YtmhvysQCsmcc",
  "key25": "UGjtoGC2bK8UrXvR45RffRRqhBgYBdPjwr3nvxbjQva55TxdaXiascnQXFsqzmrYSq1Ja4FE5gYmwPhh6iC2mrq",
  "key26": "1nVa2zYc5CEe3UGsqcYyfFrWjwuyEZhZumd48iYUM8SN3jshYf3CaVeGnRyk5J3aUxXuvAgi1HEQsT55iKRi69Y",
  "key27": "4bKWKcZt63z9v6pzoih4LJk4UTJNFKCBq7Bp3Auvrcg9ThKzu5RizATBWkN2bCSEYbBgYf4EUaENDT65LRofZY1p",
  "key28": "NHfseCbeU4bNQmmvhUfwcb1uaFeAvqBputCGdq4tsKwuSTRAGsxYUvRxUKRsXDxdSRCb7t89K6KVE4NaVsYEVEw",
  "key29": "FDAqQfYmw7vqVrUx53s5B9xcQS9aP2f6Z6jvVoYj3tKwwGMf2ZavsQFWGweMjQ2yEr5MsYQa6wUF8XNFEr6UJQD",
  "key30": "r6wpDSknzzYNA6jej81WCYHL8gmbYgUNsFwu6hKmW6cfXQtGftu4vT9xjfu16qXWoPk5n4vBXf58RZ9iKUQJLSV"
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
