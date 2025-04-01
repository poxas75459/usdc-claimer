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
    "4Wm3zeYDDrcjuUsDCvLSwzR1E6NnLNFCxfTN4SBg8SbCK6orSF1ryoQSFV5hBerqnsc9xcEdcW2eAU2KJAESTcNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SNw8AYrUkdV1DpE9kDxDzAdNgJDUgUDKvAej72MVfciGJvZRapvxQn2wNXLKVRdXreba8tqg94Uio6HhNYJLn7K",
  "key1": "bUxp9dJCPJcLNBbyPqWdjWoyqvKE3UgHY7DHqJ63CQTNLnADBwPyTEDnXFfHqCXxmCVtvbBL6vKYCD8bec65QCM",
  "key2": "5PsB9JMpEVCe3werkt6wZM9g4Li8GZzawLTXFJZRMXBCXpU1XBHLXN9dDSyLhcvWvGLoxJRziqdneuTTsaqYYKV5",
  "key3": "3CdscRXggTt7hAiy6EUwmBcFLt2tzLjbju2xbRo1JwovfFDo9uYLwypiEBPFqt6Z2ywHGsGaJHZwNGcgepxWpvxC",
  "key4": "nqUHzhj2J8TcVn2mzaaWx5XKdxgXLPJxQvSbaSUoXM5Xo94V4mbWy3y5qVb9aiTdGXeTrdD3EEoriV99EkGTamH",
  "key5": "yXeKfWmSVeoHrVYpJiHU4ghPrnrA2Up1PH3aHDtXPqWXRBpFkXwL9D5XCLswMD1zM2x2x7Zjzk4rUa4uxv5gq35",
  "key6": "5JNTDeQqJBcuGUNc8amWqWmTF4L7zXVbeSMch1LpVMivJRfHUwGdAWEgZ8wW5h5aSZd5iS9fHp3w4fhLPWXYwNgZ",
  "key7": "5TomnTTe9PQw6Zo2ckrUWDE8r8aEFwAx1dmLKCRYQmNfzHg8MnhCHYcB1zNfigWpgPLEdphNkjd9zCPHUNnxQRAi",
  "key8": "5jW8CRcbQ1XKdH1bEex4mheBaXNhW2wtMs1duYKo3cwUBaJd3G4vYUq3tmnZdkmfux3QX9MyN3jdCiprG2LKvSGg",
  "key9": "4fWvNNy3JZLTprmknK9n5pNpY4dqYHbNLaNuWvZYUYpBbBVis8q1157LgvHBENZpfZK83n1uZSN8cfRqm952zBcZ",
  "key10": "5EBuz5YUc1LnqSMCqf7sXZ2zJgTHDvCxAH7dUcroYBTRYJny2fjjZKc7A5jBKSb9QwYPYDDgNMXPyYBVHmzD7reJ",
  "key11": "3xrpm8pepT9jVKnWVsQRdmgjTj74pzbD4HDL1dkA8bC2npg35iQ8qDf9k3ARSdVNfoyAv8PSCF2qGz1RV9RKuXLX",
  "key12": "H5uZvtfEAeP6TuxbyHqgSBuG2vp9xnLWMHqAs7W6M9bZX5zNytc3x9NGaCvvVAx5yZSkyRjAk99zybxPWywi2C6",
  "key13": "3dzd9hv2vi8D1DkhxYYnEF18b8EzQx91fMsXsYLkDQTbk1aYPbEwhWnfHCZhBLsHN2a2ezedLFkuNF4Njicro97i",
  "key14": "4j1QvgBD8MrtTPE7yk3SE3vthrZWntuuE6ZPJj2XiCBJmY1aZaTFd4GD4xbZ7gjibTteXaK8JatPL2GGkBerAsTQ",
  "key15": "2hxYjTZL1wptEgVrMsmBg2JArK1XUftmTMvatKcefJNFBQ8tzgfraFnvR75F96HNxiB3qwenYBpBEytEtvX3931b",
  "key16": "36i8AcHSp3LZqtjMuKoaceeP7KaJxw7QQbaMkCuiTj7em4ziU94gJNNStG9bGDAAWDntYWebgUb9SyxKB3xr8wJQ",
  "key17": "4pe7Fv2uE3JjVxvSvn4g5JCcMXs7apWp3rsg6UhTH5thkZbyY8Knx4AbCVJEhEHjJmCsu7FmKpwbqrexGaSJd6p5",
  "key18": "2Z5NatvB4hen4LmYXLWa3qWW3UPoieouAS4hxwsy26BTYhXhbdHJ68P7DrnJK7a1tK4XEw1ahTcHNWaJ37cQGq1Q",
  "key19": "39oKpD9Fyx9Txdbnv9S24kXyKjTNo3CkTxHg2n2JkGgeLEUdBn19vcY2hJeX6jwPQrb41YdXL8EFgKVGRVwBf9DK",
  "key20": "4BbshtCaDvWaZLZQGV1v4mZXbcjPvBwy9NHwhBWCTegbYhGeyvLWyp2Aof3cdM7e7UjqkpuCwP1bmJnJc9LzYEJ7",
  "key21": "4CNv6kZjmbjC542LXLmuY2q99c8J9pvx9DATz58pqaPrfTPkrjwUcLxUqB1672bAtLYWCcLYS2wmh3PJKzxm1mqy",
  "key22": "55uDpCgY8ge61nQHcgthpZ6amEvc79isjhkmDxW7aziE6oVBkWAcbZCnNw2wBhtruy78CqHY8TYaNydc9ELGCHpf",
  "key23": "2uPh7mbd4s4r32xZu63dTiju43jzvFDaSoKAE4BQ7Fm1bcB8TqWy9qyjrvup7Wd9Ysy7G8KeUNRUAaWrBvMukNex",
  "key24": "2cKx7aKQjsipZJC3spYjvsyuDUxUhfwWzEsSAmGzbKdmP5zZ5wB2rqvmU5EVZAHxhEATrfgsWW4s7NkbJnLpKiPj",
  "key25": "2pMaKQQX5sk8figY6QsZBQ5jFrJfirbw5Y3etGsejkNKVqi57CELSZjC2eaSSzSW46SWEfAGFE46KVZhQNBLhn7n",
  "key26": "Y1NFuoWZStmdM2yWkGB9Cd54PkiP4FUxmqHoDvDB8xmBuy8DkCWWEV9JDz4CAeveBcKoUoziy1B5g8HtP79wQPn",
  "key27": "3hi8fC82oR58uwUunNgWcs2mhdd9y5HuhzeCWvN7ouLpVMLUesptSEtmX3tQoaTNdDPku1VUcU3HWBnJMCvbynuK",
  "key28": "3tM7QxUT8HTxWJporLFef56zPpgRF3ag8ugckM4XssHAgFi3ZPGpLJpUDBhDGKurnUTT9Z9QfxGkTNUMREkBcCi6",
  "key29": "4c5L4Tybe5TdsWqFfXZa5P4s9CxMtEsREdPouNxdcTD8iFt2uQnpABHNLxBtTff6LapURbKJ1x4vtCsr8JREHfng",
  "key30": "3Wws4ZNkLDPjLFQmzD98aARhLpMyD8DKhF6uCj2y3q2vVZSXWM2ARg53r4wQJoyorhQwuZ7Xc5YSe66wHXem4Ga3",
  "key31": "3eLxuZcszk9A3Nfnb6hmKmmYxwWkTXpyeznrt1M3W3hFNAvs2TMp1Rq6K4fm3aHT2wRGj9UdfJejtbX7wustXEDe",
  "key32": "xvijGCg6W9C54rK6nwrvPSocMUFb2LQzpo6XfQd1VXHYEK9dY6yKkdhdc6S3Y1nnJEmxLNSt1HvmiKqVa1YQaj6",
  "key33": "4zJM38Hend5CANG8ptd41RUeTd7eWBd6XjhtMby9MLLySrY1GjcaCg7mX7VbtmSXydrFsZm8zHmDd6iNqJZNj3nx",
  "key34": "3ZRfesBAGs4YnN6o1wBrzHNSba72vRn8X7gDuWjFFdVZNsK9yqvKFSQU9i8shPQEWJmEuVjwhAsPywtbUJdRQyd",
  "key35": "5YFVRXsBnUbkVWUfZ5c5AXsR5b7Cf3NstbEPjfvKmbHfwi9j1QLLEwiKv1gXTKqkfqhDNpTrAu4dBJw8x5LdYzQN",
  "key36": "4DYD55VfLVuhtBxV4QtSLZPheWfTYkyjqC4AKZ4z5uJKXf4QUGMbMb8hdVsnLVGaQLZPcUiGbHVhEy5VxCrieE5i",
  "key37": "2eYV5CQJPdJ6xwPHo1U4vCQdK4atD5r5ji1izo82fy9rF39ysogVDz54pdgHyVUSj8eMTgyddopwFKHUF6ZFxGhR",
  "key38": "5PJQXDkZMbjAKX4L6AuHEUSdMRgS2P8Ror4q1Y4khGpo1icUx6db9mhoJC1VDJBztRYPJURxVfWmDUitRa5HSBdz"
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
