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
    "2FBpxyMQVUMmEFBCkaePXSjemgDKXrcNJ3jvx3iN8ytGnim3u7JXiyMqBNuiPaSpqSoPN4sbbic77dYuZD8o1MnU"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "56gpJekxzb1rb4g12N2keCT5UAZ3GB9Tr1fMrvqyk5ZpJPXr16p1XfarMphfowDq3gLP3UZVcd1SVRvBeTawdRYf",
  "decoyKey1": "2cTuDXDSe9dGUwWPzix82wnyvmreKwmbcTCiY2keVWFmva6zyTbmFAVAHJLJ2TrbseYsjzwFfjtKKMjr1d83Ah69",
  "decoyKey2": "4tHPcVHphVtV7BZBojNJ5qK2UFCy1L5hJJjHoHTtnsmhbyzcZ3DNwYHhSsiZ8KHNpU1uKYqqPv4dq4WhkTYXNAM9",
  "decoyKey3": "241gjioHNiDMMGq7fx5wt9T8rprakmXK41re97W3W3p174CpeZKdrt3AgidvaEWfAqTY6bDcKEdjLYaaeKnZWpgU",
  "decoyKey4": "41cD1BmzLUG9pTamWqJxzFkJdSUMcKropPGvG5irShia6SVCP3pj5gyZmkSf2tW1EJisLTpuwLWY2gGaejV1uZFV",
  "decoyKey5": "3Q9iTrzVi547JvMudMGYWVsujZzHWuVgVtcPmUfP1wY6hzYeE3pn3QdvDJp2TpKqgnk3SWW4i2re5pucK4LRmiNy",
  "decoyKey6": "4icNHBwQhCZCQiE8Fut4q6iBWnGi8NwUXa4Ls3dkgUA5QcxnV3bJLNdhBquuqboGQqeu2uadXXEDfMPGG7zTon1Z",
  "decoyKey7": "25a5fLX3FsRvJ5m2QLFn666xVQb8FnEBGgub8yCfiqaT2DuA7aPe46H3GvN1UzBRYPFHiZsFtgUVs6BgwcCtyuW7",
  "decoyKey8": "36ogEFxsagZSDk51WNvhZ6Vi3jEdPqsiBijWhqFVZSRyXcNSqJH6UeXJ7Ctu95tQw8kUhGvFCcmR344apM7vNXJY",
  "decoyKey9": "2AcDgNMgAHemxYnuMkd16FP7eRQJRimghtXUuN3qJTLsxk498DnGMmoWBsHNBjsodRxxQ9QnbLaEceAkmZoqdwAo",
  "decoyKey10": "H8922ZXxMYrGq7bev2SFmqHAXaajnnVxvUW94Z5NLwkFGvgedRWg7j3LDmyVfXxBShbdkeaSthqPM3h5wejkfKs",
  "decoyKey11": "55pxqenfx9dRfKgCC2u2EdkQW3yZw3YgmRN5ZAcqk87LCgGRhFgsND73TgtTem6eQ2uVRCxjYqhajPiqbztWBmN9",
  "decoyKey12": "9uskPzDy9AmZzvxWWAbBQ5MgyCa3oRGDAhB5YUNiWjgqE3R3Y44pthTPsp2BtAzs5A8Lw6ioNBs9M8bTpTrcuB4",
  "decoyKey13": "593qSSYAyK39jLkr5RjULc2CZUaRbgDAWoveJjjwDnWUauDRenvAB5vbKFM3EQkUGrgtr2VprsR1mjwjkXRtfKqs",
  "decoyKey14": "5YHknYZKZovCMKakQuWb8mu2ueXnM4bMKut3NJsXfufkigBSQBmYZ63HL6uWhR4J3qnBRBFFRxzYJvBrZ8vVxJiS",
  "decoyKey15": "LpkfbroCcErbHg9C5s4pRfLfvXtX7TnqZKfGxDzkQ9YFFRgL1y25tQ6ysLUQhmHDsmKsWvpSFE2KEFnfL2CyFF9",
  "decoyKey16": "4B9aLVqiH2z5br4GC7jhTDfPizGChvGc9JDJJu2Y2x8LbNAzZ6WM5vYmQmh7RLMdvTfyLwS378EDziDsne61cD1e",
  "decoyKey17": "4sVFLbiukCuSu9Ukc8DyD14gvtda3ekEFPTvkQC6xpfoYqbGwPDysvuKiWn6zzoLbaHGqhDo8xZpVJAz6Atex1wE",
  "decoyKey18": "4xJ8gavLE1zWYxi1hoCxEBV6vRJ11MFNeBfT3uVDZqfSSeGiegCioJFXXraM2aYjPDNvsMPMrTunvsZdw7bvxKp4",
  "decoyKey19": "2BqBVudVKdqW6xfaMi1EPiaCSWossDfSho7CNU2Yi7iueWQ1kUd34T2ebwgC3GvWyDkY5Bw4q2Y1eys7boq3QPAH",
  "decoyKey20": "MWwsexMayhG2PMzPNwYxUiaYwF3eyxJTbMHvevq2wXUCMPLPua2SLy3nrEwLozbJU9AcEJug3fpxNNp8dvQy2T2",
  "decoyKey21": "4SwUVsLkcbpjnku6g94p1RhgxXQB5h4bLChQY98UsywsKt39ChSScY1jDSYp13PtrzqRYSQgu54pUrEa1NSbp315",
  "decoyKey22": "5u6rLKtmpHmGMrWSCUrf6HYwjRhQhJhB7oQ87ZFK1B2bMsR9LoCYsGio2h55Jigkt7uwKq4hoNpBhvP5UjLBDYPn",
  "decoyKey23": "2fHiyU6bA3UYoWA2CM7t6EzTNAEp2aWtmasYPKBS76YjRgUyjTmFpp6W8cSTrfUzK3VYtTX6PAn4KzXwAJstWFaY",
  "decoyKey24": "3fbkbrszKvN3XcZhGSeXsy75h8X2922QkNJVqgsDek3SUniG46VZBYY7AiS1HMPppVdMix3s73y6mKWPu2fFbVpx",
  "decoyKey25": "2f7oGVTFJbqhQBfb39WG8YCvosCampARSbCAKExiXfxxFXXh4Fayk4knrYHUJ3rGQ3mTQWvMX2zTabW9jdr9JkTm",
  "decoyKey26": "5fKLb5Q7Y8oHuaR33n57Yw6HzeUjxFUxD6WbLRU3j45qZiw6RyEFTZ85D2eDXkJWpawuWqJADfWxgrinF69N1coQ",
  "decoyKey27": "5gT5Puhn8amz6codnZ78MCstSR4zg11Mt8xg3449WiPQApq4oPkUNs54gE348T1KPR2MqptSMgY59QUmMxArDAwW",
  "decoyKey28": "2p1DUGSqVtWXv2ZfGF6YJFa9G2WkyZPmoeT9vVwB9XsrezcEeX2Vs1QoNVTbVsB6wxNzNDA39WbF6CRoVn5yd5NF",
  "decoyKey29": "5ZnLWsauEHQPCLWbFAdLZK8Dt5Xo3rpoHZyATsBHbHyKaxc3QPFrk2w89RYt3wLhRWFkv2EkmBJWgbzxK8d29LFD",
  "decoyKey30": "c2LByyTv88zUbX6CoqmBeb3Sr1QDLJLRYGaGpNzPjy9yrafd8K2NDYDCoJ4zL2GNM5AxVzfrZTvvAKLTcofuwrF",
  "decoyKey31": "4aNCFx8y2zntjZvwMcGpx2kS1nXQzaXA4a1hV96wW3Cd8iJFQkWDbxx8dwJYGMbAQwUKB94MoXc5LjqFrxRQan1R",
  "decoyKey32": "C2uJS6y9PzqSUFcQg9yfQaPq1QBhtJ31N4LRWQCH6yhcmtZR9Jj1bnNdBWy7y7GUvCkUEAhncKa6SK8VCARaTDb",
  "decoyKey33": "2ZYsQsySpRrraD4wbaVGRp3D5oeWvQ7aqdcHDam6pGxSJ291RsMKYVdCfSginvQCJNTAHtCFw7BY27acT6oR6JxR",
  "decoyKey34": "kbYD2kgj3RbP1gqXLnY5eakN1QYRMvbEBQ6bSb7BpHh3ptZnrSnWtXzUKXCTML9iUr9fGhzZ3AJA3fJU42xrhmg",
  "decoyKey35": "AhMVkDS19fCnBbj16DoGeed2VHUz6duJTNzknmebwpWGWKT5CgMk9oSRTXFKMiTduMVppbf7hRknU4GcB6E6mgq",
  "decoyKey36": "2WYDjzr12vQYBvpk8pEYFYgSH8Td1jStcuofsk74ERiNEFZNGMQBLidtWmGhLrCDsrsMRP5iLpQv6x5eLMcC9L3S",
  "decoyKey37": "4oXfGtHsSfk3R37nYsVcNksrR16igDhkTJRd2bnGNMoHrZURdXDfWFQBXr8mY6WFf9VAwUv66q2SJpULUiBRv8mj",
  "decoyKey38": "5aFA9ZARXCqyLw26188i2U6XA196aA3SeqbeUCpZoo13DY9YK9Vc1CBphxz2wUA6sCcXXFX5RkcWx5XHnsatASfL",
  "decoyKey39": "679fbd6JSN7HUFuvNtLiRpVNNaVeudUC2EUKct1MWAaPWZeZPB3JuqKmbvosUvba5N7cLbuspUatpWCtQX717LHJ",
  "decoyKey40": "62DLqRE8D4h3oUE8751mMkoGyPUFeBTWi9k9HAiBuiugGuohsRsMPPNcJ5yCR2doySmoe2kCjUngv9PNhKfBjj7j",
  "decoyKey41": "5hRx6GaLSfjRLYdy3dghwXN9fbKdV2rEKFjaeWJVoEXoe67CA5yanTVrZUYQ1LaTztRefa42Nqhfa1Shjq7iPnKk",
  "decoyKey42": "5CbsXJfHiA9rKb71UiXcRbTfsReH6EtzsWVzquo8NnXmYC27YDEnmEoCgCf5ehwXAeLiFX6jvGPRUPPZeFjpaFRn",
  "decoyKey43": "37bnxg2XsjoxinnEsyygumYB34T6iRkghRVAsWysACJm6DWyaVSCVeDcByRPf5ojVnLu9b6efm3Avd7eETKQePio",
  "decoyKey44": "5bzoJKjSohUeaeMqc7Wacpnm1SbMRr69qMfXVyyUQG9puQXwV6DegDC48jcK8j4WWJ7YYA6kiXUtSAwRNqpp7XqD",
  "decoyKey45": "4V3B3mLvhEVK5ckD4XUE5iCV41rW5kF4ig6T6ffts2tE4yfGnAU8hE44eoPtyzHFjqBs4LAXBJgRbe4s6RvMtWJZ",
  "decoyKey46": "2V4ntTcLURtHzQRMNDA17Ss5r1erx6ZzvQgXpaNpQNqZdQfm2HHitWKHEu7RyedKcVJ65KEDEPsdkHW6NKJX5Qho",
  "decoyKey47": "5qPnJCixeC2peTdigcHw1r4QAxAmsV2Viu5UsiVPTrbvVBRM7a7rg6doLazQa4VhhKEEovzX1ioRz8YSBipcPpwc",
  "decoyKey48": "e1y3VTzpLSJugHbkDFRo8tnuTzReCa2RnRGrBHG8GQujJCtMp6ZKmBcXYeZH4UyGcRbc1ZVkj57RbGAvDiBfVqF",
  "decoyKey49": "2eHnzAYrDBR14d8331sb18QLNzkd3TgA64ViCdz1U9tqXALZwPz2UDnHQiuB4m1bZiSqnJpWiqipv6EyCQuyQWvX"
};
// DECOY_KEYS_END
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