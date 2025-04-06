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
    "4quL4dMsUWVpieKMf9E7c9A2vijh5BKTMZK2X6f4pFLf9EG4MFLhocfsNiFRQ9uutKTXe3ezPjM82swwbwJEXnRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ekKtD9uqshur3Wvs2YouDNcMQ9iJMLQ3tLdZBy5a9NiQSW3FDWc7M5636ifSrwFduztFVZp4MabmwXUmGAsUv8",
  "key1": "31v4iHAkeHDgpESshH3pXA9x6UUABT9ahLwpFTVjQpW9j7GX238oo3dK799KvqXcGWwu2HG5sLAMM5XHe9iLmaLn",
  "key2": "49Gpq1YskYxQZvQTE6ostwmpEYTwxDJeMsMJR7XyfrL5NHMPfgaHSqBhabTYS6Bh7SF7WRybAU99LCxLvGJWeowT",
  "key3": "39h7UaFTXe5NnCAfFMuDKCnSYQzC1UoM3S6ykUsC43ztwtwjeJgXYqak33hduwH3WHV3P7a8KcRYAKpBaae5sSSp",
  "key4": "4udPz8V16ACsPWkea2jisjctvB6ZsFDd1s1qBvbbRbG1RBgkxA5NUL1YWWCuY8L4hbo3VtdYa8MaYVNGP38AFpWb",
  "key5": "3BBAjbjtbypWdD7oudq6V2pCrs6gTgLwTPvL14mLGUdJChB17BVuhzEcqoKv9bJGu9HYx8yQXSpqQfERVSSPTvUL",
  "key6": "5bomorwfzechfcpY2vzmqNSG7WkASpVfcqm7B1JA4MQZ6VY4trEAMevhTNWh6U8i82GmxjoLoASMjMuE29NyY4cf",
  "key7": "4Kx18hfstAvxwBPHy9vB1bGECvoBzS7qPViXaa5w3uhdtRnDfYDdacdVo9UVkzskJAVpST9NPsFQ8GKNw1hQGsbF",
  "key8": "6esuGDC8ZoePC5gRv1woBfyUM6o6nfL3KspXJxcMPMzWJhPwMVrJr2wPDbFJZE7JthYMFpfQySo411SB5tKibQZ",
  "key9": "X5zf6iw2QfrmVqNQ88xCPKh2kmP4QhP56bNZMuS6WCZuPak9MwGYButF8wyxMqYM4vjdHFN96NkX8dUAXUP3Be1",
  "key10": "4VNHL9QdJWo5zyv8voeWFBMNZpyAuDnCzt1sXRKR4K9rAs5z6yaVsWJjVkGvNLLQpz2sLB3a3Fb57DGuatzKkSTF",
  "key11": "34zFahJ8Cu2BatXrT6bMPaQ1aDzHbtuEpvCjKq9BAVsnYVLo9SB1udC4Q1gwi3RxgftuoSGvxhRSWjU24W7mp42h",
  "key12": "6oiwrAczXdW7SbJYQ7SxgJfXHJKFb2jhAP3JY2ynyefEM79gMdQfp84xDfcsrLarn1EcnZvbYa7hdXJpkZk8MjP",
  "key13": "4EP43UCF4eUHEsNdRRf2ZtSaiXpf8kXoh7BuPV6tLiLMnR6C6tu8Q5ptAZsJ6nV8cocKdjFG88daQjWYznTz3JMr",
  "key14": "5zFoNePYC1iHnkVL7uLoj2efbNxc1MXNSZPaPbA4gNyS4uf6v4YP28RbMztc1ZW9vuUW5N7MeQ3u22mLYgBMrFNu",
  "key15": "4RguWLbvT2o6PBeVUh36aYZQc7wkTLKv9keNt12Em1Qrz5Bi3V15uPvM4bg5a3qt1ddUtCtVQaDs2b4pmuYDj8jy",
  "key16": "5EVfUwDHzPScB66Viae1if5RP92y8cRyXeg5fvTNkCEtcFMS5vWBUS7Gja129W9AAhrXfVsQM1C2TgFXH4XN2iKE",
  "key17": "pFb2j8eX3w5k2R3mXvVh1oLQy9BU61nRbQwi7gcNPkRGwExJRmxvQYiTQHnwGQhVuZxJNqR7ERkhbnBEownFzfs",
  "key18": "5F5KiULZbFLSAfVTqfXpNKeJ1TyTZMCx9Tdx1GT6H5dtCEdjXJdDRaKCktXMrJJaCMuJhN2LoxqYgm7m947W7h58",
  "key19": "2umwfYQwZVpgh2K4jFf8jJXbMwuDjgnrcDesxPusPGsfLerFANGxpfLSdMBhXEjjaZsCsHv7iDqHAgSWzncDwzfW",
  "key20": "3SU2HSvbfRiSJa7fZXESByCe9rnyayZcixKQjmPcThBKkv2koXLV9MjnYevHNYaM2vM6BoCdv84RviFrdnG6N7Dc",
  "key21": "47Q2cihLrDUwTs8rEeWbvpjDbFpiiCuyYjDh6R4gkysLsTErtiaurwQYHNrF4rfgDqbS5jxUe9jYgK6b3VSQVoVa",
  "key22": "3D4ePwirfZunPRgbJ54sQr7LipeHZqsThvFt8R1SzH9TtEXw1hsEqcg2qXhKTr8qvjN44DPMuLkmqk6NhzibNEaM",
  "key23": "4j5moBKKvQdVGgnAxnpEmmNzGC48rsN757gRdi9aAEVLM3aPY5LzXT9Hyih9EBbNYTDjfhjFzCktkWgLW6cS5Vaz",
  "key24": "2VZzZDgmggFtxoXKb4UjcXh5v4exy2gCKBQWw4DADYCqKPKkzPN6nPeU19kkxQweCbGvGcsTEeuCEc6BkSA6ae9x",
  "key25": "64WsXrE5sPVPoj61oZXcAhmPhW9ZDB4hZBCWvZ8gueT6X9Y1FK9WoW3DJPejphHLCWnJKy7RPRErxhh77zuNAZrQ",
  "key26": "5HkuLpidM8R7A8X7PGKy9fzPJHJy5fo6zzMzNCd6RnUVAcmAUVfX1WPQMADSzu8Di6VAdFBzmzbFCZmEfx3ps5bL",
  "key27": "PXx3cSDqfX1DXS9kJx7ZhSqoLA88TpyVayRmKpTZ8eTRQqZAU1GDz6u2XBHnhsA7afydZb2vKGTuEhvbA6Ja5qE",
  "key28": "3iL1swRBNCPWDBdmdYCEdVZqdVnVhM5m7YcF7dN8K4tZd5zjYjeTjXpsUH4br4wnk1QTj4wPeZ7qQ2ycna3vr81M",
  "key29": "PUHorqJ3biLxZkACUKe4PZS5t7pNybjMuwCQvf3ivCX8ZaroYJRbLUgM3QpFE7yDnysYo4MRFcguM1B9PDsRjgE",
  "key30": "3SfQ9SqcUZQUaEQmqqVLWPUAF7dLZiLawbsu4ysJKYeoqEXUyfK7k8xAiRR2bytfVTaXDmagbSdiMgrXXuQWhjbF",
  "key31": "3v1Tb2Gbcts6PUbifQ6C5AnwuNXLJFhCfHQ43mmHEpFVUtauYwcUzckyF4VQhdtW7xpQ3wBEz1XmdLYrjUqp1aPN",
  "key32": "WgwGi85EP2U56tCoCRKaR3ji1M4fvEFULsS9qQCsHuF8fdfN8AHwxSCA3FEZZjjTbdRcEdTet8P5Fn2jbzd54iY",
  "key33": "3NaJUa36NyRZe58dx1ZnQjEbGosh1jg2fzXZnFBFwTdp37Tev1GAKWEDPUHe1LfaUAxVsYJFAYVAfJjnFExJVtyX",
  "key34": "24nKc2GCZefKpFmFoRGxg2RE51HCab43tYBbBDAt7CQQampbdCTT4xZjemvyDYEYxc2Feg5VjVVJ3J4M7eksG3B1",
  "key35": "4qVxASYemisYmTG9fGevvJfFyq1ZJbW7Rw2yRqLPgseJ6NSTFU3XcSyNRHV9s4Yd4vWSvB7qLujgEJT6gfDsFdua",
  "key36": "2aHwydBThUvF8Fv2KCu9AgiaBnkJcuExe9AXEa4WZVgyzT5kk7679ULGeRfL1M3twQJWL3PKs7xH9LeWkj16tWQt",
  "key37": "5Piuzp4Tk1hgCzgqgwJQUEukryEPc3dAPB3v6n8tLGxmeSjfiviSVCVzYJFnuisWjrtMSaGpqf2CsjAPfa4orEgG",
  "key38": "qyzX35uSxrpnCGFeB9LQsCBHPj44zU3RgxeEx6nNxdGZh6sCy1STh9iPzHoE9NquNYJPHroiMM6p3k4GsLhj9nm",
  "key39": "25rF3uxoy8WJzX7kbYH1ZgmeYZkHAiytnoizWpzSr1VMgpoZRYeUYJfdVPzDfSgAmTPoAribvfkBXysJtzxZufQu",
  "key40": "HEcWNWWTTi6uSnvg26ZcS4ruoMZ1nPUhRTHbhMth5MmGF8mLhNVUQqpWc6Z6Jk1feSys7Ge65QBYHxCgqnXxMnt"
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
