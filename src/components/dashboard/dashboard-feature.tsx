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
    "wiG2KP34aQ92qVVnKaEhhjiLLajXA9URbVdPhnThgxL24YNfubseWXiQZ5C7FBPAR4qPdEjky6k3ZZzsQLu7qcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y7CBmyyj3CTMjxRqmNvE93rtGofxsxf8L74gyPm7PZaZggEBjXeK7NUSaG5CXKtw9WTFEjizQPrEPc7veHKmena",
  "key1": "BMtGwbRwbSiJ7bmfAe8WW7EZ94wFXSMhrrWASzP6q3UTBNsdxZFUbJMX6P9gcvzmpvZvvMsMuEJr7VgNL63xcud",
  "key2": "5EKQ6wpGiRpTZ6ii9Cei7FFNzzA8q5gDGwpLiJ4hGT7oNqU6dg6kVfekwRReKPdd3uK3UH4airrFZTGeooQT1c3U",
  "key3": "4CsTYoMbfT1SUutVXAMZgPBiuWHjbmFfcC319LYfnY9VLqDYNfXNApdE8o2KH9YcurrFjsdqPXTpMW91sNF57Ctu",
  "key4": "uD8F459CJ22vD7VXKgB97rwULNWTwosCg1BtLYvhh2yJica1xrhMxNsJtWbmTsvhH1mHtuUsWnQrFFNVZMGcGc6",
  "key5": "4KzXa5fgPGLMc4mMxUdZzxsR8ZXF5yFN1JWBVcc9FrrRtaY6Dri2FDw1tLkmHtR8bqAtyH6WpSQTm5mndk17xMYZ",
  "key6": "2ivXbY4tAJWrjmDx28pfjv3HaNVJpAsVkvV5MKVGLwAQomtg2vCT5gQSsKHuNhtq9ZusTqjfjTvnYc9eCtaaXvQq",
  "key7": "37b6iJDGmYhF3zcWs7UKBDsT3T99zpCVoqUm1r9GKQCoKT3AAVVtC1iQQRY39rnBoRZbo8LaaufPeZgQLhWriEX8",
  "key8": "5sHm8vMHo1wy8pidmGs19vb5o63QEDy2hpg8XzKTsUssJq8nyeqtdbDdu5B5X7ZJtehgALUj8E3U7antyWuKZYpP",
  "key9": "2niiegVvB17XfKC7NgHGYuvPGFBukYx9b3LSdD36x3Ejfqmzjb8MpFWgSbc3XMwt2wM6rmdLv7aDGw8hZR4yv93n",
  "key10": "26xJZBfUfEe6ebmMVCDNWqfZhLHdn5NWZkXVz2vyqaMEz918gFnHCsZvVarp98jq3M1cqxiVUKZ8tkVp18gxnfQg",
  "key11": "57tVUuH71ghnx2wsRgDwZaCwzM22JuGQeAdfkKFEfS2uTRTm5mnduhpwkMuRgKtBc1ZtbrsUHxfAA2sVJUWRoTCD",
  "key12": "5fXDEkbuagScpWSviYwC6C1tYcD8vkuzg1jf421aPgeiVQgMPDgekny42C24779HyQuAtgZQksuWP43j5Sg7WFH3",
  "key13": "41cyHDppJ36vtezee8Airo9uck2QMumbzNYNyXxNk3Fyg3WzhsPB5J7cjDM3rdbuAbo9B2tu7g9p2ydheP9too6s",
  "key14": "4vF8UW3vvuFgCFBheJvtcfXx3CNNi7Mce5qxe7A5wb8Se1NF5uzpG2Hq7zrmzFiT3j8aU2oRdfHFyLcFmwQ2Mmw2",
  "key15": "5CKyhZyJaBmwQtQQRphpJzBALksp5JUU4XrAE4ddjqbyCssxqw3KxK2Evy13gC9ToFuAteL3cNPqmyZRgzY17GQ4",
  "key16": "3QSEeVn45LaXyCymJsNSFLjPCMzLmWoRBBMfRTvMyzNVyLDJAWz9CfMbhCFb6mMCxCwwRUTwPGmYoCtBBJie4EYY",
  "key17": "4u74ALXVbJrUeEegfDxqRBVnZQpSEKXc1YYx9RxgdQXTorV5J5667PFJfDgPa1Wfaw4eMFaj6VyfDYwdaFziSpUv",
  "key18": "4BFiu5XqgJm2X8YUquuLwFn9K7wDBsNHM7otG18P7brJBsdSo6YrhZ62MzyjNbKHxTmGT4KArdmbQPJcugo1eUE",
  "key19": "43zaAyfY67WLPLh4y4RyqPHXqNgEZTdy3EMLD6S7ECStXkatkeNsDXhveS7kp3GyWDCxNpK432qQZYeZzdK19AbB",
  "key20": "n2QSoxeQFLS8aoqycbtHYP92SH6QAZx8AqmGxpxvwCMWHhDkxasjEutiMYbKVBi9z6veGFecVXfcRmXSS2yDYgM",
  "key21": "5f5CQKPV3U5cfjVrwmoEC4KUHWErFiNMoxDafZ5W5o5DRfsBAFGXsNrsAHAydvUHK986xj5NfvL4S9jBPFJgHV5p",
  "key22": "514vwBqgvXJ4DLR4dyKNUKhpVUK4c3SR5eVcR2EM7Vm9ARpyB7ASTdZUd6i94VQVQYSZ9Wxwu6ajmMtVCWkvtR3t",
  "key23": "AzXCBw9kTK18Q81zt9tq1wmktTb5emCCtSBVbug8f6ENUTLFb6i92f6qvtUu3WkkAaVUTraNQBwn52xWXqrbQPT",
  "key24": "CtVizBHsWpGHqsSSK5cCgpJUCTGgi39Cr3oXtTLmzSqexCrBstvNFPrn54MeeuLrcgpVDeDhvsRhKQ7kgbUz9e6",
  "key25": "53JhTnvg9tGr9RQxG7Le39mpBDzj2Nuv1UQE2nwM2XJfPi1KLkfgKxG6ucDJY27aBaqWjRTzmZtXyVZAe6gemuKR",
  "key26": "iUopjCvvwvBFHCfVodMYuNKPmU8hQtHu3cuxcp9cUTRUmtvWXpvTkmje7qd33R19gkm7jDuKuBaoZq5r6iDUM4r",
  "key27": "2wrRKbWJmhe9E3Di1bg1SX1UYktT8ok3vRq1tH59HTr8znhRzsHqcqKAMwwf1tq8JwULm52Agku165YG5v51jVXN",
  "key28": "57xqdWT5StpXDQ2MQbNcogauyhu4hvjxPAwHkxLk43NXu6WUxMgdroT8NWk4veDUt9DEdU3J3SqJ1sZiiWeqSHWr"
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
