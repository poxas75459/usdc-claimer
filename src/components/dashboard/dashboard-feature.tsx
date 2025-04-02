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
    "2x5ja8hLWWYY69kigXazakH6St2Ed1tzuMCeKs2WqGFdYTpz2nMX3ycxJoj1J6QoHztaZFWqUto6EWZpBWwGsJqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59r6ErxxYHw2ByHcbNfjEy8ib6LoQCRtuYc5rxz2B3tURrQH4Cf9W73ZfqREqvMSxA7mrW2pwCxJqXSGvwNMtzSv",
  "key1": "41okUDtGae9Cm4kUduBmQYu2UhHGsFurCNxg6VSUXfiGwiFnPmkFPh3Mzcxe7KXMh3FQ8rLLHwmzXB9DLWKVfvDK",
  "key2": "5br6cXoSn7wXrhSMUnnCFYRZ7RkmSjds3g8qfnqns54hcPKAKShFPaUdgccT12ACBcqagpcMd8Un38g5m9pbV7Pi",
  "key3": "5oGcFutM6qCp6WSBsXhiCHJwBraQKVEVbsG8eVz7yEQKFN9CMxw2qzHHddbxKrKiJiLzUQBa2C6BxiLKRNbqXc2X",
  "key4": "3TjQFvPmc99XKE281S9fSdkQBcYTYNvMtBBS6Moszv7iqhk3ABr4EKKKGphBbDzGyZdzs4qoHyanj6VV2JkeLJRv",
  "key5": "4Pxq7dJSmcByrYdV28rPHbCaSCGDQW1C9Aw4A444TUiFk5WkTVzAN8F6wStRdG8sAe6g4LVpbgp4BficGiHPrmbS",
  "key6": "4fiLELgXeMAXNvFC11dfgvuttyB5PMMc9WiH9Hh4mgkRPjkWHEGMNknWV9FiBmE2DuvnMunyZhb9myqrpywpL1E2",
  "key7": "5Wp74M2NTDchY9NcweBraL7cTxMxUW4RR91avKhvHfgk1ZKjg24Jd7Xi2NT39cj4xZSnTwGJNr4ypSDwjCDHmE59",
  "key8": "41Ybt7YSC7QhDbZtiSie3WLB8mFBJUjjMR4bgnNmE5XVNM5ny8R7vZHW8ZNGo4Gi8fgNMbavvEELo7ZMa82Tsj4Y",
  "key9": "5HinoZPhS4TXTcbVj2SX5pLyBwxZ8wh6zQHFFmgnVb92vf9nPcciJD13kdoZw836HUHfzfpA8YfXQLJL24a4X9eh",
  "key10": "9ebuZVSpoaNT5iycpPHhP4MAveH7xamZupk999tZRd1efzM1m557bxp6AmwK3CZWHSgtFKoG59xEnYUFvP4RMfz",
  "key11": "5snNwuMAtRHeSrwfqjDra8Y5XufmcyAwPYeDmK5ePsNNkvbA1kuG5UPeA8689RjmKfrXWV46NioBQRbrxL2rPmks",
  "key12": "5svXx7QmSTqsZ6QRCgFiutQcsEk434tHToWMXGXoswGLgYaaLCyVCkgvN6e7jHcf5nbAQ9aVinh4oVnWuyFKnos6",
  "key13": "4bHeZC9aLcQ9e4HfitNgRjTdC8KeK9BDbUyuCrV4i3cipVyGJMF22LEK3jrDy7DirowNHiuCBF9qiya7Ly34JhmK",
  "key14": "u4SXm2RERNUbuGPU5ricnP1yJii1TL2hR8jZfLwZZNPifSkA2UQMp7enhtxEdjobjokUzYpH9CL81ZCC72N36Zt",
  "key15": "4BfC9QEzn5Zw8cwVQu5HwA1wGosaVhfnqzDstTkZizTkrRgCKq2xdA7zwVnV5VHh1w69YgpBqQBtbQMHpT4RnF9u",
  "key16": "4SkNM1cDsQbqHAsZnLabzZUfHyXqVUEw2eDpx4n21XDjENKz97mH3teSJ82ZwNdeTntTurB5BQJrANTZYVqMYXBc",
  "key17": "3mh3tgJ1Lra3Y5b12pA62YEHpS3wgyR4LmDxUSYrfXqLGUbBDyaDcUHNztej2rRxsVCYA4q8zN5ZM9txqmxWRwcX",
  "key18": "4J9mtH9iuLTVVS7UhqQLbBDYaRPyAx221oNHsDKi92or9LdBfZfJdFkKg1EgHVWS1XDLx4YFnNNmgu3aUKZBzZry",
  "key19": "42DiAfUzCviLHiDUb5xmnGcp386VsTJ3QhpPAHdw3qNyNHQXzziDXkCSey2pTd1aqyNcKeXknNEo9dfwZonatmgK",
  "key20": "6PK5x9QDKrfSj14YZPMjR13PxagPwFTW62rNsC5Ti6m6QmGXp68K9U3tEar5WGnkW52gkojvK5e8iXwMfLwbaog",
  "key21": "5bwDrUEHev8LjNgVH2A6hxq5nkFcSaTc9B4nHDAMyqtEemDGMzRbp8FTKenxFrmEsWU9FKcFDffMAMSazKoFcKBX",
  "key22": "28U6FHgHefcMMkTMqEJLveC81pwTMiZxvLWoAZnkDCANrAr2VsZ3MX61v5JKUNxFMHavx3d1CDu6ykUmyFfiLkzU",
  "key23": "5KhQyYkuMPwMn77WLeJa9CDhdWa58e8NRPEmcVdCiWGBkcg4faPdsko1mKbKzxPvkxC4RQGJCb9mQdmxQNMoSLR2",
  "key24": "43ztbPYXTNKP3ATB9TSV4WBfviH4nf1pz2Q7ZQCAzAMmj9vTasd8eBukSzKjUn79HQ7tmqQ51LPzZUNHh3XQWDFX",
  "key25": "66b7SC7vcsbXQk3dH9YoCbnAQCuxLguj2pTj7Mi8irZUh9RGtjaSakRnSAtHUnsxffxeDFHK6uudKDguusZukio8",
  "key26": "34id6Hfn7eg3ENeph3wrR5CJC8t3tPpWoiauE3tHmAEwtXCaTgQeVjaEjfqVCJUkJWMtmFHJW3NvBftzoDVkqXVz",
  "key27": "3BYi1MCpoz7naqBNMsbJKNuBdCQ1pQMYTs7kMpZeWvJnhW1aAvwErEF4wckrRhHwkeahVXdhCSUjAoT5p5TBGtFt",
  "key28": "MUzK5T6z8nDuo19v4VnCH1zF8Z8vzNBDmq71GsQ7juWTNjCjDZ3FoLTr1H6THgnAxuB8jURrofNXCfVG4c729M4",
  "key29": "4Frf7zZ3fukRguuUwTdDQWudyXCB148uHQcYv7cZqjzFxrk4Bgu3bFQYfswToAsnJAFZFsb7sUkEjPMGf5ZPHZfn",
  "key30": "8fUGXZ1tHRW8kYmRobbQJ1qy9eCUKf2cPbHroJ3eBNdseDn4S3HwYtwhYbmHhP7WxGiZcCdo7kEx4C4u9bePM1p",
  "key31": "2kvdbtqnqYZV3spcTm35Pv6boxF5hExKfpXAFUQGeq8UUdMKMnjcfXHRXuB4erdCRXSwDyX1eZQC7iD8zRNjC6RN",
  "key32": "23W4XXL1c5nnZJKe6SR53AE1GCFUhg7RQE7twhEr2HFedLC7Djm8fbdAEeL7k4hpcYoDjMT6gYa8tEVuJNBHMesD",
  "key33": "3c6UkirTnsLRJyFPUAqqBUy7RDPpRAsXUdfJSerxV2ZksbiofauFdDvmAZ97Eqa1AJTrus1gU6sUX7xEGpqCiWCn",
  "key34": "3R32FHKPzPm2NVYmfxf28yxyWFNumwjzqsUU16vFLNznb9xTvp7HZYMG36rfXwERUZ5RBfbxcjMVZupVtTwd3oTu",
  "key35": "678zjYMEiDxRNvJj3dYAKHhXejNgT8nrKHH4XesGiqggozhxr8pvypMuaNXiJdV3BZ45HH8h5WkUMeWDf8CUeM6f",
  "key36": "VCbQ6zJY5u5xvmgs88hmt7Uk2GbgKdHbicWDgF7uWXimmQzmhNxzZYuekNFZbpLs8u1qo6vTGpCmgEB3AWwvvX5",
  "key37": "CDCpxCP3XVxrKbLMVq6mavSWQrADUef1b683vJsyxrYfbWPnvHdc52whryeeSuaL7uxnmg7kENyHrcvS4L3Vi1w",
  "key38": "3CE1fJyKskP5p6h89CahDnhacEFx1GZCN1oAdmKktxL8yN8taQDBKuo4xc1DKBWLGviRokJNhufS9xRwWayCwGXU",
  "key39": "2kynHRrijWQwUiuiWtGvkrEy4pe4o1uHG5Rct7Gs9qP33K2kAqTiZaRf95RDSQquwuexBeFcCxewcfs538Y2DxK3",
  "key40": "3nvv2rzbyFn3xmyWNAPTygE2CGnfGkuLiH7uHzA8CM1pov9YtWnsRqWdGwb9WHYjeqwDKA4t4mLHvV1exd8vRkjn",
  "key41": "HwmbjpRCnX4AvWkqU3iLEDtrRtyYuHnuCSyRmAfRgQsj68RLuKrkjx5hu846HLSmKQWNd2rV4ikWkxAdPaz2DS4",
  "key42": "2rD7FfBsfv71taAY6ZEY2S9c49Uu9oNpPphZgBzG6UvLuDDCbdBCKeWoyt6XNM34D4FJMbhL7G9QcdkNadjLZnQN",
  "key43": "2sa7AikJaM4GBxj6wnhnTwAsFN2Z6FSgPSrkQ7Z21pnyWuuKHV9EbZRWQH1r8Vjz3h4KttQsjwhWKBcDiA1EDmM8",
  "key44": "3AQrQGtrB3Eys3RoBxWUCNnUbQTBJhKVb1E9LqjZHWZA2EUrBVgiJ2X3UkrZXdwhruQgnxdwsqF1r8FF1DsadCoQ",
  "key45": "4DSf96b4yBy298psTtyfDwLac5op1CaE6pssVb1c11M1qaUaHe7v76Mdtpitunx4kh8kimjQefxJ57qmkHyaTQw3",
  "key46": "49e4Xhg3WXTaGB7ecb5iUtaSDfZhLYtDdjaDbnPkjnfumZA1G3ADGfUtYz9GnecJeoJarN8H5eASU4zD8t8yJxa3",
  "key47": "rKwtUCeUmfC5VBbgNLvnB3f71QNkmtkqYXHxyEbqz57ewyuQBLVm2BwHJd2tuFmxDjnCw8MjDXnDxQhek1C1qww"
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
