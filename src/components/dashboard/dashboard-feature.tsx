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
    "4LGZmhqh5KwqNQoXYfScE5aBxsVJoD58wE9JpoBmzpi3aXJQUpwhYchbUowWae4dQyEqjCqS9J1QAoHaMB9BZshq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qbt6AFuwJnuNsWMXwcXWQPAQgJaVYbEqwKg1rtV49awu2JEZpQ9sx68bv1otLTbxMH959bBLxMH9zPoA3sb4jCQ",
  "key1": "3TxPVAFPtAGWLr4edsTPqQw7hamyJkMsYLPrmNhtiedgHspPDL7QW2oCrChATeQyPm4D3zieFvKis9j8XUE9z9N8",
  "key2": "2YA6PQ7ZEE1PY3A54PZ2d7cWWbiTKknHJKFSbR4dX5XH3bpyg6vJgkSpdgDPi7jCbz1HEY1j5J93oE8XhP6itEx6",
  "key3": "3LphuJ92wipqvR8NaPPyV3pAiycUYzDvzoCGK2gkMnfDQnSQizCfXV5ttrTdHCNbcmSnaQ9inNiV7TP4agSdxGMU",
  "key4": "sEDh7jV8MfkhqKt4SzALbwXi9iJQUyRiBknrk48ExZCWGaJHGjC7NScRw6bfyA82Zp8jekaCbB53TbrhGDc4gxY",
  "key5": "58RPbMzaQ6brnUsRZGu4YQwCdS2JSRfJ4cY7M9uH9wUJunhmMYeqFn2SCjGMNpbarAjd5S6iUNVVeYZDV337SNS3",
  "key6": "twRmKgQpBP1X8dUZaFCyzoNrxdeCcN5MTma5qvbREZs3KoPjuRatBXCEwJUKZFHA4JC1NZaQXd9yMCfPoq5PUeH",
  "key7": "4TEPs5DHSuGMPvrSuvWLugsDiLQ4McqTKikvFYN3yKuajCQSCzC5yxNoMVpt3wfYWg1QKCVrJfw4xWTTLTJsJa18",
  "key8": "4RNSQqJVKUqh53VcZzmmwT5GfGhD7GWXsArRbMXQXE2qB3GuLa35pG7BXTa2i3XNC1mxQxZXYWk6ktgCAjJqzzBq",
  "key9": "3fEWXZFLuaYEEhHxmkaHZ6kDd6mmsiwZs5yJrD4sMp7hFYFidJusqhM4Dy1UstfqEj1Ut7x9by4KfeQtf6ZYp3pL",
  "key10": "34rzMy1pe1jacAXnEiKxVHKwxsHtDMaNEdCz4Sh6rWQ3qVfszP3yeHpLurDEaJCVSYkcUiQhbH9HCpUgStey5Q1F",
  "key11": "62z3x5FvNeSuGp3Vpe7BY4FHeYbDWejLeFvyXyfoQ28DZW1JQUughXAq8kjgyhxZycxn89AaFB7VDsKCJmprnMPR",
  "key12": "481diQ4a7hQpzib6rtdouf97SrAZesCEu8Dgsg3YMr15tbLCCeggwtymB2AdyPAyoL1XDaqFYdL4yC7NBp1gfbeg",
  "key13": "irLxeZD6V6tKE8mWWFNWqUJnTQtZA9W4xTK3Smz992DXCS2ZxiEK8DLw9svUByLYGyg5in6vEfHkofR4CMXDb1i",
  "key14": "3FBKZpPEkB5hAdRiWXWSE3Z2ewCHjVTNi41LSnUSGgCSXdZfXtXhTEQP6r6avSqTCtgDfiKNyd25UiVWgVBa3dUG",
  "key15": "2E1bhzX11WTVHoPYdPrY8GKCExKLAaTay79VMq1JDEKvGU5zTY4rgEtCHj3btfq4mqN4Jwj84wTFJKEuNVTQnKkU",
  "key16": "3xhLfrXAu6Yb5hw6g3GP5pvXrNCBzajErXb5P8ZUQZvJ7YViCk11oeaoE6kfV1kBtz1s7ngcVHKrb7Adqd7mwTm7",
  "key17": "3WbMcdNFcBDjQfLkfDaPAVHKVCWRgo7dfy8aqixq9fEDre766qX2BpuMftkoo11wjEzPfnHri1J47HkN3KyxJzpZ",
  "key18": "75Tq2Tosakcw5KSKw5DYvJm5DQeWGsQffKve17hWKw5aL7qUdoSmHHvvGCB4W7eKqbztpjQS2U7osMNsjQbFa2m",
  "key19": "3gZsdwQdeajhXJwQ5GZzjteV6pgyEhDoHhd8MTiqdFFCt9zuUs5Aw7mpkbTZQhLjkzNF4iRuouqAcxxk1rkSjNaA",
  "key20": "oSxvpmDx8RWaDAzcRUURQSzLY9hFd2U98zn4YTuZuP7seQPmCob5fkGBksssCNR9gJhXm9Vv9c9KL855ZGFaN5p",
  "key21": "5aT1Vhu5KJygoPzm7dzHbuBuScgzVcvAWuzfH7YnyqZYRoZuxnyJbdutE2q4y6BZHS9EBV3iT6hvBfzB499vunR2",
  "key22": "5deQs1RsG1gZC24it8g7nfpcZxdqYaFzeDi8fvAyG7awHT8EUFGoYyRPaP8nBs9z15jB3xFSwB2H62pKzcKrPHiM",
  "key23": "3pfJoYZf8QhZMrDN8XAGDVGBvHMWAoGwx2L9eQXD3hYJ3V14xUb2WCuFELyto1vjPTEFRkGtM5T4mprTrGGWXYiV",
  "key24": "2PPFtWXsDMzeQY4G5Y5wxy3du3QYZdg8tAipcAeFxFaiV2Rbtx3GpG5qpU54Ce25U8FdEStrWnGJizkHzLnX3gL1",
  "key25": "4MnsG3QG6xfazcvc384JHCyrWz3LZNBAByvSDyYokPFkSZrf4HCR7YrRofbFD2CWFdLooF6qX16RKvyPUMPMbyBM",
  "key26": "59RZTj9MZxX19jux86ARoxHSYJxda6RxPsqaJkJptztcydjZA89G83KT6J82kqvxuC2WeCBSTG7dpkqttw98pncD",
  "key27": "5ahdeuuPpqKKThTTkzkSBGDM8McaaUkxGKDrrxiWkmb7PnHPBAoxqKLk5SBfTELtninBczrwhf39cD3BUbpVjixJ",
  "key28": "3uAbBc2ztjztzzFC1FqP3LJJgfHRy6Nokkiv6nEtatnjzmpp4SnrrdZwYnAdYnkqMnUdLq3woNwfJBp4VemK1bno",
  "key29": "3WkFgrMoxTQDdcaJMe61v2BLfqNeyZWU24iwgdSxywtoejv76uH4WZnC2aPnrM9Kg1NHimzxPk7aHTLYZGR2H1zf",
  "key30": "45rXF5UukBYFzxtozf9n7wx9itywsqhRuwyPaAT13zB6wvhyk7STLa8o8kN9yE3Jqic8bhtuqnfoeqW83uYa2Xv5",
  "key31": "2Pmg6TzK7aeQnFsVL12AqjCZ6t8tRWaUYbzg8p8FHQopcQbgLXcqDJ8FTuDLXh8CqdYNnezGez4gBv7pUkAMJDLD",
  "key32": "3KVcvQMAeneqdoGfJ181h4vu5csYu4Wb4EjkuJE5oFt243dL31mknESWxhDCzJ4YTyTHJC8f9nqgHfFEiHQ78PU4",
  "key33": "sTvezYP6kYtjbqgg9PHwCB41P87GwcuwDizWKu8YsG9yUiTqxmkGpxP429nY9mPFfVF8du1WpiZsnqks44fhKG6",
  "key34": "5z7ZVuQh5Qm19beH9Zb8T7SKMp36X7z9fzALWfFzC99jbUhd9TawpaYmkN2MSuhyadLJi83hc7egx1xPJFQH4yoB",
  "key35": "61CJVCwbhfKdB1sUubK5ynMVPRmgUTQoQXTUn4swFZpLVbCDRzFtUfQSxo1hKuxkB9PFV4nhEUP2EG8LXq97QkAr",
  "key36": "5TwChupq71Cue4an8k3BDaYaQnSEfQRCRAEBQPszy5oBdjUngTjdgY6rxn6gC2Nw9t5Ru9w3A3MdmDEkwaJbokcY",
  "key37": "3QPrfJnoWnrbRX5DLSH2eXESBSHexSmGZpXQ2yMXnKz8uSwKDfz4ftemgZ63B8GWoYbqBzQt9Zwv3bk6dpSjDzep",
  "key38": "3HoaRbyW4dLSnRLT2TJufcWuBqUpdyaKxwiJaGz6ysfs2Mon1kMLUGYETpFWFVRgwdsMsPGazztAZcw1My5hNyed",
  "key39": "4feypxeAiC76jDwRiZpgpQtJhhnK65uFxy51pYrU6kNzfCR3QL8mEsNGuy5p55ZSTcBhDzgfLbcNFYMYazC8bkuh",
  "key40": "3pZgCgf7Kfm1aEgD2kBJ4ZST1hKfMBnfA3t8VKEkq3uYzLqUSWntRtB6a4YrFPms8AsXTKpSFPPxnjUevnWboboN",
  "key41": "2U3TV4YcNrr1i6MeXp8NuKwmN5aVXkTUJebFmQufTp992oFPvCmhgXMQ79vXYcE6Zrm3yJLjyFGXAe2YxsqrCDNd"
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
