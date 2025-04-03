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
    "43VgUSqsEi6emStj6d15TH2sMr8UkhAANyMGQFY7d22oJ9FZUPqcLCuJ5VkLxZekXGyj51Gzr4CG1Rm6bgPbhzQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ikCU4vz4No8qaaw5cbmwqk9rst9yvKsV8i9d6htS55LCjqNhJE2mbZxNTH58nU4X7MxG6ndjssTiw5thmcZBBU",
  "key1": "3zDsQfJGTMJyqKaN34CNjRDHkfvGNj6a3qffEs2VjQciUXgohfXJQ1hza2Y29CdHLNjUzj4JKv9XAYN8k1XtwSzt",
  "key2": "2XDioXbJkH5n5YPcKvZtyLSdG1DMYwv6S49vBiq3eoaVSzvAPoBzjfPHRPCUYQC1tBbWacXBTkEScvn8hgFDX6xx",
  "key3": "3jCxVFS6DNb42xxWfH6MMoExo8mRE46UNCgwMGuznZ9qNwVgCREaaEErNKj9qsLNxriD1ysnoQ3V3JyWfWAVYBpD",
  "key4": "2RH6Z4utptHmbuama3vvRc8tSzMydmakPodFro9pyYrS9sJESU95omU9sMQhL7uUzgYdhRk32rSX9HuiTcwmSsUv",
  "key5": "5MG3d6sJNjoywGR5hun7AUxTSxM3SUNwJgmKe7tjh73YPSHHCwL287XQE8JGcjAkwR1UT3FKkQoGcZpuGtxD6HKQ",
  "key6": "uVPAi4zR3ggRqk8xvWxnvU9bvpN1CaeLEmjsyoqMTwmTnxpquKawQ6kFovsmC4JQ5rj1nBLcBKTsqhbHbSnMaUv",
  "key7": "afkhYrCbVJvjFwGcVf9VkHi9Gpe7kXurxka7XRQk31Pa8dS9nAxQJERgQFvyX8Mx2NPEUcostiJUSkHUKTsr1PS",
  "key8": "3ebTgJ5Rwr6rQ3ahcreXVHajxtA3AdCxaHqt15SMkovxmWYc6Xk21LADm3kbGd32CzQQnsgSaxCNAWuoUKnWjbBG",
  "key9": "27UpebGy5zxwWKSZ7NP7MK7iBvkjGCndGTTnvp8Jdcojw7uLGSbBfRx2LJ7ZMA2xLWNRKrBZLAJdpfZvzyAqpXrM",
  "key10": "32xiadUnQ5Pdk9HXKVkoKmkwnS52KsaWbRB7tp6NiinneuBKz3zk94yfU8pMwnd3sMGKZwpPPQ57cSDpJ9pspzd6",
  "key11": "bZ1czaTq2ejnEeKg73sAKfpATnTDMArwy7qjypWtpFyEhcRtBu8VKYWN1mnyLQT8Kz47jTJXRC1YULyrRXXVwAo",
  "key12": "5KefXjumjArPoBNdzZkoSRUx8s3tNTSMnoR7a4BqC6G8faqjAbFFMtY67vKZ3hon8pq7F8K69nHU3JC5tdH7FkYu",
  "key13": "3wMKPZ8gZAQPWYNqjUF85bJYw2Mp2C1iura5JFhQp5ifgDb3qNT1fGCdBzXJrokVefXfYumyyKxFZ5b2BNx4YpEm",
  "key14": "59K3t57dQDT13j4uf7UoS1qLzX5Hu9DgeitB6vCiVqzJUh2TacUPKS2x3wzmss6FMuhkR5MMJdT26Kv9CgkTRygy",
  "key15": "3CankEAbp7LFBi8Bp81G55AwVDCR2HTPHHW5tCDS1YheHRD93waC2TMnNKcwXFAznRWkrmK8At5sCsEAUokvmK9d",
  "key16": "37zxcA395PSPcuK7S1yVUX2Poy1veVW7JbGsbdFzUonvSS7CuRdsrk5MpzXcotrAr7ebkZrDyzQiGVN1QtpGhqPM",
  "key17": "KrP3jkSdoiq1Rpdv637uXPdKSsEjscf3R2oeMseG9XuqQwvunUAgqRtLM2MPRWxXzT1vY4JYSQD8HmbGRyDzHvR",
  "key18": "5uFaCvhTvYzFVwYEHVWw2uq5jM29gCBhdNRrFpt2fGHLUHzkbLJETBMygz3JTqAoy91CZsnid7puTz44US2HX4ep",
  "key19": "2RhgVEoKWAsXzMcKD5zVQHeeRVHjWJYijw2PhAhMLy5WbZFYiVpG7eTk2hDxDsaAd5Zc1BUt8oLdR5dkbK8DpKZd",
  "key20": "3umtMtadsPWniphYt28F6ueAorN9i2DzdDF9YDgm4cKLyV8fjBr4z7MU36DnKyqXkaYL5FgSYWARs6DYWtE68yxm",
  "key21": "5ePqUc2Fn4Qv4V1ffZexZckLdRAzALAqyZ9sBapzWwuguubzZbaz91R6bryCiYRX3eefRnbUK2DHYSjaecBKVqGV",
  "key22": "42eehQGdkZ9aurKjWxCkBRWjYQZi7YdPTELW11Ket1UVgJDVViMp7D9nB3hHVoM23CKmwcjJe5oBcfMF4d3u2mQS",
  "key23": "3Txfwp5i3E39V3xAyasXmKHDfhREVEJNYLHiPgTgwbsU6HFwnmMbXnaF3ejn7oCkGVgHJyKJuxUVko562cdo5iGN",
  "key24": "3yB6zwFDgcfjhseg64EHCqZxfpMx7KkB42zzQaDxwDUZMzeSa9VTV6qiEALAVhJgzEjYV4dXaqxPbi7K9b9cVQCf",
  "key25": "xG2MgrsDXVwMXFxdBCx3m4bKhQhkRNqy1JkAW6Qwg3VNvZaLTuVzf2jLKPAe7TentvtFLV2Jn1uAn9YoHJNLQPX",
  "key26": "2fns2GcyyfRHNj6SqmrVPfSW4aRznriDfFwtWXbt3fui91eLKkgB174JaeDc9NXubsW5fcu2JxNemsBBTyfPPU1K",
  "key27": "5sPc6njW1f4o2L2ArMUFEqCqjTqR5y6jnrd31AWUgayEgzT9Fb9jrjrLJi5yjPYVWmyeCT8FhmHa8D3ertBrtcHY",
  "key28": "2zy3jpcDfiVrawrWfxEBxKdHdgDFhTURSmaGNuUyoabLDhC9NfGkRJgM4BvVJfue38SMpNAAzE3yrpWPvZqikf3Y",
  "key29": "4rp27MzYUc4vFTK9y3WMoCqKpy6kc9n8RkyTyVUX2ZhSnovDjy8UBtqe4PDXd6g9P2S65AsSRzRivDYZx7HBZoNC",
  "key30": "2NwW8fyUsTMdN7aNHx2K7xqdndpqWVp81yrJhvgsemqAX47QE22VR2XQeYaPmuUtupVwoEZA1tYJVhw7aHeVGs13",
  "key31": "4Mc7sYUGS1nSnjFCzrbQYXc1ExLzzx71TmAutJJHoGL3BqmyABNH6Wkoqtwme3iTS2BMx7s8Coz7ZBFk4aHF5cdR",
  "key32": "52fzZV3oDWanUK9xN25PR8FMwFmw3YLb3oWFbBX22xDWpvvDefonfSP9ixNkqzGkN7AUUV5hsaHVAJhwV7ATtJEx",
  "key33": "53Jwagb9aqZkGUEs5SSTCvBx6A395x2wbzfBob9Xhujqe1Y626PKVc2j7XGCJubvjMdyM7AueVnpKad4RFLATL2d",
  "key34": "4uEZ1cFt3GwKD9ADjyf5672aqujE3dvcdLLa4rchsg1QFeqmy2F88dgsiYudnqw2LEx9W8C62ZH2iTGuqQxQvbdU"
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
