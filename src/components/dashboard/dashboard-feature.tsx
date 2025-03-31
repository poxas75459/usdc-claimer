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
    "2TQhgfDug7qEhezh9aVemaoTkm5aTRQ5exfDxeDMzZs5EF5XaNRr2SzrXVKGw939ZCUxiLX6uRkeNPxxLaKPQyj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n6t5RZUSPm52Wbeh6h4hrX44A1YFrx4GfN8WvMaEjM8Ne5BLVfjBJZYhKw94kKY6xs7CiZSFoEuWvkwP1kgX3R5",
  "key1": "36Fo2yjSiUdnEcMctaHNF6R8kjRv7G8aZv8MkUs4B1zNtX2NLiWcJ1ameGSPXLYbXVUfrhqZ7PqsfRFLsYFTtn7R",
  "key2": "4ewSy8wrebEqWru8sKDubPhwBeJgGq3wN5Jw3P5W4Ud5RzGnSJj5xPZbvHnU3YXCp1QxBWSti3dPuzTG7UsjJGWa",
  "key3": "4bFvMybubsrZctaPyfy71AHBhrW3xfpSByYSdJfn9kqq8vFW9aTWzimwa7bipSBeiqZUiQ6z2gyqa2oTic4zQWvd",
  "key4": "5EpEjVJmG63eU5SGj7iVvTmoekhQ8wLdncsKS3kbhWuiyrNMM7vjyzPSNHJmiHRknENC5i33M8DPjabJNJK9MLEL",
  "key5": "5bLmZpeB6DWByYGkKLPJTJ6Q2Y2dSB36Sic7sVQGi3hbtdAxDCAo6oFchobBakgg7x72tS99Cq2p9a9q97ro942q",
  "key6": "2tTLuq5QjrHHXiK7sd6LFvrz8kVsd7RpusTPCiazA9bABMrgXZPw31s1xR4AHEEBPs4RP9fWrLQpwSXcRxZYzxJi",
  "key7": "5gkXbbYRdvQPJwoAc51zvXuEAWJ5d1nEqe3E6jbjvp9aF5rYdThoMLAp52UbhnVhc2xArnw7T8X6vTAwE8xfRGPX",
  "key8": "43Er8tx7CrYdEG4pqC4y58RuuhBUwQeipxP7dcx9o1b9Xz74iPxMAAGyJRtPiNjDCHzz1A7Ey2dUmbemP6GnF4nC",
  "key9": "3baLzzG5zotThPxTZ1bgRvYJwYZR64JUPX9iMjKRymTmkH1WPzwZzR8RndKsZPp1NhLSwZ9G3jcSBvVknJ84ByZR",
  "key10": "2KoDT21rm6trWy51f7VGmtRgZMGnwNgdAoUr8MikLnKkpYTtyzPHd7onaPx12xe49wPbNLawvsmwHdGKkzkFnE6H",
  "key11": "4WPXCsP7p8AvC36GaoXFE8hcWEVRwjYDMf76xSn6ArqMhMep2hQxBZqEKPnrSJg5Kv97DhV9DhT6kbc7oBQ2WFnf",
  "key12": "3CgAMkLW2jskBBJD2vkfBonheHBGj8hBtbjTqApuWMDb8tNMyok6aWKCqwRTfGuCN4pP5YzsXf5DkmBHBukscYKQ",
  "key13": "4Gr4R1sDcU1MdodeWyuKLw738R4yaLra2DMCuajMPW8w3KaGpT2YkYkLfWQr8uePHBcHbLWgEuxg7dW5r45myo4s",
  "key14": "3HmXcUA3excwqzmxh8AtHQkTQv9MnTen1cfPhKYd3jNA58GYCqLSVQnK65hp3RYmd7wyYeU4a7vLjWJcfQwbf5r2",
  "key15": "3aQ78SmZY6YtWjLa8XV2V4Gz6b8Ano2F8gHXjZSTsRQUydXjxvQT7VPdWNXgRgzeYnfeAtd3o5jJYewhJVzVaL4s",
  "key16": "2rddMAVb4U3U95LnCV6ZaeCrxqcsttqQxtrM73ywRTUCET8JUotjEuNQGFXV5c7aQ5vzzPfHwr6iKozrLtAeqsQc",
  "key17": "3vRQTqyGxG5yv6kjuwn8Y2GUZaakZtv4GQJr58xNpc8bQfWn6YRkAGqX685VmMp2vcupZTWbSef9Mwz7tTmcUjSv",
  "key18": "3j3sSeSxiEXx6jhMKFtzykb4Ez2ryuXVTE9MYQmVoXeurofa26mqJJhMhiU8MbmygDRYJVNANNRgPwevk39485TC",
  "key19": "4rY7k62DB4cHMWtYhZC6FB6aue2p4syi7xjrSF4SB8acbYdBr6EBiJUrf7qQ436fyvnnX3mw3EX71t7sWksQ87Jb",
  "key20": "3hXWJfjQnBCQHo9R9vwhu9Louc4TzhSXMuWAU12b4a9XiSnQs9FTZeVhPuPqDpJb4m9tLBm8vMD2jKcUFXbT5S9a",
  "key21": "2Jf9Y7H59UbtcWypeFbk2X42n1xqrQpKXtxRYXR79EkfaDBxJgsKWR9vB8BP3FSNWiMhKXC5aSiWeUf9M8j4CuWh",
  "key22": "5S6mHgszanCvk8KhFL5EXFFDxDYR1DE9ppwPpdE4mfBRPUxXVsme1swyKpV5RZxnFGSbzzUsMmRGQKS8ZpPmEsyW",
  "key23": "yBJLGwnmVj4xPtjBcM4S1sdW6kr1uJ1bKhbuC4fxnRrGLR79JZ4oUyoBZav23h2ZyzbTyNgaKqJvkzX6cv5q7Yw",
  "key24": "22DYM3GA3osrYmHitHVZj6XqmPKcKoz4CznttVywfHkyEHQTzG1jMcBuh7aPfTvkWjTCUaEZUHADg7XQXS8e3nUX",
  "key25": "KBTB7wWPGBbNxJH3Wz8jD2rkoJoD4zTJnP8Fn6amtE67EuMdmMm2b8cPMR1SR6DUMDfpZzr5KLVQ8S6WLdf6Mam",
  "key26": "49cTfw4kguA89pzoFqwkvdnqab11beFBspy5mJzrSfG8GkSB7N9MhGgXNwwXfatppcifeJ149NuA3C7QxAxdRcvB",
  "key27": "2wz8rbJUZCnrnTVWyhMa4byb8CTkep7RPwod7GbzE8xsEDcUWEtVmXK6zX7zFG2S5rHZNaT4QXzfzrMqYWccRTEc",
  "key28": "5A3tKNEdthbdK9dHWxLjukZMfvDS6uK4T9nzo5LRFqy2ZvjxDxAUwHGaR5nNfyGcY2MaqwT8zLNKJCxGXAjcdoru",
  "key29": "4jdHAF3MLoXSMNj5JBBM1NFFHUzA1ZwTBSjCFgWFLH4KGcWYYTc9ZZqHQ1RFQPuvF7LnFM3J2Ur7jBvY65najZcm",
  "key30": "2hijjTXsw2Ecg2z7eSFL3WTDhHn6P9923bb2DP4rmjS4xz9wEHCDP4Bgi4naShEn6Wt16S7ZBizRgncE6HsUzGgH",
  "key31": "3xkfXLCa974WPeryuPfdSK1DG2PCE6wviCULKhV4hXLrAFEBDX7HW8ipSyR8BYDrcAsbamvjdws6RkrPJnwper2q",
  "key32": "4LemFPQdAzs6cKKSqJiYuwbc6fqcQeAvYK1kHwK1TyYdX5MqMPzjrugr8BRm4GfdN4Enenx1Qu5YG7vEYXSQFsUG",
  "key33": "31eooQRDwYEpg27Bz3xLDu2HR5sSibTDs1rAcLxf6RxcStspNxWbr2LHa3JMgbcEqo7KQU5vCvXpSmS2AE9BvMTf",
  "key34": "3gYXbiiaBE95BEGXuuWxQ3nEbv7tB8RhXkfqUgBMNFSMQjMYLaFoS7UFQAxeSuX33bRLuAS494zSQPPMX2Y83XsM",
  "key35": "5QLsxmqDWwZAQqJgMhQcDqMsAxeKmXFiEJqyFjm7LHRkGcz175j3yREPdcJYG1S9aH5eFQvUEwQ9c9JH9XmZPsZR",
  "key36": "2z38XVwqR8YxZ2VofShqMSfAXYfKmt7rQZp4gWo6zpVerJVTaY5VMtF9xwKmi553cbT9QmorYS2jZ51JF1tnGeg3",
  "key37": "4tJSUknijKcsPmAoKhjLS3BkoFUxApiRPeT2gMRsG464rv5AQEDDSKmRfBZn19mopCw44sUEnFjpgsgMxFbZYCsx",
  "key38": "2WGsrDe9hfwTDYtsrdszsKXzGh1MMDXLb9FNM7R7PZrp8TwNas1pBspHSa4Ji7ACd2tAEzdTrJCMYdHCmtY59kVA",
  "key39": "2NamiwKf8KiVw6Aysv6TRW8UwwTG29pEEJAnrSdDmpCpuMQn7CUeNxcQiQGwNzzXfPDw2jTUo5Drqw3UYqKevVZw",
  "key40": "4uKC1ZV6LT78etiWN8LoFmF2wGUoYUqoB675A3jt1o6TR2YLX3ftCrKUS1qdVtaF3XFo3jEwi4jYgJ4q7nsxN3W5"
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
