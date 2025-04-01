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
    "2pPuw2dppUoC5xxFgmif6GYd87CQtLo4bh8i6wKddNnNzDLkTyXkYh5LRxmbDmX3X2hRXbLK5E4fGMVBC9aiP1v8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dP7pDWRmrvaVCPkN6DCHgb54QSGtUuYmKVeBM39wkGjvVZ1NnfnHw1g5eGu9rTUfdRi7j8G4mffaJPKZAhwWRJb",
  "key1": "hFoXz1wyyQopjYbUiaxbqczXihWFMZGcHC46HDXsQhoQvQcwB3E8pj41NCjBiiKkcH8ZkTMtNFiud1YUu6iNHqK",
  "key2": "3C7BwLjeppEy5ZAYKeGzc6tM1mTq9awAMRdSJPW8DDnYaCVtLdaLMzpJnuLkroh9QG3vCeqQZTLqrgmCXZ3sLMWp",
  "key3": "4gHJqsa72ezG3ypdVbR6khm2JEpZsWb6SjokV1MChQyNeM4kgTWi46aP2qjzm6jXBbV5CADz6SpAH9RigcKvZww2",
  "key4": "4HxU8kgAqc6aL9kSeS43Sw4rWRFdVZuT2ZZrm2iDxyVMJABZ98QTQzdTQXJneYbaFUHkqEca8ADn3kZPmqtBNtYS",
  "key5": "W9GRbYPxohZsVYZHRLZRoHPNN4cuPPS1FNTtheAxmQDr7jzKtYnSRY3Gbf3yCjjoouevfio8LX1nENVVjizxKGc",
  "key6": "Dnwqbuup1bSu3M6zjBdFsqxq52iErpataX4MFyWuQLKEVVKgGiTrBXaZ3v9QZ8XjowHDPMVUUcfH2rwumJZyfL9",
  "key7": "mLMVzsi9FKxGapgPy8P685XGJ8k4ZQF8dqMCDBy1gMsnsFoCMk8pHxVfvyyEmUnW9bWAjHXVGuLgwZFF63CaAUj",
  "key8": "5jfwQse38zFd4CHPfuM8GqrL2ZKBrpKcQw5sVGwG7soZHXvj9W1wRDaALhXunVvsHEf6D3JeBxmNTsnkeY5vNdst",
  "key9": "5FmiNKgFDAsgdEXQ2wQp2b8p5roWAniZqMfz2joJjE65XH7Auhhk76sUvCQneuArnWXwwrqneJLs83Hkzb26KwBn",
  "key10": "nUxSqVz9iqPXPhKVF2gceQtonk1cn6FaRuRDrKBM1ijhqLpnGRWLndbCegH3FvmsEQvgepqUgH7szKLYNSSMVcY",
  "key11": "5GnLEEd3RGb6QSmo7QkFVjtxKLNKKT3aLFx7s4HAAzgQQiE3ypjRzhjhGi1Nz25nwWrKAyhMdPYCNQzaod1ooC14",
  "key12": "5qmBzVkYnw2houKXQbnBARmkKECTGBikw9yiQ6mSa5NRw5XY4kHRup18BVwfbBGfv4HVKBt2TDoaGBxM1gAiBD3V",
  "key13": "5DkcbUVYWR8AUucvSMTgiBTWyEuwAN54teWCpXGXALw5KThaNEkrqjQrZ2v17cyMh2YSM62wrUb4kHMDswPGRy38",
  "key14": "4Qf2njmhkpiX7Tqrr3uhCTVCF9zzFhz2x14ZQy3JLLeSgzHPRs1U8hRreUrxZh3PBQKnAWMkxog2mUKbLZhps6xR",
  "key15": "YdycNFxDDGghM8yeu9NtXj1QAvyiXnDTSLQXouFndHHarA6maVLTqgmZFP1UxwWuXMrRoR2d5NNHT3wWUk1fBE1",
  "key16": "4mdCA3qv52cSJRZ3THPHMHCSdH1Uvpve2aXfAXRkVZx4LhCDhSeg6BftRRLA7cxqsVzrDMsYPwWoxf5TdB82z3MS",
  "key17": "CwH4dnwyTunxVLiT6YgnAyAg9E9t1BWfhj6sXYUNf39D2FGkG9sdjLVL9aWDkqis8noiUYMGg94N7NpLnA73PAQ",
  "key18": "yKYMSYzXxC9w9VS2LNU2Suj95HhsScwPyUD9sVGWy4WufFudbwdHW6WvjknBBc2qbLKDTeL2tQjuwpQ76FZZVQt",
  "key19": "3QMLbdsBixC23LaJWR6622ShA3qGgWAYTJg6E5Sn3gxVvyj2xaKMsURAmenNMzc4xH3NEViYRS7DN9puxth5SvmD",
  "key20": "3wiMnHWWVGcfZtJHyXid35fXnHbgYvPAGULgpELC2BArEyw4VqiGBy2mDzhfAbWUD9L8M9NC2fyq8GvFTEexeL1B",
  "key21": "2EHEnBofGuKxNAjqjymKjExumUBuGxs9QQPxdtoxCNRR4HQ649qTEAfSNPxWMF4W6tdpttE4MX7K3cF3hbuUvMNJ",
  "key22": "3CT9mBT5VdbdWArLU9j6so16U9cVRiuAtZdyQFiYBX9GV38K1neLjkPmXENc32xHgqLLD3d3DyyCXpMk6AdmQxsK",
  "key23": "3bBFNPLvqcfvmatpFCVtBADFyQ2GqxH7cqLRQF5X9oitqKbezx5rpsW9xxaUY2d67M6HcnEu8aeANFbhcq238vzt",
  "key24": "Rg6a8vpKEmZPFguLkCEKmmHLezaK6xQb74pmHyRr3MZ7HA1KKPhqMK4yjYhHjmxsBYrTCYDFchnwSdddGA3YhUa",
  "key25": "YuVF32yFDkWzwsZHDvo2aVJK3DpEQiin2quS7TUSt6dLxhhk1LRWMBDeby71GwF5TL5DJixA65WBbwHnhbHFy3R",
  "key26": "3QLExdkNbndxSBCJh97EaxmEU7Jn9AEsaisfX777h6jGMphMtNrditNPPiwm1K5NhYLvjfk5Ncd9SPygFYvXxwF9",
  "key27": "41dTTX2pQZCnFeJCviFmmyUwNz3abghh37aia9RGRVb6cytqVV4pRjXpsQumfoMMmjuiQQY6fgVc4QWiJwqrQfBK",
  "key28": "3T2ZVdUA9DVm75ye8qSvLuMNVTfXnzVj6b6wPgtEAkUYqAJmSfhXQiSwv7JmrqiA3uNxTdxCKBk9ocV8G4nS1R8a",
  "key29": "2viikhRwzhNFprviomnZSLCATRbBC667JpgRmKrojoDaY5JgdJMZDQXBssj67UJW1bsf3Q9eDnULCvrnQigH5DPM",
  "key30": "SpGpBz4Kp1SxLM6gtQWQJwf1uybo8f79oPnc1nnUnMSfz7gAUU32a8cpsKKkABnKm7LZkYc8ESxCxjj2w4k2hxB",
  "key31": "37Ld1nYLPEBoLQG4PjENWeP78S7LPFupZJpW14zizPR9PcdjMBdRKRFJjDwoujRsY4useHg19CL78RBak4Hzph16",
  "key32": "4Rdm43B6bLJiPmAtxDYGBpG3LA8hM3hu4fAtwNtffwwCai3ARJMQZkByR4RgmDCb1yzdDQATrEVa8HE1yRaL8AFF",
  "key33": "38Y7tnFUnsnewemtrTNn2QQXzZ5xyxMhCL7jhzcAQFgRMm6jAQSjjAE8bK9Muw43SjpMq8n1SdAB7AReeUxJ6ehE",
  "key34": "3ouw3cABtBnRskXTw4MpbuvMHQNqKLJnAVe7jcWK82eLFpg74aFae4CkbW9FFfvA7GeJLYcBhtpKbLjSpLuX8wD7",
  "key35": "SxKHztDLhaEGhguUXa3bswquLf64nV5RFeeWeW8igv1Cg38kVzVX9BpGPqoMq9HsYq4F6d7GNF4UgoWpcukRy4L",
  "key36": "5aBg6g89NWiaTkvYycYRVQ5kmKsectSr7GegMr5uxSTfdNHwgdTsgFUN7TFXzUSd9L2D6LGytNZ4DxyUu6RhYZY6",
  "key37": "3Sw6AfkTRjwU6oY966MZq4iMxMbf8znmUcuCQY7zDXsYxeG1bhGZ9AWdqmYHgjoAEWgyYrhARetRT8PdgdiuUFYs",
  "key38": "4G6Y9haEmjN9PyNXww2U8bHWiazZQ24KqJeipUs9RDqsyedZvCobr4Hqyp6z24J3stqqeT7Ce5uxpWAmPagsYWyy",
  "key39": "V9uv3X5uNWPkvrEbRxyJuwrDhgh8KKCJNF5opABa3Gi3EN4GXYsdsafV29kkQBKQzWSv2mQ6wLMAZN4rYRqwr1K",
  "key40": "3chvgaTkEgwqFTVH2tWnrLRxxYXsLuFDj2uFEoekKXAcaaN1hLzXdpKGhttuEvu6yxXxxM3dJLFQ1WDx4MmU2dPY",
  "key41": "LDxHEBtCnW2eqGDuDkr4Lu71K6eEZFz4a6ez4PyS1UypRorDsbAthHc4L7mUCYmXfW4ibedteQc3WM64jbPC3vS",
  "key42": "3p2AMMUN1E5fYi6KSLWtzG16d4v5sN51LTHXwU5nT8vxnsW2MtoxmdcSvCedaq3dWoE7hZvBzxvS3zeVtoy91yD3",
  "key43": "g7sGXEEYxRm5eYxK2QXfJWBrcawkLGA8qG1hFZ6ktaKC9Ua3yyREfwp3XfxVsqwVah9vWz8bBN65XRhuvv7xZXM",
  "key44": "3ptb8hJQ2rxdAP2LdBxGMHEg9vnorAniT2G8K4E31T3gTUMqmfVyyY5T4fyHF7itzmSGV4395Xegnm6YSQZeSzKC"
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
