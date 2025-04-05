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
    "2XQhNnAGrLS56NdkrNNBfJmVWRaRdLhxgM58NHpWimSgiPQqwWNjoHzBLBZHCPfmZBnNwDzjq36HFKZistq1d1hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bFiGY6ZESboScJGviytkPPQBjXBt4u6WCJSNLbbDffL4EuvcBMscrmw3M1RigaRcHtDVL29w1PDFJH7rdPUFDmR",
  "key1": "Pmk4RaCoVVFSTZArNVmDcHYV47DYJzimMvcz9MEKkRJjqohozV3SSdyuEMudjvdo4ipXyExgynWdJwr1a55QWm5",
  "key2": "KyhPRtc8znAgwKqqqYxmU91HzAWSnnfPrRUkrFf2ChEk5wWgXKn3Fug2zs7xc9gF5GqS4h6bT7XYm3Et8HeDZWu",
  "key3": "5h5oBuHcjB76mbWQJWnsMR3fUvQ9smgHK3os9kMiM3p37Kby2rxvecv7zuybkxUUAFigCydz31XH41tToJsPULsU",
  "key4": "21M9ttySBpEP9uKXZApazipHKZKvhjuC7goFLCcpxRBhjkJKyt4qR5qxwX5uDZbVbwF8xsUdQkU9BgFei2LirJC7",
  "key5": "3kBdNF9bLrQAaUP5fnhXhpMCyzRJWj1yT7DvifANh9UggNwVAbWgbtanAkniypRETZCYJ4Ad6pm3jobX3BF2kE7m",
  "key6": "2m7anACnTXWsUJWqQeqqBE6xUXJNUZQLnMkEHUMZKbTEJAJ7uZyEJrgsZd5GgYs1DUfgZ15CayrAYGv95sv4P1ki",
  "key7": "9aRGZmyvYprbuBQGNpCU41YeHA6J9rsidZo9kjbhPG44T5gVSmPHuRz3BgBX2x2Cw5pxkseh5bj7TGhu9WKTJ4g",
  "key8": "33rnq3vzDwE4MjMiTTqhduojEK5e754eoQMAZx3d9wm3W9pMRe8jgY5gWGBrucpqDZcq748bdz4L4fuoicUFDT1Y",
  "key9": "ky6J1mSgSsL12HTksBGZMds2sWJb8QfmnZmHURjMCGb35SiQhJNVmBjZJQX3Z9R4LsfdTyT8dEwu5PKpjmz4XP2",
  "key10": "4AfR8BBmZpud8KwpMWSKSVwmjqiNpAp41cZ2AdmpoeWNgCJbfpQp3GTrro93T9HeCv4Y1qymjrsVs92qpThzTMgj",
  "key11": "GJVKnKmnEQkk3RVu6aLqAbT2JK49K3nrWnmZgdaDjzJZqNv8NjihrR6KQDzSkLgKYy67XkVA1S6gyNLZSfvNas9",
  "key12": "edKg4aJ1WGyxK1iEmd6JYsUqJprkpE7LXLtobSTAT2aiTJhAj4wnJYJtS8Gfw5RLRSJi5bz7ogUzqxoGLGDjLjC",
  "key13": "5UpsSttMshdViSZsjgUApguGrSJQYPVSp4nGqXVPSQFYJjy4Q3T2yxUhuoPaDe4NPBVkKQWHzuXPqhynQWYKDZL6",
  "key14": "49rDg9Jejccpo1BsuTZEGRs1A5dDXpLXuTRi9tzVxJ7skUs1KvppdjA4BJGA132PMfqcm7ovyU3wM5fmqg9EfKtP",
  "key15": "28s5jd8gDseDi2dCNrKuJ2XHWcWyoSxLakVMWHvJr35aTntgDh1GPEN2qsXK62DgV3SuwEiauKLswWwEZqSwjTCB",
  "key16": "5VA9NtZg139hrQuU7HCNFTsfWeLsetYEpTYvkMUj6RmrygTE8cbCYRU6NACBVi9vKaYhYJ3PVDyjmhj6BtsMxCbH",
  "key17": "3gki99f9L49k15DbuS4naLZLPTFRERPCDbYJE4TWeSwAbVUuNcLKFYmC29y3r1JewR2UnW9FMxa1teW9U5ugd9mz",
  "key18": "4x63QM1DhAWyFZ8f8GeHNmuXxgGc4qmmtb1LcVt5kVUM62uofkrMTQirMcAUqdBm37KHdEQJfZJxpvdk4apKreZd",
  "key19": "4rfwsBmAmhUtT9NDAdeBBTgPk6pTGUW7G6UFhyMwc3pNDH58qN4FkBEUxA4VJf6MNUQJSdX8CJUYHaCF76hYMgrK",
  "key20": "4qyR3oa8FP6QJrFYswDaKAJdPeQB91NGySGC5YuYQRZpagvRQ8YVMswiKzwrVqEWyd3GiHwVFxXwAv4FZXViuhNQ",
  "key21": "27Ar7cmcojZxtg1dPegedvdS5R2NLGXifdbMkm1yz7pV4k8zv2og4jXGhAeF7z2qSTA3duaSzR8VigqgLzSpicYA",
  "key22": "4Hco4gMhaMtJBV1WHq58wJRJ6mFyAMz3Co8zFxjZgFjG1PqJYjDNB9bY1MTC9z7wZbnyBV7KsL1xeUtkpR5VzpvV",
  "key23": "puxkTkJhudrja3RPoCaHw4cLNUT9zkryyMmUStuJNADxivBp8iP4qRJNc12G7BwRkbNWR4aiEUveCv86ADoqQqT",
  "key24": "4QbnXWXzwmYoQT3jqcYfFRvCPwyyR14uiJDopnjK6GM1Pi7Ro9t5nxJva2JskokaaXhxRsswf52fhyQTQrzyWxti",
  "key25": "4oPu7VdK1GeE8whTY69ceqs1ZutcAWYps4a7UuiJo1M9UA51SDB8rwsXV9B8wutkzqa1ccXyUB1mp1bofaaFYB9P",
  "key26": "3NJECjb54rSiUtNMi52SzKgXATgX9Zh3uQv1Ct9q76Kz9T6f3PXvmRQ2bLTtoj1QKbGaJuYDgE1JaJeVx9v1NNSZ",
  "key27": "2YyTPt96AxQehHRNyqKiukgwQww4JZsVw4ANbYTnsDku3gk7dfPe3tcRmQqEkXNoyFxaCJ8X8SyJzVTPmvSRT8Cn",
  "key28": "4aGWMtbuKvdQ7DTmvzhRb8QA2FwiPM352maVqniGmGSpqoJdyh9NWpu616DRK1yvFK9vMmdK65pwM6s3CGvMAxaB",
  "key29": "swEyY2qGeZpyJQP2NE2VjDeMj6gX1nWAFMV8hPvjJTWPpZ861pX9N8jQUqPUG5EFzzNmB1Eq9oU2hMEe2kJRWtN",
  "key30": "3EPLwoy1SYtsBVwb2SnMt6mAUwNtKAqh8jdR4VJ4KwGqm8jojr1mCcm5i7Vj4Gr7NpfY4mfU42zCpLrN7Z3YSvxu",
  "key31": "4DFBZinX4H4nPvcA2cYfaaKjCFonRA7oMqQo4dpuNh6U4XTqddv9GibGLyJWpdb6pempBSmV2YPyHGsrZnz4c23f",
  "key32": "3DhiCSXCrPU9vn6Tdw6Jk93BzSELZP68TeGv7yasT4xcPMUqk11yUtgrngZezuPP5Zmn5Wch3pnfsqYEoaSewK2z",
  "key33": "4HtgTDwcSHiHZB2K3ztz5cBAjRBwZCEZSq42JnFagk3cEdBhBVT9NadLMVH5q4ocwoSCEa7JCo5mnwXpVKppGMqP",
  "key34": "43m1UiWq1xgAPLFT2jWJmDdnWi5FdMvzmeRtDdicgcF4i6DnWZCuMFLiEWk6y1vDPfZ2V5EbK1ppjkmGLmiWbGcG",
  "key35": "2BqFvJSzEaQACJwu27xZzK4w7BRSkB9cguB6LKXB8TanCNV9A9fndvzdzYQqcnEsF1HMXBATEe2tyw3d5tecARwu",
  "key36": "3CzeP8TDF8hMLJABYL4NQi6Sgi34Ra7NNRofkRBAVkj5tLvVA23UdSxsi7dHJpWZVsaHuPpv132GL66KAfzoo3EU",
  "key37": "4ExSLR1u8W8C58tqVFKgFNXixz2fe6xojVuYy13ak4vmHaojc2mqA3GUFLn5VFjxkSpDSA1A3Ebn6p3LEbCxg35v",
  "key38": "38KM5T6WkG1PfjbsWZCu7Pa3e3D1qcydiTEvLnihWiMAUFVd9Mppz8nLh3uPGCrCaTj4UAj4onh6UxspeeM7BWPA",
  "key39": "3xRzGirYSnb5dVPtmS7KE7BMkR5EwnvSKesMcSzGDPJahVDhfPsVZJ7gDVCSvaoYWDpKppkN9NhsrVGJqFYx9zH1",
  "key40": "264Mhju9QvquFt6sDWsKgN29qp2oqW5jGMpBBD5v7CVe4k85ySStPjEpn3BQYUQ6FcavBUpbAANezAfGw7AQtVeg",
  "key41": "32DZdJymxWJfyNA8SV9dKV7XLXyUyAXbaZ2EFGGkhubc3BGMU1NFSz1ZdpSkuirkq8zAg1qkvfMRKE8i5jmwZB2i",
  "key42": "5SvEUQNf4veBkYDWoedKnYSYbDSWMZUmLVHQFMjYmqmv2XGtoE1G5PfJFVsS8owJMjfkSw42mgBDMe2hB96k8N7Y",
  "key43": "xCvGoKknd78EJ9uHM1h5LWan15axLjYkk2fWwJLDBEdGDrcaFsiQuc6q8wM9HGw6c6nSvrLyqyJ7mefQt1wVvwi",
  "key44": "4Dt5bjKh5K3KSNX881Nt5BDzd3TV4e1kGYiPJYPaLLaZmE7XaHfvTeDmg2jboWhZVWJPutsjfaokDAAXkc9erM2S",
  "key45": "DYLhBFmPxjrmnrLjFcaPPPUNqxUNGMPorNCgKymH9khFFdJL9nrXrFrws2NtLYkieM2VSV6BMRWuovBqYTThjmH",
  "key46": "2DyGUgWrkCkaYmXZibNZfvf2C1KMWQaRKtyn9fW5KCDUQ6CVajXPwgQVGr7AYnHQvrr2r8R9oL5zsBa5eucQrnRy",
  "key47": "297tdEn9XnG7Ripi3JkQnbFvW4A84t1WP1BWCeb5gU5ZP5pp9sPa3hj1S2EQYbBgpNJzHtW88RqnczReTFHtNMz8"
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
