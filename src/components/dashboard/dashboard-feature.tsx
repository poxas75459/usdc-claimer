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
    "4ZgZqj7cNpb2wHpNdF5BPUGQEaiC8oUCZDsbFg5UdbWC4FdxuiGPK68x3fRbQDbnBPGCHGkdFEbT4doM3huUTQ86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q4g87H2LiXZBh9JDTknGLfGfkkxnJJ6RC4FEW6Wc7fNHCgdRhXLWF4UVCDVfM6kJjMYKrD6iYPGyCVg3y4Yobbk",
  "key1": "4Bfyr71e5HnevpYuaCk17CD7AHxW6eekpuvHoEyYCSiJ52GJWPTT4a5PWmtnp6LagkLmQBYyjRjxMm5STpbAvoBW",
  "key2": "31Tis5KYchvZiTWJoCF7ihuQGS27gCv1A2P57f7PbDT3j3bGqq2dLCDkmytkuGoRg9ZxaKJrZAFhJDn46qN9aY5M",
  "key3": "353dU6t9FBccjeftTvZqJbzAwSkWg5QVqJhWCTLWfnYNYAq2PX5bbhQH5pPjpHwd7vVG89gK6TTGcVZrM2S4uq7y",
  "key4": "24tcz3UfGH4qQJukq4R1bBVmgeMdUv8iW4qRgdeEmJqKWLXyMzs3gUwxTp1bcdTPZXvNM44mo9X5mYguq59Nj2h5",
  "key5": "3Trt6mQMq2DqeGuwk8KPjcoD4M2aJ2dRYtoJLX7aUyNA5WmgLWZrHaEyPnEWDQqjJb7McfhDhjg3FA2c5SXgNgeK",
  "key6": "4NBQRfv6qBjnbTsNzyU3gGs351VCqAkTKbT1MESu6r9d8GkuyuKVTYqB5MJK9imNRLKSfvLAgVJ7KzYxoXz3bYqN",
  "key7": "46TgNFJMCfgDyd2FnPSyTSX1AwTGECA2eALDHSxSDYw8RFAgGFL7tgbPyHPpEyQvBz2npAb3Q9KxA5CYUxNnU3PF",
  "key8": "5JcUQ8daVjeiqPWRk5ZJViUY8ZrvKo5gF6RoUrgpmQYVbT1tMgSDS1Xgv5oNdS6Tb2w4LmCaYC3p9y5rBG9vnLS9",
  "key9": "3DXNgMX9gfMVDtg6cxaRyXvpD4nJFJe1N57zJPRvLAA6nVg51TMJintnYiKo29zh4rHQk9vDGf6cWkJZNYEAoyJg",
  "key10": "5JgmZmVfcU38KFcB2RjRR4Z2vzeB3pLzdeYZkWdFo5aLZi7zL1YBk4ab9zdSmV9JxsSF9zJYdkFCC88Qi7xHgxiH",
  "key11": "2GiXu7EzmEWC62BtC98nQHdGdFHmfQYTqWncau4dpCwr5R4JicbJitsEhSb9NA1GsjYKJE4WwLwBXhVk2PY2bZye",
  "key12": "3UGwg9fse5s92hW6TePcpCnzxsn459Nv8C6uRhnpViW2yTLoFS8YpqZeWS2FQveeNiAjpdWnARM5wZftWEkYRsrY",
  "key13": "yNn3aELQomDr2CSjn7qFUwmdonpqWv5bAPz2SFfZfdGeAubeiXCfNf2rUen2r9m8gVUszuktobrChwGErVjUqYv",
  "key14": "5W452gjBNf5A98TCHMMKA1vpR5d7aLxS4MMeAcebpwNLTNFomu6Mi3bVxmVUwNUcEVFXGvUuRC5x1eXqWabDTe21",
  "key15": "5jbfTykVUUN4h8AFSC9vsUJu5ocyRkdfRdna5ciCvVeZCRaFYNrCr4S1JUDwa8TemyhRBBhgzwtaVvc4HWHyiV62",
  "key16": "4QKwwYXztRbXn7YZ8xDBnfuoGzq8Bw6TKgctRGL15JDJYadqtyGsW4iFuW5GFSmeKFozNtirwqh9ajZBGN9rsajt",
  "key17": "ey6KH7gRPnM17TtEYxU5VqZjNX1jCpjS8LSVTwSwyzHghJypdzfgt5ZnHYEDELGRksbMQ6sVsZWckwaPWAc5gBC",
  "key18": "7fsuFa2cEabwe56fvNKKYndk2NQ3zaJxGh4oU5GtikJrkb11vCdcQJP8C41GtX6ZGgcfHt4bfWeHc1HEr8JfioD",
  "key19": "4WtxuiXuQ7fSHJahmRiCzjdpnPz4auiF7TL5aMH1QpmG62M8DyLbfxyCw77eZwDtXeBoNNK84zxpD3s8SQaZE5RW",
  "key20": "2bVXf83uGrTiP39FUQPNu9F6sbvHyqVVJmBmCw9m3sySALMfSoWYiTCsNGB5bcCYnhZAEPTVbnTFDtu8z2uZF5xD",
  "key21": "PPF21eeSNEAbcSFdZEB6hP5eEZgm4SXLg3bwkH4V5ZAyd7PX4PLGuoARY1Y5q8EnDsUzm8osPqXaCp8MV88a4v9",
  "key22": "3y6gRfbUbtWgiQUa1GpdpTxLBjZrnG9ADdNchSuQfhcbdUWavN6VAAhQYtEYTiPJjjLUHRaTAhBpGi9zB8WTHdBK",
  "key23": "2dq75SaVFeDZBACXrzDwWgnWzuADJit7KYGvcrDr161qxSe85ibLThLEQM8u3yhMRzHy8Ggy4ax3gfe2x35G5EGf",
  "key24": "5ZH8KZHN1PRdDpBhzJzRexLC42YMUgbGL3ze8kRyDAzSNL99dTgdt7d76U9amPMgUJrNWQf1X7kUr7hz1Up86TaD",
  "key25": "CiMwc9oHjpmx5baFB3qhdYbGyaJNtRij5BTxNL1TSxqsB5fdNFeLBXpM5BXUhiv3hPdZEsTmHN2P7MBYpFCSPRN",
  "key26": "22TkkE2uEZmGuCtn9PmmVHcWzubc7o7ShCFLDpYWMxcM5dhHAk5Q5KGihrtXM6RL5B9fk8EJvZDDje5bvzuzjsqN",
  "key27": "5fAJFm7aJF7AT1UAMhiP4996Gt3R8mevW6DfkP9DP9ww4jri95NhPmPXRk3napvyGNYgHJpobDhq8TuUWi1tHFLM",
  "key28": "2gvrU2ioVydmKCgnx7aRkjETJE4kwYhhJTJvTsmRWeEHJKMm8ynqCwWvfjczLgibx8qE1w4MgLU5Whnk1EcrjkZ8",
  "key29": "2fwmeYRBrEzYwgFEeq6N4kbh191kL5Aioix4DCLnh7ds8mtUpvKRXCGQFG4ZuSoThX7xVtm7FQ9ThTisVbWJbcrU",
  "key30": "hFQNDXCrwBr8FCcfUKogs17wK4M8YF6vU74E3q3wBNCT7DPQFDKjrVRbeGhz8RzVCRJ1xVw6Lb4vVYpvSDzEWoj",
  "key31": "XztTDJatctrX5hVqAL69rYQCcQFVXCzyCkbXHmq6dD2bTdpLPQWxPS3n4tsQ7fiomCCpZNP3pogktQ8VjZHjCs7",
  "key32": "41Fa6or7cVD89ACsUDQcxcGqUe4rmWnKfGGgHag9uaoAJX6UcdJ4dabzm9oEPxkWynLvTAHKwX65Xre17j79fAkT",
  "key33": "LfmXDpHUjG3vEAcZQmcArYGXmLVtQ3jF8j4zEXU1QyYwGbtaHWsASACGzGXJU3YDoCdsSNuYFDUxdQAJxnNZvQy",
  "key34": "5RAyCmvf4teHFtKEX8jYFk8hfnW75oyLMGq3CNvDGhaQjvnTqNCtbPB5GdeXs7jfeKZYZoVJb7U6CftXorgqc1KP",
  "key35": "26KUPoJ3h7x6VYZpHd2varVS7HQztZar3qAcTEZygio9rDV24Rj8W1qZTN7pGsiAs4J8U9UrJWpYPokYwP4EWoaz",
  "key36": "3c8rHJYkx9stkvwLAM8XHp1pypt6ia4xeA2ZPPDZrrffx3BqkDm4oNRQSq5YUN5zL8bF9JCNRFwKT7ynBJjpg3VS",
  "key37": "2FKsQE1F3hWfcPqNSetsS7fuhETzCFbKmUrWQhDEeY6ZivCLDgG7vfGDzW5zydjmEmJ217qY8KaWjocew6UHRRJP",
  "key38": "2ut26JL47r1NhiB4BiP6JMAcPviN5BtvnHimsnYFTn5J44Dc3basgvCRzUGh3o9hdno9NiobVXVoWBnhsdqGYRAq",
  "key39": "56pZ7CYw8i1Ng5rFK9ak9dYG6DuXFRMSnb2eNEgrN3vKeoupveDRGr9MSeWEYKJs9C4GjAXZUy3vPT6bMkFny5n3",
  "key40": "3HUqVZAsdc4qD4Q6eS67RLL7FiDdEUJQn5hgieda4eRsKJNJFnbFswqRobJ5NmrHo6oYuE3D7avzmZasSPU4mkgi",
  "key41": "3fkaXJvX6wJBcHKE48NX9j7eZg1txp2SZJkWNJyoY9UnQ3zdxtvrSBmq3iwAHxVFcXYPCd31iM1FygRJa5N5xGmg",
  "key42": "49ncDfpsWh9yfFKJYWDcCEp3zkdLapAUpRWy4BSWUkbe8YtY5Ncao6TXLLx4NrEssgTpkx74wUetvszaTZG1fuut",
  "key43": "coesns7qSBjm2nGPvyh5Wr93orncmCGuiLbzUtVHeMDEwyPeQsHa8Beo4cKyWqSzKc99eXonctDPTxVMR2YLcWA",
  "key44": "4KLL8YSFGUpU4YnXJMpmERRWwSn8LJyGdQaNxJtbfnshHjQLZYRzUyUz6UhUeZ9S5qKPLj83cWceohmhAyLqYT8A",
  "key45": "SA2DduhZmGLEiznzhauu8nr8Ay55UyPBtoxWBeiqA85pvLP2DwUWhUGs4sKMhZEVLTjjiriHNcahXAeSq2ffdLh",
  "key46": "4rcWCSXvLrpSzxZDRnZPqXiJGExu8K8rWTQSKLkFpH5JaLG65575SQ79KYMyvn7xYtuAnsjdjXfPb3gJNtdQidkV",
  "key47": "2gwL6e1KjsPZJtSXu1X9SoYgu9aN1J9L3jCeHyBkWV1qK5mNuoY9XuXmdZzzSNv2YSsqngfPho5ThzsE5QjMwwD7",
  "key48": "22BcxTGCsignhHLU1wDp6KJDKoRCSo2yYqY5mTBFZobyYo6uBaJ3oZXJZxpJdnDw49pNcTKod79Kf1JcBs1vA4PG",
  "key49": "3i1troJJDxYZ7TVY6oDXnva7pVd9kLt1LQCXEzFWR9ixDoKHpYqeT69B9DXTo4EhuUvh6Wm14nRpYPTLubTeF95W"
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
