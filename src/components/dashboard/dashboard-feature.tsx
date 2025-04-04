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
    "2PgYiQarCEenJDqiVVV6LyqdUy8y2i41naq47iZ44BBgnx56S8B6RoctnispNvqPifqQq4aTQeYhL8DwUPZUKpUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BsEFiPR58D2guPzNu8ciTPREnBEBPspqKsKgPw9egYc57xq1n7uGM7ZngaeTm2eBsfEB2Zrwg2GAfZTbR5MavYt",
  "key1": "3FxB5X3muGGZVqpUAjZRbLxqaPuDEnrL2Rs6RzrkJtrLgQTpy2HtBVgET57gZoUnt7gNH97hBwoXy5Ge5j8xyHda",
  "key2": "2MueaqgyPQzHeetK4af1atnegj426DS48FzAnacWM46PboxiPWmAduQV8L6KkK7WCURrEQDzhkprcUWKRepRk7Gd",
  "key3": "4PBFV4Dcw4A9PBn2jTJ61SkQnL7R8mL9fNyBjmH2wKKE2xwe46MNv58bahxzpihX6FYnm2nBmat8ZoKhz9XfjhT9",
  "key4": "nyfeKBtahEEjosYcsTyRUmmXwfzHo3v7n5anAB4G3cRWjRbrS6wrGsjBtkdMAs2Le3Ef6VfZ64ve3ptRt3yJVXc",
  "key5": "3MBcrwEmRbNHJn69di3FMmytPHaDgtiBWiU726gJdzyDgh5WoXNoWU5GDZzpcAAEPg1mRo1woy6C1s6N5exHpEuA",
  "key6": "2sAyVKUPffwLw5VfDBXivjN6NMkgRWXbCseXXGDMwvDRyDngHNrmkqxmfP432VwKkPME7WwBZKok1F7pN45pHwby",
  "key7": "5V4qFoPgcorczPDtcff6fpZwd9HLtwf1eWVjBGsYwCnEdevutHM3p1wtjoQRHFUiSjNt4H2gvKNQJYRygQxcSYKF",
  "key8": "5zdH34NiUyb9MXMPdowdwsDhwPu3jrey6hCJ3HgxcYaXqgcQqgxttiBg29tdU8KELEgv7mBBoDbNGCtMqm26ejDH",
  "key9": "3AwSUpgYW6RLbMcRuA9iRWrAE9UmUbNELypva2C4Ge7qV7UfUBtwE6YHjbGvSq3maAwufjpAAFRGJDoUdSi85KNN",
  "key10": "3Y5oynaiuPqdNQA19EK3HVwedan2ke5tzxDu3uFeThdrBwRXaNZXP8mbE35wSPPKbHVmTBqJbL9r5VKMzMHxFRBU",
  "key11": "2txicp7EiRxYpsDaMxMKPraLZsbH8YamUDV89jSezvajNXHRWUhjJ1gDmgrvfVtx3C4vWG7i4pzzStoem3ycf9C6",
  "key12": "5U7ZaDLb7NjpWVBvPkCWXKHvvZveheAYZoeH7NF9TPJfVAADDNkkop4KjMqf8ofZijwyF2XGXnSpkPoFaSqjo2bH",
  "key13": "2sRDhaayYbnffFjPytuTNPZfM7LrBrCAHqYthz95hFdBVpjgkNGZzWkYfW1utP8ALn17B1a3frvJ7nNo5LvksR2K",
  "key14": "NeUkHoYj6ppbp5RWNs3mvhmT8Y8YJpuLKpKBwsDHXnYLjTJZk9XtvF3mzHScnTihCVpXZDYoVJz1EVDW76iYbja",
  "key15": "6qGYvuwC2sAAJwab7USqjX3NKKuEuZ9GQA96pDJPT6zV4xt38B8kYHo2vU84iqf9dALstYGbUEnbyh2mSfuxega",
  "key16": "5PQKwubjm7SNBsj7PeKf7WrvF5xByduG5s67G5qPuuLBDGLUAeNZPKA29wp2SL6LT9aLV5i63sHZCCdEAJaMEy59",
  "key17": "5g8TDZ27PJpwFznrcWhgD1hUZ3YXrnNHM4SrZvZsjYUL5QAnSjReKdcapPu4yofwn5N4MbCp5P7uYbGGYRsywCRi",
  "key18": "2EA3okQrM3kHG6s1yNV37ZUFELY7TTH31GDxWkCkCUh7fY5K3Z6x64wECeVE2SGbCJQGhoH1Y2UmQXEBS8QMYLKH",
  "key19": "dfmncc2aZwRPuNDS4rur1W2Frq4KAC5od8DFKowW4mCcpDs4s3YbMm2hZpD2iS9qmQ46fe2UDAdnfvS7tf3HaD3",
  "key20": "iB4aYKK95xMFa8Xn6Mh8us6FquJLXHqFET2gw1h2GFiwGfdpvRNmZMVXM8cHt5KRquxSubbAiiZNHNzjgo2zAEF",
  "key21": "4QasEEpFjDmRMbPBwXUvJ11tQg5ddrSz68ZhNbzHkpGoViictn1GtzFzmQCW9hzGsro7qSowy8idiRiyWmWo2bqz",
  "key22": "424R4Srw7KkVbe5R4DAXSmG1C95naowLYJ8K5ThMMRVt1BHe9eKyimykumyhHfThHweejstvUpwAx3xGMsvnN61Q",
  "key23": "fu1jgcWVZ4tVXw2YgewbXYtoDwjioWtdoCrnP8UruwpB8rupsRFLJwm2WzF8ZmaW4UrGjFhQtuRR9FaN29nBcyR",
  "key24": "22m1e5SWfqU5Gxfsu6HVyNc7N4ax14xN45uy5oaocg5Kh7CihLSn7Ro9SVhgS9Q2f4UM5y38tvpQkTjvKcWZEw4R",
  "key25": "34egZ7dqHhRbh4ZKSbmTRsA8SbEcFUd3pSmn3XDeEBW85bkrMkXmni8938qvjNrgwivGF2MNfL2CEPjNPowqosjJ",
  "key26": "4R1ewwAsts9ixCneY2QS3Dbr3X53fCrnfvTuvKVkHa2H3MKZsaaSJpTwEJpDkhS9SCANuzhqCT8ybCCNJf8QHdiF",
  "key27": "3pqC9UxtCvdiF1q2fjJkv9pjDD9op82CC9ioRUS5fUx7DyGmgSdbpMbSwjvF4YmQVL9bg6nTEjnM97Q6DUaq6RGA",
  "key28": "4j2dv67MuPefnf4a8Fd4h1QqaC283PoEuyb5LqWVnPekd3WQn2G95JG5dcVVQBpseDJMtA1wj9bryNKPTXZXkTnk",
  "key29": "3gim5665ZNryqbeoUGCy86w5jyxmwvZgVcmDDsnY6TD6t81hF8LFVwjXHdRQxVAN8qPVXdhhzMoCTekYTNUj1ax5",
  "key30": "57bV7jRMoW9Smtex51zzrZCSJ8koAfeqa2xcyFJHJ8x8Ndyh7Tmw2k2huFqDu5Gqbi1m8qBHfVyhtSojjH7EY9tV",
  "key31": "5zhqzLRUgSFvRa2cGzEW7wvcE2ZEswV49oKW6Q1uFxWaxCWvCRG3WMNiBrXQmWE7o4zdc9tYMpR56xkT69CSFdYf",
  "key32": "31F9SrPPSHuTdbMkQJNdqMvhGi6mgfLWXTeMVJyhTCEJixKn9dk6x3ZfRy1boaD8otvYSqesPKfWimfJ9meAaS2G",
  "key33": "5As3U7ScJ9USfoZczJ14FjE1cQxSwUHWkcnS4SjGN5ibSd4z6UbZVN3Pv5xrYBpAQRRJMgUnJ5RQw2VRvLi2AHBi",
  "key34": "64peih6zmLLkVF613JZk6bfFiY1cu5C6TdQSXam9P6XRrBgKvf1cjbxJYte78CZgjQpoi3hFmWNXLUJgaUFHcRvZ",
  "key35": "7JBvjvK34zqpRWi5NTGYNfa65HWeNvgddLdjnCQ6SMa8mqyhZuk6jneZnm61cX2oXNXb3gjEATxHtFg9B33CDf2",
  "key36": "4m4UPtVeHQNbKQaxcLHbEL8ebSWbcn17Vq7La1FbAXucEf1Nyt9UtZF5KcAuEnx64LeA8Sc6VciXWCJViBV7thh",
  "key37": "553r3yptyYo8XWCKTSxJjugnFCsqMLunNLGUc61X612D9vrWJX6vGEyfjedz6bbwy91m4HuHRXGx8twKiU7CkhFm",
  "key38": "3JuZ19BnR2sC22fjwWuuhqTepGMWbNYyaf9tzuG1M94rHU8bWUYBNiTYLMGw2dv5B9xM56rocXjVHwo71gsgd3CD",
  "key39": "5MtK2pjXGjLUfSFFtRTowdnDc68S5gWUz9zEBnKmxRzpm9AKeWygEQcZcatN6DMfJ9hs6yDciKqrADYbqe6vyjiz",
  "key40": "3ThTCLQ8DZkdp15UAtnva7yScKZs2VWJirc985SnDx3B7itViNcnJ7nHe38N1SF5hXhyFDvXYFd8coq9wi1sMJb4",
  "key41": "athNDofHekQ4VwbWUdkFCtDM2MyvcQwb7cBcgewij2RkjmDDPbFfZM5rfmpG5SbRToDbKMjaXfBM5gCtJCBzFhd"
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
