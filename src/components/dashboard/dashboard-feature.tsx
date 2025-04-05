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
    "mu1C5TEDUNcdTS1FXUAjWYnW3aAfrFsSGUYdqYajWyoqVNcB39PQwLFbwNmQyKH2XWHEengAj5NYXhTSJNBfoFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dz46qoCjjWVNyJk8D13paJN4qaNhoFrUSaU2sR3D8P71kqtWnKobp9hzKbo7icGbuBChpBaLU7RvD1nkHWDQPws",
  "key1": "3v437DwHpL4tUciHTWcSu9ct2UMJYvxDnAtpS4u2LSuNoRVudN4x1gHtNzUkeCCiZhNPbQ8E1my3a5NnfbyLaZaF",
  "key2": "ffNEPsgPgRFFRp8eLgftKmZZdrr9jmDFY1zigt59aUY7u8NL4rNTuNGRAew4NXze9ghMJPsNGZv4WCs556H8uU5",
  "key3": "H7WaZmzKE1jp5nBFJjFp5QAv6jNxa11h9CW4vcrhfXU14D6v2Zr1rZkYpVaAGSCa5H2VP74rqyyn841bcdadYhA",
  "key4": "4xj87MNf2CsHGuhUFhPayUt7rh3cQt49cBtPq2JNamfTHPF28me2zhecYhN5RApehqDbaDMRsqMUBSK6i3tBSQhM",
  "key5": "4UhiZbJdvc3NBVTfe6gXTCfpSXHtp1NfibGNWeem7RyxDkLPjzrLetn3BW7kTsw1ciXVNGrfMg9jQecVLkELrUTo",
  "key6": "Q5kph4HP9Gyy2xRgGc9dfUpthzHMUhc4PqwBx7k4UsfgJPT6kyzCDW6Kr77dvJLSwvGvs5LVQw6DxwwK6TpwD4V",
  "key7": "5p7iuP6qoSDbYRUJpMhhXFZFhokXvxucgEcKVZ4N3uMfw6rKtgArE9XzWQ8LQS1yriBiHX91eDmeCVZWU7sP8CZh",
  "key8": "aeRcNtJoW9h6w4rmoEA968zhND2RCXBnzdx26sAVVzGeWgcgQMRNnjuvx3G6FDAbJt127hKwEn9wRn5wGWn7AvR",
  "key9": "5ejfLEvi8YVdDi2XxLUKdGREV5mFZJrzzrKMGbijSDAe3S936Tv8JTz1v4mYrd2VDau5rKkMS2fYu5XmNxcsdoWU",
  "key10": "2ixuSMgZ46shYtTPr8v3mjUSHeawckJDHd7rSVUe13siyzu6S6rK6NN5q6B7v9mujsDXbThz8hQpZsnuAzF2rAzt",
  "key11": "NXoaAUPKo5Yen7R966fSDDFw3QSvCHkozzQ17cgu1a1xTzMai722n7tt14QJvW1w64QAAYUSV4qp5wyYCiFyfL5",
  "key12": "2DUnbiApQH3U4gsZCTcyGy1yzpFwd3TTr2JS9Et9if4dfWnpWBBnGb2NMtLeKuK14ZuBD169d3tPoWRZ97QN3i8t",
  "key13": "425CmGtRCAGJqj6xmJSpSRuxZiy7JN27MxKLuxfZTRhTssZmi2TGxZTkrNTUFgUAqLqXLhVSc3sPJVXb5H3tqrd7",
  "key14": "cughXpbUSiX7TFS7jwYzdCzg1xJe9EGuM1smrMi7nFv1FjaiBV97L2usVT6cqVxyxjgmaGnrSPihsdyfPNvXB4o",
  "key15": "3EFc4vXvif651Epx6beMWfkJXVFo9f8mx2kf6xrYsJ4HjsuHvs6a43fLqicR5LEqGG2HebK9TiYBmS66Sb9pcb7d",
  "key16": "2Nq73ws3hHPGzahHcjhScJp6psNjp3VE6yJABtPNS316W6KUdn3iympp1n8VqdTDN8Fb3r53VzFVUd6gYSG1DdRU",
  "key17": "4x2pdiDCeVqcTMj6ab6x3Em5BrNLv6K6YzjwgsAWEGKnuFFkgu5CGWuBNoZ7RCAPEjMg6qtTH7mxKFvwH7F5Dvcs",
  "key18": "5pLdBYXxrqRiTqSraUG8f2cqLLf2GbZRRW97TCe2vuEUjBo6bJu2XN3BNKTi7KTopMvEgy5wn69wdPrGRmxqcyEf",
  "key19": "3kGG2x1w5dJ7NqdDWcir8Ycix8nH1ykUmNFR5ibhYmHN2uwsnoSXeBZngM8f1V9TQBncx7Q1L8Gu8G5pCcNANKc7",
  "key20": "e8D7bRTFfLvpvHG1VQf2JGVS3jF2sSDFBhi98HfdCdAqLg5WKHaiCiuAF7nmtWEirLpEzrswhVfRJ6MAodfpqrN",
  "key21": "29g3kMdo4dt6RVZAr3PQABL5v6p5sXG87boPU6oih2LQXvvoixzRMbyhL4KSTHFCJkcHUTzw5yThetK5u9EqZYGa",
  "key22": "2chGxRydKN4vy5uJ5QiDosYMkaZT257B6jEQ2T6TDLJTYjdbACBjK8GdamLzMFGVtxXdPyL7EBzJtsG6Y6GknWxR",
  "key23": "jsKiGnKyvpU1n3GeSASEa52RKak7mMFTaqYE4n9UzxDFVbWbieY5qyXDus3zU4NwYDVzVbj76HJpuD81dTHmJ77",
  "key24": "3DZhhKux6y2g98fXZWNTRN5jChw3fm2QQTGuyyrobM8GcGvqa9YvQJe3spCd3XQRsGwqQseGo56m8nN7faEwRYZS",
  "key25": "32LsKmMgwK4jXM4gLZTGVm4rYiZaxRsa6F8XEV5K24BoPKPuQED2mp51fuLjWfbDbaNq7M38DLmGv4gdNTfVHxdZ",
  "key26": "N8uY8kf8VB3Ws6VSxd6e55ZUb1P9QuaJavxkjrost7bV22noxfvK8mz7hKzDorL9gAowWu4qJWyBzhtDFg1EuAg",
  "key27": "3bYFVab9761daqnqfMjA5kUe83QdWhChv58yrQ3ZHFfxJDwev4vhCvay2hhrXz5G1S9K7oXQKKZiDq8vsVUryFFJ",
  "key28": "5BzEaG3NukyZyq83ZEfWQcE3UnqYNrMtQSH4YY4Ar2JnsEyWRygPrYJx6weYcYA9orRqq9BQXRGC5MBKUKKcdJMd",
  "key29": "3dhSWzkVxvfhdrMCs3eBesj5SMhdwbiggcEys6GrrEnzmfiJzEiLEKvBJD8bbrndxC5AMRoJzYyJHDAcTpPJfeUn",
  "key30": "2a8W7XvLcSid3DBWM2VrjaNAvVA1aKmrcktGS2wnRBDQWMqnwtPSReoZ2dQ1Ni2j595jGTdVdTu5eoTMXqQh55M8",
  "key31": "5JDoPvpR5bknvEr38vu3XzmUiQZdEWSgJbZyzsVDd3UZdoDWEeg6mpAhksJ4vVNsMjr1E6AGEWvzm8epFaF3v74p",
  "key32": "4s6179qRpPV3fbPxPdnL4cHwd56HC24BZR41SeNfS7KBLCHP6ctdXF58HjBjcB2td3JQ11hkLxbYBH7yPkEoLD9k",
  "key33": "cM8TtX36GaoMZFvtN9qvwwv7rR3Q5eSW3kzxCHtFaCmxVS87TaB4u33ZkUKdw6Zz8cMd3ERBWuPRie625i6ykZe",
  "key34": "SUT2jzqj3qYVreEx6wjxXvq4Scnip918cjDdPuTcYco2dEBXUhH4KX2s7r6amqCCs5AFMmU8VyzJnQoYEprLbM4",
  "key35": "3TZLL6BCSUPbntMTEj8UhJH54GMUzNv4HYE15Ev2jUsSHRFxHKjBQDzd4YJ3tdJTCkJpTicnbA3e6Ta2dD5ovsC6",
  "key36": "2XL3UqZru5R2xYcie81RgC75CdnPXwv8SCMvYpqkim3MVDztnYhA7YTnQ5mjuaHxQLTtUpMXaUpZbd7mpe2dgdKT",
  "key37": "4cp7cLHkd7vVVMzocpkmcRxHtyyVf85jgBNeDHYhYVTh8hVXxPTVZiFbX8yTSMJ6KUp4wNKkjL9kaWkmwKVJuKDD",
  "key38": "2iPdYq8bdU9ZQRrWBBx7rqbvss3gH27BjCb7J1EeYeCyczFyUBjZTEEBbyLG2Pte1AhHxxqgbNMQApEuDvt7Jies",
  "key39": "2MUa4WsikP8SuU3otcS98wseCKiQ31w4Rfc55qEs7zbyKpsv5UZZmD5NtUNUA2SuzyRViDaLW2jtqh4K54TgMdAw",
  "key40": "3Z8WZDfHVQwcSWd1gRJ13KHxaxVdqEFYSej5WVtMjigBaQcJq93dCJ5QUVA4eyGUZW26uBPZoRhp5SwfEkBvr2rr",
  "key41": "5tMBy3DHU2chVufpe3NEp4iNNMnN7aDgCbyG6iZrxMEv3U7iYgN92H9fr9EDd4tiy5teu5RQLLMqEKSgqRjT6FKg",
  "key42": "3vYJ2yDkgLFSeXXJbczVwu1gTPueZwGWFBRo1smh3GkERw9y2Y57iubWPzXFg5j1KVEs4PnRcdT3Ck4U5PyDnkz9",
  "key43": "4rq2xC9yuFrq3itDx9PFQa5A3Twjzc5d7NcbMMwyM335ztTidJ66Swfr4JNz4BCtjfyw3Pp8gthrKfSdxScobfJg"
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
