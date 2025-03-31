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
    "2ky9FmCQqXDF3uxZ2qJgMtCGSBMW8sX1gXsdnwuAfNyY9RR7CCtt9pk6wt4vQoi5dx3LHubNoT2Y5uTpKcHF5sxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LhSNRZwRHs5niUQti1RjeZuYyiCpP4pM7ytfDCap8eq89p6qaXenesdRpoLVpUZwE7ydRVrKfrjKyRMNiRRJkKD",
  "key1": "5EggCyHG5hKXkKbfemhADvH4Y3DzepJtv2n2ji6wjsr8q19JZDSyPPGHMresQk3j5EGvQFWFEX42W3Qs4WnHg3o6",
  "key2": "3onr1C1dDcb9Dzp5ZR83QzxXAfNRufdf5z31vrXrLXUFtXWnQZHYYWYyyZscSykS8qBHjKVyujuUSJWGUmTv6PTy",
  "key3": "5Z4agxH1W5rS9GzjLyngtZPmZePiMToY217LEwmxwgHvokntPAQvP7vbzk6ChMex9dvesCNvJgjYefSqAb6BrWBQ",
  "key4": "3oyDhSJ1MRUJv5DzzsJBCJ7ZH2pJzu8wGJdsEUdP4UEfREZ4Yi2wAu1K6XUgx6qrdgPDknaNE9WT2VDKzq2iJgQ8",
  "key5": "4m8rUVjDdc5xEXwNARs8PuZjD51UJgRu68p1Z2PuCYJKvJgY3e2bTwbByCLz7YGKUohJ8HEtFKQoYkLCTPp4zPmK",
  "key6": "5aZWrr3bi3rbALabPU1FdhWBGa9d5EPvTmLVcAfd1FWFjCFRueDLS4Tf7Db63TVZe1cPSZQyz7fJDUGGth5xzzHx",
  "key7": "4bSJi8qeAKh9HxxzRcLfjqDZNFw6rrZmdrrRrYTnXrsZP4dZuSs7HEkdK33CgMjYFGLYNTZ9yrAbr7MyqjJMDcnv",
  "key8": "3sZxX6BtixXcVYSHMushSs6yUHXqz9DzdwqBdJKwiNnJECrMQs2AwaXSuh3pqUKM1RuDcbu7VW2m2UTsQKYK8sAL",
  "key9": "25KmS8c2XjFJF6rddsUJVLVAj9qca5ug7MdiufkFQokDk6ttUkw9AqGfLfG7PFBeQ1VdjHNiAr3WqJbv4P1XJf3U",
  "key10": "3bPVZBcvbu1mc9J41F5WS1MqRhT4TQHoySYxtnw8pX8KEJxjN7YJxC9Z69LsYucZRdhGiwiuNuvNJnb69JsZPnBR",
  "key11": "66rRqEg5tUTyg5aWaXw1xxgBgroPaZ1wzh341ZPLugE4XfWjpZ7TxbPhbGZtfTUxQYy5tw52rBQkb1VjrzKBVbxf",
  "key12": "3Gpp9uYatXNQ87UQxXiNJaPsk8Q1mTuRukU9bPXgNpqv8bp8sxPzrDnDpFYuxVXtA22KMcjafjTnYZjESsGJ1WR7",
  "key13": "5mrDY5YyAfwU8PBmrj4bFLXxFYVeKAA2toe6YFTUVitwXdsgTkStJ1Rm2V1BdWUV89k1x4156zMBQn86wxafd4Sz",
  "key14": "E9sXBDe8kke1DrkKbUv69PGpnCKwCnQS8ERnpbGsDLNnGACNwGT41WhGG1uf4LrxvBiUZpXED3T9H8xiHJ4ZqUf",
  "key15": "2PPH64yvPAiKfmgjVYu9SdW7vusQSiJY51gGWz49rK1bgs57A2L9wP45hwoc4ZYHZdt5TZfk3krqpEbAH5688KZZ",
  "key16": "5jeSaYTvrCKyaqoJqyP79qAtKFXoqNc6z6toD1nL4EBA1VjtXWMMv9NUtr8HsQKbqynMSx4Xn274KJKDjSoiMwXc",
  "key17": "27NYE5MzUkjsz6h9ReVqz2d34UF8bA7vjrPMPJCFhpuTRGCoGadnQUvtPdGaVkUQSBcASZqstriJ6wVzhciXxHsB",
  "key18": "Q1kwiVM2LBGhWgRQfiYSfftEjG6AEH1EC4EpNJmFrUjfTetzsji5qCjg6bZaBX2FHogUUnFwnB4iz7m7WVDS4eY",
  "key19": "3KUL5BnB7aUXGCgE9TxbYirYujzF3oAigBFFQ3MxpjwZcaYXvaYC9Q5YqWDfYhXei8VRyXnwMztJCPZenTtjCQU7",
  "key20": "4AFkwECouFRVaDasm9YjCNp5QAWuQLD8rLK7LJVgcWGB9jKbocoZ7EHieNAZLPBWTmMM5rZ7zkMZ2QaGkFKDsZhw",
  "key21": "32DXNhCXsLxgmtWK98CZxdhH3xFbQQgeduopCvPYVirTW6sGW8mhrAcnJ7CXedoJX8mGSuRHqZwg6Tbw2h9ECihg",
  "key22": "sRrpLL9J9rX7PNbY96urLmgiWiGAGsvQYZVe1hWgBA9TVAZ4AQXdfqmHkEjsvmz3jLaTdTmNiFAttKymKs1R81r",
  "key23": "8AYyRJsvJGLgnc6BFzqsvVw5H86BF1eJFwnvrpiqkpRMWkubKjXei81HnryagdN8FwRCVsBEjWcGNdqponLWijS",
  "key24": "5nV8vswn5gRrdHefCwoEr1CdHasVwVXRA8pYHkGn1Q5DvbKJGyXH2HojRd1g4VXUGwaAFHoRESn7VgJo6q3UMcXZ",
  "key25": "2tp1awFvax9QNaov7Gf6faynPKZKJXCxkPX8QDgYRitsmPyWdMRpHrzZeKhHut8P3a7TJWZUjkxSkHYj1w9zC8vv",
  "key26": "4KG83uYJ4jwFLaVzwm4GjQr2whyApk4mm8q1tcVkVetasnEBDx1bR9p2RJuKefWHcgBZur5QXsr9RR8kgLMSF64a",
  "key27": "yVdDSjhfBsNqqrQ9CyPXCfW8xcSRJWn3rHpwt157sHKQC3t3oNSQqyxXdnZdKZoB4mj1GpYUgMbjxz54TGQAYqX",
  "key28": "3si86Jq9aB9S6UWS7WALFssqiVS3JySGa4FH4Cfcmo1z8h93tS3VBYP4vfXUszqDfiiy3o6g2Y8EGU5rv1abYqGd",
  "key29": "2SSB6xfchinMjm8mkucUKnpdzR9JH83NjZzbnp6g3JC1HMs5pktQnuDPCvbcNP2y3wjTZqqvmoTKeLjDhqmbNHar",
  "key30": "4bH6ZP4kMfeD1sz9N42RpKhjt4tV8yBjJaexfWTyjMiVF2AC5sTYMTYUw4EzPk2XRZTX5TpuK7yfP3brYc2hP9St",
  "key31": "2gHHqEnq8PvEhdNbFxUKQdJ8HwtM2iob2V94QbRRkuUK37mwi4vTTLFyC2h8uAyhtLZ6V2MVnhbdxtd8ZZtaMEA",
  "key32": "37j51mqy4MMLBBnpYCECohvCGV2DrJ4NTqEffSrpEYmgR1o6mi2trPB3a8TNgP1jxiWmf8ZZ2Tdn5NURKBztMfY1",
  "key33": "2agwdb6UxUTdixwMNagYoUFGY2U8h2YW4uMpdSeyKKPrLYjEDx4CkbhxdCwfoNvUm9xUMtfuT1FdbHULDbFZJK58",
  "key34": "2tcQ9RrFwZLUXWq57HAT6ieJGfNcdHVW6WWpx4mqGbtmpBwM6QYWT1Pww4nyp8mFxGXLfuHfwwV3PHuTuCQkzHZ",
  "key35": "wfHbLRTdwAUPaPEVhYXBioq38vfov9CDLJx6UTQFMPsWLKCv1kndNu2Mj38DKXEzLJaUPb8t6rdyL4kq3GR9PYE",
  "key36": "3CnTKsdqwxL58NnBFYTJELQdAWVV6CeAi8AgHEBwNRkRfFk5sd5jmJ96pShYwZpU6R2ouuqS8L9rEgPtUZzfat3Z",
  "key37": "43R1F9Cotpq9c891A5yVbXux5GG5mxX7PHm4UZvkkHrweg2E56QyLPTxGTUzbxyNBjx2gpZx6a1FyAFsyF42VA59",
  "key38": "3Ng3kFxRMSUunJcvexaZGJGveJW3mNSwe39QWwraEDetjQM2HZN6fGcrHkRSavEhLYbDSdmJPWXBeBVH3bGWNxm5",
  "key39": "5HwfkAnFCHHDHtf2KwGsfK9u4bbdZASGc2NrYPT5Ck3eMW7mjkUadqPpg3GcZGzfG82VeGHwc4dQajmtNxa4WEFW",
  "key40": "43NLDAZfQCbuhBCAHy1rSqYn4mzuU3Zs3b7qgtb2TmcS5qKA9KEJyyRRMFWRhaKs7HNmYMFETRwXdjpyXNCgoTPE",
  "key41": "3bDXDQvai8pGHiUf9n1DvxwoS1FoB3HaGAopFzsb4GfRmoDr9MFsVYjjWgRUGCYnVeXuDxktSKSZ1dq69LAtobHK",
  "key42": "59YjVw2S2hCug7Hjq98Z1GUDFASGkkVpmBPQ4D8gfz8LQtbRMz6wX1ZAEpVQJFAu9YtZghUREPxz7rpNk7zBR1zp",
  "key43": "4xgx3ET57AVLeoE6DbdWGeCe21RT8PdsEh2BUJmcAW6xzNeSzbGoKfqAEnzJKxJPyDP19MErhGDwCm3LPfDspNNY",
  "key44": "3kyvGckbTaCNCeSEEPrPTuPEdFVpoXuV9oV92w4yCeB2LHo3WDVaXmUA1quZcj57nDAuUisL1mCw2EEzkihJiR8N",
  "key45": "3pwZmySeJywshX3PUYum7zKX9iiJndAz6gGGue7EjgmTNhuSEvtsLs3FDqfP6CxpwzvBGuu4zGXyPsnx9zQjgcq3",
  "key46": "21tnraS49erAGEkWDX7mztRmkobHoQuvdKsbpbNyZLZDMQDkMD7q1z5saS4hC8isTT25niTtctDTiFg1F8DARwu2",
  "key47": "2yNRTThpcF8J9HuwukeXSytbR9DVfbUo8noUWjnzCEHvJNfHJCbzyFid7vE61ATxTbKNvQdbhLRK7GCn6wvZdkbD",
  "key48": "3jerkJ4ZGvJ5B6YBLLta2dqti3Pu32DcxWfarsozvgPYYqAM18FjXzXkhz5957PG1fmg1RoiJCiKoBXgt2cd8Tk8",
  "key49": "4hUrrWaLS2r6pbdzSgxUHLvrkaWjFZ3m9SQCihBmBgrz96LnvgnzrYX6JAmqmLJPrUnsMMYezXcaNb3mRvswYs76"
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
