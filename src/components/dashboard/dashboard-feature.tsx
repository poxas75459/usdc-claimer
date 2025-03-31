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
    "53fm4FqufotyqVA7A6yzj6VfshiYocyxi3azpk6N5tri6ZJUGCfRUp6DaSxR1XWHnqFws2WVMLLFdkyAjErCtkqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRFmf78zY2kyvfJg3TeEy8wWRjizUWEXeJnYvn5QPo4YLrcfVjRqTG6XTQ8HLdngsTQp5d4BFZ5iSsHFULeM3xT",
  "key1": "5Jitun6bSsCLwqQ5zEcV6Zw7aM7iUv8AYcymwkvRkAHyZECRR541VdTHq3WHjr3s22bQwJqqqJqGnyGHJqEXowho",
  "key2": "5CSqCq7pDJN9Az4dMVYkcHcC3LwU3CMQrwUHmbdWHxB1FR2j891NxQsiHZcW6JzxGiqMsBkNrevvE4vt2qH978yf",
  "key3": "orMYhfSS7sWEPBVRxvdgoBmCRr5Cc6jNJxY5xuLQXEi7Me6rtvtJbmm27Qi6Duo4SPejBKc21EjfD65MxfL9dB7",
  "key4": "2EdP2k5DSUW1GzHUAydE7osMAL4Gq4vz6dhebWXMUCvRG1j9qF3s961t1mMNqote3guQihEXz6MzeKB7BHTSBJM1",
  "key5": "5gEA24XwGahBEUkAiLCfhPdcJd95dooCfamkANWqCQg7LmQaqxDgZFg6hUuWmGspLPwKrjECC9ZvpJNAexc3T7sK",
  "key6": "4rmAVZxR9NoVxUxNbabZSYJzQFtzZoithjMN1X2MYPqyEuyPbzNRfvAh8Gu9skSpymYgqpdjg3wq7hPsht27LanQ",
  "key7": "eE36DKTgczZbYWvaix1LtchyWmVxvRkANHy4pXxJcQvPTLBdkaF4X4gqLiq1abc389pCGkP7eRDjxHdYLJ5XgoY",
  "key8": "33zrhNfyZPgpYdE3mV1fXpAaSrQmiRuMLymrqfkZ9togRPNY2x3PYUBiM87eESCBhzNAUtKWxASzjpADzAAx7jVa",
  "key9": "4xrT2aPPAXJZPe79sCGuy5bZtJQF4NDPqmHuH6sxYqzvVcxZzpqyWTYZV1iPuxEHsijUfiFtL43jSwHTBvkrhXro",
  "key10": "4rnwyX6EKwgyQBETmNtBPH3ge6b67adJhWR4yrXRRSRGy5SsjkuYijN977An1r54CmevQjrYcZBZjDJwCSk5eA4a",
  "key11": "51KZJV6A48ANZiPK865H1ErJiNz6FdQ845fFuVkgKj786rSeptMBbKaFTHJRfUQK3avbqLS8t2DSPZDimgpxnV7u",
  "key12": "2xQ2twcaoDR9YcaZTT1tfkhjBfwojMJthuUSqysEFP6ZnR3sj32kHNC687sbKPc5FAPEZiCDtXnxPdeS1XQ7tLjo",
  "key13": "2TVwAqbw4d5SRL38PqYmQPH9bQBPvmM1pp6cjHan2aB7Zuq3LWbZWH5Q2R6RGbz1YGLbRGhgqgCBrJbCXhebxD6N",
  "key14": "4s4FzcykGgQWcE7d7Ptj8QgNE94zMxXAaMU5NpGVXoSkMPJh7RY3Namndzy8vQujdY3ZHdfA1eyiuzDugpodmgmx",
  "key15": "cVp448wGFTxZL9qQXPegCSn8PrM9g6jvEaSsAJo1Ly14nqVCkGccaj4JfSG18JzFixtKKSSHeQxn1xKMYW2dq3V",
  "key16": "2DbV5TwCnW2HHRQyM1JmqHUJJRr1ZTftb3MGvmoYbURFjTyfLQ25FxWqTJ9wWv6ud87HstPcbgcsVmfSA5eoTVK2",
  "key17": "5Sp1Lt2afGqfsCCPy9onk9uqHrm1z4Xkjnha1NHLiT8o4pbecJhCDCjB6jjXCNKbnC9SDYkdC1jciX7u4AJb4w6N",
  "key18": "rNfBxg5t3whdqrqn15Q1zLY2oyuYPhUTYAUFaPuA228MDQ72FADuZfekMzDbgZS9BDzsfrhDUVCP9EepRiozoBu",
  "key19": "4SPLVeNgCcJabAM63dE9tjYsHPDi3EKcbyKna5a5adcMUZLfz4gTDk8Lp11jg3TuemGrgapbxpL7mxNLv8mBm2WH",
  "key20": "3T3tRgg3FijgNgGGBPdVCD1spjvk2W2aZ39eFNwnK9kTc8o8UwG6fCti41uQdN7zP93YUZrtByLGju2bMaW58QEp",
  "key21": "4fwUVg2NtsLudHEiPozAa6vMV8cmskEUFjFjD9Ja7LErQpqamTybFdk2JpDapMjDdwSC7dQYRcf5ejsgyHrPtaiX",
  "key22": "4p4q1ij95jjjh5tyYRaTQrk4P6Xqoew6K6mFum8DAjWpmk8oRhdn6dnZ5xFXUFo7sMAMVbzdPkcDUeTd72r96uTJ",
  "key23": "3rqFFvwPDcLUDRcDZgqtAQym4mK8By8ewhFQSFkirHkop3SrKx4dTEBkdPFZWQxkzPnVMGCr7nwSumctSRyCyVUv",
  "key24": "9yAbfvoZrGUMSBq5E2izw15Xhc9Xo7bESTENx6fQ7HYuGX2LtG1wdx38KULmaGFEcqFdbnLZAY7GXxPvHJkFs7k",
  "key25": "54hMMobjp9g7Be2SBdmCuxvThBSDsFirQ4va3zmduYd57LQH41VUKMPEbC3Wqpk4K42LZsBkApQWbYxS4Vr1T3UN",
  "key26": "4FuiMSSHpaJJHQwtvs9Zwy3bCuHGbTmj6M6kt95jsxXPTK4tvq5Xc9BzJWrhFpovxgZEDt56WmEdtYQiJP8icVry",
  "key27": "3QVDUsBiX7wvSzchQgzDWoo6vnZGMQSN6YPTPcsjttKkdBmFjnRDgwVEpfutqLzdQByRLm83NtFr9hxmDGUdjw3v",
  "key28": "3rPrmhXcUBkV2SQMpSA6FiB5oNjagDak5NsvXtu8TPEsbfq8VY2s8MPWUeN4TjieUMyGBpxDdEoKuTHufFjuwAgW",
  "key29": "2ZfxYkAvXnX9LLQgXSuAtTpmAEJowYCi2Fg9JCEkyQv38uabTRwYtuW6WMG1TuEnMq9ZmwwbmDj4QroLq2wdU1nH",
  "key30": "54iBzwGXARxvwax6uF93VcdDG7zk6mMEcvDDzPSC7GTW1h4umZE9hEnxJfcUQC3aCMhxsEi94Ew4CNQVqxr3DXFY",
  "key31": "5M6Tkz7FKEQTqCYL9LobGbn3YDorricEFMNzdxC5aYxdWnn69jM3q6x5tEZNjRaz76qEXjax9zouPi6XeC7advpG",
  "key32": "b7XbkHXs6yeyLpfo6awRnVmkicRWg2RQiBeffD6MYBBFH4JBD9EyjsFwP4KTEFwRuoHwpvoYrg7Bh31XWYnhMdj",
  "key33": "4dV9GVNgrYvBBZCqoJRsxHGiBGgCJCLKvjkKEqDPJQP7HFt4mxZWD6dx6Bznckp8Lxz6YMee8Wt2CfondSJF9hmQ",
  "key34": "2Ei35Cyt7Dio7Cyk3XvhKzY5MC6YAfZymcGu7V5F4fhao5NgVfcDPogfEkja3f1mC83AWNcJ6HWEQBHr81BWe7yN",
  "key35": "3vvW1fDA83U6yUfmWThStLQB8QqSUbfz4RyGxBLRRMTVhP8uCz9PXnZcQt1kYVgzKx7YEaEXZksDc7jTJ787A5JK",
  "key36": "2fdYNeZLeDyop2epqJGtfVizHTdVAAZstWaHCHgwZztWQyq3kV69LfLnLzYfSt5WSNskiuLNdUKSFWA6vuU4ni8V",
  "key37": "5mrUCB6yPhGi4xFqagSNSdxHuQTuMbY4mMVnp7RCaxxmKygqF18uLERzG2xw45AJFZxQVkHDs9D3fTz6hsmvGfxm",
  "key38": "4taAvvr77HhM3b7cr6JqHT6bWc99gQsbUwCFT7a4SRPP6zLyPJfbWCnFTN8oPmVN3fC39Xd8aF7paWS6tGmYwMG9",
  "key39": "2NdMhVVZDTKgpjy72Vre2Lj62NrijMgiFuXb7hk2vjbvqqx5aU7GeFG7H3hVzwby7thWYB2YAPf5zqruy5b4PqQz",
  "key40": "5UJuAYz2sNjMXmGDQqTSpHbcKpLGYPVf49mxajSFt6PSnT2gdB7ifWrgDDV7uskWgs1AVpYLfDqfKHGtcf12dopM",
  "key41": "5LJ6yQ2cijwbkPGwRhaPKtS1S5wqzACB1RWvCJDm4QPuEkARNBrcr2pieKDbUr5kiDieDqjxRgkgsQpBJ9VyZuKY",
  "key42": "37PtQvz1AeSXDT7CCAFspFb4XChTsZoozy9QQqefSFGkKWq7PrY4K51YHuM2Ji36AbvEm6gR3JdeSR5tAPYVHENB",
  "key43": "5ThfSmqBAHDtA2GLhZDxYJmZ7jwfsQBBdQrZ5FS4emWX4K2benxGfyfQ7VAztsostQTRapvkQzo4PoBKC28o6WLp",
  "key44": "2WxyPtELbCBz1VAn4WkwgiUufRYRJ8RxWMqZH3ovfEZE4aFwPAa82x6EoPRM2LHwrGPaTf5ooJa2XtBgpPhpit8j",
  "key45": "4d3MYzGDbb3ZBJaoZeBswVyNCVzoMzSKFbPHU2jMaNPjttKCP89KmeNaya4cGnTniiKZfDR1odREQa4i3oM8fkLV",
  "key46": "26tcn9RDs7zCvc7jU4waTDbC9Q1k41UGjYUHGaBKTdXJ4KrpaMM7xPHxNTRe5cBZP4o9zTfEjzcELWLyrKxYkvFi",
  "key47": "4Np3pHLnyxTPQaEaMToJYTXvSEiLnrs219vCS2GvMN825r5qAXk98hQc7zX6XE2ntBdbMRZaUG3B6q44GGTGDdNx"
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
