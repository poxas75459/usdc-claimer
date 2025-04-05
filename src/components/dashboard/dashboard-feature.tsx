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
    "27V7gSK2UbY8QeKY2pDgQrmpTuc2GoRWRpNqrL5YCy92rcf5hGDeugxSPSS1CSz58wod2hD5bp7WMXx3hFd63d8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EnRY5gTc3jmfYmQwxGHknRpbbt1eMhbuHvVJW5D8QAcaUX6EFAQtSJNeLWiVUx9kLUNQRntz66uXkV8gq6xUQW3",
  "key1": "3ETKhf8K8HYxWTB4w3F69NZ3bd3CTagTiJvsXp89BNqi1CjipwBecZ39P4gVDtLpYCFwqT8apT4TZA8psf6fMGie",
  "key2": "4Ziw2mhrwH4VrhH9rtSEkPrc4f6Mm1yscD2uKrqRrHY9eNoehoBGBsUqxwEBcqpAtnTx3R6h8JA7mSnjWWB8bqHZ",
  "key3": "4hMKuA11QidNSpg6kYRR8jikudFGzr9MEGe6Rm6NYsSP76m63qmanSpnuv74a9qznmfQGoPXri5o2G5sywm8PyNQ",
  "key4": "A887WJ5QbaYGeG8JQYT7JKs7Ej1WCpjWbjNScbD16tqQo412mQ9yZHoPjkHyZy1wDsFFtm6WTSZRDZ3NLdtjdxF",
  "key5": "5HzruMKVLxfWHZQKZqZz4a3c2uz2vLX49q2UysBuSuUbNYQy2dTAwTovKKQ9EW3S4Yb3aepiJZJpoJcTPCiN8icw",
  "key6": "5im1Hph5GYam6pRxNECL15aj6GcDDsMouiSHTf1oomJ2RrvfLuNQzoRWCL2saGoCX2bkLAmF8tPigH5Naz3235uR",
  "key7": "2fTCBegRF3nK7S2bCpwtMKuxSj2fum5Q4bKCox6Bi9Se4DJj92ypqDFcRE6CcL1VtUPEY9m1xeV4NU98pRwjYpvB",
  "key8": "WcoT6uAnaPcCvyGWPWffiMhsaH6QsfB77RQFEvP8acJjpoCkK4yyBrtBQZBXBDCEJ6bLCZdBJQWtuf13YtPQgDF",
  "key9": "3jtiuBCcsd62QieA3qQx5Lxy7WpZHALcZ5nhDi9kTCnWrbq2SKBPTspdwzJVGKvTpUTRVExoh1iN3s6omhXs9NRx",
  "key10": "4kjS4WpLBzX8B3bypzXbQPysn69ChfCKVm2yvrCBii3DofDa7wm61nBLjt1zfuPeVKAvNqdmuPeANmCpuMu41h2e",
  "key11": "4xunjCmSvfhhoHGtA6qeP4PhUtQwCF4KTFyPeSdSaacvyGUs1ZMscTFeR5WbKcXHbA9eaoLoG65TtLEEitxqqvw5",
  "key12": "4QPUkecUuqH2ct4hRDHyMS6hjdQ2P2vVsmuP7SkD74wHVbTZ1vZBv7W527hkHkfb6UV56muEGoHsjw2AzpfXN5dq",
  "key13": "3TTab26axdRtogT9tkhj9ybUi2Emg4qdYSqipabLPp9Y9ofqosVMxCLm8GpcKgeYxT1WeC47AhWZzKfV4xg811jx",
  "key14": "4boPv3unYgxjRjXT3zi434yKFnqGHMpBcvW5zPQBCQJ83LZyNSsrBbR3CDuYM77g7zE63Dx6M6Dr6nou96jHdVQe",
  "key15": "65VRBMguheLZ8oht5SQC1RebvdpNfrrK7y7zmEsSQ6GTHqDcnKXXacqUjanmAkzuZXMvNPPbkJQgBGAtNVZ29zuY",
  "key16": "3qYV6G5cGn5xFuuSKA4Hrc6QebwskJNdBEHtnx7Q1dyoZpvPL7JuiSNdT23DHDifBCrWGN9Dua1uoBd2frZngrGP",
  "key17": "2sg4FZtPKFPELUjkNgYeGqVYp2ouLsNKWyALjz6bsFwb3afdkBaXwcjdhbEf8ekCWkMVauzbjzk6KfyugArzWRQd",
  "key18": "4nna6y6Hf3LgE429mCzjvhinVL6fcu7sKd87jBBqFmQXeLy3BuYeQ5H9t5bXJxsENKPvAGyt7yhvZoogSMJ8N4Ro",
  "key19": "53Z3KrdvtTScMq3zUE8sTJGStUVhFkcaF3kBoBQY8GtC9to5s1dNAF46WXP2hRYAwpJMkRbjx1Uud3D3ViGgTazm",
  "key20": "235nJy9CadZDFSRWWbQiHXumUdYhpjUHea7qSgpvY8sfirUrJeEf8v5neRYTaxmDK1Y69tUxMwJf4r5BWeHR8bkq",
  "key21": "po3XEQcuL7fXSGAAXC4QK48TFwrHLrM77wY3tkHV3jfaxZw2gsJbHLjzjEPRYuWmGPm27Z5iHewzTo5wzgBqCCs",
  "key22": "4nubk6Cz3L3RNcqxyJy7BEhyjXFPoajyQfbVU6bTNugA7V62qaw1bmjmYyfj8hzHAtXknAybUbWAoHWjwqCoRBG6",
  "key23": "5anp6KM2T8WDt66dWQmbxSmeczPrGkhuoa6pp3HUW8kW8y3GoYzrDw8EWbEJC2mVwAui72eDdrePbSpEyEEHSGbX",
  "key24": "29UtUnErkqhaCjPL8dTASChLq3EHrfZPBGkYjQtccBuybdiVA3taTbpZVwW3ws2v1cKejM6uFCyFcwW42gygL1NA",
  "key25": "5AafFR2EfRwXVWgzgCC3pJ99v19efn4GWX5Lr4WKy71Ys3xe3LwgaBSHMXMELqssxiZBnXCHmjM4isnDFmLFR1QS",
  "key26": "ZmdtVkZvpQTgMYHX9Yx5xfmet5pnTvhv1LV8zijAYEQ3Qm8caejWVS1ny7fYmbZw1fPT69iZCyEQQBfi8cehqqQ",
  "key27": "63XJw3owsYVdJKW88QjSvXpJqcnXKRjy7uekdDcrtk5Hio7Ryd9bW3yKQGUzJZ8YXCp7CGjPeHCuS44szqMj6bKC",
  "key28": "5iwKARiHdpkzGLPywE3pmr5xot6FMuNmyp7fRrjyj56khVNSqTNcSjgXEefbRiP2GebqLMoK3jYaSEmV4USeA4Rx",
  "key29": "3CCG7JN2z3BSS81vi58xuTPhMexCEwTQkF4Mwbu3T323kyvrLD8h8Gqn6J5b5o1hXoMF33NAX8oqns74zsCZajN2",
  "key30": "5ofidzeXuGXFU5aiEUkxrgfxrpddHgtprkM6sF6TU1ctEqAQg89rRjkzVLxPRiHNetUppKcfFhaurr9QitqDX69H",
  "key31": "ykL11B1EsuMqEv7K7561H2euYj9twU7ZWNVYo2EwE8EnVeCniWjBXNk8qLgKcyBmjhfDFH71mYxpyrmV3pSQRgi",
  "key32": "2PNTVr5c3XYUak4marZe4jPLVpmyMxN4hpf4yMe1oSgs9DxgGqnidu8TghPkd5o4Vm15fHGrpifcw6s499qm3RsF",
  "key33": "3kpyUjPUg8uYQpbE5U4WyVpsDnehVhFkm3arDNyjCfJewEtQV3uRL2tyhyHLCEfUUfVyyyEmBD8QmmzSQK4jzCCL",
  "key34": "4ocDmsdAPFMPkegqoUyX3bGn7XaKjRQjKpr6tWvqj5LUzqAunmgoxZ5gM7HiCAxZPN6uPqfeobq89e287HTUvQUK",
  "key35": "2QeEGCZe93h9RG9Fz2njCBfSKxT6xPMERmdxAWNDM4dmFSfSYQiqmEi3B7e4VV5jZndg6jeg4PkQfaHrPVf5tMTg",
  "key36": "v9tW8vvyPHBWEedekWri78iNKq3V5Z6p27JqinKeXALQ3kXwaBGhU9dquJi4jFQjFiz3Y3ADosGPPLwU9CHkJ3f"
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
