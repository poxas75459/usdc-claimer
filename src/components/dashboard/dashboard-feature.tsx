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
    "4aLfNqf7SLa8mq4CQrsksEJPK2D68y3bpCTQdEyHSeCosHgHtXnVzxz4ZtFtGkZMaZAnGCreswV9miiQJ3aRbE76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLhQuXAmF9uSBS28uTtUkaAhLmfLuBczKBv7pqb3vfHq9R7MrToiBMedy7uRtUKFxfaZy5Breaz3bi2Wnt1EsLn",
  "key1": "qjbdS42E1fvitPFsAEgWoxNWUXZzkzwiHVpGtmBvgVyKNZeQcAvgyQbsSe4Z4b3UX54N8JmoUtKJnraUbdaui3s",
  "key2": "mwna6g3ZkqWScq9qn5uy8NPvnFvA4vm65KfjRagDBz5QccqfqjntbtEnvjrmvhu5LHjzB87aXc6F5EXdJKAfEdP",
  "key3": "4CYxUpnw6DxexDpkJs8Z2WHAcTd8Y5gS13tzXwDPYT4RzvMSt2pQsdCh4VPq2vk2JCpzSh4EguGRuP6RFzwRxAYV",
  "key4": "2z3a8Xtq9EWxMPzfU4vfcxp67eY3qtSf9CpWYiNM4Z3QwR9pahVtmJF7zYtN2CpsTsfJaQmS7V1bUVZxrU5aPZ3v",
  "key5": "2dQoU8Xsjs3ckNVsvSYQ43yu4c2u37dXp2MUmBP28dn6vqDYQWWeQKN2zNLW85qUr1WvsFrw9ipuzvGpdem25AkP",
  "key6": "93XfNZC1Tm7wRs9NXNKS3gtDWGkUq9X134pC9w7gXH4PYyWeh9QJFFYrQu63ZLemkKD2YedUFdjjLHNmYfxJPku",
  "key7": "3B4Y1ToJXJeXnZ7WuqUbV4SBRbgXykCuBCf6VS6T6JntqNseuPNH5zduabtRck3u4pP11TxtTy2u5D3KF9BBHzYm",
  "key8": "23HGbofNHGjxCRMXisXNQ4oFZZWTvqmmMeYq3acwF1gWCQJgG8UWWfeeFQQNbQanWG5xacUDfmMdygvBpNuJUZiU",
  "key9": "2dpJjfJtAmpnH8263rdPRDAxCqn8hEaQdiVp1535YcYuUPTdKiVW4KyL4zdHhYBj1tprK1byrhhS9U2w72MaX8xc",
  "key10": "57AYttuR3jjDyehud2xdLdaxgP3QEF4qTXC9EzpUXLVyxkoNY4G2GFtxYmHgtgsSkghqXVM5qdYfW5xbkCnQsiBE",
  "key11": "3897N2xWGsXTYe3Sfk4cXA9dFdKziVAbb6a87sLnSC3BJkbQGA3C1z4F8oKHBbdivQbuG9bY9A7BtyDwX3iAsFF2",
  "key12": "99PFfd5eyq2nhBktcvQfeJrXze6MExnfpQzJViFGSY2qiTAGL85qFMyji8SL12KjqyjRcceYMEVUWSkMcPV9kmd",
  "key13": "4Va7r978wafJtjDAJCNzREAvwR45Nxwvb6CP1MHNLEaFD7y67Qa3CSwB2NvcDM8oi3XEMF3gxAfh4myuBccyn429",
  "key14": "469LPfb9tSaGabmRYPW23etpqqV7oZLB3WMF4d2mcWyR1FkqkAaErrh3pZEjA1p7SuACHe1ZTnkwgNUL4H3szxi",
  "key15": "sYAct1iyaT5XnrtjCxSi54jixnA8c44DTizP292ZM9DCFTNJePGDsXADx9xK27HLm8TGzvWpZiVTQESPFnaQkJU",
  "key16": "4AwhNUvTLqp8S9n3CtGDXTSDpb7D2zzWatFKZ3nt7YFyomXpZFazagHzu9mPU5hdMXSH1kxGthT5Y5Cmh3Md13Ee",
  "key17": "P4vbkafWWRZCr1g4xTuHraDEo57JRTBeq9pNpFPQVwmdtsm9KWJX7m44zhj55x2QSo7WXLHVZaMKcUw2fjUEWFu",
  "key18": "5tNnFwW5qczCB7HNbc7T2QshPtik1oKNkEaKipWiyYMwCScpEcETUGaN9iDuBnvGEbkeEVffBwZcu9ZEBgZ77WGT",
  "key19": "39PQgYuBsJKhhoeiS8hAJ4dU3t6dboVveFgbXSB6w9An4RX42AqtXaTxi9ysT46xtUbDAdS3sgtgS2udW7bH8Gi3",
  "key20": "58nGRT4rbM8HEhvYpPUB6iJpMjDidUxPfQ4GKAsm3ncAGLfqhP5ZLXAJdADauq6MKTMFkZF8KYCtsTXNJ9RUM87M",
  "key21": "3f8KX4a7fBHSBL1HPdQnJEjtKejhdsJJxCtRr2kFPojtr8gZKLukUBRNwkx4AhxVaUyCEwBxVfZH2XSTiqo37p7q",
  "key22": "35XuL9kubdqVWATAxfJNeDnDBDJhBKUhPGVAyNjyLo1aKWxJK4Kdjm9zB3zFMiwQGdwfZcsLuLN2czKcxB8SBmhs",
  "key23": "42RRoVEuCsQ6G5wn4XySRYq31usdAiWZUvZ7UJ5NPV4itVq9bRxUy3QGDCFDLfQTDAajh32pjUjq2PPkSAfCfmV6",
  "key24": "E3aeFmiM6RfSEfEGJsCxafNeq1rxdcLWfXM8yVnEzQ4PTyT8LamGxxRiiXkUTjkcYruGMPMQGVWPoucJydffLnQ",
  "key25": "5ntD8kvk8ad3P3EUU8E4dT5qzvWMb5R2neN2naxiXfY1uMKtY1bp8JVCFHwhJC9LmkC1HXEGizYmMcHqHZ2tXwgV",
  "key26": "YpzNV6Q8sQHNguLXQmVMfuZXPLTaYDF6rcMBrtFS9dc8LxtQuycQry4228Cwb6NjsfwUrjdMeTpAAXWPB3xygqE",
  "key27": "5trYSN84zPqS1HRfrZnWdQJLPUtiVQgMhxcKja3BW8iv22D7n7TNBASkdM5SqVXGVy29vrAkZmSbVcBRtSc26a1z",
  "key28": "2atmRdRQvcGPxaAWq3rzaQggougGbbYpWavMiDkwimR5QBafagWaqn96Voc33VfcsCR3KYuerrmkZF7iersb4dbQ",
  "key29": "24qdCcEBH3FffPqtjYFXxGUv53U89fJRzChqxaHbeCMmTmpkVha367SXUS6QsvhT5zEhhzhef9pBrMjdKZ4EGNp7",
  "key30": "M94hSJ2iGuCGhi3xAGDam6VWrSS5ySYKbxeNhGeWKx7sDzV4x67hSapgpx29Upw9VsCyTdLgajfGGHUNBbGhb5M",
  "key31": "3EnShLGw5kW6vgXsToKX57TnpfwhiH1PPagG4Bytmw8obVarDwr9xXZcrkgk3nwWLiiL1Kw6ZkCUFakf6y3x5iSG",
  "key32": "4r3gmWN57MsohJPKYNgkqH8pWYe42f3V379sV8ddfEw4udGRxXtEknwcqVbracTgAnsaMMytSf5xsAzpdGqDYmpz",
  "key33": "3RmGXgqHqdBMXsXVbVwfhmp6XDK1e8q85XDziqz4sv1JmF1xQLoRe9AHJedXnqtjDe9wpeHYgckcfjJS9tLkZYCm",
  "key34": "SrpTXF4R6YQs7gx35zC6Rxq5pE7mSbmqWAb483WBrVqhTjzFaBMaLH9mfTG2Auyf8NxKFDZeQwvBvzkXrBbjtgx",
  "key35": "2bSqcfJMYpVBiy5iHzDkYLc3UR6pfrFZ5tg8cJKRbLzusQhQvXKdETWdeYswHP3idz8KWjvydvUs1bWhwch8xN4A",
  "key36": "53cboaN6Pj2sqZEGpppxwLVAWKcSmR8bWGAQipngeyY1E8Uo4CYprFeuoWunpZ3MqRggHjfGHUJA7soAYH8DQ8U7",
  "key37": "3ptKtEmw52GB2CdkcSwa4CzRbLiqFEvt9mStaDFwvn18VjWCzkyuDVZ9KsVnLEEAgCDnGvuiGAoknnv73WVihzBx",
  "key38": "3U4UJDM7rHvMCrhA24z9XPFM9364y7zDLuEQx7PBQqdt9cmJ7tC1LkJaMwUNQfGqT9GM65DpZsasyFYtxVwDxnYX",
  "key39": "5QbGT6Doqxuiv7TX63HxySWqRW63BMKn4SsuQoQqUGyRCxKkV88Mw6Komkw9TeiKqsL49Ryu2QTufydq5haTWFP",
  "key40": "611v81zCtpbmrWCzhkn5PhcoYkknQaHs5PmVn932UgE7BFxFhARvb1uSpQq6Xok6JVuXnYwpFFJEZPs3ud4aLLmu",
  "key41": "2eWfazmbVhj9ZJf71cWf7Q1VoRap7NYh4d3hmHiUBQvmiNGjwX3fLrfjY5kX1JMofK18DPXhXqzwSTnFqqPGJGv7",
  "key42": "4113ytnQnDd2u88AZ9YYqbGWwM8WGtq7H3hzTkwZkU4nu3ksTj8uGQjAN2B2yTQU6gpPMyfutg3tK1GnmdetiZUp",
  "key43": "42U1CSKgNUMC25R3d5wVVL8cUSunLsrwJZrMSLfxWd7uNZo64MaMgQgTRwtZNnP2W2Rak5jLYGjsXnvnF2ua16Ky",
  "key44": "3Wnbyr8headnHioWhYFmTZYn8ZHvsHp9b2T7V68xkk9V5wTKGoMBfn34x2jfu4tq5j9vuMdingH99t7EJxBdydnb",
  "key45": "2DQRuzXi3NvE4JcCFMiSVKAKvwhhxqT3UARxqtPwi7J37YSNxxx9Kyo728w2uZEUT3UJ8rmS41JpuCsWGrJkaJRr",
  "key46": "FFvckiM2KjLi5MfSjkQHDSHdAtJug2hzCExBW531NbJijL535oLALeEbYNmSfSX4aLEAw9YdVGMVX7vASGtmbjJ",
  "key47": "4b6bwqkRJN7tpgJDedVTqKwxAfsFy9uBsNjvJFwHuJ1Xdw6zmnadXWSTQqhEMpbUQx7nd6MMmcVKgJEXn128r55r",
  "key48": "3tUHGqvZWAFBcqHkTLRruUoUMrDLtdXABtjiZ1834VgkQNAFVzhD3Bd6Nv7cofmfZMNqpgfftrgXVsfXmgBRvEY6"
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
