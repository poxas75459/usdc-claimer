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
    "4haJCKkRduLFhfusmug9SQLRNH59X2jMYjvfNHQW9HtZpZJDkGJ9R64thZZJNE3oMfXXxgEZ4u4oy4wF6dUszGfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tNvADZS4LArdn7TML37ZKzk7tJqH1QMw9AwHXBYJztvngaSkruQdG5dFEEpHXwDpKnrorjFzJagCZCVYXMNsPTT",
  "key1": "3WfkVsYkPryXbvS4K2uvjxoC72MkfgPY2EFRAHX3QaAZJvwJ3agazLxc1BvqNS1QsqFfwb3KUqwsD1FC6G5Ugg4K",
  "key2": "2rDSS4np2qrrk9gzy8cGFtVtDHNsvE3kY7dHEBR3URBrhitnjimHiL1Zo2HYJctx22WrpkiXwYNMmJrkwBGfd1Wo",
  "key3": "3xQs7o99yzkjUMvKsHM5BcT729TciaL3icei4tK3mmAMCzsgP98ALNmB8gvNDeoXBteHLZ68rXPatehiCeuF12AQ",
  "key4": "3ZvEqL1dtRb1bi2LcGHBCn4XnocH6BPatUt47rm5cQ1qtQ8BNZiDpybHcGYkUaYZ28WkoHSLs4TCWYLobgs9bg6z",
  "key5": "3F8JqnHihgReqQ1AnywnHkuXaLUTKSJ9qjpndqDE61aURXGjmzr8GKMgTP37ouHkbR8VJMKqpc7ne5qbyWyBBoN4",
  "key6": "kZbkzKQBbPa5kDE3wGuiCvPg9abCZEfpQjvkXMaoJr2MDgSt2ybe4YEqxGPqtgHMthuiza4NWf6DtbicxYm3mV6",
  "key7": "5MAn8FUCiMbBkxb1qDtyj7chWZ516GgBa32jxzfySYCA9j2yuVKwP8f96jfAbWGvqxexLKLdYL5hgt9A4LeE3YqB",
  "key8": "5Ui6UtT9Rq8hmozF3MoBVr16o8j5FW37mM5Q7soeLU18JUGJq7tjsqyXSw9HWhWNUmgufTz8psgbGRUcwLar8Aqj",
  "key9": "2GH1hznvgTUHNwmoDi451FjujWFzrLnXv25NSPpJJkn1VHioKuaQzTk94cSx93qC5w8amxKyTnLnvf3UrqsexMo5",
  "key10": "GvnDNipSRvgpNXjgJciJe5ypu6944472osXyFvd2szAjEHoExYk2jkvDmB1G7rM6KfxhTEyKVzpPKeAqrbTwHAm",
  "key11": "3UA7in5P8khu6G4Z9t4ZXe2EYBWEparnbavn6V95iGNNhTs4Unt8Le91Yf6h27bUnNa8yszagymqXHX5MRiWisJP",
  "key12": "2XXNRhFMpHe365FRjKoWeh9hypYNhqViBhAmKyJiJoQmnjKTG6cHW8BoDo9NqPd9u6sYyAyWpTkBUu7GJwGc3Upb",
  "key13": "2kBWwApziux8SyKZ4Td8tFT5hNdxzCM1XPJ7JSAJkEQtv5LHV11ufHqbSLqeRoJPCKYi4urRqsVHSFmpcy5SaRhk",
  "key14": "3FYFrrENENVb2RnHCJNzfJVYx4oo1Q4QNKnu8o28rU6cvkKv1uRZRWobBSmgy3n7zhM7tvwVwqg55gLMUrgGtDuc",
  "key15": "55ZRYtghzJ4SpcvbEmqp4LzYewjKt4EtzrYCdhgJtQPP5SPUbatAYfFekjDrsamKBKRbZ9StaAkR84oQAtzYAAAj",
  "key16": "Us34Jr35EHbwqAgegn8t7hZA9TqLjL61Aiv8PePHckrNwFXkZceygZr99jEnS6EjBLSVYw9roW8tYJqBagBieAH",
  "key17": "4mrc99aNTmecYYxeJ3Uh9qtoQNiYZpzmzrMXyL9mCShrQ59AANcfRkhnobnk8BnWDhMASxvfH6iMMMaiw5GW2UPR",
  "key18": "3CZoDBipF4pnHnqR3MwPqaYG7qFMuG52G3QecvtHTEAEzWNY5gkYgbTR4ntVQv3caMJzfH6H1oPY49qbunTeHgHD",
  "key19": "5NcNGTBN4Y33y2PUrPppxWNkhKN6X5duTnwNkz2c5TK5WhowGy9Rvt9uAt8e5VaDirWbskLMkTS8bUwr8ET8rpG8",
  "key20": "33XZgaAmptCzSrS1u1DTrFTc2XEkSiZurruZAWc2FsSckmhmUAaG8VkJo1ZAZvNztaBAjKESxQsRLF9CvvYK8q6m",
  "key21": "4aKnEjMinFeCt3sSmWLNvvNQN2kcoi1vgztqYFF8vyAemLJstBJAYVGiPREf1nFLiT4hfVTAV9qRo1Lcj4aUdoCz",
  "key22": "5X9zYMsqDAYpcNUzX9LfRBUbL8RfzvwR1Wc7r6YWspDRzKEZghkWcAw2MHRVnSxEXc93Ek4WGH3BNUQFnQryk4xR",
  "key23": "2vbtuf3veEXh4tvon2PkDiH3UTeVoR6nWesZ3omCZEsi7HGae8Vf6is4L3FofQznrCEAt8AMBEQVNxUCMh1y8z48",
  "key24": "1F9kJhiu6mT2HsbHtwVtTEZ9TauLgZtrE5kLHyvJ5iDKHw8cTcNk3sSzkpmNX1PAuM3BWS4E5oyiL4cWqGSaTW1",
  "key25": "2aPfZUnrp5zBGbwLm6oavQaMBURFhaQmGgrYJkbxbJ1ghEC4nKQ64UTAzQuyTfQ4zmMwE2qR3bBJyNG5ZwqeN9GE",
  "key26": "44BCPxeWwS2SubxWkdAK3ChhdtdqXTsW91eTvt5hgpwsLtXq1uKBPzAjvoijYTbZYXStodyUXRCSmJhnAwWiUEiN",
  "key27": "5Bv6jiFHMBc5K2v1BWNcC7krA1vAarKrTN9AKN6k1B1nBfKwTeX8zNq7ZstTYWAWU7JQAZ734Tiwj7pYHNkC5Z1v",
  "key28": "5sozk1dwxQGdcGsUaQV1VeiGBn9ofaqJXJ6x4a3R7WcuAqT6Uyrbg6xEqMZK9ahDMgWENZexF8pnyHVU7GThYnpi",
  "key29": "b4HFbxLSHk4mdAAAxfyYbzeN8DpR8qy5dBWVE93jRMtpaPxC6RkAmcSXso695roSUCnTXWCAkrvcAwVMmT8XWJz",
  "key30": "4KvZG7FcGAgwu7bTtCG7nyVz5nbxmo2KpKbEahCB4L1SDYimUX8hkm37b6zSfp1i8BRQrSVnHEAnP2a4xnbjyyvs",
  "key31": "4iCJA41aqQvXE8HGQJWrgndxBQMCZdc3PeCUi3nD7yE35Rxqdd7E6hLGnAtJA6gidSy14cdh5xzGidQYja5GPss1",
  "key32": "5tVrkqB5TwwNfnByCY1NPUPoUNgkthJHrqQiNAwFctxht2GFcYdDeMa4GYwwq89VkzVPCgi8gWTRZsKQvoAGR9bL",
  "key33": "4EhjoeSRPdsrgfABq1SrSZHyooKnKKVRN8JuTu5XSLeFDMtbKhVX8UvfGZPH7FbzLCpoQKcTUURLos1UYT9d1hs2",
  "key34": "4ujUQDvuBQoBxNCrD2nQj35r66WHJ7PZgV46SJ9ww2W4tpdZ8P4QjL6cT8AP6gYkuqBMrJXpw42PFF78KznDzJR7",
  "key35": "2LMBiHBKhzYZbAWw6fAbtoww1qFoeDvx7RgCAnF6bna3TY6bxxNzLk8ZUQrGZT3zrQFv13JG9qPXCpkCdRX6HDpQ",
  "key36": "4bD4TAYPBXtpRrYicoLFiQJZtzybesX6e8eHrosUMiksjZ8PFqdRmsFLVCz1qLArGDfZW1JfiGaEQZXY6eh6X1b6",
  "key37": "4QtCFbuDNL1k2Td7n8uyVw4862mwbfQxuEwoVFYcdqaEiX31obwpvBHtHKwczwJY9DiRirR6dbkD6aL9BSsEY4Un",
  "key38": "3aBemrtniGaTm28Tpf6BoBQPenHFoFkwph3EwRg156mum5dZJXFdbzfY1byU9ePQQrvkX8NZs23r3VPEwnwFmRN2",
  "key39": "5kCVo61V39B4xudyJrPViM5wG7K757QuUNehoAjW1GtymHL1PSmNU2AXNjZSp48pYu4o9fxphxmZuxTts7f75NyW",
  "key40": "3KiZCEFs17vzoRoUakTjrM7hu4Ynyvk7P8gSvkBQyWwLpxYHx6bvfT4yR4uXgf1hejQLHF8qZ1Q1XYxRwo3tFSv7",
  "key41": "55GRn9d6CwQTL98JsLdLyeyijKtgZpRKQSpqSqESoKvCYRny1gayyUfY3GoAuLQzUoNj9TE9uF83JwRpPvAz29eg",
  "key42": "3yo9V4tXxAR4VbkMVdfi7Em8UUoch3PrZZBk6j5vUUmqFDn61SFZmKhyM6u5cMohtJsj35U5v9Bd9jhq2Mio2xbi",
  "key43": "5rhQwnL5k5GF5ohvNi5hystfhpVuGMz7HBFKrHPg95wKvhAR7zqCwMY299T1L6ZquQskstNDEmmGyYCDQfyEWiFJ",
  "key44": "62hdszjriphnpiPu2eMeDeYsEtggKN9BDxTJranoPPqAtQmaq4WMSzkhyEwrRGkR6ttvFfS5MjruZMi8onYsWmjE",
  "key45": "2akFTC8ZjqFq17HmpVqX3y3M5dTwiph2pNxDKP6Bihy8rd1N5UNC8Mkg1BgqWdXJzboQA3ZLFjRgo8gnN3vTomTE",
  "key46": "5jCey68ND9wLKoAWuyQzDiuqdXQ5GDsTJ8ddF4N9oSWTbCp5yZ7V5FRsR6U9wvXKeymj8gE6FMZNe8RvjCuFt8QJ",
  "key47": "UXGp5E2c36CqsLSs1oanHHXg3pcpebeSgQvP7CeVrkSYrGzjbdgRXGDuAXohcC4Xjpd7bPgaayjhidc4VuD7dyS",
  "key48": "662jX8WVxLt1EB7QhZahtQrUAusoM9BGcGwn4U4VcwccNfLwqFNTFc952Kt5N3gCZLe4ULErMQ8mgLbQKjTcCmLZ",
  "key49": "2xrEB9hPAPzfa3NoZR7HL5UPNBRi1EUAbVrYzKc7svaXBrFXcJzEh4rigrhPxG4yzF59AE7NzGeJuLn7ZmkCrAyJ"
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
