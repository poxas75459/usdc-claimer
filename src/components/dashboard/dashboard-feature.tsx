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
    "22HJSYbkvFzLsiTUB7kuJqVa2oeVfZM2mWejAQk3dh3ctGddmAP1EXMrHbVgcawZqrwQVxMzZ9NMu877vB48yw9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bhyCrBoRZSKy1ZmUrpukt4QekiJB36KtdndRV5AEoEcRHJVNbj8X8qEuRFaDxEsVC2CpSdcPRaB13JhNE4VCsuj",
  "key1": "5GwErbdWMcV46ro9oJnuSfBRZYdfiWbugDVyzrhioKWPSsjpAYzmzS7c5FcY6GG6JBzHZLAPBz8QH81dW1VPNTD8",
  "key2": "2ZCy8Udr4bFuoq6heBLoY8NaYHJyw9KqyoAcb6Xp6ZjRweLg2VGf93biQvCiz1t8jmpcvQetFaLXhgQnDmNpoQSx",
  "key3": "3NZMs7yAz3L3MuYcAmKkRa7U2iUBBiT4S4H9y3DVqCcqbbzcB9rSTePuYVdbBWJatudVP6bZHipRBnFZ7DGpihCE",
  "key4": "KMZJehKEkxkvNHqcmzQC5Gig21qHR6aWxo6GiQdCfP4bp96bTK58gnv1EBCRxuwqM6goPSegLp54VapdDxJT6rH",
  "key5": "3cpCnwF9NjencdDpN1tQ1YEYbhVus14RRZssKP8ws8ocxrLgSrrZtGFcA1jramxYcSmCizHZKGGLkvCfVXts7u9g",
  "key6": "3q3Cx1zUuiKHUi1fdtNLS8aFDMY7S7kNoBKzWMN1tzd4NEXXt4HwKVCCk5pyoFHoV6ZT5d6DJMP2UMCdd4hGc26g",
  "key7": "3dAadELBWLKYaKQ51ok75nnwmnMeKd25iKAmVCGg54R6h93rKGPhjFMtzxK3GMJS7ciqeA3vJBNDZKVTHQDBVH7d",
  "key8": "5wgaZ4mQ7RLFc5EiafVujFJB6zdLpb8F6eo7M3m44ChLefsc1VcrB9P5TKMMkGA4AmwL7u3zXuY1TQjki1NfFkc2",
  "key9": "64ThJhGDgn3odXRTt5Rw26SqUGMRUGeZVBUfP3th41QxEN5prPeqv3GnAdjjELo1xhDstBHZaoD5nPYD1XvoqLEz",
  "key10": "31pDkLJ9TjxWhtRHHFBzZvYjC6KE8vd6KDHCutDvke8maXenGbfPvYzePwbWRgEcbGGsTcpigSpUd7wawr1MXJrB",
  "key11": "4L9p1f67PN4pN8bwh5ZcDh3zXBUbHhGQCShHQS3fCYc7HMDQMj1QKTMj6ZUYqUmzy8ehPzYTqe4rrhGSJGJKECuZ",
  "key12": "3c4TGpt2jZ3bAvjw5zAiDXeGsQUGFYPSkgD2eKN4iAzo41tiQJ6JxLYByqmomNsARwdMNXh84VmtbpNWvgiFnE1m",
  "key13": "61mKNx4mx6ySNqLdcE2jKmgyZHNmZtJWQAZnhVEwBAgxRqeVo3T6rvTznNTBce9Rq9rePbhi5Grkd4ZSjwbmdszx",
  "key14": "37zZGp7CxVKsCqokSrJDzJVy8o9L82nHAbdmF9umaP6tvyto1X8fXF95FLLDCvsnzGpNFgYdSF2e8VQbietD67wH",
  "key15": "61oXyad3d6Fhr5YsH77ZJytLZKSXBPqd7s3rWbX3RMhryykxcQrGSXtoTqWYMRHBYS1nsEoHzsiRCT6KXrHZf41q",
  "key16": "631Pc36kFkMtEYJarDJnoV5UuhBiQADEMBUFKsiCEyAFfy3PK1oxWzngpJNGwVzCALH15AMnB3mVv3swVGqRPTCv",
  "key17": "2frcQT1c27rUhMoaxX3pX51VHyGtxjWwWUabshFbXffYzN1UtcwNxNmN6h5tZHC4akra8Eja1MTiAP8FHBNEpW2n",
  "key18": "4Te2pzTkbC7uKoKK5UBN9vu1KNi61ginHMCVkVPM1fpMe4uFBhap1vUgSs593NGDgcD2FxGDBhK92z3gWn8AYY6D",
  "key19": "3oDBoCMdbDpFpadHrkbrnMgaVGiCSqK9Fypiaw3V8HmkxeWgLss6oF1aW6YP7RbyzT1sPnuiUCsN6VziV5nZCogZ",
  "key20": "4jS18UcE7yXRAKEjo4XT9fjHmvi67U1MNkT6Vc2qyeqZmKhMoc9WR3FkVnpA77Cb96Hr6VCR6LMhUVi4rUgyMAMh",
  "key21": "4rVD6TFkRqZPxgpDtX8XDeXxX8WfABztJ6Mh3ENYLQfFUGnGAX4uwZEARKX6Q97UB2JRJAaS2VxBVsp6sWM7bmLM",
  "key22": "MtMwEgBHyV1xz2XaEW4WbXLEoGNXJi2BMygGH7wjaV6NtH7jTfZ6jczc6tLuoToh71r2D28RwmDuq7C8DjxmVzq",
  "key23": "ppJjusogNnWGJzbosJbEkcZkR8xcWpiYgyaG7mHm2sr6daGhCBkJ13wY4G7AWUtvqNBjbJ8zqzrXgwUwvzshj6V",
  "key24": "fBLDRKbU36xVZk96gYPKP1yLsoxBEQiCJNgGGAVUq6eBDADBRbCQKsX2GRaniHB2SNc5ojpbsup3zvEo7UpEvxt",
  "key25": "4nqMxp4naieTYhSEmqLNpCdE7GPQ8iwtwrdtbtYHdEbUx8CTi1W12PtRcwCFbnNNrnUZAV1cieqfn9ZRQegf4aaR",
  "key26": "28SDJQsygG8a3AMgwvT7BvAxTEnNKGwpa5psvcN6EgT8eurA85r7xn41pAHVsYddMXa8imZxvyRZ8ANGF5koid7X",
  "key27": "5q6j1zK5taM3WGTH5RKA6qVT2xGfPKLMpL1GULEjVUATz8CVJQVoxMdHse3TnKhcp1VgJ1y56XNkJ4xjNRxT7rHQ",
  "key28": "SfCx1xkEbiT76ABWhgT87SJS9NCkWyqKMcfJXWZbpsZfWwTdyorDjTiCaQZa7pJfY8jc56s5Qi9VhfpKa7bF8q2",
  "key29": "4zJiBBXufsg5oM47SPurfTNW9iqE6WwNbb6TijK6T4o7vHqrosv8zPtMBGKD65NmyBEJVEPyG68pLjiFie4x4SF9",
  "key30": "49LAn33RSyV9AFormkgppykr7d11SpwrLMFiJEkxXL7sSCS6nSNU2ZXr6XsT2Zjj9WV8KaqSffdA7jfMobyq9iS9",
  "key31": "2pPsFHTAi2TBqQqpaXoZrtSLi1Mwy3onyebqCUXAaWnTZzxFaTHjDRKS1LBb5R7ZfARGaxecndb2rxaG1Q1tNnSL",
  "key32": "4M8nj2Swd27JSy6Xu71M9FE4QhcooiknneHWFYGJgQZWvo4kMVmTkzrADxXFxSoTy27JcNH2RpmdYqcSmX2MQtLM",
  "key33": "pCqUtTZ1zpyaQMfsfrPd7j8C1AdBvJ3tMKuxn1TCWsYzfTeaLDuzY187NiTMjN5KA9WEFGPyPiiSdvywL5pHvaZ"
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
