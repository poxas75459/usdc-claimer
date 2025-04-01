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
    "nYfPhox2yE9Dn6hfWPBjRg93CN3BCVZdzXJXNtBd7uk7jk31uFwm59szcY5FkriN2VUNADqcQSbrezeGAwWCARc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqQW5sCqwKauTPwX8UJdVHvtBKyQZWabgVbEJt5ge5CqrxnvuxfJb7iNUTKg6Z9MiFQYA9CQR2MDrX1gjWwK3nh",
  "key1": "3j9Uro33ZsoamGiqdUwu8zN2PDjSo5ZHXpAaeqgGF6RZBPvZUWqUngqe3Hpz9i8MVcdZXroJuVtBnmdKLDnYbcgw",
  "key2": "2MRdWecbzdXxdDWAUvfkB4vqRv7XJ9j8jpRAh2n9bbdPvA2E6ph1Vee1BrPdTnZpwbAn6xeMNMttufNRDd4MqdTy",
  "key3": "58sGr7YmgDmmfqLdQsuVQJ3KXpYtrE3oSia3y65na8queRJAaKJoFMyM2SuQxuPdEyGo8jqx52kDAJ7KHdvWZTRH",
  "key4": "3LuS53GAoxF5qGhuUgtqhZYLWMRmGQwLo5pX8i5CpCBDVZsuMduQqDJoQXJkp2JmStoQPQ3nK9ANwBbheKq5yxbd",
  "key5": "36R2b9X5jmjxMAPFuioVrAUbx4i54z5SMvEFZwQKN1ukgjPmRSV9itgKeNtCaUAhrPPFL6WM1vugLPuuciQwmPnu",
  "key6": "65KWpYHNejxBvE1J8cY4vVWhPaRzt1t9NrF2XErRQbNQnk8JNZzeeETceBSmek3D9JUJhtTXRjEkJb3KZKrwqQt1",
  "key7": "AS7mGGY8xv8HxDPUGZ7YjXhKs5wLXQTni7StRssp6wb9X3TzjGAEwAZVDaZmip2bvAPxHfBome3QBjDARTrRbuF",
  "key8": "2i6qYDmZ76tBkZE1BBLYYXvuPZRshHTjcKpMasvqYzkkRbwfHEYZzftB4nDySxzxwYvBKBuS23MbB6Zayz1mMZQq",
  "key9": "uQXc9PzB7gbFmq8qs2AQ3wRKhQu1ENxj5gKstrRybm77cJoeZD7xrUjA5d1pj3ooY6RrJHumQsjdk9Yzcp7h1yB",
  "key10": "4GA8wDrsa5CyVRxEgG6w44nHK8qkCG8TfJqdn8HUT6QYxCAzMSvg9yZE7XizYrb1uekPt34NXdP2SCRRfdhRFdkR",
  "key11": "5basuLodcedyR1vcxrZk2cET1UzZ2dFa6c5uWUKUqKgWaQCLSaFcvFfdYccS3DbzW9pk76fLgthpULH2apH8RVrm",
  "key12": "32EJFQUYZ5dWpNjTQZNjnqCC3TwKEuoWFoemS4QJF13tmQApcRnKkMLLgBXqENbWiE3G7YTkihkzT5CE71vH2dY7",
  "key13": "5xxbDumyYmYqMKx7y6GDSRFnWhBGypKmx8TSN6vL95V5cocZoAf1Gvx3DwhDb7zVScsnXvU3BvYZGCthbXK5UbwA",
  "key14": "4U6bALvh6L57VUXgkxvP3EWAdSstL2bhedsnEpVga961VD8Hv2ma88GrqnmEmP5oLANqGGMSpdD9j8BxUeXb9ai7",
  "key15": "538k6S486Nqw2tjDvHzDpDp2Gj3KPxBffomVHEubMeHuNvgkvAcp9PaTxXzv8uqub2cgkLFbtJXMEkRG5YSfiNoY",
  "key16": "5WEjFMicSHYhgaDiTG9yPBZ64bEL7xDjiYjLLXB3MP8cJDjq1jUrotWfgrmeubskbsms2X9TUHnELRE9eEDm6MjD",
  "key17": "2rTRCu6Y9yfJNcYu1A2LZ8tfZrAimaBuE8ook2xKaLWZZwvSd8yAbHv2YCZg9kXNuzgUDUaoKN9ZULc3dS1XjGTL",
  "key18": "3T8G1akDerrCsLKZ71d2HrAhPFQGKgH5wTMcLxwPJj83vJjT6Z766qVmYFFdK7tdxubkGPa8pD3PzqFKoWYaEfid",
  "key19": "4jQbz9Jv1HvrQDkoc8T2EEGv8HY5UNhTRRNoQww9pLAVHVJiamo5U8JetBJwQYckg2yijNxaeHtob52hf245fyEB",
  "key20": "4mhCYGwUpwJYpizqG7ts6PWkiKh7yJchjq2tSZGeQQqDWednLFrsWpHaCdAG1LVau4JbCz3LqTDD859puKdkGRLc",
  "key21": "2yFS2sChQr7Y1cTu4Cj12SDafxTxyDw9v9mAaFXa5TuzaLppySsbmAnEfVreozQoNT6MGDMFH6t9NBsuaGaBhtSJ",
  "key22": "3NcM7i4N18LrsM3wzCgJDGTMiMrngf4xwiot9WA5CXG6gFqKxtNzhXnqnybDn47fb7zLZTmgkJg5ndSeJRBxnwL4",
  "key23": "1XoVEdSCawRazX5q8CAr7M3DSa4UwChLPbi5YatETsbdMgZS25s2BhW6fvvE9vDVNfsp1YJhcHrHwHVwv9jEy2t",
  "key24": "5493XsVM8QA5GCrQxrBWB3qDJuLRL5nqGwHAgSdW7mkswBTeGXjuwoSQJDo1ogMywmemtYzb7XJGvNX6XUiUvSBa",
  "key25": "556KGdAMT8FFutdWS4pJf1kNXehJGriHfniG8FgNgFCajgtGo2MARLXA4dR7YLJaCDVPv72Y22ko594MGysx4aWG",
  "key26": "5y6yG6re9tUxohhimmKebFq5C9uAa8onBwDTt3V9a7deR4VoT3D54TpW6Yeu5HyPWNJ4rY7rMYVsScVXT6teaQbM",
  "key27": "qNNQCPQJJgr1rMuT78AmHAtqb4Gva3xvRxJzWhzPHuz8CyGCsWjKLCWqv2ybzQucwHR6cjZjm8uTd3r68jWvwrD",
  "key28": "3D42NHrioSwbK9mZ64piHQdUQ5L6DcosiRXj4gfTRDumLScvyZQQ2VZBhuwRMQw25bfmshWeHNoMB4AMicMzeDXJ",
  "key29": "2yr7q1BdaKmFNU49kJqZ4GcjBLMscbrTssC7Dcewqo6WnECf1SY4giTEQ36hEbmPRaiEfQGr634mxjXnRWnke4Rm",
  "key30": "2EqAe95S7Ze3KiKf7nAp2VdHkD2LsSZc2xbTzvAWH3tJtNZeCzAYarmqR6hQea96eG1W5Ti4ZY5bGiuv322fjmLo",
  "key31": "7pqgur11M8TzjtfrTcjD7HLNqTbUeA5q6DKYPd3yiPpkTUnNfgssMUp1rcR3Lh3vuN7fABk4KWdYLdYn2fTeapm",
  "key32": "2bSSwpwSGVBm6DmvFwok8D9avPyJoz4cxBWqFfHLTL5DXponYQ3wrBdM6XXEG1cPzbE9rSvgXcdhg5EW9Pq5S5b3",
  "key33": "4npEv4SGEEn59FD5Jr9QoSDZkX1iMVjqrodYBnCUKNBFSodBkDPcCwCSZBJjNaHQ4AfoFLaVfBeUNSpQkzBponQ6",
  "key34": "5Wou7Vtq6zw9Dfu26Edf2hn474fEsS14f3nUNrnAnkdbnYtgqGpvk6SDV8qXUTRTDrCk9WzhcKtBc8HgtemM1UXb",
  "key35": "3cv3dHe1XaiiRufEV5QCZjgTetCJGbASDHqPXiJjCKENmVoXXxFQkoe2fbnKYC378EHxhEMTxv1wGt62nbxSX8ps",
  "key36": "4pB3JCYhggw5vw3gHKo6zx4LV5rMHvAPKQJJeHWDJA4xJ3vJDYKRLxekCGx93GZ5W4iNbnNYDM7vF6ojqzvPbpFJ",
  "key37": "3kp3Hhn4qfFUzSR4ZB9vEWMHsuatP6TbAg8EVhwQcFw65tboHK9SEbPcV7e3irCFapaHJCzfLP78Z16Q4N8rhTRt",
  "key38": "uQ8f7FQo1Q7Y8ei6LbWGnbZtu4nTWv2QtiSiHJ1TB7QiBZ2XJb8RMkibdtqutbLLJpswCn9Dg3AXo9DAj7DwTbS",
  "key39": "4VMjWkjmwRoyeusTcXR49ks4kWkvBfDyW5Fx5ehvAjgGMcuQ95yQc6g4BaRLQYwGzcWxDjLCmBYHdb8tg6VzMdgC",
  "key40": "3gJNrM1ZSzxx4btkRPz2qGmkr9sdqhFzouLPD2QN1zDEt9cMJrjCB8otiH1gYBw4pUZxJZdpCvpkj223tbgNCUrK",
  "key41": "XRR8UXm32F57R578uBVzm4drTenzUQperTGiA214FAG23LjEpqrjdECjyArBVyTkZPz4uDCdGwgvZtx6qzdicpR",
  "key42": "2izZYVkrQZAPcQPBfBUd9AdSoGQTn51cqs5nsqkLQsSdwJK8pxzcKpAnvigf32ZqoQfgEfo7uHH7nNCXenKdT2UV",
  "key43": "5GuJ5oj5vDxssQhBVeRuaG7EUS8xiSj8BmSvuDzv8s9vSbZFgxVCGgSCeGQ7LHNFEVDopJ8Lt2R7GydBCPbyVybg",
  "key44": "Jpn3zpkSZbm1Wwmb4oK2p7XQ4EvvsYEr3X3BDHiaXzU9woHitpR187kjdtgZAkNqGC8fPaNCLgdRcwzv5D5eVnJ",
  "key45": "1vQzXvPpGAzwxAj8y9n8xj3ETiRD5bP6Z6UsFHUvKBcZPj1JM4BkeVts25wPk39YrtiYdsZLVRGmSNnxKuD3ws2",
  "key46": "3jmFYaVRd2yQaNxhjBVHg2aRN5424cKvfPP8WV6YaZcoex14GgpK96aYHpTfW3qufVHEJJJm8mtJkWVHanHp93iT",
  "key47": "2GR6dVm9FRRibHvwRaCnpAJdpq14fNPqWNyXRhzY55YXo4d1jLb9cP5xQFFAyDf2ZAFUP5w7spjmUgWoDZ4v2qyM",
  "key48": "3pcmzBZW8VeYb7Zun8qcECSdKU4jZpiDK5Zi7QWzzFY9GNvfjRJ9rkLyP5Ufvzx4WdqxVxAPxGxXWzdgdBAxCDM1",
  "key49": "4Eu7tPBrCGQdpJnQZnkGuCXLTiujzbdcW7m3HNzvTH21dRVumkKMtsW9h6s9rez2FiX76cY7zEXCmNLUvqmEM3DS"
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
