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
    "4VG3EVxfeyALmvj5JSq7XkGjWrNqJGyRi57vq5MJesXfAUYodbyszjQi3HokRqVvRUpeu34su4wDsFFx76cY23rX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29x63RyerA8TVLNtNKiegw5dKgCB3386bxKSwG6AsKWHzdDjk3hakMiNULLCyFfJjr4u55Usa5JJPkk9o1JUeQAF",
  "key1": "36eDibYwV4aZ2Cc1FWTaAMJMMCXtb6efCHFNrZj5rhTXhtMC8TWoY6TTvrY4Ljom5ZjPXZJT6BawiSNTracA22Hq",
  "key2": "4n9txv43RvhhsQHUBBCL7nKfcNsn9z7GFj2pcgxzCYcFJcoELSy8x4MJcqp3GFtiZNp2Q3ophkfLkSCP4TEznX4k",
  "key3": "kWKvtYexqvSRP4Wby3jkFC78EAzWyH4ueinGEh5MyEr2y39sE26SdoZoRJqjyPWxGLtjJtuS4eUphSVpN2Qbkh7",
  "key4": "s6fKFSS19pVB1Ma5o4eyPXG3xFnKS7zsRdW2dZGCqSu2VaxaUV4KbJVFdw7D4wCZKWwnRSpZ6LF2KNTHY7rLrCB",
  "key5": "67FSZkRHBYapaSauAP7BZ6t2s6ZAgaEbHtJJYgfb5wYuDoumisdujqEmu8kCfvyyqQ2r1ygwLtVggYUkjrCaZNt5",
  "key6": "X8vDKZivEhjEKTmKST3V7m1WA7Ks2mnJzvoLPwZX8a9MgQSQnWF9HxkteWLjSSaWYX6BzC16SjFsHkirBoFkvvp",
  "key7": "5KnMeiKMiFxX1B7eRBusRK7AEUpCPKMhXdeZpMA1YV6Gqb9FoeEfLSHQtgcaQsAhirvMwtdNTHd2FYsDyiZhhicw",
  "key8": "64FxtzTvS4Ra1upRUjCxmBC6c2gHjbGxQsJG2NW5wkrdU5RQraCWD3hqrYkyvTL4ToqMGDXKk58vVGwHPZqZRNLP",
  "key9": "45nQyoArfN8zTC6TrBTHWX6YTjnsez4kNwQWqy3y2HuP1kkVJFwCG1xXnVyK3aitdarFgBtNVmEJ26ThJ7vxAWwX",
  "key10": "2feJZjvHrvsKV66QCZvDYb61qJVrmZGuj5Lgpf5yM4FwewioX8EDP2EfDc7US2eKEX8vEkqbZz6tHYerWBfSieM7",
  "key11": "9zmWwFSXSh6dMXz2ZwYuHtsZ9WwYkX4JUxcz34QvgRGeMy1DTisoAiP3pwaD539VfFgiQaMmX6nJybmx8tk89kX",
  "key12": "5LDB31xTVhQV3wSTfSZZZjaUsTovNYXHk58tJaAT722RPAZsNCtp2dY66xYd6fafisymxeTHEacHxpcVm8kkJpJD",
  "key13": "3b183nF3Trpgzn7f7CjNswsDEqNrSZCv8gjsX2x989jVnE64dHNAs6FxwrmpKtDXaxQeojFuYt69CC5N2ZLXAsiF",
  "key14": "54QnWvYm8R97WqkStG81hYUmzDEamenQ7ibC8egTZP66UY6LEfpT4KMzqp5jZWyfBbpjYgLGfivnSYEUtJJJ7chd",
  "key15": "QEWrHqFuSNiLgUf35vvrMuGzhcyyc3yBkX3zgNRq9ARCTkp2Dkqzt1P5UNMeEgNygHL2k3vmL8BxbgWaevyvCDf",
  "key16": "5MzqmcC9LAvtoHNWjArPUMMRcCjcGya6AgPuHBXU7mjjPcfuwxfUfNH5JbbFi9w6bzd6sSVDGAsshVxTePiMrCrP",
  "key17": "2Qq9cQqWF7HMthhAr7fveYusqS7P57ktziuDE6sYPCSYfEj1Kz2jzr7mBjP5BbwMPxKe4nYFn8hVTKNRHnnuopnS",
  "key18": "4Tku2vM7uKJoQvqGVPn1MkAMsxmJYgCC5xvFD8t23N2WVxRbJKdPGx1g5aWx85JdyVyrVnA6WUxWi4gTiSkEAVdS",
  "key19": "2S6KCb7rH5hYfeTdHwQXbYjzGE3chQ8vXFtH9HsRaGpPWHD98KodAXXcbGtcmqX8xQhk28VX53xwoe1TAkEp1Wjh",
  "key20": "3rW9hhF2xYXQgi3qqi5Qmiukwf1FHQgvAgbjogza58c5teGL3BGr31F5ovyUUt4yaBfLHEdkhkKcvNJA4Xhwa2UE",
  "key21": "aWcP72nnRScAG6fpmVt4gQmc3nWT37H9WyJhG8e6B7r5bSkxwYPzPtweqJ82wNH3oKDhmmXmnSKfyzttZqz9Y5m",
  "key22": "4FerMTg2Px6oXWniYikDyo7D8i9ahjNJCbibouQuvzEYLUjnjbWSis6MxbrPGbswBf58u2pVu12RAdH2PvcXHhig",
  "key23": "4HqLC2yrtBDTpwGJmYShNCWitzMYQ2TuKcS5bMQo2vm2HrtbM8FYLT7ptbk2XagwzGDBpLaaHe6nnuG8CbSitwq3",
  "key24": "yN2DRvznF47rbY5dZuwkbdFjHf7MJuEvAeHqh7H6uiDgqHzvEnJZcgwLQfbNFyokzWfdNwCByErQxCV7kPtQoKF",
  "key25": "6hx4LwwS9RmpYfCHBLrK913ZGiDdbPdg9W1CBsUV37PK7UDNscMVLQpifhk1TrbUUCRvrgbeGSLZZruKATQhCuU",
  "key26": "4QRGAWAJJDujgcxAzoC38yCbz7pf3DSDw91yvthAyiuDp62HDZqVKcRn36uq53PR4WEiLQSHAt4DzhEqbpRprPTV",
  "key27": "46HbytB9KhhHN1FxHUtDp1W5p7eMZD4iYnTmrSD7jpvERoeMVaVos4Zy3fwkfA5wwCVs1i3tRLfHSuB5q4CeT5JZ",
  "key28": "4A3CvMpKRSmwD3KkaULHzximo5yqTxroRDXbMXUq2nuHYqfrsriywxYfdkL4eEvjXUnnFHWsJ8uqvErXSGpqDML",
  "key29": "2aRaP68cXiLqvNfeRBNRLahxHUswj2kSyKFkieCGLJ8hKfmC7g3BMMDfMrfruUPzgQVCJEWAqMoJfgcvH75NSvrP",
  "key30": "Xs3vVYHvAsJRmauXKRP4vmgtPGKwGPWdrmB3Uz5bLx2sT5sbCsjGpa46YaoXSQc6dFo1C1AqGQQQ88rnckwbfko",
  "key31": "4WoQGdFSdgsp8azzAwUs6Vr3arg3tyDfkQkEzYnS6tKnSf7mM4BnAm3eSvtfsxcYiw6ZfBfvBSiWMJ1f6w6zeWxn",
  "key32": "2KfJCma48RKzxZoNbnEfh5Lm7VvCmaF9z3eHjepy5avmhHgHL3NerMqWGYH1ujuA1SzJZnha4VcNJH2CtLz742WP",
  "key33": "a4cDyzQZzpUSvESfSoRS9KADhj5StNAMbJPo2obiDtXLyx5jnTA13Lw5gV1ZSw9G1Dfa4DTbTN4SHZXjyzRy3FU",
  "key34": "EGC9Tu2iaGNYkqDmaydysfqcFRHimwFUyx5QworjPjxY9hNAjvGHhq6FECputdau52XAowLUtCu8omiMQBps8qH",
  "key35": "2piakkMd1Z2z59aeu3GRzZWLvNLu8iqHTSv5hjN6nTcQNTF7oCeF8Ux4VJLdSUSSwRUikTkzTnBkhKvX8LDCaC1W",
  "key36": "2wpWkm1kX7T1mhvgRRPXVHxAbJ8xD1pAdJMyjtaV1HhxZThx1C9LiWs2TpqyRq1rkptPvZJjkDkEym7EVimqqgHs",
  "key37": "BN9DRk7VPyNd8BUKn9T5Bss4Vi5CYZFzXZHXmtfvLdjYDPdmGWj79Kfm5n6V1EoWDzQAW31B9Adq4Gv4jpXSvh5",
  "key38": "5QMXFSHthg2ZhVhgEiTQ1oECm95RvVDcZG31DKTgFBuhfbjadcqr1EpEESisboWJbY36FQyFB6jkjSiC6jqQMC9i",
  "key39": "5pK1xN1TphohszfApGr8ufQaeNpDv43ZwNpdPkQKQPbJUBUEg5iko9RwenMyg6TbQb7M3hK6Pnrkn2dmmDAJR6V5",
  "key40": "4dU6S8gbC4FSJCE8J3Vx5zwHmQnmRMWXR5wXE1KpkTNVp4XpZYC7u5meH6xLD7TAW2Tohs5b7stkLnawS8ictB1Q",
  "key41": "32acMkwVHar3ZLjc5EPvdDQx1r24wGoYGfUaXHtgQJoNveUhR8znUY5HgUNwkyuxNpa76mar3Eco7b1VdLiY6kg7"
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
