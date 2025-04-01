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
    "2vyapZBMdMcn7uBe8PKKp2PTW2XMSxN8eus3r5WXw6ZKuwDAueYcpfUjkKX7s4Ete619JDpQpr6BvHTuGZ9VojtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zjeid1bho51QdKi9zKrqsW5Zw12CJTobJPArxHRGHmPpyb5ndP7doJmpe5PCmwaZxShARnZzXrRM9ZEuJz8xvrF",
  "key1": "2n1w2V2YFLEwqv64umrvprTc9XoDfiS2P9FA9HUfbxjRibouey15Hrciv6bFFJJajbvZqPS9HhNrQageU9wPMBQV",
  "key2": "2uN97X4vu5w1atp1gXhzUYrpf3YuyxNgXSLS8xq2s11A7hcKLXK2DRcVPJsHNCF7fPVd7Kpvh3B5wiTkyBWBD71T",
  "key3": "35cwjw2KzsVsrJMHLcMmqmiAx3m6hinZGLk6Bdt1Zj1XfuSEEy4sQwS8SaByjPCAGMtFHqdMk6EMDGp1GMegMD7c",
  "key4": "5nwyfDNEFAvV5sqYxP2b9fgQRCWtTAN1DAqnWbM7bzLdy7zfYYXDwKFm4H8VCPGUhs74ai3g66NBDkx6v6G8BeRY",
  "key5": "2GWcbnChPEJKKDgvd4aiQ9xc7yqLhq8Hagun4uUWWvdxfhVFTaNF8FmYCziEVJwp46pTiLDrJ6tGuykmUHkgx97i",
  "key6": "D49gUk9awKyVvenqpCBgwFa6XLBnwUDLHLLVf18bTPgEaVAHGyGku9gSfqDvDYZzA7NmeSeGR1qgKjzUHZjshjZ",
  "key7": "3PREbKFMip9zWZCLeaSX3AKRbENV14RKYiuabKMPrG2zBq98dWb8K9dFp9HfgXYPL3rpbFvAhAVwMAbhsbw6LoaX",
  "key8": "1fdV9rKLYiCccRoKnNJAFuKNd1MiiocozQppyYQGgBLrZi3vbwTAuDfaPzPrmqEPhMJwroHYFdygRuptk2nMvEB",
  "key9": "4vjz6hm1rMwq9qCB4evJHZiLiDGc8wH8eGhVDPSAugbRb9NprASzDNFMurLAU1Zx7BTs3qm3Z7csarnbYReimmHa",
  "key10": "3S5eomhpep2QLPuxqFudyUv9v77FdsFaxiHo67MviDh2aBSBDr2DTLiFbf2akRVY6HG1mwVXHV8RZK9sfKRQQaJv",
  "key11": "2qrh7a6r6hFfLv198nQKKmm5sTeEzaXEjCDt85C3rSJDgRn8M7FCmGQ9ZmoK1u3RtCGzYs22DqEuXzyfdmHxV3aL",
  "key12": "5JZoEZZqciXh1R82Z8u8aHdMo4quHWCE7iAJnEkzexs9tRfc72Uj9HnpoMnpqjT3N5yGazBqCGtj2b1Kg5Xcgarb",
  "key13": "47sK1aqufEYFma4uUAdNofuPv6JY1o9k7ixSVd3DkuejgfrtRXzbSSAtZYJBfrHZ5AzSgJftvxNisBXPb1213Bs7",
  "key14": "2r2cAABWAxQMRxPTu5AS7y257FZFCCoiLfXVJAwFAcKmxir4fWKqbeKzue863txms2bag2eFB733jsq9kWwPVLi2",
  "key15": "4k4Mbh1qoa4Bk2C21EqPQDLgDCmognDAeTMy9KLT97w2k3SRQ3fYgKwDiN9WC64MTgih9SQKVCZXxJxNhbx1gr8F",
  "key16": "3gX21r8L7E9D6hj8NQkNdoi3wCFy8QUa6qtyKq9vmiaJe7FUXzLaQXhZTcmjf6QHDo3BgB8wERNoQEcXngtKNwX2",
  "key17": "3VzPCpad2QgcBN8RFNWXDAptqV6PFjgQE9LDKQQweAvX72Sok4E4PLY6m8C4BgWTmXsvnBtR8BYw8W4j2SKTDqd8",
  "key18": "4BhRYuR54kzq84LtDtcDMo752Ky26ER4FvagvhoierDRaLWnFefiZc8yYBPyxwob7WVRtyP8Vs66ksV883QokRxF",
  "key19": "2aGKTcvdZGFK4MQyDPjsPSrHTzHoKA6c2hwBxt9MX2W8sNVGZjfNZzJPBSPLVkCfG4PC4vSZoL6L2dDooyqEG4CH",
  "key20": "3ruNas43aGHXAg99NbxLZ8VGkog8SL3TUkTuBVqCE6yUJGxHk8bL6rudLmnukDnsscn3ktTdw4wjiECCALoaE7BG",
  "key21": "QJ4mrZCZpd4dQF3YeriMKesZaiYDiXKxLxM9ppLRABWk9NXVYZjmTUshLWwRyNnXSj3MiuhmsPXKd1gxivVybht",
  "key22": "5anGANMV5gi5oyogGshYP7ZJ4ZQGj8FkHcso1wjBLTocxdiemvsttB8E8xVChrtCbMr95fUA42F5Pp8dzUz7WX3C",
  "key23": "A8ocLbE7HhB2nq8ri3g6Jun5Awh1WfWZ6ohDWYbcBqZ8rZzYo5aRjaP532cNM8LRbcGEftNzWVySL2goafj2Voa",
  "key24": "cEfefSM2gf4o7UESrvWTuoD5Xgk8NQRfLisNj7XmR77qeCPEFxdU8dJGz6JytNdYRZ7Sj4UwnnyedEzoyYz15nG",
  "key25": "4wbspeKn8DF7A1EWXCeMoGBgaSdK4fibvtiCyeLUgmafK6T2YfGbiFa7UqaK2YZpAZ1uDE1S6usTk5LXKke3zVzE",
  "key26": "4TaUMYyBoZ6YMucgk4FQDRAhSWDnsavM5AvpjCG52MFaYdNLfiEqdawXr35o5URKNs9TqcukMCPCidHrnBZhvRg8",
  "key27": "49ViC6xMtzhn1FK6W5yAnXeNZfazM7Dx5iYK3UPVHApEJXuSsgXv2bjJibM9CidVabVCXC7Np7ZbPsGwwWbHttiU",
  "key28": "YhiaASJfSbktWHXj8xzSbat6m7Bao2sTYSDJ4oqmqb8RmFv79RZtmFSvMf89VNWyEzLUg1Rz4R5oeZbv24R7XH3",
  "key29": "3cbvf7ZNfozgtZNEYpNTw9kLotSqo5XsFFmweTn68VTezSVJmp1C6Bvz7F7USGGAzSV6P4vy4LqLfvgP6xTcNcX8",
  "key30": "R1ohkEzKmscUvqCSSxTqh1nRm2xK6hRcydTYmGVE5e7zd6KJWSyUw37bm2HGXDiSKZtHhgKLutGBSiJAFH3nshb",
  "key31": "2iNMPe2nLJZRP3cg74WUTYCqbP2h23uTVvxyxEGMZe9UfZQ6G8ZguXmpqywgnPFhU1zkLACVLydjTtauXHxYaJen",
  "key32": "5WZyG23K16bom1YLzRriR4MNhFE8LX2HjL9gXqSA4njSYtXGcQCcFHbW9QEzDKbg9pBRE3qRZEPCsmidTF51NQxz",
  "key33": "jnPHcXg6vWaPiDH6Sar6JUsbdCYpGSjn9VEGU7yYH3QBTiwk48HoxioS2G5UzQii8E1Qytw9xBPjjg3kyTe3DPH",
  "key34": "2NQbkqH8e8LFhkkQRYnkp1k8Ze1cb7osaqdB5G7vJgScB4M9ghLffzu9uraTFfUeozVnigoYwNQ9DvWe42tz5k9a",
  "key35": "3q4oWS9xU1MzJp2BxVmYS1vxwN8EgrYCpv7wBKrvaDRYdKr3JtNq8tPWgW6YQxWcPijfnC9XdRgRzskFBtSf9a76",
  "key36": "4Cy2iowGVtGD8jygPy1UMebnYhqfGxewvf5TQwinAyzRi1xgSjTNRQXnDn8M6L1t2eqqML7eZke9o5ZF1zFZix8A",
  "key37": "3qWxswNxwxof8BcZq4HWpdUzWBRQNW2HR6imUJyh5oxxxj7ZLjmmgmxXi4HwC1p24LF1fPoBZaQsohvVnLytAvMJ",
  "key38": "5kgTWtKBNFfJd2YtsEdqcEY1Ryb52yjJPftdLoori1xd7wyFusVA7DVHiKoEbezvdApiigDrKLo5vQ3b1Kta5nns",
  "key39": "2wKNPjcdks19erPaUY8oXQvvpZCJCChppLZTa9PAqr1s4xJrgAhtJD7fKz5UpMw6c7pZLBFoXTvKSFqduqNkkfWH",
  "key40": "3EjBNexfRfP3azGEoCJNoUERx9KcEjnceSWR85iAMZMMEVnKtRaGouzRd2TU8vhWafdDJUyKdWfTVhZUaQbgf5YS",
  "key41": "5ydBBkvg1KkPud9rQXkBnhxrB95oneYJUE9xhfg4T2kzXWthHgwbNbcUfXmrhknZArBcfcW6R2MLFGh49AX4K3Ry",
  "key42": "1kdCndVRyXyVtZJV3zmtXwMEqe7g3taFEEKNWVnM6KfYM5Ug2yKW6ZZ5phJ9s1XxpGwMdFv6DtrnXAD6H8WjpAQ",
  "key43": "64sRZx1ZVPUcmQshykJftoj3xCeSGp7RkhN5ygKyaVwFfnEbwatQK7KQ9XPAyJbZhYpepyMijauqa2pbSw8aGhve"
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
