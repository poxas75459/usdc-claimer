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
    "4hhzyi2H9EvZ67pLqRDq8oFumKt7adouo8rXyPocVeWu5TgpwCyQjUFpznCmHCSSxU2uT89abHo759W8d1XQCahq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BAkvGiTti4aEGKzCqNJpWwZnukPvrVJbPsAjFQVNhSMKm3DpNuVD2BXZv7QA9VCNoDWg4aTUjZ8MpWf8kQxoYR1",
  "key1": "587kTKvkZQ8Ko7rBqS2PvKEfpBVPTApGRmo4E6ghcvTbdXRs88VdAMdqgjdNSRdi2dGA7T4UuTU3XAJZNLqJNnnx",
  "key2": "5ZTAb2sAhxsomJ1uyCbsxZw6uZcAd3rwMJHppEwfMDXKeDpmPSfDjnp5EHaZdUZ7nryqj7TLQQwcHbSA5FvXNimS",
  "key3": "5TMmJa9TDxUQRTLryaPZemhWyXY4QoWQgnWgGUHS57nsepNijLkSzdEkxgjDEpB5oHdnW541K4qoUUKhrFCFfNfa",
  "key4": "kGmA7X4RHj6EsvtpqyFmKRrJWRbdQDDfuNQPKfmGZc6GrUgBzBUUxzZ1W8TcQdgdB5z7EzpGpiAisJyCSG8eACk",
  "key5": "5N2YXXVT9KDFq4uCtNBgNnAbCzvYmu77Mxg3HZaL4ZbNnxh94gU6sd7BznywsSpVJivmemzwTC8AQfkw4sN4JjuQ",
  "key6": "63qLaPXJ8DvLsh4NwtjSWakqstcJs4jpRvuwJrCLguNnWvjP3jGCNL7enQWRkkya5vqgpX3sMXXb1obripA29rWS",
  "key7": "kemmkXy9eu4JA69tyu3aeJTRmJseASWWhPLJmDDQ1TBCnrVPoHeBW4SjrAFWnECv7E64g1PC5eLViDbPLpByhNK",
  "key8": "3j9kKwf8AJaho5U4kNaTw25AvUX4dEXcW7jfwmQfm1HTB724v2YE1XHZ5MoHbkgK4GJU8qwvoZdY2Ln4eQsWEPiR",
  "key9": "5YyWcYimsxiwcDAMUG7SAG2mhgij3LzuxFQYVdyTMyPmJQKdMmHvMdbS7SrdcDxP1Xbjpoe2MZb79nwUunQbSWPu",
  "key10": "55L25CPg1fTqb23xU5qbiztMA1YoojU4jEAgZwxkseYcSamdCmAqNK6sqPPeqUNcBu375jjXdL6cZh4r7gv4PKhe",
  "key11": "4YUAHd9fpWXjqqNfq3C6poGsC5kt23axTD88efGDiJHRsfWfLEDyffSCB3tZ83imwuJDh8P8eKGpVXreevqQETZ2",
  "key12": "dD8W9fJURGeVzU2jMr1eLqkugth4zgxwGGkop3JcuuVtVYnxrf9uAGs4NFKmd46HGpUebGk3PnVcfP4hmkYaAzj",
  "key13": "d84asNdiLhK9b9s9bvz5XTaptCZtCZ5YkkNtZydyz2Eeke56mKgRq1dE2nMvsuv96fXgryzrhi55BHGazEn4uBo",
  "key14": "2PAzvd3kcpd6dcyfxQXv8kGnuDTdtcKd65ops4hJ85DueD61xdG7NDPT7AJ19ZbVTANyQsthDbtcbu93dTdwb4XR",
  "key15": "3AeQKdp9oVAvE39qjufokjYuRwmphZApQ7N5og4JLAz5tdqVuTLDE3cCGhWjQYYXmJYbGARakMFTL6GsvrD79TBL",
  "key16": "3J9oazMoe7eCVuoZxzWuRKbXJqSQDkHBw79VXgfkyxpqtYd1QHrVj7TC5jgC5pnDXHEMiwZSnKmT1JsyA7BGnj9Z",
  "key17": "aHsXpBQyzp6sQSoW6RKV9b28q8Rs48j52f6xuuALxc8RbVLukq4rHEyaQxH9dP9rNrCD1qR5jsVFmg8FLHMk7YE",
  "key18": "4NdFV5UgwKGbxhpEuwh3iDzBPV7q1jw5c15nmUDTKv2cYmq3ei61HDb57QbUYr7M9wLGkeY87ww9tLknzYYN8h3M",
  "key19": "2pHddquCM4oXGnVCCapZQP2jMMQEv3tRRordFnrZtJ9eFrpPT8CtHcrmEkAYsHyks3gZENzLW7kpPfZpK49zPhfV",
  "key20": "2NC7KoNDoLnRM1dHTnnC8mDrrGLsdf4vY4p9kma68P7EKeveA8BsPrMmBF5JVFW15dndMH22kuVJsz37KGrTrZYz",
  "key21": "FdhLSLkWkaLag2BSTKYqwG5NuREwpkuAUZxgzBiE7iFXtG9rVMZZPc6Q2tG687VwkXqiSRMTKXCVYdah2rGS61X",
  "key22": "DnywGnTvRrsgfxa4Qs6dGhRnGgChoYJiLy1auSvBtkBemv9kk9gHvAk6ngmmvU6rDB3xETD9XoBmM2kbUvw6Fe5",
  "key23": "2Zt1oDMvCz4PeS1HdupWP7y1wAEiHU9hC2dmUw8U3e4XutpHgo5dB9TbtFZ3KRde34fPAJkhsttHeMv6rzfnRxYN",
  "key24": "2U396CkLZRnzmjNMZi53wwxrmpyehbErjvEStLRWpL1ikQa3BW6gg9A3VrQWfRnfWVnot7VofzLTDp3y27jyCffq",
  "key25": "4bJoYyvwECfahMtuNL3AZVM5tY2Bm92Tv56kfL93not8u6y2sjohGBvWQ61fwKUYotg8eToVrNK3uMuNm2kgAuzq",
  "key26": "5k9XZ7Cw7MMiXETArsMhmyX6ZQs1n4qEC5V2AigjsAJfeXGLeBmTRv2RZQjik8R6qmWFUKx4wVADRWNSoBZZwPtw",
  "key27": "2AGweFzAepW3sc1HmLL4FWS5YTpnh7gUxBMFDme5x2oDdHzHc87rYZ9sLzPYQX3Avyw7HpE6QvyXpDGm7Lnrd2uj",
  "key28": "21jdqRggSfzomR9Qg1ow9MifUVYuFmvVCzFxXycEiqQ99JYE9NoAyZ1Vph8DWgeUpT1rm8bfn3K1iK89ANF25HYE",
  "key29": "3bzw5CuyVrNgbSrfWkR5AB1TuZb9DV1264CQ6Yqh7VvE5UZcCz4wLSAs6ejM6Ph97bBABzjhsyT3TszmUExS6bSn",
  "key30": "2SCqWCdUVzT9dh4kpamrZv24XfmjvWxTe1s6L97ZYFMVfs76puhHCyqK5xEu49eKGgXR3sHDqbhuFHjdYTr8zKjp",
  "key31": "326UEZhPJpeX6hcrRRDBTknC2mow31Bwkd97htUS5FhbYf7ChyTBCGMfLPUqazY997JfLmhPVCDaggcqtfbwnYCh",
  "key32": "3gqFM8AvA8r7ttpt8Js2w6MfUMPUgPy1mtY6LJijnco7UaPisxsouZBvjfNutfQHCh3RJ2mtUUNxYz2NLLwnuLng",
  "key33": "5MnE6y18bnyMkHU2MYBnH34et2LL3VmzdfvcCCUdYnxcRcZAjtrNsoKbt3X5eT3EcD4ta6dA94Xa23P8mDiAi9yH",
  "key34": "375NZkcaxDuy9Juiczrf1ryDWyQ7BNnb35YiTuvbaPo9av9oKjB4B1ReuPxBv1Ehkk7wvryyJgGJXFg18zXDHuHJ",
  "key35": "63uStnxx162BdTW9kpVhvcWWZUszXgeRCBd8MUyw6bX6rjoSiRfj3uHmz4P2srLADQxR6vC9wXd17UYwqR6iiF7J",
  "key36": "3bhbMQjNdKYqicWA8wA5xtGU9ktiMvDz4D4bTjDUAKVtS81Ty9PySsHMf2FvwcqsU5nNazs57yyPuPs5N7t5ZvVw",
  "key37": "2MpG5CzGcgfzvSdPG36yoSQzQ7DztCntBxgtoDHJgmpsBzYMwYUc88fTkbUG7SNcnVBw2HPZGCEt8oroP5XV2pqh",
  "key38": "zKCTdBQ8GebPTPDXuB8YvTqhJdKuL9Ni2fn813UhpbiGdFdnn6DKKnbx5iTMQLsTsC5kjv1qbC8gnqBdcjZ5kPP",
  "key39": "3Uxh5Agm3z51dVyjuFEWhGSpaJSFSF2oUeZSp7oMywJfpY625XUikXTTtFNdVDkeeV3FpkcpJE3BQiuokdpeEVP",
  "key40": "hELQvsNAzVog46gcMyXfo9FREbodAKqzkRuB6GERGFNf9ghpKu3gH5jC8iH2QLhUFu7tWGBV2CqSY8NYnp5yJJd",
  "key41": "4aWrkndU72h3xtjUPdEjTjdbUrLHYTG9McWb4Ubi6MwSbPRxhgzfv3m7usaZerpPFAMSZfg8bcK3gd9qE96iDLBb",
  "key42": "274vEuvmwfza6rJKLHAUAhFo64XonPMrdoxNss9SaxVGXerXVvaANGNdH91beFH9xUXehfPuWYzrWek8tdBZ3E3G",
  "key43": "UzfRHBJ5Uuksqp7jQYP4hG8Z1JFaevwehaWvnfscQvrxSzxqmyUgvhxzA279hCNxxVEfh3hMLnLoKUNHCCERdfC",
  "key44": "5k1ui2YDXbchMEgVsVvLQP76tKisNfvb6gnxj7xfqPPf7EqfFSrzrW3ExeXjoE7AewWr2wNpWiozgMPsvox21YuL",
  "key45": "WyfnP1rTNXLVza46qN5DUufsMGjrviHaejEuFFpoCHRsnDQwraVUna7Y8fg6Hp7B9tokDeeDgraJAAJSyDWrKxy",
  "key46": "5nV8vFRNtiT8tJ3QKXGTei3ibnujRdXx6cizx4n757pQfkPbF8j1dcuup3PNbGUn6RqYBuh7kViKGngRPeFtsWbE",
  "key47": "229QcEUshZorBEwBJZ5FVKqMXDN6TD4XFsqnJHrioBrHoaFvxVwFXpC1XkpUCqudEYWJNeF73NLW3j3W7AD4u3aB"
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
