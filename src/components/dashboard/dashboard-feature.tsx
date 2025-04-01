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
    "24KuXXCWUGANHFi7sbiZJHtErTfcSdBGaAmuEhQdprQnoomKrksn6S6qiyYvQFv8eBpZj5YbgqBx1uPhTrx5aHTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epXQGNTG1wYfCSKg7XVad3rRiXTXtzSVobKhhA678Sa2JKjVd5KfGnsr3WcNDP9BNG2pmJqFM6qGiy7umYxp4nA",
  "key1": "3W3SCXyDRTEC8ZNGSkX5D5JKWfHyKKHafgECgXxqxvfDQ8fUYCEF3nN11JFaH3Pp9mdYBL8jPP3kVu4PtKp361UH",
  "key2": "5dmhBBjjf5LKagcWrSAabQpUWhBi8M1oMXhXEvyFBfuJrW2K8kbGf3QcPAUit6rf53oC1kUcryhoBGAUBhjjLJvF",
  "key3": "659Da8fFxZ3cch5cEuzuE5n14XGhawqoThq81GTKgpfwRoab95bkzpi2xYgRJuvXC4xC8bn3HAZz6xkQ8MzWJ6hj",
  "key4": "4KzWSkZBhGrNCs6WCoukLsVJ3Km5ryox1QAfU12ZUeGAh522jhWdUzwYPHYAQqTju5jQWpc2cQ3hBNUpwbwdZ3Yp",
  "key5": "3fmXzdCykEJkNvbs5zz3FH74REPD2Pys9cGX7LUpu9j9CaJrwtZCyu3obApskQxCEDpmq8Vr1pVGKPa9YQ5dHJvx",
  "key6": "3TXwKS1gi2Hi1m5Qr3oJgrio3q9eBM5LT856sGTBgv6kw9PQnNo9mZp8sd5STVVvzAz1hZ1Zv5cRr5qSU2VmCyd9",
  "key7": "3hp89d2RinJg9DcTeAEzoKDPx3Z5akJWUJd2B5DEeGXdWK83sWaZzcJrkGxfWKTHpyX2W1bQED4U54po3UAse4UJ",
  "key8": "24qMwZonj6Wby2YdpBUqpnBoK3N44GcjkTohUVnjhFAudj93xv3jpfCK7ESbtPceuRbPDWWZkqeb1bZByWsimLW7",
  "key9": "2S1fjXM2jZB9yonCH8BHG1YAdfE7LN76uuJGxyvwejPDTM31MRgJxjc4c9tmwMFaWYMMHTqJBMwcByQGZh7qsnza",
  "key10": "55Dj3UeNk13pxHXpBSd8tqXfscDfNeBXopk6wVDzMXvYTU8tjZPXf1CyyG1xCPNEUXG3qD2A5e2TWSS1UiiB1MTq",
  "key11": "4M6FfQEviiUebsiMdKJYUeQWfhLpCJUvjWMz3CZTyZFamhs5TsDcQsc3aehCbZ6EB18LufccM96erBKHU9fFHpjs",
  "key12": "49aysM9RF6H8aJv9qitstyapkqgtt1Yn2NP3BKVbTxz1uMt2zZPxTuVLo4AVSt2SFibB1dQ4RMbvGmr3SwErC57J",
  "key13": "2YyQCDd56a76TBk11sTXeT36h8wPuMqn8C69f54qMFbEDkGTCsq8vDjWrRytW2u3ycFr5KpFbLxgzTUG5VoxqGxJ",
  "key14": "65HPNAkov4TCmJDwSNEuYzwEXD4TmHobkRgk8hNyFMLmSPehJevwp3qPbyLVvcnLH5hmUBVXkn9b9Ce5Dj8pQZe2",
  "key15": "2Btp8tvjwLEQd2NQscU6qE3LYZFDjbDFEXLSZcKhuXifPRhzYa2A6dCQg7xcoiQeo9hWSpoAYxPSxCdPwJoTGfGU",
  "key16": "5jf4BWwBG2rW3DVdX7cvE8BPviuPp1jCxQVzHk4jrF6Y9CSDpg5a8maHiTKR1Ut5HUJqYdBhN5rSokT3TvogysD",
  "key17": "5ehi5AVjaTZ95CVwik4NhqDCZnsCjVMrcyCrWNA6s3RGRtfJPf5iJeMSiCuDGzfoNNhmu5q9ifBFKvZmRGFkWkiy",
  "key18": "2wRwC5zsrwafz9RjAfJjMig3xzmG3ApV7p26Ey5CiSzUjeicUpxvhH7HB97WxNVWq1ki6vSQWPVWTCxLqggC1X8h",
  "key19": "4MmasVeoWytCmVQGTFiqhy3SF5Us9dcNpYdyEJcZLqNRZ7PeJyYHL8Sw1EfJzfVTrZddMmh3Nnx1EuRwh8Rg39fH",
  "key20": "YgHpqYH5CuJv36bPNqnKArVbt358aSwxnHvLMDpmK3bGbv4orU3MLDUbY5aeTaHii1YMnzSTCn3wuv4K1X8uNpL",
  "key21": "NDq4bW7EKUGT9Hu6t5pzH6nFTt2Vr6H545Cn9uei7KDJMbsX2yjtXZFu56ZAit7aWrmcrmrckZixabtmyDhsnbP",
  "key22": "HsQDMo1GXUWsXns8N7TaCEbcaEWPYDhkmf1fsn7fVfMvWutcACwiQfiYXDzot2MKbnRehHj6g6JfCG18jvfij1R",
  "key23": "3BWpwhzT16eHsidVfrntgozSJxM5Li5EzBwcG89CtQFf915RZ8YbUZXWyRjNixXssumKuRDKFMwfRg546LMcDYzC",
  "key24": "2JuXtvszUsuTEboWx3BSXk7xacDgZj7nyWSTA4D3z174TBUTe8Tb7rjiakU8pYenodsLZNBAsXjs77R8F5UQ4v8j",
  "key25": "3yhWH3fhmZCPjZGe3NCYzpEw8sUTcMeFMuEUzXdGUrnR6zruEZ8PJaeWjt4e7nhC5fkSfYJUMCG1KYh2bzwLsZk",
  "key26": "4XRJsGw1LXro4LBzmrQRp5p7XPbMK6HT2AvrtSPyPTPBDnQQk8CZvNFdQPBeuXqD8htUcrd6QxHoYai7x51qY7Ly",
  "key27": "5t5nFUKQzxccoadWpMYz6YZZcA11W4buYxpv8H1maUmNtd7yHay1wyZ4rKd6dAvwjench88nAysxeHK6w8cErZy7",
  "key28": "3obbMnD8jsNPhAbWsaEqpfPvRJkHYK628NmUn6gQejfTV2sxXTd5Wm8LzKcSnbbrt3gLFKJFDpkF5ZNs2qUG74Tn",
  "key29": "2NeoRBmCY1DBHWHkWdWKAEm2NYUPHLHBx5VytZNzrbzkps3ypw6ZKHxBvt4yyvmbn5ncYVpWjgCffexZnZGiiedk",
  "key30": "2kTp37vEAdv6v3rVQxxzU6TQDnrxnLD6pNEQUdvg6CGaKjT4qvJ1M3J2GjEHDWoMzzgYHfp38NM3xMYPG8KfiUwD",
  "key31": "ceXDN4wr9RChr4w99jZWAERRVsModphxJp4fkUBfgQoH4xPWu6wXFfHk9KLkQvAFN5r5NckpThLzcy91iV9LcVK",
  "key32": "2SB3hDbPXp9LbEq6yqAYLXfv2FN9wsjNrcpbiGnXGPwNEtfdkPdCbus6GyC8zE68Bq8M8aN9sauyr1dKGfrT3jUm",
  "key33": "4QTHNZtDxeKcNTAiBnSaEko9ijzmtPxR9Wwa6MPufy67YkyRRPQ5yYM2TTuK4dvpRdiqj4E6q2QTNQPgdWjifzxM",
  "key34": "kmAgCo34QBbeyzy8BNqW5pbbUqKN4FMZSSA4XsabpxvxgrAkj38Hs4ReDJh6HLXWSL7ySdbWJ7iBwEFV8EjMJ86",
  "key35": "rVWhk3HoALanVsxrbDPdtKgvXmrmPoBXJPWDJhcsCngRGsQcxjyJ8cDwSZNxjq29FLPNFMqWtHErPDygbrCDCFh",
  "key36": "2txrnZFVFJK5TEEPvPtsfF6poWxTNNjZ25Gc9kEWuAeuNkPCpGpCxZSbJvoKSBudW6fR5B53wFUhbNHoQx6jPrN7",
  "key37": "2ALcxGewGghnW88H62VMBFHscYLyexco4D8cAxZGAXn6HS9nL9XuWWZTicmFL8fZbrRrpQ33K9iM98RRRNK6ubeR",
  "key38": "4e7SaVaKQBruSoA516kC6s5oLHcnxmcM9GwGqTzevruzunHcKPWaw1X2utP59G1W6jxBNmRHG3CcVnBFEWa4Bxaq",
  "key39": "SdzvHVoUBDADhB452d4Nwv3eQ7rRtWqrx8d5xDEoxeub9h71aCtxVL5YTEoAMFY8hcbcgnwNkkhrbvsZsKDRJi3",
  "key40": "4eNj6xxuVWF3W5kQkfNVZeRH7EvUcCgDzkTXriLJyqtXGJM2bawjRoMYn262gQRym6h141PcfPd3b2ZXNrTFH9GG",
  "key41": "39HXypb4NVsqb5p1K4u4A1Ad4HEtKsTxq3pgRcjWPMwzgm1ieWA3m8NmZMo24kuBC8Q37vxC26H9ij1D9zYm2iWy",
  "key42": "2zZqxmWW6vmh62VBwbXUKDXmcsqgycpvohB4xvLCEoofhvJYTCUWCDNqSaFsyYNooFE84knQVZcXvWBbC5HZyixm",
  "key43": "3JQEd6mLBhNw5CWnqetgvgZY2cLm9QLcRungSk1kEhcRRyJm4rzScEw2GaHYcDqZVmmQqVaTNp2PL2q5GvMxTzuL",
  "key44": "3q6b5P8y3kyrm9bXSzkSBYj8TJUZJStQswwjhMuxa1mMvBfLNmpA61BXdNNPbtmU3bFdSvdwgwXcXWHE3QSURobu",
  "key45": "2NB56mrQQWps6c3dRJGkVHWqZX6DSbheCttH1edBhL4LTkMbVudZRokQz17ByJRJG2g5eirxxYyouRSzp63yZGqR"
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
