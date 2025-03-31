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
    "2wuiLVLLrYnP4LRQ8HhjHg6Awo3FknDXFH2XqxtumB8MmqxGgkSgqA1XzjB3vQfWy3PPP8TCGyvMHyRyTgasyeLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNRnYdJyUGRofCt4YaVP7RNtweASZHFFYvmgahYcm2JEPtMcQmZXGEKHfYyYy24gVAAWJZteJXTFQKmi2jyhmcP",
  "key1": "5heCqRHZ7yrm23vQTQu4W9ATVMUJ5n2PYdbdX8zzY8uEYKC4j6eZDAbde8kegnfecpbiSsBbyEm1f7zhJWNhYSGd",
  "key2": "2dxH5xuvC1YGCVjvhCsWhM6PMGrdkvhaWtkn5dmgqXsattmrzMnzZ5kqZKrbcKSw7CibeGtRabou5cjmoEyYDgur",
  "key3": "dwRdYSB4yCRPgasWD7feXYHMV1BjbM8m6fi7gL8LKTCgzckeK83sMCxxYBgZcmpJ1cPAT9KJPFM8BMznaBSh3Rz",
  "key4": "3q6L6gwG342eFVC1yv2T2sBCA1Js8kivg3FJkD6phK9yhdeiXrCzXR6PSy8VtV1Er2fHLJZYZTUzNEBP1Ct9jo2i",
  "key5": "614C5pqu7t3y5B1EgRvAxE4cCjmoAaphgxQXNTiu4acLSxAUewfBXxYkY8itrRvEDunjrfkJzU8MqikLgvM1nxJs",
  "key6": "2coq2B3GaU5bHUx1pZHXeoS7rXznjXwqpnNQyNuuDPDcYfaTrk8ReH3L9haqPjZe98UoFKte1BMQhoDGhqPCU1vM",
  "key7": "5fxCsgXYYK1zm4HtDc2CJX2xqjpzRGdJMgbPX1JnJpe2vWYPEp6ChbTGiiqRxXnLRJNK9s7ew1gEEQKSJRQTZ72R",
  "key8": "5zzb7rRFjJ1UQGvBz7e1xH12YdMJA5cHuFwwFdsURcrMq5Vkb8pJ6XVY3xHr7aQ9N7FKHWyzHGJKD4AS2NsQHRxt",
  "key9": "5cL6GvvoEgV7cb3R73JUisYKEk6uytzQZVkVnEaa1jL3tkFt2GZksWTU8jqzJTC2o3FS2a7ah8LGyKQT1Pz88u7t",
  "key10": "5kAegCPbCTbESWWHCQvbTicw8aX9NDpnTPs9vvW8FyCZPgoecL1GyT1RVpT7v5UjqJqa7qKYuSJ5JX6HQe5fndWC",
  "key11": "3mHXvfN6n3Dtd7z6LfxrQxowcd24h8747shWpL6TjnMteN5DrqSi89nxgM1G5sNiKFT4R4QMtvH4Pbsrt86nBN76",
  "key12": "3GiqrSNyJPFCshePCwatF1HYeQQLAUWeGqWagz17nSrFdCAuDZSHSh6qnfeZBMgsneT5rAVj7ccokwan3DWCBcMo",
  "key13": "SN1SDF55wkDe7ngP9HZUC5WWFv3P1p8KKPszE552SxQiftzA2o3qXdmKYPBnAK7Xidrx5De3ABu3XW3eEi78EdF",
  "key14": "ooFZY3xtE8PAfaxgqGwSuZbwVq49o6wWmccAdVXnaDmauTxPaXsHR4QjWNhkeqYNvF63SKkWKGvAzCGDpJY3qY6",
  "key15": "5YWAoLspi1hWcmpYRYxUi9uuexpNPBigoP2Mc3M1ArpQX7o8XqnpMDxqAvsAqsn3L8tqAgcPhx1drHJj8CzP51dJ",
  "key16": "2zKexuAG7afgecFfaqgWWjt7gVdQN9tDqqAV2NtxYLFjTrBc7SGbBdEwHmxzjpBAsZfwbuBXDs5C5ZYjtz9BiocQ",
  "key17": "351ar7fSrUMTtDGSfPzwRHzbugcrEezPVgcrsJqykaAmn5mSGsnZnp3o33tntYCzw8TeGsnUmjSSyPr8UmvTJkPU",
  "key18": "2QBHjyww16GuXHcPfyBJTQNi9TccjP88iieeXuN73HiuxjoXYR4dEvzNyVEo4oZ2Q3kHpnAJuwhASDPPFi8cpXKH",
  "key19": "2LvydW6UQoib18CxtuLv454t6xCV1Ws4Wi4NZzkoB2ypVYZP2RM5v9nP87A4PWFDrTWXerJWBGWmEzWf65AR2ea7",
  "key20": "VqSnXJhk1NiegTawZuBFXBy3RBqPBWa1c1VzqnERVHviSoTeH5FwvAS1c3CjUHHzoKo6qPxwWozNnWw74y6eM8u",
  "key21": "2ZVTDURacobtD6eESeC5xjqYiVsGC732vdhvaQ9p6p8GcZXKanne6EhRB8g3jaiJHRDZRBGAQXNJeUG6ReaKTSuN",
  "key22": "4rBSAP4HpgrMufhH2nscNFT8HRhm5GcGSkuA25KvxiYi6u4Pnp7P1YQaDpTjybF9qUmGYSa3hGpuaBdJwBrPKrVW",
  "key23": "4MTHUfkeZdVMR6inJgWckKbEhZRLVdTpoTvQBG8XyvoEpAR5737EHTgDuopAna9xhbDdvfhtmWibXBkPpVUZ2hNF",
  "key24": "5xcaNcLTrhubY36c6pgvTFvj4eLb6WSjxgDcqHMNXAK6RuKxHZMfSjQdfo3PVWQciFLcNWbz4GVf5xhjY7ic1FGJ",
  "key25": "22uySjhGvtmBNTmAynqLshGCp6xuRJSSrk6y1tMo8ffw161DsSNxoYUb4rScZYPUk9iYXMPwYcm3G9NjVk2bkfcu",
  "key26": "61rENRWUSZejRiARHTan2pQReuZuWURn2AWU41YmMt3kwg6WmT1edjmV3GS66zNfQcjW72P4o41bXPeAAtPCKaiY",
  "key27": "3xxd5MbjCKLg6djtfkYjv4dbDm1i18tTHVmLdoSrYcpxphQmcs9PhMHmNtAHLVnuGQvC5uuGAtPVHMQ5G8tSCf1m",
  "key28": "2Lpw4scsv3QKzuLVwZFsQDCJhTCmfPsscH8Qq6TfZ4To25pPZ7xuVFLLgvmdpNuP5ekq4Mrr2tGkUcuVzQpvwEt9",
  "key29": "61zkr6Adsr3U2fYqz5MGB7xh4EjDWcbsWqmEZF3HZYyMM4KkgDjrEoPcf7LHjMTLNXPM8WYvwXTs3zvJwNz8qzRc",
  "key30": "2FaDfXnKK8VkbvBvpbzA7BKtor9y5L16Bmkp2XM4JKdyWLNDGhjyYVgbKdx9zzgwVHpPMU3Ro43zJTDaxHJRMwKA",
  "key31": "DYGfAevRoZ1gCKDjC1YGqzrDh3J6Tb4ZeBRUBz3Efrq9jcTPskbWdsynKbwavB1rhRLBarVZxFY86AP6Lkuq9RD",
  "key32": "SJYi1xMcjjZbzn6pWWMrRodcThC7MXQd8p7XqooZKBS2VHLnkzVBr975ofJRjQ712bqG3yqvDXuF3Qp7Zo4VioS",
  "key33": "3db2khwYLeZuhX3No2DRR2Xt54w9iWSzb4gahNuKen8JhRChpmWdoUriStjFXZc7CqJpFm1VrAzogop6omCF9MK9",
  "key34": "29zBypvCmchJfKEfBL7ipPKEJKkPeFkDMabppzF6YKT8WBMY1AZefxwzi3DCJTcpGvTD9P2Tza5Jh9bARMCeNATi",
  "key35": "2MZzFvsm8QP9tt1fLPXGTxDHrDk2KGFQr8p2P7r2QxNvEWe6m3To3ZsXcvM9ay1viQfhZmseqTiw4HnSnJzoDA3G",
  "key36": "2n7Roai2krvELbhq7QydEqqqpMpMtxW4CVAYiUmp7eRje3WZTAMYGNSRd2wJzJmk5SBEW1wn7P62tpas8gzW2T2Z",
  "key37": "4qZG5o59XdBr5hmhUPPj8SAvTB3yfcjRTgYZPWagGbf9oDFncwkZgPqo9q534hNzt6smNCDUDoL9osnxe2Q6FiLs",
  "key38": "65uPh2FX5mfeGYoQz58EexSzAY3Yk41CneutYYVa9cw7aaAdH19TNMfMpoJJ8LuWath7Eok94yayd5zhf7cAr5yQ",
  "key39": "4Xy65NDBPMzF9uQBDzSuSNt8kVj5FM2ueGCJA8hkvE8Ug78jenJjodfv9rtCoVxfs5FqN48Vw7c8jyscFtvcYCqv",
  "key40": "5MTxPMGqrR8U37HdfY6H6owpi3JFSsvcAjVUwZBXTCf9RWvZaynWE8KVkWJNPpRYg7tNSQULfyQCTm56JAK4MS3R"
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
