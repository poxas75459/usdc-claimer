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
    "44Ti64P8AYc82QizRfHCm7p7uuBueJAUsDcgYPuHaT8y5a4A8PtiRvXwLN1Z61u3JDdYAKwxeyek3DvzXEMnkCUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HtryFvmoxZR1QW7fLuqPu3MUmn1i5v5NkoGJpwYRxqUPJoZKUkcatAg7uXPkZNqop4piY5oT2vdB3LRdgPXYgvp",
  "key1": "jeRhnY8vYMB9VcqPZVYHqUHESS6zzW7J3XGSZjivfDzzeW5PKvK1tMiVUqADCEu7tdMPq76jG6Kj7i39wHBK2xe",
  "key2": "57eyFYbVwf8vtnfnKDfxrHDyFm1SddpgyKwgnM5BZbKRYePPifsgZKnxjqCX9pfJUJEF3UhAw4RHsWW7C37V175h",
  "key3": "4ApU1zp9pve8iRu5A6GjfqBBtdp7Js3oshQPbARm4WKtz8CKRNK7fAQ7STzEBAQ2zRCr3dTSKNQWV53RKmX2wX7G",
  "key4": "58SRY7UTaGtBgZ1XKtanZXYBgMHupmBBf7qP4XGUvtZaKoqdZEf4FSpg6GwD2JH8NNBiHJdtqsuEQoEYXkTYBZTF",
  "key5": "2jSgr3JnAz8Yw9FGkrkWcSwnf9KFejJqUKip3uZHB8NwB3wAWULJ1GyFYF5wHx2jQxds5G8Fwh1uEqxn3dAHtHN6",
  "key6": "3Sap3NWeehDDQSZzSRooczUstrucVUs9nNBeUB8BJPCac1UKUVHRF1DMWpU7LXRcWPUf11f5oyr1Vf8sG2pWV35M",
  "key7": "359KtKuoEWZerqbKcGVVhdSzrfceqoCtEpzPVP8xgHuaPPEaT6jL7hwmgzRQ1qysne3j3RjWifYya8z2EevXdESv",
  "key8": "5KjA8XQe9MZB8umFRe8QwKzjFxSxkiFsMUy1qJ4o1jU9kcTsGF8YXej5nKyaLxSLQUMzHw8CbhZRfh1uW4tXfRjJ",
  "key9": "2mMMdFBsjFuzW5jpjuWCW28QxxgFS2n9uQ2itZzKZkq797y1WUJMEU6WN5JNvwEmFngsgXkhmWqPrZLixwgtY75w",
  "key10": "LW4u6tmdwPefRStCCLk1AQHzJeoHUK1mv6ZsdikRimM4yXLXJnUMPm4rG71vkRUkP3RXuF2srDZPav8dvaMgkSd",
  "key11": "3K7gW9CAxC1zc7LecFZVFtsUWG5vW7xKMzf19qFWg8CFBAcc4rRrZo9F4N5bJqqd5Ynm6xuX6asHtsJLQTJdvXUg",
  "key12": "3F4rfmvmR1tUdy3tj4qcvYwPZkp86eeP4CS9A5bmYPuBD3BexyNFwFxSzL6MY9Zp6EhkTjYUSvqHxq5gNB1GSVsY",
  "key13": "5FJFbpcxgLkTRrsTXif4x6fkykyFxFdUHZX1KtSSsHu3dcK9vdsrBErvNkL5WFWLK35SWTHPHVLe5WnZkuNaJhFL",
  "key14": "ivov9UMB7zvPQ9C1zZwDwNRjN482XpNWdMB2SjKnofbd1XabM3dHfTSLFHjD21jQ7cGU51woBEGbt6hTA8K7dpS",
  "key15": "39a159vSFzFc8kYoedj6hV1DhhQAaDuEeiGot2Uim47TYRyWhTVQ16kd66A5dPcmHcQraVT2MuP89Saf3vDcyCQy",
  "key16": "2ie5GY3BmeGGJfo9mVtqKD78YAdvMXPJUtZoy3Kk3wLPL9Aam5PkugEk82iVzYfYfrMLJwfsfNhmRyQx4HhBcSfw",
  "key17": "2BjGoGshKPLdkmRteJur3zbRMmz87xjxcLrF4dcs9kEA3akaxLmyba964Gngy58hFHRfqjyDgRKWwVqc1a2HPvgC",
  "key18": "3763nGgU1DyBk2QrYfmFb131AFYGQALJiByxKY5xJAdsiZrsScC68dDTJMnTvtUCGnmcx8XuxL99HRwHT9XUakFx",
  "key19": "2VKZAHn5vmdJ3tmG92g14eCqjFsN9ZSHLfxVrYWecYLJJnV3Pj7cyRTXzyYuvRGY1mWfrundzDATH8zdCmKx3SUT",
  "key20": "2QnJmMce3ngjdYWk4oVdQXTb3wM44BA4VRuEu3yzF78jp85rT3vyzQqBnXGLFNr9eBuZJxtDcdsaKPkyAJMyMFVP",
  "key21": "45ZXjePi78ACKERoBACMoTAeEJAs1Y23FiTd385563CefJKBiQRs6JS97Zgm4Kgi6NQuSfZF2pSTPeV9H9L2KucG",
  "key22": "4A9tgrmJdDuYhi1ui3iNfRGvxHnNoNaJPSnE2zwziP6ZWFtqWtCq2MJMehXSyRttp7VX36BPDFZvqxvnGpryiC8i",
  "key23": "MwvxbhePKobsgrxdntEPPqW6Nm8zLMFn1p19a9h271UWa2H6RNNXJeBwyM3MeBNRWBRY8x7MoCxYqFEjp78Tdsp",
  "key24": "2oWgdLF3XfeJdVS5oia56SnRGJcVsvv62uhX2vuiPUmMHi9N6WZtdsZ2w3EsQWWq2CiY236WK2iUwnc7sVWefSSx",
  "key25": "4o4taYkRHN9ooZaAFPqLPdLq2knAzVT4uof2vwogSbf4VsAY6Scv7LnHGtkrkFEkxMiYvu22VVtzZfPZKzEHvRn8",
  "key26": "2GYJwtM8xLXPr6JcuippGTwFtqGfWsuu6dU3LsrkoaBF7cuujFVQqHLWfEUSaSrf46qK3mMtdJ5bGkZrYvQHtzAJ",
  "key27": "5MX9fGNaWMsPMiSo4TXuCGD7NPHaVr6ybcVtdn5oAdJTfzfkVjnrcZhki3vc2uV9AmRtjfaH8qGvZhobHXFxH998",
  "key28": "2gfU72PxmFPXnCuAfWZ9Kzzs63xHw87LHBewiJaBounFsf6jguFeKuEfZf64mzoc84X9Pz12UDAbAmHe1JYQ1FcD",
  "key29": "586oedhw4Qgg9SQYhYanHJiGzkh2K11KqQVvRM82dyJEsdb8wjdQCuTSW2MsqxvCvF8zEDbEG5hXe4M1ojKTM9kP",
  "key30": "3nnwQQ4LY7YNaBgXrWxL1urUeUwf4ezACLvamKv5iKMyrBQFvWFGSNf6pnfgYQddDmFTVP2YrSbrU8tPpPPAVP2j",
  "key31": "4qjxDBZdqhJSJuFDwDzU6dwtCG82a7LdMHfJAe6JXTcG7Q1Ecia9uegEMz3pUB3s181JEXHt1QE1a424h5xAsCnf",
  "key32": "3DdBwB4pD6BJ1t4jxJvJJj1xf9AQ2KDt1V7AzRYN6YnFLcxCKvzBAgh9hDX8x7a8Mp3u1ZfVyBVVBBvTi3v4Rizj",
  "key33": "2yYbMhdo9KooLfXnMtsmijiqroestVeNndWH8Rupg6GfUngGrYi2jmWa1Robf3tDEU3BSNy4x5GuK4E7X2FuTcrX",
  "key34": "enTEXrzQ7jP2xgem14sBfqV4PTddfdH1eZCFrsMfpHa8sw5oyJTRf7jg8YppMJN9soooekF2ayEnfoNwQuvNEfB",
  "key35": "52mYjzQUcxs96oQRde2y4DoEw41RZrnXAtWJmPV8s4xYL248KgGNWWpovFxv7k9MvfxdyGJfp7TfY4Jgi42pAR4v",
  "key36": "sMBbZL6EJEx9M98RSK1edPEtXi6CFa5fejV7KuV1DwFrCskQxPthMwGptskRU2R8xPkbsTRbMkAnSmfs53CxTib",
  "key37": "4hoWRMVzpMTqo34eykFvxGCDV2REpTHqVoeMHQR5rqiZj6Tp2DoypxepzUPxC9J41UWhg3YB5px6irFn4LmhPL8r",
  "key38": "2pdn3FPrGVYanSH2UdV2Gr3H4MBjsLYBvgwkqZUoq1Gz13osJz7FJpuFM7j2gT6q7aSayKPULw95P71RS2r5DE2K",
  "key39": "2pbvFFKEG9NQU7kD2M7SjkyXMe6qPZ9Wj9c6zGRwUxkJZf6JY3DH7os3nqjENB5n4bKawfc2X7wPYhMv8mZwKUVn",
  "key40": "61PSupTgEZx3SWdFNU9aFJ5USLTaUAbsseHwyaEPcVrtt2RCY1n296rSPeTqvvdzETeqrHTDoMNnFAuNYUgxVchU",
  "key41": "3RtwxB76xBUmQ3hr6enpeiP8wdjjMZqi2ToU6aPoyJKsFAaFQ3qUCdh4YieMtSrAji4EhHsFLwqYugJ2eoLcSC3Y",
  "key42": "3C97mirp3MNcEkc6Lh5v5ZdLQ4CAYp8Nfx3EiDxidHYiUT6BQjWYxzvJtT7K86tAXUuWunGkdmuXtKg3UjpWxvN4",
  "key43": "3oM5QgDzZDTgkGoxM87APJjBJtrAUqNNHbHt4YydSy3KrQ8weMcnnCpTaj8S7EaScnwg5LC7WNHqgKEgjakrfZzs",
  "key44": "3no26fqDx6L5noysCe4WgZcS7C1KRd67QG4KaK7rdw4djgAKvhs8FUDjpdBcbWZXtQtyFtaQDHvp3HCrJX2ogaQq",
  "key45": "4EKxkSGMUuZunay5c2vRGdruojC3o1SRitRDFmVEfY4gAbyeT8EB6JyFYDmFxAUubWyocnE1gQotiKHWzkJhqhWC",
  "key46": "mYeYjxDrG7qmPoi5qcgWy2i3ysg6EuHimxhwUF8JzA6j8AaJCEsHAshUfejF3YPRVTJEF2KPEd8oghES88GGmJF"
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
