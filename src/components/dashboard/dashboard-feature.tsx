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
    "5yQARyHmV1MejdVAzMkyDxTTjNCsXXtBr2x8hF5tzGtDQJhg1ddCZnXQ26HNCjnuoXXn8M6s6MYkFWajJAPt8D2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xHcXsSZ4MgyMPY9341Ytcn1TSa344NQ29yuXGvSk6R53Mz7FqzP1kzRUVQrwJQ33ayGdDVJryNCTjfVAQ9QdgfN",
  "key1": "4mn9GM6WkkC94ZbziqCxX8FMf33oxTM1b543haaPhXwoHxosGMZn7WvJoZUwJisutJNNQAe3BpGkpajfjsDrayRR",
  "key2": "32fBqFsFudvTXTD8G7RkY5V6wHKiAWNbySVSWKNR5c7cQJvMAuHDkhY6ZJtZiNvqwfWKCuVzrWJVcj4RqDmqaLTN",
  "key3": "4i8MduP28jE11PXXdZPBjPAFurbXof61tSxdza2ywwo6iRYoohAmfdx4n3TrKhCshY71kkis7pxDvejB41F4EfVc",
  "key4": "5M1zsDPhvHmAt25MFLj13rmUXkCGqYr3xkuDtSoruV74zZmP9m3nL9Yw2AogSvnG1pBuy3N5yvB8mfGMoP65JrQz",
  "key5": "4gu6s4KJ9JHJ4yDu1zbuqqopmtLYUaFuufsLjpvLhXyaW4bLgwHqaX5g8uwo3M2GsfsNhWHJhyBQ8DEjG9qG22SU",
  "key6": "4HMZkbezozT4EPp8USLhM71iExzKS298mmyY5ycPjzSQsUX9erLdVXGWshNRCMkjsgssRxr2Bf98Eei512mQjTF3",
  "key7": "35xG5GiUi9pMDpAP82P1L8NVDasLBY9cbwATjvEDzfxwaP3d4HQEusDczaif9esE9nedxtPJxRnidwbYi25Mjdfw",
  "key8": "5wutHii4xzSdCrvSzvrWxTvri9ZX1io51ExQ1LhSkJAfcDT5rRAyz6Kd1HUKydA29FhHevekH4Qqecr9J28q9xhe",
  "key9": "5Qvn2PgfAeshr48neDtwVyHpnd6JFatfDbkX6gwS2ZgKncnsjjs7GUVJ2LSjvbddpHBKtsTP2FNE8Sx3nbwNZjEX",
  "key10": "3sNfp5zRwNAeVWm2U8ySEwZJCHLKMhwPjmZJRBinA88ZjDceW7j1coMWLBYNpWpZqKD7riET6TKTA3vjggsrjSmr",
  "key11": "T9ox2jFyFmkrakDT8LM6j6UhwmqP4LwmPiKELzhyRpt6yrh79nMgU3EQP1Jg4ViAWAruHZ5jSJM4hY6M948gR2E",
  "key12": "2EYPvPtmpW8isQ26LbVAhq7yiTWBXC6jngEMMYwvZWgBNqtqft2bjcKvNFwA9huKyx23isF8m7geMH6s9QmDPFvj",
  "key13": "5yqJBfj7HoJPK2V6m6cyZgc9fFKTiXd2mWhA3XUS1hEWVUNBCAaYdCc9bU3g7j5dhV611nbeNVnNwkEs18aRWxDT",
  "key14": "5bMKF23HpM3rS6Rjc6pbvX8uyr1onUR5QL4fk7f3EEMhoQWHeJfTvAd3zyFMsXcAEH5oWqFHDThYVhhWMS18tvJH",
  "key15": "61PNnySr1KxUmA99HCSRykKwwbVoBFBMzrF3WWoAKykASDWFEBjR9NBpSrqGBxKKbsNPzuerZvzusp3zJAWCJH8e",
  "key16": "3UHqFFCd6ukQrpWo2ke5bwR2ReuQzCAxE6RFCBE9n2Vpbwozh2UbUKrQbzqhEPUKgxs4zqPJQg5RGBXTfAmQ2Pkf",
  "key17": "T2gnEKrBgshSjUJEJPXGy3K84imr2NEAkycw21Rr3aDsMcDD3sFqbG5N9dTjotBpybKNR76DcBW3V3iGmZzwtCT",
  "key18": "2mVyWrvUBE17wKH4dLYZRQ44JMy5FkfsHNVkvaGU5mwBDiJ3rmZ2LeF9gzyyVwPc6HV3yD9eeKqJREkpyvpMFgTo",
  "key19": "3q9XfbCkAiTJmP8yqZVnFfXfM5ZvmW8gHrJ4sF8aS9hPXP35cnCttVgaza3i1TwV87MkPrjgTWJbzoKpR1RHzUD8",
  "key20": "5Tm2Zy9vhZT8gKNDcyWaJJCzF6m84w1vqPfZeJzP3u61RXezUtaXAiNW3sDeB7zncfhrFoZ7ztXdTTKFktxVPdrp",
  "key21": "34hH4iWRqsoSbhVtWYyBaLcoBc8JncaRfJSKcEctdoSwW1ysFrLtQuzKgepoLxawLSWfzi15N2LMB1uQGty7DSHx",
  "key22": "5ERc7hGx2msgBPKbu3pPNNhZDHDMY3FYDP9SorXwm63pEKqugThxi5qsZT3XvUzHSX6RakCShnkepmGhF1rL3G7m",
  "key23": "37VGbHtfhBgmJTkUfYkxZJNKZPkvY1X7Xo9PL5N3BsXYyEsJSuJ8s8iMdUjcFKTuMvV3kJFB7ZZhaEnxYjG6srzn",
  "key24": "3ymaMyaNRnGE7FsfVKXPbnCECEweX7DsPmGbAaWuf2h5ZnDUBZyuL5gKhyCCRfNBQubG9yK9B7qdkEwAkZoHSyjw",
  "key25": "Guyf2Bkk7JXFRdXwzxEk9wrNGx3eaeqb58briYLMuwKyaTBGpGQBLNGgzqq3sJPPJxkzUukw9DhdsUNufrAGAZM",
  "key26": "3EPdiCAvgj2eYs1eHwzqR8f9VAw9jL5Fdqya6mYRqFueS3U1J3TVwonG7nMx27twMpXtESpnhrffiCqYmKWGUbNs",
  "key27": "2BPt1U8UHMy6rpVJRAcVDWdSEodxHeaENPN3ZmEjaihrqK6T8BwYj3mGgNFH97KfZit5PANgYYwusVLb61AgWEqQ",
  "key28": "4Xtxfa2XLWsF6eFmEzTnbh751H7vuZQNknSwcJFw6EuNdt7sMbsotmoYuCWzMPvw6XyrAfBUdQskwnFk619ZYiV5",
  "key29": "4FW1XsgzU4AUwEoyUMQVKiDaeCWCfdps8n7wAUv99anuiPskAvaANA6Ye7xaffg5fCn1eFuwgvNh8dmcbPNJCyWk",
  "key30": "2ijQEDHbYxa5PrmbCiAHt8XPFZ8qSA6GHo1eKXEoMqn84w2w8KZ9ftygiKpF6YGGv9aZrxN1cRxWS3pPmQAsbbnf",
  "key31": "5P5xfNPuZQnQNyVNCevi5EnszqJthz3kDPtmgeFS3qgGU4pMT6TWSfsEX3Cq8oAvvjqkfS8jQ32E5BdqXusVp4Sf",
  "key32": "3SQJDc4jeftcovkud7AJVZAhL2zNhptAjXBm4Sy6yKxsSaYQQQ3ei82DXg3GrGgtgz71Xv5WkfZXiaRqdBwdH4mR",
  "key33": "38QdxhDh345e2HAsbgfSdCQXZJR3v163Wcy6ciuP9su36iQhkZFiVomF1vjt2PzfUYaE5JLrrqCiJjWFRb7s56Bu",
  "key34": "kwyrYuQqN3QuJ1mnPXoAtE8e6gfutrNGvGbL5UZ8woggqxECzxNZ1nosZP8Ag1VSLMtkJBvPL2PFYfBGs7eMJVS",
  "key35": "3Acuv83Pp4zMQ1qaoKJE3fgMtrHkK88mLaXwHKNrJCvjT9GP8TqJEvyqzmq7QuLwcWxZRQjC5ofmVGzTqyajKeMM",
  "key36": "4WqeQzGsxboftgdWLj64DTk6CzsbSSHwPnx6y8VKios7Hhtbj1aGW2dhZSZ542o6GedKC2w265wnqtQbNET2gHDW",
  "key37": "4BZpDhsKPXkuL91U2PWL85RLwezbuer4jRgfBHH7sbuZe5BrXrNoeYDkoEZeqhJXto92N8YGk45pFa9XpsoQyTJW",
  "key38": "LPesHdkBUCySHNWTRzZm7FSdepxTBQhiar3ucuKiR2d5uqTRybBvRw7FiXR1sU5PpdipA19HD3iENg1PduJ3z9q",
  "key39": "N4kLUMMAKs9Faf4CZHRoSfQMhV67EkBiwhwoU2feNFbk4YgtJrugGXGXd2zkghhGo2sTLMZqZwZuA4jMTnnE1Mj",
  "key40": "3j8ZFnq4kkTF5wtDfiCzbrmLz7F3e9ayv1zGP8GKnX8sbi6RQBu2jibGtLvuvQxpveHZLyiY5GDLNb8yhPBYMNio",
  "key41": "21r2vmkCQQUyBCvEQJxUkzjhgbQy54giHV2Nz4EnAPZZyxwZe7vUGZtuLZQpS1J7eCEkYoXLPAvroM9E1Qxdxoa5",
  "key42": "3idpkEJriqsKaystw12EREcUCHsDzeFysmXk88KQN879tD3bV9KERhcDtwAKF5hYY5dVisSks4UZa1hp1FvkZGiG"
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
