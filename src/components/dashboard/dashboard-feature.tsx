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
    "5Ur9bvkTvdUwowKSX8a5pMHxmmo1ishj1vFkKA1TvPeK5QznUmHiYiZaHAfvewxsUsb8WGcAbmJGVa6BAXM2ye4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htU2r6ADQXhtov4UNkABPi74msi4JXG1iFvane3VKd9g4haaba7Vv5whr29LNExKGniJRB3NdgZTyrTy8Q5w2HK",
  "key1": "65tmQVvxpEEUDae6tZyiisesuYbU4LqFvBWAsADy7nzvagbQc2vyYSyrYVNuC9Fau4cKSYCMDzqyibJpnAqwZJdp",
  "key2": "4cX12hrM1Ta7vPMgzbGrjJMVjXSDL95qPACytXjCEbSsX4MDE8Gv9PFif5pL678FGfBfUmoAfEnoQKE1cvbeGvpF",
  "key3": "2GsgL3Y3jKPbn8SWwjssYApbFjcDKgiQYdW3PvGX7i8YvYS55m63wdVPrVJ1oekH57qgRNJLj9rofoy1fhPh8V12",
  "key4": "4eaWcLY1U6FpuGvZwHgH5vqAheQW6a1VqZMup961e7YpFmagHTtbMUSbUUKqfXD8LGpPgYq57SeGVnsYcVufYBrF",
  "key5": "PLz3EWTBdiWaav8ZuJNrmJ5h7HxqiJRkx5jmVhwD7gcjCjwhbBmfRsa5AMR9jXa44yNnxPd33nWZ2BwDW8xqj1C",
  "key6": "5owEpXG7iVrYjSM2HyY2UdAMaPoBt7vrsDZmJyzvpZbLCcTae5WESPicCGYVV6Vy4FEaq8XUjSWeY4b2ZK8kJjDc",
  "key7": "3c95b9LK2cQE8kD1Kxd9RMPTkyHUyyxtmrJxD8PFrUR3SBHwrPCaP7QuhSXMwGtiVHEnA4DaXC6VqDU3FK9cv46j",
  "key8": "3RBVuAeQn6iSPWZFnR2uGWhRw5hrL42wn1bJ9W34dWwi7BfX6yBvVvGoYjBsQZ5yx2hT1xmk9Hq9CDPsrFAenK3d",
  "key9": "U5SaBZ9sMSBhx3DXrzA9frcRmmcLFExq1obtq2WgfDuwzCxjRpME6QdfhyhtkC2jYkSdBDAEh2cieLFSCCcSGQd",
  "key10": "29mhEdCv3KAaf5f757ZrjMbgu3oWQ1epYPiiUU1sauDAa7ageKxUo8jdjxYcT1CZRhS4d78Uqb1xVf9EM9BZiFHX",
  "key11": "n37mLoJ1tUsE4HBRotRgXfYbwgMwBxFJik65M8jExigSH5z8SabUBdUrJc1RYPUc5JiqHjDNsnJQJ6maKkwWMn6",
  "key12": "45yfh4RpQ45vPQd4ZQ3yhAAaKRsKXEz9XLPPkc8upSeK1gwLHrq77sgzFozpBkqMzDhtLwsQYYkzSXT8xGArkBCr",
  "key13": "3q5vJ4ue8DJKqSQEeyE8wJZZZgb7SiTxnjn9y5MzpV9e6Q4qz6bg5zCnRmQjNrS3nvSxUdybqnvKnKEPTDhBpAWG",
  "key14": "54Hg2AacPXhPt8NTSN21pqeW2PoquDPF8wHWUcvWRhQXKLVwoFDuJbio1uUGchPZBbgmPB5cztDNH6DZL6pr6Rwy",
  "key15": "bGG3BERMaq5FNgjgkZFq4CgzcDKx1oQiawcQGYr6V1sTNLuyZSNxBM7ejb25WBjTixaXNVuDEHtWQhzbzJZSUnJ",
  "key16": "53TksuxUaXZkfKEUkjHop8FeUx2bCAKp85JqTnPcM8JKhvXb96k6KG4pJTaSqBQrafKygJdQZ5GFJYtj4u3Xn5ge",
  "key17": "aNrT6CBUNbutLmJjSTpv5LfAovA9R2pbYbcDDnoPLhNxNRuSsGx41n6FfHWgekcPZvNKuRuBtumxy94HbuRUXxv",
  "key18": "2h9nb38cFKf9tKjmPB9ZBeL47HwzsDZPy4SaM1aWoJq5Wq6H54M6hmaSCn3cbecLE4BtffrkjvwvnRQzsZzxjZV9",
  "key19": "67bEVkzYRHGYMR4u4nizg9WeZsarM7pcSJUDhubvHuaKCfdPjYi5Pi9KcJU5Mj8kK9Ssc1sW43dA9gGgSyPj9Q1n",
  "key20": "38CNnrQ3UpPsqhSfH6t2HtHW4KCKCQVt5m9vfgmQkvjdtciUkcpUuvcyS5KNTB5VqQTyt9nXmBTDZtjmM7o8MbTX",
  "key21": "4npwrg1RtmWc2o15hpW7r2vRvN25YmjsfcpAXXJSxHidB7rwNvASH7NtkP9NNFs1FpEat7kDSk2G3rH1qvFmXBgX",
  "key22": "3k9WTb9a1NgyAHHJaaZukBzJriVzgvYCiXR5brbr3LGtfJmzR49w47ECzLHLkZq6gNQSz42gFfukPvv7AYfZh1T1",
  "key23": "5RTQxgX8WV4PHqqzHFSBaNinpNyfQBaCLNUzXzGoHg6Z4FVuhhTWTVKoTYipjWsQMb8r1kV2NQKkj8hGg9Cw9yU6",
  "key24": "3snibwV2KcHTmEqpXZMXaCLW49bCuuodYjJNKLGyx86nw5p4hECWx8pgQ659Q5NUYAM8Ar7Hcy2JYENsxLaYdZyP",
  "key25": "2byDoPUMnQ7h7H5dU6iWL3WQpv7UBVZf14LrN19VrGaUc7Ksd8qigGxbfwVHsauaqnPJy2Uzk4jKYxsFfi8J26Eq",
  "key26": "27XXNaxn6iVnajyna3ZzkeMnVYGg6Hxa58z1GMuBYUmdGda6TToGMraiNNjN2gqLbdqw5HgBNEnEbngNLisAN5Zv",
  "key27": "U7xmxvBtZLsy25TxFQYtCYi5kUVKVBQkgo8jUpBF3b1KrwXuEYCJfgzf3XRexT8ztdH9ZYhaYbnPcy1ZgsaXT9M"
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
