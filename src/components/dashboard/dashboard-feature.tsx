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
    "FCf3mFjqqhjwsAXeyYrDEM5SWUoEavtzpxpDptWD7RAWLcR1m2H8KEb8oWaSmrSDkUE4yZAbJg9AmfBTeAvZj6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZ2WSL6UARvrcm8KJ9XQMUeb7rY6M1zM6uo9EnzBTCyHznUmQbh1xnaw2zto9vwipXBWBtRyX3LyRGFiJqfCp7i",
  "key1": "5uB155ZbC1VoviSEsJPWQUS8ZAXtv4Ea8ajBffh7KwEM2B5DyLzVy8rt9TEUVrQtwtxULuZikda5PwXwnZfnebq9",
  "key2": "2csStoCv93JRf1p91guBzhZKmr3aSERFYpSVyFeJJpFvDcawwVPP9TZJp14rXJmmrZTKunaU5YTKSbrhxmUaqfiV",
  "key3": "5tfAHfvzoHqeP2ua5XTpxdwE66qgFBzRnYMTHLNouqYPPiSfuAZbGv59sKa3bW5CKq8GNuxBgiWM36W9vM7fWVH1",
  "key4": "5tjLaaUh7izabspqrmnSUTH7iZoVxoYHekZqXUPQB7UC9bUDCn6NdQdVE7iBT1Wn7TiSmx1kFh1dvsyY9QauSw8J",
  "key5": "J9tY2xsxz7szEiUrF7XuF9DKZWjj8LpkgiwVVpzYsM4AWVLrFeEqLKXu43y6rznKRJqsZMjBhMHWkV5Xe4b75hd",
  "key6": "5kdtpYzLmw7Ypz5E135skZiyGsMg5YNfSRwLcYzaaF68m7Vht8zb73gk8F3nzPshPyN792dA1yvTpznV3rBqmFqv",
  "key7": "2hzzR4cxYihFaEXU9HqsipEZMBrTY1fxB5Gwraha5tgDs5RFsQs7oBExKzZDZurzaurhyKrjSyLqZ54DrLJ7qqMN",
  "key8": "3jF3ingo52eSFWGTPxf78aPwwZZSnNpDBvuDTuLj58hCMvXbYC2oHqSQkVw1m6dBrHk1EVcizncUuUQxYuhQo1eP",
  "key9": "CQ5Hmmw16ceDg5XNDsFqgesCuUmhpxryHEf3ejozX3TfDwGL3XiinLCcp84wj7TMssD2PS9mqVLViHmwuYcU3TF",
  "key10": "64VQ1bSmchH2japJFj4KzuYyzus4CfurCaiJiW8FQhnyE9sudNMM5ELnkSsfv5kpe7NaDL8ZxpJHb1YJKhQrx1KQ",
  "key11": "4HdBBnqFvLvDU5wbczk7RYL8TGf7c3Hq7j4QLrKpGjYJfRGUBoMmUc1thV42TPYugrvbjWafcyGQJyGwDxrT7uQu",
  "key12": "2dRgzAbtfnx2dNMY1PQ9okTzSR85Ba4sXF7JzfjV5TptnNwf1QQUei4HdG6oP3c5C2GjatgBU786bisP6oP4G23v",
  "key13": "QmqEpC3aPZqm9Ea8tZdomT3AwpLW8q6zAthHWECZ9VQQoU2JyMkEMUupz7cR25Q8ub2LzhqKFZ6Mgt5yuToRbEd",
  "key14": "4hhCeYfY61EKD44wB8798CBnPkkVjdjTsKzt6FdswDrVnPCJC4cWHgrfuDBxxtpvrkyumStF2vsSczRNPbSSN9K8",
  "key15": "5BUMD21ctQPryXsZtZmQj247etydiwrCMr3tunNBtK8EZfMJ7A5fZbZHzqZMtsK9hdnxVKJ9gVbgGRFaZBZtfKGm",
  "key16": "2Wy2kUPEuigfdtVKdcUEoRHVctb7BrpC5XCaQXwcS6SNw62qBVqHeeoL7L6sELZtDYnjwK3YPRM7G3WdTytWi7Fe",
  "key17": "3PtXbJR33RCUmA7wunxv8sSCd1y8hh3BoDdU9pgWsJv1Zw6LaiEKbfcHGB4Pyyu42gRYwACjzkMoKf2RzWhusnfi",
  "key18": "2sG3X6vPr1cqSmAYTcvcyHPHDicZ5LWNa6Z5ACcxzQDeSbgsvx51u6JDfwHsgreZWtqUgEfmXTje6uNL5n21KoRA",
  "key19": "3EoUJEAUZ3xWcgvHopUuChJA8FTA6raXpRR3WyPUYnJkCFH6WBUwVkgf3VKsTgSYkLhKCufP2TG5vZN3fLfKqcFY",
  "key20": "363KKeBPjdTFegxTc5mGcjHup1Br2Ls62UTUU823j1VLhmpJj94Ud45FLc1ts2y4v6t3j1F1BTgmcNx4f9wFAW7u",
  "key21": "67pHYjNitVN5buTUnhYApNXAnu7zc29tR338BpSsugLcFzN6qsCKYoDzd2UB6UScTCEr7amFdV6UtEVP4dDhFuyy",
  "key22": "4PaWkYfg7K8QNzGdb33LWkPGNipv36Fb2FfXK1DV13bA273wEqqkrmYsMERqjRhsFLqx8UkG7kutv7sQvUdzuDMR",
  "key23": "2ieY5pKzzRpPN2qd5rHSCabp3TBRQ95MwwX4vFMymrDPkRMfMf7fqgJkdfPZ1JMaCSpWhywrvmqF9aNc1jquMbgf",
  "key24": "2Fi73hrzsh7Z9jAAgjCfjg7sZWbwZ3zPeVgg1q9dKP4cWx6yy2EBTdJDLbSJrndwpLU6Jrgf6phcLHfGnVMjiNue",
  "key25": "4MERPieS74dqa3hhzxX6BNt1FbV2MVzpoyyFDk74x7ZqHuAhSdhwRsN4ogQnXRSnxGcZT32Ju4xdk8W2bw5VYWtp",
  "key26": "31DrquYtcACUsyo4bVYp8HUocgeREXDs36Z8n24EK8SHwnwQ9gPGzHuXqf4n9jndTHvWiXnT1K9KmpxMGv8ALzTG",
  "key27": "4uyFv4Psi6B1QiWe8CKsnGVy6z3CDybYwAUauyckYHWUfj87kFWfNGnpcvY6cirQiALGAukruvPtmdKQzhmtaHkA",
  "key28": "5XAnaSH6XFVzDoW3NFRxCBtrrRegVZeGoYWukGmJ83Bsj4xi2aYrSgGuUZAqSQd9XdTRiXP7DVvmqAgsyiLYdZwh",
  "key29": "97NCa8wstg3SNZMzPsqxtEiHsHT11wo1nuvrfYj2hzdGJRRenZEX8uFuBaypmAf5sVswLnK5EgHu5YuyiEJ9SGo",
  "key30": "31jhRtm54YYxNc48ruoi544baoNqrw3MfyXQkPUcDUwajYgFK9U8VTRSjq9bo9F1TNXWtJ7Ezu3JTAcHjaPnKB2Y",
  "key31": "zeQh54RPKH1sL2heFdkGs5GmHdmPczptTw9UjrRKqEvMMSxo4wd3Sqyv2WjgMu4YBoSrmkFxroESdBXvVahmj2c",
  "key32": "LYv5zLxjJ3QYDihSMvKudQ3hCexFHsbyAN2mrBsYyAujpmCHRFUDupniC5Pd5bVHpFiVD75XDrALkYCMue5twUo",
  "key33": "4gChg9Wu62SxNRF3GMbqsiRo3p5ERKTurBidigNgPbQhE9CNwoYLPkR5sr17GABKXBwpuHFuzfcehPoqMYUXfzX",
  "key34": "64Hajnjz8K36AQbTx2eueeP5LcVfZD2SZN4pL6xaafQRFunCTujt8XWYQx1BbJb4LdPoWeQRbedX1sg1yKUse6x9",
  "key35": "4pH66ScYXZ8PERPZbQs7W5PJfP1yCFcaZ1AGopcxfZGGAeWv6Ra23XFPrTPTuj6cdMocBHGHenHH8nmDGWBgg7um",
  "key36": "5tWCGcWAhadyBaYXgwaTRhRVWpj1SU2xsPxmtrsWLEe5F8xhCd5M3Hzg6vV9y9Qt4MsBib17D1rutKMTMfcMfWNC",
  "key37": "3kLxXAM5DaQZB473XTACYUWfYznNspqUxMgcUP1E1tjF2GZeTFCbGTXXDXaWExQrZCKXRVPy4h611AAZEVkmF37D",
  "key38": "3AL9a18yiMYmWbkqFitbFRjneJdXiZEboXPjJD7ZqEE6E5mewpcE1VPYD5JEuFMVCadLgRhsxUEqrkXzFSjLNWba",
  "key39": "5NjcMcJP4DJecft56RQjenGigFZ4iCpcA1ZpuUaszPgusG9k1q8nGZmMRF3nLHF6B5ENvQin8YLsNuGhixfuepJL",
  "key40": "2bfUUX1encfUMsvptgTGaJkrrPS5ikeMvttHzjYA7c2iy9N4gADqizuD35DyEq6FRuXdfRDM9Wz3yyr74F1wrPSs",
  "key41": "3LeYGCmQeCRDHngKNCe2a6T7VePwnRP3v6rTK8Kqg8tbT4K9zVdhdEYX3FdXbe2YAqL3RrFhxQUEE84NRjsr8Xhp",
  "key42": "2fvvLDzqqMBzZXXYvFGWhZFPAqSvkAouPrhqgsHhUYFfJePyzrLVHzbxiBQX5yWaGXSiVHaBn4SvUxd6eZ3UxhxM",
  "key43": "3jVBGjP58VXBD1auLtsWMCowCV7CVG18meMpxhbm6G7gXj2LzKGeuYEviiAgtfZAUgrfyYHbXmqym3mXUyj1FGPQ",
  "key44": "3d7wooN3tzcgCqXDhVMzDaFeTu2SKiDBjUkqAarYECqiJwCf1UhKXXknNrc2KPXTX8v4p6d5sndAQHh4QHcnQFbX"
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
