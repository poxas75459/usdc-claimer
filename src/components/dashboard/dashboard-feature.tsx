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
    "3CoKY1QEoGZEmAi3DqrziWeV3QypcBJV8FhuGgVcKJBZf8zRYCHe7dZDjSwEaKYvKwYnou5xfnJse3BnAXiiQFke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxpAfP4wPiJH6nCDQoqYwXThsu9MpmU4dc4TF2eCmDTGDyQMKWYQ66vdZSuyCB8roeXBAwZENhX3nJh7etMUtNU",
  "key1": "5jnxe2nMfWTwr8rRvUpSXNDEPM8tAcKSZ4Cf5iH4bnwxM526PzJJWJyyJwqLuLZC6ZyTe8mSayyX5U44zZDSMKsv",
  "key2": "2CmQNmRYUpF59exzkJ4t7iwzPtyhPmKSsVwf2LfSTCLqP66QV8HkX1gdM8ZKp9GRiyLCQ4cs7ptrTwod6iQ7hDTB",
  "key3": "4Nxx8VF9QA6eJ1P5QnwXkWa887M1TXhn5EEKk3RUEhCvpAjzjmWUw7Swxua9ww2wVUspqStEaz5uMgP3wn6ebtht",
  "key4": "mi2Ep7RvWjWbUmGay7XMMSnNUsvquhfQ5HLhtbXW5c8LEyWges7g7e2fhX3YHk4mLa7NWU74Ub8auuVPsdMDsjK",
  "key5": "4gyRSzXqayst5eEDejc1DDvNY3NtkjKossHvFBVRPacLidvHKYPLQMbLvHq8WHv9VLYo7B9sJF1Pa3mPM5LP6u4A",
  "key6": "2YNkKdpsgoNsSs9sfb7gn1tPnBLbtxq4g4rTrQUjjZbK77nq3v1eczyzYynBhgYoDqVWH9ZeL1dziWBo82npczjE",
  "key7": "31e6WiSxypkL12my93brYtKtvboNeX6PUJq2mvBZLkHVHNHVYwZCm3cXDEF1qrGwRyuboZn13F8NJx1N3sALafE8",
  "key8": "3h4T22GGUE4wzhiGGHoEyxd98ge6qph2EaiKt5QHkiQqDn8ExgGobkhB8HMntfv5TrHGuQ3KVkB7km3UKSQjRtK3",
  "key9": "5xrxZtBoUmKqXp2mcc7Cy3mH6A66yNKeLvjMrbWQBNjbCoVnETCJ74Ft1Uub4TCsJzxn4RmaRm74zm99pDkMcicG",
  "key10": "43dd7FGBcjPcsjJUDrSMbfzqd5n2hj386Feqy4E8XrLbN6aK6c3ngwEJzo1EbS9iAqnkvM1RX3hXeWoFX4L45wDu",
  "key11": "65bxQBoXLeXiJfJeD9v7QKpsSrs7fBtUnirwQWACYVMciAoTi8W5X3amMU6itin3Fz1JwGbh33QaHWvTBEgEi4EG",
  "key12": "GwBzTYkc6aiAEXzJD84epNQXtzKAy7UrtMiqcA4ztW9WyGaDvMhVxvww4h8yhViFUrBmVJuFyt5rw95mxvRfDDD",
  "key13": "VpXF1HWeojSZ4wBFe1nYKQPFgsRvACZjeN9daTy3eMozVfdDNZRMGexkAVtq22781VRBhjF76XY4kJP1xcDyKkX",
  "key14": "uju7K7Qosmi8DmRTPwpaftva3fjWfYvDaXy1fJY5XFgZyvVrPxASrRVdYmn5h77Azjke2wSCCaD1ShJFVMHGCfE",
  "key15": "5JmkhJCPxemwnNR1FU6kxJaoi3YUbFWaFHtKXhX8cW9ccJvrsxdrScqNgt3E67ER84nWdc91cmkjwb43pm2CGEHG",
  "key16": "2cgHvQ7ko9FqX7Bite3mE4aLuysjdgq5rn1jgRCvEoVzcjJ4oEX5Zz7DjCftDzthGuAiAyLnck7YXiRRCfk7sZi2",
  "key17": "3mX2zov9P2jatc4CkW6jrVBgscvNK9VJKzh8x2cZ3Q9Ghj2jtH55hyaWCLSLsQr3gx1KgHPRigUz7mxBGXyFJZgK",
  "key18": "4qe43EQJ93J2LDGLGF9NGfJ3JzVQJ4NWMkVJ6dapfiXoNLZCCVwMix2X5SoiTFSKBPzbQsx9cw9zqZT6tA1AK96A",
  "key19": "3MLqyngD8iiUp2PAeSRUQQi13XZcETw42KTWb1tEyiLdh6P6b5iLtTEyMkdbo2HMPXy6rkLmvkA7kp676zaBDzSy",
  "key20": "1twzjMUDgTKXE5eqdZWj4J7isb4Qa1jpjZhoFUH4Xsk7ZP8i5nTFA3ZFyKbEJy2mM6k7yDdxahSoDMwsSPfT5aM",
  "key21": "CprzkLLkHMRb3BcsHM1ugqkcYH9MeS8GY73VUKRGvLq4EtMgHfes6gmH3yYzCnGMuShJmXgX9b5AnPt2cCt7C1F",
  "key22": "2U8zD7t6TjtkxSBkPUW5nJJN1Q6fQ8zkVxW9WtAu5vp7yBRVztNTRBVauBViuxnbm7hM3eFqLQYF8WmReUteRRUJ",
  "key23": "4QwmPAA3kwRefxKoxEZYszSKP4ghPp4Wt7yS9zYuFCKQzcuK3hxFpYpu9BMHAg62z2jtjDhQLsXchDttXWPf5TVo",
  "key24": "45Y47rWQdb8SG4JAFc4tUPHMnhSABzbA2T5F83EBV8pqRJu1D8yds5bzQsqLM8L55nJdo4gk1DWVFCHVa9xjaUbu",
  "key25": "2hAKXEiT9SbELgmxGSttbKhViizmWpeWjk4JDgP3xU7W1kWnWPynym1ic7WyzJpbZNne667ob6udWHngWj7tdq6D",
  "key26": "4YwS8z7VsHEKvcqjdE6FYqTe5wWdfQ7oyEpvaAybg6K6quf2ZLsGG5SKpQnNFxn2AGHJ6mYHfv3Co5iytSVcCSBS",
  "key27": "31sMzNchaxe6ZLThPEMVhqzjq9APZUjsgiY8epgAQg1sGa8rnYrFxKNKKbjUFGu2K2vSm2LJoHwQoHkfA6YB5HVJ",
  "key28": "2HHxz3tqE7Q4vmUzpzFC2MDwm4Mwo4pjcr4sjfrTCohaQRKbcADDQjkCAP3t35igRgiEnMdaHuZSEbTCasb3TRX8",
  "key29": "5Bb6o2WQjA1kg6rb9PFv94nxezNEukDXCCDbjSLAVpwLaNzh1WBt2Yd4jiZ8XYdaSm7bu1Y1JD7eaVeJNczKNTuK",
  "key30": "3EphGRbo8bFDTQBmR3fa2ieNZtHQPoVgpwWKHaLmbV22ChjTvYnesijiNe1PNYF68Nw8w6h7ZEgcD3c7E6Pm88As",
  "key31": "JMdcDaz2BanjW6buqT9CiRKvkyER8rUM3SmXUBeSArn1VJ2UWLBjVADW1daqiKwW74G7u7Dm8zseUrtzJ2KS44L",
  "key32": "3nZ5dSEgjqqPDsBK6VnDqGTFrHZTtGC2FJymGQNHh24YDKVUvnWwpx49XhXD827hHF6JtVdGvTeSn7Z7rGEkY8Z8",
  "key33": "2UCbJ2h8q8Anps6HuFCx6uYLg3BStSqGT97M2XFN6vbah96ybnJ5FpqfBTkcKo5ao3GYvGxkjn28MVQGjEqfxFtW",
  "key34": "5JFCJ9Q3y3Bja46qBvEGGeKbkRs9XdM4MnFyKURhohvzSxsTg2WRkTrNRLB4oWT9SNDUmSMHDZL5TsM5a5RwAsmk",
  "key35": "3udz1V4G8fZYueMCGG8tSi1SjirqF1DCagkNyWMGxV8nv96YvqPxyRAEneSypt6nrCxWar6YKg1wCEX4ay5xuczA",
  "key36": "UECorSU4R3Y1JUnY4d3gtqRSQNT6BrPARVHxbP6JyhF9SkFVCD1XZKbENuR86HPfo9zsHeVtK91jpBZhawWgTqH",
  "key37": "5RuENiinJrBZRo4E3nDSu9dYvhJ4Hn3JogbV5dSqEKBK1ZSLfMJqZS8NUCQYxTsSjUE9gud5jXMX5fF3FhQtYU3D",
  "key38": "4tRS3oHWyqXeHM5AtDMZpT4H8eAQ2rEBpDoPbzCUY3x5tbewoVPqhZCd6mVKsavqwziqwNocPJ2JKHMPYM3yQrBj",
  "key39": "4jw4hfcZxwCePJjvCMZ4G7JBW493urqg76qNPSD6wj3KTuTRtVE4supquQnDG2Bfi1fDmyEPvaxeSHJsjrcnV9UL",
  "key40": "4PM756p5NfGdEqShVujFxSgt2c3pjEKBvMLB7XnppW3JGXZgGExTuN72oUKWoYTokpRCEZsb9y6DbErWgoGZgHxw"
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
