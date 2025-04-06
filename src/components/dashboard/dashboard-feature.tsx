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
    "4zru3BA2TUR9betraruuufP7pkdAUdyQrbJ7iD8uR3K2RzPSfqqjGHuLaQQ8FxXqAMczfLrAeL9TktRBPEkz7J5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vgZZ5unb9ttgTALF28dDkeZATyXrE533tBkxZ2eGea2SxNhsgjLiHpgi1bN7Bv149SEp1LJUrDY9FKbzsbbCVpE",
  "key1": "3UVxVPYagW6k9pYxhZRBhXrnQWtzqBuFdw5t6rLhUCBNZGhmSPYhzRqmd8fBEESKP91HGW2iwtG8xugoJCF9CVvz",
  "key2": "31sCeNtmR9Hfr5Q7sY7LifbLnrk8BQSohxMF6kiZ4bC8wLCeGYBmw1FLuxDKKHV2hPqWAphaqg2DdndkfiHDxaEH",
  "key3": "4rHsB1X7g1sQjGJ9GnvxZuJggYzBquvT73Z4SkFzxkT9KensAyWzLYyTAP1bNhfdjEvVd77ci9V8uVjHoRf9zC4B",
  "key4": "3k8GLRq1AbkQD2Cs1eT3SZi8ZnpetFoBXyoP5CNG44NtxjGzr5Tm3qX6eCXqtd69CNfM7cm6SAW3SBkdCMmQqsJV",
  "key5": "5C32ah3NMGD1VZWZRf8ocpyCZFuamvSNHLvrATVyR1Vp6Bmt7WxhTjmgBGrDa8cunBy1KgFX5ABYXaixeQ4woCcd",
  "key6": "NRUv2Prdua7hoa4XibDpWFMmZGmB9zwrMfc4WKHoYzXdujGdiEqgpJbSpcAmcFot5MxQtNuyTwisYzmxzxMKHdC",
  "key7": "3jsJvGvBHZaAkDdj7Q1z3x2i9RzpTGDPxRpSmDvC33GyNCyPzKVJAkBWe5NFFgZPQ5wTqrQgJ5vTHeBcEtHAPwaA",
  "key8": "3AkcSAi5yv6unNxZwX6LpJxQhFDexY9pL2G8f1c51VbeGkfq16hCSiHaxdWm7xMhFmE1wgvED8cFnST7RxGmVfiR",
  "key9": "54KQvVX2ywz5RLwq31KVp9A1Jhekg1ch4E6ZuVarpub2xSZcVxmTmpHUnQugB8Sfg5s9rtm1ayBuPdHJPPkgV3ra",
  "key10": "5UQWtsfKGujonuJpyibsiWp2QxVcSCW2HdQ14SJoUVqRFicq5h6kL8Ueix4yBoiM3ebJv4FdN9DVBFo9YsJd6tof",
  "key11": "2WzUUqPQPZEcuYC6t8muEgCanLeB63RAJ7CE1kqchvsZbFo23gDjFxAqCPAHnZkNmYVPFPTc8y1FGGzx8Kbe6Lxk",
  "key12": "u8tXcC3SJPwyuLwKX8L7sKn2BWLe2onFPim5G4cR6CAeb1Q8YrARAG47d5DpCVWA19mQW88dMHEjtF5LUX2MTQ2",
  "key13": "2eUm51onzVCSWQqLezkfDDhovyp9cGGrbjxEV4VDNfqJq4AFBNxWWXD9sReHGFo3zNcNvhi7VYoQRrh7tjtsFucD",
  "key14": "TWnENjcREBmgYzk2VbKubWGAYMTRDKt5pNSzgJt28RkPVQ6kAKobKVTuKFqfjmwabMGBbrK97M5x9fxCYPXN7go",
  "key15": "35ZKEK81QePptWWpVwPezjjWYSBEof4ZsGDBMttD5eCiC5BKDdnELhqFPbmuthgqE376feHp3PQWSCBaaJBRh3T4",
  "key16": "jFeUVFyMeE1qF1n5P5M3LbPczttYh2x7DjZysLnKybntvBG6iSWQDgd5h87GeJeHjgtsugn5UBf2PYxeU4UNWT9",
  "key17": "kb1mHjp9yNJy5b6J43Hg1jnLzR4yWkZuNGchrAhJuB26wXZH9eVm9dYbz4R97KBdjR9jq3vUtb9nsL7buditMHW",
  "key18": "5Z3sCwcJK3vDdirMQfrGn1PVgEMfsFEjL8HpLbi9FUu4YZ3sVesCmvYnqTzXyke4kCq39tUsxHNU9Ug8bqVZzLFi",
  "key19": "4wa131tuhYZseaf6tYci9m5zLTzgMLeDtKztBPm9TWN1DDLuSpqwoyQw7hEw3HD4MqmBMWyyxEXV9LVSYhhQynUc",
  "key20": "5Ssif4xCUiZGbETErTiPqkZC25hT3T46iwL3adPr9pmm9TKCafNwKncMXd7ReaSdEqpRzRRi8k53GZJZf1hYfyMn",
  "key21": "57BCFyXg56zGpunPYFmdxnpKYMS6YgPcYLXpKgQU9WksXvF33kXc6uaRu1LJcqVi36oLxfUmrYz5SnMYNZP5X1eJ",
  "key22": "4UTzjCBK4PmKybzjSaWpBvAsf2uB5yFcxMeVCDKToZcNvitiH5caHHa39C8QpGkDL7Vk8YhGq82oxPZwNXyZh11r",
  "key23": "2jhp71wqs2pWmPdhzTHiZZ91s1KfAcaZ3qZ2xJTh7ewre8kEn6ZYq8j3tnhMqPMcmaTmAJc3h3cdjrYEFAraJnBi",
  "key24": "29nXMDitD9C4Meg2LNurCVKC9hqD6JJvkoDVkvGKmT9mZ13cMbqz9LoiJ41n8Fv7WtanZEfWYReefupchGMxZ7oQ",
  "key25": "2jWSbNQjq3T7kjoTYq7mzHu3FEdwwiShHzM7tSzDZUYRmVRumpKzRBv2skrZyuw16aaCVDqre3wzuWhq1pZnxSEr",
  "key26": "5HiNkMMz9nueFtHJLUWGNHmQVSaDobEpbhG4rbg4X3nS6NV1aTT9xBRN8Jv9n8UhF7eZTF3g4SjYT4Xw13Ytpka3",
  "key27": "4tdgV1sDUPnFDgTEgpcsDJiFYfVi9tkeLoEV2mriJxpMArojbeMggnofVysLjbsRLwTojkD6hpVP5aCmTyyNU6Pj",
  "key28": "ckCJDseB6u7k7yAiFiGUCSSg5UwYKuTGjBevJUCb4GqJaewWDH8UkqAQhRdLFgpoMrPqU8AQuPRsqivoASnz5Sp",
  "key29": "127EHPzG2XAMuuzYcoBRwF9ZwyCC7rsrGcmKiDvfKjZLKSF4whwXwA4WqUcEiVGacD63kR3ks8oi2WsmfWiGzpG4",
  "key30": "5tbesBswEUB9a4bNVCSn9E7pHMR6WpdDg1AZ5EPEZyubknCNQ2ubDUwESzjkcM13U3AdbzhE2A3ji9y3rEuAbWF9",
  "key31": "2qtksBZDnCmcNSoG6G7FVehzUgH5tLt4Xf2NXqMP49qRE89eCdvnENDbCaPfK8nDLxdCXsjVJNcLDY3WV31sGZdx",
  "key32": "66HzYa7DvChPLJqmPJKfqTDFtDjxVuqGyNaSN5AQ1AxVTCBSfq7C5NFqa3bjyzDTZA2F6U7Wa6re7Z4snVu9CXjG",
  "key33": "XkesVBmsxDhLPz9tvURex6gVpM6v79GjredKu9wrpdXVmhT4bAfZSfNZnefKTXzj4mnKy9w56CpXMEeResVN59f",
  "key34": "3bp9yKHXVKU8Qrv9LphuWz3WYv2Mg2KE9i7oG9MpAzdrtPPf3QD3uRxgbmSjqpXZ8LWipEnHDVfqyD1SgeKEiiSf",
  "key35": "4Dq59FJBFNodr6T1yCKvqRLEMeJuLVhk71JgBKrpETxMww4Wazs6HseJ44UmYTbmr8y33QqronAomLqEWW9RGKNh"
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
