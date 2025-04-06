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
    "3afeYESZAwQeNCjcHtGf5nMPXYAkN98bnBHM2Uu8afZi39DWbdvEdSHzbbMyPbvRwMzzbPzVkbLnEFujjEFvY7Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgJTQ2dXKgGveNdLsVbvG93mqPHgGwnp5ZkYvxet8cSFBd87FwcNNHSGpdkyKx8ibu9jcEhSiuY3s98ZyFDgT1U",
  "key1": "3Vhaw9kUNYNEKBF1onEnSaPw19rPrZHgUFqSJDrcPvAWVvKRm2BQoNoyQ4axtH3pkVWkPnePbL7WHgrYc5ogdFjQ",
  "key2": "3Smx597bhGUoHs9QQe5NevjVJQCQg2CstRddRZYe26NHu61aNik4eKCkBjY7GAHJ2H95qD2rXYBn8SYYUB1saH2W",
  "key3": "4JTvwBRR3kBNN9hDHSNYdtrwQDDDJTDZR1PSi1fFoRkCf13PjPWE2BkiYqTgZG7pXDFuKQR4uTZd5hL8ehQpCxKA",
  "key4": "GEMSKQHxbSAsEbJMp8G1qCbboAPo5mpH94HDUXQe9Dc85woZafn5yFDB1xHTwhsTK87nc9JqrYxWiqZCHygi9Lg",
  "key5": "5akBixGpUdfR9ioDCDnATWNQ8emoqn5SYoYWdF7Ng3gvU1ihEyv46KRmkrcPS33WRbxkX4aqDVqY3kCCu5k1S827",
  "key6": "bCEqknjVUXJwsTtrix6De58K2fRB23UXKt9cjUJz3xgxZKKdm35nzMEYfn7aVs96NSUfWYWm295LJWJExCGNBPU",
  "key7": "4BRfejE1XoGJcoueer9G7tTd2wWDj9AXgw1RatAs43q4z44zRrd1QJhTye33JGQPoP8Ros66y2SUWcJx3m5SLKyw",
  "key8": "3tEwF3vvZs5hbqgcGsF4csgRWSB7m4ebiXUrhnxJcPTZdXEt19h454mmynqHB9bJgtSgb1saHTK8jj6V7BMtk7uP",
  "key9": "5aSYV7UCbPym82vUtcnM7cHTE4pecQAdUn8tbw1ms2Dmje8bSgwV2H9YXd9DMbAGcweT4F4nni9CshSxEsTVnLBT",
  "key10": "5HHE2GtPGx5pZwpehXVtKyoupZAzcn94fdznkkDPaHZXCzZj5WNsxLyFCDcn8c99mWfMpcqT2PWgcWQPyq4LYNyT",
  "key11": "5TaRs1Ro6qpYhRkeCbPWxaBFHmoT8UskMSqJjWFS9DeefnJHisSWK2cMgAJwiFebzdRCmXXLr6s8iRw8DHWfZHV7",
  "key12": "3YB3LSKgM8pzUcP6NHV1CFcBRqqvH6kjqvqm4SoCC3aZZVeJJqQMiiEFUKoELFXBJmXbpAkFNRhTHgGhZvAAmGCg",
  "key13": "51f736rsfrGm7DcVt7CRL6iPs9ErPfc1NMdSEFNgUMZpQD2eSPFL1RdGXCKyetp2i6e387UCNZYhyaMCMG5keThv",
  "key14": "4zN9xe2b4Lscx4bstixgsxP45rFfpuSuekPfDNm7KC9Bmut6TVHRfmigC1jYwaRykAgbQD8CdqozmTp2Na5VpjzM",
  "key15": "5rg4REEGm21nDBdQ4qDCZFPyMb3ZKaykabydfjKD3YdPR6wXSxYUBFf2jcVy2Qe84t7aZJUUqMbvF3ambjtZTEsv",
  "key16": "24nSVGtmNK7rqmsYF4nX21ag7uHLXP4391b9BG7KoyccMUyC8c92pgR6hUnk82S5vbLRNnBegaWa3E2aqGVo43A8",
  "key17": "5zhfyGFv2LS7kvcQAerasjc2HxeSCtLbQ3JYVEFiBDCCcaCuuQ3g5qhSAWhMGDX2Aid4H1C4L3GBPPRJw3ZzGXvS",
  "key18": "3jHjaKDFEbnt5k6uYRzP8bsPQtAGaZkLkVmznZEZTuMQGZSaYDddsT79UBDznkM7o5M55x6P2tiFp8J3KFBqmvpA",
  "key19": "43zay6be1Aw58dsKdzV9J76HMLkE5ZXn1Afrt1wTM8LaxDGdEJ4nXhggEXgk3T2Z59EiGHuxjvkWdNZztBi24UDb",
  "key20": "4rosHeYTCc7KEZi6UHQ7HRBhfHdQ8daUQLCcDTBRSscCP7eF9YsKFoFXAVXvw5dS31ChR6VrHyGweDDWZBUx5FM5",
  "key21": "3GvfqKPMPcxoDofwjANZRYPHCxYE1qGnLYKjULYJGtupWWa67G6PCHwikom9mo9VBWsv3wxCmAuge3tBJTxxZeaM",
  "key22": "3eP5nPbakimog8Vun57CsniUzp1g6P56fHyKrjMv1ASSjUWM5ipTuHuKgd481yERaWjqLFAW48H7ZTLMFZ5pP3R2",
  "key23": "4xarGdBqHyMXtmPvmicRKrg6zrBfbudsVvompeH1wC9cu7oMjY4VmGtAqNufYzd5wNntbJ7jRXf5cB3wS8SwwVfC",
  "key24": "57UMmJMdkoUuavrE3aB5PdXfXUAea4D6HdFj9h1QWTkKtsX4u59FYBHycC6fUmgMYzCTK4esQBHoPpx5hwwFtt37",
  "key25": "3uDMs2Y9GeenC66L2J6fKHcSwhjYZ84MszYvmBcaUfGVJf6BMW4dVy1FkBU6brGJnXFoiMwqP9gUKHZLJ9ztC3pP",
  "key26": "5Rg8UXTEifuW7ydhcWUUNNqdBxajABJHnAzayG48o4MbF3iamz3mSH2yCRpTAktnhka4mDx8ifJFFV7SumZdTAbd",
  "key27": "27ffZXVnBPy5Je6WzuMC65X323rKMP5ppZDFuBFy8u8pyYCnafJzjJeGsvFxJzNmxaRyNYvcKox12p5FRuAVEfUB",
  "key28": "1FcbmJvUDeArdhDpDj7xzYnSkHdczXuhBxw8u7daqK9pSSguEe3cGGk5HcqSkHPfzFTtLL9zN3uVoGin1d8MgKw",
  "key29": "29M4SYzKU9Zw1Qcu4sTnVPSvQqSS4cZJody9ZkLRxF6WTaqrR6G2sG9z2HFZ4Kguqpb2XDt1Sga8fvGJqiYg66ak",
  "key30": "4GBGohMLH6hLNrb1z9vk5eGBPB4YEru3yY6A2sZUN4LBWuMpJbemaoawLEDVmsCYw22tszgYkvEy3s5iRzFLUWgu",
  "key31": "W8bsALniMsDqu1vJLTKKQiJwcEu9N4ftAwrgubqfWPtFcSTSRUdXfbXnxjVrrEN3oiDM4JSfxGRdVFEWDyjry8v",
  "key32": "BT6cGRQP9qM2paKwDhZgMDxE97qhRtZBzCnh1zc1CFuf5Xf2BkiPGndGJ8KHiS1HefA6taSvchHqi13n5yZcWSW",
  "key33": "4Ywq5iyWJeiGFnD4iVDp2Aw9sTe4SXgHujuMD4gcL8zGDfgYsYgv7HTfT2xbJY9gcvpy24BUe82Piek27Q9sFKtU",
  "key34": "3MSfbrZcpCoP9nnq3SQoN2HnSTxy5CNFWXSayC19SeGe9j5GBiLEPQ1XoXtFG4t7FP7ye3vcn6xU6borpSBtH3LC",
  "key35": "2QFsBbuQAdwHcqbpv4tjhZVr3BJmhZ253vDyxXrkzw2UjCwushhifZw9YLRy8LBWzBxGMYcJNz5UrR31s6VJQV6Q",
  "key36": "3To7J4AZtp6MXZJvgHwVNi3Ns1pxjS7HeNPChkXTteciqr7WS52R5hnjJpk3iy2iuwBuUk7NctpLxLQnFX4kqyck",
  "key37": "go9oD28VTJ8VL56PsMbV37Y4u58DahvWJkVD6Zsvys8JkSbPP1kuK36zoCEWHCQALLFuSErN5RBsq5unhKYKJ2K",
  "key38": "2582ZgS9dcFnyt1d1kXX7ruDYUFFmqL3RR24F67fbyvNhnv9NdP7YaxHyXmsrtEuf8TAE7tzCuc8rCjwEa6ZNpNx",
  "key39": "34qXb5CtrQ7FVkpAkJWyxn334X72sVrRUs65vs9Wp4QWgFsBSJTvDW8c8FFP5duiVPqYWd6TxRzLwBVRkhEF2qTp",
  "key40": "5giKbDJwi29sunYjc7GggmbWCtYZbCkdbVBLfnTqQtjgQdz5uvFRhRVKffjcv1RPMLW1NUKDJ81QiHcaw8wRo3EF",
  "key41": "2j2kXKoHSYPJrtGFWFbQGwn1Ao5CFk4zffE36CQeymBJYmizq9sgVyNwiiqevVT7tcKLfLga9q12bABx8RU8AyDy",
  "key42": "3v4qMMLUDkaZ8jGWjwNrDZF7Fm8cbKB1RNVjjmsUtZj5yEYdiW4gmo1mMSCN5kCh3gSW1WvXJi16xFvNoRVQUHrC",
  "key43": "21cjWXd8kmYYr8UGsXzGt8cUeX8DuEBSLU78BniAoLqtfVnuV7Nayb3r7oRZPYjNqWMBPbQ66bEVQNcz2APSzXHT",
  "key44": "4RUDi8RnJDYjPHHqxzfDwqoFXFMEfhN5VbRiX2RmqBsTkvz9EgWTRN4fxhwKLNwc155gQCr4qTVekArLscVNNyqv",
  "key45": "4bCxL68SgnRLPeQodgywVJykVVRunJAfXNKseQjwPL5PUiozbRMd4xPVxhE6LJHwA5tWT1jAJEgXZL4uQj44d4E5",
  "key46": "4Y3Lnhns11XoR3gHbMAYHvZgUt4vQoTAwjRa9Q5d1CnA6qGxFyGNqYHfiufuAC42Bjw71eTmWGScAmaA65PPyb2b"
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
