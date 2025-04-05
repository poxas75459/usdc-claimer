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
    "xrLaEmvaURYGFnrM7dsrKAEHi7oqEhyYGHwYLxGFbxDXnY9tdTD3tv7ytZyXLyE6nbG71zaRRfxYy7CesjEHu5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AxD5qbGfPeHGLuGz9PAyyjJAqZELijgWqcSt6iQhNBwZTdXx4gq2VgjCi8fJcQ54mnzqe69QDzymkztgtb4LrHo",
  "key1": "5wyu3jAjg7JzPGrG3fGRLfEKrV5VPtCTs2heRgSgcQxssxuUWJst3BY4M6DzWJ6b2sAUL8AHDnT4yWWFTQRc7d3e",
  "key2": "63zUK5sAm7RxZqeekZQ1wX7bEYA98XGUMwS31FfsCEAnzhM13Qwfx6ocRTKJzWHj7vfqgGz9MS9Pvqj5RtsfnpdF",
  "key3": "2LkPg6LgLCEB6hGdENdZrT2hS2aUztrReJeUd7f8wY4ybktshLXx47LFpKviZBAZwBC185BVcs6vHTSan1ocg1Pu",
  "key4": "3kZaFhp3gymSzMjqg16ZU9BSGCrUmJ6jQvvWMru4eqWX6aUzJRFWRf79C78rVzfi8bJQzAfrUUtXvFZKd5HFpE2P",
  "key5": "PNB1LN3Ui1AjqkMgKMEai33AqkDQP8EHgsJc4D37zCKiDFn1wVbM4rTQ5msTi7BWRa8M2YtP8AbWZmpoU3o9Psk",
  "key6": "5wdAxLP8ZgPnkQ75Ukg6ZpWtXw11f4HjssLqbxSxCUBtciBWKKMeHbgv5SEtFzM8WanBSVt5e7Nn3i6dX4mTr9iu",
  "key7": "3etdjUZEJFq9ipGbFLuKMhZn2KCvoBajtkbeE6paCapeyAooRd9iDEEyP4q6nuuXoiSjt911rXp2nsDudvFiCCY8",
  "key8": "2PzvUDhTBLNDLiBrwDiQicgACcitxJi1BuH57CuXw3xG7jSKbd9n7yQhRLpF1mg7rtcrmogVtZJ9DUnU5gmRkL35",
  "key9": "3vuXiamDLPiPNKwDsyYJKHdRkfAzBTVb4hRxMWRaL6y6HhEPUWtgwtxGL1TtBSzqREgPdQJ58efEJw1hW3TXhpqX",
  "key10": "29QvpzFp9Z7emmjDfTz3G2iixsTqdGxhNmrsqdeA5cBVyQFaUvEopCJXBs4wSTt2UUTn2DrPHX8wCs7XAkxAkwKn",
  "key11": "4eyMLn12sxatpJCFWpB1zhzBKdvx8tvPHCS8zEyiatEGqXQCCVMngPNq7t7bVmsqSx24MUNih9JfVSyw2BKy3KAt",
  "key12": "2j6xgNo1xmHqHEMDKFdY9MdKrtFZk9AFpuzmP3Ui6jQJi8bciKF1hCgG6iVwAwn93DbnAMURnwauiyYrPb1Tmesg",
  "key13": "5HranLCnfACA2sjxkG96S3vcqoaGxDyirEF3kVF4te6rLaf15y8CebghNVNX6RKG6dcP5JNVM26HyxBGqeYL3YBY",
  "key14": "3cjTTSM32EzvjgnvRzPBMPHv4RZFNy5mYJbFDTGJE11MMWMBH1TdRBV4kbdegSNH2KJicZZ7Tkju3eorD1Wd2DSr",
  "key15": "28syxWfcvLVJqd4NRwMzThXtNUP7VjMMtgoJQ2g15CxfA5HpnBYxYzXp2PNu6dFX8yNoarffp1gYeQBLutQfQc7s",
  "key16": "61fy8rcbGJk7JGFCS13pYDMmYHpLvjRLyWFUW3oR3eHuxqCRExk2mY4C41aNU6w99W4wwy1CQmjUe1G7BKhsFzVi",
  "key17": "2H8uV88dxq2zsof6LnmJEm9YtufgeeffN78oBg2a4RuyMa5hGEei2BmcVGZJWaGgkmQg6wnH9rz8TkujbStra1Nr",
  "key18": "5B3JghDAvQtCqsqtsXP1VT21nFAo8rn6XrbWzM4ZPLm3SZieYQ86QgaqcwvdWwiVGHSBi3Phx66D2brCETJBss2P",
  "key19": "85jh3XwzN1hgnx9xDqt2JNwbXRQ39dpjy76KVUvYf4i5uVeLic96V2RG964HZ62tAcw3eS6QVauhEMoQQR4qJzP",
  "key20": "3uEYbL4GPbpuCLoRoTaG1zbUNoKn5ty4Kqu7oUUCG5xWYFNuXAtW6hN5TLwijHf1xknwbRa7YWq13RJt3A3hRzxK",
  "key21": "4XatcYNWA3oe4YBHRVwrrdvTMHYCdQsqhT33Vc4kJK2SEeTodDzFUJo3NZKztKi4nyiKEQtMgmas22jmXf69Kcif",
  "key22": "5k6dKkDSWQu9QtqJYYhro5TYMsAQCPC4Kpi7PSH76VtYLAHPtKaHPsuGQeC3cBXL4bLKSHQXADZgKHzD53r69Ktt",
  "key23": "zECQ8HWLhyKDvpVXDPxUR3AaCR2nZy6NwVyhHcxquuWMKq8WUnbHSTsH8j1EirZ9oHRYkvGNtu73JUaBkzBtSko",
  "key24": "5UYEsuf9PKTjEGqiS9GSTjUiGvCHChMvkaCLeS8D3Q8chdE35Zb4dnQLA3MG3CUf9QG246R6vse86f6Fo3tTfzrT",
  "key25": "2YrU6BfswzaAhQE9W7JCoDi7DWNo8Y3mvUpSvFqFiAq9LWrhgAz1ATCKdxeNUD4mWHyx7VNgnYGx56kDwrYGLxAG",
  "key26": "5HCsnnRoiHNR456bpKyZCg7JgUB5br2ccoQAWUoczFDAZgQaE4SgGh6QX6bhQrngK1bewpQWufxCQpLCdAe1m7Mr",
  "key27": "5apHwvJTNLxU3R7fWm3dsa3Lne1DSJDBknsDk2AttByMULSS5ia5syZyaK25xufAvJm5Mq4Q85PzajBskwziovf1",
  "key28": "z6YmKrftN597Q9gsWHnaxW6EEnT1b7MnTej5ZLdxLvAkAvWa5eRbPzcDDbwsqjKAj6Mwyb9Tgt4D11TAdWBwEhK",
  "key29": "5wTyewKvNZucibTBw3YHfJGaDEtX6uFptVoxiF5bZrQEfsbou4sum1ts2dDnqLRzZqtybDkidy8ZCFkEtwi2g4Ex",
  "key30": "52oZnJtjdLazddzte9BpxUHMgoLA3NpksBxx9qiE9pPKSRZpNo5qqpewG54xfKXaBWVycjtiu7pn9hPysxRHSGG3",
  "key31": "hj45zaFcTW2YH2i6tLrRfq3YWeuWgyv7uMmBYAX2UURwJ9AXX4tTGejViVF1dKu1Sbd2Z5DKZ11Gyzk4kDsgAfd",
  "key32": "2D9UoUfPM7gJumUWsk55mHBdYvQsHPtzW3d6cwbBcyk4whG7Ljz4W8QT6KuiswmJFKkasWjPzffqRv4y9aCbyLbc",
  "key33": "5QnfSsZvxtxwHwXQLBJH1jedk4gVpqpCmphxq5j7o8KrHV57ECx8itAQDgAwyh35zmZBSNuXFTWBUUdiZCqt1XFV",
  "key34": "5FmxoAFYXfVDYWfZzxid8oPbHQBEdzjpvQxwMbzrvtYisKQHXJLR7nVJTMPsrPb5mgAVE9RYwhvgcQgx8UtvB14Q",
  "key35": "3EDWTeL2UcfpvDqHFUxYFbnNT8sjMJwffTkEuaHJrjM6HgPdYeD11ZiLrfPFUtY2Z6NNmvGabVXzoZtSjgupBcXy",
  "key36": "4g2GRpxhv8Nti7kmMjZxDrY8AzzPxbh5CKAgxiiMNCa9oen475EbmaSV6XopLBBTS6tndFF4JD5uQN22TzUHefFu",
  "key37": "yXUEhqiYqpfE7GGKwrU6gvzQjzAKXY6V3jtGeLpLkx7t4uBku8L2mHPvchV4LXfohvYpiUgDabJuFd3wRk62bR7",
  "key38": "pGF4GKpHWNj4zr7b5LRnotncgof6VZR8f5D34dz8QL7auCqYDvabqXcBkNbpDV4UeHGRzk6fPZ2BuNUo9gxJ4VR",
  "key39": "zR1Gd1wxaVa6bMDMLw6DitcFs8aEjiKR28kEAgpuwoTMNcZk3JaK45V2tN8bLuhxfwWTdBHcfVpLLUvxVumFkrJ"
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
