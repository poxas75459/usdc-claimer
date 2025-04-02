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
    "5W2buXEVFNS4jgGpUWUgmF8Ybn34eXJtjCC4A6fMZvy2YcUm9rvJHmirio42mfVPWjb1hBkkTmLiDAvpRmBPE2Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66QpsDAy92MW2WoYU7otrLNHf6s45yPgam3ufq8RqzH7pdMNRdz6CEYtbYWZpRepXPm1Lv9fxN8eoJu1rNekhYcP",
  "key1": "24B9sWgr18rsfPVs7r6ut4nEX4CG3acPDHry324B1MWphs5G8yBrjihr1ScLpWJQANJcNRvBd9gsWYsdCMjQRFGY",
  "key2": "tqon1KqMdaXrPLQ9HtNnFrkrQ5Re3JKKDxmMYmMgeF4weDaCT2Edoyk2uyQVFNju1gpjTpc7ppsMTTTq1JigFM5",
  "key3": "3mrFvJvcwxhPFhdWDBvgCRRRwgcViB2dntwTogRm3EVbamjkyqEXTXwpwCNkrTXozMkfdwFsh52oMXdqhHjY32kP",
  "key4": "4hec3UUwYjDS35k6w19mQMmjKTBTweQLDTT7sg7BaUd19dWJhaz4bwsz9pDu96z8tgdG33Czn8A3A6o9T5J4pXNj",
  "key5": "2qCWpPgZKF7KBX5fNyjbJeRwS5dQbNuHV3VpksyRHAdthL67cqok4wrMtqX3aKYFtLsrkhuX8NgXCCRpigfaKE64",
  "key6": "3L9R5bNzciged4QU1NDPZ8DyJM5i7WngzQeN9dNrVbUrE1JoSmX6iFcYzVS1cWFbgEPBHwGE6ur917YWV6yj3cRd",
  "key7": "FPhFqBRuc4R1LQN189nLEie6HDkJvt8fjE53cN98VQrZ6Dxw6g1b4C5KciKLXuWEmgZaEkd1Z1C5QJgZ3M5DBL4",
  "key8": "3RMZzDj5L87Ersx7nxeSr7UpPW5EgV6QSCuWzQiUYCxzQZvWzWR3JYMh15eknUy8RpL8KgHbz4EXM2yrB9fHauyE",
  "key9": "2hq55MYv43cGuyNkVfRnRqaKy53KVLGaCsnF2ZXmbANj4yDH7sBmwmjj47RE1TZzUdELYyuoSmKDJA8LwVXHDhW9",
  "key10": "2ytabTo5ALLkxRmKBnJTERSz1BFpydHNhXn5ScmJ9v94jKAkFb9gMLSrAQ3KhxdyKAvJQWTfXvb9T5FakmG5gdDY",
  "key11": "43NciYyaAUpMCMxgZCDm9WgCPyPxpLUTgYPdYrqow1KGbtMszwvyityU2DGZkZPwYuFPjHHp7YJXTZW6Qta7XrJH",
  "key12": "5mrw2Jh65pY2T8mvADTKu6pesX6eZiUd781UxzTpik6dqyupJK4GksFhTYnRYmzqTXkPP7J8soXJDrkUnnAxwSSi",
  "key13": "3kLqP5DQCzykTk6q872YtLaUynU3vc9kogJFfDRTLTJkGHKAdn3vSsxWN5CVuVXJ96J6G2288aQjUZVntQ6qRWmd",
  "key14": "4SrVUJZmusDFT5QU3XMRQzp8y9qYJneeNZEF92pe77VHSszw5exrkz489iteUtzy9KRjYygnnBjuF7eizyS3X6zQ",
  "key15": "47hXDb5CLLDwkCu5zhhSkwJXmJQFFfBULzwp2McBYqEMYW1FtT7zZyShxNH6J6PjvVC3eC7maadzJnvwoxXPyD1g",
  "key16": "ywEttAoH2PaQiH5UrnnJphbbEfxqH3fGCQfWB1fNs4YLMoYPcWPmJJQsYMcDzWMF1mkGnCiYcetW6wD6zBN2MiJ",
  "key17": "53YRx6U3UAAEzdqXPEHrHXoubNMFK9LkjxeEzC5AXJ3bBN2wiPauiCtX5WDnAfRnEVUCESdfwxBFYGLrUcy5QtsN",
  "key18": "4iEPHVUet3TcoUKGKrEXVkgqdCgEoX5YyP3xbE9wqkVebZXBgn23jpxdnpTHFAnow8ieUA9wBCciWC7geU9x15qo",
  "key19": "HdvWy4qG5CnxfCQ8LvyTThgX97u3gYcEmpJgaaxgcWz9Ah6zAcHGLLYuLsBzLDYwicNh3GbsjcL4BXhZPW5MXhh",
  "key20": "29decbpAz6K31ysGoUJPb2w5ZXd9NryZx34yGe5erGS2wa4dz7NT5wGa9i8v2xrn9BnAj38AjvrGE8Pi3KEGFPiM",
  "key21": "EiHujGxG1EQgBT9Wc2SBaPKZWF5RTYNYQRwiFMcpsJ86Qoib2xoVbPsfyN72throcKW3xdWeg9ZEbNp4eZZZ2rN",
  "key22": "3QMEy6EyxR1mCHkd8hEGkHFmynkRPDSseqcjKJsKCtw5GrWF2rjRwMWxzyxkwBGa2qrf8qrnM4Y9p7vKCtNDjeWU",
  "key23": "4oySzMSAMixG1QFG64kKzV7wQZUGSZskTPjkjHkwg5AMzsTXS9gT3vSE2weYAV7uBkFukxLi8pgo9JFDNauGG7kU",
  "key24": "3vcXRefVkLBcTP4fRxguCKYKoveVRGHjXmeavhWcWEkQHsz898RrQNs44FAaJUV5KDBp3yWq6bDTo6dyouhPR1xy",
  "key25": "2etbRnyEmpQB7WVCQSW9EzHGVFxft3rc2y5rwzgTbu3cDy9tM2PSaboqKSSc3a4hTx3A9yMqsN6yMHwdg1Lc8MeK",
  "key26": "5PeVadgFi7sixChafcp4oRX4YdDV83XBkmy4aKkF2ukeSCUVaxsQtrv6bAHsUTaKnHJ59YnUDQykCUoXYj8PrWcm",
  "key27": "2eidw4iy4rwB6Mp3xVj7k19RETLcXjJUiWXv3VHxYLMPwRksVvr1WvAzgTc9fT6kCxkMTjZdzdywhqCMTM71eCtE",
  "key28": "5GmErH8v9AoChPBTFRWoWLDot8pgN2aiKjyN6Zh6Kpyete1Bc2VzkAwJ21sqGr8YJk6HZWS2q6tYiv3PZr3PzuvA",
  "key29": "5HjQWDmXR6nFU6nCLZmGxCrGFHGB71wBpyYV4nJ72rh8A1GtBfbfDidgTnJLD8n2D2H1RWsi1a4FRCfzeXiEwvwy",
  "key30": "49oKiksnALADBZPDJH2FYKrKfypsDjW9x8PUuQm5CUGcrEZEPdMvWLeoKSndje8xmvWXSs1bBEMX2EBRYS213HtB",
  "key31": "DSYBWcMtMhNowYtyp9ekU7sv5HnopSWB1zUNE2qb3vZeEaHi7jUAH3bgReKQnihgQ3u1pmSGSN2LqTohpvCBaWp",
  "key32": "2wXyVYb4WFPBYe3JHyg5CCGvvJH6rrk18JtLbMtp3yYN75yyftUiDnJZgzVmmHQEhehkZKPq5YBrVJqBKRkTXdoD",
  "key33": "4MWQtF6hTsn1BVwADAjwPtTZYnigShVoyFoYGX3pkGbibbjkB1VxKwkiSPrHeDMDMWoyunXPTNo811oMRUGL1Vch",
  "key34": "4p3jNW8dYH1pZWML1PQBAAUc8C7N1EbPLaoryfgWRXVAgTTidVCiDjehFWkw21qUq9prb6ezZg8ofiPVhpVXc7EC",
  "key35": "2FmUiykpKBvCGdzUm7qAuprdKq9FBPcXTEJkvjxaMpBTx8zCa5QaCRBtKTsaVzW3ZuchACypoUqrfqJ2SE2kCh5v",
  "key36": "4j9wDjDRB1zHTV84qVQoYGqYHGSDxYBHnEZbGRgRrfvb2jiMP7F4NAUDLpb3AwCgb6hSWs5dyCRUTso9wFSegvZG",
  "key37": "4rrjwecsvhCjfheFiSHfAAdLTsekS5HRy6Lhman3MDpHVdZP5eddAPr3EsS5XQBbJfa7G7w5GR7Qv7eT8EsTGFrX",
  "key38": "3DGstn3s2SQmgaNT9B6wAPDpDrDVgATEmBAwdDYsYonyNGXScsEngicnBMDWx6yNPrgfHvzbKePVJWeVongpcGtb",
  "key39": "5FmNXsgySkrLEM8zwn9c61Q2p13S1ceviKeSEsiexJv2ArJhduEpmU1geUkesjfn4nyiRa7ZVxZXHNYwghG7zMVt",
  "key40": "4nPFB6KEjs8aJNVka2tQoPWYFtKf9TSM3DWNtriRu2HqZ6KRVyoG2masrnQNQNtJ6d2VJsqstuc1N59pa33MMQbs",
  "key41": "2jSYht4yZoKUCnFN4GUYHz1ENqdqwX7Y4TLbp819Y3de5DHt5biCbenyE6WrJsij29dhnr5gBMLgdNDZMwL66skQ",
  "key42": "2P9yYcWiynRNWwKDCGxKmxC9wsxjx6pMpoeJhLakFNCVpHSdthBPk7Gp6zFyTh69g9DUEMi73WQSiy4EPLrmSgMZ",
  "key43": "3mpiukqZvghQ8i51uLkJw1B3rUmUhKH4tesYjN315afvfo5GFTaGL2ynxJKRrP5URKM7D9aCo847oBSAbwWSboEF",
  "key44": "66bkdSDTEFxQBXdRwZDm74EJgKjTU2udMgVG5PD8YJRQiJTKbHbmXeZ5qh2kVYhvhvX4hdgHML2xvmeMuyDCPAf1",
  "key45": "37XiQjmnfq9kaLMstTZkycon9d2m3tx4hGu83C234ZyHza6BvTEmaoLyZb9Aj2SyRUvRXy7i76145KPmdHg6sDuM",
  "key46": "4neuPJfhwbfQuqA2KdxFQSbNBZm2NJwV5KTziNdckieBTkHvC5v9yuyTAKGvvZP5nKEhYDyMmCegqqYfqZHfsfvV",
  "key47": "4MrwFQwczwadGoW5Buy9r9dfvt3TSuqvsfAAvBH5XZz8MLRcVJXrE28YMiYYFyEaoMaKSDxfcfYMqqK84PtaJcZy",
  "key48": "5DjHYiUvFmgXN3itHQ7YzSZcj2z1ZoCPJMEmab8ZvKN8khoQTG86tvA8NhbLAtMSm3yCYirQAEzN4MjN2TXufDYV",
  "key49": "48w8TVNxmp8g4tyDbW78geBmujGBWzmKbcLcYAJGfXVMc7jP1QXRmMGFx4rbpcm2B9dgfw43kwXQxxjHWgDwJthn"
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
