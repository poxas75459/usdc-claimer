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
    "3CKVsNhCXU2vDyE3EgPUxFJ2k6nQ2KVZnQQMRU5ZbWoZY43TvvyFa9VRZdCtxHpCBb1YvqTn2F27YenfBTu2EV9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NcbyjTkPLvLqsu2HUujB57i4Xf2ZydPfDurYiqQiEQsD6oeiarcqQAn6N68yD1AgzYmknwgfikWnaX5SWNJHKNj",
  "key1": "tXPrPqUwJsAMUsceSdfGqdAJca8AQpZ8JaRkMRZi68RMPD7Y1QSM6TiASRJTuoGhwK3Pjz1E5zRb7MqtdfCr5PK",
  "key2": "3uXomacP1bf21YKz3x4CJXe9UBzWBYbBrVYbPYMKyqc7WV6cUoW2g31aFmQo3bCWQDPXiwnqFmeEiQaQiShY3VFn",
  "key3": "2YkJcD4dQx1YL1pP6HUBFqMcF5Rs5DzaonN3N5bWgTNJ4mQXrV1SieESgT4wDmz3CVWNcGP7s7ZQo4N22gLfBVBA",
  "key4": "5fLz7NZijfwkgsttzzp7je8VTujvcwQP8SXd1Khr37qfvmShciatodLUtAzEameuUqDrcZVfaUjGv4cMkx2HndED",
  "key5": "2jziwCbYVQoaKCwxsUnn3kf6K7xTJAqfHLMWm3AhBZw9pGVJRwZEFa47vgk2fRoWtkZ18zoWs9ZyM2ATBXwYJhMJ",
  "key6": "dnZHgBhvqPAWyQmxCMW99W4oydexmSdVibe5DKAnCrk2yFYg8JA1u3D6eFxKNnrecYNPcwDQGKGhnaNSNUd7rVu",
  "key7": "9qkwfp7bdv7m44LBTpSC8smixP6EZ4WwZw5UcLJHEy6wGQC4FjRsYvpGPFqRP1HxwiKi7cUALffQoDuxw1QrLo2",
  "key8": "62v4i7hDUFCocuisksmV4Lg7QsW1EcJTzMLUCRj9jH2qPYZ6RcXjbEJNAQSbopYMFukVzvtB88v7mgT6SUVaQHbo",
  "key9": "2L5F49JEPGsfDwK17FC9GiSJrbc74x82Yt3ygF1cAux1iDj2jsq1oBs9fEfzrvDjiamHp2hjWfeLbToJaCSYGsTj",
  "key10": "3ryHX1vcdxt1GD66nx3Q746S768YFXjt3xzGSUZy9bvd7sLKUTQHmfRq7Lh7MH8EJjtAeWcGH5zuqQrV2L5gjdo",
  "key11": "3oPfGoqy1YP1XE4rhwKg1GwPDqCViBsK3goZr8oEus27oRZgy3m1gMFfPbRqFePCZBgYhhvotps9MhyfwPMF3NXT",
  "key12": "2EkzC5aAKmSVHzqfiHjLZQRttZ7Xg5NEbmxgxya9S2Xg8q46ZiS7NeQTTtmrF7b5XzrXUBLEU1qmSRpMgdaEam7p",
  "key13": "45DyjveiqMRbVX48fSfTEBLx4H322n29DRJhz5g5XKLgracoRk7XUJJzjp7B6S3kf1Q1n5w7RWFFw8ZWGDUvn6d9",
  "key14": "4pscZyZ3Vx56iKTJa2rRM6SBAeS6Uez52iKYHiMJa1tLCKjJdSoFFh9vBoARHbVBkFPFcVxm3aSaDAwYreGwjUJ6",
  "key15": "42J3Hv1pVpuPwbaGLR5iWrfYvNFLcEKB9gj2Xu9bdU4hchYe6nUB7oAjYvgYxANw6eQDFMcQicsD6MvCiPtBU7dK",
  "key16": "3w3mMwhpr2EbsY145UqqVYNi1QByqh9hPpdWT5QUHSzRk3FrydAkFfXNfxxDcPGmr8EJnhQQ8WCf88WUMmRTmrFj",
  "key17": "4TKZd1wwhvbZtbdArvM5mK9H5eeiBke4HygGw2iBegXYFdLWj64kVWKac6oDgGBjLhxYi1wU9znbZULGH3UeWLWS",
  "key18": "xTL3r72QVBgVfB3Mmbg3LdzYpprwyw4EmDaomSuC9JeM67jHajN7G2FSiRVbTXjBNKFEnLZpX8riATgy3QQxFpZ",
  "key19": "5csWvDm2wbdvuwE7YmkHg6Wie7YRncwe4nGBuFrS57Zz83V4RP3ZHaZjTv1mSLuGevyF4Ra95HBhm14mEsuBKZFM",
  "key20": "4AchxXezaoDQr1nTmDor7fsKCLkoP4beC6fFrQejqMUiUHJ8Ji6ySYwpDf2UeoXDXEvSzVAtXazgv9Kq11e8YPM2",
  "key21": "Lr4d3BoMysqfDUXF47uGJbS3n1TY7NwyDecmitG11UyPfQet7dBRtZWrzgabnxndga77C1KirMQdJsDNZTwNbJX",
  "key22": "5sMwUBcTfrd5hhsjTmA94biKRUn5ZZgdBrAYDahnwiHj1dtG8wCdh2oSejiqyQCmvte3BkDFALj1NMWbi2VRmE5i",
  "key23": "4fPnFfuWrDoZpVnyJ6UWuaMayeatfqq1nBJUfuv9LorFiSes6AZ1h1sXaUFzzBu14B7kv465dhHho6jFn1bHKAEY",
  "key24": "63xq8ogG7EPz4umScxDj7drrsPCHuiNT92U7wKsG3uQoerWMBCXAZ4TyvaTUj9WnrniYFLgq5UvM76t9aqM2m3D6",
  "key25": "3Y34Lea3Yfym33wryB9gARNaryM8LHt3L3fHXtkMoukR7qdd1GvWuUStcZHDNrctZgpE79ASYBR31czd1dfN64F2",
  "key26": "4rfTPBEYPSi97sPzb4k7a5tzNAQ8yWhG8MQESFceoeCDJkcfCiJrnKPafv1Av4c2bYuv4iwvzoCWJu7LERwhR9gY",
  "key27": "51fooGwmKh51YscwVk9He7HPrRpTGrdHYexoBFYUGC6bGwimLxgixnFzpbuvmbCAGtzoQRDygBUnh7vRLqCrLzxj",
  "key28": "3pT9fDJ2yt6e5dXnfb6NS2DueWAZFNAgCqeaND7KrjdpEQtf1LBt4nP3H1mXQt6JXZVPxQ76S1KvVDtYRdtereSA",
  "key29": "49vvpTrxF5XxbXWUtPuZSwtnvZK44NZFCXPV5SjzkCK88Ny2aYhtpo1Jzu86PBFtLx9YJTXL6zQvxDVfhy6MQbbe",
  "key30": "3nBsEgbJhqiZC3yhQhQyGL9hqNXtxWTcK4HX57RpCjj5p7kmvzR5pgKGHCRoEyFbPtupxpmBJoPLeuuURLVvEgth",
  "key31": "4y8PxcGWPSdD3qGNGs6aJuf3sCYEQrngy46KvFjUo36CE32dz5GrhHyU1Deq4AfGPoT45D6PrhphK4LBhFSu2dqm",
  "key32": "nJrgDVgV9EnHAojZxR66m53D14mvhdv7pFrPWN7YHbjxCpD4FZVHZXXb5J9FsjWamE26F5LkKiXTYduB7A93sA8",
  "key33": "3TYDwTjtavkbqNe34WaE4cXBGZZ8yN3dRSNoQbNpYpLJrPKybUimaoX7tkisCV35iGot3dWaTizxVfB7L2AFpGsr",
  "key34": "4Dgj4bcg9fy7tBdP18xSojo2BtgP5GAFXsCfSLensnBzg1omETURD2d5QBjEm9NaZPiGR7WaWG6r4ySN27eMqh7P",
  "key35": "5vjyZeEQ9GcJ5nGsCx2sdWL3DSvq3iqaWR29csfNvs3xGYV2WZ2y3MNe7E5YrbKwG27iBbsj8TjC48cjnJqkrtBm",
  "key36": "51M7XohZfPaPqUqdP4QxpmZEiAVWwfF1XH6rrt8pxdncAyQGiHpytsrSCNj4t5rSv3xdm22td3r6Y4PQNR4kksMs",
  "key37": "41LRms5jHgcqLdonVNa22MmGHecbsdUN4UXM81afZf6PtcAkA8B7VQS2pjyTQmkL5sJ3nC4pZ7TKj6MXMnQ83onh",
  "key38": "5XRvcQbGr4KMMktTpQc4tsHS41BzgUJhpT2u8b8DymUt7B99s16Yqc85VE6wcHw6YtVvpmeQeJdd2W1JcA7ZCGht",
  "key39": "3oH47rsk5E9nmMZ5gNaJPeAi13tVADLy4YBEnAenGaBGQwmZDksC1tpmqTJyDWjbTKbZ59yZUgm7i8W6TQqrLRZm",
  "key40": "3cauN7Ma46mVit8CWiJK4Fr9H8UfrknddJmkFmcCUAV1CjY6bHja5nbqWHayTZrDBxto9sKRAmsRbdhwK5y67ALQ",
  "key41": "2wqREdULPUQ2afD1pgj2jaRGv39yGUHUiYxyzZX4FaKTZ6AQPXBCz826JaWvKH6paKbQLfDRsm4REDBXkxJy4W81",
  "key42": "4ZtrmCjhLJckS4PfFMdYsyvdpABqY7HkqXfK9MHAaCgi6GkVUCdG4eyKxyisey7X5RggDgDmbtVFj72RcHZoYjrR",
  "key43": "4UjfR4NetuRyod6aNRbvEU6gYSzwXgHsM2UQF2Hwieg8xDhs7H5xqz5z7uzxkg3UwQmXmVvZBNNRtD8iooGoQD2h",
  "key44": "4SyowGE1uYPJJ9Kse4zpFMVkrpbVZC9tq2xKDNnsGqvBPr3dHWXzPWyFHa7sZtk8Jxt5vUwHzLNFg6rxJ79fQA6G"
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
