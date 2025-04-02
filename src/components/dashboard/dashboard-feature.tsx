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
    "4m87YYLmkv2g7CQYPKcXn4AKV5CVgm1Mt4pVkR1oLuDReGg5oQhfCxA36RTguCQ7yNYNA7bHqgkgJz5uSYct1Xfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YfbyDMzQbBWtCWVHxQwnRqJu1vnTYrFgpFvomRizdLSaQTmy2qiqpoVDZFWH2usg8A5ztnwpRXtPPvLkLe2eigi",
  "key1": "5GRxcXpv9rEbpQWyeaYtw6VbTossNJHG1YYHoi7U7d1JFj8k8FnJLqjNzh9YLqnot2aG87WoDw8QJeJXXbebWEmt",
  "key2": "2Nt6jtTDe3ePxTEhmRQ9hGSnQfr3pyg1MFQuzR85Ayzkao2wJ44B95J3kE2B4zXZ7KyttqLms5hkBXsMM7ZbUarm",
  "key3": "53HYoc6rgk4HyGkUiiyjua6eHtQN59pc9PGfTZQ4s9nW7hMmWQGnxuHKgJBzWtgBoedJwqov8yu6F6Jfe4FTc1vL",
  "key4": "3j5DZR3bYJSyc4bnxgRXrf2fCnBbMoXLy7Q9KvBip1PNKMWqaMAm6ePck2t8xmGoyJSHfXDiHnFnyuUGoqSGMdJ",
  "key5": "4KecDq85bdqTpQKSyPj3vZfoC3hpgsLLgHsrSvXKCWoPxU8Fw64XVc6vNuFea3uy4gTGUeofeVDtB8PWse4cA5WQ",
  "key6": "pP6D51fjQs5b6ydNHDMn8vB9Zvu25WWoG6F5pXJbo6fid1ihZ5zxS9NFjkjkPyApenBdv2qnGtvsoAoT4m1zZ11",
  "key7": "5hPpS4kLBREwmucELLQ2davAGqaAx63RSza3Tm1swbxXScLo6BnNU6aEUBxoU1GnwEsnWPG2y57triycGRu95etr",
  "key8": "4HMxgd2j1VJqYgBBBLqG2fwAdP9my9NG2SqniBpq2bzViBkGg8nhaS7q9LMNxvHjmxX7JsnZBGK95nE8uXvbELCJ",
  "key9": "4wGBkDSfcYC18rvEdgBePVUARFbej2DffK2NcoJvhqiKWcVZnF4D8js1rmikcs4X6hLYG6bVzHg5d7y1GApb8of4",
  "key10": "5xCkLdthUPEwNFvbmsnfaNNvdidmA5DyZHS9igR974MgJd1nauoVBMjfrKQdCjiebYXX4L9dJvzywWxWdfhgzpwX",
  "key11": "4UsPVpN8XXpD9TgMmW2kYNWkSdCAjdD4YBS5hEyzSBSnjxXh6UDWFDcH9vQjgQSchkH7BrmN9RUjUSS13c2wCkMC",
  "key12": "3EizFY6dsJnbvX9o6dxcLi8fKAzJjWC4aFjwTe832FAoZ5PmETc5pgdrEXzWVYRY4fKv8MJ4RRhghgHgsbmPTPku",
  "key13": "4ynS27Tuj5RKD7qudmWZzFFztBEUdkGinCTpzgKUHhYXSpqAu1iywjJdxg3MRPuNxTbyCfDBFTp7VMJMLcBXQJfR",
  "key14": "5YmUKnifUFCAHGguDtpcK3Vj77r72fzRBR1FbbELNgBuVvrZUsfvpWFpbL3Xe27SYqS9xsRpjxWy5J4CVnHUW6gU",
  "key15": "58MzrrF1uqbb4hptuEZYDdtcWEDHbA11i3M96t2MsGQKirdcoayWtKotHmVCwVLDkgoUbJpYqsFzCN31SnfYB8wu",
  "key16": "5EKBfATKh2tYuLtzxBQ2KPeaVZkwzMoXBwHToxc6eQ95sPRXaD9SH5i4bXWUYdvDM3ZbS34UzWXL6medkYoJA6nC",
  "key17": "2ipoKiySsDCLVd1S7zooDRBfCEr4pCEqXxzqcv2xffsuBo2eDiubdy65rBnGtMpPtcwPTtKzg5Arwo3qnCxTxGvg",
  "key18": "5FWu4pHFQeX34r1pxGMD34j9H1Zhz5cDti9qNfxS62UWcgRuqEAtUfM4H9Vz6Jr8brLbvWM3NGGzxUGMC52FpPV2",
  "key19": "652gkP2khbefTKXbVeCSRgCY7KBrXrttxH2R263XGY4zeCm8j4YPHrJsLKaVYZnxqCPAVuwfUm6BvEJbZTDJubru",
  "key20": "4gRjAqssvnU6RxYQwyYoCC6ZYiSA4ni9jrVkvnQf1Rj6mpWCEky81dqUBpg3UPMC27FHrrxt96e6zXRCR3c7dZgY",
  "key21": "5Hw5WJDCcZs7zcouuPhU5ouvuqfk7cEP7rQxMzgthsHAHhUKbDiHyZurz1yuLEyFwwVskyTsgaK8rDaUzF7zwNWh",
  "key22": "V8WFe2vvAfyPZNJPbmsxMBb6iptLshEjfPdeksFih3YxwANXej815S96CsppkXo2k8Y9YWba6FzggHejNwC86g1",
  "key23": "35FUcQj99LRbiqDrk98nopULUPpTVfvpUTTQYDU9w5z43VHQrDCgzVu82fLurHbUpZnY7WDMtfYYQCfhbkPzvt8x",
  "key24": "3ZBxUDtL34nF77D2QTyCmjXbCbvgPXfnQocNU4LJx1k74SieMat9qd7gVwD16hc65haJVKN57SkR4s4hj2oAMUPH",
  "key25": "3wyG5UHEE3ueSwy8sMgAnTZ3TDzYVJbJmAseisA1pBYMPUnbgFaHARmX3Ln7UExMPf6y5QB3T69ecJV3b3u2Mvob",
  "key26": "tcWP1tA8oyUbnsDHsjfuv2CXRhpfoiTS1v6AWfJCkzaSfxe1cmdeiKvMn72bUb2gnyniJyet1o879RNgA5Mix3h",
  "key27": "5WQsK2UwtxEMvU2F5kHgH2n11q3hvGKhbmAscwTdFn8XFuFWB5vPZebcq8NiCYhMvJ3vLfDzg6hZcNJojS1RFaUH",
  "key28": "EguyUBzoNsXhN2Jr5rhYsptbw8UjrDhg3p4AQCockJy1bVzp247qQAWybuBk4uRBHSjSquaFfZZUjqZzpFCzx5f",
  "key29": "2PpG33NttTnxdjLBcJg8i2ZRMwQWimJf5arK9c2jyciDmGcBrpcVDGLzz8t2JH3KScCRKTZ3Wbr4cVcZEnVqN1hn",
  "key30": "5MC79SLjqQ9AEkRLYqPX9hDFsDVeeQH8aLi2UfSi5gsZR3kgBUpEAynowWDmnT297bLAHgPwvemzr3gXnjKYQ3Vw",
  "key31": "37F6537Wxrg3hRhyAzkEz6smozDRuKaBErXBURqgVF1Yg54gWTEW8McbigzmY57hDizSPjrGU4SZbEeMCkNiQNdg",
  "key32": "3pQ3STKu5fVm3SBTQBCxcathFUSVLDgHtnhWpqKg56218yBU5HuyVLzBssYzsCjF5nVTQ21VAUJFUSt2wP5XbWmJ",
  "key33": "3xKfxt4WEqdsyeesaqQs4nSw48KZrcFHcnHhBFEehw18yfYMx4dPpsNPxtbZA7SVuuzkw3SSTATZnMB7DNAo6u2F",
  "key34": "4dBaN7VdKtnvL7w6HNnFqZ2bz16kz9jg6yFfCmYbQSTSmmCdmxNXppPwKN7vx8eKJwQjaHxF8JXHDQQjuZrSMw8T",
  "key35": "5vTM5zHxgUSqRjFiagEBP58tKQkQ8euXKU91tz7k8jEGxncY8vZwFQ5CM2tA9uaufdB3Ux2FXZg6zoajdr6GhLZi",
  "key36": "3FrGTKCXYXKSEqrdq1TPP8qDcvNaq7d8YeKWgxnQwFuRjCVJNjkoW2kLGevowBLdwHaYdyGCrSQoMvsKizYP1EGK",
  "key37": "BvEzPsh7bMZLKAZDe5ECGfxsdvgWPhxEFXBcuxPfSL89ixJ6VoeEQ8yWE9GAMKmjryBtGpa7C7UszVpQDayDcyD",
  "key38": "Cv1aA3CCpSWHAKd7RAXVuBS64AvGivnKrMazDgX9ciuGg7UoPvqqnR6i1br7mhbi3gBJRTd3gBX2CcTbAvkJ4SJ",
  "key39": "cfk1UyrzQQX9bckZn63gdbT5JNrDK8p7cmfFbaqGnYLLaUYEM5znh4c7QdNgjEkroWM3BDHDN9Mu71rwknxgiYX"
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
