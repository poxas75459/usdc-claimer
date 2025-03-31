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
    "31eg6W6NFx5eHuPXJGkuFdJbimM25YJ4J6mYU4mGjsT4JkpBsC6XjTqJZfCnUtiiHzKscr5NLLwj4u1wtSzuKuxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zj9cobRfzUjhu1GSDKAwn7o9qxUAweHwUwxcAUQHkKf3GcuAa4nh79QMic83BtDviZfyGyjtCFaSTVGYcSLAcmQ",
  "key1": "2a1uKqPuFENMB2XmaJnbtH3qQZfhjcvVp9yaXZUQ1bMiHuUDju1npw3EQafaMYvkq1qTRUbzPj18LuXNWJ3qweeX",
  "key2": "2RufnMoVSW5p3Rj1hMQTNyrWs9dStH7nuxAhzVtY9GY5QSL76vvx4B5Nvc9ceNBZMNXiB2UFfnzJEpg2tNjMH2GM",
  "key3": "2fAzEW8PZ2HYfjwKoKvCmr2m91UYpbJMTaD938Ab3iLTWBe2m6W9dcsCztKjGSn7gDnJkB7pK3Dhsbr7gzrgHLqA",
  "key4": "2n3Tg4BwdbXLN8Yjjrq7vE9VdhqGTawgRfygAQeBDWdgapJWExsWHz52XwkbypRFtAa97TcazoJ9dzB7RebyWG4e",
  "key5": "4jaGYLXNqBKsc7VztNaBhw26sPttSJFE1nufCtbq4QjMz5PRt18qjxSDG54ronMqoPShMeMU9yD3fbs35zTNZKym",
  "key6": "2cbFn5Ginhj7rmdeL7rXfG2HJmtc3xWg8Qu9utYHt9N23tGPQ8VYyKmyfctYSJsH2oKa4RYHJSJTn3RTKNL4ZoZT",
  "key7": "5Wu925Jd359TXq8vEWkA6qCzL5tQY79g4FMBhBbkBF9PWKzo6XT6qb4FetPM2k9QFsgdfT6YchHsxnZeCVpSf7R5",
  "key8": "5TwG4PKC9SDveYVS3dK4s2hpPE5W68qcv476aUbYmrMYwfKXQQYso599xrZWAXPaEZha2yXi3Ht1Zg2DG4FkLTMC",
  "key9": "42ZnZcrJatsUjoanUPZEVEwUCYi92aK6q93qxUN7pkEJaMEUWKt5RY8CFtT2bXdctjouGruq5cmU1d342KLztLju",
  "key10": "5yxxBx2JDfpXfDJECtDR7XUMdEEvaj4C8rG6pW7S4UfF4Qg1nrmZtUy7vuXpH1SNihM5AAXZ66aPBhyytSyRZgng",
  "key11": "4vXwWBywHfpA2ELngUfkjF3N4RKHc4YzHeuLPW4q4HxnSzg9gyNBjwutF75XMBVRfi7xXnp7KTRbWwb6vRxbFxzH",
  "key12": "4Q83J8Vqknx6psLUYPywZJRzQGCM7sroCnnaAvd25WiNgGe79tHhN5iFieuDFde17Vqo71DTZdpnVGxzD85GUZ3v",
  "key13": "1kyYm5TcQq9w3gNPKhfioqNLs6pTBkyoxt3iHvkvAWS666yL9gtJ5BoSQACbkuVRPaStX6r57Gt4hKDHADL8kNy",
  "key14": "7Gsn2hbXtXH1gKApyY9KWepsKgBp34zJLH8Cfbnwz3j8XZmm6jJUvgvDTJKCgG78q9utSMhRjyV11TNupA3r7UL",
  "key15": "21gELRgNxtoBdqsZ6paWUS59k8ESQD2ZamEeuyCbeLX3mV5s1pT4V1BxJPjmMaHWRqdQdCN2V13bDi6eUKoaAx7D",
  "key16": "2mGmNckFBAN1DUj6FFsZT9G9v9EhJrKJEvTL5VQTpwu3therpAVJc5fVuFhctSLQQpJYLsjVB8bbxD1MwNuxYUWQ",
  "key17": "sPKERPn7kY3XLD6UpX18WZ2YHFx71vVqnZsmU7Ewk8h7uDgaZkkTtVmcWdy35DLY4YW5AXoJH2eRgrcpnPE3cKN",
  "key18": "57SKZREUHiQv6uq216oYJZbaU2Pu8v7YCxGVEh1WN7r7FCDx16aufi2cCgaD3PuUhZCv6NYttmtBv2Ba8QBszt3A",
  "key19": "dhUGUFioCxqCq1XynnUU5ue7hbzg8pxD9bwKkmFSs7n1of9mAK6eD6hbUCB9qr6WbGVA4GP4FLbwNfNi6EhKH9W",
  "key20": "254Ue6JBqhm5G1RrzSqXBBRecys3opmB197muDgyGBL7iK6S8yYXEa9fi8LELnvFDS9AgVyQx2nKrGipKpHJxuLy",
  "key21": "5KAbUoi1aVycMLvxfruUW3EX641FYZZLRqLk8MZLzPWUBQiWYrwBDdm6xfRWG46HBKct6FR1Sp91SWJhQKuNxVpp",
  "key22": "5yTEKBdjgPuP8Aa6geBZVyBsCrFgwB1bejLg1URKZJQ6kNjD3DXqRpzcNqi9EXiuRaty7PkH4FpzUSSQUnAHFopt",
  "key23": "5aTDoue3RNh8KvqK3TGGRWt6gxS9x2kCRzg73ft8QpdQEs4oWgrzwhyCs5zBpNshpsw5GeFx7sNRUh2fzNxgK2PZ",
  "key24": "ZW4ex14EMSmU9bmEL4q62fTsntNjNjETFge9WPAELnE9CZnoEMQx7bjxERGSyqWzEP3wFTysWpneBmSPUEeAbHC",
  "key25": "9UYfLY94cQGP3bV3KkdsJVouM3PThNUf7HNNEfxUU2ryzRZi7HUZQTPHCiun5h4vLXE81Jjgf7k9SMYpxYZmPEb",
  "key26": "5kzdf87sic6hX6Q6jUsCkmmGn1P3kPxVw1HuHpFJYgP4mEdo9vyXkBMQYNe7jEywT1XrYfakgPExLVtF2jtq4E1d",
  "key27": "61FddzAnaRpRGw4K1eEiM54DTUjWEjkWhHNsFwbLGb7sbzsu3wJ2n3L47kmKaWuUM1FHuMT7j2Vkc4qFeDQPrw3L",
  "key28": "5AkSViw1tjMo4pi1jnP5vASC1MWJpGfhzkwRsjRa7g1mEokygUoELg4xNTULm7sbEW7SUHpigdWpf2Ws8jjonzYP",
  "key29": "s9fpmAUPXKL8ct5LVTRRW16U37riT8wq5Vt1HmKyQ6sugTbXTUwCNcqohmDocNPnuwhBrMAEhJUuMmc71pUVr1y",
  "key30": "5ywZXbf3pSEcAhPk1KA1GZiggaV8i14Wa2dE9mxoaiThba4ccnBwbQuw8ukqkAwSapzPPnLn2rEofxNqa6pPZYJA",
  "key31": "2qA7c7nmxxNFisjqaNLi5dCfgoQWbthVqriacju8arWUzBCLsDQkm5kZ2sAovbt1a5zrTqrCdk7b9Yr2XgpccQXm",
  "key32": "4GaVUbnPR7Kz4J6sPRfaEtR72Q3DbyMUiX4GTHhH8CQn2XEnBjstgbRLmfshZR7n2VL9RgomCq2CbzrUSJgbj9Gn",
  "key33": "2JHDaL91k8MjkASxPvUMb7AQwDJcocZqtdLGqkz1zArewZ2atEz58irtXvGWLmXGVGMAemRxQYQp5bfGx4ndshq1",
  "key34": "4qqTEbcFthqhDmqjzRCqs4CV4EEZQWpGyUi41MLepLKS5R4f9mVQKVwFXtSojsWntPLapbPBjGNSeUn8sbT3d7us",
  "key35": "5MFQ6xYTYjM2kdsE1yugkRjjk9b7EgyGG5pJQcipmC1aEVa2AwYtqUsmHxLjj2B8XJUcNxJt81VPKDRi5UmRvPH8",
  "key36": "22Lw44q4amJ9dGnD18kBgZFxE2EHfqo2xShKMNeBUvkbVkSPKNtSr5U4Sf22ZMmPRj2PuFEM1u7S6kzKTT3nNQsm",
  "key37": "5qrHYQVwsrBHNy5HkCEAgBxwEBmm52ATsMyHq8wLdXFnUQ1Ro4vG4MEiywZ6QQP4YRgnrk99vUxWBTAdgMFSeEzh",
  "key38": "EioouYaP2k4ygJpXvhbA31LHbLZvW8dLH1R1bmBHXjRCDrA5Z2y7r2J5vqpetFe4eajoRHSwkpQbJ3tWehL1yxA",
  "key39": "5pZtpojHsAutU4N9d2ScL28nCykyY9NvVFn8DGMJedPF6fu3tTWJE24wiL5aFfUavJ7gLzACMFLi14TGGZyS8c81",
  "key40": "4ncrHnv6Dvh1VKRqJaqspmMW9jJHbERtFgpVhFjNj1dob4PH7Bz6JwTtpNu7K9JYr62R8BTdQXfE4VTX97E2WLf9",
  "key41": "2dxotedFK2NecfqPyyNYbN6jGqFtaWQBoEPWc3RBaBfavWBuzyoeKgPpenTbmfjvovmYXhNcDtjDYaY2jUpcESkH",
  "key42": "4NDUspioKqTsCWkJNKHqHGniVeicVPY3CbDVjCY5WY2uMWhCDSW3VLoXvJHZ8waGPZsNfhDjeqQGHXkmmsvb5uMa",
  "key43": "3tsdwUFV4DDokwjVcqXqdfGTGhz631UvtcFoD7RLSzh5dEN6Fsh4Gxq4L5e8XRcaXSKqoJ92perYt3M4KPeua1Q9",
  "key44": "2YsLohv2AbPdCV6i3qiEqvLXf3hneyqRJLebE8kMMibHUJ9BkVjP5EBdXJioDGueNRivEeFx65LNGtHMQS7dhWPQ",
  "key45": "4v4G9fKZqUH2DF7XQCyCzD5r4vJDdKciwdLy6okMp2GFVk1YFxE7kQmfa34wLKNYyiv1eaBvvmjM7vTwH4xUDve6",
  "key46": "AC1PdmMeRAHdD81wN4raq3e4gxzhwLhM1nCitQ1bPBzKLim3c4LtMkVYigqVXGqCr6c4yFbQybo4rgPj7XWKXx4",
  "key47": "5mofeLL8PSuVTz4MGhMhLaA8L5RAQmn1fJNVb8mF5p5UkAy9gPCC66g1cnTMSiuaxsEZMQdkYrQQxVgvVqN9BGu9",
  "key48": "aYdAbTLKYf8QKneqmhNhzLJjD678VTvUqcWcKFAdNm4r54vQvo2iVJLDA7HBgj8Hj9i1nuqotuVx2bmbZysbwCw",
  "key49": "42e7vSg954eFooMoiRTSC4PTV4qJbyV8UZN8Xut4MA7adgtX6TTPh3hD3aEq9iEtzjXpnoYDzAcW6jHf8QtfLizE"
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
