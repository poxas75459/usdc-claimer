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
    "4VXq7NphiNuW4PGaF5Zj4ydbseff7kQ1zAvNA1gRuQWoV9RPCUxczvBhmWnhonMfMgz3oXoRDbXDbXkn15mRpE3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVbt8rZvtgvdVbKwD99yrXHrj8kc6UBBDNKwHBkuN2oN3eUTCZx7wZva4KjjyJkLQEDiuHUR5M8gZXJNKAUUqeg",
  "key1": "4m4tDGstZbampJqpL1wjz1nUWhmTXaRn29WgDq87HjLG1evZFy2VuoSNSZqgUZVHP1Mb4m8MzsdkKXmdB9kyBKAA",
  "key2": "2FK33xWPaU6eorsFDKmQnsBH3j6znqTtBragfCF7pxTEqkWyP39QsvCHYVzPFVfhiBvm9VkQpEXPEhJLgeHMeKaa",
  "key3": "3HS9trZShQL8vgumpXWz1eLk46fNhKB65SNH166rrwCYLsnuRbXci32V7BxNaonqWkqEya5WzTT7tpUJdJvr8kRK",
  "key4": "3DQ8mrASiMampWboK99Z6Pcggjbt6hxEk7G9FKPWWCB2KjifXFV7GKspz3uf7Vh5ZSehosMxeTCjFqYMHaYGc8A8",
  "key5": "4XgbZ3zMr3251ePrhbHvRD9j33b5mUUdsSjvHEur6MSwhrqJdrSutZSwZd7a2wWzbJzGgaEz4yJAcR3T254gRFE5",
  "key6": "sVenkRyvx2LETCT2XEArBbb22Fv6wXGAyVDEScBwmHrs1cwuea9chGYxDApWzNKcp9nVYXrXd8TnCj8Pa7RHnBZ",
  "key7": "36svbLkNKtdogLF6QpVg1FCVzKoFxm7ZcCKKbEYTQEq8j8PbMsstMzVKsbYxMmGeMsxuv2ZMBPLivaKCqhTbs8Zu",
  "key8": "5QKqrexf1A4beq1KAtjWC8NHcfb4rmvdGJ3HoSp5qXUN81nBfd2mv77sDaTkVw7XLoWty2RsVMXmBibxyUFgwyMJ",
  "key9": "3chsBd8v86aQXdypw8xoFz9Sss9HekmEFFXZ3yoVnyLDVLZbMUxrLSJ18UgPNHnXTiG9YWPoLgXZQWYyLGctuAuA",
  "key10": "4Fs3UxqSTHk9tNFAhXbEh3XHvNed9im4GVeWbGrv7gWcT7BfR595bMmE5ppmxx2r5tq7xMtBqdKMAiuyjinyrhhE",
  "key11": "3s1Pjw4zHckfAVWN3Td6Qpa3LodpJpZ95E3efWE9PFwWW3j5U7VC8bHPtwTYgJVAgWywnW9CEUPbuJj3GMLuRDmq",
  "key12": "F44YtTdcScCFF66gXz1dhYzSu48UDW61XH1rUKYuNjWiLunhVPTrjs8UJDbK44fVMMMJfcMQbXduEoQrmXLDLaa",
  "key13": "36w4JePt8kqnrgsH1ijrVjAqVNAtLQ5VRuQGfnKaC6ffi9rFENZ49kjqdp34Xe1KF8CpxxQfHnZe7WHLtxnpTvrF",
  "key14": "45LbH4ghLYthCvyxa1u1T5ZLfL6ct2ctPWttemU8Tsyk6jXbbCspNnhNYv7zgFsPEbxu7eJazBxJwbLzPPJGRUXK",
  "key15": "63N74BW4urAocYpejot9MLBAyoHBhAVXzkTQUF9tWsRhXAwYKLky5Yic77zZUKsfHFr196fKMGvgnuAdNbW8SXCb",
  "key16": "F8YGums9kuPddto8ytpcCgQrsYWvsSEfLhVc7uLLBxDUYUdddKNH7w1oTzjPARheMBVDvsxAPZ6C6tNs5p6hnRT",
  "key17": "nhkMarDx51KvrHbKFH9oxQNPYbg6b4PW97i3GXbqA7iPtSARULTYy9aF8SufTrfkRPwahzmjZDFRiHYU2pQyERE",
  "key18": "2AxMshEJ6guFHsSpfqjsLqw2dnXNkxatfy6k2b1KQSCP9S9J8P2fCaPZJZ9QKxBxSbNwQU91jr3iGiYZv2SjWgw3",
  "key19": "41cDtM3NzJjj5M2ffDfQTC9mQEJmwfrftyYeym6KQE9zSrasKDJ5vjgdRLoRoBqQzPXXzG5hFdbt2TgdJ1cYC7gY",
  "key20": "5KxUh1TnzMTmHxm28zgZmbPz2M4TvunMfvrKKsNZKvjqYwo7RE4uP6hfwQQNeUJ3FbX7BZFpzYPev98uA49u1WhT",
  "key21": "2g5RBjuwdSFKAVGwMmtfivvnmJjYJBWUSRbLG5doMNWay6waSCKaj25qizp82fKTA5AKdRXs8QGwwMcgtSFWKGJt",
  "key22": "2RYgD7BGPe4WQpaiFHXJb6ctvUr5YtdD1HaAHGueyj3k9VmVUz6CvJdx2VS5VN1SrvXGKAseM49rzo58j9Ka5QNt",
  "key23": "33dCaxekz5YFFuehUUwZv75Z6ViTEwPQGugPNR69N86p6GHGrBerDs3JE3FyaVv6rCDiinMBHayPAfkwm6Z1SN5B",
  "key24": "23yJfqJLE3b2hPeH1bxF2yPGdhoaeNg558uATd9ArDgkBdmpwZUUQ4nXg3EyHS3nYw4js7uUzvPsUAouMYfKdKMU",
  "key25": "3cY9CvRVNhLSyJfLeuUeHspThfMupuVUYysW8WeAgyxDTU2fFGTUjpMtGfahCszSa4yjAzkgmHkqJ7pnGbeq9jCi",
  "key26": "42FSZmbi3RLfjAk6x6T4gsnv5u4ZkhucWpadXypLz7R1jEFbYFXMkV9zknz8bQjRkDRRTVVeiFnZWm3pNProjDZz",
  "key27": "26QxVKNFWwunKGkwHthx3cPmbaE1yndu51Vb11htMEM8vsdM3gfRVYetK4HYZbSH7ob2j8wWeRmpKRdzVwF7cKX3",
  "key28": "4hpBVr6hTcaT7S4HHtfrx1AJz9TAAb51nyH3QTcG5hWLpvdC34CN7NTNYu25jdwUGQW36pR5qG15AuWDFnTKpRKo",
  "key29": "5cCXwnFJzX75tfnPqGEWCGwT1T8MLYodzGy48xScE5egdqdCEHvzSY2vb66XwgSjjHWYAzuGJe55MyFyPZRnTzu8",
  "key30": "4XrFUj3ZVUcFGek5wWT3QmL8xTVA7d3mRdGnYLw7UtMCKKdg6GaksRhDNWurSghcy1VeWSR6XdU67SKkDTjAsZxd",
  "key31": "3NZZDR5vCH7wD97Th7SBtiTyPy6S1fxqAjEmfGg9cQKshwNr7cjGeVjw2cGAavh7V17QwYzjPdGYxp7V3fKx2d9a",
  "key32": "qmpBQwZgAVS7yRhXiLcEWocRT135uPpVpDbYKvev4WtJm8oDazUoG9m4ZJNexEtMA8zUWM6pLzibyGasiiPNKq1",
  "key33": "4eUGKEN9UKM5YGCnLfStdNSq2cGjv7BpdeG9LxoXVE2SdAT1xGEnZLgkYnsPmzC1fFAXWSb7fgxxsQAX8TCSRZnZ",
  "key34": "4BhiaLK8vSr943AS2yKka5UZmmcf6qjXL6iJtcPFgK8AmvGRFah9XNFzp4YAH7BMJm1zZMJqCmHhYbZZ1USTecM4",
  "key35": "64yK2wNEZgjbupsrVvep5mMi1dE2xP2eSCCKuqfAybDodwBLDFAE3K4WuVVb5Eztvqtt4Qj3fKQDbqcVq5Tvdqwg",
  "key36": "5dUoBs71kJtaokHkvAMPw4JeKVtodtVPvuNURJxdHnpLpn774G1oVkavb1wxJJ2hEmUtWfpDiBamWuhG5tJXFAAT",
  "key37": "56PTSKYKbi1Db3truBJMxVCDpyotMq7AA6xrbtNVWaHR5JEHPVLgdzksitL8fmdigN1tEvzTwDd6ZJ5i5L6WhM9n",
  "key38": "3H719GWfDf5VGbvQXCRJSrpczii4jAhuvYhCDv5NvidvrJxoB5tFv71uyiiC6ZUZ9UfmGsZavYiFE3DFquLMkYE5",
  "key39": "3pJUn58gwdQnvMcC23WmmeSHfvkcgzkbKqbbusxbf3Fh4pCWKzPMHoqnSgj82EmeHPjpHicvJyg5xwvSVCYV8zie",
  "key40": "5noUsXsdcZSTPDpbUSSXyB7m8o4MsAy4ybGWEHKBEWZL5KvbGboRRXghutaFkCEmFw56EGAPiFrFLN5kHfB6qJER"
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
