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
    "2kxRUUC2Pemedzo9cnCrpniMZbbcpEXYcCjhEd1QMD3u4UYfU8THtyWTLDkpPqXsJ8tAFhBJW9PavUEZZCSa4Q2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BfJJ6Mibf9LMnteNBAcxQ1vn94sVHZPbCgMx9CLJN4S7NBXq4e9jzY4G1SAFW5q5izVcjwsNxUPuDkmKpr6coNN",
  "key1": "wc36dSEgp8eNUXg16JR7i22ajVPNSx6mmMnbrw6MtxdQRY1YPguCquP1mhKtupukkyD9r5GeLPFri1tpVAz55XV",
  "key2": "5uoAJAheu6XFm79q7iNzA3U1KaX4p7Z2Ksqfva3H5UGjfiQv1VfQkQgCVNXyEC8nokvYbrwDWsoiTtP4TevXBp2h",
  "key3": "4Tt3Bkc3aeXynb8jfjbMFg8NEGfS7tYKueU4KmJKsD3wH9Nx6psCi2TPjUqdArhnmi89rKsg75E1C9BCwwMU8Tt6",
  "key4": "2AZfXEN5DpUcGnCU7hkzbt8ArMNpBUUiUZQ2eJUFMs5bVGZAwMF44tdc6PMMu3mf4o1Dj2F8LuSZXeztaD951jmh",
  "key5": "2MgR6FMek2ZPXoHZkFTHHds17DwuaaJQKpThzRSHC7qqsPbjVybXUALqnkv3MMB1MhF6aedq72vGmvyRsP7BFW2B",
  "key6": "6uP9zYDLscTUyFqUM2ZJP1LStPGajTurkgpa5xfZrCERBwH694BuxkhMHGrxcvgGptKtBiD97gjCMrAKP3PxUKB",
  "key7": "57jCzrSmPsBbARUSPpajePQvSfsBozmUkXi7Rf1ChKzg3BDobKoK3WcGsKfLTyiwjGm4ToXrVwa7wPMr85ApWNUD",
  "key8": "5zVwjZs1arqW2YRpFqJKBtrBfya9D699Dc6M7bsNh5G3G8SLtTU7Moo9qnmzPvWg2iyis5FwCgzLFn2CbHZVUtFM",
  "key9": "5vmSa6kNDPmwXgCKqMHz6EnNyvuWaUnbpYBuW4T6m6YevK8oAgqmtwx1BTSUTpAUn9TTRPrSCR6YLSF3MhQ4KTkT",
  "key10": "5e2TYGDjDZ18VqCoyk6ukqLwYyKfeS8CkFDBTha7Pu5K6yJvnoxvtp6W9GQmTRvQHtsdVqAmJzTXKyqZ8oJpacKv",
  "key11": "4VpcKMsDf5bxqvfpyH3kkEzJMvSkgaF4fSCLCHdASZyG5ugAzt2RSPSyu6U2XNKTGz3RrKUqyn8yrGkcCGFKNxQ9",
  "key12": "2gbaYCyGXHsTrfVZuWNpxLU8PPcK7ADmUTbdggAdErWHuXbkPwaouaztKrDiBBa3UfMKPaw7qZjn1FkcYHqniGt9",
  "key13": "4VrVJv3HLr5jE13xfgmBon9zidJabX1xfhXQBFfZHRz6F3oWsJZsyQrLHAR9oTTbkft1bPRA3nmDMygrc6SAR6cn",
  "key14": "4wajbJ2C3T28E3drny72HLS6UknjSBAtaxzXA6giydFVReJLCWoLYmibNmBS2bekqgc9fp9n1ob9YV8zEetp7GEn",
  "key15": "3gvHEcDca5Vost8iobgFW1SZnrZAvsPYgaPmb4FpBjhvfwGrzXDeDsqSi7o9dehAQZZQBkt5tndeNVXAMYSK5uRP",
  "key16": "5BN78kbByqAf55Q9S4Pu5UcVLBzYXLCPtqaAQDYQcjX7vk4KySU63V91zviZC7rvLkgn1TEnRJKA7vb8SGNpbJJ1",
  "key17": "4nk17ue87C9tkDMqNhNyqVT24LDZkmwcgT5JcVi9Lx2Q5Wz2ii5viaNNUJ1F7d2uJdqXnGYk6QHsgqSCPtPXoGKF",
  "key18": "18sjfjSg8DhJf83aLvVwhVV1iZhKLJs9FnrSTjqXthvfMMmRiiz5xHi1c41jdT8wVPYiw3CoJf6BDZ7qi1rE3BM",
  "key19": "4HZvDVyjXmB8ioa2dC1qAjmMFivnubfMQvVQDgVqaBTDwTujLxYTm4CApGRgy2Fu1YC5Nd9E4TEy5mqRg9ChmZ2J",
  "key20": "eh9HNvSg4FYmkDMQufQvXDKVnERsctNYYfGYKhH2Qcbf6qEXuojdHqZKw4wFz44vNA1Z1xM7kRSXwcLHneTsnqw",
  "key21": "3NnUxyPQNRqsvBSmYPDUPXCcgac6nP5h5JMBtAbC4gRcukBHsTFSbqDFz3pshSG7KDNVjFJ96xjkRRhnc97CANF",
  "key22": "3kda4ydeMJfQeX1evxUB2FKHhu1dZmz5KDtUWbRJq69rziPZ6MiiHT2L7KsQZjkSTPBEeGJYwiq2eJgdCzVMipPC",
  "key23": "2mH78aESTFAxZ99e8UE8Dbpt6X1ExQHdUXAgZk8pYHLscgKybFBWTi1QDHcEFCnsD7fC4ChnVMTYGSrdgzrKq2G7",
  "key24": "TLg1WM6jShHGLKSgoaPqne7A2vrmebCwV6VKvdodP65KKgokhcJZPEeFThKqpn7kkJgdGdmazxRcNuRcbB5bhBa",
  "key25": "3e6TaX7eNt4exZPbwM8hRbxeUULkRbCvFVHKUvhB5tHV9aUNFuizu5G9Jagm57dP12tT3k8jGT4vcpP9kCq3hoXK",
  "key26": "5wRh5SB8TZaMxXnAHHy1ci6Zjwd4X4M8tCGqsy6GLXUQqAHHa7TyGyx86t6SUK1UvAhaAcAipwrwpVxGgkq4NjyH",
  "key27": "2LBKbgXmnLSpJzF3hg8G5C1M3tDqNwcbGGedt5r85Ea5vTrwrzuMYMykyzPUk1tSZQnHkmLN3ipjs6ojiXQmidRq",
  "key28": "5P1q3wVaFH4bMhncMkppnbjRuKnY5Z1ahd4oimVqtorDbeu5u21gdXdjwQr8Hie6avATshRdJkzrhJv4DccJmwPW",
  "key29": "126dRyD1Qz2Vv65HdDaVeDoE3gmALSA94qD38LXNaqHqZt5m6zWuc4QfQs8r4EEYGt48Rrt6FbfhdnAu2uX4hHap",
  "key30": "61NhLUuYwKD4gRNJYJeivEqAPd8xETxobVHVoPv9JF3dvNPbhN5b9xu5Qwhh3gTWnJNhdvP3614FsFQau2gM4xSa",
  "key31": "5rN89MNHWXCJs9BA1RrXxo5mvhpjNVXznBPxECqvPScRJAEhag8eTPa1BCKKxfbugnSKoiAoJfeJrzDzsKuSSuJ9",
  "key32": "24ji6xA8SEGzpTChg2GakMdpxYppZvXJrSQzkJytg5zNjeGBzFp3o9tsXyYQ1ptkDb276JwuVzcDnmnHoyBWqjzF",
  "key33": "317eGfY3aWRovrDfFTcRA62PW8RVps4Ptv1SUqSdW9Sowywx1DjPaj5Fni9MyPE41Y1EwFwXnjC5Ruh5TqS5bVjL",
  "key34": "3kxPFPtt1zmDWDBZv7YKJPSPDvpMRDndnz4zRcDp7iQ4gkgraARTLuPks4ckNsUirhPcGMQjLNggeiew3Y4pyJke",
  "key35": "4ZEM6VqRzfWmFxn58UW8pBdHRZ5Y7BVc7yXd5wVWmJZVA7jVQPWjJAMJNUiwvB4PuJBEyrNoiZ47hNegGaqPNvP8",
  "key36": "3w4PXnzb8GdXwPfXWR7TdJT8LHwR7qQ6MRcXUJU6Awr2jTMWond7rTQveppb3JW4X4VPzn6FN25g61oqWEha7Lzy",
  "key37": "2vhxFvx8LzNKDvB9J8TjSGnKn4r7s3oCStwFshf4JPSsdrFgMCNSvoVvSR6Eo77cKregQdCn5u7LqPTsaDECutY1",
  "key38": "DD92ojqtddmEN4AtLGrJN4aTQpabSseq2XJDqzWxYcWtRvCXVwxKVPB8pvgjh7sRYXjmzbfqhV9vCC7HjhmCJQF",
  "key39": "Yqs5ToGM4VwQt2pRrQsx6M82EFhPPswLCSaoAscSpbrH5suHAEXofH5g49FiFRwKmHJGQ977KzYxjZAgFEFsCMF",
  "key40": "4T3TvD6n8aRLX1GUJzs352ZUT6pdemLgyr3TtdYp8ZbxEkkwogvdemzV32F2ytnwWpS1BopofvWJDkFj6BXqvv9q",
  "key41": "2skRAf9eRQKvsK87S9fjaKR9vA1AEix4GEKinUiKdUUCXzZ82pUHWbEjd1cgv13ei6RjTRtx9BMKitQmBoAXGd4j",
  "key42": "5VmqRHY8xWP9rRVz2Ch3hEpEZGcPZom6j3rSC2DN7HGKYERAN7Bs5BU6FcWUt2Bs2LTzrJ2qpPjQ34cMKE9KfZDC"
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
