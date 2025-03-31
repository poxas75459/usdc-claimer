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
    "45he9bGfLaSoZNkb5b6vNhwb8iJdBi314qEALLAy6gJKC9ofnRpDwVYnyE6jxKBY53EgR3e2UxvnnBUa1SKtfqDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BKhoyuGGecGQQc5mzAZdPieN3WV2mWbX6xbYJSsnbfVmSANmeRY2QAn6q4PwCeRNF8w1KvFJUJy9L3pETPuoPyp",
  "key1": "5Voo4AFV8DYzeKHrWPXCTet1n594cPuKPyfbagvfW5rMJVr7PGNGnrQtJjGDVgnFc3Q3hcA6ZJkz5NT5LQzfe9VN",
  "key2": "5fSn3g5UpeEwtUmnSypeoVi1XfBZxvhMf4VTeYuDDMiiRetV25TYBPY78GaJY1mD1xa8ipWdAxnbqdQ9iTbaMhbJ",
  "key3": "UwrA9JFsePAFbo6MCt4UuW7TArLSnPWWNAQE87CCXk2XTxkYmPH2kSH6DZEQw5hHwooncNUvyV8Yh1aqDLR7Bns",
  "key4": "41bW5VCieoCVYwtAVQSb1V2Ds9NxtmSbfKbnMiuvMXXBgpaq8w4Qyto48xcqz1fBsaE8dWD1ydSgMCYR4xdvahff",
  "key5": "3BTpGKwuYb9P5UvKBrWw1g8k6aBPCUxfYHbPxdkb1kWpfikUsevPLcwRe1ZMoDavaUP4okvzoe5Ftb3ojr2n6AmA",
  "key6": "5hmNHebaewc1G8zPte3PAzUj7QV5ZW9S3WJsiVzKRKFzRycT8Dzo3PvKVhWZrzz42awuFta79BCpt1wHCTXAAbTs",
  "key7": "2uzwdPosqwWRoU4cSBHGxJfK3YPkfubhFoPsSrXqNeDMoQ757zjMR8bouE9Bad4Ku2sABevn6uQ51TTcnbFhQ8hc",
  "key8": "5DzfiYLsGcWMmJUE2ewzQAV5zH7vYQq5k3onUoMHiXeb4fAuhjLZQ6tLzGDgb69iuKHvR7UpCzeoroYbTBcnfatH",
  "key9": "489PHcBgar3576esMEPBvyQeZP4ZocwagpCWLY4yaMB9mhjGWnMcpYW2RMKnAJF9YBCyEZ6LTUH2wTTMhVW1Ay3A",
  "key10": "By8qRriTGNzmLEyVZCZRBJEYBVod8HnYKh1wjjUzsnybcrVcGySsZikAefZpNbPbzRfeepZS5ao35SPpQLUrmKH",
  "key11": "5UW4R1ym5Ng9EkGQmuQr1KNijNGNgGqxcHpEtqkDqW9F5SPvE5C4Z5JJXq5iNEJK1d6bLUvfrQdRQuvSS9vBvxam",
  "key12": "6655RpveAvrFNJub7QcufgUZLZkjLdKCc1DSY7NbHZYoPg4jN75rV6UvEL3qFeyUzyTrVnqgnCTXGCpUaM4EHmKw",
  "key13": "Hd3SAsEiup4FYpxjhgzQvAbvit9ss1H7y1beyXAngSV4GmtiRnZ6SizpBxSm2dV6Tj57pDcH3V1tK6hPHmuNEJT",
  "key14": "65xK2znw3EgH6XkYJVCshDq6Z7N7ypFdWFXzDDiVzTRo6R274fpQtgGaXSntQG8wMkG1KbFTcy5adauxmw56PxRu",
  "key15": "4zCaQEGwL4yt9iRLCjSBJwV7whfUTz7DjQfvW7ZwD1qYANHty5nq94wDfR4N36JqRNZ6xmdJoGJeHS2a7X1rxkPR",
  "key16": "xUttBpTBfpeLKpUKkoK9Y7JB5BQfWQLYEhyzYspPCQHCgDSncLV3KHPKKgASZ7EkQstjTEyCA87ih5kZokfgzRR",
  "key17": "49cjiUmJygnigkTCnwS8543SsPB4eRNvufNWg1zaeRmkkYPtQZXt6dw9wm6oeykucw7U3g64WtYeCqNBMuVDmDkr",
  "key18": "67HXrLDDHELFC74VishGEpEoEdnLY9eeiUTfmh3o2w7TjayEECzK1EUPSDWr81M6tQtNwtpeM7qsRBCA5H9HAFtG",
  "key19": "9H4rsF1z4XZ3TafGha5TqeHTu4izgky5qLJ2GZX5bm2gdx4kfzcxrFe5HwMt2TuR3ZowiuwWQ8UL88Y234STpVh",
  "key20": "2W2BMSrzgWSiuRR9WNH8M9FaDMhGees91eSpQhbkHNd8WySdTV33PTabuZ25Sxr3TNMP9F4iYytDc3JresBcPR34",
  "key21": "3k8yTsD7cx7fbHPXgCzwy4QEeXRr1RXseqmTzQi8csxdigGMtWaCLDRv5WJrbKCu5gYNRR5wWv1XTDgPehzTh8Js",
  "key22": "dArsHHXM2w5CYrng7yfoEp639gWfyEZAwpp8myFsc7UMrG5erYEPqdLcDpnLKXRmyouyKVHck78fBRpWEiXCBxv",
  "key23": "28nQpjJp5EuuFV4RSSp4Vxja1vheVa89fo7g6qXvF9ydhZFRKTZCUyr5fzWHwupDS2eCrf6ybPeUFCBZo3ri3QBe",
  "key24": "2V6Ngtkqi9sLjChPWV3TjVgNHm5NJcG3GUfaui2ZeWTiesn6hdxgSN1obDgBwZg7yKCLgnikE9i1qsEp37TRK7of",
  "key25": "4trGCrreRRDcomjqau76aDw3YTBy8meVCwvUZMPnGkavhi7v8hqsuijfw8Ufefar2Xf6HckXmjxo9SzFjSVFs7nV",
  "key26": "kp4CTgPvL4yAHaYwyoghxooBCrDr6DvYfLpRhtKFo6xva7BFpf553BePPqwXpXnNHm8casQVa1KgxcYyEdoxV9d",
  "key27": "2MZLFAXidJYmFm2C1NGPDNW4Awun9rjeXV4eaVwviy3DMRFNMXymoUtjwMpTTEXHVGWRgqRe7wxmmRyFAerfR7mn",
  "key28": "2dVMM9smdhMDyroBUTFthPjGUZhxkSVB8pRV2Ue8yESJmHu1fU3tuDEJpgqmB1u74pkSTvFnA9o2esdJ9RMarKvB",
  "key29": "uFM8RNpvNnV8CFvJ7QoeGoh7dS1rZggkvyMspCD93VGurawTrEC82PVquh1HNVgPHJStHMiiKkVNSZbUQQjdtBz",
  "key30": "3F85BCNKGt4RwdUBRY4HvpvEPWKueGwLRwa89DxhtjiznHg12HayYo6Pka1eMyBzXW1QesJhDdsCob1DVz8yd6sa",
  "key31": "2zPbghtAjBdgT7QAyoZte1ptgodQbqLbqB57tzGuDkwSD1prou4MxCx7Vv4K3Zr6Rwh8x3CKv5dsWcwrjVYGEED8",
  "key32": "63S2wCgvocDatMMmjU3gEFTiH71umbu8Z8d7eN4FRYi8bygMdjWQQJHDz627f8XFS9LmfbWpbsQ2mVg5crdHgzuT",
  "key33": "4CGLNiRWiVxHxFmsjfPxhPBUGtRU9tLSw8rkSNMaEjrppR284sDBW9VJm7VG1P4H3TnKuHyhAuSYRBAcEV8qZ8c7",
  "key34": "5JUCG5ueRLj4H1qFUFNk552nZf4d5rbbVMVzufMmVHuDF2e84AfW4a1QUaFiLdqeanwZakRn5jGvWxP5nKpDLudZ",
  "key35": "qb7rwAZvHMPS83CoM9ewz7VbzZeU9569Uk7SZPspGL6V4vyomroWb2TqqYLdAwd42bCF3TJpLrg7tCwzrGFtnoe",
  "key36": "3QkMCNLfZXTSc6656WMmU7KqkopMLnWkXu4CnafqQ1hF3wKSMdfBmVPL7UXpzhhhjbJWJD53r1tgYYVeugr4D7HK"
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
