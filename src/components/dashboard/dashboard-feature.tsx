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
    "EgDhKg99ojHjcjsas7QJbCDeAvZHhfVknDVktDpi58WcaoPmGDJuLoH7VfMSUKxysHHzdufLzwbk7zv53siuCcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z7dwJ3Ly7AMr8XbmBTRLwuco4S1t7YHd24U8WYE3wisQyZuus5T2EBRN5z4HwDPQNvS6D3vdoT3uxbNyYnrbHsw",
  "key1": "62Ue63JAkfQDc2Cx9i5ZH6Zk9MTH9jw6Gfj4E9uE2nhsZTDTXWFKPV9h27ma6vwtD5gmZtNGikQDFnbuhK3ofNyx",
  "key2": "2RMUJcgmFDQn9fBRLMeU9rFKJDYkxPUqQsewroqrYjUbirsK2UbosZBKffsQLR6MCpnYdo8B1NNHHXxqudiGz9oH",
  "key3": "2cophcufVjSig2YXZ4x8sX1Zrus5gAG5rKHChhLD7EZRtgYjqgQWt9PNoTaBngigF8p8Sc3kx3WGNDJ5BEcsm55m",
  "key4": "25cwZk21akCVG1uK2EyaWYx1gyNcuvBq6NAa9y4wXQhxiPVeJdehuZTMSZ6T3ZJeKewPgprHHHxghgBaKDwf4oRG",
  "key5": "rGUrU5YEHGY86Us42q3MmPtEwsctjTdSUfk5PMngYnRqib8k1LUSuiZvFKTDNLhuy5HZgj5AjbrnyeQ4zkR774z",
  "key6": "2R3D5QzEnzuxtQTvjHnH6RnLsPJTy2dzgTsLgAKpZrz3YjKWJHgpEHr6j3y4fG4kbenpUmKUJHXGo2Ypg4cLGbKQ",
  "key7": "554peLfdwSr6eCTtBRXSxfVP2TwdPHvnzjqtsZxVVerDuCjazuJyYFr4WQidtzZS1nokvffGy4o3XSz9FonsWU1U",
  "key8": "RkFD4pdiPTwhG4SHC7U4wkNtWVMWREEPDRpBxBkmGzGZGARkohdfm5wR2s6f6aXnc1Q4ZuxxV7Fjq7wnbKWD3MU",
  "key9": "4yesxEjncstRWE8SFCtd1jL9PEfmubM7k1UwiomSdoUNEpMpVRKZ1poakLYVZ3Ja92kgHeaGceTaE2hBcwJ3txaF",
  "key10": "4EB8sgghSmSxwbxnimubk4DMC125ZfvH3rNVzLc6DHyEkfZpCPBcCs6Agb2g8k3BMnzh9zebz8wMFEgetZRfnbsY",
  "key11": "WFAdg7s3SQNL61NGWD16nv3KnPjxugpeE6JvWgrh6tKVc9gQePRu1hVb1s9erLrRQSJ4ZiYCBdV5BSELeoN3a88",
  "key12": "236eBEswKiDDK5ZETd1vAepgLPQhE2yfsBVbitqJY19giWuMa7WERariCKwUzpRE3pRumXNPX1XuY8JvHXvnxQo7",
  "key13": "3DRWVhUFAhQG9B5U6FsrTNMQEMPvV1waNKfrgEEjuGeBZ8wDeuvw6SJvTFdYynvAvLrMHK2XZ3dTjWdieboF6hs6",
  "key14": "SwaPqhivRy4ynNXaQYyUCmiKq5xHAkU76KLGXgfy9eF5PnJtHa5bWPU6kjbitXWsKND6E3cTyTcMoJt6dGZkdTy",
  "key15": "4PbETthSjkzrrZrztfiF2QCn57SRtTSxEBCn9vN7bpRmkPzzEyyQnzbQPJcszEaweL86Y2UMS3yqyYX2w2rVPZzr",
  "key16": "2kShz1RMcHagpj9mwzSXvo2sbRtBirnNgyXTQ9wYFafgoWxGgDZaKLhFiQxqbmtRerD9hhHwrL2Wi9K4JD31xhwL",
  "key17": "GKcvKDEYjdsnPN3hghqFKr5c9fWDBTuCfyWSpNrh7fBYBZ5Aps4NPZM3UNUTpwbkud3F5qZxnx8w4LNzo6aEc8D",
  "key18": "42rWNggNEdk2ksMVq2GtrGR5BNGrKpRv3PFNcSp3wjCod7b9DS815Q8kdc1kepSNbE6jKDg6NeLtxr343492ejJp",
  "key19": "3nij8qGKJrAwwV75y8v3WV5of61baTbkVUuRDMJB6CM2VrqYed53S2kxFuDumRU6jkG1tyLHon2FKhto2tprMh6k",
  "key20": "2Gr6tLR1ZnLdnPBaietahmW6zPxbBqsEq3wsqh85Q2W33uosYLZwmSx6pgqnxwnASVG8179WNYNR9JpoaUFx79GF",
  "key21": "5ei1BePyNWGHE3qioX8T8RyDLenJesbzLVd2zAQQP5Zxi4SS5ewWLx9VGH7e9vREsiEAzHXDpt2wrepMUkNGYFN",
  "key22": "3B7r5pvtcqDRwZDC4Sozs8Ubp3Nenn6HY1SXJPaRszWkcmG821q7uLYDN5LZBXfPVD2JmX8ZLEGSVEeBXpzXYxrj",
  "key23": "5A58AAXK1g3jtGGhVxFiWMiZ4D8yo2omZuBp2HQcQhMqRV1sQiFS9oghfixWxbSg2Ncv69A56ewCgDVWD2WdzhB6",
  "key24": "2vNGwLEqxwfLSBNi7Q6KPti6mHK7QGuBrMDXKQToyzLME82q9bd65bL5fUfUW5mDcZwUrL8Q1t9eBPGX5T8V8AEw",
  "key25": "3mTWTvfkf3Z2DhrrbwCwNknF8ddanZK8uFjCFqzSVWW7VNFx5F4zf5ouSw3sc7jaStwZoFRxjxGvGSaFFLiBAkV3",
  "key26": "5mwHcqj6XGeKyUnvZYh2j8ptpU9q5pP9UfMJZCx1fcejELxp2bH2Fq54kS5yFaRHnwZEFjBbhcKCS2h2yL5tYPbo",
  "key27": "2VGdSBS5xw3dmUevedHiQUhNqCqSeecmMvJN2YJ8Lb51Ev4ef1wxmfRWoBsvUoZzkitygWyZp4uApJvfcSPqXxFy",
  "key28": "4EdcLAhq2VXmXmMxBnKZT42JCZvMpYJZSSbthxrBbQNbU5iB7RBajRXTCetsEf3BdKHL128DTR8xqFeM6yWi87j6",
  "key29": "xf8iG7uemgn4p6N7AwKG4d7sKKVddVyLGoa4L3Kb6ZBoESzeeSdQRphCaWvhawVDHZeVmKGsLcBGW3GeaH7dNgs",
  "key30": "3YmMSLdSvxTZ5C8aXhSJ2A3FD4t1fKUU5YWuG5ivZsYwk4tXwytLGRNHq4nk2gdDMUsjmBZyHzpQFuJoXrFvihxu",
  "key31": "2MEPSj2qwrfUpDo38LDgN7cP3tCjxRiQUT6JGTeSnvKGXNqwbin43ymDoRupkKLemwCMoYcSGrvaTxvWKdQ1GGeY",
  "key32": "QfAF6exKTTFVFiJpUC42WvCCNc8D249tH5opdjucWLY4ja5xN6jZTj3KQHmFTMG4QRpSKe7cw7K8RxpcEU6bUiw",
  "key33": "4qmPWREEyg1MjEN3yWTxjXrtrNLEECcYbFHrdnNfAV4AxVjAp2rm7fTBLiQAbx1Ly4VF99bFvX5tJuPLXcsT3sYD",
  "key34": "3X47Fe5XBkzeoNGSXqmam2fTJDStUd8Sbsw7FnZ3Jmt1jZZU7aPUeCTW2yLyWQYdT4vPyTBxo7ZhS4stDNcL7Kzi",
  "key35": "4tXgEp86wRxh3va763W5r5LMjUh7M8bNinkF68LH5TgwLxC5EfDKPggcjeo3g3b4JHotX5MUB2TTcsKmG2fnrtaB",
  "key36": "2JpX5P9ZoTxPGsQr6YzqqepdK65yYyirLdNSUqf9iBg39GpFFzXdv8EdeaPHH8Cuc71KVjTssTkUkV8s9DD3GKYs",
  "key37": "34oY91kTEN1wMGrsyDULXsCSDQ8cZFoeUoCTNCQxXMYTqLX1HaMEN1xKAuMYSwBBHzHaeyrk5Hh5QKjE3rW7BV4P",
  "key38": "2JWr42u6y2fG1iQjMasJW6vBQm34Nok7Q7aC82kARjM3W36wZmozcHLXqhy4dJaL2dzHBrq6VTt99FH3nVYQM8QB",
  "key39": "sjK7SboKvQRxp3sjTe2u4sNrV1WTLfaGazp4S8e5g4et9GSejoyGBVLcm7fCJEHEovdLAHWyj4AwcBaeCmVtTDs",
  "key40": "3wCx318zAa6jF4hLuiVTbTfpuzFKrwF1ifn762rHRwYSzFkd9hS86yjUHuqJYM2Km4gaT1ccn6JXV7bmT3i3bLFZ",
  "key41": "5zToFq8iCb9iNAgTiizZdAqZpi9s5eCAivHFisjAZ2HPzHx52HxKoYXwHgQgh8UFEp1G9f7kGMfSNwNGDQge6hy8",
  "key42": "4QctaoPbn5ugAzzaQ4svadYL2s6ksan4zkzfuuz39aBZYDdKmFyR3T64y4F6QhpUyni927k8eJgNQ1R8iwYGZgFD",
  "key43": "3CQhxKZvNBJQH6Bn6hAryg6TQn5zX3HpFDrkdB7cWVyrHnGjxdhdLV4Amb5svcqw8PVT8jr4RsTFU8ic3hGrV6Tn"
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
