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
    "5dDdoHhfr9ug73Aeq17f3EarnSLFfYUvkdiCb1VVAj6QS16mM8aYnei8jUcSym7qsL1N26nAXQwfRuQcsrAHLChM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mq3TfG2Ge67UsCj4s41UuZ2py8nji8jrKDiExiyY96ou7JqMNeRhdGbqHedsxyeAuVAies6EeHY2yyPCwEb7dcb",
  "key1": "3RhUEbw4VvKwUwN4VBrQzzRhwtdwhnTTipaVcRiutbv75wVzgLeTUv34F89THeaRo6SJDv4NnxERt8vsvyFwibsB",
  "key2": "5UpuoeKtERxjcSxki9Fr7Ae7jRWFsbkJCwDu2JqePfv68nqe3ZCBmbE8p8P8TLqnLWxevg3D3gKEQMDQfVRmR2bq",
  "key3": "39QPSTq2di2qPs1df8XK9GVGUjmWh7RVXVT9wJttkU7zGDdKN7zuqcT84U1LYPYJQBXgxncYMp4wW28aLCvxAcBz",
  "key4": "2Y9TY1sqcaHHyoAXNcq5AXHtSsYNGC3Guv6NMuQrx7h71j54k8iFQLBRqcD7pJaW133CyrVEQvbds8Tegc7bSiEP",
  "key5": "39uhjrnit8vrCyrit5MLNX4biHQzw1sQLRFY8rHmaKsFndcLebdhREkQ2MA6prPJhjPCWQX2qGKTGa4r7BC2AV4E",
  "key6": "2EkxJdgx3hHCFWx9YnffA4JRgzL17TLqYiU1stx5CbLWzFozwYY3xCcPoQ2JrRJSs1ZSrnDK1fWti22z2pajucL",
  "key7": "2PCYDsnpFaavJ37VUizbwJs2G4XkAdJUgYmhEcBeXi4HGGedmsj5pMAefz4HEkNJUvKAddc6u5MwACfsbaCdwLzt",
  "key8": "2CXZWhNuQc4dfFQncYH3EVQy1tiyMHvx9u68ozUjoeVpFiqmYrEQ2rwdZooEJFMZEra3T9HM7ecwBLSbN76puiKG",
  "key9": "WJ14aSP7YwzWM2XA9Xms2bixBfjNXDKUef1Fc1MpyGk568twYqKcdwnyRTXZrQa6Uzkn9gJ95m8KNdt766ew2oj",
  "key10": "2cfDWPPU9YRLv5yE5eGStBqPgfkmPLtzvw9DJ4H7WB7TBbTZ6LLJg6FihQgjFMKvqxxFxQS883pQk8kRMxueK2TK",
  "key11": "3pcWREJvhNH8xg7MiWwUfmEz5sUynbazWgGC4SSpYoqyQ8HXkqovzGvkYCJEmcEssbhoyAoQGC7gfmobZTDNPA2L",
  "key12": "4Mg8ZUjaqqTc8kjEmAt2ecszbPrCqXAvGcXfUtc7JnLkeqtmRnARcfXr5eUJrQFqhJteCJLZrksW8uQevXNdgJAW",
  "key13": "37LvHwySQVfGsytbK1XroHjvfSSQ2VNoFhMbquM8UF6WN5UDfMDbBy9pLgmR65LcWTYaZxS3Ep2QksZaVFJnEQzG",
  "key14": "5qL8m86cFuBoiqPDX6VqVNTkAkt4XkYyazXySn7g5dq9KgRTuSNiwvNbJmtarQc3vtcJ8SqySrx2etgwzmSnVL1F",
  "key15": "WMJmQeXxBc8bcCGZfhU7Q8BjbkTxBsfXdz98PXzKpRB62br6iFkxHJaJ45TfNf5mvh3uJgDZccw9TBjFoUNTMMP",
  "key16": "77TP8LvJ1irYbNusKg1v2M8KEiCbFNqe1dY5V7wPLEHGDrc76mWGetGrYEpAJ2Tq9DpJvd2dtfVengSkYFwzJZs",
  "key17": "5HPUZ5yx77DAss9RW5ES1tCz4hbg3xLutRP5qdcwDAMz1bam9HTjFEfgbPSPSFvE4tKpgUg276Spc5m3ngAyx4vP",
  "key18": "4zdCj9VtyUePhN3zbwv87CZ1WgVMSDb8b6MoFAXkBneSMqP1fbRCAWUrh5reB1dgeN5ekAN6te2xtiddiUSD45Bi",
  "key19": "3Sg2cM6tLt6XWy871XSgBvyg2hPR4mmPPEjrnJzeSwbPHhDBg1Jzm1pYVXKpzX7pSRa2ZRyAKe99FRNoRNV6GcDG",
  "key20": "5fRqnY3tzHvBEfqyibdBsoUWybyX1aQbNQLkg73HRLqDTffZdQHRT94Mq3vQ6B12JiH4anWchYYKr6pYFJVAaGju",
  "key21": "2XvQbF3QRP5p9qt2bT4mou2BKcUacUNZhbmxgFZdQNt3QmiP8k731hpMLx8JdnpjAuVE3AjZq379BRouY6zP8PFx",
  "key22": "5BnxM2Q3XRhvvg5yAh5Ps5JDrwUXKsNiijjkEEmSsB5L2R3dxrHbD6boctUgLPryTYbvxFfQHWgQ7c6crkmreqcd",
  "key23": "3MAroBjPjhEWgB2dypGBRz8cmAGMm2YJPbPDJeZ2ASabNb7qd5pDU3Ai73GqqgFSGvC2xidd5rXYxzbEv6cB4z3W",
  "key24": "4XYiaTEckJtftPLe728M44B2z6XhjW46ZMMabsMP6BdPhLY5bW2DgJjCdo7DQtbiS1genuDJXd9ReAkA4CP2SXum",
  "key25": "5QGrSiNxtTJD3f2pPPAatizfeWVJKey39wSmaxJSv9SvMfJoNBZTQQ1jgEzWJQ63gLySwnc4iYifbSLpd5W47y7x",
  "key26": "4xABroWfc1Uo7JoL4q2YxMoLVrhAXaQgL5axh3JHTnrssewKNbnmuSgpZu6zB6ZsaYKfD9spfgvdabd5Excrf1eb",
  "key27": "4hsxqwq59ELR8ArGZ4JkzpyZ1wkQXQGxva7wsKybUKopHNpADyzmcMm85jAnpovP6oDZGnpPSkhbziwLMtvtGZ5X",
  "key28": "3SXXHWJHCdgJ8CUwD1e9dtKvZB5MGiQojqtNGwqfMZZV6ihGTYTRd1124hYUiErnGuxJCtvNtNCPSj5Emg5cDbXG",
  "key29": "2ghzidP2jyHarsUEJ47kikVAMut2bS6VE8BJUvncjN4srVZz2Dyzpt3A4s1sEtdZCiALU5zzNZuN42hs84Urcq75",
  "key30": "4KNVw8ur15bo9ySEXfnfR93pFo9MSkjvY9NKtXDJfrcn6b837DxnEi5wuS8mkhRExyfusECjMhVVJQ7GVsTdAGh1",
  "key31": "2zV3sJd7o7uFf5fF9S58TGu1ikMkh7fSvyVRSCpsSk6KtVbEBTASrZPNDAmMjoZwtE9VnDPgsfiTK9Zg2Pxdzov",
  "key32": "4ihwQX8KPF9CFD6FSeoECyjhPGnYu3vdnUKLRgyCTrWe9z58AB33d54RKX7WE7BXogVKTtRkVWZ41rMxKbcGZxCV",
  "key33": "2YJUvSu8pz1LhVaa7pBQxm55JWB9DL47MB8N1714a613paj9qj4Woov7tEi4Udx5WEHTLGcxr4KjM8ptEZRTpArc",
  "key34": "32JzeVs9ZaWCGJ14BoHk5TQqXys3yJddvAnczeUjv2SqVRaLrx5jL4on941KNDiZHq4zdyL17DXScTqs3pukgXDN"
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
