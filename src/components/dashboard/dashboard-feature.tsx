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
    "3ELF61oGpJfaMBUqTaeVg1PFEducgpjtojz7FkKuw1bHLyN7EPKbiFFK36UAzAciVHRZoKM8NnHerZ41pBkZ3Aab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPaApryVscX9XyitS4dwEQWSeaKcanrZyqJUTfV8Yt7R64yiSz3EWme3KevDZWc69Udpcbys11PPwkzTG1wgcN3",
  "key1": "3czjHJTagVMBWNHkndv6Z1WpWp3bA9zvpWWTXFjX9M7dxEiotn34toYm8uHr4QXoZ56SFB58HHCB8dRzgXKsKm9G",
  "key2": "4rh1MM6fBykb2VPSXSx5rfe1WR6Fzr6Ka2PJa3m9y3nD5Xzcv8wLELdheKnz7Y8Gvyr7rzJMx9QgGQ6AtiZmqpM2",
  "key3": "4tgWdiMU8EordgH8To6FapDBRWLxNZsNrxes7tkfsgHpLGHy7UJbn1vMBrpSTcT1sjwC5xfRskiXkE2VvphQp5P8",
  "key4": "4nuMhiTkVrxb6J6vVuCEw2PkPZvJt1eFQrwbVgTd29mVqnLUzvQosMsjZfgmxA4W4956SrswjELvBUFjBwEpYcHK",
  "key5": "38Ey3HJWkAFSb6cBJsaTLpp7oBoWv31Z6S2MmrPoZNwJKjK9RFLbDtrAcZNX7CPGfE5AiEt3UCJ41sYvwETdKxaf",
  "key6": "63D6umhdcFEykRu1ACe5TTvQk6P1A234LGfrEF7A6idkdwHGmxHRKm54qKy83Wecyy7bknBgPdyEo2WkGb5myygc",
  "key7": "A5e49FmcdVxrbxdpbbqLxoZBFuUUSDw2GfKcKZHEfC1mt2reaN4kA2YomcBYWaE6prZx5MB3y3csKYsRc9pFDM2",
  "key8": "uYJeDrSCuoWwGqst1h6Pe2SP1B7xyfgWWcTXDnV9Q2F5H71FsL3sof4QxtpsCqshxSkXxemp6LYaZznCszxDf7W",
  "key9": "2DdSWj1LazeyXdfKbi8YPobsLu7q8Qo8uwtPQw8gLGkqVXB46jRGRQoFk7d2mETwCZGf3mv2RNrUKCboga1wbzq1",
  "key10": "55dtdQis6fbARTdLfdFDGQEDVQuuag2q8Z2LXgU4DvUX87ciRAnN77kTm6SeUQUCaXeVNehcDcF3wfFZNdNBsGSk",
  "key11": "2LB51RXrd8fW5EynjSsLuiJcrtvDJogLLaJ85RwYxNBfsZ8k9G6WoBpFriUoa3zFxqtanjie5cLG8Qtnkh5Tmk4R",
  "key12": "XHn3uPeKfD6gESSpJVJXer7FYZWp2toiEqhSUX3b7qSAcmc8Uzow1y8MXesEn72EjzmXeZ2xALWiv8z8VDkMRbP",
  "key13": "3zr4dbdkarvDp1LyewCTjAu2DACWuymVjQsWTNVcEhkqwREpQKxyg9nqTJHQYc99hUPrdiJfbwXREdGUu7npGSG9",
  "key14": "3PJm87w349T45rAtZzj2NYmR6vSBFz8GNJs9NbpyhFFB4KgzUbWr8oiEvnPCxqktYWxmoMMHeVJ8fF4yUDm9x3cn",
  "key15": "4vyNJiSk5qA4sAHNAkpLLpQkitGGPMkEbkQdv9fCas3YAk2pfMgjjZWS9kiUMWMvfy9MMtRby22TJX54Gea7yDMR",
  "key16": "2YNuoGWHEcsvYff1djGcarNwjyn5TkDZjDcMu3rtzw5jUDnFCHQbnBbCTJNsnqTSmau5yv5y16xhBkRmHvq3eYvZ",
  "key17": "53LHjCfqayWgfSEQnjKEbqQEhMBFcJVd5GsQHNeVJy1VVFnx3NghMAihPCxqWPyPDdzMvQPZqW8qv6NAPc7Jjrvq",
  "key18": "58oFHnTdziGdXbNwUkgvjrqbJKzaJBdcB7upsZLfBdHVzN9C4brd9XtaiqBPA3yXnqTFU8hko2b5cu4jbDraqa7v",
  "key19": "RUAP9DmXY7Fz32gizDyzNe9oNnYJPXRPhsZFk9rXjXhBKzE85XzfKgi1rBrq7XPsufLSq1yQH2SFhtkssqAG5cD",
  "key20": "5C773PeSk8391PSnGV7Czpse42bUXR2KTeVy1hvzFSNkPK6om9HXUeNMLxgBnnQaCDoNXJo8BRJX5dinnQWsPZEp",
  "key21": "34CRpZUDXYqvjPpw6JRhE7QNmySK9HQAvkyAqVFgUVqdaBShSxVVZHZDA2fe2XxYgiUNJmazLbQzJPvoaS23NAMc",
  "key22": "4o3TfRMzZssWrwtqhj8R7A4gtBGvRJFRSvyzVHvBrJuU9mTZMeTksMT9c4Zmkc3p4eUF37ZMxUN9z2QTR6h45ndQ",
  "key23": "3TMHstKtxSpivHtJTE8ZLgoEr8kFdb8wX9JSUHTb8t8qKjmRP3CfuXU6WLgNvNdzPoeX9vuQN1Zr1SAJD7H24VKs",
  "key24": "uyqu7VfghygoHgxxMippN3qAFtKnY3iuLqAziXmLCRnogCGB8PAdwYTfknk4J1NVDb5ryTCJniDXaiyC3jZFXox",
  "key25": "4sYQh9GniYkgNZCb9eVdiWc6YC9ggxT4JrUvdYk1by9A2z128K9wp5wjGwJMC29YzE3Fh1XGnadKJCAMdFKtB29m",
  "key26": "3xTruAkw34SMe9VDLG5LF9cECCrCwosCr6q3e9StY3ESPQh4YXprfndRrUZJcCBZLmoFgTnhY28u5i4EYpnWFadQ",
  "key27": "3xfRKJ35WaX1CwPvuqNeEW94Ghx57qQxPJVpJZK28ZzykZ6PKui3zoYFF115WFXZoWFgG6MrCQVFLReu4oTLrDnt",
  "key28": "55SiSNBsN7GfCFWD8W7epQZGEFJgfNLrMFS6KRHKghyLJ6grTsQLhmdqiYqUpmF8yD4SPG7bmzbxGau8GQSn3H6V",
  "key29": "35dyjJrEjoveKJaQrf2h1nGTkBncVxPyxZxvomXAurYGPnAWM3LktFSgSDF7fTURDkSYUCcQ6pryZUxAGYAY8ULd",
  "key30": "5Cxj69GFrwAExqNLdAjrZqQ2Nemozngr4zVGnskxkqT3TJFf1AdD7htAiedNu87eCog2EpCbvV7hVXp85MZES1ug",
  "key31": "7CWRHy3jhH7uCrEcvJXgBkEb1M7oJEsBz9RkzQdRfp2H4dZozyoSb17YccAWtCDMbf9kUp77pUPnaJJFSgZVabA",
  "key32": "5k2LbRaKTTFurU77w5tsBgj8KddeQ1g1BhRpthMAzhc6W1LVXB7fRpDfJq51j5erWwhGrzHqNFiTDbm5PaAMApME",
  "key33": "32xxHbe67WXqavpnTQhBvPPQkMKe3NYRhmBjq7nhzhXNVXbVWKRicGP9SN8DzU8UwfvzofqnXXnbYDgaT7rqd1FD",
  "key34": "3FxgDL5aBaP3LEDRTL6RDtaNdi38FpXKp8fWndFP8w3i39XHQApNRuio9VgHeLa9FvLMWjpi6gKVViZawECzVErR",
  "key35": "2K1MroSEHWH5Em8QBcYjJXR3S5CmVYHoUP8cjMpXA8pe1nRwhGFVUPdj6XvqLPAbJhwRgguaDmajrb3EcbHR19VV",
  "key36": "5sNPpUj4wjK7MMGU3vkx5v5wYaMfgTmMFWXKqFr9X8emeisXfh59ER94hZst9mAWVGwUuFuDDLkLhDj531vaQmmd"
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
