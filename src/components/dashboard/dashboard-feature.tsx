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
    "2TDPtrDtcvmEiXCF1TYne4PLf93eqHsWXdF3L5Aht1JgiPLHm9yBDvvU36t2EaGbFCxdNq2745norXm3nQipPk4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wp6iBS7XoH7b3WcbhtYD6XPp1vG3zVmKfu72hwvE4dGV9udC9TsFtfV7BM3XSbbxGReeZrVxixZskmscX4bKsBa",
  "key1": "4rdeYqZ8PPdSsyZzj4FFUyyrqxx9rrw8nYQHJt3LtJnduxNg4DbsyoZuiZsjbXoLJRvWcQhjAx46k2qbYBUkVVcC",
  "key2": "3AbAcygr5S1EHCQQ633J3B54CG22kkGXL3VTSkWSFxPtKAoFdeZQVjLcerGJ6DcZK3H5DwUtMRZitENVvEzLDLW9",
  "key3": "2egCyqqsNhUcWvFZkQje3rUmDMStCnKCTF8h56wBuxefDjdwZFwMGLCubSdsF3FqFri5gX6pQDcmRcApzhs7t4iA",
  "key4": "5J7zPBQvBBLE6EdqrkiTPiYpTqcpPAPjaXyxpc4sQXiehCYat4o8MutLdoJCfSqAxBFoQGy2ixBSe7VRjJTgRJZs",
  "key5": "26bNCW4FtmV4wKYY42cyrGSEC5P57nwC7TG9rfTgiXqyMdvBN9D5eKhabs4ZcnS95MnH32W6XvJKV1HTPyc4ntqE",
  "key6": "3fioWpYvXmEw2VAWf2mTjKkMB3jJbNug5mN8GoF8rfkpee8wKNwvqSA5LvfXnYfeyYH3VbsbXsjmbjwa5bV7TFki",
  "key7": "E98DmqfLaW1B4aVvS5TbJHv1Rqpcx8gMwsUM5fc8fi5yBpNDncK2Q1p1FLV3Lc2wGvGrEmieZfE5mZnhSWwXuc2",
  "key8": "31Lbitp6X14kxNjzeB6RJ4F6F69A2xBBANmVS4Nhf4cj9yLGZ6S2BVJvyHvD9QqoFVD5efWo8kgB6MRXJh7A66gP",
  "key9": "4F5KPRJzpH2tQyrXvTNbdozXQM8d7LoidP5t8gnuPWMoxsAXed8dJFBuECBpLA11cWLU32kiNYaN1rEgPEv5Zzq5",
  "key10": "4mQwaZDiHQhRJhfe7vdZMcr3s5aBNW1BSuygdKkq6DP6F3QZecSZMcqLUUy4EcLoN5effcdVLJ43YtBRtRLcZwVW",
  "key11": "2fXzyVjeZAHzoyjUJSC4sfCzT9Gg53rJEzewYp17e5bgPtmY45ciWMtx7vnPrJWErdBFobrQnJdrPqFQbCkJSvzg",
  "key12": "5dYV1vDS51pUmSsUNS9YFeM5atvU3QYnqHwVKfrVULftM3TPgPUSYR9gkwMSY3vj2dfKNA6Y8QDk1V7kkHXVTF16",
  "key13": "55PLEK8A5egVRQYBoxxFgg5HUJnr7oTXg3b1L9yz3XBiPxTP8kuR7TVR7Wpf3Fs5FaxAC4JjNc7vnxcb47mhzkiR",
  "key14": "4xVTng5nZrN2CWVb4fABzJbYaGXcYhoK2gc5zmLjcmDTWq7v7RsDJvWsQm2BzwsAvAairatkgKjJKywb7cpRywow",
  "key15": "4g7PGGW3gPDd7oNvGP3HqWLpY38mDzFTfCPac3bVvGpCcQBtkaMWPNjXSoJH6xAy3YNq9YK3PjhwSaLvFweENqML",
  "key16": "51TF72GpsyrR6FVhtGxsaymDLNDRMR9DQxdjuDkWw8K7pGvssbgocbzcN4znxA8h2Ur9Q7tXWAPDdnkdSWxFyqJy",
  "key17": "63VdWDK98fC6GcnCzkVrb1oA2nHgRc57kT4Y7UvqQ3Vpuz2HhWmA27zVWwP8KhHVvPDjFHxzipGjcChJA6JQYMiQ",
  "key18": "nWMiWdL7c5s7H1Wyc4UM4ZkEW1PEnsuiJvHD8ynCa9XpTMDxoPreeqv8to7nrYUcmjfFC4Vcv4XFKpEcD1qxDpd",
  "key19": "414UXo9oV9o4S7K2aBXoUxpmqgtWN9gBKuXxLVyKMMWBQXLkCxx1thXRPQ728uDJfXVjbUrJbQGejabC9FgnXCZ6",
  "key20": "2PFcrBP6ztbotYiw943nAaifKHsmYog6mcbr1ojMjEHXnmf6xnfgY29TFJndtxvdnDHHe8gWdBkuJmwR21ueV7Fp",
  "key21": "2xUsyQxGuXbfUeAgwAmjzAfaf5YvJXSxpXP6vwNSQBm7fdfMQ3AaT9jaPnMoqu6p4aCMPZ7AFrK97D3beCTCF3FZ",
  "key22": "2kUiFLykstCzEmcyap6K9omebaKjpWBKVmV5aqmJE4x3KrfQauUwehWL5MdUZoh8DRL8yYzzEv3abkuhahBWVHLe",
  "key23": "3xZUMup8u38s5EAat4wvwg4BQsrVHeqkFSiVGF1S58cao9QzLCGXXvZjTH7jWV3w9LqiRVso42r3q31VQwgFaqwx",
  "key24": "qnwhoLg2ThS9BSAXZw8GrijTowKb9pJqAGwqYfvxwTLd8HHPGaZKQ9jaeCgymMomyYVUFoJa1WTfsZ8JQBFXbnA",
  "key25": "64rF2m5oKQpigx1t8AGnPM1vyajMX9oyZicUeHXviYq8jvxUVc9nHaDVooWvmq9e3MRgN8KS76zNCihDP9qbda8m",
  "key26": "4UY7aCUNKs2t6RJspdcbL72e9gTxPM1gAcck9o7okkA7ZrubNfnyy3hbi9mxQqMSHzTYttAg4VqLRijEf4W9GXac",
  "key27": "37BJ9HN5XQZ8beCdfJ88cvb3xSNgWqCuP2DZi57RC4DNLMtQPGVrTKz2zAJkSwCpkMUBZzstPTNZLRHTbpuRvLVB",
  "key28": "3v2HKc22hnCrpGRgzxTmw7HVR7yYPbgcEu9GcBfV8EzyayHbtwddLafqdcfJpYSEJJXEpdT7hdoRa3z34xrXc9Sb",
  "key29": "2LYhvsbKV4myQzwg6jqNrkDj86rUbea4DrdqjzUBo8A2Ux8Pbj6nU3uausUoCZUVupAQ8yUpZRELjbPFvvjBoQrZ",
  "key30": "hRwzB9g7EwqBg8evNxDt2dZTctywLSBHXiayRmzFrSyaM3d5Qv7i2FJuSWpSLrkxwGU8zUq9iY4vaW2tBWYhc5Q",
  "key31": "3TqsbJCAKryWizZRpHjnb7oV342YxwhNoewGs6DhDSeHpreF1ZHcNE4qCgcYjcrUEieFhMYq66TsvCjLHRUJvpmH",
  "key32": "wtruwsUv42zShqj6ioKymSZtgsJc32sFzkwK2eGmhpYNsMxtjHifwEFbtCktV15Cm1xHcseh9Fe69kXPSrsTMqX",
  "key33": "2scgRtZ6JFKbMGBJ2mTWdYHi7ChGp3xEYnzbFv3GwH5yqQD6MpexND6hEUn3Pw9rHCR9Cg7yDudBErfy7EqhyPoy"
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
