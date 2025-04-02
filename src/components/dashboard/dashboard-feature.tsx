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
    "N6Qw2iVkfc12NyqzwTWr8Qf7WSi1xPMoyXvfgsMZdD3UELmUQQ52oUMASdX85uzZdjvnuGTqJp5aiEmzuTGAgWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQaeRL2RaXoCZSEkUzHBQLWYksQWsuMagNqGxin9rNyDhKUKW3CVdGfjtNr92M8cQPQNhPatptKMPkJASw14j2u",
  "key1": "5sQT3dYdabwq8TRDos148vqQyUayGE6d6KBFpYS2YHENZSXycw9Ue9gkBq8QybkxoUCsZdNo5tRdZVVf8zDPNe4V",
  "key2": "5uNxcuszmNTG5yUHJmL5nrCcDP7pC8mVfYrJJd9suVGhKKNXNPtBBXwZmVFMHv1Lti5ybLYUSYhhQzdz4rqzU51x",
  "key3": "3v3LweUUu1sjhjGhtF4yPp3fJaf6HuDxwNdsZ7AmXexTPKMveRyij5gyyUFXtx6p1tNvqBzuBDVNumVEG24LnaxV",
  "key4": "5GYfwak2B8prTS3kyRnyEUGkSA6P6xV6rci4mYtJwcP1bek3opdzuKCnXFLW5cxvPtkvPxjuMfdM8gWhde6Si6FR",
  "key5": "37zU4riXiLpr5bCTJr6BPvA4U7bERDwPyffMng5qtbEhhryStrUyE5cdVPJ6oDvPgVm6KKUxGb9zULxrzdb8NJrM",
  "key6": "5Zam3M5kXA2YC79KHGFtXKyRuE5GVtbwdSnQ99sAVXLqBPaudLy8eLWk1qWuhLC1bxRk2bJjR4ckvQM7qkpWVdyc",
  "key7": "5QDuscYXUJxzjJhzxvAof3n7pY7bQ3DD4iXftuaWmNqrMybtGU4rNiBErTCSezYV6hPkBZ8YnFzr6pL8LvVoLuN5",
  "key8": "5r165ebqPGMyJ4SQkrwf7JYpf9Ay3My2GjsGj3CduRJcDnCHebWj68vNfB9PrnmGnvVgzbBAbpgmwcwp5zUmgQWr",
  "key9": "2j9f2dhqb6B9qzGgU6xy8RiBWpXjinKthCe2FwTkcJbqoXpKxqqXXwzTxmaxAF8oUQQomz38Ax88M7F5VkKUPjN8",
  "key10": "kCSCnnRGYPJXmnSN5um2ztGKLhDLbFBYdCK1VQdR6XN9ohVtY6WSBUeQMnpMPbCu1ZZTdfXTf9hNuaFpBuD6bDd",
  "key11": "4eLPWoLnrS1rYLraMn1tD9LWdsMMESV4D793r9kiCwuB1kf5rgJUcqqjWuWhJW9PhtV7tj6ktacY1cvYjEQGDAQe",
  "key12": "2YWve93anvRS5tAYGJqa4yReo58j8n3ArtFrARDkBnVX5ZkzR7PCW1iH2JopBEUk6uKdr87mcNcQ3n5jYWARbJe7",
  "key13": "2w8hmW23SeMaMFVQWG9gnyQ6Ms2UYqCByyZemc4iEaE5xBJaamwnuZZrXiDkgHQbPwSwZXcx1BzfdR6aegG6QgCR",
  "key14": "4Z7JBfxGqFXR1bWxmzeVLN2SWUGFsrqDYSta82EgKFKkDBfJj79tZ7P26dboQc5zUxV7HvhjSFmZ715nvw689hJ8",
  "key15": "3cLxPPeoF613PjAVPppvA522wSybp1URzViLG8roXFspg79RAhyyP7ZwcGnzAAukNQv254WbAYvb2oY86gi6Qec6",
  "key16": "2sUCk3y6aCn4wpTk2YTuewqRCjULJLeqQJsLr1gBc3cLXBzvM1vJM29PoftEkds45naZM9wmQkyN1kpvdwVUG3oj",
  "key17": "2YuVxrKfFd6StenE2Conu3sX9Z1zVHjrt3rUYygcY3831aFJSdorsKZXJDkgPJ2gk6817HP5MPBuVevYchjMJmUA",
  "key18": "2S44BKefLBBFqJFCigCLTMisLfK7d72paJpGJZRDKbzX3J8nEWynSGCf6aPv6Rt1FiAHcHGU15t5JGRWZg7ys1od",
  "key19": "Mp8kDM6dwMKEEPWGX33L4EUuz5PPGcvvH6iMuUHSmEWMSwDCy5rhn46QyR461A1QXWvHEZfSA9mMSzhBXZDWSLT",
  "key20": "5ou2xo2Z3eFUDhBkC8j5fgbPPRmbYzj9PivZjnLk21d4xvh4oRAYF3VRNJytxSei7bgPdpF3PZrNBPJhAn3irXLZ",
  "key21": "4VnzuVsXbRLQhX4WYVkYoyMhwVDq5T5k8sCRig46XcDPyzcMaFLBitPcL6Uc94TuwmNUUMBzPq2ZG3Ss3MQ3pzjB",
  "key22": "5HXfiQSJB58vn5kTWbUhtaefWYm21Gt7CbeaTo1KWvFReidvhYTBJrVSyWrpXCq5NvEN43SVqmFERJhEFKyTkzsd",
  "key23": "51wHw5Ngp4JQ4MmX8KeBnvqsFPZ1yZ6pAm2kaFM9nogbkBHYEzSUnna2E37ku1BeAqRvcjEauGQwydHxWPKyYMBU",
  "key24": "2qEwM6iaVojMyDtYTwQx9Az5P1CqFBxm5sETfDXe9kxxhBU4tZ8szUzX1EcFwK7wLAECtwWAYuN4VGkkfbNMwUvn",
  "key25": "4ynSNKS3oqxJrAehHqkr1Lr4roeQzwCzDHB1wFET3bWe2Eabc91cz2Up4GaA7Ge3Ww8UWmwHDUH3eoqyCuGTYEUg",
  "key26": "opzmABT2qrmgG19uKH8XLx7Pm1s9Hk4ttezbCaY5pNvPnAq9M68mT3d4BjTqZwWuCFjRF3c5UxL57q7Nc5KJjYC",
  "key27": "63zogzLPwiPr3853YVexcSS68fd1LQ62193gfsa59GSVVQGJuYvJrczFotwPwZpwubazLCw5TbjZodVprW8FJkzK",
  "key28": "3d1tkqd5JReJzxEgVYBj3EMHe4GSNU2cr3vKua1F81TqaGpyFSydB8pqjxMDrbQ2Sm38fNG9u2e8ija5mAm4FVh9",
  "key29": "2WHPF4oStLc1rzDKzj7ktaLi9i6qipMA4Pz3rfD4zkaE4FfYcTsdP6QxrqYojUwidUPnoxfywbhLCk9PCj7QNubF",
  "key30": "1yV2sLHaC2XwAmLjMKYx6nSqoBqm6gPknWqUmqU6XPYg618SNJNs3RNBAS7WLY8yws2r9N5Z6i5WZBxT4CNVvt6",
  "key31": "ie9dG2iHdr7mcz4JYm1TsXTmGatJ9jy79VTwNYbMJFjjv4hfMogZp349MsTypfxHgSQTE6YnYDqUnsHCgCzmuUg",
  "key32": "CrTHNzchPwDB5dYXiEbHZ7XZ3eyAF3ifswt7ymeKgUMhEuZQwNLPguNpiEVHpX9Y7o6scfjw3eUXSfJVKyAwuAC",
  "key33": "28n4b9eeTj5Q6h3t9rBEgsMeMWGVGPbCUs2RVHKEnfmGFcYo2NFAi83abzjfXjacApQNbXyiYoG5B3u2dDsqEkaB",
  "key34": "63yLo5xzrm4jRj8kfREPmBiXL7xbjSPAhYdmpXzdYnwNgfSLgH3JQB6ZFc3pWQ1gBqqj8B1CL979RUdL2uc6h6EM",
  "key35": "4Pzgy4gmghuk4JVkdxAqiFi33tbEHKU3LSz7XA43GjG1x7ZBmqtwdcjsSx2NbyMKC3RyLHSm2MQiouRWSLznB3am"
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
