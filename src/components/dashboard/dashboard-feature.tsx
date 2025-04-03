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
    "2iZYwHHHaDZpdW64aQbaGuBmMVGJYsHzDURkShZ9VCbwgf3s3N6eXLqnxFmuxUbmgFxSYn6ZPYRSC5yRKp6eZgmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKSHfddV5iQ52FiUjMsSDTL8QtQ9KNEbs3tLkJ4ZFcfrwD42fApzjGisu6jQhGJGHcLynTfWu2igPx24DkGjkEv",
  "key1": "KU6GawLUNwAUEk6NhRxeAKNPYs6d2ujdLi1pva8C3668oENTssSYrUuYJFPDgyeTGfem32oPDe4d64wHFZK16Uz",
  "key2": "HUiJfq6pmnJiA8gsMFV8RUFZp8eqxamPqntkEwTBTAP8ewm1fJCJM4M8kNGH9jgaq9xYCEuzcgPVHDTjkgtyyba",
  "key3": "2cMq6MnbrAvLD8HnqEjkXv89sifbJLji7BB5Ycn2VKvXU5Lq2YVuxhZZa5J9zimNA1ePM36hBA1NTb9sigxkcLfh",
  "key4": "2pLEhdvoCpZm5V45QBzMPfdXEKaTkba9XgDrVVvJbX6CBhGeLCkJB8MPo2GV8QtaCSVsGL5vXtMiViDuDP8q5jNL",
  "key5": "2r26huBNpgUSURFGaEn59scZaVK8ee38Jfd3pFSdV7j4bHR7iduXAs4VfsR9SqN2oCnZiuaQn6EqHaxz9HXVokXb",
  "key6": "3ar1upZDpLRFhz9nS2rkCRsYXvDBVUD3Lb8GYyVnXxcRbaBux8q2rwrmprPYArEeTgFbJSkNoeRgC7E4RGrCCVZ8",
  "key7": "cDm9dWruzHjvKS4T2ALnKvJUeUwvFtdGy81yHaEUzffPWzcdDc99DNAsg7Ce85Xim27tNo3fw9yHZcHGgMf9jR6",
  "key8": "eTj9a4qMdDi9TJ1kgeejZVH4R11KLK6Ye1zZNKMm6QibWN1sewu4QivjUDvkURKmFzo3DxCcxzYGtuXstj9zCc8",
  "key9": "5pfzbFs1QSjLq7QQxZendKewEVJQLHafShxKhJzSHz3sBNDhy9Ru7Z817PZv6kZrsgXsyUCZPH6JXmiUahbwCNiE",
  "key10": "3YJKZ5zbwGuMqa4dEWb7JCUguj9BU7nmuLiLFzRiWHo3C7djFCXS2RrWwXZzwySvmCiBRSLhJbfRGtofHkpy1Lm3",
  "key11": "XvKqF9hCvamhaLfNARCH8BkAnqBiuUGjnu3zwHQyD2AVbH6SgVfLSrHE89PeubqwUNqdiyzGmEbRGcyax79wxyP",
  "key12": "2BUpdQpZAeMN9KRGRHKpM3Vf84WTukhwNbqzSPd5M1V4aJbU4gX4xsTeADNkBPfZNHVMs1Q6j38FJHmjLqhecdLe",
  "key13": "3PsQGQNEQV7DFA66pbxiUnwaBfnsW51QBxvedSCekj4JRWsqPKKDyi6BVXDpfbuqvSZUxXZ4kdkRhMi89usbk8m3",
  "key14": "2dTkxks7U4boPXwxMyWuFSbJ1L3iqntM66X8F45LbmqBJa5XPijByiLiXssmhWEMNahjkRoqBWHjmPdPmay7aHji",
  "key15": "3VgfqGGSFrs6SoE9VryZfbYW9enGCZcYjPjZhL76ZA41sEXSWXtFoTPK6ZeKcbojjYKDu92sgYtv4Pd3DF4GWbuP",
  "key16": "3EAKg6feJmpehb4FFe1SFDYbvmzJhukTPjGh8VrvDoz7x7vEheZtD7fwdoxhxLuHnyFdqX6mkMAFhDbAMeZbVUNh",
  "key17": "5pjEB68qzdruqjfpLDyJi638xjTCqkr7oyX9caD5CEgGHeaSUxzAP8BuEkDcwdxxwRYwQ7TutWRcoBMyVCMhKFt7",
  "key18": "dmCvfUp1RJtS2C16iWKyEaueunH5BJgKdG9WjXugdgJyYPZB8szcYWZ5iuh7DM312v9wELr5HqcBG69RBfXiEC8",
  "key19": "2xmmZcNRGWacWhwx9wtBtGZw73UrRsLPSVKXmb11LsToJwXW1MZMr7kyeHstQ2bsJR277Yg2rzxpts1JSyHXqs5P",
  "key20": "FsgocK5vs9pxp8dujerZk6HxVa7qKv9qWVxjqAUyDcJqzK6iHk3kzv6fjVfiYTqr8DxwCcWQNJqJRcB16aU88fj",
  "key21": "3hBzuzAaApQA39Ui15QzUjBTxso4p7p3RazRnZLGGH2nnzJiXCSNVN53yZmvu2VU3cdhPBPoSV1mr6q27f4Pu974",
  "key22": "VEKZhYuBTTp3E6uxeoTcQ4PPuCsS7rL9JqrAsHfy2qCGCBvHPExh84ww5A78SyiebaKT6kQnAFKkayw41h3sUMH",
  "key23": "43EQmdMFLugCCNFAVS8Qptr3yg8nJLo3namNxJu55GSdFdN2efhm2AtpPmvPaoFH6oMKN1ndPPuNxB61DSszLVoC",
  "key24": "3A2JTJmsXPgp3A6DLuTG56AQwFpV2uGzUqqBYds9fXHjzvnkSUT9U3fSJuy9qHgu96S9i98KRBQVY5cRXXHoZma1",
  "key25": "q42yy3eZ7fhcamhBvHkoyXVeKPqHoNbsuFcpA8m3KyKFhMFNEwBUi1yJUj5w493P55DZ2rNxjYwkQf17rKG9sGw",
  "key26": "4WCwSs42PgifntosgADefQSZB7kAxnD4mMErfQEqWbKZMNxWj1nueXKk2bJ6zxA7hksxeMpb7EfnCEEjGstCEKzm",
  "key27": "Qr9zq8z4CNfK6FD1SkXDfUEJ8MxVUGszn6fCSdHzR45ekK7B1yLgMQqQvy28d1FSCUWvYDCQzbmKGtzRaDGeV3C",
  "key28": "2PRd1fxXVgBjhTMw58AsETRsEVE9LJqzxpD3tMVRgrjYGfmGRWF6Vn8fFFenGfCmX3rCv9rwMmho27QRN1gibr4X",
  "key29": "5nXStbBMDiyFXyRJwWtEgtthaGw7GAiXJXJwybMhyupxRGoLNtnQkBfpW7SeGPEDdMBwNMobY7QoGdH73X4KtWXw",
  "key30": "5cyH2VAUMXJLf5hEDt83uNd5AfBK56MnJRbCWYwVYgbSePiBMtcwojFPfReLdyk685XQ3a1ctFdHDPzamC9bSuW",
  "key31": "2rvvs4jdSDtyNDbfjHpSToyN6KSeM4GPaSjhHSzQcYVydWGepZGXC7NX55wqYWe1CH89AAHGSPCoa6b2PN5srP8r",
  "key32": "42jS4GPQu9NHi4aVUgDztUBm8vvMCQkFeBnWctJEcD7ecZFz7sSXj8LbdhHYxgnpJXKWCyerVEyuV5CxFkHFCXTJ",
  "key33": "4xAZquUQdybM1kqQKsdnnFpGQyXq3ez41mPdRjHeYHZPbqBvuvkXooCKuYH9giAS5ZiicB4oJB73XpiLabiNLjA5",
  "key34": "3AA93koUZ9AGrQCUeSiP7fuPw8jbBsJhrjVKrf58nNjrRxvx4cU8pKWpKEpSAgM5NoQQj75x71CRPctS8vcQMPwc"
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
