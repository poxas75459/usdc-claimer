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
    "2TdMzzQd2yh6REEwsxU58uF8i2hTqkgbxeimgCrzho6WJck8rjKSyfRGXxM6LYJVEcmHwBo8aLCT6bvMoh295Z5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tRc7gFxMvUpP3VHypQcP8E6kDEQemes14kSK26Y5XnEDf9k6BskaENjLS4msUcB4xx3SQBB6CdM18Ns5YRJ8WX8",
  "key1": "5XWmGRZzwPU8Exov5G5HcMrw4j4KE2hP6njwHzck9ni2vhT5kngDUENjKbwfnQqJahANzu3ZjCWPXedhtsgGiE91",
  "key2": "3Jsqwa1wsGRBTw9bip7PYZ8Gy2Gk52REmGKLVmPGXJPnfRCjQZSw2rpZKsCmaTE2qzDouhK7ZctgNZygEfh75817",
  "key3": "3cCcmxNDmHB6waq2YPKjnsrZ8GEbTYQXsoYJBts4AsYESNv5SWuj6ijRqoreKx6TJvfhbE6vGZTmSm1GumLKXCLh",
  "key4": "4uAcb8TJSErKgHh6LfE1GGLwSY4hcPiCYJ6a1HTPvxjTU6LiApXKJPDRxxZ7fmbaEHguHcA6ebytA6RxEqh4v6qw",
  "key5": "8fYYu7hETBdoHaa3xxq1RTUJFNRmgLpbaiu4Hyw9W61QBT3Yj9iksW9Apa8iLdiGMSJ4Gbq3nGWNGbqs8ZYvQPd",
  "key6": "2vDmqCEXxSx7ezheGEswdtuC6dRLzTnNkdqh7GEtYU1diRxRqabmxgNBdU2HAEAz1bfbt7ooZ31keK9cnL9eZG6U",
  "key7": "4UYMaLY8PCuKv33ogxg12ezEgbWqsne8nbUJVqDEwN2zFaS9oCefFiBX3ZvU32jw8RE4S6fASsvnLGq7oc8caqvQ",
  "key8": "62sHyj3ENYjgQeuRegRt1YDhusJPibj8YxF6A37pYDDfx8UuwbX7rchHqguVZbCsxXRv51mqczWQHEnF8UHn5thr",
  "key9": "4Mz2QyLdYJoK9tMgi1wDqDUtxKBDPsFESbQzajUtu16NNb9gLLhcwgSbcoDpa6BeckavBjWuPyozYL2NiW9NhnnT",
  "key10": "4D5YAezQNbRMbnADDbbFqGApWqBwBRAcyGeF57UrdSX8CWVcek8LQyAuUmh1vVHjfemDc33BS4ujDEUiFpz7N8Xx",
  "key11": "5Cu1MTad1GkRNE7qNmFRFiJp9UT4otP7c6TPcQGbYsb8TEDzE5wQ53PZDzbW7VQiHYqxhanJMLdTjK8sbuW9juv7",
  "key12": "5oZxuXkaXWaA6LgMonxEoov4io7QixMVVY9hcTx4DbCPBwZTva5AEuyxYxJZAxVYo9Bmbki8pgqufCdNGf3dRug2",
  "key13": "4wq6z78K1dvWzETNPmSLeh5x4RZLjcFrgRPnmPd2AkfUoMCtxPNWW6EGmx89zkHBHCEPb4E5xoSfDPiEmGkGd3ge",
  "key14": "5tBhT98e8ynvnfhUVYBqsGzPYaPKQj6kbFEwzHcs2uCpU5JCD6qqWXXvwtqvz2HYpsvZFa5Rp6e79TLFDnLDCta",
  "key15": "5SNLBmRXXVTuFvaittQ1aTv6zZTHwhKd4f97rtDQ1ULZim98aif5JSokBucZQGbpHUvdshxyuRFDrZgRB3YGPQvp",
  "key16": "5wzUjfHudFbWgiuyDeXyeqARkhLbBo5uJEd4QCw7keSbmk6xdLFzbre6ETzc8gdVc7uUkfmRiFF8uGCyKiRKwd1",
  "key17": "61oGrygVtn6EzkvBwXFjAW9oCm6jUNw1yi53H55PhouZHgzMdufkXMyGCKc19PS7BtnjndQ8D7LdatewNmqLGcw3",
  "key18": "3NPddL3M7oJHL4qwtydRjLG2qHbLsJh5QYhQLhgdPyXiVBojyvhvYT8ug4wzRWkDb1Lva1S6jNjZZZAMDQLudRFF",
  "key19": "52PaPTX8MLUnWPxXNDzqmcozKm9XwjgtN138Cw4U6BbKfPhp9reQ3jEs3UbgocqSZspbXctPnL2kFMLjL8vy2yRM",
  "key20": "uqZTaoKV7Eiqy4hKsckvSqn1R4JVGThaNSYZeDMBoWdi3BWrTawQQ9ZzUh4ZMUADe2C2uKbHt24hthkfASeJP7o",
  "key21": "5LHk9maVFCQktNmvGBPVhGw5gugfmD8VpD6jDgtWPUXqujxKJsQM8dBhRC3WHdjf8jY7Z5JMR4CGzV5fKzUjUuVF",
  "key22": "5cSkKFx1Y2KWfHuRvyyaitarAwD6XEpf1n4V8WVBRKUaprLcYEn5te7Lnuo9n9bQHS8PJTPZcXHhfmbkeAf43yPT",
  "key23": "hmD3Xubwd4LxYXin2HXfvXMhLHRoCPCqWsy24AsPvKGAPJSjWgi7FQCfnqspeVYwnQ3fUz4GVmh6JTV75aLcBoz",
  "key24": "hDVvctdP9aXYkmYumrR2CDykXoZC92s7nJtcJLNPBLisuiZRZ7UUcvRdZX6As6WjjaLSJTCG1P1TxEMnMviFM6c",
  "key25": "4tP26g7sksSNJ97F6zZKkudEJuGv4NxnQYx9gtBwumJqW8YezMDgeRg7MUSGmtR4egAKzYaiieF3urHXHMqh8TDq",
  "key26": "4U1oYfXsoxfVMgyu7XSENLTbU6vBFn8DrDsv1aJ2qZh5tJm7hNjrrG8HrBbJjhsEzgSeCyPeX8Uy9XQVoonfSagR",
  "key27": "2Uq9fgtrY7WjwqszqGKwFgL1W3jiX14HEQYc7dKAJUp8UvHw21UrAHisrfpEN5b11RFur8ypMzbGqZVfBJ8JJ8Yw",
  "key28": "5qfxvkLvVA1KRoURTfwPGs5dvEtQKVQCfAFYG3UJV5eZCigKGyotiaSzFPG3p3KZtPX71wv8yHtGMQB1eoSkFY66",
  "key29": "8LGkyQCohd2r7XikXhY9kcTBU7ZZTbdQPdgTjQtwWmWsXVrjmy8f1uXnJnhZTexPk7QJHvacEkt5snwDiYwmqMj",
  "key30": "3DC1VuzajbqR4DtWLC3RwQiLpc3giCoWoWjYedg8eUR1VrdPxNV3pjWWY2bPZmsMhc5chjn8wKjqoKdYAPQ8Wia",
  "key31": "mm9U9MXmSp7Td2uL3ASkuWXucyVKzsRVMCoFEi2XeyA2sNCTUm7iXpxEisbbXAELqFjmBCKV2jjpkbQF92xESJv",
  "key32": "4txF8N1SwK2gWJbnbBBUBjZ5B5pkXMd99n5x7z1k7sqEs9U7cop7pkL2v4iFuQWqs44qzMksSFkYYd2mw3modWU9",
  "key33": "5pSZXZcMhnhQzPMzrEYiyFYKfV4GYn4hFQBHk7KmmuUxzmRL8wKBoRiUptA5qjnvdAKREiRWwzLmH1tgiidxTLjH",
  "key34": "4d6Xrwnqd6jSbqEAr62kW3QLFqwa3fbYm7Rxg2e7t22zskPKu11NC1kPyszQmAfaY6DJQPCbEdMDCZJd427y3TjB",
  "key35": "LcLwXxPzsnhqnt6MyXpSU7Eua8wujCx2Gv5x6wAXfenkMjrFSYfL7uxTGM3N3KVtwjXDTaUy4SSD6XV7tVWpNCw",
  "key36": "2AYHnNegghkMk4jCv3Ls9pbBiMEMcE1on8PHaUVgHK7Jf9hi4yR464c6eEFY2c8H5gVBdTit3Nu3dKQqcTWTZ86y",
  "key37": "2XeyLEaLBvKcR56UZAU6Aw1kciJP3TnpeTXATYPxJYoVFuRUwyPR4PtCZydDZFbnBdseTjxNo54X3pcqJZETWCLU"
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
