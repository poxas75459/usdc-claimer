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
    "27BvAArLWHpimQJvCvHd9SiuaJgbAsqhimmMzxwGhWP4DaZHs9wFd7qQj5omo77BwyB6gGiHEeakEXGqkBcHhaaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmL9Am2p9JWXhzF5xdYAcQuybDhMSZrbzxamr1D1J7Rg6wNXJHwfU31a2EUnhu8DfsTjpPGtkcucxKAJHanMUMn",
  "key1": "3srgjGtGYBmRiG7AxMYJHupXJE6S3pWe91J7VH6XmjhR2w25js7bZVw8LKauwrzUsRVMpjMa3AQeAipWEDzewNic",
  "key2": "2NBAUjCRfxcFoU4b6T1ZNa2AwF7742TEM1sihdiEeycaw9n4akmfRKMrDwPisn2baqeKZ3WB9TmJi9HYWwtusEZz",
  "key3": "RKhHk8udTtTBKViZEo9vTnxCqN2vQK55DQoYgEBSv28dbjvbPUBfRQxyipovrYEPmCCd71CpdNYyAwr3m4xgyGr",
  "key4": "3JVJSKNByYBY3XMEs7bUiVL8P9KozK21VsbFAH44Ls9dfxFNhBfTsqa5AJ3fURgkrweXwEx9fNA7xFd1uRCCbHcd",
  "key5": "27LeNnzCRMLVkHHE4ue9frAUHeRQsUjnqsFucYb78UNnMziowMyo4bfynZ7muhq8b62cXBGk9WYwKKMk4mTXa9re",
  "key6": "5fFbHghCW52ouKdDeQ9PwpahLiFw8KAh9Fa4oiP5jwqNFzajfJdu9y1dzcRY8kBf1ZnE48ui21371nkhWLSySPBf",
  "key7": "4rYGBjtZ2e6zinNAi8wYtEpcRRaSNt6nGPZRahTGG5SGpReHT4v9FfEHQSHFKu1otuzw7eu8iTuyAVNrZr9kY7mp",
  "key8": "ZkaAE9gejC7NLdWPyCRwkaZ6H5H9SjCAZNpDyA2Yht18N6tdw8tSZfr4XMVS4JcxzJBaBJ6Q6Y3ixU5QELDKtUE",
  "key9": "4a1MeAFFqeZfb5QxEfqCbvXJBMEGvFEo1dtvM4gACEvgfnPtyVxvZYUSV8a3VJeQjTJNHfoN946LxWB3dGyLURNb",
  "key10": "63qNVQWCeHiGnecZbcp6mibXQJNjozmSAiWVRyia4UcrT33ptjeo3Gx8kTCM86WiZAMvfpe8xFKoo8uAUxaDoZZf",
  "key11": "QUkH3AHQbfPcei6oy5wP7gy44nH8ATzydKgGuwPHWftreNgxEpYJU7WjtTZYCLvS581fqVhg3d55VnvVvrP6RXt",
  "key12": "3cWpVSJWi1bN5MqqFA5oSmXrzCu8v64w2zTrMV1YQ5CaUDfDuPLETE6YQVm4oLei521nipxSJVsAihDQPBapfSe1",
  "key13": "tFYJLSRqx1nTDu1MxPu63veLbkd7UpuTY3WLz3kDprT21dEaPJRKNLd8AQjxwxAjLrCx7bQCjPKHJErQGuPqbcK",
  "key14": "SZyjMAcnpQARhVG32qBuBWk1FF25r7RxtykR3VqsMX64guKHpqDLxkZLRsGp6Yc6zpUzyYDXWYG7FWxabvGCLhK",
  "key15": "6SMb2bjUP1aRXKW8koky34JNagom3kBXiwrhpU9AdGkkNBVBttaW4WNFZGxoJQMbuZJJZne25DtqDn5UjgndMeS",
  "key16": "2s4ZnyjpthgwhHJqdUCH2bqCWQ2jFLDt8st5jJJFusrQBNctZNXC349L62vYbtjQN4mS72Ns9zrdoJXX7w5jz6fd",
  "key17": "3JGUbUQU8GpgULGFLS61YK1XXUz7a6HujyYTx8GPTocHjtiLBtZ8tbkiEb6fwKiwqu53P2V8wxsnohxdwRP3ScTu",
  "key18": "4gxhhoFuB5VWTxs5YvFYxr8EVKiKYyAGBj4HRmmLpQeYGTH2aNqg6589TqoxmxPD28T7sKCYPLt5QqLZnEgsWH44",
  "key19": "3EiTB2Q4ifS89w8eJ9cCkhaJFmrnnvrHWuct1YjYKKeHAnavNgMVRH987mhTxuXPE6p3mzmUuDQM7Q1Zkjr3qNyr",
  "key20": "x1PnUWXbHfyNWTeZiemVPdMwKwcDQBekwuJQuGhjb5pMMVoN4WxNAao5trYEKSZqHdV9G3FT9aKuo3bdaQM51zc",
  "key21": "3HQ2bpa6VLtkHAqvSkak4Fcjn5TpeCNtGcDKbZ5pyXw8oz5FdyDZEpRq7aQWmLQvikefRzUmtxGtSvRY41TbzPJX",
  "key22": "4QhAABrmsn2aMHJepUutx8c3XjD5q5DMGDjmucCtaX1NJNDS1XyDVMg6Kxiqb4RKqE91AjZTMHKTi487ojrvg8fs",
  "key23": "3zjZ9Ak7vgGCnaF3o5dckvvEVVVzK1ThsKxk6sWU5ZTtZL2jmMUyZ1C68bEvi4RjoZhDbpngcyQYUqwabjcgid5n",
  "key24": "64pSkEi9PvUgAYDX7CCm8mLgQvHTdAcQpB221vPok26Fz4Hq6Yby416giyzK7NyZmdc2ovQmLmMDrUJe9gamPCyA",
  "key25": "4Ao17UMvLutng13k2qXr67731qq1c9BCmRexDuBiugyZHvdqBxJUzarfGqJTQSoCHBms8ycL95WxUW7uSnrQMFZj",
  "key26": "5JyLXUJTJrVJHcof5h6s16pHz4kz7GQqU5bwhzzokLzgFYeDeWT9eLpR83Tvcsh41E9imJXGJT8N11E8bc3o6vCt",
  "key27": "5DTVncPgnaC8WoCrog2n4JqzzWyighcedhDFnb5JgMrkRhemQh5KhJ2nHnWosmcdFbNbEYdCosPtwNfJzCkvvzFp",
  "key28": "2eZccbBFYRB7JPJd85az9akEjPCdRD6DxJrsXAxJ94chom5AYjDmtAGCijCkDvXMMikWqVhtVfP2FbpB8XxogC23",
  "key29": "2KDChmqzr4Pkgjv6tkeBq2xBess1faSEXHLqpm7t4CSk2aa3SriU9uxcjpkoPDAEYyCNgCig9i8ht79QQYNiCkR9",
  "key30": "3bPBXtYBvr1dcGJBm12fUtwVLhJdBSovdEP5eRCsJa1jdt6Hxmto9UEj4mXdT4gg6ouQH9dY3xMeb3ejgnvTqyqN",
  "key31": "4QbHGRBa376pNAa3iiUP84baQZXeBmR2zcHZuCEp2Su63THxaU6i9PZ6G1ERJsKffEp3cEG9B96EvAZZZvDjtukz",
  "key32": "24KPzaBNPuvY6pG72pT94LK1TtSb659wU2UNtkguD5NBbvGtATaSse6rG9dxbEGf3k1boLYjjBqH3nZRKJjDiVV2",
  "key33": "3jqdPYvxNQb6TAGKPwuGsNEynmYMwBroXVUuTxFdXDv5pm7eHH6h7gEFRe2vgSQ125neXpJcKQoywJtiwjPhwsqh",
  "key34": "3cqZCnPUSshifTUXBwVvVksQDbypqjSLY6SDG5uTJzFgCBfqkRaYkUmZkMaLmuNkdqZnGQs92ZPwDKTGzuoaWjKQ",
  "key35": "4MQdbWxGU9gRYR6WP5RUfsBLEPgTrZgxx1YVnpxtzRHT4JJ9j33p8gS3MNAhSmvt1ZBY6FwLS8F6NJoAdog8tnyV",
  "key36": "51wLRNwRxYjZnGQYv513T3poh8moWbF8AmmR7cZECrodb5RaRDrVfRAuUPwphjX2gen6Xf5FQ89htH3KnV2kNRoq",
  "key37": "vDiMNbbWXrsZ5N7Juhcs546Qbx6wKMZgZEkEW7WcfhABNGkLjjfBXnGmeWzyHjHovunSGAs2dmQbqLdBugBfVzE",
  "key38": "2ZRMKRfduoNsABBnoDD4nSyLwuY3mtMPYcTy6gciRgrDfBfwWaJ6PebRgXu8DVMMavnyZTAdcBCks2iTESDJccwt",
  "key39": "5h7yE4BMxRKirBqCiaPcpV2FWmaDYH6tMHUaRAa8rcHr4KNACa8nL7DwmTxZ5E62ZxGQKgLwAA4JmrZsBhAcB9ne",
  "key40": "5RAT4AsBdSAw66HrGqXmvkb9ckzxFBxdKYHcHepyTn2dZHcjvZkAnb94QrfTHkDK9WYBG3Re8kZ3kKs1rbGeMDDH",
  "key41": "3TUxr7S1kPuUS72ruYXJZDqcyMQrgi7Xr5VbDxmJWkByNtwK1KJDdcWGUadZJ1WY3t7X1iM78xGpezmC7tsDWoKY",
  "key42": "5rWADpV7mUwhP7t9vZmnuwj5d8b5tWpqmiXTBD5TYbEC4hppDU8fsoNfiwfQW6Y98sVg44oQZ9TiKqNyWo5cGyJ",
  "key43": "aNaVqTy1f7EV5e5RsBb9rqQp8qohRJ5WtoDAWQqGwFBkMs2N6hoY8xqwJDgzG2nv4wM8MnUSKxRxBNKoGygyH5G",
  "key44": "3rE7FSsfCuAQVrdJ2ukRhthf4tVqVjHZvcMVKxLXZYEkjwpRw21cz7ny1xfdiT3xaoDpKT2zyiWAHec8QQ2gTqma",
  "key45": "5x2ycLjuyj7i9nUjuhDnaPhBjiakcpWGz9F7bWzuVuL3vaQd4FdWjVkG6NDjUbRDFCW6VRbxbrwu1k2hvoGWPotZ",
  "key46": "2vQttbJV9iKoaKZWKCtyjhj4CPDV5mbusNnVe7umxeBYrHeikDswnAVeRALGSC1PyFTBvGkyJgVvD7vRzkzwHpi1"
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
