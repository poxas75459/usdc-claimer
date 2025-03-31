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
    "4BHFZW9U8cSunJEQtvn6oEQPe8pCZtptfc1W1juGSz3jjMwfzSbVyQ7532QaA8yf25mHEpTSLH1tR8WpGyiMkrtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6ipTcopBwr2zWadycAoGwEFxAU6bnEoagjvNuh7pJ4jXhAfVYVaGHnpyu7S8FdyJgnWTS3iW2DrvdFsSessTQy",
  "key1": "2ePQo8Cy99fae1EKYBfz6EAiEDanHmqr6GavFCQMCn1Bo9aRDxN7h87sQ4jJ6uxN1cHgW5kDRrJ3wjFgHC6gdkF4",
  "key2": "2oM92oZ7XiLEbFgvoUaKnVF3JNZATHzmosywp2vGYNZYnFngztrFSh1bytafKYhzykfo5uMygtMDFLmH6xR8Cb26",
  "key3": "63Xfpim5HUcjDYC47hmsy7GaJrnZuNRAiEqVHLTRiwjAQH3hgHJ7AaKDJxi9WMXDtbqfzuDBcS3ZpgmEdNtHtPxp",
  "key4": "3NXtFpbncXJZvABwanvrgMF5JfVXedpSNcrauu7ALQ9nw6gRsEfZx53LNNiheaw55ckpr2DURKC1tZK9B4TEwrX7",
  "key5": "UYMUoF2jKqVANyLtuqbdBfpRvqhKN55nEPxnpryo9ffEJad3GV3MoJyjKunDqSxKUCbtftHodY3Rpx3BEuyWrmR",
  "key6": "zvTCPT6teoF8bt9TE7eMuLvWERgktpHqCKN5vovQvdbv5mdpmZRD5BXV6su4NnUABAkwwueCtwH9Jf8Qk34AbNm",
  "key7": "12993gg59GnxzCmCqYPD6zUcjX8VLixrG85Pta9Ju4khb65wy7hnZpvgzdvSH9w6NP7mpwydS438RZ8bFN2S3KXe",
  "key8": "3ofky3zzJTbKnQZzfTLd69aaC9VXPzpCBbtWcnDa1aKEF5kBTQpb3K3tuxRp9LVT7ii5sTgZVSzcPoE7RbvKTgnF",
  "key9": "32ineSUkZhcczmveqeKrbwkgVqvWRCMnsnEuki9L9vHZ8b5Wv3DqAPZ3VxPYz3bpvU5brg9WKxVHYvnmZ48Yzf1F",
  "key10": "7XbWsRWejDSr3mc4mwL3yUEZspNEKHEybDp9ARFKah8SduYt6z9x3dWyCScTwBE6mTGWcijQiUwg1jCVFjA4h6A",
  "key11": "UgLH2LyLkej5bSsjVn8GFFbYpAseC9RMfHGhJkobFSaX29QAJGzEEq3q4yms6ctkrXnDTVd7hmyE4HCmYp47Rcc",
  "key12": "3NF25F1LcUiWpyENXJrkoMKK97aBm7QSTySt9XHMccp7JuVv3CWeVVYgHhTGkL6XDQ3ESZ6o9oVEmJSiyGbpd2Zz",
  "key13": "3Hc8qzbtmKLabLwvJybZNNPoc5nbeEsG6VpP3bHgRCX22hTKwSZfNkfCGZcEz5bdDfjtnMTD8YHxjQfn78JrtPvb",
  "key14": "2Yc5cJb1JN8uFefUJ7fZ6jAmnN9Xq6EJU6PaL1qo7xjEg3p38UQG81VcQbBNGoqSpZjoQ5rv6Lmz4dM35VEtGDaC",
  "key15": "5vuu3pkwz3s3eTvozLeCQB9BLJMwKJhSt6C2MTdsqotaJ8wdRb4EsBbs8jn6tvLJouwvMDMV56MGPYNtKrBKx3vu",
  "key16": "cXXsMEEQwkSsPXXBx2tJ6B2TtK5KgnCAHvqhS8NhzCjkZpK1Xv7rYgPiXx9QeMkqC5GmVyfwWVRnQtJFSagB1An",
  "key17": "2hzmiQ7pW8z5dHTZthda9kYTbcBMdHoofQmE639NasgrA8EpRESvKWkAGbfqmSWnjAtH5XcxGJU8jwiJYJpakPnh",
  "key18": "2u96BCKvi1fHSj6dVifofPBqVMVddGposiRZfNoNfm6QZdFTpr91xgcoY71aWDdURLdAi4cNUjLi8NAmZJa5pCR6",
  "key19": "3cwb7apnVb5EKoNoZ4w2TPV35ZGDufFNvNsk32tps2ewiq7qWYR4VBtxyKasxGbWfCTwosQvpCE2H7hyCinEYLJj",
  "key20": "3V2w1nzR4i8ModgEJwhVpwKu2VVqV7Q7A9Q1wvnrNw4R9cp4ZD2Z7KpNxoNvgCFWPxRXxBHwiDEPx91MQ53XvEPe",
  "key21": "2iQ396CxjMayEtvLKhL2GXqJVp1sXKWiQrGqpJYTcysxcfd4vuSjx1mGZVp85W7Nnw5pfRLi68VcpNqUb14EgRbs",
  "key22": "4nvdFWUJbrKuPYehYAx7sLCtnAcUC5BG3wNAXdzp33GC1MvffxiRW57oW45eLkTw9RpJbffwVyPafegULTkFUZqw",
  "key23": "2RGfzpcCe3kPUMUxhoeUBWnSYGkicaf7ynx2UHTsnuNUTYRUB73vAKezmGFZxsJo8pB8hSsq4nEBWUJfLwWUk4tL",
  "key24": "5HPxiJsv75AdDAUqXg6ymQ3XvCEV9qhdpNPedFPAJHCrf7DzfzcwsUY3GH2ZxTKPdYAg5ECojMx44rXvGtSyBGJh",
  "key25": "3vYeUAMrSxvib18BRwSkQ962ABByJetovQw865aLRPfsZHN6RL41EKRmEzD8vkzxB6YsZx7ovyLrtQycS6oiHVFx",
  "key26": "FRsyY32rkANyeFNt1MtCBSPSJhsmTALTA5BFJkRkVvNcmF4BZ27mYP4KM2mQWHuYTNVNdeCM2YxrjQLadbX1nq5",
  "key27": "zSznP9Rev9veposjQZREuJdLR3iF5rxd6JJpD5jD2RB1VUGLVuhdmjjySWT6GkpGxUkwCmBZEodkBztE5H3rzFJ",
  "key28": "5SHJbK67KDVEtmH37b67RoLnDEGoWc91B5aPgD2kGa9rQcEZZJC26NK3mUnY7wJTyBZYbDXMd29JHnk1KkheMX4u",
  "key29": "21LQMwxgK92LfMPPQ8WjJeTbMnTwdGreESxkwKy9CjBbtVA2Wm21VK1i4bkvd25GM4xZEUUgbJhxase3eKvSYo71",
  "key30": "AjFeezmnQcteSWvdtNSWzmiSG7nw46nksNoFifQJFXEN9GC8p6JGUokDDQ4bfV14aBnYJS685D2ncSEnyN5GZx3",
  "key31": "sk5hpnmZaoQzcTv7w7Jt9TbdFCxQJvh3sUde6xof5JbpR8ZaE9ernxqaVQaUY6d9MDUuap8h9Ecdv2eKFg1T6LW",
  "key32": "268PfM7WAGD35SkP5N9pzSshwGAi6Y1rgGe8S2Vjn2oYZ8pEh3G2BeeQm4MmozqoqPZf1ri6oJh77cxZy9cUBM21",
  "key33": "3DtfTjjZ41MKPfaah6N3u3pXd8wWtmzTU88pm8zwaU4KcmSfJTmgqKnQGyoWaeFy8HrFPDJ6jVer123e2r5ZYqkc",
  "key34": "27XVRFPXAzU5iv3KFVqiqjPVXUUK3EGWrcVsAbpS8gL8UfbkgxCF4RSpQfbRLU9GfRz1ZW9GBBumhZTmrpd9CDhw",
  "key35": "31D2NUxhBUUmS9Ec9KcFZpx62La33FPyXbwb4uUrhLBJ35cxnHMF7hmyrvRxaoKLacibtrjRoR39dok7J1VE3uPe",
  "key36": "4Q5anqM4xMGH4toeueGBjcae7PAiyTWvvNA5MVeqmS5C7BzT2Hw3acaZ8Vkctdh2psGjM4rN2k8fL8e7dsfuFkyu",
  "key37": "8G5owiELWFf6xXY7GRyux2Qj12MPf8Sihcsvr7Z2ZVcCbdyQgQp3ueJQfxjQoBminxej1CRmP6azGrTPejNZiVW",
  "key38": "SYU1A6cud5VmKpWqz4D2MQQEHuCadBQzxr8P1YoqUVGH9TKRxPPucJWxp5PvweD5dy6GEJBJk2d8v7rdMRCwp5m",
  "key39": "3hrEA4JHCrVGPDJmmF54repaEG3RtniNgnwmLqzpEkoC3ph4unxyRos88fHtup78eh5wByUfcsN4FB5Pa2d5E9At",
  "key40": "468i8V8D2VmDs3rVuoCSHix1PQKGqrVJSLTBCrpkrXdDC2GnN7noHCVXFBshhnvJGaNXZbNEkwwpHSH1pkhy1SkP",
  "key41": "36QGp3grro9fJnaWuCZuv7MmuDdBWfC8neRukzezuBD687YQtJDB7PaoXiYs1GMhPTUtqtRydBhHR2W9WpdzUkyA",
  "key42": "2hoVw4gyYz7D5aqhNtHCK8rAUyfDL5xTPUhFCjDzsnWYiLrY3Nq9NAaAUqjy4rWMxYiSfhHsX2AAngMu1bxNKMeb",
  "key43": "3ncEpqkRYNYv8ZsZQeoxq1EKubx4vZepvkcaYh2vUVM2LrmzCc4v6s9K8G2y6isDaK29i9Y3t5VMzepTWhEye65k",
  "key44": "mjeVxaTz3mr4qp1xNTpeycfXv9JDdxM199nZqpLQFjpgD4Y12eYPLoEaduEz3poocQBQPMAaVjKbbK2nNDt6nCm",
  "key45": "5yAuumnSbRZPPxxATU6vLD5Tc4sbE72jSxptiYGE3QT3k8QFLLh98yfecb7XX2mot9rbExnQ8K3pGskDrBo6RW7W"
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
