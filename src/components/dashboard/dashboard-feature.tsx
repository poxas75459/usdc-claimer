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
    "433gDX3nmTvg9tY9nvyAUacKmcdTM4qR2VK6C2MWJVT2aPN52Mak5b7dFcQD8t6S2cPTGT3oWwK2i9wnVfkmupfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28rK5sbgeBZbL9WJwKTAPcYHQVEZseAGa8wVVWdjVVwLCMWefhbKXro8rrQDAiviWhVC2wTvVpfrTqxe32o9NxsU",
  "key1": "4KkYpMp4SDNA9BsEWJ4D8pkdpVMGmbiP6hBuBWJB8pHZYmtCQXUPDJkJr6hLxWscHgn7pMP3PJ2CbuSuL5dw4LWZ",
  "key2": "5MCXqMZzRRtWLkhfkbi4gcyso5STmh9K8xnsSZYX2c6MCMoauDMN2DPozeY7ib1uFhRDS1gt1zBvvFk7X4JfMsqT",
  "key3": "5rxdT48ygm6sDrBCJXXxKhZM5UJeqJs9JBjwbzFmu2tzrJp4jHmqkksqpmom6KiNdNt7zYjPJKiGD4ngWP2ZXFM5",
  "key4": "569C84RfJDUqNtYKCeJgxiVVJHnjtBFxtFrr74nJwFfdA2qdSBgPWbRQ5jKEWHbrh2Yh91ph6cWzin93dsLMx27h",
  "key5": "2eX7Lhtz9p4ztGNGTgfXrukmzaDVTjzxpMkWFZ9C471H67sZtQzWvfxmfAMX1tpj5WYeL1qbjCjY6S7yDHX5ogWT",
  "key6": "3RgWzvdoGi32cs5beFCzxvvLSJj3rUqJFxPAczA7tcjKCeggX9xu2KD2xnWJMGKXV3Bcix8VED2eKTSE6CjDF3xh",
  "key7": "4i36SPd2B3BM9hcM9wLtfTqdPrf2Ho1BYkGtXbRidtdgBiiPpKMV9pCWavkYGTVhFpKYYzwJwgWhcRohXKSwQiUu",
  "key8": "oUkqhUUbEzsjzYUfXXKqb2DJVMdSJPNPU5KxBc2VUXEmiEHZdiEX72VrFqrQELu2jRrcA3Vr4Jkga4EXpdBs36D",
  "key9": "5FEUgFJoFeraB7rqitysey5XjZeUEcePR6ufYHqFmX7pKP2AxYawSg7QjHUPW1j7TN9ekhP8VUnmbxdxkki8RjuX",
  "key10": "3x6j2L2jUbUiKyaPnMUDhFXz6u3fw6nWRK2rggr28WPQHiSFnPMJbB6Nru7nbY5VMzgYqpo9ywcG2DC8XyM1cuvn",
  "key11": "2QqgZQhAf4fn9aQybiUyVNeVmPMs4YkzMZuPWmsjoD1Mnk2YLMQKf5ZFsq8DMBUMntcjB6Ww28iTnKkcgJwbHPKi",
  "key12": "5oZg39LsdNkMQWugmkabzYwHq1eUyULWAP4U4nHy38QzaynK7GeUaN9v7EjedYYh6L7ktY4XsL7hw1gmayh4Mnn4",
  "key13": "2coz8i9rkLryt7Wueu969GtDLNo325N5oMub6CSwfu5LtHQSxbthjhhmo82rhAnYP7Xuvj1JLFjXB6u8aJ6RfFn3",
  "key14": "58E6MZwvWw61tTQmpR7381XzkbmsCLhXgBgqTWTuaLLHq7TyWRWdYGS89mgKx1xPpdSnyDS4gihNZfraaVoZZNke",
  "key15": "46fHHLW9GCa8RkmBDVh9gnLUiSoKWYQQyKFDFbdTwC5NuaK7NRb6j6eMJP8Sm83o6AFZaBuhguRaqGcupz7uZHaD",
  "key16": "5CXpyUvhjByPmwQymgwde5UEX1fA74QsmUisQPjMezQv56KnkhVAVob1b5MQ2DvP7HqWD9YrNFocM4xhTNuZaSdK",
  "key17": "2a7AmAR6qzp3sYNufpyMibrRdrkNrbZGomaWjxoTxVzuGruZqe654Xfnkd1pNH8M7w9xrFnCYxiQVtMu4EXJ3NSs",
  "key18": "2uz82Tep6Uqm3aYFyRvszPP4VTz6UBVEihqj6QGSUaiNLn1GWQVTdNSHYeAe6TZDfWrJfBaTL7kpvzmxfRf8howq",
  "key19": "uWCvGiKk58zcyZqPPTgtUAPTN5ZFqg23EPkr9u6mvfe2W6GimxU2dL93kcVyCW9aFk8Kv5KVNnHzhwBy7hNoDV7",
  "key20": "LiFe1EiXEZn4Qj3zcpGQf6FPMGkoDVTxGwDEd2Eenwn2NMiTiYkeeX4bWEP96ivE6Uq66RLE7ektUxwbRArhzSG",
  "key21": "3GTfcwzMEypHJsA54Zita4xSiHdkmYLBMveec9mwzYZAAroA4MsPArK6BuHDvyLvHFSGMNbRtwPnwCgmMq6fUUBQ",
  "key22": "3mWgMTtUnZAQBHbzeEoXYCNbBw9w3bLCvx8py94GsbH3yddTgUccb5uqPAXBi5AXpHwV4Gk6v5W3Sqh8UmNVY98N",
  "key23": "3PjT4hH5bC5iHXSw7J4wmMKwvYdQe2qkDH8vm5yghLyuUUV3HJCxbZLhNd6mf2jrx2giesbjxyyrC6RYRPcSpwD2",
  "key24": "3ZSqDC9kjjE2JnCXuHtzBmbPrQ2Y3JtZvWy7jae8zf5sZ9TbZWTbVKZxXZ1oqgy2gLrCf8d89CWKtyVxW2w2K1fm",
  "key25": "2Xq8LwaYFrSrb25EVMyLETN7BB9XWbQJQgt6eCKpgHEbL5puHEE2MEJw8tiYmqy9vES8Ma9nbapHYekdk9Aw9bpj",
  "key26": "25eGdXGh2zPH7XwX7LQMjWzJ6CLsKAm5NHhURo1HLR9QzDhpdNoFEpypaWXTYGBhTxkFWpNscMNinaUufDqG2ojT",
  "key27": "596johT1MkbmPMtgUDCrPKZ7maYVB5yYFpwX8i1sEoUdQKiQABeYG5aVicKedWovB8aFnuNcraN46vzcfpYkGj5x",
  "key28": "2w5FSSpgHgTsDniyGDYfpPtY7uSXpfZd9M4VQ9caW111VNJxQNUyXfyToMKAXgiukLAWHEyYweq1uAeawvyPnEtb",
  "key29": "43NpiL5FQAovgtRYK2uHTSXNP6EyCSH41ZLyc3EU7ExSyDuH774UZ3K1FK1SkRmjmQDpVWVraqtEB8UUvXCxvXNc",
  "key30": "2Yyo1FRdgRtgte4TYHPnvuQC1TLaB2oyXryLhYDSrbJ1wKaqVn9ZgUARKb2E49e8V2cg8uXZgGPDwxXbPhZ1G91j",
  "key31": "uco3J4WtfjfvwuqJBRWGvPdaR8rAs9LffbynwBLHXUSwne3tvNKaGcwUVijWYPLe3gxdTyu8mL6wTPBp2eW2Ypt",
  "key32": "5Kqp5k8wuHPgJDUGLiVSgy8zGhrtsQiGbw9s32Gt1dMFBzr5G34tRUEEWW4JcJnvwLUdmcyXhWRYG3C3aMuytL2a",
  "key33": "3zTgqYkLPoSCk4oojAYXn5g2L7XLgyNf6FViQJJZs14gAfjif5E65xken3haZFGvwoeuwdSWYi14s7NjSd2TSnVn",
  "key34": "WAtsa4Cz9vvaB652iceg86v4K4JJpcR9cT1YYJyyuVV3vtB81TiiDdRVEp3ZAwQhowpdxSYG6w4W1kSt68z5oiV",
  "key35": "6CRdeMcyGqS7hm2CwZfaa6yYTEzzeRSjJfy25FtSzzfU3Pt2Z4rKrbZR3Z5z3usQsV7y2iMYLmcKvzaXbxLh5fg",
  "key36": "4du5nkvAfzfhb8RqWKZKJCxJE8UxiHt9gQUfkvL2R19ombyEiCXuVvhMtgwXBf4qNZVFfhQT93J8ek1wS2wKMRf3",
  "key37": "56Eb9VoeWaHNruPwpaCZpXYPuRHm4D6hyra2BwvCbJczxLeULdZ3gh7CaRMEkneoJJtAUqegPmv7vkXNC98aDYQw",
  "key38": "3M1TyEEzyCk23cQ4VEe3nAWypJfBoJjm98nb56ktaZGkM8QevNyzZ5GchdTbNtLxDYguM3xSxbU3LAvYyVtXmcMb",
  "key39": "2L2EmQsSJ7GgQgQPhzbx4hDxCAXw1bVgXw3fCRxTZXb5UwVzwUbuUMou3pxmzFQh1P5ouheaLDfRRUzzzAEpZRkE",
  "key40": "K6t1pyozqULKLHytw58N9W1Ga3zARqmWcgVNCq9fNRNFsPnzXs7acQMXi7RznHBZ26B6VJgT5qmtGYawemeWyeV",
  "key41": "4zftpYz8D6E7ViSuhpM3zphW4cf59UQs4Qckej5qz8kBjrWxsgUqCRFQrG1L2x9UBG4PxKFR488P9vwyUPxjDxZv",
  "key42": "ZpejJCufaZdAtoftBBP2EUtDLhDgYp8nLsksqknAb9V29zswVzk3Q83HunyvsRBSru8SxhDE1PhtJ3vquyYoyrF"
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
