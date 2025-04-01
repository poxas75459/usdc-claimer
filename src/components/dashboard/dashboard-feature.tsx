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
    "64uYFGUD4ULgLTdo95i7LrzdP45u2t4RegtbFuxE7mnzNA8gffQXMQxfgce5RsKSWCniAR11rDynTMtZxn47UTbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nviQuTKfxPhbREraatW2xwC1VfnubAkNqQ8dqEJucbFaVHMahoP9Gd5r3ertjh4ZpW1gfxdmXTwULoh7iEGtTac",
  "key1": "5KnnwUcJKqNsGPgTAJSgkowFF76yorcdJ7D8ZJJxPW5hBxEMB1FDmTxVSE5QJGJ3qHkiCmKU4LD4q7KnTovYTgEM",
  "key2": "4CQixxxFDz6ka8muqhk5kVf1g4FNu6Frs1GS6TkESPQJ2WSoXMKF9jTESernt8PrMoDDjZ3DUwtpZZpQHKfSruBX",
  "key3": "25YyfswrgTZ6xWMax8utNF82A12tNjvdxeAESrPYr1FNmqmqZXS1eGoCC3gvKNdbDYtSg4CqqwGqg7JXN7kGx51k",
  "key4": "2FnAFajtZpgb8YL7GPY9e7sdBGq7wFdU8RJDpHZ3f4wWC49RfqD6pwSeP55CcG62usCBvcfjPW26EnjygH9zjANi",
  "key5": "2XqXgd5N5yA1HMmRbfUmcRQJZx4nLfoz6RY6qAdiZHPxP3SWAyY8Ptf87pXuhR3PXJeBEMkvXPgoZYBqF9EHnA6s",
  "key6": "DEJgbGGJcrdLjxzjkvYeuJ3FV6iBnSDbBRKPLwzpZQomfkZJjpHW4HpQRayW6zWgiriGGJQRo9WTxTWpge2zt7t",
  "key7": "3U1rXT1TYGkMqqZQkevt8eiEbv5JMY5bSNdLUbJ2nj6psVTwkUHSsWEBx4qWevWL9Mt9mxoHSnan7U1kziw8VX5E",
  "key8": "5jV7DfWZZdx2UQ6fg2apNaR6msiGUsuGzPKmnzpFrjbH7oCqVmqcuhgBQKrkFALb8ZtT5nfhcWU1gTrHdwfEgYLf",
  "key9": "4Ye8ccsvpYwhkGXc9rLR5ju5gWEMTZm4NZZZuS7KCrpi8C4GVJ1zaERbfAjxjG5WyjiCXH1rBaKs8Tmg7RWcGQUR",
  "key10": "22XHN5cGs3wxmTyD9pBwoJM5U4nhgscbQi7YaoS7QXCdCWontpA52iuuWPW6QSdaEUmvrcRXpn48vCCX32EuKrHp",
  "key11": "3mqgksZhWgNBXK7HpYC494n7ZwvPWRqx7UeE6qm2qkC27EhX782s3dJWvjer3FbNDtxhASBjXQB4jrTag1RF6fEX",
  "key12": "2RY487yy5kr5nypJQ7AdrKkQFh5VvRavM2rHXhwk2SXXjMEPdqp6v1fChTTmQFmoMRGx8Rw2WqB6kdzXDCk372oe",
  "key13": "2u7VQpvPwKt3snkaJRtAPRHGhULWGJjhh6bS8obwLCN3we8WrbY7BJzbtC675nqXZTwEkzU4kw7saviN1QSDJ3wA",
  "key14": "2dACxXT73YDUK4Rw4DuTTAofa6BeZ7TBMjsJupeDPADHk4H1WRRGEhhTk4kjX8qUJsvDuB64NiUSZgvHYmWxLvsB",
  "key15": "5nAgFRDKf71SjriSNZsbDr2jLdbGQxXoduyvFhLouLHGB7NVG79i47pKsjKDfDWRpKhAVLsoL2BJCL3e7SZyUmBr",
  "key16": "rd22rS2QGkjU7Qxex3co9FV9TVHtUJZTeFiKSmZVRykrFsNGXNFiR6pPU5afP2uNjL4sxW2zR7kSLTzkX7CjqbW",
  "key17": "5WMPJ7eGtSWpCzvZuhJnjfq8k5EHiqujTXi6XDCf3iWRGpoPQAYuaBrribPmFCfySLihTn18nVFajbLKNdVy1v3s",
  "key18": "5UH3ASfcS5siXVFC3K1b2mpuEnbPMgtH2AcTEWoV6fqpFHrgeyw95rtabt93Yw5HPHCzJ4MpsFcxZESKDe7oT21c",
  "key19": "35WtSwdCvTQJ97ZXiZxajXeoEBBWReVja7cH743PG5uaifaztGwQCFqixTqYNKhc3Y5SpsmU4JEcYYFLS9gZJ1fq",
  "key20": "2BTrKJy5KZqWihXLjzo3AxwP3YDgd2k8TFxNURCTxZNhTQDafnb3RD2KhZbu6SceG6oSarhgC6ZgXUvNobjMzt4a",
  "key21": "3Uz7wpxN5HvJNekHrdfBTxaEEKQRMgzFD5N1itpBAFaGQo3WEjNPKojVntLp7PKg8ZqGEhjzczPDRMAY9EsgjFs6",
  "key22": "4Q94zo9zBDo99LNAErzUwtPEVPnNguf8gz7xdhNN3BzPJMvsL7tTzP2rAhtstRopoh759u2TqU69QVis5wHySYfw",
  "key23": "55ZEAt1K1VtS6R7n1Vge9kCmhEdebuU2YmWLneG5UbD7GxaYRVYJxZeMa75QenqeNHRXWBLoTCNQD65z5oP2ixMG",
  "key24": "2HAC9oCRwp38rceR5ELeHDCgGLgqqwofPGMNi7tyhVjVJogxTboNMFkaQPhX9WoQsR5UTHzmSsGbAqN9AX22TCh3",
  "key25": "2use71Zx487UJvPMnJyCphrsoeyo1WzLGqW5j56VogvXYcaYut2i75n8vLfpLz6DJikvdY1q2gAVd9Mu42oMctVp",
  "key26": "4mGidyYCGq45TZzCNXC8zFT6QMJerMiX6sSuJECCnheLdfGvRbfBKWmzJnBVPvmwPbf2PGXT831ADv7BqtUR4WBe",
  "key27": "5DWcxw1HRzb8Tgk8DVjXjzKU38eSKpjKJ6XPTfqQheJAhXmTGKcDPCPWbQngHuocakqtfBcT1yqBNZaDCmnvLftL",
  "key28": "537gy1GAKj7jCiuw9dsjPivMKcCrsqvsGNdv2Z7WH9584G94qr4Y2evfnUumVkUB31RHLf4EDFz3MeBg9sCKbSpR",
  "key29": "XtaPC6qbg7fV9tQcB9yQ2iomiQ4HFqL87SRcPZVkA27G4cp7i7CHPZuiRkAGYDF4fwDAQPnLmyRttjovbC5oaB9",
  "key30": "3AsvkRAdA6TKmLNdaeYUAmBFJNYy7DxJDsavMks259SXr2k1VmEFUbK9uZy6GCC25bJT3N5YV9Z2pgX6ozK9EWb",
  "key31": "4FJo1BDHJmTVdAhcVo8zRVpR2irpeFzTnrjCCHFpL2yFX3FShmZ3SSHsdmvLaAzp7ySiPZ2K99Wo38ibTwraicbV",
  "key32": "BD5PKqmvw3YozpPKPuB2qMZ3n6mS2viYzccADXLmCKjML58rWt7JAF69WZgfw9paXX9XBcXkhRVqAXbQsWVL48L",
  "key33": "4z2agpUcsYe5CH9vjtyT5dRV4Z25pSVqVxFtnJ5jAVHzFAmVEPqLu76gbvXfCJSrv2mtNbgXpLk6mArXsLKWh98V",
  "key34": "5j6W5iG9QisNpAXV5pNbWfWWLim6WBkysAd5hebTZj86mcXVGdx9RpUAwmfMd3oHAP5ipYQPybrbDjvTJahwVNMp",
  "key35": "4gfU5J3Hj9HSVb99iBS4zrAUcPGMJEdTWTC36VwvMuMVb4eoQYQw5t3rbKKk1ULjYk3NGaxqyTeUCqo8sKFBC5Gs",
  "key36": "58Q4dCAFLMXk9i1s3VJwZiikNUTZn43fcEP8P6gYUmseS6urcRqX8mqUnPY4f9TyS25UFVKbZt6GY95VGkERynGv",
  "key37": "4fXwoGkowzjhmrVvy25Lran9qivahrc4CTFgEUkeggtos95FMQRUGMUsDzMsi7Pv4GhGkQeCK3TxFwLrEiPWbJY8"
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
