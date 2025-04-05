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
    "2mckUQFmSekNbK5YK8gcye3F9MeqHrE8e9SQ6oXryC1mAGgcqBMDJ2GyfAqGwA9yQCxzGua4twgpWUp8jEw7VLYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iwdk1XDhWYK89DHJyPusEHhtmgyJyU1HrXbhzKYSdMZ8xNFcVJxsG3cgpGtf8JKJNKbDFZYZ2RPJb37Lc3ACVfp",
  "key1": "4fgrZ9C9HPyM52yx84kN956mriat2bHNmz3KUge1wEZfsD9yxWiQnHAbJ3uotqh3YZqgndu74FQVo9qrZEG9pfov",
  "key2": "37iE5jkXfK4nyrTtSBL7qkamBW1ELrFCkQUbCH4KyaKkef3uacHJiV1b9eTmwYyYzxqPWtWX3yjFDDwGJbRUXtoH",
  "key3": "5BU8CaGavRf7kkKT8ti6NCBzHUrvZEfRMwQ2EDVbUWV4Z5mRgNb48qgsKbjY4Cj2VK3UtTe2HqqiwA9wpJaBM5FF",
  "key4": "YMPktYskVgXTHtNZQq45ZYvAn91JQsXJhJbfC7msyUz4bHXRV5NweN5Jm5LCLLq8ZkiKfujzL5mXUJtA1SCJSjA",
  "key5": "5SBBuuwTtLp5UvE6is78ShXmYEPBfT5eGy9uEuNArPpXjS84JGF6YjHT5sDsxL7HJsFDmUrdF4skMKXNbXYcCUuF",
  "key6": "266W5DGRXpMyVvnBcF2xRdZa4LMetMmCghJqmF7ykKj2V5nCwRVHcEsn5UEadzPX9jP1Puws42v9soHVFoqhQs2s",
  "key7": "36UarDdb3SjzADHtWkXHCGiJBLQQptdWFWs3je9PFS4cNfQt2cD5FnMLjyzdRTR6nuepi2w2Sc2sG6ixiwbzMKKB",
  "key8": "3p7aozoGwS2CSFYso3dBCiHBBXNhsPVyXsuLYMjowiCtK1PZfniPWEnDeo5rU7CL4NtFiZVu5oEgCM5o6v547nzj",
  "key9": "4vbo7hydwk2hyFwQD7m3VURfnEk9TpMhSApvQqXnizUVTZi4uE4vPMWEZWEMUxevq6XuNuq3Jw86r4Fuq9vpZpTy",
  "key10": "24DgkXhVUcYuV7Nu6PVaLiV8gajPNJQwrXkdn5VvzLbZmrBb1Kwr3yCX5t2RCPTBLWD8ptvVHtRzKRGDyCBQM6tz",
  "key11": "5y48zfRw4cbhQoGKYX2Gp7Kpx5HYQsPckiG8VHBwPAWCVmtK2ZYwcQngzF24LaZXnYNcUzgsTvjvibsRM8gNwBWH",
  "key12": "qfnJJ7kaK231XGKmq9HNMBakHWdx3kM5p3yodJqTQY4Yk3sHZekXjPrYMEdGCgUbN5CBEywG8k9ueWy5QRHucys",
  "key13": "3VGVkzQMJCEZ5VqEbQ5RaYdMemuGaWwxYEq6h8V1FbvwLPT11i6M8rfiZkkrSvHJRrBVZmP9oaUkmS2cTjZGb1u7",
  "key14": "NAQXCacswGrdot1ro1JMPNKjhJcTB9ALP4WZpRvJ1KVFxF2uyz8hfYcxa6hf2NJc4jcFKKbRoCuSUnLcnN32uyu",
  "key15": "5eBHyWbU4mpj6YhE3daKLnGMDA6AgMsAHpKR1j3eD611MybMYL1LLfBtRadXrGzU5fM2nVqATXGUKc2nnCVNozYn",
  "key16": "25QyKKqEbUv823on9GPU3dvgkW3WD6AQhbxPHXdv4DdC4GxXGdhoUShRMinfchhqYmLrLv8Di3PKQTStUqyN9iq1",
  "key17": "3Tio67bGSNJqAGoB6YVFn8thmqio3MGxr3qtxn1EAfN9f2wQ1XZcFbVwHmMBaL7JjGdEHFKZjza6XWACNSVBttsP",
  "key18": "549VoecgqfsASLkSA8nGXdR9kiwLn2dpbrTeCZ81eGa5kcPHVK98gZ7WbkYfURRe5i4zBgqJnm2JgxPMgsiEBkp7",
  "key19": "26btM2jESaXF5N5VcpErNUC894navTYEZhc9VbtF7vxZsw8TYmrGwtbN5cRHDXn9tf9Z8EnzmsV3xgkJCvVBhrUd",
  "key20": "mqHPqpmaZ4i72y5UYNTGXchfhQzdqEgWfEACxDRsQmKh61tkpRpBKEsK2VV8ghEXiqwEXXzDno6CoBV9wo7US1w",
  "key21": "x9FSH18C19BaGgMNPg95dx4A3XKWteeUZoaLXE2W6cwKBNwAWzLs54GoLCXzwaqQDibpirwZe5NTKzLfNgyBnsB",
  "key22": "3pHU9aKgc7TSY1S67cXFG24HQiwetTBUax26ttnoZfKvqrGmPJNJhK5vF5X6xjyovc5MXwVSqJuYbPLPSkG9cs66",
  "key23": "qSCEnomp7FCC5kHaUNrHyQs9EYTKswgwkUZqTgh6iuiaVxD5UaNth7puaQT1aZT6kShX2Ck7qLsADJr7tkQQFC1",
  "key24": "52uUENHic3FN64b7boo8oPf2NsHimXXj4vii2tR2HmrW8qjrBtCHCBtTZF9GYyXofWn6LQ3peSJJ3DCcVGA8MwnE",
  "key25": "Y486pKioNZNPpQe46itrZym6vkxpYDfBEFTZyk4K2gA66Y8Ks9TPsthe8HUwNDxDAA3rCWvjjj85yih3JTDCdZL",
  "key26": "8TJp2hHDet6DbKTYgWad7PVYZ4yvyGc9HcyoNZfEMMpV1A9nvaTemL4Giy2WMufUZCPJsGvyYfZg1pe9jvA3v8h",
  "key27": "3XPZDCPuVEc9Sy76qiUjrW4joM44FKmvVZbqKytkeAAjhJsAqsgwYeLh7LhUSFKFKby31mb34k2LV1Wp92xqLK7N",
  "key28": "vyyeJg6TbUAQ2ySrjBabv6iD7JRXq8khq6bRPgAtyDyRA8sMckEsvH3kTSouMRVBDhmr1z95eVvZ5Tv8nJaaVTk",
  "key29": "5K2vpiQyrgWAeoA2jhPWaMqS1kYcfuGqiCNxZsmryjWk2WiuGL8aKVZReQ3Lba96jkhxgL9vC7J2EetMZYpeQnqj",
  "key30": "37kaQrWfN9uH5PBDQmK6ACkrMyZbw4vKFD3HCpvrG9zfpPr2kuaS8JgxQNSFoU2JfinQeJ4SoT9ZzMn9pspGyQty",
  "key31": "4mt2TYuMa9WJNt2gAcobMoAyidY3VwtxbhkkesQ2cqEXiAGyZqRvjQK58AmHd7c4BRUFCRQD71kdi3Vh3F7Ct8n7",
  "key32": "5SRSfVyd5Zqzqv4Vhs1VXSNvPXZJRVkLX8QeANLqS5cagZkTtthCLS3S9iyWpxUyjdbKLS3MtW2E1Nr1Uix6JGCR",
  "key33": "3AfJMt25mdV9Xd8oqJ77fwXwNxQyTFCrNSgXyEhAmbNkdLRjG9zHNmYyVcdenjRGTjfztKY28evSU3jvE8aYZn4c",
  "key34": "NzPSQKLKrYyt1et1BZfLyrKCtXg4uToQJdYwTjjdUrVRVScBGtGMXrVA9YfmQLvAi4itsqvjfxUUrZZaiU8Jwgg"
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
