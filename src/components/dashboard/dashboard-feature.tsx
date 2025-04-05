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
    "5kQQfc3oaWfbHHUkxWhEa8eo1Py8j3F1o1jLkTG4dFjUSQEwnG2NuxANQBQzpS3pAizJUhrKaBvbBesJcfzaPewJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L2LqcdJmPFNf62Jq75j42Cz2SEcznN14VvBTCMA88A4ddnsBqdvmckkgUXqqXrGNmTCch35EWf1eQfRX4cmVdG6",
  "key1": "3Wd8Y2bFby8iE6DEbrXjJpX7ESvGooKsi9cQaDvgPFB58ArYKAHUDNLNzWGNbzrQspWkwzjRd7rSoBEptpk6LJeG",
  "key2": "hQmYvVprdgU2qcoYzECfU3MWSLgWwucbHWZPeL67PbhfCiHPox9pYF5QbkKJQBXJMXvKqCgvz6CFNYJqH42nZiz",
  "key3": "4BB1PX71BVMxD6XkHbPNuDDcB9Mo9NCA2RFS7RkwDdtPuapZM4m2NpCRF3XcXzsbFeDe9fPpNiirXvRo11kMbTZt",
  "key4": "2ufUKq2EXfLMqNJeSgJPo7wmEKBWx3KwbMZQ7Q34i26kLqYM6XzcmMAuCU7up66vnwad51zmBDkuUkhMGv2dm7Ta",
  "key5": "h8ne2usC1pZwbhbkJkdaCsty88y6WfuJctK2KnWGichHq2GzjknRdNoPdFSnaVypiejpFdpUvS3WQfJYZ9Mbj9M",
  "key6": "42Hn7vutpE3NDVNgGfNzMkdLkNpYSL9K3SkLbntpj3vEYHFyKy1pqXtHU6HA3vz5PSMA58xBkhjzHyHev1CV7ru6",
  "key7": "4Ssc5vXrp4fko5aqYTfRAKQ1YMjP3e5vgHm9rE8wzF5N5XNKFSHqYbmzFzeqnN3sjJySt3L2XgBiDu1GJ98CxvuD",
  "key8": "9PEhya4SG7MFTn1QRLqWkaoC7zzuzdQackoKfeFP4oBRKSa15yEXrV8eRHJVtmZVHzQSVH4RmYNE2nLkcBZ75gF",
  "key9": "5rwih2PPaxzX8xK6gj8nvDcoxiiwgr5t6S5sPauKTpSr5XioFoaaXRRSwLRALErKmcNBP7p7Qh7ze3RGMGkpuyQU",
  "key10": "3QS6LyP9defPEPnxGnts8DiG7VdULQt3tA5Loxc91Pcu9r4LLpwZi9XckujGptpPqXmx1FfWw5b3aSjA7e1UgMif",
  "key11": "4Xx34ndmvfRfoKXWtg29XQn2bpsYcYbKWEm4FyVcEXx6TmWyLYPkxFierqvM9zhau38JhDwfHgzQrGKbMejAak28",
  "key12": "5wzbbi6MTeGJprx4LUJ3yzdvhcLm7GyYzXpf4mWAKqVK5mjpTRnUZyu2yFNxWoZ3choP7aEq3qNEaGQDUTRiNh8E",
  "key13": "4YJxuZpFeQZ4wzQWE4H8tueUzYDJcLA5WhztUr8EErC7rHHi6ZnCLuwK2G7JDaN8ELC6KKgEikSLSGNZ8SgZnHht",
  "key14": "2BesLoDWcS9FN17nPHTUZ7E9djSKooMu2EHm5kAs8NQ9hM248uM2PxtQq41myzVsCxGY71VQjaP4HAXdSRVapsyw",
  "key15": "4vQNDPABfYFrvixdeSYK1nsfGt3VNcNhBWdXS6wmhq9RmkwXtedMdjdzx4ixGCmgtzfjyMHyN9LqcPtfXx98C5P2",
  "key16": "5yR5Z5jzic4zE6ZHpyCe3qQKus5AYkwvqcDCmnie8SyaCUDqABRjQ87vvyAtAT6tn4Tib9gHkUgEtUueFGito7LJ",
  "key17": "53F3TMQSx4YuwDQMUjcF7fGjGYsSKzRBVNw47WuMvShjbtbFoJGzghgcaDrxyLYHhYcdh8j9UqQmGzvkdf6Y7y9w",
  "key18": "24BaTsdYyh2AqBcedZCMfyVV9Bja4ZZefD7YyJ2gCUSdd74vxZqB9r54xp4GB5YN7VT1HNmbH7n3vrKEqwCX2cxZ",
  "key19": "2CiLEmZ6LhmmmEHBGGGrgND6qAYtMnvuMRadsSDP2NGeCSThuohhChdRvPWsub6Bv4FBuT7aAiBFNGfuqS7c43uc",
  "key20": "5iVtutVw8fx5q7b12jfq9vqKmF1pCaGNGDYkeeL3DTX9eHDKUH92coGjkgYW35rMaSZEo9rWkm5qa7YqVY7AVrsn",
  "key21": "3LqG9TP9MtL2de712f5qSWnQJ1buX4SZsk9sRt8718mHEXcAU6WSZZqGG6rYxgFimSAQ899yC16xzCzQzSTTLec2",
  "key22": "3VD1yTW2tVv87V2vD4N8GYFxuTkCThVkGiUHR9KKtco1CLVPnN92iWm15G4WM2kiTrP9sMN74DSkXcjYfArgUK6M",
  "key23": "cFSEcBeTHGwKsza5Q5n9abtKFHarS5NDBnrVvsFckQUCYtXrmKkdojFEiRfipTqfHfnPMtbSPUp7vygpe37vdX7",
  "key24": "46ng26zgQawRwgzkzPJTfDsAsoNbRXfznTqhi1eb1R5XndRZ4T3KwPCNJWCSMJ5Ye2peCCj186oTzotZNWQLNuZV",
  "key25": "46Y9mfhb5ZqUpfsit4fBEFeXAQAKt8bMfN1o3m97jioU3GVWmU8At1nybm2c8bWzzHEG5PrmW5kA54gMv8DG57sK",
  "key26": "3T17gzoKWbtRmwQRX876fKwGcZbhMtWVq7S5CjHrkVvBa4o5aWVKoMayVToEcmpqS2Zqxpzmc4Uq2AW2pRo1goLw",
  "key27": "543XTNYu4ukbvARye7ZasRfUQqnjx4nb6LM87wXUvH8VFcrr6K1vx1fioUNde91tpuz7Pw7cT4vhr5mkFReyXJb5",
  "key28": "5qzGLvuopK3Z9sjJbp97fVCR8mvtvwokFqXmxWefA6aCpF5j1mALHTbZ8hBV4amruD1CXqEpWoWUjzNRZjuewCFn",
  "key29": "4LbzCGhDh9DaPx36mGdRxXNtTfjaGHHtUsCXujkF2jFS72XXvNAe8ecyVooQPHsKqpJfgTi1NXqLtj7ZkB2vJ2Z8",
  "key30": "3FPEj8BUqF7ajayxuBwyR9cuvDXcc4CvS2Vp3a8ZzWXrjMM8vaxto1DVqtvMoczmHbou3o9HUpaFTz5XYRmZ6T7D",
  "key31": "4wUoJCi1pLNWPPRvCBHK3XC8Sn9as7zTYJtNBzncEtHjhBYXcCaDnXCvWkP3eBnqX8UakEkEhC4AaKQUj1ARvy1i",
  "key32": "4JRsLQSPVCiWZhW86AdmQFdZ8kvs1XTa9Dtfi9yNjGqvNJgeHKy2oCfrXRgWW1AYJHtxeXDngFUYieB7yaWABpX5",
  "key33": "5CRCaqRnLhKnjWND4uTKiKLmUsSg2oZbj9pvUcrQn5q2HXJDL767KcwzJ7XFoZcZHJ6KVmSB9fJNv7UbrDjxnSb8",
  "key34": "3nB2uE2juJdnTXnjs4abtm7Zt8P2uq6mGKayrdeUuoGi5QapjE2vttGbp2xuNi8HFEvGebnWdMQEmFJnceCofY6E",
  "key35": "4Pt8rC76t819tMuj5bzxW4BVGekezmwyjw23df7gH1YuWKGPSaWYNQX3WLwFdJoRKskZ14wRj3mhBZLQcK8w9UVU",
  "key36": "4CR7u9EAS8A8wtG6Z3NXEWMCmU4z2grFT1SUX1tGViknZSaxzXxtxKkLyUDBkK6soPtNNPgZ8kBwsPAchVnyrH96",
  "key37": "AJ36wCVbk7rb1hogpmWupX3HQL7ksEXLqxpFBCnSAjC26o96iJh3DPQePw27ywVSBhdwYLr7qpk3f1jZwsf1J2T",
  "key38": "2ffpWd8pYKkVMH8KfcXeGhkBTzHFuhFZVwwANXogA6tvUNWPimUB82PwwdMMcBkkCAKTHt7wa5d8SrQ4U1iw8JDQ",
  "key39": "7Fco73vTAfdwhk7ZftVNd6bEt4XGhqPB6wEtmHbNDFALX9b8mdogmm4AiFxTPdRs3kovFbbAu2bMRDt5DoNTRPH",
  "key40": "4JRsuuAMXch6toJw1s7KEZbSn7h9Ji8uWVynt2xkjgLkLeL3xebL6HC6Ls6MBR67Yka6aE3NjysrpsFAa5TQsWfi",
  "key41": "5NwsU9sU5312ry1op6ho9ieqTVH5R9A6ZWEQY4mEaU16utc8xiLX6WanzLRkAS8V4bFCbGtyPwf2RiGa9VUaj4sZ",
  "key42": "1pVhFrDP7CdTZxJv8RP15kPoom39uhNP2eFeTeMqFUhhWBZxfnbjwwHUr1JahSUArzqDw8vUVFyj6XRHMKr72p3",
  "key43": "2gLF93m3AWbBbRWxdUKBEzJRQDTgKGeSmfs614aLXXhX5yWBourfNrCZdvtYV65xur7u6MoNx7Hju9dieY6Sn1GV",
  "key44": "LFP9WWG9nQyZ2yvvUuZXZMrZcjv9GUpQRNe7X3odSvhFw1KhZDRCqeYfbBwrt9njTz6Z9YBqpvoBddFnk2BExWq"
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
