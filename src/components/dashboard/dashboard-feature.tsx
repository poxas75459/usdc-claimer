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
    "wkUQes6f8fDKJXqjBJnLNXK1Zx6nA91tGXESukYWaoYGgFY6aAt3ebJ3XJRh38QofpwcjttHX1R7GYWUwv3VRgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "455FQUr7KnHyTuomShCsvdBuQXGQLJdN8ixCU3viwLo4KAs1YEmqEhjUGQURNt3XgQxcmkXvfaB9otWSEPAk9MSa",
  "key1": "27FjhTbnMGMhw6216Vs6e91bYqo8Qjm9dPJHSRhD4FAfHhFBvcYULWDsPmJBC7Z63dqB2TkFgiAd2wuER2Ny665W",
  "key2": "59m789zvRKuCLcRuWq1K9CXnVcY139YUhzAHHBsDD29iMEAdY5fUJfngXAMjvgJ6q6K81NwAQt7mfUNNaVxd1F5",
  "key3": "3vfkv1U8xGj9muguCpaDhoWojmg1Di2a5uugDyC3CK1bV1HaiGstMawNoL6Y5t4gv5i39PDqAjG86WipY3FNZQ4C",
  "key4": "63h28gabvp2SqtgFH3u3eH1R4JS1qgerNQBq37vXNxPXKrFhigNZxp37J6iePGbtYWJ7vgPcnuNtWmRiRCt6PF7E",
  "key5": "37pUqsj1JXgfVQtV9f79A2KW8qYq4RhGgKWYgWqvLj9is59UPSCMvcWqFS1WyFqQjAPpPUQem5D18GPRa4sEjZKG",
  "key6": "2of4t1tggGEAtyKTGBMQpZifZydugF7iyq1h4jPRCCV4io6fGNYkY5wTELurXntKtc9y763xx9u1w5PXQHm5fc86",
  "key7": "5YLERzHCQwJshnatDC2bRJC6G2mQM2x6mcBBU28RRZgBxRpBHURPAX3chNZtE6cRPPA2f3RCg9iGL7MNfFBFKiAs",
  "key8": "cDqpN7BVTwNSTF4HheyL8XETRiUuzoNytfHWqS3TrbEse9mTsdaFB4ckZ7CSAEJ2UjGtHqp6uM6AzqYxi5N4q2v",
  "key9": "4DUJJF12jjBtpPS8XP61hb9Bszito2AP4HjDeniW75e1x75FumRq3FYfKhCcUfwu3s84C8zovKay9qZX8GzhsykV",
  "key10": "33hecZ4f96LGQzVLVCaNLyMujDxKsYSq7may2QK597kT1jrYHphCtjJvpUpBKMyiUHm9P7uvPkqh38mxyonAMBc6",
  "key11": "4FMr4zzVPqU3BxvkU9maGKS25NdEscwyFvEEXaDJRNBa4EXnKEvWrpB8GHYz6m7PriVYw6xtWQh4zKdBxJbhefsm",
  "key12": "VKWjPK1HEbWmAcKuxMM3EZUcm3jfVmriBx2qa5Avv2xy6QRQoHtCrNjBuhY1VrQd1EKRTfRsYfZmDQXvdiy9Bqt",
  "key13": "ieyoW4aBz5n7UfYjqWSPxzaPeakhbHfZ5bgTqZ7f9fz5iqhLRVAeMD9xa1dDaLX3HCESeVbRkjGLd925pizBUhG",
  "key14": "5BNhuao6hz2FDS6pLBLebmK71oVdQi7MADyq1SiE1d8q9a928EMxhKMsRMMKcYjJ5ug39VrAJwWvdJVBjQdE8zSS",
  "key15": "25tcED7FAXB1iMJMr1x9yNpTCJtBgpGTWbmc7kPhoobiC2N1xuPkRhoDuBdC1oqsfxhMqZqa1petZDjXU9KUAwJ2",
  "key16": "uEkXwooEMSbuT47nPz58VivBik8uTYayShaiCoNyn5sTJ2uXPj76NJGPSp8qaAtAHx1tfXwiBjpZuSQ3i3rZaN1",
  "key17": "4mGqrk7QuBmCCRTq7r7yx3JmukL1yvtNfioDpWkCKa124AUfytDNU57zHbKENJ8ebz86mZTv3Wnh1tvoGtGZgcCf",
  "key18": "2BjtGpoeJFw6WDf267uYVKQPLXRgka7nJ3YiCj6RmYC9XQYBJ7v273WPtkpjFCHZmAAmv9hZZWHLjBRBXnvWjBiy",
  "key19": "4YTY4qk36tMgnervgcWfuZrh7DVFESYq3zJzPtc2V1xyzheGcrXz6NgCnB2iTGrsVobL4oSPZgTi4pRAwrwmKa3r",
  "key20": "5sPwsvNk7v2YNeHCARv9BudHgDLnfGH7DWQbrSLZnQiHXXx9TT1GW1c2UH2JSc2FX1mWJN1Qmqiu8vhpCyP44XBG",
  "key21": "66m1C2JSKAbBWP4kwR6Wmq73MEqqKbthfdn1hcqo3xQ38aWJqNZTUXBNRdT3qZ6yyYkGjFnDSmY1n1xka1Y4iKiQ",
  "key22": "4t1gTuk9bWKXtRi2SBC1jNNucMG7pkLtqW6JxJ6QodLiHU7B94qPSidA43qsPXLtuxjzJr1aFHGzTCefzJ879h7G",
  "key23": "4WW5QU8n43TBs6jf1VuC7va9q5SQiGwRXCaDatQNXGdhfMxiV9w212jHNsvLNZCebo22EQgPgijFB5hEpGYH1iUv",
  "key24": "5bCSoysGzcAX6UYFsperduXLskB2r3Fq8cUvzrrkdTzKuZAngNMgXY9go4qzcyEcfACcC2htBzPsYCNuNuj6gba9",
  "key25": "4ixAwjte7PDhfCkpdTsqnieogpiR8zdvM14Va7uAeSaerdiqf1Eqpe6vhNjVAy7EMPHSVXzRT7z6XShVqgJFU6V2",
  "key26": "xAZGMwREAPHGLfuiH7MVj2zTciFsm2ZtVfPk7Nj897VrVA6ooUo79AoRDUrhpkFKoHUoekiNUBzJsXDe2oLXqN9",
  "key27": "3tfo4VZo2Mz5azLXpF2H88htFX32xwXsadBLryLpX2UvNp91vwrS8meq7QRKJaPSeQjALw8uMiioJ4hmS9dZGRL5",
  "key28": "5qLSPv56bXY1ZyjhYzTtTExJs1ekuH3MdXeZcQ9QAY64A9kBi483KQSG8LF7TsifxE3grjHBsvJyiNTRkNNpq6Vp",
  "key29": "dmKMnumGXjExNNcQvusqJuLWQ1kXcEpejBbh32nxX9hkeqtXuFjGzWH7u1eFSGJeVbisuZrKJg8s9YRWJ7hU31d",
  "key30": "2t3Tw2UWvQ42yZf4YFkkVhrwtFFQscGNu5T7bHaVqFuHMwPKm4vACZ361t6odJ9UzzLHGPok9FEQCqko6tpw1s6Y"
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
