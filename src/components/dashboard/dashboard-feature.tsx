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
    "24HiRHhbe7uDDKV1b2wLL7n6aLv9cav1zjNtqYYBR6urXNGURGYh5rWf6Lhz8gJ1sAPoEwbPAAt7iMi4GurnDTUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32A7eKMzJLsWKbKwgpndr2XL6CYLhLU5LhAfXQEwRZhWzjn896o4sWSgwU9CtZ7Fbjcd9CN246sYuegAnq1kKgp",
  "key1": "G1McJ3uoZyssPxBXwTPCBSXdb87QxN9gwM2EuViMv45G5eKUZHV2CqZPwxzXTK9LYJ5t4k8r7uMgghsp82AVecH",
  "key2": "Rk6MsByGbNZwPjG1YQqSTMHhJFSLvMh8SSmJcVMKVZJ4TxtTCdxftLK5s15xFKu1xyQGGtKAFiTHDJZRVeyrqSv",
  "key3": "4qRoRSTPJmEJtp19ezuW2pCNeSZ5WSHjSmGpSwm3fb6SNBa4Z7yKTQvXD2YzeDhrjfUNzHMm6wnMSwqB56PoxTi4",
  "key4": "5UxZh6CVsmkqdRidb1KC2NhahHMHZPvZSA4uBzs4bDdjrcM8vrSjnhAVajGu2mZG8gSGvxn8dEy1C8y3fXqXMWBa",
  "key5": "4Q1kdKp5Y6n66idtz5joYq7vN3sRQjarv1cis7Uwj85Fj3g6F1GnmtRbXVuw5hR5bKXd9QyMActRexoQ89iFQjza",
  "key6": "9tmD7hvSMfdmmGq3HeFy6u4TeNmLzGhGnzGnXnaVKcUebuxmMyjz5kUHGdWFVN22NzpTVKFhVQayM1zYYVKcf84",
  "key7": "2oyxs675VMyioij4kAVicf1QbtjLHd8QZ1eWPJNZR6fFNVFwkVPjmVQrJ9r8FFYzdkmMoDG2ES5FUK8SQjwYDJaF",
  "key8": "3WPZ1oPuKcTJbrzDLXtnf75Pftze7L8CUvuDMq3Sm1AhvXBu2Px51mXLypTgpjwUExkVg75AC3BNW1DJtR5oPuyf",
  "key9": "G8XKQqaZDSj1SKSwtCZw8UhvRpLAwENnGSsZdArhgD5288cwPxFAi4aVahmT3qsbjnRD8rY5g7u6soWRgHjKsio",
  "key10": "3WgRtF2stCaJC7MYzN7diz3iKKU429kz3dQwqKaa31zEtgmKKsHMbt6Ffw9tXWULh5kxRmtacWJtChFZmkiSPMKZ",
  "key11": "2Zo36PXuubWs8ptEkRXLJFQP4hNhGVD1utUP5SZ4GYwyxX4TPYv48wtQ7YA8MJuuwumFV1Pkadb9M3HrYzkVEke5",
  "key12": "5JNXgzY8cq9aAjimySWL3JQEuExfVGzfexkmpGqxUYd74ZKKoaWFBD99tjCebGRrkufMFoApct58FDQA1WibBdQe",
  "key13": "4J9vY836BwoXC31rkzfJxQqmuuJpQzRjXow3H6emq94QKFfJeD8RQZ2Kkx6t68Y7aPqnowyEFCPXn7XqNbyh1cHJ",
  "key14": "PGkKi7u1HTEnwy8GsoNAXBFZUHGEQFRH7sHcnY1YqL2WF74CmEfGJ43rwridrFgxaXbeMop1Lbg2wGdhDHu876V",
  "key15": "3opRDq5B74L27JRbiJfR7KQEW13gL6cHRgf1aXr2cKsURQnMvRxx28efaisYRRu52ikWTtEVEC1cZ2AkZDvs4kEa",
  "key16": "2eufshNEhhHNiXtK5LpuuXJH2zBNVLpBNdE5i9Sfoiyf5T9Tbea86ZUMxSnvdKkp1sXe4w73ZLdgxgT2bayt6eut",
  "key17": "tfanuBJTyPGogqVnT99K4rcZUPU3RPDG3pypufJuZ4Wuhgz3JyV98dgk3aQXvCZUxk6QfTmy337X2siyj85HKZS",
  "key18": "hhWrjt2HfXmFotyboujzVH2m7dwKyrhrHDpZnxMujHM4DgD3PzM4HiCMx6jXLqGqD123dLcvPqC1hsLVg5p39F5",
  "key19": "2Qk6rk4XVcNT51sVhwcbvSu4SPTWnJvSbHx2asHWpthhEmpgxLdeL5MuiTrpuc4aLE52FNGjoYt8mWBm5pv65eK",
  "key20": "6PvDZfe6dEcE2wdDEbkXtnT7Nz6wbPVLCRCyymDdGbdZQQLCpc8PphPYtbBAcbs6cRuCeeEToeBnMKWgWAVsGjX",
  "key21": "iX5iYGvv6UXFn6DqMTfnn1rWtVzibQuSk3tzkTXJfvxxn5SqEzabCL2qYRZR37X92xZpyJD7ozGUF7ziv8thHcL",
  "key22": "3fZyu8pkwd5Kk8nwT3DzEwxMpoUVvcXMnM8Ujg2WvKgPuUkakcsTEBUzkeZGPPvArk14v1iXyuii3irpdpjBRd3Z",
  "key23": "3jpoHwRUx21iyq7T5dgcXL7pDZM9XmGi9mxTVFrCDbg6V3cvNRwV2CfTLNP1v3kstv1VHaBKdJAkrzP2o5EB9pLt",
  "key24": "d3zZKptvk6anyS2hfgwz2gfzgtapNBCBeqQUXAXCxq3CHpTSYwhrDqtLyEHHJq7G8AtsnAQqbS88p59XSE1TsaL",
  "key25": "58L2zBC9AFrRP4rt2tovSFTRHtzutwqGwRaBo9PxW3jo7KagENYjJivRoSJabTKh1bydMzF5KQnkHmp7Vxeis1ue",
  "key26": "4GVVMNbnT6UrNdYdmNtTAPbuuPrL4K5pPS7bjw1CSnKJUoU3DxFJRpfjja9MgLR81CdpU1XqEwCTkBcTQpW2Kzts",
  "key27": "5J1GB4JWDSF2U6nnigtDTYtaCKBb7fcAgebcQ8e1VwJdQB59L7rsMrRtczJBz73LQ1LSnWiqeZpKwpehxnUjfK6n",
  "key28": "617ec4tcNo8jAkLQnkgbmwMXR9hhnzZfRWYsvgoQyhSoXtm6rVxPx1VuED6iorFcis8ovxf8fhoKFjv6hUxJuzRv",
  "key29": "qSbtgAwty52YexMj7CuhLnrjMfcEFW5QZZdGzHbm6WrZe4a4KtfZ51vUB1AT2d4RBKPvxAkFgaUdgdBoWbrw74v",
  "key30": "4UpPYWS3aHew9ihqVnvDwgtrhJzXJu44xgLh7PJavw7jJwiAuunHZo8U9yCDrcdNHzkGiHY5zMAqL4W1QJjt8Fbp",
  "key31": "4cbUmzr51rT6SeUUk11znqmWjN1sbC4hDJHjhxcZjWjJa7qMHJBxEc9oiv646h88VimSTAKB1SZaQgLx3xUme44U",
  "key32": "3F6id2QJufmdh1Dic8188zgZiDnxoikMb24WnQXoGneXX8eYj1iAL5QEaqHbFamahsfdBX1gjEJAozZCfJ3wXfTo",
  "key33": "4giaadeLwzd1pcq3v1DBWwVbmTe5dttztj2zDyqZp7hCEvzToG515eTT4BfTfMg7h9KBK8NiDdeUBUaC6BeyTt7X",
  "key34": "C8jKKKEkFRxsiKTQEZbEsHCBcHHq6BXATcXGCVN2YFEWiMpyzTxEp11iMLazGbBfDcASPDYo8SRvGacZVupKC4i",
  "key35": "2NbNm8KfrqzcfrXmcQ9orGmA9nkFkhCZzyxacRUJywWhEv2YxvydH6ZfCJsgw6mGsbJpPsPU9rKpWE8R1thvVFGL",
  "key36": "3QN91mAs3ZqwpNRMS9UnPHc2PX1bgFf7odokLiH7BXgihiXC3HB5NxQ4TxL7KKDcbktCSdUFSwtgrvkFLZ4YTMiU",
  "key37": "5fKRBh34C2LfJbuHaZHSGF1DRHDnLv6g4NMJPxEQmPdbQezyaUPPFct1ebeMF4gurV2agBohGyTbsmPa8EMN8ifo",
  "key38": "57EKy63H56hG9zZyfLSc7nAjkYWnefumqmA8dfbRzQQsMTeeWT4SVBSuYTeAo9G1QznXir6uNqgjrL55exF4j4Yp",
  "key39": "63XGdEsQQ9CNsX2uYdr1zTS9e2UftFQicH6F8FPkY9BUgCLxASqWryhZJYfE6dU9Z1HBEaATRN7HuiWLgbwqG1PK",
  "key40": "muCyXG87u4ZnckfhJNd41J5FZ6znpi4t1g4to2XbH726otLupFGAp9kCqjzYHpUCywTXJR9Vb1vzmZH5dQHSTt6",
  "key41": "2faXsk93gYdkRxtbSznH1uNdyXCAB29jz1W6QrRpJgNsrZkJgUzrW3Mg6NLBqLQpdVDWCa4GmVhCsfwNNYbQBfzr",
  "key42": "XXtRqFTxoEoL3TQP5Jx27MjN5GYFEuLLoYiyXUQsLQrCQa8Qeo4A1urQmen4jJwF6ZjKN4TCFMyVDjWciBqoXU9",
  "key43": "4Fhm8hKowCJxKAmWqX5dZKLJn7EJuXPqLqGxyAFjRUMoCXhfYEGYAnUzYydQxdVye15dSVbBvYpoAHMjUUrX97Ph",
  "key44": "4xUVuBi9g3CSWURpLwKFAzR9oJrxjuWUWVB7GzBRETcyKg2DWx7GwVqU5EQbAwrF2kvrVmAbaJy3T85giztLbi32",
  "key45": "5UZNvTLRK6tDxFXQJYSGj1cg5unwKNMTaW5YVDkBKbfRc2FWqrpyDrvBX7ejC2vkVmqNqGbor2hisDmyf2D2egM4",
  "key46": "5qchEaSvvHo3HjBetnawKrWWMXYkWUHzzgrkFRGWqkXsTYu9tTo5yj9N8mdmNHDJGctwgLuGhySaNqcUJtvs1R6P",
  "key47": "24H1PgTbHaE2wnQeF52QDGEvEVSYJL4MVqS7hDNfZmwaqohXirmCafFy5wyLS2QmjK2NJxRwNdpJRZbxmzJ2BWcc",
  "key48": "63guRhvXyeDMZ6Jqy3UevXXsRgmoqiayJCBBTAKyTNhzA1x4f7oYbo7F5SqmP241nDYTcsTZiLRunzYo4SQ892px"
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
