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
    "2M4CznMWZbUeYRmka7cB94KrJWiDpiRmGVjcNKbpQxtZqRnNdq537ZkD7xXosR5rGA2AGfErUa9DmFXgtHjdKwSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MxzSxATHKrfYaiuyvBpyz3ynBFaGWXdKfmm3XUez5ngdbeZfh51vNZ4hfWrr6bKx3jo5UQdPBoGszTAcAekM2CT",
  "key1": "46eFacuUt45T2yTqfs9X2NChbesUYiXAbM4CarbS9vHSUnoqZwyAfUEGjv2o83JvXEARsi9Stg68wUecDTah6unE",
  "key2": "5TXVrXLUJKFwpVsfbEDnv1f6fPWEEuseijTiM9nNM3K9hnXzStEjNJp7a7f8RLd8WyCMEGSBp4Dh29PfVYLS2Fur",
  "key3": "2qvznBWQPAd29neuRuApThUXxNN4znuveJv32z9UCqzrFjrApuDgJZjRugYnr6ajM12pjEPoHhXtoCE2yhFCmtc6",
  "key4": "wMwHHEXEn69byrbveaRnVqiEQDJn1b63FripKsBndCV8VYB17RkEuXrL7CVXrixMF3ADFekSaj8e4MWdGNZ2kKD",
  "key5": "9Su2d25vYoTwgRheRJA59RjFmoWkcUcH6AHZ2eNLU1dqmsb7u2ket7pqGLWhrfJFVmdRMVvvSNParvhKYn6YJru",
  "key6": "4jwc5QyD6MjPehAqXnHPbo5K7BZRr1QE49gsyKbNWi7KTgBsbTSuLM7RNufJdAiaDPfWmF3k7mmN51sRggso2EmR",
  "key7": "3pDZXWY1KZcD4VkxtpYapqCRViBFemLfFkbLTLAJed5MijXyzJ4vmtcYjakv9MhW7N3uqUod9xe5etg22c13wGv1",
  "key8": "21ckH9tuoUodPu9bgVtdHmSuCEbbdjb9UrEwLsmZuvVMt3ygaHfjyQu5kP6sgveJpTPKaMV7FCqxNWKRKyDC14rv",
  "key9": "3tLzASH3mRbErZbCh5ecS2Nnoq3DVpUboRtEYAD1B114GuEmPrtedmRxjgNTvpEc2Z63wDu2sUUmhnpf29JqJxHR",
  "key10": "5vqTXXZMPZLBjEDdpr25xD6rGY7ffaCGpGh6TA1jNTrp6ZQiKN21VE4Vov8NPZWnzmuG8Pn2DfnAPNbBergms3np",
  "key11": "SConimapXcjpXUR2gkrtu4uT2LedW8rkHh1EcR9G47zzQEChJQyuCPRr2usWVxN6nxdUsiBn45217aUsLtRoZSj",
  "key12": "Q6WjC3rqFawjV4MhnvUYcFv5u3ERwqpJ599buKR2CAFVVm2gQvQuWF6osPUvRCUdCAhQvXSZm7vPMrYNmrpKcXs",
  "key13": "4MNHcBMkXm1Cu2rbJvZigGGwK7jNuRNZ8y4Yt6NgaKQegDW5MaQAmZMgXtyei7g6JY6KQ8DDxE75QytggREi4m52",
  "key14": "3ChwH1TL4EBkA86UV1MhAq7HMhQK1wUQqBXhZTWdmRuUMoxQ6g3D1ZCnsMcB6zhjURwdrLYproynLowL9Wz1GxY9",
  "key15": "drm3PzrHA4SipKLnt4PHsy416PorkiMTFA3uJxqpJPECBVqAirsqVUdBm6Vzj41NVY5pYGCvQ16AivTsn1QjZXC",
  "key16": "5w3Tj6KYnQb54hngpmbgJykuDe62tDnNwtAJC2fNNUirdrfrNSXtAodwyaAmeUnuT2gsV2Ukm9dBQ28u9tRJdFie",
  "key17": "3raTWZosemndzdwuGhKULeniyAB7WnxpGe94it68H54HJHPfDtAJvMpQcDGkTtS31SAh5qTJzT31y2geJeLgH6eg",
  "key18": "3a2E2KY9fbHTjGNYbsXqMkAGM2hB8LeqMB6btStYGATghCqGBXk2NFZy8ze834EMVaYSTUSWe5Z4UZd9nxcrYBT6",
  "key19": "71vyGJb2ZRAihUoA5kZs3k77QZVMzaDtZSegTR5aaRbLMeBbPzzyvhc9ZuTa7vrPguKBqJA3q7jMjAhdLg4doxt",
  "key20": "4HVMwP5QZp8xQGpSdPfeqHqBrmY97XAWDxMix9NrrDBTFywW6trarz8r1XQ53UxxnRyyWm9jfXqe9JY9pTeCUi97",
  "key21": "wXck4apr4i2tQ6fPPgkMwL9NsqfWEQoMzH31wfafm3JsWBHmdDrVbdgdd7b9us138kfX8x4w6cnPfUY7C3wf8J6",
  "key22": "3gVZB2ZAYHtkitMqhBTLf6Xxh4r7fRmm9trBW1cnFkeHRpq5FAPdvzLANsLgKVQRAwKPBjdC7u1MXxvMnG5re1nd",
  "key23": "5m2PhB9utHXWM7HHHbXfKAWrKkjm28eqog8iXwQ4fyyKo5GPWfNymoesTKzEkdp4FtNcxcscaQDbTAjAqFK88rGB",
  "key24": "37NRaMXH6q3UmiZE6LjZpkneiRY13sfcQtL5RbRcphUBcjWEyZn6ZHynVvU6M2ohNt2tmfSzSUizDAc1VXyTwpEe",
  "key25": "2sC1FwdR8p3249CuzRGZR4QfLFv6V66dpC3Q3Y3EoAKpkP6YLMYZFuH5Q7k7P5ULL6XBBXdkaQVegoep1PT2GFd1",
  "key26": "4gsssdpJKJTq5TVkbKiZojkQ7cyzigobx3oty3nxN3p9gL8jnnLWmvqpsfU6LRZXGc2tfeQdcMXpH7dcpbSetbji",
  "key27": "5ken4HSaHyme2HskgGfurhitqPFG2NDPxLcPQUg9vfXnGxYs6D9Zos9zt9NtdaNJxBG1QHKYuAxuwmEVtnHY8ztg",
  "key28": "E61zs2WJ3HqvHhEd691pBYmbBEd4cbCEdPnLtsM6AqDPu2EX2vB9ffAtMzfuWhebFbepjRwzPtdcM6iqq2GV4Ya",
  "key29": "4Tcu4nyMRBJKwcuoDTuduTdmomCZqEx4isoYMaHLLtRNFTe1wYHvnNE36om5HRf6YPerQFVc7qr9BGfLNozBjZbv",
  "key30": "XzaeUzxm7ChGhPLAmeGUzPeiWBzBvW7wZ5aruMeJj9iB6KN1JhqcUsjwfhrmdukV5P8PSsfn1ygWfcXon2q5Kuj",
  "key31": "c2R4VyyfKSc1NPiJf9Nay5UsE45kPd2nqVyeqgnEXUMeM5vPJWWunBQgz3wKwtyFk9uUrCi26BxGw298nQHS1ED",
  "key32": "36cQa7EzKaM5hg99m1Ugt2V1ZqUZ511Rx2AsY8m9dkqsTNFEQTeYZGEconUeUpi6NVoMctiRBDPi3KvSF7k1M8q5"
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
