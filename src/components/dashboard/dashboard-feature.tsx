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
    "1tDZdGXM5Js8g6q1W4D8zB6MmGgeyZoKeJPMi8UunTWVdCQLs6cJAMVrtoEyfXMAC8jfLicJQjDeiuWT1x6R6UT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfHhiEyhV5qzPToe5heYShKcDAfJVkR2MXEB3E2BsDSAFraGR5F5r8UKY1Wmr1nXXJQLdbQjitz9TvECPZ2Y4uH",
  "key1": "2ud6aFHATjjx52Tg5pFGZxrtqpw9gXxeUFCPWfYxeqeBYrmsZ8VLwGkgY21fZhWn2vdWmK4ydo7dwudFDGtXhHqR",
  "key2": "v1BkXzdYJsFFHek8Metgmj14AUUFWDN9eyJMuyx3okWw8sSvN2WTsHfK1RWoA2wTJgNvxA8cEu56stZLjBJ4XcY",
  "key3": "2wKDh3nhGCEJ2eMgFhvgNdR9jrC1XvkGQ8X1hsdHBExULCwQ8RrLTN9N4TCzxuYqJbRK3du1f9yEbfYaLagbcQ9n",
  "key4": "2UeNPxP4UCVygYLMhiwhJdYjBTy1GLNx4UKQAkMDq9hkfb8tv496swCtbCfFmUhBAfkTY7QoD6wiEJABXx4JciFU",
  "key5": "3oKy1tw1WWrakQ6PSLqK9FpTvcPWSP2Rz9kw2JbuAmMaVcWnP2robosMApcAi1EFGexb84npm4LvrrUu5x3puXa2",
  "key6": "2e7esSg2ypQ1Po7iJL2wnzdyGHKKtoBr7rxMCnY4vTXdhGoerJs9uvC21qcpvKL4ALmCvV2RH9AaQNTTXsSYLsAU",
  "key7": "44oky7wSLFCEnW2uen5sAgHQhf3AyZsufVGMEUriDsUjnCJHWFYdiJxVCZnzohtnAiwuofDfYmmrDVfskwQEfuCm",
  "key8": "3o9zszYRdXwackKLJvopdayJ6Ua1pqGzRG54e1cmS2sTLfVmgdwkH5eUxw3XFWWxC76UJFGq2FJTjey3MLgkx6N9",
  "key9": "JqohpZyLKo2WJMtH7fPjcVy6oS84gXQTtZRj8EzAtXiDB7ifLYmE7Yw9DNN2867QNUgxz2UVdRXQ56LnYizEbgc",
  "key10": "4zuVfbGKBM8tZTdfEBP34mGyajw492TEq5T8nfT4Hqd4o4riExF74wYi4WEJkpffVqxHciuDSeswpfK56acuUPYf",
  "key11": "3N2hixG3tcwywSqtkvabmHM8JsJCKX29HhkGF8wbqqW6bwm4QifFLRbZcvKYKGLgCyP6HcSuzfzuoCxdyrkyNG5o",
  "key12": "67kFp25bB1o4dCPVocdCAPzabJptfaEjn46HQR4qCJ8SdrVbNQ3uFk36pyrqi4piHb5sbuB8JXbjmFofj8tHoKy5",
  "key13": "TymHRCiouPYR6Svs73ofdxDMAocu5ztLpPSaeyhPScdD2EyREy1mZwgasZu9nFWD7b9NkJY3Q3swW6J2uVxt3xM",
  "key14": "4KFAD2BHw66Ejs88JjgWzQ5cvbX6BLYKDGB9p4fp4u7yN5craRgUZ6RcHj1QnsJ6kutvJiVrUC8pqWBfLCxeBSrL",
  "key15": "CUNDbcoqVqo2UC3D3Wg7y5BSkZcQBq6gvFw3iBUrmSApQsqEcXr9uWYrbEct5LUNLKonn8UWA8cNRmSY3aXfQQS",
  "key16": "34ottkCUKDwQvxFci9FLCUFwBea8J63D1SAiUxXkh6AT4RWwLczT7Ykv5YLTm89S6ecQADyTpBFwP1JeWqfjT4cx",
  "key17": "KpiGHwsPopYNi7fQHSGFsgBrqrMFxCvotCGF8L23r7bFNgAYCP5kx7xtXq1mRp3xo57JQisfccoeCX4KfNVr1TP",
  "key18": "53vcaeVtFKbqFEPpHErTxWgzFNofV1f2FvrYS7yjDEh65SF3RuXVoekaYHPHKAQpt2b75ACSHGNQwRKqPpESqdSy",
  "key19": "3crk45PVJPw3jC35WVaF7iVrYa4Josj5xkwdKTnMg2ktNYC8KKir9ApdKWtRyQ9paiQ8qy4A7XsrN8PShQ4FjGVn",
  "key20": "5uPmoVtfYKAjtzU82bfevM8rL37MCLfpbvahXYPbEYEUMLSskV96YebT3edBfUhVzHPvotVf6CPK4iZSbe9pe3WZ",
  "key21": "kBvEEThec7apbdbkfBUWhSM6pB2Y2PDxxiAQdwGAWCPxR95rHYemyA6hZsMmGkYNcZbsr55ngbhGqqPWFJqp1Ai",
  "key22": "5mjVW15KtScZWkzVpUgc1QGuTwkLs5URKDWQ7yU6vQKKqieohuErnHrAG1isWJUUYZHhbksqGhSE1iYU43e9y7ZT",
  "key23": "4qkSCPgL5jzS7HEeRgZcGjHzFZ4UWs3bjeusipxRHwvZNGVpwg665QwwPEvfNf9K7ZS2Uqt4BkyrTiyTRpsL9gwE",
  "key24": "2Pxg3dwA5uVHfEWfVo6SxVBxk8zVFXu1apC86cMVqkiLnHCdzpo2SretbUZpmXW5qPfVyzJmh4taGtEvbZwKr7k4",
  "key25": "2MChM2Pptp9zF7mKJtrME9YRrR7Cnqu6fsyMLGJMr395UCPSJBA3e9J4RuMPD9TJoAtj5pTMM9yviuzNWVy4BKsZ",
  "key26": "2Y2EjtDZrQRgAaRrAfofrKR5B4PymuF16mcem7R8wTNDhdMrmxBAfknZf2o72F6xKzSCN9SPsikBtYD9BcZnUfSr",
  "key27": "oz7TVKbFWveA2GW3NJ32FBdBAPJuys8u8QnobHXwzkBCRxn9FGzWQG8jS3HScaTkv7nWWt8uLvEs9GqwEUpgo9H",
  "key28": "4tW7GBkwwsCanLjWPCggUJ5dvFTrMwHZzv6DZzWx394NAknPP46djuG5qPYHqc9aPFLzfQDBFdof9V9gZrVfshJn",
  "key29": "5TKRpNtuuFK7mNoUuSNiVzF38AGX94uZqHEvhFhRF8NJ14cEBtfTFbYWXQZPPGLgrBQcg5iJ3L6KcMyLW66jdWju",
  "key30": "344peg6zmj473GTHdZJ7EkM6inEWHPtKXEgFkd46BGko55eMqRGPaBsRmbyQdtTNAj1Pw2WhKoNCxrWwfktywV2C",
  "key31": "2QQSBGBMSCdNpKg7i1FFwfpfgQyewtTx589w4M5Kf5ctBwTyeqP2UkmAbiCc1jroRTcJgPxbcRijQLR8hF98m2fT",
  "key32": "5WLdzdt5WmTxhKuyCwnbkDkQf1tHX85ZuE8urQAxtk3iYQDx5Q44BaiSH7PJvL7NEUhA9vrto4LePPnXWNVhdsFF",
  "key33": "6ydMtUbPDLB4jaPovHXKtukoFeqdJNnrToXXxCgKx5CwkWVJUFSGEj1XK8n4V6GZnPFeZcnCxG7qSKWwpi3rKxZ",
  "key34": "TmsatL95jh8bwWXoFFJej5kbLQ4GfwFrySup4HZrShn6z39rpDTBq73ow27bL4PveKLBcTD5Dfs6NL7t41XyBVA",
  "key35": "3DJESKDa8M3Eq9FkT16VzWdZm4WPsA4sQnGdwyvh7BEVRAZ34q8T8kGWaMXraDtFXwvoPnTrv8rH488HuLShdGk9",
  "key36": "5BDmnUY9wuWsmDVqc4rK6pmTKkyrPHzipSh7ohr7ksxsVLJMRuV6sLeWevXdGLDNfJmKr8BvKdk4gzZosq136cEb",
  "key37": "2rq9tQh6sZRUsbNzyxVsyzcDKE5uR5i7gciVhyfzJPtmf7rkLKLRHG4hyoEomYb33sWeXEkJPM1YgsQxTYp2DDtX"
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
