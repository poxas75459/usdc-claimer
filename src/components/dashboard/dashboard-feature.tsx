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
    "NaNWnXiuZfc9SBHX2h2J8A5dzXGyD8FYb6rkdCkshu5PZ9RWEBiuQW55r93H9VLkk7zj36BCBw9my4RWk5FnUgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCQXdstREDSE6iByjSU4AGkWSjmC5m5zWt1VpCAQQ6pwnLnVYgbjtXLtTzq6Lqv4bsexfNCkbt92qJTmosnnLAm",
  "key1": "28p4zFh8cPNeNhDoB5qTiT7b2gsw5CafN4jvFRF8esJg4agVqJ6gcBRWFsnqDB6af7wjxkyA8ppiopgxsx3Mamu4",
  "key2": "3LYNTsDPpkYyjQv1KVx7TaB2EanViY5QstEQQEeFZXZMYJzBPvK6czypRRKaeVfW9ZctnRSAtbYZthcM1CyzVeN5",
  "key3": "RHmdgKcCTUFoNCGpNregcvz1Yjvbx3S7pmccjk23oaodbWVwbHtnceqd1xa8zvYab4fqd7mQJtEpEbKi8bLiTbF",
  "key4": "6583dAh1ULXUDUMexmDij2NHDr7pm6Vy9Em8KcVyXgtCQ7t2ukjcbmjg91qDWmtZMhSweePpRWLkCyL4fw9eebmx",
  "key5": "48uoMiDLd5mPpv2fh9NYpbzMZRRFZVAbf7G9pyMXeZPmtnwxhiuMzJJZAu2QChaCLEbXFzA6nb2ubiW9pTNdMstQ",
  "key6": "4PQiPT3XoXDpXq1cdQF3UjcqmkDJwzXi6Rdw2iKs9fqT1JR3ocTubd2XRD8uRY9m8DHroWsgVRwnXFrMkzJk68Yt",
  "key7": "WMs2dMF1U6HmoXQ5ZfUddY7EKKGVKX7PPBDTx4T9kM8TaqpkeZyavJaTpBEhXX8yRe3dfzXv4XxvEtux2kyA7wL",
  "key8": "2kJXUGMzWVMBXHhB5NseMfDZmrfRpavDdaZwsNnDZTsrZzTBu7dAL62kz6UY9mR6tNgL4cJ7fhFye5aaqu7Vr3t8",
  "key9": "47v83mU7izHBEaJToprBvK98VtUza93pNDLPNQDjcDaPdjAzyU1XgiHH6ttbRxpVzJ7GBsYADnC4AMr2znZ1XKFR",
  "key10": "5PaQMuAX3cjsirJ32vSZiudruviSu7rZL5Y8wtNjQ8fLir6xNnpGsxDgdGAWUsuwk1reSyrCkKHRpGC4bzBYSKz9",
  "key11": "K7nhHwN5rtwn98TmDM2CW9j3ADU3mWxrRqzbrhdQfT1dNw9j4zPoPahNUdFRHKpKpLnUpTcgLVqqavFwNiMDAw4",
  "key12": "5XnxbycZSwjaK63LY388mFo5WcdTrghhpbuDHoVWunpssc6QXG6d2t7CoST8TE6TwHxBwPTkpqAY3sKZDBrZRinW",
  "key13": "CUa2Y5kzwYAG39umcKmmZ3GXYvG2EesprXS3n8evsQV9F3j22pc9oLQokfvkG5TSWNy9GRwTq5S4ihkVzHH4dVd",
  "key14": "4QRorhR3wsdao3LHe93NePYHKqNoZcHECmu1sPp2TRgB5T9XyXTNv4ycFdRYHHKZhscfZaRKiVniBb5CmVVHJ787",
  "key15": "45qmVfb5sWdX6Nwi5gzqEo7KQECYGhSwi1JqE2DdDBaqb9KhgRNAEDtjb5RxEkZnudknDFEnnkT4r4nCKfxzpnac",
  "key16": "5V7H89WdbcgENfTBhHupcozDet7WmuA6i4Q3WwUY7AGvZEgaYGfatJoFRn5RLTy7owcXdrjkyXqefWvebK8Li6Au",
  "key17": "7BVVuknuKU9SNjcTMq5uypg4VmREhhChDFigDqckf1dg3TNGZFSPqq9G5Q5a7CgaUsN6Cqn67446FeyhbEYsNrG",
  "key18": "3Cp4d6DBPrdogSyo7vewGVayHcaF6Ft6pWcm9MEb5AhN1Lhz9KxqPr8g2XS8a95se8oqrU3fTL2rYbMSPyipbqLk",
  "key19": "2FTGm9ZiV1BtEv2iiV4Q4SR4gB9omu2drC8CofWZGbmiT5k4vD6jgdPpNbj4TtrHpBhtYrBARth92hvU5gPcrGXd",
  "key20": "4cegyzjb7Bpveo2nMAtvoGpUFoXvgHLUAnt9r9mHzdChG2fuobjPDQKknoD9ErW6eLKFa5SXsRyhoPeUs3uWCKbV",
  "key21": "38JPTbGzgGXQYmng3QqTBsy3MipomKMeM3wsoifV69Kh7dAHyz8rhenGyKLR96sWpzHkHk82uWF8D2GNCM9Ye3pu",
  "key22": "2CmnhhZ2Xix3brdK5oDU9Wkp88UB3fWG27XooN23Jh4evhi9FAahN3L8y8QedZQPLsoyL8JimfLaTamkFfCxc6pt",
  "key23": "67WkjXZXMsLC5Jqv4tWAH8A5Voa4w4sX7zyYifmu4gwPue3HQm7bokcEhwh5nYAA5Kmyk9TDMYJuigzoRAP8avvj",
  "key24": "4vCFhw3pVbMSt8TnEM9z4RkRkL6Qj5etPE9R2ejExy8GgHEwRxKkrG1PRQVsVpRBLeznVVNangvKmPReByNaM46W",
  "key25": "5AxKhP9Jxk9BjAidwECAqJa1DknBfdYhv4SveoFYM334ptDHQ2RBZEgZYSKNzmUEbfjnsUzkdZ6xUhvbuPyCYnGF",
  "key26": "3ggoB3RwfMuCS78muvim4sSoPJjE1NTJLENpsNaQUmVHymivWDwyfJmCwnePCpoNLHweDPfnrNeHDguQnKGZ9Byv",
  "key27": "2KYrwXB5V3AeWwqJyzAaW1jeihtLegSoAZJoGJQBpd5GW8geLTxwthNr1iqEz2hj2bwShZDngiqNE6eHZB9papbb",
  "key28": "43hjYjpsMfzR36BUs75TRmAzS7XaPGLr1ecZo5ttZfReG4jcnDR1q6kRBfwwoiiZ9anpdtBFZ27rpsD7CvwUuTFP",
  "key29": "2u3JbBS3KQcdq18FVQPc3h3sqzQaBhntCrbxPuXVALSDhtZgGNhRukd7gdq9yGkdpBFuH1FgCBGjz4wWr64TBgJp",
  "key30": "3Uwd6SsjRaoE8zm4FhTHL7aRF9J6XAF9p9vemUBP7UVdsnYnnDK1uZSDTd8GHy1smCMMvAu8evNgPHGYeLfjJZkA",
  "key31": "MR6mLpEfaxRfpjE6hxU7pBVUADyTW9AF7J62cUDQ4Xk5S4A5YVfaNjGGT8LCTWTLgq4UEDseTtsJBetaXZLyDD4",
  "key32": "LJNYWAwxW7moXLvgNG25QnCx5zQRYLapH2VzXDTjUMfCA7fdciuZ6VvrMjQ8bZrWp2PftrC9yaLhdkZPJTJrNUu",
  "key33": "3eUa1HfnY4HVv5UfSSyEtU1JKPznqXvkchpwVgbRRnqxmEMi77Jpf1QdQsLaVomzouSafwH4VVTqmD7oCS9AJUmS",
  "key34": "kTTKLu1Wsq6LGEzb1tR8VpuiYCVpUX65WGczmnPbFLXkQSfzrJWYHXAsYA7JhLpcGRiEqveyH9bFMaAVTAqT3Yk",
  "key35": "2AqSBdPpx3mHsoRGwAibEz7r5MJGasEb5VMyESmdDk99oX11BE7Uw64QaYF446nW6cpLX4QP6kd15woHa8qeXbBS",
  "key36": "2J2z8RHa5ZQWsE1UXh5g4YW3jZnKfreWWq69YsJeBMhcaKqs9yhNw1KndZNU4CiVjTMrxrSsoatXqDeeamtzTCDG",
  "key37": "2QtHNfqmgduHT4UM6k81NXg7Qik459n6yrgyHQekxr2S1d7H3aDk5r5z7vhAWwgDR7L36Fat9gEj9eQmfCYrb7p7",
  "key38": "24yD8iRT9jeZmyUFYJ3FCrn3EQuR5T8tCJVKrHXBfeWE5k4crFYJ9P34cmUMmtmhEYMSv5mRoqEKMuHn2QAs8251",
  "key39": "4mcgUbssaiyiXTdjACVoNWrY7awrEDZCL182QSuMjWY9vJvxjNzmKs5CQxPHbeFk7EJmT7vK2jSqoyTNDWHJF1ev",
  "key40": "5GsiPHburZS7WkfBpJFfogw6mufhNU6nchTLsrY7kq8Rc2m2YfvcWqKbvu87UsXTSuFbZ7kuizBSYwZbHovBnCUa",
  "key41": "4NQGf8F55kYQYqmZGLfJf6drXUdUT99uDMZj5V761UiSUV8d4u1Mi1Mt8nsBwosJVY9Eq6fNcKJBCg8uzYZgXVaP"
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
