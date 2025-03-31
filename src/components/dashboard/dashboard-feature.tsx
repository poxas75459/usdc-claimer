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
    "2EZZeHFggETCAwCfkMJR6Hg3XXMg5Bs5KQNouDxj3mFMiwRRct6dUbtVyrQUGGJNd7Yn3LFTWT2VSxEC7Q9ign33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TPB2UVM4Vf5iRz4T7MzArsLFdzjNo8kQpN97npmNWeivX4TaXgYY4DpgMaxTyopC9d4KZMdwd3tsHUmLXjxzURY",
  "key1": "2RbdSc9jzamhmZvZe3b7TQcbfoQnNk2LwyhazdouskHQsn6tSVC691j2eGGL55TbLf3eSNUKC4VBTj1ZByR9g4hF",
  "key2": "5tHuHrwFKKP7ZhKE5rfQBF8GqUdPtf6Zb7L1oLnfT7RvZXfo8Uf42FAXqdQKYzjfgvBR5syLFtEhEbRejuKtbVHL",
  "key3": "23K22SZ4a5gRuP5Npqv1oEzVXZBhjPHVw4wjGACwrko8dp2apPgvbrwedLeDu8MTAprTNczzkW22fP4Jyv9YkJAR",
  "key4": "52Hx8KyejgQ2usVNRqhrfMnPHcfC6ph9vN2MLiKy9oBh5mbjnyKsHqmbt7TQhSA9dj4ac3NfCkr9LrwPqFdBasCH",
  "key5": "2tT4gAgiohCHTUpDSih5kCQtaJmnR8HXVFFJSNMx4dPRtZLvqucdo1vmqNqMaaAZX4ZBPUC4VEeWYuUkzEUrbevo",
  "key6": "3xqzkR56gzC6a7UxzT4LKxjRYybc1zTXtsKbU4wxrSDf6EvNkuoTr3vF3mmpooJZ7jjqSZK1fsjo7HNdNtyvEd6t",
  "key7": "39mFhwfKp3wtZZJGSggtYp7BtnEHfnCiMMawPzJUwkFVUUoki9SaDGQjFHPZgF2mJHfs2y9CdfSwvP3K935eHaky",
  "key8": "32diCQCbDrDizbFWzXEy78fyYi8Dx1mUDhnNTv8xsFVQzpWUiowjYkzd2ic63KKVKXUSPWvJzFC3uFcAgiCDYHh5",
  "key9": "eyVoB4QQg9ZRXqkk5kMrwpM8qFHrfD7o8W9VndfM13bfbS39zA79yxrz4cxFS12Q7ParWHMZCdNyWsgm7QiF34V",
  "key10": "4aK97ePEwUHv3LsNNNZZY4Po61C8QXMcBKopANxwvGZGPF16NYcar5gwYeajTRkJ3n4D6xZonvDofMcukHc6Xjtw",
  "key11": "4D5WpcHANoKuk6vRfcEDkXCvJHgQeaJhkuriPdP4yEDNHPw1WcigyCE9zvqkKgo3re4rmmXqAWsWFWMdSknhMpMG",
  "key12": "A1JcdyksPkR5XEp7uga6DPdqcisYekgs3EUJstjKFn6K2uCxXgKwkCXm8DaaiaHqrYiYY4V8qgNecuGd7JP1X19",
  "key13": "5yAo93wu6RV8iyGy9qFaKAdg5zwX7py3aSf7j72b28yfbDoMtEJt9S4kNiFWtkzvJA758pikLGFfWojFHWNqEzj3",
  "key14": "4dcQXUHURtubZBTP3PEX1Rta9NM5gFvrG6vZeZL6CRPtobQiXo8zP8Jugks1QhBgswBjeVEcL6joFQ6r1gA79rwD",
  "key15": "BR3TtSwQ9mTbjJu2HPP1YeVvxMHFw99V8Cn8BJyqQ3YppZp7rj2oUcmoVvU9EnE6VrjN898xAAYnbwuZqA3pX2w",
  "key16": "YxqhpUjsn6LLvxwAYWAEbmxEVghtk9tjWikUo5EHYNfzba2cx8UdsyzoQfs4DPESGFcCGTSxKfSWS2et6M6pJxE",
  "key17": "31zyuaTkqRhfNJE9fBiQXhdHQxzKF2Dj5369ZzjvjVfmq7WmRvk68wiqk3CcjCcbNXLbqp8Ekxm1LpLeDkD9P43J",
  "key18": "243CdYYjwJF2QvMKMHyvZpvgtm5SDefzzFvN1cbQdnGyXpcPArJaZz9eaSbwGi57fCHXuHZKd1FMJbx5PowfFDvb",
  "key19": "2eAh3Fiudc9moPD8D2K2YPedgXvho8T4ySDy418hNY8Btzzeu5hESpp9zc3oAkdSXGmkav4FT1nTuzV2dnFEZeiU",
  "key20": "67dJooPYaUSNmZGq4seTXW5h8Uh2bZkMrH36MrF8NEDCEyZfjf6VE2pMLFn8Qf7WgUBo5KB2D8YBQ5FghsjUDHxd",
  "key21": "54JM9FpiRQxPRKzUf1rsvTz9w3ztmkJ7sQXzt2WTMNh1MDSU3kUHMpFvCg48McLQVKJopMjvYUcpE1jtGH1gP1zV",
  "key22": "3X1NszCfFYgxtAjAanLipD5YrtrBaooTv1gyZMuCGbXJc3L7aQu3ntScZ9LG3eG3X9AcEs5rarjytN174xc5gkWX",
  "key23": "2TGm5sy5ySx7uBn7SmxjiJUiqQY3oPkChnkh6P48XmgMWw5sWgdimCfM94xdBNT47M7GusUv4SJhBUGgptyefdGV",
  "key24": "kBTgZnmczNRetLxqJHwfwswxYVaChmSPYpt21GEcVTFBnb7CqFkoUeKXC69QaM3VKxwScWeXahfoiTePxAYEdp4",
  "key25": "3sFTdrj5Qc7i72fAkKeSB2jEyPHUhGcJgFqisQgMLVgxqota7KLLDrEF7c5EPhA2bxF4beBz2mCrbLpe8kheacnf",
  "key26": "4Yyp4RDLxKPXvMq3mAjRWmGightaGW8FkXUrk29aphzUQ8fyjowS1Mryx1cTcdFASpYj6mJshkvw5NfofqyAUoHh",
  "key27": "xeYFGhTiWkBxXDi1Wkq7azGkHCzyd218Miee7hT18Wxbkib5U14nnadJXoQNtt8kT3GAvToTHWSEvBPQpiCTWzu",
  "key28": "2BRijevA2rkn4BiokYqWaVYU9kjbtS5pUwBWhKrQCMDWnqXZCW8V6ZsL5FCV35dVw8KwytCx5D3AvbpYBG4tziux",
  "key29": "3uXZ6tEi7iyWYHnAZwELtCWJpFbXv1xh5yM326aS1Wi8hAkYz2WbyFPHxssDHZdSuNcqMhab8V1wxdp8ax9jAvyC",
  "key30": "53GkJojbNTv2mSZP8eNMUWD73zS3eRtf7d7oC3ecrBkBz3sESjRHDUWMRQ7cH8SvTtNctUjt9KNHuFGNCib2Ro9z",
  "key31": "26p7ayyDBjtq9AzkTkz9LEF5HAj7AKYTVxyaXiVCNFYfbnZDMEB9QA3ddpUnaPrsg45MRHunJcv1q9zNVwHg8vs4",
  "key32": "Cw2rU6kpob1y7BcRBC9hpoGs5UJ9JxjCjkiN3wsBkURHdzrXTBV4pfXPZWFtxtL12d9aNvDgebBywpUSECmxzPS",
  "key33": "49ni9j6P69MJ1XNjETf5iueKpwqHZmFWJxUNLX5ePSiXLbgdxqYAxAotHunhcNr1c6FrkeLMLgsK6yMPPrU9QH11",
  "key34": "3WRwkk3ojDXVj5arUPaeE9yHE3miVeogDxdyDdfEmuGEeGt88WiQirQYPRcPhpnrruk7xnrZ3tbn2vNiAakzi3Yr",
  "key35": "34NMQRVxFE1ns17FnejV9Dp9unoiYVyQhhCH4N5qPyQA6Xa4KuWhmEjtggsiCnreBpvrAqcxju7mB13QHzFhGStF",
  "key36": "4hzEtB45rBFF6QPLCEZ2zU2FdkFKWWzgBF2TvqDPqLXHcBiSPm5qeMmv7xYdVW9m9BcmeekU73zq3ua8cYShkYHS",
  "key37": "3MdHK2kikxRRmPLS54C1mxgJ4GV3qdZ9FsnhUsU14GVXSgaVciWgiPyfS6wA3zZHqwAxQT4VakyMrRTutK48m92c",
  "key38": "423a2x5GsuGcdEfRQwgHVGDgCzMf5tYnBaUR4mUt8D8YkGoABrBt7fD6H1TSgaNGPXmzBsvApcxGfKVyRi5gYH84",
  "key39": "3ktLA4F13GdVzJu9PkkRFWMGnT9S3AygrZbN1gYJbuWpSnjFhWneUyCx2ZAxDi5wxKaBSXB4uV5GUMXxSPUkdtnD",
  "key40": "3PhXNRNmgzPXemVJkqYH4PY9QjepzKna1yRKkoWW63vyVGN1wC3SWxqQdiwzj3FrX1xGbDcNT6zHa3JtTJKXxvFJ",
  "key41": "bj5vPQ9xK5M7PynZZNysfoVWVuDfSvCxExKj5yKGCdZujqSRBYi1yKwAGGPzw1SEiE6eThP9tKYxghvttksmigA"
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
