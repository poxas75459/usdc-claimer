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
    "3UPCJYLvgFddukvHugNfL2xk7BcV2WLYjW4xQEUtzcazjUsXXNtzkVyupCcPUwKxpcUFmYxMMtHwqKhr3a7Mig6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8QQ8fKDxomySCVbSRMefidgWezKqvaYm7gHjRgeoryLv469Tvk7veYsbYwfZXiknhdyMv2ECkZx5FAMpJE4tLh",
  "key1": "2WFyNDiZHKhA2jFZ6JRnTRPAfyUTXMzmBPfpK5d6nKsVhEWoUcrPWYFtfofoMZF51cBkSP4ryrEJ42TUv4x78MbV",
  "key2": "3iAmypQVDkbtzq8KsYY5z3HYraZgMxnhdpot2PUzEyt8QugypXqVLRZxioauHZYji1eS96QaRh2NaCGF7U9cWtdP",
  "key3": "U6oau6ePVjT1J9DHRvqQpdUEwYtsgPsCtSRPg7FYLvVrfzFR3HmAXHvNiTgKMaq6PSwK3wdSTMPtittLzRUFqTq",
  "key4": "5e3FchuS8P8WyuGwUjnwGaNFTtPfzPNULLvzJLwrvGptBv6AWBnn6XJhGhG17wArbbakzFDfepa1i5PyNZUvfAi2",
  "key5": "2FGe1ffMJwQtPqQMoTsz2Wj1T8h5WdZQADS5UkwCUvqbgr76GXgbmBLuZx9gBwaCVrGvkjoaRCStweo8zAoDQwKJ",
  "key6": "28ztX3koyeQ6iX56A2wVqtUoZbvmE4WBiKuJWXSEAzJA2JrTDMxm8zSQUEuURsGSTEAt2AJBHQKXDwni4RLLYNLr",
  "key7": "554y1UErAw7zcR1rnaSyuXyHGHt94ZU3Di9Qt8DfB5cedwfAaGPKNRhxS39Z3RLA55iuYq1MsRdU8k3xeD5yPcF6",
  "key8": "5mYBpv3RbcEJQyHbgABiLvvV1YyaWvrWURWzzjnpMnwCAGZkdewdJk1M3Fy5kqxeA2fZgzbUMPzRuJ46v31EEGfU",
  "key9": "3kUmpS4xRePff3RzpXtD3hf6SrmQVnmqexwaYxz29sZFFK7cfBZa5oWCca9B4sHLX6e3Z4KeedupYPuLdj4KdkbR",
  "key10": "QxLhyp5VSVEMF26DSgH6rMGmZY6fcrWPRrQApmm8NJt4QfPDibxHSUN1vZi29UfoKW1V4BfGRMHegSYdaUBvdsh",
  "key11": "4KmSUPUnRi2fQxCbu8uHb8ZtgH1PLKUsra5KpCWUzneE6PpZdFnDFyRwqoVMiokM6uiiiU4BNujJPPkVGEX9F1VM",
  "key12": "3Xm8Yu3AcHTaqwbd92eijvpe8JVMmNyYTBAXMxhSCb9LsHZHoh1tFKjx1YS8ejo8L1GdZNhHeEvZXk1gFShPxK17",
  "key13": "67AHhwXLQgcEzS7C1wACTWsYAqoNez8hPHBPp6MqMDTS1oy2iu2PYFFWB1aK96RbnCGPgA9tjk3VrZjyNw5Kszhm",
  "key14": "62c9dGYenu2Qxe6956ZQwnNL9irHAG2UaHbQg4hEkmBNwePs35kwv4CYgn3mWy7a8zjdEwFcTDnTAX2UZLvDFS3u",
  "key15": "5WpkA4wRFfaBqP2gYpz8LBPA9t6ETpjZ79RE3Kx8og5KowThbjXHokYtgKdbPRKG2CgxmnXKKSDvwbhyzxx961pE",
  "key16": "WWcrDSMapzGS9MfCamsL1vU9GgihgPWfaYmcNSv2pc2WwK1U9cF8GVCcRQdUpUWETQvUXwPmmXQD1p8yXsZVT3C",
  "key17": "TvTs3hQL2zQw8kCGkvv7d2LDn5AGw7VWtATc2f77RzB1khmTdC55n8vr8f2HJZc3mW5DNYQUZKAYVgvWQH11MDg",
  "key18": "4fqsXUF9ToBYLTQ8aC9KMigre5zdpws3aPawKmvTpyibt6sC6nAWT2nzqcuCo9Sq2Rotzt97MjVnfGY2t6ouZ5wr",
  "key19": "5wArgLkdRzstAK9CBtYBVnd7ZctPrbTu8ckVhmqDuGg8tYjYnQC3vUxmnSkSFHfqWLnPMYuvgNsYbJCwZZ1fwnJd",
  "key20": "23iy4u9W411WrD2JiJn4nhFyo1t2YCQpk1q9fmxcV48pn7eyATsSGoXH4QToMn2z4VQRNQhafRhYjSvnd7bH6Q8x",
  "key21": "38yfTdU7vAJpLKFH3sSMpfEdTwnDJxn83UJAzstuAadSCr611AJqSgwDuxtmEhA72x7ArenPbUMjxccRm7cqqfmQ",
  "key22": "6SU77gMWjL3S4DFVd7sJspTEjdEfDbssEHzUbXc8DMHmfEhqq7EUujdibhN4nE6x5bDE6qN3Z91jcZYZ6kJkVxN",
  "key23": "3Go2BZCotxokHKwM9GbKuBSxyoEDKsgD2RLk6D79as7Pxg1vtX7pYr3XAh4ZEQo3qrsjEUmE1ZPX13GnzybAbJxH",
  "key24": "4WRTeGaYyY7JACk12LMLvVvRRUg4KWFFhon61XN7zt6PKmMyCveNCrrd4Geun3A2cx4omaPvyFhdsuXquaxMt7vD",
  "key25": "4CtyiyaCkjpbkkq1EHMYZGN8tmsJupZr5GSsUXjDtSK8kXenun3gKeprmoYvoC6nz4uAzrRkT728XaPYZdqPdkvw",
  "key26": "4XJ3pCPpsG4pvS5WskBap3Nuc6WzxFViaC9HQakrMT3EjAAENvHB7yWTdZp1xh73dkBVvPtmVm9vtySS5okr4BF5",
  "key27": "2H3Cozf5qbUoFpUJVhx31MXPxLZYdgrB3VTjs9o78PDdDj3YFBXNr6crShEwyoKrtiAKebmsXoNoNJuJMcWBSGPh",
  "key28": "qTE8Z38odmm79xnxciGXZkvdHGmdm3J25qNn6oei8QMUHWZZ9oinhByM3UxW4fd9gDNqt5Vr6zXvwsB4WQnQ35B",
  "key29": "rydkZijYDSGRmpujWFmUAk8csGmfVsHbMmjiprztu7jYZFLr4KBBHkuxZhBbuJQPvsodDqCmqssq6ayLZpRsfso",
  "key30": "28cPHDpytC1UMr6Q29VRGZuJTTMRzp3VMoc99jNmhXeuLhnL228eTn7yGS2xJbNoNH5VwV6gHxpRhZUpBGSdYosr",
  "key31": "UKKrJ18wBwtESx9Qb6RWktSuVvYpzgsLu9VaNBh9WuUQeW1rs7C6wEQU56Sp2em6tAaxjQus9t4FhSnWCDDDaLg",
  "key32": "4z7oHwqasaNbHbcNxqWtPfN8KM4h8ZtYUof962NkNs7U9uzDZ5zjeycbVSbAhGWL9NFnj6CdQJjyNnKnv3mH14W",
  "key33": "63hQJwXAMLB8F6d6WFkKWGJ7oHJ9FCtdHm2Be1JtLxgGKV6cnixxiJE87BckU5BRdViWjHAGDhLwyZ6mgHJxPJHH",
  "key34": "5KpdjtnQ7Aqo6fmTjMeqZhRsB8aCtGc5EWT6uqRVvuYpfgV6EvcvkdEQ65HaCGcBoZ3WnpfRZTZuA3LcEaNNRXJp",
  "key35": "5dRrp9BjqA8C5X9Lw5RxsLmVF2oe37HoKMovkVN7MPb7Tx3iQsoCYr9ofiGR6oWpSaigkBqJziC9J3sWTBthFqDL",
  "key36": "294XQ57sfTvFssDJYFwaGnTmRfNcgBDGzNz6NsiH9PYGpYbYKPTChnyExGNX1tgsnV4siNcfmqaMELcR6FztqXp1",
  "key37": "3dfPY9zt3xqBN5dNfGJn6DYcfsyd2APoGXSX4dEBKAWjjA7qGDSUX1BHoETooRyQVSDp6bVLCsXM7o92m6zGBqHA",
  "key38": "5gcZmefxm3B82Cmt9fMoDwR5oE6G7Un3fL3ciMfLxxFE4ksAWLwowm4jVzfuZ91xk1hArziSqcPC5eYtFfJ51jum",
  "key39": "54BAY8qYKUwUdYvmcusqjM8N9s4SLcT2sdEBZJQkY9jjfj1tipAgU2s3gR3FrNivgURNmZtpv7R8MCmuvgT2sMwu",
  "key40": "8bCr8cRgN8EmQmm7DYKxHpcQixNyDRKmngTXkwDEm15JTHXsmJ1DE2bYJTnpfRKComt8Gwb6p5wizaFE81MD8tz",
  "key41": "5jayEzZ8E8RNTEu6HfSPDp7Tmmq3uyn9VWXkwAR2CPiRBBz4hkSy4xLFigPsXJ1D97o568bpWsQNesaqsicRYh2J",
  "key42": "2px6WpuJtfn6dpmJWfwy9Hm7EdFuMPQwgxQ8pG63pxv5P3ybmLkrEtypGFmHrFejU34iHnHZQnsVoqzcgpadZphG",
  "key43": "4jJv6WayRRwDP9TuYoSA9pa5znUUfYU4TgpNso5wGeha8cUya6Qp5URWjHcLMyTiL1gTorKKLcVkgGxwbPa57WFM",
  "key44": "5ufK1SZ8zUcebdsaoH66zFZhXjaMPGyiuAMnnPL3bgrP8nTXoJLLiGjURSztGGhtbnz6EeivaWndZCv4bgpBSvGv",
  "key45": "2NdntqrwEW9SiK3MXGHfsSn7vw84ajBtCfrxp7gvik7aDoZoZ46mgmJiCwkZ3Thq49WRAvnX1nYqRK5xTFrAYhHH",
  "key46": "4bJD28e6FK2sKUTYxxwdNDSoki7t9GEb6GfzQzY5tAMrpPpPUcteqkEUvYhCVeoojDFTcBfuvR6Fvx4w3NHfqqqA",
  "key47": "4p4kRrSVeHyTrC6wtFaKXepeU81SUxgDbYksHfkg5ZJQf357asiFfz5rcaXD88fgcRoUWHBxpxpA4ZjVxPPh799Z",
  "key48": "3MSfGdzsWZ1uWVaLNft17VcNRWyX4Btb9yWkyu5AbcxmsZxm1yayfrWwBoV5xJH2DihFsQUuSiU6WFt4AwBXV2Sk"
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
