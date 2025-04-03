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
    "3UmpQBWBDeR14wykcfuLy8vZiwu5cUp3ADmrrJZymmka3MRzcMd76uRbmh7kXcwR2f2g7Lt3JkZ1jQfw6qxpmGur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ekTGyrVuerzTCgQCjDAy1pw1gPRU8iTMNynZo9E8TYWeW2im2wMUJDMgJ4AKPpMTtCgPBLgXQpVA9Nr3HYH3YRX",
  "key1": "2xbLKHdUFMEe9aeHXQbb8iwXaYgiGkh41uLurrnEV51LHjXF7TYWoUmpRhGrkEaXovcjkJ9sZ8PCSJB8mJTEgeWt",
  "key2": "BDNpNeXSAkjZaJCKq3YoAh1tvti7tXyL1KQRoKiXmxaYPuW3uxTSjiYsUWvEiuWww5i2PDccaZvc9vxxpSAuRDv",
  "key3": "2AYiY7cYATLzymtcr4QMSDh4ZnhekBtGVoYagYYWQhND9uuXnvV5YwLsG32inYSEJY3x3Ytx5xqjEBQyRSXH8fkp",
  "key4": "5LVJKuzwibqicFUNnhigC1ES21CVoC6qxdnkDG7pD7cNFVJR37YHWUaSRP5daePZX3VkioNptMxT3zgC9Dc2z31D",
  "key5": "uQeBEM6M8VUhqtarqXc66pBQKVrBFenxCtjBJ6cyytaWgnwUsgAARwArkqRjtuawNHTM9MrsHZdpzWAfK9K7GFt",
  "key6": "pBFMtdDhE4Nu3F1RsrQg3QXBBAKXcrSqJ38qVKoE8Q8haNnKYGvm4S4gZPqd98NdXcs9TFm6XT3K7aP9vSQA9ik",
  "key7": "2xPHXpgSkou5WSzqktuZax5M9j6GZDNA8dmxyW1UF6S6whWdfC5T8TpyihRoiJBA4FG5YHHDTTAUkKsBTcWuX5S4",
  "key8": "3hH2G3GsV3LQEtZAD521D5aZEvAEyp958RnrAgRUv8GzV6NaChye5ETBk4847QgDbJfUf1pzUr8dfHTPCxXgLnNG",
  "key9": "2GkMKFkN1JxuBRNSNrabk28oh9oWaBxCqxX2YZijogQ7yTMMfwL65xBUGSGBXzejRCVjDUujNXLN3qt3fgtYkyhJ",
  "key10": "5pV7tgi9pwviCBFhuwpikeg22og6XVF6quVfXJw92Tc21nKmwHoBpgvv4ybLv1C6bPfc2gM6wqXySW9L2GgFkAop",
  "key11": "TCc9YnqoJNheUEsbQhehV4gzHKGaUuSe8V9XFvrvRv8zvbBxpWQskSW655t1HCGqJdjvcB5f3Afk1iqD9EwapvZ",
  "key12": "48U6ZkBZLU6Y5HNpndSkNqXxyZF7QTYmhZzZSJmoevwsE6CY6aLbqXFnGgKwBe8nKbEMA3iPTzX4moV9r2f9SqMZ",
  "key13": "5PvFap6okF5ki2FuiwQvsootE2TWrh7xQt3xb1eRuX5x1fGfnmt9FQucx2mKKdHkdhSXwzqcbKzeyMnGggoZnoh1",
  "key14": "39FN7EuteyAWYCZrvcy1L8eUQHU62WuwaCWBTcLoSbJDQ3NmDoY7fFgwYJf13x7HVGr4oW7JuCKSb4UMmAiR6yVs",
  "key15": "46UoszhW8egEPpgNGqSa4fAjSza5inXHQW7seyk55G2jGuu7cNrkE3AzwicAHZvEhH2h2FcufJxvcjXmp1mPqt7X",
  "key16": "2YCjWBzaPuFjFBnXgzJYTVgZbzMVmD8BEwirZV4JVFULFsTygnuMwLA2wRJ7dxxfQ3pQYtVY6W1jYyU366BkHgqF",
  "key17": "4w6iHTFu8wgCau1qx6PZSLKb9jpUhWwzXhvkh2jkknwri4hMqbVV9pXqzwtXCkCYp69XzbnJxMDCyNiyrKC3Zbic",
  "key18": "5c2CvGhLAVHy1pGzXWhUXsArQDqzC6UwyYcM65W5Kz23kErhQfoRVoTnqrj9GWDfkbmi4oEXxumdZkj45Y2XYfCB",
  "key19": "oHvrYqoiCcmbuCJE29YfjBMYc175PA1QxCL2gv2hDscH2edsxGDiFQY7NtsCX5b8b6WKWcFrCKqiYZYuqFQuftf",
  "key20": "KQXy3pzvMsRfLy8HNMHGXZTgjrYCMC29GfKagF58D5uMNQvMcQKyBx2CCcsA8dBN1pypXii5WySLGFScxpxNERj",
  "key21": "4F7GgQXRiaQQgmx1oMXiCRezHaarFQawoAGQD4HpdWH1hXPuAMV7xeZPm1fJhtp8xoUJ1BBAytXS2mtE36h8omFT",
  "key22": "38Tr8iADwW6AcBo2wCBwfzMWN8Afpy71rgapuWyEGqnhqxeDY8EaSkwqLZndWYxwaF22brUs52WZVTY2o8DrYwju",
  "key23": "5huknJsn6AE8aCTfHXomckEZWYJNnSxyFmK7oBwQFP4YDvQ21D1sAgHQ88uE2PCvPELJLTkeNknAFSsJJtz1jChH",
  "key24": "3RzFAd1TSjggFgWPNoNdF7rq31XNqEjyMERJdkP1QPdkqPR4GpuWbMdEGhKbYLMN7Hh5VGGRiDPNVGVK1auVwPN9",
  "key25": "3LgJKgVvfuWD6EvqfkZK4yTUkFSYUfhvhW2wByWVBx3sLgQMuxSQHDxBqa3T5tQCWSpUpf5UYGQWJLfivBfYHbr3",
  "key26": "76MXwWYdM52GjAodhjeeVbcdtXHuvKwcSYM2xWKUudCv62DwmxyHuTBfq2h8THNbK3z7iZEMoFQ8Lm1yuhzq8SS",
  "key27": "3yFdFyWFGkHAVhfuSkQkUq6SLczfWAEk3TchhD5QdNx8aaQUk96Bz8FMMrdL3wxhx249ytnhXBdsQHNEpVbq1yGg",
  "key28": "7fn3uZ9iqiYtiQXzRK3Wt195DeamRrrKZVxzDBUxL2zvM4eLawTWrJKPkxW2GvQKDqxCtgyiV8TPzE17NayXLrD"
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
