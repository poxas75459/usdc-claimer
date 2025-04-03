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
    "33qret765xGjNAsURxEa6VrKQqouZtvGheScpxi4qkrit33SPaD62217HZgxRPk2T25rF1M3SQ2HVnPJbU5VwBzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tRWCW3WYqgpsTex2MuMu5MN59grB3qL8Sv3noYQsF8WZRs5SnyaFTHmz3EraYVE4cBd8JAPY2W7HntLBTBcpRAh",
  "key1": "37HgCvKhdPoPaktY6nBx8e1FsEvhJ19oHG8KWYqLM9Uz6AYm569K426ickoCAtqFD1qjsYN52z2ZXB5uDSnFZST2",
  "key2": "2XnPKcu6xLPWdMyEcwAHUB4DfbpuMSS359CSrjArQUrbRJ5uAACgY9FyR6zyx26oiRJ5os3gXPJCzFyLGBpcD3of",
  "key3": "3WBb1UG8q5CXd7uabMAjghv81yPzpihV4Zu43maiwNSz5tpS4to8YL8cFvKDe24YjDyuaVcbNfWnqPZUEWek4zHG",
  "key4": "3cHBmAfkeWG4BXv4rYhVJhwFTYMhTXJmeoX5ymP89hiMovCj5SfTv3F9KhUbuCXY2T7ejLWrAuMV28H6h5e6cyTc",
  "key5": "4sFMW3jpZVDkghBf6xhkpQc2KawAKHApomsCs2uStic4UYBjw9rqYQcmjnjTVpu62z8BeA7fiWKnY4n2Cx7Wqu9Z",
  "key6": "51R5AkUuVaDmNvHtfuysCHMhYbrUaZiWs9i73fTvYQa1FBL4q48iwbButRhk86iLRaNTkW4eDBRhwnWfjjte7Dgf",
  "key7": "5yhRtHAuW9hELBigcuiGdxVP6mxUo4Z1ApqQoqK3Xt9ivoccJhx24FhfXH4HERip9D2nzm8mNdAcZRR323QeVsXt",
  "key8": "4Xjg3T1kTaVPUWD2DbWNhAjUz4pqZ2Sm9fVhxyRkKL5mUobutJebnSfxhoxWcsjfuyAsJRvNVbh17Js3QoRyVZfW",
  "key9": "2QjAKRTFkgTwc7zpShexqBJiZM75oTmEf3kquwXFyQ8AWQshb3iRVt89ANMAXGnN8v11RgzYgppvn9kck6ie4p3g",
  "key10": "g2UA5fzZNZ32HeoRvyntzsKuDabEwGcKR5ETmnFtgbg79PTWdUNbDDQURzF8uksxM9bEQiKku3d5gJ7KJkae2Mr",
  "key11": "5zsT7rSnyjYwMDyMvZZnk2gZ7XxKdFzRqZ9VjmmtAkdZDwxfiDwMFURE7ZwpV2LK8MxiGLr12z167N5qkND9H49y",
  "key12": "316f1tgnKXnJNYGh2uV93FsF4rfj56VJhtPcTamdu2CXndFvTZr4FtiGzTuCZR7fLpxptwheNgmKKEYEoWmn6vAp",
  "key13": "U9jj7jSF9bpj73ZmC8iEmZEuaKEHADR77y7JXZakrDQ1VtSGCgrRj58snkFyf15DFPRzepKVHpvvJGNRnpB9UvM",
  "key14": "8V4FgA6nvRJzSAtXu7ZDrrnam99zT8akeFD5NhD264SrLAXcxaHHLzbFVX7ZL6sqavwtYuMwsRsjHzW31oV1wym",
  "key15": "3A5ckMQLu5hCDK24yGpfkr5tJaMxqdvVLt3ihutozNbzoeAEDTcKpNpSjWXhwd7KX58B5k5tEW3pEQfwQnFEtQLw",
  "key16": "5RmfpB8RbSms8XAihdSicYpTSAi9XwP2MppM3fQbrN52Wtkpin3GFZqR41kGQmt9dEqVaNheMP5d22DzmkkCoatK",
  "key17": "5q7YEns54dNV7RBXmeRUF5M8SuvX48q9V4jRXnyPT2QaEo9H2TUWxaSTyX8UfbB7eSWeH6AQi7tYD63xDYpX1R7P",
  "key18": "2qrLa4euj3jtUUECUqdBM2m4zZoqjYQwUrwt3PaRsAauLgzZLHLsiiuYpNE1to4kGjG3AkdsnmAK4EMCmfAvPQed",
  "key19": "2ScuHe6gZsBuQ4drcLpp1t6tWjd7KBjAL3Ac6MZcE1dVMYtyqod3pCaWyAhvXdSydnZCb77uFgJ8yZyCA68T4SeP",
  "key20": "3eHUCiNpj9Vs1m5Dn1uR5gg7zEQwC2bHoMm5rrKPW6U7EUyt2Gi9qjSSJ85X8h23ZdhDHXnGRTcf49MurYZFRn5z",
  "key21": "3s4Q76W28aoY28hKc1gv7DGNKj2jCiR6TfbNWMR7mjgsJjX5PH4pKiohvvUWt9GgKoSe3mpFTmDHj5fSy5ZgUngE",
  "key22": "4jbhmUPwM8caMFGzEC5cw7Y6DnF7Y9RYqT82Jr7iev6nGa3qdHv4h4scTVufsC9idypgaRJmUgnTSpitLUPkkcmJ",
  "key23": "2zWTR9iHNqkngNC78eskserzMnGGS9pQ5wDoAoYqqnMmzMWsitDqN34A1ykudRLmuwPP4wivJuXUM6KiDq5oMmps",
  "key24": "5fD2xnZSpe4cD2cM4cgxmHP7xMw5A3Q6BK4LVUrNyQiYeyeP49xzkvXit74ZsGAqRwG61T9s3PLsmU6YbH2MXEwN",
  "key25": "mG9DkSCq93L3ULN3c3r7JyfWFLzw22uPnAaUTA7zXGBTbCZGK2S9rBURbYVLDiSVHoasWRTZ7hb6X1dFhfWFaUD",
  "key26": "5S17htgsTbeLbPzGZdmKCpavM9fpRgjC7ZJbBoovPXS3NEXMS1AZqaiVBBgzips2um6Au8hL9kXpFT7MMrPW6d8d",
  "key27": "3ZP6sXT7zeXQ95zwnPBDhyUXGbcpcpDDEhQeNoBNYph1mDA6krsiiuifYyrbriWXAA65WprPrdoHY6yZQ5w6y2fd",
  "key28": "3o3vFcajJahDihDJ1t6SvHqH8H4ecfAEUnjBytKWxs7w7kXFmY93RqcjoYMNpwbWwn44p7vTW2ATi3LL3TPBrvy3",
  "key29": "37tDcWovsDoC1Q63dpvXzBDDXN6hxNSm4uEwmNbuAd8YsWnBvDKDLtncuBZRHT1h3qT3maKXQP6FLAFHgmettWxS",
  "key30": "3KZmpb3Jfa2Y7AEHrfPku9wQB6VCcubVK3o7KQmuesvEcC3jzbgPkKPFBnMZ7NgNsTUzaTFjntTV1wUTKE6aNXtx",
  "key31": "28LtsbXnfuTFVmnQqm75BJqdsc1B6BV7DjHfr8eRSf2fpDgshxzV3zLdFGPNdnoUKaxDqcYJW4HryyeG5d8kZaY2",
  "key32": "4eAcVfDfUbfHtizEdP19ikUBwvALHEVUNVioe9SrUzzZnWq51CMmrcdhodPzHWbm8HVerv3u2VGtFzphL9qdKE3q",
  "key33": "2MXoT2D3DyeTRTPoshiQPRNuENTFN6MrJqVwK5no3BNRRXB7bTFNWYk69gMLDpeepaehzMJTDSj6wKJY7X2xj1yP",
  "key34": "2pHdmZmkdZtRwWia5ZNEZ1RLy4h8dMzkmaKtYUjYi8VVFTL6TeFW7yAB6DdZZsJZ667g3hSDjsZmHCGgx97sW32L",
  "key35": "2JjrwZcuRwpZzTq1kfFwBArLtT26nQBkC9nVQ1JuWFAtEk4gpBTQXhNNUaUWeJv63En7KFcoHhz9ZyW3hVmR389D",
  "key36": "3PSk5jTKuEgQ3mnrNnbEi8k36yKeAYp8wEVi2ikmvqKv3sQJkrFLfYd3K8cCVPy15pPsMqh8iSZ3XCqcoL7XSg7a",
  "key37": "59MDuEvhg48Pojn5Uo3kKRMQ4qMUF5greXzKs3GQQ6eXctgH9m6fVyWSjjUEyRifnaFRtjppjfSdJCLeUDiXDdwF",
  "key38": "1oE1qtMcqe4gU6UE2rjM8NfeF9iBZFA2rm6nJsRgxjShNU4DieunLSxxBr7KoFJ7nrVGV5bVTaa4QVKkoTWp5G6",
  "key39": "njzsVitvcv7QxpBN3zcDj5ey2p6sMHCi8RR1S85C7aAuiQnCTSMRKyPtXF5QXFSSpKGWgPwQp6vnvgVqB8fLbGE",
  "key40": "5DGCsLKPBV2EaFJdDS6W7QgzcLTiVCmBSXGjJZ37yymFFGKJZocg7nHJxk2oByW7pui2dw1LzV5uTRcFBCPd917d",
  "key41": "4cdWK7jyo7zKJyXPwKtF8y73SoNfJtNQTT881ucum89cmyggUSw9ptZwhBokaXxJ6EHRP1J6nseMsQwTYkVdRMXL",
  "key42": "49otfjN4br5eACasDtG1CamBDjfz4hDWrDmuv71cnAM55pJcsGU9WVmw6SNMCWZ2hAc93BSeFFSxAuhRwh57iTiN",
  "key43": "5jyLxpHBQytXhSwr75RDC1xbLUinmiNnSQfUnFx1fhgLt3yZfAGauMuYtGZyDbBc5ctzuyfWpPSnz2xdKXTaDyYx",
  "key44": "5RrBpELxmQXnVUQT8NywkG85UJMGf3scWcyNrJSXBgJNs8TRrvFV66PPpmujyLLGLrkVqyT7VzAfTRV1AnTSEwDz",
  "key45": "2b88kVUmzYkT7Pg9JYJWFTR8m84xR2Q5uJt8GZJC3hzefefguYNn4p38hYjmeCZaNjDWgBXYiEkH3RiRaoMhXZG2",
  "key46": "3YiVinWiaKp4wSbpQ4RX88FJVnKpcnCiUWL1y32a9Kq7mmQk9cW9kdXRFm3XSSqGZmAGL85xD5EY216rRaxggniV"
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
