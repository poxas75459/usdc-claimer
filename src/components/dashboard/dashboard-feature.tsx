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
    "48M9UH7oYutBnMf8cPKC528PkD1TikkWMzWEAi7kbJSMoT7szySwDK4JrHLT2BEXGaN2jTnpqgXcb5ZzLNVWHfRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fAERGn3EVmLWNgw1RqvA9wvU7zk3gSAsFB5LoL8UdPmvSf7o7Fqip2fjMuXomEMhMfTWSZi5fhKtn7YaUv5Bek6",
  "key1": "27ZboubrDNEi3hEPML4szeEWPwnhZQesHSV1a9pgNkYUSHy4DYfXeN6nr23QZfRTeb1DTxPHJpNFieYTPazQFFUF",
  "key2": "5uGAFmvL5e6uGcjjy5YteYS8k27xbiUHhKYKFfoc1V7Xry8EetKHcUXqh2sRYmJHsVNA5UcrRRr7KPU9FhhEKkJs",
  "key3": "39AugyAqU8PCkzZhK7UUTkULzdEsFhwfFqWN9QSnik4X1MiJ5rupkGD8Pr8RYeyZGNiPynNoqJuPcbynTwtAhEEA",
  "key4": "2317AXXcWEubDb7J1hBg7jYsTrtSBCGRpD62CQ53eZcf5Q8mJ6ME3oHMBDnuHXPbTKkzgHLkwxvtUu2vvPEXiZ2f",
  "key5": "rf2dCM7PVKpXgbfDLY8P6nTBX3oLzNtGJFsv783xUeGpeXzN5gULiJQ2VuiLhmG9QWyRZSdLshb8LviT4zzjVDH",
  "key6": "aVUZbF66xtfTsHMWVjeJqbJKg3km6EnYBVRDwEhBBQvd2KDR39MPvYSLjqCwog62Spte8caL9vhjwRY2GT7CWRX",
  "key7": "2uqkNXRWtMhdyv5Qhnci2jNSYtAjNhxMV1HLJsfZN5mxaZo7fQGt99xsuQ29cH4TCvjDaoZDnrwv6yewYwBdfKWH",
  "key8": "5bordjKieaYNtK3xcBt7ScjRy7wUtWVSvKrDSBQjSohxMukmWLNDkvyXwV8AhJ1mHrSp3yUqq2rWpAEZpcSpV93s",
  "key9": "3uqijKaGaW4BuR4iJ1x3JBjYW12qvy2pVhQCGfU5m4axno8Mfxj4SifdNYeTMAZNoHFCmfUjcFTFbzG3PRnL4hGi",
  "key10": "7Sh7vusmG5dJcjdfpYcZfL63enouKZSLtGWSU9VM5is5mAKTWWbiDMP5FBAcXka56XvMczZ2rNLgC6JV9j2u8UR",
  "key11": "aij7ooNnGQduTVtCXLJAqauC8YwK4LXqcWr56wqa91WkAQTm6MEsmdCSFEy88JUZaMJocVcjnCZAQHXaimr9Dog",
  "key12": "2T94nm9rztJrcWSwVRNoGrh9AKfyVhxQyyKBJcPHukWyaYX7Rswrr7FPfJGkXRwm4SsGg6x1Thtgf9u9pzPnhCSC",
  "key13": "23gFxrKDTAg8tnzhsQYdEvwUF3WGDAZzkJBKNYH2vPgbaUPnq1uJsb2GKAkboks7aKANxhjteSUzADwvWepFpVKW",
  "key14": "5tQu69iRQm2ERrCxR88DpYw6fT7pUrAtFrCek8k74GU3sWTba5h1Nv7v5tEN4qdcmRmwWokr1tQQ4PXgPiP5DPci",
  "key15": "361NtpYZLuHuttQ67sENjAmoyCoqKZGpDPveT1QSWQmAHMFd2QJUkrQMSB5wmYUinMcyJkhWQSK4pC6hxS2JWHHo",
  "key16": "3qmECtt4aBwHDWUikTJ98ZF3ZdxqKUYH4QphxVXFEKRpduuXCCtzesvtC5bAV5gGss3xHHqphZfkuGRxsNmGC1hR",
  "key17": "4oXEajuiE4gS7fQacPSAmK2Gs7wz9p1QnC5MY17LmMCE9HRvQkgPTt6yeZgrqSFwgcKvV3Dz9qZfcY9JesnCNpH1",
  "key18": "fXxvkJYNJhNAcXEdNHrnngEb8chHP8rNPE9zCda6TayP6tskUfAhg1WXC8Z2MKqDqbWwitLrAP5jVscbbZ9pTZa",
  "key19": "49rSmoYJSEXsadreXPdH5PuHGwuPBVhtZ2jCPg2uah4jEXpFKLQN7tsBcLd8JEX51gp6DwEe4QwpcNaupNJMTWfk",
  "key20": "1woENVDoztVKgrqmNMFLvc5LzkGZpn6Ch5P4m3HNZdRWYJXbAARRz3mFuKkZDrU56d1SWSQzb4EHeLYp8YctJPx",
  "key21": "4pysQMGjDidVkRQAV9bn9JTXJ1L9hVC6mQsvsSNvQ3pghsjokZU4vwqf7zykvMLQMEp2Ng7whfg6L18fxVJZ43gJ",
  "key22": "5unWtAvK5gXW3s6g5wxNtjqunz1BVjGSaV7Mf8z4e2Cqpun14T25Tr6K5mgbXMzPrEC8mQuptCNryyeRjzFL8QYb",
  "key23": "5SD9kkHwUuL1FFMt53khQ25fCqbfmR1Reia3mvPRGH8cxJhSxYwNx77rfnBLjRL9TAa5C8CjNyggooU4HULXi28f",
  "key24": "5kDmb51KyHmxcYNJrCrihUDvUVtSLSQ2G412Vi53Rra99swKiyNiT7sqE65avCGPXF88aia8PT5qWsxU4JUuHTQY",
  "key25": "43ixNJPN3xxtE2o2o3sDqcTxPeQ1P2umowMsUJZg89sriZrKvRuss6wXePHdgZFu7HYv7DYg96rgLk6RA9GuHScs",
  "key26": "CgDc73CQc94ocbYoSzM61C7em56wqoLxAm2Ljm2DQrDaACENR5hynYutjwXs7yhwfeQnaJwze92qDxUqhbezjxg",
  "key27": "3H8egSQSfDZjs2sAKE9TSqN5vKwTsM3QT5igPN8f5xGtmxdJxLDeQNiwFNbXeGa9zC39L61XtmmwDP5YTLzjMwLx",
  "key28": "Di49M9YiyyAAEhFuHuegrDc81cfm3N1mVVCzFoC58sDK1t6fut24kitU4839TJW1NG14d5FjLgUTegsNo9yrJQH",
  "key29": "5NnQfBTcioWBQgbqKyE5ZRNvUmZErgkmVRFc4LbMWB8V7PgENnVhjUWgFHTbZcDnmDHdXfMeezpZMU6h8XKyYhV1",
  "key30": "33zQBEgE8hq26ihbUbDhV4Uzb3SYhmcf7s8Wru3oSJw8jPzXrvATPaRzcnnYZFwnU4zvzH7sHU5uDxjLSkfmeCZa",
  "key31": "62nNnpgVBi54GwJvKBZDM1m5BaiJS9gAoCiJZM7aYwxtDFnFkwSpCpq32zcy1ffKm7BPcBAD3rUzPvAbgFyM3san",
  "key32": "4i7gLUyrJUe7oqRu2EewZ2vpyssyiNJmPPBFwBSNNikfQdVMP5YLTSL7kGJk5AZQqWDXB4X7rsn6EXEYu2PbKKuB",
  "key33": "2vy1pK6eD3omBSGUnikUJVKRAMZaKZG98JRaqRumX75EJtda1hHJXVN8K7UecBEwY9ipt3g1QMGWSxvac8boJPtB",
  "key34": "5a71LJ35eMUHg27kT1ZGmAGYb6voo4cuSb8Mkq3b41UPfQYiPU4vMZfsnNQpATspz1rKMwQa5E49cUbbRW8zw9xv",
  "key35": "5xFKeE4Fk9naU5vRzCqyC76nqbp9pbwZvFitPtTF5F8eiuRSyD92oUp7z4pw2AaViLeBsE1bqZUbstYrwswvLyW8",
  "key36": "4Z2xDVRYJgXJgnDRLR8X4WLMzGAmymSaPijAooHHPH7yLHNXm6Xv6vrm5tKASQEvAivk4NdpRf4nrnTAZhpUcHZi",
  "key37": "5uNMsdjtAVaa4wfVLqs7umvJihK45eht6AmMjn2BwZHfjhQAXtWnijWRfXB4pNT7x1JobX1pp49xjRcpwYLUqnkH",
  "key38": "3Tnht76GhRAAJ8Z5x4t9qj8ErYT6pyJqKkgmRBwYg8uS3M2hFZp4UJeHzmVvj7ArMiZbuQmDSQmKaESqeXCxge14",
  "key39": "2mtQVcxK6s2qvmT3WfA9rWEAYvG9hvf9oG3xhnGD14JazKoPCsEbVqJhHYGZZhieVNqN65asGepniiDjcwabe7DT"
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
