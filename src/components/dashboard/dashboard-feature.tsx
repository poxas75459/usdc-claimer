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
    "4vVNJA9XBdb77YRCYUrCDoMqtTKKtsFwLAdr8Vk5FxhadSpyy6qZxp4EbDCxf4px4Gv9tjbQzQTteghYw4K3qhzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VitqX6ZVxxXCo3StJFbSkaFacsutW9VHScQNhtKUqqnjDJ6k8VxGSxRcSZJkT1NLGKN2RGK7ra7MPfmuA3yfBWp",
  "key1": "5WBUKSXJFmxXiD9pmtv3w2LEbfVsty9FCLbhYdYkfXscS7aZqV36UtQVegxw1L8tBTP8Brd1Ce6f8NprT31jpbjY",
  "key2": "43wEWLogv26WCVaEtNWzvsN7LGxHnojSo1RHATbBCF5RcG2R2ZHZVNnaZBnDX8Gyj5x8wzTaQR4BSaXoVYPQaspt",
  "key3": "WCmuKkP5pQy4xFdDbbdCrLmq94VG6N5oNPCennQS8HdaEJn1SZcd73gSCAcedsUX2MfFJAnbHpaWKHyQiJeYiAS",
  "key4": "T98kcVs5jnesYSyVAFyzgujHZiCfvTWeZyXMKyoQtLsfAbT5DQTM4MLe1MtKkP8zXXsLriZufJLT1yJ9gLtAZjG",
  "key5": "26xHYjKABEPdRcmSnEFfhhCCQaYmEVqqVaeVKVb9Z1HiBYB6QHmb6QafqLsQbL5vjr6Z81b866jHwoayDfMoLxpt",
  "key6": "4yHwTgfXq4QNMCwkVsr9imNT4himkkpeVsBRzqS8v3QLAX52pQqJNBYDbJu2MU9QHZjyhDQRaQEYDSCKnFbCAoJD",
  "key7": "f7xqEt2QT5HaNvxDWJdMUf6MKwfk9wTLuRr1kpoaCALUrkj8YynZQWfUSZZz29dkoWSAUGTPpDpeB9LHrFjDRM4",
  "key8": "5fNz3QWJ23yRzgAV71a8pDucL6WBjiYYq6qgqmafqiPa2c8RZ3b3p24XmkABrPfxZGuQXsZJXaadxChyRNj1MLrW",
  "key9": "671KinXpB2kUK4JT271StyuTtwwkdGhH8Z1tYQTb9S4QayrApnye7F8FWRNyNNr4eGBgf8tXSqudyHRZpUd2HpU4",
  "key10": "3otHyMRkhwoStVq8jgQa8V2RZcZcz8qJW3jiVxhij1T2A49C4hSW162eYSAvNJTSZS8nJVxz4tYwrXV2PceTvCXi",
  "key11": "4oX1FLudAMJ1EorwR23YCAqKzHEtYUzpXwn5nR1fMxr1qW4ZQjLdXi294kUUPXa3eXZrsrCss9h3284M2FDcSadg",
  "key12": "2gu5RFPfvgx3X5VWePJpEJzR6sZXo71kT2aRBouGuFUzYUDCDsv4v8zv44T98CBs9ShHcH34vZpasaWUKMiEDsW3",
  "key13": "3U1YGun8oEZdJZP83w33FteXNCDcweFKutGCw4XouHNEPa2MZSJd39tayywALStdixd6pTcsasH9ciztubj3rSGx",
  "key14": "5oyvfHp94W8kQc5VCRF2BXoW6pxWoF6hLEnnwDVTufmaVMhJjzagjLwbz2qGkCANDeeoW3dzoxQVcquG54w9xdco",
  "key15": "4LaAyitU9Dm8HuLfEk1KmYp9s8piFrbE3No3ACVeKCWpkc7iLnQKD1Y34kYQ6KTBeh1pJz7wKbrkDRZ4HuoVh4sq",
  "key16": "4i379FEmko4c1DNXGFpTXsy1jaqE6eB2g6NsThm6xitpVsPeLJfiqWd9XGtuKGqqcgmswfE8usk6NJYPqk2mPoLw",
  "key17": "3QPsTikHUiQN2dwB5weu1QtRYNFbh2iJZJkpxRjmH5KbC6x2znBJV5ZYxfDrgjf6GJc1cL75zoH7rcwPxM6hfcnj",
  "key18": "73HYsfT1XD7TEs3Wtm565iHYs5oyAV5oBnyvxdmoeUFxhqbEL4ftpPnf1gUHDeZSBKSzfJG8gAgQtCN4Q2FVnLh",
  "key19": "46p9rk1g9zoPm2V3QKJ5LQRS12iUovh2qJWwSz5A6ZyJLUZz3wZW2dVwBg3cRiKDVbJ2Vu9MQyhWz2SBqejK1xc9",
  "key20": "4oXZb4gQNxuYHNUtxjmSywF254anRy5eaMVfXp9LVRK2fFzQf8owtM2uP17y5wZrrc1AcFmqjeqyS3hLouE35kVA",
  "key21": "5eAm2m3Wdx52zvU3Bm24ebXkTojZdBYmatNvE1o2VK5wZkkzYdGYMdYcGcTVuu5cLfVWC9Qto6xLDMJyP4r1g5F7",
  "key22": "36aYkXZAiAWuRTga7bGzX5U6DbW4uL3hZnxhsv6eJUsPvG7E2TSmDjqZWewj8Cu8RrBEEkdqo48AqwYVM2G4YjFw",
  "key23": "3Fz9LN71wLhdnu9Y7ym3pPUqktpmcap5sNr29QnCHbcq6BXWGUu6ih1kfd4Sm8XahobmhoNeaSP7tvEPbh6ZZ27S",
  "key24": "YKeQK8iqReE9QzvYx8wHBX8RbdhyuaVW5ysA4nnJNTtqCfyekTvF21QZ6tzaghzGg5EGh1pdRMutGbd2QUT7eUk",
  "key25": "3marmCTwborsVvogHZDgFVNYXShDSozmbUNuS38o1ZrE8LFrbocxHYuCemVVRRLpXc34Gz2fyBvrPPHNEJZeGWt7",
  "key26": "3rHHwCGRMJvAvMAFmsnKwwPGxUzi1bRKZ3x4kYg5zADe4ebpKijcmaMvadwwa1CLcD1SHvjwGyBPQH9DKrYpVHsb",
  "key27": "3n7TyzhKQ5PWSP32znvYFL2R5RKeUaNQBfFTxSCKL2pazjET2VsikPozYMYmjLUUvReXXwqXjzpSMntN7W6PobZU",
  "key28": "HXAg2SDhagQJL9hobWXhLBWkkmrLiX2jyU1sFjd4Sxi49buTPfE873YaXnmzLjtz8MgUMAi8rqwFcxmPCpMnma3",
  "key29": "3dvoLhrNprHc7LJchpS1Tadc5FGCHyYP9ZYxPgqRU7uvBaySyk5WQy7q4Kvav81VTruJQCxKfmY1BBr6THr8eNVR",
  "key30": "65JttHzE4FJhpUu9sGD8q8uVhMdWST5HBuJYCupHuT8TMFTsxwEetSpy3diH3nAKRSRCyh2AR688NpLsTHRPPGD8",
  "key31": "Ju8NLw6XL4QNtiSGWPLcF4aJjLxqCMmoHD1Ek3iTpL1nn59mdRYzpVEpE9wTb3asYq7GinKPLqXBAeVmsE1fAjF",
  "key32": "5dw5SdsCcfYPaySiM25ah3kidUXiEgJgt1Eg5zRGeaxqC4hAVjnV1o9b98sPfXhYLRSBNhG7cQnAusw9ysFLCgcW",
  "key33": "3PsjTzSksbNoW2LwHZHHeaYwhu8tegDdf2ug289Qz3sohbuDoNynrsWde3vJgoYMsGYF8rAvAx5CR3WJpf7Ct1wT",
  "key34": "noxHZxjWSEFm9RnwKDgekxwC9uhHwwvnyZs3TrCVHAW9ubNHcxSjtyHceLCM53cpMLVVjUe8rAcd4DRxWJwNeNV",
  "key35": "5QtDahCacrFTo7pdkgXo9mTJ26AmDyAC2LpaTLmX3mtbLEcahJNXsSkShzTwjEWQgnUXYq52Y95PYVEGTfnntnGz",
  "key36": "4teNgtXzakmj9gKZnrXDY2gQs5H11V76QM142R3FjtSvdXHQ5fWQaJRKaRpX2BSD3NPhGMvsy9tcg4J4YzLb5nrd",
  "key37": "pPds7cBdVMdiymJyqxyKg6LNoMJWrUUC1nB2MNoNY5TJ5qajSeLcLc3YSDDkMCQ24ETmrBctjXhCtk7EaBzXvQE"
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
