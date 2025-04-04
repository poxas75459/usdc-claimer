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
    "5KJYwTA15vzUjy9bBNbTEn6sD7Mt8QGZs37E1z2k6wFZQTkX7jyWN3pGoTXtnHSkEnLUbZzE8WWmeLUoQHj6xAsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xGpuovUa1TbveodMyeqKLyAn2qqr4w6kyxW4cfLUcQs8Rr3p15qVeyepYcrQvaXV7gnojgu5jVmrF4uwj2Pvu34",
  "key1": "2n9YQs572bu8STJ5JbRVokjgrZR9p7DyLLeqoNztUJ89s8n44sLNHMfBSVrZsZWamBP8jQrLPYfZfkbe8GL4E1Vw",
  "key2": "4CWRTXTAdFwmg6uPTKiGjt9rLJ2958ESkaii5LkwLDnFMRHpo25e9h1tFWKeJ2DEeUusMuUCZ9Qspp5321E85Xws",
  "key3": "4yr73i2zVcNVUAex2zftETcXG4L5NE7yCJTvYRC5KGmYmfw8BHs4fqYYuN7qmyoz2vmU1ftrJxwGJVXb4tiSiLdx",
  "key4": "2zEx88kKvgSvAXDVaRy5WqTuJB9QHc9SFrh59MUucFpcEGzpfuQnA1yHwiG178FxbvaihMiSaEXYLzMS6khZD4PX",
  "key5": "2C6PVb4uZPYFppVFiRQxXY527rafyHhDm7buEJbMF4QgQj8e5yT2hCaMDEQwB1pXEcPosSQaFgBzfKL75FaRjgYg",
  "key6": "4MtyAcnx7LH5bJxJST23Q6p9oeFVkniVFaH5KbBP6sQgWYzEasUMN9L4JrwJfzWxHVECmNiyGdcqXuRyvQsbKkh",
  "key7": "5Ux6YMMB9DCvwVgvRnHyY3YJw9gWLHoH5JpqyP4YHim6FimEZJtFQ4DpKARdqDHszSTvEVDLK5KRyedEimayZREL",
  "key8": "5CwKWpRy7MXRsHXtyPLSjNTd4QWAp9W3Fx1fKQT1Kx1p22EFw72Xgs1d2ZxVDvDfMEza3pCNqYtNMtXWJNitzKhC",
  "key9": "3PKxejaDEm4v3ijTAVibEqBCSF2MYA3CEZqoKUVJA331WFsLw2JYb7GKfGkNTih2UcAaVrbvPXHrKGamHNQ7v9P4",
  "key10": "3BEBtFKxFmPSVEz37ry3A4g1RyNAFyMNKDV2dU9PhGrqXDgFBwtCprGTH6vDcr92TNs1tpouPfcGKu1Fud9xKhBx",
  "key11": "2ZQWAVQfWysaXCoTsmphjBcAbTLMqX7Xu8UyoZ3UPCrPsiZSJza676uFvfNNcaVJUs4CaAy6qbzYMgTuy9BK6sxA",
  "key12": "2TG1xwqDya4i7GfcayZPxm1t321rtotQkAP2ZKmUwEHPekLPSxCcdnuySbJnuvWZnBuH4z7TmvXtadfGmHVFxkX2",
  "key13": "5wh5zG57fTnSbwHYJ1LdBNP8kGGGPCqC9vkSZySYRm6WPEjnpR7fv3SpydxvpWSarwT8PaGkD2G2mUZX4f8d88bX",
  "key14": "287nDzR9ucrHXzMhL8pVJ71V2YMBBMQL8tqwCiSxLAFka58ik4YGEZDxQo4cQdru4LMeZhMaZLgGVqPpVR3mXLD9",
  "key15": "2EWNwGw6H3Pn5jFQxVVHYtLDeNhd9gBLbca7fjSbAGCfN7Y3adb4W5TgJoQ9HME1BR85HTZxVJQTrWkBwLYPJnhk",
  "key16": "26nzSdsCidNBV4h2cap4vLiRbha1q5zK2rWvf444hNb7DZcU7v16nwhW7FMHzcTn3m2hyeLKDVpqacGfh56VKtCS",
  "key17": "3PQ5f9ZcfGhzoSEjEU3nJQkzKb5VjtLj3usU7v2xUL2gqzG8uA8mfbzoXCYUNBvWe4M6UiU3B7XqgwZEokQuY4Q1",
  "key18": "5tfJ7YiVgR5XABxLNXpQwgSrtMG7aomsv6rh9UvLRKJ1YJQgbMi5Ep3dXfLWk7CLNyYHmyyfHFJTgAtoHDZnRAGG",
  "key19": "hRX3A8aQxNVaxVd8Fdek9HNL8pAunonXC9GMxjp2jQSGoAwCuKv3Dh3jyXRULpuqJHaAW9j7Eq2D5nxNHe5UXW8",
  "key20": "2FZnTFSiRz1nh32SxmjfXiC2joCgA2oaJUBYVcZjitFr9DKh5QtfzrY5SKT9dKS8mNmWS4h9Eer9TM415uobVj9x",
  "key21": "5DBZyyX2QTtrRdZKFQDTdmZaWji3PJgMN6GwK7o8s5LxEdFiLVLXtGqU3zzwiJ6vJayLegFrJPxCf1BHtr9myotk",
  "key22": "rBg438Yrkxa9QcMTjucjhcXxEYEf8f5LNotr86jKX7khvPqLFXSNCWCZmzH4ZSh8QvoGJPbi3qpr2P6DuvKTeu9",
  "key23": "3e14tTeqPtRjY34CGoRH3PYBjzS9EounbywXdgB7DRQ6kskue5s7tquMV6guQ3vCv68F2nWb7tGwBZuKVvwxsfP8",
  "key24": "5MLgPBu4vyRwzxsUnYkAJHRNEmgjGUkbnmLKqCbDF1forWVDw6wHsE7ZDCfuxJKAaCW86UpDoZ338LuZPH61boC9",
  "key25": "Ly4gnh6L4cxTXhaUYFYzeTrJxxxvdT8W9oLSazxd2dQ3WQ1EcfwTSozsj4S5CP16J6bKNkiYBLZnoRfuUZTnPnT",
  "key26": "5Y7Qty4BedLA11XaWT1xevdc4NuYCGNAtQcbuNE7ktbddoj6DEMvtLEBh6weyoeZwFqbVDCXEpJ17sJayfrSyV5v",
  "key27": "4PuARxnSNj3NhJK366tRx79kd2fJ8b4kqFkL93wrbPkE6Ff9hQRU8qgBamDTELCwN7EY1TAGwQ9wsym5zZ1fu348",
  "key28": "YEjK5NmZHpfpvaBpZbt8BFbzV5abbtc1pzWA9Ygx1EkcyhrvArUG1wK218ykVpihjsTrourF3PZHs3L3mXcdhN1",
  "key29": "2du9oV9DD1sSnFSpAvdktBWMeuRe9849hnHuZC8XM4eMGzyGHzvDRhDMxgSBFSfY17MW6HY5u8N5M3XsJM9pWHuK",
  "key30": "49vC8XqjNTG8YGZY3WYM3Gv9msBrUhjbpwMsYCd9dbpjmEAYm7FyPg9wow2tdpjM9Ha8Z96dpM253qqwxT16CHR8",
  "key31": "4zVaF4iYcoXsfYGcv114tQWyezUZ5SQWjUD6Lz3hT5PJEA6f2KRU9xYYqfR4E81wr5EYmGiqW4UBTyUT4xWtqeY4",
  "key32": "3Y7k6fRhBsQkbsAfTo1iKvqgLiz5XdqvfU94iyzuTxTtxzbGp4fKrigos6eMqMuUrko2JTBSMhUR4f1KrqX3AbYc",
  "key33": "nvbTV1Jaxko74s5QXDMRXRSLdKB3YYnZciyNrDg4LGzJw51nNqxeHC2bbnkDwFnGP7NM2ADcE5FBb4NgM8eKeQ5",
  "key34": "4H29SJwPZdBcJbesr1ugNGfBnPxWfHrPiWMra9ePZZQvi58pwagxBhdcbpWgJ7mZpvUybL5xwBW3QshCoqJZceH1",
  "key35": "vrHmxGyStJPB1p12KCnh4SUfb81QenBdZiQBwhD1bgdDeh6ehsEHTWJTb7uhM9cZX9jGD6oHUD2ARYgDUsbCPAs",
  "key36": "5ym3BxAfJa8gxsVkrtKYTS4dDEJAuCtg9JoCrZCeLawgsfyjo4Z9n7bXGovEqGmDRKRoBZfmF1BpGVHMjmqQ7W2B",
  "key37": "423FBsZtSaRgZLyjvoLk4H4SySBRs9xxvMPbh1GDGgjtTpDQTvvvDp7jsxE3y3oh8NFES73z3vEVvMK2FxCT7iGA",
  "key38": "3srYGXD3C7pVkFVbBCmn54f4eNLiGNEGbzSuLeuMN7D6EU2Y2xKsudwC2RaVNBChDQ6x1rHpM1CsQeacaXeHQ43f",
  "key39": "2bxQWdLjbKxaQrFnSKhoGK2xBg97Bxef7DjBmBggpApSiFPbZvbZTRiDGKZfSJApFcQPwZFMzVJ6Ktg9uNH1FTt7",
  "key40": "52LP5Xga5XeWwZZu3qu4QfGERDZuSQqMTG1Mm9qRFTLvbnhhzo63e2gbxvvVDe4osNKNZ22C6drhB27jxESvGLsj",
  "key41": "5d6rJJQZhTcxCCwPPymEQiSqX78XF4gmzCuRbgyL24wRMLgvpzrsCiudBQgVysc63XBRCGKPAWRbvBqepmUHcSkT",
  "key42": "26CgxNaS2PTiFPCDKfrYeRSET6Q2jHCunEr7nGud3nfBPczSBVTamBZvzyzj5i5y3SgxfRcJ19dUYSVB5ZELB43B"
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
