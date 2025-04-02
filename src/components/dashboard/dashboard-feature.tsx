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
    "2LNAdNWyK2ZrA2kvVkyuiz51awcFdtYU9cgv5htxPRKqR5ZKy6gUYcWZVHMGACqoeGt5rwh1H3uanxaor2Zupjz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NRR5qjVLVaRxQ2f7hhX9vipr2dh9fhpmEhDhXAS5QGzK2nZkygQ8ZemSPL3pkBi5CMbZC2jLeqfE9cg2hbGbZ9B",
  "key1": "3D7G44ckzU6G9vonZjT6vD1H42xfZ4tkuaR7jK28KVs1V6efuW4nUCHRrFh2csPpjmYVX4pHx7q8JBqjqrtRm4Wx",
  "key2": "47Sf1E3tdjdEzU5CiQGc3QfUz75Z5TbhWgkAh6eK853shrQywg4HZ55Ux9f5mDcqsJwghLPbU7r9cV8YG1Rftop5",
  "key3": "32eRXzz8f64LRQYo5fvPgvHKhULyoGyj9Upx9takoAKNGttXMcsV8tzEf4TDwutfbFs3mGA51mxJy8zTehn8ey5N",
  "key4": "5AZkZKmmfQ9i6vrPVettjJghrzze47a6LVAED9rXJaNJLmaBfCbW6APrq2WUNqA42xmP7gYp6NSTAC1q6i54YtCz",
  "key5": "64ibQ2hXnV6y1ZWXH8jgfobgnN8Fx19hcpjbUArpJ5W5XvSiMGeKzjMSYtL8TRk9AQLcfuqnibMG7CsN9oJ68XKh",
  "key6": "4KRADLENSEtC4ckRn3ySEZBSAKJk7sNfyRFEEhWNKVr8G7rBkDYJnynErNtVnpKBm7Kp96Gu25Z2Kq4jnEg7CSVc",
  "key7": "5Rut1twhsQ3d7yFTt7EnAHZk4GvxcK7HPdeEPZM83WKAY81tBHmN7ZiqFRh2mZHcZ52GEdzW5ztjSqbFB8PsXz8J",
  "key8": "pdQTZpjckCui8t2UGuMHwEKYUEkpPxqx3SRF9Sq3cCxx13NCLceWF4uLX7m5vCyeQuiAw1DkHBHG82cHsJKt85c",
  "key9": "4vMZkBYbXwgdWgH5MSiiEdf6QmACyzMor3zekQ4sXfr5dyzXNQBG9tfDxK7HqN3VRYBxevmoNxHshhpe4k5ACfwj",
  "key10": "YqGpuTqDFJDKG5Nw9PXQ6QQLxznxk1Ngs1ixU1x2WKagzrdFWC91CP1p7LMHWL1TnPnogCKyn8kyGtFkLxk2qcF",
  "key11": "336aBtxEfY7SW32G6EwoM9NWpXCeGhJiDhxBAoGa5fmHLhwha9Mu2HjR2wcmS9ZZoCKkjhoXCaTXTw4QYDTBjjkC",
  "key12": "3HhwK88uNkXSP6WFpKwmrwJqQ8RqcnHSa5W6aKRAf4oGLvNxjiioHgEyQJmokqWjDQeSxf1M31WeWi9tb5L4GG1w",
  "key13": "35ogjbxHRHuBAHrXHPvJifuxGaeGfRSdqz9dc1nVJZqHBYxiSLTULUi66SJZPRT4MFVp5g9Sto3SwDBDmvk1J3gi",
  "key14": "3uWui18kWbwQ9yErPWf8ZvhScM8QPMAZPbgaJikxYP7ydikDaF2eqwFDHntZD5s379Qh7UDykW7YeSkuJmdZ6J6e",
  "key15": "677W4bmdCUvyKzHa6xTzZHCXAKcMQtenNtwH8wdb1PSCjyGu1Yqg8XqeTKKRsW6aQJiKFS4DeLs5ZnKsmBXZuKcK",
  "key16": "4eLfw1pALp2jqaXK11T4JxGow7d9Fizv6G6Gsa54Snk4CKF1tkmt8MR5tNaZUVKdUvxFYpJ5bS855Di46eoditdF",
  "key17": "pLvnd33Cox6aqxUfbFKW8WW2yKjd1zn31evXANadYKV2uey6QzPbbiaTzss7UfNr7iyH36sFgKPZ5SvGe8bab7Y",
  "key18": "57cgeFHT3NMqCaEKtQLK3EhcUHgqmHL8x6vKcTxFwEv3xNyD5yaofC15HaK1aebuyLpECJ8vMCF6uRMB2sQBqjm8",
  "key19": "4JnftgJ4VdqWzYajznyLRJmMMaGujaAD3FUn7cnsWX8NkSsKsC11ZE4jqS1E2ZbsYTFvghz3U37wHQHPNJkYJXbE",
  "key20": "33P7wzgYcSyMRk8VyVW9g7QSP4vP7qyUBVPvLsaoehenjU6vRRWkScveyHra69PPC5mFbLbF63ZPk5a8JNT6G2bG",
  "key21": "2Kq7vMTVkPhn2MoSM5Z41igVCbSeBKpyxo2rsmFWsG673pBsyeCA699xu7xar2etP1iWPrcgn4UsDqhsA1Zdch7n",
  "key22": "2AyG1ZiVuycydnkuYAcdS2zkyjqzfqHiMxy47wAzYoqoMPxEJaNdMSKbmQ7qJSNQH29BnAemGxgQhfsq1XhcfjuM",
  "key23": "JC5JDgjJzdKkdfaWnTkpFbKhQEqk6TUDvgEGHiHmkuoUZj5S2sfu3K4Nr7RRuw65XLSW8mtFcLr3FTVux3yTsFM",
  "key24": "22kmi9cxjEZgLpdaDsSJmsbtuxNW8koPSm91tcVq9Z5VVRP3CvNKohp3zCT6SKQMzGuKy4SR6ZeX6KmD2UmkToiH",
  "key25": "K1tz76G9gRwgi1At53GATMDUHWcz43SqyaSkg6dHzHno9ssjemadaB1fGg5CSPjYt3pNyTQzQ2WMT7zGrctTYhK",
  "key26": "nJmt6U87LvdyVnK1gKktxZ4dB1BNotk8Vo1Jca1PCAbb1VYVaozh2ez6t3xMsVhgpjVKTxia5fjkYjvZU3yKNb4",
  "key27": "3gbhwxdebKRaVJCJVW7gJcXQER1BmPuMkcWNYAVJZLSJ2QFYNfZvETB5ZmYSfLABy2m1KVH1CiQGje7996qdiULd",
  "key28": "5eZRrpudEt7zzbMbHUp4rFAiJ46nerWTVwGiSbHYKKcZD3KYyByDhTAyPjoC6bwPX4DkJr6AdAJZTprz15MdgudX",
  "key29": "34BroVvkrEZEUfzcah3iKUnbh29iHcktABC3AT8ZtawDpPDKpEkGCkLqe66Zd9eoT4vDb34dBhRTDqZCSDfXGTBt",
  "key30": "CjWSKd1E1DLJqAwpajcpVxiLTprMWCEi1C9mueubmek1nSU7iigxXGLmwbm38vuToDv6RuPVzqAYa259pFYbfiL",
  "key31": "528S3boobb1gRrrKSNjNcqyCrR4dKsUYmnG81Sgpg6pHs8ucurf6ctn7LGzf2QUikpiirM2MwW965qVCjHp58uqL",
  "key32": "5mjNYP91mwEnbrEaM66d1zuNnZRHYfez7gqZguV7bo3bmnXDnuYz7PyooU8ygmUhVaDJmFLVkw4sLTTn4T1bq4og",
  "key33": "22JpjFM7KEUi5zdLCAzA8RzpMVXjqp1cLG4kwMgoHgZS2EwMr6Doe5NiUJiic8MrvFUjiH4FgGrWLv2u2xJY5t31",
  "key34": "2e25YpvJViPAnQxYt2LDFLbEtW6NBHuaAfnRC8MvkT4T4tW6nHFXSQpKq6CTutwHa3Wq3sWfxtrFBE23uZyQcYfx"
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
