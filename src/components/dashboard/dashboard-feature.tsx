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
    "5vRVPj7JDrf834uQUtMY2v2VRGptRgBYQPAqX712PhJDpieY72zNh7UaftDwUauFctk6TLZrzrUJtmH4EnRbbTue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQtkWhBfQWmoCmbEho3eNSWDTedfzhPSWVQZcKqf3TRN4sWDcgB8xAcTVxy1jbwHBbLpFtGtdDyE7UyTTdVL9xY",
  "key1": "61bXBzRveAyDwBgJNQx2zAMXaWHH1nw96F7XEfFgeUkRdNNHyTtYpSsgXGQt8MDynT1vNFjnj3Fp7uEk8jR7jLAB",
  "key2": "3UgbdrMdeXSAhTiA3jtD6zb2yVxg4WTYANxsbq4HbcriodQRjtUvdJjMfVkTSK5hQMh3bxyWuFJdbLB2CapNayNn",
  "key3": "aFJ8yfR4nZRDT3T5QDXPgz8fPK1zxEtqeuHc8uG51giiJqveKidTuNbyRmQLyFmLtP1BZF8QJJR63XuHChyWAQL",
  "key4": "2UUkdaDe57RfXu1Vhxg8ZGVgUVKv6uMDcp6BthhpMTCqAMbuaLJsgpF6EsT3a3B956ai6nsif1i2VHBRFTBvdwHi",
  "key5": "2i75bXbtfdxD5Y6WKXjnrHo6y9B8CGT7gaid452EkQQhMpcWVnxW7iaPKyu4ENbj4DLnQv2KYgn72AgAQ1BGzEdm",
  "key6": "SGgkuVkrHTUATpK4g7XoXbgoqBmKn9V9hwWvE1v8ZS4aPJxdctSF5iKsHTSuhS6wgmPBPykRGD7XCvZi6fUpdHq",
  "key7": "c4cuMcgLWyYxpVEgfrLUGXcDbfCW7ctZNsihPbid62ZkayNVFkEE26DbimX5zj9Z9qc7znSqzA7QfgxEARdaiAW",
  "key8": "49Af1yTVTdWAUVL5ZyDqRvLGKpd7c9ENPcNDWzxh8N8V17hUs8A2SvayKGEHyfof1xqmV8ZCH58gxBi8QygHCgK",
  "key9": "3JYJRLiSrhuNicJzKFxvRm8K9xFTAxy7QEK6hm4HQPGXZjdfXinRTJVRQct6jn4vJX4ZbCZoKfVX5ttBVNa5oWjQ",
  "key10": "uiY8iWfqnhzpwJRwuC6yfscp4cBSxuMtD2g74sfKqm2Nh5wmf7CgT6wtTJTPhwi5rUr3vn2Zm191tFbJuKVzqRa",
  "key11": "jZrHtHmfDB8QbtVn9g2gM6FKNn92wiavtuGLnr1Wkpw3jpWYa8sgkHp7vtKy5H6FmhRJKYHLR7R3CPfZdTunnxT",
  "key12": "wjncpKC9NMozxMueFmzKEr8GctcymAozuszCMAVfgveoY5aCfR5PAT7SWyfPRAAU2BXdTFSdUh6rUsujYQSPeVB",
  "key13": "2oFBNoyq5uyjknLcyhtc9j2qffA781tUSR5UfR1FnsgMbbGMkkAfCn72StpdiPJz4m6TEG4nMLn9XGtXgdFs32fA",
  "key14": "3RNyS1FEyPGPBCgK5B3DjiPptZBYTBvDCyj1MRnxCb6DuMo4wrvi4RMRGwqx4Z8b8AUXjo5B8pwVsN8Fy4Yn9tfb",
  "key15": "4xFwXfgc9EHpm3QGgF6X5RY6LBwdFaLNUiYjNwxvHB6nRNSVLchosyN92mZsYJpTHcKQ9BSv5cYAse1AXhNSHijs",
  "key16": "66vCaj2uKH4kp8f2pf5UK7SD94gn2Z6L2bjY4oSieKcSAbBpZLAdNqcbocsJD1qJLGzxTJV596eSa1A5rHpyzqGo",
  "key17": "5w7chbwFmMhdPSZpi1Wcywb5KzUN7MUHRyhM8LuHbee2bTgSQACWwvgj3CBGK6UJEe8XG8sXd1VwoLTt56a6QEg1",
  "key18": "2txSNPvCUtLKdMzbcZ5jTa6pSQKAMPz5k6yKfaYZePXya3JppNRqdaBPgiBQWpNRySMq1N1ifvFLmwBogGCWkx8t",
  "key19": "oTM3ai7LisJWdyyGoF4458PyEf97Mn6y5A4ScMMvTrjTGkNhhMLukTjhfV3M3csteJfWHxjkL2CPrvgTwxMbVZR",
  "key20": "2hyGoykVnvZGV6zRRCoatCG3CHZnfKec91aBqZQ2WGjTRWaLBWpRNbV11cTad8y7t8owZNbcGbeNsJhVn4Astbx7",
  "key21": "DUMj5kR3TcZFPuWSVzB9YLYNhgP8ccu4dwSkR9zS3rpSmcWHtr7BxDqG8vXCc5ZTieMjJZoCprqxrcFmvF6Dttv",
  "key22": "4efwafMxYnj34Ntqu3iV8bfw7ekNL1Br1jk4dWdgZPxRSff1PfkqJe2Pzcqv9Y9q3Ti1Zh5S4uhDjAkfp9ij1vVp",
  "key23": "4CDf8jC1bBUPE3gAfJWYbKAec1xBRSgdjcChsf3L4i9e5hdMdR4isazZr1Rf4kGLVypovrnYezteJTshxBHL4dAb",
  "key24": "4j3Le5YwVuUuggqt8viEhSwYjW2vzay2Rww4WqUK8daGZVXcH7GpFk3RZ4xAcKtDrJhvn2BgJSCGRj4vjsBWAJS9",
  "key25": "2f7zmNxU1cYhfji86uzyxDZrxjEaV4yyzkCqSaoyzXLCMD2h9QSFdsqjzh9DMRLK7itNTmsjHL1MGgGfknt5fK7T",
  "key26": "4CpfdVtxzXKaZpmToxWZUpJsQcg9mDVPw2fno3S4eJhkLyCGHLXaR5L3xFkPiqhtdXm7QYRenebcZPfKHWUbxJGF",
  "key27": "4CJ1jBvAdjvTM5MWVgm41wBz6fgBMbBkDMnRnFo92whyDG7xXU8GZKxfhFMyzziGQf2r5H6dxuWWvW1bhoQC9igV",
  "key28": "3XK2vmqHEfj2wuNb32d7rsmw2zBSw8BLgWfFvejm4qirZTarx6x8y8Xu7zmU6EhMvxrEwGyG31hi2vm9YNS6YWVT",
  "key29": "35JAMLKxkDBp85144nXFprhkwHe9vL7sKXDTMBut81a8whjB52msxhfs5Xyf5eNkDdVYy1fjRxspR2HCrzd2UGdj",
  "key30": "4hL4tNyXv5G5CnXmxD4UJZnNmtHDnegmWmfC1NhHjA2RWvgWzwnWndWddaBRrFWawXnS1oWwz3gZ2DEgHebSeyna",
  "key31": "55kwXTvjYZbkaT6eYk5e2jzXC7gnKSbhKniryvYNhFYRv9VLTEmmZyKyzh5EccwNj361BVmK3ihHhdXY3fhPvFHy",
  "key32": "5Ee4SYqA4Ks5TGacq1hxUr4VQBqG7vXzbY8mu91k5wgsdth8LKbJGQquTDVxkXcBN7TGtayGMEMGVBVLT1NzLa2q",
  "key33": "3QmoE1d6GB4CcZGxt7yXDWtiaX7J6PEEpn8u9bHwmEK8KkcAC9VNf1uK72DDKUknM52ATHLvzpSZc8YLG57m7uqm",
  "key34": "2KFEDMg4sSZd8kT8GsUU8uEM7nT4NYC6V8G815V7oeFPaxEMdrc7KzSBDCzHheZ9EDpFri5UD12H75w4jddS49vp",
  "key35": "5YhKaAzqMTDj4W8QfnUBke1LLSWtpfvacEkfo8czdmKaXPqGVg2jxoppfUBSnwjCW6TdZCQhR7eEa4hfjmnutfg4"
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
