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
    "XgtY1WaZLGmektGboaWRUtFTkVrH5A2Dxdcz6FmcbgGPpA6bfhaVHiGkPrQKAJznAiDYTLGAWkkxgZqBapsPUSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nWfBmYmixpSGvS3tWpkiTErCesC8tk4xqir2LTLdZdtu6c5DW7DPQLdWV8GcemfU27C9HqeikC8PMj5RtrKb1uC",
  "key1": "3CGA7cvSKQeEh2fNcJXuYLBKbAigxNqvRq1DctSq8TPddZiaTDL5g2HfhzadXJusZbDc51rDE7A2XoF2Cs1wc4ZE",
  "key2": "2NJhPqEFQdaq5GF8vWLQnAtfW6h5V2VT5MEQcv4NrpcGkMFzcuMBnG6JaAwEBuZi2pdahMcecrnEXgoqqthTStBT",
  "key3": "4h1ARjLbj1P5agjZif6A37CTA2J9rAX1VLvftABeFSEHKp3KQCo8GPPqpM4JuSzH9kaaMLku5511mifZz1oGxyfc",
  "key4": "4WeP1NnxUdwb2bK3U466CkSDj6ZZ6FVWHP4N1nYo34kJUnDS1pdWEWcQ8Fcw59QLLNBAtWwsQ55Hxev8vHTfk3qm",
  "key5": "3ZuVFZvDjKkzUoAcm6wRhuoGM7CYdKr7poVhsseYaAwNvwebfP4ERFLMNRn6e482AGFTpg9uCoDr9H1Jc6H9GCjk",
  "key6": "dSDKQwF3HuK6adUJXLypx372pEToaWtAXgPV36pPjnEJsevw61RCdn6WzxLvzTFkbQE58VEUDfJdawsAHUj67PN",
  "key7": "2DVMvioousLZ8bHvVM3kMo3hbHNGVtZrBZqDynBmDTYtbd8an3U54at1bog5ZrmnX82zcdhDwZMGCEDmmcNRMktH",
  "key8": "5GknbsnChfrojtmMZbtuwtjmTqGFrXRnYJ4VNxbooFCWydnckGngavjvqqPHum1gdFCPBgyGtmkYLvmGSGPHaKdp",
  "key9": "4mBgihiVKJBfeu1EsqemzXV5iDkXRfDRJsv1K6RpRttVqPHdTD4MQPpNyFG1Je8qqLdDDSokGwJy2JYwnwVBZpd8",
  "key10": "5UHYXjXfhBg9dkC1wpw144sC5QQdKjxzpCUpPtWMwXZH7thRUjqK9PEqjkZqmJBCsesQbWFEEZJS2sJFFKD4eydd",
  "key11": "3e4wLgWmMbsvBpRa4vT3Bjo416FNBonhPp5wmE6rT9kQRZ3Grg94FrVKnU2v48dXgtK8SyhtwW7ZVNaQJeAhM7hC",
  "key12": "kUSfkgMdXrymzJQcv7cHKGE4H2g14VX8Yb1n2G7iZM8QjNBE2wjR3RWV7FB95YRKoB4TSNQA5N3wKvxJLQuJMoG",
  "key13": "3ZrFvuGdiAP4AYUpRK9BES7oKUzcmRuwmc4C3uYvfWCAg6pw27TXHFjDZbwZy66AGdMgiSLJxoUSA688WBsyP4Z8",
  "key14": "5rYf9osM9ANYVtresWt4GUj3oqWG1qZ4LCjB81GqYJqLVxdre3ocZykttuNRdcx1uQVCSgCd6WSwFwfh8N5evtWY",
  "key15": "4mvpV8489ETkh9K6hQ88b3k9DpYiEAQE3NLU7uig1Gkj6k5WJVTnya45M2aHkQ4yyeBoPuBVghMi3W7NafDzcSV6",
  "key16": "5ePD1QR4EbyDK5FsGCiirxML7eQuJT2aU2eG79QqeKquUeunddukztDcbvM1Jfc9xknQGAVxGvJU5Pf47Chfvcjx",
  "key17": "3PR7y8h1mE2gxKRxd7XYrvxHQczvUegiMta53KdD68sFaWLM3H9wzFgWdopbw8vjrKv2NZghPJDmTzSypN4tuXPH",
  "key18": "53SkTmCSe8tP9ZKk4exM7qmZHRD4qFTTLXTKFkQmUGXqTENu6z3HffG7GEXtXnMie7mzwRb5UkwcQ29bmd4a16u1",
  "key19": "39QJApRVR6CAJ91QzcLerLW9ymXQtJGaG4HUH4LEwYuJJs9j7jqvaYJsLHnNLH31kX6fnALFQtFoNnzSCkUvXuv9",
  "key20": "2abKvkVpFBCuL1gPAnpEF8cZQh6YjaoYDMdrwZJw5P3FGqGfb5ieJfXXAoEH2imU9F6g9n5m2R5XDNEY7nVFq5k2",
  "key21": "5UTko2sC7pdZZDBMR5PCd2WbtGwPXv8ADnWNyxSTxbuTL76cFdZ5y3BTzvkNf8rJdWGAhFE3GGnT1ZG86y4sXnZu",
  "key22": "26S2kBVHmKRiCpqT4199jmhYD4KJoDK8Z9zdpQQxNtAcfahCGtWhyAkeizBoUm9juj7N7W1y7W7YHgspykMUjLMB",
  "key23": "durPruCd7qfF56tp2kVUnnRbiptEBEHutRpmkYuHQuQqLzHwXRU8kHbQMLZBBbgxKyEMUcyjaDTUshYrfEjCGTX",
  "key24": "5HTBQti4K7G4UzNuWXjr7kZZaoQJemJPDPwqZZaQjyJmHNcy6nm2gHCJbatkXCHmqN4zv3q49x45kotC4HyNm7Yf",
  "key25": "4fmDPpsgXKXkkRA6DDK6jpYHQGKrXyi7Snrbiknytw2YeuoceSBjCFteKyrCAXam6J7FddutJEsjNNemYUwEfcra",
  "key26": "4X51ErKAacg8V9vYXi1n7RoJhfxh94Pv81bnbXT9W5CAfv53EuAFdZXh2Kdzhq2ijbo5fYHQroCAmAWBGB6Xf5n7",
  "key27": "2UEEZXvPej2r3USd5DX4dYkkuryGcPK1uKAQ96efE2zCcoi4aMjHSN4xP7uUUP5P3GN6Df3C6WFAADoRC49NSySR",
  "key28": "5JRqKAJ4HnBZqfLAB9sKibCuGHd2yWew7kH78cadiUEtN2Q4zoiqTuZAaTfH8FYErwSuJyjBQUgTSc5BEDjzixVP",
  "key29": "2DFvTpVMdvMwzLvTtXftmnxUrKneesTu8osZcJqg8jbnBaWhbi2vLf7PHFmac6SNisLekkwHGik8tqZoMczUUGLS",
  "key30": "2MxTvtynbHomsibCPPy5bJcW9Wpjrsqmn2bE43vd7rVKoHU5BjEUY9MEHgYmDqp49zsEqaDmKnRLnJz5botv1hdt",
  "key31": "3tckBaFw3kYgHtU8D7DGKqTVyFSEjuPLGgZ7egGPcdXsVUyXwqWCFexjczBCpeVj3cnWtxKoM8wSW3gqsNdY1GnH",
  "key32": "4djERSKoxWv3wDkDd4Mu3rmM3MqyereBcdjaFJ1FUzaBaeKekDWa7gNTGxdBCJwesUwfH6BdLGQh9NewZGC4Ncfd",
  "key33": "3BLhU4g68YnAQFHJpRnCUjngPF45PMn8ftFzPNvhrrq4AS42LLRcfZriiqG38dYjhD6M1ZcVeraiEnxjS4mXWRHE",
  "key34": "3kH1AMKQdUBpwg6JRGjh6WCs4NFTcZousEk8wyEeX5mtGmpt12iRsLuSCcZVx3WzNFH5MgNtc5HqfniA5TQU8oNN",
  "key35": "2cRcmFuHS1vnq1Hi3Y3bg7y7TnSkdBDzvrfsC4jdQvRvYGFzngJxUoaAJsdi13ytCM1b8cR4JXeXqzRrciXQ7Eug",
  "key36": "2YRhuWnECCdanny3UmmgQRNJjZUAtHNWq1MkevfHVHwPtU2BVsnHmzEFuQkYaH8mnQSoGGdEZCasD6kRNVto9RSP",
  "key37": "VEGLWtMbBhGWnWMtdfLiF2dWPtBCbdE1qVBRvw8Q1h5ksaPxAPEzF24obh4MFP8uWJzQ5gaxrDJSLYWzwwdY63e",
  "key38": "2AmBHUixDExHPNbFoKrbhBGaUofxCrB8Vq6wyfygaCCE4MfyGdMrGMbw5U6Jddb89HYJTYZUWRersiPT2b5RKRuP",
  "key39": "5y9nmPmTtcecCMcqdfDnmiVx1EE1L2JGu8V4zQ217ka8tGSw9fvtRqijcYgGXbztSdqA5n2jSwDedZujjR1f8H8m",
  "key40": "5xaoHVfFwQbb8YnavvQPdz1ipDHj3WkZDcQMmqGEqLnw2wmgTrgkukTxDrQAAs2TfuSnKGuMSQS5Vxh6QMssoWjp",
  "key41": "4drMTDnmD5Tn6PRXtogkd2mPTgmLZh8US2XDGorQbZjr4Fe221hcGLrytDRARHFsUyhKtCQaJT2wJ9jbMLUkosGp",
  "key42": "54kKTq7ZK3AsJoLpYxFcJz6gVMw4vZXZvMHWDozMLXEoisxH67n4KzYoNuJjnT37Y8gxz6ismsVjAG6dbPpZzdJ6",
  "key43": "3A2YbWHUBqikE8gyUSeRGAErxoTeWqM1R4qftFspvtq8YaGLqhLc17YxnEyMHXXUdYrTxLgpqKWQEUk6Xyj4hJCY",
  "key44": "46NC4kwaJxHtvopTrHtSWngLXCZibR8N2jPQYUev1b3VZajvRZ5uocNnVFZzGZjmbRfG91bPoWJ1qTnHhGS547kX",
  "key45": "3yHjcEHJrkK9LQYaQDwRW7EpJe4RWMEadJ8DJG2pwnW9NELFV1Af72x3edzVZpLy93CMt4fui8W9hvs8gdCosQpP",
  "key46": "3dSBETmnTi3cnHf1p24dnLhbC2xvsVwv6ji43n13zzXqdYUhpCyyKeeLXoAwxQrQZKRfe78Mn9GV4eAJRvwN6iE2"
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
