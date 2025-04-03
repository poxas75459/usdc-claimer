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
    "3hp65ejcDCu7WZk9Jxrvrr3pNXDYsY3W8miRQBKVPNqxYJYTBtph5aimbNXQTEGbEeWmCP1k4ZNtL27tVM38cGww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92aLg8Mq5eo1i7k6jofbnkRBDkqrpmNLasWiquDuebGqiC12e1vQxrovQgQ3kU5wphhgSv2tGNXhDL1H2rubMd9",
  "key1": "2crCMpMbLxuAWf6M6Q8eUiyYgdF3Y4CwpPoTJSabE2duhsBkXUyHHfCWvcWLgUzmirRWmesm1QPxFqsZv8ryo7pP",
  "key2": "2a2Nm5e2dLTQ4D94y492vyrJYyPqXQzjqbQ9ZQSPaQPbkEhKxpUZCAeFKWH1wuAvFquwDCrXqKapJX5diWYXShZh",
  "key3": "3XjY9kFnNXmLzhyyPwoNW87D4ppwhcM4SrupsK3j8c7CxjNBDr9FveL2Zd5qDivhxPDo7VkJyz5P2sr3Z9UuygPc",
  "key4": "2vbFrfB3AQM6LjprPwzVsj61YTr4VX26BwpYAGD1g7PVvamnA94QfJTHfRP3MzcdvLzxeuX8BWF2xdow73vXyTda",
  "key5": "2XbNDCL3bY4brPKJJEP3Urjdzy7QLPGU2ZgMSNHzXQKKwk2VYv6aaPHs3upyv1QBxpsqZfwRWxXL8tcBPaJXKuUs",
  "key6": "2kFDcyZvTSYFQWNjLpZLrJWiTx26HYXTWUzXxzJih9oZ9iL8kK3PgT71LLwesUgLsUk5renpeao3E8zp1aEc6wHW",
  "key7": "3KiBKDwHhAG7hatScauaYJJ8UrdoeX6TCCHghV9pvvdqB6pbJgLnt4TFDc13DzVkvWBBDUCP84TPjR1hCB81Kkp6",
  "key8": "5AovKfpQv43gudALGKHpG2xKzkRir8TJphKLw2rJdo5tA4RJ7g6AJkAmt2dDHZ4bvdfykDvnD4hEc9PfHHLZd2JS",
  "key9": "r264dk8b7ZRNCm1QJpmC4ha7LxSudKKSu3JzYcEj3vbXtxqwFMcR7pMeah9EgDVezgRvzS8QFbk7kTGTtECTzcT",
  "key10": "5poJu9DkUpP8edf6tH1jBR5VJYDV9jgKpMj8ssvM24GBmaZpAYVuRYox985N1AmjaLV5qAFhADCJYDqCgNTjgU8m",
  "key11": "QgRE8BRuGa8yimLAAxpzjwdCwFiBJjKPqb2Um5wbyPNMnQ53tERT6VRxNTPLZ8RSpw4FwtwxshQNzpNLtme2r9s",
  "key12": "wMd5wxp2gFUTmXrcdDizzuBi76QC5XFf2yzGijh3Z2adbMqH6PEBwtjJCaaMA7me1PqUVUgQZ4SL1nSkJ8JnLdL",
  "key13": "5fdAMbY7m2jJBnJi2d4S9HAyzK8Wx1D2oSFb1Xcs64pLpaknSeuxakyoCgKfeim5GkEVt6CRHpAVag5E59gpLCVL",
  "key14": "254zYhMh8tv6qquyP34DDaZr9VuoAfqYnAXCLQzrKCrLbWcf6GQJynPg9rkBWVnCLE79Fj1JNE2MWVWV5cuM1z9p",
  "key15": "3dNHKX1rqzBqdmbL8DhKwWaweuNFguLxhZGjHiSUV6AvgDyzCc7EryqRrC7FkgFaFfJspeDXNDPNUAMESYo6Nb1i",
  "key16": "5LBeCnxMs3LgXE5mUCLyV3eRed11ZSSPmVsU5oWKiTHaxhT1g65cZoFXV6DwksxBGenaFVjYytin45ZWXStQtwtP",
  "key17": "4p1LCQwQQub3fhLouWhX3HtJM7VCCHV9mG9XjCjgLKiT11BLxXo2Qem1CaGZsAdjyPRZDRJYyP2Go3m5THYCsjn3",
  "key18": "41hjufsbFiQSE95ozedb5b39uNsVsfzD5NrxenvBSMuf6SBXJaQE25kMEEAvqx2bPkepgqD75WHpxz3zrvdm62Vo",
  "key19": "599qxkp1EuipZDL4UmQADiM298aGWvmEPFDMYskU5wZ2XvtxAxhyjWjcWNavJkNDJVD3bivDRd5GPvAvXxrmjuCz",
  "key20": "27tKGF5naVyX8Sb8LJ45vwYbYpLWYsitn2pPWRTmKfTDnxNMkyTk7EZxA9vfxzH4E2pq4vKW7xJQDJjjboAig1mP",
  "key21": "5nCG6XFGX4syr9UHccL3SijCsC9Vex9f41pqPACBQS4Ds1EtK2riVKL3NjjmUpSe4h9iDoSqY2speN9mfwvVWvm5",
  "key22": "3BLLStjWjw6dM2uop3tM7dEbCVVV5HtcqATnvk9ijTG5iPcZuabf9BFV5mYLbHLaWxM7hU5R8T87KRWpMMNFdnrC",
  "key23": "4QYh7HG5bnVCTtSKASt4n4oFTZLbgPCXHDGY68DsWum6P1HxjZMv4pDYj41zppSeTtN1kdjkyCKemUKkAatjhq11",
  "key24": "52AgimYRGszGuay4YFvJJm7BYFF9WW1gv1SHmKdfjokn3Nrj1rU135MYHKUJP8eEkPh1y3BtDZSqtUQXQ4AwjZWj",
  "key25": "63kmNDhAFjB5Z8nDeDffEyMj21uiaeErc1QF4r7ZuTGHQNch72gSzfD8q8AfLT6akw8vHHqbXKCvs97sv4eyoXA",
  "key26": "2eAdUEV7WqYqA3bMwVdfqeAtXpkp6qFE6EV36kba6Nu93Y5EcMVvg9rkz2mi5uZDEeo9kSFLqsEREcXniXgYxBnB",
  "key27": "3c2YiR4vYJ4xG2Jh9qwyoXbo1cnySnV9nz1RpwDA3BHZLmiMqkhR44jW1T71niyJzL1G6VDJuewuSpmuTFNaUqx6",
  "key28": "3VLk2yyzd9Ty6xgQtZRZJyh8aKpibSehGJFwj2RcErJLeb3rp2pdo58zFo12Ji9qKFG1xTgsXRQVaLQr1BE9VAjw",
  "key29": "5Hdj77Y5ZqgXDmub4QeUf91wJQsHh6F7yNfsQZ54L7W1fchMdbUPSbGweiLNpfsVPyn6ZC9wSNGTJpqMzoLXjEDw",
  "key30": "57GXbb5wdphpw38M8TP9iqfFaVUfD8DBNDLn3HFH5JKcKFtqX9FB1FWm9Fi56NoXh2Lx4UFy2R8wnshE5LykerSF"
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
