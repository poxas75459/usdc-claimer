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
    "4H5YCDWLRsQQDwp8VebKdL2T4W43wUif5mQzXse9nq48cAtsxTUXDd5VjZnPDrgB1QRvuALUmtviaveQSWZHC9Jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRFFH7wfnj6V6HAY1NVUPVXLtBPPzBJmSkNcnH7ULyGUWV8GuCzx56dd6VwX9MMEe576DwMxPomYd3PoS5gCkY",
  "key1": "3nCFXh9tWVN8pHAdpKS6tTzD8PZzFWvx4XKxXz9NpQG7FYcyBe85jUcGGiWbDFZRuHKMR2V4nw3y34XogeYh2ArD",
  "key2": "3J2Qza9YZtVeiQcG93coacNdC4MN628ESDHNsJ5GSTQ11M9EkemM5MHUmz6smmRjpczzPXgswazYhnNYdbWN1JTM",
  "key3": "3diU49S3S9RUyvJMGjZ9PMaQZKUXJ71fEDGkSRVu1cadqD8EPyc7GoxhDKd1BykgfKEJnbpaoCzWCQcfeEYphArt",
  "key4": "579BpnRbGXFK6WoWiuMD6AmXBtHWsrvnSrhntKNzPaV2EKgV5arAV6ewArdQ5c4eH1JPYCCi9h4JWYZvnNE3MAJE",
  "key5": "2UB7kYK6Bb3PYn78gGef3hwxHoVaH4ogcgcX3mxPPE2bKTQu26ESJ6Dcd2Lpd6amPedAzMv5bqndA411dK8GiidR",
  "key6": "3xmsZn2VkhecsVUH8aCT8J6Qo9FSM2d63yW8EyWH7e1Bfo6czz7aRRn7cJKWE88FoVogUmbhr2bKeaC74E9YJ5vg",
  "key7": "54KC1AxAJMf4nEPCEx77HTX6xiXNFsGJmfo9gpjGircm8mnUuEW1zoF5CJCgcWFTqjHdPkqqDGH9dsS1LBMQVkEm",
  "key8": "5WWZztSn7YDmxzRKWQjS6KLUWuD2Y5Dmwv3fk5jCaXv8aB2osHj5CLvJMFM1qZHgk1KGhRbRbRW7bgLcrXUB7UC",
  "key9": "5VnWRDYPy9QW5wNYub3uLF276HDiWkEo7dh2pz5rJwdqy4w6FqzkkvQoUqmSSCWqSjQ4SS1z6fCUB1Zej4PVGHhk",
  "key10": "4cPRwmk4oLNcy88i3pXLQPybGi2HcT91GpK7c8PtsFpHUA91WB1aWrFS5XLiNHsqnPSoVrXLhvJghwUEuYGFRJcx",
  "key11": "2YnefbgUxo8ghPPdC1BmQ9oZrXFCiQe5neW12u9GwaJZc45w8zgsdY2Jqm14LKfHxbriaPJEvXUkT6N8ZZ1NiyiD",
  "key12": "4agZvoCevrs6RcyQ32pesBCaFMiX7hRNLghsqWEEib9TUt3C3q27u4dCx5jdxPu9C842AxWhG2RgkvRxvNNfL7Kg",
  "key13": "5Mn1EVxjX53zy8UNzoDjpxaTms2LieiYgFqJkWy5sipNvnCdtD2JDXEgRouZGJwQvW3uYkYYJF9g3xds3urUKWA5",
  "key14": "3igwziFF1pDu5hJ1AAt7XTWXWqiuGLpa4Yfk3iEuK9jXbirkSYPrR7pQjhw4Mjha7Zgrnh3GNFB7eu8KnpNj9UWn",
  "key15": "4E1hYy25DxGcwRKvVpG3AVm1SKCnk91dJb5xie8Ua6M3VHENZ67cEWuujVaUSBkcMPUPni2YpbQWq4XH3vUnYaWp",
  "key16": "3SEzj9hFVBqpCpZ8zyEy9gFzKY8tb9evyiexabfpNde8egyBBB2ioY7RLuPFVWERn6efhF89ypwtbCkXBb8zYUd2",
  "key17": "5WTxLmapow8jPRGTNQvk7KF9gttWBHrn2cU5pQVXzVWWHQ2tkWLzNxaLUrjtxhdWwGFzeUTNkVfGST85tJkcARyF",
  "key18": "3jRKsgwCBH8NUxC2uRhgjGYR5dnL8XdhGFhb4W7LgXmrDYKCg3gt4zz3Ch7tFGhxD7cZW94rgiqid7fqps1eQWa",
  "key19": "5qW471sZ1M71KrqSsJ2z94FfdVCbdhs4pBGB29XscB5tGKm18qjDFaCudHWgU9ByKFd814iy1Yv6bg9UVSbGEKrG",
  "key20": "5wQ3gJEUH7X9BENBKJTTLautHH69g4Btrr54qufBTFCaefGxjxRP2myXDhJuegaTKVWd2N6Hqr7UmTtSsdudzv2d",
  "key21": "2BUu4Htp31DwZCkyBWU5yE4nnTLNjdDuVu2cqP4zQWb4hNb3dj3kuaegPs7HjH3cC5kDdGM8BnWtRb7URoja3Nt8",
  "key22": "3WyAWo13dmRpufCAx7KsbzSi8tRWTt1GjUGF21KMAmAUyw9vsbezNodmJF69dKPXgHFMiZYuAKWUZHyASL9VrCQG",
  "key23": "2PS2Aef4uJwZXQAzus5ng4zWm6dR2gb66BvLtNPbbjDmKXYoqNk8fHX7gTBDZhoR3rBGnEKveTJSKsMkBM6NpDDh",
  "key24": "uozGPXDVNwzQuZ9xFKhBvcUCjFjQJ7NBwStpbaag4LUjXsEVtRP8eDUbcrH9xQ2Nzp53wsMYuSZEKo7yy5p9TTA",
  "key25": "5vQ7G15tdL9ZiL3YNZibPxQJNRdmD7do3dMGEvaRt7HBQC2YdpDpdwgMT8nddoEDHjGX5LFM9EQK4daUsNsczFAC",
  "key26": "ciKLrv1g6bphJhL2KU4QtqKNjdXifDj5qgZtuCepKUgozrKRj1d2pKBxnt1JdZJvDb2VPEsnPtSVShohsUFLGVP",
  "key27": "3MXqw9QQaAqxWp1wTVssjmZ1jV4d2VuLJQNPHvXGWY69DcMTSV6iCVcocQ4RJg1FAABV2rkKwX3bNYqWAk1i7cpA",
  "key28": "3sGygnT98BNFDab7Ea28FWKA5sjhAPgwueNhtEMzLLFarBJqdauA7JQchSXuf4HoMZk2G6x2XuK1RDiYAChpKXaz",
  "key29": "4jykc1jUmyC1kBXhNHX4WLDhB6Z75ziNdpjNm36cM89X1xANQS6hDf3hTcbtspJPKin5w84bEqeeeJXkqXF6J2cs",
  "key30": "Pjc1Dy9a99XtYSJ9iGXVrzv3AU3QCHpGYVb97rPSUjJPsWfd15WtBZfcdus32SMAh9XDMtRP6DJJyATwcqjuL4F",
  "key31": "v9pRch7yo6CbX5VZRKoHZao7oVmMxnKNmRQf9jWhP1B8veNHMiadEpjZfqi39aVjJ64y8yYgdcbLdDVTb9EngCc",
  "key32": "33Kdi1RLpkxqMrNuAVqKSHAjRsNS4oxbNEESD9SdXoRxfzwSJcpMb59JJWuGA85pEmEcd4TWaKW5hAQw835p3xT1",
  "key33": "62A3K3JmcWpPCVKur1VTuR2pfaEjFsqPjAunYEeoxem46vhrSU2uvKwsZyFnnbL7LPjEz7kozzPK5sRGHkWuuBAG",
  "key34": "RZpgvqshfRnXpzQKSErPy4MnUDDGCYc3kGicqoK13SBo4Q1Jhc8h8XGHNKThrmqAfQFAdJ47h1hWSh6ow7zyTU8",
  "key35": "9Nrb6QQrkB5epjA5rGzQ7aJMGkSoi9giDA1MXtrxi9biwERe7Z79QxzsRNhxrZa6FzyTxcgZBguSovQwPeG1jxz",
  "key36": "2wTGKm7oU6JGaPVpd3cVnDpwqQzqDimEaos4X4XyfVXSo8xnXSaPz5w8FMj3QYiMWNnd34PeFC8djiSEpAMfztjo",
  "key37": "4ympFmMtxfP45ocSKR5yuR3euk71wxpjpnr9tnpxW7KRcojoEMQgeVHrXALpfa8FSTj5PUGUCV9Gi4QdDUfti5dr",
  "key38": "56CqSad3XujF1qaaSY8t7aGy5bWUgfxw2ckTPr3HbDaCpnKL7BQUNNs8MtePZteihP7ccSp9dDRLGAy3Wktr8Eh2",
  "key39": "2atv5b8mgWqk84ZYRWCn3vxnnCvJPpqSzYyHWDRiPJZkqrNUE7qh9rAhre738h2Uw5FgtkCmFbvFV5X2NwYttZ8u",
  "key40": "4X6caut5NgBFJBD2VcPwLLUErybjdquwnNxVpfgB2JMDcMVErM4rmL4ERTVMx8a3CxGG7Ez3Q7QTEd4bPnU6xSsB",
  "key41": "2AcxEbz9Ucw5vDhc4F5Co7o6xzCejYyicbiRuu82oWDfHsZGHtDHSXyhbgws47pdRU3U2455qDo2joYiW2Xrc2nf",
  "key42": "sYgmSsH6mpCw9NGrMSkUiX7LRxVPacMiaXrmtZp2WzjctRH3tGNsURsK4YmosLJo44nNomuKtE9LtowW481t7np",
  "key43": "4hRxi3tjfCxW6km1KdrnJb8TvptyaTLo7LUq5T1q7N438m4VeLXf7snQZvJxRTZY6KouHnrmeQ3aGffwN7h2MPKw",
  "key44": "3PTCreVormAdU7FqQdbmNp6WC6Jera8tdpSf4Xz5S85V84Uh3cKLfH1gpYCcJwnJ5TwhWMuKY9SA29yuYK22rYeK"
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
