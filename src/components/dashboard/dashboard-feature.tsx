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
    "3VXHTRfWaKUtvTn4YXfRpe1AxfZsisdnD7kxrDHs154qLe7AkgUFpT9Vs4PMbDEr1mADsDnT6ShVTWG5mkm5HJSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kU8wjKLgDAS8NYBbyC5PndxibK1mYpNKTZKKN7RkCyDvmuVtiHJD4tUDEVtVQrGcSFcTSdoWKsHmGdUAvoZMu9",
  "key1": "4dYf2GcJRFWMP4hPdgW3RmHPHXw4STwCfLAcdp2YbKMfZdoncbZZ6s9J2V9VuGhmrjygoZcB5TyaU3X2qDktk8TK",
  "key2": "5bW3zzAPUvbzUm5rSXoy6o9zJwwm5occLWXjgGnsErTXshFtHfxMBTD65NYaN96HdT9nQHUfBz2FD8JgfbZA4YVe",
  "key3": "4VovsJ8TADX8SaRT3FVmF5WgbSmRARZVErU8KWeTynxXmSehvpp14P3qxExwWJMvMrXRWzDjkGd4LFMKU7d2KQkV",
  "key4": "5nveCyY9Exjbt6Vgnb5KjhEsaR6cha7oFJRzvGmL9Hd7xwFUnCmVqxV9g4dYXceWrf89oFgwep9VkSHpHYCJStT9",
  "key5": "5bG1f3164Eom58syN1jbcBnEM131nGptxipRauJQxvSjgrfwJigB2kXukkK6ux4fCgLVzgitKS2t5btigAWjYuQk",
  "key6": "2xBf3GpXge3oN8Mo4bFKJnCAZpzDZgPJKK7pv5yCEepTKyrD1JvkUmvQmCYkoTpcUmHzUeiNfiUwr918CFNBU4CC",
  "key7": "QwupoeEFpQqhrtYz2FbvPy52zC8ey7w61DdR1i9K7yB51qtLCBkV7gkEwxCWsrJ7feuvccciH575wpRviod9Aep",
  "key8": "3cQ8acYAiSX8vgg5ybmtP5dynAj4T4ifoPaeKm187EeKLa8Gnx8B9PR9rmG1Ecv88NV2BDSCZ2JZdUzfr39G4he9",
  "key9": "2qgxNn93ozUSWx9WDeQi7mWJon2HHfqRZPG7QPWJTdTtg1U25bZuGTZRdC86axNoPUE9M28shHgyYD36UVZYYa4t",
  "key10": "5Y5UjLPQBoRtHFYobB1EtatZNkKdB2RbbduupG5kmY2aQsiy5LiWCRyBgReQEHJWJwEQymaodH2WH1GUAQowLvyW",
  "key11": "CVpcm2xFGRmayS4Gu5a2vHZvMjxj4jLPwjKRJkZi6Fuo2Kozwc1vzxkDBAGMEE59NmAURdnxYDbGXYxvcGoz84T",
  "key12": "3AgpJuGruTGYMkzytvrpw3Nbgmaoc11mVu1ezJ9Wthg3UbbZzcZQfvqoqZACdssGeSqJ5aPSbjMR3JzXJ1TdY2q5",
  "key13": "4bvKSbwaHc3GPM5Rro6s4WRj6TywkPtdvJV6bhEsxh9FjzoXQcNZYLpwtFuEfjt2KXnwbKLV3fFzxbqengMB1q11",
  "key14": "2wwAah9S8fSvJEe6gPBBZypMnUxzg2TjjpyTzkEtqBxVjhUNdsgef7WW1ZGCw8xSM5Jg7oKM64Whe2rswWWQsMKK",
  "key15": "5ReK9ntdaocXPVip1yWzWXC52kDtjR7uk2xDKVq2mJtoXU8ebqxLKVkwRsZ43y3sR5fUGmN9mE1mAQ9SvTXhEk3B",
  "key16": "4z2iyHinWCmL8S7CQgtvd21CS7wZF7qzPTz43cccYA7eb34rkg7fXD4WHj5GwaJMXEK3z1WiW4gZyQFjnHMkHYVe",
  "key17": "3nZPzEimX5zJwcTgGBMSwE8czGjUWKEuBW9dyVKPdGRaWug7kZaSYJXGvU5fiJhSRHEqNJmXgRnoJVdWwAe7z52V",
  "key18": "3cerMAdnfsfRyHbsESW9DU1ftQhk2wnkTzsDuCXJEXPNN7mab3kuMyo4tUA1QNCpEciGkqBCwcCRuKz3769Enqvc",
  "key19": "2tFdATc3NNyMQjWDDgAkG5xLS4i4c5YpqHZKDzsB2szrUzANQ9ya95K3PW3wwmdtmqs44BezrMxVZDWdj3NZsoD9",
  "key20": "2mUPvuV17uTXd6NHostumq2ewieYbNNiZPD47YmRwbS3ygESqPEaLPm2Mx42nZ7TwuNp9kxdchZU9Hue93TpBM3G",
  "key21": "3FNaboH1VcBBPBHz2HWFAhU3RViPeUBRcDu5YwuC6Lv4xM2jNjPowF4me3a3i6oxYT31VmwvEERrsq67BLd4VexN",
  "key22": "47aiAbCbEctfrzaj7RqmHA1Lx5paad68TUVeXuccHtckhVex8WCyDs6LDS1NU6j7m4K2cPReEUr71nBFpG47nanQ",
  "key23": "4Aogx4nfttZvUjpsZtvHiEYc5frhzQR6qBiM1949xk5qu2B3bcTBBWTJJkyfeQYdWwXmV8eCA4WZQvCemvZiBsRi",
  "key24": "DngTWq6SQByJts1hfxhQix9X4Qn7YqwCSiJSxCHqRkx8LVov9UoWob3gdBoK99huDaYcv7Q6mL4NFwWLn2JoGgG",
  "key25": "2mtA1xACmM3ARvkqguBRWajFFdRvhGrQDBeWWpLYFNkE5nWmgi7KEkN6C7au2nrPaRwv92wR2GCeiwjtYDQePhRH",
  "key26": "3o1ivE3eMzKxHhG3KpxzbnqmJs9GiV96WFr9GZMmuJrVihNgBaKbPUX83h9f4XZvmJJrSUdLMbUtF6keyEtzVfsq",
  "key27": "KBq77a4Jau51FHt8tDfWyiG4a6jvG4PtSRGAiUze9ZQ9DQgthYgNVecNMnD5SW3cZWfCMbVwtXGHpuEVUrP1eb7",
  "key28": "3vnQ2tzVf5m9GTteo5d3eRrMEnaRc8nnbAawXuk4nR48E5j7zkg7UTUagvZHaz2tBVAhsFtvBtwES1hbDyRrnbXZ",
  "key29": "4rk5QS2uySXbumSPCYKkNE7iq8PigU6znHMvLq92b4pXs4XuLgg1tbCAWQGMydXbg5gForSBedtsesmW56anP8FG",
  "key30": "22AHqLYuwvpB5KTm8QU8y3ruegS8cYz2GLUDwQ1aNoaLkDT36VZJ43szgb9p3DXHGEM7iPwaPqjnXZXTUFuEWBYr",
  "key31": "2qBiiBtFvSXPS24MmHHpHeF9REkp8ubotHE9PGLW6a6sKmiMQzir2P9gCU8ASNMddXnAhPyRaVnFeWhxFfYwLka4",
  "key32": "5U9ps85zmicnZSh4JNGkTHEHjwTpf7KWTb31JDXnHsrE1P7fMEabmkDTT82ArVgCQDPs2usWVvPuBSAdGWjhP2jH",
  "key33": "2k5ejRNkdUp3hMfXxvbt7zLt8jc2ExR71grT8xNzGfefwgJ8j9uaP8yhWQRJimCy4TpPsoEYa5s5girQG642kpcH",
  "key34": "3dZ72F3navEFCUcZRm95rxNQiCoSaMjp66MaC9huFdHZDiUrB4ozbyTkw5YTcNm1LdXSTswk7yaNJT9zySwvEgUd"
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
