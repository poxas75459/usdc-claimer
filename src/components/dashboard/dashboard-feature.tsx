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
    "4PURJkXm3Q8uLxnNuJ45Zw3MvxdYheft4agtTcq3RjPxfCyzZLz83iiRSN3ACvQ6JDEXRRP4hw9kSEUAjiotjfNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tvYkiqpigwWnAGrRUkFDvkNvpBVTNmVV8xp1TvCXPUdJmBgL2CrHNT3ikCDRbPaXUehXBRYY1LRhhUxkSEZ7neM",
  "key1": "31xLNvDjPYsYtuAaHGBp5TnGPEWE7bAtF9q7tYURsSrWN4g2K7CxZJ3roW3gHTjjHwjNUaNRRYPWUCTMCq1DaYQ8",
  "key2": "D3eBRgoz8E4mRF2XnWjqCttHx1PzXN4eJwL29usA4WvouJgvaFrrHtNEaJESTQ4jyHNoaofhF5pqEfiAHHVKots",
  "key3": "4YEpHfNhLHJvndV49QPiCe7gBXZPKv6C5t94YKCYbnzwq9suWU8b1VvkoKzCw2hJUSWzB41bb6tXaJCmvs9v1hTH",
  "key4": "3BUbYMbrxr2yQMcUJ2BKcg37CeHYkg3zYurBXWX6zmWJe1TaPrpL5wbRExtwPjyxqE7QbMH1sPpuG794EEtQ4xMY",
  "key5": "4v8VXQ38FS2dY1PtG2Xa5UEtFtAwUTZwXjYTVm5htwhTk41jF3xziCc4jrwxjyngCiGnMwasZNA3PwaVzE9pNPWC",
  "key6": "35NmWdKXdxkeqrY3xYBM76iDXeCVhj2bMyqG8dZedKErFwjR5bdgPULqmFZEqCvRtrcrjdwpmQD4B6si73K1w1V3",
  "key7": "5zGCBFV6rgHY7GJunfAAGQ9bUAsJfTQLKihjgYQ8WRJQD2ivQXMBPcZ7oZskRRazL24iXeycfa39LkqhSXjLrP7V",
  "key8": "4vo4cZah8fBx83QmdAeqSWsfy5ajA7XQ8TcLfc4Ys1iNPhKxJJhWseGdS8m8TkvvEGxdYQnVz8vPLH4YMxLjGneU",
  "key9": "234pHi3JFabCRTFgUs8dUcWKfRd8DEmNwzHNCCeeJgHoRzpYa3zxcGiiHmeUqG6to4VdZD329YY6oK5SKfKMiAhi",
  "key10": "3jFfkbVa92GcQ3y5492cBbvawp58t7itHFtKHGjMzQ3CT8CKJ1B9NAtnKNP6MoDbwTn12z11AKK28G91dhaX1pLa",
  "key11": "5dT84AU4YZj9a3oYiSmJRSUZiaBW5QboGd1PqqBxfo7R9WngAaAxBe3Bu6hNdoHiYjMasRW2A6cSvArvmzMTavxa",
  "key12": "5sJtUPi1rhpyUH1zNiuGcnt5L7C6jvkJh7i9ZcoJkMHBquETHUQKdy6nmGXdH2Mgq5pGKTCAbaBvPGdZEsKzpKWE",
  "key13": "5AE1La8dWhz29LAZJJa88vJbhFWwkBMwVLhcCK3hFRGD4Y7XAsW9zdm3KKYGYnhFrmuGfm1NPUqyrTXbzvydqRxf",
  "key14": "Av9XgJ1iEatPLGxpzAb75HvvY3ir9NKB1znxXgSgsmSkQTRPJW7kmTCX2iFh2pirzdii8pHG4N2ZogHJBuz1ute",
  "key15": "3Ur5otH8P6M3S1j8Pu181jNLFi9tRFDGPMrj8TtzCpkAg9FS75ifqMpVktfX3UQFT5kqzpfx3SXD9xVFjYHNJXHx",
  "key16": "3F8bp4zf8YMvMJ9LctvWFFqsVgC9Brzzc8NhHjKarspNvpQX98p7KFUfBcgP5gspgMnTJXHV2WWFWQezDMNSZEdm",
  "key17": "4p7iYwpEPkvA6TNS9hA3SB4oQG8ZhmBMhR1VqvMKu3QrzkJDWRLZynZLRmTUxoamJqnXYRVUqdUs55B9CuTPn5jo",
  "key18": "3erhan33Su2FrE1emfAmhd1ZimgKtYWUG5Mt41ytbHQP1DXPVsJxzEz8BABMaRY2MGekr1EV47X4Asx1HNUujT5w",
  "key19": "5A7v97RVTJ76zacBw4PPTZ26da5M3QyYJa79dgyKjCvMBFFaeU1DE9n8dLCxiPGLYNJHVtdCuwqkw6URnr8EB7kD",
  "key20": "5USY5mPU7iB28QPaFXQUTqS1Y9qHhgFC2emjMATkkWUpcaLdGfNvE5gP5qW6DFKW2Vn4BBfvd3GmY24msBp5zeRa",
  "key21": "5AWQG29VwEZihwdUHPtkQfSQebVWYnaFGVmTkwWvK3BuGTWfYXaFvrj4AfqnM5CvvKrnP7Hm3fPwaBTmk73mAiHn",
  "key22": "2CKavd3YCJL9zRtis8TshTKcj8xaPmiNQ8nNVBmJG9BC7wAaWbTSp9siZjM7LVrqNu5MUiy65K5vfTP6Kjep8e5H",
  "key23": "61zDupCUfVbi2ox6h3ExdLgshnMXFeKdK3Zk8Ki6piGTDxjZRRur7y91jKwF5xeWFyfTebuZBQNZsnzv5XMyHr7u",
  "key24": "2oTRpXhhpbtvgAMqADXGnr5aJm8qiBbD2idnLtyhSAJJzTczP4WiZMqQBDYk2huMraxhVnCwcufy6svg14ra3zfW",
  "key25": "2RxHJC6A629UrtZN4pQREcqbHDgGRNmDTY7nkDw9YiGGci8qFuHKuCewS6vSWSn69Y9zYWuD39RYQYsoAaxXBaRk",
  "key26": "2hxe3jHg1wAY8httEUBhmZyhhwuoMfha4LL5xSrERobtyiEAXqqsa8nT9moVpXF2r1ED5Rf3Rb2s8fkmjUgYLBUF",
  "key27": "5dtV1CtZ6cxCqNBtDTW12jA6LpbcMNnkLbc7LfKmrvijg1Gq4BYCRYQyoZ78zL1x79LM3HuJU3wG1ahDG8wAJcVx",
  "key28": "3mP6RYgMHMo7VvKpfLbBhgfa9Zoh9kg4iZdxthvGgVt7gbkBok6m5ceQeFrw5zD327uH8d5C3RF9u529JGj6akr8",
  "key29": "24KwWhCNXCYetNeUMTi3tmy8cZHZ6sLwUiQS21FAGQpLP8DiaiQNYzQ4LQpis5GFa675jTqGTxuN7sjHNJPvLnVS",
  "key30": "2tznJCv5nQbVUEWbRcvsF2i7UAfwgcjtN7jLPqHk7nrmJZJtHmoQXZGVuTdZcj2PccSt5s6DvBDzahFpqVSQoQWU",
  "key31": "63Gt77L3ksRjYWdVsktjzUwgCLsW99qABkLGL9pRJYSg5KpX2u4rARNLfjAJLswspPwc2rn1rKgQv7GeFsnDSWxf",
  "key32": "4ztx84xVbcWXYTcqykbLg5f1hXj6jWDzLKFPuQ1bNCQiiEXJkvtKA38SA6AJiGsSKWwNMZCVaqEP4J5TL16wKuU2",
  "key33": "5QGBJCLbn8hPMMRbHGEyTgLWP2SGkRg6ufpmWHYjJfaqKgxVS3vBUssWth6BXAiGHFh4Tt5AbfB7mN4zYXy3Ghja",
  "key34": "2CW69Ji2Vbi6798uRbfYsdRP7mhyDqCeyRE3GvYkY4WT1CKPTTtHHge8Sv8wm7BNCZBk7beAR9YAE6j5SZDoXJMp",
  "key35": "2mZZD1fpxU4RtkdT1k6VDJ9pvvgXNnoLDJbFcVMvgqojVNr1L8s998oX4PhqMPG8RxViybqbsSxD8ue18MWAepDw",
  "key36": "5vX9qtSCP5wraRFfGaNUj7o68RfFQc5ziLcGZTRGuDxhvv7vpHyeaThWE9Xak7dCxqKaXfJmLVq1Qn7Z1J8ZkZF4",
  "key37": "5rmUUwdFKoC242p4WHqSw5DHtUvcp7S2AmmyHy8CQn3VtX21SbFZHFVSdyyNQHS49v7seBUvKDzpFvQQQmnAjEky",
  "key38": "4gXMMMrfmrop3My1SaC9PMpsS1f2DSi3oYE1n5XG922hLgyozfYsfpqyMtSj8poWMXkeS3uhkcmvic48Mkbj786R",
  "key39": "65NYCig2uD7FKDP9f9TFu1XzPXU58WCRXt3SfGTFCiwb3VfF45X2YUGDEvrWnXDv7TKBMxRd6rAbCu62Y3cwmgF6",
  "key40": "2QrTf2mErWPJ2q3GFxp4NKWhCDCAVSoXkRuBp15nQkcriBo1ue2gH47JgPgeDJEsRfwHGofQ11D7qYnuXEZUwJCG",
  "key41": "4BJcdTXXR1ayEjgHdRNfgxWVMzvJkVSdXnR6jL8R7rrKm9LUedL8oy2zpsc6X6rdtrR7ERMY4fcwtzq2NZqGHZYP",
  "key42": "5tGCor76boiAMRA4N5GNKptnCw49XvjemkoG4KgXaBnNX9KJaEvkdBaqjazD3dja9DPJSKktUxucz14GPS7Ap46k",
  "key43": "4ihUTAHe6KeVcTnjjwASfy7pFtL2wq24Ytv3ogAK2YZCVvmUAgoADjo17wRxWWiVdHfx6J5tYBZZ4KHwnfWz621L",
  "key44": "2h9No9f3HnADVAYWma3ecR5rwW5TAqp4U3BobZfuDUpb8hDK6rzZWYmsjJdtTopFUZvECNFXM8RCdNWzKyVtvkAy"
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
