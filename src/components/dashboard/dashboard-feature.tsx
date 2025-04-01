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
    "5FsSgRhLoF7djfccaBtF4teMNJKnNyBoQPgjKZQ1TWEQQiuxta3GGUEEW2jbYsTrGy7AyvyDHG794hiY5yFB5JCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4trFMPeYft6QDzabCq9DH6SwYL2nEeiCCpwyuwzGQE1FLthVhFFK3oDbtWzaenvPFQ4P6LccyofxbQ719GJ6zKQC",
  "key1": "37YfUkcgG5bvz2FktfvSBE4s2SDXyWbrfeoXnUz1Z9J9FNgMsqs9eK9EX2V2riBE5HNh4BBqqdhC3B41VFpoJEUP",
  "key2": "5u4Hg9mX7985uPXi3EZHk5j9sCUBAVrcXtVsgADWFfoWPERtMBiExoHmUD2moDhmoqUJLo7ZR6VL8kgLRccN1o38",
  "key3": "49iQRnh6DrovUC2sTE3c74gJMDrSrivg2Xy9ziEZdhDRmABT5iUUsh7pxVLw9TjDiHT2yLXzgFfu2596J5VxyKWN",
  "key4": "4i8MuGKkCHja3YkbXBQf352XyR32859hmZP125H51QPq7LQdFi7PkEXpvhZeeJp6tmup1P6qvVkF3s2P7UdffoJ9",
  "key5": "5RUdVQjBqnBybR9P5dMEjNY9NJZ2q1ywz5n2BT7SWt9kbNQS2bhwkXMEQUKSXW2iKtxNyz44aekyjyJc8UzA9A4U",
  "key6": "3e3GkuyYNd3uK1jpiTeuBt6wiWYsUkLtt3ULZ3UvDvX6MHMDeuPz6ZabFsz643Wrgk3J178xx4FSKFWrqPRqrF5D",
  "key7": "4BRWtfs8LxAU16f8v2JbvKxMccS9q2oeq4TanG3wyx2wZV2GHsBQaWHfMDyFiacaDwjgQiBxERDpTEQ4xT8qRUHy",
  "key8": "JvdPSssbYLpvGLu21e6FbYjNdHkJE8o7YjXQZYJP6mBRpZKfqWjrT9XUm2L9n7dnib6g1P2NKkeZxxvEif8fNXN",
  "key9": "9sEEfMd38Rj3kZaqpKx8qhszqHGkMzew7RpqtXofgxdVgS4J3LPcABqRnFKv1KkZkwzptSRB62Q3CkLd46zRZMT",
  "key10": "2nHAGC6852P2a2wjWh7yLXDvaBvBK8sxav5rvp33k8LVifM1wTMQxbDT6MKJ5hjBn4LtdTYvAvMmDh11q6eN8teF",
  "key11": "281uBkuca4N9CAvueXxgbwFrcojeHsfqpn3odsCuQtVSVEXG5BTAcU91FMiU6MSsCB92kHRbRPXWciG5Jg87qHQq",
  "key12": "CLVg5kH2qv2DVbNWKD2fHDTWnXVUu73L3EakYVwHS4SzKqdAESfoPijrXVFJ1gPTXXETVwUx9Be4qWyFYNE77o8",
  "key13": "3CtgVGJCpSvmjhdJBViChGFJDZNNFCK2roB2bDCHWhLZXKpq7Cfx64xX8pBQzZr2UXerkqTgrvtUhCu4DTJReKQo",
  "key14": "67EAKUUM4GPUqv786XHUQfqTvVxRTRXbEAP37C9yMX6G5Cv8m2WYBz7Kg28dgHSg7yPxSffmHHqC1x9TjW2ibBUt",
  "key15": "2TQk5uVNLfGfFn55oh6DzEvAJznysJUg8XJSE6eqkxbSkkP9NJrxPvqFaBD2ih42Xi22G5NhaGcGbBb4Wnhaxtm1",
  "key16": "3YC5zumTA2kqEn1imeVfi237xeDuPqbg2ztwoBgQUSezrGRww6U2546TMExzFwpWfTcniUhQrZKWPnAms58upn5e",
  "key17": "pVQcRwBTexZvxwRF6kXcGKiLPpa3dP5en5aGDNrd9e36nzxRvjh5kTEXVWgY71ifkKT8ccwcvXi8s9rMtK6hcKY",
  "key18": "2AQYnFynZH11Z1tBtECUhMnJwGpXd1uNXBQrEh7gSgbwC7kWMT4BJEfNUwHJJMfsptD5YBKRwGLiCFPVMwQmDbTy",
  "key19": "22a68h2V6vhi5B5agw3po5bTaAL9M4K4ni22W7jD8rK2EdcEr2a8RVU2XiHBVaY2sSAuXRFqNATMXiGYH13dHMB4",
  "key20": "2BG3S4GZ9Ydfk88hp7tRhbX2SpVUmZssTvRVugpZVqosDGdzjbnytRwSELkd2sWnHM1dJyJwf4h4mxzaiZUqcCh",
  "key21": "3Q2oddP5qHotuqmBpm5HJc4dYy5iCjfpSTzDYP1RWHZciv5p2imnymo3aGJ9Y34CLMcwrUsEoAWzTDGvGxNw6qrw",
  "key22": "5s7TbLXVCGTQKayyuDCYdwf4KYbZmZUuEy2YUtsWdHvhsTFGCv2heZbeiZz3ow4uhbrmh6toqRtRCddvDMXX9JkQ",
  "key23": "44xnsgw1dHznHrtgCGBj7nWF7pzQy8Xgtf8rMSQ3CihfsiMYuWwa12zT1dKXtErACPnXw9u7Cf183zKBJHdPurEN",
  "key24": "2o28wjaFzDUqrDoECx9du58Q7xK65uZ9NyqaXo4KZ8EeXh646WagCrDpq3tJVz8YpRRdaTcFxFDiViprq6EdTZF2",
  "key25": "651d14fLEF61vwSge7nhF3X27odbMexB3ZhRd5tuTdFkzouPMY94QeXXdd96ZopxBi9DLVBmWxSv5tzuUV2FVXRK",
  "key26": "2qJ5uWHhUcFHEcMrkq8MSzKkNuW6QD3pfuTfr1WxEuwdf16fTXa6WcDnCTVtQfqEeUwUFQ7f5saRNNCkFNzppkFc",
  "key27": "14h8FaX5NRUXR5Z8G94kDpsoygmRxVEKWBDdZwsG4sDVVVdxCu5Z5YHm7yhj6fkyLNBE35aWWE8Ytwra2ziHCwc",
  "key28": "4L1gaFAz1WC1kwQJbWupX7dyvzGvTcucgTpCEz9sHEqubZPQD8xBUQiHKoQiftDrpEyfjvfzieisvqp2oUhkm2E2",
  "key29": "4bmzvVKDxMkdTtBCWW6uMN7q5NmkvHDVK3QdTJvwZbwDuzj7GDXxQmYc2SzwzzPFXCAjPjYbR3dP6zxHrqThXCzs",
  "key30": "eg7Y4JfLB1Np5MTLgyH8NrG2Pj8mB5J5N1BNLVbbNRM8ZM7y8mvBZPUMLKKEj5LGR1SBYhUrmo9jPkLUupeuM1u",
  "key31": "2STss5SV8kkzkHjWq6UNXP6fgeRoYjk387Ph14JpyZLDSmgbim9UfBcEofXngeNekEZg6Q1AmTwsACRxXGW326SM",
  "key32": "2bmZLECFmgqgYo4jED8pdW2C4svpWcn8fQzCQabSdgu8VAPtyAqhukfxm3raovppDnqiehzjJJFPTSAhkrvzUm3A",
  "key33": "49ukAtzR9SSJwdkNC3WL26uBBzjdbmr24j76YQPegymJQ3KS6Se4YjYfQakauoTCnSXeAhHV47xgFbaKQS967K5Y",
  "key34": "4TSr8UkEfp7b7aLYsYETBV8xhTEZzv2c9FdqGSSeEYTWLP69xfqSUTfgzexNDbsoMtQQNCYWZ5rqYyDmjLqJUkgN",
  "key35": "5czTP266f86DhxYEXJ2DHULVSkniR4YPun69VT29WMP6AsMjVhgqQFbXEkuW7J6PJ7AfH6oeSTEXK3XNHzxUXE5Z",
  "key36": "3iWT5YcdX7TK9n7Bxjcjv2jHdHA7W3tpaqcZ1fZdyQmqsr1jBR2fvRYCX4mFutmqB3PEGtx96EkSeNzhuPvdMNoK",
  "key37": "2bJ18VtEMihKQ8dzmedoT9aoMBWutUKVzWQZQnKs8KywnBMzCotEg9gripAHJZcyXZj6RkxcfXfe269Twe25k2Vf",
  "key38": "5M88rJkaZ2nYD3WoVFc853d54sgkte4KqoGwvFPk57mFkvZXT97MS3LFM5wfn7vhqv1kDtGrMJpBjaao6Zntp6Rj",
  "key39": "3r2FkCZSnHH84icLwSjRaqeGSqE1NBpWCZmnxu4BFsds83PCvJtt1LwgyWJE6Gwra1ABiSfpgThfxvrbX9Vu8xcb",
  "key40": "5GbvBZA7VQPcN7pt6dLcYKkEXnXnbjFYegZ3f5THqqL5GyVrrU9A2jL5JFNCriZASHsYGDrDpTPjXzEiD3usZdA7",
  "key41": "26R6BK5R9F3WUouiMwUgT3MQpnpWnZ52atvMzm7Z7hjsZmTEqF5b9FUg3MTPv7DEFkBynHkm3NkoCHZ5qw91R8Uv"
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
