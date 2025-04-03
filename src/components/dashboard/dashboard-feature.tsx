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
    "3K2QZm5rpZQsXYHKXhhoMxrNhv22iZjrNfU6hJbJicva3sLU1SpTTjDCZQf5PM8tthp7Q7Ng3xCxshq8kCrZ2SVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gQYLGbw5X3aNDcf2ieZoSD6tMdR1xg1n3P3AfsUP7wnKMVz4XdTM6TCWYi3hrKZwcB1gYdaH8HHKbRR9d1ezb8Z",
  "key1": "5mtggCjJgVTyasEfgSF9hkLpzNF5GjsA47jMZJHd7pQCBMQt6TcJA58bxnWLeND7uQ4xD99ZM2DqBoQnMVo7aB3w",
  "key2": "5f4m3dEb2yE98wdt68ZLytVdVwp5siLe54qF9eCrqDphrAhnmHVCR7emdnG3avVKRcTSKL1TBkpHQg45KqFPwfNe",
  "key3": "2n1t4w2wa3ZUZdhRn6NNbsYebCmp6aqLQUeZWWw6sohXYYiWdEf6VMUk3XpZsvLvVo9dZsVxS3CraQ5boEiwtq4c",
  "key4": "ZNi7hBbELFdWQT52CusvdWZHcJQ51gbBvgEZLUMrYEhkVEKaDYwXkvSiqaUrhSoBYwPRSqZDWNa9yh8YG3jiCZb",
  "key5": "5CBsu4tMYPbNjjiNfA16U5Bxkk8eipGGV3YorhxUMAPz78sK9wRbCiX2bE7JVvG6XLhwe1kC2VTZ69Tfv2tndqpW",
  "key6": "5ZhmrsQykziBDbmQcpC1gfyNnTWLGg8VzewqYKZkFD2UkQdKMyeTZs2T4Z8FpyZdzwDtHtE3RJPgEFNrcPLsJ73U",
  "key7": "5RSHDBkcmkSwDP3cEGxQhWMMUwAEHfXn4dUTiHJBFf5rHHzrMsSYx5McSTzpEYzzV6UgBa8A9ZLPamoq2ZUqE6Aa",
  "key8": "4baaVvmDb7hbciXVaU9dtPGNocNTqEG3wn2r5c2A4RcdMdz3RigHszA1UPhM42gZdydbH7HDRmtGQazrzZZtNejf",
  "key9": "2BUnFmMtF6BZ19Mj1JXkHvZyMdDHvqyEeV9wMm39PCR15qYPiJC9LfVAh4BRLY9VaeXUTrFt4B6W4oecT8WLjqRf",
  "key10": "3Pqhf4JNhKpBnkmXACjXuoqCjh9CYSqQB38HzhpgYGketYukLnVYHWeY5kxqRw8Gdc5EwE2ncdtS8JyZE1Ae7KST",
  "key11": "5m6AAaKKDskTgULLWmbHg4srRMoGRLHfPmznPRfdAqwQDeNVxLuB8XWRun2ZpgyvZpJspGv4SMgrh1kruQJb8Jru",
  "key12": "52pFX7tNeN5Wy1u9mnhq6ChgBKtrRpRQwoYJz8HFMCrtKxw7xoGjwtyAxXBmuF7Tnzrv5cBMTQY3Sj2t2ifEcVBk",
  "key13": "cW4bj96gqNGAwAuigGMgYAGuxKUsXKEyJj2yTpb1i5MUs6NxhaKyzh1TnTTvQrnkfcP3dsaoUfThEvdB851wU56",
  "key14": "2GKgfk8nTtgBR7UT8YCdAJNCG28LRtoM7h2BDysjbQPazMPJJgG1HyTh9fUQGm4SxtGXFXrDegPkc5jzFu6Fb1bY",
  "key15": "FCiUPK3CY7fiSfBDJWNN7BbL19Lm7VXNyLRpEqL4pg3CPUFEtCuRnBWsUcd5QbVxqU7AmdvX1J3tcSoFCVKbWou",
  "key16": "2bVvWrNHC1yDkm7CgvFmWAu1pbC6FznpTnDubjiQq3jPg3cM92AwMVFiogXonjdY1KsLvfGQyeQeJd1jYExuB5dr",
  "key17": "YHSbLkHQYsN5Qj5g5Wy27UdVkgMah3dXP5UHwJEbtHQhE2dhTCSxVs1VakKufgr5hQ5wmVpSyUCbTp18R5DCNAg",
  "key18": "33WEPihX2cGXzbcQjSJatwoWtUc5brArNewX6r24GQ1XMAhypn42YsK6nNEiA1jncCH96wqYqfCVJJjbmqUass43",
  "key19": "LSzBBXz3basCPDyeVWofV3CJyaLBwK3ZbGwz2CnvrVvPsHs1XicUHPrMbQE4SWaQt9LtEZy6CHCN6y3xSyVqFoi",
  "key20": "2xPzMyvd3q7Z5CWBfWT1TJvRWxqfVJDs5SJu2JUHSj4j7swa5qn73a7qBhPnLNijzcmPLAsZSNDWqqQtCazS9F6j",
  "key21": "5UnpiFiGWTmxGDuGpA4dxBtJCdphfL7g4KYBZAdBf93hmT1cxPrY5BcywMYvUkR2S2GgiHMoAuV4BGHnHMb3GwbS",
  "key22": "23UEKXRSvJinxZfYeECfAMxaBBPucho9G3nC3gVDfUpn2Cvtf89XCZattqHCFE6VXgw4RMjw9idxaq3dNVfkJR73",
  "key23": "4bj8b6HSvgAsaVPHcrquygcmJc2icJT6MKEhmmgDdiE3ixnsJXTneyfRDcDmA1jHA1TWM2ZGmXF66jSaiiFZQB8p",
  "key24": "2kAe4ZAWB7FmK8ai1tic1rZLT4X87xbyZmWxwNFTKo4HhRNrCzGGHM3ecGqtPmw3AfyMKYXetdxiEiKRMqdgNiRb",
  "key25": "3LZSGKEWRNYQ9Wa3XCxAw9FmNT4Daxmk9i6ycVmAAzWPTDGYBqde1wpd88Tn9VhAUGtxBd29d526MzaXBA4xTS6p",
  "key26": "5M8KkL71yXQxzmxkJx8JFYzYQQGerKQTvnjZQJ41FrpwZENgJiUsxXXpWgbJGEHEBox1kokbhK5aSLKHbqyx2PM3",
  "key27": "4iUqGSJfHmkKYsZSGrP6QxToW1m9uHxWvKBpLkKqrp4Sc8WtSoR3oHQukHtY5MpfWf3K33KZ4wYJxPpqKFG5z2tk",
  "key28": "4qr8j9NSkeTv7CqboV13Dezivo2TSCcphRhTWN8gUNa3gFE9FhX34UKkEB7jhqUzNqPUDf5BvgAuyYwPUpsmqzGr",
  "key29": "5367YXooernf2rn2wdkxnApmBuEU9qGEo6hdq2d1NGspmRh7mu2rGN7qp1ZP5LU7Hign1JNL2KiuT1PR2Hi72RND",
  "key30": "24qiGKuS31Z6M2uQUHkj5fm6hYdQCv8iGGcCU2JqBecFaU2ihz4Cz4fJRssXExAftPWU4q5GLbTqc5ZAoi1NWciX",
  "key31": "3QpkQRfwDXURMqzoyBHV7y9Eab4mMJb7Zi2t3ifsZ4cy26HVBtHuT7JCDoo2byvJyu68BdaaEeHAejv1FxyXC5oP",
  "key32": "5zfatMdRrfePjiKHupNNzWrXFSpbjqw2fAmJ8A28LkdrQfUDZK4JXhoGhbUZsmpTyvBaBYgSnauMniXmozR62A7w",
  "key33": "QbWdy2HEED89c2jeEVMTV2Zm9sjz9qNv5HAncjW2jUjC3Lq3U7uJc4NfZYqmQduqLnfnDvr73shZ9AZbtvdgeMC",
  "key34": "43iyuE54brizTewetZB5SrhGSKu46tDfZCK8QFeidXDkNC9NpgvEBfXMpvXCGCLMMr1c4YW3tiV3nWRcgfJTdenC",
  "key35": "2gvgKkFceHQcoVT1Qt14wmtFgrTh8E6gtg9ShQEYZxakgA2ZQJzs4XqRdEmGueqEi3LuXi7b4aLHZ2WuXpRbtyvz",
  "key36": "2iPZKrSAXViygHh1mFidDFq52pQ7KWqpM6EXVSGKnHKfA1M8doUYu5AQcEgtWfQEN4RS1sVaq7qRBaPBsRXAsZMV",
  "key37": "36FkqtEhbErwJxDGpJTW6Ssfi1hMCAB7gxWoLd2v5f58tSSd9nJJk3ajMpZXzXN7ARtu2wPzzpzzTEwo46bsBja8",
  "key38": "2oaDVJCXA5PT8FfqP19qg7t7Nsx6USafpyk5iqNEvHECpwpDyM83K5MVA13WUabUqYHia2pApkVy2fETHmnj45z1",
  "key39": "BpbtWepR2pUuDrcVQUZ6Vz5RXq1DPQAsEKUCZtGYuH3vpFaB9rHhjiFUicTa7kWKhnhFKmdonxmaN2SMC1DTJZD",
  "key40": "2LLdkuBbk9usz1Dzap5nQK3miV7ebSXwJTkqpTwYfkgd3BAW5qk7T9Bv6QvkPkwUXovkrqNbvceoZKgHbUjwF9tu",
  "key41": "7xAGMfu1tFMY72cDQ33f4cmU7MCpaQANtmpCegB2QHkqyqYqqmAmE8AxkfLQ9VKNUst68JsFqm8WqH7BfSHPshH",
  "key42": "4YabLgJrQzWSLMqJhdyWq4hjNLNpPurNZjF8k2nVVVbgbk5ttQHx1GLdYq9h1eEWJdarQbtwLv4SmDDMdqRfsavM",
  "key43": "zh4Js878N9MH7AZJeLSb3fBntLCZjVzRT5npxHnCLr1ttCkHhyeP9WX1HFmZegkPa5q4kWaVhH2enL4uodTSvy7",
  "key44": "5rU2jgy7cGVcmy7j8dydonJ3eHwCknRvkhD9Phh1Fg9xNBFremUxEKisBpSj6R6WV8DMPTEV3EPKWD8sqcWUpv6n",
  "key45": "4WayPn3TENS1o6rLqqBQ629bFkydEma2ikrCDTWNiZVgPCJTjHNZMs7ZTxKc7Km9gwVhTvJwCaLZh1oMuBWa4muf",
  "key46": "2wzeDhUNrFD7Z3vrwZfkDvGmXTi6T3ZsVw2b9XW1mFifStpYSpkzMEZvGAsreJ5EHXUzQppkm8L7UBk8TtJBJJCE",
  "key47": "4FhbjdsntdMtpBb9TGzftbkP1nCR1E32t9EtbGMbdasxGoqa6jZCn4ZwTbdT8oyox4o7fQPzx6VW2fwET7KyGkL1",
  "key48": "5MnZ27Xzg5i44jcCdP5ai1BZ3Xq9GtcVcw4cKBz1fPkGupZtXDmocyF5oTp8jMFNEGQBPSi8N8FqwuQnX33h8yFM",
  "key49": "5yKXn5xWVwwNJidscwcShGJZtpV5D3HFwURviDRRG3tsgG6htUPVZ71Sr3Zpb4nbWp5skFNBw55TcUzSfCFFRtdz"
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
