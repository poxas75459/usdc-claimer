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
    "5qnFFaZeVmb6XfbPv8sysy4NCudbouiZCStAYqrtnQ6BKVcgMHTK18TvJa9zLzcV8n1XLTvbHM6gqLM5cpYe4Tgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q8K4dCTX96tiigHQ9BW73H4CeCgDSq7rC1HjwuBWfpAic7bxBPTKKTMQQRBdgEhpe3kWz2dJCuRsbCUDmHdr2a4",
  "key1": "4cPP5iVRLJGieGoj5ALkgRGmKTWVPkMPwJB1KDn2iHCJHiUFwCt2Lp2LEshRQnTnveUPyTowuvcyqys5btoMo5X3",
  "key2": "5Do9177DLyTgURgvLQA84nvHk8khXdjKqR8GfXjTMxBppf19AHr1QY6MsgVtQ49qGFaDyoPBpANsKGGULYu8Rh8h",
  "key3": "4Q6RmG2RQgTXKGsg1g62hJRWZfuXsWbzgoHKaBNEDQwxW9sK5FD2tjiAenfEtZjCxzJaEdDxqBEPC2EajH2m3bt5",
  "key4": "5c95UJhN7VL8QYhekKXMWci624ZWSxziNdvicieB1cWHaGzZUTjCwxK6t8z2Lu7oba4PkFdhvqHvJA2Fz2WfL3yS",
  "key5": "3GXGZyVkNDvxjGFQWu7WSZkhgnpdBCXXjArRpfQzobmjky5KpPKLwDab7QounynZGzAnAVTEJCFpT8m8s81d1Ais",
  "key6": "43aQ577ARStKopz3CcT6HPnDYJ19gEhUbboSH9WFX4vVTGFsEC4PLNfonbyEZFAUUyBs6DhpTyfMNEVnk8zAG5C9",
  "key7": "4ueMgoUqYB1miJyZDAzqCGojWRhjhKnwz5RKgecTcFc3d4xTA6ifPT2QBbqdYyy4MYykQK448D6rBC9Jagx2WdHi",
  "key8": "5F2me8oqoEHyreZGFJ5i4Y8Mjver7v3AYeCwsGEgV4iQMCaUW7iSTampCJEaZgpBpxoUqCD4YT44qxKgTfV9WnmN",
  "key9": "SDv9v2A9AbaTVUrXSqb4BPS6X5v16q1fcfDC3PRqZ8mvY2pMSjS7B9UCymNEFjBGzmdDE8yGF3XsnQdGpytdXrr",
  "key10": "4aVS3KAHA6eDudci8Np79BCEwyKXuWDS46hUCBaRiL8jwhqgzS1xHZL3Vr3Z9oqQVVK6aLeCGNWadxUWMyXuZqTd",
  "key11": "5zbpqTqwybfSMLippzZKAcmmiSRSPuBbsnndmzJnadnjwFuq2VLvjLYWvbYLotPBhQo6mPUoLvgdGSoKEY65PJHb",
  "key12": "8wNbj3P924yM9YZnWYtbMfjX52fqXGNeHWUZqfr3itut91B8a1QEGhNwRrmAEgWkdYfAkwVgYvkkt88XYWw6w9T",
  "key13": "4MG2fmFx3toeYM7dJ28QJNEXWRgPRoi7o6Yf5zDWZBxcWuueuJmpvE6HospVG6to9wDtNRS7LjQc6YocpHoA6RtA",
  "key14": "3tQvYofSy1QJHP6rwLvJYfS9nBRZS315VtzYtco3FH1RwydFwnK8bmnRbrp8UAMb7PzRWE9YasKH97pGMTFbmmAG",
  "key15": "2Wq8XupfsJBdheikzMEgg9w2GF5EyE6HZYMKMHvXFBNcB1TmzcFfyv4LVRPTAHiF55p8ZppTpQjexDfYfPft8f1k",
  "key16": "56NFxtHiriYnuq4EicUxpb83pxuV1ZeD2UjuiCejkn1YyRXMKUmXCZk3aWMeYgTzr1UzNbtprkXoxx5KoRVVZkbC",
  "key17": "4RtrxZir42JGLKBKACocfrKkihGSeQ1oXYXrmqXQ1e6giWVSQpVWk82qjk8nhUxhdS5JMecKXqLyefxb6UYRQUvv",
  "key18": "3W5j4r9rzsAgBF4aTi8SLL4s5iipHssnP1y6q9u1Z6ccasXHS14WSm2Zg9FPFMPV49oPwq9ZLZfvhwmZ18RdRjBs",
  "key19": "5W9ch5av4gQD7WLqHhriXhdAN7Fii9Qx34BKX39NeJvGCLiXf1iHEa4s3v2WUGPXyJLxKgzce714fC7n8oZ6AS4r",
  "key20": "5gR811GMbDP2mZBanPptjX82DHM9VYLtMNp964GiFCmiVBrh4zYoXPwDJ7WHAWmTRLNTL6qzn7LLiyUp74YVcGbD",
  "key21": "5yWmwap2Ubd8oiU78PXu9UQutEj1oSvHqYZTmq86LxvdMp9XE9sgxq3pEVDo4jEpNG3XsbRbJTABStgwr2VTk58Z",
  "key22": "27n2R7ShmjBdRe5FzWR1fUqvhsYQcYa1RsPATRFEM8oQ84VGnSiB7wt9K6EKiAVvhQCrbUGb2LsvBTn7c12mTSYm",
  "key23": "4eqJBWAv3B5c64CT6aWUoz9H3srYF6F56CJn1Kn1QiG6QNp9PcoQtn5aBEQKv4mvQ94TrH2JkUZm17vk5BN3Dtu7",
  "key24": "5YqygG5impB95K8NnLCmtwjDs7LAErQKPqmH15cHsnmN7GoPC9VnYcjPcRMoYnFY7xZU3b9sBPpfP1hR3L1jViqT",
  "key25": "6mxvRqUAosGAQ2bjCaYFGwBVGcUpSY4t2gsiJ22kRQEWyGMGcv7doD3emsAYHDXonyFkvoCPp4EBpcYbsebXAJc",
  "key26": "3u7RZ2gkRHMMGgKJaZLoyMgY55MizixjQ2RHGTEMMcJnvN98QvSgm6EMba6tqrqjx7KfButYpCoThEwbe4X3GLUz",
  "key27": "48rPiw1nUqMFUkRY7atTEpZH3zxCutzBazRFo3RGGXKRNHv3z7kVwSdxENgsm9VkKMqRaoNKxsVeaztGKQwTvz2E",
  "key28": "625E73vpujSLUmBYf5dRBYJkfNiapFdpu7MzdeSXBRHC8cu2zAFXuqfdY2AjtTFLwa1DQ5Sno8gAP7dBpzkUXzhf",
  "key29": "4j7eEuqMfnb6NQsDCkAorAwrbgS8wujVRRtZ9sQGPtjpmw1ZmJ49bLZiDxnfPz44dbBreWQUssU7xivcG26DBkNV",
  "key30": "9kaCdC8RY7UgZryjkz5B21og3EFYch6UK2pvKqBfUXw2u4YLWcgAbAASci6HFJb4mSQgvb5P5du6yR17RRNWgcu",
  "key31": "5ifyM6V8GDSu67PvoVrqmnjf7au8umWoSH7LitNtCjeSqS5wnjLfHcPuqWeGQYEEWKXkJUvXi4QwW89E5XmkS8g2",
  "key32": "4yiTpcwJLhQLaCkuzXuvxxWmaTFpdcnJ5GHCR3qTFCqmdoFXwXgnLxkjwHKTaFEEhDrcfjzoZzHsRqA4yU7sCm7t",
  "key33": "4bJLjfLoExxgaNa5JmkP9zf2hhG2XXdUK9ohXKYQUgSZMjf267J2b9DvxJQR2vKa35DS1expemNSHZ5uDvXADFBU",
  "key34": "3fkLg9PZHWepLPA1tdHP9Y4tc89BFGay4Pp6JJN9QNQCTwQupptrBLei866zDkfNFFP1xh4ifJTSEnKdGHbSxFV8",
  "key35": "5FQJe1oo1BpzcvHf1NcHYchKo1enwWKZvgigTkebcfRDDojaM9XHa9iYhA1gGKzxL1C5KgkPR763qqPznu1TAQav",
  "key36": "3V5QWgjgG2RGcNXbMzF3hY7HXH3NKXreRqbxjvyZ34uP3dLTaiZHzeL73Q4DQN8LeTbrHtga2VegzHDhRZxFkbzC",
  "key37": "4QAeKRJ6iJomzRnLu68EMt5VCp6PAi5s5uE4ew1CjUKsyabjPqYyJ3nCTBNWK2j5gcggJK8gcMDUsGfzwvJqiHCb",
  "key38": "4zNJKViAWbSGvoaomzG8kp5PBqNwcGyA4ehAPwagZw3XNhcoAjnYhgDsNAzYVwLzFs4C2aG14VBRVLoE48zLduPp",
  "key39": "tbS8x2oBE5HMYz1e5V9rS6TYk6NGTB3wHWZVzMW9YsRuTgF9bA4GgCXGiim87gdKE46s8kygmYU23FB82dCgHUW",
  "key40": "2VPBFdtuJBGAtb4bFdYe9sfo5GuQSeRD7Cx8msbTobY6DTHoEYFx1GZ16kjbnA578XE2AhjSx1WQw94gELJc2zsJ",
  "key41": "5M7uzv9zN4TMFMs3DeMzJwjM21WeU83hw2ENbcTSqMmddVocNpyQaysaVforjxyiXoFCWGVvEBQmSUVwfucQjcGE",
  "key42": "3riPJrtj3gMpX96ujeymm7TY5KjXbpNahAzmCY8VdsRS9H1tYSyUK4UntN2q3R2V8E6tdyUMJFoDSytMK8RPZEJ4",
  "key43": "3yyCkmKfQsUzE7as4o7sDHudZ7DhdGQJf2rZGT6XA4cY9vygCEd8fPe7EuZXVU7rvRFYpy9hukY5eWKAyfiYvqgi",
  "key44": "4oygZTJzKHpY165MmWG4g6uZqhPy6DA9MBvffMCWvZVU48y2TynJmBB1NAxPrn1RDT2qgmF1HVDK3cDDNLVTLxDQ"
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
