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
    "5C3uXWyCGrfBGyee9Q4ADGVBT4LNaejdFdbF7C7kb2kRcoecovCCyGnX3CAmtnotUezF7Ff1G3g9JzJKR5LLAsqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjMvyCTAVVi7p6mWgXonmQKgNYKDMRmaPofiCneeUGSBivbDm8KwQEsDMNW51Kqp4mtSSaBdzip44aZhb18yWof",
  "key1": "5aqN1iKzaG5XJGkh7uh4DJJ8YcjmoYUDqboqJGyoYTBhVTNXjN9wq8NfioyErdcF7xUPpTVHrJEZzgP9AwDo6sKB",
  "key2": "4NHrzS4iXvY9mKqP3szdSKuA7f7ePf7uGMtW814aKuewuY8Yidu6qmH5sBYBYtop9ZPnn5ebshpbkkD4U9J2b6mc",
  "key3": "2LJh8wZzvqrqtjuV5GVJSGf4ZD8qZ9MToesWVN1sHiHEppGMTKm9cyHyqVbB8p9B1XbRxu3GxXkJsJYNBe9YjBAv",
  "key4": "4GKwnBGm1CKkXCtRbDVi1JE64NLSoA67TW4eFDz4HAsa9DeSkSUzghrBJHomo5SY4xCcauZ4jeXRgfwW7AScZJr1",
  "key5": "qDnZ7uj3Y7pZA6p881TtmAq5TubTEH6maFYddzi71jwxxuHcsgfHvfV3gwGqEG6QaUrR4sGDRQQTkiCiBEEFKYb",
  "key6": "5CEUPkysQEdpxq7tBF84URZKuAdSmjfRGbBCWhUwJManQiBHhRXTW4jVkznuVQ9xYTnxwEg9hFKFEhf8RXQUkwxj",
  "key7": "3Vpzzx2ZC8Ak1Po3gazFsBzKz37X4Dddy8pd52GX3RfmoxtgFxGz6TSyMuzev71cRkwc8j6oxBY5h8THBGMaxoin",
  "key8": "59hRa7ETAd8U3ibmA7UcXTxoLNdAqXzyrap38WmAibHstxEZucyh99sxT4xB8N4aoN1x1BBHyuxF6FhpttLZhowX",
  "key9": "2WMUvnwhpSCte8WKPhCDRoAhparhWpDUN2gT88M8UCbyNVzfqDcei5SUmwNcMPwPfCh9JecBZMBWejV9bP5LFZ8G",
  "key10": "5utsydZpXnR1xoPSbcr6qbdBnLNzoGYVByeRCbYagwpik5zs54jL4w1XrXqYw9AHF5Xh8Ls2CbWHkyC474ty2SiR",
  "key11": "4MFVxH8g68bNa9HZ5FHL7EMm6G2SvGnD4U1LqAQMjzvbZSvfKPLJp9KQKZgaQQdwpL3Ufmn4GwjNC8h1rEdxaLY9",
  "key12": "3YwwZhvrr9WDJKFcFGD94UZBijnm175YFyneC9VtH9apc7edbX1vz961p8cXy7fssSUuSf52knsagz1sujCwv4Ef",
  "key13": "5f9UYukwknULFWMB4uV2sqZNK8tFkHnsKzuotL5G9PorHy6QfqwHNrHHoPVGqSVpDVAxDx8wJiANd11nwWLSPhSM",
  "key14": "4hZK6rgeiL78UhEUJUHENK9LAf5fZL9Pt9CFSNYRgnxhR32ZZNJg71vbnC78EGWjTYrrBWHY8rtqDo2FmeFem9r8",
  "key15": "DNbtPn4rkutTmqHktkWmxAw9enYxgpfRXdZ2vwfdiRbDBfSC9wZLrcmKEoAgewFWsQUe2x7NUVSmEX353S9jmmD",
  "key16": "3VLzrCzCZ2HcFi5YVAnvLj6NiCjhhqXFGhDJzehZBZZhRF9ee4ZMSq5WAonz4g2fjQrybe2QguSAaCb9i5jzurHb",
  "key17": "5ygyFDEx1jdhQdYzvrg13hjMs7bQhsp31ogmvg9Ez78aCmVgrF16X6m4ywU6fr6qTTCKWzeBb6LNMSASW6cjqzwv",
  "key18": "35FGBp88WDbE7f5cuYuU1hvn9aP8enDm8u2Em5CpfcrREer1ANmCSnVu8yCGc47rrdXY6yJunWajtP8nHSnzRUc9",
  "key19": "2QAPi8TcGiwMaTr4mNA8bTCfE3o2ZdBuqqogkmXgv23cmkVcpxot5yLmtrdkw5An9UstTJdRkfaFzMrqu6wuoXkh",
  "key20": "4KJH5JidsyqGe46PKfDtQ2no8eEYWJ3yv957XwDDGVkpZsZeUkF6g83AAJPkDcmSqgu4bmX7bxAd75x7njzN5qXe",
  "key21": "3m5n6QhSd2L5cxWMFwHVFXK72KsNjycSYsE8YsHSqst7uv6bw4zBi2hA3hEdb8srxfwJzCfSubcHDSvr4SDzJ9QB",
  "key22": "51u76U37e73dQnr2fp2EDoKNjsXrWU95UDDuQRTMdLUzvsewo1ySdGw9wHKNA1RJiiRKKNXdgmrj9L1dX7z6aur7",
  "key23": "4rTrhe7jyyedMPbjtcMJ9LuRRPhMt1ZMSUdNYo8eGVffEscbBzVFDWjMh79KRUt7tzE6qWTQcVSES8QYNmMoyFo5",
  "key24": "4FL6csCwWNyJ8jAx3q7N5dujpTLKpVxaC2rp6vjzU8cJg3chL9MvLEpWdTW8qgfgJZ4ShrspNor5SM9kKPCk4S7N",
  "key25": "4pZcMo83aJiuue2XVKhr4KnnqkbbJgCgpfhnxGU3ycvC3RzKAymFgenZPje6pxqkbyZ1wbxJSCbYCVMxinYVoAkM",
  "key26": "5aLncoX3R9RHHMw5bF72DwJAfdF2TrGDMQ7zeuqUFawxz2tED95iUunV2pPFbWxx8KQZecgHKDAmhdHye4T8JLDM",
  "key27": "3mJLkueKfDxzijiTpxtkqBxttPBSaBKrad6zpEeGTy91NKqrwLeGFuB85rNkaVPoq4kbuSnuUZqUgR67BGPYchKM",
  "key28": "tiyS84wx4bfoA4MudvLL34NUZiJ4gDfMncJXnrFru2MefWYFkqW8A5KQ1B8zWAw9BNthtznfjQ5DaHQQ3CgY2A7",
  "key29": "MpuSf4JJ9NQ7hRuUk9D24rGeV8st6j1r7UrRFdH62n8RbPQE3hgdMqbeHucpuL73CiD6PphozFYA5YkfALnPzj7",
  "key30": "5B8XYxdAwNZm34DSToZR1iispFosd2faXBBj1L7ksKaaoGoEdHbCCZeU5Co8TMQUYRwA9tnK9UZTi1eadb5tzNqj",
  "key31": "46qBPZA2zJBCw3a7HTMpALryrkm6AH2QGUd8kFAar8Q8wJUprhS9XnmBrVFfx8WianVLo8smnPraysd7y59gjRUf",
  "key32": "a1KSpCxdVHDuggDHZ9J561LLt8rri6Bb5eNkrkzv1Rq376naioRi2LdURcisp9KHHqeJJzBULXR5tWBzCMEN4Uz",
  "key33": "57CiwchceGuXERqCjDuMfDP3gjgmUe12adkHuueiis5kkqQCD2qWmK18VJ2etmr2vRbssEqYr9QGRs52BQsbu797",
  "key34": "2oKn7AY9E9L1fzS1WsBYHBVJ15J35E9By2wxzAgf6SZkGJ4pC77h3souMm4G2spNagcUohBAHCzjJBKMQUhsUQvv",
  "key35": "26mtUbXniwKpMqNnbkUdnGM5NQ8KLJuacN2rU5qiHpkimUYKrosdd5GJiQcPH8NByMj1gDRPaV9KjDR3FqSMtesm",
  "key36": "3e8AeoVfFxLCJvf8V6kSFoumdGsqmshf9ceqsYm2D39LP7KJi7dB8bkScma3G9sNYrsuJx3K3ghgmGqpL8HAkfXu",
  "key37": "5f7j55LZErzbBt55h5g75xwmmGgtyPVeS9AxyuoHtrs7kfusXFaRTheX2xJqm7HFjHqWo7P8Re2HNGqaZVDY2bcY",
  "key38": "4VtcApon8qNDAPeizKC3T2zG8rmrTn1tn5mqDH4v1WiiGe7n51WKSAkCuUs3s6jBuq2JLsLwxF4aoFaMfrtoe1ib",
  "key39": "2EevhnvjDxbCVeQ8u8iccKBsKjHqn1Q1ESwLfQZeNbJmxNtXrpQgjMjieDDJgJSD6ZiPswkCn3hiPWcC5oVasYGP",
  "key40": "3m3PtPQcgfggSsTTjxWswe9Z333KNmHw5CAnbBKm1bgVmUkTX83Mx34f8eLnxfCaXRZVHjqt2oEbT7UQ3KuYrPnL",
  "key41": "3ptgrhDd5sXvqDr2cXjUCfuk7ry5gjrTjhfdzy1cv5BXoHeFcpM3h3nLocYo9fsVypwe1VwAsJpNHShhgAB4btGQ",
  "key42": "41jHr3zCGhd8LAhFGQ4KxaTHimvi6BykGCfVwbY1MvJTaqEqsU1StrzhYzWqxMUEZ2BYKiuvKKm3CzQpRqzRGea",
  "key43": "jPVs88wS5M9D93j7omLPkpZPQfCvCCHVoKowiUK1eKbanMK5Z5qR8UDuKZxfZ2mpFpi2vM9javLMrX2HCNjguBR",
  "key44": "4ieBJKwZVztaimpd2EMacUaTYLcp8J3vV4yoxamyBg1aiY7Ym3cn6mqDUTq2UoJwUx68AKL3fUEvXBDzCSWjMjWB",
  "key45": "2g9YmY99HoJYPD3N4ZM6XtgwQuA2BaVPxHgsR8VayjMpC6ticFTss8Vnbmaqk2waj4VAN4x4ELtq1uEVdqzQNLvx",
  "key46": "4B5VU8c2YETDutwoJKdq3Ajc571CUmKDikW63kKxiSSykuSMZP3yEWkKkjToYMK81kUrf35W6b6mfDyr8VuS1J3L"
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
