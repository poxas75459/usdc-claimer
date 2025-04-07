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
    "3F5hnkdfMF8TuaRzxu6RCnxxAMcj6dnjcjYQutNfGx5V9jaGdfeP3HKxRf77NZzrMG2VJJ4hAhxLDb1vg7vcThgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bChPxoM94fLVEg3e4beMbztveaWMVNPnZhMi6SSc6Hp89F9RLQUduMgXTVoDTLyHAgnpYVAWHLXQuZSej3i7cTX",
  "key1": "3PhquHhApYZqdZ1TVpHKK2fYezL3Xx22Q2TkyHZ3atT2LaC2RfZpRTX4NUXSsbwDUgzRzL7vo8hNnv8XvnjpbCs",
  "key2": "VM4VDoguEi8EpAzmUBy5fW2ooSiP3qKaiUuvBCqEL87eSbZQ4xHDhP1PCq7mdYHKKFD3edaZw9ne3dPjh9qDSaX",
  "key3": "33n1skPBrqxaCFGF8mRuFxvaDarqhg1gDhneg9WgJ5Km7fW2HQxkaKxUaVV9y5BqvqabRPpXpNuHckAhjucw1zsa",
  "key4": "MhgQHRfTLMQWB9kM1rqbHqeNdpkYRz2DJcdysd9s8GF1k4H9Y5Fmv2YpEtQD4XP1oudaKzoU78GMbUcfax6Q8aK",
  "key5": "2mH2JdLnSc7AM7VxpzhYByxjrsq4RYmnrYMyPXsWn9sR68osUi4ZQbpCzURhNTtV6C4k3s7qrQUp96P5ga3F4qDd",
  "key6": "2SBTm58Qy1GY2LSvPP7GgEqKLPaBrhQSuCBjj9Rt4jJiSJdVqLaajPRxbfne43adtabqBBybNw5Hckia2SkV2j5T",
  "key7": "3Lx4yjvAFVrD7xWcbki2A5N82pKX1Nv1kKDtvDHWSrwuNpmrZAn7KDUP9eCaqeFXkbY4nRfnksFctPa5fEU7rda7",
  "key8": "1U6R8du1LKsBvKAVfs18gtMbqqfZBKRKFm5yDxeFt7vrWtfZpzAzQyJzGH257fRKwjyixjqAUAGdJSem92v8UZi",
  "key9": "4G8PVxZYAx5jKCRN3Ym9VASYsBtwJyjEe4QpfnRoG4zAwuCxsEDVtvUsQLezbZX7k8X1C4NX14vVbk464bmKNfvT",
  "key10": "2nJgkBrb4Gc3SyiKB5UrJ21sV6n8cQxDPHjsZpJS8oAfDszNpbDgmChqsSUA46eF2vfjkDv3CD2dzAYziDAjGxNP",
  "key11": "3MXt8seahi1KqZGcLw66a2R4DGspSpiqpr7pvbfYLdpxATYoqKDXLPxB1XTeECdWJKkqJLJXihYCZdCKRUR4jKnX",
  "key12": "4gEBKnHGJxLrqMTFA7NrPtjEzNG3sPrSYcnyNwuLLDbHfnEbysaA529CzBhK6Z8dbD7Gg2rf4kw4Bm64m9pF5MrJ",
  "key13": "25bfLwf7EP3XomUmj7fKbuqeSRUETHPwViMgmKVt4uaQFcN7TvmMDSsS8oVMsHSzkmmz56zb6ZQ5T1pqioTo3AHH",
  "key14": "3wBq9vK8ReLtTZSqmyXfK7EPKA28uKpWXAdprcuLdc5wCtj6DFTgpUtNE8oLJm4ywWfBeJMRuXyU8Vf63ogmsZbQ",
  "key15": "5JcA7bg4Wf2t5wKQqQDF6ASJV5T7bBCDrCb1ZAiEs92gjijfDa8pY6tPD3YQz6VuawC3s6NC3Aj9QQpcXkP4owXb",
  "key16": "8s4Fz7cHpRfdyT8oRAmxmWMETNz4KYbhc4Xr5678wHENgVT4Z3tsbviGnB8zgt8hBQprrNNkiRCVHHkU67kUa6R",
  "key17": "2cdRzKtxca95T7ffu6vKbxjWNSN8buKcFwmKcwryncRJUC229tLCc3SM4mw9PETc5CKuRW13KnL1XaBpCFHVBwfp",
  "key18": "4WyUCdma64yQC1mkEjuBdxwHKm5ihfw1DNSzKzB8fpphetNYtkTZhcKWMRwbS4q3qagG93pySyKQj27mmi7C2umC",
  "key19": "5XuyxmASoLgPYK1jvvCPMwdxtXYUH6qn396HahxoTQmKkheRsF4SNitfE5R1X1T32DFVbvswQY7zMvKnaobk7fUT",
  "key20": "5JSrVL9nimLfbaZYPcWBPsw549cyarU7DMTKR3ZHXmomdUh1n8jKduhnqNFGxcdbqvmPyeh3pVWcJNoxyx4jVA4M",
  "key21": "2bhKbyhFzY43A5Uem56Y71nEzbK4eqvnnCEdDgToNDHbLa2Fw4JmqkEcQXCDYoxWUPY9WUU7k6Y3NdT4AqwCCo62",
  "key22": "31mCWEVTTmUQHQvSkQ4yQkwgKNVcFHftAp2RuuVGw5aZEFcPQvNhNnjLF9WEUK3mfzRAzShTpvwxiydYa6k9inbA",
  "key23": "3GyxnzEU9SvX6zeto3FaiTfTpK9Fkn23JXx8vWdViqMxbCc6hfwLkUAwpBjYcSjdHYuq3qWpd9Ss2RcVa8HZ4ysW",
  "key24": "TwZzWdH79jGHAqgor1PdUT3H4Lta8qTmctYSqhiPPw2TKFQrXngtYPYE9F1YR1zkY1m6URwt4ajQoYvyynkqqjA",
  "key25": "5VhQyKygo5vmNEaaEigA7uLJmytQDzVe2YAQRCqcYdYpKKbmFRxxjzm4HUwJzKjfjAKu6MebfWa3Pmftfre515af",
  "key26": "LjLV69iHyVnAGRKmVBMod8nSPyKHUjE5cxE5iUa3QEWxTqwnd5gGFnVSwkh25xG8YWWtJh8CE5K3guQnDfSrNur",
  "key27": "5dAFDjUZKCNqzYARn4mCw8NJRJyNYiJGJPqR6UDw3xsP1Xj8KjouPYpTyveHGLqSEvxe9wqv1viCGJQEhhdEjiuN",
  "key28": "3CCmCyTrfiPsBgm15a8NKcYND57oh8REQpCZaiqd6afHF8beFsYR8DQtS4AWUnvXp651zsxFAEQCqDzNuWfZLiAc",
  "key29": "2Ymas1tUtbWM4kEZLpuSEgYeyNeYcEmcbjPidJLkHLyUKk7b7vcZ72ABqiF5ti6NYJgDfkbcS5TwbtrbHPWtmEDM",
  "key30": "tCkdagdFPH3pp5NC3FYmsa7Y364eWdFJqv5tUAoc2bJ9JVKeD5rmEeCSWgqeucmqDGJYFGbv1JPLy2yKDwrze9G",
  "key31": "4Hu5zTfEmKtX8kVdZQ9hdJCWjLgFJdvLBTPSuzY7P3BiTgRPvwbtjwRKQjQeXPh6emYg1B3aX5Z2tGijormZpumY",
  "key32": "5fR7XMgonC6p3UWSzcK8hz9vTbSGbXSVmC51QJQJGTXvq8zXu2iF9qevnxXAtZHxLaDe4rmp3Bv8dWzDxb4bQkXV",
  "key33": "aiBxU7LjRh5JmsvSF5BwfBpKn3FNVCFbbkEJtYUkDzNx2oUQJuL9Lgf3RXVG482qwy7vQxhyEu2AeGrxWri4nJ9",
  "key34": "2xzPEoXoBhjCx8v9NcLP96sk99syzSWD7eAjLATzn2pmsM2NPcC2J3uyZiQUn3SuYXcDde9LTLdHoRmD3qJWw2U7",
  "key35": "62m4fyWhZYWM1Jk4NJhxKtJT2WjkZLiQ9PhrRUEbeZ3UQAgTZnzns5z3XXSe3wbyLqLtanni8h5vCqHrUjFoF6V7",
  "key36": "4y9TrJviTkDr2CgHqTgZ2GdDnKXiCLE7oRg1RQtCiDym4nduuA3UvNqpWvRvgcGDfJRkpfU85DpwqVMbfJbYyDWV",
  "key37": "2keSEp8aWfiCDYdHzisEYJwokML2QZoQnDGM3GEDmUNNm9mPNuCTa2hLpgBxQGoWHfNR3Z8Bwg7QtQrBmwViJYbE",
  "key38": "48r1rU3zuoQ7G6ExU2HsMA8oc1rQ6ekTvREwvtnqpDHYs7pEF3P8hw3quyMw3wiER4y7CDUoqYJbPfBRjSQA8mr3",
  "key39": "2Hd2n1LDNsDgkMZYj3optPQDLfQ7wCohz4379DCp3Gqru4d1YCkuTZutBHBHcgJCfjK86FbMvQn7ULAXLoUvne8E",
  "key40": "3kTBmY4CCzEdwULcmUT9zniwNBjr7d8TQ9rp5hZgeeAci4QgaF6PqJkdBMpqqMCCCaQqjfPrkAKNZadLp8ffwwaM",
  "key41": "425dusQx43pZUSpL4hXzvYX6BNrH8ypiQ7gZfhXF4vZgeA6t26YuCccAPyWqZTTeos4aSB5qzESwQPbL3fmphSaC",
  "key42": "38ub2FpFKPKFosXMb1jQmx7EShjdkoCJcW5mWxN9AwbuTLwChMiXi9tf5zzaGhRLazQuyfMsWdqvEXss5q7iQpwy"
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
