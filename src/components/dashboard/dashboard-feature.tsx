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
    "49PkGChSFHKKWC7YsvAmGMv5CkZsUK7o9MsXFTJhan59ndGqM8gfLVvdngm8bHW9d7ck93qY8ZssUCaCPzRZt2bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BSM2GUWgeAvYwPrKPmBf95EL3zaXknbiBtAyWwqJ3TqZ77e6SQZqEbfTUazgotRZpJeRvu4qCYWvcWP9YTf6MfQ",
  "key1": "GrvBgA25U8QcqxFxoCyHV5huqpGFHvCqhMKWusgo5WesjUao6ZHfBHSKPUmJeGGYHxsAaYvk8VPbpkfvbUmVMTp",
  "key2": "4hmCuFyGkyFvMeX1u6WD3jWj6Ep9WX8NF1cXoVK3JmDr6vowfEdmrDe6szCziMUu1BU5Q3N73CHuqFepWfWV89if",
  "key3": "7w3Uxh57G4GXN1grJh8ijGXmMWcSwTETb4czfU3Wppc5MZYb5ephSaYwMMuA3kVWuS8sAUktRC5iWCrJarcTBW7",
  "key4": "4b87REQSPazU5s2YkjnCMXU8Di57AQ2x1QmXRVZh8HrTm5WbNU9WuozVZhJ2QU3F421U8N7PiZYi6Pr2vngS6sA1",
  "key5": "WXQS1ZFHSUp67Na6KtyDvFJ9LTE5sXsmQLaSs8275gH8N9F1GmAaP3eHBzoY8xoTSiXp5pbyAS4U9BUZd4pRCrY",
  "key6": "3pbT1biTKR8w7xqB5XDqbGx18EVRRg18FnfCtZFo9vLPm4VjrP9WMm9bb5rSjtQHL3m18G8aYUjhAepjxtLfRyo6",
  "key7": "2kD9SAM7yCX2qFQmLDZwYC6vRSSJ9fMqkZCbbPyqvWj4PPxfPdQc8oGi75Z8722jNFVnUJQTbzuHhGFAjj43kAeZ",
  "key8": "45YVj6rtT5w6Bdj7GQPapEvahawjg9MhpZ3bdUzgSjTnxLbKp1MwXHwS7JeAHtWpUday3hE6R2EvtMuxEsGSx4cM",
  "key9": "31ADQUc1ekTKHBbSZi1nHzi97LPytJdSS8LDEwXM6o33avsLjvTQNcoMZhtU2mBYX9jdbH88hEe7hnmU1bHYtj45",
  "key10": "5Uy6jebpv2XF6DQao5nfXYdncRdqVpRsXWpdSfsKc2eV83h8tA4FLxXwHz4VFN9PnfttLBHUBxARQuuKnnQz2Wz7",
  "key11": "5WqxQdn1x6JDeyzyPSAP7BPsH9c8b63W2KpEho3YHgXUwDZ5JExVAuPVRZ3kXJv5MqCzhhgwoyX1PKPJZN3akfft",
  "key12": "fRnyPyYDvzkGQAWhkmxC5WKiN96NKGRVjv3nLCkdYKL2Kcgw7X983zUBzkYARR2qZWtBYW6QAWAQ5VrfNu3KgUB",
  "key13": "4nqak7vQasNJjYZQZqj1zeEmQGgssmeU263MuV1NYh9mtiA1surpDCMUESA5Ys9qEy8ALM7HhShYiF9we8cGAY8U",
  "key14": "53dNmRwPZTpDPeYPxedXiFSAdzkFCmEjAbDLgCmsJsKKAaQYsXLipxTXz1YNubpM8yHRfeCnrp3ECVsTh65Uaxgs",
  "key15": "2T7DW3RV8YcDpcnHksnZVGytGgt3NNcSKhFRxET7LdGEfXXBMCqHHBQfSpUzh8X9RvrmCfzbtkaqLoCNz2sUQ8Dz",
  "key16": "4DBKuyG6yLy1y2m6k2YhgZTziTtxKVWpKV1tcVkvH9VQDXQM7ZQbpmeZzfpFEAG3Aw8nFX72n6KgBkwHgkGjpYoA",
  "key17": "4U8r233de38mtKorspRVnNn7upRcnMaKmdRsff24Rt7cFamRBmKDnwLEZf4DhoddvFVMHESsPyhvANBKVThR4F93",
  "key18": "5uTAVcUs2iJjYbcmmyeX5MWUAnWua6wj6HeghoZhbqquVp9FKdmorThuHmxcCFdo9UTh5qMmCgCMtGPPo9QMBE73",
  "key19": "4e8QgUPdtFEHmD35QFFbAp29qhznrBu382r5VMFrWGy9i57vMMmDe9V3x6SWTs133Z3xbP2ux8Vkqya3Ch4RbLsM",
  "key20": "3Hjz36PLQW3gBzhLzFy5SNpbApAx63XiBeBBiRM4FQLxS7dvzfqroJ59dt1AqzDLrjYvBeaEbC2oSK8hLr7KTkoB",
  "key21": "59AQAU8FY2B5E9HSnfrRFoiG2yx2UxAjLoAvFtbgcVFraJWQD9ubcfZn1WJr1i5CcqCWkhzQwZFCcUe9DawAeXLP",
  "key22": "5Yg7Q7sXv5TcAXvDZgmoKXCJxt2M11Vt1fK12eZMz3n9YS2XnPUqiPdJAJjY5H9U92yLgb48MULGBVgAkkMVi58a",
  "key23": "3exaZW3LGx6PmmkKCt6TpXdqDUVXcMzw8WbMvnZR7sV5fbQVPtiUDA8gTxSMyPTUFTExTR5xwNcPwyU9hNSUgryu",
  "key24": "3y6bdBxjrnLety1S6LsVwXcFnPARu11Swbv4TsRDWcjYZpFVAPW1TcEdRpByPMWZwc54mpEYSg6n6FWQwuu6PtRx",
  "key25": "HZT24iuNcAHbzxutoExit4fk91pWymoZEdKaBf1zycdYEtH9tX714xVU1teHLeFMFRxCDgUPPjppooiAXxdN5q4",
  "key26": "2S5W2iUVBKMuJdobG6tqJcwm3LqNoHzgq1wqxFm6uvSgJCfHa3hZs4CRhduuzdP9fGvTwNeCoFF4izMmzcjBpyVu",
  "key27": "2TYnmpreC8AKtzwxq41qJuijnUmrgfm1uAMxLXTsrCtaiXaACnmbeSj19uxhpeH8oqrrwQBgQHNKqu7abzdtjatd",
  "key28": "2iHGK2qVHYin39vNACWy29pL2wYaqaUPqkMbsWNbttBFbxy78sT3F2qQaybwHAenAf3y5apWAFKe9krr55AcpFTT",
  "key29": "5n7FEecHcMrDke52vJfA1FE73cNMWAQ97VhGBPp59zBNdRb73pLuvwWfpUjU71UkSKm8rVJMNRXLm2qyBQzL7qRv",
  "key30": "5DnZHzCC98YVPz2KagezhgskU9ac32zucmuDQu9vDL6ACRJNGWcj3bbbCdpoj7oxehKkY5dNKnwdT61FAqUBho4J",
  "key31": "5AMrPfYADPkf9AwozLtBZwG7V6JdPxdp8uiL7GuxJ5hGEFcd1ttCNMhU9SL8rTF6R7TVUA5zntM4BKgQjCn8ifAu",
  "key32": "4A2sjL46B5hJM38fEZDrXxyiqek7NJ5sLoNe7kuL45uGA3jpSXQQT58CTtEDAGM8TrMLQSr1nj56DTg3ga4cU2GB",
  "key33": "46ZUjMeFu6aR13HonZ5LmkjydcHa8SygE6eekUGSB3ST7uGq5SmdWj3Xpv73o8kgdRbNa96bJKvtGurLZGqsXmqH",
  "key34": "5hVjE6Q9j3KcFaYSaStPKNvw3ppezX4bP1r8WxXWqLcnM4evAeTPKw8hGtkZ42atvDUUGq323VfcxDEP2M4SayjG",
  "key35": "JbezTiTQUspScMZMHZ5xsqDKva23Ny4ZVpWACvxaSa51EBUEctS2bJ4ghSMecQii9z19DGnbHCcKn4R6XG1dqJr",
  "key36": "8UwgKbQBpzG3ffXvCFuuno1oqJmob92fpAD9qzUUyYAgUgfQJVcnEvtPjoVzkNj8U7gTe2iubBRjj4RmARezNp7",
  "key37": "4etEoMAh4wt6hWDouTNaDbhUrVRiuwqK3gZ32po8SkP1pv1sgAVBLAWbmfhBuPHyaevs8yvBX3SNFqvKVSYFNZz3",
  "key38": "fiXoLw9FzJ81c4e5iL11yzx9pCotndBDbmqgGihpysmr3HFqXL5FdeUSpw5YhfpRdY3Zx2m8Tqdiw6RRUusQKJU",
  "key39": "32ZxieJZeHFqN94su4CUn2HSaYwD7q7KewNGVidy2miYyi2qKu4ApWrLzbqL3W6zyAMVLqF4mvWciTDjp5ut8seJ",
  "key40": "4MFn4m6bGkjo4ggGEDGG5X4P6Ncgz4zVACT3oW1oHz7xNypgHZKjo4CMzstNgkySCot5nPKrSK3HFFUfFAExTthF",
  "key41": "5X1NVAjXnQxs8Nu7nTU86BZ3Upksz2sm7h4oqig7ioRGnhw4G4RZyZ6W379ej1x6JtvVKi26Sgom4BjHJdrryaXt",
  "key42": "awvEfmdoxDRXJCsjPToKjc494hzGCZM2ryHS3Fh3ZEsF7xmKS1PbsVASqjUSXq7T2TF8qforzVmBDtB9Qmjgnye",
  "key43": "3sJB6QXLEjoGT65dN6AWuPiJFMfLoxwekW3HZmcwiRJnH5EbB6X993QLsRMUmjTtEFyiFFYrnV5PwUC85jkwaR74",
  "key44": "ijtP24Lz4D745zffm1SCE9ZWEeq4utScYchkyLuLJ5CUWnYNvBnK5DWgYc38Vhf9DqbTg7PRsEr5JtgAHWdbYQd",
  "key45": "4hhGfd3mVDKqyvGvpM48rabQj467AywAYNsT8cc4H6gVmX1AyMHWiB2SwWUDT7rATY63ktE41odyQaKK3Sr6fYYH"
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
