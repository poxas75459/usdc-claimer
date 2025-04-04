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
    "4CTouk3i9gQqomFdTZWeiiUM2qWDcJqBRFzRtFGF7tJcgu2rSkreYQv3kgxZw3HviVN9s6V93imV1tPnDsjsX1Zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MKAjtz5sjHCugJR22LJE2NDviicLBy9r6BZUUjPcRgc3ak3iCkjXZvP4tjzVNpp9UfcMn7vsftJZmxZNV66yRaj",
  "key1": "51qM6UER4pWEYNHWetBtS9ND9qEAo6cUQ7ssiCZY7yoHnmuKyQ8X9b8JuvAi3tV5nL8guoJSTD4TExuxKxw4yLXy",
  "key2": "2qGqgse8awM7skW5xD7wmZoBCA1M6txrnbVHYgfh6gB7AJUb5LWscNzZzGmf3PoP4cGxzaDNMyeGajrTALLKd5aB",
  "key3": "4Pw5BGHcNi5k17GePY4z1z7JMG34xVcKGDohnZ2p9FW8gC5tLjy43iE9qLtJYXaJXfmdrxi9spNjRsg1qsZFdF24",
  "key4": "c2jmNWuSMVCATcSp2Uo2qDrtsXvamkJj2MT3pmkq5rjJLMKdhHCM3BmuvhK2MFHhoqNbAS9za1qer5e47aQdLXH",
  "key5": "2rW9nGvMs4K3YUycECDHHwunuGTrsU6P3rigZxDbeQdg1AGpHdoVro7P7gx6e7vDAzcb6GepeH16z3mgkCg7Wntb",
  "key6": "2W42b8hzheLGLJ97f8PfvgmQyYMvuQ9cBimWfMyMuAFrYL4LML1ypqknnxzx8bmZmQh9ErEpRQa7DgQyFw3vmCc8",
  "key7": "4DoWBJzvgSmUXKVtWM99N3p2rxNxbnQqZtpWKKGZY2oCtkHMq4CRZFGCynzxvjS8t5F2sUfp1XxKDtfTS6ydM6iX",
  "key8": "3zfTTZwFQ4QMo5y88cp6ByX3PoQszUw2xhgfqFNrbnC5wN1x7bbqBxYd2rtGf5KD5PmTLwR84ERNh6TTy7aDXiC",
  "key9": "34K1uq8QQ1nNsK9W5uUo2gS6XYgFDu4WaET6zjpiM3UNgDGbssqBKRLcLcdH1EzpNCeZErjU6AZQmfKK4uaypzoB",
  "key10": "2RedVhRaMSxDCHg1X8pzNxSuHjvyvnmetR9dvz8t2TZ69kkH3dVgFX19xrL5ajAZAzHRyhQxYp73iEYQ6s3p5B6g",
  "key11": "2nAQQ24t9LjmX75hpbARmaa5LfCzHJWVNEYh1XrHhj6aCSLXVutWmXvN9WBrDezv75kqHiXXudi3s9w3B1pBGqHh",
  "key12": "3QwUkaWLVuvdUTxTf2Agf6bLvbMzgV6i2ifvGcTxe4eRcX2rNHZ4nXTWtvUWW2TXZ1ERdWF95WMedjpcNEeVm3bq",
  "key13": "3p8cVh7fWS19MAmqWrLV4oj6YyBW7taZL5vSpuycaaNhnEQNxzCNmpCk2PEtToYmnXmLxqNbbY6ALMCEUrCKM8wh",
  "key14": "2dS9tjJ6CDkS3jgzHxZpRxAb33BWrLV5Bw2XZzjT1ctjwfP5xvjVfXxUfdirhUggU3MqGTKqatZj4jDkKQhz9xER",
  "key15": "AL7Zh7EpQ9hP7eQH5Gqy8hWT5T7g5yzYPvasUMPBY41pEL7bqVJYMSXLqD5EBK5hCu7z2NKufAQiiok72Er4f4N",
  "key16": "2fs9LTX86M9VHiDjefsqA8SR9mxFfwyhcngTpkNFPQEyStdCEtBURoseWGKUsLBs7C6foGq6MwveiFqA57ysDp7P",
  "key17": "4Q1XknE1wFiH5SFqcNGT8pfFmZ3GRNPXY9o5HZ4jjMgndgHPAqXY2czNiKwstj4gcHKjTJ5FFXCWZ4FRoK8U75YT",
  "key18": "3qc6hJBhVCupQHKSNWK1N53UTSBkWufqXzozj2Yvqzxr83quJHRVjQvATCrJ3ha4usr4ZRE8r28fYt6zjWVMVmiU",
  "key19": "4r5ih71BqUV58aU8jaDoRHntXN3xbFrYb8oKnPEdArAuv1t2mLhB4LKiM68q1en3RjAmysovD2uriL9oZPLB6aDp",
  "key20": "4AhG57QGcQNP5WuRXVYabPnEhY4NugZUozvmRLm5xrWWzPwPFk7JeXESzh1vSeYpsQrRZBtT79nQNhhyu3Z8k5ez",
  "key21": "2U8iMT7ffqNVLoXhTmXF5eyprt83mVtZvCxedvZwJ6g628z9BH72xNxzFhAyhowr5ehjBiiCcsoWYx5Q88YVmZDf",
  "key22": "5eobsLpDaFo5DhLGtyHZ6pX6dKhXp6LYrWdGnd6ao1ebsgRUDLoCiaMPpAtSp7F3eCy8He2fQaE9c6ozxmpV6MTc",
  "key23": "4bZKzBsuLRV7xMpEBJqHD6YEHPxmLtnV4PM2ALe86atFo9fTijfSrJ3BB65G7aSXDENTFWgbCUYtaHGbQA6jzS79",
  "key24": "4tk3dj9SGMQfCj66v7BhSnBsUS3nwpDsdJVy8hqUoUDKj1vq1yNwLS5UB1QEPf7a3abdfSRZZtRB19bxJsPAmSdq",
  "key25": "3q9ntd9seU4PueWNKmWMCAxFGUir3jHCtFNdcuqwLL6QcXTgZZuNuRKGW35i8xCSkQoUe7e1UgCro5tgLPef4Jbe",
  "key26": "aMxgswpGw9F1PdVwcbJDknPzMpqmxjC8XHrPyNEUxicwPxB4P5P35i5ApgMhQwi9F3g41HNS1E3uivv2mWU9xkw",
  "key27": "WqVVbJVB1yyh9k53bK4AQd43KKa38XD6DbJqoPFe9uqJoMWvnX6rDA3k4rbssHGTwqRTJ6fumYQ7sDcCm7oEYui",
  "key28": "34F1t9WfgdbP76UdZ41XhTK1r7HsW9xtoCHn5YiEZmQ1gXMrtezr6HMteuHV3nKXX91SRTXcMunsbCCUvkQVYMj",
  "key29": "5Fm6dh4g1yPdWBkL6i1kGdZhg52nK91H7p4GBMULe9yJpNiavLAYPr3bUzvaffiuY3CRVW2SaKHWSphyT5GeauYh",
  "key30": "2vThGoTysMEcFpSXjB5BM4ut2LTGLWsDifSfDWfcNsTrYE1B5CUjnS1DFjtvVMjVczDg6xZftQFemxKfrq2xGhTx",
  "key31": "pc1aRy17dQX9jhqrTzze22SxCtQ61SUUnJcRq7kJbucwjxhGY5FcrWSTQztjnEVPnMpKsuXsv9r6BpTdxywYika",
  "key32": "ku7XsWuvf1SE6qvgab8S1RPmWjb4XMvi8e8KS6namE8eM9ZZiG5YVyWSpJfg2YCXY6YZfTtUPZuEcArPKrjf2P1",
  "key33": "49sNTBHXKDZbMqMSKaMqXKk4F83jeR8Uqw7vtwzqPAtNA77JG6TrnCkm3QpYxCLhfhJtXtsrJxN3S1pSDr1WDADL",
  "key34": "4twmoU5erL5DdNKZ6eayJjYBHocrdfgCy7u58HrFDentqUMa3HfimYfzyZgHVUvxDpAT4EwkJkLF3ZzPqdnJVZM9",
  "key35": "2dDpEhrsfStw28GYuNVVougo1qysT4aE1LdtKMTjzYBVzb6NqxgVAvXtYi8viA2QXPQf2ZBeGNscw9ePPfWAgz8c",
  "key36": "21MmgnLCFXp9pgjHr4ckLMPZwpV9kWsN4VGAUEPbykvdJWEraEkHJf65tqXGmNAdBnvFSQ13qEf55Kiyt478Aw4L",
  "key37": "5TVn4Gf4njw7d2N5S9GiuU13MTWcoaRc6ExanqkjMSMtmgzd8YNAY3GQmLLtJj5pqUVcSUBfJDADUH8D8yRQ1JP6",
  "key38": "323MY8P6iN547MwKmSpxbfyahSJKjVSRYGqt8R1xLtt5WEZwFzrFnwwHBqQ5Xg1xHmLNbn5LYT9b5QRd1QwNB9ox",
  "key39": "5rKawmtRV8evwhiEGPH5rdMKFCymsj9VahzbC1TYBZUz2AB7DssFAJWKcvi6W84mGyqymFs4ViUDKv4vsM1q7Avr",
  "key40": "27AmsdJpPV44DuP8EG9jw7pqBYRB5tfCNm4KP43rdh4aXPo3j1QYGvJcaxBEDzApBQkezhUpvh36KX6eDQSSYMZk",
  "key41": "3vrGtvf34kDCQgPpk1dikHH489ao1K7PBWDdtvuH4fqcipjUej42S9yhD7QPZgZe1ihPrMNnyc1QRxWMaKfEEoc8",
  "key42": "8XNEMnB9ojQ7yG97N4vUMf3iaFQfKDYM8RNUBm8RidDLfaJ9ewM9YX4KEci8yhkX4D3cm8cuvL7JHYJC17xbv8t",
  "key43": "2NsWp6rxTtPapqapcQQkCLtkTNQTwo7pgDMHoQSQzvzj2RWgfjDYsrFHawiQHhoYyDdnRk4fxKNrMirBRTwe6ijG",
  "key44": "4xBLw2WrSw26se4KThfGUVRfsfKsATCMqDVLWr1jsrGbfu7r92JSHei3ct85bsXFLhcB8pYxm7PzHSwZMHHYf9bn",
  "key45": "5qMQGhWqZ8twZJKNU3F6yzxCieN7ya7hKfeJ5F16XpCyNpVnYVKJXa8P5BXiSXutbiepmkuRsusEj5bdARH3u6YH",
  "key46": "4yXLArVf7U6sgQBKcYUptijyhPuE662vbJy1A8DxwQJEFYKSPQEJYKxVTGTEfApoNpVbccJ2kuYP3xZBA8SnrziZ",
  "key47": "bR2WRZ5j53Wg986GYjVyeCj3vdauQNCoDKDz4yoCqpW3nqAaTfd4px5rDwpB4FjVm2Fk5RZrdBRcXzNdVAd1smC",
  "key48": "F63AcusaPj4Maz6ZJJMCKBsX2Cd28nz9vb7mkoSBJydMp3nStsZJ7hw6KeVqHLTLSZnhwDVAaovq1PoKcwpHiHV",
  "key49": "4KxJtRcVDQJRrvCsaAGPzEuj3H9ZDHQKL72RtUDn7LDVBz7vTnScZ3yRbXiMECVUqVi6HvGS31ziywkH39HyAJk5"
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
