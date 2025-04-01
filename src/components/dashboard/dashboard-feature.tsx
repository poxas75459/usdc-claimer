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
    "5bxZn1qhUgCkemAboe5JBvxUeaSAxCDz8hz2UfUNMygagiMfYZRiubrYS9CSec77WXyifwYZqoEEd1rnTwSDrsDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U3yxLi4GMNJzraphMURk72cUu6TdUfKUw8C4uw7uCWtaCiz84rwamDvcYQErvcxcEyFPb7KxYKU8QYwsZm4A7iD",
  "key1": "2SxQGDboepQv763uwY5Q3zrS7RecjAtQSuPziBCpM9sC5xchpTZGfALKwUtgJGTEaXhWkL1nYGekVBZaqDe7tErX",
  "key2": "2aLKxcenbpFR3bdFLsE9gUgjALVG8segB9yDkcxz6uqcFWgHLhzw11jeeNGKRJJcN3oiuJzuVweWzYrFGeXKWwLM",
  "key3": "3WnsX7pXgzHeAs4kyRFnTV3rHnbEgGzkCCAaVzENHq35F1SzECMi7GqSpLhVnNi3Dg4t5WjLng6db3SmS2KTy4dp",
  "key4": "gUAh1qioVxu42UZGeET8RVJg1CFQC4LTYfHCb3kZon1q7omEqsg1tduVNvnHw6mhgS3UzMgBThthvt5txsXemZo",
  "key5": "4tQYvZKzpY5UW2xUTZ3pwojXdw8fehBFCNQvQ5znwJehVUXh8rLqY33gZzwjerrvMSnDibwS8jkUwvmdtCn1FZ4x",
  "key6": "2LDqQzVTwHipkdGuqMsU2csJ6ECHZKqdQVfHLtvjUwo83bRS1p4ek8uaJPu2KeU6ho6DnEv8CktJNgxn1p3t29Xy",
  "key7": "p9tCKVQvhGD8dk5Z9B4kEEZmF5T3wTiERbH9gWP5TMjauXBNuuChKhA3zzofVUEad2QLGceABGGf1zPd1jPTrRy",
  "key8": "3UQzavdJEEaae6QNxJq83xUaoEVqCsJXQuCjz18eVAvBmDQGC5kG9s48Jf7D31SzjMiVUB7eDR3NNFvzrfWyWKwa",
  "key9": "5CiG5zL3VyHHdBZkJNVc7yr9rcVdQJaQWNj5UR5aP87tQRiqffows825iqsCGsUpCUoSP2PjW99BF5BqVZ2mA7Y7",
  "key10": "2DsNpjfZXNwz7fi3ezhmRYid6qaKVw49LyBNQERWgHgTwWpq7rQBBwKW5S5uP9btqqL6k3fHFrsJMbtLPr2tLoay",
  "key11": "318bcX6kFMc2jDVZnEntQHsCzdVjLo46sAeR2wuDL7rUCBFxppcTKY8UsRyxVPzQ38QxYQnhrqxh8x7Yztuo5Z1E",
  "key12": "5nk14qZWboZdn5eXukEV2NuNPhRDUDhdAhDz7LT6DjxJGgfhZGPKA12jmDqXSF8Ro51wAWoDhZw8GMUa3DjJVDD6",
  "key13": "29CkfwQSVBZYEZNX2qA71pyxb3HqmqrQJNS37Kf5TU9xa6DBDd9KegibZ98jbQN1NNUVrXV7eN2dWbjrSupqSi5p",
  "key14": "3pLeoYsZbVZENon4Upu64pznkaNsD7ZwKYCt9bZ5gJBPGubJqQhKT4RLhzDuy4SG6h6CBbvtiDDGfned3zkqRJFz",
  "key15": "3r2fhr9jRY9yijfNGvh15XfC6WVSX8qEqMkGvh1h5vYPJZkTPfAWbJB85xEr2TKkNrpiWCmbx6R5ibpAeNhE9czV",
  "key16": "5VoBnwfYbqPWMP19nKWXtGNQwUBuKYe7SVi5rcZncy8Jb25mAVdXXvgSYgFqfWW7ZBexk1MT4ZPk4N9NwEnXKPkS",
  "key17": "2BRzzGqbXu6AYKuarajtu5H1sfVUkFfN7J4YRWYSdZ4qu6KLA5Nk7gyUNhw3U5zDsEVK69G72RZUDnLFtkyditKD",
  "key18": "Ju51qtqiixvYj6HkuVkCe5vkoqsh94fd7jWyQUopFBPTSGe8s8pWMoWWyG4CRM8bBbyatpRmK5k8izYtY1DMueN",
  "key19": "5gUfxEAwFF1ie97Z8nnwXCoagoZ6VBTtGUYcLBjQqVVmdYPHuC1gLm8utiPgjQJZdb6iifG76euh6copkHWLngJr",
  "key20": "3yVbQRzp2qD33pzacqyHyU6D8WQTeRYdEP51yzXNE71wb3t8vDM9J6whAUqDdf7hpkQFsssAU9hhnvJfLsyCUccv",
  "key21": "45HY3xokRps47RZNb7kNeuAVF4f7UekSwwbYSVkPWKZvSEuNEBUS2vsMpomy3UaaawH9Cd4ceWUnux6szAA8HndL",
  "key22": "2sFgGJ8w3JcSTF3jQU4LAuEPUyV8UMztWoLSFBpn1guouKtBCtL3yBXmysUHLtwo1xpgtmt4DoZNbieCZLiA5iaE",
  "key23": "ErcT1Szn88GiFnLJgDF78ULLdwq3iSE5px5ycEVGR4KpKeZiwnQSHXjg3KnZGW8s6HJwneicmpSxg3XzL7ta89r",
  "key24": "39sHvGUVhBWsJLDf3RHu8CET8WhPSWoaynNmAs91aDyoErDDVE6uRiisPSwgQjwsDbPigD22AGG3BDwKg8DXcFDS",
  "key25": "J3tLAUafYZHaJfywmnN7UBWngdXzuhtc1koo5YmP7CP37oEXrdDFQYix5PUzaCz18bprm5eZC8F42KAg6S8Dw4E",
  "key26": "5F2VXi1dTzN6XpN5G9SA3DyxL2G3iMSVWvoJN2yvRgSaNrtNT9vHWcrYTkBmkJJWW1M6SncAewWxDwSZjQW37T7y",
  "key27": "52N2r8nAEKRj7DxQurZjzWZ7igLUmwqX4ouXqry2ogZAkih6pmPqCHGFRjtiziHdxUaCsykgPbvRvp6urtanYrcA",
  "key28": "HUY7nftuhrWM86nun4ptUdaMcE2CwFmpTxK5gEdPcEpDNxv6A6TnFcgtGzKrQSduxPnKTZtswvfv1g2RCSPoEGE",
  "key29": "4dTJRyq93P4bJA45LpbAEiw4FpNuN1YcLXBPj7qV5kNjDDkVZv7Ze3ZKJdoo9Ex325k8thiPxWvWmj9An6x3V7VM",
  "key30": "2GyCGuyMZRGnMEfKxgJYYqAaLm17RELmYSJDjPMqFRTz75VrKZE6tjtX7Tr1DR7mHhqFCXk9UBh1zk4nQMy71CRX",
  "key31": "61zFsoAiAzWBi29trPvoNvNh5y4eb3D5QUtCp1KNzkkCsgZsHpp17VKJ2JCrYcYxNTtrWFXkQc8g1gGT8eXXsw5c"
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
