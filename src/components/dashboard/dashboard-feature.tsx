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
    "4TZ4LYf8a4rVaczoqww7pNurxQ36A3LGr7xQgkBrAVAKHEzXGWaZkgJXT96HBrbn9xkDZ32s4nKU1D95WUa1wDfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxGjzZ4pQxM1mXBgfHjPa5TwLjkWNh6gUMWNC4pbZVg4aLsojgxCQ8jn3RUmcneyqJ8APADX315GtHn6kGp4VyQ",
  "key1": "ax3oT3mXiLRwMwc7StLufcb6ywpCJ4dsMJ2AdRcuqj7LqphwmvbWhXH2hEnMs7xo8XvVgxgibHgx7tW1X6y8s5a",
  "key2": "5hQPe6mcqqwVKYabbf3Q2QMuRjMrgKEs5ZNoUD7uKYfLgn8UasAYw3mA3DfTB286Q7DNnkxm848tYWmAknXDpwbG",
  "key3": "5sbWhKmsfDfEaCT2e24xyeWyrfRCctq3uzbUAwCeCcZrBZdt1sAc2bWxeYGcwwrYxkSrKu5scSqGm9P6cWntJ8RU",
  "key4": "496Jqw4JwipJ8WXXohnVTjBCW6sWyhmcE2sCZV2e5vF3ThR2AE6mG9R5m56LbZ5gbR7s8ZaAXJJyZVjjzNkdCW9",
  "key5": "2r588WPZNeiAp7r9ZNzCReD6mq1qNJzooSWrWm23vX1sKEC5Su52ygfHr4U9SQwp4eN2JkMtXZVEmFkN2KyvEedj",
  "key6": "4SZZnhVTWz8yyoeTz6q1SK2VxoYuQzDhEC8JAAY39GsDN3dmBQUKmEpqETM7ib2nxDSexKRfd1cRbSKFybtyp7Sj",
  "key7": "5RTFoHjDc29RdFrB5Q1Svjw42M7FVdEs1fuhu4R9vhGaNaTGCFyfLXQV261TTheLuo2KK6Bd3ZDffrjRrPN1Qh4c",
  "key8": "3XEaPbrD95mX63rCo2yacsoF7QY8Wby8fKefNBYq2Qi9dL414KwLqhJBLmBeYvcEM7Ldpo3jLxspxcGwiXrK3Y34",
  "key9": "4PyWtHLJyU9rEdQjuDrtCXjGQGHRioxJPAxhRVvqef8wwaQPnRVrwstTDxsbL9achm322RnrWjfFhWX9hT531u6g",
  "key10": "5tUhVFcNspETq8FUasNZFBTcRwtRfV9xWompBPn6ihpQDenez7uoWM87zV8yCc4wwFJGRXMmDfWkyY3fCLQKq7F1",
  "key11": "3DWXNzyiiX2ypoNvGqXbChnf7S3bmT7A5vE5i56jncXMzXy1ZsmHZ3Ky66ofKgYa9GDUHyf3P3einDNfR8VkwvkR",
  "key12": "2DBM2ZmTnuqp76PTiyiG1QUjizGWrjHmVkruLCMhaY8F1okeBNzZEQqLp9dVT4ByE2JWrbb12EyAseTZ57FtDp3R",
  "key13": "5sbe9BryA71dP96ejAXiz6BQfjoRHUnsrdBR7wVt64iTsnKrwq5U1GCV5vvVKbnaZYkUYWwvT3RepfTvhUqSff32",
  "key14": "3tPgEMNtHbThJtximoZcRi45X7NJuzmHx72ER3sTaS5JWu9bSa9Regwgg8MvhUJSMFfNSxTQnxWVdvqU35JS5kT1",
  "key15": "8E56TKeLoqeo6iScCTAmmwXdTYETuN28VUWvMCcX2qGBtaUerQBptKxST9py2e6cHUwn8t5MjHHKychpoWazqDG",
  "key16": "GExKH6WC8ikL7KmQGutWpRFtBc3h4mvnWGG14w2NuxUqHgGiUsfy4f6pv4k1qKSA4Nzx5KcoTjy6mtf38H9XjvJ",
  "key17": "3X3BEPpT8EDe1ptuBwAf4igyLbQYRRwoSg79io9avLARfDK4xgks3kS6xWFsm7Jvvs68YixoQgPpcjG2Mz6shNeF",
  "key18": "52dZ5ajar4qbHF7EWdAXSW2S16DWmaaNXknXQkXv7NqCT2DiG325vceyYyXovvqZnyi31AZJENeHriosTd95wFCj",
  "key19": "4asc4qC1wmTVi1o1J3XSUdYUeNz4NdZZGd1rrT3Ej4dDdt13TXpnH8SMbZooRDMePPa6keqvx6LUk8vRSWTwcgCz",
  "key20": "7ifG5FVJD7K9Fo7G7WBPtgtT5nGHeFbUba3FXBGTZ7KCdG6PMTinspL9PiWEWAUJbGTgt5Gwcz4q2ugNx1MpdtE",
  "key21": "67LGzmnXGSM4ifCaL5ENFbbnRAXz12j3tQvsXXTb65sy8GopqkQwps1UdAGtoaKhVmAykpPqqAHpmT6wjddk3m1X",
  "key22": "5axHLF4N4E64RWUjjtxtfi342Au3kgNJyaHZT4XKVJFuz5kEM3E6tFju8jL5ECXR596AACUGihtdnqFfd6N2THQ8",
  "key23": "2bntjjWZ6MTpw7KRMZCmx4KeEG4sWkKV67AbqNNe76WebnxcU1vhk1hnVCNQmjE6tN5YS4H8t4AiYQs5ntaqJk2M",
  "key24": "3LHEF31PHq2JK4gzY4xUTSnPN5YQmYpqjoK9Jt51PzaiBAetEG6BcxNsWZECi8FqSkj7PouRfnXndA3Giyza6HJ9",
  "key25": "2jwQdenn8NxqGd1FdAPCsxczfc1X6gUNR6dkuDJpSyh4gLFAXH8HbyNuojbSVo8yDZMxFxMx6mwdfBWV6YpE4HVP",
  "key26": "4SE1hvNFZjDZK2S3ekqJ9ieaSU2Vexxu31fkDCDrY6TQaf4XesJkf2EwaTrEr2N5WV85W3WG1WjHRSFfh6basVf6",
  "key27": "3vEiMmpHHebmFNdqbWGLZMTkNqkMuDm88r5b37grspAceKmNBn5BqwBcGKwTxMnSfHVEaMjxJ8seubJ48zn8p7sS",
  "key28": "4gmsowiEAsx6XQmHJWPaiJY417K82Urr6mXEKiuYBbPQ9Mf49if46wXfXMrv1pGGdwu2rmPt6JxFWFfBQ7uH3mSp",
  "key29": "284zrcznbRcKStAQTJ6M6srcwiH3rdiv8JpmXTjBXckiDHNYtLPnoCgtLyguxQ7zccKFByhWrbj7Yn3wDXZNqgt3",
  "key30": "4WpAnhVUykZpU7wF3x57ebUyqqmw7p7rFMxTzDybTNn9YLfd4nweoFQTKoMtY9zoZ9PAybj2MN2ebNe7QVxg9nG9",
  "key31": "3ziuvhj6iKW7J63wg8DBkiqtg2hDV6FEZpFp23v4byKRWWgzkDrKSmr3aZ6yxhVaqvg9aV2FHcuSZ7ybqQ1EwT3z",
  "key32": "2KtzmEb1t9o7qUEkAbyDHuQCZ97b3gWUva9KhQwThZypBT893i6idDY1bmndHQ32McLNgUwmtFKD8S8EzN2Cs3S3",
  "key33": "5v5jrzAnRBse8RZS2syUQ1Lcxukzgbkcmx1aznhx9ixtrcebG8cV33NGo57nJbnG95EpfgwEhyiV5Nz9c1TBZuCp",
  "key34": "3XuvLQtgeyYTNhTeRGxQP4AokhAuJ1WbpLvVhseqdJajzdLer6iKsZjXEXbkVRc4Q32NPPRUMQtAhQU4Yx9Ra6J1",
  "key35": "CZnA48anLzZtsM4mnfytPux5nk8DJWzJLF6uh9mS1Ga14vbktAYPeBwis5uhMsUWHgf2juBw6qHpnrTxkFi3uYC",
  "key36": "58cuNavp28Gc9qcbiRsdijQyaie7ehL1LULwrLPTdHx5Zqdoe4p1A9Sc2gev3q1T6gUyFcbJ8mNFufRhQ1gBP9bS",
  "key37": "ZbhhNvRLZubyo8xHYqrbwdAbRevWP2xM9qPDryjfXYu9XJvueGBzWQbtPiNFjdVFRnHCPT2k4eeqnhrYdGce7XY",
  "key38": "4vzggYA16ZFSv2bPrS5HUZKpvwJ1TN6R7nM8nqDC2sWCayD2u9LJDEnvFi5UJkJt4ixVxUwrmefKoGNb2b8NWg33",
  "key39": "4aHBB7kKbtMAAAEjtoppwqHYrd2ST8qX3CC5KFpZEn1HaKyycpoiTBpXFRGUwF9Y3xv84JQV5yoACjYH6H4TU74t",
  "key40": "4KNFpKnpDSL5uTPZP4ducPbvriBg4KNR8U3R6vDqE7pGJhzTjmjkfPu2LGpBDgjytr2CENTSxHHTJN3AmGM1scx9",
  "key41": "mXH8vK5Abo4i7YYRGqFbhBg5MfrUZM9NDroeqCbvib8uUKg7dAfz54c21nV3VHfbH7ixB7hpWakxpVJZZUp2ZvF",
  "key42": "3i8g5hAfnRyxnG1ZrHP54Bc7MYd4miU36bdWFDvbuWqxi8ySgPWagd4Axc73R4r7bdJ3RRTMsNXd2HrfAUVCkh1i"
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
