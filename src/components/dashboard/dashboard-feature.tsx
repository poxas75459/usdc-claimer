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
    "5d2ajaotwjyU6RjuMUMA572831aytj7w5Lx5scrxHiiYs15LgawoaLN1UYRc1ATNvDiwZ1f8fQy5CXFi4G6HUTzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4er2xQRmnMd6EW9cM837ULzhVrhPjA6ZgnK9PnGSaaqZ9z8Y2T6ybYZEisv3V7KffX3JT9Em7eofMAo9j3nekPxm",
  "key1": "4ZUbY4DsJBPuFVnpiF1geVqA2B8Q9e8LC7gbncSftryjShMsWTfhXBhJ5heeVqiC68Ax29Sfh6syM9G5VnCa9kNy",
  "key2": "2qKBN2DcpscUJyQXCK7pnJecRqa6E5kJTgnwQf9htohxdvU1hkGCYwCotAsco5ezFEyuNJewWUfS631ynxz3gxH8",
  "key3": "2y3y2GrQDjn1fsC4A2akZfemkXSRtPX3MbdsxxWnxyjdA6pFHpH8Wy1juZcLGgcq2QLE4LHnL5YK52moQneHB2ew",
  "key4": "3FMXPdee3c4GzTSyP2kWw5aGvA6kijDkcHhLdWV18bwz7gC298ZrMTVqCmfygS4NHZxXrGKLWKDMNzSwoWnQyfkf",
  "key5": "5ma5EThLqpg6XDJyU9gneUpMcBSQRiRsqZaxQXQqDqtRQ1vJVo8GX8hztxcMPkrTbJxu33RUdCAGW2WfKFpDuQCe",
  "key6": "3Syw8k8m8XZxZ4pN7GA8oCtVEFTdxa1hdbGNXQ2pUj8N9ECMHzm7fnMXe8AeU3FL5wxoA679j7BC7dVEaJtzg5es",
  "key7": "4pgPNoDatyLwGA8hwBp7xNDSHkumggx2QA5tkvFuTM63ENchoXdhnfgK8yKcwMgKWvZ7UvzVGXLfQsBNBpMGjRbs",
  "key8": "4tY9a2YTQV1qZzSrXkAQkjWVgJuKEBE3BcyC5sTytpmcnjo8TSwVB8NRCpURnzBLhFXLLGqwwFydwPoMZV23G4uq",
  "key9": "o7RJXARan9MpH9v7f7qNWBM18bB1NqQC2bHijPENuo3mYzZ319bQbxXu5q9yxTaL8tfUtmVD6dKTBsjMcTDfG7S",
  "key10": "4iEj4QMrcBYmYbEGddgt4Y7rCesTaBhtmeYCZKgMUmjywC91ECFzVkQaV7KHoobSDUotAJoNu9Y8sbMjBoZAfpXu",
  "key11": "5RP9UGgAARXhV2XL1QpPAWgU41Vym78MruZ6UFe98erYY5AcSAFZFUjSb8YGzkS2YVsQ7ALiBUG7RYFtBkxa1LEV",
  "key12": "4nZiNXUR15UWEyqaDbfm21oW8iuWeyhXTrRgLDXdxjsfM8wfJ3u7n8UqKGRndRV35FK9BAywKd5rzoYUzcqYdgYc",
  "key13": "4Jo82qWDyi6a3MP7aNPFV1qCP8Rdi6LtUxfbSkk64z75YFGY2D1zsstbiHa5jdtRGJR2x36TVQnxaw73q7tPu7iC",
  "key14": "3j3TGLY3RcahRoRWdnjFTHbEjrozCHYsGyKY9shp8eraXD6dsmcjpxfqYyuuFB6Z8Tm7AVQJPv6ZgepQEMRkVtqH",
  "key15": "4hSYGV7zbM1n5oNt73BwxqtL2CMptRh3bezPpVnNNsDNS73ec7RQ7tNHN9FTD7sUWaEsZFuMC7thsJecJfUJqx14",
  "key16": "5L2dxLy8xVHjvj3Az5e5xZmR6Jb43Frcv6MvYz3PS37J3M5qGESFNQGT1WbQETjRTpVbeajwZuMEEqqisjXNLaaS",
  "key17": "3xiTEbxDSwGw4pHj86sdLy3ZCLmHAZYLhzUZCC66mUievC9ARyhGoHc2A9ciovmMTYvkbA5qKtkXPhY7JLUicCRG",
  "key18": "3dUCN5Vp4CABrbBbEtYFjS1AMio9ywNdAgHaF7N2nVnGi64nWkGDH5SEL8NDwA7K4uvhVWuENwVvhTwbDuARxMs8",
  "key19": "m6uVsoQzz7mo3fzBvK8PTuxDA2wrijjACwnf7ZpPXRnReyyPKozaBp6FJhfV4iEzPSLSkTZ8mWbGumjjQRAvBz8",
  "key20": "2mqSybzxQRMXRuTk3fHZLL8wySoboRJhAN6AbkFt8yZ2KfecziXEzQSatrmHeGNGSKeGVkJ7t7jxtrmqWueewnoG",
  "key21": "gGS71Z8CtRRgnyfEJ8eyF7JxLtUQri9AWUM4fiNwvNo1eDb19ZkxAKsaBb3qn96hWvsugE4kTCv6b7MrRZNcrYb",
  "key22": "62CCPZtNAA5AbEWUegaLsSGcHCrWVavKsbg9MV9rSvyN11k2nTmECMp8sFcF8g59UJvWDkaFpftg5BxyNJftphcS",
  "key23": "5VGNnoW9xoDqbukJvzf4xRcwGnDAZg6evsp5ZGwoCZoLqXHMmgGiAUMK9UjEywwe48tmCn8ZgH7cYGAaicUNdeWo",
  "key24": "2SnirGbPt7KBxt6xYvss8VLrc5QZGCkPPbykT1eHM52wHLJSqyzB8XuE3txNUxJYqFGXDBau7PFWhXdRUNbryQHL",
  "key25": "3t7p9LLbMjTX5VhVmFcNN8ESkLfcfGZoYJaEadEFYXPd9exGsiPAe9us7deHxmsESWwZkkuFEQSyCF8K98u7DB98",
  "key26": "5fVuEJZHKD7CYBJoUpihzw1P6pncGhu35o2sjMPeDELdsUkULGoddjwdy9eGndESrqCi2XUe7LEZPg5LmJH6Bw5W",
  "key27": "3v5F8agdm2m13MQSxU5Ny38BMPSmTSkhkk5Gg89DyAqFU7Sg1EAjxqrYAEqZexUXK63bGZeTHdXobPitnnnD3jB",
  "key28": "wg9hQ6q1HBu9ZYsx7u22PT7NVgM9sTJnzTHybJhcq9SCaKYZYjxspop6j2YW9omaUSZEvc2W8Zaawu8hsqPfxHY",
  "key29": "5zdfXghWywZoraRCkkiFJb9QuVZBhZdr4yW9H8hRWfvayzXxas7yRupz8rU2axMfBzErNQX7zxvpbNPmo8n6GyDy",
  "key30": "4XFXVE6bRWVunwHFwhrmxzbiW5XBNB53HeVPjPeEmS8Gd5EW5AqAdambwMaUYfRBmzh9h9YRuPY123XXPMapLDD",
  "key31": "5dnUdu5EkrxyiK6YosMaUKrVKM7sQRu8cPtR8BmFcQSSFUQ7oa5ZR4s6rBDuzkMFW4ZjHyZDphz1xaVZABNcZ2uz",
  "key32": "4jdL6Mh9QLYaoLmXmgpUTUgNeVQParKcXeGEQ1EyfoKk2cx18fzNvL8urHJLH5decNrRqpyv215JiDWDD9JNVATN",
  "key33": "2cVBjqvvPErdkoYPwF3VMBG3DEpp32yAReswkD36KgQ8NA51wHJhbX9QQTpD3kqKEX2bHM64CtLXGCXdyBZPxsrQ",
  "key34": "QUXfQbDJ194RJhFfaEyURo6hzsBvoPj4ubMemRzuhLW75bv9ZhSrwFs9LYy3ReGNZAkt6Zb22fGF9Y8vzXHGxe8",
  "key35": "asiZhX8fF3qGFFHJHYMUdzP3Dsg6kQR2N1UGaGSrMf4Qu8YRWXJKxKgdYGeVjusV166WxbyxWJwbr4cjH5xvMyJ",
  "key36": "2TEjrjHpN5L81516vY9bHv3YeFSZZZvKeNa7u4kyvSjunhJvqqbyM9NQvHKtvSnFim5J2GaARefq743nnXRjyFAh",
  "key37": "5hr3tDxJSQzdvxLMaEZ8uRCjxmreDryRvvWVMWBswWqdFrdbpXBVjLbp1Jkct92Rn2e3CVaJNBTieJ8jWX2wfnLE",
  "key38": "tUq9pzRYxj8umA3JfbZSet5AVZgFWCb671fb22c3XiPGUG8PoKqu5HAQKCnac3JWdkAAX3dmPpXNzVpVcHJVnnJ",
  "key39": "3opoqYKjrk2ws7Xki2ShJZsKYihZAbG9ibiGWo6Xn3mAYzK759BDc1U7Jv1jumHSrWGfEd9UmFPxxYfQ5j21sRcn",
  "key40": "671DceLqR5JkM7F6pufsHi6Apy3gTrBWR5xkcQdWeaQJCrPaFYSkSVG1U518VVFMPWTrGbNT1sm6iLpbnVuEMbw5",
  "key41": "5GZf6NNt5gTuwyM53aRa4HG3cPBKXBkrgJvL6KR2k5ji4J4jBeHa7csb13bFYm5ABQvx6Tuwe5PtUXCkAzyFYzbp",
  "key42": "2GSNzD99XNY5thrwKZFjim5u1pjxgsmvFKtPj5BCxPhDseSTndgiXVyeN56tu6gxLPGcWffjkPKZW8Wguyg9v9Rt",
  "key43": "5D7nCLsGfza8mCxNdZ6xQVd4H6ZmE9VyLSUDCUvsiBpeWst9axvrg6sLTFvtJqzz28yMp8GFzCQR9TjiGLt3ry4A",
  "key44": "3Zi3pnPMxcAXBPotMdGFMKZSXjYv4cpCdfNsoRWuzNYyLxUCcb7vyz543R1vCpuoXtJ5DpQoGsQ7UbnuqtciatSy",
  "key45": "evU2nbW2Av8HzB7Ufvf4HMXnLzX7Bz41v3qMsMGrAU4hD3iuP7oLkxXUgTkwhbbAnf4qGbu7jnKrYb8v2oNFcdQ"
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
