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
    "5tkQVeFYkGYkqDPKV7EV49kQm6JDmppYp7MZvUo3HyBaKgQuwqVtRMwxTZfRHBNH2nHEK7qY6iqkuGFGMewCFU4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4gjC82tLHTgqQS8ewz4iiRENrSG9xSr1uusTe47JJrhoTdxf2uFe9WYrttNgK65WGRT42nLbp6A4AvyT1rLDAt",
  "key1": "HSNzZJHHfZX6WUTDq2Qta9ZMYAyew16vpAKSv2frSvGWo34RpooSFZqsZ2hdjq1SpQA3gkubb2JmR2o4hQHHSzz",
  "key2": "3rxGvQ8RJBYgGX534179xof2BzXSa5Aaj1ZqMFKssoCtcvxvA3KnCLkuv1W743udt7uCHrL4Ttaj1E9AfqULEuXp",
  "key3": "2Tx4uHmoghAufgpQdwvJD2rgqXjVqgpo27QWogezqjuc1Xc27HhWkxjhzbqA3tDTz1sb8jAHsL3qqwXD6uJ663Si",
  "key4": "xMSxWpv8C8XK4pZAaxcCdgHBztBUL4kua4uHphNjf8HHDMQfpAR7EtPqGzaA47M517TA2Hg7aNU7Dd4rAD7v3eK",
  "key5": "WtgPztkum4G8EwF4H4P7YkeUiTf4BXxtqhXXP4PwXEk6Hp7ausVJ1RCAmuzbdELLfyZznnowS6r9ZCE1yuK8yam",
  "key6": "3UCqukhCCxQmLR6kcjHq9wNWwDmdY8zeRQ2hXuHvp3jkEKsmkUm5cgbLqXHRu6hACvmUFL1R4vPdpu3Lj2JrUVST",
  "key7": "52VGC2GHFs1eT8VsaoFKkojpHAXrkZQoX5n9v8a4GDSPTLWBggzHhuZ3sZAzVCDRYhUnRL3BUw2Xz6dfqnwxe8dq",
  "key8": "3qD3hx1M36c3QwcgUZebXtyQpfUUw9MRV3RWGsNveViCgfcERwHnwUue6JX1zMSpM68ikbJcz8iypsnAfn6Qxv1Q",
  "key9": "2AnqxTexYENZze2ibamAfgTyh7Yd52upZZceu5WhVU2yTQPWJ384Ps2u5S9Aa2nHKJz2kDkdCN6ZYxneh4z9Zi3R",
  "key10": "3wac4jRfYJGW7ZqPYmFTrvWbN6BXnMKDfco12JX74gdxyayLtN8oEpBNQwdzmZCpncmfKxisQty4Dk7u9Nyquwzb",
  "key11": "3mFqdrKyYe7NQkYzJQGt6S5C6kEQEe51CmBQbKrWgrwqpcED4MLihnFSog6HdxuceWaxMScGypGRupYrgcM9opLx",
  "key12": "4b2ddWJP7z2BPqpyHcfGKaQ1UgCBKz7kNXJfja2VmYvA1vgDZUAuyPFWCPuhKxmuTp4exviy4xSebyCguNFx8NLy",
  "key13": "2QD9KVupLHuFZ1MgFPKycmsaQnz8VDfjG7PRrZCuSjCm2bKpwSg8pGjni7Cy2zLWnyGbDw54UphFYk4ceZ85y1Pj",
  "key14": "3cwPkcb26v8jWmA8GVq83Tgx5BjNnKQVyXYrhiySF3uQRbFh9HEM5zaP2ruCJUzprJfdD3pQedMAzeL7YR2V7Rw3",
  "key15": "5xRWqWo51BWp9TjzV1PvtEUyrmGNTfaadzhbY6ofg7req8z5Nn3XRMkH6vKsX6tZpMitzJ1gJAxsKgTTD5qxeEop",
  "key16": "V84754AoJw77Qw6SLtjpmNLR2qL6hk5H5UAEcnGtWsNQikeHcHcpU6WHRtjb5ggbs1pVvVTcsTHuA1shvdjoEQQ",
  "key17": "5sjGmkA8aWFAH1BviniEBAtWtV4pmXa7g4JCqg2KyU64haCnHvwS2xHtryyY6nV5WT2UZJnfzvwrzcHK6mLLtX61",
  "key18": "2DYkq1mB6WaRLUp9GYorFWwUqWvSNMCQSX7sNpxUTLKDXffU9GoBU8JWEerwRFR5xaatuQP1v21rDmsH2qAQi99H",
  "key19": "3G7NjvCBrja9fN1GHAX6tVF1tbLV9siWHyMNyMRRPLVuRAYzBSdHi5soonmwAtZaDEqoAmjgSPeKipuMxnLFtVjC",
  "key20": "YzXYgiBmXTeF5mQUtABnRBYfTdyDEmUAxRZ2tdMceN1HWeYEoHM76e2Jx4oda1RuWyWhCTNcZUHRRAK1phNfHPj",
  "key21": "2QRqyB3Gmz9bTv9tj4KJsTTbqu8gcM6TWRjGVQrSc7i2g52dsZJg97xctKjYGxTZ29MvKQ9RJmTcGcQLCfSL3imn",
  "key22": "2hffN8kHnTHbAUosgegQx8zPviKLwNfVDiTpg2mNgEX8tJKzi8QMKYgqn9GooawjgoFpVhRmkkNuJLLX3TKCPULA",
  "key23": "5Nys18xeXKMRATyqeAz5neB5aCxqbPAAug49BQDuq1RWmHbAku8VqfGuySfcyVLj3rg7Testw4VyhNrtYsUeE6R2",
  "key24": "2fT3323UjViiQBVMBrG1vbuoWofyzP5G7r1TjyqnWv56gYfciSvbp96gu1Gs18uArBGeyKbtJmQQabFg8XNV3xnL",
  "key25": "3xzoLVGxweFNHD8853myM1XFVtDn5ceHk1RMf2LAoUPBHXj1iDpXPUGsVh4g5mqQqM3HhQceKjjGTf8yVYWQqJoy"
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
