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
    "4mT7MBvxM3oA5VnasoXQcz2ojr1sgrbbKD15ngbiHNXvZmY7RgTyTFpQ31VZ6zy75Fy66cJsZpQFCh3eDG7sjWj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3djWzxZfoxvKpZEQwmHxq3uvRFuaBk4djcu8UDLQdNt8eNKcoHq3rrgHrDWBHonpnJybnTcrvsAm5smHaUSHw5cN",
  "key1": "PkLrsHp5vRfoAypnWvRf9KtiNmC1FJt5yMcHSkkLTo8tCjbxxVV58VdWfrwqjxbym7F8mBdJxUFTpFFc3ChqwTg",
  "key2": "4LMQSprKXhW6JAEdpGNFd8eKC7wvXefpKB7RKVaczUWA2K5Vt619YGMh8d1eWoNrAqQ6zKyHbg9wJCoyHUKHh9y",
  "key3": "5aQ1u1jFaFieUJotVzWLrFJZo8qpXsw9wXBapGUpSnmm9MwRy7awML35FY8VZFVS3hsMUPU5TAPN71GY4n9LBHB1",
  "key4": "5zkzo3FJ8zM1S4y3bq2JN1zXEg3z2NgL5Xx87S1GmAztBKVjj8mZUn3PerubDGxFSkUvrkQAa6Jcyqda6CH8VdEw",
  "key5": "97rWGR9EkX5A2NSAt9fm99MUSy2ZPnxLgaqhicW1tJ7Yu87Hm9dwvLQ4zor3hvASccE8aXp2yKojreA9kecAGqu",
  "key6": "2nvjkzkbQoHQe9XS78EVeHusRM2fTWkQgdGHHhZgkwtReGnopUeUXXMM9r9prhfvGAj9kV91VVRRWVR5vLuDDZFu",
  "key7": "3unpTZsgE3BG8DrCo7VVKKVx9Sevt8LPW5uKQPJqPkniCZ6oMQLcFr7mPJf3AV5AyR4yNkCwGnu5gQFbbjKiyu5P",
  "key8": "3aPYahBTwFcuDodjTVewAA79GAXQuUg2RLXZXCmGDZ9fzLweRwfB66VzypFJ8WQPrdDKdKT1zJ6iFLwjkjSus1dU",
  "key9": "4NY8SgREZZD8thiJ8VKAGT3pZtbcp1PCCQFaiGm9VSfJfdiPUh45EQDyJi9WsQkfs8qa2di3Ptadxx173YgfviPg",
  "key10": "ksU8RUQ9FiK287gVEE3ZqFuxGKmjfVnis8otqT8o7Zzgrp5dmCC2Jarkh2qkWHPNuFiejmPDRwRmVsFJansWS32",
  "key11": "2CcKkcJ9FAxbnUvoBjGm2NFLD99KhQY1Bs1Ve48yx7erSePBsfrGRGTEkgPgcwBKS45rLnab24Q4DB33DascRhmG",
  "key12": "5kfYf6MGDHBv3HnKBSp9DTV2GZxas5v1pfYGL2FLi9iRWg4wYiWeLZTSQcL7s1SD1xzgFpJ56AHFarxmTFgyWXQB",
  "key13": "4Vd4j2kLYqFXFiJt1kzCMsFAeLyc4Rfx7ZL2vYM26HZZs2rBv6DAUpKrSzj7UBLhzV3uETNiWEgrmhgn4RNF4aQS",
  "key14": "5FKHzxkG876pQortbciGXxA36DYGvWKZjDU5H93A7FR7P8bFX765LyJzPzs2xSpzj2DPS4adqyZEocrfcFNSnnNL",
  "key15": "5kcN6cYQCrSP1YWquXgyTJReA96exA7FBgrdw6XtLZMBAoMTqEWy37dXQkdBizuF8ZzwzKb28coY9D55GuTieMaW",
  "key16": "42kjvjtt67xWVCoauBBXFqFG1nVRxnak9TChQRQU8NLKqPdvySAtwtmBUCbCys6T5J6TYXgd7v1FknmWMKoMoJ6W",
  "key17": "41eCbodHNtoEJRi9ELq3HaRH2AD25YJw5zDN4PHMuz5vzhdTHbryMf29nu4DER9AUWHcGwwDx2pWf1NrKeWsqSe1",
  "key18": "5m1K2huVV3KqbE8mVS9pZotGuhemG74H3FEvrnUx9yAfNHxqz1qFnkWZpEzTB3KTNajXrf63p3pYYmo5xMHdvM7R",
  "key19": "4NY1UbvKBmxBKJWJoN9MYEvTZLJH7BXApCwM7kYHzuXtcsWJGVCXYtkFsSV9T7bES5cF7Ug96rTkw4ZnmJ4nnyDc",
  "key20": "3xVKvKVMBjsmqXHU3tVikgJf4gkkfhXApwUE2vv1Uh6jvnp7fYG2a3UPv1xC13qBtkPzQ4kcLMKwMRi4xFt8yY8p",
  "key21": "5NGJKCiPYtop7cedq1chSxSikWt2pvvuWvj93wRqtcHNuZ1WyH1gFzUh4MaVX7Et26MSfBNhfajg8oePy6HiHPRY",
  "key22": "2FYB7sCGgYh2zsv3tycetzyJgsXVrVS6FP1QS23Gh79zYR12p4L4uvMEHWPN1ySx2jXTwCjhp9qpkMAsXGwonrJY",
  "key23": "hjGoQapeYpgwQMzuz6EiRxkbiC1BaQDJUNH2VZnKAr6ZNxydShCcZ1bYN8963JaprMfSKLpQZMbT5hqqQkEX4oC",
  "key24": "4UTE3BKMpESxEA8vwHhb6sWuf6CK8C95yvx154c5RVre3GfLkUQmWYUTrcU7bLqNsBfUiheiaaKowNzkmBYwqnKP",
  "key25": "5G4dp2n3BitnBwb6QmQMQES5tUn8jBeMx4GJzTo6UewjydLrr9wTYCBoDC6uLScjwrX4CbnchGD6Yjn8boudXvc9",
  "key26": "3WUftzYTqD3qvrydQ1Ufv8ZARoo3JLVe4G5cVUoSo5AZB6SMg6oPt9xNFZEYFuo9xvmgZM6axJQyb1Z1QQKqxbWX",
  "key27": "5Lhzu9BBkuicBonBUG8FWQiHDviun6A7iWtBWZJR2bTXf2R39UjKWW3MvVHoi7QGibDqyKEeCAPuXNNoXT1Du8ss",
  "key28": "2aEGcp1mbmprxAqc27nn4G3JugkNUa4caKz9LFdcg7UiJVtXUWTDHHbWCboznXcZcAs6NuT2RFnMRYURz6XjhvcA",
  "key29": "5SsWXxbBu6pjnMvmQjdDqLA1dqPcEe1oq4GP8hZjpouKx8yC6wGWGiura46qmUSYaQmSNFe6PD5YUhCXFGsQ2y8S",
  "key30": "2C4YU3rXFwud6z7SitMd5EGHiUFCrGoqMsnxygUG9FgwDdDiCyqUokCiy7VhNi9T8Gz3yMU9hz1KwpfXHDrjfwGa",
  "key31": "kvz8FPfzufpb6bESoJ81qpoDyyLMhPXCXLKJHkLXxVcfvnaeiiD42ukCfc3wuD3BtycV6oWJtH2m8J31qPy4zfa",
  "key32": "67JVumUYuSFssihNCZmQFxsuYNQUQjZbd62fiQ21b5x5aGkACUemgrYoUucxdCG4BLFv5oBrEKrhF874RrhdTJqW",
  "key33": "3SfXLhxrFWAUqi7aVxRm6WHARFBpcqef2jwXdeLYTJWUxFrZp4x48F5e9aTm4WMT6GdwNsWrYewThxbHT92h2oD7",
  "key34": "5EPYMKruU5S4YV7aHdZUxADdA7uRsbcTg1iuvcUyDvsipkA5ieJ1VQkTeDgTcAradrF4aAmdjKzA5T9idG9FLRGH",
  "key35": "2MAdKBxk9Nou7Fe3vyZrG7dGVuH9KoU4o31wMSxvmdWHJZCA3qkBNbbhzA8q3GQTjk65X3jTMHxkzZ4EFjFQyu8W",
  "key36": "5PruRDmdwBoC969g5ZwBdnWCQoxwyg53piCngXAkQ2uUik1HzZ1TEBeW4uSbdgQbyE5jXZG52eZb1JhmhbqsfQhC",
  "key37": "2CVzwdGdjVXXGYmyLvRrvbsaotNxKSsRmwYvxD9TjJXmjdZF1zEdoVN8RMi8YrST4akfQJD3SBrrgU5JDnVeyiLi",
  "key38": "7iv31MSNz84h2RwVEKAjJ69HtkmX43DsCQg7nxsVDExeSLSBXSpoP7oEPoMDmaZLvGUQm9ca9fBMkc19BX6Yxsm",
  "key39": "KoiDkGCnUawwpjU2Syr2L7jGm6MySstV8H4Kc5JaMA4mKDkBAi14UL5zk9v2Jw6jFjcCd9EitGfFFWRc8DFzRsh",
  "key40": "53fVYNXsSGNAmdfHUYe7UoRfx3ThzqqL3q4G2GLSMpwUqUPFVDScXhLj7sRQVYHFKfcjSZgoZWNfr6NKRhzKXGwu",
  "key41": "3aCX9ZfLbPgzRVwDfR3aBx7Nq2fEhZZQUFF89EcvnyZoUy3g7Kp3vWdMxYAD6uD45qdyqA85KgQ5YAQyacNKzY87",
  "key42": "iaMw7TLsSSqPg8uKFrm1LNoE72Dy8pDh79q3UeYSSikifHeCTBeRKK3BHhQ6k9h9UpzzsFRmHNxypGqU6oL9eH7",
  "key43": "63a5eyaKv4QpHcy49NN27nTQhJUUbw16JfLhL2AK2hvjpt7kyfgrjRJ4n9ir1NzrtZReYcmUcEuQg85dENEp7TLc",
  "key44": "42bVu6nKyRu5fWWmqJGiEXzWeE6BUHdL48Vw98NNjWmpPna2a3sRFKhgLMPsULUUUE1J9F2iA6AQwNC1VjYQvLBN",
  "key45": "4YXGr19KwXQdVeQZbR2NRnuQBqFQvLEWn9YqX9LYhHw2T2U9zAE9Cjw3h8LV4CJM4KgCX24K6ryWATji3eLutF6c",
  "key46": "Nr82cxsDgsQV9RNXFHHRz6ZvsCBcSCrBY1o33SwQvEAyPRBeudYnWbBQ6Bv8PzuSnrwFgeoVfd5rfP2A9mEDAAo",
  "key47": "5ngnsLtdwGFwH8EgdsLWGXwn9VckxkzzuhsGGAq22Pvt2kduxexETafoZhtn5GbaPjq5deBjgmMK9uMARgncp71v",
  "key48": "5ta2dKRr2o37gMa4ZsPnsbcsYQrTAUp1PA3EQBmfDugHgbH9e7Q7xWCSFj3DwLg557sMjhHBDFfHz6iaszqcRKFp"
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
