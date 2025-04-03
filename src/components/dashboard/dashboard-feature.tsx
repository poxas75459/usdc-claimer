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
    "624VneVAjFBzBykV1Ls1T6FQE59dfgSVFm5ZbXPRp2kt4fkoZyZQzyvmvf7AM4gLgBSwa7whTHjuwtsJh7zs7CrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oe36sx9Yui4pJCUWiApPJR5D2oq6cTpzBEHEuare74KdvZaVh1o5rFeLXKdvCTf3GjxwGEw9x8nKuLktECP95JM",
  "key1": "5qor82FJNbmKJoyetTGxo2DhYJMp9EtGLKHXWt162neZo87ThWcX8UGEqCZht4AqaM1YTwxdPRvjgAE6hQxK2T4u",
  "key2": "5WP9jd3GWbWFYWdj3ueK6qtG4pu14RiXTiUmeH4NPzZaq7DbnVp3oFLxzgQS1ynEfRMYA8bnjpdzsfCVmmwvYWat",
  "key3": "5uobj9BwpvnciHxTr7mzT7oTdZhqMajfrdw3B648iH9wdcVJfYGgFbGWkmXcqAPW9kCoQm5RYaDtpFLfKbE6TEzY",
  "key4": "2rHDfppT1RFfSQPZnRVToH1cDDQsfnsACz5D3yHFtAVqsqCBvJQvHoMSEaZAqL87ABDgbAF9xTCq5ibVVuBTHYpx",
  "key5": "3x11o6Hww3TNbVX88EVqpfB5LSv5QPirmLkP4ajevBpcSxxVFMR6XiHVtVNg5dYjLLnzdJsv58hC8erFMwdyyjBH",
  "key6": "5xNentPpEs7NqEKbgKfPWDAFsjaciftsH2EB5eAer6wCY9LkXe8XZBjdEsGfZhLvkhyQBfn4KN276Dx7g315rUJz",
  "key7": "29gvPSFrnL1fDE5NNdzwcv2vdQSRfZTMEwj3gHjwBY4Av7moFti43tjySMN3TUezvNqDiKGHeSGAVVx6dsfPhQ3q",
  "key8": "2Rpu9mRsPnJ57dcmhk4qL8tqCJVj9B76TsvsshKjZRFzzgnpnAJcE3h8oQhAoqhEuMHTm463A2jMceLFuYW8bpk8",
  "key9": "5vWxdWPekGDea5GQm9aEXw5iou3HiSorsYtoeeAekmk9J3WcNWXhdtTJv5RZQDeod1cKqkgVUf4y7nchn7iDiQ3n",
  "key10": "3GvfGdHxYDE5bsRZfsvh1rMbrkrAqQRbckr8njRpxHaqYHzTx6taxro7L4kbDkX4Ycs366DSpvf2EbBb2DQkrjzV",
  "key11": "3y7WwLYpYjU7L7isEJmgp9d3qfNFA3knJXKYdepJeFGJjyCtBEGt7xtjPcYiNhvYcprB3KxzdSfjsfBU9KTEAhYk",
  "key12": "5J3RyQQrrD4LGGy3rfsxUdx35mZV1F1rpCrEoBXG34zzxjVgXfVCmApViwuVpqP384KvDYLq28NtN89qW5GRFv1L",
  "key13": "2cW2GjgB62zvzFHxgj9CB7PabpVn46RWg1ALq3XFojVvRHVspsgMhKmDsjg5Xxg3UhdfFY2NjHWZSP8QRovAdwvA",
  "key14": "PN8tvaUadHjVhun1oC5p41u2jLhXEekt65EzbkRung2EUio3x68wvX9NCTBL4zWTepeLN1hBTCi2RQ9TjJGdtND",
  "key15": "3nj2c651PC4jASKjiF3w64JYfGiJwHTVzg66WZ95kAe3hARmyYJ8TbKBZWfZXsaTrw5cgZnXzzEUrvntikWwECVR",
  "key16": "44JJx14YirBXcNAHwEMmV6SzVguhbZGWYtedaz1ij2PAzhCoBZaxFZjAdnTESCpZcw3He9nq8aU5fyXPNrJ53vV8",
  "key17": "2yfXk8dZiRtYxaXsdYEj7kzm2EqcFukgD4nuZYyNp74tBj6VVkfrr1uVH8nPAjdaPowZf8RSdEqEguScY2JjBnpg",
  "key18": "5A2dY4nWdccxTA2fcEGHKrjNPJPQpLYHGefz1XNz3pU24j4dBC16o6gR73uHoGKNSngJwwUsoLD2GA58iPY17uwi",
  "key19": "5eTKkrXGq5MBUWW4TqESBJhYyqKCAJmN5i9hAirhXtrzCAPbUiQi6Uj6ZJM9ZPA4s4ztbFeTLz4y9WAoDoZxxHgj",
  "key20": "RdZbN83JkyKVHBGDuU516FgNX1Qb4NMG667KyeKBmbkKwXhtX3SzDMdU27M6U9r8s9moQY4bghotUkimFDUmsv6",
  "key21": "5NpLEGrbNkCBjwuNc63ah4bNNwStzjR7KVHf4msGohuPC1qZzSUCrwqevhXDs119ZqquWrqdVCTbZrJfW8kUiZ7n",
  "key22": "36RLCVXqArndZMrxMeoU9Zo5L3ANppAKm937r2D8mvyYSTav15rhzDw5jtJYfjtprwVQ3PmnnfdHgW2VitfwsUy4",
  "key23": "2sM8U2Pcuvmu2ZhHFy8ZV5Lr2XvCecfnABZz5nmbmX7iA7attd7KboNGu9ZnDGn1zW7ELq6Vt4jMmS5aYD8pyhuu",
  "key24": "4SozuCXULbf8XrDevtaCaKKKmR1eD7Z9MCociB4fNcZ6em4RaDS78hrAV82btLXnAnohsSBJqWigutrmFQnktGDD",
  "key25": "3SDoVSbKgQo5bBv4hiZPP3gBh9FJqCpEYsTFd6kAmF2mdAvGMXc7uKFQkoaKtz4MB13rW8ut5binGvn6jcF7c9RV",
  "key26": "4bZ9MJ2u4vMWyq74fWTytU6QjV7cSwmAzckbhQ2btijZxW9LBvyUeR1jen37kb4v2eBmuYa6JYZArNQR8JZSduX2",
  "key27": "2xyQ5eBHuARzjdYrK2F4YcfL9ZgXyVSHG4E4UGd3b93kEg8WwsCQd1LQxC7AJZVF7YM2Hu5Jx9eqFUngHn8WrRSF",
  "key28": "42HjVxeCHEeP2B9j9HSNBEBzbyuGMLJL9YCo6pS5unHRFdrw6WhnRt4xveTJrmQCB9K94e9XTJLSXnbUCWC5rNXR",
  "key29": "2cce7Bc5Z3f5UVXwJh6gShp3kMf5v5zNqukueUnmvAq54R4nKWkwkXw29hbzdaphFZAjrFsQWRPUJo12YQx7GTmy",
  "key30": "3Lqaj5dY7bHHjd2nCZsRw32ZKUSpt4qbBAaGX6KoLcppRw7JG9wuL6vp3iUNArJsEcQgZGATeVGszr6s6THGqQhF",
  "key31": "2YacqweygQHk3kBgWZwTcUtJDhLuvvxp988sRFddThCrNcYUPjkdopnSgbJXPKPVh2ZvV4rXETTgg8zim65gnMaM"
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
