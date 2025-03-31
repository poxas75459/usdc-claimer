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
    "UYDHbFuDsTZwpU7phxZtuWH9jW5W2SsTrsFKKQihrr1WqvqXqeTThpCCmQhEmVETwzMTZt7dWiY7XBGxdMVPeec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WTTKxZA3QsXVikMAeTu43YzsVURx7b2HWMDXZGFuGxNSrQ7ne2XZbU8J82GR7GVPs7M5XFUMg6nDRXH1tM9Sj2",
  "key1": "pDuXfcsfVHgetNm3xtA4toCnYBvf7dap7Xefxb1r2TU9NzsnRvjfnawVmkP5j2qF21Z21ZYnQNbCaYqnn8DEivp",
  "key2": "4GJfcKrcFHk2KCYAHsVU5amwq3P9Fkk68ZsUdD72PcHY4q8Q4Wg84eefbFaxSspqJESNTjmxmVHNgJSBMdvudK2C",
  "key3": "5dvmARHirG5wiqQGFqh6wjTagAEp3LGCNB3YoaiDxJ8Bw4G1xaAhMCEe9ZYoz6rnrzMybio4MxoTiQ2cqVXcc7X1",
  "key4": "4LtoZMjEgDJD8qXTPzcy97duZFmX1c2pU1kXw4UF2g7AjGRsk4Zux442a2xHm2XThduJf7kk85ennBmypVhcZALi",
  "key5": "26yYsDieUvjuTqkwri8eQM9KW4ZV1x1qbHkXjKUy4o95tWJJt4gWmrpShRFSnX4YbE5V5BnUs8scrCpRu1uCrznM",
  "key6": "3ucdDMZvUvywytyTSaCcU6q1NfzKyCEbAudGbNg3dYAA39sBpFwnQbXzxgLeiCoRwaR6YKj91CmDzWWcTgV9gPYo",
  "key7": "5MVQiLcvtinzTk33mVDByjccPSATyvwnMfc9YCMJMi1xVPkr6GyvGsJGNrH6rcrsKEFxkDceipsiSdsczWCGdvXL",
  "key8": "59Xy9M946YAWhz5pEctkfPymWT2PGEoweapNNVr1stAcaybKk6H7NEP5FsCELubc8rC1euWvEoZAVsshKkm2c9rP",
  "key9": "5kfMty7cwHbXqa8w4ShZpVUNzZErh6FG6L8PzZRKtsa6PFPiXpnW8sHNTndSAUVufa1RZe6WdHJV4Hp4273XJz4p",
  "key10": "w3YZqici6Tg1JnepbpfQkVJ8QKYPq7ZkMEV9eP6gNSsZ5qcPvCR51oT7QfCofEEdaHKLXQu7pBbfVtakrwUJn7a",
  "key11": "5yewirN3UUwxXEBvByXfo33akcy8cY8wKd5PHj3tkG1Tu9UkNmGQxy9oysSA5p7V5ouZ8AnTTVDZTCACBSPAi8VZ",
  "key12": "2XfzR9FwZV2Y1Y8EkrDznjH9vaMWwW5vmbDLEQxbxcW57KvApbfuJtf2N8TeHzmDjeziQfjShQvsKFc6daCyjjbk",
  "key13": "3hHmLLCf8SWdDLcirUGGE6bm5RGjJSzPhDPJimR1Ji4YtqkgSXZ4H4QMTsFjZsx4vLoQJn9DLk3FWmFh8phmZTff",
  "key14": "3X6vSt727ZhaVQACZ8b4khe4aSGZsyh4avnftqU8WwUzaTiVWCtW9Pi1wWqgWBgUCU3sX8e4wq8PznM6112KFe56",
  "key15": "3NizihcXtrdKVsXxoiq2vKzz372FSYDgcgQbMPJWs782mvqzUojFKc3bz8KFyy4TahASnWkxgfeQAMhNUZw3uWTZ",
  "key16": "53GgBhXzyEbF1FfNGw1C287YeLPurK8zB3g9ApAibG2JKForv4hthGa5PB8C7hZ7bCXmecmdHTwmfsxL1BdJ1wKR",
  "key17": "38N5UNFwdWyqd4yrfUS9V3T9kJiTu6ZkjeqN3oi5ELM4QdBGQB9sMWAw8zT4i1L5cZYX1taAVPGehFDnpJQqSooB",
  "key18": "2mfW2jbZHzQTng38Z7Eb8j8WDQLNVbwhxMqmAhyV7GAAgbPuarMEhzRndem2MnthXE6jc5bACSEY76ThmXxRr2j5",
  "key19": "GZNfVCBKtKTw8z9AU5TnakhKyQmGtzX3ypZghJ6moMPCEnX5GpxCKBGcJXuS32jnTUfuZebWmBNb8U5agWnFVMG",
  "key20": "HR2cPyQwj2pN1EuDyzgaPGw6cKEbn7UMfjrA4QHCHdb3boSvE7dx8FjTwS9zNa6gV2NW3r6SqBWbDmiZLPoQZAr",
  "key21": "55KfHY8KtQ39CzPjEtmZktJX7WaMv8aGk7bBWCu1mCB4VvSrawLdADhstEiKhjx6rbsiZ8q2dAQYwkNo785PbFuG",
  "key22": "2UybX5hEKq2kpDe4Bmn3MLnY4NAhHJ9dyXJYUKpSnYYyXCx3XiZVjpnycXy9J4mgbgTUKHaKnUBS4rXWoUFGDMRe",
  "key23": "3oaMVREoKbs3BtCgTjpq6amtWk1B48gwX9AbVHXYfRc9Pb9X1W1gvN8p1E4irhGKp18jpDRtxHsjR53eaPWzAJ1s",
  "key24": "hyLFinJgpAJbPreqbRVb2qpj99kg9nm5KA7CXxJSvHTQExv7Kqhx3qtcQ6EhFo6pWo7FxqD8jFWvstq4XHZ5n7d",
  "key25": "43sb4XPyme73R98PH4CQPFFqrPXrgQfb3iWfKM95pq7YE8AGGPMWLe5cZYuUgNT3LRophD9nmhKqC1CCf1748MN",
  "key26": "5YEC7PFxHcPkFbxiouq73bzSoTvSmFPCgoZ6jhZ9kFMT9JwyDXgK1LcrshVBxXNZHueh8jLnHaQc4g36oUPpc2yh",
  "key27": "2tjK8e2HKcQAP7b4QTN9EEuaJEcJQhAwS4kkyoA4NhVoWUMyY3GM8Spm8XjBoHPSdPRuJRYnTKUhcfLcwFfGB7zY",
  "key28": "5eq6V5YJs92sq1ZiD5vn2YGi6dsPSpcyG8oEnGTjHiDzb7bEQTqnxhQZz3xbKSqJna9ftGs3Yveu4myos5rjPhA4",
  "key29": "3TEEYhiiQ7MGJpZ56Y7j8urkXfXUB1dj3ZTXSzPkwrhKE8cdLZcGwswXP7ND6Zu1tMzW5KuqRQ6EC2JaUcmx9psU",
  "key30": "mjpy2cbiAHDToi1s67mEnu6vWRiGXPEfc3bWs5NEWyxHEbd7AUvLi5pQ3Hz5GmWmDqb12YPHmTbzcfWzqwiYPXQ",
  "key31": "5GZ7E5KucqqB5zkzPRxiogodek291ouEQaKd7o9U9PtsN6f3VXysiGaYbFHq3G1jL8XfUvAouDWWkxMcfnKFj4Ck"
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
