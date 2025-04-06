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
    "3oN5GuZLsfT7L22UsLgEEVYf6gHjU7ufSbPARDMeJNweupKS2LgnPqdWxEHd1GsPBgH6H1XY23tNS6a5dkQCbFvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2icWNdqVZKNBBN6B6FUauHbH5PY2jDLdYEadaXUSUPFHmCwyqRWapgZx1dkMQxHUabdbTuD1i98Qhx3SeFhvMbbV",
  "key1": "2a5UpURw1Fhou1KRhE2oSibhrWwk3tZwTggh2i5XNwgujaLdwKmdyk7F9rrwe6ads2M2kVRpm2eVitKdjYGyaCct",
  "key2": "2hWfmEGoF37v9BGoh1Ds1zTqbXCiedgYpqa5wmnyv3ZpUnFnKDwJyPC2dSj1QWZmahtiLGgs1tTjtEB1gct7Y4BN",
  "key3": "2v5tLCW1eo2LrabdKfodk4F9SXtjaSyf76cwhFDQabBLp7MPG8JUEBtdZnoBoCZenTzCvrcq2W2VDh67ggGZCHhB",
  "key4": "3yQtseZNfJiF23jxfHc97mKU7KTEvzja9vcWvaPQqoopMvuybpeY8xyWp2UuCkJU8y8PjE1JjLbsPYNAS5G7NJn8",
  "key5": "3djEwGueYJ71z2wnvYkZwHuqSR2K2B8vsQesmSGLZbfJGPBBuE2QqBvNFNAaQmyoM8qPh7K4xBUdkHiPLWr5AKnS",
  "key6": "4Y6PHpuWYrezBuo97EJJUBpjj3KMduuDvFtsn3c8xSRHogEvKDkEc8CQ5326D2HrKKYduPaTW4TCd6vBQyGYZuHr",
  "key7": "3QMAS9BnwZAAQuoUJVidZ3u94xC8q1M8ofwK85kRaV2VMoXcCtqeyX4FBZHKuQmz8vNk1Txp9snzQvT7rMwU18Sj",
  "key8": "2VJsvCrGgjoWXCRJeZJvLekqRjQaanRvXY1SLhUqbQDXSVvPjhdAqmFNpq5i8KMWLwZYr5kxDu9cDUix3s28LNfz",
  "key9": "p7FJZo23ht9wPLSycGywq2mxngkcJvqi6nhXxs2SKoaJV1mCNNdT6o3iLg51ZN6NW7DevJnM8ew9FU92VETcshG",
  "key10": "4DjDnpQD1YD84BATQfr8wBAq78hdAz8ra8itH1Ym6WWJGfxN7kKzz9wPDLXEFXwfSjXai6yQmjYC4MzJsCrM9uSg",
  "key11": "4v8BV3aKo96QS6GoHMVnwjD76eqHRX9uDCiZAwPS9WpBoZhdmEUMtWzUx8xLP3dZhoXfeic5xgcFdiR9BpYPDAza",
  "key12": "5VdZqqMsefymj5wh7LQ1oJMwcfKMKToycBZAxakHakCojp5fpd4RQRsEpTujPcV2wieeh82qmciFW9UN5rxb7M5t",
  "key13": "3YQP6PJ9pAH4A298BNRDmRiuH67tuYyUYNmQtvWLLPbS4W79Xypit8iVFyASRgu56r5wFFP58x2fgjL2FpE9Yxbz",
  "key14": "4uLfA5TX7XncSdprQ1SZtEz3bSXCSSqF9SJj8b3PbX1zx6j5RwiBqcb9Tj6UABwbf7dV5mngTsY98mfCTuMVmqUD",
  "key15": "4TbfEF7cHptZBRsPJ2eNbkLS2NL9Y1aE36Du3Zr9QxLCZPVjrA1qpfXatsHkeWAHw2Roi93JJECSQJjATuBtuAKk",
  "key16": "29N7aXwH9efScoBD28hWN1nbzK1K49GsdNvNWevQjNCJLrQeQmnEESoB6MBTBJL2m9CZ6RiEQgmEJPfZhTWtqVic",
  "key17": "5C8XLstG3uxuE3rF4HyZKRwpX9NgayDtyhx3EbamHT8rjuchkSnuEi2eq7ztcr1RghB7MwmxcBJhkKTS8DCKrfRy",
  "key18": "UEH5x836oTRkAvuJUzUBZmCYe7U4tBM2yQKJ5ntXbKHmid8ct6aedWV7wBndLcuC2wViCCLYNba6ZfRrD5iqPzj",
  "key19": "2Boz8UDo2hZbrxmG3yumhrrQ5AwpSNd24adCpAsppaB3NWCucA6YNu2qKnY5P8y2e4UKTh5f3WMo3M3KPH55SEbH",
  "key20": "2rke2xGzpBbHhPYMNqhWy3DSizhfGfLtTDbQFG1e5YJqq5vHQRAey4EeV8FsfyAs968uC5kHY2kqmGD5EYtcMsQY",
  "key21": "2zgAE993XerJsQcg9duBczG5zfV92fzDt45kDVZkweiH1EP3bMzmfxV6DF4wKAnBkDpw3g7pkZeHZcToCG573Drg",
  "key22": "5wmae7Tw1xMvk9P4RFMPzNCWJXggLC3oVyBWs9NW19z9C7xMifPAs4CDmdKn1gt3E881cGvDvZQ9k3GzgMxr1rZ2",
  "key23": "5crTQfVH6UMCATHNQUXYf1hzY9P1kW5zgmWEvUQUf5H6xXPDgdKnAXzQvuftbZakT8Vo9hrzjJgt1V9MpGXmA6kg",
  "key24": "37sy5exEhWDNLnWyy2kyHgVUFujJwkaxgNqvi7Lt9ubFMM6EUzk1FVzHhCtJRL33bz1YJSEP7xWvB8FuHRYn4byR",
  "key25": "fvKznhp7d2bCsXzEFKWJUZNX29rUtTDa1ZB3uKbRbYikQcTi6yPisGk1JqVpRN65f7AAxgDwoQnTk4FEohXuUG5",
  "key26": "3segku512kG2m1W1yzwUxr2JJq92z2wRuAA78AWUcoBGvmiCVU3ez39XXAGowkicFAcqr5gPMB3XrpX85CdUceqR",
  "key27": "2WFKKFUeMKpCCUQoWH7EeQYhPAQxNnYL2ztuaLppUqBJucsRx2wJ5ZDbe9hVWbqVFb6vUFgYARP1Ek1QDWcBkQaQ",
  "key28": "2htaom4jy2NDLqJg2mfdLGrGJ6RiJWEeUZdc6QVPDsQLufSiW1uxcydvz6hb6k8rNpJTJH7eZpeoUkWtGatpPzQ6",
  "key29": "3HVd86opgLizyxyjjje2RTGB49Haw8VxUdgzhopm92EhNJWCQXSVQXGNGyiinHCC8CSTxMopGK4dM2MezbcB6HJ8",
  "key30": "2vE4xJXcViqTTCfPMBRokkTEek5Sk2L6QqhdDioHgF4qYd2uxW3jTCVk35K6P4zPy8iL7wcS2Vwwt5y2P6cscKdc",
  "key31": "4v5TcobDn4mY7rQjw7HMRa7zprFMRffaGb6hUgR18XezYvDeTthyqU9xAS1qfccEkqyCXpNjYdpMrTRDUB1nB7s9",
  "key32": "kSM2D1kcW1fCodffFYYj5rFpA2GwZpk8xexo9gw2ytypkoaUEd2jfSw9w38tUZ3D3j4eZYMjjQrcMvAJ7bYHnMj",
  "key33": "4j9K5XZmJZjDYnkHirx7tbWBAyMkhdz6dxFSFwHDePD7xZsctG8xvUTvbqrS8zrE19Yqh7SquNxDjMRkoWrwDDC4",
  "key34": "3oM9DRt9ZWRvXvJsVx7ekKyw6DYCUGbbUEzNxQASvG7ZR6TzXbn8rbRLWhuAP4uJsTvZijbgpeGUSLCBf6zyt6rb",
  "key35": "2dSWrhJ8QbdCtfdLyfh4V7HENur1SZABVmzBePL8Ea3MB3MqzxkAZ9x3SFFPAHApqt4KRKJEgN7fkrjWQ3yKZvCf",
  "key36": "3YhwKvEZtWzyur2zRVydtDS9r6RY9BHVLb4dxFC54MeYLRjkBqdQVMhYqsjiQ7BGv7v1i9EARQDTEqtxZskX1S5",
  "key37": "4EejcW9CwLAFAJ8eSfsyZac2utkwcmBLkudCs8qHH2WJSF6x3LPP2A1rmXArji5y9GLDKZP3T67twSXmxiq9dDbM",
  "key38": "4WijRfhaF2whFDBnPAbWGhnJJ8LJev99f3T8J7aiTqCCNQzyjnXd3NdMVDJKLZynT6Vyoiscuo9cdzuaDaC3tVZ6",
  "key39": "afpmQ1hoE2Z1HW3TDQMJ5aBUVf2vYkp4Kjz56Ex3NkevZ57EYYC2t6VtLecgpz2ux4z5emdEyS5PkSxF7kfboAN",
  "key40": "37Mah2CBpTUMHhwhNjFaz5kvUTSzgLyNCkZihN3S1ESRFbxwdtGm9eZS84nnQyZdfVHBwj9puHAWCyYfzkHyK3y3",
  "key41": "4oZQy1C6PeQrRTjQPkdn2YS7BeTrcojwNziorMjEGKhujYeKTxxwKet1xCKJM8RQoBRC4QmvHvXoJFuf76qAcL1H",
  "key42": "2NATrWXcFQsp2BMiTtHUWxFgy4xrycfQhV29Y3kevAFKy9iPwoMrDMwhtfXLVa48Zk1eftXnYEcWdCGxCsECvAGs",
  "key43": "4jKsuDkv3FppLd425QU2ZToerzXoGksQHqU7Ufo98v9hJhFbiDj4gABXakjQYUYUfCiskgd2R5jxzh17zMv4ivHc",
  "key44": "5nFSRYN63BEpaG7uhkGh55XxJd71NnbmrttHQNqUGmJAb2Tse2Y7YPZk9imyfiN7eTzaPJjCLcR14Ndx4N9RMWWd",
  "key45": "64AA4gUHwyMjkjNkQVfecfgH4YmdvjhtbjJiRmBZbvX7DofiKw21mEeDQZJ1BLVz4yEhs8aSerz15tN99YcqjniY",
  "key46": "zsjk7BAs7WKqLvkShjkqqJEqhYwRCkTPcDLGCYzAjUmRm8gQJnh4hQXkMXSN5VmLyPmbt4CAmjdVAANnuDREWbf",
  "key47": "5RcEWUMh6uHxmBEwug8mxgRvQ21GERncnMydJy6pfNYZWoRQGwMMijv5xau1SBrFeVsA5gBmutz8yahxSQRnDSi",
  "key48": "4ayqSvFr85qR6hZoM7ifVBJ13Kqd6dfxbYbVmx8iPA55cuqRiS2AdurExsAjut2d2cuk2pvMjS174ZXJ8DxxxSBr",
  "key49": "hvG6GS8L8Xn9vSNzh4ni8GuASE7ENS63MYDU3HVNUHJVdJphVFLGLkANhyMeBAoff9NXCgRqcVhCtPCtq3xE6cG"
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
