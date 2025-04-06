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
    "5o3uQmCXyQ41xsgk81MgNQihjM4LMMAMXA8udpyfRGHh57ZoVFz2ibAqbUrePfpXyJpjbY4zgn1QL5yznadxJpbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FGxB6zKH2Y8mWfXNTZsPqKWubmjKJbddCwRGqt1he13GfRZHNrjPrcrieZmvUiC43i1k1NhRVmmZHiwyf7vCGiL",
  "key1": "2TupAzA3gFKCUiFvc14ExnCiqtREdtwQvmMjAJ4tvmhT6uC7NjzLWRTCGCkF2nFWTNie65JMSy2g5bYVLjFuTm32",
  "key2": "CvRS6v9kAt9JUxDMPL7KJ6SseVKWfXknk4GVZrxF8HuNrxt5KGiEpNuo9kCiTYDQHkEbWLT3B4smCqKK6PPacgw",
  "key3": "sqHXZFh97yPKEq5UrR7VXgsjWx6TJFdFbnmrjHbpP4YViRsgpn5W2DgQhFdCLCUqyDd5hhCHpBQNDQg7Rnseg4S",
  "key4": "4hcjtqCL6KkgR8k1r3GfPptQceYNg4Y5oUvTyhGpaYGhcAm4eTa8tZyvKH7gJnjFkAw6L68pRh6CpNfPXVLWg46H",
  "key5": "5L8RjyjjmsfWYBBB2ZiQbnGMaTrL9YBZdqfmnjJEcyCKt69RSnQW5PvetchgGFD4whL4UFEhpLwbkU9BqeyBHgfq",
  "key6": "3b5QrcU7DNqgtcp1MBafXtuau7R2s5skVNuwdTekPag14T3t1jtFLnLE22Ti3RBHZqcZDjkHhuhqjqZKo1NwofmG",
  "key7": "wCrgiphMLd6nSqUTr6pbjsXAET6rnkbVTgNxH9thmzqsj6H9zPUevTXM48yoYSoQXXuthwYrcLsfWtoZ4xED438",
  "key8": "65Q66LExSj9pno1SZJkP6Jy9iYvNd7UTw2pt5v2drZmGYmwdRSceHjThKHdRuV1EQguNNsAgMeQPM65bFBWXTKHy",
  "key9": "38qqzaVcspUzca9xuDDdk73NAs3kzV9XvMvB1BmkBWjNhLxT2PzMncH22A6mDLidUR2KGinJSVaP3hnmfEmWCMkz",
  "key10": "4RLM9rMFpWus2b6zKbD6XgZ8oSamzVCgRFBgcVQhARKizyXEJt5Yc92yK1psYX4KqhFRfKa6tkC9u3UZwyyLVfUu",
  "key11": "5kHumqH55dCty6fRRwsF9EnKz1yjRisR7jXSVWSKoxgXbRUPsYeNjY6PMnuSe2U9YDziD4WZBW7DRAetNgk6WwQq",
  "key12": "21nGQoBM8b8pjjn6DSJAEqsSqqytc2D9WvmzhwrRMpe3KrkWaXBQjtzkHjFC1x4SmKyonrYHLSajg5RamqghCaq6",
  "key13": "5DR5ssNCkz1T6mA6aZ9tqtg8SxDvqHg7fSyVaNoNkPSTGsewHz4FCBBvEEZ42iv1ukN83jC6AT8F4WiDxtCWexdZ",
  "key14": "2NshLw6wvTffoaL63bU21rVykC5FcwXWg3i3yxzpy12JWyJfoxAvEqisTTwR7SCzLwnH24Y3C7JFZj46YWTXi7uf",
  "key15": "6dagFkabZ7eWFjaoXwCGihvWHPm24dwEQR1TP52zVbVAqBBbGSUy7b6SRC5UHsYYdrZewKYqBc4wG89CVLyTXBs",
  "key16": "2oZ3mbEcGMzhCDNHKej2XknXxSQfRhxC1avgbpCuzp6SAvJ3Hcx3FLBQEZkSCcKsEjSYDQCeM1EWbdkx16FTiqDR",
  "key17": "toX1c7KAfWSY7Q5h4vNppF2GBrK578z38QxDUjrBaqZdGgDfDkxPD7epe4JYgxZaspaD2YHztSgthjWqVvueCoX",
  "key18": "3UhzQTsj1yivTv17g5zQcU435rcWAyJTpYLneXqLWUNa81pU1uxFvFvxohQC2THadzsZbTmNaLmguSZU3jUMpzQQ",
  "key19": "2xwgyALF8zwNgwH6kVWa5QpeEYE7aKfhHVRb1W6p3GYQhb8uz3q3ec3cDid9PNoW8765ekEm18V8Seb4UgrPsUDK",
  "key20": "28JBwcAAzNBeZ4iqHTXAp5UPSWP1VbfZJhqUBQbNdaWBRugTxduYu2BwJpJXVKLpnbTkQob1h971ioTj2jrJ16dF",
  "key21": "57JuAbkq2TsdqyBkDtHU3QJwmYZmd3byoH7pDLGKNwXvdcATyxoBrucGev5RkMefp9cKKoJurNLA1imjR1dDW2WY",
  "key22": "S58oLRJL9Tq6oZaNGqVndBGz1btCwG97oDRr6CmbdoEDnxtUke8upcE8hX7inxArXXNTocyeCs9PuzC4YkVqcyZ",
  "key23": "2xC85DXK4Y5gurd879Jj9QXuFz2iUvT2PFKSpWcn13maGwXecj8ow18nkFTVKMxsUb2Ao8YhCmPRGiXqVdr1TaXP",
  "key24": "3N2KnSXjfnA6zhpKZrNc5hwpeBiKoremLaRYC9bMYVSnMHMLSV2YQcrjuEAAHfMZqoiJdmoNEWqTxCujpYKp781b",
  "key25": "3yBWUsX82Myye7e7vik2XD5Rfnt6xy6wmykNJgCJbL42SNZsLNu2iiNGLZ8upNh1XQVam5xUVk6Ros8zPVVrrFtv",
  "key26": "DK9Y2oikYGvxkmMh2NAanf8ZesxHtpVx23PRqPViL2GduQyzY7AYSfA5HXC9C7AG5odQmfCE4DqtzijQjkoUDXz",
  "key27": "tCuUvbF8vYqnu7QQNXjS3paMfRwWTrqqZTVCLECcdoLR3fpm2Btd9CeybLFiZQS8UF2UTHM35CH1yibhZPWkLtv",
  "key28": "581kpqx1ar49kNb9irLLsXe2unQtCCgvXhqFAXx9Y1bPZZ1B41VcTJwjSDipnToeZeNVuN2HeWVAsCueCihSDTaL",
  "key29": "3QLy5WGBuiSy1QydNr3JNoJh5X8LcZ1GCFC8Dkgb6RkUiNc7EbpB1w6jNKn2Ytd3VusBXrNtvXuRPsgYNQZH3F7d",
  "key30": "52m3grTmpGFWDkDSj7LARBcawdWwBuatEYb42QWZDgSBzat7686o3W94ubeG7bavPwkGTwJwAQnyqW8znmEzA7R1",
  "key31": "3SW2kL9UxxFBBdxsbC8Xc5Ri9ArW26ewERek7M9qRgN7aMoykmU1VM6ySCujAq3GVDwqHZ3pi2Ztjn4EQKiZiUCK",
  "key32": "66TDP8UmJKBd457ftKzkjpJ4qfQWQGZd2wuqYKaymkWLEVU7UausCsop7gQfzpY91DBexgoQDgt7mNYVo3kGM6vJ",
  "key33": "4QVJ7f69Y6e2AnnKM6YJ4uj4VR8KwZQ8MBW96ie9zWgK1GKLbtW7VFgXDHuyTQ9EXTxT1tpKsamfwdnRtCNKBqcP",
  "key34": "54ERpKQXo2CLAZTwNcTf9HuQ7geww43gEkUWDrBGuV5TxspPAtawtFPP5NE2iqapzoMZWFjL6m3YM7GtAaHwZ5Yn",
  "key35": "5Ngk8JPFbzcMKttWDGMZqFhXy6hjKqHvgEWv2f2zHwdeR3FKvaLmK7MusHXphPkcCp4csUp5x3CjdMzzq7eVEFDY",
  "key36": "4JgbsPbGDBwo1MrAmD7KKZRmwvpsfchiNktrMYUbm176oQXHgdbfdKcTxVZj8aE32ZauubLdLcCp4LX1ouwLWjW1",
  "key37": "4T4WFHFyk27JQzW2rtegz26Mgoa656K2Umc1LB7cqUbfpt4zoCDMwcU2v5j7C8ffEBzeaWq7M7Uvy4VfUYbZCPo8",
  "key38": "GHukFEhr6pS6GgSyCFsv48vaaknmdoGbybKsFqPs58eJcvbNG1Ypf3hj8ZnkqZ6e8e6KjRRdUQtAUEPwJH6AYL5",
  "key39": "5iyfC6Pc7jiPB2it5WuTrTqNX4kwqM6BhNwkQUuDgWmy7fN2WFdNt8EYVGCVNu8eVQasRoZ8xqnZxLvSVGYDtAb3",
  "key40": "5RC2ZQn9K5oVbyzvWBUeJaoWPTZe7MqNvpNRywUKf7rEcuh3rS5urwwxmSByTah9dzEHQqwHt6aJiJfaw8AD94Dp",
  "key41": "3bDv3p7qrWuSq5hi7xLSxfHjGtCRTi9GsYPTpouEskKULvbPrRbiWjjWhqGCS54AgU3pYQSeyCcdgpgTkFWfXPep",
  "key42": "3UNZw3iSCDnSh2oWHuuDDDPtDcqZKfUrsvQMNMFYQ4Anj1RrhPsav5ayFYYnjvtJ4osE7p1kUdWjmmjSmqALz5cY",
  "key43": "dYLB9FxExLxKcTUSsPbDeAywMgaet779KwhUWGLkzCtiQDef9VkVQQ7ddW3hNC1jcnFC3wBStmJWRptuWroqyEf"
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
