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
    "2qwDXRWsex1UPVmFcR1PuWYmqH5Hrs85sGoxqvz79nG59FhgtvaLWT5WPeDc3pERZYP7qoFqGJpF3dkKmXuSidwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9XYVqq1KTB8Xg2j4LmWH6mLEjFyPSUK3JCNfi62g1iJUz63Q43zraP23ukAhVQaz4s7sP6Qp6YyS4KgVhfToyJ",
  "key1": "2JW7SicP6PU7B42Vj75opD7p5r19oWvVUsJ6omNUFLjGuZ3FDwF6iGPLbGQBGwj684kj4cdGNJw93BiNNRwKKHft",
  "key2": "5Lf2X8ddLG9EuF4RiqbRXa95DngtRo6NUgTvnesasnn6eDwPMqD3JsVNYjFn9vFcLHSqMMTr9jQjaoJqw34GY86v",
  "key3": "5jciayD5vktxNejpCGD6jjmx5Jpb85qQ4szovKpbVnM2wX1wZQ2wndbvAq3aLgPLGPfLXwVH6A3PYyqmMUJzpLCt",
  "key4": "3DM2QHqjin7GkUVbJQZHJFMXAXwV2Kt5zL8AvQRoCuC31TkVEchvXrYyGTN2xfvYRUWqjCYkYT34AGkiDtommVuU",
  "key5": "ekMvy657jDEtMPqSGcn4k5fk8atJ7U2vw3B6Vuo9X3qQgbVhn7kSbfajAPaAcLURNfpiKu6BnPkdiWsLcQAdESx",
  "key6": "4j6qaDr4EFzmVBAZUjxUtefZTtYztz6vLLBitYhjtp8PQ6KobTJLNQ5vL2Qe8U9Hnbjo8u2MHubttqxC28dJTr1S",
  "key7": "qVS3PNgqwVfM172zsCV8fAxctTanpAEKibZCDUZ32RxjrkvdKVCEPosEST165mZQuMqpZTvrh5zVQ2rEm8kxQBo",
  "key8": "58Wbyrm25JWoNZdKTaNGqmfuiiem6cXHXW4ASbDJwXhSrSDWNeHeeD7i7ttQiEHPAzomQxzGKAi3D5Udyimk2zmJ",
  "key9": "LVCHk9NotHSz5EPUheZ4QuGuUEY6Hin1TGb99THX4JZtXou9hxxTEF1eJsWjdo2zTLy8bkBfpTif6aUULz8FC5R",
  "key10": "5vnePGkpjVGLK8ACZddqsb61biNg4SLUF1WhMrLmiZzK8QPZYfzWGtPoNRsN85su39kXX8MTAkYQNQLxQnpAzKAn",
  "key11": "4eFJJHH7Xj7hNQBwEfUDdS7BPUTGEZC9h98G1NTh6C6QDW79r2UpNHkdfh9KNqMGAvGqPK64AbjVVitWJQXsT67B",
  "key12": "KKud5APZpPcob26YVPsEa2zDJRNLyEqCRZHGMG7irFxCGC1HAGCmYSKDvtQj1Wak21mvbBnKzQdq5sQa9FEZVsz",
  "key13": "3KiDBiNfmobvGvnB46SN2BtRzBPai2GXht2dca3L21kqaKETWW6h3Ca4fZL1TePcJPWRi8io2SUG354QS71t2oyo",
  "key14": "2quzpPKLfMxVtd1CgLxLCfmnT7BwidxMRtSK6Hg3efKupgPhXMhu5GcRVoCcuo9B2qXrNo7Wxw7tBcGGec2GNGXa",
  "key15": "2FMDUU55Aqjm2C8Sam9ZPYrU3LXf5S9CPYkfaAZjii9RSEiCk4bWGBGwzWdkdZGud6JzL7uNZxBXb7q2vyjc42w7",
  "key16": "29Gnpx6879pfyQBjPFoCRahGi2rektkn7rDirM7hUiDF7Ma7spdYfhPQ7tBKcPJdpYzK1z5iaAjM5fwMDrQPndqr",
  "key17": "63JCgpT1xEzinLapHtyMHE79VjEkPjostqw2Mc6H852R8bWukWhukV8uCPjy6XpzJM2Lg8ASVRZSmXgqGAoBcuC9",
  "key18": "3HgHGFSubSUX7SdguRNXJ9pRFsT1vRoqPBjETrXGvMLiogk5fXokyHYTschmvMDtsFp71fFyB9w6WGvcv8uFqT2L",
  "key19": "4FgM3M8tUFBG3MnbxHP5GfHWnKHRHeVrX3q1uMeyfoPpbd6CFNpPHXA9KEkWRVQ2rHhx9RvTykpYtpgyqjZhfgE",
  "key20": "5zhjSqE9h2nV2meS73XS5kxmcV7MAShX8WypeaDuDuiunUjA33oYfqFoQFQ4w4gY3yPUbDFjFXz7GDpSQABBzUT1",
  "key21": "4f2z4a8PBU8RReHgEF3LMTxHAy5GLth9Bt89q9JeAi9RYERaFEG5h16mptvveC9Lfz2rUU8tzBFnZ2Y2AJbWXaPM",
  "key22": "2oxzUTTjVDWu9EVR9ipT52nnAWp5twXEgNw9YfCyBDbD2PREQBsEDHz4HGS4bTiTQ7hEBtsYfuM1imk6B8yZqPSD",
  "key23": "618nLd74VgbBphq9G2zhLTZZG1gpxPW3HEhRDXsnwy96ymBc542PoLG9c8YmHWmY8HLNLL4uSjJJXKmoFCAitt4M",
  "key24": "3aB8a5nUpWNnqyn1sLPQUvJR5XGnLQHxMMCVRxBErYvHktz3f7ikjgZ83772SJMeXfMT26Y8ttN7KZjJDCKdQTMo",
  "key25": "2aBErMfiVn9HPj4nHP8AZWZeWmgDVifszcUY7xD8Vbn9GKbaAfpxnxgePF32Djqc1AQn5gBmjrPfDNBJQZvPXENd",
  "key26": "4pKQ5h434VcnMJxcHGrRFPDpvoSYrVk8SpMKU6PKUGiviBcnn5caMKsugfaxVQHUcTPNL2vW2BG9ubpWSEnamnVS",
  "key27": "259zUpiKZmweCF6EjasmTWHGegSYe4LWd5z6ygn2pCgAjnUHxunyHmS6tkdQed1hhE23XkDw4nEH8V1cmsPJoxtV",
  "key28": "5cLBEDmSG7KAGyb251FLpRv1tyeqqjdYvJcBNJ9ddQrPD4MChdMAhRRxcRzh8HSSb8ywXjy9tW9deomdB4hMioUV",
  "key29": "4C9oGHSdV6qMnTbgJShmZcynw438LdV9XiqFVQgs8MJyMoF49J2AirGijn2Kiri5hCdbivHHLZ6GzHjgkeMT6d4S",
  "key30": "4CYLSsUHgwztec1SwBSrJpHFWMmMgUHC3GnMLr6wsFoaiqDJkQK9ijvvXu4gtMVrXxi6xoGuaQ7JuUUFDHwmBTfW",
  "key31": "EcbERE7L3GNhuAzjxzCCcGV61zfHf2zUY89Zd67KjNZy1ZQocTM77BJVUfaUw5j1ZmgdktLRLQ4BYjUvSX2uDa5",
  "key32": "63VaParrn9YxZo9n1b1AuTCDmkAUAvq9XFRvB82m1tXHerw8Ym7bUA9VPWEefc7kUrjUYpA7ZDMWm5RKFmPZwF2t",
  "key33": "65wZA5NgmiJKoSTeF4Ye2Nc1hXo5fEVjK9g66GC2o6fUhvpHfpPpetCTnJhqCjMQabnT21TvMsctH4PBdbLmjAvm",
  "key34": "3EoboBffupXtEHxML2D8oKeYnsSwy9VbAzHcm3Lv5sKnHo5UfYu5q6dxNjUjN9vYfmzMcbEEyFQn4QtXGyZRoQ9u",
  "key35": "36hPK6zyuYtiAqRfVT6T5zopXjsUp4aM97TaxMAx1w3xKfxpgBsri23DS88NEWwPdEb7ZyjtKoMHJQYsj5cs1qYc",
  "key36": "2gVFhnVfS9AQnagndKaPAniX87cJJ2isaNwUo6tLNPGVCTbWetPGzuYNWKvtfxCydegZV3i8c3LxvEwPybkrx612",
  "key37": "2QPsUvzNEUbBUSQWL3vQ7ecyuXPdnBRgdNrVHkinPFYComJeMtLL1mCXbYSapx2xqF8zCXV8U6zuLCH9UNYRfzzx",
  "key38": "EbXzsTw1RTaai4DbCcn8gDxLYa8sxJ9WBecuvrnViHJoq7zFhUfydW8MFXB2hGB8twDFWw2NjiQLPYyhSAzKSGw"
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
