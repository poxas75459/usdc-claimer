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
    "BLK57XMyX86h2qPvEvPr2mXmeJPHSnuorn66RZQtXQpeTSv7RGtbrtDgNKTqE92dum4nFvtxo6cdL2bv626hsyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4KkLzo76LYRKHxeXK3jBbN3phgxhrZRZ72dVswJ8aTVKPG3qJhuoJ41z84HjHmAQbHFxozbYUnEs58mqRFkf8k",
  "key1": "2jKdpdKabREdbSmoWZyBfqwM4s3uFaMFa4MLJswjDGrvgHaNsLmVsWPNFueXyiMBrd65XSP8GWe36bf6hSsHtKvi",
  "key2": "4i9LyfgTjoZRvxDX4fywpfxhjVea99HmWuLoepYnSN2JXK9ezFatnABuDR6pUKxPhHoEiQyzQj5rLKq16FCwT8nx",
  "key3": "v6bjp42cRqaMkWBia2t8p74Ywbrdoo5a92QoeDQY77JPc5KrzHPEkPGddDkhR6kgx6agut9mi6KC8ySsj8fFMPF",
  "key4": "2ohVhnrcWFyy46E6TkiPtyar5Ft7mPuA67JqJt197CdGK3t1EFMDE6rWf3trKXUbuD1H7nDkcXQYCbLba2L4xACE",
  "key5": "5VqXDq79QNW5v9j8baikBsFbMcURvNRTkTVzRZPeDjEie8Wdn68ezvjbLL3xxaNENwK9eRZFYSkDGLHGPVGs49Kd",
  "key6": "9HRDqoy727j6ccywzWLqrY2nrLmFsdPigPpEpuWnyVTA6DffUMrka8h1gomEXkrSepJ43aJfKXAFC2MFovDW9sM",
  "key7": "5zCGRwMLmnJZfJ1hsZAjH32APsYXVKmp2sym1Ehwhv7o8YGDR62fQJQQMb6c4aoUp7xukQCHQz1cDGAFFB3xK6h4",
  "key8": "4CxC5g4FPJL2WFBMdeL4fHWhienPwL4X3qr7Vw7AHCqhaiT1h6WJ56qrAzKnzhX62XFqcuTAuzEhPznFtxNSTGky",
  "key9": "3reEjjXmrX62Q1YB6nc78CnRn9MqJCM8BiPufwAn4WHfEaU5M5j4cXVSdbYEV64Ef4yMK2sWQGTL5C2bFCDMSFfT",
  "key10": "36kSNWqXJo222ooKueMyDt39Rf7JpyxeEjFokJCbFcY62fJKcE5zCcA6boyiF68En5nuNTZrhiKTaSSVGUrensMs",
  "key11": "5fa2VG1Fcgon75BcLPHU6UZA2er93bPwR2jsP2czMD2qRFjY4c7Xa6gbL6bMgbaATKjXkXr8TVm5mHcbRC2rBkbM",
  "key12": "5MMcJkvPVapvnHxy5XgvHW9BmFsW4FGoKaBmDyrkd65bx65y5VPcKhBZ57PndyMa3tVu6LtHx56SDuCHNVw5ho8s",
  "key13": "bpS5wHHGg3Duk7s3fAXJ9AkrXJCEbaEss1Rb28Bbq8mbPhAGnXLq5w5PR1sAkCBv1fYFGoWzXzM5oNUEPtZzpiy",
  "key14": "4kgG8xhnrzXrduxecRCRBvX6RPDu8omb3d3UXBWHPCQfgbd6b3UUVtJKQc8cPfB81QVUmE4s56dvgnR4CAf31NvX",
  "key15": "5q49Yc4yU1mAVNCxjVXdv7SSRMZohKYpLXqiodGwViMVFxEGwSBJvm8Npi5H5bgrrJGbLLZjmxdRM7b2XukffxJ8",
  "key16": "3ggmZL28hdyHDZUCm9d7frLVXwHFRDaXw2iPssZPqGdxFLyTC27BbRYo1PZWyAywh3uwWyg8ariA2aqZDPU3QwTU",
  "key17": "17jzNtcqLL8LxdpTgjonXNfQ2fVCEnQD1id1hCkEuZvusaPoZSokBwnkMuef5AZBXH47amgxFzsBUcSYs3Wtjk1",
  "key18": "59c1RqnuC9c4ZXG6JnCVMBBtps3gVx59rJgrnH1T5LA7sehPDKKhz18PdPX5cvrdwmezFqY5qiDLN3abrGoiAbut",
  "key19": "2ZBNJXCFtqtFZn3FrbKsifwhJUGtcxKpE2orikdVhZvkkCzJmbJJcQCJiG7i7HVbQXyj1kkhyRvY8GJVSsfAss4N",
  "key20": "2EVw1oo2tkaTFK2znqyB5R1A5nJoH68H84fc9kRf6S88L2aRU7CA41YTp6xTgJ4QLnBikFPbHLGTjVvVfzhKUGBB",
  "key21": "5Qn8dFRJKACPQbhXRQGAgCqj4vgGQPpN1QiGRm2JgM93QG2tuVLTaYj7zArydGLsKwXoED6MMniiLTiU2yqd33CE",
  "key22": "2csPeBUeXiDp8SdJ2JE9TcPf6BEeVv7wC4q84qtk237Nsxusezh6GnH4y2N7kTVE37XjHCUXb8Pim2dWvPQGGcrP",
  "key23": "64N8iWAL7cwtMUE8YxkVVq6Pfn1bDAZHPfjjde5AfzuosvmLnDex8Mf3gCkPhSEzXRHVEsphuQN1Vfbg5e6j5iPB",
  "key24": "4uYFZxttMvRUGgV4iPCMd6u5W9QTJFfb9DoVfWhiiGSXw71eoSPiy6tnXRh2R1iLeCPdpgkQxiDj25xvA8TARubQ",
  "key25": "5PpN78faj11jQLM5Kn9DidMzr74voAimFTYiQRFzcxM6gobMGEMZaBhk4tubW2ScxVYaZNrYB34sr9RgEou1XH2G",
  "key26": "5i3y9bNiyEoGDSfHdsic4sfDrYGrddG9CtHBGitereF7kM6s9d7bqXaWTZAonfmPf4idZT2fYchwSeKdEguX1LmB",
  "key27": "3qg4hzUTVNLo9aRCtykoTkeDLtAuMGfcWShqJMjhsumX9otvn1Y6NN5mYxfC4a9LmFjxN3Uu6MrrPG3ZFSQVwzNU",
  "key28": "5r6Ccd4qsp6whjUgw1iYPaHCLGsYSyLquFYDSrZFXgBdAePh9Z9EwLrpzCY4CiGsBPhWQ4TxEYMeSrvMbrUgpZUQ",
  "key29": "4BVKuQHoKFyab7ofhH2DVawhETWBbd8Rr9Gjjb1HZwYN6nMSgS7LhEvpxe38pGdyrMPvLfLkaa9bnJgCsoRFmFFe",
  "key30": "44ZMmpNtaXfPy8ZUvrBXYDgM9LLNqXzb9RzigRd1m14dnymfr8A6hgzWHtcyrt6UuCwAzUCbFGbKwazZi7HaXnVZ",
  "key31": "5VALLyewsFYNwitdhTiCaou7qbJUFztaD1pdFHqtLJScHYxq8fkeL61LNXFobGjUZwEW1wTazzZFgpwqL5KqR34v",
  "key32": "sa6kodZo1TeGNz7cwYZLVELsQdsgqBazd2DgKZA16dtme7tFbymgBkowQctAYR6xwE8Kh1WvXKtzTmLw5kVqhFw",
  "key33": "2RFRY7MJctYoTNYwo5T1n9cmpkGNLxdt9S5FuYhSSk71QQpRyUMCyiWwfxfJ19TqJnB1CT96Sw9UDDF8kczh7v56",
  "key34": "c1hVDjPMQY9Hgovvb8jkVwum2iuNxcaSrX8Kyk6uuT8j1D6x5ckkDHSgSwqrabzm7arYeng8abYgqSFZZP2s61K",
  "key35": "5aVyqUdthNJG8yB8tCXeonoFFvGw9sSo1SwyPs7Hy4mC5qTWMGFMeiYpN9oRgbsahWX5EQJTbC2Stxj5L3uWFeF4",
  "key36": "AG5xCFStPUPoCnrDtfJ3H5V7wchov5YU1haZ1zd7SguJjrTmXeRumD87bgoLVahvaqsUt9nyage3urLiscte2At",
  "key37": "33nt2owgTJ2j4Ukv3gngnvLhNnnGvhaiSiWubTRMRS4CKsSE5FYN8G5VZAYFGVZNnnRpD2GwKeEhj6gdq6DkDyem",
  "key38": "aDzqbX24RTfudvV2GXG8KVXpkMmrkcB49XP4Ppe5HZS4JUHd8JnAv23Tfr6DjkrpR1w8nuFyg2X1yh5g5qnjrGt",
  "key39": "4Xhj4E3i6xmrFKr6jD7mEBcFgFReo8k6Qjb9ZYmsepWuWhCmrGQcfHRvyw49HE67d8NFn9jsKkhZCt7MLPmSf51f"
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
