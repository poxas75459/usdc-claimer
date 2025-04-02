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
    "2vaRFvwhprndBd8dqEjzDMELjFPs5N8Y5TSKcHLEY75Q1t38mvGuFmbQrCqw3LA1VGVtsYEvjkyZyJudq3A6bzAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QLrCfxTaGn7rVrafCMkQ8BcWJqU7jbcUNSG7nvYzoBr2n4658Zdtb63F1XS2oMHVYPK6h7TYtCPYEuDrD3ZRGo",
  "key1": "3WVekyYnERuaa4a3c4aPuG1yJubvZDqdhWjGY41WBrQVSrrT7qR6YwUneAsMXnEpKjxjKZoxwnWmgSnyDgLzm47K",
  "key2": "2yhbvGhTZHxvpF6hQ2bEtMCBSu3bQnyeRvPpxqzFzEKXyhnFXjRweHkvNP1MQ9Hsrn71gwU8SGtypwP4PzsaP5LX",
  "key3": "4sZNwmxuXjb2QXWYq3Cwrk9BPogaxbDBGUzjMtE54GDkxpojjtFF9XjuYccEUAVqY2bwRPnyKxF8cwksJaDadmQ5",
  "key4": "3VWfxCUu7xuBahSmu3158GptC1pZWuLTTAqFPmwYwVAuxGxukDnQNZwekDZhhQpJE8HLsKUJHAFQx4jyxQ6SsrcC",
  "key5": "5NBFwmQhpt6GemGZyGKK9najVAksF1cCT1FXhaQmN4hRnTEVLWMkmcFHG5t8QG3M2VwN8v4ChE8txJxw7VrWQ7Kx",
  "key6": "5ue2ZD1Ch2xxKBmMcbvmSB3bsDp78oMCbMpW3BrZ5Bo4obgeBh1du9oYWZpJ3RKeXz2tX9tTue34dZMw6h7LEovC",
  "key7": "2QZ1SrosBmJNyyLixu3TuvDqA8x7aY5XeEMW6k8bsTUGrecTYKCJ92GBU3XkYXVbFYhinz3Ek2Weg19GJMmEcqiq",
  "key8": "5iiNiPMZe8nabavb1JZ8sTR1GekrSK8cmPaifiUJcNDomkR61gQfdzbn4qXiv5Y13T4hwqeFfMoiHdpD7ZCysdyU",
  "key9": "4sTBqKt5arTGRGwDetPUgPhEGz6qT4NS5F1fi5sibAzt5jrZRh8Smn3zrXFu2ib24Mmhpftyddz7ALhoUr2wpRSa",
  "key10": "4iX4wYDpbg6F1u1NbrXHBjwuS9ibFZkNLsLiiJNqDDsmWpTaVdAvfusyzizapU3shoQYKub7RL9QFJmiyNS7kiDM",
  "key11": "9njgqPTXzEVzn7jFNQSCiqqq2A5sv1NeNKBGXF6FQXn2WxCA4NQhFV4VvecWibm7qDA55hv633r3Vwr8NDF27rN",
  "key12": "3hdg583UM36H7xGRcXfjBnnwbAiDBgyymt7mwUbfT9R1pCJxk65WZoqcikteQF7CU6ARaLL7LKnMmw45wucZjah2",
  "key13": "4oFSeV5yVSxsfJzCtZqvhMTLCYcbcWDErtMmpVRHp8pc1LdeJw5uGZLvaw6yo9W3PV6qPRx1ubPf7bwxkGUoEAy1",
  "key14": "2ES6CUYLgDH4QPZqgGv6P7Q92BW2aTYy7ThXj7ijhweGeyXmHaXXn1Wxcf6XALWHhMdakLU7rcA9pfia6a69Bx4Z",
  "key15": "4ZsH9e9FoQ6Y1e4sdwcDCmmt9HYmfW3EtcgH5foJdj2RsJBjXg9TReSHxcG88oW9xzCaoi7FrqssUkizhbtJXkx3",
  "key16": "gWeVC1emtCUyJV4D3kbtGe9XtWt6wmiLXbo8rkBYgoTfhtydLc4yrkKu85Cry6SPHbNVJDt4ACuGtheogEKUEWv",
  "key17": "5wpqHLSKMGcHvMjZELgV5hyHRKfWhXJLH5WDaGAaqVPxPrcZJKvirRyiSzv96WHW3JAvxrmPuTiGmuUysfHQtGoy",
  "key18": "51VdUkpZCQpiCt63hjpZ9xTAp9WXZPaewBvECHjQSxRUucr4NeCDweNEanfmWeF131cKapoP67RWY3kVX1QhxWdP",
  "key19": "A5SmBgegeR5ADKt57FNC5kEZNw6ifUmdsGVf6WAxdE1BLS6cLbcCfMZvekcgqRutRQqJ1eoGU4hk2B2m7n87a3H",
  "key20": "578sv7sLjck6se363X6qeQWZW7DcHe8C4pCqKnhfxYdWVgnqhmr7VA9vEZyjwfF8d1xPXjyW1X2TgdSsFuKc7Eex",
  "key21": "26ZBnHsi4WcfToXX8bvzRxyfjcgiNw1bh3nenLrPraXnd9tRUZUkeCiHmDaDS9NJZVLKie6WeuQT12GNuUb49tdN",
  "key22": "58VnbwpNWdpnbEVTk2DsVCEwsgnHMZbFk8Bt5AkJTiMQxVqYxMGwn1tGoeh3CnAgXtnuo15mjmyjJgG4a8cyhJY6",
  "key23": "57M3tHXyYZEniDcgSwtxf2M9Qt4SxyrULxXxXE2yv4RpVwndHhDRT8h4ha89rRwTbrywgGgeUyDdZeUqFR93XqZX",
  "key24": "2PaBDXeSCTKvyhmRP5cQnjuh8njPMnib5gZ5K9ctuGBDzCnYiR4DT96p8BNKEWsvGFfV1gzYd2koDu1BsPdDeQPh",
  "key25": "3dm5QvaXtXoDytgau7f9JjYAMFddquARDaKV284YmoeEbWknQPvZFDs3g2JwZQ7MPP1QvthP7WKZu2fTHENUFEkq",
  "key26": "dMS7PykD2anF6F5nT5X33reffN3bbEtbwBSs7p4q5ErNBok6ri3Vfu1DcpCdoeYz9D8HGnefAMmdKKT4cL2g5Xj",
  "key27": "5aywrpWQVxp6eK1znyxx5kpUCzXUfjTZQC9L59DeaRTYfzTdAKYgvcx9bwpSpGuR5gshYiwcFR3V5TzgDAWHPLbm",
  "key28": "5kAGDgr2DC9MyrMf9uPvvJmTZZ8EAKY7YcQ51WGcnsMuKth4WuTgLmroAVcFkYuP91pDEas4H3CBkq8VwNZiPKto",
  "key29": "5dYtH9mmVZCDXoAYz1nqdNit15cQvbG1aP87zSF72u3UZNB9JZ8YcgUPyqHsHFuRVm4BHcxqRjtiMZ4o9ADw8SbF",
  "key30": "2WuudbDCTrpm9VCT7xt5hKyY8AoruHWnxbR9whS1PMTZLhqAQynkr1WV3o8SNZrS8RhPNZv73SpSiEV1dvdjGAYH",
  "key31": "2HMY577QKAKhqsPp1heT8Aiz9JFZJjWpZiCjBFVqxPzxpF8HNXHoP7uJctsdCa1Y4uaJPEwQ9a2HAjkPv7KrvRih",
  "key32": "9nZowv5eZWg7f36bbzh7TtEJGHGnpY85MduKxma9JY9evGVSuoeeyv2jQLxpDJEFaesAcF4nXLgXH6AfVYYeSzf",
  "key33": "24dyYXZnPQjzZieGXq6VWmkZT6kBubhRjAiW21WpisBNTjwdWM9XksPdunBiQTUxgJSeHn9VTpBoQGv2YmBLApVb",
  "key34": "248yztKjLZoy2MxLnJDaRdNkMe7wsoJGpqT7Vq32QAqd9MJj5aZJTBxKiGXyDtcjq8FpQVYZqUCGcwb4she35ozC",
  "key35": "5M9DQzR2JgeUhWnoVQmVAqh2nQKppgqEEzTdzZoj7JgBSnJmBap6LnLDs6wKRFPHRtkQRTJXqkBbbENAGFz12xPX",
  "key36": "3JkXBtzXbpH277SzWpP1vXuogknNkGdfNfeUpcqtuuhjSy3i4wxALmoVuUdWteZKGkhEoYFjZ712gERpAw6Xp2Du",
  "key37": "5MeYVGaPZyAbMjeAyaUqrWFemgp6b41oUgsP3pCsBHqWyDRA7LnSHsiw3BM3HyWvEMULzCzKXGs8ELAkmmtNaojt",
  "key38": "TYML5JifpTWqapGhoizM8KnjEVq174nKQykfUzDo6j6VWGqr9SNjEtLkrZuWcacDmiBUyM6HvwPu6XXYkmykH7S",
  "key39": "3Ty58uGrNimZBk1tU9vx7vfMjDsRNVpUgFquoUifNLTYK6V3r7ZY6yQBLAcHxn68ArERYoP1G3usGCe36tRHorNY",
  "key40": "L7zrXEn399bbVmywtTLZ4ZA9jBc9qS9n5E9ayzJN3hDtnCB7AxTeqdKMJs3mstEJhBvykbb3bKVCW8ekaF5S1k5"
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
