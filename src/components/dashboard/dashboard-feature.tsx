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
    "2pDFfnb5z3McZkpzQxH9nRJREsikoiJSQgWjVGZTLraiJL8ktHAc8kowBBWRYuA4RwDzKgmJy5NCxwd4F5G4MniQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQMpNzDcyKP2hydfMfnA6mEESr5xUYY24295XGskbJLSh622opvzRGPfKzcLcj9RhUkZjZZvmwbjHwAZ6m6BreL",
  "key1": "2Sk8mCPqfu1BJXXvpQXFyHaU3m1kfXJzNQPPMm96F76m6ciTgcMjfAF4m8jdjM1LyHkSS3Ykq2BRGGRMNXg66uya",
  "key2": "2ZB9FqjgkDZjtXq16Rk69P7x5taehuQgFwjmouZxUDrng3ERiXzCWDjRtM3nHHjMYJkUrU4yKQ4U61QFsUcGD1tr",
  "key3": "61LChebzxStssFjk251rKWB9nSAJUT7WVHHfJPNRdeZP32kxzoDzSeumyuYmW5pZ9thDJj9VxFwXMkmssuGwMrEd",
  "key4": "4u7aenWsz6vRUg5WFwNaZUtr43Zs6hiyZWf595ZtCrt5WwNRcZAkWEf6M5Bje19YraDHYsck8b3PajGcBLFT5xLd",
  "key5": "55zNPApn3aD7ij7wud5ZAaz6Vfd46qsMrDtdvzFaZ1W3Akc8bn5oP6FALWwpNERyqwZhFEmkdJicUW7q2VFLwPVH",
  "key6": "3rDS6qc4G5tLDUTKosBzBc7CzkKvbAZAC1QxqLWXVWJriTfAX8kKDEUBA9mx9BAG4YQD5cUotZKvdcDzvresFpJc",
  "key7": "4UTo1qKJfh219tYqYKy8or1D6nNHb4bYQ43B8knAS7m1nBwsCby2vMwFpUq7zcwdPR9YJVp1r9bLFquouR6N8JJh",
  "key8": "4VhGrftoRDy8y4jFrfe19Z8YPPZ2k4FD97WizovZaDdGAc7b642p6fNAhLFsmqjCk5r5RJ3zDHxgJmMbz44BqMUG",
  "key9": "3CwGYxDuFS6T3PMP4dYuMBDYNwMi21LwzadigvYwmNG2w6RBrGbHmZAPup58Z1sJBdVKm5f5C4sTqQg4crFKh1jM",
  "key10": "5PfNGLV1eSDPrvErxPPPZjkb4S1vmbpRcPWxoQ4eGkmJ1Sa7t8aHcf79gJB45k8dDRYgZAEUK1BZDbgVwbz2pUAa",
  "key11": "69BVStGs8G69ALTfExmDtSgQbKzEgvfMhzySJ5AdsSd8JsgPKweP87oPgxk2xwuZkcfYLzhCYuXHa4UmNvc1S5v",
  "key12": "XRvFMEAB1TMRAzLpN9v2XSw5VCwmgiJ4hVjRqd1KRsJEEb8NALuznJtAxnnbNGyXasbyF6HoxSin9EUey4XwHnz",
  "key13": "8Av1B4KPwwFm6jqu4BT3ePvxEgphDqZSYgKW2HL9GKiFaY5EyauaRfzvCUUnfbNf67UWQ5V4i7SxDqYVXRG1fqt",
  "key14": "3SPfmxeVy4PUcaGekUdRdUTen7HxVihBLNscRMAFp76pLRox2xV6hcM5Zvkq1sXUpcS233iK9JiFXRguYasHoLq8",
  "key15": "5VuWmx8heTcCepdbULMgLAyW4VJkYHGTjtiJn8F2yhbmVygUPkYWaiDMhuDk4oNAfWGC52YedEmBAJ989mGLPaPb",
  "key16": "2gdiy253bpTiHyveG8k7f39PLELSTi9NN4P1n3NXskAhFdxycQsd7nyv6zKnQw5Poao36qKzbqSENhbybj4Xaaha",
  "key17": "4R6irhjWnomvJ2GAZrnGp2Dj7eDWRre3RSXJ9VqKcpX6CwCpK8LmfKb5P1D2cDhDZgNSbwqE4SixPzcdd62U7Wmo",
  "key18": "4iN3dAPHU8MXse92b4uKFff4mHH8y9BrQcpoFnrPG8AJMt8nvcZ3Wb6Ysm5ZAyMEL9VsFBt2w3qZGU2zLSPbEK7w",
  "key19": "Lhvnv6S2yt9s2RufaQyZkvFryWXhUZkRQCUs7uU15RyMR2aNZUjrV6CW7KLsvf41Psy4USFGmgam6ftAKY8GD5X",
  "key20": "3TERkwYkJLp4SkM74enLhDunm1BeoNjaTaoh5FrA8hDfQ9e8EhBJgaxzMtZu98xa2BwMmAqepdJHxXEUcGRZzeAv",
  "key21": "wwXCjJ9vGBBGtQo2Khdq1Q8gQ4FyxQrPAcHuk4DRQ7mKFAABEoYRoccLmqBxmd4E4tS4McWfFje1rpjTdtiQf94",
  "key22": "5hRe3gx3tPChWTcgDvAXjPtz53M8dZ1sqhqfzvRZq2WPvWbrNzJSXqFQnzgjTXVXCy4xn7DAUcqB3DkA8VoofHL7",
  "key23": "4PBfVjL6qMrt4zduCnmCuJNoPpjq8Lt8uc9ATbtmQDomL27TUn2LP86RibUciBY3hB4WL98qEcUY6EL2BsQnPjsk",
  "key24": "2jW7HqfUaiiUGQxfxkjy2qHiiFBUuK13ZPsryiH4rM83ZWJUKWLQsniW557j7KtuwJfXcrJWhPnXg6neUyPuHkFy",
  "key25": "5cFAqUTz4BvTLgb6upjXMZgCGjcAZEb9x1uuMfWQ9S2wRfqp9xou36dNATkSHP2yJkFNDbUxFBoaxyijqDV5mCiz",
  "key26": "4mDqZW686KZwBSpXmdDjRnR6GuveXyE3H3BYkRsthbfQ6kWwyroUFDWenNZA8mScvvucoUi8uRXGDLeoyjAb5DJj",
  "key27": "5sJJ1bgXbp44TYW3aLfkxuCZKzkTjJN7cx5MbcAobXcjKVMf27hsCaF2wRmr4zXpcNNeZzo1EcyJ4YeYKVTbFEqG",
  "key28": "22YsfPrgXNpW4dfwm3AtfDkBzNpN3nVJA2vHRrJzN1VeGqjmduQs3Xuyqs4TtJ25r4T9d3Hqq7TUcmwq9TjXPYHy",
  "key29": "5UdvRFuymXrV8uY1KwcN68BJWnCEPeEd1UCHGiCM161LSt1mhS1TjZgoBrNheZ1FnrZXXfQSM8CrXhJe75xQo5ko",
  "key30": "2guKEus4tSCAz8d7EnE1vrececNkaDDXerFWb5iPZxB5i25c4YCuU9CgB8sZfK9VpQTR4DtDeEvqPkRz18zA5JmG",
  "key31": "5TpQaNAZwnBPH44UwKWjG7qNgHN6Zz3VMHuuH95bEMdEuszWoKVQ6EGJd51U5s44WkA7M8YvUvSLMUsx1fJVLUfa",
  "key32": "2d938JjJ3uVEtSN5U7CZJguFB5wdE7h7fJe84RoU5gd5RRmSbUpfe1PrdkDTP5Qxk2Qoy11XqTyP83cvx4Qftqix",
  "key33": "3RT9GxKXkmfx6n28d3B531LGSkBG3YEVVgX9vXXeGBPTjbi8jfaTqYhAKx2NUZeVWm8HMB6XW4KJn8DP3yRJ5Z8q",
  "key34": "MuHHFr3zpLW8vRZon2nL7XidjmPQQi1wyQsqRGizpfDPzVBPrrrNUC2zdDwNvS4e4YbY3DiPK6Z8LtoRRRj3E43",
  "key35": "392E8DaJPfzuFkrxMd9SKwE5QUNB8VWRLaUau8QkDvZ29py9PJSJMa7aKtKmjBG53LaR7VHpieJTvXhKvtDzckTT",
  "key36": "3cPaTeFyRxP6JyJyHBQoVV3hpAnAukQW7epSu6QzxMkfWoQSyBnnfuW2ZJX1qNJER1TYsXdQz1egEX2aQia9DxD2",
  "key37": "5obFFEYGFUfm75jnUdxhYxMxdv8kRXdAqEoybt5f4uRDc6uC6vuxy9d2w9zoBHyV7jzTF8VY9oVLZqKFBYPhkYiW",
  "key38": "3XnPwuEFoi18Bj6yu4A1y2Eq6fRn4skSum64Mfs73XXUpEmWnhTX6PNjcDMVBuz4VaFLBWsyeLnxb6QoR8PRbAS7",
  "key39": "5sSLWUKTHHkW51591NtgEeF1BS1nhSDH4Bgx3dQY1jnfJgLztnbK4uBVgdkaLK2kN5ZX2an25zW1gfnbLQ78yrNU",
  "key40": "5CzGiyhVBriZc6ijVeFfEYDJ5tLj8yWvTv9CRmjZS9eUZN8LMizG1BNrFVtb2gYvfey67W92oGmMRtmw7kuc6gF6",
  "key41": "5oe5gDSdNrCCt3vcbs4RuvqXmQdxncZ9vpWrdfFSGJcfa4BKK8R1i5tR3pzb9FPLdkS1ifkFL1s6RF7JTgzYhDt1",
  "key42": "4uNzW8tT11GHP9FeSHUMGDrw2urtSjAkGfGDLrW5KfPXYJgiEdbuAQ22LeerGkYDAq9n8o7r4kgxhjrTKWSNnY8r",
  "key43": "2KUJijGwk7nhkTQ81K722KJfCzQuAiP3EnJ4fG4fqMMXiNwNWSAVNMHB9pBg7VszG2X9SwHevuHqCov8P2vfzTQj",
  "key44": "6E1tqSKgs517WnWqQQ72LE7pVnDrVJbDdEk5ZH5ooa1g8f9fgnSQX15WxercjC3AYzhWPBEt5SiobAUegBhGGaX",
  "key45": "2UXfUaNPBCWx6LUQMbuL9N9dqziTJnSwbu62r5acgNFrZNVCjg466vCeX3wBKSEhURgDxqnHbc5vPd2GYmsAdrAc",
  "key46": "2ghafWTmXxNimTGQnrTKbyfotdvtkWu829bt2FGmxiZkPnSm4vYW7EreMRFdU1rSqsFmpHk6JixPPpF39ZkbCtWx",
  "key47": "5ZHQ14rhY97CmY8QRgRV6V6hR5JHtK1JyUxuapV8Z6umzzudC7BTtz6x2FdNpFcXtLJUmPPwuNxK7B4iR2XbRX6",
  "key48": "9degZEfhVfiEu1LNAbfUfEjgc2BdcLiReAn7ZJFKSLVLKBditFMHndEchpNTkvUUdKgghzVH2Yx3dpXgZLqJekS",
  "key49": "ao3ez3KvL8HgqmP5nEi76FiaKqK2rZMbicgteHUdee1DC7gjkvkjZxyFkD82PHfLNAeTKd5CRFCyndDhzs1VUR2"
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
