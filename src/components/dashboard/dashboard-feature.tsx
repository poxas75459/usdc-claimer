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
    "4XhQqB6SYTBJ2pBDaeUxjT933RkjFGWS5kokx3Rk1EF3sCvBPHtuMDZevCMFsnog4QGaCHvHp2PCPeB3dFG2jaoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R92NJktWS6ucd5nHyXMHW9Nwmm58DFcEvvtUYPW6h5z6CtNqivH2UFbK3AfBDAo9xFWbqyw1DvhVdGigvJVkeZ7",
  "key1": "2WxybTtXpGD7wdcAfz87FTzSdG4wD3tgd9ydkeXRjqPXabtfvWSuzok7ERAWKuxHEAFMuZKFAWZBjnZcvAThZgvB",
  "key2": "3WwdiTbXt4sEQYA7us5i1DuyE4BBrsQXUf331AF3vZpYqQkcSmCdffzw3jVzFHoZCWc3NqPeF2Zeb5cMTG5JDYup",
  "key3": "5iKm3cVNLSiH2snERfbMWFAR73NhoBovAZnLYHfGFfnxoWwm1Be4RNFUaLVDZAmBaKWax5Hcabzhzbjh6aM2KQLe",
  "key4": "HDACiZituTj7cU5dyQVEvq3R2o8xw9GakfFhY65qmbPQTrNggVRd5TUWtZBJbMFPxHFJqVFT5obEGikhHXCoMmx",
  "key5": "5HHhT8dciT8YASY5qeKFeUwT62QyWqp6so7tqedrdDzw5w4SXpLwbNxhLKT7Ybk4zUPdTqSYEQewRcsYHJ9jA9Yz",
  "key6": "3S1SyF1DAcYzBMkHox1eum2eA6KMKz3GKipmt9MMH8SrbihdWCmCwnKYUNfd2JagDYwVtGkzwdsr1E8AtbDrXwAE",
  "key7": "26RHuoBQLxoXSodBaFrRYfXBTayzEwzkmAwRyRCCNBSQKz9WgL2DXywpaUmmUVRC1Q6BRFfDyHkf6bnqQeNjErkx",
  "key8": "5Fuq5WiK8wYWUBtUrJj95dYhmJVg4QDHD9hq67iQBcWvRHTfotCExW1CZtKwx6dbjMQ4ZXzx42RbjvLkfdXBheEC",
  "key9": "5buXe1M7AQGWq1RCU9kwdAyCweNUqVz6ZuZpUpLo1v4MYZckn3Wenwg7mcUGCT9tG3L51TsoaVGqwawjUZYi3NCP",
  "key10": "N41h1HyvofapKUAvro8e4mpzAyFLexKAupduHUSLxAA9V3myJGdesGWm7Get9H1L1BFK6gyBxrtrtgqMJ8MziZn",
  "key11": "2RBWgvKcA9m7ceQitf9Ea8Rpg3FL2CKtHhESsuAbgeXZq3kgh5HDo7K8zzmf5bwugkjQwJndF4NxF76bPiWHocyJ",
  "key12": "3Wj7aXhmUYxJHGyMwN6W9RJWCZVCsFKLd64db4BNxU6EShyfpGbMmRJSiiN4MWVVKqS9ciHizvn4gVWxMXppNgmS",
  "key13": "4nu8wZnSePgPUvmM3icKqnkxojG3cCaPwbcEkBDuM8KqjTWbchSdPYXTy6tuAajAWNNijspoJXjjfX2wx3JY8GMx",
  "key14": "o1hCVpmMReK6EV3cn5RytmBevVsAinzjaxMGSo1K23t5Vpo6ZV3HCzBnEfPNov2XPdxroq8fyoachkMUqCVz9RW",
  "key15": "3WxRMCfn2ACxuBWkqZsNQBS6bZo1G2AapuvXEZtdHXALrMA4K7P6dWMuLC2DNQo7AtgjwoEoAF7mbT4evsVX1UMM",
  "key16": "2U6AKqrWF93AvuAAUQhAQW3doQaGLsRM5NRdkC8ZfEwH2rPVLfjXTqceLTN1rkKLPzqNqEGEdeKHd3YThijcGQh2",
  "key17": "56gXkec1dzutwWb4B37ziJ6sTbYne6NY6fHj6rDTs67rEqKVQtj2i1tJ1fALyEGveURi32aUYfg2kxAtfyCPAoE2",
  "key18": "aAsETVyNEFtHQR5qZYwSuQUmuxbaDgNfXXiBTDRkFMKggyuKFWonu6rUQa1C4iu5PVqCTt1ptXzoBoMkFuLyjhB",
  "key19": "3MGsjn39KxmpSp8GLCQFHZcSpeureAFK7KTyYEvWzbfhBq3DhWZ2fxEMQaeQ63BNi6ik1kDALESSJwyeuPUkyNSy",
  "key20": "hmNeB9KeLGjpJpvnVQ4UdmqTVhKZfvfB4WbBjxhjMHZersDevZitSuQMhmRnvVovkatvCX6ZbAAP1eXxHoqAWMh",
  "key21": "zZzFL3wReKuEGPFkxgTzo1hwprVxM1BXUX55M2e7Kb476XyYnniSKRXqyPqZmFndFqJw62SmQvLUR4bL8MrStud",
  "key22": "29hjESDuaXYM5Ncc65qG2RW5ZL6h9RoNSbCcnvZDhKa1L9sqAPRMo2ws5qo3nD2enUkguZceNB7rySNK1jBDJ6bC",
  "key23": "5YU9rDR5PjXJ4CLpKLk1YFy4FDpBvzmYdYxwQ7g7dyaNCjtAAR6ZKKQZ1rkiSrMnCCazaVeqphU1pktm2NQG1ue1",
  "key24": "5sBrxGhtKyBQdLBbK89WgH5SugD4pBBcYhf6WrQDTwhzfggEcSzWGmiBWqyV4TfV8hZ4uzMiyXXrRPdpRRjqj3ED",
  "key25": "4rEP2vWhHzPvoZiFisbeKTGL3Q8TUWdFy5kjcNBQzUJNdj7kPUXPFus8DQSBBHeoSG7wxowoZqrvpJfeynCw7j9m",
  "key26": "3Pk29oCx2fzDo5gN9qgpiz9SKj42hEQ5N3TNZFF82mHyXeRVM42mWdfy6H3Y6F792ifoDiwoVzhoQUsN1qKMDjAB",
  "key27": "3FRbTZXzdaqYaUCAi1dFTix3SKmQhJLop6qYrLYCa84w2wjWbRL2bvDXtktugCTUPp9sg7UH8bubY3S4oUWxGsgE",
  "key28": "39zMnLcHLBuFrcsvit7aKqymEkR71HQ7AdNGCfiHBkhn3EzTRwjyD2YE484CgfkUYWrxVRGrTpvq3kfbNQLt7uVY",
  "key29": "vAqmRZvXut5W7fXThKjnhbgmL8jMX8Z2YBVr1Ywcdjxsrgq35T8gBdcFtvK65ZHseaX9wAg6e8YZuDDHQUd7AwK",
  "key30": "2zxVZW2Df19QXNL7JMNkSv4D3Yb1PCE7BHfeXwFsNWz9nqay8ctrfX7JyPzd36AvD5eB7wF3NKeHL9PMoBkAKzYR",
  "key31": "2SWwTyTFbkiZk9QSJqZTTwjo8rjPeBvQciz5aeLDVjeMpQzXWtawRwCawvF5Mg9KhxJf7Y2Vg3Tq4dfX8yEtKsko",
  "key32": "FBAppGpT3kxWGSmmaMDF5dMxACr5tj9ofBVGQg9nWyB9EE8ascD4L43fPxabBSwxcEtGFmU2cEPoyUdgekNXw5L",
  "key33": "4rZUgXdfBA9fznpaCA3bdfzmXF7hmy5QXxguusgt4k1RTZEa6Gk6fZzPX665SwVUN9CFZimWFiUErKXwyntUv2o2",
  "key34": "4bymuTQf5nfwneFr8tpasRMXMpJz1TJLzSMtg742dAJsbGpf8Zuh7dtihc1z4ACv9mbnsuCSDFQhcqN1Fx18JuLn",
  "key35": "3eDEKR3JQvYLnuVmCWayaMYsgBxbRUVFqXUQiezkRnEXdJfWfvMxmpS6HeAXDfg4Xh46PtvyV66ySofd8vqfa54D",
  "key36": "3QiPZitqr56dMiWSBuyVrsNSqWonCjzrbNYfcsgqyaSaRZF6yy2WacStTdX9QQsqHSgdEdWCrFUXVfLRbnU4NT64",
  "key37": "2rb8eSGHb2i7USFT1He3GGVrbdWPApr7ZpvrqESmhWCkmNDLL5ep42KHX8CzUa1zti7GGt3JLH6j2bjToy2B2FMz",
  "key38": "4bRAERXRQYNj1YyRsKEeVKXQEBRrZMArU6hAPTCjcQxkE7GxaQhgTtKqY7d6bBm8a11X9dGNQijMv9JKUUbevTSB",
  "key39": "3oVft5TQruVFGM7YLg1xNTgUr1QPVcPvqF6hBjqvT6awTY11ZrSd3y1UDgMfjhSANRmd13kqA6MRiTMsRJZzfju7",
  "key40": "ULBijPKUxn6ue6SdTxEMstqvF2gdNMSfhEZqYWZyiRmZ69v9YQSkBUkNpix4Bz9i38pgg9GMso4JbH4AFbTZpU7",
  "key41": "2uMMKpmgAuMD9ZFc8HVRoqRjW1tu7BYq7PQ4j1HLTm1jQjR5PpErbnUAaE5yCZ2ChXgCmR8XAYsvgW4jXHSNgwfR",
  "key42": "2tJv4FYWiqdUWgZJRAZ3qPf47bQRcY8W53SMd2dN6R43CZHW62ReYJmXWeJ1g8PxBc3nBfyHcwCyPK4E3f8hRN8S",
  "key43": "4bzwKqdkdvaYimoRxMrNZ1Q6WjYXnLR4hGLmJ5BxJxBwBffRAGMo57txWzzd6VmgZ4vAiHKw9zLgZkBBnQnG2o6b",
  "key44": "JsNxivdCWMC4gKxWEsbgUgn4r6UgjAcP2GWubPzhnCsBCR1hZMBm35QNLm7fWaYBZoK1MA8gx4k5ZPCTo1dNDa2",
  "key45": "4ELhdhUCeTCRFURULS5bvHovRbgass6L1WLvBJ8VsvSUAYCmJFMPdQUpfNN7cn78ZYXXvRySPpNXRf5dWtG9ux8w",
  "key46": "2RXTxvfSgKBz8G6Mmn7RcTHje5yuxHyU8ZkuD5xLsjHE9eSrvNRtPv6QUAe69yYhHbct3QtKQWhoHWdC68uchAZ8",
  "key47": "5uvXGe6WExC2XVRSVNNp95zhz1MwY9WMRZUyJc74YzVXsLGkQAJkjSKqZ9eDFjfMQbCRc5FU1c5B2NzNnWoAXrnx",
  "key48": "JxXdAYMQHU6cjpXwwBrnNUE1Mf4YRpva4SxTAY2Hyggg8c8ipjEZWCFBdtc6ZAqLEopqJPh8kp1X9KmhNRLZdpD",
  "key49": "3sFaSVnsV8UM8s3X6tFz2Jm3xiKSgNKVnGjC9XiEi9VvE6iRFm8UdMjn3SzWTJsw6YmJsn8V79uUZ5oqUNyjPwEm"
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
