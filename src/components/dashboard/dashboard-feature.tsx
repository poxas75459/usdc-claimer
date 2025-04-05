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
    "3B1AZXxpj3A9xCzUgnsvHjYA4m7HMjomcv5SDWkPk9wYDVEWvy5hLdxYnQB9VUwd3Eq8fHyjZAMAVeg3X6iZWCC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7i79NeEVEqeP1cHDNAr4MQz5qrAkKx4F7TFmB92H1R4vmaEmK1TPXRorKz2K53xdKiS1JbuCCvaT8gJgZRibCj",
  "key1": "ZZXeRhHSY72sH64GB7oVCR2xpMresuxUdFaL1zFWsp5osxyy82NC3EU2CaMRm433b5nsVbGuFW52Syvzaugyphr",
  "key2": "2HERZ5mXVqGPpgYVRNsruDU4ikRvQJU1aLWLqaDpXjBPBf4rTPTT2CmFwNJHTtYw6XYyUKY3iR8ET9RU7T7odjZj",
  "key3": "33VYdJu16v4aKTGHQC5QAmATxQww3Q644zb9wPyQhRpmMC5vqSKJ3NDTjjpAfA4CeRZc6hSEH6uKZysGKG6V6Dkt",
  "key4": "Q7zf6V5pxDSszW4WjG7FriZsnUq7SQy6c3Caq1nxkX4maynQWU4ZR9AZ7MV9KGbJJGhfWTNXLNidVg1FsvcUcpt",
  "key5": "uS3NQeDuaG1oP3ZnhBkibLy54fyarwoGsHVfo12GfUJ1o28xMi252jBmoFe6CQqnrTzBXZVqjfrQx8qtzNrByTj",
  "key6": "4rxrWeLh41BqV91MHsUSpzMHHfwTfNDVz465igFHCXmhm6hicc696fPA775g2upbhPSbMVfDm15k3S7jPPcXioMn",
  "key7": "5cUu6PRQwRUiz6ae8jGjLKJah5i5p28NSDyWZYg9jCfvNoaQyJ8FoTeQvJ2tLsc4rJX9SLjmYF7NiTmHCwTXMkNL",
  "key8": "2CnPr2fGRjGhejJg7kVQPqwwS5CKpR2c9XpCayzeK8otZy8m7jss7kMaDfbDtcmjgfxY2JC17HMTBQVebfUDYT4F",
  "key9": "58BMiLGA1vBZJ6Ju1ZbbJxbTBsiWTmm2ZMqssZxTeFyWWumsLvyVNBbtH8tU6bhDEnHqYwadxuCLnpW8FHR6ktQQ",
  "key10": "orG3nYXR38UMUi7vTYk8Nhzgzdye2W7bkSgywz8WKQwtxLcyhgCHrzktcTpjz41PkAq6LgziDWFqjemDiwdyHf9",
  "key11": "4hrMum3fXwsRfWGRoZqDTKc6VjmuCLHZ6tMSdSK7gqtwGLgYnu4LcWxRPjY3iwnUB8SG5MGLjqmvhoMw3TxpVwZ8",
  "key12": "XA53suzugwayjRfqPdmrGpyDSwvAmkBU7wKXGeEZqLfn4ZZehc5sJFxH2fkCr2fAJcPs1fisE8mkVDMhzafnAgf",
  "key13": "YkPxfuvUytxqo1f8M48h2FE7mikp9Qd4t92N6qktQfGno51PhhN2GfdeNfzAhPNyscgx6CX2VNxrC1kHWiNF7sR",
  "key14": "5ns8HQHy6c1dQo6Fo7RGvcrd8dMcoRqzxgvg6kRaQwUyBsFEGAvLpPFFGvG6t51Xv8mTgGsyHDYsCiNTjxCYv7ho",
  "key15": "4Zz7x8ghTaFjNrvVdwmPkAWWnNwCJT9xp7g4kA6etjvrqrMv4W6G1yHVsKGg4Ssy7gWmgyQaC6F3xritjSGSkpiV",
  "key16": "4BJWzzzLkPvy2oxDMD5dMhZtoajCaeMhC9JYxXtwdsCStr5jSZp2za79MHAResG4YuVtNf9Hoyv3zPLybdhi5oYW",
  "key17": "5GMtviVc4V2KVWr32fYEeTJjAswdJ2LQs1RzRbZozBCb1PjV4baYX31bnju1uGQPxrofcvA9nYpTVj98KNa3aBdW",
  "key18": "4W6eG5aL8pY91GkFk6dDEZecQaixG6nS53EsrC7NKsKyXoLM628Dp6g8tSFkkZu9xeGyR3q5i7iknxPcyjLQsVsM",
  "key19": "2Ut5k1oMfkYsU4vfCPt3J2pGoiqDaf7Yh85FKRswhKCm7npB8zfa6KUEjXyZLJNw6v67vuRavCrtVme87K88tv6C",
  "key20": "APUwcCDUU1cVBuxUQjLtCLyNc2cxGfBBRMAJTcRNZY5pfgSgaB3j6WnHmkmHC2gKXCTdDvqwhZGf6sDaWvoK5c5",
  "key21": "3eqK52wrNubH9g8ix1WchWhuwhpV4GHUsoAKbZSsXed8FeQ8n7tL1ikPkF8QHkQkDcTV5rQfwGpwprupZjwX1vuU",
  "key22": "3kGUvmCdh5RZqMRrg9Pt8wg48Ao5tSU61psCwTQZaoSy9jd8t3HZMWzpUKzVfwCam5dEEatmY2yPucy5NPii5yAt",
  "key23": "4X37aYyBo2mbodd5KXTW1aFWqNQbUbfZETWy6it9DRPhYewCNbtYmUWRQpbYuvZXTzwCgC5YDgrDxGDNiri7poDH",
  "key24": "3L9pjM1T7xdXfx7weDY7bPLVvbEpVJF2pYBjaLWoNWX7Hnf4oTh45CH7NbSMZKVPzmHtviGvz7mTZdsXknpMAZ1m",
  "key25": "XXE3VUfPgyu1hkVgSGGd1apwdS4BZw4tsVF3ftbW7Vavn1VRB4WeCoFpwJ3jL8qug3wdMAYMJ6vHyDr1o1HsNUJ",
  "key26": "3JHb4s2EKuWKoHcLWN7se8HHSmNU73eSyjr7sni4WnxdQG5qDsACrDdr4U7Y5qkWK7ZGGPpPoSWh5eSQHnSYvxX2",
  "key27": "5u7cg6dAE3QiDJCC5d5SK1m7LivUnJSAGAWXsmDc8BWdgGMxzjpRfFYnCNTwPosgAYJPMkQ4u2BpvHUJeboEtM2e",
  "key28": "61A7RQtb4N9iqs5x7sk4VP6QmBTckj89gmx7WBUcemSsysBrjr8nJHaSBU6savQWFv8Zu77vgQj4mX2FKq3udf4W",
  "key29": "2Z25hEuX8aCJCbDLEZD258X2NEoM2DkurEV2MG2erR8Q27YhaRWqs3M4NMjYmAEN3UeLFv5Pkkv6FhJDHBi9paYm",
  "key30": "5hfwypN1nLvbAJ6QhrEDmss7u1FB1UMUeyx2g8ZhYHUerx5S14G6zG1JVu8Jr1LQLjF5H7oHTXJwvBhBCN9r1xMM",
  "key31": "SV1o27PwowVZw7Wy14oTuAd3fGxPTvQtW3Zr6LsQfkPpZmd1f9VEZ6HCUvFG5x8gkmpcUrzMxDtT8iLd46RXiF8",
  "key32": "3Z1cT6ErADN5eogQaBuiXKfxLgHWZtffahjUzmTwFgfU4vVE7MUJ9BHnBRWLpfm74YAzwgU3AztyjbRcjTx5a23U",
  "key33": "4Dm18ZBR2qNGqX4kicj9oEmxCKUY13X9mkH7SNKebp6avcGRsvPLpA8b66p6BGQjkqmuADeXtTAd4cmdQT36VsFm",
  "key34": "4BBDzhPX48TK7dUng4WCEUZfFApH56L6TaK1eU67tMzr7sAzQHJeH61qB7s3V7KTHKhSi7h3bPwGVgnnPzQkhayV",
  "key35": "47qFRC9DWZXJMJaGPdK55awozKFzd9kY6RjD9iDt7o7XVrpuYyrPYeWZFHDU1d1XciVNBmEQgRH8zExwa8raA6nS",
  "key36": "4zfP2oHXYYnGVTLwtN8xVm9NRUR6XqRmEqaCPmtCvdGfhcZqzYyUgim4p42LzYSen3Z2T2rpRQ3JqU9yfjcGKDkF",
  "key37": "3MFLdjZQyEcVBKczXMQiGJ6Q5Y1dMFR2rYB33vFhgQnWZXZr7eWREvWLAoEfXoLU1XHUjmuLJ7mM9p3ivCPivZDy",
  "key38": "XJEDxGamUZvVAAqz5QBLUFVkXsqb5RCqWbneqCLj2dFTu9QzZUHLU7aHroL3yh4ATNR6VJa45xeTkLnH1ibKt7m",
  "key39": "4knL9uSVk7bXK59YifgKa7pDMegxhSaUuWnc8TpUs1f5kL9EgqmkQEwfDmVGBva649UZgCWVfk8dbrQpUQbdxjwN",
  "key40": "2GiWhPNN4jWnK1ujAuo1rSHMhdNehu8FBwGEPowLB6Qz2j2qZVoBPBhWxi4h6TqpL9ZZQqQ7NhG4dcXKDMJiAG8h",
  "key41": "2yr4vB82J8ns5niYsyTtyhgKCfgWUi6ZorT7bJYWeLKweymUWR8G7bMXuBwPuXJZx7YTZnnLrMWKMCChamgB2UxJ",
  "key42": "23riZiqeshCdeun8Ppz7wfBcANHiahpvfhNpaNdPUdu6eGY7rYPwy8nBpJUjMXSqkR1fp448a6btdayyYPx8BpHo",
  "key43": "1mHr3EZ3b85zvaqWMsRa9KHogD7kgLc5RdMKkcaYt9Bhz7au91FQ5QwwnZCJATK5wcvc5Pr7WPWPV8vuAusxKhC",
  "key44": "3yjpTwrnxLa2gDcsFzVvg9v7HzmMoqX25bv64yNSPaEXEEhaNe72tQvGjxbpHRj6bHYTcdoB9PqvX4jcPyFRgSqT"
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
