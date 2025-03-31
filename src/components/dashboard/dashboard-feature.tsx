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
    "3cuwapmkWshRe38hxCqqoSUV5gmqYoFjDKd2XFGt3325LbCkh9cTbJccJGrfUG4EXkRhHvpMhgrWLjq7yYzpKnuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xtUcEpmGBHdyqrxLrCRYKuPMWUup49SFpjxviVaAY3HxPQCzaPC8QLii4HQbdzZzjnAqqMYpnr4PMLPqvYLWV7e",
  "key1": "5rP2QRx4RYUcfmFADNnzrkzcKE5qN8wXt4QCFLwtPoMLE4Uwj2XfY3z1UebybznLVaBxyUPJ56JtTg1LZyPA2nNi",
  "key2": "4zoXzK6zQaiWd9TcVtNqB1JQiYEqGNAkuVkpE7AiwhMNT78HjSrBy8hmnNphAREwwUhCfS818GqXiGbfFAKotMMW",
  "key3": "2iwJCuPK63bW7xV4p4C5rVSTSeKJutV4E8ZNWDZcE9hFBJTAoiaNX7VREbiX6DUTVSjqdP7u3eZtS932giWcih7M",
  "key4": "36cPYgUsP9yWisZoTj8e4SPs1cyJY6KYyWKSGjpsjxZvg7o4dT54BZhwaLVC2HNANBZd8dcyEJdvYPZ1XG4pwBPD",
  "key5": "VUPwjMYAmBakXECrVT3fvZyoU9pqfSPUubQA7hoyFREhLJ4hrcGnnHcKvM7LcaxmiaarTDC48RAYaVb2nKry78C",
  "key6": "3BWwAV98AUbjmewNqGU1Pasi5JJ8Hry1SUCUTa4mhbJDFwmd3vn1UMmBqsuAZHcB2c2KyaAZCZRUM81eW6EQd9AU",
  "key7": "285M2AZ8DUbSkLRFQZiEFJiEDJ5Z6U15FoVy8st6vek4Pt56DGxjmwTyHSikoLMtT791j5KEZMDXJzESBzb92xpy",
  "key8": "2XVm7PJXffCxRVJYD8UkWXHdncB5Um3MrmPnRFcpMA7oGp7g4P35GcaqU8vsdzexctm8JypWQeizf64d5nLskRsL",
  "key9": "4eixsdFeH77xZy8eg9ovGjhtyAsgnbPHb5KLZGEZVATzfhycjdywfQ5pC1jpx2HyRNY2rvLCRtwwFm1hcYLxKXG7",
  "key10": "jDkgqEH1LXjvFdnCusNZ2nd1CgysdALHbBBYSDEUtjQhLEekwvMG64RgciF6q3Kb4gbutUts6K8dWCASEDD9wNW",
  "key11": "yV7X3PfWABNRLdMLY67JFoXJqT6ZN4rDP5N1Bvh8ZHTZSji1TYvv4dQLAVoXMZc71BCzRDroXnz9Tqauns3gcJG",
  "key12": "4BgkMvgqxAhQCrqwSHj3e6nqiHXGnj3a79xaE1njbBG5SCsz3LNThbruJw4rdL2n3pcr7A6jpcjWQthrxzbAk1nG",
  "key13": "5qJrFZqSPfaEcTitEWCYqixMg7LVx1d3CM1LMicwBWWuZbuVbGsbTu7Sz8ei5vzhM52bS9umWp2cNYgLLJuvXs6v",
  "key14": "5A6Rn984d2e4jbMLs6mCanEfeVJtZWG8guYQCop1B2a1nmcCkSt77VRNXJ5XT37zHRk41myygPxp9hfdj89tqi8q",
  "key15": "4riMy3t1LbghaVVYEZQurJnu6qmuJnN2UxKvNwNsfGhCzrBc7CuPbnXCES4fFHeqQXxZutAPKx9QNhCqqitvDS1n",
  "key16": "udA7z7132HJRucnmYRBfEwfdSTtW9DEFvFHBYtGFNtHz6REqu79GvgT8Je9mnmnxpuY9cH1YVqisu3RLDg9iS2H",
  "key17": "2nWKsKiM9XhSN6R9ZzaNeWg3eonK5RPYxw52QjSiF4BBvPpaDC6gcnZLVedFyhZEAUgaYnqii3cKfjGmK87xQLJF",
  "key18": "WYBS87kKzaegy5dEswDFabatx67ZBi2aAwjTXUD8S7WzWsvGCiawGCyd7BHFtWizKiSoJ7M9AbArmaeTtTE1Rgn",
  "key19": "2Td6mXhLXjc9ho4qmqwQkBCwFgcFsC6WSsU5wPY6mh2ab4znrAHZRMfwi7javeba6k6RkF9YYN9JqvbqUd1XTPp4",
  "key20": "48Z2SxUSrsXjTb25wq8tNsiUMVFHLYkvFSXVNwq31sANuB7mKM4Pz7LRFLDgUwkgyuhvvPBe3mkxyQG2vG3myWc2",
  "key21": "2ZubKZ2PPT7jBXY88JjoATg82fyTJ2r8uv7uXLUoAwJrVdyurD76hVXdAnZDPNNsEzFjdsPrmg4kVdF5o5t7CC3s",
  "key22": "3xX2dFS4VAccmhSFd1d8D98vfbkU3Dkb5ynyQNg5e3BcMCjDUMi4Q5ws95CTQpAivePJN9HaBFYctcB9dGGU4ER3",
  "key23": "2eBgL5LREQ9M5wisPV2mjiexcXpaXdcb12MWEKEe9z5w9KK6t6XFcRG9A9t1RW8jcM2LwP1o83WdaPMNWXLhDXmH",
  "key24": "3j9bvcnPxUt3wpC8wpMBtzne76zVSfE7jVTLAeztsE4KMqBSNHDQyN2MoD7ppBRisqpG95dPvrSWQEV838J8cE5c",
  "key25": "543wdfjZjiRRxd7y7zum4gA47nok6vtM3TbgjcQPF2NjxdDZ86ecfGpPw3kXBdtQ4pmwE5pgKWcPYih7FFubxV8U",
  "key26": "2K162eMZECHnfMpTL2XHg6fu1mpB3vvNjyte9bKW14XLvDr6df8sLEBasB59zgFJxFpox9EPSNWccNa8Ww8dnqpR",
  "key27": "8YRB4UJuNbt3KSMG52uDmcAYVDnmEBg5iau9AtbhnBNpMAr7JkTFCqYWuygXRdkYfJC3THQWxceU6pucXxjKfCW",
  "key28": "wq3D3ztKLjHbVvmjX3BdKYF4BERxJiMvzSXQpei5N5a85p3bHnJZ1Ek4PJXRVy4Znj7AYqM6cmSe6Tpx3vBKiwt",
  "key29": "4p3Az9iDkFMzsGaLHax3AsAs92Zt7osri9ksLZEcf54HePNGeAdXFGDLgN8LYn6C2sawnbqFsc16rwT1N41Wkvnd",
  "key30": "2xx1VD63fvUtQtcxGqMYFDDbd5EuhXPR4TM81Sr83o7y56jcTfmwxZpUQnvmoUxLzRGNmbSY4vWCkAJJmnpBPjgW",
  "key31": "3KkRhsGD2dAAKcKoTTetLk7D6sy5YLsrRgqzdrhL2GM9wZejiEKLnxzy6Kg1wWhDkRtSmEXGcmZ1wPowYpm8Q5Dw",
  "key32": "3HREA49WtTemFKC63w6VHrD97JsbFvfYDHxdwvHZGVuTrN3HYy4Y4Mr63bdhpeKoebS6Rnd5PWkaSTkrL226dhZb",
  "key33": "3UCesUBSCSB297ZAiu5qYtpUV8twyJvK4sgfHbAinE3acLaJdWQ6JWgGDd5KMMMzaxXiMoDQJsW3Qu12WTtrwhzN",
  "key34": "2bhw4h2Xq9UdeEdz9NYtnHeB1kyt1iaegjTd3g6NnbSx44J6Wq5EQMEnm6Rn6t3gdEU5Gz1AdjdCkz2gf8QpTy1m",
  "key35": "C3GxBfDqfHqurcne8ybDyFndYuFXRL98c76bU1Ar4BnVJ2s7CK8QM6wQ7xibGF61MDrvn8LpoRCNJ5LCjuC3hp2",
  "key36": "3PygUtsdreFAtEBZMWYnPQGd5hBhZicb9WCaS943vvEq9iGC8xqyCySJMYMzQ8RWBosCxctpQtCuNZL4Qcfi4oLJ",
  "key37": "2NXsr1Uo7UWJ13qSzvzumFsvytfbUmoCmr3UNKmwqZ8zgTNaumUP9rf2GAizRKgXcBU98N6kfbJdSnJEnyEVJQGi",
  "key38": "3VodhiEWt13dJRqBfkkdHecgbtvyXXtieYv3QYaUxeoTEGSARkDzUFsmjkdXggKbbwg12wF9gMQT9vQyEqEgUQXK",
  "key39": "5fJMNJ6YYy8Hq5W1ydb11nod9Z8tGHnArqXWa2aV5PWwatFqnUyL9QrJXt11pzyYoV7AMv2UfRatPCEzfp4M3LSk",
  "key40": "4Y7xm8uavqjVGTR4nAiUVNjvjy7dMR11jgbp1UrcLisNcw7Pnijx4qZnj9EBVdes1YqSoFcxMAUdi8Smf2K1vvgy",
  "key41": "krpgPQ9ggjrZrLYjosd5YUG2JttFrW1VHsK8Wn8rNVws22ryKVQKFT9Vyya7iYzjMWovD9qjtvWp37jXMaj8xEu",
  "key42": "3AzW2W8pvPja6MykamwpJ89aR4JjAhHDZJURWX8nucMHmRQJjdsqEitMCUhNtxqffBX3wk2K7d5NNWJ6kFgpGoWk",
  "key43": "Z8MtEzzwzwmThqUnfrdj4A2JEDsZXXvpieG2vKDK3AeSzfPUhZoZm44rXxmKhctGEYJkKhfkX7X4YamqBCZ9HAL",
  "key44": "5RfjJsRQyffHMZanCADTh4VJBuUUaH4B1jJsszJxBKiM5FfGqHJzPczgWe89eWMTZcbAF8uCRg9kcXJXu4Lc3Cyz",
  "key45": "3ntzJ3huifrk1LqXjYCDsCKs9NUcT8dDZriFAyC9qxzsJzZg2kKqgS2ihsVxmsW43HEy7H8PnygS19NaHupU8b64",
  "key46": "5MdY7tsGaCZwMJirKfA1q4sfj2AtK9n6WdQvjQ4dj8NdRD5QA7KgQb47iNoLppEtR3hinSXHv2eXW7QoGbmAVNJ8",
  "key47": "48YfNPyrY1RLPEaxA1NKF7fmk88NpnYVe22LLyzZ6Yf6BJ5WtULB4zP3VKpAVtmk3M8FjhptZnvUQyZdQjid1NzA",
  "key48": "2pHn32fMYXdvyACTfUCBbH3zVFWJvbnM4XeiDgKAEUxWwDp7DDHWB7u6rdqfohJkFQoo9rFra3ABypmtq87a9tR7"
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
