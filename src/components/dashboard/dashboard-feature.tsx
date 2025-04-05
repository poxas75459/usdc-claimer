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
    "2xgTEzxjBUTYc8fYocS4di7Vtxph2i7LGthRaM4QeoLAtheR2jhCrbS6zfoEA9mSmPPBYCCVEGvv7nejXFSzBgX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qee83U9cp8U1fTk2JHYFf2JmbwTW1TWsnGK2dnWbSTmEJFiBAGDjpD2ffG1nsnkCXXQU5B8xYojpWJaEDY8m6zU",
  "key1": "2DWeiQ3sePcnmwySCrrHbkfXDoquGtY8uBeiiyJSMt5C1uBsm1TxYwVUU6XWWG9ouzfYXbUxK1USdUn15PxA3pmL",
  "key2": "3Qaypn8U8UXrdpfQr8FqhQJNuWTvJCHaiVD8KCvfKewE9Cjyhfp5MFCdJ4Bro5tkwitzxhRuwJ7J3dCjzAbLmNK8",
  "key3": "43WsnFR3V8uwgmnBemuJsQSehvDQQuK7WK1ufy4V4uF9W19pJb9iFnvmfijk3f3MVvwviMbt8ieJPS8XauSonKzL",
  "key4": "3zeJShh6hGv7ooJoGFLVK4DHsPdbCmBRVJgvMsM4W2VYgJmKVsWSUfMSTJfXmmjumKjbYzdmBPJoQ9LibAUxqTdd",
  "key5": "5TiB8eCsERaEBiGwU4HMW6KfEUoJFV3rPGvzCukdGUJ5TZS22mU1UJUQammZiHAjBPa2NzrBEdRnjERyPADekbJb",
  "key6": "ZYGkyETGi5EvdLFsDfGkHLyF9MMLrruwmkPC9t7b3ranwyryPnozU3CZ8SZXSPD9E6nq6RtLBXHJx1g7bgJdn8h",
  "key7": "2hjVU1cr51nGy8c1ZbTHKSQa9jA44dwDrwVubwt79W5xg8evagkCrNKSGxkkeiPTYyUxwix2uW46Kb57KfdgjyAb",
  "key8": "5tHXRvi8TTQ9SoDJYb8nkUQce7xfD6uaAv1UYEm8AN2KxxTyhip617n3ajR5FqBYf4TPZ2pEFgmhPEu9RNcZLQbH",
  "key9": "3PSUNSUKwJnpmr657TsZ99DXPTxWi4kPDwVqKrmXgJsSvh1e5aviTMfYyeNYd14myio2korBAMoe6CeHicoJ7qKh",
  "key10": "5DxnJ2sv4a5yNZee49P6HSbRzvqvoengzvQjjajZh6SCE4eYK1QNYyV5HvEVWQNoVwvfMfANssZ6Nwkz3gsb9wnW",
  "key11": "41Z1R1jhEoX3YxBfgJdpbC2Ky6RuEAif73JFRQcET5Lx8T57bwxTLQPKzwC1Nw35eoSu93YmxLkhN4zr4citHN6Q",
  "key12": "4cpdu2FX9bYU1kSR6LepHjjWxgFvVGteNmHr8ePtD8CxxiJszBAAG9GdEjQFCAVU7b2dTvSV6wDtjiUbbysFDrB5",
  "key13": "2qs8R9U6WFoMqRBcjgXk2Yy8RaJ1YgXYnT2wtmxGP1bjJC3xNFN7kedFcufVxJn2Ebh7ZFdTdQFCsyanjcAbfzBB",
  "key14": "3TX7CUtaLzs1bAtFXCLk3CpFkQKEWD9QEJBbZ7KZY8KXCeaH1fy1Y1xCCATypoAQitsZGdcVLVgzASZLXpFgKQL1",
  "key15": "2SpC3pRQ9nL86VH34cy3yzwbd17bbi2BKiEAeShnm4e28dvits5mei6XtUwuxJHFTPDsDgqBLNCjeHtCEk6VBKVA",
  "key16": "m178kppoHEbm8sb5CJfAzp8WKMG73vC87XHw3xziZTtcfRAiF3DTC6dd54Vis47mXWofVyq7X8KFbwi3CdvCRwJ",
  "key17": "2GABqYyxoM7wp6nQbedj7BdsXVjWYzoF8Vp7TZUbx8uuCPSiE4oUEKez5NGnFU4RrtuxwiUUV48vFEYDtxkU15u2",
  "key18": "27qdhYcgKi14hN254M7T9ivTXYuLvsLqMZtdva8X8N9rcrw29iwLDUCx1SvGKSv1Uvx5NHkoneY6MYZx5jEGUzTk",
  "key19": "PvNFPLbsoSkKYT5Tec51etHERUHuqUqByFHQezUynM6ZfFxw9HbHkuoMTR5rVGoiLxB2ELE6tiP8ywyznFmdD32",
  "key20": "5W73seZQBqs6UU11juxXpQM5awYJvDkSAp9u7PA2ALixc4WhYReqgeyxAYiRfr8PKN15xBKmFGFaQqCnun9zogTH",
  "key21": "5DxiNKmq5tWtnV193UEZB6MpKF7q5Ef4FKiADqfr8auoL1h3Dy3c1apmyTdJbcG95KnkG1DScwoQ8R69gUaBeEyN",
  "key22": "wVBDtk9Ajr97tKLXY7R1cveXvnXkRSvqJoLi8Qm9QnfogFzjgszuuUso2SuCTtydFnhxe3ibnMYQEG6e7dtiXCM",
  "key23": "57xxNvzps3nyYxte7euC97TaNbrMsRBCZ5Kr4ktfV9k15zGwrdoTVkegbSXs3J6e1BK26SDeNq7YF3tDsgmcty94",
  "key24": "3gNPumoAMhoTzoJN5PLeT6dJMGANpEBcbx2nUuuxvmZtrw3xjXtEZHHKyphr4NCRxzVFMXFqgT63tXSY259NuHbN",
  "key25": "4b6Pgg2Vmf8mhM7n1x4A6Gu26G1mwPmLSkQ5aMLpfSwXZdWZGQBNEHsjgNWbxHCJ9VYTjxB9hfQCVGzJHDRvAuRz",
  "key26": "523pdK4jZuMSNWyyiqJBsaCAKLnk846xa6stEUhw6F2ti6yNC8A4ZuR8G7AiynCk5ri5jBxsaxwWcGws9pZAGoGk",
  "key27": "2vXp3z9h9t9rgRGLmpnXXviBUFQjvCJuMj72aLjNjGXPnzJQBQNvWpj8FmdN3XtS6Es1jiPoxQLVZta2bFnZo8kD",
  "key28": "3bscgb5xZtgHEUdiMVJ939g5WLGJKXvZtiFyenJJCo6DcMeVVr4yNvjUAYsjFz6ii3Y32CGj2vwnroJisnJa9Fdr",
  "key29": "63ghZnERNSrAHKniWASVHdJix9ZtD7ZhYAAHuePRegsys9mUH4gyHPrSWxR69agAWR9MB3Cti3xNreTZUvnvkboD",
  "key30": "ZponfsCnpdZVKXGfJp4coFUe6tgafpEaxGjy56oX7Fa37LNNjCf8it2Q8NqvZ5Jy9rE6f9mjV1prWRUCmx2GLsS",
  "key31": "4fCrc5DpVQg9FCXqcQZTcAF79p4WZHcwgwZX13ypsMphvp9RPptMRoA81jYMQMzgNj24Vbd3WEkV2xNkcQV9v5PF",
  "key32": "4w7THYqMnqaH8kdsPfLcXywcjA7hMdQWNor3AHjogrd4N1h9EkqxEXXpPKP51jjQWyonW1MyE4tAXVQtUbcwVogT",
  "key33": "44A4gsBY9gXTECjDHoU8cEa8m5LpecQYYc7qyiRywjZoLEC4h9LmdAWy5PerJryj9ur4RgqkPoDWKvLeByPBzGZZ",
  "key34": "3oJfLfnDg7DyTrV99xjAPoaM9gk6RspDvM5rZCCSeru7wFA7urJHmCXVpamAnDByyB8nyuHfnW7wN7j3wB9wTj2q",
  "key35": "3iABzXjgvXcNg3eWQRUHcxazKGaGhH86r3yYDqe8gMvNNvkLSc2kbCcHXRC1N3eTFPkieuqbQWEM13awuPoVp6eb",
  "key36": "2y4LqvMvYgKNCnHqZwC6bvwVu2wYrGPQ1fhXBxRH7kLHyL3HdsivJkw6XGA3aevde3yu63X1oebWCDE3dNYCcTca",
  "key37": "3e3urW2ynMKUVrrbyRviwDTzAhtPHPV3YdWmWpNoRmFP7rzcyojXswwAay5CY26rndYr3w8pjD1FUT3DQQGNTTuS",
  "key38": "4BLCpqBRgthEHuRjHaWRb9NsfBhxtY8fUskNMyhJLosr4Ndo71hVL9cfYNoE1fLPHgUBybtvN9373NTSBjiHTwDQ",
  "key39": "rGfFHpM2rTEoxGyq3uJ9AuUT9qmqZ63CqfNYQGBZBmoPEDF4fE4Kn5QFhQsifx9ACSK5sGs7at3LfYvFz1tSMsG",
  "key40": "J91KciViuRGxd5RziNrWZ7dekwm2Ti4TTCzRstnS2Vyj8V5NDigpaF1nCgDK6gE2uVMxsAFYYyx2ZsedEoT8DNV",
  "key41": "3D3UwhH6dZVMTJdNnWYy64oaD9mcuLRcFG6qKv5pUcXGxRJzy54Gc87FfiGS1hiAVCAzeApkJk5Fbye8MfBGSd4B",
  "key42": "3TjjDtvA7XZSZzPexumLBXnSh9pmG5Vtz1HjG7MwsNupixGSNsxxLjwzYarT9fyj6c9NaNLf3KetSKtDxNzecSP1",
  "key43": "3y3ApQAHMQG1BogJ9KTXhjLx6rHv3x3zTgVoAsDqQLAuPEZbBzUZGQAMLdTuegKAm1fUsbVNLenuETqvsKXVUDoD",
  "key44": "3b5drvUPTifsN39TtNYgogXVM7CQiY8gwid9MxbZNW2N3uSRApk8tsEo5aoxTvRYq9vW7dbvhJgR8E32RWYr1Cf4",
  "key45": "tYCNF7ehQnToqynKKJkNB9R51z718CSSzz3eV4cXeTfPXAJY2jSY7v6VGFNJEe4hUK3yQd3rHEQ4A3W9NtWJHAv",
  "key46": "bRFUBgS5vJJAEk1SWXKhhi5VpYFgS1uvNwkCiCegJCz2AQFdf75f54FY9pXHLsfuL8LwZJ3wY1pctJT4SnENnW8",
  "key47": "5QtEWAZbrE4do2Ax38EhSEALcRm7wwtbU3NbnANyAfpbA4M2XqHnarA5jQs2noy2QRVuWNL2bezT7uRTB1RdWXVy",
  "key48": "2sGj2oDTC4cvfSNvh6SpuuW9bUrhfpTtciK4HHHgS7uHdPwLMRQigm7ob3HuofF5fvB2gsvr7evA3LRSXoHXq2Dm",
  "key49": "3gsrY1hadT32wyEkCkSE1k3KvE79Lmn7duTNceYPC1P5fvKg578393ptCfjZnq4YzXCgqgKQZJzQYDPs3VAchNxp"
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
