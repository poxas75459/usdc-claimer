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
    "646c3LrsFpdDTeBdL2oypB3skgeWL6iWgcfgG8f6mLBY8oXht2gsoWegVffz3983x9FcTMWxcjQm3WEVPCjhowLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBzgF76C6ZowBtRHjv8fGYzUPVG8QexwGCBye3bzp4b642L6bMQpGtrkuno3vZUkHLdEnwopXNmPybpyVsMf9JW",
  "key1": "29uaErmBXWFvX1yjQrn84d9voj156ug3at2gz73sN7doywamun34uTYRoQxspz1AwdJWAWzof9QtrZ4QR5L1nmYg",
  "key2": "3iduJcZiUvmpquPrMt8YKrYFuRwwQ6jpjYayi4QH5pDg2DHXeypKk5eC5wvBZbecF74uXBwkMPiNr56TJbmFrY9Y",
  "key3": "4Yz72WSrTr1CMbSB5htwDgJcAvj7u2gpVJ8ncWmbRkUBaBtAKvy7CAnEedzs8DWHKgtkscDVDgutzjS2CjfiajnC",
  "key4": "3P1zFvYLHHRsGcGjj6Qnaf7NUYyH5kwHKedXPSaiVoenHEKApGtvvU36jBp7sT45e5dZhcEnXRrTdNUphK7SQ92t",
  "key5": "4x4jBzSsWry9HSNDX1oFxURCTPWyHcAjsM3WWYTU6nymcPsffNpXmPJDcRULvgDqdWLhnnEHuvxfr58qQUeQQvW7",
  "key6": "4Udbg2sDUFxa7ZBDZ5G2hwSVqDMqerZNJZ22rjCe3FyNCyouvkwvJsCQZ1LkFk9pNF9hcMuHicP7yU9zHnPhpZoo",
  "key7": "3EpJ2W7AaFpPvcLxzKMej811VK6hFati3tgDLS7Zna7WBpkzTbWT9YeFRbh8a4C1P3rc1NLBrHqeEPsbNByshNkd",
  "key8": "xbAex5BoopL7ueAG1JmhoDDzkxNnXvNwawUV81A9ZZmzLY4MM6ismicHmtqvgNnDa7LPjnpfWLDaFHMM4bgBRn6",
  "key9": "4g3Ysoaqu3zpHGoSjcwZSm7N4ZBZ8qVAeEtGYYHA4H7myHPrB7C5sD7xGywv3HWrb94EaWfkSYbZg7VPDoh73erY",
  "key10": "2jNAAuSAgAr3A9HZJcSkvQ2c5zHmMAnzHvBQEWxPLQ47QVkBCQvbjvpKSxJwhSp51ZFDn3M52m3fWgSq19awhvcJ",
  "key11": "4SNK4HJHGTZfgFWXQa5dfAyUCwQrXvn3Rei2Q59D1Le7RM6jCURPbhENZajTmtjy6PersyKNcYAPY15yzvqpB294",
  "key12": "54nTsqPFnWADP56opRAghhmCX5UAoCKhVs3Rhooka2oYEu7vx89EKY5zMtW88FsJHhjBv8gokH3AuehJxTeG21be",
  "key13": "2GKSBa2Q3DiCsbRCgAiBjVExvP5ejqq9tPYThUoa4SRAPNEENVjs13Fs3ZPJbaYzH6bHT3MqQA9UCBTKDXbLFGw4",
  "key14": "3yi9jXaAYQhbCEAt1unXP8hMCN7UnnJtwZCgndG12qLtv9GKrUgrzZvqZ7QHXxExRHmcHRDDSF5CGW6GWTKgq9Aj",
  "key15": "5BhLAE88Dv46j5Fv4q4cy9JYgkMD1v7Uyr2CR7qKnFsRRswXz13E5zGwH8nGzzqH9jr5YpZ1maaFXuDiqUJuhM2i",
  "key16": "4t5vmGFcKtKp8EeFct8gzmT6YsXgA6Xj8a6i9PAtKrNqt5iqmp6gehzj1sU84xZbcbJ3Cwqtneuu18Qq7Y1vxuJ4",
  "key17": "2qxpDuaedKYN51Y3h8NWJXQ64GsVow1pRhAsrtohn7Byp6xMwSdMDpRDagctW5bkuyV4aSUmSw8MsbhCfkw69Qor",
  "key18": "5J6Sw2Sy9wKys6HxrTodnB75YpzaUqpXKdcrJVB9fCorRXrHMHQzMuUu38AQzrXcCJVL3G9V3DA6jsDdiACAGAG1",
  "key19": "2Ge4FgmUkV4ARcnMZcCxweyWWR44wfqrCzAsrSTWYSHpxgS9QhVh9P1xE2dNowxDeiqLh6SkJe6URj7Mi4JSk9xY",
  "key20": "p8LErbxJu6xaxH6SNU5K3dvbwgqwYQJU7kf8f82tAb2uL43bc7Gz43eefXKiPcbWwKz6ya3ThUZGskvW6gR8w8G",
  "key21": "5chNeTtqdpUt2Z1cBwSKkHbaiN2YfG2duAXQj5H5TdWQEFBHBDfL9kBsKwG9dZhAvGUzAJN9CHVZTSMW5mNMUFq2",
  "key22": "4TZ1uAbPWqSt9xTKFjkmiPSJTkzXMtSTNjumckmzHtPMz7GtpFWbGZkSr8irE9awfyqe7H9pug7ZoaUxpXGD5Aok",
  "key23": "5BXpcBjdCG6NCLWy78KuUBHgERXx839UnP6qcu2d3TJnXMs4BcHjZi3JpQcm3211HPw364ZM9XGpCrPu8B9NPEcA",
  "key24": "2U3nyRHjY1en9cfPPc3XEJc8C9iauGA4tX9djRLtEWPYpnAnX5X7WxVZYjXcvxTcRTnyTwLKx6MqFWwJYeJzZJ17",
  "key25": "3NbkFyFbh8C1DUSDXDSd4GmzTBJFX5NYFmkHDFZgLgCtHmArm5ynA82kxzt7hiP1vBpBYt4sr3JbCSSkiJFVJJiQ",
  "key26": "2CKRjosg5H3NCzW1uaNxDy4byT2Be3JDyGmbRwpgK8sGwfZZTYdy18SwHC6BhfcgCSo71ZrmxxVWkDXFo7pXVsXR",
  "key27": "5P4ZyLSxuBoHAm1HjMMNKQxjaHTsCNGrv1NztTxeFcs1hQ1NAZubQn9CEHhseCa5x7eF9SXPsVqSeCEo9DouvrtN",
  "key28": "5p4wygnKNLJA2WfEFWmumR85cfS8p1KZFuvn6mG6xxU9dfmcF3GPhtGinJsD2TGLXPK6pyyaadQbY92j9ygxDkRH",
  "key29": "3HiVDv7uFJpkHHq26ZPJTYB2p6UAEqdMQ4M92hbvn119iyoZTJ6jc2E68VZE7pugygL7h1Re9jLfmyc7hviBz93n",
  "key30": "4ULt462h1fMcc2DYu29jqQCRxThf1F5B4jQGv4gDWTRQ4sYzKPSXszzx6mnmzwp314MVT5bDAPWKcxCb5xqLnBaA",
  "key31": "2N3T3DJYYG41LbTC7XVDqeJkSw51U1Zb5ZyeUnMZAwHbLTq7c1iwP3aLYsEps27MAkmEzmGYvqeFgw7jwNmc89ES",
  "key32": "HnwhiGCyJ4GvEFN2W1sdwzMvdMDcA1pHJQuXzGtDH8ubcCAUWqmw9i2Lt7Lq4bWL6Q5B7813yEJyYYJrUjiiPnE",
  "key33": "2sNdihvRCGJyszmYwTKiXJajXiWGrj2DKcR3CXjZbxFHqSdKrAtSfgQjX7mKfv3EvL3juozQezfkjWmdV8erDyWv",
  "key34": "4VJxVHZAfuDzojcVMzkd7cx9QxWYdUwL93daZq8rRctdAavcMnEDfbTufZLoxo82VC5jYhwefT1s5Nkx6hsTkKeE",
  "key35": "4SDnp2p41YA8LcXmP1CKdkVMavChQhzjmGKAJjeAyumsj35AGBGtxksqA4MvNUkJsA5MTUi6dxwQgFjTnkXK3rz3",
  "key36": "2jEPZe4YhmMoPmRid74E9mcZDqCjLR2rTypnuMdrprhK3WQdBBoEyrNFW4VNs7YHPXZjccouyXYrprjkBYmMbWMR",
  "key37": "3WgXP7miVjB8us9AYXAef9uJUooRJBj3YN6EKtNxzB7svXbjvvW1miagpbdb6uBhhDJ6WyrU3pBLkdVpv2x9EHXc",
  "key38": "4LzyEynfD2b6GzTx83gC4EizTAYPvuLiy9WkyYzfdTzGkpQwpRe4BBupptTV3NExZo2wZCW1RvWSsvUdD1BoRvCP",
  "key39": "2iyTjmMem4EykJ1YGjwAq2dM9GqVGvT9zAWB9bgjdpqWwPeQXiaGL1apKFeG1bq6r9iRzAdSZSGURGKwCKkpQuVT",
  "key40": "1VMHzQ3WJDw9DMxvL19comqF7WDAU66EEyiYb1k6UhXxMvg3ekVSGwHeKAsJZpD4vVrTf876MRs6J13QGDZAV1u",
  "key41": "66pakhYgStt5Dg2f6Ln4LegixjpSirxtELFJJ4qazJSbpU9osRaqzQidHREYFnyuDv8a2ayN6xsP7mTCrMuJKkPr",
  "key42": "3vjH4gArWMTsvQSr32oa5yw7AdiDoyr6LfcYRjmKF3VXep5XU3RjPTzNBL3REjLAazizEFUoL4caTP65ddr6oFPn",
  "key43": "3FNXAYs75Ntub5c2CiHY5BJzixYo7bMgJsz1MVgaV5pP4TbgoqQExkDHKbnErWqT8AdLjDnr6CX5tVHtn4NYSBne",
  "key44": "4PenPvBAnjbvqQojHGM5MFy6C6TFV7iKzWzBe4H8NSx3k3xKxe381CDyt25ypLx9BXVmXZh9QTTZbXeceu96bBhd",
  "key45": "5QCRkjuWKRuTZaTLP5K2voGvAi9KxXHDfnPNb6nmp8YTvfC77Us3fFiKx6LbyatSizBCwaFJiBYKAakRBj3V8usK",
  "key46": "2iLKFELqpuqLmX9JHWcFtSfM1JohWHdcAHk2d7qfyZhU34MnsP5h5hkvZQB2TwdZYqEXnWyHnytzt4ZgwvwtxcRG",
  "key47": "53jAsnsR3xAQdFwc2UBNqTihQeWVhY3KkMep1svoKXZg5ejKJNnM3esoxTCUYKC366wqcvwmHyrW7woPZunaGJ7Z"
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
