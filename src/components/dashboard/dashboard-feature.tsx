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
    "NmjsqsF8ZmfhovSPhTBAuV9vJTGPvzUvrXdokhvVqRY9QbVQrFTT6NZKsJFWnJSi2LFFy91aV87JVimCkE9E9YH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zuJAdRLomtz4omWS42wJQwwrmHw4HAtJc6wPEQqQCAE4SVbtq3oRHN8GWvaUng9dzWjN2Xeaf5xcbZavXSEJg5a",
  "key1": "4Zd1bQLA48akWM3XJM99m7Vk6HtZsUgWyavaP4rxbrovkGV3hDUALuhkL6evPH4FRXxaQoF9fCSkpcdhhJ9wYQFd",
  "key2": "4pyK4cZn5cN5W7EcCz6hcemyNyxrUpcPYMzbmoJ4MdHJYK9Ke8EeQswR8YwvXpdEFBVw34X99VH5pXUjvyZ8P36b",
  "key3": "4JHAVH16mkpSgUtsUeh5URAo9J4i7GkumZAf3NmRCRRcPRsTM5vFavQUgNHqJoRD7du3F7hDxxHikL1tZdXQ9mPe",
  "key4": "35q5rD2pQWYTfdB8ce4FqMxf4ZpdfvyWR5rgCKcyVV1gREp6HgHqrXgJWCMpEQi1vxdCeGQ5dL8eSGgVgyKz2ud6",
  "key5": "3oVBWnxA7YU6C5CvE1i3z3Qfy2UscQLEFrVK4axaVSqP3ZX1KH4DHx4pJJavPdsevTsvF5HpKWuCF9vjmStvchm9",
  "key6": "3HSaENjyEz2TDjoLENHVx64zfjx63NexCiDUR1NvXYz81yY3LzBCWu2HwsJKp2dfh3qFJNTEUneyzMjb5H3nzByw",
  "key7": "xaVCV1YGJEWj6Lxo2yHDN9KR7TktWeVAngsu1buLhnN1rRNgjfGMqQX6K3urnojEaeLS26KwejMzQmUvrguCtcY",
  "key8": "4PB73bKnTcKUCY1hFbsF57mq7tUuhUhVjv5yxfxbi47ptfbbSWEadUHBzUpn1UqYDa8yeV7jMyzf73rfnq8mUj7o",
  "key9": "2Sw2zH9sog7MLuMphKVzzA2hNupbbuEC4d64huy5j99ppQkrq6Nj2kGVafK1ChHkzs6zzWrrhPDfbrKWMkvm2mj",
  "key10": "2ZNqDQhwP5tpzpXQW3bg8gfgx8aMopRgs993ZfcdADHhyxAnF94NQ75dPES4GpAiBdM3ChDJez6ooBYLftYtZPMV",
  "key11": "4G8Hu4hr5RYm6KU2SQA4DQT1bHSqBVv6T1UYzZGLN8mpjPyKrjrPWEhep81SuRwBxGcVWprKvEFnYMhC7i4AB36R",
  "key12": "uyopn8z77zUrniXSZfqNzM7uDmEPVwtKTDT6wi9umwjsv29YSz8U3Y8WSSNvYF7QcyVsanLWCHeegoXkBwfRPVF",
  "key13": "4h8SztYaud8TnS46TV2pGxtTTqTytML9AmyBsiDDtxp6iGR3KAG6soowm8PPcYh1V1d5SA1thi2NAzWMvatLUMRR",
  "key14": "53L8XvY8Wv3fbstrJ8Za4jrdLyHa6qACVWsF4ANXkYU4KN7qNtU65ZHmPTwqGyVwpMKxiNBJxumAbybwxHP1b1To",
  "key15": "2me4HR5aicHHD1XALUzjY5XPN7SRVf8KD1kz42RJo7TV4LWqKJ1szWrVxocMiYJfJZn5f3DxSSPbazzPk4vREdVT",
  "key16": "3C63bQmCUGXEBqF9XQA9DPskvzdAKzwXSVvsrYYT5GdRXQpaKdatHAnzLE7Qq4srnX5LXj84U4UXJZP4P7fPhwzg",
  "key17": "46QXfdRkNPMUXeGcgmcUWa11gECNiNfbF148MKy3twwiWPHbNENYaN9XjwgpmJD4yobVpihGPitnYvgSxWcByunv",
  "key18": "4uS6QyHtBC32dQpanBiHmZfLEXpTY6zBqxaTSHDinSK3noZiJESFL1e5Fhtj5WUB6kHQX97Vw2fqsA5EwYRfVSoC",
  "key19": "j4nrKtuxefNVrpWpuSiy6w7UCvxZKvTgCeRchw266qkQtEoVyieiz7AKkBcTy96bkDvRy95vorrzzPbhPEPqF7a",
  "key20": "34L2N8Ea5EHm7Ko9oPzijgkaA6wLwWXVd7NQSLQ6jkivYiZEwGmJAJ1RAG5Fbxb7fw3uZtCYY79u2vRNG9oGhd4u",
  "key21": "5cQc7ehumPsZgixUz4KnYgQNqhsKrxPHvyr2bdB11aQmjfaPU83cC7QkoGyccWroP2VWVTRwMa9wAGrFt46YLWrn",
  "key22": "2MgjwK7Z1CsysmLNEMgPP2iTqKt4VZBQtXqa85yhfYcXxhAse6S9ad9GeFzYCzjQEX7aU5GdhMCi4FUUANX7DLSx",
  "key23": "3qcWvcpWmxb81mvTYhxN5qwFxP3NR2pveGptzmu9xKKjLVRCitvGoF5gfLzz81YAWWEL1WZ2AG5cGjb8EXWpHrn8",
  "key24": "5Kj8TYRjGMT28oNjKsyD8ETvskz4h24cvaHXxNvjkgDArU9RiSFGgcM4wV6cUpEvYVvzd416D9H4KrnYbX2uvmjN",
  "key25": "4qcSZuvagVUY4DVy1ukTJ8jYCUeZLQvoLpYFskJAKcAFdBLWGmNTsakbccTqfzsyBmGwJcGojvyHG959AhP1pkg8",
  "key26": "XJ9dzxMxD2UEuGvaYsvS3oyqXyR3WAd4UAoweRmtG8y2xmB8wq1K7iPx86YFPXgkWRAZegzBBYaEjqqBaeX9yvr",
  "key27": "HpN84S3ByDgDjsHrdJDVAz11hqvgAodCpyW9eNYx73hiRzUoQEFbwr92VNTucKYjQKDLTroesy94mEHP5mvKYtn",
  "key28": "39omxuX78JkcUCp5irQRjV8qZ5qpSGoZ4HHmQDRKb3sf3ZQ4Vd9vyzYMTW8jXi63FM3QsYuMuTKSJvW4RdHGgJK1",
  "key29": "28FtuhLzjbkQsrhnp6HAyJfk2aAKzSKJaaDJpdR6sB9qd9c3TmHdaST5KSbf6MvJkTNMcu8snn2MCt49NRamxBaw",
  "key30": "3q665DnZcoiTog8Uoz9ZS4LkyptXy9WKeBazSgiPKNQbcq85HwxaW34Qgz6q4i9bnQnU4D8G5skgU8WPVmnGLemd"
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
