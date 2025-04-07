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
    "58xByFanVbZ58uaYrgWFdjNg784XacTyZaFf5JqWR356XJk6yLZWNzHnguvyRD87fZtRuyazmo8n5Z8CBNcxm5Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcdJPyuoEd1xv9GnogfETxAY4r7ppmyCjMZvwAbFXeZqVrgza2JpaV3AK1y1scmaJyBDZZg4KSFEwJJyxx41ofJ",
  "key1": "2kiMd9gTNr28g6znwQJrUqjUh32v7rUUPzPSJy1LeC89X4R3WHJQVQvV3xa9esCA55wYf9STqLX862TAmGjMo9FJ",
  "key2": "2EhiK4Ycokt3XmnBx81pVV24hMhLhp5FiP1vHcxY37zDUM8F6t1Gfg3eJ87j9Wez2JxHfLogEEEGM9MU6AJW9mTR",
  "key3": "4nFxXuavXBF3MAuwdivdxDfpgKzSuhBLX5LqZ7zbn6N3FKc6s3o3w8fKzhSf3KZVEbAbm6GbRTGg6WKESoH9RBzg",
  "key4": "3gTfqhEv48qJkvEmpNVePB4wjF1rEaANw1pLEy799PxCHh3W4qjryuJv2jSuBF7MMif733LUwGUekRVkTiqrf6Tf",
  "key5": "4Y5GnM6qBVFFVmJKS7cBYNA2iTNZ5rK3FNtYMEnffHTcS7P6WfwgRedvTkGPamqHggcg6e1ekQBkzp6SkFsX7K9P",
  "key6": "4HfQRHz1HyDZ3YjBRt9hTEPzhNcoFffSMjRN8Jb9zHtVSbNEkzdV83TSpGRwnQKeP1XQ472m9uEPLaLNrzwu4Ymh",
  "key7": "2m9vVmgphXaYTLUxXQXb5j7VCmQyMpD2F6jDKvCfxdF9n9qf34WEtunToEP2TvwphDjDz8ppUgaGgR2psDtT3DA4",
  "key8": "4g1213jk7HwAPEoYtsZx75TekaZWgiRWasKb4BsYyeTWWDVDjiAzvngN9Y2X1zhCsM8s5V4tvNTxNvhyqrhkVRSW",
  "key9": "3LGrYSoKFfW3CXNyMxVrERxt9sALeAEZVrVuDDXRRUG5w1D54u9XkggMZsuLASURzZtikU52aZWXS4UaNmvNBoLt",
  "key10": "nwEYbNn9GpUWF9B9N8hs3A776sT1DCgkoK111BcFN9d4zAD1qFKvxs77kghEQA93nkeML4Q7P5m1qc8iYHa4N6R",
  "key11": "2yPxAtKBnjfmR5RtQjdcM5KZaSVrpxAko8Z27NszUn1DXHXnyB6u7eVTypQPpJpvmm8HStQg3XFcFvH2LD2uWche",
  "key12": "3Q8kVEtHHyjZ7D46hWiYB9qSezHdxQimFZy7gdFTWsksmjeh8RKBZMvUZfTQXUuaiPuH7y73uBMXZhZ9nAnfvuP2",
  "key13": "4JCvYE5srwPUAotUoBm5wp2nhbJJjoYoecvYU9DFgp6aXficJsbsMxoBpDpSBpY8L2F9am7aQ7huSqYDLgVb7oz3",
  "key14": "4PgYFF73o3JkEGPRfiaqBUta6UuqydHGdtYs17VTYYsxwMAg1BiotHvcTjVm4QQZJjWJ8f2fM9upACVYDHYxhMe4",
  "key15": "3RumFRZgdzKnf5RFXYzVfdquxB6EU4Az4tUXkLdpMwMWgMYPEvH9DYyvsS8oq1FXtzPd4TMz1c7G7kXtjVqHzoZv",
  "key16": "34uqy2QsRkrp55tF3BEU2prabja5MjTQhgAd7oTZNiB1WEwq9kdtNE3ojnRSjxRTZMzk9s3B1qgAJkUqYFkZGdVL",
  "key17": "5phTPfpixA1UxM5oGVR57PrdKNLzuddRubuXECJUw1HGw1MFPgyHoX5LfC5UW3XanGS1L4riEB91b1ctRJBvQocy",
  "key18": "eYCKMhP1WejpToMmvX5DTysL8HxP31He4GnVuRAQE29ahNTPGAEzUVkDdVcwEGiaBbtS3e5Zj211CCsrZSVtPA4",
  "key19": "4CyLJPNBSgD4ncRMYXMQcJWUST2DHPLBZwrG5ASZmirJQ62BXjbjvTcaU3KT9SXWii2Q5r2yQZhwbroJK871DoPE",
  "key20": "236B7r3EK2RGf9siVDwA7WDCY4LPirYSMUmRdczTqeoWPCAX3WAYnRAUshHf6bde9WrD1xdPb7AMiRanKxNPA238",
  "key21": "2tfGmU7ZUmjTcdTNvGhFadGBj5m5BfTKPAaxY84T4wcPTpnoGox86fPZ1bw8u1SEZzDXKDkHdv4YjCerq3hiEa6G",
  "key22": "2NCHxLzWwdo2MgQChhm6pKjA5Btd1xX5WCobByWqPzFkXugCpQwcEJPby6rfQw6ufoY43CULCoVHeQnbGMwNPnrz",
  "key23": "3rBKGfTq8BrsBFuv3x8J4YtNV2NB5K1VQb7eSdEgRcMhpNxyW9Cf4WFFfW5qSK5bWJHZn5W8ZEgHzySoXi4FqtG6",
  "key24": "2kDEiihgBF2tDT5MpxaotSM5dfqCCif5uFrHKCrFhDXbpvRe59n6k6FyaU88KpkvLFHpvQmRjkKkTT8DzopCJTYk",
  "key25": "2cetyiy9eTKeLBKSVafQkcVdcDovrA6tRcr9XG7kgZZ4quY7WE5XbFzSdEC8pUnT9XeT8fGYBTGA2GEft48xepjk",
  "key26": "4wrH3fXGDsUL7geporXT5f37TWf2FPfkA4NpxY63a1yTQgPQDRqBFW1Fi9SmHQwrcr7cVGNRFQvNbtKfEGREyaC8",
  "key27": "wMscXHQSuia8tKY1wtCZCwn2DU9XCUMXMaeXhYhN9B3iTxmupCeShWDZrDGrSh2QQDxtRazoxTY8X7mVBjQewU8"
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
