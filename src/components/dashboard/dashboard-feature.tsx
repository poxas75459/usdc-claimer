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
    "2ZPTKyvLwLPwfZ1Kk71Qve4BXKSRgA54zhox6M9B9xWmRtogMJ9AqvPRW7BMxQK3i37n86Y8iQXH6BGx9sG8j4Cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTqiB2sZejEJYm14nXwUBtZw3BnK2dCRdo3Mj2wdrVycEgo88Y9CpKPo4Fn2uzd9wWkmwECMiZyxhvsSLz74Kgz",
  "key1": "2yhquchTSmDnop1jKf9xmDYsvkoWjudzGzo5XBrzrXCjZeCFzRyphaSJfazeooKeQBRvZMzCvPA8MZLBijKQGnFa",
  "key2": "hNcMt32ACwzhtjSuf5AVM1UVi5qCmRLMzB37hEjQPpJwQiVLRvGQjiXnJ6k63DWpYD8AhwAg4o4GxwxA3K5NeFj",
  "key3": "26M6RH7eBZwhU8Wh8YJHkLst6JQW7JXzF9FaCr8BtUVxLfoJCEkdqoyXSS6U6ahhbt7o9sj3jaBQjkJdvAY7YKjt",
  "key4": "2CPJcuHeJoM61yiwbhBskuQ5hEDnEkTWkY9ib8C1jfX8pQksrBxN3PNkgGfWcFXvBPjj9M7K5dXGprWMGDcQPvmn",
  "key5": "3reXVhRqrcsfzgdM1vPPuGkc8fdnsWr29Db5DpqmT1GMYasZQoaSnLvEe5CDVGBmQCeybeS1qsSnjtZdDfTfQbwt",
  "key6": "2dgkk333NrcujzBZKknh9rav881MrymoAfNHTouiMiUVg762HTW23tYuYBYBNYyVWKs1BmRvFxCHBDig5QiRMjVW",
  "key7": "5Ptr7p4KuTPhukqY82xRGvJPrkCQfWChjzd374dQwozB7XNEKoVVUVgKMKCD5uN5GG6j2bPxQko5BKi2QwKPfwTo",
  "key8": "3XFsD5LMegxdb6jAy6RKoEuWq3WSSRxE2crTUjyukkmRAZAWJWCpPH2Le5TaUsTuugkmk47Xbnxr6qfK7CmZJxPS",
  "key9": "5eyFwzEFFyYYUyKasNHij4RPcqkcEZwNk4r8aghumkogXNygGeESnUKYnSfFGwzoECsRx2qUHCu2vH7zWhRwDQz2",
  "key10": "37QXDgqb2xcX81kGmkdavnYcZkhzD6L87yYwoCam7Csmv9cjxcUnYRd7RNzQZxwWoCz49pzJNmDpDBS1W4VXBvRo",
  "key11": "5vsw2XuTXGj1yRfSeRXmeq48g1eDMPFJcPJE8QQiCEQVgkG8C8i1KEr6Vo9JqKCC1FYGZjYNX3jbUJ1um4iPV9jn",
  "key12": "42VZFxjMnjjUP9ryp1adg4r6LwJUvp5acGg3KAgART2kY2UHYb9eS9DPec7CpfvxfTX7woojPmgL3XryMBRc4tXD",
  "key13": "2iQhh1UqSw2p8bn54CJqkGRsp4eA9XsybK6hpKsPf1sCTkGCA9zDZqT55Zf44aXWh3biUcZDJnJN3WMqgL86x9Wg",
  "key14": "4M58Lc9yV3zgmjCmfhhVbyee7pdvtsokCGWK4di3LkXf61L5bPPnpUZWDsptAptcCyhHFSe8RPYRDur7jUE73oti",
  "key15": "5d4s9RktYkpTGSGFzhwkUtqmEcaidJW8aFoTya4NtLuUE5LXGiYavhrFML4V8D8ug3eBmGyMUvtyHwrD9ytMxE7d",
  "key16": "5kfKNA7eCLKWs1oBwoh7pnvsN8Py8ERmP6TbtJmL7uvmbfHjrxwNKXdwBJZCCSfzFJnpi38RQQXHXicsiA3dNLp6",
  "key17": "2dMiwJDJpYL6Px697iyardhmwX5t41sd4wXYFPVjqSZjpULkiNQfHJx8DpnUUay5j87FQj977WbUYX5RGtmLzodt",
  "key18": "515JnKhPeRTrxvdvUBUeDsRBP8667rUDLDKN9Ptw4qehb5vpmo26oQdv7qXhb2D4MZqKvNgLkTb9F8SJqQWwRFqN",
  "key19": "2ABGZ7JDz6bFMppfHH13sHKcwxQrqWBf4MZ2cCiY8WNLU4YZDBVDjtKSinmDgWVm1PQdQDXBL2QoT9iqm2eDJb3y",
  "key20": "2ABeqguEtkT6XfRR3yRxpXKFU6QJwLaKUT5kXAQByQv7Db7e8shuBL99dooZ7ZzAV1U1iVw8pteJ5Vvovu92szzR",
  "key21": "5GG56vaCAyywfhVVer9MNqRMCKcEYQgYrReD2PDvSfnmFNCQ6386Lkq41Q9WbJeDP5vjH7LCokxFaY5AaKy62KrG",
  "key22": "5vC1U8sTZuebBzaBT7KFB9gN6KXJCViEeJhX9TWX6z7taUSVW6vk7gx2SnQnAygEu6QVptD1Fen7N2o563RD7gkk",
  "key23": "4qVdzVNkjo2zwRgZPcPzBvpg1iw1XGkrah6ejraN7eH3pCTQua7uexosyQsZtqRXsVj1aAZH8QbsVzLmi9686FtA",
  "key24": "3dR2ACz7ZGeskXFX9tqChdRst6461eZmjPVAYQKJCsvwcX9NUwaGHA9prp5jyKk6F6tkCsPvxdw16Z4kaDA7UUTc",
  "key25": "2arcz3qRrvWCfgLdSJZwkM1T3Ufug2BEiBFPG4v4GMuXvumxLCyusVadpHUaxyoG9W7kDNjv4QHL8ekZi3tgN1z",
  "key26": "4q1xFrJ3jYi9jpiQwLrkuBmXqQL7LcnQxWoB6wmxzNBeeh3wLCRmGEtvRyX3Z5iw5yweNBAffdzjSLhHhptRK8f5",
  "key27": "2ZzTrUhwRCS64ooi7Mzmvcu6HaVz4Z52FFMTuMJcWuGyXL9YPgTpdymzidhkAqyi2pot9eKa8K5gEgRUbavUfuBP",
  "key28": "3Dqcwqe3aiEDDbJGjzsx82BrZWdDDTjFXhj7MySbiG7UtsUxq5TR8NASBCjTF9skJteTnntjV94GKYDL449Zk7b7",
  "key29": "XECmfwPm4fjRNdtz9rWtAmFZkn2gJEkb7dEz9yzstMatdnQv8a3bspYYo8sVvDrMD6XhD1Z9ABV3AvaPTnTZsGn",
  "key30": "3uQ4frykMzBL7hh3eVRDs6TpiT7Pg1GXKorfSfGQVTdkWwHQtJGeCjVA1S3yAyssMqjWyyuB4bnpbQ5mjVEGuUHV",
  "key31": "WFn2KyJF3bxheB7oF4tUuAuVYhqhytQiqn2fRHzx4X4cKUFJZTNWpyxmUUjhKA2s7sBZFViYfMgbp467pgJxQcf",
  "key32": "FC2yWtrxKJxQwPRPqsXgu1nuXcRE8BucmkC3WTTBid2rWL4rR1S2yZSYsACVDfMTetoeEgRK46GpJnqmHiTpK9c",
  "key33": "p7WDgDCd7WXC1TEJas7Ph3jMWuse5MDrvDfVennCpyMZRuifX2AGwnz7noENV5fmd8ALvbjm4F6Mg5KqbJpFDyS",
  "key34": "27cS1hwzDAEro1LkPo9FUaXfCRHtwoyGFF2uDQH4RVXEHggUANSdRUUdarFpHUxrnbLibWsXPq8cG7EADhutEDGq",
  "key35": "3eZHpcobGfZdNpLy58gXukfy4aUDUi4egkBjZ3vWDi1GZq8J4Lfe1rRv1RMdUsM9xv98fUFmfFT7E4TFNusFfuob",
  "key36": "4DhTfHbrPhSq4uaRGJ7SqDfpnD7z5Q9Rh9bxP19W6xbxyQjEdQLZRkCFqCPXprNAJPLtUEDGzM2GBigFJoJhbQe3",
  "key37": "5DhWFrd42Qgnj58HVGa6TtkYkG1o3idtS3vm5FGXCq5S214Lbmk19ANpHUvkwZwsLBRADpgMwkJti4PNgwW4smKb",
  "key38": "wgS1ZsBTUaYn1sLT9munwpYanKpMW7XpexGDSZtdTUAsS6LRqwsUezfZnGHwEKCCuh2TsNJE1EtmSGM3z8pjn2Y",
  "key39": "3RXucSAWV9hXyem5tzD3DhS9wQwfQPDZrwAudh4fntj3PrB6rWLQ6wciUhgvAetrWPybvcKT5Rnu9t1SGwaAy2Xm",
  "key40": "4Z3xxNixV3uJgwwjYj1cVEBkWZyM76nTTemfMZpKCxaTfY6GnN2ijho7umvfmBegGg5ySXHcXbKwG4m2AgT3iMHx",
  "key41": "3upeUm8ovptPKRyL2atqnV8wt3LNkaEktbUePkXwEtrEoTe6VRxrJS1Xccrwi84gokYQs4TZTtcbFNLTXp64KHPv",
  "key42": "33csg6gXSYZTaX5su1NMnN2AuZs3KWfHYFXs3ZfggGKpUjhFbBbX7K2MjJ5tUqE4cVPZd4pjP5E9AcXU2szYUqno",
  "key43": "56MRQY6REeUnz7tSchMfGzRFTYNNjjp81MuuZ6hFJBduRZUCVLHBvCPvKEct8GJNU1kn5W9x4Pc4Kr9gURdmPTaT",
  "key44": "4Cx9CKpspndbLS5s2z8Nxir3GepUd9xessJoZXzeVxja1jcoSZmCtHahzkC6UTxtDqMWVxa8Hkv8U9EFpbJrb5KU",
  "key45": "5VSPdnQCXPwED5wVMsqvP4XMZ5WdRMd18aPFyZybDTPyZp9KqteqEkYMyT6AUT91dQx9pKA2msNHEvfpvp8s52SX"
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
