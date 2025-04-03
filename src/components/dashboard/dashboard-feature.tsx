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
    "3iVtqigveBeCi1rxpzxNV36fG7FUb2qbRm8x4fkGR2U9X7n3nMq2b3QbrraPJPmw7xB8iGa85e8Vfhgj7yPHmyYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqyTgtYZXMxhF1JMjbkgHjKsoBkqE5z54pEd96dbS2DNUzdsPtoXc51ytxPoxunVY67AJzy54xjtKBTm21VFHqr",
  "key1": "31PH3vRiFJMsr9z4T86UbjiS65zsURYESLJwLT8p1CW9tWYR7A7K135gmBxMaHRAMVWybKJD3CwhHXycLBQ3VDLg",
  "key2": "8Fzs4U14eCWkBh7cnXMuhTZC7pCMQG1DXm1JtnSoBkdA4RCgBgk4Qx9u11QAUxnDYAGzRrNR4yFMPwmxt1WezCo",
  "key3": "zBp2Lqhr9oFjsqx9MSdbGWJYP647zFn1GFPLMdqZixRY328pc7zzSE1kB1JQC3cjkji4KqAqDjxbzymXKDVryiF",
  "key4": "2Q935eJvPy4SnzbrSSUbuBDHG4WRL6JrmqxpkbTV51NRPzMLGbq5GMCNMdrFdsMowu8hmx3yma84ShczjqPTNMd4",
  "key5": "5mJHjTiMeywjpZrQcx2PkVRYZGLrgoJr9fJNAGYiMqmc2HqNCHKBAK5GB4Vomxa8mbLGHAyErrgjuUYdc1sS9ZUF",
  "key6": "2pwWGDUrdMbHsh85Td5CZjdJPQxYwxErAV2Mi5r7unahmE1A3WWK5RjsDreNJJPmhqaggSk3XxhvzpDQq9czHyv5",
  "key7": "2t6vk1rQXLJR9EkR9hH3Yyncezs3K8HhvxpR7wSkaiAgSS6WuwVYZr8Lm59uZCjX23NoTu2jkXC3gUKMd4d7uMMc",
  "key8": "56ubxZeL8tKzAzsmMeqGxrmDRwerPTNAnUW1FEkS7AsM9ppGJhF5wY5ms5hMA1PL9SWWpAF29CW4jfQ53jyyPNJo",
  "key9": "37ZjDMcfuqjuipKmWMtfWUao8HPQc9zxjSX3bsp57zzq9gDzsdGPC32hbXoPm2vojo1QwXmKkwzDrcWi1ckMj3YZ",
  "key10": "4SL4ADQWmRqExk8vJ4YmkogMAUef3WRfyxbKnoAPreQRQQgYPuRrDcBfMim3yoq1LvoHUFHx1RvVxEkqwomCZTWe",
  "key11": "3LGvEqwNHj3QFgjGy6LGBkA6WTq2HEtmZxK1idsnMgH8YKU5MMtErYkJbiqsFFsEuJUKuXs2dz2geNNBCE5SQDKa",
  "key12": "2QPUcwixmS4Faq84N9R9yfZ4ayKtmVEBwXD1Dvd1o5CYZBd8a4BEALddFkacRUk8gdBm7e91vrKYoLHTAeWzi8Cg",
  "key13": "ghH3LFCzeMmgnQdgqva3AduM4axgSBKZSFy6gFpdm2uakv2dfYMcKz51rVRuxMzHbARUPdC9knMwymBU1Bmj7NN",
  "key14": "QojjQyGgnGAMSg3Bbw3c9o5yQxNPFxoyeHvyP9P6XhnvCQGDd7HEbChi5F9Xa4QLqBpFJK9UQbQQM1HnE3AcLun",
  "key15": "43UfqNyK9AqFcmbSXFZrwBNVrMeqm94M9uVyaaDP8XYcRMdNNtF8Q5XxcivGxB3rCAFqWC6KHuKwcz4rn2Z9FUdg",
  "key16": "4o2yTw9r5Y8gaZCeDLSJiy6ZtBxoio7aYgRacYZ67ncih66A2NB59Tu6UVcbi3txW9RgcBjpu6wWNxCYNQagYou3",
  "key17": "3xkPpjAZiEKMrHF9QUqCSBGbv9t1HyDBbXQQhRdYDcZT6MraMHFBG41zio817K4sTTLnCWu8mngEn8GA4VzGif4r",
  "key18": "4zJQ1RZbo2hUbKRiKGEACsojhK1q7oX72EJ5gFK53y1dk2ado3cEsW4NYpmkEk1qy4NM5JBKL3B8MMDM6MxJzrPX",
  "key19": "vjZ2msGEJzmG7TANuXfxGehFv8m5xD4hCAU1vKvGPZ3F9cwkYicSMErWRjkAkzYsi94uYmHDYJuk4jdiNxz4rtX",
  "key20": "M5fHX7g8patz1Bp4tsYB6WD8jffZgZpTjWUmdFA5zAwfB2JE35aKRTmnYp32kUGKLMdFNMBhv4z4rjYqFmLBL4o",
  "key21": "3RbswhZE5aGmgCML7WeBs1VEfUPELzJ4bGFYXtd9x4edhR6YBc6MEvTxpouzu7GTncejzjg9pxUZY4JCUgoE9GvG",
  "key22": "5425aCcuDtJ9w6z8BZeaoj4GiXRZsVS9FzEgrqbn9CUKSuxfhUQvhzuPX2bjzuzyQHP8piPTeyd1Jhy88NCQk3kq",
  "key23": "UUvLJH9PttdVJcKGgKLV5cVX8fVVzBnPTVEG8YW7vwohTxADbPk24iYt2sCnwQAEEjRvdLtu2J5Na9GLUjsUoYP",
  "key24": "2KCrJFayeRJB6yihzAQn6dfHoijzBeYDajLj4qUP5awsT24TyBdn1g888jVkuxX4rRmLrK12zyzJKQDgKHXLJYwL",
  "key25": "4VTkoG3S6QsETCR9S5kBktF6noc7pqYtU1uuE15CuCY6wrPGDkGu8pmnvy2C1s4dHWVAv9ATZ5j7mU3GCvAJBigR",
  "key26": "4UqGe8jSGzu6dyYzdtjbu6UeLfqa4ygrwjFz786McZ1RsXiHbknamiEVDjAaiSXnuomTRi8692PaRQT395Tt3WTo",
  "key27": "43FT4KHUj8v5qff26fwqGfQAwS4wzCnshfKj6xkBveCX45WP9vxR7KK61a9c4PoUDcrcnnXJmGDw8MVLFi4Ak5PF",
  "key28": "2mzNdPkyYFJjng8g4ob3mqGHYcSc9zWxG4zuzpiKpHbbgkT6Jab9ArsH7w658R6YqvJMReNaPBjYcP9SYgSq4hHz",
  "key29": "4bHoWnURHDfrAYtPNAATafvRvX3bFzuNDmypEMCPEXQQPLpn5zgWAZpBNCqEj32YdD6tVRYJ95wgRgMp1vYkPhbE",
  "key30": "5veyvbdHNWreskjV3uSxHFicjWeCPJrTECqHjLnmCC2vBGjX2CE6xDpUpitWZ1n44L5xrNjXg2YfJRV4xYrhbJgo",
  "key31": "3bok91F2ekyoh6PL2w6iy4DrgcsUuE7ypDXadzobpzcu6o9bMBB9SPFF34Cthk3wA1tXfUDwuDKoDs1xAn1n5ss",
  "key32": "QQ9eg7STqD3Ynx31ZFRv5ZSvc66iexqCTLZSPE2JbG5YF5HkujMvGTDfAxeZkTkh3c59brWUCUusG1gy9Ym5sgs",
  "key33": "56AyA8G3Y3Vyzm9LyWP5GnrW3yaD883XdEmRWBBhhVJBTXmg4XVmqDU8xT4WDKW7kxL2DpRJiycAXtoeMeo8zMtP",
  "key34": "5j131QYpq2iTHgQF3JXKuYV6CoV3ReEYGU6F4nGm3H6q34SUycaSR1KQqntsDJxzocRKkEkJ4dTc82RvZLaYuDQP",
  "key35": "5NvuykSMd1FT6hXFJstTDPbC5hSA2PHjJYQjoAdXPEjAn46JNE5hjFAHFbeGG8FiVE1PkPbfYo2NtLsraJ1KPE1z",
  "key36": "4h6HbFMt8BJmYAsSCBcjF5BwqJpFmRQQYeSbeWZqNszsnv6f8zEfheDfLwRvFnjVx9FHrxnCDzc63WBKRYXJexad",
  "key37": "4rvGMsGnqnLbbXZbbjgbmUi7nmoffasA2mcNTSRTU4bghYTmuubTM8tGDqqrorPZAxd5XgVMJiWdkNm46b9cy8Re"
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
