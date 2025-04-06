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
    "2MAW2nqXqTjEMSBrMcEpTTWpRoFnU2pW56dQF4DCaCRtkWsocM1G6p9mH8s2L1G8ytnxS4iPnU9vqK7RVSuVjptX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnnDkWAgdDKd6ZCM8NzQHaThwuEiaQUBZJMtcYWJfgvJym9Wkdq67EPsWYpmPBXWyotVM9AfRuyMZMjVMNwQhz4",
  "key1": "4shC69MoMWXMN66u5UEbmYMg3yQ77xh4DQ3E2QSAidXAdULqWFR8itHDB28iyC3tChXDAmWgAbBmc5wV4jJ7SqvK",
  "key2": "uMpG1KBRfVE3de3KuyuFqKiioiDmHmK5KxmF2zRyQRH2qW8MiDJ4eqjCwETD5TWY9jNW9zjNXU7gGEMnnnjnEFZ",
  "key3": "2TFKzh2fa1YSsDgxLyo8DmVPGwgHtSuMXRZmtcvgKqEjUCkUvsh7qaMgjrLCjcNvvCywAfNsiqVT3fhvt67CTFXr",
  "key4": "HLzEJwhUN7uqVWv5GTeQkmXY2d2RJdaTtRXpbfByg8gKeVcPKgGg5ePkZXcL1aoFpxqUqARxUqGBHcWcRgnKjKm",
  "key5": "3NphUL1cHZTZgkdgFAcizgnFcGY5dZxzYo2JNhkZ5PKRG41Hb8K48Skizmu238scFPEBErKFRGknVF29hcpttnXg",
  "key6": "25ppVKipPmBqMrYpsEUwavaGiWFiZ13gNcQoELjbbi557bvaMQtwwMtpGQCUjUGAJpbqfPUeXgKCQid9sajSUtat",
  "key7": "7h6CryPcN4sKMPw6F8jnaiDkwgb3JtbuWA4zVxX3rWpnuUjPZgSnas7mqKMfrLEe8GQC562VEbiiKWMtpf6noNe",
  "key8": "36irZiDAo3Mw6JVGCvb7mZ6XhoBYjx8XymPByh5gY6qtiD3rDVMcTh2mBSZ8S5VwfEZ23KuLMGuaFJukP38WXtb",
  "key9": "2jrF9zsVLe3SyrAYZvRyX54ndRRarrtjdqcFboUU5xV6LZX25FNf5MoaFTZMKoM8qxD3udEeALh6cnbczQFu2Cdf",
  "key10": "5B49kSXjRUF3RUFwk2YnUUdeXchy7M3k7FCQDCKdXjxDf9hAGgzatXfFW29d76YAV36KUw6uqfzZaMx93mAHEBb8",
  "key11": "48WXqjCksw4ewMqjYm3JELhxV9X5LdYzuwd4R7EpKv4VoCdVQbbUXiYX5vPcGqACk4gu2UJuqreT8DTrYp4wojAp",
  "key12": "5CuYZKt5LRUTVGYzcUH4BtfU1YESiq3F342MQqbJTAXUKJozu4FVWUYmvdvbCMkvrhFPbssUq5bgYqZzKgXS4k6g",
  "key13": "ngeJwMsjD4i4Gwy7tBfPbr18ksDTDMgcY78q9kRz9PyKsVAwmk3zLNWPEsDEtPgjnEpT6YHuvFGxUjTc5ZAU5Zq",
  "key14": "45vm8m8fbmD85zmdh3svZq1imRxT9HojTyuZV4UmWUv25uRvAgzJUJ2BokGBzX5hTwg5CQH6FBV2L1svaTrYP1AL",
  "key15": "4jQjV3w8pAkcKdUYYZMccqDvPMa5BtY4XogYis2DxTWSBgdhLveGDTZNQk17E7hM3tZFrugymaWsBDoYF6Bsts4E",
  "key16": "5knPARNzq29J5Et8qFpQczHvbukce2M1EhHfekXzR1jvjqpLJZjX1gMmhf2WvEbDjMe5EtBDk9oqHeAPSJYJHZat",
  "key17": "34QfVL5voKWH63CdsQGhwZJ9wJ44CAgDkFL6FhLd1fbSo8dQcaVZgQvnhbnV18xuF6r3BHM883KRaKupTimVhXk2",
  "key18": "2uf2oeVtKHBDJnFE2Yha81ZrSnATmEeCth8PtbzdviNMajHSteyJUhUBRjvyBQ8Y6jeU4W9z2piYhiqJyQ4Bd5vL",
  "key19": "xSKGhzECbkEDfLN6o4HjUNTnoLzDixWBy1YyBPtisBvTr3NdrrdBZ7ye8eKpftFgEDvSeL3KhuNer3wRMoRBEdb",
  "key20": "2SopHbXC41GHR3rHrAKLVNnb9zmS9FBNJHRMjQR5VHphmd2JhsquJ8groXbfb816dTVcnEPAAePXypupNHd4g8sT",
  "key21": "5GsFECXPAvkLADTvgDybvUcMUYwgp2d1ZMNRewCJpmR9MRr1QyfPDGesdrKC55o8xcJ3ffgr4fEptU115MsXq3FM",
  "key22": "xRUSZFXgcF9DAHspQQp6eavhMtMeaTQntxcnGsWr4383HdrjqBSyTAMEwD2vUdBKx6tvmVNRgEL6VM3P9RqShbe",
  "key23": "MKRuKYGz159DkBerqr2ZBoDcZt8ZTUi6xR8mhimqVxBMNmKD2osgUwq1ceeyZteSXu5vGYpEnDptz8sxwPhLxEJ",
  "key24": "3kWu9kkQzkmtc4zkvi5GtU79MddBfobHNyrxHQZRVuM13HKngpY4RS3Z56Qi7bnivcYkasbjBBL6JEFLTXKXrcin",
  "key25": "2wScjfhCRUxRjF45B3tKfUi2guGxEKG4Vb8H89i9m5HzVmctKjLXaaMBvxkvGJE3FM6RgspUW1YRdRGJMy3cFuW1",
  "key26": "2YD5MkdbG5ZySi3HTQCnzNSyjeD57oVdFcaAzi8ovquWnbfGXFXZByfU1qQtbvkDajACt9sfuBscGaoja8kj4UmM",
  "key27": "MjMnWjP5zgCUh4LAJmpot1gfxTsyuPAH78yVT4HdTYWP6PDR5cfKwUWv3PAcSzSFAyN3Um3cAcMjxUw5PrqMsS8",
  "key28": "3wyZFNfwPS6xQ8WwgJ2n5ebKBG9y2ZFQKJg2tnHx533pGMJsLRAKEqnVfaPVbhTMNXCANHnB5TZFmLPdRBsJh8RA",
  "key29": "2H7jepD8pTdpMQcuh29AwT2KtssLwS4SSH4UJtgDbo3Z3N8jHNEDWPYCmDjdTU4AGqpD365Yuxr1jsQm4UYPtyj6",
  "key30": "43HmQBkJt9AaLGipkMdwdWoieab7EtvD2v4PVNy9Svejo9n3AwHTVVFycAgd7xdKoqLPgez7S4fy2pxHqnCDrr3G",
  "key31": "2RToEQ1HgnLVkvDJ1PPAXAYWtV66mmhrpRvCo5mAeFAsCUoKtiQW4qxNFDNQHB89Ei4uAijyudqYkXkgRNgtiHxg",
  "key32": "34fS4KgnwLrrxNSLaBHhLgV79YJBFHNvfUTwB8e2DDmgEXwh8UceLvpQLSu8BcymRGNzhVqvtUDzoi68y88zBL5H",
  "key33": "2AdQ4r2qjnfSM5Jb8ZKY3k91MWE9bjH3GsiwViNwmReBBYr6C45XBuqsYdbBKTMg89biMu5psJf5x5tdfsA8nyfP",
  "key34": "3Rf7NQTQvK925H8TQe6ETErVW2eX5Lr2hmjaPQWXPtD5b59JTR9sZsPArtNe65EhaWtrgKHPSM6FtV2kkAE4ouXE",
  "key35": "kPz9GQ9AWaq9gGAxvVsTRLyo7fq1kmoB8f7R8bV5hWug9sV1penrZfrDVuVeNXAisEv2gJZUJJAbBGsGAa1ANhQ",
  "key36": "3iHsGmMiDejqbqiutf5wT7RKcCmnoTRgz4jP6ck7AonkhTVv8itaQyQhn4xae55EEzyt8JeJmU6yWNYTAN2vZfco",
  "key37": "36mx3RRDMoihG5GcC2PZpJWRHns3XM5H3kFoWHHNgNCqH7R5eG3KEkXLqXdrYufR522c53XUDAD7e5cAwz2pbokb",
  "key38": "4MCssqLYEXTPAvMpX6v8E9oXK3eDWJqw2W9rY7fAjQVRtRMZYUdASLUsxZcx5ucTvh6c9qMUBiTsMnnpBSUVd1jn",
  "key39": "5ZH1HDhprNEPghETeqkFEdHuLnXQDyDqu3fTRcu3962oXwRkVcKHTQXUyJbDda1Vw51wwEp2dbycHasyRpmhJcLq",
  "key40": "4bPDQ47qc3xheMrnWzgDVJmz4TF6eZZHjv22QsUCeoYHSxXBe3y2hmEnBGagAg84jARgoQcNAgqva9k8rhTshLuz",
  "key41": "3qR85eLayqQ6svXL1AMBZRDYVan2DZaQtGVnyYRHmsWUtBE12EBrKhbt2b4rzu8MmNpWEKmRtAVzbALHv4znij8b",
  "key42": "5JKF32pcbKXuDy1c8k4XeJLgnoTur17oxficEVbZtZpDDLSMT7WTCaG89jLr48D5Qu1cjkCgAb6rM7H8X7rGVjjr",
  "key43": "4DmsyRW3mG2McnycehqzN2P4gxBwA3BFc7xd1BKEUZ1rpuCjTHYENpZaKJR79MUhSTQvUPFA2ZHKDVfFv4DZhzwp",
  "key44": "3mZxBa4KQ7Cfgexsa6KPE2i4wT9eJVrni9ZwMvftjq4cSMk4AUoDEv1khtCXxj8oCdZk5NLU7sUJXKt27KKZRh4W",
  "key45": "zohDGMMrzGvshU59jFfyFnUfcZ3AhwSb9r784UqsPSyrxyu1K7GqrtD3iPwcQcBkzW3PRQuczYUdpzHWzPM1YU4",
  "key46": "449oyDu49jbCxFCzAwVfKJzQ7JCH9PgAgYN8RfRSz2enSUyBABbs3TGwEbdswk67sfBUB1DSpgMQZx3nEL8DWA7B",
  "key47": "NTuSktt6EK9egBrWPH8ZZwnUhEibrsVDcUbE2C87E5ZLG4RgwRKV418RQBY3JzNbdemY1GrWURdxr8cWabPrwH4"
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
