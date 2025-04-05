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
    "N3R6deJ9UjETxMF9BxzKPZgPbBkfFoQz1Kqcofu44BNnwqsLgNc4n5Zs7YRz1xh1L91Uuw5RwbGU1QvYtgncLaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Njkq18Aojwv9t3L2r8jitSM9nygEMX7A8oahxag2EqvHEP4vK7Xd8yyz9sjbczpVBknXgwhY8cpjoVuHvAPAcoH",
  "key1": "3hs1GQ8tUXTCSBwKB7XTdqB3RQtyzCkhpQfsEUqMyzy2TckCMHWFqA38wicHRwXvvjxWGTvyiuUbDT48ZmvGVRxf",
  "key2": "4kWUqhzZvmXAjhpxWPobG9UUFwKSMvLeYmRALq9v9V1C1KGZUqgTCBt2oLAJWTCTxVErNAgX5YARXaGKfGP3vZ4Q",
  "key3": "5DLVcmzFC2qJc6RgzkeUxFPrpQrrwc57GEPQ7AoocgStYSCuejDEfdyCdJ2fp4S2FZbZzQSusHMAiX48LKsi2Fj",
  "key4": "2VAs7rry1uUq4ZsRXGSqFeUXNytoTJuwhRE2pz8FskpWefC9bGAWv5G7Rp4yQofHW9A8jWtPr3jmrs9Z7mh4u1SC",
  "key5": "5nZZD2tAffdL1a15jvLsqXs4eigWxCgC2NpriTbDSp1McxKR1fSgc6c1joP5cJSWm7HnrUUnnqzSJGbe7ZsvrfZa",
  "key6": "517bE8KRfWcB2knjffYBBCr6EGvWgAjsxXLNTbpvcWvgNRfy4bsNj2EDT1Q18VkB7rt5KpN7hjvudQvbixhGjTUH",
  "key7": "pS7bPCfRQK3paSsnhX6pYTp3YeNBnwYg3rFo3cYHKniTZhVmzEDur9thmUCkd12EaDARZSxPMrb5L1JpfJdniF3",
  "key8": "45W6sCsYSMAqFqFwagobxQDVW5WmycLzuy2gwZhKXuvr2XmtyekJAVxzZNAeSXszDQwkJZYMDuyucZGi9QipB5eQ",
  "key9": "3vi2WWV7Cbk7Vor82C4XfNMnPcu579eeyt27vFRcfK2mMkSVX6fxj9YSqDRdqb65b1vRzjfMm5wts9YjRRnMjWG1",
  "key10": "5rVzgkrpvZ8HaQXanGMM4seXM4vJAG5USYxwxDC3oYVaShUz7HKZQ54rbir1UpZd9sx9bBHimngdVhn8Y4Sft7NM",
  "key11": "k8imTVLoYmibxDAWT2f1gxhp4mTo3cMVTHUjXQFBujKfdLMDKQPecaCxEEs2JXaJiGzYogPp8x691fnF6Us5Xrp",
  "key12": "2NVWEYpsYdfstPz2Z1JZAEZJEY48oBdzaWYDEYshUoEJk68EQ6vadgYsnyaaQwQtejAsLnvzv7VRdEbmYzJpRKGD",
  "key13": "5f3PMZX3TSxYVRy5MAdy3P8AbCrv8k3PuS9EnNrL1meoz7ysMAwJiRS3MrCo3oguDFAyKXrnHEXUGXEHWtpuHAnU",
  "key14": "5xmsYL9uhWBi4dK9moB5wNeTY4dEoALNKsX26UxiXFn4CUoE17vw1SeE1RZ3jH9xQBn3Fmi5jfgX37nmEtm2uYVH",
  "key15": "4xnPoxxffuYSAkzcWu6KVwjG94gN5MDto6jFqaoj4ApXAKRzqv3ZTR65NDvkgkn8F5cGmjyjuhLbMfXoYS3jVKMA",
  "key16": "6LTpRfMxKr9UEffAPzoAYMWuaZm5cM6sx37oQ6uR5MmxumBMKEvaML535N6C3syrL1QBWYPWkmnxJZzJCxvYTkP",
  "key17": "4pDDhWwe5KVQ2R2Ao5UJS7fvQ7aLVwXuC5ZdAWy6wYzLAKSbhLUR1whuhyXbPWwCRJdykoUcYcmREGjWZjfmVMqa",
  "key18": "2VXfNtNtbB6NPpRTBydru7nvGKDMq7m7BzXEiJ9gvErFaiiyBBwXd9pFQcsunL3MP9iLsaHTdw7o3tRR1HWVRctX",
  "key19": "ZdEE7Y1puBRhrEHFDyvLzJY3Guy2huAggzcCR2MRSbae24dwL7XBqjJZf14TUkFRgSaE7WMSiWzNpoj4qcfiWm9",
  "key20": "4NyrHb81qxcKxi85f1xidWMvJHrSYL1VTQgeU9wFZjG1zGzgEHcybvwKcoxq3r8Mcbmogm2pu2BtJuUG1t9ZmqHz",
  "key21": "4ikNCboaAdT61RwUpKA6GLGpzVaar7Fp465LZaBcDMWAuxMMSUr9xPMryMNbbo5B7wGoejqbBX8yidcbLN7Zcca7",
  "key22": "3oV919va9dsrpZDidP8xyKG75Q5ojU3pKcn6pQLrTYcAtoi2awndETmosnczTcfHkm3uLc7dVHjWoxvPFBBgXr1m",
  "key23": "dPLUC8x1MUH4h2gy5vQ5RGThgBrVPXd2iDWCJ5mZ9ArTbNx4xTGGfp1dzLUDbyerCqfh1qhFWDztWTQaMucRn1m",
  "key24": "2vHSNL2G7zauN9i2QLny1TJa9kiZUpuSRQ8SpWxNkjMzJdg4rwUTd4UBTZ2iG4x5tYh53xCZBm6zpv9Bimq7QMCP",
  "key25": "3857B2zUjeG7fQvv7tyEpMGHDds9jbHXDxbAmUJt7udc1Qh485kwrad85NyATPfkhb5aMs49viXiPSPq5oCY8LKk",
  "key26": "jytFJ8C5VcdN82xWD1D1jNhMgv8MCUviNhSFTnRpMBAyLpbr89MtJNDxcm8RTH8MY2GgBwaMC3EBgtXqqS4kNuE",
  "key27": "28Fm2tU9zodrdCjnYdDGewuU7WNCsXRcVwhE7Gg9bRuZkTwB3Aa5Rbanq2GKj9YePpuxcCQZccKtJEJ1dLsuuuso",
  "key28": "4PB8x8YmBpP4uD4JCqrVHskCFPRwPKNa5PDM38r758RGv9Bku2WgvCz18uziW2b5wKJqi7PQFTxNgJLa9KGStTHr"
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
