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
    "3BbQ5siCPhJXRTuXcfWJ9KzF9eGLuL16eBRE27jCxZXvavEJ8E83XX2kLH4HUN8H22kHHH7oSwHmJBgyw5RcfEdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBPy7xfaaEqgFTxRNcBz3iDkbBcsu9DZNzjhDSFjVebnK338Jhbb2pkzrRH6xb15fFjwFaJMZmQzmHpCuKiqCkY",
  "key1": "diTJSiRXcV4GdJusWAGvSnZDAtSpwKJLVbrUbjPDpoNxSPAkQ1Sup2ZqUncGddNb1GfRAR1n27UMgDNiyfaLWPM",
  "key2": "4de4H1Kf1jakPQ1dzh9cWcjjzXnbtKuncgRp4XZpEe3KRUNfYMXCippR4MKCivPbyRhBzvU19CS3YBx37KWX13EA",
  "key3": "2vChFP83HnK1V5PQMy716Bj3wPv2mFfQ4BuUokWVxASRFQX38QiDuQCBsQNQffH8kEk88obGAUVCHPmwT3LSZNvi",
  "key4": "2rbiQrSqiMVxyT16d3VZ4TkVdcv4hh4MdKf5re62SJ3nG4Vr8dnURLUB4pbS4G51Kz5QTmgw3mKNBUVmkDBYeQcw",
  "key5": "3K2Raib5hxd5a66JQXuyhTrKnnqzrApjhXf8LEfywTwSA5PnBQ5hEeHBq6fDbKQ7uwcs5uYZtEf9LrMcUbYFCLEp",
  "key6": "3JmF2Qv1wjU2B9c7cqwintp8pk5DwgU5V8trjyEVKPwaa8NYe8ghrysD3iKbogu2ccJHzxyKEfE3DZxRcjmB7MXM",
  "key7": "3Y5dYJbrJpR2PB5j1tjhk7xr82cyQJ8XhRqGowVaa1zCb5v2ekcAeQcymgxdt9AaYPCPsmKtX1mpLNQETQAPHQur",
  "key8": "2AzcBPjUKyczfTEtyBwrz75hJ68h1JBuSR9gxEM53Hn7Yc7jDm91xumHWfxwMfPVcL22duaK11mHawWVvYFtyJen",
  "key9": "2LpmFjFdEZWPzM5LqzTPuAXQsyxYuXhn9ZLfscr7zfDFQvNb4PcPg57J2VBs52vnfi6TYRQJpGu1XnKiwW1zEkeh",
  "key10": "2dEwAzY1VrtWzkLzkMthgm6kMdJGPdA6tPsPDxxcnNgwZtZMVXUtWq7MnSXyLMkyUTrzXqJRCDMkbfa1YVr3MQmr",
  "key11": "3MxappKyrD8qA4pHQyi8FjAprkVmDxhanjZKh3MFXt25PNeGZ9x9eTcjSgVMpssoJCCcqCBhcokuyTaDr9MrzJMT",
  "key12": "3EVEDe5NSSiDZm5pG3hVXYD9599YPhiZgCNxNRSAQrP8y7WP3YzgagpP467LQ6R7dVvTXJiSpE8eY37j8UjVUWem",
  "key13": "2XfgRFuGHBSJSEb2Z3cR1WsnyxFZ45vi9857XXuELc8yEf4yd6SsbdrpMtW98P6LJMhRSMujoHG5rdVw4TaNzWMy",
  "key14": "5EP9DE56SsQunJCgtuQoKEn6uMq92jincBXE97WEQkKirzHhFULqBeQgfP8kEUaVA2do4zXb9L37Dvw6je7sZkKZ",
  "key15": "43haSgKw2XX1Gz27h7MraZCGBFZ7mebmDMRrejkxnwyifvz3ANriCG2N1pL8z5FAU75UBct3FePXaQJKNu7812yg",
  "key16": "5e39hNdgte9Br5HgxpPQw8P8YcP7SfxSF6aQMDTfU5Ps5CVBnrCsrfT2JM6Bm7dQjwkFcBiLAeaBU7JniB94bSkU",
  "key17": "46P4ZiKQLiUaCPMmJdgtJiZVQ3oJoDzuQH8DeSz5o1CVC4LPXD89jMNds4Ubv6obmPvcZTSEXU79wYDGanM4fkho",
  "key18": "5WjvotYZaknSxmCieHKfbGPj5Kot3k2pa1uy8QbAcpWnZ1HQRNktGtx28gwKaf8SE5wTBixFUY8FSL3DMXifWhLP",
  "key19": "4kEPVgr31WRq76WWaiGNvfew8yAJGxwwNuTjVFKo3u7v5MPT2oXVP4Xi86LbXQ2eBv7WU8SCPWpgdr6nF2y2kgcd",
  "key20": "yjZ7T83JWp1rZbhUJTgT7EWXtWtKY6g92gFaqgYBxrqMaeGoBev4iBDigyX4taYLFJsPfRWxzwLabmND9yBoKr5",
  "key21": "4ZXqLBCxfLaxyS7NchdtcUE7wD7WeimVRfN7XjZCGMXzb8BbK5N9XVJox8hiYawy4PHV6BWXux3c9PQAnD2XcXhh",
  "key22": "YEwx2KiZP5oweMGFis3TupghET5g8BzrrF5GzCz9xkg92tVLMVCQPG9JWsuUwWR6mmXt3HBat9SKUJ881ANjSKS",
  "key23": "44kCDChc7jX311myAGXWukELGiWbqMzjrhfoe1eL5KC3sga1p12BLf4qRPj4htsKdE5JgjH3FE8pwLJ2hNWkE1Kp",
  "key24": "2uUrMRA9NVAadgUtjBN3sq3hca2fiQpgJR48hAhRnDAbLuUYZJDdr4ajMWqW1NcHoojvcM9mgLedq7qb4QHcUsJ3",
  "key25": "3EQEgAYwBigzJk43Sx55QiQ8hHghmMtdc9z1r8Ze9PaYAaSbjTqV3gDD4vh24n3TpZ1EgycB3C4TL9TrybkgpYWB",
  "key26": "KxuV3dwjxtnehCx2coUdF8iw8ZCv4zizzYstTL9WP23P9iJfryuFedfV7mTLNncTUCzKv6KvS9cozwkDFkdmUsJ",
  "key27": "4yEUqGmcTfYb1VugbCpDBiWLsuxgwNmaSKukES8GEWUkrW63HY9oZ7TBruxiNttsqrP5L4D7MVtFw68UUDjkWLbM",
  "key28": "5eFq6YTTUoFzmci4fHQZtBKz3RRVxKvJQAvG8ctpqqe2pwKdw7Yv5hfuR3Ej5FV3WJmAx91uAxC5HhRFamHqYM1p",
  "key29": "5A6eMEoeCGz8EeSYupQCcu3uzp2wfnphwWeoQgFrcpiyNkNcyHPkgn6n3xjNuSCNf2G73ZaFmQ3Z8XQveu7pWsyt",
  "key30": "5SZ8iz7ZjJp7fzXVBuNLGU38oM4hhUWc9AAdmWT14hXx36tJsf76hGjxeYvZKDVZn6EAdrckWdczBk2YJ8Ehftrc",
  "key31": "WVDizij7tPk3nBEzJWmD7pYbXyKcusrG6MeZg3iCvekYF7L6U4YsMq8EFQwNV7MqRKX6mgX7JNY3U95TAeHCP78",
  "key32": "28q7odiRhGD8BGNzUoBh9aC7aL9UpVPSZRphZBrZFBnnMWaz5sjELvCcMRXv5GeJebER11akZXjP2NE17aJNiFNx",
  "key33": "3dcSEUWaufaWwJy65Ed5M4GdgY3hUwLQbdd24XgacFmnQswaqbiSAUcamge31m1JSUzVf1dSrCdPP3Wv7YUFVXrA",
  "key34": "4kniShquxGVTgggkoTAKkq2pfjY6Cq2LLoBFUdnEYcPGACy3NfbELbmjUHPEQ87EGXx5zqafMrb4eVd1xetj6f2v",
  "key35": "5sj26WcU8G9U4D2AYSbLucJGyiEshVmuxxFnSM5nPZV8JAjHFeupKy941EXBqN77sL4AiqGTvgQ5bKzaxQn8Tbbe",
  "key36": "2ufykJRHVvnfdg6ZJXjr3rEwfYDbb2nPaVNMdn1BdeGjAArojspBvxW85hKPNAhkS16u67MtsYPeyfa8PJ72qNnk",
  "key37": "2VG6Eaxfgp16tmrcLADRRLw9vjHrJ9FvPQBxwNDK8A1h6wnFMknGJ2w6hSrjh1WHWN25KJEA9ZAErK1FmPXUNQPw",
  "key38": "4jdsS6su1jaCTZ15kniGbBpg6SgBQtQVxiJzMTGV25Q8hzTduWUzLcHFnKzyF8cYPhzrM9geuHQ1oD1TWmMvebBH",
  "key39": "34WzGeZzHCB75CH6wVoMbAW5NqABh88FASGcuuo4cqu781SFHnXjPjnJiS16RXGdwy8UbeNL3pU1T19UpfHRVYrR"
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
