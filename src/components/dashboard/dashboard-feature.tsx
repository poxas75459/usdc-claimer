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
    "2HqakJbySgfbYy5JSPjrkw86wzNQhL1Dx7ZYiVh6Uy1SAyEdXz9PMr8c5ZGyWdktEdUaLnVKjxQovuGJWZdyUcqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CPK6RJKuWa39pAkcdYwoohFnLi6zPeuLyrwFCaq5PMMokKWqXGTmCjwiVYmsjBFSxwsx3iuxqc65wR9MGfktHht",
  "key1": "5hLzhz1UQschsGiKosKfvxENaqPfQzieW6aGwEiaFLkKdoiKZagXd8W22xqkHQZanHbeQjMQkxa68xfomAgPVuPk",
  "key2": "4nbPkmx5H6MEib4CRs67hMLFiU1Xn733zLJBH8vXa8Y2QTNbtqtou1TCzsv3weuyfEDRz7pXfzyAmYKi49fScBDv",
  "key3": "3gumhoid3TvLzGST2fi8CRXNBJ2McMkxwKw2jWhWdW5drDshhLDtxgVNgnsCq9pgJKAvqWyS8HfrTu95hTK7Jxhj",
  "key4": "4XyYoQhER74462UiVXVdS5twGcU28M6szQ76kNYTg2YRPuNd2ncstQR1djRrNJaUfgdPjrgmRmfg2BvTkpT2JPQ5",
  "key5": "25FsifNYq77mrw6X3kbmi9FK1BTgwAu2A2ygRkTkrwst8opMTvbtuML6N6EgBUHnKsrbP5pVezi4bPov1oKuevvp",
  "key6": "ZUNyGifnPZ8gSMzFhDUeTyjb2yU5szDeWkZGYuRmHNCrpK8UeHaF1US24rgjBkmCLdhT3ZmJrTStt4iVKCmd2J1",
  "key7": "3oDBbTT8xK2qQ7n7vU4j5RsdfTvBaNvp9biGFUrkZjh7k35woDHxgrYAcVWxy7kYPx74obdCYFMQ2KuLtPNsdjsd",
  "key8": "2QXrqCHY9GStNyywiMuGkTwsdHebW3jBD1Y66VYzcJnserZKXr6xah9gJb4mN2MZPJidZpPhijshgDDqYckECjuc",
  "key9": "5b1aMmPEogU1S2y6oocMtgeh4ZAzA1p3HZT9dGieaLsB2LYLq6rZkcBsSPNsaJVmkKfKEPjSwm9zN7FrxbQoqpef",
  "key10": "4yERgeh2ZzAJy6ysppZhcTfa8xAYp3GRGp7oWRe6A7hrt9tbm9x6Mu3uW7gHw7T9oWRQADJp6onmwVUQJtukx1vA",
  "key11": "4iNQ7fXAaxsZDtbXYopqqTBnCLbZwh6P2pJTwdWNFuFqQDbFifKXApE8Lmc578n3GSqXatpKANpmdvmNbGaHD5rZ",
  "key12": "2i84MnZz9BWhmGjgKDpcaLT5DQymxwdu4UG1ttM1XyAJ1T2WLCtQenBiZXhfA5RXt5APG8sqYTbDJj8ZCL4TSouu",
  "key13": "2BGbfaz3JUjuqAwaFH1dbyZpEReLwEnaqaVVuwVhukvfvnPiN4jtGEtzMkC4wdLMSQQkDvr5MapAaPk7FBbHJntv",
  "key14": "5NsUtUWU86oTk3hfjdeNRMHJgDy4h6TrfMtv8jj14pRtRohn8gTeFY42od73MQfMcugjXPNmepUssfK36RMfQWgD",
  "key15": "YjSqWV4SsRVGLgS6r8HtatDzGsZ8r6iG9aDuhYCeqRYb1rXRSTdkH7DyFMrnnZJth5WPXuZhRvM8rMP91fDbSb2",
  "key16": "CSCHA4KAVxoiTvskQeVy9HwW3NMJvg2r1k9643kZCd5BfMoCXNhFeUHdpBa5T4D9bUSiSQpyHr4iwVMbW28mCDS",
  "key17": "4rnCLAWMH29kesFPSanS7w2XgHCAEFTiFXW1mnahMTAwcD4dtGTCZ5x6NG3N5XVkWCaMRCzkXBirNoYhSuAcDFDk",
  "key18": "qP2mCLwVrkJqoZfosUbbbGryPH3n1uqe74sSTExYiRDK8WwiuZVSgNCrMbngEuWFehqFzzuTQsVAJzJm1CGqcrA",
  "key19": "2N242u9tCxvm65qKHMccy2DFEmngGRHqk9uHvS2aJY3yLM9ptJsjnffbjhfr3qzNGDBPvRT3Kc84FNeYGtucVerM",
  "key20": "38fxfNKC5gZo9D659xFBEbfyRwitQ6bZkCr2htwMzCQkB7TZAcjNPboVYmoJ1yrjR9fTPvmLejNfb4zCXkpBEB2",
  "key21": "679ASDn5ykaYc4fHTmtccF2W6xizabVM1hFeVUrLhfAWUEziuNgfgETcyfd7biVCgm1EtokbGwyvBUJJN1fAkT6U",
  "key22": "M2agbB5wwEBVFxR67oqBzLRT9S5vbcn9RGRCNBgDRvaD7cEoySfpSLvv8d1jWcWEUMCqiMFKmgxSFsH3CaovV2i",
  "key23": "5Mf2U45SWp6Csn2Gt3odcv4KEP3tbk2xwz6YyfNTYsP1fazsoFfQDR1zqRBt1aeg6SSYuntqaWxHP8mZp968GUAh",
  "key24": "2fcLkc3g6WTsaUAEfH3SAGNeyutzHupCShLrhVWmyVYzgsU9eHdofWmgAQ68Z26dUPmNcJFcfAZAa1Jguj4HJsjq",
  "key25": "WWTVLXdWqeSMp3F67T5oStFdtnFdCoBiiyfSpRx7wz5ei1hyTdVEUZxZ6yYQSqwK5dHrH4YK55baEzK7vqGLz7i",
  "key26": "3SVYPzz9GhQxEtHtpDHQ4cC7TygTYnhPTDPkhphs9MWbKwqcTdtGWhBVJQB6YeFdcEKfwp9YUkbst1Gs5G1yUNyo",
  "key27": "5jJRdPBdqeF14eCzL4QYBxRTpojoZirj3qrDJyjrbxn4UvGDqyvWf7dyujcbLm33UEhVEA1F2ruZkNUD9BrzzWVY",
  "key28": "4uBAsmau7j34ChZAvBvJpbZmpcQ876njN4j99cbFps8U3C6nAq2TwX64f3jQtVTE7Yre6ngnyuiG2MLXwUaCwEag",
  "key29": "3MoQZTxPSvk9QESFBeqM4hp3timn7P1mJ3dBYr3F5fSAXJXKe6AjvJbj1mS8bMuejAQb7AjeYQHjuoPvrawYXZYU",
  "key30": "2nFmc79inJakeVCC2djqm3jseH3NmpBMume3xMjSoTmikKuPqQNrZSsWmh6Gf6a4mcT7NRRgTa5ojD34iVL2PWoX",
  "key31": "92CzLHNZAYjjJsUc7wEhqb13DLhbLkNw8W8z4pnnwdRzwbnf9VXaVBU5svT8BqQ62MTwXohniBUGu1pByHqCPt2",
  "key32": "2X7EYTHcKL1iKP3f2vBKv9Fpg4tfFmBFHX6knznTg1rU1GL9kwbtPoYAGHe7cqNXkmkz7aqnXBpJkNb5EHruedNU",
  "key33": "5244USHCgUjbcFWDLEbBtU22yeVqMjwGbg4pLtth1Tia4HPbXEuRMTMWxNGRfb8mdeAkqYB2MoA9QweKrVcNYtic",
  "key34": "5VW2c5Y6vP7iSu6Tpj7zUhM2uDBv7Z6c2ZSouEEtTNyXgJvdhGXq1QV1zynJrxMke9yVBiA1eH1cBy9dBhfAUybf",
  "key35": "2XAgWYBu3MVqB41g8UZdRwM8KTBJ7SttFZXeAv4mqhk8se7sjc1i5NYXQ33nSwfQQ7RHDLYQTNxBXRba6fsD8VV2",
  "key36": "5VhhgYr7QtNDmp3qZdSEcWtjhC8quXCEVnu8bE3M8bU1e8HqvWbvomksY92TE6oN3eofC6FfhqNuaqWVRYk9M1SD",
  "key37": "3ZzMUNairaQPpQyERLRraoc4WZjMEHftBQKAsEgbeoaM7vSNhBv6ZA9xRpVxanaz62TbWxJwq8MF6pTMRxkURJLi",
  "key38": "5hteWzT3FwcoHqFYBSBmKXLZT48VVUxtNUdDJ4LL3JYDXuFG978kWr5og1mFgat8Uk9BPq8ZXkKwv9SjFs77Yrk"
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
