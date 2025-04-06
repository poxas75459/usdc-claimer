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
    "2T6YDx1USg6uqDsScEZetrRwPkG8UNVoX8THnqc1pKAiFrPogu1P8Z3bxLjn6JQTRis4av7i1EDFbiLQfDBz9nAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Dc9ZojLGWEWfgM2swmdRu2tqEgefxGpZBx4TgEuTzqyDLiZxqfkyuBZPJN3qg1qYuhRyaQ9FhYs5o8xh3SUifx",
  "key1": "66ivKtLjYLkvV3ThfWjG4YghH49PZK1Z7eFvHsqvE6ZMwSrxzjCgpwcMpQwBP7n8kK2dQsveAziuCANtzzm7K4uC",
  "key2": "5JCTX1c6th3wyDi3ikN3Za76FPR8c8u1Hz9ejeBFUgBz5A3jHRj31y3VkoQp9fa1PneFNQ5oDeT5PyEckFX74HAF",
  "key3": "5TcZtg25BhK17uutqtVjFSNu5ume1Z6QBKzTgLeUVRb4Re2oVLCkPkCjNqfBR8m2Fnfiq9zRH8tNy1VUSwT3q2wK",
  "key4": "2frE4zdxtDUUhBWcoa9SJJQRmu6DktTTHkTjonSxKsPch2k5Thc9ucrdSgYgDecJZWusH4Bh7pK2YpDrktd3QrPo",
  "key5": "vv8bQ1AJYrjTVoWz2qvPppWQwU4hC7MVsrT1dddBYmq7efgf8m3cZzDoyA82jQTcYrdqkH9NQJPxTrCEmd5HDTe",
  "key6": "2fm8m1MepnZF3TGMcPYX6mCKsKGmgxt6jPFuL2xBZ9km8yQd9sSrvvfM6PxuUc869w373x3KyNaiA7r6CayxQbun",
  "key7": "3ev5NzH9fnAJujUjAKaaEoAf2ByBfNubzvD6p16Yy6e6ufniKFoFxYvNNjTBQaEk7oYwVfint751D2U3BTC93zqS",
  "key8": "jF53KHfNHP2rKmo2HQJTFxjCNt7N3jXeJEo5yNq1zcjTSW7iTkFECNFkxLYjLXU6hmBofb6VUKXYcPB838tQgXu",
  "key9": "2MfteAmQDLDRqtwzihMQkWiJdycPMzNdfrsx2dwptdXsNcPtUg5RY93WjA7rjdJW8wZGWuGBKK48CWeK1vmJbteQ",
  "key10": "3NUz4ZPPbrPd6PnrzYm9CZMGSmNWewqqyoZVDQ4VWJNCoarE1KSfaLkcX75BMmh9bvHBXkhgLBK1pfHJTojUcQGn",
  "key11": "4vH4GvkLKATDxjJmvn7Z94ftFuab2LDzCgzAhuJ2RXuMykJcaDsZTwqEYhUVmUdLVdJezLuzb2gC8zakSTWSL49B",
  "key12": "2JFKCkwZdJLgeJnXyGJRki5KHx3AGmPpRLxtJCKuDDgnfAPkgNkpoCxXNUs9RxfcHv3URs2eWA9Kr4kGFn4mUK66",
  "key13": "5WmxTLbXnqRKu7GanG5iLfer17RTK9HHQXjGm8uxfLLjkGZX32wcsHX1r1FaQrK9fkgqvuBAnDhTdbnKjyYw8n42",
  "key14": "5AmyZdcC1Vx1UYHiiG6ZwHFhTDvFepq8rqLQkPgiADwTrhrQaJnjAHBRdp6igykxJh1ByexGdpS49BqV4rmpM7oC",
  "key15": "5WMzkwct9SyUcEBuSFu9JAqSqfxNHbHx8DM1frvnMFmvxBoqZzuhxy6pmEEJo14tahSEuhriu6ZNyhD2ekcLAh5F",
  "key16": "2u3EJSTuSUXLMuG2bTkGYJDCFE7UALkoDRLHzJ737BMsnxEMH7kWSeEPJzrU9dX4gmGQDYs36bMwhrVmoLkgkCtU",
  "key17": "51oapYRs8g2pyUgGQhh8qHbfgZYDeinJo9Y1a4SkUfBzzH6cpuwLqqqJyH7wQRJL9YGFf2xbSawoBs7WRsks3cxS",
  "key18": "4zCGRhXsf1TGg4HfdzuJ7fF25UJBndUfkQ1MZhy3prGheKHzp2ha8CaieCuBPDJepPYNqu6z9HNuD4S4JB6UunP",
  "key19": "3GX65ys5iydKNUNUPyLQj7bvpEScAaByrFLR99d2GKuj9a3NoUaQQj3Xf5gN7W6APtLpHwQyEsfSc65PTwRrjEoP",
  "key20": "5JogkbwviqLuhuUsLBJoooSfy3M9DAKyC4rr8ighcZFATHDZjkAAgfGjSh7KKXyFM9GeRpbmccyk4seX5fj9LPVd",
  "key21": "KaNVG6nzxntvkZYAom2rF2LMzutEZx75nLXYrzffC5ZEUosdCHKW2or7GQXxbVnt3tZecCnt3T9Lysqf3HCw1kx",
  "key22": "3XNn8HwiEBLT4aEp53bTTUmJSBFpJqwe9KzRoY7VKZLxrXi2PYhnvoRz5x5TrtsCSPGMtkbYF6jiWZrT7wPxd2YU",
  "key23": "5ZZs2hwmrBow1rWhB711GG6hMyjXkSL45EXd65wTx3Zcgv8dVPXTrEtwYcVpZ3tt4wupe943qZdBXuTTBx4TojZk",
  "key24": "QXvaG3EqGogbrbMNskwzBzgnmUzrrFAnwkb7x2nAKKG9wLGRtst7G1jCqVP1EjxcM1uXwB2qv6NspGKF1nWGH6v",
  "key25": "63pmeEz5de29TYw2zQXMy84GA7NpDSptp3eEq4ZzUi4gCQAMJXyztDdKjfJHV4TN18PtMPUVphcg6uRHh9qzgo9s",
  "key26": "5BJQCodmBNefztKdsdWNutz4MzsG7QBek7TQRxQScvtQ8uBvzVTBuMv3Yimeq5UsTwHkRPnuYoxuAbcm1qVhhZSi",
  "key27": "51kkibAkTyepotESn5VSzo64FZTys783V1kJNbjmsdtnacPnsh8t3cmGwgnZb9Vwr6vVamoVrEXYbXW4LTi7B684",
  "key28": "5qEUBrq8xhLS3Q3Mj4RG61bYTFJu7fV81nZdxEk19XwuHARnYbMFQbAsS1isNdZxeR8DprJ8yQXiPhGJdEokXDP8",
  "key29": "5oi8vC38iDqNh3V2u2pVRRQcqaWABF1FtXidchKpoDWLfMtd1FxAWdmKRgkhyGcknjb52EmqPPNWeAXQmN5juPy7",
  "key30": "2guYN8m2KWo2bQP2A2PEDYpriQZhAKFZPhRNSSi7n8peGzdMt19QvfFnGtAfrX96eaCrnhs9jG83cHx3EpKP5JZf",
  "key31": "2hc5xa41Pja7e6xrDcaBgQrGweq6rPWka6mp7WJaCpcuVZfrRj97m1kzX9G18CkWukyKGa4hTFGppfeg7KMBkcuU",
  "key32": "kJB7sYazUoYcq9t3G5AaK59m8D8t98cscpwduHsPff9Gcc2QCWzkv83TsHwXE8JcPyUxtWAxPHs7e3gMbyE48Kd",
  "key33": "2AptVMvedwdKT518TnnybWR14UNjbcdHnWbrCGQcvnx6Efv7cZd1p8AFDuT59qFn6K3AEWt6typMXb4kdfgv3NjL",
  "key34": "3PGwBQgd43ZLjveSqUrXHcX8W9a1FgUEvsck7yoNfrP4DMhZ9gGmq3AseChQKdJHSKzzL8sGbJWZJ3Ya7P8aqzvg",
  "key35": "4dcV8Gf7htYRhKK8FKzzmSK3PaokG9j6Crd6NdKYyCDYCCz2ZqXS6FDoiRAa4y47sUzAEUDp846J2Pibj6st2cCc"
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
