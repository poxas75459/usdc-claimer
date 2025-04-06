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
    "5mFqe66GJat1VGe9WubeE6xLSVYwa9xr4fhT1UpkFz4PzqgCWjdcyvoJxkRXnZYS663mxqWskfdidEzvJYGD33Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NnDddRsGzEKmA58GCEBca1QN1W2pSoSYcgnrcA8qyWz6rsxuWx6HMiUZZkGm887jcvU4JT3DXRaQ2zN1et55UZj",
  "key1": "3aqiApZWymGouFRRcQ2HcJt1ujGprtyYV4uGYnQbMEgbfjqYVMAoeFVi9uhuHWnSFq1BHoqNd6nh9f249YzkR9zZ",
  "key2": "3NfLTLHhxhArX4qXuyr6g3yQmoxNd2s7Z5Y6WVwr8kqdcwbMCJhBtnVhL4XUS9JCyX2WF8DgBCj2kyQ74oLUeHEx",
  "key3": "rLxZtpTqwhFWKPi3tc8tb3Knynp2wRrJZdzb7nnoZ1NbCkTYR3ZNXge7U1oTRUbNgVSBUekbSC4eP1yueHDNM4w",
  "key4": "5qJyDRVVjrChVNAUfCLcvksaJEeLi3kQY7TCrC8yEpNYoHtKTptSpeYQJvSbjsGKPkHuLLGYqzfVMmKgcpQXf3xk",
  "key5": "4oAJT4Wf13uV2iFm9S1N6hPC7TFxXw5ork8bcyHL2kfJeBadJJJ8yR13YVD9EfZXewkPjcq76FwaK4TTQXBwBt4w",
  "key6": "35p5b49VE7f7GzeBU4piPdsWDpMg6mt25Qi9aT77Y58CqpX6dRqeioQUkZPhw433yrFgDF6FYbySEx9AkVf4xqe",
  "key7": "2h2vjekuEB7uNmVyMC9HWjkoPtJtKn9Bhw6xrBvoroMedQeUzA7KZVrWXKwVVPpDstXBjNT7X1zXmik1grKuT4XD",
  "key8": "itZzJR7KRwoGrZpNH6KpRyWGFARZuuTcqH4tLJ8FCqwaeuatYDmUiPbZyAHLVNmpHscGeDkwSQHsn7MCEPrHNhB",
  "key9": "QpYxbqhJkAhnp9VP7EpsKrgimbbTFeFvuWqumrqustsdPukzUywUFM9GVuzMUWFqK4WnFyLDbnYewriEYeWi38u",
  "key10": "5hfZouPT9eakdQ99jcSw1TTjwnTogzug7Li4Z9SnVbMS51LB7ohZLPZxtwvvz6xwgRVCa3wakgALV1ziBBGtQHne",
  "key11": "4tkN2fruZJM61kLf4372FeAd3oEjLKSkckFCTj66RDQPZYoW63uVBMyU7mGp1QPUFR3iZm2PR6Hy6niHu7mXtCEo",
  "key12": "22DEn2q4msRX1oUpKHM4uQ742eGFpwk7EMBW4rEaxcEe6g4XhJdBW3FmTU3G3xkakiLZSCRBgqwFsSN1knV8bdxe",
  "key13": "2KC6WRhc2JF6SJTEyxVScgG7LbejMZBAXw6DvVaJoCzxfjdDsTSCwUgD4Tf7raoPBFjwFJer75VwL8gTa4pNcWfi",
  "key14": "3gcVPAw8zwNouYzrU38XqD6hHVYRpu7HXThASs9DoMzfNaEqyNvgdYGmrjkNx5MMFthcDdK7J9XU6YgRgyL2h9bp",
  "key15": "2rr7eUJDWn4NCfWJUaANpkS3uVVHH4S7RyXuEt2zYra5mTZDxGJNvCejyCJPHLcWjTZbfEJvfwgZejXbTGSGiLuM",
  "key16": "2haHf9CrJ5RHK36L8GBcgwAF21zqaA5ZttSC6DFZNMcAkBPx1NndJ1TDxYvU7VQePwsHVDMGfpGyZeFWY2CrkCA7",
  "key17": "2FC6e31nRQ85xWX9FimHpCg4bGWwopb4SndUhbeJVVh9xUnFwEcxkPoMNo3qaueCGJ13R7WaFbpaBv9UNfLUrG9Q",
  "key18": "21nuTzDrioVpykygtQ3ubvTJC6YKbU2wrLV63QCpJoNDMvpgQHhkwqXuYLQnFNLQm9EykKE5JReQFkRtWxX3upDp",
  "key19": "3qTECgkZAcAU4oR86mBYGnzqVKNjp8rr9SyyDNLWvVtos6H78bRPdJhhMjuQt6cWePBEhuExDqJ6iwZvfCELYcxd",
  "key20": "59z856nrft6M9a8NSXS9Rqe8rU1NEevjkainbhL4sz8SimAbLd1Xquq4EW8AGSQDfyggf5Q6gLV4swVV4E5keiU4",
  "key21": "65pWrkjogp83BVRwt6B7s4onAui3dboUZ1vb2E66MnjYkHFeBG358RuUcp6dBXDcam5Zpr6WoUgLBjdKi88okqej",
  "key22": "LR62MoxPT8bQdtw8PhYooQGkLRJQ2aoWtqASZU9KXM4YE9PikpXnP9ym2anBcMNx6Kj8xBpdCyHGpFMQxyLfbVi",
  "key23": "4DrTeX8CqX1eoBziYy3zFggB8X8zwKHLxs5SgMeLP6xhjT8yRrS6tj9NKEJBLdcykBJRHN77egda3zfd3Fu2V8eM",
  "key24": "hRCwCiCAiroB7pTziEJMoVrD87XBjSjmhdiFzDxk4RUEWyfUsNm1xJBoWYiedjnbT3mQ47x6zvitCLZQiNzDtuV",
  "key25": "3r29AKqq2dmVNtg6eohx3LMtfutRR5dAd8D6jW4NHC3FjtKLp1RRK9k5JTq9VY98cJPQeMSNQHu8LWSuYqPKk5rd",
  "key26": "2L2hvxefymTa7YvvNGe3bT19yEQ9QSgyaWfXAuitBJLMuuaoxr14tK4VnXfaFpDGBArH27nWXumKRpXvALk29iAC",
  "key27": "29ibkE8BngjoeYLe6xdmSCw9LycvH13ftUHPWWPXcANG8rLHgqSxDcB6ohRhsgNaDufh7Uwo1vf8AeYRDk439QEQ",
  "key28": "rhnqMDTSYy49Yo2CFLrsRwUhbYA7SPv37SF2HrZwAhra8ZFEYpVskZUcC8Cdd4eJ6FmnpG4HmS25s51beeeeJ7b",
  "key29": "3uFohZD7X82cyd6pR7qBtxhXJCtM6MUAP2kfrTfrGjakjbvDMrBoX97JburmzGB92x7fXMPonwgqw4bnGSWBpVgM",
  "key30": "5bELbwhBp7YRVfwjemS3JhcsSqcFE79DD2j8cg4Lj6zgF6yHcrFCXX3CxV27VyKGqiGsSPaRt6bmTN6rNenDqTtt",
  "key31": "n4N9e8ypjFxKTyURmXhncVL3GgmuQsk5Vsrphy4cZ3CNJsFf2zKinhpnmUXo63qRLFUGs7ko22rXVpgfv1p9QoF",
  "key32": "2CUvoiceMNKgpRMiimo42TiC1ZouyDa6PWKernB8BVDpqJxBKPNU5mBRCwrK9rbyHjQqVGR6vtYcBawF1aox2xKY",
  "key33": "Ao4HCXdhNFz7LoTqBakkfvM66bdCKjCQcbC893J8JtVdpSp1PrWUGFDtGsoZjPF4sGA77s3Uw6ynttKUP9Qfzc8",
  "key34": "UWV82fu5NZEruakqEU2EvCJYtDSaAGnossC4eu35opLCEY4yRyZiv5y2Hz49LMkHFVSR7Jx9WFM6EeyMPRhxqr2",
  "key35": "2Nt4eeyYak753MjyVUSedrYoCyT4WywM7HUVRMMYWCbK1PzmBPba9d3R69AvJFzLxXnVpU88GnemmgCq1Zbqk32h"
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
