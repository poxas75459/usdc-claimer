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
    "2mcBB1yRBo5XrZBEDiYKyzYxdqfeAEKi3tBaUKn7CNa5Ct712nuCvNzyyWNKBcWGT1FNw7tLaFTwBT59AwFaVx2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dSYcbkogogWoqjPy46zKQLbFPNdbdyL9tVopJ3bvZ3Tn7pk1qWe6WVWvukrpWYtUd37KSf6tFZKd6SQtobMPpkg",
  "key1": "5S9dZw9UHDpn3kUuQCRaSpn1WjZuEXdW8NWVF4aTVc3ci3se9SWk59pozLodBBAZCWykLmGQEVQDLY4vzZjq3TCC",
  "key2": "2aYcvBmGq3UGf7axdxZTawqqs6NjfptUvjMoMypV9uvzFuHDMpbwAd4mWV28SVeLGF8jVmnL3f75kwR5caKaopfs",
  "key3": "63szqqCT4pqPUrhLXxN4KM9tkREpZmPPH5nvdbW6gpYtufUukccoGFZEDCd1EmqVaAiHjgmwbBeDm3BVYqb7saTe",
  "key4": "RudHtdV7vQEjMbAyrcwicguyQEUTEv8A7vg8q9fuSbwDSysy16QY33vVUwfazWdW5rVaqhVHySxcorqvv5U13Mh",
  "key5": "qGARSgTTnCRLMQ22bNEaYzc2ZeHqCRPqjC7vojPhAKn1ccdpJ4S1Z2hcFucYPw1p3LoPtWxEHQSprH7cCAsaPmJ",
  "key6": "54UZ1Ryo6V5cCXeCKpaNRKD4Eq78UVJEQs7aKJrW6am6REd8tHi3MVq6HhZTF7U5tTchsZ3jZTgivvqdkwoBC16N",
  "key7": "4v6k51Djw61n6hBVsdWz3qRkjgKQv5kkczHxYXb1qntYvLu1b2iLvpZcMqYjFDPi2uGCgVK1rQHJ5PBvqZE3JP3o",
  "key8": "2Zt8xaz4wfwBJ1QTir31rot5J9E2uQm2fgsdoPhowGWouXERvKk29cCLto7ck8bSW22B5ehkd71HqEahKNhzBJQw",
  "key9": "3wzLP7YFuVYjGrBoz7HWCRC83AhjJW9Z8uuzqqGLiySN3pjTaJpEw3NbF6jzrLHfwvwvDc6UH4EjmExxouKKHp9g",
  "key10": "3nQTUrAsAeHNuc1CXof2Jpw3xagNGMNdBwMAueF1YrSgjFFCq2WdraQBwaiVtaWW3M3hau8qfg8M6K4NLwzEbFJr",
  "key11": "4CaRttrpSQJkARA2XKKTXERuqrJ8XsavYwM1cEtUSmodPWBQgrsZPNbeMSDjKmb7yC1K43rhJWRNyg6JV4HAjb1Z",
  "key12": "4EdaiMZB2BAzYR3k8gHoZxtw7HNUyHLg7DVJNRPSYvipzWuSivLsL82tuof2nJ3G8PPhUofDo2V779APKyoU552z",
  "key13": "3BPmwnEmRThrMDnZsZb8AmN43z9FitNLiSGZWcaUrjGhkbQr5V2H49Zzxo2BG5ignQnbY96Ps1LfHTJ5YSrTkRq5",
  "key14": "GZKL6nkp1X156zVqxQgDbgNqZ9y5YM2RJ4ML3TLBLCJwkXBYt6ptB3CV64VcCwivW5wck39Deeq71nczfNK86cN",
  "key15": "qvvZ2eoRFSCFghDzzAn6TET1fQnf6H6u3ocSMPC5To3oRYkKvhk3gMXqSooADJSaxecQcZDPQarsemoQ6XNwHaE",
  "key16": "5wxknhgL5pt8N6Gog9oXTE1641wWpMPwDahK9Mzmb6FkvZvsz38LF8XNQ8yyTb8zac8iibiF8AaB7bAHbDxA21HJ",
  "key17": "5Smnaz3Yxkx5bcNHQ9zyb5GEQW4CwHfyZM9UJuwYYirZ21E1kFnPV74YN1yTXn31ceG7PrrFncuC8dcgeiaHTCMk",
  "key18": "3JudBZZbGNVtuQsKEFHj9QE98HzXacuGf7S9E2hBVEPccYF3s6NZGgC2w1pP1XnM67HN68nBZznkLMEtYvHXc5vM",
  "key19": "2MKKYHuphEGNvv2ksdtJHL3485Y1xdZgnUwfWZKHLPH8ypg4PMg92FJQXSewQTB97JW6XEY4sumGmnzjtaYyRcF4",
  "key20": "5i9BDj1UKVwCptvGNHczw7SXUhq3bmVc4yd7QonPZMcpofTFAnHr2hvrhTNMjsE7DVc8xUqaxbjKqmh1ByiyrKna",
  "key21": "5HFr8cNbwaLNgX53wWsy6hzB2GwGVJyuvzMzDKMxGa7PMx2XDmEsdV8Z6D9uHjoZjiP3Ns2mrNv1S3RGpe7AqADL",
  "key22": "3WW1RGthU6x7vAL9WQ5whjoE4wGgfkwZw7kyHwUdsvwKtY2HgSaQ2ihJeKpvpQRu1dVQPEL6UtD1tfqTN7tQMkfk",
  "key23": "4ar1FCKTCT1fxiehy8Bh2J6NEnLrXjnqhH9seCTVovhG2zCLwFokGWDNZV9mqMgEnj4g5pgNKWixBcbMPmpqCrEk",
  "key24": "3nELrLuDTXfwf6UZt1WUoWBnxRB5CDfVpsst9U8ovtEtsTgii5h4FYzjeWVUihcGorhBrnMvDZ5F4QP2qEHVhqzQ",
  "key25": "2yDTjDyFmFQxHcoVMNsxDT3DGXbcwpT5wrYnPSux1wpsEi946MYu2vLXh6gTu1JCikQCRh6ubXapD2uS9GgmsfKC",
  "key26": "vQr5L8kTrizTvPvaNHPcbJGsQTrYrbxKUdU4fi91YSXNePBRAiVYECmtoSaHsQkHeMJa4DTKPWgBxinrtBUyutw",
  "key27": "4RQxsaKdhJ9tM6ccxpUswX2SoRVWREJz51Rc7V5jgHX3EJXFi7gJEkk5yXGzy6HEqKDF9auJBwESZwYtiSouZu5L",
  "key28": "RpYvaxDSqXeCzSLC9aMeqxnfhgXZMx9W7FvdtqQkKF394QAQzguhd9w6mri8dxkqAs6NG4JC2kbjrQ24ePQ3HDJ",
  "key29": "67CveYQaN4Jgxmg3A5RoQnzjHfFEivn1agUudoML2dw1E7Ujxt3ap1fh2RUHWND3w74qpGFNhXi3X87ZueZ939ur",
  "key30": "3VWQ1sEcNcRKzKuuVpNDu6auDnbYPLqcAvWQkp14AdQeSy5K5XsJ1ZgcgkutDa1Uj7r7ui85wpDe2uc3nMNNxB5i",
  "key31": "48ggzMEK6r9CEfTnBqs4EYpEeM4cCvyiSTrXD67EvTgHbxPauhKqoagvHMePjoGcorr1U6GkrXocVxW5NHy7Q27H",
  "key32": "gfTt4PSp44GPUFvzjn1Z2Liu5fxqG4VPAMMsaQgfvYYsBmNg1WMduoXPjq7q5B2z2Lrhf8dNSCVNsKmKveoBgeq",
  "key33": "3BCYq8aVQyBTpANZbyNb7x3E99rZBSTe7VDKKrqgvpTFtZho7J1vfmyz9Mn9T6RLNzpXw6Z2uFm8hp1gQsZZc56k",
  "key34": "PZPRX8uQ3v8xFWgCHaYnVcsKG39zi1jgxfsTDQtF1wJwDoZNKh55MFDoq7sjnS2V4F7GvPtdhon64kwztpCyjut",
  "key35": "USwXeMJHSBLkqaxM3hd3yH3dbgd79Lmbiod32b2qeM1sVG1nSehzxDcDHH9s1R9tRs3x1KcPC8Z2sG54R9HUpin",
  "key36": "5GRpchYDYwXByqPU92tV9n8L1MftvRCUv2B4pKzLWW747tRFMfNJBdtZJnBk3BQAFMK5UmPw2gFmiwcXy3HZqSPc",
  "key37": "2CirhRHNou3tE5adNCsnVEcAwBoZukgpAPSH5peCTttJ3EVZPbP7jesvk5HXjCuRKpg2ttefMEnapCaaQwWUz4q3",
  "key38": "6xG5KCaMd2fpwdTzDL1KTtm5GXcG1Jzr8cPVnXGvmEN1PKKE61FvWvVtoYpFHqSzecQyiXdkWuBLauvCpFhwiC3",
  "key39": "4s6QzhkMT5pQXigHtbQS7H9C8CL1JNhun527Lve5gB589buzyxMxDJ5MzAPYfSdq69GaBjDPshuXjirEs9cLffPb",
  "key40": "2LuHcjayukoJkQsnxGFUwMS2iTZqnhtM7Mu8fTdvM2TiqB7yEm6yEaTtkvvxoT7JeGQ9GNA7cdE9KXbNoRE1MCnU",
  "key41": "2yezpnsx32wYsogycdfdHXFNkEaPzixtb3woSBag8mNi9coLFyCdKw4SDXGuNZH3QrvvrEjQPWSD9xqxTa7MWFU6",
  "key42": "3PgKBJuHZx17w5jFiB83WCPNgzKug2HeqRpfMFvDHNXDRWWpg87qtwm38P2pAx7jpCNZz5L1dWjGUGJARsMa82br",
  "key43": "4LekjDd6zLPLuFEU8MGYKVFeVXaFUEbvSnPtGSp4ER4ZB6ch3qQtFzQr9hr9nCvhvJKa8KttZWGejDay2MBDDEff",
  "key44": "3xf5wAeGo1PdCfQvuou5HkhAztG76TZ5Qz85hThhAMr6Z5xRfurESh6mkZJ29ixXHvcjRtJcmHEx1G1KGuQq9eNi",
  "key45": "2z2qX8NJ7xYgBFn5pQPpaJF3VVG1hpSUKyPuUjPEtkdHKR13cVBMHiQaYGP6PFxfDM5HgCriFeCHuc1hQLZ7gCg1",
  "key46": "2Baakvk35RyjCWYgVvFQeirZtizB1KA9Fyd9a2SUQZA42E8CDcMreGexJCCn5LVsQZQXyFrLgV6CNGyo5wFbe4aY",
  "key47": "4bjheKRpAz7aXHQyL45k2Jt9YJ31rT8PckjwXtCw3oJip2mBWaom8oRAc7AGyGnVqPSxfhxvjvaimqd4MQNbeFRx"
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
