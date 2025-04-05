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
    "LEnqtbcnbo3fMxecZchUr2mMVqxdEWJABdDmP82xpmXau8cBQGrUjMXy98NBNAjGEAt2xXieH69tJBuqyHcNbUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkxjGeuz3nEyz8QTjjhKKosYK4xCjtgcx1b7xrhuBasjeAu4cachdj1CGutDARWPXz8Qj8B7jYefrVmdrPRhk3a",
  "key1": "4xcbLP36iXyrBL6QegcoFvku2WWULCCzyMaD4x4KGBR5iexQ825ApMyaJiHtLVCs25P2e21BL4f7bmFwCdXw8u77",
  "key2": "4faQoMpva2H9fgxxiXYq62B5rR1HioxmorUq7kufharakov2DdkYwrYqZ6xdLv5RPj1vL6E8FemmQKxG4ewnq7Me",
  "key3": "36VccAStvUXod8YwW8A9XYGGJ3eofUKzYdvvPDmv9EzfNi6bNKPEazmNsJKWZNvFi2Du2n7bZoPzwX6nfj1tRspk",
  "key4": "2ig9QSuT8LL8RFEjnNH8Zxz9AfLtJ48S7D43LXSn1ZXQxLXJ62LkpM1zKkDRqQtZfNVTb1A8doeJ5w9LUFJyTEmx",
  "key5": "3cJNV9c7Wesf3BUWPrMZAD6vWtZSss5t32KgoMw2aFVbNNd8yi6y2PkPHdmXHmtSpNRUZYhNBvtRKBGepiAr3Sep",
  "key6": "5eKQgcqsvxx3jzjurn9bDEUwUdG6am2R5x2JeT2PzXsVaTCuBXQP8Rhc6nCgxJBSg12dY3UhnTEj2eAzUhGoQqPp",
  "key7": "4BhVmKgR5qRbHKS6kF4Vswft82CcM6MLpQSBgkErMA2CfrcHrfLkwFQKQgaosKnYZkbmLmL1VvjhVbdqLno9f4eK",
  "key8": "4TF3wKSV5bpMEgPSKPFfx8FeKVUpnzbZY2Yqt9xm7dfDp9MExba59ayetGFZg2CU3oLoUa5AvhvhHQgXp5NdpLsB",
  "key9": "wRBirNd7oLFMGjSrM1nMk5YcPP9JmED8rsXFpFxyGnHdFUC34aLEuht18vvaoZKi4eVYqN4Z31po1ntDrr6fq3n",
  "key10": "4GnXdFg7f4SxavkGEUA56qNAhZ6uyagMZ8qZVXGwZm3h2ERbf15nf6hUzFtxZmoFh2BGkQfropaPuQkxsX8PhDyH",
  "key11": "5E7Ce28yuge55zoPUU7ExTQDjAWUddy2va3byY1mAQeiYcLNnhLytZta9jftLoRQ9cFbumVQe857Tucu3ZirUvTH",
  "key12": "3aSLxpcfKj9Gk7iQLVPKnvq7wb476ykcx4ibFN7gFJ3tbFXMmPpWPDmbSGPpGVfvVG83FiCzDih7B3EcvrjWJgbu",
  "key13": "W8hedQhWRawDjVn8MmkzXLGAKuHzq9vYeJXVQaoyj7o37rQoteLi1a658fqyGw8Ej24LVtaNqpjqMbrcykdSfT7",
  "key14": "5cuzZijhNuFDZasBXMp1Z51sFJfmhVZW84sD2jPKgNyQF9dgbRbGRCTFcdZ8hEi5KXaPdiat1mxhnQcJB3jzbP8B",
  "key15": "3zvRhHJab48nbftGsEJU8sJnvvZXnw9Eh73Ps1UgikWML7eJiKJTyYALQt7cRaJ63xGaNp5AwQHx9fPq25DtG9ea",
  "key16": "61aPnJ35RimE35EqTybfKUnjhFdnX9UmxngjeNgeJtuhjyDe3X12yioEXaVQJ2kgPhzBtTYKTtcWgoPfQsSubTit",
  "key17": "2YL1JMYo8EHrnuY7HK2Rz1mKjF6YiSfdSMg77aGks1fxZC6XAaUT6Yoq8tiAsUNB7uS9P9oVebXEJXHqod7ZL6pz",
  "key18": "61rTfw7fjGb4kioSdppG2xuKoxJt7z9RGi2nBy3oL4fzJgkGMVfRyt3TJvZ84RhCNSUWbzNxMz6yfMEeZ2Hjbevo",
  "key19": "3No5uzcdK3DtNykT3ddvdA5sSbEGxXd71QjrjWB35FYRvPd7Cfyn9gnc1Qrc2kybBDv7GnwKQaEiMmu1yeYRdVx2",
  "key20": "5nS4tBAyL8RLovYyCrJZTQzdqP3TWP626iU4FSgn6tzzbgkSDJQZMs9uzxYc4UvGjeyqfSnkycqF8iAXtoNxDMzv",
  "key21": "3qDrpRSTyDVcWnPySRrUYDZEZjhYvYNN95rfk6Dncg7MpGED6Ef1ZtbxRCEKC1HAeChD3KbFGKauRRkkTMaKdCMN",
  "key22": "4xbkxmtziUJ4XGeZ1ZKh5hcdjXAXf3RnuKGtdibwh34BKxuxtFo2EqXF3K98s25jHxyebpuUATmdnZibNS2c6qXa",
  "key23": "2Km8MCSUjZS5Avury7zwi4fHGnF4Dw6DKjZbQ9eer2GZgCUcw2La2E6j462pu5tex1hP2WABNweeaYzbC1m5AqTP",
  "key24": "3MsazjdPBavaVGG9DzhCWYS2UiVryEijVnWrpLqFsCcSzcnVSP9qDgobioUPpLiaHdahJHrfrDEvuxmZMBYwt8Jc",
  "key25": "3oiMFWKtHyogRTmHYa93AjhGa6KARQ2ejsYgFgKWaXVZMXAhSk9eiDKNVc3SnuRwH9sfizyjzuRAJ5rYnxnEaofx",
  "key26": "4U4wkU7s1Czpt5HZXx7z1U77Q8TYvxnw8PnpLtfrmgTw4TCENmUKA77yCQWGbcv4V2fJUiLYoBSmXyQZ4TvCS3gX",
  "key27": "2ceqpuSEW9AJwDvN1sEdnVjMFnq1J5yo3YZtCyyQUvTixw4GxxCWgGHWqkhoetkV6CSoHPNMyPR14xnVpT2cK9wx",
  "key28": "3aeeTRbDHyCbQ3tkP3XEQksVLuZZLMGHDxL41MaLCV82m46dH77opECeh9aieJT8FjLHbmRHmgDV56AXBWRGjZEt",
  "key29": "3MjoE3dd9nTputxrhif56mGYJedRn5CXcfxbJDDV9eehGP9eETLkuLPKHaerymuWFxQytubRQZXE1VpiQ4vNqfzr",
  "key30": "64239ywmp9Gemxy7QiNRYU1M3jfFa5Q4dmuwcKvnJ1rLVNhS5pkgq88SYHxVeGk6zvToXDKqTcaTb9xbfc9myXtJ",
  "key31": "4tQTujGBu5ywobVsxupZp4VLzwERKYKXpc1nTssLJsCQwjznSAmi1xtVENmY8umGxZQNpg6SMeAEUcFcsaaK6WQm",
  "key32": "4zBJK82xpp2neWcCrzck5jxW3rKP8bEwm4EZvBX34JuXmcfqfEnPVJo134fQc4PDyAcrSmUszQBpER5QEbevA9XN",
  "key33": "2XiDxWahg8Z8GZBnFvbQEiiwXmsVPKS45K95CzHbtJu54QDYiM3ZWoRF3CuL4HR3iVZR3ViVuYkrQzFrQhoKCmwN",
  "key34": "2PeMqNPyXiPGNbEskQjw8f6e5ifkrRQUbVaiZVZSNgodEyw6avn2r8BLxRtTcS1WNSxhckLsiqiXt54yZnGJZaM5",
  "key35": "54TaWrC8i7CF8wk5jR2paLL72q1Mg6gFoRHehurYc8x92bwBzgvNka6vpSLm5f8D7uCv7AGJ9cbjzHkCBPeL19hb",
  "key36": "tji8yxqMpzC34FR6xT3F54NLJjzaQrYKPvuu3jei979SyqyWuT7UySWwE719oRxMP4RNfxpr2YEbiKeWTLnZgNE",
  "key37": "5CAUjQ53Zc2HKET5piBWEikTSHwixM73Yh7FAMybHibhoxMic2QdZXeMZGqPJHbKjSBgusaKSARgRsKGeadA7fwp",
  "key38": "39ZN3FuF1LWfAKQbhe5DmKmDy59EzrJPBDj36zVNNsF74NwsbAcJNW95R2v3457TJuLv7M51kE26PF7svRGfT3o8",
  "key39": "5WJ1x5BMtAXbXcy882mFKwhvkENHzkKx9YPSu6dSXvTxo9PEwauXgpxzaKa8ZzQ9SQoi1dFwess2cQ4hPSJeBt9o",
  "key40": "34SddCVmjjpoFkeW63hArTWMiCWstRqPU1LieUtBmDqreAv7ARKfLjToDexUgXcsAnuuYELUb2CM7zAofRBaon7k",
  "key41": "46PLeRc6gRtxnfPXoZzxTNueBTiZDRTURykM19ZuszEcFQm4G4svazHLE8B5FVyrCVoKH3C6w9mgXXVFns1884Mt",
  "key42": "2zAEEHvnYgcatJczWaA72pMacF2XE5xSvKESLHHfQVv1ds7THECUFZjv8yR2EsJPDhgyRaMHhKvyykU3v6gGaprH",
  "key43": "2vje2ZVESza6FRCAs8wxcXnuNCb1jCnzoSv3zFaPiA8cWmtuMBC8NKgnL1oAPqWt1C8hZPBzErv7oyFqMvJmWoHS",
  "key44": "5GXAEbg6pa6KrVaxR15B9BHyJGRxVUrmoWY86PdTCTTrAMB1nVWKm2tL3DsNBKpdwot3u5GNZ7AMtHAdFsigTjMV"
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
