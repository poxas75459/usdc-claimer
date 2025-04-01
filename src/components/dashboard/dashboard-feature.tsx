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
    "xEDrvSCdsGnKvDmSmPEtfjZ6eeR6RUYRtz4fQmZUJ9sDKvWD7KdKVctHbTUdLJfyc76vCrhURtZ8M6uD9p5vjEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sp5555Xd1soQT4D9te8GFANR8y6bHtLWjKCVuy4xaMdSUMm4B7NKfbKo5fetV37EkEuQ1XkupSU7pvGqr9Nxc8A",
  "key1": "DhdU8ULwygbKXz7SmZ64CXQMMyNz7tFKugFSMuabCGY3V2UpBMmATcyeeHsZit6zEb6G1scCe1ZXhCzs1BFpxWW",
  "key2": "3UP9DfmWqAMNbNU44XA3QX7ePY6YALRA3576UjWrGUqDNYPeK1GVGXveYFrw1hrJiFnHSynr57orAukM6NGRZEiw",
  "key3": "X6G1KdmWyMsKDofdpnxq3uqSw8BAXW6sCgELm4LTqkX4K8Mr67a5DXKVSBwtMFvPJBWaYcxUefF9t1riSq2YHRk",
  "key4": "2gfvXVdFjPtxAu56fRr8euF6Nu1NmPVH9SuDEGdSGkNb6tKo6D982nmLYrCKS29EioUoEc3yLqrX7dbyMzPevmL2",
  "key5": "3oQL1nnhaHV3SJ4bTysYkBRvb4SsRbmZcJkbTboMsMkHzsQnXtxdecZ1tV2zooURTsdA4jYPJjSCxeYRJJznaXuU",
  "key6": "4Ttj4KHg1Fi81BUTDSLArXDVDK6pRcW9xnDurCUJ8b9hcn2n7gqRpQ6BHcRfXb95EP1qrTcVwE5EahriuZPv1CF1",
  "key7": "uhFwoAQy54j7nrue42GK63rKGkUVCTxYHCMVHbaDxgWVPxjHC7gPCCRZwGZ2fHj9MVbWAUBhkxa17EisvjG8uAj",
  "key8": "5jkomPxs9qJiqn58NNozSBrPy1pwwjtsL14oaWuYFgQzufrULAcZDkPWLBFXUYRByqe948jPAr9ZVhMNLASppHZK",
  "key9": "3hFrtQPsdH7dsXSXTkGrXx8zJQVJankSB82QuSXo5KiwBc3EsV1NN9o9esE8No2RNkkfu6m8aoQab3RmhGZpy14P",
  "key10": "4CZXbuXkZdppkbDbZEDJcQ6BoPHrRAnyQrgLr1PNex67bZ6C3SuQR49j8LGDHoTWLpmhzUb3LUbJT98472qyTTZY",
  "key11": "yWx4WGjkG3pSSfKheGqLqGNPB8rPsq2WYSqPvyBofVWniQTeU6ArTV5PFVAwhaq6TCLK7Sa7taefTL6Ki2wKMcc",
  "key12": "5Az8aCx1DB9d1qCCez8pasKw5dirJWsgR2FqzYmsdx8eavB5pXVfvSLpQ6Ns9xnNGfKq6cvhEstSdvxKaJHzCvEY",
  "key13": "3HqHAnZxbSnXacmsK8FwFEfZ4vd3G7F5KcengWNQZnxU8MB37yqQcAtHUXzKNXh8nyXzcLbnJMTRsgSsirZhkCgK",
  "key14": "2Nd4QBBMZ1tJvFNmxSRVESyDqVdzPk1377PZFxzp56Ct62SrjoiXNvf3ukp9tMxM3venCNEfWsdUSkkuqnJLrvCk",
  "key15": "mPHiJKMx3kB8HTp54BUTL3Yx1sa59SXK5z71nRvkp1MoYzLMi1QcEYr1RoNvDAgcneMXa4jyBw6Z8f43wBE9hTP",
  "key16": "4rLDkzw2bMMZsHAEXV9DSTX15qCGRqvG5wGwW14XbctrgVj4npnX8o8kHGtFTddnvpkoVidAGS55RHaA4gboY6Nq",
  "key17": "3V5H9B4R1oKjF4v8ELD8Tf8Z3YeZXTeYCwFAKuKrD63P98LLRB3xDNz2K3sFRWXSmEw4dj5wfgxM3kg1UNfiLzUj",
  "key18": "XCm226QNSj74WzFBNxpxyMueQnLqSLnTCXR4sV7biAsbUaDdTjBBruRMfRWtgDcPKe6wrvZLGsE3i5XrC6qXtt6",
  "key19": "ztuToJDNbXkQnLuxmsLmryNN6m3sTTUQykwn94uj6fDLHaZkCBWLgisuqgsE8znCi1fvbPghheyU4CiDSqnshAn",
  "key20": "5kkE4H4kzRMiypiXKyAJp8LiM27qxbMEbRGZnGjtWokXMs9ZhqchDWtwxmQmRVF2ycJkwQAjZVdTjmsTajLs6SCL",
  "key21": "2nVemNjmkrwgiD3aFiEXPVpxuinGw5Ss7SwqDVPoZ7Pi5mZ5hzYQ6gMxhWFUJbuSHPN1QN7vsLJ7xjE9D8Wij1B",
  "key22": "dp2po64oB3HM5zN7r5UjbF4Uc8CKiTTJ47XTbRuLU9aKinFoNjNHbtscY4han6VNvB9C9S6ESQbDwXrUfFs6rRB",
  "key23": "2BuER8kaYYCZWcZsDwDVRDUiQgk38yTkctUYRgnT6437pxsh3m3U26FAE8d2J9LSYNpJdyp626nUVdNU5TJ98Rhy",
  "key24": "3hkmwNJXbsLti5PtTq8tofzYMTF9iWXArpT2ARe568T5hPAiXf4E96i6AieQ9zkRPRUmhWQGpawDF9G5Xq1uXZyt",
  "key25": "3VcMrqXLjL8r2rCx1qrEo9EXTxFmWax9n2e9RGx4vYA1oib72ZsokZhAbgYtkf9b37xTWP4bRtgRahcPwBS6DUGt",
  "key26": "2tsBFmCXhwuxKT3aidrS3HMPenE5EeST21cpvEVmv8DfYoKHSCvHKq3cC1aaatvFtQkrM92i8j5dFMRr2spvMmiG",
  "key27": "ruwEP4PG6oN6LTHKfoSqqz3ZNsHamAY6GCsE9UYNNz42ZaWvYzj7wigUMC27VoAXNaSikvkv9MRQXpSKD69FCZb",
  "key28": "4Nht6eLuN73tbqmxpcRuN2N734NErdru6CwWJ3NW3ExHYi49GJzKEt4xurYayK9kDc8umi67nVpgW9Xa1ACod5Dy",
  "key29": "5saetcAivyUwTuebFZvRvRJFjvGXNYqNTARGcFuKNnooeDGDGJVXRercg6NVYfMAotCjoZg1RgFwXtMU2dfswLA1",
  "key30": "2WPRazPJvziEkdCCpWRbrn9rm6jmPe9E5fReYN7bgdyNwmu9LHEJV4cq9KLNKPP6P3Y6KtXHSLXyF478Kri4Yxvg",
  "key31": "345LACYwugA6jzU45vEWjkAFQzjaSrfHfXcBygqNR9mEHDkG5TYRqwXYW99MiSHKtQa9pKmvFifgybP29GJ9UMQV",
  "key32": "62sy1DATC5fVgST3n6xAfmrb8HMetyRLc2LMtxbVihZVwUWFXnWdqQEYeAVdnVGdzFfHhp2uRwnL3eWfth5PwYU4",
  "key33": "5UV2aUQu9VcyNeKjd4QYNkGAhSLNzMbGGGvyMtbsUGCbRnDcAdf7a6UWx9Gt4wZfAXTmUspaAbLdByBRp9BX9qsV",
  "key34": "fNvs9UgVzyQ43k3bxMebowKy6ERs2jmM84V5QTyS57vPJu1Tqwd2TX1yqQYHP4EcaKJJnXPhKsGZLoN2o4Yk3Vf",
  "key35": "3YdDpwea5NWdBsEw7WkMcPnaxNBSqxjyDvUyuxyrFJdptr8yiGzE2hb7RL2wAdRetoYQJrDErJfKtunjhbdwUo3n",
  "key36": "5M42ouyJfVHsiqr3xQyHpNZdBpGv3C8pdMfMUzHqJ1whCqfPnsxXXjRTjMZ3V6GaZ9MjX5cyDAYF91LVhc7jDWRo",
  "key37": "3gVQHSbsw1vtkpmphx9eG8UsSxx7VdeZhdEb7kFjZb58hUQv6GPuhZwwrc4rpWMybEVpAjSW2cNdmCwFLGr1aqNN",
  "key38": "5kWq1qBYF2pysG3LyrEeXKtiJiBBnx5ACgsyj8gnkdx6KdJNPoqqW4AW1XakDqMkAoPyLvcPUzGfBVvfeXYTK61x",
  "key39": "3jDiSC5HtU1PHpUhHi19Bc6ooio2MkqHZEdobhybx6oC29Rg271B5CCQJAKAAQJy6DSAgzfzofKYKzKKRkEjuETr"
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
