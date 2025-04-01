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
    "5BEeNBf3sxvMXFpCXLbqpC94srzQsvRicxK5v44gtpwp9My4pRDpZFrtTfx5kE32XDdQ78apBYJiJm7WH3F2vfr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "444t4nyAZjR6BUMTCBTKUCYmJJcGhwBroJydzmDNdS2imvnSqGzQNKgUhNHHsAM7tRhLu4zG1AWjqvcAsi8TU7eF",
  "key1": "3bZXhpBWTMJgQBqxnT3Lk4bov52DxVTJHYEAMFUeC7KyRMqr3ZwZGUMst9pYu7UifSaUMrMouDsN5qXFYecU84yU",
  "key2": "2ZiLEMyKihKgbKMc4EbwwZrwFu92gPc5MCkPhwYc4zhPHyhDkRSi8TR5Z4fKVwjbpHQqvgRVLnhNcm7gna6tRjhu",
  "key3": "5nSu7QBwou8EbpwGj1ukTKU1kFuSiSA8xxTKnsSHbUM5nD6ZFw6XS4pfxdxERSi5EzYwLoDwmbkxSv454QsMff7w",
  "key4": "2cUcDJ43iB5uTpD8ubEqnEfjjT56e2mgz8D34rVkHYwt8PybfG6dutmBwKWqjTrmkhRJj2qUULRHpAu7PR487YoL",
  "key5": "4ye3tNg89CqbvsXKXxqnGCMY9qGXpC56MrW9K1kzmUGGNcgfcBpeSp6AF5B4EoqLUACCU5YYAuVNCJpjk2Xz5vyq",
  "key6": "384aisSqDw3E23Mua1GBBVr5EqXeP4J566ULPDXa1RPt9qp1jKATNN97wTvc4PPNrDDgyDgutXT8VtwqFasu9xgM",
  "key7": "5xpd2A7weKpgvUT29r5hH3qVXxSvMMkJspnmRQWWe9xMpX3ZVdCBXEkuDaFzzKG5YNLp8ZhrhntbfmbKZAJmqCdZ",
  "key8": "5yUqkGgUv48vq6rsESJZaND689FHpDJrRFhCPC8rEWQw1VkTAZfZwRbXEwtQ5G5QYyyE4d5smBrn7EXUALuBWer1",
  "key9": "2iUPQcB4dGP7ciDP1Nx9gxg54NLDjFkEyoACXXYMQrL95fEMvUoge8KePPfD2xG3yaniAHeoiDvEE3ZTZVKWAkjp",
  "key10": "5yvRR1ibLhksX1oDhAnMwT6BjqHhT2SNVrxbZsSGfMkwBbL79c1Kd1uqTdKGtrQj7QbS2CAzF4QedhweEXv6TpJ8",
  "key11": "Jxs8HukKyjgZYAhBDyWDduTcdYaU1Ej8jnbkjeniczZq2rtPdYEgTDEUnzub4gTJNDeL2dVtkN5zRandPFpukvu",
  "key12": "4W92xe3abAtyiB5ZiNz4RZRDcnmEzcsp49nqUMELv3KNUce6TYHfAFejdHXUDMag3oeThjYdwYZeNP3FPQ99Ceoi",
  "key13": "45eqJcUGKcRx7ZhEPwe5Qg4ZeHUqhLNcdqWC74oPPjByzj6ZG5pyiqKd4uaN3moBWF9BEgoEYbQHzFvCfXsDVhEL",
  "key14": "2Y1tm4hhyD2FxY6aWMHGZnJttbN4XwhcgfwAbN6tHsekLvhFsMnGDNtXZsfNsrv1ubyi4c1QwNznxPmfriaqHbzF",
  "key15": "4TBWe7hzpsxrHBL8aTt1wdQAya76MBG6wrkaWK9NBDaKdUy1KC1wieBFTLJDrdJnWcR9KcLts8mdexZf41E4rCXj",
  "key16": "2pzAr5RcbR51AVfA3FpiALcVqwhLowycwUmarRxsytpkWdeZ4uGxSJdjBBJwkPd9r5ArKNNkw174RDVD7YaKQ5BN",
  "key17": "2zvuG2xCUbTdDXwfqk78Vpw9W7LQ5e4ZnFHLZBDMakGbtW2XhqtF7RCajGra7VgcqcRcxdZxFa2y5g3wj6f6qYeu",
  "key18": "34nJGFihUJKR6JCHRZ88eLAwuDm29Vomr5vDHbRGjjkeMerQuArVsacresNtt7GrXuVbm2auMnMM3NtzgbWABAet",
  "key19": "2NsRbZniUp3SqnP5X2XBsejwJYHvaeJvf9TE8aRXDwg4Wv5wjBaSkShEsievTCZQbioU2dZx2Shpa4QnJ1Ux6VvX",
  "key20": "5KZnWVP8ZTRB6rmNRwKTVdywKjojiUPfATBUkseH3YbDyyWqBtRCuGpX9okZ8i3mUzG5GvH4vURvQCAZtb5U4C6B",
  "key21": "z5Xo8YJbwqQLpZbfKrb4NbZzg5FJrQtdTbPhCpP5qsLAFKMrxw4KVobPcHHsduZ9fi8b7fT72a6XFGyM199ahhk",
  "key22": "r6wEbtAHiCP1CATqrt4M5y7ES5U9YWTBwHktsy2QG9RZ6hJ4MTxQdbYtzcRBtpbPJbYCeShs1M2NC8t5qhVZzE8",
  "key23": "2eeZjFRDuGrpeaUcuXekRggzBkaHZHcicY8du3x11qgAmRLU5wcVqVaXFPkN7ZzPSY14JmyjtkhkkG9mFX7MwqKk",
  "key24": "3tYncd4nLWy6cnCzppyqrsrcKvzkL2oYunY9kj7B3pdQRzHsqBNyEnhqbVZjtFMvAeYxhsCc4wnauVzJW3P6FKKv",
  "key25": "5UstcxTTZE2p2vCE3bPuF5Ex2QotW2ynG8CB3SE2a7jgkHGHUp7Qo3Q7AAvTwxSpA3HgCHm2bg7S8KqfDankPkhp",
  "key26": "4RhUL6bJefaaquryXsrQxSQo4CiRsqX3ktvXmsHgebhKmjA8LomDLYnFmT6H7oRDYRfisRnBFp2dSjhQ1rym8MZi",
  "key27": "3hwxHWmRZ8HEvfSbxdShyYBptw64SKzpPNUujd2BBM7cQrrz91dRiwNtt1Tzz2Qc993tdf9EppPJUmiuDEYeiLnX",
  "key28": "wRaki1Z68zCGQRW54RdFcusgFp1EQVNaryAw7C3Pazcx9hPGWjMsdB7wCNqQCEbhSM1eDFfJXJ42rVshnf1xkNX",
  "key29": "5o8iszBA1aSzFw9MyJP27EGgBy7d7KGEQjazakzdvedx8N2FgpQmGC3svGqXgq4SFjFW7RuyZUWH669McNtA4tce",
  "key30": "35G1inKWL8e9q3eZrcRxkW5K4oxGRv2o4eTZsSHScKrSQs9hyoGbi6KNvFS6YzzqFXHTvknB2xBQfv8f4v7Dsui2",
  "key31": "4AquzbBCDsSD1a32TLmwE9hHkTtJWcawwEi6Ja4aXTNNc4N4WzqW2SddCut2ttPZ5m4uyqcz9w4Fh8YWtve2UmZA",
  "key32": "3edwaRPSpTyqYet8Ja5g9xATRpU63XQSPt6kfTpkpAscUWbKk2MrBYGpttiKnjWprEfYaUvEA11GfScBFXpQjseZ",
  "key33": "63KJwHLPmvY1kq8mPFySn8Rvik4j3W8dtRM3HiwMCuHctQAnBXrjLAQJ1KY2CWS4YMzchbnPUBQ3irGvsz6mcZPd",
  "key34": "3hCbRtxckPABTcHJywYPup8sM7oJnYdq58BQnJtikseQBm7KhChjXwwto8rLgLjK2jNAK2TNVi6cCNndWbGmDDYf",
  "key35": "2xRsCzxkX1RJxywREmJWGo6ggGHnVHPmDAWf5TUxnLg4DEeGpZ4paxQ7YLd1By2V36gTyQv1CxHxNvHBqKtruELN",
  "key36": "Jd14wbg8pq1ctMqWfYyFvmVUQxUThS7vbD5My9DC9RdFaZbeLHQeKTAv1TPpJABQpYCvN4Sq9Qmd2NW4YPm75eN",
  "key37": "5ttpYJeEC7vDb5WVY9PAo6hMKrpYPhTeaJAYk6oMefWZcHxrnfmwf219Pt1h4fZVApEekc8UVFatHs9CyJY59EN2",
  "key38": "3P5oVXb2W1p2J1aK9bb6WWgqa8b1mE8G9L9DnQAGFoztP3otEZbgpyQmA8WkQZciK6e8XtXN8ZkgbPBHKpeSi7Bh",
  "key39": "3a1homX3AgRBYCMD9Ce4V6G2uwVP6dZmbVQZsM1B9TxZJ7osB1P7kpUA9UuGB9GajXG4X8xBgXEna2Q9qGEniUR9"
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
