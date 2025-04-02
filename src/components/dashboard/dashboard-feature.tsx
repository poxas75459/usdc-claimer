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
    "67517hXwjcHQPQoZpEMYKBMwTAGCo8roe6hTGkSoZ2Q4zhEyZekH6QEttbqAASXGHNdHz2RHTsBG4EAf5jLQ7xVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tWWEtMTcq6SNBvwB2DGehxMHBG3qc4jpRm3efyWsZcrKkeXb362ppwjxapYN2CVBnCQ76tBtThBYT1r6stoXZbp",
  "key1": "2aVAcPEG8NuhSEJmh8YQnBo8y1qsgxeioiyzrooRggTk5bGsVwd9McGFxb8zC54mUykawwFhQ7wM5ih5PGMi3bUA",
  "key2": "2R2HKFx52VTaDifXEwcBhXq8sQ4f2AY1gQCwLGB3kGZBtqWmYAAe5gHbnykHeguD1AotgPRGHzkKAuunYPpohWJF",
  "key3": "2ZGgpv1EVG6qHWkzy5ogQ3gkhTL7vZt13zKT66QkQuqTTWoQwrsmp3n3QLq6ZrA7xHxAw5ykDyBx6ugPWBY7u2Nu",
  "key4": "5aewQycE1gcKXnd1RqvrRmwj9qA41S7aDtyv2iiq8e6a1XSVM27K1fuE57AYsUWMCu6JUdaK9DaowgMqz1zNWpbS",
  "key5": "4N2A33YaNNhRD7XnwFHTyFNxf5RozBTKkTV7GbKMmef48ZnBFa6PVZ61gyaASFoVUHK4TZehuT6CwqDmmTJKjRob",
  "key6": "4Cg8AADSm3nMCwiaef6JeqDMRwSsLYCY5hH8Dr2mz3zyr2sZSWPyeQ239hxyxvEDq3yGJ5dXmForXm1cqypCtS4s",
  "key7": "5RQXapzXLk4DnZrr4UGSDHq18fQNPhyqnh3urhe6mxi3QELjpv57Bqq1xsU4nNeLHR37Snf6n47s9nL3BZKK2x8T",
  "key8": "4zrzKsqk4ZZqBNHGpRMJSBj9pHnnLaXj46dFzokkVTSZGjvMxN69i6mLwVRseaUCRwKNYgZaxYbHCU8nQJ2zsvFL",
  "key9": "3Xiwfun77xrxoAANgXZ6TLvwCJGbzbPkMyc2EoKrreMZGLw7PbUZD3mxwAVm2dryFZRArAZnqXjc6jT89NQfNiZD",
  "key10": "3QjrT4M8eEWDQDHKs69LDBKwQ5Ar34wsRLLmX5QuahJWQWHXQMT6tconTSoc3gCUSM2duAbjr6MPUhrp2a3U88Wm",
  "key11": "F8b7F9EB96XtbbXxh6viHkHLEKTRJL9Z6nqU71bSyYHVapiQaRwZFKNXAMd1mDBtWnWfku9wKn3z7C3vBhcTDPB",
  "key12": "4CuE8WkkCPRKqk18swxn1QQraGkT86BrM17aThPFzMYrycfPE78DF4wE7xF7QX9VaUAgqtLmdvmiF5LnefDENnsp",
  "key13": "2MAdmudwLeH4Yv1c8bBcM2etF5dUeNE41oCr97fPHqcam2iBrwkUtDKjAWA57CEk6oPsB6nX2m53VAB12uVwYLx4",
  "key14": "2hrDKBCRLxoh95ZyR4CqXYpQ29DcPo8MQXa7AvDhgPNMHpZqgKJ5UYHfyAAcWGyUrGLht4Vme5GzsCm4mT5bCw2j",
  "key15": "4cMbE8zDa9vBARavBxVctM4gwZPrwMDAmoAdwpbLZAXSbbYJjojtSjHxzTd4t1R9hGn3xheLh7QKJ4yWvGZfxZBv",
  "key16": "puM6EycwDHuXjfhbqnUQziWcEcBRymCMNFTBd66onJSD2Y4Z8X5FvLfugUYLnSvCAyhymAwPSWshR2wdV6GjxFf",
  "key17": "xmcTACgGtK4iAdk7qaab8acqunG8ix7Gu1CWY7GafZJi6TAsxoZ6H2pNzipYL59d9VAf99erLx1hsD1qZEpxowD",
  "key18": "5DbPaPMZvYVkicmLCwaz3fD2soNFFsFqTMiBkAeP2PUPDqY6nJrcq4Ymy3v8ArQ5E72bSKxYLS8RsTE7ES83VYn4",
  "key19": "3rt61iJXXFpgii4gaedGiYJ4g6Yg7gwN5ZoRRQqkgnYzsZeaQA9cuyPAPB2oBkrQ3ANQdCvtY4oUgWiDodaPrdFs",
  "key20": "5ioDKCNYkduRVsNMjd4a4S9sLwtth6cfKNrkwEtoFHAgJV9YQMkXKHH2uRRZbVDXzbWG2kBQ9EGRJGF3EwHjpyYa",
  "key21": "2WoHFyRtGLf7hMjifMsricRNzjZNkgECaQ5ixeK78bKumaLq1UBEpqP6qMEfqWhPN97JqRPdbbTPtN2B7BUGsygb",
  "key22": "3LSAdCPZTAub7pTUAcLmXCtgs59BCQkn4i5667Tt6jAnGzRVrkR9ZgwanMWqUmNSZcnR826Wz2KofMjBdiTzUtSj",
  "key23": "5Tt8srW3uZVa423o5YYWHHjGa7THqN9mrLQDBCNyWwNNhR2fFMxAo6t1519HGs1P8yeJQhMpznHaPVVHfbufTn4h",
  "key24": "5fjgr1v8MwQVcJDm194uC9NU3hpnjdxpSqQRpsAHCfgkUxNDoS6tQ5egAd72A8SWy7ejwBPWTrdMePx8YEc2MZxP",
  "key25": "5t3Gcjo43kFncGLgkEhJK3nnomu6zr3gQZyUQjeLaMGcbCAvhdYqV4hRCgEKg7g6492CSJMHArENVu8Q9NBmCCf2",
  "key26": "4FL5eq9UojiG6YcC7vNFKSpKJaDMbtRMcfxnXrPs3anEJAY8fcnE7TK9yn5T8x1gXRwWdrEaEGoAQWTPJFuu1ipv",
  "key27": "49moNwvEv8aY5cbSbB5nvQ4euhaib4G7tvX7a4Tnpbxbgf4iPHMXmhHzbo8emcggNGoyo4kwNMdYgwF8zTyX8Krm",
  "key28": "2TRtmPdJQevznbfyVoNQi9h5FzbDtPmioy7Tf9UczBbAMHrqqk1DrhxUbMeCaQ5mUJnyMp3HjMYfRrCC3Kr4WX9b",
  "key29": "5hnZR9TdNiCPWGCKaViZYocQHetWjJy18xx1BTwRvbasVoJcJgLsPbp9odULFEfAGqHCwg7QsafLsZeqfhLESPAf",
  "key30": "37N84izwgMVuhCPxVNHN5LuXmvpRy4QAy4ZqUd1ph6aRjMraV2rsrukxWCMj7DTBMHYYV9uRGe6nQtaGWAyTf47M",
  "key31": "4Y4wKGsmbiGfZ6nsWoqeiLnXsbEDPcHNZ2A8QsAk5J6VSV1D5m1yrWyj6PD7sQjGAVGuMTBpJfoWpLMBbsHT8t1T",
  "key32": "3LFdyiPFvLFwhy32EoKWzbYBiyNxoDfrRj3gMVVsAmagxKkhzHmWbfE9w5CfCL9CgJj5oA1MauH1BkFPBucAo8B9",
  "key33": "1cuhu8fZT4P4Su7qmURSaVjKeoWsRTbac8WpBG2mvsGhHDznV9w1royobdMscQ9uesSD2eoyT8sGho7nB4fdTzE",
  "key34": "5yhHhb87qGmL3r1Uzoj2NAuRk49Br8NaMhC8HDt5ehqDm1KHxBDoimmnbgURRRbXKmcCWQwxT8vU4D4iR52UpHzB",
  "key35": "2u69RN5yq1qou61wwiiz5hzHAxoWbrbszoSFLbEvgMPxX1zjpokWK9fsgk2zJhWHxasLoJ7DBfjLTrrEJ764orXT",
  "key36": "5zwwUCheVRXZWGG7xP3SNSc4ZLX21cvUowR7rH799u32fPHFBwSexv52pyPt88ZiDUVuLnQhL19MD75jb54hAa3p"
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
