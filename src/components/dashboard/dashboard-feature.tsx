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
    "5XzUjg7u5n4etoatiQztfWoYCNUL6YbcsJkdbpCZzngxW2kLC6DvhFMnxjphAiSozrCYv8s1ZaYLW9V46cJjbJkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35X4gHFVL4eWPtVKUfeSEjthnH7YDobP4b4iZA6PggYadvsBskqr7HHJj3YXRMmt7v4euV7XchTyiBteEMp9yQZA",
  "key1": "5xL1qzCFMbdg6nLnmkjUNyRhDgzZ51mg85KY4XGTtTzsD7jHsde2r6wLjjEUN9SnNHfAE86vaYuYo1btqDYBTGia",
  "key2": "3KKToVJ2LrfUQm3DQZqHeNSkHUcpATQRXfQ5B5puPcTkkvtEpyNYEhVynVUUgAgazKu7cAJVPXcUBm9TrZEXQKkx",
  "key3": "2gykiurK8bH4w44sv4pDwmkqc8LJdM6D7pNg8iiPC6vMsZoCCSjyXoJaSVrf8uD1hnBqsPJWLAi6fPgwBaodfY5E",
  "key4": "2ExwjigFm7iLKwSjnuEL5rU6CiYN649GLSZpTsXqtxoV8hjPUpPsaHN8a7NqcYFnpPDXbud97v74jvufZmohiKs4",
  "key5": "4oRR5zkKkegviwmSSFusKidtZ8YdexzVweM6XND4Zcfb3aqvVF54JgfjgmFVHSgDaiWMqE421wTTAzXCFrt7QsEZ",
  "key6": "46ki5coQZ9i28keQehf6qR9tspTwBjLPaDwSxKtJTKfsYSAD6Yd1GgnJPAmSmcrHAYYaVEYUEVLCqNL1fSjBGVZE",
  "key7": "5EfeBmjZ2Z2p7pYzTxhfL7sCapAHUTJM9usozzM6XVJw7wdj3rxJpzxAe7ifh7VWyC6LjSNVNfTx47mR3rXJfqpi",
  "key8": "5dKf2SiSyWb3EU5ZuF8f4XEA6nxjiaEAF4pu75vjxNmkrCdLyTdfRLEP5GZHSUeji8XtSTXbVY7EHNcP3A8WDXSR",
  "key9": "3aJzzS8w7MZCjwax2s2fAXrEZ5gMTBT35uksm5uFbW8KmAXjrAp9Mrg2ois72kwMz6CqR9brjftF76NP3Ro5v4Qs",
  "key10": "5xgfwXhX5dFmWfmkC1YHNxmu1Ti7RtNmiJCrya9Yh2H2mNryqB78KV6U8rKpj2JcRdKEaUBQCBPBKjAgbHGUX972",
  "key11": "2ZvR8G2MLunMs1MjBUk7bak5uFEEdx7YRZ9VGD52FKC1BgcTxQ2dvhhU9JJJGpdHoeCGKdg1Wxbq7qwnSNKovaSq",
  "key12": "5vxMv89GZp7keYx5H8zhsfJ8YYnJLcp7CaMGC1gE4ZMd4N5dkhnxmz1D7hbyY81QU9cJqrdUvHi3ukanD1uekFYK",
  "key13": "3TYHh92zrVdnTiG7Bd9av4RNPZPesc7ca9hcoq2nSFGZckywbT8HXb2cGUjrxDkePzdyAhfbi7L1EL1J9fwyMWby",
  "key14": "MJVrNoiSpAmHZu4aCkQ4vWD2xDwNCSNFuWiq67me3NN5outNr6AGy4jKPPyP19nLQACwejFNVApYzrgmQQCSFwa",
  "key15": "647Tmi483fnpTF1o7nrxVgFgK1upFPDVdw6pYg9p2cpcDntxXkwDvmuK93ChEpUDQD4wvp7d7Sp6EPenVyjF8rva",
  "key16": "5VX46JrhrUPDsqfwMGcDuiyibXMLCEERpaRNJn7LaUj7jB3pSZ7T2D34CJb3Kq4mi4iaT4ngr8a2f6WNPKzgx6UV",
  "key17": "5Xs8n9E81LfueNBp1HrFvWnVjmeXb9LEcw62e6qsZCs7Jr8cEggHty66AwLfiBtmTDQDDNfDeKTzk5vZ1tgeAt47",
  "key18": "2qeYpcRGQACiPV2RVupjAMdfo2aLzDgbUGg4nP1Wgr9EqKPhQdqVjfzv23GFwXtucyGiv39DAqUWQcyTL8fAwFkE",
  "key19": "5TSovQs8vEdYt8AjeTyUJSdCN5d1XBygfbG43ALutnRFiEdMpnrfwHcUq6XCftir3MQm3qVec3j7jfTX6fYh4ZR",
  "key20": "nmpdf3PLYECtKHmqeib1iVu8iP9iKp7QL4nHXVBjxjtFJMggg5TJ6dVRhC45epEhYUZ3URapRfwxgrMK9qhHG6k",
  "key21": "5eGjbDo2taCg4wE3GSYvHiSRSFfWrBYDhhVuXbm7NkvL7YZMakkFRxckvQfXSj3ubwfWgQyQkQCeGV5QR92CjJ4U",
  "key22": "3PLhXvVwAw7L1Wh55HfkLQ8V1jxmiSE23iQkWybjUaPpXvMBEbah4NkLPKyyjq4MpV7P6dgRZTnw6jv3BQdRQR7y",
  "key23": "2fK17Km8SYy1aeS1RefnT2wtmDJYPqne7qL3gaDX37CL5YCCUkE9nwkvXPvDdU56dK8RA2o8vBeuofFn74J2fpv",
  "key24": "2tz4V5e8cS9P7oUUqBH32oKZ3qQQX1CEXuV9YUX7esYcj1g7XwGdcXdSDaZc1K1zjgizwqDoeEPVejeubTBZDMTW",
  "key25": "5RJneSV2mE4bW7PyPovnMwcTYbqXftSSpDodU7gb71FhGbTfaASpWv4AK5PLzB8Q1378LLtybVUDsghGKd33CQoh",
  "key26": "2iBDAAsP6vSQaF61yoZY9tKiJp85UPQ52tdns7nvF5E4T6NjTEyBf2DzngWddaJXuZjEzmhsdLBsS5sMbab7d87i",
  "key27": "5Xa9GPWbAnWbRETGLhdk53rGvx3KEEuWzUS89UPniSJhXvQ98JLaWu155uT5AsjwQ5jvMERBX3vTk7RW3MDvZ3oV",
  "key28": "27rSaYAQxPMtZyWtsiEqxazSYhpoY1F1gYC8TxN8GDr6ohrL2y7PCQRQ261v5vQS2dBjJev7gVhZhmBN5o1y377U",
  "key29": "5NHG4V6ru857fStJocHFhDogBv4Z93ygigrHUaXf8xuXLBbzavqzY4jfAfnDc1v3HSzKchJH4Wnk5qptqPTSyXst",
  "key30": "56dhXrYf23AGs91mpnpaD7KEZQ5ih3BfjYRdEFYLbyKRCiPuNC5uBaQUgY29UYhnLYMJ6eP4BLgEDLZjwhEtbQGB",
  "key31": "3tmP9YopbQDiBYhc53wpzuzo6ht1CszLpfhUtdbM2BBjSEiW46pdWknrbW6Fg5KinwgLGvqt1j6WPAxNoC612m1h",
  "key32": "25bz34EKrefTVi5atBWkXnxd4K8bqKyP9URRpLg4drQXpQH2rHQ2HwyH48ER8zsi9NrBUDvQ3fegz7qBSkKXMvNr",
  "key33": "2BkiSGQduYRZmvittQoSxUHbTe6mUy7BmxNESjTfZsCnsQsj2uhNhGckvDvHmDZzxH7CrpkLKhs6JjH3XTDqUXap",
  "key34": "uL6KxjgbaBPDqTeJgsEeNQWYY8crVqPqSMDcBWRoqGUXfYbeds7Ct2tdrxqmLU8tYtstoyHbvzr76SFTM8JnDkB",
  "key35": "2LrsaUNgdnyKB7D6Kn6m5pxsxryazouGsSSSf8rUJxcHA9JW2Uptta4b73vkx91xxfqxbGKkc8nBaFou3EXJxoKn",
  "key36": "4oKtXWqD5ntSuExWUGYGUzaWsgy4PKuzDXhsYAX6mwcnxjSJD8o3xY57Mvx6dSfXzjc5sJcU5SpJpyxcbUD4YKL5",
  "key37": "4pWyFHmoTobuxf4bfqv3G6nrAAMombYDj15mU9VWtfagHnMMHNxqpxyWbbysyE2en8ZdZ12s7TqCbpZ2oFw1RpqJ",
  "key38": "66gYjmYoiDTSsnj84ZAvAuNtPUD77oQVRDYiSYPykYJPrp4qBEGxUv2Q3s8KEQTaFYexkw7kQh3g3JVN5YVXQK5r",
  "key39": "4rQVngeYvNzQ8vijua7G7EW7kTdRdrDffTRDqwPXTiML7MQJak3QKEKzNr84i6Lw9miFSm7bVJvGC3NPDihVuT3r",
  "key40": "5X4myK5f5bSzMSGFbCTUsrdXMuTRDvFD35uMNtEjeZPDW9T2u6R71TyGoESkvVh2mJpxEf2ZRKM9LEGykD9vw9e6",
  "key41": "4AojgKyB4F7KV8wTgJppkCi8GpPhEwfEbyymGYC6LiA7fTbhkpxMYsDC3HMxdxpVb2KJLDM4o6SsedFGdiP2zN2E"
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
