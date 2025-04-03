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
    "2X4XHQKiwTWcJkMLhjbLGSEDQDe52dAhdFKPycCDTz5ibQPB74mjje98XqQFWrGFog5NGgmh13oyVxxwpm5dV3Aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrvuTMLXB8at9fsF53DfB3daDQJexijvRhzKqrX3giQsRYsfPStDHGD2B3m6P3PhuegLcgWLCBmvRQ3ERoGTr4i",
  "key1": "2ucMrEDRGM7D68SSRt7TBRFPw4ZNZzQuWH6w1gpZ5HKHfuvVwdXTujgWYZeKVSFVrqBHRouLD7MUxQWTX1q7jiqE",
  "key2": "4DkSnbMmihcd7RoqqjCRbvAjrgbjdMUbEsh1KED5kvVDHjZ2z86AGQahdRKweJV3Sp9PqhW3HqYGBpYTwzEnAUMm",
  "key3": "5rthJsCiDx791LGPUiGR7GQNZx4yhQy3tNZaSKTkEyad1cLoeCdDhiVbKEvP6pWDqgke6dNneyotzH3CWXZpVAVM",
  "key4": "49UBGhENiW9wnTsYh2mJcjsEZrHPCVKMHdMVvhSae7EESSDJaZe3V3r8f5e8jnkZPvo4e4qv3nUDENNdYocwht6C",
  "key5": "3cK6YTzjEqK1oWW4xdEhBrU4xi4EwgZ2cypfwk2WT9wbiF6ksCcNEHK4Gs95a1Z4W9N2vGv3rLh1ru4qgX7UCHpX",
  "key6": "3TQV3VraoiKNEVq6EwSpHZgWgkPdsr1JTbKD4j1mmb25iKFEscuzSZmEDe1ZQZLs4WTw1qnZ9JHV5udk6ZGxoosk",
  "key7": "4Xtc4t9hMoeSfsVPKUpa83WQ23oB6yZWVbaX6j5KaJGLXie4pqi2Ragek1rf6jSBmfqr7quBH4rZv3HZ7hurPhCy",
  "key8": "6g8JiK6oJg8tVL9MRptxxnmZQGtGwfb7RowCnhHqegNAjzmSQF3fep3Le6R8VoCeB3vYV7TPZDFKLecskjKw2fV",
  "key9": "3Ufqw93mrTNiodcZi4uUtzPPVUJJSmxKRSMDhnKb8k3qxcbXfBSQhjPQqESoc5aPgwGHVoocjySy6AJifk3jKrvA",
  "key10": "49CAqxrZteeTPoGsmC4xLSsVq1buWjJ3WPB3UYCAWw3skMeSsEUZFBAYqVoW5Lbp2SY9DPgH8q8pEqxsFUMm7GLc",
  "key11": "4i1Yq4AtJaAs1HxFnLR8rM9gdSa4w3hkvgBmCMYdbUpmk72QcuHDd8ehBSD5NJ2cW2dHsDUBS5LytL4vH8P3owzV",
  "key12": "3tuosnBrTqu6WBNqhnPevRsJoF9yjVkf2FAEmst6Z1tDefeGhaTiV24hNDKFcPp5c5T2ZVYWieGNLVu4bRb3nLhC",
  "key13": "oUnV4bqfzE2vGAeTxWWQP9A3uyQhN25jY6Fw7hUeMAt2WoYoLUMet6yM68BBDT6C3VxrFS9y6iRTqiZ8PAxBaQH",
  "key14": "5RKy9QMKcSyu2kq3EwvCTtHGgisahu7CXFasEtNZdtRs2ZjvMSqt8tqZXWNU9qrD9FUSamVyJQaGDFTHNPEnV4dE",
  "key15": "r6qQ6SRZ3LTciWXY8Fw9B5RoR2eZUwryogu147MpZimvgF5x1KKiwjGXwjNbdNGM9z9TMnFiAEoFtDa7pbf5Tvg",
  "key16": "5bcb5yXJm912QL6rtKasBQJyWrAMoJ3pym4HRotNGm28H2DJ8RPcuh5NpK1o6FDrBCrzGiqWWjVuBrBc1Yt5FqSH",
  "key17": "5hEWDFNC63XXmYNWkCqSrQfz47Ywq7QBvShGejSizo2y4bR6GeX7iiH5oXUGqZxpg5VmQno6PXbkJ4WyJTv9c4yp",
  "key18": "4iRRs3oJP1Ad9WWQVSX6LneNbpe2LPXWySRKYLwgaUNosUEEjUrrwPA1YpY21VGH5n3hBongjrUvKR4n283w4Tir",
  "key19": "aKfF5mxVa6YnjiN82XDWDB5Kdps3iZnm2RAAvhj3cdFZjDuxbpBH5cxtaShAjqRPoDRu69Xjh9Ki8dkuHchevyB",
  "key20": "5bk9gFdPBPA3hAo7XG65yfqsyDxD4dHiBza5upxqksUnZVn6KAfb73CfiHnooNmzVym2YWfdiaqPUqCnHfn2Lpeq",
  "key21": "43YwUKPJy9DVvW9P4LYTeM8TPFsULRE4wjqR7gSbck2RzjK4gDFKDMG8biNFHW3C2XyDSeTztRvrhZk4pMcsi8WJ",
  "key22": "2mWwAS62tiVZ7UKTBR9JGiZBaRDnx5WPvq8kaH3d3ifKQ7um3dYWGesmHJzUGzv5oEknfKKukodT8oeCaf36RU7",
  "key23": "23BQcebZXMjk5r9gX4xhVak5i3TXGEvto53ZXVN9ViF9mnRbHof76b487ccqAv4DX2YQhLAXGTurHY4HNSWgxRzz",
  "key24": "3McNfiTgZLqCB8GQbMgoBuG5teekjRCrhmkgSD6Dnb5ahvjZ5K1jMWrBN68tC4Y94B4FAoFtsc5TvJGfmghF59Gm",
  "key25": "4PACXtyM2uNMNThWSKFWZECatdKB2t691rDezQuURHvd7nJ1wy6tWczZcd2wkhwPACZJfmXyg8QzLNPCNtNoigci",
  "key26": "3mxHAF7sfb5uLDmjwfCvok7SpCL4iWvD7PX2eCgTALs7NGMgxznMQ6VFcYyrrcruL6sf9e6FQwGKWUD85CR9c72J",
  "key27": "2qu5Qb85JESJ5pTi3gQxik45vqyYfdkHh3NVXmBp2xiBJ5sJjiMKmPmaHsiZ4PTjrK6SUaJptQPjQNfSeLVXBh4w",
  "key28": "5WFoF3mVNchaxzNnsPgVcvBztc762JQmDM71nNcfW4gBkYkyeK1GE36QNVsSWcK3qqg8Km9CxdHFBLP4ZE2Fn1dq",
  "key29": "GTAMFYzaqYosEQCqVt63RS9cng4xnpmG9FRXaNCRGUYcH8PGZFGU8oYbtcWAR1CcX4jm6MNPQe5di46eiY6Y1oK",
  "key30": "5fP3UiRTRYGoBF9fyewGgtEkBtrqr6T3EhjvSBUcUvosHB8eWE7uhkY1KvaGdGzUESPTti9j4z567xd6sneeKNWr",
  "key31": "4L9aV9YfC4jSWeWeb1qSzUv4ow4esXuzc1whwmbHLbfFwJYMQDr8C5SQjPbbURxM9uh7iiqCgxQ3MS7fyfGZ1owR",
  "key32": "4SxkooN7Use4GmVYzEypVzcmLLNFX8PaARUc2xTwUcb19SR78beu8yVh2p9f2U5oogDje4VWJh5XXDgoK38Gn8sS",
  "key33": "4d1Gu8rLcaUBvxdhVvuSerXenYmPrWbPYtztSrGxoweWTJe1CdpFSQQGZXhZKGez5ZRMjohHn9eJvZ7ke4Q2xMit",
  "key34": "8TetkV2ZxrYungazmzBp9E7zvuPFV9njsWZk1SmgwitkttxgUmddnDygYkCEbmnshVHMRvTdbJzGCFrzFU3RDBk",
  "key35": "49sQb1XDiTCxff7QTdu243zyV57Pp6PzwxFtvzY8pNEadbAQ6uxWjFLfjYVGVaUi8d6JyHvUvMzAH82KWy6egcXc",
  "key36": "2vP9jp7q6yvd2P2gfeyeehJd1QjnHb3shw64q6shp99XMMrd8H5GSRn1vtzLUyoBfrsmyPD8Rxh6mGMLH7mhqdgT",
  "key37": "5BaW6PeaMWyo8YsZ7oSct53N4HE1waj6AF4RXCAz5bShXpoZcbb8UC5Fvur1YA3Mz56oHN3Tu176G26t4cW4aAKW",
  "key38": "5nvZajbhwBoCpHd3gXrRSYFejFEJZB69CvJHpthroxb8FVyAjZVuojX6B31Xnu4x68JPzYegLF5SMkrX6tJkxgBT",
  "key39": "3h1i2HFGC7kffmmqKdeSFi9pqbZtATsXU4t3bY2MmruegK8MoXXKZk1Pdf2e2ubHQMmwsxaEJ8kgYDxQSuGgTmnk",
  "key40": "4ATCvmXd6QTwY8E2fbY5YU6mLz8UFqdLZS7Hohcwcp9qoTdCAhA7fHnAsSbcdKX6F4PD9FTqe9WPiY1cHsnsnRf5",
  "key41": "3k7xK1iufA8DFz3rmpZZCrPYUh1WmvZCqx99DMhhk8NbHNQekw47Ae6GjosvpwoHEa3LsoKw6tfkNrTKheDGaGxG",
  "key42": "4BLreUTWtGXJpqd3oY8yQsXm8VVAtTk9VkgDhrRz4anqbQ8RN6rRzVtQiP9BwJ6DxmMG8dxXd52E49nKtkF7x5r5",
  "key43": "2xshxQCGd6zsQz3DGtHomXcsdtM6RXw57G2GkJSPcSjyUWvoWfEyuhUkU3EANzYzfU83o4r5F7f9PYkK9q4NunQL",
  "key44": "8pYUjytm5hKc5RoiRpCAit8ctdmr9UXboPKkLw4TBXdeV8Mj2zmUfeDsGHmAFCsdZ8N3sTghMBELac5YEFSiuCB"
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
