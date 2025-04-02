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
    "37ZadMpKussnjk5vLxDzqFgtaSnpBrSQfBM62dseYUPn4SyYZzoPgX3QDtHo2ZdK9n5FNyW7w6KNPJLA2Srnt8nD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8yq4aJ6ytqidfAH7BnUeQbLRkcw1xgdkRkBA5d12EeHJnAviZZo47hHsktXWZ5QrFqQfw3VbSuPfjDk7aWThP6",
  "key1": "31v6d4ChiyVCZVCPQ2sQ85LEzr4YDf3Hm1bTgEZb6QHGSh1Sq5rHUByYGhJFoHASiugy1FdDzabVRCpcBpe7Qe6F",
  "key2": "2UnjsYtcbhCWhnZ58doswTWcFHhgz8XVVfk3S17BZsJL1urKVuUNYM8QQ1L6N1VLWkrgjdQemmCNH63bfm56KURH",
  "key3": "2vdYi1rxa7oAN4JtVMctdTZ3JrwUEW9VRHx6wtPoaU66MWBgB3x5R4TtB1fCX7stALGAkcREKWJhTcF3XdHedLjR",
  "key4": "4rcXge9mBYNe6cwrSmtw8FsDMTyCrjSKXC6Mxb8c1M6JN7HV4bMpJahUdwSNbBpVNWUs4hvayEcMyiR1E8mnSxSy",
  "key5": "2j8SqB7yua1ze9hfy4P5Q58ddBCbbjCLpxxUNviF7bugzmGWAiBR8PLpxhQapnrA3zukGFqsJd2S4FFNyBC1u8Gr",
  "key6": "5WcQNbdE3Eu5E67h6THAwpGvzSRzyV33YGJxAsn4kdWEiPndELTUnQujqGz8dS2Jad6JYFKnCsUtTicMb9U5QzG6",
  "key7": "5yfHctRcxFrDDmUWMoSYZW91ro61fW1jCY4XzBVhBCmxWTiN9yfLnPRf7Y6VLDtLxjHXGfWs2XZe2Q1gpG1tS92M",
  "key8": "66szUjbqoX5hD6q5w4AjWz5VdkiBjG2LVgVpFaLv95CxbDFXmr3ZvqEqZJL6DtxnV9pNopFUNrBJsM8sKzsYngch",
  "key9": "3uKPrVD7CD4g1PijRGompbmuaWc8miAtdPNC8gdfqJt3vYp4TPcCR2eRUJ45JstJtKNdH93pGPutPmLEFFtYxphC",
  "key10": "5NL12ct2GsnkHsVGiNDG9v6nGFy9S4Rg1BvPhkZ82Km8zahcyMdcY5XEqtSDQNmFRvBXqgjEkBaV8PxUT6qxfm6N",
  "key11": "3cPRZ1zM2mJchdzUeSTvN31Kz6Ri3SxRdGx6JfHRZ1FBfDV7GhKxarAenJGzcAAUCq2iHMz8nLiVRNWCjZ3XiA3z",
  "key12": "5NaYyma7Ayae6icJXNjaK9egBysJGVSde3hMKSzrqmCvJigFumJQCDmiP5b8eLX2UqUmbvUv6ZkP8J1gzCNUhqgZ",
  "key13": "4qkgnKQAL5ayaq9KzH2VHZMGqLgtUCEp4vFMFT9yY38oQhZhW7tryfiuTvdyuUf3Q7Ad88dwy4BfdrY2YyNTXrbS",
  "key14": "vkfwUmH7vcf4UcJKcLnBFWDtJwYs4q1NwuTPRQdoaGC7wvDd6ryw5rWuQtq9ZCYvgrxJkwu1b9hRscFKqoVHUg5",
  "key15": "SYkqgBRgeiWuosWUVLEX5rMzxsBYqNM14HWhnpCXd3PNUsBMwTxKYLfniExvZbfEXCSYTRL6SziKRKKZ4pdJYyx",
  "key16": "5t1uXMD6d3zDFsH1ySqWCDZdTV9qZL7idpCSLE4zgvwGpCnm486xpN4BnMrhYRRJMBwJwTG7TpqjzxbwcqYFnj2c",
  "key17": "5xvbi9RDQrzg7BbM62wxfNQvpEFxUHTq55yjWfF6H96TsXLvfLc8GnLiPH55uLJcwZe5wjQogSPqUBZ5gFPrcoQS",
  "key18": "5EYjc4nWaUtcLpe7ohU7sBUbXbQUHxaQGyJYvD2Ww2At8fm8N5HNdUTuK9zgxsD18X8P6PgzgP8vyxXdYdXx7R9q",
  "key19": "2teLgGAwu78fcDwHNFvPU7e68acmQgevGANPYgJR4B8DJLRnzF8p5fGxSzzPFMXdncQBMmTsXaJdqK78Q4JDZTmT",
  "key20": "PCmiTJwmwotT1mmpRbHUbjAY5mDaT3D5sgJqQ7AT37ewu5TL22rd87FLG8tKakiPqtf1ZAjxpe11Ys3c9385wtx",
  "key21": "smsPvh7AokfPHgWLgpt3e4MTUi9dAutjvTuRfvKbfoR25LNk3oeZ1Cbq2cZUsbJKfm37mNUUduuQWUmnJJWeYcz",
  "key22": "3tfVTwNVtDqrJpLgPtrEnG9m2sFf8K3NtmZ3dE83wZBRcP5WxkcF3zXs5N1MVm9LTquVnJFuEyUPQ7z8HPR66UAW",
  "key23": "31C7uzdfyE85x6Cw9eK5st2bMno4JwaHmttrPxwJkXdvQrLG2cpQNV74fZpRYQXoWqptkGPjDhqvxyZpCCiYyWs3",
  "key24": "icLiL56RYVfPyov98CH2cTHZDPuq65DN63pwypiWeVu6oYaFpvN6RGobkdhZe2rJaWCsZnipoN5vPkXGfNMy6vi",
  "key25": "4HEmXnLm8XFmYmhynsTS1VtrhMjXSEUDDAzRcvmBNT597VBtF5W5MnavKYNLenyhaGfqdR4TKEaVYtmycZNMcsBR",
  "key26": "5zD91XDk9CocutfAV5dw7UqVs5XnyuCwejy7MkBVZXK4av1q7s1gGa7YuNJcqUuF3DV4Y5c4iNrFaKL5Hv9QjbHq",
  "key27": "48dCqoHsLekvkygtD21Ad5ET9Vrcw8oDHuR1EQwdMbDiw7FWLPdVzzDqCRi1yqiYHiK4H9YUcL6GBjj962L3KmcN",
  "key28": "3UYztuifcsivYKHzrnWAcaZShkH3WQdG3JAx8ak17ynMdud8ZCuA2h6zGXtcDmhhTqgYcG8fosHbqLg527N9xJJC",
  "key29": "2z7YpdFVDvmAQ2quDbRiDEct6BfpFrhukFC6u2Va9jRNrVVRyQtRLhWy7ZyicAYNtbQpaftYa3j31F6rtJfzZG6p",
  "key30": "64t5oWkCHBDW3UKhWxCwzL86THgLAwKoHeAuvtSQe6BcFb88gTwFU56gPYoGERKWUxdx2P6bjbvvD1sbopiyympM",
  "key31": "3HwpY6qKAZxtJJEsJmXSuDTYwakr7RnBTyBAgDhbjoboHf5GtFBwvjYzJQUUDZdwAMRmzuYetwk6Km7xzxWaKFpB",
  "key32": "a86cVkXbxZ8grFKMgfRmGpKtWJ1VeZYmkAMDdThv7ZtuF5ttik4yc2sjF5JfW4vSm86m8uN8JEJmNHhsphuFV6y",
  "key33": "AQJNe4p8XBq6AEmvGjX6iGvJGUtJgtzkKPoQdYqE1SZv8cGeKRTHNVY1tUVkbGbjva2NHAeBxyzS8dfD9oo6d2D",
  "key34": "5GE1DgegNyWsxxLofwt9h5h8CZLMMbPjGCcuncsYBkLHWxYcFUkfo8ougQS4jwoeERa1kfe94eoUY28TLW5ds4mG",
  "key35": "dTFZ8ct7qWoGTQFJxSS3wBo85zMabEz4k9rcS2FeM9yKGsGY24LpD8L1DorjMKGCTbrzeBfwQNntDzFyYTSGawP",
  "key36": "SCZuthsmEJ38VYWKhpXDA3drj5c5BdvE3yvAkCE9FxxyPMx1gvRCdGwhiJiW4neJsx836DtZvkzLqrWgMj6G47g",
  "key37": "3xzbttPQ1L7iSnKdiZ5CpBv3zn6RnUaPsANH9JdUVjmmekNU67E7aeiX4EV3HgbsJ4nQS37MgGp4p3XuYf5PEv7e",
  "key38": "FNUHKqT3ezVsgsLjYHwnp3dPgKSJyu9CX2ivMXY1GhUebGWjgTFzHVdUyyhTs4jjQnLDtdariwSiy9gWkPH3gpW",
  "key39": "2itTWFuvMQYBSSmTseNzknZcxohLu1QmR53ti8QLfRAPmHJUYvAti9uMVdktLKSoYyR6twmT9Ju4x6bhTNiNC1b9",
  "key40": "4VHwMfPPB6vKNR91YTdXwoSf9TvEiUBcXc4aXFtc86D1NVMJhxKGMAXnjMeRiAhb5sxibi25zkWdtn1JeSqSVbmP",
  "key41": "2apnZuXZprnqzPv4wNukt7RQNazD1RGzSCDmiEqqaHnmVuhj8FgSinPoMhC2Tv3qHt58mTsMjMXa3QV7cRKMDz5y",
  "key42": "2DFhpK85kUesYa4Ki1rdvDMcaWypLykZjh2eAPehKNmmg9SsfwDvGJpS9Am4t8FVmbPaGnUy9R6cSfyKYvd5Qu39",
  "key43": "3pwdLafTdmTyKRfw3vCM9m5RPra5jVFrLKbDACejvVDZJk7msWF27G8Z5AfqtX5sZ5AAE7smuQPRFSNY5SkueJZs"
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
