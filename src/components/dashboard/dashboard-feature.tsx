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
    "38pdj5PQnfArUTDGEWZFwB1dbZrX7hPFbc6bgFMxG4jiGZAZ8oAzJqCqTCuNrmeGJ2goUeab5smCaof1yPwdK9Hm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZ4QdupchrRzd3mm6g63sUwyr1832PpLHzwNofco7wTkGQr428qoHCvdDhUkP12xwahic96XtWcW1xzuPoFEFpi",
  "key1": "3jiP4FQBp7FhdR3SmEeMTaaYyD9nGCJDkF8kAqiZrKWFPNaHboKMFV6Ph8RgGeJEo5TAF2ZwkM5B9DYXMpz4oQEb",
  "key2": "2Fzi3KB8AD8peNSHeNcdfWe1ReuKbK1NoMPupzAPrH5zeujYe9mzyvYM974XsW2M1SJR1Qo9k3sJPqTBkPFRgvk9",
  "key3": "5CbYtNvcbQg5aJnvjoP9amAuoFVN6UqTeiCYkoTFAkv2sJdVTXzyP9GK8VzcQoXD75Lk3huRHvNJ8x64aDmPVHeZ",
  "key4": "5wh2idrPQzDD5setxxf6eCYktbVibjmRzvy9y9rAM2MNPXM3ajwYD2xaxKgqKTd1a5K2CmUeD1saekFnfuwnk9xJ",
  "key5": "hH9tpVeZbaG2Hg5Fb9WFd5W3ca7xYKcbSWrDAnmzythKomY7d78Qk8DcVSVL8PzvzmSMr4L6dWheS6WM9n7m815",
  "key6": "3VUCt2XXSrNo3ZSfF4SLKFqcWWANU1Jo11o6Qjam2M9nr6bvcXMjTAFS5duBomyHhGit4qwyMFo62ggYFmcG8crS",
  "key7": "3mQkowkQEnRWFbSsGjCfYPckLeYfp1JYFRWp2ipL4PHEEqSCqqiATyowGQAARdUf7eFqf5eR3dDF33iRvp4ZfLmW",
  "key8": "2nErAueGeMcJ99k2kao5aCu3MHYP72m612f6LFjk4qps6jRVm3QBGXHYFUAoe37cEeSR5kc8j7tKxhvQtD5hmKKf",
  "key9": "2KiSYdJeDgRh2irmuUwjd5LZjjZWmSGontUDrkmpZ52LRGzijhuatkk3WKHptfjrSesx213cjn4Z6WMDjffqnkgq",
  "key10": "3tHpCrvhx3DsuasacmPyDVdPLFVv7uHqNH9Y9ThbPfBB7TLrdoaReJJLmi7YHXewA9HJuBNkiEqcwUAGPstcHpcQ",
  "key11": "22YjoZnsQZVEcjmaN3qzX4z5xGZjCuZY5W2DtedU6rfWc2SEixNYJpLiWG58k1T5tHWjWXsFjLfndaEpc8okPyo4",
  "key12": "25mS3y2V32fmQ94e1ocBo1aNBpyTzmP2Nxy3PoyZFUYWNBeyTuBvuyZ6dZHiQd8ju4Jf7gd5jYVK5aPNLdPk1f16",
  "key13": "62RWqXEL5kPNzBoguGSK3MkT17NUW5C6dm3sVZM52WzdVHGnQBjEBvfFkaSyJxr9a5boi2C88ea51Sn4tBaySXsj",
  "key14": "4Xx2kKt38Q1VF74ertougnE8SYN6idGMGj2szFtUX8nErFCYeYe5MRfdRG5ZYnyLjXpisAScwoUJ3h7YjMXKP3kC",
  "key15": "4CVHRG2Tjk5wExmfBa9yfQ96YypMWSNCHsVPZJmws4FGXWkPEzdGFPhvX7Kncb8T6zMWyrpEvjD9WKCMXjNrpRwP",
  "key16": "5RotmT2sWJUHnu9ZQ4wBMhfrr1k4FWWsQpAb821kZFjomsoKQy7S8XU9kv6qRBJFJY26UGeNjmHPNw25RDmXq4d3",
  "key17": "2ETJeDN5PGCjKUKdES4iH21kSzWMniDAMdJeJHq259D8aCDFMt16eDGD4dpybGrDM7JeBEysMg8SqfoJ2yaQvSU1",
  "key18": "5xxQzrzRYD2VJj73jgxWJDzHSS3nqWHVq4MwEw9eueYExu7Dy49NWztT837qKL8aG56wUL8wsMLQ8o8PkwZpSZfB",
  "key19": "3PU71H18NEXCraLo9JTQDBLhCsUEFQuor1JviPhoxfMTKZBygTW8FLDNUJK2MJsL2hkfdKgTbDRiZagTYR4VeGd2",
  "key20": "5gFhoEtDLuzKrbCN4qrsdh2JSBJpbmpJPS9BPYwHWAexNgX1V3sCpW8v8HUNxzECqwsahCaHFPJzrYsGhxJdABuM",
  "key21": "5ombRyDZoRsQgm1h39wDZydAbBBU5d4GBt2HVYfaL5hcreVUP4Yq9AWwBRZ9asAxuRre68BHaXZQ7ar1ypDcWdh5",
  "key22": "5RFDxnvPHdHLPDRAPvSiTjkeTKX16JT2bA6MxfHPr831NpMt1MD29CuGg5tJxATt4jxxPPAWKPkvX1zjyuLsDq7U",
  "key23": "4kQRaU25TRJXEFVhzbsdoctZqdLwgo7eT5nGdoZcjAEPu5pRBVZxfvPnt1jc9fMhgFdTQ2W6UQ6HhC5FbCeqN8Cg",
  "key24": "41JbwDWbC5tosFX6zyfebnqZeavnm3sFqK9WJnn7XZxPvjjuFfewG7ozE5AJv4DVwLWTYa7xWsgqQYMaFCVGYuUd",
  "key25": "PEyeSfWBwTrgvJhD4KvnYAo1EfQgBXTqMwGAASSLV99pZk2VedPiiRo5AomKwrRj1CQVePiWHmP6MNta7wXzD99",
  "key26": "4prS9VJc8AkTs6n1zkcTzhrmvdA7YkyMRHDTKQArqdJdreS5gm885YUPE6g9syQt7JPwSzHutQc91cN72yZ85Jgg",
  "key27": "3FNcBY7vdHLv17Z9gYD9rTaBnhm2UZs9Dx13pscQbnmHMxfV7F9WTnZzfJHGr5gRCvR7jGAFBcaN9WBaDFgk7vMs",
  "key28": "5y9Zchyt2T38TRubhXi4zqrZsJdQ9dFxnMEYbCiHHuk21zbLkck8Td2usyHFrxKuRq2u1q1V8p9Y8rEo5raqBtPk",
  "key29": "2iYaqRhkQ6dRYyzK8pM6rfvmv6pUAkbzQu6upbikd4mRhvq76Wu3DkHWrUN5bw4YZsEaVDBWNQCfVqbPFstChBkY",
  "key30": "3dHHttaLPnTWXxQFjyiGeBfLEN7ZpZbVM4ZhPxy4EtJKV2hvVX4dEzmWXENpx1tWuc73J8jA5CAhGf8oPucRXdyZ",
  "key31": "4ZfWuQRLhABfcycttL9bWL4Dn1nNfgMuFWqzAVXU3BdWW5oCNRvjCYBssSLM7Xzsn9yRX48LPhecdNKe1ZSWU5aD",
  "key32": "2jqJNjANTvucVSh6FQL4REZqbBmHvxBXzVB4Zzh2LTyTZt31HpTMFuZYs4BCCX4e8TkcQRvew6o5SoYgwkhD63vN",
  "key33": "3KaonDSLhwSs2vAuo4RrS8FyYKMh8TVs3i1Z443h63xkrD2itYfxnmXHTSDXx7SEyVdWFVnzdggGoXNEzaqMSN3g",
  "key34": "LoTpkYSFtv45HaXjfL7mG8xG1EoDYxpk8ZdFLRcC4qAweEgfPuqtMGkQ6SEFc8cPxFiqzDRxMtkFp9yWEujYMSR",
  "key35": "65HgxG5CuHNM8aNbC3ywv9nUySChJSqy7oVMoUqYxQvNzbfGZnJLPVnzCpW58K9wgMaj3DisRdHNWk9EMdUKokFv",
  "key36": "33Nh9KFJw4LjySZmCAt3HGpgutjtSNrGyEwNUwANfug7RtnQjdjeTDZALXdE14DAdkm8Ko58999TC59sPeDrJetv",
  "key37": "2RyASepiyMNqYQMsx8i7KEQkjZDG8LLDw9A3JGFmH2fq8u2sNTEijeHyQhXEMXVZmhR6qw5j8fXdy6isk27kp8vs",
  "key38": "oWKRnnTBtiEb9sTc6AhyaSbof5trRD9mdXDB6GPbqmqzEUGtxvtRKZ4NZRqCP1agLjhfEUhEv4L377JBxV9uGZn",
  "key39": "4WjF4HbcjVp4RyziHWqzhauByEkVRfvWcVYh4k6LyPbRt4aAVZ6CHFUvuQWT1GpA3ugZuF8c11F31FkG6ifH5o9Q"
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
