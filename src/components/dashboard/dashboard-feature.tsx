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
    "5XhpLnrGxRc7SkbYSejqkyx3cpjVW5amnE7aaFidhNbEjXEj8H3e2Em6ZXpE8nakn1GSFHAF77jAQpoKvztyDaRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xi8L59SZq4xodgoSpaW911erTyvW8pcAGsBXc2vrjDLtqHNaP4EZL7KWk7rm3RWyS1j6Z4uLX3mxDycxuNo7HdJ",
  "key1": "3pTiWoJdPgdC6pqq2qMkQZkJWMLkKkT7PqgGdzCJ7nGdMTSH2dNzTsF1vrocb2j5ze9NgryS6TjbFuZdrd7ZUYre",
  "key2": "65mFYVrqcrSWHXqHK9gt7FvoBqNaEMtd5YriAcnbhvNPgRQ2Nd3iyfHzxVUcEXH6rM8upUZu6Nbt8V96Xh9cuC5d",
  "key3": "4Vs1G7GwqNhZ4QsogWJfxRUKUL53rm2Bt6HikchgABCWdNmXNW2ueHYvKrisM3fjyB81KCtKBMktAnkummG2Y7q6",
  "key4": "gXiLdBuBZePAHFB2quzbD1C9umwajtZebnuVMjQCTaQ8nuRDKzJWKMK9CczdwQhZfU4MAw1id7E9VagxTr4Boap",
  "key5": "4Nb8jKET6ttX3L6fKSYtVHEsK13PRpL2vSEstWZzTG8kcX6bzuQWv91P9byf2q7FE1dHd3MT2agkHZsyRGrEBLYZ",
  "key6": "3fzkrNhBZuX2PZJtLwwBZjZorjXUvFaa2ThBh1tQ1LK3XqHsNPbkZMxPkEan5Ux2gTNkz8rKFBvLW9MpYngNkPVL",
  "key7": "652esEjTfY1Q13XTjARtuEX4tQ9NW77i1Udvq65gYkKD2apgfHuYStmM8qNvXYkMVWTLAHrYtCncMSL9LTxY8rY1",
  "key8": "45c9GXcR9f18y4vWTQ1nZPm7aXabSVoUPvt7Z57KW21GryeeuUHQWjBVBoqsALFQ32UrYB5eF7SLmXvUVk5WVYMk",
  "key9": "2C8taWXRm6LLS1iQgyLU7vGPaVXpvbBZYyZCyMtro5XuvUDiUDHxF5deeNPGCJFv2G54ujrqNv82e7jaiNKCre5i",
  "key10": "kFZm2xVZ6F4XypKmJzazCHuMyJ3BLbrL421XCEXmDYBpPiGZtvarQxyWotFCPXhhVbD6bPYNN4P1UbVjWwdCc8u",
  "key11": "JK7rCY7wMTNLp9TcHdbH4j5r9W1hsxcMNFUfkQLXr6HcPhLCUcUAsC41eZgvsGvX9doNXf8PN69SkiamNWrnaVy",
  "key12": "3C5rQMzLk2TqhaRZDUtjP8PDYCmekeR6wA8Hq1MhZo7iHoEKkGqeE1d55Cs2fZydjBmbetYJ7YzW8GjMmcpizYzU",
  "key13": "2tBywjZRUVsPx4Y7thMC1gv8jgUREmbURmKPh5LstkRY6VNbCxntKteCEHCDKonm3pSnyvZkwApXQB5Zh8iS18SB",
  "key14": "3L96z1r9bEbDE8BFDdC72dTz27wqrZnFD2myKY8DZSEqXZdj7ecg3qfQd1r1iyGRQh3jqY9bra2LBsxZjSVFruSM",
  "key15": "3mFMqtqPCZ56zPmX57Mc8kYvJqdrWvXXvGMGL35fcvqrARUyuuF23TzJ3cjcMoqD3UHZBfERjsn4tcZC2diAMq7r",
  "key16": "67b1iqKUgcN1qNtRRro6EzqwnyrmFR9EqMRT6AC7yk4HGrUHVpeMe2xq1NLraQVUGX7gDim7EHuGTSvf3yMdDg9t",
  "key17": "4cVXySv92bBbiXF5kycFkFXgAbF7YbirBNtjzkYiB1RknMpuJgzgZje2xdc2p5qaMt3tgcGfEdL4zGiCBrWUCema",
  "key18": "qkhfm18gyTQpDhWBDZQEquNV1P3KYtvRDTTZv15Zr8BQThDAmU9zNCC7xEU95r11Sb4YXP7RpSofvwWL7ruPwWv",
  "key19": "2kAnP35W8AkEcK7PjYHpq92777taJXM1usgif3wwKkH5YcW9PszY9p1iwP8joGgtJWUtVDYrsPAP9EbuQHNcw5dj",
  "key20": "34kKU2g7NndK2FPocDHo1yPQnP84EZqEV6k3C5co5NvjJi73xXxWeriPhsn7M8qiCbjkhb6dqEfbmnK3SvKJYJW7",
  "key21": "41THrquu9kmmz61PPSZQcrb5Wwc3Njbb3NQsQW6TmSBkN6EdynVoGdpLBLUBic6yNaWZP5fHXVnkz5YyYdernDWi",
  "key22": "3bTVPL3R3574TdMnpN9KW7qVTP3fnac3wWnoZXUDzubSMFXX1AxA9jQmvdTdReYpv7DeTgQnUBqWoExndqRWKK1i",
  "key23": "3kjs3qPkAyZJ89RHv1D8Zs2fviyZi2mDRTgaGcoKpdYJ9nrTY8Ybx14XkL5JHyVd3s2hATpjm7o1TARtF9UPPTGE",
  "key24": "gyu7TMGiKZ8jqFkaRoFq7rN8MsTRWCSTcP9dtB484tA88YsbAU2V9nxtrcLou9BpHVRhPv13pMSaSR1YjEcbDrb",
  "key25": "23q854BBFwqymmBSKZBZE14LKYDYYatjDV8kfwDu51xfNgCmuwipUfPm8FMuJNUR9xE9mCiKxXETCBGEFqbaY12R",
  "key26": "5AgbcosVHEuxP21WPqqk2a8EmP7HvxFafnfNbn42r77cXAafgG8yEqhJBBwU3nbPBUBTMFSQzskt8odMwhYmx2cQ",
  "key27": "3ZjxY9Fh1JgwHw6wXitXJp7VtrPNEuB9BTqkfGJeEFkNfhLW3s8hQq13q746kwGTXg5qxYpQ8L8toLcE4x4KBcMU",
  "key28": "2roPevRyDMZttB8P56UtucCttsd11cuF17dywECcZHTSWzCKy3c1jzZiWTUQEmEHuk3KwH8327Nuoz7Fp5xD6SqE",
  "key29": "XtTgysYV969VnmfEP5kzYoFCxk2ZjvEjKPLFaWvE73dpNCUurKyHZMFyAuzFiC6rP9AKwzCzE75hbvuWMfHAmvL",
  "key30": "3tTxjMLjhHSDK8dznvgJgfu92qALvK249SyfSwn8oXeiwHYn9eQWgZcjsCS5La3vcoZZv2fnajK8MKQ8Tw6Rtt8g",
  "key31": "3vKnpsmYdokM3QBCvoueb77nJuE58eVZ27i2M2VqVdSZ9zJKk464USsQDwAs666XXs4nxmUVFhEMgxJdzNmjw8UA",
  "key32": "3313JcKUMooVnQgzL9XDbevMzY2ts2zvBdvk4QD6SoG94CUAvqmj8XWgkYdRLTXiQtXio4yW8m8KH6rprM9RAb22",
  "key33": "3SkYS2ur8pzJYcf4BqSnbY8cnjaqxhmdnezMzjgTmXKa5xGi3MC9Y7yFdAk91LwR8R7aq45MRFyz5bPLJwFSE1Gs",
  "key34": "RtKz9cKNKeL5gHoFPf4ubWmcQixbNudR7b4v7PqLv3LHHgE7DHNWZWitSYWsMVMLAnnC2oPKsxgZgkRGh111WPF"
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
