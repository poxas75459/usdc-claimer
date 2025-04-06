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
    "3Fhy8jM1Qsvbsqb2b72fyi77fqocnNZhHiKjiXPia2cPqsp99fPYSkrFKRsEsWNGgsjq7haRVn2QU6ASScwYji3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5Erg2HmR4YvPwoUD839LgS7UiemnwQU3DVURJvxmnfkLmtcghyzkK9DPJz2TEdQYkqJkGAdv86ELPTb236bJdF",
  "key1": "2rkYT3YeHqBXW4qWYJrDR4jFri1UEHLxLCh4PtzWdbJb47ykFxDRenRiezh4Bke15axbKYaow8M11sBWPNNyLM4D",
  "key2": "41cwNcLeUtoLiNGhUBPJ7xt95No411fvVzSGa6YvdB1HWQFyJnXSWVqinnb4gL8JNiiRtWg49ZWGuXa8SStVVcia",
  "key3": "28pBizGQ6oC9uRS5aZsGMKmmb2G1pFyAonsMEHmBeYqVLhLzRqE4isjCz1rG6THM3ycaUb1CqL8M5sUARzRWevqu",
  "key4": "yPvGNKNCsT2zRUxRWFnFnLJiTNMYh3kehtjzQ73j26MP3bf2pDXtGHQCjSSRjmDDVL68eGEd1iiQKKLn8FfBQ4R",
  "key5": "56PkWaciu9SgEW9aXiERtsdeeZeRd8jQgxWfvuBv4BatxfFHG7HgcvejPNW9CN1ACYCfQzTQn2zXMzukfWUj78jQ",
  "key6": "4mtLQY5z5w5PAyzNB4axpNfboZkv3vnMaYmYTcW5sxeRGDFXPNGLF2gURbk6tCJ8TGHv6XEzo16BPmX98gznLfRm",
  "key7": "4ECghFVEeawSjoDmnGdLxeTbUuJoSa2Nos4YveQeYf7a7B5YKqdAHGHf2QHwE8n53xPWNBiJF2LhakA5pnkcaPRR",
  "key8": "3QmdtjKteQkmk4kPeW4J3x7DzEcs2NEYuwzkqfHZgxPBSzr4Znsuak7rCi4Y89Boo3pBBKd8yVfJPfToahBqje6r",
  "key9": "4dUDHU5KpjAUXop4ZLHmKVi1igSZibMGnXRQG66NadK6frHVRwngDYUEmA4RnjAUoqgcDhroXmWQFzrXgiifSr67",
  "key10": "51nbsb6CH1TziBAUiN4wQN9iqMA7vnPvj2LFF3Y3rN5SJhACojBKSJ1mxnSwqqfLN7UsZzLpCgT28pWhdoSvbWHy",
  "key11": "2uMXaafFKEkvz5w53pQXpDRr4wgHeWNzgUe3U3aCuLx59ptFBXRtpSJ77SAK2rTL9B7rqZHiom1Cd6jK72VmpfkA",
  "key12": "4xMh8HXAyCFLv3XYEjsKrnS5TZoe4BgZhxyULzbfETYW3c2TnRVZSNgyMmifJyMqWm6DPSCYJp6QumaGs1X6B3P5",
  "key13": "64M264TMLZ2153DeN2KjRJysP8fbNCYrBfSL3tbUataJFeFL1SbHP2eV5HRkJNNdpTJmjPy2M6LGdFkELAuJ7wUy",
  "key14": "33AnUAqPfdKnAPewcp5Esx7wd7th5RJQqyzi8SisrPRr45WkdmgF7SvGjEigjpjoqaXizLu5BWdaesz3cyQ91Wzo",
  "key15": "ccKcVnEgNeMotpqXYrqxaRjnqCFmNKoyopuLhpb1AEKq31dJk6xURNtr8dmAHSgBiTsVcg28xPN2J7yuqDyD8yR",
  "key16": "4QekabAsq4V2sBkmkG8pGCznQJn63XwJDaUEBVihcGGwu2zcNLTHoeMriGfnyuWM4EHz5CBj1ujs7bg5GkacWMSF",
  "key17": "5KKAzqFRL73kZ81qYA3p9c2SkQeaQgNUPNeGoQikXiv9BDpbd9Qu1xQW3pGXsTQEmwNSRnciZgkqTq153xZUv5FM",
  "key18": "2GYoVncuJMo7J5e84NN2MgBgTJ5z7hY5oUY7WnWYVdKPimbkxhnWjEhQCvRrBJmL7vBtEe9ueWEExoDJCiZzzwxe",
  "key19": "4B2W89mYmKeMDgS3EA2onivWfHjpbZmkuZeTFBEoV4FJDNWgcMjVe22twkp9rGAzhSuLu1ij1wtYLqiMEFZf9yBj",
  "key20": "3FkX7hndReztoYQhLZtXePNE14jnNw2XQKaL3yifxBvJo1Mte9YicQHArMwLnQQqZfVoNQNhPtRfjz82ZEFgqTAC",
  "key21": "4mmWkaEkhhfp8bef3iuukLQNQ1BWAf9Gsw5dK84vSWGFse6HyYG21Tqo2nNfpHDb2gNLvX9MN3D1LyfDFdxPzkg8",
  "key22": "foBRwam6Fo6j5Fwh1mxED7GZvwrwxzsS8E8VfCMk1wauLCA6VjgfuPbwqehBiMkLGcE4Ao1FiUTZs25gU9LFyyC",
  "key23": "4E7vYAhAd9ms6pHPhu6rWcHFPXYLkq25rBWuCWdtd9zUrxp7FDBGkc7DUbEWRtdsBRx5Aavtson8TQjNPKHZs9GJ",
  "key24": "4arVtQBGj8jBVAXJaRobJxHiMsYSksxck1vphFA7wSFLh4XskWUMEm8Sjows1RFjmf9Gge9uuiqQ2ZkTDbhpbfMn",
  "key25": "3fJgJ33vEifL5TCSxiM4ay4GrRksBDzxGtsTWHzKRVKqmbHRkYZXbxCbpeDsUGht7LDm4458CHmvLN82bZwXGnob",
  "key26": "ZjVwBj5nAcBXEp5mfAJq17njyFHaS5W2cBr8wSGDpBDZS12iZDLFoB2cDRYWs75nc3gFia135y7SfS1AsjSsc9F",
  "key27": "4Qgzr2tCKT78QpgesDMBpfNcy3roGjW9cXJSMTN9gaEjke1ckxv9szj2Q7atcYHa3DFdhTwwECmGWTTEHeHArhhT",
  "key28": "4rvesDan1hcvLrzgfCLh5GVib6e7sHtYNtxP5sZKcTFCdR4MjtCFHPTnLgPrtJ3nzYzSqVQFRfXyLFHnJStJoY3N",
  "key29": "2n13iBuyMCC88QcwzKLxv9eEJJKAkD4Vg82aQkCXzrWopypzPj7ojZMM8zzGms3iRiLq2rp5VVWz4k4xmEBY4U9i",
  "key30": "AgHYEni71Fq2LjCpSYDwY14dfR3VMrLZ1KL9gG96YS8CRsJ2Q4c6Lk1iJ6kuTh8Z9FmDCYTHahEWqwLSCRRVD7h",
  "key31": "5V1j8yAsLRe8LDrC1Mn3qncejasvqrejuWcsmfN3MNEkds6pKyDZ4SSoPK4ZsvfDjzvY1CQVPjG5KR677jQVmxdq",
  "key32": "411vf7iNZsscqzj3p4NsQRogZXDg3N86nSiPyGh4ne3TFPa51rxB6a7Sd2DKGiwARckMdsXweKsJEfbPEbWCgion",
  "key33": "4671iSANie5DngijaUbkzXWThf7Hg3emQkSUSrFHtC7U7vsGya1hqqenCL47JdWeR5RnNrPhAremtNUkDK9gDuni",
  "key34": "47tggJQDnA2efzqMq4uKaRxGXKJqGNha2p9q5UWU4jLFvX9C2DRFBjLBjgYVLAtyAEeD2yVyphdysk1qZt4LXRHt",
  "key35": "57iWUHZHyPqPcs2zq3z6cdiJa9EQn8pv91RtU167MNXZ4iYezttiFaweNBPReVospHvoY3E66jwQ3DL1XQbwkuVV",
  "key36": "4LmfYvjTtSMZpQXX29uusEVVb8BTE8YHgS7yhr6ymqSwgv4eMQPGfFzig3wNWStxg1fWDm3vo83pPanVaYSmf6eE",
  "key37": "2RvfwDSRnvoy1hJFkf8YaZCHwUQPSxTCDT7ktTdCvjoV9VBrXr3wshQ5CwY6aPne4mWj7n1gn7QESUiTFRjumtFb",
  "key38": "5WgmdadzFUjuXUKVrSJya7QuxSrJwyg6sBfbveAwe95kQTYyc4Y15jfmCo8Pcw9EwvqNYiYtWcjc6XDv8b99VcXH"
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
