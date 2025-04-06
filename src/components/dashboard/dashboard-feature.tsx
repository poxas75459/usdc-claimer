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
    "tvgUiuE1cosMBmybicW8syxxt2ibixcNHdiErfxoeNihwnnizpwbXKpSZbijsJW9jpwxhGPosMdwNEXaWddfc9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogBbfgXtKXSanmoSAZt1fj78yucUdSPTUT4Q54YiaS6VznhzGF2xcMosTFW5zGcLCKHL5dV6KnzkX6hJ5ir6qPH",
  "key1": "4ALfh77UBKkyiHWxWukcizYxzrmkVjVF8vHEUqNpaAa5iRVHEi6a37LAqpwZSbDWCpWkPk61E8ZQ3PFUHVai14E6",
  "key2": "5gV1JZty2bQTJHDNWiQFuCCes5FZKngjiNS7AVG751qog1t4TvS28PxYMrxjBSMGbMPPjHoaN779MMksmMHconja",
  "key3": "5ugbH5U9RciSfxZH3noHkH7XTXEF8CifsWowGxrTqDSHHZC65fpnatWpFiyPskbMppobVqFwjquEz3f5dXWXrMPx",
  "key4": "4cCVS6JDunAivcygd5q3vw96RtLtvyy47cioD2bJRzTmd1Qm7bpJy6jDFX2oA8Zsr9GoX36119PmVLYoq1S63LLZ",
  "key5": "5btKV9v2wuQzxcBxPfDLMVjA76a9L7JKSBReTksvshi5yMMv9snXgza4CjWxYSfkjUkTCPf5hzeZwxDPGRJcDtjU",
  "key6": "3hvsHTqPCnhzjHw8RVJqD8q1ewq4UUVFUpQHMhoWethV86ZQS19L4Ty2oDmQZrSd4K9tYSyvXoej4NCFewPo7H3Y",
  "key7": "2xJJfpuYAsYY9w7e51emg791ej8Wrf8jNED4n5uD294Ti52npJNGje5ujjgEwYUWc797ZMTiMNXZb8q8RrfofuT9",
  "key8": "5MhuGdtT6g188G5qwedWJ5qGk2fs466tnHB6giwZGsE4mu6dGZDTffqBFa7uaMdkxJKYg4P8p2ZETKT8UbyThEfo",
  "key9": "2sLkB4yBCNUAzfUK5c2xXakVzPKYxHKaHZFGmiY7vzQgwfsKwZTBibRocEh9m4ykMnW6njM4HAUvqJX5xuGzncCx",
  "key10": "4qSDGL5nuPSH91XrypcmGEurfFGbD7dfgEDCRXRsFVAE6f8vEoJvdDxf3VxcutBUngNHzS6ctAhKrVxkgWLef9xm",
  "key11": "3FvjaTEjJMMhtGBXquRuujSXvEkuwMBdf8ui4wsDoqpDhaDJ5p4km8ttaHnTxNGPnqrhwE4Quo77krnUtUMQCkuo",
  "key12": "5URgupudJH8cEBinyEsBfxb89M35idyiXvDfgu74YHSUBKCdMGJVnDEj9qG3pjUnGX4kUCkpFP7NoVMDqK247w2B",
  "key13": "5npMMhqdJhWrxdM36gC1ynj6w62iMzSiNWBKwk2yJBm8t5DC3CQVoQysXGBFbiBAERRNjEFhYy3t7UnFpCpjf1ks",
  "key14": "5BiFwLw3iRyMv4qxg3M9WjxbBko6FbKeAvLMJXqTH7d1ECWz53i4je66tt9ZL7SSDaLNiYVDPM6UV4YMgT6ipcW1",
  "key15": "4uP63sFAasN6Jqh8qq3XBJYq7AxD1cGHm1qpqYivyRLC6QSBzvYTDjafFJTFrDMsSBS4fqbLWWk2XvXj5VFJamNW",
  "key16": "3aC28Js7nHh85jGezX8uk9MDjRpYbKRRuKUXxt1WVUrDaxFAsqcEcmBtpT7dNWQgQZQkfhkgnXtmsZZuDXXDzXrj",
  "key17": "35daRsRmYsgjZ23f97QXd9tpz7CNt3QQYJYEwdC5N9RxCYjpTFEbnwFRr3HWekzrtTnxN13ZtGMkTTirQFLYVDB3",
  "key18": "2HNR3APoxyeYszJmHKXngbkcxp6M4PFXZwLZWAiaN1P8domKe13K6UuyQQUGmuFRAfU5AtgRDXNyEi69NP1pfFxi",
  "key19": "5gQMXXasX7DPz7U14LJFyMkPaamwZcLyiYWmfinprbpNHmbiCwjN9bbbfzrMT6nmZzvPixyKeR2NNVf46ccWS8cx",
  "key20": "48s6cDeUVmQnQPzQkVJaomDZBnfLJNKs1MDWFa3m1CHMCa6hVeyfY8vdKjHBEn68ePicQYNmb665eJsTF5uBRqt5",
  "key21": "5WX994Z99QkLbuMgcGMRkyxSKWLpL8mMyJNpENbwb8ZMii7nqfuScPG87Dq3xgKjb6phc9Gzk3PQRbCTvk3PvHU4",
  "key22": "31iUfcfdhRjHFGmgw4LsyU6py2wrkxNUrSfrF84Vyqm8SPnVnixo2U3KmrRhnzDyM2f5K9ZPLRVaNSL5nawCWzXC",
  "key23": "327BCSL6hnFCgn4SiVe7dXbue12e4F8hbwWksP1LDpwvr42kPTiAqLyewdMmzpWUJgmb2JXh1Yi147uS9dg5LSar",
  "key24": "4huvzKp7uoomF5tsD2PZZ8BThC1YWL9ZoPkAbNYfihygETXYHENW8BPDZfMrUdX3i9rfoPmy4sdPW56w5h5oq7QE",
  "key25": "5Pf1tX97o1GWUtRVpAs41Q7HFzDARCWu8FwQxX6b5xN5grD3tSdCSXxXeosZbWBGMVZB5B7dJELKD7hYCHcDffVX",
  "key26": "3XWcE3T69EyqGy1TD5c7q2cBSqG3qts5rTGyXzEuGmkS3xNHbY2LftT99tSqgSSr1BBqKoWcQ86PW8sjksprQd6w",
  "key27": "27iv4CesTzAz62F6pqnGbNSXgCDwjjiZsJujDWL5cAEzZARaDE4BaZy8K7rF9imoREGW3AWHqAETBV6Jxa3otC8e",
  "key28": "65iUAPLSjxcuZZVnXfxWACDrW5mLGoXWhciL5JcEVEuEyAwjF5cJrnskg6GZm7MHoraupKFqex5Lmjkkewx8Zws9",
  "key29": "kdQUszNtV2d7CQA3WSMeoN6MLgP3L8Sa8x2r5gLW3jXkTpKkSL7zCjyLJuKFoFWpm6Lz8ZNuVqhBMWRdzrL2HDT",
  "key30": "56kWjkmCdKJjCQuSAXS3UXzRiazxTYE5Kjqp8esf2wpk1AGQo5CFKx9ZEW4DnVyQfLBbrmwecddU6YbX1s8in51A",
  "key31": "4otgCmaiCcE5qjFGZxK2DEmexfkoLnd6Bn8jThgLDYvz7MnNgBgC9oddSoYBQcdbawsGdVkzWn5o3rD7XckE6NVm",
  "key32": "2qu9MD6TL3PSBkCra9YdkJs4hPHDUeB3HdnHaKDNiv8J9AHjGcwxTgU5EJsWTgvFwE9oSg9Gy9JSLbkZBiMMXxrp",
  "key33": "3koGvqUbF7uizMY3PkPycCEbhJjTTWvfCx42t94LjGar77nTtqd1TaryFGX8hs1REM5N6NFabmskwaHxTteJCoTm",
  "key34": "3chT88WD4E1LFhn35ffdKLfT6irnbnfhtgVPH85YYifMEjDLSi8wyytgcKmhkQvLKokbNVP6vX1TKpXNwgNy3w7D",
  "key35": "2CJy7y5Pnm1YdGe8BssHSxbs55N1jPYBa1rzUFYR6Hqixc7LGXMbuk6DcyqUEJBDufZmYbvnQmgtih7dnrBPKPAA",
  "key36": "3uVCb8pJj7LaSVCPddgT166NxR6iCkmrZj1QuFgdUd1DaeY188fLzdFUQU2ky5KGC6XAefa9NnEvsGn2onTz5dwv",
  "key37": "YMHpSSU2rrftrYdqRD6zdWftic7HXV4imPw9Z76i2iKWWwxLnePLjWccsWkhXAKqb1yw2V9SAP1L4fsJ3bjGVLr",
  "key38": "66wCbGiK4zXupUZPwZdtpAEcHS71VTg9HfAYowuh499E3tHHxYGWe6UBZPnDHuEsyCFD3cdDEPK4bcuQVt8vL3h8",
  "key39": "2M1q5ncWvRvd53neEjNSi4cqAodKEyUuzRovhzhQfidVzt8DHp5thN1wGcW7TVcJryh6uG3TuaLSttXvna3WU5Vg",
  "key40": "2Yw28Z52ksb4gYq2UsN56WsK1WT4Ta4YLny3s3qgjZhZmDLvJBENzVdH89KGcU419hX3SoEGLekgRzefqYpsnsgG",
  "key41": "4YKZATDRajbi1SEbPXLSU4EPi563NMkgD852UwcWEQANU9eiuHhFBZrCRrjAnVX5qQtiRQL2MrMJ6Gue5EVPxAjJ",
  "key42": "3uut7BL1iuFG4rgwbUUKZv7iQbW1sKbKQxiUB8Y6zLxhv7QGn77LRJSyB6Uhm4yiTEeuaA3HepNSpXGo7NY3RXZX",
  "key43": "QAPNz1uZvVuax2eBcNZk98Rff8ADACvGxDtP35oDxBWcvqqH11ov2GjeQPGdr32VqAfWHsCfquF6UHx8iDZXVq2",
  "key44": "5f1K3bEqZCJsYa3GPb8xTYoRJvzVvPv9wfMNXcGuZ2gYCSTTAew2BY68S336zii2nCvWNCVtKWmnfQ5h33xdDFT5",
  "key45": "49xgARDzvjaLnRpHVKTBJSw6hH4KB1DhKW67FitrphpMkam1LQvYYKevHL6QvAvssmZS2k8KuwRdYNubSv9xLVhg",
  "key46": "4KK5aARRmF3mN7Lxid5GkyTVzPWNbBxe29hueZteRh3oYMnjfLwMsE2aewNecQ3ePcdiqXrQyqB4NoPGYktNUSCE"
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
