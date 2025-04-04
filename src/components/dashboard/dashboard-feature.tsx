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
    "9bR6iKr2whgizsEQgomFbaMa5JmH6fdQ4gKn7da763ieRNSwCCK7DfJxpqKikHySY2DbpBjtXY3KT43P74C1fiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p8NY8VDAQ3fQ5Lvqh5qxBi8MJCCbqiD1BzSu9XC9k8dtsErgDLxFrfHdSQndwpyFKj94ZayxKDYTkmSZ7eQWXE7",
  "key1": "5YrPdsKmUyFGWa5UAqKjrxfcBqbgpy8qkyQUTQsTNRPbWSNH7teZ2YYkrhNbLVcRTgbJybjiTnuNP9mMmBXdKw18",
  "key2": "4Y4WVbR9vGYsJqM3oDRh8EgHjHuN7TFVwzrJHchC6QvLqFWyAfmwj3ad54oZYSebqFmdPVfDpsaN89yqg8uDRDVd",
  "key3": "3VAjFcogC5pqPcceHvnRHKrh1SMVoZReQ1jTxMSCPyuHw3UJJ2v5TieP4D7afnQ28Zzx3uXAhj78fH2Y2dXAXhzG",
  "key4": "3VoSGxHYw56tnAVgNN2CZiw4QPFUYMufUdCAKTpHoB79f2rnh6WUxuuQQyaGjUwZLWT3yhFSgC3U7w1EiR6Gy7PU",
  "key5": "nTUfXY4NXpiVNmfed7JnUpNTunSmQtfW8wCA6BiQkh5oMnWXgR6hKpSED7Mb5SGe4E1m5ioaFEdzgcRo8oQY5rZ",
  "key6": "2gGHaKdAd3vnR6rQQhCfMuMiXo51cvakNc55SfRyQWizunZ4LmGkuauZUwH6UrfZGzsDs68qe8LqY7ohD9mYNkM3",
  "key7": "4qYTzH1gkxGky1bgRSBQrMVqogLE8vG4mhy5jYVjfEx2voQx2WtpPGNDgSBmrRbnoW3oHdyRpnJJzJpdgtEx2pCd",
  "key8": "493osiZQCcr2Qv6S8vvqGqUoSJnQyjNRxbtJEywHYZSeXMPrCr4xhH5XYow9VLgsPwHrhQuyMCGYC8omyvAKNrKd",
  "key9": "2CVWeUo3DhFBPyVQ3svDVXgRNQQkddQJojxsJkVJgEdrEdy4oWimjadsVPrtQTCPtk765em1m1tHeUP8pBTaQ5c",
  "key10": "4cgBiG1dSuupLVnSmvpghPkBHejyFhtzvAPeBHUZyCSKABnywkPvw7DYNx1yiSWZTqUm61MpYvJeEJMWqeBCeAgy",
  "key11": "2GAyggs1LHpaziCQ21zAb7FNEiPpuiUN8ESeCdabo7vUrCQuFb6ea4dsKEthwWykNZM6Qp1o7bikQeH6j4ehLk5r",
  "key12": "4Wr1r1tNGg5e7CCPNEPQUpQsNSirhUc3Mcebhoku4iSMXW4LwgVj6ya5dtvSSf3wHaaRmjCicSpB2F2BisQ34XP4",
  "key13": "5fv7T4UhvMGEYVtsq2CcDEry42WUxyJQiwiB6QbT81DCn8ujeiFG62W5XizQKXuvzefn5ZT1VmN1uNyLiU2Ubk3o",
  "key14": "3UgWfK8F5cHic4bkihEmGvG46G8YKyWpE2xVvyh92ngZrRruoZJAEgZcFhYLbPGDdweVEqVJ4DyBuuCPUHXMzLjL",
  "key15": "3fZZs9vXbHFFtYk1qRufSXwcQiCDNdpXqR9uuzoJ8TNC4tYxCfgxNCoSyoz8kdf2aHpCw3rfoK8HRGobP96kkgcp",
  "key16": "3c2nmahRP5nzs4zAHMxUDCnvceGFtwwBwGoBbguxMFiJPuVFypJwHR9cL7n5deTcX8vC4wcEpUbgUv22fywpC6Dg",
  "key17": "MZQdbZUBi6ZD89PkhDCBp9P2jEs9TB7j46DwTvNoTjJiRmaJWAEnroXq3jRevpBahdHPioqu6pt9p5CweDWv1fz",
  "key18": "nvkKmanzGC7fjV58yBzyRdT5rN7BA1yj8zbjLnmJez5wcxQ6xQNUZ37JzUsunWBN8mS45pJL3ttTBrTpEzihXHG",
  "key19": "4UxSqAiH8JuwVfeUK5zaVTwqxM9EJyoJa23MeBMpyG7LfqaqD2ezAWVhtn62YGHczLanbnztdJVNgYVPRZNQJqQp",
  "key20": "5RuDdt1yzae97Fc7UdmUMdpsRFep1Mx5ZodPsdong4oCXNs6GYr2mrcx85svrTChFkzBJYrv9Wyycb6GB3ShfHGb",
  "key21": "fjuMLD1D4MuaD5gaz71ZMuYw6yVPQWGbWMDSnXiAFEhJNANwXBBLNVjwhQePAutepv1qKm8od5vUMqj396Z18tg",
  "key22": "5n2u6WqBxq7hniNtiQdGycNhct5fGxiFkRC7VMGRf185VUh2nt3x8kdNrHxStZRGYwGsjgF3DhUZhUiXqGKc8PDc",
  "key23": "3aB2Fvvm3NV9CfmKJQMmVhLVkxV2mmV2vcsnA5XNSiYodJd5KEq7acwrbwm6pur8s7j2pWvVep513tFphtMzqtFE",
  "key24": "xWzTSyuceWuKZxyXJkPykRnCHjzv46uG2LuF4VWNALTnLi1t4SdWC1GsFuRv5bYLKnHXX2d3qKEJPCtRFWSXp99",
  "key25": "rRAC3inxi45Sz3HXQLq6mgKyDVx6XtXu9QYjN7inVPpuGEyRyMWBsKyTWBiNB39wBXvquG7KyUvhw86e3AbuX5U",
  "key26": "5MzjM1rCGTdhWq5eSGru4CUhoLiMjN5rKuobkTW3zUU1Br8XR1pUZfuKcgdNcfkZi6BguZhfff4yweAyyRSKviv8",
  "key27": "2KgWZKtyJfyjomGTB6Xe2jWZj7fSDTC2dn9JyRZdP8koiDGV2wd2RHh4kvuBqJZ4Akpwgok5FnRqxWe5Z4k7feo1",
  "key28": "2nnGj1qbo1r54r9nX1HZpmtL4UhMyb2w76Ej1FyGk83ocNmZFjenh1Bnds9yrTJJkhbnvp6rdbi7zAoodxxjwZuy",
  "key29": "4E3EwqtiaonN6UTrkgQ8nFNzbRQEodjZ6KwrvdveF4txJjFq3QJRgquCRsrjxAzoHSFnremckC5zf5Rkwi81iGy7",
  "key30": "4xJUa18LeiQcaHtGUApXfo2VjKKhYeNu4VDAAZwcCMMMu25yMydEi3GJzYRpFhya8MSc9zFVCooowcL2z18RZCQb",
  "key31": "666Z2PLiYY3zcjUidLN3TcpSo1VHqvFvsmVxw1e6AacUstpvi9LBx3JNqWN7ZQCetsUbiLZjcsNV4gmWujidkmNs",
  "key32": "5BckkTPbx9DrKe8bqbXzVGENinddg8HSkWouHyepJpebwFytp1k2yo6xfHDBTen8eBJSbZ8vYth2WRkrEpKZFndh",
  "key33": "RnvLXyd7rxc43QuNGJwez2Q4nHk4nQWRR8NbD3kbv8gDVdR53mrNVLLM3fsg9C88qXN4QhTpzKVKrc6yqEiQsfr",
  "key34": "ZPJq1PrmzifHNbyjzHmYKK4g6dgf7wNbhN8kd1GHnsKTax94UTKFRovW1RtK8kpeRuNNYsjC2kUxjvxfwPpmBPs",
  "key35": "3A3qaNbAEkZP86pFYihs1GbAKBZNXm73qNUerQEScsGNz7NH65q4UCfHqxvnorfon55c7rADsDKByoUCEj1K8N8y",
  "key36": "bwQiHAxnmjqebZHMUP189TQ4bzQuFcvk2japa3SfQ5Tq7ToJ7VJDWhMWqAAQp4fVxn8skEDp9DVdtxn3ttCQJXb",
  "key37": "57uqaDUiuhnd1KukxWg8WCJS6QFTGtaAEokd74r9kusExGzb5X6pCsaoSe1WLNHfgzLwaswSamTtGVycKYjVQCjU",
  "key38": "ZzTruvU6h5JjgKUe8mnFRUbp4V5qK7Wb1rC8tcu8yvkUpJsTmT1dypYv7Ayd9rMiVKPsEL88sEaHPEJwFhjLH9o",
  "key39": "59LYZrHvXzLnc2zZ5CV6WedbYLQ8cmwtPDWcUk2jmc3SXaFqSm7RYLjfqodv6Uo5DFn1K23WJyas6YmgaEUWWMrd",
  "key40": "24cPcSB2R7xywmyn5R73NYS6ruFt53JqViRihiSgTPgKETJc5RNkJWEpoQj8HLG5Ly6mvEP1pC4P5KqKDMZYVBeD",
  "key41": "2nCBjZ6jat77tsNLWxg4WwPkZ1JdXYB38xv6uoBsDKfMFQb5ZVznirPvvkfvf6mPSmFDev2iRpTbJHDJihXqoEAW",
  "key42": "57YPX6dSCq3TPvvpmAHfRf1vYyenf2rLM2XYiXcMKAFfepW6srB5dios3RaX5aAcS57o5iPcnx8vnjXV97zCVNTW",
  "key43": "2iiJviidd5F35qYhCF4UUVDxgcEFTovymyw4PReTJHNf3cFJDPRFNVzyeWYTTs5QdNiQBY6MTuj5iUsJPJXz26Qc",
  "key44": "2e5xnTUHxMnAUiQ2ygaUiroC5UAMSjNyKaH1AUwvLEL7rzFuEUySVxhYZxRdTW778Upm6ewWMcv8qq7hywKKMMUX"
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
