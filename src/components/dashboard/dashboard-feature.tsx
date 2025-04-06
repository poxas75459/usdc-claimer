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
    "3cFyTNJHZUeX2mxWgzgM9JmBmTirXKtyxSpJVRnYqZejbZY9qzsbqPT47GZnCzDRhGjjgSoDx6yLs1Kn2n85vQXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rMHmb9Nx1HM9wd6XmcvSuww6bm8c4z6jCnHA9kbSGeqNytyE5Ed1DJxQzeGxsYEHa4FWuB64g5vEtodRfzFQPTD",
  "key1": "4cHc6gvNNYy1pVkVHYgXHycn7HxXXFD8kBCdveCJQ2vp9roJYN3ZvqWUAzamnNYjqS3ybiPLnw8X5X2KxLrYmqXx",
  "key2": "4jTwqmyz7UY5DsFZjZEBrBL9kXgcA1yywFt7ThEfetE3U2PeE8WGWUL4WEDjC2ELzjry4Tr8EWc4BA7ZTaeHcmU8",
  "key3": "28DEgF8CrwoY8tPNe3ieRztJoRD33WuQdVH9ucrGYw9G8FhfvMfASAtx8pqzPeHzfqNckeFo4BQhEouAC3SaAcBW",
  "key4": "4jKqCasVC51sij5Yuvi4ki64cd56gUi7B5NrnU5aYdci5iwmP2FMk6VcyizDcNVgfMzr2yahmYxXM2YWs57D2zr8",
  "key5": "2UAXaxWiGHEasmToyixVc6RSXfnB8EKJkusS43aHBgXytEbAGAuE18VwhSQcjh4xBkCswm5Vj2quvxCMwDyhuCeS",
  "key6": "3b66SvNKKxSZVpCJRGiUvm8r3yz3tNJf8ShJn9m1N8VD1TJbfsPM8XBkj3LHwvaaLSS3Xycra85TmBonTeF6UkvR",
  "key7": "4FoihrpzjJxUoNqP94UvoQ4CVxHBpysB5DtBWAhJCeoFyeoqeVGn3pRm72z8hhNeNnde4oLgbdmdEN6RiYNorfBP",
  "key8": "JYPS18sx6i5QghxNo8m3td5qmUbE6RkGg7vNPHT38MMgZhRbi9gALr7J1DdBPP1FCFbi1zbTFKH76BzcAmcJRPP",
  "key9": "2DcZ9WbaAhab9Z1gBUAtQi5ppDsEFgucp8xAWNUKzczVmRAZYTtPu4GHjrPgYm5jNspASQNsywwvCX7fCTkpE4kA",
  "key10": "7Pnhmmpsus7NukrUHiaiwGVKoJ9qWB2uVF9m5CeyJk39ECZa9crrKBRDeEMhy9jUXbYEHLq5Q92upzEHZwS9aJH",
  "key11": "8Sg4tB1ncwvGeC6dgXxBEbso1Q5KmU86GQVJxH3zoxCzKr9zBFQzmK3B36aZvybRc61Ku6tpiKoVB5TtpA4TeP7",
  "key12": "36MZZ8yuD4zRZ2kyChYuVTHemLQvwV4DNXFutPxFaRZNF3zNbSNabmWQGJ1JURcbGonyoS9R7pLF2LhgL9xRaH9U",
  "key13": "2ZW8hVy5es9Fzcy8qYFX7wQduzwGYBXsY1xfRLXNhZ7UdEtgRqFrSmctFeuNnYxqyw9sDssf1NqMpXDCki6rDue5",
  "key14": "5mW7uXfe54ro4hLoSp5A31ZB3RvYkUX1ZowwNGPT6qh4wjPADVf3MNFMRrGWadPxRw3DYL6awr6Wd5RhDwRuh5vn",
  "key15": "4hrTn5dw7aEkBT4JxFpCcXAsko8YLhnZdSHG3KBe84fUeXgLNiPHxQ9dhGzsChNpNQqPD7cZZSRegjtrBUC54613",
  "key16": "X71FHKE6rJikA3EwW1WXPL3oZHWnfzrXWQWxRgPoHLgbeTiPkJeZPud6Wibx1KBT1DfhoPsh6K6tM4Pz5nvmUSo",
  "key17": "kvDd9g5gUnHLfhxxJMDqkZjyFMW7RqKE5zd5e1ZZWTJT5whvq9VdNuyqhHRexpectmpDUDmhnpy3GqDYHsjHYCw",
  "key18": "2NdGdYSbWNVgves7ZAvkoeHRocSSsRkanQm9zn8gykw5hwKusMLxTuWtsHawRmfSmhzh5vyzZmn9N4s8hXMciS9G",
  "key19": "4naQQ4UZBwj4CnyNaRiDUDJVx9eQr5JNMEV5Mj5eVkpBEyACroYZgg6bT4VVMSXY3JvLSVwWXC63hV16kVcudynt",
  "key20": "5drKNFbEfnNifNkoot5PM6BCj5vuieix6qU4Z7gDVJeAqmEJY5JKyWGiJsC4zZJa3C775Ku49DTdT6D36HPVbqhQ",
  "key21": "4KXb6d3xpMn6vKrMyZAHqgdo2yoq7GcGVDaBk86y6Z3JSyTsxuKwfnt4V3DsbdCrzeVXnnHzPQbakiG5S9dYHWxZ",
  "key22": "5UKZpQQAy6h8k1tynnsh4kYXMMKXS7zENwZYvLjMdbpFdNFavQ2fBxfDaG84hgWoB2A1miVuJcbi8a8Dzpdo4kot",
  "key23": "3ghuHsjC4Le4gPLPRkiAW27s4y6w6mRbbWsjNij4wupBdPsrrPLLZiYAZzvBiMugmgGrjj2J523YFGgKfBU2vdU",
  "key24": "65Po8A8K4zXAm9nMEohtpemh68kGCuj757PFp8cfn31FvAvVmn8L82FHM8KcEi9pQpLssoZno8xiWZC5f1DBoeLW",
  "key25": "bwqUpHKzp6e9kAF29zKjUctoANaANSPBv9whJt2m9QJJhvX81zJJWfziB25n6fsWLkgPTXa7zaDfWk3dyCmqSaz",
  "key26": "RLjt6v9tGLJ4DTRMapECdvAAanJFibJQQrUostPVFQFzSV3GdjqQRSQx66M41SsBNbHD4Kt3qDjU14AVeehySRz",
  "key27": "4QkLHHizQf5zAZKGbFgZnDTGEnggcUxXb39QouW5cfb2CXxnkqrsw4ttgKFFR8CyPR8KPmD1Ugk5JvvsQfBkMr2P",
  "key28": "4t4rHFAhw6pwMrTXrav36xa8Q4F8wy5UwTKRzauQeojY7EMXjqVxk9NaEuejRmKmKjgnT63wDFz5CF2uEa9WC4hh",
  "key29": "4sexiZc4qBAVupc6anGdAv15ypGxo3ohdDeJa8nPhmwWGCsJtYp1ZrzcUDVavWo3vTabNBaurBGE53RTUfQAn3pC",
  "key30": "26t6z4j2SePnt4Jrjv4F47QNNCjEDM5jfK1ZeaeXkTTjmTGaHX7JECUaXEfUZXWTqAysSehs86PkyodXFuVaFM2B",
  "key31": "46ei9VT4YPLwW2AL2tCnMyPrBe5RaMmvrSvbY1ZnyrJpanM3qscg5CTESDCqe96teqKvQKKUEbt9E4NbAmpPcPJy",
  "key32": "5h5E3yoHgn9vtVKEquJRfopyRTkXfniNwAkv6FjWsowj3keA2bSqhnqcQUdG5GkbnBTwZEBLhFJAka4gXgQJ49aT",
  "key33": "2A4zUgJqMbUYs4QVostjEQS5foiNaPN8F6Fzh18tyM8qB2NXHmDRmTPyM9gwYZtDLE93q3Hrvt5UgJZ4RJiBnnCw",
  "key34": "4Wamm61LrhaFuex6Boigr4uxgtJdLVjBPyZhU1i3K74XB3S8CEctXRXUViUyiJYzhnzeBG6siFcc4ybWmzZVLP3N",
  "key35": "45nqTacgcWmeLobWof2Pm33qxTmGWqBwCcG8rYevvC7oc8w9dEi81e2zsHPFqESEMhhZHHm1jTrZNWLRytxW98sc",
  "key36": "L6Gd1mmV35fMQcKrLfLbSUGz4yyBiNBhDwRJ3VS6MyYG6LYuVQkWmfbViyV9Bv75VjztbsjEswhBgqwM3doWyAj",
  "key37": "4J4a2kBBKGUrR4FYNLFUnDWgS1ELsXfUHGNC8uUbn7BfBJ2TXFftyN4EBkJxvcj9jHfyBm8SSUmquZwQD42WRVAp",
  "key38": "3DHHozjYoybjjpRSxM5JT8bi59N73uarUZP2bWvDVCzmad8qVSZLTQfdGRTAKzBJ6hR2Ht7FnZxEafpmEiaLi3Fx",
  "key39": "2A5P2UrLK1ujj8a6XTDHg8UeyHczd5mrEWGk9SmE579fHVnHQNmB7Q15kwKCTQWCezghkgDTuo8dxDqFS7Lfrbey",
  "key40": "3D5HRPpvke2qSJkCtQjokPUt9YXvNPc9kgQocK72THrPT1omF7LYGd1LysR9B1BpTyJcspLLpAGnmBxs24rwzTHP",
  "key41": "27WNhvmZb9Bpo8Kz3Ugsnk7T5Z9W6rLyiFaXS6qBejE1ALZp3qMqj3HD9mELUbwbkqhNaLYSjx6bX4d79Go7bHnj",
  "key42": "xyYzQkecDuQi2H55fd7aGM8L7CAXMZMjWmm9HtJisbcKbSssvzqydZ7ee1bEVyck6TWVG92FUAeVxjUeNDaqam8",
  "key43": "5WPiprQTSjVV2NtFDuMrXnvdv3kAzZUVRM1hGvum4vvEqFXUV6bY6iYuxwddfkoTNYKawEZrZLQ39JdBXNAEmHq4"
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
