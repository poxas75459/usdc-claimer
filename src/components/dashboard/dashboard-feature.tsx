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
    "rg2hQNaVySnfPVSGXN3MdFMCsyuSBBWWvV6enNMuwVzkHuALTqEDaAa7rD4JkWngzkhhEr8ur3aqLrXQNouCFa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rpFWdietYgEFASgBp5dB9aUUonyffzzgbj7vkp8kthPPi4z2zUPBHrkFtVbhPGDdC2dnvEQk6t8SYi8SVEeZ7N7",
  "key1": "8XigX7WJf7XWes21ib1jGCmojc1qcA69r291g6dxn9oq4ZWFKdW5m7W1vFHvVq4yR1X6AfgArhaQrVTSDGAdLsQ",
  "key2": "RbgmreLsFJqwNqwt7GeHbVThSEoDbf2yB7ZaignpWvmWs3SZPSJfBDyiRCH96jxCKDEKajDKcQkAtvwp6mEA5wi",
  "key3": "m44cUt7byshimKBaZ2wpaA23Gt97nrxV8nbrzH42xMnjuoxBQPZ6z4DgPtDh5QBgkDkXYYd3RRa3YziWHqaE292",
  "key4": "5gTz1C4wtY2jgoRZE4MkfF2YnED6hsKeNhcBgGWdPx3SCsAp1mRV6jFu67tF19QBxFUNqmbP5V2QRTiGueM4xS3L",
  "key5": "QnHzLUrSu7pHuuH4BhKCkWCQMZp84eC2mBTwyWq9GY6kFqibXAAvd3WWQgUVGXeg3LCwFingTi45wpMpfLuGKaE",
  "key6": "5XSigzaPpSif1GjR2YHT2biK7vubLCx7fK2EDpNan7MeMuhGtoX2Ma8ebr4ZkYAsxSGEoipG6n8eJKDi3bwUNLkH",
  "key7": "5SVYSrA5mXnFrE5jBn5V8BujZmbpFoJ7a6jAQHj5LqtVj1VEQDqPWMikaX41HvH8EFsxrLNXmdBXvfuRhfGWXZ3J",
  "key8": "3Xi1MCJD2N8hXPAdMwmGA7YeJWa6R88FhFHCNT1bWwR5bxY9Kqu1Ffvo4isHBfcW8Hn4r3TZ2Zryi19eHUiQQfh7",
  "key9": "3mpvqMrgoFCyfDa3C55K4NkTdNyv41CcWrD36m2GEDxFDf2gQyYS9HpswEWCLi7vxDrG2zgNu7aDKW1z1yXctoFQ",
  "key10": "2Dm1MGW2pYQgUXJAp9NpRSW1ijGHJPw6cr8i8gLLC6wCjBw1XzFyGNwxu47AuwyFrjckhLxzjbUijGKakCw9CgvH",
  "key11": "5SJs5Y9Nx58yuN24QPFJovwsgshRi5VUs3pnoeFehR1YtN5GfgCckkUJqCAug1w9Z7erM4akUK2ekCAtkdbL4Vkb",
  "key12": "457PGzfWmy4EsrAhJMmZ3qJ4KZDhjTs51EFGi8C5HKc3hAD9Q8y7TDMhvzVA8ZDhGtBsJiSdQuyXQ2n9MioipiKH",
  "key13": "T3stYu54dxBmJkdGtsyChD5JPogWagZVgL5J7U4dZSuyPb9ZLR1ryv9UiUC4on3ncMm7JgdQky845tMoHfAEM4H",
  "key14": "4PMfgHXG1fEWehCJ3VhvvhhfFKi4ZDtQbAErt8qPfsaS5f444G9RqMiCaaD67dS3KizWyiVkbU4sPAEXmjPu1vGW",
  "key15": "2AZAkC6QksvHt2aDuUG25q68Q9VEYz1ySwchMXLmgvzQGUTZoDpDd371CcLPyBqS3MdYVXbiJ3Ca3xLHi1JJit7N",
  "key16": "27STzDzo5eSxL8n1kgCHxCCWodviqT3beZeRypxzV5Jq113Kw2x9g9ArPhDr4WNskFqweAHCicfGazHrWMtUVJiu",
  "key17": "2G2Q8t3Mw141EB7XkS3ojuvgg6UqHUmoF4H4NXZNes2kQG4bRnpGA9H4gARSVnCj4h3cHeQ2v61wgeS3YkXD8VB3",
  "key18": "dZCzQdkggNARKK4cZ7G2oeKicRG9x6QsCdc9NrUuWCnhrz8MX57H6UqYAD8UWtWzEo8Lq4K36RsGfYjCxmcUFPi",
  "key19": "5L4c3W2dfWy4kEsmiEXoSaTDeAKd7Kimhr7HNBt4uKna4YEWaEnt4dPjCFKEC6dKGGNAjJ1ASx8QxY6uRVR2bkae",
  "key20": "3qi8ZSpEbtxFVNQLUiFzKGbkWEmYbEDmtBN3xSgZwaBMRVHhYDQQPd75fyowT4MwRnUZHn3FzuRFMxrtLNG8X8PC",
  "key21": "53AVo69TEv9tq73GozGreKZ7mTMpZ6fWttKaNsG2bNzM72NTjPiuzFcHMdD8RJrtaVRQ8wayXsvCrgRFQuXDgVHQ",
  "key22": "MLujTZdCSEvS1dnYbmR9HNKccqpmEnpWXdji5fZ2NKvhJ5nGRcapax2dexGRtT9P3ZsRqM9MKmPr74ymDUs24ZS",
  "key23": "49fWLbah97CwuPbxXs9L5kywr9ZMW5Dku7GdGyat1KRLLD4Ph51Kw5vJj2AfMPSvyfMomG4641mWmLTf3aNS6wDg",
  "key24": "5vZS28yEbU7xeMMcrszNqHmpKSnX2uxZRu6WakVskwBpnnZXFCVf7kUe67ZDTzxHeXAwHjJbD4d2DQ47Mfaq3NPn",
  "key25": "65kPRf7duT9rqSpyohBEt6mhrcDxNynAYjJMSxXie2DR1315szvfB31oJBqummaCNHZhVgQR9yLjhLCKqPZdELWz",
  "key26": "oh5vGxXYPe9qB2Hv8pFoDF5hrSoQcCKVLHUM2Ce4zK3EyGvijXcvQBkip4seFENzktDJxHcjh8Dey4WPSVfPbpZ",
  "key27": "224dundryLJ3WzQQMy8oRNMKh6vmGMHFpjerZyFnJMufnUGMfRsd2cF6NhywxDNWkR36JYC9MJ2ut1D6TW7oPyLy",
  "key28": "py5JExBmfpR81Xjc2qsuQu62UofBsLdswTL8B439WunEAwoBTfPBhZY9v62yhBGua2mQF6omAWcTwVfYrQziSdk",
  "key29": "4vK9tncqf4Ahqg3yqSFjStPHjSGSWXPq2CHH2ss2GdxK2Ce41y6U9ui8vEaAcjvpL2PZXNiR7x9CWczC7Z8bNYCt",
  "key30": "LkC8CW8hH5ARJH3yysgcQMCV13rL93zxNxYVBxhwawuRYUuuHhUymvtNATnDDr9KhkF8pozbt8nXuoDXxoAmeqr",
  "key31": "4yffjz5UxjhgZqPrmJ2gtJ5jpakjKDrQWYzma6cRtcEioScdsKxcrbyYGkWWwcW9cvrVuBLb5q7hvFv3B9ZNC2Ja",
  "key32": "2g3nDJzbpFrdryTt8DVsMypvxtaKweSTG6eyycZZxzc7jTqsmYqYqmmCNiqNfySc1CJ2vKNx4JGtJuCwdjtsTabJ",
  "key33": "28Sy1QR72JDgom9wJHGmsmviKcQbMJ3iimLfjQ95acYaSTysyELPybUjh3azyjM15E4zHTcwatB9ZCXHq27FzVPc",
  "key34": "5mmHkyeGEX3AJs5aKdUtpc4F7RqKvJaZDSz4E8j35d5xTjFCs33URWbzxeBovNxwCVuvLTDf7GYnM7hyktrsqQXX",
  "key35": "4HFgNu6GJ25QrX9goRfqU2r2c9ay3zEGHXz9a3TU7QyAmMVw6S8txXM9QuEV7BfdgaeS1sffi361BEz6XfJGHbiL",
  "key36": "44CDumdv2WSSyGpXqmMuNLM3NjA2NwtU6gZ9b7nrNFYXNh5o9UHsHjoMFm3t7qbP3EzDWoexQEjExNat9g9K4teC",
  "key37": "HD1fWSJHbrbVwmZxNgPs7nattp1jqHdBywuW81uEZM5x4PoAutHeVGJ8PbsFoX4mkwaVC2skF85xf3wDBqVmRh7",
  "key38": "43r2jphETH1DoEJaRALREebHtMNphuXHxabW8UrmRznBK2avR1zaNLqdVsYqi7T8B37bjwdiewX1UBZVzWWQQ8Wn",
  "key39": "Werk4qeXkuYvPZdRX3wtHkCuyvyK9p7nKwtbVjmYTM3jeqLg5k9i3TC8ZAEMvrW2sJHtiZZBXHZaS13wbdRUWXw",
  "key40": "3VeBvFBg6VQw87A23vVvKa2uxtqgoQTRkf7zJpuoVdD2w19Zhwkdcdmy1RfNmdcXD5cPjEgHDihUyAPxJhUWc4D4",
  "key41": "4wpVVcWTz4S1BoWpAsACW6YmnqMsBB1w34t3AQCetLGnemKg88b8Theri5w9YKPjbBwDS4qvCy42HfWJHE9J55Dp",
  "key42": "2qkuBSrD3u2Xbgj93yRyDjQquykaqpVoFpDmn9H2dqej97SqUuAVX63sWsPXNuJbhZzZHffbDgFvEzzmeZQdeDq8",
  "key43": "2amaBdkrts1JKBV29JFUvCKM3BcHposbvSrKngbV7pk88FBtRVgueofqyWFArSuvzVxCAdyFFTto9cxKUMGVTL6h",
  "key44": "pWVAbRJW5w7kUTRoayqtVFGezvfZWfK2EzTnrH8NuNSLz79iqRHsiVqdkabsXBQDTDmCWmupMd6vpq6svHwPxLm",
  "key45": "5uiSJfHc92keRyNWvhvfKe1bA66ZUrgBxXt5DNsCBp2yDaCfo6xVwiJuUon2k83fpZUGxAEZ91RKCYXxPgDMTMWf",
  "key46": "3K7DwmqKJ9NYPmciEABhDUwVrGMyzeZ4Vc2Y2hTKN47svQm3fH53HySe7TRtkEiVcXRUqAq36bDdqDLRqXrJBUPo",
  "key47": "4Rav8ncx9jeRob8RMrU6183cH6n51cDzaF2jiPpsvw9pDniZcg9tQJ7AMhLhR1w8JCb9U8Q1MFyxGXkzjrSr3Z5T",
  "key48": "35YB8W8wBrB9gq949VJoCN86eKBoeU7UQTAa4jDEfzUEecX23pUvn9ecod4yzHM46CxNEdEX3uMkhWCwSxWnnnQj"
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
