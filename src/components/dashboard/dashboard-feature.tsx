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
    "5KRDk76LGQgrLCs2ygfTtBjeTXDmcJBMjRMUpFbb6VNXYLSqgYbrC9kbMZY1HmD56nJ1DKhvRHWQdenon5GWJGLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kedtdNayM6EcfQ5hp5jmBqEuWNeMn3qHwecmgzQZMiLB5pzTyLuH5jK32uMo8oJgxU8pvtxhaA4juH5qVGh136E",
  "key1": "3T81jMHZY5mq886aRe3A6RQFTpxEzJbUCupnGRVYQw8hfAVq4wMm3G1nUhNsNyQQDhHkHzDDF3pEKp1GuX4XRTFC",
  "key2": "2DvaDEjYLrqZ2YJwfWV5697LEnDSf9Kbeyfuu5j3kDnxi8pTTT5HN7dSM4yTsFJtDS8qRX6hEn7sTFkirwTk8fzf",
  "key3": "2KzAsjMySVCY2p5BTvEWtuDsSZUwE7cMUv1e6VwLNyQjGr1M2TD7ub8uXK4RThdCHjkESrmdmMfnCtJFywhw2B7U",
  "key4": "2qHL5Ev3YbjmB3Do2puZJEtxnmDoscztnUgfnAFVu8Qta8wpxjdZNTCREUymRBAhbgo8ffWPAtGGvyd1cRuF8JNh",
  "key5": "EiQ7kz3x8mh2de8vNiFwJE7L8fe9KtB3CRPokS7Mrwtm6xiojvK55NjoMjj9RBG1VNzakfYR3Ze39SnxnDUQamc",
  "key6": "5QjYtZRANUEGQAcSC7dioFg9LgJbCQ7UXE7fhHZZKTVfBTK2nxBVrRASKDtsPvF5a5iWmdRN81V2mWpH43BGpoKt",
  "key7": "3Lpi8J15fASYX4p4nZtHgnT8Yh5mhUCKa8efSTPzw9JjMsU5Vp8hL22oZjvBu9iBPEJRkNU1bb1rASm3NXmQikgd",
  "key8": "TFjKPWXbbucDFZyhb1MdfmYNQY8S8r9KCK6dE1qhc2QYneug5Nrjc7Y6w3wTUCkAu3mvcPLU1gbgASs6SWKewQc",
  "key9": "5CA2moiiURPh6fef4bgfftqqP4iBGe5Lp2ZKBubC6Lm1fg4yQoh1vpKMUox2Wi5jVxrP49s2L5koEiYRSEZA2ysT",
  "key10": "2KaQpXdsQJnCekhVQ1P68j3rYUwMsdBWQYjBzbKfNDWbqD4Vn3nLN9F1SqVNw3V2sZWzaen3npPDi47n2Ynnfu5j",
  "key11": "3rdkfGv4FMUbsPQYXSv114YDvvVUYg34Pet1zyzQ5NFQmfMKcNkQ41fYQypVzUgH4XyjEy8ndM7yomKcLk7ppxek",
  "key12": "3EwqNRXixugRU2mxMEDyytaC6bZzN4Xfay6vmt51mhvV4Xk9bUpWnpGagZF3M8LKeJKXURueqsPTrmyCDyAvxDN1",
  "key13": "3AJU7pLt4Xfb65zgG4amebpovNHQ4256VEAk8vkdufGWALZktR3qH2QAomRAS3vMbTKkw5AP4qgaYNg7sxs8ebPg",
  "key14": "5bCD3nHXnXNPGCFdrkWXaqYmNtz58ccJXCzo943QzdJLsRo1DrXkaVbutBgENVfdiLofFo2mRc2n2XyeVBAJyv6P",
  "key15": "4hWyrguvCQoDxjkiuXugSpoyMxHFaXCsxP4hwioURT5ex3LzMvz8hgovN2eB9s8F6VSrXo7zuwS71eCAt6y18fHC",
  "key16": "3m4i4uoB2DFiQnvYAzmvGut5dLjJ4dqGS3Ku8whiQdff8z8Q8btRkS8z8D2hdgdk77wHp4hD4hQLNe1QUiNahkxp",
  "key17": "kGgMnf1p7DCqG8xBb2XWLtGBmyQoX9vwyvyfNUEK6PsXHZsAvktxynxRSn5V7CkorhbE8bMJhMx58VSFUtJUhiP",
  "key18": "3baKqiqzBsWtrQgk5wHx6LTNUzWKfahqbNeqHjNnXdCEme8iGDj9puTGYeu5Pp9iGwFzmzRELFdzPbytPukj7R3H",
  "key19": "3GjVRQwkaRiL9aHaQc9cS6nyWzURWrNEP3Y6qQzM34RA2HT5WWdq4scHmZ5btRcJByyuHcf93CiwpdtndsFFapR4",
  "key20": "82wxnYmB92L6MWUXFg8p5uR6mccfAiRxM9pwbYttBj4CeKFDtqhVFfhQGkFgwZkh7tW7qbGcDovFLGkty5i7M7A",
  "key21": "44anCLP5DDoTZcR6pKuLoa3YidhFcmduWMsf7ioWGjBDeaKGLtWxR6a8QJbMSC5MFZngUWEjYh9GDsmypAjMMsRw",
  "key22": "2aqUaTdVSih1VpcfH16xMSVzVyZaxjLgCo81SbKRyfa9NGKgfvCau7C271fNujWcAwxw7JiWNTPxwbujcAMcRTPy",
  "key23": "a18jWmS5vBHcwg7Zwa3EfeWrsRxwRuJaYWfXTqWKUZQQZfdramXwLKXKo7MFwayDYnSzazT2XWf74c8QJvTRWtT",
  "key24": "sSojCwkJk7uyxM7VjdMxJA28a6Ae56jHpEM1zqecZBcR1faRQEP1mGWsGN2T3KtcxU1qDfXKToKeQ8sFTTHpfTE",
  "key25": "5TNHYTs4mrzRZx3qodys9ymrQT7saVBzhKuRDikioa6jHJorD7tJobxHEx8iLLsmEX7ShJf2TGgpsjejRS9ttKuR",
  "key26": "3jEAoySX1sE7BFGYA31vgVcgDmcVewFZwf5HFYE78bgEGkAfoiRZkJfN5QoPtBcsg12bNPxgiw4abzhoTTHYPULi",
  "key27": "4doMZDKWn17GEhxT3Z8qSfv5wb3LXTgdKe157swENf1Cu6rm3FT3eiaF54z5FQsG6Q2MJdC5WJ5W2rTZ1FeXiDYQ",
  "key28": "3ResaMw6t6khfgTGEwMNZLSWG9Hg9ZdwgmboQVPcGQi4weuXeC8yYNCUNpXVNSvyqkJADoEN9p8dRAfNMjbyE4w5",
  "key29": "bZQ6nttHvJjs7vB8k2dwgdY6Nz38wF1npeFJy5cYGp7sGeT3GT99QZYDSGVZrnmTTUaWP4zhnWhoiTyAcUMXxNv",
  "key30": "3ksbSHEi55RfTATuxtDJyqLc2sN5wyNbEBcPJB1DPdixjXCvr692aNM7FTrewR4x7EcNhu5pRpDM2qPuPDMw7h6D",
  "key31": "yit7YPUUT2uXNYVQGryCmBXhcjHY2Q1d4oso7LnxDLRvAwReUm5bL6wPVzdSTLtV1foNu8JSKqRQme1uQkYaZYr",
  "key32": "2rHxYvS2DfnX6QaBeZ345N9vA9ioXd5SL9i3fTvsuc3TavX2xm7JpfVmsx2pTRVSBcwreVHTpUM8DKAcC2HFR2j3",
  "key33": "R4D6dZfZH91Jt69PbteeEQeztGKgdivVaWxRStD3E2bym5UafW8boJSx9MmvnSHe5hfE5V4Ena92kcu666nC3gB",
  "key34": "3eAyoDuVgrnTGEK47E8jCcVsDW5jW9wY8FczbWxjpsTf11xyF48KJBSHw7RT4VyuxuBtwnLPBddjCuwaHZ4vSxTt",
  "key35": "2CpRP7tW8txLpjQxBaHhDDe16GYtyuBahUUZUgU41gTQzimLMfF8ds4j3sTFdHV67secY8Rt49rMhhcEWiuyBZ2A",
  "key36": "4uBPLG3rxBtdUMh2WxZJuxknfWddLyBp956rq2D2eJy6AUC3BhrqhueGez7sQd6yrMx77wCiCLD11U3ihHDraVWL",
  "key37": "5MX7unQJLxW36KL1dJtBApyFTAh1YbKny8Mi7929zwtJ8ueBGR11B2Yyr3Gv7Vc8i2F8LUjRfW8sRd6HkAaQty3D",
  "key38": "G6MzFrVE3RNZ3tR26EdHepWmBJxMPU12ue7kPRzo99xennRUHiH23MbiGjpYX2rJkdLQQgT28m7e8JU3JDeKbgr",
  "key39": "3dQfemUS1pmeAQqwxS37NYYdRSU7xn3azL1x9z8gMMKeXTdTd3UUiqyEr6pRGK1hhnj1tWcMPNF4e1WNbSZvTwat",
  "key40": "2dGsJQqEsdjCYc6SuQGk5damphg3gqobYYoTpLVEW62o556HzVB57wVwMqYpcpWcitMMpk9sDfSg3x81koZZ6h1a",
  "key41": "48yrso53waYxfc4QMQha3Z3cHp73u74npzBVXscbRuULo6kD6CKA2YHCMe5TbWfd8L2Yw3TQWWwjTvpkm6RKAuS5",
  "key42": "21t2GruCdDTAHDh4xM1GZdFNUQqso1NfKu58QZMmMWQGAdBjjyZnDUp3mSzQrNT67316RRGmFewDEU7N4kWTXYx3",
  "key43": "y9WDEuehsFzd5bwc9ZWv1EeUmVEXFHLvUnXDFtzNo757fqRbxmB7HTdqpPR2USpDf7LYe9LQxAQtQzqiQ2VzBP1",
  "key44": "2SZbSvKED6PPHQhwY4zR4PZhCd3g9ZV177o3pevQbeHS7iQp5npVZph8EmjDthckv2qXH3Yyo5mRY6VzsPnyLYuE"
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
