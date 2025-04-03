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
    "4njpb47FyudxXgDciYDKFjLzJdbffbLuM5eWKR3F3kFis3xVD4Mj2fKMUFzCRAhz3TMBJRsfELfBKSh3DojnEbje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xf9ph8McoBLJ4jWWVjbynzLsqNnJpamV7sgwv6p55VxU1ySMRTxnNEMH9BQWAQdkZUXDoC5PnKcnvxd8zCk5rq",
  "key1": "gowGKmXH4oaec1zmzGSF8Bna2TrwprLbZFshbtP7tZiiMXwvtY8mskFeRKLSzW9FouTwimTejB4uax5cduPGhAu",
  "key2": "YuNQTNE81mpdY2iwJQYQCszWzMKThrbgZWTk7gNiBsmWFdAbE2R3x4kmvMj5khCHgkdzv7f1Kno7osKPUr2sNaL",
  "key3": "2d6TFr6D44j2FPjrh7ywfuPdVDZr1oF1JcFRDRnLrPXZFRNhwLaSSTKmQZKYhSY2LfGcuDQU6VKDPGdTfgieJz2T",
  "key4": "4W7JCwKpE7RM5qr7QpDF9H1F5UrR2yoibhrXKrZ6yy4fBNwGHhmueo3KctHmqkbfUFCs3stFzQaVmk6GfJhZFk37",
  "key5": "2TbEWtLAXaT3jNc7g2qDNnt3QQvc89TB72LFZxs9EQkAF4hbJGT5VWpKcQvaCc7hDt5MSa7EARMMTVsNBN1Fe7Z9",
  "key6": "4kT1EA25JqHSPRHJ94JyAC6VhWKiuHC3zRdGL25im9VGbJmoJwfxcyvQcMrzcMMYz8JvhHCmTF3XNkTFhhGvQeL6",
  "key7": "4hVD2xdMf4NdePWQf1JEx2VbR1Woq8SERAVgnr8TiaoU2TwCA6PXu8PA63xPXBCRVKwEa6SvS4vEuEzdm2MHs2Fo",
  "key8": "31vpKeaTUGuos1ErpvzcfqBy47NsNbF1RwF8JoxEDmuvFu1M3MKFWy4z8Tjtvo5cqi8R3D1JSG7WZPZCfUZTybB9",
  "key9": "3KmNG9aFc9KT1wvuUpJciDa7MY7Gni1tGswHhwPTB5isHoEremCqPdVzpizCmoSuGnwP5F3iiuCuwdx6v8w3bRZp",
  "key10": "3vE4agr64iP3pzSoqf5KPowafagWqbpPUGZJs9L4TBM7PDALiezXEuBjXkXgDsnRjMXn1eRk11Zo6miFEzw4nTKb",
  "key11": "5jLCng6rRDQ6Qf98m22R4H9Zj2knAmMmTLou4dYGDtpYrx6yBYCS4qzCZwSULkE2uQRNWjBv5XjyDxk6GgyxSHVa",
  "key12": "2RohznfKU8qJCFduLXzMmk3mfDP8MN1suzcZXQwgnB3keo4C3zUK2Tf7teK4pLeiVMgraUuPqTCdq46NPE4YZTxx",
  "key13": "3VeUFFGD2HzspZyzZKeQ71Q6o3NBZPmgd3Fpthkspu1HxxYbgQBVywJCECv1QcvANucPaqMEyNcVJFxe7QEr14gK",
  "key14": "41dGBmZxBdbv8tCyX76N6jF6q4Uw8U69Jru5JjVQisipPs1UdaJJ9Q2S9g9diNh5xDWEf7YPkVbXcJWwhZuuxB7z",
  "key15": "4eXRJz5ELpNUbci2UPR3jtpPrjWgTzqr48Cid5D2yXvxjsEnMTfhJbW35NJDQLSXDDuqorJQsDCjbsm3bzmvgasx",
  "key16": "Fu4APBUjiS9ocodTvR3BogBAjYXQvqGABpHBvNxd4HNH411gtWVDANsyZrLSEKhd4SPEtFTkW54BYrNh4PVtP7e",
  "key17": "5umfBZbrXLxehF4rwSHGgZBGVXJCBZcJJfQhYxQbawSYz3sFYrShTqdA7A2Gw44jNHtyM9DXz5kMT4KxecN5h17p",
  "key18": "4yascU6TwprNZAaGSLaJVMhGQ8GcCv8PLN4Enq5Yqkde5vFmyFnq4Qz6v7eR1jeRn3Wj3yYbAj1b4uapLXWE1K5f",
  "key19": "jRWdLr8RZVn5kUPcHZLkKajHwNguPVy1dLFqpUTMP8kWMHxcHeobeuDxxZiyhz9D8oMav6EiRUgNnjr6qaevFSM",
  "key20": "2sK2AZqpxsgvufoCmGfZT8fNDGejr8yVaLK8jtGnatv9MKPhkitLKxioLo1ZnFDiSGocxo2jBs4ME7RCEUDSEHRE",
  "key21": "q31RJUovsqHAo1oKBQtCK12NxhKjVaoJkZ8oZTdMoGQtDdDAjhSZqBXgm4oq12QWNCZx2TZFcpk1RhqEf4GMvZ7",
  "key22": "4rA8jWJf9QZC3hRHXurDZ35GiFyRz8usYxXyZ1uoRn6S7Uj1J2nMcWkpUUPGUE61PY657NSYYZrtU1ZnT68xN3bv",
  "key23": "rCvbsNL1YzXTNzT49rfLQNxDJE2HaksNdrKpQGBKjbZAYQKRGuQWRWvrBuVvc2VtHzst6Kj4zTWodNXZkaweZ7g",
  "key24": "42URFDhzw7zdvvkTYRkh8q3H8h886ijQveiKK6TVzQCRTF4fwq19aMjJWie74zC6haDh6mrFVdEbEZHk5z27jVKy",
  "key25": "3KSYQuF8w1GfpPCi4TtVk1zVSE377oKkVetmnz3av2gLx7J7wLBdDvbRSS5hD7jQkSPa1gLdGqu8uHKrjjpGfXhV",
  "key26": "24FVFQVi4MM7E7wujw6zYyDkxkqKT9R5wXBuyVfmeRVgiz62w8FAMCCzyceSmzUT65XjZPHGWmbszffy8WekCF83",
  "key27": "5J8XfEkBKgNgANyjyxjQxAsD9iVhoi1q88efSXdUFbS4pxCoJhRpPJQ6mkQJd6nvdYvdmUiNxWUS82CsA2JGi5yg",
  "key28": "2HrUVFZ7MFTVuzQ6eVGccMcsXqxSynUZ8GmrE9uuuZsEuiRKkxXHJN3LtgxZkpEfmBwgnPWKceaPb2DRk98ivbky",
  "key29": "4ebjxHWc7GdParvaR9se142QhhX6azr384LppCRnv8pLG3mSi5oKRJx9m57pq1Tfy7GG1unWup9m9E96D5so74eU",
  "key30": "3mTpgBmNhNySVinryMbU3pYRMqwvLreZFXt1TN2adBXw4Ha3eGur3Uzxc9Ez41YU1GiSGCX6HeyVGfdyMCmqiCZU",
  "key31": "3HamGj65RhArqxf5s5imsVaJTD6mUGxXWMqH3VsZLxjP5q5zUdLHcmH4Ps741KdrYmYYDYozs62psZRGp15g9gpF",
  "key32": "4r2yrN1hBtTMGzaTr423Jx318R1JjQvtZnEWjiaa7NtNFhU8tSAH6LnDjThx6hgoftHner6FzYmKcrJi4ZXL1nRr",
  "key33": "5ptTEe1NkAGAvJHxJeEg2E4r9CSqrsNHBjRzshfTJ3bhe9piq5feh4trnfZ2DQYzvRCRaQLE9NQeQZxin3T7z23Y",
  "key34": "4ogvFECK8M3r5isD86v2W96KBv2W1ZBRN6Us29FEjZsgREcK4g3KJjErYg1rAatTNWzPTwBBU6so1rCrH7AfUcti",
  "key35": "QxzzGSCASyPCaDGA3Qbosw1A8vBhmpfewMCPqmhJVU1aUmoLnK5VxcioYoRi9595VucGwn6wD4beHyrTz3QBaWe"
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
