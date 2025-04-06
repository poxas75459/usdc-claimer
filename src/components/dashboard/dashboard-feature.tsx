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
    "4GoxRpgTF1eKnr31AMu8CKEMe3t2jtcnqAeRiJwBdxmb3t9osvA4VVmUT11v1NvcoVCZJveAUwChgBLMsuh1LVgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyfkhPFSLpw1RMqQ8zsXyP1g96L2KEDkXzwGY7LPfhNrnT149ARHvPShu612cpFrGGSQDSvJ3UrwnmTNB1FZ5Mf",
  "key1": "3JDz7MPTyZeJa6Pea5Q8eAR6kKao28od5EyXzgnSVDkvt6h63TsbaWsV2KUr2ng5bZjB2yWmGH4WdWkBhacjxEtC",
  "key2": "DFex1qFr4jGS592jPN8HFnSMbkyAGKHCBsu5VhYEWdvC5DUhc1iXF3sUknHrdEgZfZ9K7Lq5SoKXptn7xsqCqcL",
  "key3": "5UPo1pqdNRX8WVok4AwgKXS6U9N2U5B2xBaL2dHmhNfaaFbVzFVJ1nZjGWJ6WKT3PYXjWickTNLZ4tf4PMcKnW2p",
  "key4": "2fnqtbkFgrSkGXWTz3Yk2j16vMr2GR6CE4iTFVG13Nt1h6h2awu48A3uZxny4q4TDHAq4NkMCjFLiLho3cRkvqH",
  "key5": "5JsoLNPgzKKwrK41P6KiWaZ9QZfpns7ybDXzzud379wzKxzgLZCWZgq5s1Bw4QkNVu5Fk3UjgottUmTTkxEJZkit",
  "key6": "4oVQY425CFQ2EnJf8giixX9dkJZvEHwAPdTy8A8BXTdYib2UTo1i8v54qDLDvC1teBDx9EQ4fsWr4NzsYe398oGM",
  "key7": "34K7Gs6Fya53JpGt3rpvLAfgLHeiPzKPfTS2tfEm7ZSg3D8v5C73XfKPzrN3scfPByGRHYrWDNp2M5S5G44oVYKQ",
  "key8": "5AahKrEK4Z1uUiGCe95X1pMFvLAvwYcH9MU2NAwGuP7un2a6Wd39C9vuyUPcWTmSSMBbmWeUgMgxW93UJgRYrEMM",
  "key9": "4zupwDRW9R39Mg9fb6hRt84Z2GmhrBN8GqFNtioRotzushmbro33nXRgXwn5u3ufmGzsNyBRDRzdzyE34Rhz72ZD",
  "key10": "4vsfcMbGrEZ4aBoD7REVySpDCP95brCsyoHsMbmkw2zecPDq8XRvn3nud1Z4DAUiEw2M24azGWEr4U6KPkeGA6ZZ",
  "key11": "3i7rP1ZN3M3aDPQP2N3gRrJ6uY2RmCmhnpHBSfocm8YTggsLonNQU8VbaaR5VTVCsPyGkZ1N8k7SRhgT8gaFXjmE",
  "key12": "4jELgopDSTmG9Ms4ZEm7jymqkm1D2zK797pe8YzceopDj7NHHo43c3FfXB8cN3RJ3BCLfskTTxfywJqaLwyPfZ4m",
  "key13": "552y9naJZBsKBSzoebAbZmBEWvrZF4fvmSNzKyYw7SASgm2aZdeYVDuWBcr5xUZQsVYKQ5sDBLuPweNQwrmu3Acp",
  "key14": "2piWSBrtPbPqKyJxZpnQMmmAFsxHq35r33emHUfAvfk1hQQbXg3wNHZoyg4cqFM6jGwT9D5rcmXaub3RARaMKwjj",
  "key15": "2sBYd9X8RYXH6PAey1BN4VAvq5NeXYLZy3dH5EGFPiGV53vYBKaJXEB7MngorYL7tsCdr64zk8xPy8HpMAM6N8AC",
  "key16": "moj1QeWb9HB9BzeWhHpdMBbWZSmsKDLHGRyb1JZUbPAo2i39Ht8uiBtfDAQRRbgt9A2vZ6MsBjVg1fcSxdNGisJ",
  "key17": "5Ae9fnrGV9L4N2fqoa5JqpcGsrovjWBGNRu3rYMvwJYqNtq1iyEYyCvrxABDnrY5NG3Kfzq6s3SMpnmaFMEAXvp9",
  "key18": "3UGpet1TiyYo2woQaCXrKV5KCfGguntGX68syDvxWAbs3R6sQHvUNvRR5oSey388YUnb5VxtoJiKAhr4BDKzLKc5",
  "key19": "3xRXHPYLiKBfwa2zXDY5vtni8JosgJAq247PEYS81vpkeMysyLpk5CpkB5QGMfNFey6djidSahhssb8gwgfN3NQe",
  "key20": "25Y5SryyQKxGL7BbTjSm2gunoRypAeWeBHjrn9LtTpMr1qcpEE7h458gW1F8fwp9mS85zN4zQpK6H4RzUaW1ctQY",
  "key21": "AarDfas6hmRrRCg3DDx2YSYENz129RxoDfyuUDpsqtceuEZ9BJQ4VfMHUAfMSoXmZKaSMiAqhGJvmT77rhRPkk7",
  "key22": "34TcHtudsDhYfX98HfPnkJduCYm3pSSawjipxJ7ML572KGEYh1bj7GQaj5HH4qVhfpxqX8n1Tvz6ftNj8ivhr1yK",
  "key23": "4qYxeFgoCP1PjWPBsgXPqLrMWvcY1PWN5DvWDtznDWnUwWJh9KNtL7ipoiFgqkrS8Mg8K8Y9hrBBnBcMzx1ATCin",
  "key24": "5qqzVpG8imqDVev2wipqoSd7jYQyuXcXMXVrV36SR6tHrcFXG668JkR7jEL8siHUtKXTu5TD5FLhiozSjAeHxX3K",
  "key25": "4EBzrW34FhsjjPQoApxkZSJVqt6nwoaPFusGuae55FrSwJaPvygMMqYVyQbzfZXe8bET76Zgd9ENEg1V7Equ3S1f",
  "key26": "4an1aCpPgPRXKXTqyWAA72rsNeAHDDcK1viLNJRimuThBT2ka1dJKazidV8uLaL7CD8FDdrDRVVsXwBF8ye86KrH",
  "key27": "4S6fcLrSvCxLUMQDVrNYMeNFMhW3rf7yUjG2jRQaxmEAGrzvkFoZGgsRasPqVVZqf2Y3iSaQhAjtKeF5fCY3VDzA",
  "key28": "4NUJSYM4AGcaFyqv4DJ8iGontEznZNMaL38dQkTUv1AuevdcvCwVRkA5gHrTZoDgkroBMS54XNdWwN2G4wpqa3Mv",
  "key29": "543CQUJugqJrVdP3HBVs7utFdM8WjjqSzsso6rNbRTq73sbTDE9VcVa3edERfRXgF3Cico89eaH2Pn6399mpug4f",
  "key30": "2S82vymC5YsuQVaaSWTWsexK3o42fYgVLdFP2UDaRYvNXa6vYKUcx4HV2hCzCd56y3HnpCRxvrq8t8wyGFQtJf3n",
  "key31": "3LgSWJxPuCAA7fwkeSCLzxnZNkG8yJJJMZXyoQn18gDSsXo5BAPooRmKsC7dNQgqB7oGHAEXePA1bXiXQycbu4TS",
  "key32": "5nCvTJCkpr262kECwbFVQw9JycyuxPsPLWaFbLkC6Y2htsLmYCSNAveSCVUQaM1FznLnVH1jh53Dk6dR26mK4TzU",
  "key33": "3bdQwJnA8Sa8oEnY1yRXHicSvox3G3SNUYTz4XTha2G9hLRRW3fpFYPpHTz3EAza6g8MNCr5cxyTZ95JPbfmYHfZ",
  "key34": "4CDukbE2iFqT8qvr9uStKsG42u1WvfZraMZ4L8HUEBKXAsDDLwUnrJ6YT69dKPEF85SmWYyXDqGcAtozqrk3pFNw",
  "key35": "4VotULff1vrFVdi987LaFKv2zYUYzZs5D6Xzt1ffHF81eHrKJMyRj3tHpM56vrUkxP6jrfqHE9ALb8iRQDFRjBqz",
  "key36": "3Y5QJvKGrnMKLsnWZZ8veveDse7KL4yNfETEH5ZuhRfTn6p15nV8iMjByaULRaPAtLPTF1XDzwqP1J3eWW7XsAVK",
  "key37": "55gVGTZ5d1mUZn85bBH69zCMqYjwQCnTu5QN19GpHnYVcQAgZaA6j8Lukm7bBgrSxmn28AiRraxzZEPUfCtc9uDy",
  "key38": "3KvZ6kByCuj2xkRzDcyrybyb9qh2KkroEFQBJHBDTMenvPKTw8XLVKzwxYWWzUNuwzxhm6MrJtMaFosMhRYpiTqF",
  "key39": "3PxopbBVoh26KW3hMhhDn5tK1ie8HWA9AqPZxc5ffh4GNM6xDG7Yby1RQGKne39wvwzGH6AAh3MGS8Qjk6um4Vw7",
  "key40": "3xVDJHehdZ9mSM1PQJEnhbAeV6YQiwo5LTVgP8AExMTufrqpzxnC4w7SVf4ebhhgWS35fXAmjWVTDEbW7Bdcb5J4",
  "key41": "JrpMb9WvNv4SshEVYU9gDinkQ99tPTaFbe1jNgrSooHsw9satj9YFSfBHAqosjcFeexZ9Szodd3Mf2MnG9yZ4NF",
  "key42": "W16V4i7KZGGz5dVm47umUNhMDdmttHcKUNrtYodhrJKTXhuzHN9G266j2th44nmb3L7uHF6SHy433JSCgAXwcWc",
  "key43": "4A2QacypEWz2bbx8F7gjLxtr8fzYKU5WBUDq8vkheMGasUKUzKJiJEvuZiXtRu879GsPBQfUSPzXkRrsTqt9NhrF",
  "key44": "wZYSMMPdwXwwverNoNqHBFdvGeYvTkgvGKV5iVhqExpUZmfpUF2h68h7DoMtjdiGwhf32cBUYc1EqmEzL7tGS1R",
  "key45": "FGuXP5d1zWocKqAYfo9mnDtS58hyuSqx9Jcd5Uvi94mcp23U9EoZviWduenAM7dPzoiiGghFdsHfGm4g6xSgm7L",
  "key46": "1Rx1GU8ouoCUgS9FYH28wjDV3GWxGz62ZX7zkkmGZh5xA1sghUo1fAXdfPhAW2JVZuxZ4TiYLgwuV7ZSmZqbJkb",
  "key47": "2dQn9kdEU6TbDFnF3t3jm5hXgYPg1yjQDGF8XK5yWiuixdKTeidJuxtqmuyWbDPPqjg8YiuQitVqBrr4xouZtsYX",
  "key48": "5RpwuRvC43Q3NSBQErTa4gZmNeREEUbHwM2CvEiP9AzcKNaEWpHGLMwLGo5ZH4dsnkwq4dqwPLNgS8UvXVzQkxaJ",
  "key49": "3WGMdfz2oFJwrp2yW28kKyracyQuxF5Tjef3pbCbVMwWRCJ5hKFPbzpeNhZ6H2s5xFTjPgHaiMmPjNnC8DyzZjhu"
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
