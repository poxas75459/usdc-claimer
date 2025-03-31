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
    "61Wre6T7cE4aGuSA7nUZkRinrPgDWf7gdyzHZ2D6SDe1t8Ju1rvkhrRdjdFCCPokGoAGxJHXaGjEQurX8t2euyZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erfg3YwXPkce3ixh1zAD9FatT9EQvfSvH53V6hpjvYz24BnZnNHtx7booHcQqxcAfLKbwzAYGuQYoU4QqLZTfiv",
  "key1": "54gR39mVYAnQ8J1nJg48ScCpRuRs7FXoUZ5YPFJguQfeiJHMUYfag9K1d617a4izRHtkYtfmStDKNo3ZzKBdMrJg",
  "key2": "3RsBjZPTzg8vkrVjYXiPzxtczoaaqrtkZ8aKvGTYZo5CrqkBTQG8MFJEv5jKkYQBUU7XbuQrwcWRtvHoiepLdtkJ",
  "key3": "3CwieJ2UKhN1mFaM7o5LdCm2mjXR2dRxpHGtzSX3NuytR3YvY3LzpohjQLgpB7hnc7P9ELQGnJdRc99BsMaVYDMX",
  "key4": "rNot12RTQ4LdcXRk9hLQXgS1UdLwTtCD8UocCGywJsFfx479EsvC84tHsBvrwExYUAkTKitmPMGMoPJUDSo7b9L",
  "key5": "5SNfgpQFsJ6JmgLLxon7cjKUS7KJ1bE23gDZFuVVWWcSELmocxoHEtoPbMEbK5pwBokjJdHLwULBbC6aZexYjfN2",
  "key6": "31EbmfBnfbkHMubNyz5czbJqG791sYEsBQxdcR6brvqRZeCbgMS7exPjfmJKfc11BeS8qXbRqdUbUvf34N3Wdui7",
  "key7": "nbLzwsSVsQPPshwzR1yPPi4xnVdytLoTjBcJkLkTLb3pTYy9rSt5PKTAcxvJ2bWz7o7ptr2imfXssgiDnpbW8ak",
  "key8": "5aTigomLCQFRK4p5ZXxsQqHrUuWsBQg967gcRHJHepC5j9zeJNyeKFvJKu661mBZMBHA4M1YzH4xNz5nr9kk2aum",
  "key9": "3NmAKUqAy8mqPD4Y1PGURFu7wniURB9UVG3MMLga39oMTNZgNcEP9EdXxCyjfLYnLSpiUnrgCKJ5qJh5sQuu6P6Q",
  "key10": "2Eygx1Xy5aeHcuu7n6r4b344gmq6GXWnNp8fACx4CPZm9h7nCniAEknabWseAvDH4jSSvRKWzJ5VAPB6qQSH9bot",
  "key11": "3M3dWYAy4CP9VHdCfM3Z589sCbFaqmTjtvnfFP8LbXQkf8XnNtcimEixr6kvE5jbYfG7nEvN6RDmQsvK4hkxhAHJ",
  "key12": "ehmJt5WWXra7d3htmPHaVX7Uvz9TK4snq5Q3TuwuGcPkmtVaiuqUuhuu4EU5BS15N46z22zKd2fK8gpJJxSXVKR",
  "key13": "5gsiNFd4sGKDQyRoeJYDJfEwnmUhNz4y6UGacxmSWNRkuWTnpmBrbq8nsX2Kka3mFD7Chx7oSNnJWSMn4tBDe1MC",
  "key14": "3GyNz6rEpsfdTXq3gxwijYy4tJAVmM2bPK3GdgXLDYNomZPDhwtUariGBsQ2neZVqMRdaXqnrUMVNRrPCQpyoccg",
  "key15": "WoTdNjGnwVUBeSebdVPfueHUMd7jGtSz8eM38EVHjLmiawcgE2eYD8GoADZ3MPixuuALHV5WydGY361sHJJEWMG",
  "key16": "3tURhUiQ4HfNsphCy7F4UpxRr9wehxb57bJRtQrVaePsh4fZd4dzwRnbeeXRnbibcNAhrNoKbEJ2aHNXED5aBfGe",
  "key17": "61wepvT3asYDxMFsA7kWiyigaQ31inDdDXHm5WeRavjUYCrBuuq5ib4R3JwVPgLnkqKeuYTcVpjvGcP6i7KepiUL",
  "key18": "4Nq8pwrQo2cgYALVbqmMojqgNz6HayGoBmFoqFu2fZWWjvXwsVWfcVCRhFgGUWFQSrYQBA4FDLBev1cGKT4DFPtS",
  "key19": "2cQobGFfibF6JYXc5Hw2ZBdYFA3fWovW7fkqVfFp6tQxvjvnWHX9naoVyHU7adNUjK5GhXPRLw2EXjbf54hwaq4s",
  "key20": "4J9XHNJBcaPFg9vFhbh8wZZa6MBNePa29gsEqFa1VxjsL25agxGKbeWKgSKs2xYQn4Z4xU2nLtc6tfYeL4HJ2trA",
  "key21": "2YT5M1day51vrKjSPa6Mug2SfSUaqBeg5VEUAkcDqkR4pj4jgfMnaPRU9ykX3pDdj8cvwCKJhZNYvxTcJFjZXiP2",
  "key22": "EG5hG5TLKesnemTYpdTaUa6FdmzZTv4sU1EZK3Rk3tqMJnthhkdNTAyoFVuh1Vo1G8ird4rLJeyFe7LF2weQpMs",
  "key23": "3G6ophU2ow4kuk3tiMkDQbwueyJSDjt6NzqRZN5CfjR93esrmKPcQmGRx2kvr6MADQGDRUSSMWG3jycsSfSULKHu",
  "key24": "sxrjLaRA3ZB2taE4ytXP4LGNE3eGkupCq3JCmFKTihpbKahnFHx6NwJCX6mBNrz2vpiPTysuByVGc11KCUR2Xw1",
  "key25": "363QcBf4atmkZ9eSGGZ8kfMEoDz7C77nKHFQcNDCzxTTUUWbTbY8xvE8UrDbUXBj2CXhbFUfXZPUvYUatzU6KMdG",
  "key26": "38bpRRNqZNsBZBxB2BYTv8eukuwNicAx9m2ndfpbx8t98Z58CMTwfYqLgbGbA3WwassdAHLyCifxQhFz76yqX2Le",
  "key27": "5RNEz9b5kjBjpypcW87F9DAnjybmc4P8vCr8aCwWxzgtGckRBNfGQ73Tdo6v285PPEaZVy1LxK3Cw67XXuEnoEt6",
  "key28": "3oGccTQD21oZ1FZ7LAC53K4XXNk84FaCKiMhjzM2HPSSETc7UjBdjNjQQYJj9sYisC4kZK5MV7QR1ZVbsYx2AzXB",
  "key29": "PnHQLYhokZzRSoGSj35Pvudu4wQJ2qTvSnKTYgQSRm7miqzoAsLhvLua9MNadnfspFWfxCYo9rughNCFLiJpHKa",
  "key30": "2sTH2qrhus7c3nCaxgA9aGTM8Nbfgq7hVqTPWV6cGuwQVuUwx77wDNCR5giwjXQfuuzvq1p4WqSnTJhnAzL88BDh",
  "key31": "3K4QoPzznHKbo78yVkDyJRoZYp29XpwLBowMe5LrcJkWnGLAonKuR42KgJsaPY6DVs7c4SUePFmuChtccWV1sX5d",
  "key32": "5YQrfZHEdfYnib4EP7FzcMA3QcNZxm8Nuyk7USd8Ato1WNNN7aJE5ztw5LK4gTUmnhYk7K1Fzc6ENNhv5BMb563h",
  "key33": "2pmwKpVEPf4Yewf11Mv4pkAWSEiSfAzZbm2zxcEE7YW4iBr7tgs3yd8SoyfwLFLxm8xrvzqEW53aPMc1wX9TXfb2",
  "key34": "5aEe31UtajvSKqLCWQaGrXLSbLNZNz4jZwKRKwJ5Syq7K2y3jPdU4wKHPX8vDmFDX7Y55BP17HqsVvKD8oTBxf8v",
  "key35": "XuHCe6RLPH8ee71J7RMKHRqqXms6xjWroAZWPS4XFgwNQ8muWGCk2A8wULHAScDJX78rAcRxDd5s4ADvT7wjA68",
  "key36": "4b2TztpxtKFmxx1VdcQHxR9Mhf2mBdM1aQJYHT5JK4XhPKs8GPjgCt7aGsdoKH4xxNrWRUgZoaVsaSTfQmnRzM4w",
  "key37": "3zSMZtsLktyJnPy88UoNwQCZkwSnp7P47j3bX3byp5UqnpGvzzRCPdRHxLJs7TmZpaXkAecTXhcWJ28owiWty1gq",
  "key38": "6uAbBPh4xJ61tBzF7RxfN1fGcqxGZMgkMD2FUUCCzwHhBLnhHZ2dphi6S1kzaVU7bkWpva7WL3HPR1HkpnQzXNn",
  "key39": "3UUFGcygb5fzMkBMEVtfhxtwUvp6zuH9jtxpNVerjqM8cNvpgHNWXQgxKsNMdc7wemb4Fmi4cbuteFiAPMqaATnB",
  "key40": "4pEFFqwhE4PvNecTQUpWMqAGznhqB7fYTdAKprUfnP9t1FCvs2kGxe7dodeGwJQfn8XSbJ3uoUv6j3rWChDjJVjk"
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
