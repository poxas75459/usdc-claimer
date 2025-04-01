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
    "4ku73uvZ6r4MNQ6reiQbLSFBKQ3dk36ieonHZoHv9tJhsB4oFyxYvm9e1e35VDai5BsdwJF8Fa7FpPNvLrxNH9P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42qG5Stb5kbA3H3dL7jp5JhF4LLZkWt4idKBXLc3GgmAv5AmeTXu2gHEkn7s3UzU2KPMykJc2M2HAiP4itgoZ8i",
  "key1": "3W1T3TYuQ7MH9tmFdMuuDEmURXw1go6bA9uR3p4Gu8qWmyeYFTbsaLmuMzDt94BZvEHJpyFfYpFeswp9dv7eLTqq",
  "key2": "todm25utuYEzDMcRZhjmkmYParEVjb4C8U7e1U963wwvfwnXM2oAGXtvUWW8z72psNAzGzPvz8C8u6daqVeBLoJ",
  "key3": "3EpBCDVrtjgJuDD7bwmqtzfDjEpwf9yJQLnCEq9ZED9DnhSur3p1AhUz4Bk88YTRt7ndpu7uPrEhdgr7QRtwHLWr",
  "key4": "2ZxCtABMMkv1XY7Z8qPZD3TfJzu7SkA1uSvbzAXR6FcoQQaixt3fu7pU52xxqaBrfFHZeiSN5tKVWU3iLUmxbkpQ",
  "key5": "26KhoEKLXP6MqryE7jQ9So8zenZ3cnZZK2StC7SubBq7zn8jYje8w6egZyXVs9Qdpxm3xBgDdCMH7YetbgXzfJd6",
  "key6": "5YhiKCZkkpWHdpoeEbNiaKsyqR3vCQW6yio2kN6NysHY8WaDJaEgMzmoYcm8d4gCjXg8EbPX1voAEvYNtDkiSEhc",
  "key7": "21D85Ax3jbs4XQyGPwi9DNtKeSsdZjJxims7MzevprUvrhBamQ5ikdVssK1RhfqRqrdJPqq59VS6yib5BoQaCDcE",
  "key8": "59SNmGV6snVW7aWQcWMY9fXZm4i67RSy7LWzPZD9Bh2NZ2qU9hMpZhoV2NLD9mCP6fVDWGvJUQi1ofZU7sJ8ZJQH",
  "key9": "mdsrXwK6bUdScSmJqpNGoYMxL6RUdN3XgxXmFqRRmu9ckheQhhnD1trJtp5Lu9tMdH3h9SfcjjiRdFq57aEYan7",
  "key10": "41NK4bdoM6FiG17ieGu3rRbLqEuw5nezJMj2EmHgkhdNnNUU6wgjzVt4foxbNV3xUzgyBZBZBC5L8XeditF8S7Xt",
  "key11": "9syps8wWVM5dxdfz1Vtt9DsoUipCreLSTK4BuwcofeXap5i2XoRrKo1AFvWybTjBdLTLmK49cyKsBUvZa7kLB5k",
  "key12": "51zDENaYtzuZQWXcoyTo7gc5JNupKiEYxBvMckQeWFwNWpqxtLenyeBoVZfQVrFVyK8ntaH38mR2rByKtBXNThm7",
  "key13": "2uqj1jKWNzULNphtvcBhgJvHgcW87g1nVRWTJDDhp4Va7ec1LgFyy8kChvkmvpxLc8YNKHdGQU3137v77CvSFXVP",
  "key14": "4hnisHbXCE4n29por1Vm4D7BfVRzDsAEpKjTT46mtNKKNc7TWpZbENvw4FDujb9dCM3sFm7G3rV4PSBUTFVPdRZd",
  "key15": "5nSwyto23sB5SPf9g8qykvjFS7maDvksRitYa9umLCjtCF26PFdCXc3jLZ3RgVtEE4m38SFkARvdFGtfGdNbwGnR",
  "key16": "3G9yQas8q2RZmGaAXCRVHhKy9mRGL2DREYHrEPsYUn114bLh6c1bj1zwW9P26ihTL7KcGeAk1i7gCEA7RyqM3atv",
  "key17": "4VXMdAdH43MmJSsa4QesTZD1kZhVZSHoELztA7u8wHkTg4XtERRgCqvNuqVLJwAam5iA6Ac9AcNbJ6c6dGGkB2ts",
  "key18": "4GZYhu3pPqfLKVt7bJxgtbkrYJxVWzthkPty7VfViZKLDYbtPFEvJTqAmfrYK8gQ5QLMKXppNMNz8Ya7w4Mb3Hmk",
  "key19": "2WpSvAPP5vmggvf92EdETkLcQBJnF6nv1Q14owNnsnvWoacSHEjdxL6Ua5mNDE1qZcTMAnNzGow1h7bLoCcjTQwi",
  "key20": "3CpyQkYTWX9Sn9vNRe5o6a4sD5CQWMRbLGMzJqQmmV4WrjrHez4BnVZsjRSYKAfRSZmXi6rDNY7YfETjASu19fVY",
  "key21": "3oW2Q3LBsRhqz7omAUoAULNfW2RoH5dPuEwwLoY6tyBGUqKNqRfrpYEhk9xE2zYkdDcCaGCnuWVYFQPcgSKyptHR",
  "key22": "3u5HcjnNVgNR7ehsebdyHiHCYswjnsAQHoaUPtsTgoe3CNUxm2nuV2SD3jka8ZSCWgSZD8VVhoRa2RxWsLhhULXx",
  "key23": "yBpVLWouxipqEvmzRk3oS1RU3hZBDfVKpktVKUp5vbnMXRyWrb3GrPpDpJcxW4LSsNM8SaidXnFAp4JhGHWauFX",
  "key24": "64SScEcuGStc5J4hEAsbwBTCB7D8QW6K7bVAznSJhk97K4YJHw5WeeMPLwCTr24wAL4JbAP2bMDvYuFLnXMnLMiz",
  "key25": "3qF6Sj2e6vE2EZu6V3Tuvncnu4XHhshX8uqCwh6PtkuMWRofCNUrHbwFvhPMKYzB6s2NmJFw5shNLNjhZdP8JRr2",
  "key26": "2t7CEou5ZDbYmh2wVCJtsBo7S6vZSrb2Gj1S7C3RhJa1g4TNBgZfpQSG7cN2D4ECL978yK1EgMp9yP2XHS5a5sYp",
  "key27": "4GaNVaBbsiv6FsT4Df1ivYi4khaPjdxYJm65xZFnojXH1mbrPWacPiLn6LeccHE5FoJNGcRz4NeHtgqEEhJjEtMh",
  "key28": "2St7AU9eQHSS3W7rvkwAVo5xnZ3YUPtj3FB32aLM9Q8v9abLFzcgxLLqxvNGJEorCEhbTotck1yzi4GE3WdAbHEj",
  "key29": "3rxYjVJd55mnL5CxsUzbdb8oWtthTGG7tpDXieXa7PE6wjrSpKHZetNZAi4nagExuaGg1axLkd2aUJSub2GvKopG",
  "key30": "4VG9axaWzHBB4384hrB1kCtDbjoWmnfwxz1uEQMyJYFWyDAfazomhtjbpBfRytMWYQ7bXthe6jJ6Sz9jz9YwXfYE",
  "key31": "jjwJ5HRQkupQpTvGJoYxUnQmsRs69MkTMngFxR5WNwio4HPkrMxBvZSXf53TzoRwrSYGrUWTCFVP1zd2MtAaVha",
  "key32": "4SFD6DDwqDxtDHYT9eJyQjeg9y1mezo9VFVbRd7Fk6Bw3VqiHYVLzFqFSXoXdsecZbVUyDApmUTvb3LSuThrckB",
  "key33": "3NstRmT9EBMCKbZCbCgK5B5Q5LYTZnFzk1sf7qi6Yi9ZMocC5VSY9AfdroCG3QZcH5RTFbM2ngfugmTMkyFnwAoS",
  "key34": "2Zzb8xutY3Ng5xKekhSa9DvkmrgSHYQPqYr7dRyoUuimEBUbBSzqNbydMzDSNzV2zjfb3fKGLFtdi5njCMyoXPPW",
  "key35": "4M8WwEEMyayD77mPtL7CTSKwWvpy2AJXTa6ttKdyca1EkdqH7rUy3nwGtUczLhrbi8tLoiJf9n5b9raMx9oVGvHy",
  "key36": "4sTZt94T7j15z85Pm9vduzrUF2mfQeKLWeJGgWuo1gMF3JoZ9RyGW3V1LXtgfLiKzbzCUjZZ7sSbRVLHYA2THwQd",
  "key37": "ozwf2ZUbRKQQnmGDNPcY8AyZY5b41wWnKcaBh9DbE82c17wSkQuhGHoJKK6Gg1VmeoenNbESyaZa73fNcwwZ1DK",
  "key38": "aGiYFNRpXvKZV74LH5QY3mf5fBHU3uHzJBqFUHyQQrZARmcUcpMCGAnbvtCBmXf2fSxEHjr3vo6183K5y7fVKzM",
  "key39": "2VwEswy2gAnB5s7aLsSB3TBkwZf3t3YAVd4R6UYbCeMgocfAw5moiZC5LQT4Y1tebhdbTmgNb1iUnUvm5pGyp9EU",
  "key40": "2iEQeBmQmSJtqh6Rpx2GY4NimcUzdyZUFfs1VzRkrpk2Xa3PK5ELkhNmtnxA91uPKMA6yqqbrMqKp8XhCTn1xBni",
  "key41": "3YK6fdtcMKaZb2xN3XXPKpYQrYzCGzYeXHCCpRyNtGDmv7DAoE13e2vLDum9NeP9J7TUcPgHHFjsQ9bSFYee9H37",
  "key42": "2JXkZzqKj686JZmJu2xqqdnC2tS61xrmbKAdUXMHFfyfCjqwBtpA3GmPDMdhTnABxhzL9426EiZSFu3PTuqF7Ga8",
  "key43": "c2SzCvAATB7hdKD24mRFQj4a8KRKdPY4oUCBpUvP4WBfrTZVwQHi1yh8BRoXr99VvG8dMQQU6SwDC3V2R83XMzk",
  "key44": "3MMFG4vBitAYH81WztyXu2NFFHtVr3C8Akt4v8X4cxkuNupLB7uhEfN6oN2cNG1gLbhHg3iuw1AgLTtCgn9ontnZ",
  "key45": "5kEZtWEy1AwMXtoU3cPjhqBrvapwzZyrTzJcx7xbgFwqeHdLnPY8nJ8VkDxFcuX9ki8uiDjnHGsay7TQdmUUg8CV"
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
